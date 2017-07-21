import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { PopupsService } from '../../popups/popups.service';
import { PaymentService } from '../../shared/payment.service';
import { Subscription }   from 'rxjs/Subscription';
import { SeoService } from '../../shared/seo.service';
import { ContactService } from '../../shared/contact.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit, OnDestroy {
  public emailPattern: any;
  public numPattern: any;
  public contacts = '';
  public copy_link_state = {
    title: "Copia link"
  };
  public sharelink = '';
  public currentUser;
  public activePopup = '';
  public cards = [];
  public defaultCard = '';
  subscription: Subscription;

  //////////////////////////
  /////// TAB BAR //////////
  //////////////////////////
  public page = '';
  public tabs = [
    {name: 'Generali', route: 'general', icon:"fa-info"},
    {name: 'Pagamento', route: 'payment', icon: "fa-credit-card"},
    {name: 'Impostazioni', route: 'settings', icon:"fa-cog"},
    // {name: 'Affiliazione', route: 'affiliate', icon:"fa-bullhorn"}
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

  ////////////////////////////
  /////// AFFILIATE //////////
  ////////////////////////////
  public invitation_state = {
    message_success: null,
    message_error: null
  };

  //////////////////////////
  /////// PAYMENT //////////
  //////////////////////////
  public Card = {
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

  public logo = '';

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private popupsService: PopupsService,
    private paymentService: PaymentService,
    private joinService: ContactService,
    private seoService: SeoService) {
    this.navigationService.updateMessage('');
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.numPattern = /^[+0-9]+$/;

    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
        // console.log('auth data' + JSON.stringify(authData));
        this.User.firstname = this.currentUser.profile.firstname;
        this.User.lastname = this.currentUser.profile.lastname;
        this.User.phone_number = this.currentUser.phone_number;
        this.User.email = this.currentUser.email;
        this.sharelink =  document.location.protocol + '//'+ document.location.hostname + '/?ref=' + this.currentUser._id;
      } else {
        this.router.navigate(['/']);
      }
    }
  }

  ngOnInit() {
    if (isBrowser) {
      this.route.params.subscribe(params => {
        window.scrollTo(0, 0);
        this.page = params['page'];
        if (this.page ==='general') {

        }
        else if (this.page ==='payment') {
          // this.paymentService.getCards().then((cards) => {
          //   this.defaultCard = cards.default_source;
          //   this.cards = [];
          //   cards.sources.data.forEach((cardData) => {
          //     this.cards.push(cardData);
          //   });
          // }).catch((error) => {
          //   if (error.status === 404) {
          //     // This Starbook account do not have a Stripe account
          //     // When you add a new card, will be created a Stripe account
          //     // and update the Starbook account
          //   }
          // })
        }
        else if (this.page ==='settings') {

        }
        else if (this.page ==='affiliate') {
          // this.router.navigate(['profile/general']);

        } else if (this.page ==='card') {

        } else {
          // this.router.navigate(['profile/general']);
        }
      })


      this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
        switch (action.type) {
          case 'logout':
          if (isBrowser) {
            if (localStorage.getItem('auth') !== null) {
              localStorage.removeItem('auth');
            }
          }
          this.navigationService.updatePersonalMenu(false);
          this.router.navigate(['/']);
          break;
        }
      })
    }
  }

  clickTabItem(route) {
    this.router.navigate(['/profile/' + route]);
  }

  ///////////////////////
  /////// USER //////////
  ///////////////////////
  saveProfile() {
    this.user_state.loading = true;
    this.user_state.button_title = "Salvando..."
    this.profileService.updateProfile(this.User).then((data) => {
      this.user_state.loading = false;
      this.user_state.button_title = "Salva"
      if (data.success) {
        let profileData = {};
        if (isBrowser) {
          if (localStorage.getItem('auth') !== null) {
            let authData = JSON.parse(localStorage.getItem('auth'));
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
    })
  }

  ////////////////////////
  /////// EMAIL //////////
  ////////////////////////
  saveNewEmail() {}

  ////////////////////////////
  /////// AFFILIATE //////////
  ////////////////////////////
  sendInvitations() {
    var phone_numbers = [];
    var email_addresses = [];
    var strings = this.contacts.split(',');
    for (var i = 0; i < strings.length; i++) {
      var string = strings[i];
      string = string.replace(/\s/g, '');
      if (this.emailPattern.test(string)) {
        email_addresses.push(string);
      } else if (this.numPattern.test(string)) {
        if (string.length === 13 && string.charAt(0) === '+') {
          phone_numbers.push(string);
        } else if (string.length === 12) {
          phone_numbers.push('+' + string);
        } else if (string.length === 10) {
          phone_numbers.push('+39' + string);
        } else if (string.length === 14) {
          phone_numbers.push(string);
        }
      }
    }
    var phones = '';
    for (var i = 0; i < phone_numbers.length; i++) {
      var p = phone_numbers[i]
      phones += (i != 0) ? ',' : ''
      phones += p
    }

    var emails = '';
    for (var i = 0; i < email_addresses.length; i++) {
      var e = email_addresses[i]
      emails += (i != 0) ? ',' : ''
      emails += e
    }

    // console.log('phone_numbers: ' + phone_numbers);
    if (phones==='' && emails==='') {
      this.invitation_state.message_success = null;
      this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
      return;
    }
    this.invitation_state.message_success = null;
    this.invitation_state.message_error = null;
    this.joinService.sendInvitations(this.sharelink, phones, emails).then((response) => {
      // console.log('response: ' + JSON.stringify(response));
      this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
    });
  }
  shareOnFacebook() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnTwitter() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      // console.log('share link is: ' + this.sharelink);
      window.open("https://twitter.com/home?status=" + this.sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnLinkedin() {
    if (isBrowser) {
      let link = this.sharelink;
      let title = "Titolo";
      let summary = "Summary";
      let source = "";
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnGoogle() {
    if (isBrowser) {
      let link = this.sharelink;
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://plus.google.com/share?url=" + link,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareWithEmail() {
    if (isBrowser) {
      let message = "Ciao, utilizza il link sotto per ricevere 5% di scondo sui servizi Starbook. \n" + this.sharelink;
      let subject = "Promozione Starbook"
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message),
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  copyLink( value: string ) : void {
    this.copy_link_state.title = "Copiato!"
    // console.group( "Clipboard Success" );
    // console.log( value );
    // console.groupEnd();
  }
  copyError( error: Error ) : void {
    // console.group( "Clipboard Error" );
    // console.error( error );
    // console.groupEnd();
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
    if (this.card_state.loading) {return;}
    this.card_state.loading = true;
    this.card_state.button_title = "Salvando...";
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
      this.card_state.button_title = "Salva";
      this.card_state.message_error = null;
      this.card_state.number_error = null;
      this.card_state.exp_date_error = null;
      this.card_state.cvc_error = null;
      this.router.navigate(['/profile/payment']);
    }).catch((error) => {
      this.card_state.loading = false;
      this.card_state.button_title = "Salva";
      this.card_state.message_error = null;
      this.card_state.number_error = null;
      this.card_state.exp_date_error = null;
      this.card_state.cvc_error = null;
      if (error === 400) {
        this.card_state.message_error = "Errore nel inserimento del codice della sicurezza";
        this.card_state.cvc_error = "Inserisci un codice corretto";
      } else if (error === 402) {
        this.card_state.message_error = "Errore nel inserimento del numero della carta o della data di scadenza";
        this.card_state.number_error = "Inserisci un numero corretto";
        this.card_state.exp_date_error = "Inserisci una data corretta";
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
