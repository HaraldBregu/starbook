import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/seo.service';
import { NavigationService } from '../../shared/navigation.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../shared/common.service';
import { OrderService } from '../../order/order.service';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private orderService: OrderService,
    private commonService: CommonService) {

      let category = this.commonService.getCategory();
      // console.log('category is: ' + JSON.stringify(data));
      if (isBrowser) {window.scrollTo(0, 0);}

      if (category) {
        this.category = category;
        this.navigationService.updateMessage(this.category.title);
        this.loadServicesForCategoryId(this.category._id);
       } else {
        this.route.params.subscribe(params => {
          let category = params['category'];
          this.commonService.getCategoryById(category).then((data) => {
            this.category = data.result;
            this.navigationService.updateMessage(this.category.title);
            this.loadServicesForCategoryId(this.category._id);
            // console.log('category from server is: ' + JSON.stringify(data));
          }).catch((error) => {
            this.router.navigate(['']);

          });
        })
      }
    }

  ngOnInit() {

  }

  showDirectAction(action) {
    console.log('action: ' + JSON.stringify(action));
    this.order['service_id'] = this.category._id
    this.order['title'] = this.category.title;
    this.order['details'] = [{title:this.category.title, type:"service"},{title:"Richiesta di " + action.title.toLowerCase(), type:"detail", value:""}]
    this.order['description'] = ""
    this.order['referral_id'] = null
    this.order['price'] = {
      final: 0,
      initial: 0,
      currency: 'eur'
    }
    this.order['payment'] = {upfront: action.amount}
    this.order['timing'] = {days: 0}
    console.log('order is: ' + JSON.stringify(this.order));
    this.orderService.updateWizardData(this.order);
    this.router.navigate(['order/summary']);
    return false;
  }
  loadServicesForCategoryId(category_id) {
    this.commonService.getAllServices({'category': category_id}).then((data) => {
      this.services = data.result;
      // console.log('services from category is: ' + JSON.stringify(this.services));
    }).catch((error) => {
      // console.log('error: ' + error);
    });
  }

  showServicePage(service) {
    this.commonService.setService(service)
    this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
  }

  checkOut() {
    this.router.navigate(['order/summary']);
    return false;
  }

}
