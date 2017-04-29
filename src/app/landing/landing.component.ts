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
    pictures:[],
    texts:[],
    bullets:[],
    reviews:[],
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService) {
      this.navigationService.updateMessage('Test');

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
              "	https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulica-attrezzi.png"
            ];
            this.data.texts = [
              "Hai bisogno di un idraulico? Ti aiutiamo noi!",
              "Tutti sapiamo che trovare il professionista giusto nel momento giusto non è mai cosi semplice.",
              "Ora ci pensiamo noi al posto tuo!",
              // "Quante volte hai chiesto agli amici il numero di un idraulico per lavori di casa e quando l'hai trovato non ti ha risposto o non si è presentato? Da ora in poi ci pensiamo noi. Devi solo scriverci che cosa ti serve esattamente e quando ti serve. Al resto ci pensiamo noi.",
              // "Starbook è il miglior sistema per prenotare un idraulico nel modo piu semplice e professionale.",
              "Starbook è il miglior sistema per trovare il tuo idraulico nel modo piu semplice, veloce e sicuro.",
              "Ecco perché devi scegliere Starbook",
              // "Starbook è la piattaforma ideale per trovare il professionista piu adatto alle tue esigenze.",
              "Perché i clienti parlano bene",
              "Il miglior professionista della tua città",
              "Richiedi gratis preventivi per idraulico a Busto Arsizio",
              "La miglior piattaforma web per prenotare il tuo idraulico di fiducia",
              "Te lo diamo noi. Il migliore è il più affidabile nella tua zona quando vuoi tu. Basta che decidi",
              "Perché su di noi dicono molto",
              "Perché di noi parlano bene",
              "Perchè le recensioni parlano da solo"
            ];
            this.data.bullets = [
              {
                title: "Certificato",
                description: "Assicuriamo che il professionista sia certificato e con una solida esperienza nel campo.",
                icon_name: "fa-certificate"
              },
              {
                title: "Sicuro",
                description: "Assicuriamo che il professionista sia certificato e con una solida esperienza nel campo.",
                icon_name: "fa-shield"
              },
              {
                title: "Garantito",
                description: "Assicuriamo che il professionista sia certificato e con una solida esperienza nel campo.",
                icon_name: "fa-graduation-cap"
              }
            ];
            this.data.reviews = [
              {
                username: "John D.",
                text: "Gli addetti alle pulizie sono arrivati puntuali al mattino e sono rimasti a lavorare fino a tarda sera pur di finire il lavoro. L'appartamento era in pessime condizioni. Hanno fatto un ottimo lavoro pulendo a fondo, il loro aiuto è stato fondamentale.",
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

          } else if (this.page==='carpenters') {
            this.navigationService.updateMessage('Falegname');

          } else if (this.page==='bricklayers') {
            this.navigationService.updateMessage('Muratore');

          } else if (this.page==='energy_certificator') {
            this.navigationService.updateMessage('Certificatore energetico');

          } else if (this.page==='serramentist') {
            this.navigationService.updateMessage('Serramentista');

          }
          console.log('this page is: ' + this.page);
        })
      }
  }

  ngOnInit() {

  }

}
