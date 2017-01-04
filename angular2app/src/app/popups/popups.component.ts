import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, trigger, state, style, transition, animate, keyframes } from '@angular/core';
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
  @Output() close: EventEmitter<any> = new EventEmitter();
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
  public addCardError = {
    exp_date: false,
    number: false,
    cvc: false
  };
  public loginData = {
    email: '',
    password: ''
  };
  public loginError = {
    email: false,
    password: false
  };
  public registrationData = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  public registrationError = {
    name: false,
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
    title: '',
    text: '',
    text2: '',
    actions: [],
    buttons: [],
    price: null
  };
  public formError: boolean|{title: string, message: string} = false;
  constructor(private authServics: AuthService, private navigationService: NavigationService, private popupService: PopupsService, private ordersService: OrdersService, private paymentService: PaymentService) {
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
    }
    if (type === 'confirmFinish') {
      this.confirmFinishPopupState = 'active';
    }
    if (type === 'addCard') {
      this.addCardPopupState = 'active';
    }
    if (type === 'confirmAction') {
      this.confirmActionPopupState = 'active';
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
      this.close.emit(true);
      this.shadowState = 'inactive';
      this.clearData();
    }
  }

  login(email: string, password: string) {
    if (this.emailPattern.test(email) && password.length > 0) {
      this.authServics.login(email, password)
        .then((data) => {
          this.auth = data;
          this.navigationService.updatePersonalMenu(data);
          this.closePopup();
        })
        .catch((error) => {
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

  registration(name: string, email: string, password: string, passwordConfirm: string) {
    if (this.emailPattern.test(email) && password === passwordConfirm && password.length > 0 && name.length > 0) {
      this.authServics.signup(name, email, password)
        .then((data) => {
          this.auth = data;
          this.navigationService.updatePersonalMenu(data);
          this.closePopup();
        })
        .catch((error) => {
          switch (error) {
            case 409:
              this.formError = {
                title: 'Indirizzo e-mail già in uso.',
                message: `Hai indicato di essere un nuovo cliente ma è già 
                presente un account collegato all'indirizzo e-mail: mail@gmail.com`
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
      this.authServics.recovery(email)
        .then((status) => {
          this.getPopup('finish');
        })
        .catch((error) => {
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
    this.ordersService.modifyOrder(id, 'ACCEPT')
        .then((response) => {
          this.confirmFinishPopupData.title = 'Ordine confermato';
          this.confirmFinishPopupData.text = 'Questo ordine è stato confermato con successo.';
          this.getPopup('confirmFinish');
          this.popupService.actionComplete({type: 'confirmOrder', data: {orderId: id}});
        })
        .catch((error) => {
          this.formError = true;
          this.formError = {
            title: 'Order confirmation error',
            message: `An error occurred during the order confirmation. Please try again.`
          };
        });
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
    this.popupService.actionComplete({type: 'confirm'});
    this.closePopup();
  }

  addNewCard(number, exp_date, cvc, name, address_line1, address_line2, address_city, address_zip, address_state, address_country) {
    let error = false;
    if (number.length > 0) {
      this.addCardData.number = number;
    } else {
      error = true;
    }
    if (exp_date.length === 5) {
      let exp_parts = exp_date.split('/');
      if (exp_parts[0] !== exp_date) {
        this.addCardData.exp_month = exp_parts[0];
        this.addCardData.exp_year = exp_parts[1];
      } else {
        error = true;
      }
    } else {
      error = true;
    }
    if (cvc.length > 2)
    {
      this.addCardData.cvc = cvc;
    } else {
      error = true;
    }

    if (!error) {
      this.addCardData.name = name;
      this.addCardData.address_line1 = address_line1;
      this.addCardData.address_line2 = address_line2;
      this.addCardData.address_city = address_city;
      this.addCardData.address_zip = address_zip;
      this.addCardData.address_state = address_state;
      this.addCardData.address_country = address_country;
      this.paymentService.addNewCard(this.addCardData)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
  addPrice(orderId) {
    let orderPriceEur = parseInt(this.confirmActionPopupData.price) + ((parseInt(this.confirmActionPopupData.price) / 100) * 5.5);
    let orderPrice = parseFloat(orderPriceEur.toFixed(2)) * 100;
    this.ordersService.addPrice(orderId, 'ACTIVE_PAYMENT', orderPrice)
        .then((response) => {
          this.closePopup();
          this.popupService.actionComplete({type: 'addPrice', data: {orderId: orderId, orderPrice: orderPrice, isModified: response.nModified}});
        })
        .catch((error) => {
          console.log(error);
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
    this.confirmFinishPopupData.title = 'Pagamento effettuato';
    this.confirmFinishPopupData.text = 'Ti abbiamo inviato una mail e un sms con la conferma del pagamento e la ricevuta fiscale';
    this.confirmFinishPopupData.type = 'left';
    this.getPopup('confirmFinish');
  }

  ngOnInit() {
    this.subscription = this.popupService.getActivePopup$.subscribe(popup => {
      switch (popup.type) {
        case 'login':
          this.loginPopupState = 'active';
          this.activePopup = 'login';
          this.shadowState = 'active';
          break;
        case 'addCard':
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
          this.confirmPopupData.title = 'Conferma ordine?';
          this.confirmPopupData.text = 'Dopo aver confermato l’ordine il richiedente verra notificato tramite una mail e un sms.';
          this.confirmPopupData.button = 'Conferma';
          this.confirmPopupState = 'active';
          this.activePopup = 'confirmOrder';
          this.shadowState = 'active';
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
          this.confirmPopupData.title = 'Anteprima ordine';
          this.confirmPopupData.data = [];
          popup.data.orderData.forEach((product) => {
            product.items.forEach((item) => {
              this.confirmPopupData.data.push({productName: product.name, itemName: item.name});
            })
          });
          this.confirmPopupData.button = 'Conferma Ordine';
          this.confirmPopupData.type = 'newOrder';
          this.confirmPopupState = 'active';
          this.activePopup = 'confirmOrder';
          this.shadowState = 'active';
          break;
        case 'addPrice':
          this.confirmActionPopupData.orderId = popup.data.orderId;
          this.confirmActionPopupData.title = 'Completamento';
          this.confirmActionPopupData.text = 'Dopo aver inserito il totale, il cliente verra notificato e potra procedere con il pagamento. In caso di cambiamento importo potrai modificarlo successivamente.';
          this.confirmActionPopupData.actions.push({
            type: 'Payment_input_add',
            source: 'euro',
            label: 'Inserisci l’importo',
            description: 'All’importo verra aggiunto 5.5% di tassa Starbook.'
          });
          this.confirmActionPopupData.buttons.push({
            type: 'addPrice',
            text: 'Inserisci importo'
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
          this.confirmActionPopupData.actions.push({
            type: 'Payment_information',
            information: popup.data.information
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
      }
    });
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
    this.loginData = {
        email: '',
        password: ''
      };
    this.registrationData = {
        name: '',
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
        title: '',
        text: '',
        text2: '',
        actions: [],
        buttons: [],
        price: null
      };
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
