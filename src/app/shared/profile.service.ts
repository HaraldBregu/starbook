import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {
  private api: string;
  private auth;
  constructor(private http: Http) {
    this.api = 'https://api.starbook.co/v0.9.1/'
    // this.api = 'http://localhost/t0.9.1/'
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

    return {headers: headers};
  }

  updateProfile(data) {
    return this.http.put(this.api + 'me', data, this._makeHeaders()).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  getProfile() {
    return this.http.get(this.api + 'me', this._makeHeaders()).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  getAccountById(id) {
    return this.http.get(this.api + 'accounts/' + id).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  changePassword(data) {
    return this.http.put(this.api + 'change_password', data, this._makeHeaders()).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  // NEW
  verifyEmail(code) {
    return this.http.get(this.api + 'email_verification?code=' + code)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  verifyNewPassword(code) {
    return this.http.get(this.api + 'save_password?code=' + code)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }
  createNewPassword(code, password) {
    return this.http.post(this.api + 'create_new_password?code=' + code, {new_password:password})
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

}
