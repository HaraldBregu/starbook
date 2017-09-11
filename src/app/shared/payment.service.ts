import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface stripeResponse {
  token: string;
  data: {}
}

@Injectable()
export class PaymentService {
  private protocol = "https"
  private hostname = "api.starbook.co"
  private api_version = "v0.9.1"
  private api = ""
  private auth

  constructor(private http: Http) {
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
    // this.api = 'http://localhost/t0.9.1/'
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

    return {headers: headers};
  }

  public getToken(card) {
    return new Promise((resolve, reject) => {
      (<any>window).Stripe.card.createToken({
        number: card.number,
        exp_month: card.exp_month,
        exp_year: card.exp_year,
        cvc: card.cvc,
        name: card.name,
        address_line1: card.address_line1,
        address_line2: card.address_line2,
        address_city: card.address_city,
        address_zip: card.address_zip,
        address_state: card.address_state,
        address_country: card.address_country
      }, (status: number, response: any) => {
        if (status === 200) {
          let stripeResponse: stripeResponse = {
            token: response.id,
            data: response.card
          };
          resolve(stripeResponse);
        } else {
          reject(status);
        }
      })
    });
  }

  public cardNumberValidate(cardNumber) {
    return (<any>window).Stripe.card.validateCardNumber(cardNumber);
  }

  public addNewCard(cardData) {
    // this.navigationService.updateLoadingStatus(true);
    return this.getToken(cardData)
        .then((data: stripeResponse) => {
          return this.http.post(this.api + 'me/cards', {source: data.token}, this._makeHeaders())
              .toPromise()
              .then((response) => {
                // this.navigationService.updateLoadingStatus(false);
                return response.json();
              })
              .catch(this.handleError);
        })
        .catch(this.handleError);
  }

  public selectCard(cardId) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'me/customers', {default_source: cardId},this._makeHeaders())
        .toPromise()
        .then((response) => {
          // this.navigationService.updateLoadingStatus(false);
          return response.json();
        })
        .catch(this.handleError);
  }

  public deleteCard(cardId) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.delete(this.api + 'me/cards/' + cardId, this._makeHeaders())
        .toPromise()
        .then((status) => {
          // this.navigationService.updateLoadingStatus(false);
          return status.json();
        })
        .catch(this.handleError);
  }

  public editCard(cardId, cardData) {
    // this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'me/cards/' + cardId, cardData, this._makeHeaders())
        .toPromise()
        .then((status) => {
          // this.navigationService.updateLoadingStatus(false);
          return status.json();
        })
        .catch(this.handleError);
  }

  public getCards() {
    return this.http.get(this.api + 'me/customers', this._makeHeaders()).toPromise().then((response) => {
      return response.json()
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

}
