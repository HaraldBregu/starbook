import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PopupsService {
  private activePopup = new Subject<any>();
  private popupResponse = new Subject<any>();
  public getActivePopup$ = this.activePopup.asObservable();
  public getPopupResponse$ = this.popupResponse.asObservable();
  constructor() { }
  activate(popup) {
    this.activePopup.next(popup);
  }
  actionComplete(data) {
    this.popupResponse.next(data);
  }
}
