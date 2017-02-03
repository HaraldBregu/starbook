import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';

import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { PopupsService } from './popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
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
  subscription: Subscription;
  authSubscription: Subscription;
  // loadingSubscription: Subscription;
  constructor (public router:Router, private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService) {
    this.router.events.subscribe(
    (event:Event) => {
      if (event instanceof NavigationEnd) {
        ga('send', 'pageview', event.urlAfterRedirects);
      }
    });
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
    this.subscription = this.navigationService.getMessage$.subscribe(message => {
      this.tagline = message;
    });
    this.authSubscription = this.navigationService.getPersonalMenu$.subscribe(auth => {
      if (auth !== false) {
        this.auth = auth;
      } else {
        this.auth = false;
      }
    });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.authSubscription.unsubscribe();
    // this.loadingSubscription.unsubscribe();
  }
}
