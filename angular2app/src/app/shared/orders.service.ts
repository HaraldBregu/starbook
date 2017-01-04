import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {
  private api: string;
  private auth;
  constructor(private http: Http) {
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
    return headers;
  }

  getOrders(params) {
    let paramsToRequest = new URLSearchParams();
    params.forEach((peram) => {
      paramsToRequest.set(peram.name, peram.value);
    });
    return this.http.get(this.api + 'orders', {headers: this._makeHeaders(), search: paramsToRequest})
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getCategories() {
    return ['Idraulico', 'Elettricista', 'Fabbro', 'Spazzacamino', 'Antennista', 'Pulizie', 'Edilizia', 'Giardinaggio', 'Informatica'];
  }

  modifyOrder(id, type) {
    return this.http.put(this.api + 'orders/' + id, {action: type}, {headers: this._makeHeaders()})
        .toPromise()
        .then((response) => {
          return true;
        })
        .catch(this.handleError);
  }

  addPrice(id, type, price) {
    return this.http.put(this.api + 'orders/' + id, {action: type, payment: {amount: price, currency: "eur" }}, {headers: this._makeHeaders()})
        .toPromise()
        .then((response) => {
          return response.json();
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.status || error);
  }
}
