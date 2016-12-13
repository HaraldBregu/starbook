import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class PopupsService {
  private activePopup = new Subject<string>();
  public getActivePopup$ = this.activePopup.asObservable();
  constructor() { }
  activate(popup) {
    this.activePopup.next(popup);
  }
}
