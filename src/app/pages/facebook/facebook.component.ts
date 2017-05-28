import { isBrowser } from 'angular2-universal';
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
      if (isBrowser) {
          this.router.events.subscribe(s => {
              let params = new URLSearchParams(s.url.split('#')[1]);
              let access_token = params.get('access_token');
              if (access_token) {
                  localStorage.setItem('facebook_token', access_token);
                  window.close();
              } else {
                  localStorage.setItem('facebook_token', 'error');
                  window.close();
              }
          });
      }
  }

}
