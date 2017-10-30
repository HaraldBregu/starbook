import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { AuthService } from '../../shared/auth.service';
import { ContactService } from '../../shared/contact.service';
import { SeoService } from '../../shared/seo.service';
import { PopupsService } from '../../popups/popups.service';
import { CommonService } from '../../shared/common.service';
import { PaymentService } from '../../shared/payment.service';
import * as globals from '../../globals';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/map';

import { Observable, Subscription } from 'rxjs/Rx';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public SeoData = {}
  public id = null
  public params = null
  public CurrentAccount = null
  public popup = null
  public posts = null
  public post = null
  public selected_post = null
  public purchased_post = null
  public emailPattern;

  public AuthField = {
    email: null,
    password: null,
    profile : {
      firstname: '',
      lastname: '',
    },
    business : {
      name : '',
    },
  }
  public AuthState = {
    loading: false,
    error: null,
  }

  public PurchaseState = {
    loading: false,
    error: null,
  }

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
  public CardState = {
    loading: false,
    error: null,
  }

  public CountDownDate = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  public TestimonialAccounts = null

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private seoService: SeoService, public commonService: CommonService, private authService: AuthService, private paymentService: PaymentService, private fb: FacebookService) {
    this.navigationService.updateMessage("Bacheca del lavoro")
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (isBrowser) {
      window.scrollTo(0, 0)
      if (document.location.hostname === "www.starbook.co") {
        fb.init({appId: '1108461325907277', version: 'v2.7'})
      } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
        fb.init({appId: '1251898728230202', version: 'v2.7'})
      }
    }
    this.route.params.subscribe(params => { this.params = params })

    this.SeoData['title'] = "Bacheca del lavoro | Richieste giornaliere"
    this.SeoData['description'] = "Trova una richiesta di lavoro in base alle tue competenze. Guarda i dati del contatto, invia un preventivo e lavora."
    this.SeoData['url'] = 'https://www.starbook.co' + this.router.url
    this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/view-request-customer.png"
    this.seoService.setTitle(this.SeoData['title'])
    this.seoService.setMetaElem('description', this.SeoData['description'])
    this.seoService.setOgElem('twitter:card', "summary_large_image")
    this.seoService.setOgElem('twitter:title', this.SeoData['title'])
    this.seoService.setOgElem('twitter:site', "@starbookco")
    this.seoService.setOgElem('twitter:creator', "@HaraldBregu")
    this.seoService.setOgElem('twitter:description', this.SeoData['description'])
    this.seoService.setOgElem('twitter:image', this.SeoData['image_url'])
    this.seoService.setOgElem('og:title', this.SeoData['title'])
    this.seoService.setOgElem('og:description', this.SeoData['description'])
    this.seoService.setOgElem('og:url', this.SeoData['url'])
    this.seoService.setOgElem('og:image', this.SeoData['image_url'])
    this.seoService.setOgElem('og:image:secure_url', this.SeoData['image_url'])

  }

  ngOnInit() {
    if (isBrowser) {
      Observable.interval(1000).subscribe(x => {
        this.updateCountDownDate()
      })
    }

    this.commonService.getMethod('accounts').then((data) => {
      // console.log(JSON.stringify(data))
      this.TestimonialAccounts = data.result
    }).catch((error) => {
      this.TestimonialAccounts = null
      // console.log(JSON.stringify(error))
    })

    if (this.params['id']) {
      this.commonService.getMethod('posts/' + this.params['id']).then((data) => {
        // this.post = data.result
        this.posts = [data.result]
        this.navigationService.updateMessage(data.result.title)
        // console.log(JSON.stringify(data))
      }).catch((error) => {
        // console.log(JSON.stringify(error))
        this.router.navigate(['/post'])
      })
    } else {
      // this.navigationService.updateMessage("Tutte le richieste")
      this.commonService.getMethod('posts').then((data) => {
        this.posts = data.result
        // console.log(JSON.stringify(data))
      }).catch((error) => {
        // console.log(JSON.stringify(error))
      })
    }
  }

  checkCustomerFirstname(post) {
    return post.customer.firstname
  }
  checkCustomerLastname(post) {
    return post.customer.lastname
  }
  checkPostTitle(post) {
    return post.title
  }
  checkPostDescription(post) {
    return post.description
  }
  checkCustomerEmailAddress(post) {
    return post.customer.email
  }
  checkCustomerPhoneNumber(post) {
    return post.customer.phone_number
  }
  checkPostLocation(post) {
    if (post.address.province) {
      return post.address.city + " (" +  post.address.province + ")"
    }
    return post.address.city
  }
  checkAddressStreet(post) {
    return post.address.street
  }
  updateCountDownDate() {
    var now = new Date().getTime();
    var fromDate = new Date();
    fromDate.setHours(24,0,0,0);
    var toDate = fromDate.getTime();
    var distance = toDate - now;
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    this.CountDownDate.hours = hours
    this.CountDownDate.minutes = minutes
    this.CountDownDate.seconds = seconds
  }
  getCountDownHours(post) {
    let string_time = ""
    let hours = this.CountDownDate.hours
    string_time = hours.toString()
    if (hours<10) {
      string_time = "0" + hours.toString()
    }
    return string_time
  }
  getCountDownMinutes(post) {
    let string_time = ""
    let minutes = this.CountDownDate.minutes
    string_time = minutes.toString()
    if (minutes<10) {
      string_time = "0" + minutes.toString()
    }
    return string_time
  }
  getCountDownSeconds(post) {
    let string_time = ""
    let seconds = this.CountDownDate.seconds
    string_time = seconds.toString()
    if (seconds<10) {
      string_time = "0" + seconds.toString()
    }
    return string_time
  }

  // AUTHENTICATION

  login(data) {
    if (this.AuthState.loading) {return}
    this.AuthState.error = null
    this.AuthState.loading = true
    this.authService.login(data.email, data.password).then((data) => {
      this.AuthState.error = null
      this.CurrentAccount = data
      this.AuthState.loading = false
      this.checkPurchasePost(this.selected_post)
    }).catch((error) => {
      this.AuthState.loading = false
      if (error===404) {
        this.AuthState.error = "Non riusciamo a trovare un account con quell’indirizzo e-mail"
      }
      else if (error===401) {
        this.AuthState.error = "La tua password non è corretta"
      }
      else {
        this.AuthState.error = "Si è verificato un errore!"
      }
    })
    return false
  }
  signup(data) {
    if (this.AuthState.loading) {return}
    this.AuthState.error = null
    if (!data.profile.firstname || !data.profile.lastname || !data.business.name || !data.email || !data.password) {
      this.AuthState.error = "Per favore, inserisci tutti i campi richiesti."
      return
    }
    this.AuthState.loading = true
    data.profile['fullname'] = data.profile.firstname.trim() + ' ' + data.profile.lastname.trim()
    this.authService.signup(data).then((data) => {
      this.navigationService.updatePersonalMenu(data)
      this.AuthState.error = null
      this.AuthState.loading = false
      this.checkPurchasePost(this.selected_post)
    }).catch((error) => {
      this.AuthState.loading = false
      switch (error) {
        case 409:
        this.AuthState.error = "Questo indirizzo email è gia in uso."
          break;
        case 422:
        this.AuthState.error = "Inserisci tutti i campi richiesti"
          break;
        case 404:
        this.AuthState.error = "C'è stato un errore sconosciuto, per favore riprova più tardi"
          break
        default:
        this.AuthState.error = null
      }
    })
  }
  continueWithFacebook() {
    if (this.AuthState.loading) {return}
    this.AuthState.error = null
    this.AuthState.loading = true
    this.fb.logout()
    this.fb.login().then((res: LoginResponse) => {
      let fb_token = res.authResponse.accessToken
      this.authService.facebookLogin(fb_token).then((data) => {
        this.navigationService.updatePersonalMenu(data)
        this.AuthState.error = null
        this.CurrentAccount = data
        this.AuthState.loading = false
        this.checkPurchasePost(this.selected_post)
      }).catch((error) => {
        this.AuthState.loading = false
      })
    }).catch((error) => {
      this.AuthState.loading = false
    })
  }

  previewPurchase(post) {
    this.selected_post = post
    if (!this.authService.currentAccount()) {
      this.popup = "SIGNUP_POPUP"
      this.commonService.disableScroll()
      return
    }
    this.checkPurchasePost(post)
  }
  checkPurchasePost(post) {
    this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
    this.PurchaseState.loading = true
    this.PurchaseState.error = null
    this.purchased_post = null
    this.commonService.getMethod('contacts?' + "post_id=" + post['_id'] ).then((data) => {
      this.PurchaseState.loading = false
      if (data.result.length===0) {
      } else {
        this.purchased_post = data.result[0]['post']
        this.popup = "PURCHASED_CONTACT_POPUP"
      }
    }).catch((error) => {
      this.PurchaseState.loading = false
    })
  }
  purchase(post) {
    if (this.PurchaseState.loading) {return}
    this.PurchaseState.loading = true
    this.PurchaseState.error = null
    this.purchased_post = null
    this.commonService.postMethod('posts/' + post._id + '/contacts', {}).then((data) => {
      this.PurchaseState.loading = false
      this.PurchaseState.error = null
      this.checkPurchasePost(post)
    }).catch((error) => {
      this.PurchaseState.loading = false
      this.PurchaseState.error = null
      if (error.status===400) {
        this.popup = "NEW_CARD_POPUP"
      }
      else if (error.status===402) {
        var response_body = JSON.parse(error._body)
        var stripe_result = response_body.result
        if (stripe_result) {
          if (stripe_result.raw) {
            var raw = stripe_result.raw
            if (raw.decline_code === "insufficient_funds") {
              this.PurchaseState.error = "Fondi non sufficienti per eseguire questo pagamento. Per favore inserisci un altra carta o ricarica quella attuale."
            }
          }
        }
        this.popup = "NEW_CARD_POPUP"
      }
      else {
        this.PurchaseState.error = "Errore sconosciuto. Per favore riprova dopo aver aggirnato la pagina."
      }
    })
  }
  addCardAndContinue() {
    if (this.CardState.loading) {return}
    this.CardState.loading = true
    this.CardState.error = null
    if (this.Card && this.paymentService.cardNumberValidate(this.Card.number)) {
      this.CardState.error = null
    }
    else if (this.Card && !this.paymentService.cardNumberValidate(this.Card.number)) {
      this.CardState.error = "Il numero della carta non è corretto."
    }
    if (this.Card.exp_date && this.Card.exp_date.length === 5) {
      let exp_parts = this.Card.exp_date.split('/');
      if (exp_parts[0] !== this.Card.exp_date) {
        this.Card.exp_month = exp_parts[0];
        this.Card.exp_year = exp_parts[1];
      } else {
        this.CardState.error = "Errore data";
      }
    }
    else {
      this.CardState.error = "La data non è completa";
    }

    this.paymentService.addNewCard(this.Card).then((response) => {
      this.CardState.loading = false
      this.CardState.error = null
      this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
      this.purchase(this.selected_post)
      this.Card.number = null
      this.Card.exp_month = null
      this.Card.exp_year = null
      this.Card.cvc = null
    }).catch((error) => {
      this.CardState.loading = false
      this.CardState.error = null
      if (error === 400) {
        this.CardState.error = "Per favore inserisci correttamente i dati della carta."
      }
      else if (error === 402) {
        this.CardState.error = "Per favore inserisci correttamente i dati della carta."
      }
      else {
        this.CardState.error = "Controlla i campi inseriti e riprova."
      }
    })
  }

  // UTILS

  getStringDate(date) {
    return date.toJSON().split('T')[0]
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
      this.CardState.error = "Inserisci la data in formato MM/AA (mese/anno)";
    }

    if (result.length === 5) {
      let parts = result.split('/');
      if (parts[0] !== result) {
        if (parseInt(parts[1]) > year) {
          this.CardState.error = null;
        } else {
          if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
            this.CardState.error = null;
          } else {
            this.CardState.error = "Inserisci una data corretta";
          }
        }
      } else {
        this.CardState.error = null;
      }
    }
    this.Card.exp_date = result
    return result;
  }
  imageForAccount(account) {
    if (isBrowser) {
      var logo = new Image()
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      if (logo.width>0) {
        return logo.src
      } else {
        logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
        if (logo.width>0) {
          return logo.src
        } else {
          return '../assets/images/no_logo_black.png'
        }
      }
    }
  }
  checkCompanyName(account) {
    if (account.business && account.business.name) {
      return account.business.name
    } else {
      if (account.profile.fullname) {
        return account.profile.fullname
      } else {
        return account.profile.firstname
      }
    }
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
}
