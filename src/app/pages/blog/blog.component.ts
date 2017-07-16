import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/seo.service';
import { NavigationService } from '../../shared/navigation.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../shared/common.service';

import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  public article = ''

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private analyticsService: AnalyticsService, private seoService: SeoService, private commonService: CommonService, private fb: FacebookService) {
    this.navigationService.updateMessage("")
    if (isBrowser) {
      let initParams: InitParams = {
        appId: '1108461325907277',
        xfbml: true,
        version: 'v2.8'
      };
      fb.init(initParams);
    }

    this.route.params.subscribe(params => {
      this.article = params['article']
      if (this.article==="Il-booking-dei-servizi:-un-fenomeno-in-crescita-destinatoad-espandersi") {

      } else {
        this.router.navigate(['/blog/Il-booking-dei-servizi:-un-fenomeno-in-crescita-destinatoad-espandersi']);
      }
    })
  }

  ngOnInit() {
    if (isBrowser) {
      window.scrollTo(0, 0)
      // FB.XFBML.parse()
    }
    console.log('on init');
  }
}
