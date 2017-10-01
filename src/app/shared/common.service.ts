import { Injectable } from '@angular/core';
import { isNode, isBrowser } from 'angular2-universal';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { NavigationService } from '../shared/navigation.service';

@Injectable()
export class CommonService {
  private data = {}
  private protocol = "https"
  private hostname = "api.starbook.co"
  private api_version = "v0.9.1"
  private api = ""
  private auth

  constructor(private http: Http/*, private navigationService: NavigationService */) {
    if (isBrowser) {
      if (document.location.hostname === "www.starbook.co") {
        this.api_version = "v0.9.1"
      } else {
        this.api_version = "t0.9.1"
      }
      // https:
      // console.log('protocol: ' + document.location.protocol);
      // glacial-shore-66987.herokuapp.com
      // www.starbook.co
      // console.log('hostname: ' + document.location.hostname);
      // console.log('port: ' + document.location.port);
    }
    this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/"
    this.api = 'http://localhost/t0.9.1/'
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

  facebookReachestimate(cap) {
    let access_token = "EAAPwI8OT9U0BADFuxBf0aYROg3L6S60cc9b0R6jeZAQf4ZAB0W1OhiGQG7H2WFVMADhDqW58MR3HfL6sel5R3JcIGYhCxM2jrN7BQrjOZCr4WAdopRBUMgVymWZCfrCUeT65viE3DtKZCYjrD9wCHtbZC38ve58dnSzZAcC2wQSZCwZDZD"
    let ads_account_id = "act_42190415"
    let params: URLSearchParams = new URLSearchParams()
    params.append("currency", "EUR")
    params.append("optimize_for", "OFFSITE_CONVERSIONS")
    var targeting_spec = {"geo_locations":{"zips":[{"key":"IT:20025"}]},"age_min":18,"age_max":90}
    if (cap) {
      targeting_spec.geo_locations.zips = [{"key":"IT:" + cap}]
    } else {
      targeting_spec.geo_locations['countries'] = ["IT"]
    }
    params.append("targeting_spec", JSON.stringify(targeting_spec))
    params.append('access_token', access_token)
    return this.http.get("https://graph.facebook.com/v2.10/" + ads_account_id +"/reachestimate", { search : params }).toPromise().then((response) => {
      return response.json()
    }).catch(this.handleError)
  }

  postMethod(path, data) {
    return this.http.post(this.api + path, data, { headers: this._makeHeaders() }).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }
  getMethod(path) {
    return this.http.get(this.api + path, { headers: this._makeHeaders() }).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }
  putMethod(path, data) {
    return this.http.put(this.api + path, data, {headers: this._makeHeaders()}).toPromise().then((response) => {
      return response.json()
    }).catch(this.handleError)
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
