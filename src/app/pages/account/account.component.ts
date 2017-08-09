import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { AuthService } from '../../shared/auth.service';
import { ContactService } from '../../shared/contact.service';
import { SeoService } from '../../shared/seo.service';
import { PopupsService } from '../../popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { CommonService } from '../../shared/common.service';

require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent implements OnInit {
  public emailPattern: any;
  subscription: Subscription;
  public page = ''
  public tabs = [
    {name: 'Profilo', route: 'profile'},
    {name: 'Azienda', route: 'company'},
    // {name: 'Rete', route: 'share'},
    {name: 'Condividi', route: 'share'},
    // {name: 'Preventivi', route: 'estimate'},
    // {name: 'Lavori', route: 'jobs'},
    {name: 'Servizi', route: 'services'},
    {name: 'Impostazioni', route: 'settings'},
    // {name: 'Assistenza', route: 'support'},
  ]

  public Account = {
    _id: '',
    email:'',
    phone_number: '',
    profile: {
      firstname: '',
      lastname:'',
      description: '',
      phone_number: ''
    },
    birthday: {
      day: 0,
      month: 0,
      year: 0
    },
    gender : "none",
    business: {
      name:'',
      tagline: '',
      description: '',
      vat: '',
      phone_number: '',
      website: '',
      email: ''
    },
    address: {
      "street" : "",
      "street_number" : "",
      "city" : "",
      "postal_code" : "",
      "province" : "",
      "country" : "",
      "country_code" : ""
    },
    price: {
      hourly:0,
    }
  }
  public account_state = {
    loading: false,
    message_error: null,
    message_success: null,
    firstname_error: null,
    lastname_error: null,
  }

  public Password = {
    old: '',
    new: '',
    confirm: ''
  }
  public password_state = {
    loading: false,
    message_error: null,
    message_success: null,
    old_password_error: null,
    new_password_error: null,
    confirm_password_error: null,
  }

  public Picture = {
    url: '',
    file: null
  }
  public Picture_url = ''
  public picture_state = {
    loading: false,
    url_error: '',
    file_error: null
  }
  public Logo = {
    url: '',
    file: null
  }
  public Logo_url = ''
  public logo_state = {
    loading: false,
    url_error: '',
    file_error: null
  }

  public Services = []

  public day = 0;
  public days = []
  public month = 0;
  public months = [
    { value: 0, display: "mese" },
    { value: 1, display: "Gennaio" },
    { value: 2, display: "Febbraio" },
    { value: 3, display: "Marzo" },
    { value: 4, display: "Aprile" },
    { value: 5, display: "Maggio" },
    { value: 6, display: "Giugno" },
    { value: 7, display: "Luglio" },
    { value: 8, display: "Agosto" },
    { value: 9, display: "Settembre" },
    { value: 10, display: "Ottobre" },
    { value: 11, display: "Novembre" },
    { value: 12, display: "Dicembre" },
  ]
  public year = 0;
  public years = []
  public gender = 'none'
  public genders = [
    { value: 'none', display:"nessuno" },
    { value: 'female', display:"Donna" },
    { value: 'male', display:"Uomo" }
  ]

  public profile_link = ''

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private profileService: ProfileService, private authService: AuthService, private seoService: SeoService, private contactService: ContactService, private popupsService: PopupsService, private commonService: CommonService) {
    this.navigationService.updateMessage("Pannello di controllo")
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.days.push({ value: 0, display: "giorno" })
    for (var i = 0; i < 31; i++) {
      var v = 1;
      v += i;
      this.days.push({ value: v, display: v.toString() })
    }
    this.years.push({ value: 0, display: "anno" })
    for (var i = 0; i < 60; i++) {
      var v = 1950;
      v += i;
      this.years.push({ value: v, display: v.toString() })
    }

    if (isBrowser) {
      let account = JSON.parse(localStorage.getItem('auth'))
      this.profile_link = "https://www.starbook.co/profile/" + account._id

      if (!account) {
        this.router.navigate(['/'])
        return;
      }
      if (!account['business']) {
        account['business'] = {
          name:'',
          tagline: ''
        }
      }
      if (!account['price']) {
        account['price'] = {
          hourly:0
        }
      }
      if (!account['gender']) {
        account['gender'] = 'none'
      }
      if (!account['birthday']) {
        account['birthday'] = {
          day: 0,
          month: 0,
          year: 0
        }
      }
      this.Account = account

      this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
        switch (action.type) {
          case 'logout':
          if (isBrowser) {
            if (localStorage.getItem('auth') !== null) {
              localStorage.removeItem('auth');
            }
          }
          this.navigationService.updatePersonalMenu(false);
          if (this.page === "Account") {
            this.router.navigate(['/'])
          }
          break;
        }
      })
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.profile_link = "https://www.starbook.co/profile/" + this.Account._id
      this.page = params['page']
      if (isBrowser) { window.scrollTo(0, 0) }
      if (this.page==="services") {
        this.commonService.getMyServices().then((data) => {
          // console.log('service data' + JSON.stringify(data));
          this.Services = data.result;
        }).catch((error) => {
          // console.log('service error' + JSON.stringify(error));
        })
      }
      else if (this.page==="profile") {

      }
      else if (this.page==="company") {

      }
      else if (this.page==="share") {

      }
      else if (this.page==="settings") {

      }
      else {
        this.router.navigate(['/account/profile'])
      }
    })
  }

  // PROFILE LOGO
  selectProfilePicture(fileInput:any) {
    this.picture_state.loading = true
    this.Picture.url = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.Picture.url = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.Picture.file = this.Picture.url
    this.picture_state.file_error = null

    if (this.Picture.file) {
      let AWSService = (<any>window).AWS;
      AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
      AWSService.config.secretAccessKey = "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";
      let bucket = new AWSService.S3()
      let params = {
        Bucket: 'starbook-s3',
        Key:'accounts/' + this.Account['_id'] + '/avatar/0',
        Body:this.Picture.file,
        ACL:"public-read",
        CacheControl: "public, max-age=8"
      }
      bucket.upload(params, (error, res) => {
        this.picture_state.loading = false
        this.Picture_url = res.Location
        if (!error) {
          // console.log('res upload file: ' + JSON.stringify(res));
        } else {
          // console.log('error upload file: ' + error);
        }
      })
    }
  }
  checkPicture(account) {
    if (isBrowser) {
      var picture_image = new Image()
      picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
      if (this.Picture.url) {
        return this.Picture.url
      } else {
        return (picture_image.width > 0) ? picture_image.src : '../assets/images/no_picture.png'
      }
    }
  }

  // COMPANY LOGO
  selectCompanyLogo(fileInput:any) {
    this.logo_state.loading = true
    this.Logo.url = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.Logo.url = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.Logo.file = this.Logo.url
    this.logo_state.file_error = null

    if (this.Logo.file) {
      let AWSService = (<any>window).AWS;
      AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
      AWSService.config.secretAccessKey = "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";
      let bucket = new AWSService.S3()
      let params = {
        Bucket: 'starbook-s3',
        Key:'accounts/' + this.Account['_id'] + '/avatar/1',
        Body:this.Logo.file,
        ACL:"public-read",
        CacheControl: "public, max-age=8"
      }
      bucket.upload(params, (error, res) => {
        this.logo_state.loading = false
        this.Logo_url = res.Location;
        if (!error) {
          // console.log('res upload file: ' + JSON.stringify(res));
        } else {
          // console.log('error upload file: ' + error);
        }
      })
    }
  }
  checkLogo(account) {
    if (isBrowser) {
      var picture_image = new Image()
      picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      if (this.Logo.url) {
        return this.Logo.url
      } else {
        return (picture_image.width > 0) ? picture_image.src : '../assets/images/no_logo.png'
      }
    }
  }

  // SAVE INFORMATION
  saveInformations() {
    this.account_state.loading = true
    this.profileService.updateProfile(this.Account).then((data) => {
      if (data.success) {
        let profileData = {};
        if (isBrowser) {
          this.Account['profile']['fullname'] = this.Account['profile']['firstname'] + ' ' + this.Account['profile']['lastname']
          if (localStorage.getItem('auth') !== null) {
            localStorage.setItem('auth', JSON.stringify(this.Account));
          }
        }
        this.navigationService.updatePersonalMenu(this.Account);
        this.account_state.loading = false
      }
    }).catch((error) => {
      this.account_state.loading = false
    })
  }

  // EMAIL UPDATE
  updateEmail() {
    if (this.account_state.loading) {return}
    if (this.Account['email'].length === 0) {
      this.account_state.message_error = "Per favore, inserisci un email!"
      return
    }
    this.account_state.loading = true
    this.account_state.message_error = null
    this.account_state.message_success = null
    this.profileService.changeEmail({email:this.Account['email']}).then((data) => {
      this.account_state.loading = false
      this.account_state.message_success = "Verifica la nuova email clicando il link che ti abbiamo inviato nella vecchia email."
    }).catch((error) => {
      this.account_state.loading = false
      this.account_state.message_error = null
      if (error.status === 401) {
        this.account_state.message_error = "Errore nel cambio email";
      }
      else if (error.status === 409) {
        this.account_state.message_error = "La nuova email scelta esiste gia, scegli un indirizzo diverso."
      }
    })
  }

  // PASSWORD UPDATE
  updatePassword() {
    if (this.password_state.loading) {return;}
    if (this.Password.old.length !== 0 && this.Password.new.length !== 0 && this.Password.confirm.length !== 0) {
      if (this.Password.new !== this.Password.confirm) {
        this.password_state.message_error = "Per favore, conferma correttamente la nuova password!";
        return;
      }
    }
    else if (this.Password.old.length === 0 || this.Password.new.length === 0 || this.Password.confirm.length === 0) {
      this.password_state.message_error = "Per favore, compila tutti i campi richiesti!";
      return;
    }
    this.password_state.loading = true;
    this.password_state.message_success = null;
    this.password_state.message_error = null;
    this.profileService.changePassword(this.Password).then((data) => {
      this.password_state.loading = false;
      this.Password.old = '';
      this.Password.new = '';
      this.Password.confirm = '';
      this.password_state.message_success = "Verifica la nuova password clicando il link che ti abbiamo inviato tramite mail.";
      this.password_state.message_error = null;
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
      this.password_state.loading = false;
      this.password_state.message_success = null;
      this.password_state.message_error = "Errore nel cambio password";
      if (error.status === 401) {
        this.password_state.message_error = "La password attuale inserita non è corretta.";
      }
      if (error.status === 422) {
        this.password_state.message_error = "Per favore, inserisci tutti i parametri richiesti correttamente.";
      }
    })
  }
  updatePrice() {
    let value = this.Account.price.hourly
    if (isNaN(value) || value === 0 || value < 0) {
      this.Account.price.hourly = 0
    } else if (!this.Account.price.hourly) {
      this.Account.price.hourly = 0
    } else {
      this.Account.price.hourly = value
    }
  }

  // SHARE LINK
  // sendInvitations() {
  //   var phone_numbers = [];
  //   var email_addresses = [];
  //   var strings = this.contacts.split(',');
  //   for (var i = 0; i < strings.length; i++) {
  //     var string = strings[i];
  //     string = string.replace(/\s/g, '');
  //     if (this.emailPattern.test(string)) {
  //       email_addresses.push(string);
  //     } else if (this.numPattern.test(string)) {
  //       if (string.length === 13 && string.charAt(0) === '+') {
  //         phone_numbers.push(string);
  //       } else if (string.length === 12) {
  //         phone_numbers.push('+' + string);
  //       } else if (string.length === 10) {
  //         phone_numbers.push('+39' + string);
  //       } else if (string.length === 14) {
  //         phone_numbers.push(string);
  //       }
  //     }
  //   }
  //   var phones = '';
  //   for (var i = 0; i < phone_numbers.length; i++) {
  //     var p = phone_numbers[i]
  //     phones += (i != 0) ? ',' : ''
  //     phones += p
  //   }
  //
  //   var emails = '';
  //   for (var i = 0; i < email_addresses.length; i++) {
  //     var e = email_addresses[i]
  //     emails += (i != 0) ? ',' : ''
  //     emails += e
  //   }
  //
  //   // console.log('phone_numbers: ' + phone_numbers);
  //   if (phones==='' && emails==='') {
  //     this.invitation_state.message_success = null;
  //     this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
  //     return;
  //   }
  //   this.invitation_state.message_success = null;
  //   this.invitation_state.message_error = null;
  //   this.joinService.sendInvitations(this.sharelink, phones, emails).then((response) => {
  //     // console.log('response: ' + JSON.stringify(response));
  //     this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
  //   }).catch((error) => {
  //     // console.log('error: ' + JSON.stringify(error));
  //   });
  // }
  shareOnFacebook() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.profile_link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnTwitter() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      let status = "Visita il mio profilo Starbook: " + this.profile_link
      window.open("https://twitter.com/home?status=" + status, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnGoogle() {
    if (isBrowser) {
      let link = this.profile_link;
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://plus.google.com/share?url=" + link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnPinterest() {
    if (isBrowser) {
      let link = this.profile_link;
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      var picture = new Image()
      var logo = new Image()
      picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1'
      var media = ''
      if (logo.width > 0) {
        media = logo.src
      } else if (picture.width>0) {
        media = picture.src
      } else {
        media = "https://www.starbook.co/assets/images/no_logo_blue.png"
      }
      var description = "Guarda il mio profilo su Starbook"
      window.open("https://pinterest.com/pin/create/button/?url=" + link + "&media=" + media + "&description=" + description, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnLinkedin() {
    if (isBrowser) {
      let link = this.profile_link;
      let title = "Guarda il mio profilo su Starbook";
      let summary = "Il mio profilo professionale su Starbook";
      var picture = new Image()
      var logo = new Image()
      picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1'
      var media = ''
      if (logo.width > 0) {
        media = logo.src
      } else if (picture.width>0) {
        media = picture.src
      } else {
        media = "https://www.starbook.co/assets/images/no_logo_blue.png"
      }
      let source = media
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareWithEmail() {
    if (isBrowser) {
      let message = "Ciao\nTi invito a visitare il mio profilo professionale su Starbook: " + this.profile_link;
      let subject = "Visita il mio profilo professionale Starbook"
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  copyLink( value: string ) : void {
    // console.group( "Clipboard Success" );
    // console.log( value );
    // console.groupEnd();
  }
  copyError( error: Error ) : void {
    // console.group( "Clipboard Error" );
    // console.error( error );
    // console.groupEnd();
  }

  // SERVICES
  checkImageUrlFromService(service) {
    var image = new Image()
    image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
    if (image.width > 0) {
      return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
    } else {
      return ''
    }
  }
  showService(service) {
    this.commonService.setObjectForKey(service, 'service')
    this.router.navigate(['services', service._id]);
  }
  createService() {
    this.router.navigate(['/insert/product']);
  }
  clickTabItem(route) {
    this.router.navigate(['/account/' + route]);
  }

  logout() {
    this.popupsService.activate({type: 'logout', data: {}});
  }

  // EXTRA
  // selectCard(card_id) {
  //   this.paymentService.selectCard(card_id).then((status) => {
  //     this.defaultCard = status.default_source;
  //   }).catch((error) => {
  //
  //   });
  // }
  // deleteCard(card_id) {
  //   this.paymentService.deleteCard(card_id).then((status) => {
  //     let i = 0;
  //     this.cards.forEach((card) => {
  //       if (card.id === card_id) {
  //         this.cards.splice(i, 1);
  //       }
  //       i ++;
  //     });
  //     if (card_id === this.defaultCard && this.cards.length > 0) {
  //       let otherCard = '';
  //       this.cards.forEach((card) => {
  //         if (card.id !== card_id) {
  //           otherCard = card.id;
  //         }
  //       });
  //       this.selectCard(otherCard);
  //     } else {
  //
  //     }
  //   }).catch((error) => {
  //
  //   });
  // }
  // addCard() {
  //   if (this.card_state.loading) {return;}
  //   this.card_state.loading = true;
  //   this.card_state.button_title = "Salvando...";
  //   this.card_state.message_error = null;
  //   this.card_state.number_error = null;
  //   this.card_state.exp_date_error = null;
  //   this.card_state.cvc_error = null;
  //   if (this.Card !== null) {
  //     if (this.paymentService.cardNumberValidate(this.Card.number)) {
  //       this.card_state.number_error = null;
  //     } else {
  //       this.card_state.number_error = "Il numero della carta non è corretto.";
  //     }
  //   }
  //   if (this.Card.exp_date && this.Card.exp_date.length === 5) {
  //     let exp_parts = this.Card.exp_date.split('/');
  //     if (exp_parts[0] !== this.Card.exp_date) {
  //       this.Card.exp_month = exp_parts[0];
  //       this.Card.exp_year = exp_parts[1];
  //     } else {
  //       this.card_state.exp_date_error = "Errore data";
  //     }
  //   } else {
  //     this.card_state.exp_date_error = "La data non è completa";
  //   }
  //   this.paymentService.addNewCard(this.Card).then((response) => {
  //     this.card_state.loading = false;
  //     this.card_state.button_title = "Salva";
  //     this.card_state.message_error = null;
  //     this.card_state.number_error = null;
  //     this.card_state.exp_date_error = null;
  //     this.card_state.cvc_error = null;
  //     this.router.navigate(['/profile/payment']);
  //   }).catch((error) => {
  //     this.card_state.loading = false;
  //     this.card_state.button_title = "Salva";
  //     this.card_state.message_error = null;
  //     this.card_state.number_error = null;
  //     this.card_state.exp_date_error = null;
  //     this.card_state.cvc_error = null;
  //     if (error === 400) {
  //       this.card_state.message_error = "Errore nel inserimento del codice della sicurezza";
  //       this.card_state.cvc_error = "Inserisci un codice corretto";
  //     } else if (error === 402) {
  //       this.card_state.message_error = "Errore nel inserimento del numero della carta o della data di scadenza";
  //       this.card_state.number_error = "Inserisci un numero corretto";
  //       this.card_state.exp_date_error = "Inserisci una data corretta";
  //     } else {
  //       this.card_state.message_error = "Errore sconosciuto. Controlla i campi inseriti e riprova.";
  //     }
  //   });
  // }
  // checkExpiry(value) {
  //   let result = '';
  //   let date = new Date();
  //   let month = (1 + date.getMonth()).toString();
  //   if ((date.getMonth() + 1) < 10) {
  //     month = '0' + month.toString();
  //   }
  //   let yearElems = date.getFullYear().toString().split('');
  //   let year = parseInt(yearElems[2].toString() + yearElems[3].toString());
  //   if (value) {
  //     let dateElems = value.split('');
  //     let i = 0;
  //     dateElems.forEach((elem) => {
  //       if (elem === '/') {
  //         dateElems.splice(i, 1);
  //       }
  //       i++;
  //     });
  //     if (dateElems.length > 1) {
  //       let i = 0;
  //       dateElems.forEach((elem) => {
  //         if (i < 4) {
  //           if (i === 2) {
  //             result += '/';
  //           }
  //           result += elem;
  //         }
  //         i++;
  //       });
  //     } else {
  //       dateElems.forEach((elem) => {
  //         result += elem;
  //       });
  //     }
  //   }
  //
  //   if (result.length !== 5) {
  //     this.card_state.exp_date_error = "Inserisci la data in formato MM/AA (mese/anno)";
  //   }
  //
  //   if (result.length === 5) {
  //     let parts = result.split('/');
  //     if (parts[0] !== result) {
  //       if (parseInt(parts[1]) > year) {
  //         this.card_state.exp_date_error = null;
  //       } else {
  //         if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
  //           this.card_state.exp_date_error = null;
  //         } else {
  //           this.card_state.exp_date_error = "Inserisci una data corretta";
  //         }
  //       }
  //     } else {
  //       this.card_state.exp_date_error = null;
  //     }
  //   }
  //   this.Card.exp_date = result
  //   return result;
  // }
  // formatYear(year) {
  //   let i = 0;
  //   let formatedYear = '';
  //   let yearArray = year.toString().split('');
  //   yearArray.forEach((num) => {
  //     if (i > 1) {
  //       formatedYear += num;
  //     }
  //     i++;
  //   });
  //   return formatedYear;
  // }
  // formatCssClass(brand) {
  //   let result = '';
  //   if (brand === 'Visa') {
  //     result = 'visa';
  //   }
  //   if (brand === 'American Express') {
  //     result = 'amex';
  //   }
  //   if (brand === 'MasterCard') {
  //     result = 'mastercard';
  //   }
  //   return result;
  // }
  // editCard(id) {
  //   let cardData = {};
  //   this.cards.forEach((card) => {
  //     if(card.id === id) {
  //       cardData = {
  //         id: card.id,
  //         address_city: card.address_city,
  //         address_country: card.address_country,
  //         address_line1: card.address_line1,
  //         address_line2: card.address_line2,
  //         address_state: card.address_state,
  //         address_zip: card.address_zip,
  //         exp_month: card.exp_month,
  //         exp_year: this.formatYear(card.exp_year),
  //         name: card.name,
  //         number: '**** ' + card.last4,
  //         cvc: '***'
  //       };
  //     }
  //   });
  //   this.popupsService.activate({type: 'editCard', data: cardData});
  // }
}
