import { Injectable } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { NavigationService } from '../shared/navigation.service';

@Injectable()
export class CommonService {
  private api: string;
  private auth;
  private data = {};

  constructor(private http: Http/*, private navigationService: NavigationService */) {
    this.api = 'https://api.starbook.co/v0.9.1/';
    // this.api = 'http://localhost/t0.9.1/';
  }

  setObjectForKey(object, key) {
    this.data[key] = object
  }
  getObjectForKey(key) {
    return this.data[key];
  }

  saveObjectForKey(object, key) {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(object));
    }
  }
  readObjectForKey(key) {
    let recovery
    if (isBrowser) {
      recovery = localStorage.getItem(key);
      return JSON.parse(recovery);
    }
  }
  deleteObjectForKey(key) {
    if (isBrowser) {
      localStorage.removeItem(key);
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
    let queryString = 'categories';
    return this.http.get(this.api + queryString).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }
  getCategoryById(id) {
    return this.http.get(this.api + 'categories/' + id).toPromise().then((results) => {
      return results.json();
    }).catch(this.handleError);
  }

  getServicesForCategoryTitle(title) {
    let queryString = 'categories/' + title + '/services';
    return this.http.get(this.api + queryString).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }
  getMyServices() {
    let queryString = 'me/services';
    return this.http.get(this.api + queryString, { headers: this._makeHeaders() }).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  createService(data) {
    return this.http.post(this.api + 'services', data, { headers: this._makeHeaders() }).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }

  getAllServices(query) {
    let params: URLSearchParams = new URLSearchParams();
    if (query) {
      for(let key in query) {
        params.set(key.toString(), query[key]);
      }
    }
    return this.http.get(this.api + 'services', {search: params}).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }
  getServices() {
    return this.http.get(this.api + 'featured').toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }

  search(query) {
    return this.http.get(this.api + 'search?title=' + query).toPromise().then((results) => {
      return results.json();
    }).catch(this.handleError);
  }

  getServiceById(id) {
    return this.http.get(this.api + 'services/' + id).toPromise().then((results) => {
      return results.json();
    }).catch(this.handleError);
  }
  getRelatedServicesByServiceId(id, query) {
    let params: URLSearchParams = new URLSearchParams();
    if (query) {
      for(let key in query) {
        params.set(key.toString(), query[key]);
      }
    }
    return this.http.get(this.api + 'services/' + id + '/services', {search: params}).toPromise().then((results) => {
      return results.json();
    }).catch(this.handleError);
  }

  getAccountsByServiceId(id) {
    return this.http.get(this.api + 'services/' + id + '/accounts').toPromise().then((results) => {
      return results.json();
    }).catch(this.handleError);
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
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  saveObjectToLocalWithName(object, name) {
    if (isBrowser) { localStorage.setItem(name, JSON.stringify(object)); }
  }
  readObjectFromLocalWithName(name) {
    let recovery
    if (isBrowser) { recovery = localStorage.getItem(name); }
    return JSON.parse(recovery);
  }
  deleteObjectFromLocalWithName(name) {
    if (isBrowser) { localStorage.removeItem(name); }
  }
  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
}
