import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  @Output('tabSelect') activeTab = new EventEmitter();
  public cardStyles = {1: '0.95', 2: '0.95', 3: '0.9'};
  constructor() { }

  ngOnInit() {
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
}
