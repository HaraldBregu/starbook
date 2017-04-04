import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { JoinService } from '../../shared/join.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html'
})
export class RecruiterComponent implements OnInit {
  public page = '';
  public Recruiter = {
    firstname : null,
    lastname: null,
    phone: null,
    email: null,
    type: ''
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

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private joinService: JoinService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.page = params['page']
      window.scrollTo(0, 0);
      console.log('this page is:' + this.page);
      if (this.page === 'workerjoin') {
        this.navigationService.updateMessage("Lavoriamo insieme");
      } else if (this.page === 'partnerjoin') {
        this.navigationService.updateMessage("Diventa partner con noi");
      } else {
        this.router.navigate(['']);
      }
    })
  }

  joinAsWorker() {
    if (this.recruiter_state.loading) {return;}
    if (!this.Recruiter.firstname || !this.Recruiter.lastname || !this.Recruiter.phone || !this.Recruiter.email) {
      this.recruiter_state.message_error = "Per favore inserisci tutti i campi richiesti";
      this.recruiter_state.firstname_error = "Nome";
      this.recruiter_state.lastname_error = "Cognome";
      this.recruiter_state.phone_error = "Il numero del telefono";
      this.recruiter_state.email_error = "La tua email";
      // console.log('Recruiter object is: ' + JSON.stringify(this.Recruiter));
      return;
    }
    this.recruiter_state.loading = true;
    this.recruiter_state.message_success = null;
    this.recruiter_state.message_error = null;
    this.recruiter_state.firstname_error = null;
    this.recruiter_state.lastname_error = null;
    this.recruiter_state.phone_error = null;
    this.recruiter_state.email_error = null;
    this.Recruiter.type = "professionista";
    this.joinService.join(this.Recruiter).then((response) => {
      // console.log('response: ' + JSON.stringify(response));
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
  joinAsPartner() {
    if (this.recruiter_state.loading) {return;}
    if (!this.Recruiter.firstname || !this.Recruiter.lastname || !this.Recruiter.phone || !this.Recruiter.email) {
      this.recruiter_state.message_error = "Per favore inserisci tutti i campi richiesti";
      this.recruiter_state.firstname_error = "Nome";
      this.recruiter_state.lastname_error = "Cognome";
      this.recruiter_state.phone_error = "Il numero del telefono";
      this.recruiter_state.email_error = "La tua email";
      // console.log('Recruiter object is: ' + JSON.stringify(this.Recruiter));
      return;
    }
    this.recruiter_state.loading = true;
    this.recruiter_state.message_success = null;
    this.recruiter_state.message_error = null;
    this.recruiter_state.firstname_error = null;
    this.recruiter_state.lastname_error = null;
    this.recruiter_state.phone_error = null;
    this.recruiter_state.email_error = null;
    this.Recruiter.type = "partner";
    this.joinService.join(this.Recruiter).then((response) => {
      // console.log('response: ' + JSON.stringify(response));
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
