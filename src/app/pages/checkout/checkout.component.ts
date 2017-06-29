import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import { OrderService, IAddress } from '../../order/order.service';
import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { PaymentService } from '../../shared/payment.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  public emailPattern: any;
  public it: any;
  public steps = []
  public step = ''
  public currentUser;

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

  public date = null;
  public temp_date;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public maxDate = new Date(new Date().getTime() + (24*28) * 60 * 60 * 1000);
  public formated_date = null;
  public date_state = {
    loading: false,
    error_message: null
  }

  public signupParameters = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: {},
    password: '',
  }
  public signup_state = {
    loading: false,
    button_title: "Registrati",
    error_message: null,
    email_error: null,
    first_name_error: null,
    last_name_error: null,
    phone_error: null,
    address_error: null,
    password_error: null,
  }
  public loginParameters = {
    email: '',
    password: ''
  }
  public login_state = {
    loading: false,
    button_title: "Accedi",
    error_message: null,
    email_error: null,
    password_error: null,
  }

  public Order = {}
  public state = {
    loading : false,
    created : false,
    error_message : null,
    address_error: null,
    date_error: null,
  }

  constructor(private router: Router, private route: ActivatedRoute, private analyticsService: AnalyticsService, private orderService: OrderService, private authService: AuthService, private navigationService: NavigationService, private paymentService: PaymentService, private profileService: ProfileService, private commonService: CommonService) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
    this.steps = ['address', 'date', 'preview', "payment", 'end']
    this.navigationService.updateMessage("Prenotazione")
    this.Order['services'] = this.commonService.getObjectForKey("services")
    console.log('order is: ' + JSON.stringify(this.Order));
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.step = params['step']
      if (isBrowser) {
        window.scrollTo(0, 0)
        this.currentUser = JSON.parse(localStorage.getItem('auth'))
      }
    })
  }

  undoStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var previousStep = this.steps[currentStepIndex-1]
    if (this.step === "address") {
      var service_title = this.Order['services'][0]['title']
      this.router.navigate(['services', service_title.replace(/\s+/g, '-')]);
    } else {
      this.router.navigate(['checkout/' + previousStep]);
    }
  }
  nextStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var nextStep = this.steps[currentStepIndex+1]
    if (this.step === 'address') {
      this.state.address_error = null
      if (!this.Order['address']) {
        this.state.address_error = "Per favore, inserisci un indirizzo."
        return;
      }
      this.router.navigate(['checkout/' + nextStep]);
    }
    else if (this.step === 'date') {
      this.state.date_error = null
      if (!this.Order['date']) {
        this.state.date_error = "Per favore, inserisci una data."
        return;
      }
      this.router.navigate(['checkout/' + nextStep]);
    }
    else if (this.step === 'preview') {
      if (!this.currentUser) {
        this.steps[3] = "signup";
        this.router.navigate(['checkout/signup'])
      } else {
        this.router.navigate(['checkout/payment'])
      }
    }
    else if (this.step === 'signup') {
    }
    else if (this.step === 'login') {
    }
    else if (this.step==='payment') {
      // this.router.navigate(['checkout/payment'])
    }
    else if (this.step==='card') {
      // this.router.navigate(['checkout/card'])
    }
    else if (this.step==='end') {
      this.router.navigate(['services']);
    }
  }

  sendOrder() {
    this.state.loading = true;
    this.state.error_message = null;
    this.orderService.saveOrder(this.Order).then((response) => {
      this.state.loading = false;
      this.state.error_message = null;
      if (response.status === 201) {
        this.state.error_message = "Effetua l'accesso prima di creare un ordine";
        this.state.created = true;
        // this.router.navigate(['order/end']);
      }
    }).catch((errorData) => {
      this.state.loading = false;
      // this.router.navigate(['order/preview']);
      var _body = JSON.parse(errorData._body);
      if (errorData.status === 400) {
        if (_body.message === "no_stripe_customer") {
          this.state.error_message = "Inserisci un metodo di pagamento.";
          // this.router.navigate(['order/card']);
        } else {
          this.state.error_message = "C'è stato un errore, per favore effettua di nuovo l'accesso al account.";
        }
      } else if (errorData.status === 402) {
        if (_body.message === "no_cards") {
          this.state.error_message = "Inserisci un metodo di pagamento.";
          // this.router.navigate(['order/card']);
        }
      } else if (errorData.status === 403) {
        this.state.error_message = "service not supported in your location";
      }
    })
  }

  selectAddress(value) {
    var address = {};
    address['street'] = value.street;
    address['street_number'] = value.street_number;
    address['city'] = value.city;
    address['postal_code'] = value.postal_code;
    address['province'] = value.province;
    address['country'] = value.country;
    address['country_code'] = value.country_code;
    this.Order['address'] = address;
    this.state.address_error = null
    this.commonService.saveObjectToLocalWithName(this.Order, 'checkout_order')
    this.address_state.error_message = null
    this.temp_address_street_number_city = this.temp_address.street_number_city;
  }
  selectDate() {
    let date = new Date(this.temp_date);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let correctMonth = 1 + date.getMonth();
    let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
    this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
    this.date_state.error_message = null;
    this.Order['date'] = this.date
    this.state.date_error = null
    this.commonService.saveObjectToLocalWithName(this.Order, 'checkout_order')
    let _date = new Date(this.Order['date']);
    let _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
    this.formated_date =  _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
  }

  signup() {
    if (this.signup_state.loading) { return; }
    this.signup_state.email_error = null;
    this.signup_state.first_name_error = null;
    this.signup_state.last_name_error = null;
    this.signup_state.phone_error = null;
    this.signup_state.password_error = null;
    if (this.signupParameters.email.length===0 || this.signupParameters.firstname.length===0 || this.signupParameters.lastname.length===0 || this.signupParameters.phone.length===0 || this.signupParameters.password.length===0) {
      if (!this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
      }
      this.signup_state.email_error = (this.signupParameters.email.length===0) ? "Inserisci un indirizzo email" : null;
      this.signup_state.first_name_error = (this.signupParameters.firstname.length===0) ? "Inserisci un nome" : null;
      this.signup_state.last_name_error = (this.signupParameters.lastname.length===0) ? "Inserisci un cognome" : null;
      this.signup_state.phone_error = (this.signupParameters.phone.length<9) ? "Inserisci un numero di telefono corretto" : null;
      this.signup_state.password_error = (this.signupParameters.password.length===0) ? "Inserisci una password" : null;
      return;
    }
    this.signup_state.loading = true;
    this.signup_state.button_title = "Registrando...";
    this.authService.signupProfessional(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password, "VENDOR").then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.steps[3] = 'payment'
      this.router.navigate(['checkout/payment'])
    }).catch((error) => {
      this.analyticsService.sendException(error)
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
  login() {
    if (this.login_state.loading) { return; }
    this.login_state.email_error = null;
    this.login_state.password_error = null;
    if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
      this.login_state.email_error = (this.loginParameters.email.length === 0) ? "Inserisci un indirizzo email" : null;
      this.login_state.password_error = (this.loginParameters.password.length === 0) ? "Inserisci una password" : null;
      return;
    }
    this.login_state.loading = true;
    this.login_state.button_title = "Accedendo...";
    this.authService.login(this.loginParameters.email, this.loginParameters.password).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.steps[3] = 'payment'
      this.router.navigate(['checkout/payment'])
    }).catch((error) => {
      this.analyticsService.sendException(error)
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
    })
  }

  setProgressWidth() {
    var numSteps = this.steps.length;
    var currentStep = this.steps.indexOf(this.step) + 1
    return 100/numSteps * currentStep + '%'
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
    })
  }

  changeToSignup() {
    this.steps[3] = 'signup'
    this.router.navigate(['checkout/signup'])
  }
  changeToLogin() {
    this.steps[3] = 'login'
    this.router.navigate(['checkout/login'])
  }
  changeToRecoverPassword() {
    this.steps[3] = 'recovery'
    this.router.navigate(['checkout/recovery'])
  }
}
