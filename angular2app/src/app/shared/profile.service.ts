import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NavigationService } from './navigation.service';

@Injectable()
export class ProfileService {
  private api: string;
  private auth;
  constructor(private http: Http, private navigationService: NavigationService) {
    this.api = 'https://api.starbook.co/v0.9.1/';
  }

  private _makeHeaders() {
    let headers;
    if (localStorage.getItem('auth') !== null) {
      this.auth = JSON.parse(localStorage.getItem('auth'));
      headers = new Headers({'Token': this.auth.token});
    } else {
      this.auth = false;
      headers = new Headers({'Token': ''});
    }
    return {headers: headers};
  }

  updateProfile(userData) {
    this.navigationService.updateLoadingStatus(true);
    return this.http.put(this.api + 'me', userData, this._makeHeaders())
      .toPromise()
      .then((response) => {
        this.navigationService.updateLoadingStatus(false);
        return response.json();
      })
      .catch(this.handleError);
  }

  getProfile() {
    this.navigationService.updateLoadingStatus(true);
    return this.http.get(this.api + 'me', this._makeHeaders())
        .toPromise()
        .then((response) => {
          this.navigationService.updateLoadingStatus(false);
          return response.json();
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.navigationService.updateLoadingStatus(false);
    return Promise.reject(error.status || error);
  }
}
