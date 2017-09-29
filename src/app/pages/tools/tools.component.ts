import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { isBrowser } from "angular2-universal";
import { SeoService } from '../../shared/seo.service';
import { CommonService } from '../../shared/common.service';
import { AuthService } from '../../shared/auth.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
})
export class ToolsComponent implements OnInit {
  public page = ''
  public CurrentAccount = null
  public seoObject = {}

  public cap = ''
  public reachestimate_state = {
    loading : false,
    created : false,
    error_message : '',
    success_message : '',
    estimate_number : ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private seoService: SeoService, private commonService: CommonService, private authServics: AuthService, private fb: FacebookService) {
    this.navigationService.updateMessage("Strumento")
    if (isBrowser) {
      this.CurrentAccount = JSON.parse(localStorage.getItem('auth'))
      if (document.location.hostname === "www.starbook.co") {
        fb.init({appId: '1108461325907277', version: 'v2.7'})
      } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
        fb.init({appId: '1251898728230202', version: 'v2.7'})
      }
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      if (isBrowser) { window.scrollTo(0, 0) }

      if (this.page==="facebook_reachestimate") {
        this.seoObject['title'] = "Clienti su Facebook? Scopri quanti ci sono nella tua zona!";
        this.seoObject['description'] = "Molti sottovalitano l'importanza di questo social network quando si parla di pubblicità per le imprese e professionisti. Su Facebook puoi trovare milliaia di utenti e far conoscere la propria attività spendendo poco.";
        this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
        this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/facebook-reach-estimate.png";
      }
      else {
        this.router.navigate(['/company'])
      }

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

    })
  }

  continueWithFacebook(route) {
    if (route==='') {
      this.reachestimate_state.loading = true
      this.reachestimate_state.created = false

      this.fb.logout()
      this.fb.login().then((res: LoginResponse) => {
        // console.log('LoginResponse login status: ' + JSON.stringify(res.authResponse));
        let fb_token = res.authResponse.accessToken
        this.authServics.facebookLogin(fb_token).then((userData) => {
          // this.router.navigate([route])
          this.commonService.facebookReachestimate(this.cap).then((data) => {
            // console.log('success: ' + JSON.stringify(data));
            this.reachestimate_state.loading = false
            this.reachestimate_state.created = true
            this.reachestimate_state.success_message = "Copertura stimata nella tua zona"
            this.reachestimate_state.estimate_number = data.data.users
          }).catch((error) => {
            // console.log('error: ' + JSON.stringify(error));
            this.reachestimate_state.loading = false
            this.reachestimate_state.created = true
          })
        }).catch((error) => {
          this.reachestimate_state.loading = false
          this.reachestimate_state.created = true
          // console.log("authServics login error: " + error);
        })
      }).catch((error) => {
        // console.log("fb login error: " + error);
      })
    } else {
      this.fb.logout()
      this.fb.login().then((res: LoginResponse) => {
        let fb_token = res.authResponse.accessToken
        this.authServics.facebookLogin(fb_token).then((userData) => {
          this.router.navigate([route])
        }).catch((error) => {
        })
      }).catch((error) => {
      })
    }
  }
}
