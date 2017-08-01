import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { SeoService } from '../shared/seo.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  public seoObject = {}
  public page = null

  constructor(private router: Router, private route: ActivatedRoute, private seoService: SeoService, private authServics: AuthService, private fb: FacebookService) {
    if (isBrowser) {window.scrollTo(0, 0);}
  }

  ngOnInit() {
    this.seoObject['title'] = "Starbook | Il tuo futuro dipende dalle tue decisioni";
    this.seoObject['description'] = "Starbook è un online marketplace di mestieri e servizi professionali. Puoi inserire i servizi che offri e ricevere prenotazioni da clienti interessati.";
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/kayak-go-far.png";

    this.seoService.setTitle(this.seoObject['title']);
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
      if (this.page==='1') {

      }
      else {
        this.page = null
        // this.router.navigate([''])
      }
    })

    if (isBrowser) {
      window.scrollTo(0, 0)
      // let initParams: InitParams = {
      //   appId: '1108461325907277',
      //   xfbml: true,
      //   version: 'v2.7'
      // }
      let initParams: InitParams = {
        appId: '1251898728230202',
        xfbml: true,
        version: 'v2.7'
      }
      this.fb.init(initParams);
    }

  }

  continueWithFacebook() {
    // this.authServics.facebookLogin('EAARymGL9rToBALfkmkOljr2uQbHZBDmM9FgHm2ER7ocHEC11KfwbZCOXZC6wpLO9KShTN9P3645oTn3wbkI4IhkuoLK8ps6DVwDRCfrIVumtuzRRQVdRHlGRxN0aASchfvtOlbQQpx9A8s3DGMMIFyjOfYgpG3IugqLB9Pd97GZArNzgogJMRDAyXtjAEjgZD').then((userData) => {
    //   this.router.navigate(["/account/profile"])
    // }).catch((error) => {
    //   console.log('not logged in');
    // })

    this.fb.login().then((response: LoginResponse) => {
      console.log(JSON.stringify(response))
      var accessToken = response.authResponse.accessToken
      console.log('access token is: ' + accessToken);
      this.authServics.facebookLogin(accessToken).then((userData) => {
        this.router.navigate(["/account/profile"])
      }).catch((error) => {
        console.log('not logged in');
      })
    }).catch((error: any) => {
      console.error(error)
    })

    // if (isBrowser) {
    //   let left = Math.round((document.documentElement.clientWidth / 2) - 285);
    //   let facebookPopup = window.open(
    //     'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
    //       // '_blank',
    //       'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
    //   this.checkAccessToken(facebookPopup, 1);
    // }
  }
  checkAccessToken(facebookWindow: Window, context) {
    if (facebookWindow.closed) {
      let accessToken = localStorage.getItem('facebook_token');
      this.authServics.facebookLogin(accessToken).then((userData) => {
            if(!userData.phone_number) {
              console.log('is logged in');
              // this.closePopup(true);
              // this.finishPopupState = 'active';
              // this.finishPopupData.title = 'Completa il profilo';
              // this.finishPopupData.text.push('Per restare in contatto con i professionisti inserisci il tuo numero di telefono.');
              // this.finishPopupData.type = 'phone';
              // this.finishPopupData.data = { userData: userData };
              // if (this.loginData.type === 'fromOrder') {
              //   this.finishPopupData.from = 'order';
              // }
            } else if (!userData.email) {
              // this.closePopup(true);
              // ok
            } else {
              // this.closePopup(false);
            }
          })
          .catch((error) => {
            console.log('not logged in');
          });
    } else {
      let self = this;
      setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1)}, 200);
    }
  }

  registerCompany() {
    this.router.navigate(["/auth/worker"])
  }
  publishService() {
    this.router.navigate(["/insert/product"])
  }
}
