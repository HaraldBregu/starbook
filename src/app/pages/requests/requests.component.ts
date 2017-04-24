import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { JoinService } from '../../shared/join.service';
import { SeoService } from '../../shared/seo.service';
import { AnalyticsService } from '../../shared/analytics.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html'
})
export class RequestsComponent implements OnInit {

  //////////////////////////
  /////// REQUEST  /////////
  //////////////////////////
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

  public currentUser;

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private joinService: JoinService, private seoService: SeoService, private analyticsService: AnalyticsService) {
    this.analyticsService.sendPageViewUrl(this.router.url);
    this.seoService.setTitle('Starbook | Devi fare lavori a casa?');
    this.seoService.setOgElem('og:title', 'Starbook | Devi fare lavori a casa?');
    this.seoService.setMetaElem('description', 'Inserisci il titolo e i dettagli del lavoro che vuoi svolgere. Ci occupiamo noi a trovare il miglior professionista con il miglior prezzo del mercato.');
    this.seoService.setOgElem('og:description', 'Inserisci il titolo e i dettagli del lavoro che vuoi svolgere. Ci occupiamo noi a trovare il miglior professionista con il miglior prezzo del mercato.');
    this.seoService.setOgElem('og:url', 'https://www.starbook.co' + this.router.url);
    this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/operai-professionisti-artigiani.jpg');
    this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/operai-professionisti-artigiani.jpg');
    this.navigationService.updateMessage('Invia la tua richiesta');

    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
        if (this.currentUser) {
          this.Request.firstname = this.currentUser.profile.firstname;
          this.Request.lastname = this.currentUser.profile.lastname;
          this.Request.phone = this.currentUser.phone_number;
          this.Request.email = this.currentUser.email;
        }
      }
    }
  }

  ngOnInit() {
    if (isBrowser) {
      window.scrollTo(0, 0);
    }
    // this.seoService.setTitle('Starbook | I migliori servizi per la tua casa');
    // this.seoService.setOgElem('og:title', 'Starbook | I migliori servizi per la tua casa');
    // this.seoService.setMetaElem('description', 'Prezi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
    // this.seoService.setOgElem('og:description', 'Prezi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
    // this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
    // this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');
    // this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');

  }

  sendRequestForNewService() {
    if (this.request_state.loading) {return;}
    if (!this.Request.firstname || !this.Request.lastname || !this.Request.phone || !this.Request.email || !this.Request.title || !this.Request.description) {
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

    this.Request['type'] = "new_service_request";
    this.joinService.join(this.Request).then((response) => {
      this.request_state.message_success = "Complimenti, hai inviato una richiesta di servizio su Starbook. La contatteremo al più presto!";
      this.request_state.loading = false;
      this.request_state.button_title = "Invia richiesta";
      this.Request.title = null;
      this.Request.description = null;
    }).catch((error) => {
      this.Request.title = null;
      this.Request.description = null;
    });
  }
}
