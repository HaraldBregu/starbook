import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/seo.service';
import { NavigationService } from '../../shared/navigation.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService,
    private commonService: CommonService) {
      this.analyticsService.sendPageViewUrl(this.router.url)
      this.navigationService.updateMessage("Artigiani digitali");


  }

  ngOnInit() {
  }

}
