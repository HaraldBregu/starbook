import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NavigationService } from './navigation.service';

@Injectable()
export class AuthService {
  private protocol = "https"
  private hostname = "api.starbook.co"
  private api_version = "v0.9.1"
  private api = 'https://api.starbook.co/v0.9.1/';
  private auth;

  constructor(private http: Http, private navigationService: NavigationService) {
    if (isBrowser) {
      if (localStorage.getItem('auth') !== null) {
        this.auth = JSON.parse(localStorage.getItem('auth'));
      } else {
        this.auth = false;
      }
    } else {
      this.auth = false;
    }

    if (isBrowser) {
      if (document.location.hostname === "www.starbook.co") {
        this.api_version = "v0.9.1"
      } else {
        this.api_version = "t0.9.1"
      }
    }
    this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
    // this.api = 'http://localhost/t0.9.1/';
  }

  private _makeHeadersFacebook(access_token) {
    return new Headers({'access_token': access_token});
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

  authInit() {
    return this.auth;
  }
  // loginCallback(email: string, password: string, success:() => void, error:() => void) {
  //   return this.http.post(this.api + 'login', {email: email, password: password})
  //   .toPromise()
  //   .then((response) => {
  //     success()
  //     // console.log('response success');
  //     // let data = response.json();
  //     // if (data.success === true) {
  //     //   let authData = {
  //     //     _id: data.result._id,
  //     //     email: data.result.email,
  //     //     email_verified: data.result.email_verified,
  //     //     phone_number: data.result.phone_number,
  //     //     account_types: data.result.account_types,
  //     //     profile: data.result.profile,
  //     //     company: data.result.company,
  //     //     address: data.result.address,
  //     //     services: data.result.services,
  //     //     locations: data.result.locations,
  //     //     payment: data.result.payment,
  //     //     created_at: data.result.created_at,
  //     //     updated_at: data.result.updated_at,
  //     //     token: data.token
  //     //   };
  //     //   if (isBrowser) { localStorage.setItem('auth', JSON.stringify(authData));}
  //     //   this.navigationService.updatePersonalMenu(data.result);
  //       // return authData;
  //     // }
  //   }).catch(this.handleError);
  // }

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
            email_verified: data.result.email_verified,
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
      }).catch(this.handleError);
  }

  signupProfessional(firstname: string, lastname: string, phone: string, email: string, password: string, account_type: string) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'signup', {
      firstname: firstname, lastname: lastname, phone_number: phone, email: email, password: password, account_type: account_type})
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        let data = response.json();
        // if (data.success === true) {
          let authData = {
            _id: data.result._id,
            email: data.result.email,
            email_verified: data.result.email_verified,
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

          return data.result;
        // } else {
        //   this.handleError(data.message);
        // }
      })
      .catch(this.handleError);
  }

  signup(firstname: string, lastname: string, phone: string, email: string, password: string) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'signup', {
      firstname: firstname, lastname: lastname, phone_number: phone, email: email, password: password})
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        let data = response.json();
        // if (data.success === true) {
          let authData = {
            _id: data.result._id,
            email: data.result.email,
            email_verified: data.result.email_verified,
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
          return data.result;
      })
      .catch(this.handleError);
  }

  registerWorker(account) {
    return this.http.post(this.api + 'signup', account).toPromise().then((response) => {
        if (isBrowser) {
          let data = response.json()
          var account = data.result
          account['token'] = data.token
          localStorage.setItem('auth', JSON.stringify(account))
          return data.result
        }
      }).catch(this.handleError)
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

  facebookLogin(access_token) {
    return this.http.post(this.api + 'facebook_login', {}, {headers: this._makeHeadersFacebook(access_token)})
        .toPromise()
        .then((response) => {
          let data = response.json();
          if (data.success === true) {
            let authData = {
              _id: data.result._id,
              email: data.result.email,
              email_verified: data.result.email_verified,
              phone_number: data.result.phone_number,
              account_types: data.result.account_types,
              is_social_account: data.result.is_social_account,
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

  addPhone(phone) {
    return this.http.put(this.api + 'me', {phone_number: phone}, {headers: this._makeHeaders()})
        .toPromise()
        .then((result) => {
          let data = result.json();
          if (isBrowser && data.success === true) {
            let userData = JSON.parse(localStorage.getItem('auth'));
            userData.phone_number = phone;
            localStorage.setItem('auth', JSON.stringify(userData));
            return userData;
          }
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.status || error);
  }

  //**********************************************
  //***************** A/B TESTS ******************
  //**********************************************

  registerCompany(name: string, phone: string, profession: string) {
    return this.http.post(this.api + 'new_company_request', {name: name, phone_number: phone, profession: profession})
      .toPromise()
      .then((response) => {
        let data = response.json();
        if (data.success === true) {
          return data.result;
        } else {
          this.handleError(data.message);
        }
      })
      .catch(this.handleError);
  }

  recommendToFriend(friendName: string, friendPhone: string, myName: string, myPhone: string) {
    return this.http.post(this.api + 'recommend_to_friend', {
      frend_name: friendName,
      frend_phone_number: friendPhone,
      my_name: myName,
      my_phone_number: myPhone
    }).toPromise().then((response) => {
      let data = response.json();
      if (data.success === true) {
        return data.result;
      } else {
        this.handleError(data.message);
      }
    }).catch(this.handleError);
  }

  earnPromoCode(myName: string, myPhone: string) {
    return this.http.post(this.api + 'my_promo_code', {
      name: myName,
      phone_number: myPhone
    }).toPromise().then((response) => {
      let data = response.json();
      if (data.success === true) {
        return data.result;
      } else {
        this.handleError(data.message);
      }
    }).catch(this.handleError);
  }

}
