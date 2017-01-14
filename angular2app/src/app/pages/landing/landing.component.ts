import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public cardStyles = {1: '0.95', 2: '0.95', 3: '0.9'};
  public query: string = '';
  public results: string[] = [];
  public services = [];
  public spinerView = false;
  public clearView = false;
  constructor(private homeService: HomeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.homeService.getServices()
        .then((services) => {
          this.services = services.result;
        })
        .catch((error) => {
          console.log(error);
        });
  }
  cardHover(id, type) {
    if (type === 'on') {
      this.cardStyles[id] = '1';
    } else {
      if (id === 3) {
        this.cardStyles[id] = '0.9';
      } else {
        this.cardStyles[id] = '0.95';
      }
    }
  }

  search(event) {
    this.spinerView = true;
    this.clearView = false;
    this.homeService.search(event.query)
        .then((results) => {
          this.spinerView = false;
          if (event.query.length > 0) {
            this.clearView = true;
          }
          this.results = results.result;
        })
        .catch((error) => {
          this.spinerView = false;
          if (event.query.length > 0) {
            this.clearView = true;
          }
          this.results = [];
        })
  }

  selectResult(servicesObj) {
    this.homeService.sendServices(servicesObj);
    this.router.navigate(['services']);
  }

  clearSearchForm() {
    this.query = '';
    this.results = [];
    this.clearView = false;
  }
}
