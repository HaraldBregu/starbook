import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../shared/common.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public page;
  public currentUser;
  public images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
  public emailPattern: any;
  public numPattern: any;
  public contacts = '';
  public spinerView = false;
  public clearView = false;
  public query: string = '';
  public results: string[] = [];
  public newServiceRequest = {
    message: 'Richiedi?'
  };
  public ref;
  public categories = []

  public invitation_state = {
    message_success: null,
    message_error: null
  };
  public services = [
    {
      title:"Idraulico",
      color:"#164170",
      image: "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulico-normal.png"
    },
    {
      title:"Falegname",
      color:"#4E311C",
      image: "https://st.depositphotos.com/1769672/2236/i/950/depositphotos_22367589-stock-photo-carpenter-working.jpg"
    },
    {
      title:"Muratore",
      color:"#F09765",
      image: "https://www.masonrymagazine.com/wp-content/uploads/2017/04/shutterstock_462881602.jpg"
    },
    // {
    //   title:"Idraulico",
    //   color:"#164170",
    //   image: "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulico-normal.png"
    // },
    // {
    //   title:"Falegname",
    //   color:"#4E311C",
    //   image: "https://st.depositphotos.com/1769672/2236/i/950/depositphotos_22367589-stock-photo-carpenter-working.jpg"
    // },
    // {
    //   title:"Muratore",
    //   color:"#F09765",
    //   image: "https://www.masonrymagazine.com/wp-content/uploads/2017/04/shutterstock_462881602.jpg"
    // },
  ];
  public data = {
    pictures:[
      "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-tutti-attrezzi.png"
    ],
    texts:[
      "Hai bisogno di un idraulico? Prenotalo!",
      "Sappiamo bene che trovare l'idraulico giusto al momento giusto non è mai semplice. D'ora in poi lo facciamo noi al tuo posto!",
      "La migliore piattaforma per trovare il tuo idraulico in modo semplice, veloce e sicuro.",
      "Tre ottimi motivi per prenotare l'idraulico su Starbook.",
      "Cosa dicono i clienti"
    ],
    bullets:[
      {
        title: "Professionalità",
        description: "La serietà prima di tutto e noi ci assicuriamo di portare il miglior professionista della zona e che abbia una solida esperienza nel campo in cui opera.",
        icon_name: "fa-certificate"
      },
      {
        title: "Puntualità",
        description: "Portare il professionista nel giorno e l'ora che si desidera è uno dei nostri valori piu importanti.",
        icon_name: "fa-clock-o"
      },
      {
        title: "Pagamento online",
        description: "La massima comodità anche nei metodi di pagamento, utilizando la carta di credito o prepagata puoi pagare il professionista direttamente online.",
        icon_name: "fa-credit-card"
      }
    ],
    reviews:[
      {
        username: "John D.",
        text: "Assurdo! Dopo aver richiesto un particolare lavoro a casa mia, nel arco di pochi minuti ho ricevuto il miglior preventivo e il miglior professionista della zona.",
        rating: 5
      },
      {
        username: "John D.",
        text: "Gli addetti alle pulizie sono arrivati puntuali al mattino e sono rimasti a lavorare fino a tarda sera pur di finire il lavoro. L'appartamento era in pessime condizioni. Hanno fatto un ottimo lavoro pulendo a fondo, il loro aiuto è stato fondamentale.",
        rating: 5
      },
      {
        username: "John D.",
        text: "Gli addetti alle pulizie sono arrivati puntuali al mattino e sono rimasti a lavorare fino a tarda sera pur di finire il lavoro. L'appartamento era in pessime condizioni. Hanno fatto un ottimo lavoro pulendo a fondo, il loro aiuto è stato fondamentale.",
        rating: 5
      }
    ],
  };
  public Request = {
    description: '',
    phone: '',
    email: '',
    firstname: '',
    lastname: ''
  };
  public request_state = {
    loading: false,
    button_title: "Invia richiesta",
    message_success: null,
    message_error: null,
    title_error: null,
    description_error: null,
    firstname_error: null,
    lastname_error: null,
    phone_error: null,
    email_error: null
  };
  public seoObject = {
    title: "",
    description: "",
    url: "",
    image_url: ""
  };
  public order = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private orderService: OrderService,
    private commonService: CommonService) {
      this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.numPattern = /^\d+$/;
      this.analyticsService.sendPageViewUrl(this.router.url)
      this.navigationService.updateMessage('');

      if (isBrowser) {
        if (localStorage.getItem('auth')) {
          this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
      }

      this.commonService.getCategories().then((categories) => {
        this.categories = categories.result;
        // console.log('categories: ' + JSON.stringify(this.categories));
      }).catch((error) => {
        // console.log('error: ' + error);
        this.categories = null;
      });

      this.route.params.subscribe((params: Params) => {
        if (isBrowser) {window.scrollTo(0, 0);}
        this.page = params['page'];
        if (this.page==='idraulico') {
          this.navigationService.updateMessage('Ti serve un idraulico?');

          this.data.pictures = [
            "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-tutti-attrezzi.png"
          ];
          this.data.texts = [
            "Hai bisogno di un idraulico? Prenotalo!",
            "Sappiamo bene che trovare l'idraulico giusto al momento giusto non è mai semplice. D'ora in poi lo facciamo noi al tuo posto!",
            "La migliore piattaforma per trovare il tuo idraulico in modo semplice, veloce e sicuro.",
            "Tre ottimi motivi per prenotare l'idraulico su Starbook.",
            "Cosa dicono i clienti"
          ];
          this.data.bullets = [
            {
              title: "Professionalità",
              description: "La serietà prima di tutto e noi ci assicuriamo di portare il miglior idraulico della zona e che abbia una solida esperienza nel campo in cui opera.",
              icon_name: "fa-certificate"
            },
            {
              title: "Puntualità",
              description: "Portare l'idraulico nel giorno e l'ora che si desidera è uno dei nostri valori piu importanti. Noi puntiamo solo all'efficienza.",
              icon_name: "fa-clock-o"
            },
            {
              title: "Pagamento online",
              description: "La massima comodità anche nei metodi di pagamento, utilizzando la carta di credito o prepagata puoi pagare l'idraulico direttamente online.",
              icon_name: "fa-credit-card"
            }
          ];
          this.data.reviews = [
            {
              username: "Giacomo P.",
              text: "Ottimo! Dopo aver richiesto un particolare lavoro a casa mia, nel arco di pochi minuti ho ricevuto il miglior preventivo di tanti altri professionisti.",
              rating: 5
            },
            {
              username: "Mario B.",
              text: "Servizio veloce, professionale e decisamente con un ottimo prezzo. Assistenza clienti molto efficiente e disponibile. Consiglio assolutamente.",
              rating: 5
            },
            {
              username: "Anna F.",
              text: "Dopo aver trascorso più di una settimana a cercare sui social media ho trovato Starbook e in meno di pochi minuti ho prenotato l’idraulico e il servizio che mi serviva. Davvero bravi!",
              rating: 5
            },
            {
              username: "Alberto G.",
              text: "É stato semplice comunicare al telefono con il professionista dopo aver fatto la richiesta di intervento. Altri vantaggi: è stato puntuale e ordinato.",
              rating: 5
            }
          ];

          this.seoObject.title = this.data.texts[0];
          this.seoObject.description = this.data.texts[1];
          this.seoObject.url = 'https://www.starbook.co' + this.router.url;
          this.seoObject.image_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulico-normal.png";
        } else if (this.page==='extensions') {
          this.navigationService.updateMessage('Estensioni Starbook');
          this.data.pictures = [
            "https://s3-eu-west-1.amazonaws.com/starbook-s3/starbook-servizi-professionali-on-demand.png"
          ];
          this.data.texts = [
            "Professionisti on demand",
            "Hai mai pensato ad una funzione che ti permette di prenotare direttamene il professionista che ti serve? Una funzione inserito nella tua web app o mobile app? Bene, è arrivato il momento di crearla!",
            "Con le estensioni add-on di Starbook puoi soddisfare le richieste dei tuoi clienti direttamente dalla tua app, web o mobile.",
            "Quali vantaggi ci sono nelle estensioni add-on di Starbook?",
            "Le estensioni add-on di Starbook sono facili da implementare. Inserisci il blocco di codice che ti inviamo sulla tua web app, sito web o mobile app."
          ];
          this.data.bullets = [
            {
              title: "On Demand",
              description: "Siamo nell'era dell'industria on demand, ora basta un click per prenotare un ordine e noi siamo molto focalizzati in questo.",
              icon_name: "fa-play-circle"
            },
            {
              title: "Efficienza",
              description: "Offriamo determinazione e soddisfiamo le esigenze dei clienti offrendo il professionista più bravo e serio della zona richiesta.",
              icon_name: "fa-clock-o"
            },
            {
              title: "Pagamenti",
              description: "Utilizziamo sistemi di pagamenti online per poter aumentare la sicurezza dei clienti e il pagamento dei professionisti.",
              icon_name: "fa-credit-card"
            },
            {
              title: "Assistenza",
              description: "Offriamo la nostra assistenza nello sviluppo e creazione di nuove funzionalità on demand in linea con le richieste dei clienti.",
              icon_name: "fa-assistive-listening-systems"
            }
          ];

          this.seoObject.title = this.data.texts[0];
          this.seoObject.description = this.data.texts[1];
          this.seoObject.url = 'https://www.starbook.co' + this.router.url;
          this.seoObject.image_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/starbook-servizi-professionali-on-demand-normal.png";
        } else {
          // this.router.navigate(['landing/idraulico']);
          // this.navigationService.updateMessage('Il professionista con un click');
          // this.router.navigate(['landing']);
        }

        this.seoService.setTitle(this.seoObject.title);
        this.seoService.setMetaElem('description', this.seoObject.description);

        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.seoObject.title);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.seoObject.description);
        this.seoService.setOgElem('twitter:image', this.seoObject.image_url);

        this.seoService.setOgElem('og:title', this.seoObject.title);
        this.seoService.setOgElem('og:description', this.seoObject.description);
        this.seoService.setOgElem('og:url', this.seoObject.url);
        this.seoService.setOgElem('og:image', this.seoObject.image_url);
        this.seoService.setOgElem('og:image:secure_url', this.seoObject.image_url);
      })
    }

  ngOnInit() {

  }

  ////////////////////////////////////////////
  ////////////// LANDING SEARCH //////////////
  ////////////////////////////////////////////
  search(event) {
    this.analyticsService.sendEvent({category:'Search', action: 'typing: ' + event.query, label: this.router.url});
    this.newServiceRequest.message = 'Richiedi?';
    this.spinerView = true;
    this.clearView = false;
    let timeStart = Date.now();
    this.commonService.search(event.query).then((results) => {
      this.spinerView = false;
      this.analyticsService.sendTiming({category: 'Search', timingVar: 'load', timingValue: Date.now()-timeStart});
      if (event.query.length > 0) {
        this.clearView = true;
      }
      this.results = results.result;
    }).catch((error) => {
      this.spinerView = false;
      if (event.query.length > 0) {
        this.clearView = true;
      }
      this.results = [];
    })
  }
  selectResult(service) {
    this.analyticsService.sendEvent({category:'Search result', action: 'Select service', label: this.router.url});
    this.commonService.sendData(service, this.ref)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }
  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
  }
  requireService() {
    this.analyticsService.sendEvent({category:'Search result', action: 'Require service', label: this.router.url});
    this.router.navigate(['requests/service']);
  }
  searchMore() {
    this.analyticsService.sendEvent({category:'Button', action: 'Search', label: this.router.url});
    if (this.query.length>0 && this.results.length===0) {
      this.router.navigate(['requests/service']);
    } else if (this.query.length>0 && this.results.length>0) {
      let service = this.results[0];
      this.commonService.sendData(service, this.ref)
      let title = service['title'];
      this.router.navigate(['services', title.replace(/\s+/g, '-')]);
    } else if (this.query.length===0) {
      this.router.navigate(['services']);
    }
  }

  ////////////////////////////////////////////
  ////////////// SELECT CATEGORY /////////////
  ////////////////////////////////////////////
  selectCategory(category) {
    this.analyticsService.sendEvent({category:'Search result', action: 'Select service', label: this.router.url});
    this.commonService.sendData(category, this.ref)
    this.router.navigate(['category/', category.title.replace(/\s+/g, '-').toLowerCase()]);
  }




  selectService(service) {
    // this.router.navigate(['landing/' + service.title.toLowerCase()]);
    this.router.navigate(['category/' + service.title.toLowerCase()]);
  }
  checkoutService(service) {
    this.analyticsService.sendEvent({category:'Service', action: 'Order now', label: this.router.url});
    if (service === 'plumber') {
      this.order['service_id'] = "5904d0c06c8dd682c65e99b6"
      // this.order['title'] = this.page.charAt(0).toUpperCase() + this.page.slice(1);
      this.order['title'] = 'Idraulico';
      this.order['details'] = [{title:"Idraulico", type:"service"},{title:"Intervento idraulico (costo uscita)", type:"detail", value:"35€"}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 3500,
        initial: 3500,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 3500}
      this.order['timing'] = {days: 0}
    } else if (service === 'carpenter') {
      this.order['service_id'] = "590b330c6c8dd682c65e99b7"
      this.order['title'] = 'Falegname';
      this.order['details'] = [{title:"Falegname", type:"service"},{title:"Richiesta intervento falegname", type:"detail", value:""}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 0,
        initial: 0,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 0}
      this.order['timing'] = {days: 0}
    } else if (service === 'brick') {
      this.order['service_id'] = "590b33a86c8dd682c65e99b8"
      this.order['title'] = 'Muratore';
      this.order['details'] = [{title:"Muratore", type:"service"},{title:"Richiesta intervento muratore", type:"detail", value:""}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 0,
        initial: 0,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 0}
      this.order['timing'] = {days: 0}
    } else if (service === 'blacksmith') {
      this.order['service_id'] = "590b34366c8dd682c65e99b9";
      this.order['title'] = 'Fabbro';
      this.order['details'] = [{title:"Fabbro", type:"service"},{title:"Richiesta intervento fabbro", type:"detail", value:""}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 0,
        initial: 0,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 0}
      this.order['timing'] = {days: 0}
    }  else if (service === 'eletrical') {
      this.order['service_id'] = "590b34826c8dd682c65e99ba";
      this.order['title'] = 'Elettricista';
      this.order['details'] = [{title:"Elettricista", type:"service"},{title:"Richiesta intervento elettricista", type:"detail", value:""}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 0,
        initial: 0,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 0}
      this.order['timing'] = {days: 0}
    } else if (service === 'painter') {
      this.order['service_id'] = "590b34bf6c8dd682c65e99bb";
      this.order['title'] = 'Imbianchino';
      this.order['details'] = [{title:"Imbianchino", type:"service"},{title:"Richiesta intervento imbianchino", type:"detail", value:""}]
      this.order['description'] = ""
      this.order['referral_id'] = null
      this.order['price'] = {
        final: 0,
        initial: 0,
        currency: 'eur'
      }
      this.order['payment'] = {upfront: 0}
      this.order['timing'] = {days: 0}
    }

    this.orderService.updateWizardData(this.order);
    this.router.navigate(['order/summary']);
    return false;
  }
  sendRequestForNewService() {
    this.analyticsService.sendEvent({category:'Request service', action: 'Send', label: this.router.url});

    if (this.request_state.loading) {return;}
    if (!this.Request.firstname || !this.Request.lastname || !this.Request.phone || !this.Request.email || !this.Request.description) {
      this.request_state.message_success = null;
      this.request_state.message_error = "Per favore inserisci tutti i campi richiesti";
      this.request_state.title_error = "errore";
      this.request_state.description_error = "errore";
      this.request_state.firstname_error = "errore";
      this.request_state.lastname_error = "errore";
      this.request_state.phone_error = "errore";
      this.request_state.email_error = "errore";
      return;
    }
    this.request_state.message_success = null;
    this.request_state.message_error = null;
    this.request_state.title_error = null;
    this.request_state.description_error = null;
    this.request_state.firstname_error = null;
    this.request_state.lastname_error = null;
    this.request_state.phone_error = null;
    this.request_state.email_error = null;
    this.request_state.loading = true;
    this.request_state.button_title = "Inviando...";

    this.Request['category'] = this.page.charAt(0).toUpperCase() + this.page.slice(1);
    this.commonService.requireNewService(this.Request).then((response) => {
      this.request_state.message_success = "Complimenti, hai inviato una richiesta di servizio su Starbook. La contatteremo al più presto!";
      this.request_state.loading = false;
      this.request_state.button_title = "Invia richiesta";
      this.Request.description = null;
    }).catch((error) => {
      this.Request.description = null;
    });
  }
  sendInvitations() {
    this.analyticsService.sendEvent({category:'Share service', action: 'Share', label: this.router.url});
    var phone_numbers = [];
    var email_addresses = [];
    var strings = this.contacts.split(',');
    for (var i = 0; i < strings.length; i++) {
      var string = strings[i];
      string = string.replace(/\s/g, '');
      if (this.emailPattern.test(string)) {
        email_addresses.push(string);
      } else if (this.numPattern.test(string)) {
        phone_numbers.push(string);
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
    if (phones==='' && emails==='') {
      this.invitation_state.message_success = null;
      this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
      return;
    }
    this.invitation_state.message_success = null;
    this.invitation_state.message_error = null;

    var link = "Hey, ti ho trovato un " + this.page.charAt(0).toUpperCase() + this.page.slice(1) + " ";
    if (isBrowser) {
      link += document.location.protocol + '//'+ document.location.hostname + this.router.url;
    }

    this.commonService.sendNotifications(link, phones, emails).then((response) => {
      this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
    });
  }
}
