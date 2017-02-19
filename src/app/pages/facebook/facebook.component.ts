import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { PopupsService } from '../../popups/popups.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html'
})
export class FacebookComponent implements OnInit {

  constructor(public router: Router, private popupsService: PopupsService, private authService: AuthService) { }

  ngOnInit() {
    this.router.events.subscribe(s => {
      let params = new URLSearchParams(s.url.split('#')[1]);
      let access_token = params.get('access_token');
      this.authService.facebookLogin(access_token)
          .then((userData) => {
            console.log(userData);
          })
          .catch((error) => {
            console.log(error);
          })
    });
  }

}
