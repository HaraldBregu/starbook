import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationService {
  private headerMessage = new Subject<string>();
  private authData = new Subject<string>();
  public getMessage$ = this.headerMessage.asObservable();
  public getPersonalMenu$ = this.authData.asObservable();

  constructor() { }

  updateMessage(message) {
    this.headerMessage.next(message);
  }

  updatePersonalMenu(auth) {
    this.authData.next(auth);
  }
}
