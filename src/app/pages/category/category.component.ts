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
      if (data.service) {
        this.category = data.service;
      } else {
        this.route.params.subscribe(params => {
          let category = params['category'];
          this.commonService.getCategoryById(category).then((data) => {
            this.category = data.result;
            // console.log('category from server is: ' + JSON.stringify(data));
          }).catch((error) => {
            this.router.navigateByUrl('/');
          });
        })
      }
    }

  ngOnInit() {

  }

}
