import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  private api: string;
  private auth;
  constructor(private http: Http) {
    this.api = 'https://api.starbook.co/v0.9.1/';
  }

  private _makeHeaders() {
    let headers;
    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        this.auth = JSON.parse(localStorage.getItem('auth'));
        headers = new Headers({'Token': this.auth.token});
      } else {
        this.auth = false;
        headers = new Headers({'Token': ''});
      }
    } else {
      this.auth = false;
      headers = new Headers({'Token': ''});
    }
    return headers;
  }

  sendEmail(data) {
    return this.http.post(this.api + 'send_email', data).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }
  join(data) {
    return this.http.post(this.api + 'join', data).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }
  sendInvitations(promolink, phones, emails) {
    return this.http.post(this.api + 'send_invitations', {link:promolink, phone_numbers:phones, email_addresses:emails}, {headers: this._makeHeaders()}).toPromise().then((data) => {
      return data;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
