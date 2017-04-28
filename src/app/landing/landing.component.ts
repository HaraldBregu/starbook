import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../shared/seo.service';
import { NavigationService } from '../shared/navigation.service';
import { AnalyticsService } from '../shared/analytics.service';
import { isBrowser } from 'angular2-universal';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  public page;
  public currentUser;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private analyticsService: AnalyticsService,
    private seoService: SeoService) {
      this.navigationService.updateMessage('Test');

      if (isBrowser) {
        if (localStorage.getItem('auth')) {
          this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
        this.route.params.subscribe((params: Params) => {
          window.scrollTo(0, 0);
          this.page = params['page'];
          if (this.page==='plumber') {
            this.navigationService.updateMessage('Idraulico');

          } else if (this.page==='carpenters') {
            this.navigationService.updateMessage('Falegname');

          } else if (this.page==='bricklayers') {
            this.navigationService.updateMessage('Muratore');

          } else if (this.page==='energy_certificator') {
            this.navigationService.updateMessage('Certificatore energetico');

          } else if (this.page==='serramentist') {
            this.navigationService.updateMessage('Serramentista');

          }
          console.log('this page is: ' + this.page);
        })
      }
  }

  ngOnInit() {

  }

}
