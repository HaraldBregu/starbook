import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { AnalyticsService } from '../../shared/analytics.service';
import { AuthService } from '../../shared/auth.service';
import { Location } from '@angular/common';
import { ContactService } from '../../shared/contact.service';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public page = '';
  public emailPattern: any;
  public email_verification = {
    title: 'Verificando la tua email',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public password_verification = {
    title: 'Verificando la nuova password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public new_password_creation = {
    title: 'Inserisci una password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    password_field: {
      title:'Crea una password sicura',
      value: '',
      visible: true
    },
    button: {
      title : 'Crea password',
      visible: true
    },
    code: ''
  }

  /////////////////////////
  /////// LOGIN  //////////
  /////////////////////////
  public loginParameters = {
    email: '',
    password: ''
  };
  public login_state = {
    loading: false,
    button_title: "Accedi",
    error_message: null,
    email_error: null,
    password_error: null,
  };
  //////////////////////////
  /////// Signup  //////////
  //////////////////////////
  public signupParameters = {
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
    error_message: null,
    email_error: null,
    first_name_error: null,
    last_name_error: null,
    phone_error: null,
    password_error: null,
    confirm_password_error: null
  };
  ///////////////////////////
  /////// FACEBOOK //////////
  ///////////////////////////
  public facebook_state = {
    loading: false,
    button_title: "Continua con Facebook",
    error_message: null,
  }

  public profession = '';
  public currentUser;
  public seoObject = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService,
    private profileService: ProfileService,
    private analyticsService: AnalyticsService,
    private authService: AuthService,
    private seoService: SeoService,
    private _location: Location,
    private contactService: ContactService) {
      this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      if (isBrowser) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      }
      this.navigationService.updateMessage('');

      this.route.params.subscribe(params => {
        this.page = params['page']
        this.route.queryParams.subscribe((params: Params) => {
          if (this.page === 'login') {
            // this.navigationService.updateMessage('Accedi al tuo account');
            this.seoObject['title'] = "Iscriviti a Starbook";
            this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";

            if (this.currentUser) {this.router.navigate(['']);}
          } else if (this.page === 'signup') {
            // this.navigationService.updateMessage('Crea un nuovo account');
            this.seoObject['title'] = "Iscriviti a Starbook";
            this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";

            if (this.currentUser) {this.router.navigate(['']);}
          } else if (this.page === 'password_recovery') {
            // this.navigationService.updateMessage('Recupera la tua password');
            this.seoObject['title'] = "Iscriviti a Starbook";
            this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";
            if (this.currentUser) {this.router.navigate(['']);}
          } else if (this.page === 'professional') {
            // this.navigationService.updateMessage('Iscriviti come professionista');
            this.seoObject['title'] = "Registra la tua attività gratuitamente";
            this.seoObject['description'] = "Lavori nel mondo dell'edilizia, idraulica, sei un elettrico e esegui lavori particolari artigianali nelle case? Unisciti a noi e collaboreremo per aumentare la professionalità e la clientela in modo smart.";

            if (this.currentUser) {this.router.navigate(['']);}
          } else if (this.page === 'email_verification') {
            // this.navigationService.updateMessage('Verifica della email');

            var code = params['code']
            if (!code) {
              // this.goToHomePage()
            } else {
              this.email_verification.spinner.visible = true;
              this.profileService.verifyEmail(code)
              .then((object) => {
                this.email_verification.title = 'Email verificato!';
                this.email_verification.spinner.visible = false;
                this.email_verification.success.visible = true;
                this.email_verification.button.visible = true;
              })
              .catch((error) => {
                this.email_verification.title = 'Errore verifica email!';
                this.email_verification.spinner.visible = false;
              });
            }
          } else if (this.page === 'password_verification') {
            // this.navigationService.updateMessage('Verifica della nuova password');

            var code = params['code']
            if (!code) {
              this.router.navigate(['']);
            } else {
              this.password_verification.spinner.visible = true;
              this.profileService.verifyNewPassword(code)
              .then((object) => {
                this.password_verification.title = 'Nuova password verificata!';
                this.password_verification.spinner.visible = false;
                this.password_verification.success.visible = true;
                this.password_verification.button.visible = true;
              })
              .catch((error) => {
                this.password_verification.title = 'Errore verifica password!';
                this.password_verification.spinner.visible = false;
              });
            }
           } else if (this.page === 'create_new_password') {
            //  this.navigationService.updateMessage('Crea una nuova password');
             var code = params['code']
             if (!code) {
               this.router.navigate(['']);
               return;
             }
             this.new_password_creation.code = code;
           } else {
             this.router.navigate(['']);
           }
        });
      })

      this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
      this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";

      this.seoService.setTitle(this.seoObject['title']);
      this.seoService.setMetaElem('description', this.seoObject['description']);
      this.seoService.setOgElem('twitter:card', "summary_large_image");
      this.seoService.setOgElem('twitter:title', this.seoObject['title']);
      this.seoService.setOgElem('twitter:site', "@starbookco");
      this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
      this.seoService.setOgElem('twitter:description', this.seoObject['description']);
      this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
      this.seoService.setOgElem('og:title', this.seoObject['title']);
      this.seoService.setOgElem('og:description', this.seoObject['description']);
      this.seoService.setOgElem('og:url', this.seoObject['url']);
      this.seoService.setOgElem('og:image', this.seoObject['image_url']);
      this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);
    }

  ngOnInit() {

  }

  login() {
    if (this.login_state.loading || this.facebook_state.loading) {return;}
    if (this.loginParameters.email.length === 0 ||
      this.loginParameters.password.length === 0) {
      if (this.loginParameters.email.length === 0) {
        this.login_state.email_error = "Inserisci un indirizzo email";
      } else {
        this.login_state.email_error = null;
      }
      if (this.loginParameters.password.length === 0) {
        this.login_state.password_error = "Inserisci una password";
      } else {
        this.login_state.password_error = null;
      }
      return;
    }
    this.login_state.loading = true;
    this.login_state.button_title = "Accedendo...";
    this.authService.login(this.loginParameters.email, this.loginParameters.password).then((data) => {
      this.login_state.loading = false;
      this.login_state.button_title = "Accedi";
      this.login_state.error_message = null;
      this.router.navigate(['']);
      }).catch((error) => {
        this.login_state.email_error = null;
        this.login_state.password_error = null;
        this.login_state.loading = false;
        this.login_state.button_title = "Accedi";
        switch (error) {
          case 404:
          this.login_state.error_message = "Non esiste un account con questa mail! Crea un nuovo account."
            break;
          case 401:
          this.login_state.error_message = "La password non è corretta!"
            break;
          default:
        }
      });
  }
  signup() {
    if (this.signup_state.loading || this.facebook_state.loading) {return;}
    if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
      if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
        return;
      } else {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = null;
      }
      if (!this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
        return;
      }
    }
    else {
      if (this.signupParameters.email.length === 0) {
        this.signup_state.email_error = "Inserisci un indirizzo email";
      } else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
      } else {
        this.signup_state.email_error = null;
      }
      if (this.signupParameters.firstname.length === 0) {
        this.signup_state.first_name_error = "Inserisci un nome";
      } else {
        this.signup_state.first_name_error = null;
      }
      if (this.signupParameters.lastname.length === 0) {
        this.signup_state.last_name_error = "Inserisci un cognome";
      } else {
        this.signup_state.last_name_error = null;
      }
      if (this.signupParameters.phone.length < 9) {
        this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
        if (this.signupParameters.phone.length === 0) {
          this.signup_state.phone_error = "Inserisci un numero di telefono";
        }
      } else {
        this.signup_state.phone_error = null;
      }
      if (this.signupParameters.password.length === 0) {
        this.signup_state.password_error = "Inserisci una password";
      } else {
        this.signup_state.password_error = null;
      }
      if (this.signupParameters.confirmPassword.length === 0) {
        this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
      } else {
        this.signup_state.confirm_password_error = null;
      }
      if (this.signupParameters.password.length > 0 &&
        this.signupParameters.confirmPassword.length > 0
        && this.signupParameters.password !== this.signupParameters.confirmPassword) {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
      }
      return;
    }
    this.signup_state.loading = true;
    this.signup_state.button_title = "Registrando...";
    this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.signup_state.error_message = null;
      this.signup_state.loading = false;
      this.signup_state.button_title = "Registrati";
      this.router.navigate(['']);
    }).catch((error) => {
      this.signup_state.loading = false;
      this.signup_state.button_title = "Registrati";
      switch (error) {
        case 409:
        this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
          break;
        case 422:
        this.signup_state.error_message = "Inserisci tutti i campi richiesti";
          break;
        case 404:
        this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
          break;
        default:
        this.signup_state.error_message = null;
      }
    });
  }
  recoverPassword(email) {
    this.authService.recovery(email).then((status) => {
      this.router.navigate(['']);
    }).catch((error) => {
      this.router.navigate(['']);
    });
  }
  signupAsProfessional() {
    if (this.signup_state.loading || this.facebook_state.loading) {return;}
    if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
      if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
        return;
      } else {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = null;
      }
      if (!this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
        return;
      }
    } else {
      if (this.signupParameters.email.length === 0) {
        this.signup_state.email_error = "Inserisci un indirizzo email";
      } else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
      } else {
        this.signup_state.email_error = null;
      }
      if (this.signupParameters.firstname.length === 0) {
        this.signup_state.first_name_error = "Inserisci un nome";
      } else {
        this.signup_state.first_name_error = null;
      }
      if (this.signupParameters.lastname.length === 0) {
        this.signup_state.last_name_error = "Inserisci un cognome";
      } else {
        this.signup_state.last_name_error = null;
      }
      if (this.signupParameters.phone.length < 9) {
        this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
        if (this.signupParameters.phone.length === 0) {
          this.signup_state.phone_error = "Inserisci un numero di telefono";
        }
      } else {
        this.signup_state.phone_error = null;
      }
      if (this.signupParameters.password.length === 0) {
        this.signup_state.password_error = "Inserisci una password";
      } else {
        this.signup_state.password_error = null;
      }
      if (this.signupParameters.confirmPassword.length === 0) {
        this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
      } else {
        this.signup_state.confirm_password_error = null;
      }
      if (this.signupParameters.password.length > 0 &&
        this.signupParameters.confirmPassword.length > 0
        && this.signupParameters.password !== this.signupParameters.confirmPassword) {
        this.signup_state.password_error = null;
        this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
      }
      return;
    }
    this.signup_state.loading = true;
    this.signup_state.button_title = "Registrando...";
    this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.signup_state.error_message = null;
      this.signup_state.loading = false;
      this.signup_state.button_title = "Registrando...";
      var message =
      'Nome: ' + this.signupParameters.firstname +
      '<br>Cognome: ' + this.signupParameters.lastname +
      '<br>Telefono: ' + this.signupParameters.phone +
      '<br>Email: ' + this.signupParameters.email +
      '<br>Message: ' + this.profession
      this.sendEmail('Registrazione come professionista', message)
      this.router.navigate(['']);
    }).catch((error) => {
      this.signup_state.loading = false;
      this.signup_state.button_title = "Registrati";
      switch (error) {
        case 409:
        this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
          break;
        case 422:
        this.signup_state.error_message = "Inserisci tutti i campi richiesti";
          break;
        case 404:
        this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
          break;
        default:
        this.signup_state.error_message = null;
      }
    });
  }

  continueWithFacebook () {
    this.analyticsService.sendEvent({category:'Account', action: 'Continue with facebook', label: this.router.url});
    if (this.login_state.loading || this.signup_state.loading) {return;}
    this.facebook_state.loading = true;
    this.facebook_state.button_title = "Accedendo..."
    this.facebook_state.error_message = null;
    if (isBrowser) {
      let timeStart = Date.now();
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      let facebookPopup = window.open(
          'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
          // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://glacial-shore-66987.herokuapp.com/facebook',
          '_blank',
          'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      this.checkAccessToken(facebookPopup, 1, timeStart);
    }
  }
  checkAccessToken(facebookWindow: Window, context, timeStart) {
    if (facebookWindow.closed) {
      let accessToken = localStorage.getItem('facebook_token');
      this.authService.facebookLogin(accessToken).then((userData) => {
        this.navigationService.updatePersonalMenu(userData);
        this.facebook_state.loading = false;
        this.facebook_state.button_title = "Continua con Facebook";
        this.facebook_state.error_message = null;
      }).catch((error) => {
        this.analyticsService.sendException(error)
        this.facebook_state.loading = false;
        this.facebook_state.button_title = "Continua con Facebook";
        this.facebook_state.error_message = "Errore di accesso con Facebook!";
      });
    } else {
      let self = this;
      setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1, timeStart)}, 200);
    }
  }

  // EMAIL
  sendEmail(subject, message) {
    var email = {
      subject : subject,
      message : message
    }
    this.contactService.sendEmail(email).then((response) => {}).catch((error) => {});
  }

  createNewPassword(password) {
    this.new_password_creation.spinner.visible = true;
    this.profileService.createNewPassword(this.new_password_creation.code, password)
    .then((object) => {
      this.new_password_creation.title = 'Nuova password creata!';
      this.new_password_creation.spinner.visible = false;
      this.new_password_creation.success.visible = true;
      this.new_password_creation.button.visible = true;
    })
    .catch((error) => {
      this.new_password_creation.title = 'Errore creazione password!';
      this.new_password_creation.spinner.visible = false;
    });
  }

  ngOnDestroy() {
    if (isBrowser) {
    }
  }

  changeToSignup() {
    this.analyticsService.sendEvent({category:'Account', action: 'Change to signup', label: this.router.url});
    if (this.login_state.loading) {return;}
    this.router.navigate(['account/signup']);
  }
  changeToLogin() {
    this.analyticsService.sendEvent({category:'Account', action: 'Change to login', label: this.router.url});
    if (this.signup_state.loading) {return;}
    this.router.navigate(['account/login']);
  }
}
