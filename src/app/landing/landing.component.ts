import { isBrowser } from 'angular2-universal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../pages/home/home.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { PopupsService } from '../popups/popups.service';
import { AuthService } from '../shared/auth.service';
import { SeoService } from '../shared/seo.service';

// declare let Swiper: any;
declare const FB:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
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

  constructor(private authServics: AuthService, private homeService: HomeService, private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private analyticsService: AnalyticsService, private popupsService: PopupsService, private seoService: SeoService) {
    if (localStorage.getItem('auth')) {
      this.currentUser = JSON.parse(localStorage.getItem('auth'));
    }
  }

  ngOnInit() {
    this.navigationService.updateMessage('La cura per la casa');

    this.seoService.setTitle('Starbook | I servizi migliori per la tua casa');
    this.seoService.setOgElem('og:title', 'Starbook | I servizi migliori per la tua casa');
    this.seoService.setMetaElem('description', 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei direttamente senza contattare il professionista.');
    this.seoService.setOgElem('og:description', 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei direttamente senza contattare il professionista.');
    this.seoService.setOgElem('og:url', document.location.protocol + '//'+ document.location.hostname + '/');
    this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
    this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');

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

  ///////////////////////////////
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
    this.search(this.query)
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
    this.newServiceRequest.message = 'Grazie!';
    this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.query});
  }

  //******************************************************
  //***************** A/B TESTS **************************
  //******************************************************

  // cardHover(id, type) {
  //   if (type === 'on') {
  //     this.cardStyles[id] = '1';
  //   } else {
  //     if (id === 3) {
  //       this.cardStyles[id] = '0.9';
  //     } else {
  //       this.cardStyles[id] = '0.95';
  //     }
  //   }
  // }

  // callToActionLoginWithFacebook() {
  //   this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'login', label: 'facebook login'});
  //   if (isBrowser) {
  //     let left = Math.round((document.documentElement.clientWidth / 2) - 285);
  //     let facebookPopup = window.open(
  //       'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
  //       // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook',
  //         '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
  //     this.checkAccessToken(facebookPopup, 1);
  //   }
  // }
  //
  // checkAccessToken(facebookWindow: Window, context) {
  //   if (facebookWindow.closed) {
  //     let accessToken = localStorage.getItem('facebook_token');
  //     this.authServics.facebookLogin(accessToken).then((userData) => {}).catch((error) => {});
  //   } else {
  //     let self = this;
  //     setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1)}, 200);
  //   }
  // }
  //
  // callToActionRegisterCompany() {
  //   this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'register', label: 'register company'});
  //   this.popupsService.activate({type: 'registerCompany'});
  // }
  //
  // callToActionRecommendFriend() {
  //   this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'recommend', label: 'recommend to friend'});
  //   this.popupsService.activate({type: 'recommendToFriend'});
  // }

  // callToActionShareToEarn() {
  //   this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'share', label: 'share to earn'});
  //   if (isBrowser) {
  //     let left = Math.round((document.documentElement.clientWidth / 2) - 285);
  //     let sharelink = 'https://www.facebook.com/sharer/sharer.php';
  //     let urlToShare = 'https://www.starbook.co';
  //     let name = "Starbook | Prenota servizi professionali";
  //     let caption = 'Starbook';
  //     let description = 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.';
  //     let facebookPopup = window.open(sharelink + "?u=" + encodeURI(urlToShare) + /*"&name=" + name +*/ "&caption=" + encodeURI(caption) + "&description=" + encodeURI(description),
  //       '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
  //     this.checkFacebookSharePage(facebookPopup, 1);
  //   }
  //   // FB.ui({
  //   //   method: 'feed',
  //   //   mobile_iframe: true,
  //   //   name: "Starbook | Prenota servizi professionali",
  //   //   link: "https://www.starbook.co",
  //   //   caption: 'Starbook',
  //   //   description: 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.'
  //   // }, function(response) {
  //   //   console.log(JSON.stringify(response));
  //   //   if (response && response.post_id) {
  //   //     console.log('Post was published.');
  //   //   } else {
  //   //     console.log('Post was not published.');
  //   //   }
  //   // });
  // }

  // checkFacebookSharePage(facebookWindow: Window, context) {
  //   if (facebookWindow.closed) {
  //     this.popupsService.activate({type: 'getPromoCode'});
  //   } else {
  //     let self = this;
  //     setTimeout(function() {self.checkFacebookSharePage(facebookWindow, context + 1)}, 200);
  //   }
  // }

}
