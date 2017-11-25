import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { NavigationService } from '../shared/navigation.service';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';
import * as http from "selenium-webdriver/http";

export interface IAddress {
  street: string;
  street_number: number;
  city: string;
  postal_code: number;
  province: string;
  country: string;
  country_code: string;
  selected: boolean;
  isFull: boolean;
  full: string;
  street_number_city: string;
}

@Injectable()
export class OrdersService {
  private protocol = "https"
  private hostname = "api.starbook.co"
  private api_version = "v0.9.1"
  private api = 'https://api.starbook.co/v0.9.1/';

  private auth;

  private orderEvent = new Subject<string>();
  public getOrderEvent$;

  private wizardData:any = {};
  private googleApi: string;

  constructor(private http: Http, private navigationService: NavigationService) {
      this.googleApi = 'https://maps.googleapis.com/maps/api/geocode/json';

    if (isBrowser) {
      this.getOrderEvent$ = this.orderEvent.asObservable();

      if (document.location.hostname === "www.starbook.co") {
        this.api_version = "v0.9.1"
      } else {
        this.api_version = "t0.9.1"
      }
    }
    this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
    // this.api = 'http://localhost/t0.9.1/';
  }

  makeEvent(event) {
    this.orderEvent.next(event);
  }

  saveOrder(order) {
    return this.http.post(this.api + 'orders', order, { headers: this._makeHeaders() }).toPromise().then((response) => {
      return response;
    }).catch(this.handleError);
  }

  getLocationByCity(key: string) {
    let params = new URLSearchParams();
    let addresses = [];
    params.set('address', key);
    params.set('language', 'it');
    params.set('components', 'country:IT');
    params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M');
    return this.http.get(this.googleApi, {search: params}).toPromise().then((response) => {
      let data: any[] = response.json().results;
      console.log(JSON.stringify(data))

      if (data.length) {
        var location = data[0].geometry.location
        console.log(JSON.stringify(location))
        return location;
      }

    }).catch(this.handleError);
  }

  getAddresses(key: string) {
    let params = new URLSearchParams();
    let addresses = [];
    params.set('address', key);
    params.set('language', 'it');
    params.set('components', 'country:IT');
    params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M');
    return this.http.get(this.googleApi, {search: params}).toPromise().then((response) => {
      let data: any[] = response.json().results;
      data.forEach((address) => {
        let addressData: IAddress = {
          street: '',
          street_number: null,
          city: '',
          postal_code: null,
          province: '',
          country: '',
          country_code: '',
          selected: false,
          isFull: false,
          full: '',
          street_number_city: '',
        }

        address.address_components.forEach((components) => {
          switch (components.types[0]) {
            case 'street_number':
              addressData.street_number = components.long_name;
              break;
            case 'route':
              addressData.street = components.long_name;
              break;
            case 'locality':
              addressData.city = components.long_name;
              break;
            case 'administrative_area_level_2':
              addressData.province = components.long_name;
              break;
            case 'country':
              addressData.country = components.long_name;
              addressData.country_code = components.short_name;
              break;
            case 'postal_code':
              addressData.postal_code = components.long_name;
          }
        })

        addressData.full = address.formatted_address;
        if (addressData.street && addressData.city) {
          if (addressData.street_number) {
            addressData.street_number_city = addressData.street + ', ' + addressData.street_number + ' ' + addressData.city;
          } else {
            addressData.street_number_city = addressData.street + ', ' + addressData.city;
          }
          addresses.push(addressData);
        }
      })
      return addresses;
    }).catch(this.handleError);
  }

  getEstimatePrice(data) {
    return this.http.post(this.api + 'calculate_estimate_price', data, this._makeHeaders()).toPromise().then((response) => {
      let price = response.json();
      return price;
    }).catch(this.handleError);
  }

  getOrders(params) {
    let paramsToRequest = new URLSearchParams();
    params.forEach((peram) => {
      paramsToRequest.set(peram.name, peram.value);
    });
    return this.http.get(this.api + 'orders', {headers: this._makeHeaders(), search: paramsToRequest}).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  updateOrder(id, data) {
    return this.http.put(this.api + 'orders/' + id, data, {headers: this._makeHeaders()}).toPromise().then((response) => {
      return response.json();
    }).catch(this.handleError);
  }

  acceptWork(id, action) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.put(this.api + 'orders/' + id, {action: action}, {headers: this._makeHeaders()}).toPromise().then((response) => {
      // this.navigationService.updateLoadingStatus(false);
      return response.json();
    }).catch(this.handleError);
  }

  modifyOrder(id, type) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.put(this.api + 'orders/' + id, {action: type}, {headers: this._makeHeaders()}).toPromise().then((response) => {
      // this.navigationService.updateLoadingStatus(false);
      return true;
    }).catch(this.handleError);
  }

  addPrice(id, type, price) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.put(this.api + 'orders/' + id, {action: type, payment: {amount: price, currency: "eur" }}, {headers: this._makeHeaders()}).toPromise().then((response) => {
      // this.navigationService.updateLoadingStatus(false);
      return response.json();
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
    return Promise.reject(error.status || error);
  }
}
