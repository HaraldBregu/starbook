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
import { PaymentService } from '../../shared/payment.service';
import * as globals from '../../globals';
require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})

export class AccountComponent implements OnInit {
  public emailPattern = globals.emailPattern
  subscription: Subscription;
  public page = ''
  public tabs = [
    {name: 'Account', route: 'profile'},
    {name: 'Promozioni', route: 'inprogress_promotion'},
    {name: 'Contatti', route: 'contacts'},
    {name: 'Messaggi', route: 'requests'},
    {name: 'Preventivi', route: 'quotation'},
    // {name: 'Aiuto', route: 'help'},
  ]
  public profile_tab = 'informations'
  public quotation_tab = 'new'
  public payment_tab = 'cards'
  public help_tab = 'request'
  public inbox_tab = 'received'

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
    updated: false,
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
  public days = globals.days
  public month = 0;
  public months = globals.months
  public year = 0;
  public years = globals.years
  public gender = 'none'
  public genders = globals.genders
  public it = globals.it_calendar
  public profile_link = ''

  public Quotation = {
    title: '',
    description: '',
    details: '',
    address: {},
    date: '',
    vendor: {
      firstname: '',
      lastname: '',
      businessname: ''
    },
    customer: {
      firstname: '',
      lastname: '',
      phone_number: '',
      email: ''
    },
    platform: {
      name: 'none'
    },
    notifications: {
      email: true,
      sms: false,
      push: false
    },
    formats: {
      web: true,
      pdf: false,
    }
  }
  public contact_platform = globals.contact_platforms
  public quotation_state = {
    creating: false,
    loading: false,
    created: false
  }

  public sent_quotations = []
  public loading_sent_quotation = false
  public received_quotations = []
  public loading_received_quotation = false

  public help_email = {
    subject:"",
    message:""
  }
  public help_email_state = {
    loading:false
  }
  public popup = null

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
  public cards = []
  public defaultCard = null
  public selectedCardId = null

  // CROSS ADS

  public inprogress_promotions = []
  // public CrossAdvertising = {
  //   title : '',
  //   subtitle : '',
  //   description : '',
  //   city : '',
  //   email : '',
  //   phone_number : '',
  // }
  // public CrossAdvertisingDailyPrices = [
  //   {
  //     price: 200,
  //     currency: "€"
  //   },
  //   {
  //     price: 400,
  //     currency: "€"
  //   },
  //   {
  //     price: 800,
  //     currency: "€"
  //   },
  // ]
  // public DefaultCrossAdvertisingDailyPrice = {
  //   price: 400,
  //   currency: "€"
  // }
  // public CrossAdvertisingWeekPeriod = [
  //   {
  //     count: 1,
  //     item: "Settimana"
  //   },
  //   {
  //     count: 2,
  //     item: "Settimane"
  //   },
  //   {
  //     count: 4,
  //     item: "Settimane"
  //   },
  // ]
  // public DefaultCrossAdvertisingWeekPeriod = {
  //   count: 2,
  //   item: "Settimane"
  // }
  // public advertising_state = {
  //   creating: false,
  //   loading: false,
  //   created: false
  // }

  public Promotion_State = globals.Promotion_State
  public Promotion = globals.Promotion
  public FacebookPromotion = globals.FacebookPromotion
  public GooglePromotion = globals.GooglePromotion

  public Contacts = []
  public ContactsState = {
    loading: false,
    error_message: null,
  }
  public SelectedContact = []

  public AffiliatePosts = []
  public isAffiliate = false

  public AffiliatePost = {
    title : "",
    description : "",
    details : [],
    customer : {
      firstname : "",
      lastname : "",
      email : "",
      phone_number : "",
      complete : false
    },
    address : {
      street : "",
      street_number : "",
      postal_code : "",
      city : "",
      province : "",
      country : "Italia",
      country_code : "IT"
    },
    budget: {
      estimate_cost : 0,
      min : 0,
      max : 0
    },
    publish : false
  }
  public AffiliatePostDetails = []
  public AffiliatePostSelected = null
  public AffiliatePostTempDetail = ""
  public AffiliatePostStatus = {
    creating : false,
    loading : false,
    created : false,
    error : null
  }

