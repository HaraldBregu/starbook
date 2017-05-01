import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { isBrowser } from 'angular2-universal';

import 'rxjs/add/operator/toPromise';

// import { NavigationService } from '../shared/navigation.service';

@Injectable()
export class CommonService {
  private servicesObject;
  private service;
  private referral_id;
  private api: string;
  private auth;

  constructor(private http: Http/*, private navigationService: NavigationService*/) {
    this.api = 'https://api.starbook.co/v0.9.1/';
    // this.api = 'http://localhost/v0.9.1/';
  }

  sendServices(services) {
    this.servicesObject = services;
  }
  getServicesObject() {
    return this.servicesObject;
  }
  sendData(service, ref) {
    this.service = service;
    this.referral_id = ref;
  }
  getData() {
    return {
      service:this.service,
      referral_id: this.referral_id
    }
  }

  // EMAIL SMS
  requireNewService(data) {
    return this.http.post(this.api + 'request_service', data).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }
  sendNotifications(promolink, phones, emails) {
    return this.http.post(this.api + 'send_invitations', {link:promolink, phone_numbers:phones, email_addresses:emails}).toPromise().then((data) => {
      return data;
    }).catch(this.handleError);
  }


  getCategories() {
    // this.navigationService.updateLoadingStatus(true);
    let queryString = 'categories';
    return this.http
      .get(this.api + queryString)
      .toPromise()
      .then((response) => {
        // this.navigationService.updateLoadingStatus(false);
        return response.json();
      })
      .catch(this.handleError);
  }
  getAllServices() {
    return this.http.get(this.api + 'services').toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }
  getServices() {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.get(this.api + 'featured')
        .toPromise()
        .then((services) => {
          // this.navigationService.updateLoadingStatus(false);
          return services.json();
        })
        .catch(this.handleError);
  }

  search(query) {
    return this.http.get(this.api + 'search?title=' + query)
        .toPromise()
        .then((results) => {
          return results.json();
        })
        .catch(this.handleError);
  }

  getServiceById(id) {
      return this.http.get(this.api + 'services/' + id)
          .toPromise()
          .then((results) => {
              return results.json();
          })
          .catch(this.handleError);
  }

  private _makeHeaders() {
    let headers;
    if(isBrowser) {
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
  private handleError(error: any): Promise<any> {
    // this.navigationService.updateLoadingStatus(false);
    return Promise.reject(error.message || error);
  }
}
