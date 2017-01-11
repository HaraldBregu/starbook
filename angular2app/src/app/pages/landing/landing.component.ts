import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  @Output('tabSelect') activeTab = new EventEmitter();
  public cardStyles = {1: '0.95', 2: '0.95', 3: '0.9'};
  public query: string = '';
  public results: string[] = [];
  public services = [];
  public spinerView = false;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getServices()
        .then((services) => {
          this.services = services.result;
          console.log(this.services);
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

  navigate(tabId) {
    this.activeTab.emit({id: tabId});
  }

  search(event) {
    this.spinerView = true;
    this.homeService.search(event.query)
        .then((results) => {

        })
        .catch((error) => {
          console.log(error);
        })
  }
}
