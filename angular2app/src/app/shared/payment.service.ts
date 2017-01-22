import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NavigationService } from './navigation.service';

export interface stripeResponse {
  token: string;
  data: {}
}

@Injectable()
export class PaymentService {
  private api = 'https://api.starbook.co/v0.9.1/';
  private auth;
  constructor(private http: Http, private navigationService: NavigationService) { }

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
    this.navigationService.updateLoadingStatus(true);
    return this.getToken(cardData)
        .then((data: stripeResponse) => {
          return this.http.post(this.api + 'me/cards', {source: data.token}, this._makeHeaders())
              .toPromise()
              .then((response) => {
                this.navigationService.updateLoadingStatus(false);
                return response.json();
              })
              .catch(this.handleError);
        })
        .catch(this.handleError);
  }

  public selectCard(cardId) {
    this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'me/customers', {default_source: cardId},this._makeHeaders())
        .toPromise()
        .then((response) => {
          this.navigationService.updateLoadingStatus(false);
          return response.json();
        })
        .catch(this.handleError);
  }

  public deleteCard(cardId) {
    this.navigationService.updateLoadingStatus(true);
    return this.http.delete(this.api + 'me/cards/' + cardId, this._makeHeaders())
        .toPromise()
        .then((status) => {
          this.navigationService.updateLoadingStatus(false);
          return status.json();
        })
        .catch(this.handleError);
  }

  public editCard(cardId, cardData) {
    this.navigationService.updateLoadingStatus(true);
    return this.http.post(this.api + 'me/cards/' + cardId, cardData, this._makeHeaders())
        .toPromise()
        .then((status) => {
          this.navigationService.updateLoadingStatus(false);
          return status.json();
        })
        .catch(this.handleError);
  }

  public getCards() {
    this.navigationService.updateLoadingStatus(true);
    return this.http.get(this.api + 'me/customers', this._makeHeaders())
        .toPromise()
        .then((response) => {
          this.navigationService.updateLoadingStatus(false);
          return response.json();
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.navigationService.updateLoadingStatus(false);
    return Promise.reject(error.status || error);
  }

}
