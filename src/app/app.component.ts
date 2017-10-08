import { isBrowser } from 'angular2-universal';
import { Component, OnInit, OnDestroy, Compiler } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { PopupsService } from './popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { CommonService } from './shared/common.service';
import { SeoService } from './shared/seo.service';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  public tagline: string
  public auth
  public activePopup = ''
  public popupState = 'inactive'
  public navbarState = false
  public isLoading = false
  public isFindField = false
  public spinerView = false
  public clearView = false
  public findValue: string = ''
  public results: string[] = []
  public isSearched = false
  public browser = isBrowser
  subscription: Subscription
  authSubscription: Subscription
  public screenWidth
  public newServiceRequest = {
    message: 'Richiedi?'
  }
  public collapsed = false
  public page = null
  public hasCenterContainer = true
  public hasPublishService = false
  public hasNavigation = true
  public border_bottom_color = "1px solid #DBDBDB"
  public account_avatar_url = ''
  public popup = null

  constructor (public router:Router, private route: ActivatedRoute, private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService, private commonService: CommonService, private seoService: SeoService) {
    this.navbarState = false;
    this.hasNavigation = true;
    if (isBrowser) {
      this.router.events.subscribe((event:Event) => {
        if (event instanceof NavigationEnd) {
          // ga('send', 'pageview', event.urlAfterRedirects);
          let currentRoute = this.route.root;

          while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }

          if ('isFindField' in currentRoute.snapshot.data) {
            this.isFindField = true;
          } else {
            this.isFindField = false;
          }

          this.page = null;
          // this.hasBottomBorderNav = true;
          this.hasCenterContainer = true;
          this.hasPublishService = false;
          this.hasNavigation = true;

          this.border_bottom_color = "1px solid #DBDBDB"

          if ('name' in currentRoute.snapshot.data) {
            var data = currentRoute.snapshot.data;
            var name = data['name'];
            this.page = name;
            if (this.page === "Landing") {
              this.hasCenterContainer = false;
              this.hasPublishService = true;
            }
            if (this.page === "Company") {
              // this.hasNavigation = false
              this.hasCenterContainer = false;
            }
            else if (this.page === "Business") {
              this.hasCenterContainer = true;
            }
            else if (this.page === "Tools") {
              this.hasCenterContainer = true;
            }
            else if (this.page === "Insert") {
              // this.hasBottomBorderNav = false;
              this.hasCenterContainer = false;
              this.border_bottom_color = "0"
            }
            else if (this.page==='Service') {
              // this.hasPublishService = false;
            }
            else if (this.page === "Account") {
            }
            else if (this.page === "Auth") {
              this.border_bottom_color = "1px solid #1abc9c"
            }
            else if (this.page === "Order") {
            }
            else if (this.page === "Orders") {
              this.hasNavigation = true;
            }
            else if (this.page === "Checkout") {
              this.border_bottom_color = "0"
            }
            else if (this.page === "Blog") {
              this.hasCenterContainer = false;
            }
            else if (this.page === "Info") {
              this.hasCenterContainer = false;
            }
            else if (this.page === "Customer") {
              this.hasNavigation = false
            }
            else if (this.page === "Profile") {
              this.hasNavigation = true
            }
            else {
              this.hasNavigation = true
              this.hasCenterContainer = true;
            }
          }
          // console.log('page is: ' + this.page);
        }
      });
    }
  }

  ngOnInit() {
    this.auth = this.authServics.authInit();
    this.account_avatar_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/" + this.auth._id + "/avatar/0"
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
      this.subscription = this.navigationService.getMessage$.subscribe(message => {
        this.tagline = message;
        this.findValue = message;
        this.results = [];
        this.clearView = true;
        this.isSearched = false;
      })

      this.authSubscription = this.navigationService.getPersonalMenu$.subscribe(auth => {
        if (auth !== false) {
          this.auth = auth;
          this.account_avatar_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/" + this.auth._id + "/avatar/0"
        } else {
          this.auth = false
          this.account_avatar_url = "../assets/images/no_user.png"
        }
      })

      this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
        switch (action.type) {
          case 'logout':
          if (isBrowser) {
            // if (localStorage.getItem('auth')!==null) {
            //   localStorage.removeItem('auth')
            // }
          }
          this.navigationService.updatePersonalMenu(false)
          if (this.page === "Account") {
            this.router.navigate(['/'])
          }
          break;
        }
      })

    }
    // this.loadingSubscription = this.navigationService.getLoadingStatus$.subscribe(status => {
    //   this.isLoading = status;
    // });
  }

  onResize() {
    if (isBrowser) {
      this.screenWidth = document.querySelector('body').clientWidth;
      if (this.screenWidth > 768) {
        this.collapsed = false;
      }
    }
  }

  ngAfterViewInit() {

  }

  publishService() {
    this.router.navigate(['insert/product']);
    this.collapsed = false;
  }
  signupAsProfessional() {
    this.router.navigate(['auth/professional']);
    this.collapsed = false;
  }

  clickBrandLogo() {
    // if (this.page === "Company") {
    //   return;
    // }
    this.router.navigate(['']);

    // if (this.screenWidth <= 425) {
    //   if (!this.hasRightContainer) {
    //     if (this.page === "Auth") {
    //
    //     } else {
    //       this.router.navigate(['']);
    //     }
    //   } else {
    //     this.collapsed = !this.collapsed;
    //   }
    // } else {
    //   this.router.navigate(['']);
    // }
  }
  brandLogo() {
    if (this.screenWidth > 768) {
      return "/assets/images/brand-logo-name-rotated.png"
    }
    else if ((this.screenWidth < 769) && this.page === "Company") {
      return "/assets/images/brand-logo-name-rotated.png"
    }
    else if ((this.screenWidth < 769) && !this.collapsed) {
      return "/assets/images/brand-logo-rotated.png"
    }
    else if ((this.screenWidth < 769) && this.collapsed) {
      return "/assets/images/brand-logo-right.png"
    }
    else if ((this.screenWidth < 769)) {
      // console.log('this.page: ' + this.page);
      if (this.page === "Auth") {
        return "/assets/images/brand-logo-name-rotated.png"
      } else {
        return "/assets/images/brand-logo-rotated.png"
      }
    }
  }
  getLoginPopup() {
    this.popupsService.activate({type: 'login'});
    // this.router.navigate(['auth/login']);
    this.toggleMenu();
    this.collapsed = false;
  }
  logout() {
    this.navigationService.updatePersonalMenu(false)
    localStorage.removeItem('auth')
    this.router.navigate(['/'])
    // if (isBrowser) {
    // }
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
    this.commonService.search(event.query)
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
    // this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.findValue});
    this.router.navigate(['requests/service']);
  }

  selectResult(service) {
    this.commonService.setObjectForKey(service, 'service')
    this.results = [];
    this.clearView = false;
    this.navbarState = false;
    this.findValue = '';
    // this.router.navigate(['services', servicesObj._id]);
    // var str = 'hello     world  !!';
    // str = servicesObj.title.replace(/\s+/g, '-');
    // console.log('space replaced: ' + str);
    this.router.navigate(['services', service._id])
    // this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }

  getUsername() {
    if (this.auth.profile.fullname) {
      return this.auth.profile.fullname
    } else {
      return this.auth.profile.firstname + ' ' + this.auth.profile.lastname
    }
  }

  clearSearchForm() {
    this.findValue = '';
    this.results = [];
    this.clearView = false;
  }

  errorHandler(error) {
    this.account_avatar_url = "../assets/images/no_user.png"
  }
  ngOnDestroy() {
    if(isBrowser) {
      // this.subscription.unsubscribe();
      // this.authSubscription.unsubscribe();
    }
  }
}
