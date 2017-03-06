import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
