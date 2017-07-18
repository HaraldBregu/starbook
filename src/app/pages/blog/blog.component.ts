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
      if (this.article==="Il-booking-dei-servizi:-un-fenomeno-in-crescita-destinato-ad-espandersi") {

      }
      // else if (this.article==="Come-gestire-il-tempo-nell’era-delle-piattaforme-digitali") {
      //
      // }
      else {
        this.router.navigate(['/blog/Il-booking-dei-servizi:-un-fenomeno-in-crescita-destinato-ad-espandersi']);
      }
    })

    this.seoService.setTitle("Il booking dei servizi: un fenomeno in crescita destinato ad espandersi");
    this.seoService.setMetaElem('description', "Negli ultimi anni, si è sentito parlare sempre più spesso del booking dei servizi e dei vantaggi che può offrire.");
    this.seoService.setOgElem('twitter:card', "summary_large_image");
    this.seoService.setOgElem('twitter:title', "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi");
    this.seoService.setOgElem('twitter:site', "@starbookco");
    this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
    this.seoService.setOgElem('twitter:description', "Negli ultimi anni, si è sentito parlare sempre più spesso del booking dei servizi e dei vantaggi che può offrire.");
    this.seoService.setOgElem('twitter:image', "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg");
    this.seoService.setOgElem('og:title', "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi");
    this.seoService.setOgElem('og:description', "Negli ultimi anni, si è sentito parlare sempre più spesso del booking dei servizi e dei vantaggi che può offrire.");
    this.seoService.setOgElem('og:url', "https://www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinatoad-espandersi");
    this.seoService.setOgElem('og:image', "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg");
    this.seoService.setOgElem('og:image:secure_url', "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg");
  }

  ngOnInit() {
    if (isBrowser) {
      window.scrollTo(0, 0)
      // FB.XFBML.parse()
    }
    console.log('on init');
  }
}
