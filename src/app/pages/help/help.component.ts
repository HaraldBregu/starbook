import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from "angular2-universal";
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  constructor(private router: Router, private navigationService: NavigationService) {
    this.navigationService.updateMessage("Aiuto");
  }

  ngOnInit() {

  }

}
