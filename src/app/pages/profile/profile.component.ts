import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { PopupsService } from '../../popups/popups.service';
import { PaymentService } from '../../shared/payment.service';
import { Subscription }   from 'rxjs/Subscription';
import { AnalyticsService } from '../../shared/analytics.service';
import { SeoService } from '../../shared/seo.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit, OnDestroy {

  //////////////////////////
  /////// TAB BAR //////////
  //////////////////////////
  public page = '';
  public tabs = [
    {name: 'Generali', route: 'general'},
    {name: 'Pagamento', route: 'payment'},
    {name: 'Impostazioni', route: 'settings'}
  ];

  ///////////////////////
  /////// USER //////////
  ///////////////////////
  public User = {
    firstname: '',
    lastname: '',
    email: '',
    phone_number: ''
  }
  public user_state = {
    loading: false,
    button_title: "Salva",
    first_name_error: null,
    last_name_error: null,
    email_error: null,
    phone_number_error: null
  }

  ///////////////////////////
  /////// PASSWORD //////////
  ///////////////////////////
  public Password = {
    old_password: '',
    new_password: '',
    confirm_password: ''
  }
  public password_state = {
    loading: false,
    button_title: "Cambia",
    message_error: null,
    message_success: null
  }

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

  public activePopup = '';
  public cards = [];
  public defaultCard = '';
  subscription: Subscription;


  constructor(private profileService: ProfileService, private router: Router, private navigationService: NavigationService, private route: ActivatedRoute, private popupsService: PopupsService, private paymentService: PaymentService, private analyticsService: AnalyticsService, private seoService: SeoService) {
    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        let authData = JSON.parse(localStorage.getItem('auth'));
        this.User.firstname = authData.profile.firstname;
        this.User.lastname = authData.profile.lastname;
        this.User.phone_number = authData.phone_number;
        this.User.email = authData.email;
        // console.log('authData: ' + JSON.stringify(authData));
        // console.log('this User: ' + JSON.stringify(this.User));

        // this.profileService.getProfile().then((profile) => {
        //   this.User.firstname = profile.result.profile.firstname;
        //   this.User.lastname = profile.result.profile.lastname;
        //   this.User.email = profile.result.email;
        //   this.User.phone_number = profile.result.phone_number;
        // }).catch((error) => {
        //   console.log('error message: ' + JSON.stringify(error));
        //   if (error.json().message) {
        //     this.popupsService.activate({type: 'error', data: {title:'Errore', message: error.json().message}});
        //   } else {
        //     this.popupsService.activate({type: 'error', data: {title:'Errore', message: 'An error has occurred'}});
        //   }
        // });
      } else {
        this.router.navigate(['/']);
      }
    }
    this.paymentService.getCards().then((cards) => {
      this.defaultCard = cards.default_source;
      this.cards = [];
      cards.sources.data.forEach((cardData) => {
        this.cards.push(cardData);
      });
      // console.log('cards: ' + JSON.stringify(this.cards));
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
      if (error.status === 404) {
        // This Starbook account do not have a Stripe account
        // When you add a new card, will be created a Stripe account
        // and update the Starbook account
      }
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page'];
      if (this.page ==='general') {
        this.navigationService.updateMessage('Informazioni del mio account');
      } else if (this.page ==='payment') {
        this.navigationService.updateMessage('Metodo di pagamento');
      } else if (this.page ==='settings') {
        this.navigationService.updateMessage('Impostazioni');
      } else if (this.page ==='card') {
        this.navigationService.updateMessage('Impostazioni');
      }
    });

    if (isBrowser) {
      // this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
      //   switch (action.type) {
      //     case 'newCard':
      //       this.cards.push(action.data);
      //       break;
      //     case 'newCardError':
      //       break;
      //     case 'startNewCard':
      //       break;
      //     case 'cardEdited':
      //       let i = 0;
      //       this.cards.forEach((card) => {
      //         if (card.id === action.data.id) {
      //           this.cards[i] = action.data;
      //         }
      //         i++;
      //       });
      //       break;
      //     case 'logout':
      //       if (isBrowser) {
      //         if (localStorage.getItem('auth') !== null) {
      //           localStorage.removeItem('auth');
      //         }
      //       }
      //       this.navigationService.updatePersonalMenu(false);
      //       this.router.navigate(['/']);
      //       break;
      //   }
      // });
    }
  }

  clickTabItem(route) {
    this.router.navigate(['/profile/' + route]);
  }


  ///////////////////////
  /////// USER //////////
  ///////////////////////
  saveProfile() {
    console.log('Current object User: ' + JSON.stringify(this.User));
    this.user_state.loading = true;
    this.user_state.button_title = "Salvando..."
    this.profileService.updateProfile(this.User).then((data) => {
      this.user_state.loading = false;
      this.user_state.button_title = "Salva"
      if (data.success) {
        console.log(' data: ' + JSON.stringify(data));

        let profileData = {};
        if (isBrowser) {
          if (localStorage.getItem('auth') !== null) {
            let authData = JSON.parse(localStorage.getItem('auth'));
            console.log('auth data: ' + JSON.stringify(authData));
            authData.profile.firstname = this.User.firstname;
            authData.profile.lastname = this.User.lastname;
            authData.profile.fullname = this.User.firstname + ' ' + this.User.lastname;
            authData.phone_number = this.User.phone_number;
            profileData = authData;
            localStorage.setItem('auth', JSON.stringify(authData));
          }
        }
        this.navigationService.updatePersonalMenu(profileData);
      }}).catch((error) => {
        this.user_state.loading = false;
        this.user_state.button_title = "Salva"
      });
  }

  ///////////////////////////
  /////// PASSWORD //////////
  ///////////////////////////
  changePassword() {
    if (this.password_state.loading) {return;}
    if (this.Password.old_password.length !== 0 && this.Password.new_password.length !== 0 && this.Password.confirm_password.length !== 0) {
      if (this.Password.new_password !== this.Password.confirm_password) {
        this.password_state.message_error = "Conferma correttamente la nuova password!";
        return;
      }
    } else if (this.Password.old_password.length === 0 || this.Password.new_password.length === 0 || this.Password.confirm_password.length === 0) {
      this.password_state.message_error = "Compila tutti i campi richiesti!";
      return;
    }
    this.password_state.loading = true;
    this.password_state.button_title = "Cambiando...";
    this.password_state.message_success = null;
    this.password_state.message_error = null;
    this.profileService.changePassword(this.Password).then((data) => {
      this.password_state.loading = false;
      this.password_state.button_title = "Cambia";
      this.Password.old_password = '';
      this.Password.new_password = '';
      this.Password.confirm_password = '';
      this.password_state.message_success = "Verifica la nuova password clicando il link che ti abbiamo inviato tramite mail.";
      this.password_state.message_error = null;
    }).catch((error) => {
      this.password_state.loading = false;
      this.password_state.button_title = "Cambia";
      this.password_state.message_success = null;
      this.password_state.message_error = "Errore nel cambio password";
      if (error.status === 401) {
        this.password_state.message_error = "La password attuale inserita non è corretta.";
      }
      if (error.status === 422) {
        this.password_state.message_error = "Inserisci tutti i parametri richiesti correttamente.";
      }
    });
  }

  ////////////////////////
  /////// EMAIL //////////
  ////////////////////////
  saveNewEmail() {

  }

  ///////////////////////
  /////// CARD //////////
  ///////////////////////
  showCardPage() {
    this.router.navigate(['/profile/card']);
  }
  selectCard(card_id) {
    this.paymentService.selectCard(card_id).then((status) => {
      this.defaultCard = status.default_source;
    }).catch((error) => {

    });
  }
  deleteCard(card_id) {
    this.paymentService.deleteCard(card_id).then((status) => {
      let i = 0;
      this.cards.forEach((card) => {
        if (card.id === card_id) {
          this.cards.splice(i, 1);
        }
        i ++;
      });
      if (card_id === this.defaultCard && this.cards.length > 0) {
        let otherCard = '';
        this.cards.forEach((card) => {
          if (card.id !== card_id) {
            otherCard = card.id;
          }
        });
        this.selectCard(otherCard);
      } else {

      }
    }).catch((error) => {

    });
  }
  addCard() {
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
    console.log('card: ' + JSON.stringify(this.Card));

    // return;
    this.card_state.message_error = "Errore carta";
    this.paymentService.addNewCard(this.Card).then((response) => {
      console.log('addCard response: ' + JSON.stringify(response));

    }).catch((error) => {

      // 402
      // Error expiration date
      console.log('error response: ' +  JSON.stringify(error));
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
    console.log('exp date: ' + result);
    // this.addCardData.exp_date = result;
    this.Card.exp_date = result
    return result;
  }

  //
  // swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
  //   let calculateDelta = this.delta + delta;
  //   let menuSize = 0;
  //   let allMenuItems = document.querySelectorAll('.left-navigate > div > a');
  //   for (let i = 0; i < allMenuItems.length; i++) {
  //     let menuItem: any = allMenuItems[i];
  //     menuSize += menuItem.offsetWidth;
  //   }
  //   let menuBlockWidth = document.querySelector('.left-navigate').clientWidth;
  //   let allowMargin = (menuSize) - menuBlockWidth;
  //   if (allowMargin >= 0) {
  //     allowMargin = -allowMargin;
  //     if (calculateDelta > 0) {
  //       this.delta = 0;
  //     } else {
  //       if (calculateDelta < allowMargin) {
  //         if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
  //           this.delta = allowMargin;
  //         }
  //       } else {
  //         this.delta = calculateDelta;
  //       }
  //     }
  //   }
  // }

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
  }
}
