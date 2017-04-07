import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { JoinService } from '../../shared/join.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html'
})
export class RecruiterComponent implements OnInit {
  public page = '';
  public emailPattern: any;
  public numPattern: any;

  ////////////////////////////
  /////// Recruiter //////////
  ////////////////////////////
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

  //////////////////////////
  /////// Signup  //////////
  //////////////////////////
  public Signup = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public signup_state = {
    loading: false,
    button_title: "Registrati",
    message_success: null,
    message_error: null,
    email_error: null,
    first_name_error: null,
    last_name_error: null,
    phone_error: null,
    password_error: null,
    confirm_password_error: null
  };

  /////////////////////////
  /////// Share  //////////
  /////////////////////////
  public contacts = '';
  public sharelink = '';
  public currentUser;

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private joinService: JoinService, private authService: AuthService) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.numPattern = /^\d+$/;
    if (localStorage.getItem('auth')) {
      this.currentUser = JSON.parse(localStorage.getItem('auth'));
      // console.log('host: ' + document.location.protocol + '//'+ document.location.hostname + '/?affiliato=' + '3324r4gr');
      this.sharelink =  document.location.protocol + '//'+ document.location.hostname + '/?ref=' + this.currentUser._id;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.page = params['page']
      window.scrollTo(0, 0);
      if (this.page === 'workerjoin') {
        this.navigationService.updateMessage("Lavoriamo insieme");
      } else if (this.page === 'partnerjoin') {
        this.navigationService.updateMessage("Diventa partner con noi");
      } else if (this.page === 'share') {
        this.navigationService.updateMessage("Programma di affiliazione");
        if (!this.currentUser) {
          this.router.navigate(['']);
        }
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

  /////////////////////////
  /////// Share  //////////
  /////////////////////////
  sendInvitations() {
    var phone_numbers = [];
    var email_addresses = [];
    var strings = this.contacts.split(',');
    for (var i = 0; i < strings.length; i++) {
      var string = strings[i];
      string = string.replace(/\s/g, '');
      if (this.emailPattern.test(string)) {
        email_addresses.push(string);
      } else if (this.numPattern.test(string)) {
        phone_numbers.push(string);
      }
    }
    // console.log('email_addresses are: ' + email_addresses);
    // console.log('phone_numbers are: ' + phone_numbers);
    // console.log('sendInvitations: ' + this.contacts);
  }
  shareOnFacebook() {
    let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.sharelink,
    '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    return false
  }
  shareOnTwitter() {
    let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    window.open("https://twitter.com/home?status=" + this.sharelink,
    '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    return false
  }
  shareOnLinkedin() {
    let link = this.sharelink;
    let title = "Titolo";
    let summary = "Summary";
    let source = "";
    let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source,
    '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    return false
  }
  shareOnGoogle() {
    let link = this.sharelink;
    let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    window.open("https://plus.google.com/share?url=" + link,
    '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    return false
  }
  shareWithEmail() {
    let subject = "Ciao, questo è una mail"
    let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    window.open("mailto:?Subject=" + subject,
    '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    return false
  }
  copyLink() {
    console.log('copyLink');
    // Object.assign({}, 'copyLink link  link');
    // var successful = document.execCommand('copy');
    // window.prompt("Copy to clipboard: Ctrl+C", text);
    // window.prompt("Copy to clipboard: Ctrl+C", 'this is a texts');
  }


  // joinAsPartner() {
  //   if (this.signup_state.loading) {return;}
  //   if (this.Signup.email.length > 0 && this.Signup.firstname.length > 0 && this.Signup.lastname.length > 0 && this.Signup.phone.length > 0 && this.Signup.password.length > 0 && this.Signup.confirmPassword.length > 0) {
  //     if (this.Signup.password !== this.Signup.confirmPassword) {
  //       this.signup_state.password_error = null;
  //       this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
  //       return;
  //     } else {
  //       this.signup_state.password_error = null;
  //       this.signup_state.confirm_password_error = null;
  //     }
  //     if (!this.emailPattern.test(this.Signup.email)) {
  //       this.signup_state.email_error = "Inserisci un indirizzo email corretto";
  //       return;
  //     }
  //   } else {
  //     if (this.Signup.email.length === 0) {
  //       this.signup_state.email_error = "Inserisci un indirizzo email";
  //     } else if (this.Signup.email.length > 0 && !this.emailPattern.test(this.Signup.email)) {
  //       this.signup_state.email_error = "Inserisci un indirizzo email corretto";
  //     } else {
  //       this.signup_state.email_error = null;
  //     }
  //     if (this.Signup.firstname.length === 0) {
  //       this.signup_state.first_name_error = "Inserisci un nome";
  //     } else {
  //       this.signup_state.first_name_error = null;
  //     }
  //     if (this.Signup.lastname.length === 0) {
  //       this.signup_state.last_name_error = "Inserisci un cognome";
  //     } else {
  //       this.signup_state.last_name_error = null;
  //     }
  //     if (this.Signup.phone.length < 9) {
  //       this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
  //       if (this.Signup.phone.length === 0) {
  //         this.signup_state.phone_error = "Inserisci un numero di telefono";
  //       }
  //     } else {
  //       this.signup_state.phone_error = null;
  //     }
  //     if (this.Signup.password.length === 0) {
  //       this.signup_state.password_error = "Inserisci una password";
  //     } else {
  //       this.signup_state.password_error = null;
  //     }
  //     if (this.Signup.confirmPassword.length === 0) {
  //       this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
  //     } else {
  //       this.signup_state.confirm_password_error = null;
  //     }
  //     if (this.Signup.password.length > 0 &&
  //       this.Signup.confirmPassword.length > 0
  //       && this.Signup.password !== this.Signup.confirmPassword) {
  //       this.signup_state.password_error = null;
  //       this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
  //     }
  //     return;
  //   }
  //   this.signup_state.loading = true;
  //   this.signup_state.button_title = "Registrando...";
  //   this.authService.signup(this.Signup.firstname, this.Signup.lastname, this.Signup.phone, this.Signup.email, this.Signup.password).then((data) => {
  //     this.navigationService.updatePersonalMenu(data);
  //     this.signup_state.message_error = null;
  //     this.signup_state.loading = false;
  //     this.signup_state.button_title = "Registrando...";
  //   }).catch((error) => {
  //     this.signup_state.loading = false;
  //     this.signup_state.button_title = "Registrati";
  //     switch (error) {
  //       case 409:
  //       this.signup_state.message_error = "Questo indirizzo email è gia in uso. Prova ad accedere.";
  //         break;
  //       case 422:
  //       this.signup_state.message_error = "Inserisci tutti i campi richiesti";
  //         break;
  //       case 404:
  //       this.signup_state.message_error = "C'è stato un errore sconosciuto, per favore riprova più tardi";
  //         break;
  //       default:
  //       this.signup_state.message_error = null;
  //     }
  //   });
  // }
}
