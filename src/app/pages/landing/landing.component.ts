import { isBrowser } from 'angular2-universal';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../../home/home.service';
import { NavigationService } from '../../shared/navigation.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { PopupsService } from '../../popups/popups.service';
// import {FacebookService, FacebookLoginResponse} from 'ng2-facebook-sdk';
import { AuthService } from '../../shared/auth.service';

declare let Swiper: any;
declare const FB:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  // providers: [FacebookService]
})
export class LandingComponent implements OnInit {
  public cardStyles = {1: '0.95', 2: '0.95', 3: '0.9'};
  public query: string = '';
  public results: string[] = [];
  public services = [];
  public spinerView = false;
  public clearView = false;
  public isLoading = false;
  public swiper: any;
  public testPage;
  public isAuthenticated = false;

  constructor(private authServics: AuthService, private homeService: HomeService, private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private analyticsService: AnalyticsService, private popupsService: PopupsService) {
  }

  ngOnInit() {

    // TO USE FOR A/B TESTING
    this.route.queryParams.subscribe((params: Params) => {
      this.testPage = params['action']
      // console.log('Parameters: ' + JSON.stringify(params));
      // console.log(this.testPage);
    });

    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    } else {
      this.isAuthenticated = false;
    }


    this.navigationService.updateMessage('La cura per la casa');
    this.isLoading = true;
    let timeStart = Date.now();
    this.homeService.getServices()
        .then((services) => {
          this.services = services.result;
          this.analyticsService.sendTiming({category: 'Get list of featured', timingVar: 'load', timingValue: Date.now()-timeStart});
          this.isLoading = false;
          if (isBrowser) {
              setTimeout(function () {
                  this.swiper = new Swiper('.swiper-container', {
                      freeMode: true,
                      direction: 'horizontal',
                      slidesPerView: 'auto'
                  });
              }, 1);
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
  }

  cardHover(id, type) {
    if (type === 'on') {
      this.cardStyles[id] = '1';
    } else {
      if (id === 3) {
        this.cardStyles[id] = '0.9';
      } else {
        this.cardStyles[id] = '0.95';
      }
    }
  }

  search(event) {
    this.spinerView = true;
    this.clearView = false;
    let timeStart = Date.now();
    this.homeService.search(event.query)
        .then((results) => {
          this.spinerView = false;
          this.analyticsService.sendTiming({category: 'Search', timingVar: 'load', timingValue: Date.now()-timeStart});
          if (event.query.length > 0) {
            this.clearView = true;
          }
          this.results = results.result;
        })
        .catch((error) => {
          this.spinerView = false;
          if (event.query.length > 0) {
            this.clearView = true;
          }
          this.results = [];
        })
  }

  selectResult(servicesObj) {
    this.homeService.sendServices(servicesObj);
    this.router.navigate(['services', servicesObj.title.replace(/\s+/g, '-')]);
  }

  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
  }

  //******************************************************
  //***************** A/B TESTS **************************
  //******************************************************

  callToActionLoginWithFacebook() {
    this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'login', label: 'facebook login'});
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      let facebookPopup = window.open(
        'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
        // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook',
          '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      this.checkAccessToken(facebookPopup, 1);
    }
  }

  checkAccessToken(facebookWindow: Window, context) {
    if (facebookWindow.closed) {
      let accessToken = localStorage.getItem('facebook_token');
      this.authServics.facebookLogin(accessToken).then((userData) => {}).catch((error) => {});
    } else {
      let self = this;
      setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1)}, 200);
    }
  }

  callToActionRegisterCompany() {
    this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'register', label: 'register company'});
    this.popupsService.activate({type: 'registerCompany'});
  }

  callToActionRecommendFriend() {
    this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'recommend', label: 'recommend to friend'});
    this.popupsService.activate({type: 'recommendToFriend'});
  }

  callToActionShareToEarn() {
    this.analyticsService.sendEvent({category:'Landing page A/B button', action: 'share', label: 'share to earn'});
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      let sharelink = 'https://www.facebook.com/sharer/sharer.php';
      let urlToShare = 'https://www.starbook.co';
      let name = "Starbook | Prenota servizi professionali";
      let caption = 'Starbook';
      let description = 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.';
      let facebookPopup = window.open(sharelink + "?u=" + encodeURI(urlToShare) + /*"&name=" + name +*/ "&caption=" + encodeURI(caption) + "&description=" + encodeURI(description),
        '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      this.checkFacebookSharePage(facebookPopup, 1);
    }
    // FB.ui({
    //   method: 'feed',
    //   mobile_iframe: true,
    //   name: "Starbook | Prenota servizi professionali",
    //   link: "https://www.starbook.co",
    //   caption: 'Starbook',
    //   description: 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.'
    // }, function(response) {
    //   console.log(JSON.stringify(response));
    //   if (response && response.post_id) {
    //     console.log('Post was published.');
    //   } else {
    //     console.log('Post was not published.');
    //   }
    // });
  }

  checkFacebookSharePage(facebookWindow: Window, context) {
    if (facebookWindow.closed) {
      this.popupsService.activate({type: 'getPromoCode'});
    } else {
      let self = this;
      setTimeout(function() {self.checkFacebookSharePage(facebookWindow, context + 1)}, 200);
    }
  }

}
