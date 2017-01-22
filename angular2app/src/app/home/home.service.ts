import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NavigationService } from '../shared/navigation.service';

@Injectable()
export class HomeService {
  private servicesObject;
  private api: string;
  constructor(private http: Http, private navigationService: NavigationService) {
    this.api = 'https://api.starbook.co/v0.9.1/';
  }

  sendServices(services) {
    this.servicesObject = services;
  }
  getServicesObject() {
    return this.servicesObject;
  }

  getCategories() {
    this.navigationService.updateLoadingStatus(true);
    let queryString = 'categories';
    return this.http
      .get(this.api + queryString)
      .toPromise()
      .then((response) => {
        this.navigationService.updateLoadingStatus(false);
        return response.json();
      })
      .catch(this.handleError);
  }

  getServices() {
    this.navigationService.updateLoadingStatus(true);
    return this.http.get(this.api + 'services/featured')
        .toPromise()
        .then((services) => {
          this.navigationService.updateLoadingStatus(false);
          return services.json();
        })
        .catch(this.handleError);
  }

  search(query) {
    return this.http.get(this.api + 'services/search?title=' + query)
        .toPromise()
        .then((results) => {
          return results.json();
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.navigationService.updateLoadingStatus(false);
    return Promise.reject(error.message || error);
  }
}
