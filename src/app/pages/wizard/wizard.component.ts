import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import { OrderService, IAddress } from '../../order/order.service';
import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { PaymentService } from '../../shared/payment.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {
  public Order = {
    service_id: '',
    date: null,
    delivery_address: '',
    delivery_date: '',
    delivery_details: [],
    payment: {amount: 0, currency: '', method: ''},
    street: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: '',
    country_code: '',
    formattedAddress: '',
  };
  public wizardData: any = {
    order: {
      service: '',
      services: [],
      totalPrice: null
    },
    type: '',
    multiplier: ''
  };
  public it: any;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public maxDate = new Date(new Date().getTime() + (24*21) * 60 * 60 * 1000);
  public isAddressDirty = false;
  public isAddressFull = false;
  public addresses = [];
  public selectedAddress: IAddress = {
    street: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: '',
    country_code: '',
    selected: false,
    isFull: false,
    formattedAddress: ''
  };
  public errorMessage = null;
  public isDataError = false;
  public isLoading = false;
  public createOrderDisabled = false;
  public emailPattern: any;
  public registrationData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public registrationError = {
    name: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false
  };
  public loanData = {
    name: '',
    phone: '',
    email: '',
    tax: '',
    codice: '',
    isFull: false
  };
  public loanError = {
    name: false,
    phone: false,
    email: false,
    tax: false,
    codice: false
  };
  public addCardData = {
    object: 'card',
    exp_date: '',
    exp_month: null,
    exp_year: null,
    number: null,
    cvc: '',
    name: '',
    address_line1: '',
    address_line2: '',
    address_city: '',
    address_zip: '',
    address_state: '',
    address_country: ''
  };

  public addCardError = {
    exp_date: false,
    number: false,
    cvc: false
  };

  public wizardDataItems = [];

  public formError: boolean|{title: string, message: string} = false;

  public step = 'confirmation';

  constructor(private analyticsService: AnalyticsService, private orderService: OrderService, private router: Router, private authService: AuthService, private navigationService: NavigationService, private paymentService: PaymentService) {
    this.wizardData = this.orderService.getWizardData();
    if (this.wizardData.type !== '') {
      let userData = localStorage.getItem('auth');

      var dettagli = 'Dettagli';
      var accedi = 'Accedi';
      var carta = 'Carta';
      var informazioni = 'Informazioni';
      var success = 'Fine';

      this.wizardDataItems.push(dettagli);
      if (!userData) {
        this.wizardDataItems.push(accedi);
      }

      if (this.wizardData.type === 'contanti') {
        this.wizardDataItems.push(success);
      } else if (this.wizardData.type === 'carta') {
        this.wizardDataItems.push(carta);
        this.wizardDataItems.push(success);
      } else if (this.wizardData.type === 'prestito') {
        this.wizardDataItems.push(informazioni);
      }

      this.analyticsService.sendEvent({category:'Order creation wizard', action: 'start', label: 'open wizard'});
    } else {
      this.router.navigateByUrl('/');
    }

    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }

  selectDate() {
    this.isDataError = false;
    this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'select date'});
  }

  getAddresses(event) {
    this.isAddressDirty = true;
    this.isAddressFull = false;
    if (event.query.length > 2) {
      this.orderService.getAddresses(event.query)
          .then((addresses) => {
            this.addresses = [];
            this.addresses = addresses;
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
  selectAddress(value) {
    this.analyticsService.sendEvent({category:'Order creation wizard', action: 'modify', label: 'select address'});
    if (value.isFull) {
      this.isAddressFull = true;
    } else {
      this.isAddressFull = false;
    }
    this.selectedAddress = value;
  }

  createOrder() {
    this.errorMessage = null;
    if (this.Order.date && this.isAddressFull) {
      let userData = localStorage.getItem('auth');
      this.prepareOrderData();

      if (userData !== null && (this.wizardData.type === 'contanti' || this.wizardData.type === 'carta')) {
        this.isLoading = true;
        this.createOrderDisabled = true;
        let timeStart = Date.now();
        this.orderService.saveOrder(this.Order)
            .then((status) => {
              this.analyticsService.sendEvent({category:'Order creation wizard', action: 'send form', label: 'finish'});
              this.analyticsService.sendTiming({category: 'Saving order', timingVar: 'save', timingValue: Date.now()-timeStart});
              this.Order.delivery_details = [];
              this.Order.delivery_address = '';
              this.Order.date = null;
              this.Order.delivery_date = '';
              this.Order.street_number = '';
              this.Order.postal_code = '';
              this.Order.country_code = '';
              this.Order.formattedAddress = '';
              this.isLoading = false;
              if (this.step === 'confirmation' || this.step === 'registration' || this.step === 'addcard') {
                // this.router.navigate(['services', this.wizardData.order.service]);
                this.createOrderDisabled = false;
                this.step = 'success';
              }
            })
            .catch((errorData) => {
              if (this.wizardData.type === 'contanti') {

              } else if (this.wizardData.type === 'carta') {
                let error = errorData.json();
                this.errorMessage = error.message;
                this.step = 'addcard';

                if (errorData.status === 400) {
                  // No customer, deleted customer,
                  // No stripe customer (add card and create customer)
                  // this.errorMessage = error.message;
                }
                if (errorData.status === 402) {
                  // No cards for the customer
                  // this.errorMessage = error.message;
                }
              }
              this.analyticsService.sendEvent({category:'Order creation form', action: this.wizardData.type + ' error response', label: errorData.status});
              this.createOrderDisabled = false;
              this.isLoading = false;
            });
      } else if (userData === null && (this.wizardData.type === 'contanti' || this.wizardData.type === 'carta')) {
        this.step = 'registration';
      } else if (this.wizardData.type === 'prestito') {
        this.step = 'loan';
      }

    } else {
      if (this.Order.date === null) {
        this.isDataError = true;
      }
      if (!this.isAddressFull) {
        this.isAddressDirty = true;
      }
    }
  }

  success() {
    this.router.navigate(['services', this.wizardData.order.service]);
  }

  prepareOrderData() {
    let date = new Date(this.Order.date);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    let correctMonth = 1 + date.getMonth();
    let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
    this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
    this.Order.service_id = this.wizardData.order.service_id;
    this.Order.delivery_details = [{
      title: this.wizardData.order.service,
      amount: 0,
      type: 'service'
    }];
    this.wizardData.order.services.forEach((orderCategory) => {
      if (orderCategory.price_type === 'BASE_AMOUNT_INCREMENT') {
        this.Order.delivery_details.push({
          title: orderCategory.name,
          description : orderCategory.option.name,
          amount: 0,
          type: 'item'
        });
      } else {
        this.Order.delivery_details.push({
          title: orderCategory.name,
          description : orderCategory.option.name,
          amount: orderCategory.option.price,
          type: 'item'
        });
      }
    });
    this.Order.payment = {
      amount: this.wizardData.order.totalPrice,
      currency: 'eur',
      method : ''
    };

    this.Order.street = this.selectedAddress.street;
    this.Order.street_number = this.selectedAddress.street_number;
    this.Order.postal_code = this.selectedAddress.postal_code;
    this.Order.country_code = this.selectedAddress.country_code;
    this.Order.formattedAddress = this.selectedAddress.formattedAddress;
    this.Order.payment.amount = this.wizardData.order.totalPrice * this.wizardData.multiplier;
    if (this.wizardData.type === 'contanti') {
      this.Order.payment.method = 'CASH';
    }
    if (this.wizardData.type === 'carta') {
      this.Order.payment.method = 'CARD';
    }
    if (this.wizardData.type === 'prestito') {
      this.Order.payment.method = 'LOAN';
    }
  }

  registration() {
    this.formError = false;
    if (this.registrationData.name.length > 0 && this.registrationData.phone.length > 10 && this.emailPattern.test(this.registrationData.email) && this.registrationData.password.length > 0 && this.registrationData.password === this.registrationData.confirmPassword) {
      let timeStart = Date.now();
      this.isLoading = true;
      this.authService.signup(this.registrationData.name, this.registrationData.phone, this.registrationData.email, this.registrationData.password)
          .then((data) => {
            this.analyticsService.sendTiming({category: 'Wizard registration', timingVar: 'save', timingValue: Date.now()-timeStart});
            this.isLoading = false;
            this.navigationService.updatePersonalMenu(data);

            if (this.wizardData.type === 'contanti') {
              this.createOrder();
            }
            if (this.wizardData.type === 'carta') {
              this.step = 'addcard';
            }
            if (this.wizardData.type === 'prestito') {
              // redirect to outside
            }
          })
          .catch((error) => {
            this.isLoading = false;
            switch (error) {
              case 409:
                // this.formError = {
                //   title: 'Indirizzo e-mail già in uso.',
                //   message: `Hai indicato di essere un nuovo cliente ma è già
                // presente un account collegato all'indirizzo e-mail: mail@gmail.com`
                // };
                this.step = 'login';
                break;
              case 422:
                this.formError = {
                  title: 'Parametri mancanti',
                  message: `Inserisci tutti i parametri per procedere con la registrazione`
                };
                break;
              case 404:
                this.formError = {
                  title: 'Errore',
                  message: `C'è stato un errore sconosciuto, per favore riprova più tardi`
                };
                break;
              default:
                this.formError = false;
            }
          });
    } else {
      this.checkNonEmpty('registrationName', this.registrationData.name);
      this.checkNonEmpty('registrationPhone', this.registrationData.phone);
      this.checkEmail('registration', this.registrationData.email);
      this.checkPassword('registration', this.registrationData.password, this.registrationData.confirmPassword);
      this.checkPassword('registrationConfirm', this.registrationData.password, this.registrationData.confirmPassword);
    }
  }

  login() {

  }

  addCard() {
    this.formError= false;
    let error = false;
    if (this.addCardData.number.length === 0) {
      error = true;
    }
    if (this.addCardData.exp_date.length === 5) {
      let exp_parts = this.addCardData.exp_date.split('/');
      if (exp_parts[0] !== this.addCardData.exp_date) {
        this.addCardData.exp_month = exp_parts[0];
        this.addCardData.exp_year = exp_parts[1];
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (this.addCardData.cvc.length < 3) {
      error = true;
    }

    if (!error) {
      this.isLoading = true;
      let timeStart = Date.now();
      this.paymentService.addNewCard(this.addCardData)
          .then((response) => {
            this.analyticsService.sendTiming({category: 'Wizard add new card', timingVar: 'save', timingValue: Date.now()-timeStart});
            this.isLoading = false;
            this.createOrder();
          })
          .catch((error) => {
            this.isLoading = false;
            let message = error.json().message;
            if (message) {
              this.formError = {
                title: 'Errore',
                message: message
              };
            } else {
              this.formError = {
                title: 'Errore',
                message: 'An error occurred'
              };
            }
          });
    }
  }

  createLoan() {
    if (this.loanData.name.length > 0 && this.emailPattern.test(this.loanData.email) && this.loanData.phone.length > 10 && this.loanData.tax.length > 0 && this.loanData.codice.length > 0) {
      let userData = localStorage.getItem('auth');
      if (userData !== null) {
        // call to out api
      } else {
        this.registrationData.name = this.loanData.name;
        this.registrationData.email = this.loanData.email;
        this.registrationData.phone = this.loanData.phone;
        this.loanData.isFull = true;
        this.step = 'registration';
      }
    } else {
      this.checkNonEmpty('loanName', this.loanData.name);
      this.checkEmail('loanEmail', this.loanData.email);
      this.checkNonEmpty('loanPhone', this.loanData.phone);
      this.checkNonEmpty('loanTax', this.loanData.tax);
      this.checkNonEmpty('loanCodice', this.loanData.codice);
    }

  }

  checkCardNumber(cardNumber) {
    // if (cardNumber !== null) {
    //   if (this.paymentService.cardNumberValidate(cardNumber)) {
    //     this.addCardError.number = false;
    //   } else {
    //     this.addCardError.number = true;
    //   }
    // }
  }

  checkEmail(type: string, email: string) {
    if (this.emailPattern.test(email)) {
      switch (type) {
        case 'registration':
          this.registrationError.email = false;
          break;
        case 'loanEmail':
          this.loanError.email = false;
          break;
      }
    } else {
      switch (type) {
        case 'registration':
          this.registrationError.email = true;
          break;
        case 'loanEmail':
          this.loanError.email = true;
          break;
      }
    }
  }

  checkNonEmpty(type, value) {
    if (type === 'registrationName') {
      if (value.length > 0) {
        this.registrationError.name = false;
      } else {
        this.registrationError.name = true;
      }
    }
    if (type === 'registrationPhone') {
      if (value.length > 10) {
        this.registrationError.phone = false;
      } else {
        this.registrationError.phone = true;
      }
    }
    if (type === 'cardCvv') {
      if (value.length > 2) {
        this.addCardError.cvc = false;
      } else {
        this.addCardError.cvc = true;
      }
    }
    if (type === 'loanName') {
      if (value.length > 0) {
        this.loanError.name = false;
      } else {
        this.loanError.name = true;
      }
    }
    if (type === 'loanPhone') {
      if (value.length > 10) {
        this.loanError.phone = false;
      } else {
        this.loanError.phone = true;
      }
    }
    if (type === 'loanTax') {
      if (value.length > 0) {
        this.loanError.tax = false;
      } else {
        this.loanError.tax = true;
      }
    }
    if (type === 'loanCodice') {
      if (value.length > 0) {
        this.loanError.codice = false;
      } else {
        this.loanError.codice = true;
      }
    }
  }

  checkPassword (type, password, passwordConfirm) {
    if (type === 'registration') {
      if (password.length > 3) {
        this.registrationError.password = false;
      } else {
        this.registrationError.password = true;
      }
    }
    if (type === 'registrationConfirm') {
      if (password === passwordConfirm) {
        this.registrationError.confirmPassword = false;
      } else {
        this.registrationError.confirmPassword = true;
      }
    }
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
      this.addCardError.exp_date = true;
    }

    if (result.length === 5) {
      let parts = result.split('/');
      if (parts[0] !== result) {
        if (parseInt(parts[1]) > year) {
          this.addCardError.exp_date = false;
        } else {
          if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
            this.addCardError.exp_date = false;
          } else {
            this.addCardError.exp_date = true;
          }
        }
      } else {
        this.addCardError.exp_date = true;
      }
    }
    this.addCardData.exp_date = result;
    return result;
  }

  ngOnInit() {
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
  }

}
