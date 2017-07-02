import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/seo.service';
import { NavigationService } from '../../shared/navigation.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  public page;
  public category;
  public images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
  public Request = {
    description: '',
    phone: '',
    email: '',
    firstname: '',
    lastname: ''
  };
  public request_state = {
    loading: false,
    button_title: "Invia richiesta",
    message_success: null,
    message_error: null,
    title_error: null,
    description_error: null,
    firstname_error: null,
    lastname_error: null,
    phone_error: null,
    email_error: null
  };
  public spinerView = false;
  public clearView = false;
  public query: string = '';
  public results: string[] = [];
  public services = [];
  public order = {};
  public seoObject = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private commonService: CommonService) {

      // let category = this.commonService.getCategory();
      // if (category) {
      //   this.category = category;
      //   this.navigationService.updateMessage(this.category.title);
      //   this.loadServicesForCategoryId(this.category._id);
      //   this.updateSeoForObject(this.category);
      //  } else {
      //   this.route.params.subscribe(params => {
      //     let category = params['category'];
      //     this.commonService.getServiceById(category).then((data) => {
      //       this.category = data.result;
      //       this.updateSeoForObject(this.category);
      //       this.navigationService.updateMessage(this.category.title);
      //       this.loadServicesForCategoryId(this.category._id);
      //     }).catch((error) => {
      //       this.router.navigate(['']);
      //     });
      //   })
      // }
    }

  ngOnInit() {
    if (isBrowser) {window.scrollTo(0, 0);}
  }

  updateSeoForObject(category) {
    this.seoObject['title'] = category.title;
    this.seoObject['description'] = category.description;
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = category.image_url;
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
  showDirectAction(action) {
    this.order['service_id'] = this.category._id
    this.order['title'] = this.category.title;
    var title = "Richiesta di " + action.title.toLowerCase() + ""
    this.order['details'] = [{title:this.category.title, type:"service", count:0, amount:0},{title:title, type:"detail", count:0, amount:0}]
    this.order['description'] = ""
    this.order['upfront_amount'] = action.amount
    this.order['timing'] = {days: 0}
    this.router.navigate(['order/summary']);
    return false;
  }
  loadServicesForCategoryId(category_id) {
    this.commonService.getRelatedServicesByServiceId(category_id, null).then((data) => {
      this.services = data.result[0].services;
      // console.log('services are: ' + JSON.stringify(data.result));
    }).catch((error) => {
      // console.log('error are: ' + JSON.stringify(error));
    });
  }
  showServicePage(service) {
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }
  requireService() {
    this.router.navigate(['requests/service']);
  }
  checkOut() {
    this.router.navigate(['order/summary']);
    return false;
  }

}
