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
    trigger('confirmOrderPopupState', [
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
    trigger('confirmOrderFinishPopupState', [
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
  public confirmOrderPopupState = 'inactive';
  public confirmOrderFinishPopupState = 'inactive';
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
  public confirmOrderData = {
    id: null
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
    if (type === 'confirmOrderFinish') {
      this.confirmOrderFinishPopupState = 'active';
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
    if (this.confirmOrderPopupState === 'active') {
      this.confirmOrderPopupState = 'inactive';
    }
    if (this.confirmOrderFinishPopupState === 'active') {
      this.confirmOrderFinishPopupState = 'inactive';
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
          this.getPopup('confirmOrderFinish');
          this.popupService.actionComplete({type: 'confirmOrder', data: {orderId: id}})
        })
        .catch((error) => {
          this.formError = true;
          this.formError = {
            title: 'Order confirmation error',
            message: `An error occurred during the order confirmation. Please try again.`
          };
        });
  }

  ngOnInit() {
    this.subscription = this.popupService.getActivePopup$.subscribe(popup => {
      if (popup.type === 'login') {
        this.loginPopupState = 'active';
        this.activePopup = 'login';
        this.shadowState = 'active';
      }
      if (popup.type === 'confirmOrder') {
        this.confirmOrderData.id = popup.data.orderId;
        this.confirmOrderPopupState = 'active';
        this.activePopup = 'confirmOrder';
        this.shadowState = 'active';
      }
    });
    this.auth = this.authServics.authInit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
