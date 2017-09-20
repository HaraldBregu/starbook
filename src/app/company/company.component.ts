import { isBrowser } from 'angular2-universal';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../shared/seo.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  public seoObject = {}
  public page = null
  public Account;

  constructor(private router: Router, private route: ActivatedRoute, private seoService: SeoService, private authServics: AuthService, private fb: FacebookService) {
    if (isBrowser) {
      window.scrollTo(0, 0);
      this.Account = JSON.parse(localStorage.getItem('auth'))
      // fb.init({appId: '1108461325907277', version: 'v2.7'})
      if (document.location.hostname === "www.starbook.co") {
        fb.init({appId: '1108461325907277', version: 'v2.7'})
      } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
        fb.init({appId: '1251898728230202', version: 'v2.7'})
      }
    }
  }

  ngOnInit() {
    this.seoObject['title'] = "Cresci la tua impresa, facile come fissare un tassello";
    this.seoObject['description'] = "Passa alla migliore piattaforma professionale per aumentare i tuoi clienti.";
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/starbook-logo-background.png";

    this.seoService.setTitle("Starbook | Registrazione impresa");
    this.seoService.setMetaElem('description', this.seoObject['description']);
    this.seoService.setOgElem('twitter:card', "summary_large_image");
    this.seoService.setOgElem('twitter:title', this.seoObject['title']);
    this.seoService.setOgElem('twitter:site', "@starbookco");
    this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
    this.seoService.setOgElem('twitter:description', this.seoObject['description']);
    this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
    this.seoService.setOgElem('og:title', this.seoObject['title']);
    this.seoService.setOgElem('og:description', this.seoObject['description']);
    this.seoService.setOgElem('og:url', this.seoObject['url']);
    this.seoService.setOgElem('og:image', this.seoObject['image_url']);
    this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);

    this.route.params.subscribe((params: Params) => {
      this.page = params['page']
      if (isBrowser) {window.scrollTo(0, 0)}
      if (this.page==='quotations') {

      }
      else {
        // this.page = null
        this.router.navigate(['/company'])
        // this.router.navigate([''])
      }
    })
  }

  continueWithFacebook(route) {
    // console.log('fb login status');
    // console.log('fb login status: ' + JSON.stringify(this.fb.getLoginStatus()));
    this.fb.logout()
    this.fb.login().then((res: LoginResponse) => {
      // console.log('LoginResponse login status: ' + JSON.stringify(res.authResponse));
      let fb_token = res.authResponse.accessToken
      this.authServics.facebookLogin(fb_token).then((userData) => {
        this.router.navigate([route])
      }).catch((error) => {
        // console.log("authServics login error: " + error);
      })
    }).catch((error) => {
      // console.log("fb login error: " + error);
    })
  }

  registerCompany() {
    this.router.navigate(["/auth/worker"])
  }
  publishService() {
    this.router.navigate(["/insert/product"])
  }
}
