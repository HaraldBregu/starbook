import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { isBrowser } from 'angular2-universal';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public page;
  public currentUser;
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
    title: '',
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
  public contacts = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService) {
      this.navigationService.updateMessage('Il professionista');

      if (isBrowser) {
        if (localStorage.getItem('auth')) {
          this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
        this.route.params.subscribe((params: Params) => {
          window.scrollTo(0, 0);
          this.page = params['page'];
          if (this.page==='idraulico') {
            this.navigationService.updateMessage('Idraulico');
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

            this.seoService.setTitle("Hai bisogno di un idraulico? Ti aiutiamo noi!");
            this.seoService.setOgElem('og:title', "Hai bisogno di un idraulico? Ti aiutiamo noi!");
            this.seoService.setMetaElem('description', "Tutti sappiamo che trovare l'idraulico giusto nel momento giusto non è mai cosi semplice. Ora ci pensiamo noi al posto tuo!");
            this.seoService.setOgElem('og:description', "Tutti sappiamo che trovare l'idraulico giusto nel momento giusto non è mai cosi semplice. Ora ci pensiamo noi al posto tuo!");
            this.seoService.setOgElem('og:url', 'https://www.starbook.co/' + this.router.url);
            this.seoService.setOgElem('og:image', "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png");
            this.seoService.setOgElem('og:image:secure_url', "https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png");
          } else if (this.page==='falegname') {
            this.navigationService.updateMessage('Falegname');

          } else if (this.page==='muratore') {
            this.navigationService.updateMessage('Muratore');

          } else if (this.page==='energy_certificator') {
            this.navigationService.updateMessage('Certificatore energetico');

          } else if (this.page==='serramentist') {
            this.navigationService.updateMessage('Serramentista');

          }
        })
      }
  }

  ngOnInit() {

  }

}
