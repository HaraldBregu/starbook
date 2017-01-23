import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { PopupsService } from '../../popups/popups.service';
import { PaymentService } from '../../shared/payment.service';
import { Subscription }   from 'rxjs/Subscription';

export interface IUserData {
  fullname?: string;
  email?: string;
  phone_number?: string;
  street?: string;
  city?: string;
  postal_code?: number;
  province?: string;
  country?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit, OnDestroy {
  public selectTab: string|boolean = false;
  public SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public delta: number = 0;
  public tabs = [
    {name: 'Generali', selected: false, url: 'settings'},
    {name: 'Metodo di Pagamento', selected: false, url: 'payment'},
    {name: 'Condizioni d’utilizzo', selected: false, url: 'conditions'},
    {name: 'Privacy Policy', selected: false, url: 'privacy'},
    {name: 'Assistenza', selected: false, url: 'help'}
  ];

  public userData: IUserData = {
    fullname: '',
    email: '',
    phone_number: '',
    street: '',
    city: '',
    postal_code: null,
    province: '',
    country: ''
  };

  public activePopup = '';
  public changePasswordError = {
    currentPassword: false,
    passwordConfirm: false
  };
  public changePasswordData = {
    currentPassword: '',
    newPassword: '',
    passwordConfirm: ''
  };
  public formError: boolean|{title?: string, message: string, type?: string} = false;
  public cards = [];
  public defaultCard = '';
  public isLoading = false;
  subscription: Subscription;
  public isAuthenticated = false;

  constructor(private profileService: ProfileService, private router: Router, private navigationService: NavigationService, private route: ActivatedRoute, private  popupsService: PopupsService, private paymentService: PaymentService) { }

  ngOnInit() {
    if (localStorage.getItem('auth') !== null) {
      let authData = JSON.parse(localStorage.getItem('auth'));
      this.userData.fullname = authData.fullname;
      this.userData.email = authData.email;
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
      // this.router.navigate(['/']);
      this.tabs = [
        {name: 'Condizioni d’utilizzo', selected: false, url: 'conditions'},
        {name: 'Privacy Policy', selected: false, url: 'privacy'},
        {name: 'Assistenza', selected: false, url: 'help'}
      ];
    }
    // this.navigationService.updateMessage('Il mio account');
    this.route.params.subscribe(params => {
      this.selectTab = params['page'];
      if (params['page'] ==='payment') {
        this.navigationService.updateMessage('Metodo di pagamento');
        this.isLoading = true;
        this.paymentService.getCards()
            .then((cards) => {
              this.defaultCard = cards.default_source;
              this.cards = [];
              cards.sources.data.forEach((cardData) => {
                this.cards.push(cardData);
              });
              this.isLoading = false;
            })
            .catch((errors) => {
              console.log(errors);
            })
      }
      if (params['page'] ==='settings') {
        this.navigationService.updateMessage('Informazioni del mio account');
        this.isLoading = true;
        this.profileService.getProfile()
            .then((profile) => {
              this.userData.fullname = profile.result.profile.fullname;
              this.userData.email = profile.result.email;
              this.userData.phone_number = profile.result.phone_number;
              this.userData.street = profile.result.address.street;
              this.userData.city = profile.result.address.city;
              this.userData.postal_code = profile.result.address.postal_code;
              this.userData.province = profile.result.address.province;
              this.userData.country = profile.result.address.country;
              this.isLoading = false;
            })
            .catch((error) => {
              console.log(error);
            });
      }
      if (params['page'] ==='conditions') {
        this.navigationService.updateMessage('Termini e condizioni d’utilizzo');
      }
      if (params['page'] ==='privacy') {
        this.navigationService.updateMessage('Privacy Policy');
      }
      if (params['page'] ==='help') {
        this.navigationService.updateMessage('Assistenza');
      }
      console.log(params['page']);
    });

    this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
      switch (action.type) {
        case 'newCard':
          this.cards.push(action.data);
          this.isLoading = false;
          break;
        case 'startNewCard':
          this.isLoading = true;
          break;
        case 'cardEdited':
          let i = 0;
          this.cards.forEach((card) => {
            if (card.id === action.data.id) {
              this.cards[i] = action.data;
            }
            i++;
          });
          this.isLoading = false;
          break;
        case 'logout':
          if (localStorage.getItem('auth') !== null) {
            localStorage.removeItem('auth');
          }
          this.navigationService.updatePersonalMenu(false);
          this.router.navigate(['/']);
          break;
      }
    });
  }

  updateProfile() {
    this.profileService.updateProfile(this.userData)
      .then((data) => {
        if (data.success) {
          let profileData = {};

          if (localStorage.getItem('auth') !== null) {
            let authData = JSON.parse(localStorage.getItem('auth'));
            authData.profile.fullname = this.userData.fullname;
            authData.phone_number = this.userData.phone_number;
            authData.address.street = this.userData.street;
            authData.address.city = this.userData.city;
            authData.address.postal_code = this.userData.postal_code;
            authData.address.province = this.userData.province;
            authData.address.country = this.userData.country;
            profileData = authData;
            localStorage.setItem('auth', JSON.stringify(authData));
          }

          this.navigationService.updatePersonalMenu(profileData);
          this.formError = {
            title: '',
            message: 'Hai aggiornato le tue informazioni con successo!',
            type: 'success'
          };
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return false;
  }

  renderPage(page) {
    this.selectTab = page;
  }

  getPopup(type) {
    this.activePopup = type;
  }

  closePopup() {
    this.activePopup = '';
  }

  changePassword(currentPassword, newPassword, passwordConfirm) {
    this.closePopup();
    this.changePasswordData.currentPassword = '';
    this.changePasswordData.newPassword = '';
    this.changePasswordData.passwordConfirm = '';
    return false;
  }

  checkPassword(newPassword, passwordConfirm) {
    if (newPassword === passwordConfirm) {
      this.changePasswordError.passwordConfirm = false;
    } else {
      this.changePasswordError.passwordConfirm = true;
    }
  }

  swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
    let calculateDelta = this.delta + delta;
    let menuSize = 0;
    let allMenuItems = document.querySelectorAll('.left-navigate > div > a');
    for (let i = 0; i < allMenuItems.length; i++) {
      let menuItem: any = allMenuItems[i];
      menuSize += menuItem.offsetWidth;
    }
    let menuBlockWidth = document.querySelector('.left-navigate').clientWidth;
    let allowMargin = (menuSize) - menuBlockWidth;
    if (allowMargin >= 0) {
      allowMargin = -allowMargin;
      if (calculateDelta > 0) {
        this.delta = 0;
      } else {
        if (calculateDelta < allowMargin) {
          if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
            this.delta = allowMargin;
          }
        } else {
          this.delta = calculateDelta;
        }
      }
    }
  }

  addNewCard() {
    this.popupsService.activate({type: 'addCard'});
  }

  formatYear(year) {
    let i = 0;
    let formatedYear = '';
    let yearArray = year.toString().split('');
    yearArray.forEach((num) => {
      if (i > 1) {
        formatedYear += num;
      }
      i++;
    });
    return formatedYear;
  }

  formatCssClass(brand) {
    let result = '';
    if (brand === 'Visa') {
      result = 'visa';
    }
    if (brand === 'American Express') {
      result = 'amex';
    }
    if (brand === 'MasterCard') {
      result = 'mastercard';
    }
    return result;
  }

  selectCard(id) {
    this.isLoading = true;
    this.paymentService.selectCard(id)
        .then((status) => {
      this.isLoading = false;
          this.defaultCard = status.default_source;
        })
        .catch((error) => {
          console.log(error);
        });
  }

  deleteCard(id) {
    this.isLoading = true;
    this.paymentService.deleteCard(id)
        .then((status) => {
          this.isLoading = false;
          let i = 0;
          this.cards.forEach((card) => {
            if (card.id === id) {
              this.cards.splice(i, 1);
            }
            i ++;
          });
          if (id === this.defaultCard && this.cards.length > 0) {
            let otherCard = '';
            this.cards.forEach((card) => {
              if (card.id !== id) {
                otherCard = card.id;
              }
            });
            this.selectCard(otherCard);
          } else {
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  editCard(id) {
    let cardData = {};
    this.cards.forEach((card) => {
      if(card.id === id) {
        cardData = {
          id: card.id,
          address_city: card.address_city,
          address_country: card.address_country,
          address_line1: card.address_line1,
          address_line2: card.address_line2,
          address_state: card.address_state,
          address_zip: card.address_zip,
          exp_month: card.exp_month,
          exp_year: this.formatYear(card.exp_year),
          name: card.name,
          number: '**** ' + card.last4,
          cvc: '***'
        };
      }
    });
    this.popupsService.activate({type: 'editCard', data: cardData});
  }

  logout() {
    this.popupsService.activate({type: 'logout', data: {}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
