import { isBrowser } from 'angular2-universal';
import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { NavigationService } from '../shared/navigation.service';
import { PopupsService } from './popups.service';
import { OrdersService } from '../shared/orders.service';
import { PaymentService } from '../shared/payment.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  animations: [
    trigger('addCardPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('loginPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('registrationPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('recoveryPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('finishPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('confirmPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('confirmFinishPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('confirmActionPopupState', [
      state('inactive', style({display: 'none', top: '-300px'})),
      state('active',   style({display: 'block', top: '42px'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', top: '-300px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.01}),
          style({display: 'block', opacity: 1, top: '42px', offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, top: '42px', offset: 0}),
          style({display: 'block', opacity: 0, top: '-300px', offset: 0.99}),
          style({display: 'none', top: '-300px', offset: 1.0})
        ]))
      ])
    ]),
    trigger('shadowState', [
      state('inactive', style({display: 'none', opacity: 0})),
      state('active',   style({display: 'block', opacity: 1})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({display: 'none', offset: 0}),
          style({display: 'block', opacity: 0, offset: 0.01}),
          style({display: 'block', opacity: 1, offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({display: 'block', opacity: 1, offset: 0}),
          style({display: 'block', opacity: 0, offset: 0.99}),
          style({display: 'none', offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class PopupsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  public activePopup = '';
  public addCardPopupState = 'inactive';
  public loginPopupState = 'inactive';
  public registrationPopupState = 'inactive';
  public recoveryPopupState = 'inactive';
  public finishPopupState = 'inactive';
  public confirmPopupState = 'inactive';
  public confirmFinishPopupState = 'inactive';
  public confirmActionPopupState = 'inactive';
  public shadowState = 'inactive';
  public emailPattern;
  public auth;
  public  addCardData = {
    object: 'card',
    exp_date: '',
    exp_month: null,
    exp_year: null,
    number: null,
    cvc: '',
    name: '',           // Nome intestatario
    address_line1: '',  // Via
    address_line2: '',  // Nr
    address_city: '',   // Città
    address_zip: '',    // CAP
    address_state: '',  // Provincia
    address_country: '' // Paese
  };
  public actionCardType = 'add';
  public editedCardId: number;
  public addCardError = {
    exp_date: false,
    number: false,
    cvc: false
  };
  public loginData = {
    email: '',
    password: '',
    type: '',
    orderData: {}
  };
  public loginError = {
    email: false,
    password: false
  };
  public registrationData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  public registrationError = {
    name: false,
    phone: false,
    email: false,
    passwordFirst: false,
    password: false
  };
  public recoveryData = {
    email: ''
  };
  public recoveryError = {
    email: false
  };
  public confirmPopupData = {
    id: null,
    title: '',
    text: '',
    data: [],
    information: {},
    button: '',
    type: ''
  };
  public confirmFinishPopupData = {
    title: '',
    text: '',
    type: 'center'
  };
  public confirmActionPopupData = {
    orderId: '',
    type: '',
    title: '',
    text: '',
    text2: '',
    actions: [],
    buttons: [],
    price: null
  };
  public finishPopupData = {
    title: '',
    text: []
  };

  public isPopupLoading = false;

  public formError: boolean|{title: string, message: string} = false;
  constructor(private authServics: AuthService, private navigationService: NavigationService, private popupService: PopupsService, private ordersService: OrdersService, private paymentService: PaymentService, private router: Router) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }
  getPopup(type: string) {
    this.closePopup(true);
    if (type === 'login') {
      this.loginPopupState = 'active';
    }
    if (type === 'registration') {
      this.registrationPopupState = 'active';
    }
    if (type === 'recovery') {
      this.recoveryPopupState = 'active';
    }
    if (type === 'finish') {
      this.finishPopupState = 'active';
      this.finishPopupData.title = 'Check your inbox';
      this.finishPopupData.text = [
          'We sent a password reset link to your email address. Please click the link in the email to create e new password.',
          'The link will only be active for 1 hour. After that you will need to request a new one.'
      ];
    }
    if (type === 'error') {
      this.finishPopupState = 'active';
    }
    if (type === 'confirmFinish') {
      this.confirmFinishPopupState = 'active';
    }
    if (type === 'confirmEnd') {
      this.confirmPopupState = 'active';
    }
    if (type === 'addCard') {
      this.addCardPopupState = 'active';
    }
    if (type === 'confirmAction') {
      this.confirmActionPopupState = 'active';
    }
    if (type === 'confirmOrderEnd') {
      this.confirmPopupState = 'active';
    }
    this.shadowState = 'active';
    this.activePopup = type;
    return false;
  }

  closePopup(isReopen = false) {
    if (this.loginPopupState === 'active') {
      this.loginPopupState = 'inactive';
    }
    if (this.registrationPopupState === 'active') {
      this.registrationPopupState = 'inactive';
    }
    if (this.recoveryPopupState === 'active') {
      this.recoveryPopupState = 'inactive';
    }
    if (this.finishPopupState === 'active') {
      this.finishPopupState = 'inactive';
    }
    if (this.confirmPopupState === 'active') {
      this.confirmPopupState = 'inactive';
    }
    if (this.confirmFinishPopupState === 'active') {
      this.confirmFinishPopupState = 'inactive';
    }
    if (this.addCardPopupState === 'active') {
      this.addCardPopupState = 'inactive';
    }
    if (this.confirmActionPopupState === 'active') {
      this.confirmActionPopupState = 'inactive';
    }
    this.activePopup = '';
    this.formError = false;
    if (!isReopen) {
      this.shadowState = 'inactive';
      this.clearData();
    }
  }

  login(email: string, password: string) {
    if (this.emailPattern.test(email) && password.length > 0) {
      this.isPopupLoading = true;
      this.authServics.login(email, password)
        .then((data) => {
          this.isPopupLoading = false;
          this.auth = data;
          if (this.loginData.type === 'fromOrder') {
            this.closePopup(true);
            this.popupService.activate({type: 'confirmNewOrder', data: this.loginData.orderData});
          } else {
            this.closePopup();
            this.router.navigate(['/']);
          }
        })
        .catch((error) => {
          this.isPopupLoading = false;
          switch (error) {
            case 404:
              this.formError = {
                title: 'Si è verificato un errore!',
                message: 'Non riusciamo a trovare un account con quell’indirizzo e-mail'
              };
              break;
            case 401:
              this.formError = {
                title: 'Si è verificato un errore!',
                message: 'La tua password non è corretta'
              };
              break;
            default:
              this.formError = false;
          }
        });
    } else {
      if (password.length < 1) {
        this.loginError.password = true;
      }
      if (!this.emailPattern.test(email)) {
        this.loginError.email = true;
      }
    }
    return false;
  }

  checkEmail(type: string, email: string) {
    if (this.emailPattern.test(email)) {
      switch (type) {
        case 'login':
          this.loginError.email = false;
          break;
        case 'registration':
          this.registrationError.email = false;
          break;
        case 'recovery':
          this.recoveryError.email = false;
          break;
      }
    } else {
      switch (type) {
        case 'login':
          this.loginError.email = true;
          break;
        case 'registration':
          this.registrationError.email = true;
          break;
        case 'recovery':
          this.recoveryError.email = true;
          break;
      }
    }
  }

  checkDate(type, value) {
    if (type === 'newCard') {
      if (value.length !== 5) {
        this.addCardError.exp_date = true;
      }
      if (value.length === 5) {
        let parts = value.split('/');
        if (parts[0] === value) {
          this.addCardError.exp_date = true;
        } else {
          this.addCardError.exp_date = false;
        }
      }
    }
  }

  checkNonEmpty(type, value) {
    if (type === 'login') {
      if (value.length > 0) {
        this.loginError.password = false;
      } else {
        this.loginError.password = true;
      }
    }
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
    if (type === 'registrationPassword') {
      if (value.length > 0) {
        this.registrationError.passwordFirst = false;
      } else {
        this.registrationError.passwordFirst = true;
      }
    }
    if (type === 'addCardNumber') {
      if (value.length > 0) {
        this.addCardError.number = false;
      } else {
        this.addCardError.number = true;
      }
    }
    if (type === 'addCardCvv') {
      if (value.length > 2) {
        this.addCardError.cvc = false;
      } else {
        this.addCardError.cvc = true;
      }
    }
  }

  checkPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      this.registrationError.password = true;
    } else {
      this.registrationError.password = false;
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

  checkCardNumber(cardNumber) {
    // if (cardNumber !== null) {
    //   if (this.paymentService.cardNumberValidate(cardNumber)) {
    //     this.addCardError.number = false;
    //   } else {
    //     this.addCardError.number = true;
    //   }
    // }
  }

  registration(name: string, phone: string, email: string, password: string, passwordConfirm: string) {
    if (this.emailPattern.test(email) && password === passwordConfirm && password.length > 0 && name.length > 0 && phone.length > 9) {
      this.isPopupLoading = true;
      this.authServics.signup(name, phone, email, password)
        .then((data) => {
          this.isPopupLoading = false;
          this.auth = data;
          this.navigationService.updatePersonalMenu(data);
          this.closePopup();
          this.router.navigate(['/profile/payment']);
        })
        .catch((error) => {
          this.isPopupLoading = false;
          switch (error) {
            case 409:
              this.formError = {
                title: 'Indirizzo e-mail già in uso.',
                message: `Hai indicato di essere un nuovo cliente ma è già
                presente un account collegato all'indirizzo e-mail: mail@gmail.com`
              };
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
      if (!this.emailPattern.test(email)) {
        this.registrationError.email = true;
      }
      if (password !== passwordConfirm) {
        this.registrationError.password = true;
      }
      if (password.length < 1) {
        this.registrationError.passwordFirst = true;
      }
      if (name.length < 1) {
        this.registrationError.name = true;
      }
    }
    return false;
  }

  recovery(email: string) {
    if (this.emailPattern.test(email)) {
      this.isPopupLoading = true;
      this.authServics.recovery(email)
        .then((status) => {
          this.isPopupLoading = false;
          this.getPopup('finish');
        })
        .catch((error) => {
          this.isPopupLoading = false;
          this.formError = {
            title: 'Si è verificato un problema!',
            message: `Ci dispiace. Impossibile identificare l'account con le informazioni fornite.`
          };
        });
    } else {
      this.recoveryError.email = true;
    }
    return false;
  }

  confirmOrder(id) {
    // this.ordersService.modifyOrder(id, 'ACCEPT')
    //     .then((response) => {
    //       this.confirmPopupData.title = 'Servizio confermato con successo';
    //         this.confirmPopupData.text = 'Adesso non resta altro che offrire il suo servizio al cliente. Per qualsiasi communicazione può usare i dati del contatto aggiunti dal cliente.';
    //         this.confirmPopupData.type = 'confermaEnd';
    //       this.getPopup('confirmEnd');
    //       this.popupService.actionComplete({type: 'confirmOrder', data: {orderId: id}});
    //     })
    //     .catch((error) => {
    //       this.formError = true;
    //       this.formError = {
    //         title: 'Order confirmation error',
    //         message: `An error occurred during the order confirmation. Please try again.`
    //       };
    //     });
  }

  cancelOrder(id) {
    this.ordersService.modifyOrder(id, 'CANCEL')
        .then((response) => {
          this.confirmFinishPopupData.title = 'Ordine annullato';
          this.confirmFinishPopupData.text = 'Questo ordine è stato annullato, puoi riattivarlo in un secondo momento.';
          this.getPopup('confirmFinish');
          this.popupService.actionComplete({type: 'cancelOrder', data: {orderId: id}});
        })
        .catch((error) => {
          this.formError = true;
          this.formError = {
            title: 'Cancellation error',
            message: `An error occurred while canceling your order. Please try again.`
          };
        });
  }

  reactivateOrder(id) {
    this.ordersService.modifyOrder(id, 'REACTIVATE')
        .then((response) => {
          this.confirmFinishPopupData.title = 'Ordine riattivato';
          this.confirmFinishPopupData.text = 'Questo ordine è stato riattivato, verrai notificato quando un professionista confermera questo ordine.';
          this.getPopup('confirmFinish');
          this.popupService.actionComplete({type: 'reactivateOrder', data: {orderId: id}});
        })
        .catch((error) => {
          this.formError = true;
          this.formError = {
            title: 'Reactivation order error',
            message: `During the reactivation of your order is the order the error occurred. Please try again.`
          };
        });
  }

  confirmNewOrder() {
    this.closePopup();
    this.popupService.actionComplete({type: 'confirm'});
  }

  addNewCard() {
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
      this.isPopupLoading = true;
      this.popupService.actionComplete({type: 'startNewCard'});
      this.paymentService.addNewCard(this.addCardData)
          .then((response) => {
            this.isPopupLoading = false;
            this.popupService.actionComplete({type: 'newCard', data: response});
            this.closePopup();
          })
          .catch((error) => {
            this.isPopupLoading = false;
            this.popupService.actionComplete({type: 'newCardError'});
            this.closePopup();
            let message = error.json().message;
            if (message) {
              this.getErrorPopup('Errore', message);
            } else {
              this.getErrorPopup('Errore', 'An error occurred');
            }
          });
    }
  }

  editCard() {
    let error = false;
    let editCardData = {
      exp_month: null,
      exp_year: null,
      name: '',
      address_line1: '',
      address_line2: '',
      address_city: '',
      address_zip: '',
      address_state: '',
      address_country: ''
    };
    if (this.addCardData.exp_date.length === 5) {
      let exp_parts = this.addCardData.exp_date.split('/');
      if (exp_parts[0] !== this.addCardData.exp_date) {
        editCardData.exp_month = exp_parts[0];
        editCardData.exp_year = exp_parts[1];
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (!error) {
      editCardData.name = this.addCardData.name;
      editCardData.address_line1 = this.addCardData.address_line1;
      editCardData.address_line2 = this.addCardData.address_line2;
      editCardData.address_city = this.addCardData.address_city;
      editCardData.address_zip = this.addCardData.address_zip;
      editCardData.address_state = this.addCardData.address_state;
      editCardData.address_country = this.addCardData.address_country;
      this.popupService.actionComplete({type: 'startNewCard'});
      this.isPopupLoading = true;
      this.paymentService.editCard(this.editedCardId, editCardData)
          .then((response) => {
            this.isPopupLoading = false;
            this.popupService.actionComplete({type: 'cardEdited', data: response});
            this.closePopup();
          })
          .catch((error) => {
            this.isPopupLoading = false;
            this.popupService.actionComplete({type: 'newCardError'});
            this.closePopup();
            let message = error.json().message;
            if (message) {
              this.getErrorPopup('Errore', message);
            } else {
              this.getErrorPopup('Errore', 'An error occurred');
            }
          });
    }
  }

  addPrice(orderId) {
    // let orderPriceEur = parseInt(this.confirmActionPopupData.price) + ((parseInt(this.confirmActionPopupData.price) / 100) * 5.5);
    // let orderPrice = parseFloat(orderPriceEur.toFixed(2)) * 100;

    this.isPopupLoading = true;
    this.ordersService.modifyOrder(orderId, 'CLOSE')
        .then((response) => {
          this.isPopupLoading = false;
          this.closePopup(true);
          this.confirmPopupData.title = 'Servizio completato con successo';
          this.confirmPopupData.text = '';
          this.confirmPopupData.type = 'addPriceEnd';
          this.confirmPopupState = 'active';
          this.activePopup = 'addPriceEnd';
          this.shadowState = 'active';
          this.popupService.actionComplete({type: 'addPrice', data: {orderId: orderId, isModified: response.nModified}});
        })
        .catch((error) => {
          this.isPopupLoading = false;
            this.closePopup();
            let message = error.json().message;
            if (message) {
                this.getErrorPopup('Errore', message);
            } else {
                this.getErrorPopup('Errore', 'An error occurred');
            }
        });
  }
  editPrice(orderId) {
    let orderPriceEur = parseInt(this.confirmActionPopupData.price) + ((parseInt(this.confirmActionPopupData.price) / 100) * 5.5);
    let orderPrice = parseFloat(orderPriceEur.toFixed(2)) * 100;
    this.ordersService.addPrice(orderId, 'ACTIVE_PAYMENT', orderPrice)
        .then((response) => {
          this.closePopup();
          this.popupService.actionComplete({type: 'editPrice', data: {orderId: orderId, orderPrice: orderPrice, isModified: response.nModified}});
        })
        .catch((error) => {
          console.log(error);
        });
  }
  continueOrder(orderId) {
    this.ordersService.modifyOrder(orderId, 'PAY')
        .then((response) => {
          this.confirmFinishPopupData.title = 'Pagamento effettuato';
          this.confirmFinishPopupData.text = 'Ti abbiamo inviato una mail e un sms con la conferma del pagamento e la ricevuta fiscale';
          this.confirmFinishPopupData.type = 'left';
          this.getPopup('confirmFinish');
          this.popupService.actionComplete({type: 'continueOrder', data: {orderId: orderId}});
        })
        .catch((error) => {
          console.log(error);
        });

  }

  logout() {
    this.popupService.actionComplete({type: 'logout', data: {}});
    this.closePopup();
  }

  getErrorPopup(title, text) {
    this.finishPopupData.text = [];
    this.finishPopupData.title = title;
    this.finishPopupData.text.push(text);
    this.getPopup('error');
  }

  ngOnInit() {
    if (isBrowser) {
      this.subscription = this.popupService.getActivePopup$.subscribe(popup => {
        switch (popup.type) {
          case 'login':
            this.loginData.email = '';
            this.loginData.password = '';
            this.loginPopupState = 'active';
            this.activePopup = 'login';
            this.shadowState = 'active';
            break;
          case 'loginFromOrder':
            this.loginData.orderData = popup.data;
            this.loginData.type = 'fromOrder';
            this.loginPopupState = 'active';
            this.activePopup = 'login';
            this.shadowState = 'active';
            break;
          case 'addCard':
            this.actionCardType = 'add';
            this.addCardPopupState = 'active';
            this.activePopup = 'addCard';
            this.shadowState = 'active';
            break;
          case 'editCard':
            this.actionCardType = 'edit';
            this.editedCardId = popup.data.id;
            this.addCardData.exp_date = popup.data.exp_month + '/' + popup.data.exp_year;
            this.addCardData.name = popup.data.name;
            this.addCardData.address_line1 = popup.data.address_line1;
            this.addCardData.address_line2 = popup.data.address_line2;
            this.addCardData.address_city = popup.data.address_city;
            this.addCardData.address_zip = popup.data.address_zip;
            this.addCardData.address_state = popup.data.address_state;
            this.addCardData.address_country = popup.data.address_country;
            this.addCardData.number = popup.data.number;
            this.addCardData.cvc = popup.data.cvc;
            this.addCardPopupState = 'active';
            this.activePopup = 'addCard';
            this.shadowState = 'active';
            break;
          case 'registration':
            this.registrationPopupState = 'active';
            this.activePopup = 'registration';
            this.shadowState = 'active';
            break;
          case 'confirmOrder':
            this.confirmPopupData.id = popup.data.orderId;
            this.confirmPopupData.title = 'Conferma servizio in corso…';
            this.confirmPopupData.text = 'Il sistema sta controllando se questo servizio è stato assegnato ad un altro professionista o anullato dal cliente stesso.';
            this.confirmPopupData.button = '';
            this.confirmPopupData.type = 'conferma';
            this.confirmPopupState = 'active';
            this.activePopup = 'confirmOrder';
            this.shadowState = 'active';
            this.ordersService.modifyOrder(popup.data.orderId, 'ACCEPT')
              .then((response) => {
                this.confirmPopupData.title = 'Servizio confermato con successo';
                this.confirmPopupData.text = 'Adesso non resta altro che offrire il suo servizio al cliente. Per qualsiasi communicazione può usare i dati del contatto aggiunti dal cliente.';
                this.confirmPopupData.type = 'confermaEnd';
                this.getPopup('confirmEnd');
                this.popupService.actionComplete({type: 'confirmOrder', data: {orderId: popup.data.orderId}});
              })
              .catch((error) => {
                this.formError = true;
                this.formError = {
                  title: 'Order confirmation error',
                  message: `An error occurred during the order confirmation. Please try again.`
                };
              });
            break;
          case 'cancelOrder':
            this.confirmPopupData.id = popup.data.orderId;
            this.confirmPopupData.title = 'Annulla ordine?';
            this.confirmPopupData.text = 'Dopo aver annullato questo ordine solo tu sarai in grado di vederlo.';
            this.confirmPopupData.button = 'Annulla ordine';
            this.confirmPopupState = 'active';
            this.activePopup = 'confirmOrder';
            this.shadowState = 'active';
            break;
          case 'reactivateOrder':
            this.confirmPopupData.id = popup.data.orderId;
            this.confirmPopupData.title = 'Riattiva ordine?';
            this.confirmPopupData.text = 'Dopo aver riattivato questo ordine sara visibile a tutti i professionisti.';
            this.confirmPopupData.button = 'Riattiva ordine';
            this.confirmPopupState = 'active';
            this.activePopup = 'confirmOrder';
            this.shadowState = 'active';
            break;
          case 'confirmNewOrder':
            this.confirmPopupData.title = 'Dettagli dell’ordine';
            this.confirmPopupData.data = [{productName: popup.data.orderData.service, itemName: '', price: '', type: 'service'}];
            popup.data.orderData.services.forEach((product) => {
              if(product.price_type === 'BASE_AMOUNT_INCREMENT') {
                this.confirmPopupData.data.push({productName: product.name, itemName: product.option.name, price: '', type: 'item'});
              } else if (product.price_type === 'BASE_AMOUNT_PER_INPUT'){
                this.confirmPopupData.data.push({productName: product.name, itemName: product.option.name, price: '', symbol: product.option.symbol, type: 'item'});
              } else {
                this.confirmPopupData.data.push({productName: product.name, itemName: product.option.name, price: product.option.price, type: 'item'});
              }
            });
            this.confirmPopupData.data.push({productName: 'Totale', itemName: '', price: popup.data.orderData.totalPrice, type: 'total'});
            this.confirmPopupData.information = popup.data.information;
            this.confirmPopupData.button = 'Procedi con l’acquisto';
            this.confirmPopupData.type = 'newOrder';
            this.confirmPopupState = 'active';
            this.activePopup = 'confirmOrder';
            this.shadowState = 'active';
            break;
          case 'confirmNewOrderEnd':
            this.confirmPopupData.title = 'Acquisto effetuato';
            this.confirmPopupData.text = 'L’ordine e stato prenotato con successo. Un professionista si presenterà nella data e ora stabilita da voi.';
            this.confirmPopupData.type = 'newOrderEnd';
            this.confirmPopupState = 'active';
            this.activePopup = 'confirmOrderEnd';
            this.shadowState = 'active';
            break;
          case 'addPrice':
            this.confirmActionPopupData.orderId = popup.data.orderId;
            this.confirmActionPopupData.type = 'addPrice';
            this.confirmActionPopupData.title = 'Completamento servizio';
            this.confirmActionPopupData.text = 'Dopo aver completato il servizio verrai incrementato del importo prestabilito tra 7 giorni lavorativi.';
            // this.confirmActionPopupData.actions.push({
            //   type: 'Payment_input_add',
            //   source: 'euro',
            //   label: 'Inserisci l’importo',
            //   description: 'All’importo verra aggiunto 5.5% di tassa Starbook.'
            // });
            this.confirmActionPopupData.buttons.push({
              type: 'addPrice',
              text: 'Completa il servizio'
            });
            this.confirmActionPopupData.buttons.push({
              type: 'close',
              text: 'Chiudi'
            });
            this.confirmActionPopupState = 'active';
            this.activePopup = 'confirmAction';
            this.shadowState = 'active';
            break;
          case 'editPrice':
            this.confirmActionPopupData.orderId = popup.data.orderId;
            this.confirmActionPopupData.title = 'Modifica';
            this.confirmActionPopupData.text = 'Dopo aver modificato l’importo il cliente verra notificato di questa modifica e potra procedere con il pagamento.';
            this.confirmActionPopupData.actions.push({
              type: 'Payment_input_edit',
              source: 'euro',
              label: 'Inserisci l’importo',
              description: 'All’importo verra aggiunto 5.5% di tassa Starbook.'
            });
            this.confirmActionPopupData.buttons.push({
              type: 'editPrice',
              text: 'Inserisci importo'
            });
            this.confirmActionPopupData.buttons.push({
              type: 'close',
              text: 'Chiudi'
            });
            this.confirmActionPopupData.price = Math.round((parseInt(popup.data.payment) / 1.055) / 100);
            this.confirmActionPopupState = 'active';
            this.activePopup = 'confirmAction';
            this.shadowState = 'active';
            break;
          case 'continueOrder':
            this.confirmActionPopupData.orderId = popup.data.orderId;
            this.confirmActionPopupData.title = 'Pagamento';
            this.confirmActionPopupData.text = 'Dopo aver effettuato il pagamento riceverai una mail con la fattura del ordine.';
            this.confirmActionPopupData.text2 = 'Al’importo verra aggiunto 5.5% di tasse Starbook.';
            let price = Math.round((parseInt(popup.data.payment) / 1.055) / 100);
            let tax = (parseInt(popup.data.payment) - Math.round(parseInt(popup.data.payment) / 1.055)) / 100;
            this.confirmActionPopupData.actions.push({
              type: 'Payment_information',
              information: price + '€ + ' + tax + '€ = ' + parseInt(popup.data.payment) / 100 + '€'
            });
            this.confirmActionPopupData.buttons.push({
              type: 'continueOrder',
              text: 'Procedi con il pagamento'
            });
            this.confirmActionPopupData.buttons.push({
              type: 'close',
              text: 'Chiudi'
            });
            this.confirmActionPopupState = 'active';
            this.activePopup = 'confirmAction';
            this.shadowState = 'active';
            break;
          case 'logout':
            this.confirmPopupData.title = 'Sicuro di voler uscire?';
            this.confirmPopupData.data = [];
            this.confirmPopupData.information = '';
            this.confirmPopupData.button = 'logout';
            this.confirmPopupData.type = 'logout';
            this.confirmPopupState = 'active';
            this.activePopup = 'logout';
            this.shadowState = 'active';
            break;
          case 'error':
            this.finishPopupData.title = '';
            this.finishPopupData.text = [];
            this.getErrorPopup(popup.data.title, popup.data.message);
            break;
        }
      });
    }

    this.auth = this.authServics.authInit();
  }

  clearData() {
    this.addCardData = {
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
    // this.loginData = {
    //     email: '',
    //     password: '',
    //     type: '',
    //     orderData: {}
    //   };
    this.registrationData = {
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: ''
      };
    this.recoveryData = {
        email: ''
      };
    this.confirmPopupData = {
        id: null,
        title: '',
        text: '',
        data: [],
        information: {},
        button: '',
        type: ''
      };
    this.confirmFinishPopupData = {
        title: '',
        text: '',
        type: 'center'
      };
    this.confirmActionPopupData = {
        orderId: '',
        type: '',
        title: '',
        text: '',
        text2: '',
        actions: [],
        buttons: [],
        price: null
      };
    this.loginError = {
      email: false,
      password: false
    };
  }

  ngOnDestroy() {
    if (isBrowser) {
      this.subscription.unsubscribe();
    }
  }

}
