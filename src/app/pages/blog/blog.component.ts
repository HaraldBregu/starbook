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
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  public blog = {
    title: "",
    articles: [
      {
        "title" : "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi",
        "subtitle" : "Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg",
        "author": {
          "fullname" : "Starbook Team",
          "headline" : "Piattaforma di booking per i servizi professionali.",
          "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/5920099fde98d19d5836ef56/avatar/0"
        },
        "updated_at" : "16 Lug 2017",
        "timing" : "3 min lettura"
      },
      {
        "title" : "Le piattaforme digitali: come gestire il tempo nell'era della new economy",
        "subtitle" : "Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png",
        "author": {
          "fullname" : "Harald Bregu",
          "headline" : "Sviluppatore, Software, Starbook, Startup",
          "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
        },
        "updated_at" : "19 Lug 2017",
        "timing" : "3 min lettura"
      },
    ]
  }
  public SeoData = {}

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private analyticsService: AnalyticsService, private seoService: SeoService, private commonService: CommonService, private fb: FacebookService) {
    this.navigationService.updateMessage("")
    this.SeoData['title'] = "Starbook Blog"
    this.SeoData['description'] = "Starbook è una piattaforma che ti connette ai professionisti in modo piu sicuro e diretto."
    this.SeoData['url'] = "https://www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinatoad-espandersi"
    this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg"
    this.seoService.setTitle(this.SeoData['title'])
    this.seoService.setMetaElem('description', this.SeoData['description'])
    this.seoService.setOgElem('twitter:card', "summary_large_image")
    this.seoService.setOgElem('twitter:title', this.SeoData['title'])
    this.seoService.setOgElem('twitter:site', "@starbookco")
    this.seoService.setOgElem('twitter:creator', "@HaraldBregu")
    this.seoService.setOgElem('twitter:description', this.SeoData['description'])
    this.seoService.setOgElem('twitter:image', this.SeoData['image_url'])
    this.seoService.setOgElem('og:title', this.SeoData['title'])
    this.seoService.setOgElem('og:description', this.SeoData['description'])
    this.seoService.setOgElem('og:url', this.SeoData['url'])
    this.seoService.setOgElem('og:image', this.SeoData['image_url'])
    this.seoService.setOgElem('og:image:secure_url', this.SeoData['image_url'])
  }

  ngOnInit() {

  }

  showArticle(article) {
    this.router.navigate(['/blog/' + article.title.replace(/\s+/g, '-')])
  }

}
