import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
  private api: string;
  constructor(private http: Http) {
    this.api = 'https://api.starbook.co/v0.9.1/';
  }
  getCategories() {
    let queryString = 'categories';
    return this.http
      .get(this.api + queryString)
      .toPromise()
      .then((response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
