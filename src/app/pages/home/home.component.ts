import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
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
import { Observable, Subscription } from 'rxjs/Rx';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { OrdersService } from '../../shared/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public SeoData = {}
  public params = null
  public query = null
  public fragment = null
  public CurrentAccount = null
  public popup = null
  public popup_second = null
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

  public Cards = []
  public CardsState = {
    loading: false,
    error: null,
  }
  public DefaultCard = null
  public DefaultCardState = {
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

  public PostCustomers = null
  public SelectedPostCustomer = null
  public PostCustomersState = {
    loading: false,
    error: null,
  }

  public Proposal = {
    text: "",
    estimate_price: null,
    product_quality:0,
    start_date: null,
    work_duration_day: 0,
  }
  public ProposalState = {
    error: null
  }

  constructor(public route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private seoService: SeoService, private ordersService: OrdersService, public commonService: CommonService, private authService: AuthService, private paymentService: PaymentService, private fb: FacebookService, private http: Http) {
    this.navigationService.updateMessage("Bacheca del lavoro")
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // console.log("Router url: " + this.router.url)
    if (isBrowser) {
      window.scrollTo(0, 0)
      // if (document.location.hostname === "www.starbook.co") {
      //   fb.init({appId: '1108461325907277', version: 'v2.7'})
      // } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
      //   fb.init({appId: '1251898728230202', version: 'v2.7'})
      // }
    }
  }

  ngOnInit() {
    if (isBrowser) {
      // Observable.interval(1000).subscribe(x => {
      //   this.updateCountDownDate()
      // })
    }
    this.route.params.subscribe(params => { this.params = params })
    this.route.fragment.subscribe((fragment: string) => { this.fragment = fragment })
    this.route.queryParams.subscribe(params => { this.query = params })

    // console.log("My hash fragment is here => ", this.fragment)
    // console.log("My query is here => ", this.query)

    this.commonService.getMethod('companies?type=business_customers').then((data) => {
      // console.log(JSON.stringify(data))
      this.TestimonialAccounts = data.result
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      this.TestimonialAccounts = null
    })

    this.posts = null
    if (this.params['id']) {
      this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/richiesta-lavoro.png"
      this.commonService.getMethod('posts?post_id=' + this.params['id']).then((data) => {
        this.posts = data.result
        this.navigationService.updateMessage(this.posts[0].title)
        // console.log(JSON.stringify(this.posts))
      }).catch((error) => {
        // console.log(JSON.stringify(error))
        this.router.navigate(['/post'])
      })
    } else {
      this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/richieste-lavoro-bacheca.png"
      let params = new URLSearchParams()
      for(let key in this.query) {
        params.set(key, this.query[key])
      }
      this.commonService.getMethod('posts?' + params.toString()).then((data) => {
        this.posts = data.result
        // console.log(JSON.stringify(data))
      }).catch((error) => {
      })
    }

    this.SeoData['title'] = "Clienti per infissi"
    this.SeoData['description'] = "Una piattaforma che mette a disposizione richieste dettagliate da potenziali clienti nella tua zona offrendo partnership a lungo termine e costi agevolati."
    this.SeoData['url'] = 'https://www.starbook.co' + this.router.url
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

  previewUpdatePost(post) {
    this.SelectedPostCustomer = null
    this.selected_post = post
    this.commonService.disableScroll()
    this.popup = "SELECT_COMPANY_POPUP"
    this.PostCustomersState.loading = true
    this.commonService.getMethod('posts/' + post._id + "/customers").then((data) => {
      this.PostCustomers = data.result
      this.PostCustomersState.loading = false
    }).catch((error) => {
      this.PostCustomersState.loading = false
    })
  }

  previewPost(post) {
    this.selected_post = post
    this.commonService.disableScroll()
    if (this.authService.currentAccount()) {
      this.checkPurchasePost(post)
    } else {
      // this.popup_second = "SIGNUP_POPUP"
    }
    this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
  }
  showPreviewPurchasePost(post) {
    if (!this.authService.currentAccount()) {
      this.popup_second = "SIGNUP_POPUP"
      return
    }
    this.getCards()
    this.popup_second = 'CONFIRM_PURCHASE_POPUP'
  }
  confirmPurchase(post) {
    if (this.DefaultCard) {
      if (this.PurchaseState.loading) {return}
      this.PurchaseState.loading = true
      this.PurchaseState.error = null
      this.purchased_post = null
      this.commonService.postMethod('posts/' + post._id + '/contacts', {price_contact:499}).then((data) => {
        this.PurchaseState.loading = false
        this.PurchaseState.error = null
        this.popup_second = "PURCHASE_CONFIRMED_POPUP"
      }).catch((error) => {
        this.PurchaseState.loading = false
        this.PurchaseState.error = null
        if (error.status===400) {
          // Non hai carte
          // this.popup = "NEW_CARD_POPUP"
          // this.getCards()
        }
        else if (error.status===402) {
          var response_body = JSON.parse(error._body)
          var stripe_result = response_body.result
          if (stripe_result) {
            if (stripe_result.raw) {
              var raw = stripe_result.raw
              if (raw.decline_code === "insufficient_funds") {
                this.CardState.error = "Fondi non sufficienti per eseguire questo pagamento. Per favore inserisci una carta o seleziona un altra."
              }
            }
          }
        }
        else {
          this.CardState.error = "Errore sconosciuto. Per favore riprova dopo aver aggirnato la pagina."
        }
      })
    }
    if (!this.DefaultCard) {
      if (this.Card && !this.paymentService.cardNumberValidate(this.Card.number)) {
        this.CardState.error = "Il numero della carta non è corretto."
        return
      }
      if (this.Card.exp_date && this.Card.exp_date.length === 5) {
        let exp_parts = this.Card.exp_date.split('/');
        if (exp_parts[0] !== this.Card.exp_date) {
          this.Card.exp_month = exp_parts[0];
          this.Card.exp_year = exp_parts[1];
        } else {
          this.CardState.error = "Errore data";
          return
        }
      }
      else {
        this.CardState.error = "La data non è completa";
        return
      }

      this.CardState.loading = true
      this.CardState.error = null
      this.paymentService.addNewCard(this.Card).then((response) => {
        // console.log(JSON.stringify(response))
        this.CardState.loading = false
        this.CardState.error = null
        this.Card.number = null
        this.Card.exp_month = null
        this.Card.exp_year = null
        this.Card.cvc = null
        this.Cards.push(response)
        this.DefaultCard = response.id
        this.confirmPurchase(post)
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
  }
  donePurchase(post) {
    this.popup_second = null
    this.checkPurchasePost(post)
  }

  login(data) {
    if (this.AuthState.loading) {return}
    this.AuthState.error = null
    this.AuthState.loading = true
    this.authService.login(data.email, data.password).then((data) => {
      this.AuthState.error = null
      this.CurrentAccount = data
      this.AuthState.loading = false
      this.showPreviewPurchasePost(this.selected_post)
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
      this.showPreviewPurchasePost(this.selected_post)
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
        this.showPreviewPurchasePost(this.selected_post)
      }).catch((error) => {
        this.AuthState.loading = false
      })
    }).catch((error) => {
      this.AuthState.loading = false
    })
  }

  checkPurchasePost(post) {
    this.PurchaseState.loading = true
    this.PurchaseState.error = null
    this.purchased_post = null
    this.commonService.getMethod('contacts?post_id=' + post['_id']).then((data) => {
      // console.log(JSON.stringify(data))
      this.PurchaseState.loading = false
      if (data.result.length > 0) {
        this.purchased_post = data.result[0]['post']
        // if (this.purchased_post.customer.complete===false) {
        //   this.popup = "
        //   "
        // } else {
        //   this.popup = "PURCHASED_CONTACT_POPUP"
        // }
      }
      else {
        this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
      }
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      this.PurchaseState.loading = false
    })
  }
  setPriceCalculated(post) {
    // console.log(post)
  }

  getCards() {
    if (this.CardsState.loading) {return}
    this.CardsState.loading = true
    this.DefaultCard = null
    this.commonService.getMethod('me/customers').then((data) => {
      // console.log(JSON.stringify(data))
      this.Cards = data.sources.data
      this.DefaultCard = data.default_source
      this.CardsState.loading = false
    }).catch((error) => {
      this.Cards = []
      this.CardsState.loading = false
    })
  }
  selectCard(card_id) {
    if (this.DefaultCardState.loading) {return}
    this.DefaultCardState.loading = true
    this.commonService.postMethod('me/customers', {default_source: card_id}).then((status) => {
      this.DefaultCard = status.default_source
      // console.log(this.DefaultCard)
      this.DefaultCardState.loading = false
    }).catch((error) => {
      this.DefaultCardState.loading = false
    })
  }

  selectCompanyForPost(customer) {
    this.SelectedPostCustomer = customer
  }
  assignCustomerToPost(post, customer) {
    this.PostCustomersState.loading = true
    // console.log("Post: " + JSON.stringify(post))
    // console.log("Customer: " + JSON.stringify(customer))
    var data = {}
    data['status'] = {
      active: false
    }
    data['applicant'] = {
      _id: customer._id
    }
    this.commonService.putMethod('posts/' + post._id + "/customers", data).then((data) => {
      // console.log(JSON.stringify(data.result))
      this.PostCustomersState.loading = false
      this.popup = null;
      this.commonService.enableScroll();
    }).catch((error) => {
      this.PostCustomersState.loading = false
      this.popup = null;
      this.commonService.enableScroll();
    })
  }
  openQuotationForm(post) {
    this.selected_post = post
    this.commonService.disableScroll()
    this.popup = "PROPOSAL_FORM_POPUP"
  }
  sendProposal(post) {

  }

  counter(count) {
    // console.log(count)
    return new Array(count)
  }
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
          // return '../assets/images/no_logo_black.png'
          return '../assets/images/no_logo_blue.png'
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
  checkPostLocation(post) {
    if (post.address.province) {
      return post.address.city + " (" +  post.address.province + ")"
    }
    return post.address.city
  }
}
