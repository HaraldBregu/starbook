import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private api: string;
  private auth;
  constructor(private http: Http) {
    this.api = 'https://api.starbook.co/v0.9.1/';
    if (localStorage.getItem('auth') !== null) {
      this.auth = JSON.parse(localStorage.getItem('auth'));
    } else {
      this.auth = false;
    }
  }

  authInit() {
    return this.auth;
  }

  login(email: string, password: string) {
    return this.http.post(this.api + 'login', {email: email, password: password})
      .toPromise()
      .then((response) => {
        let data = response.json();
        if (data.success === true) {
          let authData = {
            _id: data.result._id,
            fullname: data.result.fullname,
            email: data.result.email,
            phone_number: data.result.phone_number,
            city: data.result.city,
            country: data.result.country,
            created_at: data.result.created_at,
            email_verified: data.result.email_verified,
            postal_code: data.result.postal_code,
            province: data.result.province,
            street_name: data.result.street_name,
            street_number: data.result.street_number,
            updated_at: data.result.updated_at,
            token: data.token
          };

          localStorage.setItem('auth', JSON.stringify(authData));
          return authData;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  signup(name: string, email: string, password: string) {
    return this.http.post(this.api + 'signup', {fullname: name, email: email, password: password})
      .toPromise()
      .then((response) => {
        let data = response.json();
        if (data.success === true) {
          let authData = {
            _id: data.result._id,
            fullname: data.result.fullname,
            email: data.result.email,
            phone_number: '',
            token: data.token
          };

          localStorage.setItem('auth', JSON.stringify(authData));
          return authData;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  recovery(email: string) {
    return this.http.post(this.api + 'password_recovery', {email: email})
      .toPromise()
      .then((response) => {
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