  public NotifyCustomer = {

  }
  public NotifyCustomerState = {
    loading: false,
    notified: false,
    error: null,
  }

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private profileService: ProfileService, private authService: AuthService, private seoService: SeoService, private contactService: ContactService, private popupsService: PopupsService, private commonService: CommonService, private paymentService: PaymentService) {
    this.navigationService.updateMessage("Dashboard")
    if (isBrowser) {
      let account = JSON.parse(localStorage.getItem('auth'))
      // console.log('account is: ' + JSON.stringify(account))
      this.commonService.getMethod('me').then((data) => {
        let user = data.result
        this.isAffiliate = user.isAffiliate
        // console.log('account is: ' + JSON.stringify(data))
      }).catch((error) => {})

      this.checkPicture(account)
      this.checkLogo(account)

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

      this.getAllCards()

      this.commonService.getMethod('promotions').then((data) => {
        this.inprogress_promotions = data.result
      }).catch((error) => {
      })
    }

    this.readPosts()
    // this.getCountContactsForPostId("59f45823bc48b35cd3c12f5c")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (this.Account['business'] && this.Account['business']['username']) {
        this.profile_link = "https://www.starbook.co/business/" + this.Account['business']['username']
      } else {
        this.profile_link = "https://www.starbook.co/business/" + this.Account._id
      }

      this.page = params['page']
      if (isBrowser) { window.scrollTo(0, 0) }
      if (this.page==="services") {
        this.commonService.getMyServices().then((data) => {
          this.Services = data.result;
        }).catch((error) => {
        })
      }
      else if (this.page==="profile") {

      }
      else if (this.page==="contacts") {
        this.ContactsState.loading = true
        this.commonService.getMethod('contacts').then((data) => {
          this.Contacts = data.result
          // console.log(JSON.stringify(data))
          this.ContactsState.loading = false
        }).catch((error) => {
          // this.Contacts = []
          // console.log(JSON.stringify(error))
          this.ContactsState.loading = false
        })
      }
      else if (this.page==="inprogress_promotion") {

      }
      else if (this.page==="terminated_promotion") {

      }
      else if (this.page==="requests") {

      }
      else if (this.page==="quotation") {

      }
      // else if (this.page==="help") {
      //
      // }
      else {
        this.router.navigate(['/account/profile'])
      }
    })
  }

  // ******************************** //
  // PROFILE & COMPANY INFORMATIONS
  // ******************************** //

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
      if (this.Picture.url) {
        return 'url(' + this.Picture.url + ')'
      } else {
        var picture_image = new Image()
        picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
        return (picture_image.width > 0) ? 'url(' + picture_image.src + ')' : 'url(../assets/images/no_picture.png)'
      }
    }
  }
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
      if (this.Logo.url) {
        return 'url(' + this.Logo.url + ')'
      } else {
        var picture_image = new Image()
        picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
        return (picture_image.width > 0) ? 'url(' + picture_image.src + ')' : 'url(../assets/images/no_logo.png)'
      }
    }
  }
  saveInformations() {
    this.account_state.loading = true
    this.account_state.updated = false
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
        this.account_state.updated = true
      }
    }).catch((error) => {
      this.account_state.loading = false
      this.account_state.updated = true
    })
  }
  saveInformationsAndPromote() {
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
        this.router.navigate(['/account/new_promotion'])
      }
    }).catch((error) => {
      this.account_state.loading = false
    })
  }
  getProfileRouter() {
    if (this.Account['business'] && this.Account['business']['username']) {
      return "/business/" + this.Account['business']['username']
    } else {
      return "/business/" + this.Account._id
    }
  }

  // ******************************** //
  // QUOTATION SECTION
  // ******************************** //

  sendQuotation(quotation) {
    this.quotation_state.creating = true
    if (!quotation.title || !quotation.description || !quotation.customer.firstname || !quotation.customer.lastname || !quotation.customer.email || !quotation.customer.phone_number) {
      return
    }
    quotation.vendor.firstname = this.Account.profile.firstname
    quotation.vendor.lastname = this.Account.profile.lastname
    quotation.vendor.businessname = this.Account.business.name
    this.quotation_state.loading = true
    this.commonService.postMethod('quotations', quotation).then((data) => {
      this.quotation_state.created = true
      this.quotation_state.loading = false
      this.quotation_state.creating = false
      quotation.title = ""
      quotation.description = ""
      quotation.customer = {}
      quotation.vendor = {}
      quotation.address = {}
      quotation.date = ''
      quotation.platform = {}
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      if (error.status===400) {
        this.popup = "NEW_CARD_POPUP_AND_CONTINUE"
        // Mostrare un popup per inserire la carta
        // console.log('no_stripe_customer')
      } else if (error.status===402) {
        this.popup = "NEW_CARD_POPUP_AND_CONTINUE"
        // Mostrare un popup per inserire la carta
        // console.log('no_cards')
      }
      this.quotation_state.loading = false
      this.quotation_state.creating = false
    })
  }

  // ******************************** //
  // PROMOTION SECTION
  // ******************************** //

  startPromotion() {
    if (this.Promotion_State.loading) {return}
    this.Promotion.facebook.days = this.FacebookPromotion.default_time_option.count * 7
    this.Promotion.facebook.daily_budget = this.FacebookPromotion.default_price_options.price
    this.Promotion.google.days = (this.GooglePromotion.active) ? (this.GooglePromotion.default_time_option.count * 7) : 0
    this.Promotion.google.daily_budget = (this.GooglePromotion.active) ? this.GooglePromotion.default_price_options.price : 0
    // console.log(JSON.stringify(this.Promotion))
    this.Promotion_State.loading = true
    this.Promotion_State.error_message = null
    this.commonService.postMethod('promotions', this.Promotion).then((data) => {
      // console.log("data: " + JSON.stringify(data))
      this.Promotion_State.loading = false
      this.Promotion_State.error_message = null
      this.popup = null
    }).catch((error) => {
      this.Promotion_State.loading = false
      // console.log("error: " + JSON.stringify(error))
      if (error.status===400) {
        this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
      } else if (error.status===402) {
        var response_body = JSON.parse(error._body)
        // console.log("response_body: " + JSON.stringify(response_body))
        var stripe_result = response_body.result
        if (stripe_result) {
          if (stripe_result.raw) {
            var raw = stripe_result.raw
            if (raw.decline_code === "insufficient_funds") {
              this.card_state.message_error = "Fondi non sufficienti per eseguire questo pagamento. Per favore inserisci un altra carta o ricarica quella attuale."
            }
          }
        }
        this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
      } else {
        this.Promotion_State.error_message = "Errore sconosciuto. Per favore riprova dopo aver aggirnato la pagina."
      }
    })
  }
  setupPromotion() {
    this.popup = "PREVIEW_PROMOTION_POPUP"
    console.log(JSON.stringify(this.Promotion))
  }
  savePromotionCardAndContinue() {
    if (this.card_state.loading) {return;}
    this.card_state.loading = true;
    this.card_state.button_title = "Salvando carta...";
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
    }
    else {
      this.card_state.exp_date_error = "La data non è completa";
    }
    this.paymentService.addNewCard(this.Card).then((response) => {
      this.card_state.loading = false
      this.card_state.button_title = "Continua"
      this.card_state.message_error = null
      this.card_state.number_error = null
      this.card_state.exp_date_error = null
      this.card_state.cvc_error = null
      this.popup = "SETUP_PROMOTION_POPUP"
      this.startPromotion()
      this.clearCardData()
      this.cards.push(response)
    }).catch((error) => {
      this.card_state.loading = false
      this.card_state.button_title = "Continua"
      this.card_state.message_error = null
      this.card_state.number_error = null
      this.card_state.exp_date_error = null
      this.card_state.cvc_error = null
      if (error === 400) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
      }
      else if (error === 402) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
      }
      else {
        this.card_state.message_error = "Controlla i campi inseriti e riprova."
      }
    })
  }
  selectFacebookAdPeriod(option) {
    this.FacebookPromotion.default_time_option = option
  }
  selectFacebookAdPrice(option) {
    this.FacebookPromotion.default_price_options = option
  }
  selectGoogleAdPeriod(option) {
    this.GooglePromotion.default_time_option = option
  }
  selectGoogleAdPrice(option) {
    this.GooglePromotion.default_price_options = option
  }
  totalPromotionCost() {
    this.Promotion.facebook.days = this.FacebookPromotion.default_time_option.count * 7
    this.Promotion.facebook.daily_budget = this.FacebookPromotion.default_price_options.price
    this.Promotion.google.days = (this.GooglePromotion.active) ? (this.GooglePromotion.default_time_option.count * 7) : 0
    this.Promotion.google.daily_budget = (this.GooglePromotion.active) ? this.GooglePromotion.default_price_options.price : 0

    var fb_cost = this.Promotion.facebook.days * this.Promotion.facebook.daily_budget
    var ggl_cost = this.Promotion.google.days * this.Promotion.google.daily_budget

    return fb_cost + ggl_cost + 500
  }

  // startPromotion() {
  //   // this.advertising_state.creating = true
  //   //
  //   // this.advertising_state.loading = true
  //   //
  //   // var ad = {}
  //   // ad['title1'] = this.Account.business.name
  //   // ad['title2'] = this.Account.business.tagline
  //   // ad['description'] = this.Account.business.description
  //   // ad['city'] = this.Account.address.city
  //   // ad['email'] = this.Account.email
  //   // ad['phone_number'] = this.Account.phone_number
  //   // ad['number_of_weeks'] = this.DefaultCrossAdvertisingWeekPeriod.count
  //   // ad['total_offer'] = this.getTotalCostPromotion()
  //   //
  //   // this.commonService.postMethod('promotions', ad).then((data) => {
  //   //   // console.log(JSON.stringify(data))
  //   //   this.advertising_state.created = true
  //   //   this.advertising_state.loading = false
  //   //   this.advertising_state.creating = false
  //   //   this.popup = null
  //   //   this.router.navigate(['/account/inprogress_promotion'])
  //   // }).catch((error) => {
  //   //   // console.log(JSON.stringify(error))
  //   //   if (error.status===400) {
  //   //     this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
  //   //     // Mostrare un popup per inserire la carta
  //   //     // console.log('no_stripe_customer')
  //   //   } else if (error.status===402) {
  //   //     this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
  //   //     // Mostrare un popup per inserire la carta
  //   //     // console.log('no_cards')
  //   //   }
  //   //   this.advertising_state.loading = false
  //   //   this.advertising_state.creating = false
  //   // })
  // }
  // savePromotionCardAndContinue() {
  //   if (this.card_state.loading) {return;}
  //   this.card_state.loading = true;
  //   this.card_state.button_title = "Salvando carta...";
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
  //   }
  //   else {
  //     this.card_state.exp_date_error = "La data non è completa";
  //   }
  //   this.paymentService.addNewCard(this.Card).then((response) => {
  //     this.card_state.loading = false
  //     this.card_state.button_title = "Continua"
  //     this.card_state.message_error = null
  //     this.card_state.number_error = null
  //     this.card_state.exp_date_error = null
  //     this.card_state.cvc_error = null
  //     this.popup = "PREVIEW_PROMOTION_POPUP"
  //     this.startPromotion()
  //     this.clearCardData()
  //     this.cards.push(response)
  //   }).catch((error) => {
  //     this.card_state.loading = false
  //     this.card_state.button_title = "Continua"
  //     this.card_state.message_error = null
  //     this.card_state.number_error = null
  //     this.card_state.exp_date_error = null
  //     this.card_state.cvc_error = null
  //     if (error === 400) {
  //       this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
  //     }
  //     else if (error === 402) {
  //       this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
  //     }
  //     else {
  //       this.card_state.message_error = "Controlla i campi inseriti e riprova."
  //     }
  //   })
  // }

  getCoversForPromotion(promotion) {
    if (promotion.analitics) {
      return promotion.analitics.covers
    } else {
      return 0
    }
  }
  getClicksForPromotion(promotion) {
    if (promotion.analitics) {
      return promotion.analitics.clicks
    } else {
      return 0
    }
  }
  // selectAdPrice(option) {
  //   this.DefaultCrossAdvertisingDailyPrice = option
  // }
  // selectAdPeriod(option) {
  //   this.DefaultCrossAdvertisingWeekPeriod = option
  // }
  // getTotalCostPromotion() {
  //   return this.DefaultCrossAdvertisingDailyPrice.price * (this.DefaultCrossAdvertisingWeekPeriod.count * 7)
  // }
  // getTotalCoveragePromotion() {
  //   // 56 euro
  //   // 5100 dita
  //   // * 7 = 35700
  //   // * 14 = 71400
  //   // * 28 = 142800
  //   // 25-160 click
  //   return (this.getTotalCostPromotion()/100) * 2535
  // }
  // getGrowPercentage() {
  //   if (this.DefaultCrossAdvertisingWeekPeriod.count===1) {
  //     if (this.DefaultCrossAdvertisingDailyPrice.price===200) {
  //       return 45
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price>200 && this.DefaultCrossAdvertisingDailyPrice.price<800) {
  //       return 68
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price===800) {
  //       return 89
  //     }
  //     return 70
  //   }
  //   if (this.DefaultCrossAdvertisingWeekPeriod.count===2) {
  //     if (this.DefaultCrossAdvertisingDailyPrice.price===200) {
  //       return 75
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price>200 && this.DefaultCrossAdvertisingDailyPrice.price<800) {
  //       return 89
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price===800) {
  //       return 95
  //     }
  //     return 89
  //   }
  //   if (this.DefaultCrossAdvertisingWeekPeriod.count===4) {
  //     if (this.DefaultCrossAdvertisingDailyPrice.price===200) {
  //       return 85
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price>200 && this.DefaultCrossAdvertisingDailyPrice.price<800) {
  //       return 90
  //     } else if (this.DefaultCrossAdvertisingDailyPrice.price===800) {
  //       return 99
  //     }
  //     return 99
  //   }
  //   return 100
  // }

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
  sendHelpEmail() {
    this.help_email_state.loading = true
    this.help_email.subject = "Richiesta di aiuto su Starbook"
    this.contactService.sendEmail(this.help_email).then((data) => {
      this.help_email_state.loading = false
      this.help_email.message = ""
      // console.log('data: ' + JSON.stringify(data));
    }).catch((error) => {
      this.help_email_state.loading = false
      // console.log('error: ' + JSON.stringify(error));
    })
  }

  // TABS

  clickTabItem(route) {
    this.router.navigate(['/account/' + route])
  }
  clickLeftTabItem(item) {
    this.profile_tab = item
    if (item==="affiliation") {
      this.readPosts()
    }
  }
  clickLeftTabQuotation(item) {
    this.quotation_tab = item
    if (item==="sent") {
      this.loading_sent_quotation = true
      this.commonService.getMethod('quotations?type=sent').then((data) => {
        this.sent_quotations = data.result
        this.loading_sent_quotation = false
      }).catch((error) => {
        this.loading_sent_quotation = false
      })
    } else if (item==="received") {
      this.loading_received_quotation = true
      this.commonService.getMethod('quotations?type=received').then((data) => {
        this.received_quotations = data.result
        this.loading_received_quotation = false
      }).catch((error) => {
        this.loading_received_quotation = false
      })
    }
    else if (item==="new") {
      this.quotation_state.created = false
    }
  }
  clickLeftTabHelp(item) {
    this.help_tab = item
  }
  clickLeftTabPayment(item) {
    this.payment_tab = item
  }
  clickLeftTabAds(item) {
    this.router.navigate(['/account/' + item])
  }
  clickLeftTabInbox(item) {
    this.inbox_tab = item
  }

  showAddCard() {
    this.popup = "NEW_CARD_POPUP"
  }

  // CARD

  addCard() {
    if (this.card_state.loading) {return;}
    this.card_state.loading = true;
    this.card_state.button_title = "Salvando carta...";
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
    }
    else {
      this.card_state.exp_date_error = "La data non è completa";
    }
    this.paymentService.addNewCard(this.Card).then((response) => {
      this.card_state.loading = false
      this.card_state.button_title = "Continua"
      this.card_state.message_error = null
      this.card_state.number_error = null
      this.card_state.exp_date_error = null
      this.card_state.cvc_error = null
      this.popup = null
      this.clearCardData()
      this.cards.push(response)
    }).catch((error) => {
      this.card_state.loading = false;
      this.card_state.button_title = "Continua";
      this.card_state.message_error = null;
      this.card_state.number_error = null;
      this.card_state.exp_date_error = null;
      this.card_state.cvc_error = null;
      if (error === 400) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
      }
      else if (error === 402) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
      }
      else {
        this.card_state.message_error = "Controlla i campi inseriti e riprova.";
      }
    })
  }
  addCardAndContinue() {
    if (this.card_state.loading) {return;}
    this.card_state.loading = true;
    this.card_state.button_title = "Salvando carta...";
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
    }
    else {
      this.card_state.exp_date_error = "La data non è completa";
    }
    this.paymentService.addNewCard(this.Card).then((response) => {
      this.card_state.loading = false
      this.card_state.button_title = "Continua"
      this.card_state.message_error = null
      this.card_state.number_error = null
      this.card_state.exp_date_error = null
      this.card_state.cvc_error = null
      this.popup = null
      this.sendQuotation(this.Quotation)
      this.clearCardData()
      this.cards.push(response)
    }).catch((error) => {
      this.card_state.loading = false
      this.card_state.button_title = "Continua"
      this.card_state.message_error = null
      this.card_state.number_error = null
      this.card_state.exp_date_error = null
      this.card_state.cvc_error = null
      if (error === 400) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
      }
      else if (error === 402) {
        this.card_state.message_error = "Per favore inserisci correttamente i dati della carta"
      }
      else {
        this.card_state.message_error = "Controlla i campi inseriti e riprova."
      }
    })
  }
  getAllCards() {
    this.paymentService.getCards().then((response) => {
      this.cards = response.sources.data
      this.defaultCard = response.default_source
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
    })
  }
  selectCard(card_id) {
    if (this.card_state.loading) {return}
    this.card_state.loading = true
    this.paymentService.selectCard(card_id).then((status) => {
      this.defaultCard = status.default_source
      this.card_state.loading = false
    }).catch((error) => {
      this.card_state.loading = false
    })
  }
  deleteCard(card_id) {
    if (this.card_state.loading) {return}
    this.card_state.loading = true
    this.paymentService.deleteCard(card_id).then((status) => {
      let i = 0;
      this.cards.forEach((card) => {
        if (card.id === card_id) {
          this.cards.splice(i, 1);
        }
        i++;
      })
      if (card_id === this.defaultCard && this.cards.length > 0) {
        let otherCard = '';
        this.cards.forEach((card) => {
          if (card.id !== card_id) {
            otherCard = card.id;
          }
        });
        this.selectCard(otherCard);
      }
      this.card_state.loading = false
      this.popup = null
    }).catch((error) => {
      this.card_state.loading = false
      this.popup = null
    })
  }
  clearCardData(){
    this.Card.number = null
    this.Card.exp_month = null
    this.Card.exp_year = null
    this.Card.cvc = null
  }

  logout() {
    this.popupsService.activate({type: 'logout', data: {}});
  }

  // AFFILIATE SECTION

  savePost() {
    if(this.AffiliatePost['_id']) {
      this.commonService.putMethod('affiliate/me/posts/' + this.AffiliatePost['_id'], this.AffiliatePost).then((data) => {
        // console.log(JSON.stringify("Created post" + data))
      }).catch((error) => {
        // console.log(JSON.stringify("Error creation" + error))
      })
    } else {
      this.commonService.postMethod('affiliate/me/posts', this.AffiliatePost).then((data) => {
        console.log(JSON.stringify("Created post" + data))
      }).catch((error) => {
        console.log(JSON.stringify("Error creation" + error))
      })
    }
  }
  readPosts() {
    this.commonService.getMethod('affiliate/me/posts').then((data) => {
      // console.log(JSON.stringify(data))
      this.AffiliatePosts = data.result

      for (let i = 0; i < this.AffiliatePosts.length; i++) {
        var affPost = this.AffiliatePosts[i]
        this.commonService.getMethod('posts/' + affPost['_id'] + '/contacts').then((data) => {
          // console.log(JSON.stringify(data))
          // return data.result.length
          this.AffiliatePosts[i]['count_of_prof'] = data.result.length
        }).catch((error) => {
          this.AffiliatePosts[i]['count_of_prof'] = 0
          // console.log(JSON.stringify("Error creation" + error))
        })
      }
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      this.AffiliatePosts = []
    })
  }
  addTempDetail() {
    this.AffiliatePost.details.push(this.AffiliatePostTempDetail)
    this.AffiliatePostTempDetail = null
  }
  detailAffiliatePostChangeAtIndex($event, i) {
    this.AffiliatePost.details[i] = $event.target.value
  }
  openAndModyfyPost(post) {
    this.AffiliatePostSelected = post
    this.AffiliatePost = post
    this.popup = "NEW_AFFILIATE_POST_POPUP"
  }
  getCountContactsForPostId(post_id) {
    this.commonService.getMethod('posts/' + post_id + '/contacts').then((data) => {
      // console.log(JSON.stringify(data))
      // return data.result.length
    }).catch((error) => {
      // return 0
      // console.log(JSON.stringify("Error creation" + error))
    })
  }

  // CONTACT SECTION

  sendNotificationToCustomer(selectedContact) {
    console.log(JSON.stringify(selectedContact))

    this.NotifyCustomerState.loading = true
    this.NotifyCustomerState.notified = false
    let data = {
      customer : selectedContact.post.customer
    }

    this.commonService.postMethod('contacts/' + selectedContact._id +'/notify', data).then((data) => {
      console.log(JSON.stringify(data))
      this.NotifyCustomerState.loading = false
      this.NotifyCustomerState.notified = true
      // this.popup = null
    }).catch((error) => {
      console.log(JSON.stringify(error))
      this.NotifyCustomerState.loading = false
      this.NotifyCustomerState.notified = true
      // this.popup = null
    })
  }

  // UTILS

  formatedDateFromString(date) {
    let returnDate = '';
    if (date !== 'now') {
      let dateString = date.substring(0, date.length - 5);
      dateString = dateString.split('T');
      let dateComponents = dateString[0].split('-');
      let hourComponents = dateString[1].split(':');
      // returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
      returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1] - 1] + ' ' + dateComponents[0];
    } else {
      let currentDate = new Date();
      let day = currentDate.getDate();
      let month = 1 + currentDate.getMonth();
      let year = currentDate.getFullYear();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let seconds = currentDate.getSeconds();
      returnDate += year;
      returnDate += month > 9 ? '-' + month : '-0' + month;
      returnDate += day > 9 ? '-' + day : '-0' + day;
      returnDate += hours > 9 ? 'T' + hours : 'T0' + hours;
      returnDate += minutes > 9 ? ':' + minutes : ':0' + minutes;
      returnDate += seconds > 9 ? ':' + seconds + '.000Z' : ':0' + seconds + '.000Z';
    }
    return returnDate;
  }
  formatedAddressFromObject(address) {
    let returnAddress = '';
    if (address.street) {
      returnAddress += address.street
    }
    if (address.postal_code) {
      returnAddress += ' ' + address.postal_code
    }
    if (address.city) {
      returnAddress += ', ' + address.city
    }
    return returnAddress;
  }
  getQuotationSendingPrice(Quotation) {
    var sms_price = Quotation.notifications.sms ? 0.50 : 0
    var pdf_price = Quotation.formats.pdf ? 0.50 : 0
    var total_price = sms_price + pdf_price
    if (total_price > 0) {
      return "€" + total_price
    } else {
      return ""
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
  getGoogleMapsLink(post) {
    if (post['address']['city']) {
      return "https://maps.google.com/?q=" + post['address']['city'] + ", " + post['address']['street']
    } else {
      return ""
    }
  }
  getPhoneNumber(post) {
    if (post) {
      if (post.customer['phone_number'] && post.customer['phone_number']!==null) {
        return post.customer['phone_number']
      }
      else {
        return ""
      }
    }
  }
  getEmailAddress(post) {
    if (post) {
      if (post.customer['email'] && post.customer['email']!==null) {
        return post.customer['email']
      }
      else {
        return ""
      }
    }
  }

  // EXTRA
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
