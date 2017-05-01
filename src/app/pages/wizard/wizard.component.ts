import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import { OrderService, IAddress } from '../../order/order.service';
import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { PaymentService } from '../../shared/payment.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {
  public it: any;
  public emailPattern: any;
  public wizardDataItems = ['Sommario', 'Indirizzo', 'Data', 'Anteprima', 'Fine'];
  public formError: boolean|{title: string, message: string} = false;
  public step = '';
  public service_data;
  public screenWidth;

  ////////////////////////////
  //// ORDER OBJECT //////////
  ////////////////////////////
  public Order = {
    service_id: '',
    title: '',
    description: '',
    details: [],
    date: null,
    address: null,
    referral_id: null,
    price: {
      final: 0,
      initial: 0,
      currency: 'eur'
    },
    payment: {
      upfront:0
    },
    timing: {
      days: ''
    }
  };
  public order_status = {
    loading: false,
    button_title: "Invia ordine",
    error_message: null,
    payment_error_message: null,
    created: false
  };

  ///////////////////////////////
  //// CONFIRM ADDRESS //////////
  ///////////////////////////////
  public address = {
    street: null,
    street_number: null,
    city: null,
    postal_code: null,
    province: null,
    country: null,
    country_code: null
  };
  public temp_address;
  public temp_address_street_number_city;
  public address_state = {
    loading: false,
    error_message: null,
  };
  public addresses = [];

  ////////////////////////////
  //// CONFIRM DATE //////////
  ////////////////////////////
  public date = null;
  public temp_date;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public maxDate = new Date(new Date().getTime() + (24*28) * 60 * 60 * 1000);
  public formated_date = null;
  public date_state = {
    loading: false,
    error_message: null
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

  //////////////////////////
  /////// PROFILE //////////
  //////////////////////////
  public profileInformation = {
    phone_number: ''
  };
  public profile_info_state = {
    loading:false,
    button_title: "Salva",
    phone_number_error:null
  };

  //////////////////////////
  /////// PAYMENT //////////
  //////////////////////////
  public Card = {
    // object: 'card',
    number: null,
    exp_month: null,
    exp_year: null,
    exp_date: null,
    cvc: '',
    name: '',           // Nome intestatario
    address_line1: '',  // Via
    address_line2: '',  // Nr
    address_city: '',   // Città
    address_zip: '',    // CAP
    address_state: '',  // Provincia
    address_country: '' // Paese
  };
  public card_state = {
    loading: false,
    button_title: "Salva",
    message_error: null,
    message_success: null,
    number_error:null,
    exp_date_error: null,
    cvc_error: null
  }

  constructor(private router: Router, private route: ActivatedRoute, private analyticsService: AnalyticsService, private orderService: OrderService, private authService: AuthService, private navigationService: NavigationService, private paymentService: PaymentService, private profileService: ProfileService ) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
    if (isBrowser) {
      this.service_data = this.orderService.getWizardData();
      if (Object.keys(this.service_data).length===0) {
        this.Order = this.readOrderFromLocal()
        if (this.Order.address) {
          if (this.Order.address.street_number.length > 0) {
            this.temp_address = this.Order.address.street + ', ' + this.Order.address.street_number + ' ' + this.Order.address.city;
          } else {
            this.temp_address = this.Order.address.street + ', ' + this.Order.address.city;
          }
        }
        if (this.Order.date) {
          this.temp_date = new Date(this.Order.date);
          let date = new Date(this.Order.date);
          let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
          this.formated_date =  day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear();
        }
      } else {
        this.Order.service_id = this.service_data.service_id;
        this.Order.title = this.service_data.title;
        this.Order.description = this.service_data.description;
        this.Order.details = this.service_data.details;
        this.Order.referral_id = this.service_data.referral_id;
        this.Order.price = this.service_data.price;
        this.Order.payment = this.service_data.payment;
        this.Order.timing = this.service_data.timing;
        this.saveOrderToLocal(this.Order);
      }
    }
  }

  ngOnInit() {
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
    }
    this.route.params.subscribe((params: Params) => {
      this.step = params['step'];
      if (isBrowser) {window.scrollTo(0, 0);}

      if (this.order_status.created && this.step !== 'end' && this.step !== 'info') {
        this.router.navigate(['services', this.Order.title.replace(/\s+/g, '-')]);
      }
      if (this.step === 'summary') {
        this.navigationService.updateMessage("Sommario del servizio");
      } else if (this.step === 'address') {
        this.navigationService.updateMessage("Inserisci l'indirizzo");
      } else if (this.step === 'date') {
        this.navigationService.updateMessage("Inserisci la data");
      } else if (this.step === 'preview') {
        this.navigationService.updateMessage("Anteprima ordine");
      } else if (this.step === 'end') {
        this.navigationService.updateMessage("Ordine effetuato");
      } else if (this.step === 'login') {
        this.navigationService.updateMessage("Accedi");
        this.wizardDataItems[3] = "Login";
      } else if (this.step === 'signup') {
        this.navigationService.updateMessage("Registrazione");
        this.wizardDataItems[3] = "Signup";
      } else if (this.step === 'card') {
        this.navigationService.updateMessage("Metodo di pagamento");
        this.wizardDataItems[3] = "Carta";
      } else if (this.step === 'info') {
        this.navigationService.updateMessage("Informazioni profilo");
        this.wizardDataItems[4] = "Info";
      } else {
        this.router.navigate(['services', this.Order.title.replace(/\s+/g, '-')]);
      }
    })
  }

  onResize() {
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
    }
  }

  back() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Back', label: this.router.url});
    if (this.step === 'address') {
      this.router.navigate(['order/summary']);
    } else if (this.step === 'date') {
      this.router.navigate(['order/address']);
    } else if (this.step === 'preview') {
      if (!this.order_status.loading) {
        this.router.navigate(['order/date']);
      }
    } else if (this.step === 'card') {
      if (!this.card_state.loading) {
        this.router.navigate(['order/preview']);
      }
    }
  }

  ///////////////////////////////
  //// CONFIRM PREVIEW //////////
  ///////////////////////////////
  confirmPreview() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Confirm summary', label: this.router.url});
    this.router.navigate(['order/address']);
  }
  daysString(days) {
    if (days < 0.5) {
      return "1/2 Giorno";
    } else if (days > 0.5 && days < 1.5) {
      return Math.round(days) + " Giorno";
    } else {
      return Math.round(days) + " Giorni";
    }
  }

  ///////////////////////////////
  //// CONFIRM ADDRESS //////////
  ///////////////////////////////
  confirmAddress() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Confirm address', label: this.router.url});
    if (!this.Order.address) {
      this.address_state.error_message = "Per favore inserisci un indirizzo corretto";
      return;
    }
    this.address_state.error_message = null;
    this.saveOrderToLocal(this.Order)
    this.router.navigate(['order/date']);
  }
  getAddresses(event) {
    this.address_state.error_message = null;
    if (this.temp_address_street_number_city !== event.query) {
      this.address_state.error_message = "Per favore inserisci un indirizzo corretto";
    } else if (!this.temp_address || this.temp_address === "") {
      this.address_state.error_message = "Per favore compila il campo richiesto";
    } else {
      this.address_state.error_message = "Per favore compila il campo richiesto";
    }
    this.orderService.getAddresses(event.query).then((addresses) => {
      this.addresses = [];
      this.addresses = addresses;
    }).catch((error) => {
      // console.log(error);
    });
  }
  selectAddress(value) {
    this.address.street = value.street;
    this.address.street_number = value.street_number;
    this.address.city = value.city;
    this.address.postal_code = value.postal_code;
    this.address.province = value.province;
    this.address.country = value.country;
    this.address.country_code = value.country_code;
    this.address_state.error_message = null
    this.temp_address_street_number_city = this.temp_address.street_number_city;
    this.Order.address = this.address;
  }
  clickOutsideAddressInput() {
    if (!this.Order.address) {this.temp_address = null;}
  }

  ////////////////////////////
  //// CONFIRM DATE //////////
  ////////////////////////////
  confirmDate() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Confirm date', label: this.router.url});
    if (!this.Order.date) {
      this.date_state.error_message = "Per favore inserisci una data";
      return;
    }
    this.router.navigate(['order/preview']);
  }
  selectDate() {
    let date = new Date(this.temp_date);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let correctMonth = 1 + date.getMonth();
    let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
    this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
    this.date_state.error_message = null;
    this.Order.date = this.date;
    this.saveOrderToLocal(this.Order);
    let _date = new Date(this.Order.date);
    let _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
    this.formated_date =  _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
  }

  /////////////////////////////
  //// CONFIRM ORDER //////////
  /////////////////////////////
  confirmOrder() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Confirm order', label: this.router.url});
    if (localStorage.getItem('auth')) {
      this.order_status.loading = true;
      this.order_status.button_title = "Inviando l'ordine...";
      this.order_status.error_message = null;
      this.orderService.saveOrder(this.Order).then((response) => {
        this.order_status.loading = false;
        this.order_status.button_title = "Invia ordine";
        this.order_status.error_message = null;
        if (response.status === 201) {
          this.order_status.error_message = "Effetua l'accesso prima di creare un ordine";
          this.order_status.created = true;
          this.router.navigate(['order/end']);
        }
      }).catch((errorData) => {
        this.order_status.loading = false;
        this.order_status.button_title = "Invia ordine";
        this.router.navigate(['order/preview']);
        var _body = JSON.parse(errorData._body);
        if (errorData.status === 400) {
          if (_body.message === "no_stripe_customer") {
            this.order_status.error_message = "Inserisci un metodo di pagamento.";
            // this.order_status.payment_error_message = "Vai alla pagina";
            this.router.navigate(['order/card']);
          } else {
            this.order_status.error_message = "Effetua l'accesso prima di creare un ordine";
          }
        } else if (errorData.status === 402) {
          if (_body.message === "no_cards") {
            this.order_status.error_message = "Inserisci un metodo di pagamento.";
            // this.order_status.payment_error_message = "Vai alla pagina";
            this.router.navigate(['order/card']);
          }
        } else if (errorData.status === 403) {
          this.order_status.error_message = "service not supported in your location";
        }
      })
    } else {
      this.router.navigate(['order/signup']);
    }
  }

  ///////////////////////////
  //// CONFIRM END //////////
  ///////////////////////////
  confirmEnd() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Confirm end', label: this.router.url});
    let user = JSON.parse(localStorage.getItem('auth'));
    if (!user.phone_number || user.phone_number.length < 10) {
      this.router.navigate(['order/info']);
    } else {
      this.router.navigate(['']);
      // this.router.navigate(['services', this.Order.title.replace(/\s+/g, '-')]);
    }
  }

  ////////////////////////////////////
  ////////// AUTHENTICATION //////////
  ////////////////////////////////////
  login() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Login', label: this.router.url});
    if (this.login_state.loading || this.facebook_state.loading) {return;}
    if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
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
      this.router.navigate(['order/preview']);
      this.confirmOrder();
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
  changeToSignup() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Change to signup', label: this.router.url});
    if (this.login_state.loading) {return;}
    this.router.navigate(['order/signup']);
  }
  signup() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Signup', label: this.router.url});
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
      this.router.navigate(['order/preview']);
      this.confirmOrder();
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
  changeToLogin() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Change to login', label: this.router.url});
    if (this.signup_state.loading) {return;}
    this.router.navigate(['order/login']);
  }
  continueWithFacebook () {
    this.analyticsService.sendEvent({category:'Booking', action: 'Continue with facebook', label: this.router.url});
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
        this.router.navigate(['order/preview']);
        this.confirmOrder();
        this.facebook_state.loading = false;
        this.facebook_state.button_title = "Continua con Facebook";
        this.facebook_state.error_message = null;
      }).catch((error) => {
        this.facebook_state.loading = false;
        this.facebook_state.button_title = "Continua con Facebook";
        this.facebook_state.error_message = "Errore di accesso con Facebook!";
      });
    } else {
      let self = this;
      setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1, timeStart)}, 200);
    }
  }

  //////////////////////////
  ////////// CARD //////////
  //////////////////////////
  addCard() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Add card', label: this.router.url});

    if (this.card_state.loading) {return;}
    this.card_state.loading = true;
    this.card_state.button_title = "Salvando carta...";
    this.card_state.message_error = null;
    this.card_state.number_error = null;
    this.card_state.exp_date_error = null;
    this.card_state.cvc_error = null;
    if (this.Card !== null) {
      if (this.paymentService.cardNumberValidate(this.Card.number)) {
        this.card_state.number_error = null;
      } else {
        this.card_state.number_error = "Il numero della carta non è corretto.";
      }
    }
    if (this.Card.exp_date && this.Card.exp_date.length === 5) {
      let exp_parts = this.Card.exp_date.split('/');
      if (exp_parts[0] !== this.Card.exp_date) {
        this.Card.exp_month = exp_parts[0];
        this.Card.exp_year = exp_parts[1];
      } else {
        this.card_state.exp_date_error = "Errore data";
      }
    } else {
      this.card_state.exp_date_error = "La data non è completa";
    }
    this.paymentService.addNewCard(this.Card).then((response) => {
      this.card_state.loading = false;
      this.card_state.button_title = "Continua";
      this.card_state.message_error = null;
      this.card_state.number_error = null;
      this.card_state.exp_date_error = null;
      this.card_state.cvc_error = null;
      this.router.navigate(['order/preview']);
      this.confirmOrder();
    }).catch((error) => {
      this.card_state.loading = false;
      this.card_state.button_title = "Continua";
      this.card_state.message_error = null;
      this.card_state.number_error = null;
      this.card_state.exp_date_error = null;
      this.card_state.cvc_error = null;
      if (error === 400) {
        this.card_state.message_error = "Inserisci correttamente i dati della carta";
        // this.card_state.message_error = "Errore nel inserimento del codice della sicurezza";
        // this.card_state.cvc_error = "Inserisci un codice corretto";
      } else if (error === 402) {
        this.card_state.message_error = "Inserisci correttamente i dati della carta";
        // this.card_state.message_error = "Errore nel inserimento del numero della carta o della data di scadenza";
        // this.card_state.number_error = "Inserisci un numero corretto";
        // this.card_state.exp_date_error = "Inserisci una data corretta";
      } else {
        this.card_state.message_error = "Errore sconosciuto. Controlla i campi inseriti e riprova.";
      }
    });
  }
  checkExpiry(value) {
    let result = '';
    let date = new Date();
    let month = (1 + date.getMonth()).toString();
    if ((date.getMonth() + 1) < 10) {
      month = '0' + month.toString();
    }
    let yearElems = date.getFullYear().toString().split('');
    let year = parseInt(yearElems[2].toString() + yearElems[3].toString());
    if (value) {
      let dateElems = value.split('');
      let i = 0;
      dateElems.forEach((elem) => {
        if (elem === '/') {
          dateElems.splice(i, 1);
        }
        i++;
      });
      if (dateElems.length > 1) {
        let i = 0;
        dateElems.forEach((elem) => {
          if (i < 4) {
            if (i === 2) {
              result += '/';
            }
            result += elem;
          }
          i++;
        });
      } else {
        dateElems.forEach((elem) => {
          result += elem;
        });
      }
    }

    if (result.length !== 5) {
      this.card_state.exp_date_error = "Inserisci la data in formato MM/AA (mese/anno)";
    }

    if (result.length === 5) {
      let parts = result.split('/');
      if (parts[0] !== result) {
        if (parseInt(parts[1]) > year) {
          this.card_state.exp_date_error = null;
        } else {
          if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
            this.card_state.exp_date_error = null;
          } else {
            this.card_state.exp_date_error = "Inserisci una data corretta";
          }
        }
      } else {
        this.card_state.exp_date_error = null;
      }
    }
    this.Card.exp_date = result
    return result;
  }

  ////////////////////////////////////
  ////////// PROFILE INFO ////////////
  ////////////////////////////////////
  saveInformations() {
    this.analyticsService.sendEvent({category:'Booking', action: 'Update profile info', label: this.router.url});

    if (this.profile_info_state.loading) {return;}
    if (this.profileInformation.phone_number.length < 9 ) {
      this.profile_info_state.loading = false;
      this.profile_info_state.phone_number_error = "Il numero inserito non è completo";
      if (this.profileInformation.phone_number.length === 0 ) {
        this.profile_info_state.phone_number_error = "Inserisci un numero di telefono";
      }
      return;
    }
    let userData = JSON.parse(localStorage.getItem('auth'));
    userData['phone_number'] = this.profileInformation.phone_number;
    this.profile_info_state.loading = true;
    this.profile_info_state.button_title = "Salvando...";
    this.profileService.updateProfile(userData).then((data) => {
      localStorage.setItem('auth', JSON.stringify(userData));
      this.profile_info_state.loading = false;
      this.profile_info_state.phone_number_error = null;
      this.profile_info_state.button_title = "Salva";
      this.router.navigate(['services', this.Order.title.replace(/\s+/g, '-')]);
    }).catch((error) => {
      this.profile_info_state.loading = false;
      this.profile_info_state.phone_number_error = null;
      this.profile_info_state.button_title = "Salva";
    });
  }

  ///////////////////////////
  ////////// ORDER //////////
  ///////////////////////////
  saveOrderToLocal(order) {
    if (isBrowser) {
      localStorage.setItem('order', JSON.stringify(order));
    }
  }
  readOrderFromLocal() {
    let recovery
    if (isBrowser) {recovery = localStorage.getItem('order');}
    return JSON.parse(recovery);
  }
  deleteLocalOrder() {
    localStorage.removeItem('order');
  }
}
