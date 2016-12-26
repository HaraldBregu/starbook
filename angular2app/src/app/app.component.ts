import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NavigationService } from './shared/navigation.service';
import { PopupsService } from './popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';

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
  subscription: Subscription;
  authSubscription: Subscription;
  constructor (private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService) {
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
      this.auth = auth;
    });
  }

  updateTabMenu(toggleMenu = false) {
    if (toggleMenu) {
      this.toggleMenu();
    }
    this.navigationService.updateActiveTab(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
