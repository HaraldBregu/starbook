import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {

  constructor() {
    if (isBrowser) {window.scrollTo(0, 0);}
  }

  ngOnInit() {

  }

}
