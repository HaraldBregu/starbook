import { isBrowser } from 'angular2-universal';
import { Component, OnInit, OnDestroy, Compiler } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from './shared/analytics.service';
import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { PopupsService } from './popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { HomeService } from './pages/home/home.service';
import { SeoService } from './shared/seo.service';

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
  public screenWidth;
  public newServiceRequest = {
    message: 'Richiedi?'
  };
  public collapsed = false;

  constructor (public router:Router, private route: ActivatedRoute, private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService, private homeService: HomeService, private analyticsService: AnalyticsService, private seoService: SeoService) {
    this.navbarState = false;
    if (isBrowser) {
      this.router.events.subscribe((event:Event) => {
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

  ngOnInit() {
    this.auth = this.authServics.authInit();
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
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

  onResize() {
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
    }
  }

  ngAfterViewInit() {

  }

  clickBrandLogo() {
    this.collapsed = !this.collapsed;
  }

  getLoginPopup() {
    this.popupsService.activate({type: 'login'});
    this.toggleMenu();
    this.collapsed = false;
  }

  getRegistrationPopup() {
    this.popupsService.activate({type: 'registration'});
    this.toggleMenu();
    this.collapsed = false;
  }

  closePopup() {
    this.popupsService.activate('');
  }

  toggleMenu() {
    this.collapsed = false;

    this.navbarState = !this.navbarState;
  }

  updateTabMenu(toggleMenu = false) {
    if (toggleMenu) {
      this.toggleMenu();
    }
    this.collapsed = false;
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
    // this.newServiceRequest.message = 'Grazie!';
    this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.findValue});
    this.router.navigate(['requests']);
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
