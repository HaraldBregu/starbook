import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NavigationService } from './navigation.service';

@Injectable()
export class AuthService {
  private api: string;
  private auth;
  constructor(private http: Http, private navigationService: NavigationService) {
    this.api = 'https://api.starbook.co/v0.9.1/';
    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        this.auth = JSON.parse(localStorage.getItem('auth'));
      } else {
        this.auth = false;
      }
    } else {
      this.auth = false;
    }

  }

  authInit() {
    return this.auth;
  }

  login(email: string, password: string) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'login', {email: email, password: password})
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        let data = response.json();
        if (data.success === true) {
          let authData = {
            _id: data.result._id,
            email: data.result.email,
            phone_number: data.result.phone_number,
            account_types: data.result.account_types,
            profile: data.result.profile,
            company: data.result.company,
            address: data.result.address,
            services: data.result.services,
            locations: data.result.locations,
            payment: data.result.payment,
            created_at: data.result.created_at,
            updated_at: data.result.updated_at,
            token: data.token
          };

          if (isBrowser) {
            localStorage.setItem('auth', JSON.stringify(authData));
          }

          this.navigationService.updatePersonalMenu(data.result);
          return authData;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  signup(name: string, phone: string, email: string, password: string) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'signup', {fullname: name, phone_number: phone, email: email, password: password})
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        let data = response.json();
        if (data.success === true) {
          let authData = {
            _id: data.result._id,
            email: data.result.email,
            phone_number: '',
            account_types: data.result.account_types,
            profile: data.result.profile,
            company: data.result.company,
            address: data.result.address,
            services: data.result.services,
            locations: data.result.locations,
            payment: data.result.payment,
            created_at: data.result.created_at,
            updated_at: data.result.updated_at,
            token: data.token
          };

          if (isBrowser) {
            localStorage.setItem('auth', JSON.stringify(authData));
          }

          return data.result;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  recovery(email: string) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'password_recovery', {email: email})
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        let data = response.json();
        if (data.success === true) {
          return true;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  getUserData() {
    return this.auth;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.status || error);
  }

}
