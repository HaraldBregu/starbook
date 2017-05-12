import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ContactService } from '../../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public page = '';
  public emailPattern: any;
  public numPattern: any;

  public Email = {
    subject: null,
    message: null
  }

  public Recruiter = {
    firstname : null,
    lastname: null,
    phone: null,
    email: null,
    message: null
  }
  public recruiter_state = {
    loading: false,
    message_success: null,
    message_error: null,
    firstname_error : null,
    lastname_error: null,
    phone_error: null,
    email_error: null
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private contactService: ContactService) {
      this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.navigationService.updateMessage("Contattaci");
      
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (isBrowser) {window.scrollTo(0, 0);}
      this.page = params['page']
      if (this.page === 'partner') {
        this.navigationService.updateMessage("Diventiamo partner");
      } else {
        this.router.navigate(['']);
      }
    })
  }

  joinPartner() {
    if (this.recruiter_state.loading) {return;}
    if (!this.Recruiter.firstname || !this.Recruiter.lastname || !this.Recruiter.phone || !this.Recruiter.email) {
      this.recruiter_state.message_error = "Per favore inserisci tutti i campi richiesti";
      this.recruiter_state.firstname_error = "Nome";
      this.recruiter_state.lastname_error = "Cognome";
      this.recruiter_state.phone_error = "Il numero del telefono";
      this.recruiter_state.email_error = "La tua email";
      return;
    }
    this.recruiter_state.loading = true;
    this.recruiter_state.message_success = null;
    this.recruiter_state.message_error = null;
    this.recruiter_state.firstname_error = null;
    this.recruiter_state.lastname_error = null;
    this.recruiter_state.phone_error = null;
    this.recruiter_state.email_error = null;

    this.Email.subject = "Richiesta partnership"
    this.Email.message =
    'Nome: ' + this.Recruiter.firstname +
    '<br>Cognome: ' + this.Recruiter.lastname +
    '<br>Telefono: ' + this.Recruiter.phone +
    '<br>Email: ' + this.Recruiter.email +
    '<br>Message: ' + this.Recruiter.message

    this.contactService.sendEmail(this.Email).then((response) => {
      this.recruiter_state.message_success = "Complimenti, hai inviato una richiesta di iscrizione su Starbook con successo.";
      this.recruiter_state.loading = false;
      this.Recruiter.firstname = null;
      this.Recruiter.lastname = null;
      this.Recruiter.phone = null;
      this.Recruiter.email = null;
    }).catch((error) => {
      this.recruiter_state.loading = false;
      this.Recruiter.firstname = null;
      this.Recruiter.lastname = null;
      this.Recruiter.phone = null;
      this.Recruiter.email = null;
      // console.log('error: ' + JSON.stringify(error));
    });
  }
}
