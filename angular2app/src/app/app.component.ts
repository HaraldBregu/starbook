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
  subscription: Subscription;
  authSubscription: Subscription;
  constructor (private authServics: AuthService, private navigationService: NavigationService, private popupsService: PopupsService) {
  }

  getLoginPopup() {
    this.popupsService.activate('login');
  }

  closePopup() {
    this.popupsService.activate('');
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
