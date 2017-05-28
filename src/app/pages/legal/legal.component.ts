import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from "angular2-universal";
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationService) {
    this.navigationService.updateMessage("Privacy e Condizioni");
  }

  ngOnInit() {

  }
}
