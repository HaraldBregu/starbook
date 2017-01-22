import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private headerMessage = new Subject<string>();
  private authData = new Subject<any>();
  private activeTab = new Subject<any>();
  private loadingStatus = new Subject<boolean>();
  public getMessage$ = this.headerMessage.asObservable();
  public getPersonalMenu$ = this.authData.asObservable();
  public getActiveTab$ = this.activeTab.asObservable();
  public getLoadingStatus$ = this.loadingStatus.asObservable();

  constructor() { }

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
