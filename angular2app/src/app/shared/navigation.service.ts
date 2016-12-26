import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private headerMessage = new Subject<string>();
  private authData = new Subject<string>();
  private activeTab = new Subject<any>();
  public getMessage$ = this.headerMessage.asObservable();
  public getPersonalMenu$ = this.authData.asObservable();
  public getActiveTab$ = this.activeTab.asObservable();

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
}
