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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public id = null
  public CurrentAccount = null
  public popup = null
  public posts = []
  public post = null
  public selected_post = null
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

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, public commonService: CommonService, private authService: AuthService, private paymentService: PaymentService) {
    this.navigationService.updateMessage("Richieste per Idraulici")
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (isBrowser) { window.scrollTo(0, 0) }
    // this.data = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next("Run after 1 second");
    //   },1000);
    //   // setInterval(() => {
    //   //   observer.next(new Date())
    //   // }, 1000);
    //
    //   // setTimeout(() => {
    //   //   observer.next(22);
    //   // },2000);
    //   // setTimeout(() => {
    //   //   observer.complete();
    //   // },9000);
    // });
    // //
    // let subscriber = this.data.subscribe(
    //   value => console.log(value),
    //   err => console.log(err),
    //   () => console.log('done')
    // );

    // Observable.interval(1000).switchMap(() =>
    // console.log("mpa")
    // ).map((data) =>
    // data.json())
    // .subscribe((data) => {
    //        console.log(data);// see console you get output every 5 sec
    //     });
    // Observable.interval(1000).take(7).subscribe(x => {
    //   console.log("mpa")
    // });
    // let obs = Observable.interval(1000).take(7);
    // let firstsub = obs.subscribe(x => console.log('first sub: ' + x));

    // var source = Observable.interval(1000)
    // source.subscribe(x => {
    //   console.log(x)
    // });

    // setTimeout(() => {
    //   console.log('first sub: ')
    //   // let secondsub = obs.subscribe(x => console.log('second sub: ' + x));
    // }, 3000)

    // let newobs = Observable.interval(1000).take(5).map(x => Observable.timer(500).map(() => x));
    //
    // let newsub = newobs.subscribe(x => console.log(x));
    // Observable.interval(1000).take(5).map(x => console.log('other'));

    // Observable.interval(500).flatMap(() => {
    //   console.log('other')
    // });

    // to be called when the route changes
    // subscription.unsubscribe();

    // var subscription = Observable.interval(5000).subscribe(res => {
    //   console.log(res)
    // })

    // let subscription = Observable.interval(1000).startWith(0).map((x) => {
    //     // let date1= Math.floor(new Date().getTime()/1000);
    //     //     this.diff = date2 - date1;
    //     }).subscribe((x) => {
    //       console.log(x)
    // });
  }

  ngOnInit() {
    if (isBrowser) {
      Observable.interval(1000).subscribe(x => {
        this.updateCountDownDate()
      })
    }

    this.commonService.getMethod('posts').then((data) => {
      this.posts = data.result
    }).catch((error) => {})
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (this.id) {
        this.router.navigate(['/post'])
      }
      // this.commonService.getMethod('posts/' + this.id).then((data) => {
      //   this.post = data.result
      //   console.log(JSON.stringify(data))
      // }).catch((error) => {
      //   console.log(JSON.stringify(error))
      //   this.router.navigate(['/post'])
      // })
    })

    if (isBrowser) {
      // var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
      // setInterval(function() {
      //
      //   // Get todays date and time
      //   var now = new Date().getTime();
      //
      //   // Find the distance between now an the count down date
      //   var distance = countDownDate - now;
      //
      //   // Time calculations for days, hours, minutes and seconds
      //   // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      //
      //   this.countDownDate.hours = hours
      //   this.countDownDate.minutes = minutes
      //   this.countDownDate.seconds = seconds
      //   // Display the result in the element with id="demo"
      //   // document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      //
      //   // console.log("Hours: " + hours + " minutes: " + minutes + " seconds: " + seconds)
      //
      //   // If the count down is finished, write some text
      //   // if (distance < 0) {
      //   //   clearInterval(x);
      //   //   document.getElementById("demo").innerHTML = "EXPIRED";
      //   // }
      // }, 1000);
    }
  }

  checkPostLocation(post) {
    return post.address.city + " (" + post.address.province + ")"
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
  updateCountDownDate() {
    // var fromDate = new Date("Jan 5, 2018 15:37:25").getTime();
    var now = new Date().getTime();

    var fromDate = new Date();
    fromDate.setHours(24,0,0,0);
    var toDate = fromDate.getTime();

    // Find the distance between now an the count down date
    var distance = toDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    // console.log("Hours: " + hours + " minutes: " + minutes + " seconds: " + seconds)

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
      this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
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
      this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
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

  previewPurchase(post) {
    this.selected_post = post
    if (!this.authService.currentAccount()) {
      this.popup = "LOGIN_POPUP"
      this.commonService.disableScroll()
      return
    }
    this.popup = "PREVIEW_PURCHASE_CONTACT_POPUP"
  }
  purchase(post) {
    if (this.PurchaseState.loading) {return}
    this.PurchaseState.loading = true
    this.PurchaseState.error = null

    console.log(post)
    console.log("post id:" + post._id)

    this.commonService.postMethod('posts/' + post._id + '/contacts', {}).then((data) => {
      console.log(JSON.stringify(data))
      this.popup = "PURCHASED_CONTACT_POPUP"
      this.PurchaseState.loading = false
      this.PurchaseState.error = null
      // this.router.navigate(['/account/contacts'])
    }).catch((error) => {
      console.log(JSON.stringify(error))
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

    console.log(this.Card)

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
      this.popup = "PURCHASED_CONTACT_POPUP"
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

  getGoogleMapsLink(post) {
    return true

    // if (account['address']['city']) {
    //   return "https://maps.google.com/?q=" + account['address']['city'] + ", " + account['address']['street']
    // } else {
    //   return ""
    // }
  }
  getPhoneNumber(post) {
    return true

    // if (this.Account) {
    //   if (this.Account['phone_number'] && this.Account['phone_number']!==null) {
    //     return this.Account['phone_number']
    //   }
    //   else if (this.Account['business'] && this.Account['business']!==null) {
    //     if (this.Account['business']['phone_number'] && this.Account['business']['phone_number']!==null) {
    //       return this.Account['business']['phone_number']
    //     }
    //   }
    //   else {
    //     return ""
    //   }
    // }
  }
  getEmailAddress(post) {
    return true
    // if (this.Account) {
    //   if (this.Account['business'] && this.Account['business']!==null) {
    //     if (this.Account['business']['email'] && this.Account['business']['email']!==null) {
    //       return this.Account['business']['email']
    //     }
    //     else if (this.Account['email'] && this.Account['email']!==null) {
    //       return this.Account['email']
    //     }
    //   }
    //   else if (this.Account['email'] && this.Account['email']!==null) {
    //     return this.Account['email']
    //   }
    //   else {
    //     return ""
    //   }
    // }
  }
}
