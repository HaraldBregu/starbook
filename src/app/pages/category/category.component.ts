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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private orderService: OrderService,
    private commonService: CommonService) {

      let data = this.commonService.getData();
      // console.log('category is: ' + JSON.stringify(data));
      if (isBrowser) {window.scrollTo(0, 0);}

      if (data.service) {
        this.category = data.service;
        this.navigationService.updateMessage(this.category.title);

      } else {
        this.route.params.subscribe(params => {

          let category = params['category'];
          this.commonService.getCategoryById(category).then((data) => {
            this.category = data.result;
            this.navigationService.updateMessage(this.category.title);

            console.log('category from server is: ' + JSON.stringify(data));
          }).catch((error) => {
            this.router.navigate(['']);

          });
        })
      }
    }

  ngOnInit() {

  }

  checkOut() {
    this.router.navigate(['order/summary']);
    return false;
  }

}
