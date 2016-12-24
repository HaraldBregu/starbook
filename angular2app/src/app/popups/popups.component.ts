import { Component, OnInit, Input, Output, OnDestroy, EventEmitter, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NavigationService } from '../shared/navigation.service';
import { PopupsService } from './popups.service';
import { OrdersService } from '../shared/orders.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  animations: [
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
  public loginPopupState = 'inactive';
  public registrationPopupState = 'inactive';
  public recoveryPopupState = 'inactive';
  public finishPopupState = 'inactive';
  public confirmPopupState = 'inactive';
  public confirmFinishPopupState = 'inactive';
  public shadowState = 'inactive';
  public emailPattern;
  public auth;
  public loginData = {
    email: '',
    password: ''
  };
  public loginError = {
    email: false
  };
  public registrationData = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  public registrationError = {
    email: false,
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
    text: ''
  };
  public formError: boolean|{title: string, message: string} = false;
  constructor(private authServics: AuthService, private navigationService: NavigationService, private popupService: PopupsService, private ordersService: OrdersService) {
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
    this.activePopup = '';
    this.formError = false;

    if (!isReopen) {
      this.close.emit(true);
      this.shadowState = 'inactive';
    }
  }

  login(email: string, password: string) {
    if (this.emailPattern.test(email)) {
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
      this.loginError.email = true;
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
      }
    } else {
      switch (type) {
        case 'login':
          this.loginError.email = true;
          break;
        case 'registration':
          this.registrationError.email = true;
          break;
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
    if (this.emailPattern.test(email) && password === passwordConfirm) {
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

  ngOnInit() {
    this.subscription = this.popupService.getActivePopup$.subscribe(popup => {
      switch (popup.type) {
        case 'login':
          this.loginPopupState = 'active';
          this.activePopup = 'login';
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
      }
    });
    this.auth = this.authServics.authInit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
