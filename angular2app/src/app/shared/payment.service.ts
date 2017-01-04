import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PaymentService {
  private stripe = 'https://api.stripe.com/v1/';
  private api = 'https://api.starbook.co/v0.9.1/';
  private key = 'sk_test_jO5JbwCWHNh8N4odvzoFxeKa';
  private auth;
  constructor(private http: Http) { }

  private _makeStripeHeaders() {
    let headers;
    headers = new Headers({'Authorization': 'Bearer ' + this.key, 'Content-Type': 'application/x-www-form-urlencoded'});
    return headers;
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

  public getToken(number, exp_month, exp_year, cvc) {
    return new Promise((resolve, reject) => {
      (<any>window).Stripe.card.createToken({
        number: number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc
      }, (status: number, response: any) => {
        if (status === 200) {
          resolve(response.id);
        } else {
          reject(status);
        }
      })
    });
  }

  public addNewCard(cardData) {
    let authData;
    if (localStorage.getItem('auth') !== null) {
      authData = JSON.parse(localStorage.getItem('auth'));
    }
    let card = cardData;
    return this.getToken(cardData.number, cardData.exp_month, cardData.exp_year, cardData.cvc)
        .then((token) => {
          if (token) {
            card.source = token;
            console.log(card);
            return this.http
                .post(this.stripe + 'customers/' + authData.stripe_customer_id + '/sources', card, {headers: this._makeStripeHeaders()})
                .toPromise()
                .then((response) => {
                  console.log(response.json());
                  return response.json();
                })
                .catch(this.handleError);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }

  public getCards() {
    return this.http.get(this.api + 'me/customers', this._makeHeaders())
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
