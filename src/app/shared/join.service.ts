import { isBrowser } from 'angular2-universal';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JoinService {
  private api: string;
  private auth;
  constructor(private http: Http) {
    this.api = 'https://api.starbook.co/v0.9.1/';
  }

  join(data) {
    return this.http.post(this.api + 'join', data).toPromise().then((services) => {
      return services.json();
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
