import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../shared/common.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public page;
  public currentUser;
  public images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
  public emailPattern: any;
  public numPattern: any;
  public contacts = '';
  public spinerView = false;
  public clearView = false;
  public query: string = '';
  public results: string[] = [];
  public newServiceRequest = {
    message: 'Richiedi?'
  };
  public ref;
  public categories = []
  public professionals = []
  public inHouseServices = []
  public seoObject = {};
  public order = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private orderService: OrderService,
    private commonService: CommonService) {
      this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.numPattern = /^\d+$/;
      this.analyticsService.sendPageViewUrl(this.router.url)
      this.navigationService.updateMessage("");

      if (isBrowser) {window.scrollTo(0, 0);}

      if (isBrowser) {
        if (localStorage.getItem('auth')) {
          this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
      }

      this.commonService.getServicesForCategoryTitle('Professionisti').then((professionals) => {
        this.professionals = professionals.result[0].services;
      }).catch((error) => {
        this.professionals = null;
      });

      this.commonService.getServicesForCategoryTitle('Casa').then((inHouseServices) => {
        this.inHouseServices = inHouseServices.result[0].services;
      }).catch((error) => {
        this.inHouseServices = null;
      });

      this.commonService.getServicesForCategoryTitle('Artigiani').then((categories) => {
        this.categories = categories.result[0].services;
      }).catch((error) => {
        this.categories = null;
      });

      this.seoObject['title'] = "Starbook";
      this.seoObject['description'] = "Starbook è una piattaforma che mette in contatto gli artigiani e professionisti con i clienti in modo piu diretto e sicuro gratis per sempre.";
      this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
      this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";

      this.seoService.setTitle(this.seoObject['title']);
      this.seoService.setMetaElem('description', this.seoObject['description']);
      this.seoService.setOgElem('twitter:card', "summary_large_image");
      this.seoService.setOgElem('twitter:title', this.seoObject['title']);
      this.seoService.setOgElem('twitter:site', "@starbookco");
      this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
      this.seoService.setOgElem('twitter:description', this.seoObject['description']);
      this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
      this.seoService.setOgElem('og:title', this.seoObject['title']);
      this.seoService.setOgElem('og:description', this.seoObject['description']);
      this.seoService.setOgElem('og:url', this.seoObject['url']);
      this.seoService.setOgElem('og:image', this.seoObject['image_url']);
      this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);
    }

  ngOnInit() {

  }

  ////////////////////////////////////////////
  ////////////// LANDING SEARCH //////////////
  ////////////////////////////////////////////
  search(event) {
    this.analyticsService.sendEvent({category:'Search', action: 'typing: ' + event.query, label: this.router.url});
    this.newServiceRequest.message = 'Richiedi?';
    this.spinerView = true;
    this.clearView = false;
    let timeStart = Date.now();
    this.commonService.search(event.query).then((results) => {
      this.spinerView = false;
      this.analyticsService.sendTiming({category: 'Search', timingVar: 'load', timingValue: Date.now()-timeStart});
      if (event.query.length > 0) {
        this.clearView = true;
      }
      this.results = results.result;
    }).catch((error) => {
      this.spinerView = false;
      if (event.query.length > 0) {
        this.clearView = true;
      }
      this.results = [];
    })
  }
  selectResult(service) {
    this.analyticsService.sendEvent({category:'Search result', action: 'Select service', label: this.router.url});
    this.commonService.sendData(service, this.ref)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }
  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
  }
  requireService() {
    this.analyticsService.sendEvent({category:'Search result', action: 'Require service', label: this.router.url});
    this.router.navigate(['requests/service']);
  }
  searchMore() {
    this.analyticsService.sendEvent({category:'Button', action: 'Search', label: this.router.url});
    if (this.query.length>0 && this.results.length===0) {
      this.router.navigate(['requests/service']);
    } else if (this.query.length>0 && this.results.length>0) {
      let service = this.results[0];
      this.commonService.sendData(service, this.ref)
      let title = service['title'];
      this.router.navigate(['services', title.replace(/\s+/g, '-')]);
    } else if (this.query.length===0) {
      this.router.navigate(['services']);
    }
  }

  ////////////////////////////////////////////
  ////////////// SELECT CATEGORY /////////////
  ////////////////////////////////////////////
  selectCategory(category) {
    this.analyticsService.sendEvent({category:'Search result', action: 'Select service', label: this.router.url});
    this.commonService.setCategory(category)
    this.router.navigate(['category/', category.title.replace(/\s+/g, '-').toLowerCase()]);
  }

  selectService(service) {
    this.router.navigate(['services/' + service.title.replace(/\s+/g, '-')]);
  }
}
