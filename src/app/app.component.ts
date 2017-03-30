import { isBrowser } from 'angular2-universal';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AnalyticsService } from './shared/analytics.service';

import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { PopupsService } from './popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { HomeService } from './home/home.service';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  public tagline: string;
  public auth;
  public activePopup = '';
  public popupState = 'inactive';
  public navbarState = false;
  public isLoading = false;
  public isFindField = false;
  public spinerView = false;
  public clearView = false;
  public findValue: string = '';
  public results: string[] = [];
  public isSearched = false;
  public browser = isBrowser;
  subscription: Subscription;
  authSubscription: Subscription;
  // loadingSubscription: Subscription;
  public newServiceRequest = {
    message: 'Richiedi?'
  };

  constructor (public router:Router, private route: ActivatedRoute, private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService, private homeService: HomeService, private analyticsService: AnalyticsService) {
    if (isBrowser) {
      this.router.events.subscribe(
        (event:Event) => {
          if (event instanceof NavigationEnd) {
            ga('send', 'pageview', event.urlAfterRedirects);
            let currentRoute = this.route.root;
            while (currentRoute.children[0] !== undefined) {
              currentRoute = currentRoute.children[0];
            }
            if ('isFindField' in currentRoute.snapshot.data) {
              this.isFindField = true;
            } else {
              this.isFindField = false;
            }
          }
        });
    }
  }

  getLoginPopup() {
    this.popupsService.activate({type: 'login'});
    this.toggleMenu();
  }

  getRegistrationPopup() {
    this.popupsService.activate({type: 'registration'});
    this.toggleMenu();
  }

  closePopup() {
    this.popupsService.activate('');
  }

  toggleMenu() {
    this.navbarState = !this.navbarState;
  }

  ngOnInit() {
    this.auth = this.authServics.authInit();
    if (isBrowser) {
      this.subscription = this.navigationService.getMessage$.subscribe(message => {
        this.tagline = message;
        this.findValue = message;
        this.results = [];
        this.clearView = true;
        this.isSearched = false;
      });
      this.authSubscription = this.navigationService.getPersonalMenu$.subscribe(auth => {
        if (auth !== false) {
          this.auth = auth;
        } else {
          this.auth = false;
        }
      });
    }
    // this.loadingSubscription = this.navigationService.getLoadingStatus$.subscribe(status => {
    //   this.isLoading = status;
    // });
  }

  updateTabMenu(toggleMenu = false) {
    if (toggleMenu) {
      this.toggleMenu();
    }
    this.navigationService.updateActiveTab(false);
  }

  search(event) {
    this.newServiceRequest.message = 'Richiedi?';
    this.isSearched = true;
    this.spinerView = true;
    this.clearView = false;
    this.homeService.search(event.query)
      .then((results) => {
        this.spinerView = false;
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

  requireService() {
    console.log('require service');
    this.newServiceRequest.message = 'Grazie!';
    this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.findValue});
  }

  selectResult(servicesObj) {
    this.homeService.sendServices(servicesObj);
    this.results = [];
    this.clearView = false;
    this.navbarState = false;
    this.findValue = '';
    // this.router.navigate(['services', servicesObj._id]);
    // var str = 'hello     world  !!';
    // str = servicesObj.title.replace(/\s+/g, '-');
    // console.log('space replaced: ' + str);
    this.router.navigate(['services', servicesObj.title.replace(/\s+/g, '-')]);
  }

  clearSearchForm() {
    this.findValue = '';
    this.results = [];
    this.clearView = false;
  }

  ngOnDestroy() {
    if(isBrowser) {
      // this.subscription.unsubscribe();
      // this.authSubscription.unsubscribe();
    }
  }
}
