import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public page;
  public currentUser;
  public emailPattern: any;
  public numPattern: any;
  public contacts = '';
  public invitation_state = {
    message_success: null,
    message_error: null
  };
  public services = [
    {
      title:"Idraulico",
      color:"blue",
      image:"https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
    },
    {
      title:"Falegname",
      color:"brown",
      image:"https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
    },
    {
      title:"Muratore",
      color:"Black",
      image:"https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
    }
  ];
  public data = {
    pictures:[
      "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
    ],
    texts:[
      "Hai bisogno di un professionista? Ti aiutiamo noi!",
      "Tutti sappiamo che trovare il professionista giusto nel momento giusto non è mai cosi semplice.",
      "Ora ci pensiamo noi al posto tuo!",
      "Starbook è il miglior sistema per trovare il tuo professionista nel modo piu semplice, veloce e sicuro.",
      "Ecco perché devi scegliere Starbook",
      "Cosa dicono i clienti",
      // "Starbook è la piattaforma ideale per trovare il professionista piu adatto alle tue esigenze.",
      // "Perché i clienti parlano bene",
      // "Il miglior professionista della tua città",
      // "Richiedi gratis preventivi per idraulico a Busto Arsizio",
      // "La miglior piattaforma web per prenotare il tuo idraulico di fiducia",
      // "Te lo diamo noi. Il migliore è il più affidabile nella tua zona quando vuoi tu. Basta che decidi",
      // "Perché su di noi dicono molto",
      // "Perché di noi parlano bene",
      // "Perchè le recensioni parlano da solo"
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private commonService: CommonService) {
      this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.numPattern = /^\d+$/;
      this.navigationService.updateMessage('Il professionista sempre con te');
      this.analyticsService.sendPageViewUrl(this.router.url)

      if (isBrowser) {
        if (localStorage.getItem('auth')) {
          this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
      }

      this.route.params.subscribe((params: Params) => {
        if (isBrowser) {window.scrollTo(0, 0);}

        this.page = params['page'];
        if (this.page==='idraulico') {
          this.navigationService.updateMessage('Ti serve un idraulico?');

          this.data.pictures = [
            "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
          ];
          this.data.texts = [
            "Hai bisogno di un idraulico? Ti aiutiamo noi!",
            "Tutti sappiamo che trovare l'idraulico giusto nel momento giusto non è mai cosi semplice.",
            "Ora ci pensiamo noi al posto tuo!",
            "Starbook è il miglior sistema per trovare il tuo idraulico nel modo piu semplice, veloce e sicuro.",
            "Ecco perché devi scegliere Starbook",
            "Cosa dicono i clienti",
          ];
          this.data.bullets = [
            {
              title: "Professionalità",
              description: "La serietà prima di tutto e noi ci assicuriamo di portare il miglior idraulico della zona e che abbia una solida esperienza nel campo in cui opera.",
              icon_name: "fa-certificate"
            },
            {
              title: "Puntualità",
              description: "Portare l'idraulico nel giorno e l'ora che si desidera è uno dei nostri valori piu importanti.",
              icon_name: "fa-clock-o"
            },
            {
              title: "Pagamento online",
              description: "La massima comodità anche nei metodi di pagamento, utilizando la carta di credito o prepagata puoi pagare l'idraulico direttamente online.",
              icon_name: "fa-credit-card"
            }
          ];
          this.data.reviews = [
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
          ];

          this.seoObject.title = "Hai bisogno di un idraulico? Ti aiutiamo noi!";
          this.seoObject.description = "Tutti sappiamo che trovare l'idraulico giusto nel momento giusto non è mai cosi semplice. Ora ci pensiamo noi al posto tuo!";
          this.seoObject.url = 'https://www.starbook.co' + this.router.url;
          this.seoObject.image_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png";
        } else if (this.page==='falegname') {
          this.navigationService.updateMessage('Falegname');

        } else if (this.page==='muratore') {
          this.navigationService.updateMessage('Muratore');

        } else {
          // this.router.navigate(['']);
        }
        this.seoService.setTitle(this.seoObject.title);
        this.seoService.setOgElem('og:title', this.seoObject.title);
        this.seoService.setMetaElem('description', this.seoObject.description);
        this.seoService.setOgElem('og:description', this.seoObject.description);
        this.seoService.setOgElem('og:url', this.seoObject.url);
        this.seoService.setOgElem('og:image', this.seoObject.image_url);
        this.seoService.setOgElem('og:image:secure_url', this.seoObject.image_url);
      })
  }

  ngOnInit() {

  }

  selectService(service) {
    this.router.navigate(['landing/' + service.title.toLowerCase()]);
  }

  showService() {
    // this.analyticsService.sendEvent({category:'Order', action: 'Wizard', label: "Start"});
    this.router.navigate(['services', this.page.replace(/\s+/g, '-')]);
    return false;
  }
  sendRequestForNewService() {
    // this.analyticsService.sendEvent({category:'Order', action: 'Wizard', label: "Start"});
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
    // this.analyticsService.sendEvent({category:'Order', action: 'Wizard', label: "Start"});
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
