import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PopupsService {
  private activePopup = new Subject<any>();
  private popupResponse = new Subject<any>();
  public getActivePopup$;
  public getPopupResponse$;
  constructor() {
    if (isBrowser) {
      this.getActivePopup$ = this.activePopup.asObservable();
      this.getPopupResponse$ = this.popupResponse.asObservable();
    }
  }
  activate(popup) {
    this.activePopup.next(popup);
  }
  actionComplete(data) {
    this.popupResponse.next(data);
  }
}
