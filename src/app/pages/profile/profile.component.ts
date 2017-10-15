import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { Subscription }   from 'rxjs/Subscription';
import { SeoService } from '../../shared/seo.service';
import { ContactService } from '../../shared/contact.service';
import { isBrowser } from "angular2-universal";
import { CommonService } from '../../shared/common.service';
import { PaymentService } from '../../shared/payment.service';
import * as globals from '../../globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  public page = ''
  public logo = ''
  public seoObject = {}
  public Account = null
  public Message = {
    text : '',
    phone_number : '',
    email : ''
  }
  public Message_State = {
    loading : false,
    created : false,
    error_message : '',
    text_error : '',
    phone_number_error : '',
    email_error : ''
  }
  public CurrentAccount = null
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

  public Promotion_State = globals.Promotion_State
  public Promotion = globals.Promotion
  public FacebookPromotion = globals.FacebookPromotion
  public GooglePromotion = globals.GooglePromotion

  public PromotedPage = false
  public PromotionChecked = false

  constructor(private commonService: CommonService, private profileService: ProfileService, private router: Router, private navigationService: NavigationService, private route: ActivatedRoute, private joinService: ContactService, private seoService: SeoService, private paymentService: PaymentService) {
    if (isBrowser) {
      this.CurrentAccount = JSON.parse(localStorage.getItem('auth'))
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      if (this.page==='' || this.page===undefined) {
        if (localStorage.getItem('auth') !== null) {
          this.Account = JSON.parse(localStorage.getItem('auth'))
          this.navigationService.updateMessage(this.checkCompanyName(this.Account))

          this.commonService.getMethod('/account/' + this.Account['_id'] + '/check_promotions').then((data) => {
            if(data.result.length===0) {
              this.PromotedPage = false
            } else {
              this.PromotedPage = true
            }
            this.PromotionChecked = true
          }).catch((error) => {
            this.PromotedPage = false
            this.PromotionChecked = true
          })
        }
      } else {
        this.profileService.getAccountById(this.page).then((data) => {
          if (data.success) {
            this.Account = data.result

            this.seoObject['title'] = this.checkCompanyName(this.Account)
            this.seoObject['description'] = this.checkTagline(this.Account)
            this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
            this.seoObject['image_url'] = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1'

            this.seoService.setTitle(this.checkCompanyName(this.Account) + " | Starbook.co")

            this.seoService.setMetaElem('description', this.seoObject['description'])
            this.seoService.setOgElem('og:title', this.seoObject['title'])
            this.seoService.setOgElem('og:description', this.seoObject['description'])
            this.seoService.setOgElem('og:url', this.seoObject['url'])
            this.seoService.setOgElem('og:image', this.seoObject['image_url'])
            this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url'])
            this.seoService.setOgElem('twitter:card', "summary_large_image")
            this.seoService.setOgElem('twitter:title', this.seoObject['title'])
            this.seoService.setOgElem('twitter:site', "@starbookco")
            this.seoService.setOgElem('twitter:creator', "@HaraldBregu")
            this.seoService.setOgElem('twitter:description', this.seoObject['description'])
            this.seoService.setOgElem('twitter:image', this.seoObject['image_url'])

            this.navigationService.updateMessage(this.checkCompanyName(this.Account))

            this.commonService.getMethod('/account/' + this.Account['_id'] + '/check_promotions').then((data) => {
              if(data.result.length===0) {
                this.PromotedPage = false
              } else {
                this.PromotedPage = true
              }
              this.PromotionChecked = true
            }).catch((error) => {
              this.PromotedPage = false
              this.PromotionChecked = true
            })
          }
        }).catch((error) => {
          this.router.navigate(['/'])
        })
      }
    })
  }

  businessName(){
    if (this.Account) {
      if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['name'] && this.Account['business']['name']!==null) {
          return this.Account['business']['name']
        }
      }
      else {
        return ""
      }
    }
  }
  checkCompanyName(account) {
    if (account.business && account.business.name) {
      return account.business.name
    } else {
      return account.profile.fullname
    }
  }
  checkTagline(account) {
    if (account.business && account.business.tagline) {
      return account.business.tagline
    } else {
      return false
    }
  }
  businessDescription(account) {
    if (account.business && account.business.description) {
      return account.business.description
    } else {
      return false
    }
  }
  checkBigPicture(account) {
    if (isBrowser) {
      // var picture = new Image()
      var logo = new Image()
      // picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      // if ((logo.width===0) && (picture.width>0)) {
      //   return picture.src
      // } else if (((logo.width>0) && (picture.width>0)) || ((logo.width>0) && (picture.width===0))) {
      //   return logo.src
      // } else if ((logo.width===0) && (picture.width===0)) {
      //   return '../assets/images/no_logo.png'
      // }
      if (logo.width>0) {
        return logo.src
        // return "{'background-image' : 'url('" + logo.src + "')'}"
      } else {
        return '../assets/images/no_logo.png'
        // return "{'background-image' : ' url('../assets/images/no_logo.png')'}"
      }
    }
  }
  checkSmallPicture(account) {
    return '../assets/images/no_logo_blue.png'
    // if (isBrowser) {
    //   var picture = new Image()
    //   var logo = new Image()
    //   picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
    //   logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
    //   if ((logo.width===0) && (picture.width>0)) {
    //     return '../assets/images/no_logo_blue.png'
    //   } else if ((logo.width>0) && (picture.width>0)) {
    //     return picture.src
    //   } else if ((logo.width>0) && (picture.width===0)) {
    //     return '../assets/images/no_picture.png'
    //   } else if ((logo.width===0) && (picture.width===0)) {
    //     return '../assets/images/no_logo_blue.png'
    //   }
    // }
  }
  sendPrivateMessage() {
    this.Message_State.loading = true
    this.Message_State.error_message = ""
    this.Message_State.text_error = ""
    this.Message_State.phone_number_error = ""
    this.Message_State.email_error = ""

    if (this.Message.text.length===0) {
      this.Message_State.loading = false
      this.Message_State.error_message = "Per favore inserisci un messaggio da inviare"
      this.Message_State.text_error = "errore"
      return
    } else if (!this.CurrentAccount && (this.Message.phone_number.length===0 || this.Message.email.length===0)) {
      this.Message_State.loading = false
      this.Message_State.phone_number_error = (this.Message.phone_number.length===0) ? "errore" : ""
      this.Message_State.email_error = (this.Message.email.length===0) ? "errore" : ""
      this.Message_State.error_message = "Per favore inserisci tutti i campi richiesti"
      return
    }


    if (!this.CurrentAccount) {
      this.Message['from'] = {
        account_id : null,
        email : this.Message.email,
        phone_number : this.Message.phone_number
      }
    }
    else if (this.CurrentAccount) {
      var phone = null
      if (this.CurrentAccount['phone_number'] && this.CurrentAccount['phone_number']!==null) {
        phone = this.CurrentAccount['phone_number']
      }
      else if (this.CurrentAccount['business'] && this.CurrentAccount['business']['phone_number'] && this.CurrentAccount['business']['phone_number']!==null) {
        phone = this.CurrentAccount['business']['phone_number']
      }
      this.Message['from'] = {
        account_id : this.CurrentAccount._id,
        email : this.CurrentAccount.email,
        phone_number : phone
      }
    }

    var phone = null
    if (this.Account['phone_number'] && this.Account['phone_number']!==null) {
      phone = this.Account['phone_number']
    }
    else if (this.Account['business']['phone_number'] && this.Account['business']['phone_number']!==null) {
      phone = this.Account['business']['phone_number']
    }
    this.Message['to'] = {
      account_id : this.Account._id,
      email : this.Account.email,
      phone_number : phone
    }

    this.commonService.postMethod('message', this.Message).then((data) => {
      // console.log(JSON.stringify(data))
      this.Message_State.created = true
      this.Message_State.loading = false
      this.popup = null
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      if (error.status===400) {
      } else if (error.status===402) {
      }
      this.Message_State.loading = false
      this.Message_State.created = false
      this.popup = null
    })
  }
  getGoogleMapsLink(account) {
    if (account['address']['city']) {
      return "https://maps.google.com/?q=" + account['address']['city'] + ", " + account['address']['street']
    } else {
      return ""
    }
  }
  getPhoneNumber() {
    if (this.Account) {
      if (this.Account['phone_number'] && this.Account['phone_number']!==null) {
        return this.Account['phone_number']
      }
      else if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['phone_number'] && this.Account['business']['phone_number']!==null) {
          return this.Account['business']['phone_number']
        }
      }
      else {
        return ""
      }
    }
  }
  getEmailAddress() {
    if (this.Account) {
      if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['email'] && this.Account['business']['email']!==null) {
          return this.Account['business']['email']
        }
        else if (this.Account['email'] && this.Account['email']!==null) {
          return this.Account['email']
        }
      }
      else if (this.Account['email'] && this.Account['email']!==null) {
        return this.Account['email']
      }
      else {
        return ""
      }
    }
  }

  // PROMOTIONS

  startPromotion() {
    if (this.Promotion_State.loading) {return}
    this.Promotion.facebook.days = this.FacebookPromotion.default_time_option.count * 7
    this.Promotion.facebook.daily_budget = this.FacebookPromotion.default_price_options.price
    this.Promotion.google.days = (this.GooglePromotion.active) ? (this.GooglePromotion.default_time_option.count * 7) : 0
    this.Promotion.google.daily_budget = (this.GooglePromotion.active) ? this.GooglePromotion.default_price_options.price : 0
    this.Promotion_State.loading = true
    this.Promotion_State.error_message = null
    this.commonService.postMethod('promotions', this.Promotion).then((data) => {
      this.Promotion_State.loading = false
      this.Promotion_State.error_message = null
      this.popup = null

      this.commonService.getMethod('/account/' + this.Account['_id'] + '/check_promotions').then((data) => {
        if(data.result.length===0) {
          this.PromotedPage = false
        } else {
          this.PromotedPage = true
        }
        this.PromotionChecked = true
      }).catch((error) => {
        this.PromotedPage = false
        this.PromotionChecked = true
      })

    }).catch((error) => {
      this.Promotion_State.loading = false
      // console.log("error: " + JSON.stringify(error))
      // console.log("error body: " + JSON.stringify(error._body))
      if (error.status===400) {
        // console.log('no_stripe_customer')
        this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
      } else if (error.status===402) {
        var response_body = JSON.parse(error._body)
        // console.log("stripe_result object: " + response_body['result'])
        // console.log("stripe_result success: " + response_body['success'])
        // console.log("response_body: " + JSON.stringify(response_body))
        // console.log("response_body object: " + error._body)

        var stripe_result = response_body.result
        console.log("stripe_result object: " + stripe_result)
        //
        if (stripe_result.raw) {
          var raw = stripe_result.raw
          console.log("raw: " + JSON.stringify(raw))

        }

        // console.log("stripe_result: " + JSON.stringify(stripe_result))
        // var decline_code = raw.decline_code
        // console.log("decline_code: " + JSON.stringify(decline_code))
        // if (decline_code==="insufficient_funds") {
        //   this.Promotion_State.error_message = "La tua carta non ha i fondi sufficienti per eseguire questo pagamento. Per favore inserisci un altra carta o ricarica quella attuale."
        // }
        this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP"
      } else {
        this.Promotion_State.error_message = "Errore sconosciuto. Per favore riprova dopo aver aggirnato la pagina."
      }
    })
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

  // UTILS

  getStringDate(date) {
    // console.log(date.toJSON().split('T')[0])
    return date.toJSON().split('T')[0]
  }
  clearCardData(){
    this.Card.number = null
    this.Card.exp_month = null
    this.Card.exp_year = null
    this.Card.cvc = null
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

}
