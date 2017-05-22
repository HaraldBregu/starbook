import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
declare let $: any;

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
    if (popup && popup['type'] && popup['type'].length > 0) {
      // console.log('popup is open');
      $('body').addClass('disable-body-scroll');
      $('app-home').addClass('visibility-hidden');
      $('app-profile').addClass('visibility-hidden');
    }
    this.activePopup.next(popup);
  }
  actionComplete(data) {
    this.popupResponse.next(data);
  }
}
