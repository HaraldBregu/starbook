import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private headerMessage = new Subject<string>();
  private authData = new Subject<any>();
  private activeTab = new Subject<any>();
  private loadingStatus = new Subject<boolean>();


  public getMessage$;
  public getPersonalMenu$;
  public getActiveTab$;
  public getLoadingStatus$;

  constructor() {
    if(isBrowser) {
      this.getMessage$ = this.headerMessage.asObservable();
      this.getPersonalMenu$ = this.authData.asObservable();
      this.getActiveTab$ = this.activeTab.asObservable();
      this.getLoadingStatus$ = this.loadingStatus.asObservable();
    }
  }

  updateMessage(message) {
    this.headerMessage.next(message);
  }

  updatePersonalMenu(auth) {
    this.authData.next(auth);
  }

  updateActiveTab(tab) {
    this.activeTab.next(tab);
  }

  updateLoadingStatus(status) {
    this.loadingStatus.next(status);
  }
}
