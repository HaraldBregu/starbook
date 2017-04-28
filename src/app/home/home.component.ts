import { isBrowser } from 'angular2-universal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../shared/common.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { PopupsService } from '../popups/popups.service';
import { AuthService } from '../shared/auth.service';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public cardStyles = {1: '0.95', 2: '0.95', 3: '0.9'};
  public query: string = '';
  public results: string[] = [];
  public services = [];
  public services_state = {
    loading: false,
    title: "Servizi piu richiesti"
  };
  public spinerView = false;
  public clearView = false;
  public newServiceRequest = {
    message: 'Richiedi?'
  };
  public ref;
  public currentUser;

  constructor(private authServics: AuthService, private homeService: CommonService, private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private analyticsService: AnalyticsService, private popupsService: PopupsService, private seoService: SeoService) {
    this.navigationService.updateMessage('La cura per la casa');
    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      }
    }
  }

  ngOnInit() {
    this.seoService.setTitle('Starbook | I migliori servizi per la tua casa');
    this.seoService.setOgElem('og:title', 'Starbook | I migliori servizi per la tua casa');
    this.seoService.setMetaElem('description', 'Prezzi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
    this.seoService.setOgElem('og:description', 'Prezzi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
    this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
    this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');
    this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');

    this.route.queryParams.subscribe((params: Params) => {
      this.ref = params['ref']
    });

    this.services_state.loading = true;
    this.services_state.title = "Caricando i servizi...";
    this.homeService.getServices().then((services) => {
      this.services = services.result;
      this.services_state.loading = false;
      this.services_state.title = "Servizi piu richiesti";
    }).catch((error) => {
      this.services_state.loading = false;
      this.services_state.title = "Servizi piu richiesti";
    });
  }

  //////////////////////////////
  /////// PARTNERSHIP //////////
  //////////////////////////////
  joinUs() {
    this.analyticsService.sendEvent({category:'Landing Page', action: 'Join', label: "professional"});
    this.router.navigate(['recruiter/workerjoin']);
  }
  lernMore() {
    this.analyticsService.sendEvent({category:'Landing Page', action: 'Join', label: "partnership"});
    this.router.navigate(['recruiter/partnerjoin']);
  }


  /////////////////////////
  /////// SEARCH //////////
  /////////////////////////
  searchMore() {
    this.analyticsService.sendEvent({category:'Landing Page', action: 'Search', label: "More"});
    this.router.navigate(['services']);
  }
  search(event) {
    this.newServiceRequest.message = 'Richiedi?';
    this.spinerView = true;
    this.clearView = false;
    let timeStart = Date.now();
    this.homeService.search(event.query).then((results) => {
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
    this.homeService.sendData(service, this.ref)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }
  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
  }
  requireService() {
    // this.newServiceRequest.message = 'Grazie!';
    this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.query});
    this.router.navigate(['requests']);
  }
}
