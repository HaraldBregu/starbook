import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { SeoService } from '../shared/seo.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  public seoObject = {}

  constructor(
    private router: Router,
    private seoService: SeoService) {
    if (isBrowser) {window.scrollTo(0, 0);}
  }

  ngOnInit() {
    this.seoObject['title'] = "Starbook | Il tuo futuro dipende dalle tue decisioni";
    this.seoObject['description'] = "Starbook è un online marketplace di mestieri e servizi professionali. Puoi inserire i servizi che offri e ricevere prenotazioni da clienti interessati.";
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/kayak-go-far.png";

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

}
