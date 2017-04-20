import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// import { NavigationService } from '../shared/navigation.service';

@Injectable()
export class HomeService {
  private servicesObject;
  private service;
  private referral_id;
  private api: string;
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

  private handleError(error: any): Promise<any> {
    // this.navigationService.updateLoadingStatus(false);
    return Promise.reject(error.message || error);
  }
}
