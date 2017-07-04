import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { AnalyticsService } from '../../shared/analytics.service';
import { AuthService } from '../../shared/auth.service';
import { ContactService } from '../../shared/contact.service';
import { SeoService } from '../../shared/seo.service';
import { PopupsService } from '../../popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { CommonService } from '../../shared/common.service';

require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public emailPattern: any;
  subscription: Subscription;
  public page = ''
  public tabs = [
    {name: 'Profilo', route: 'profile', icon:"fa-info"},
    {name: 'Servizi', route: 'services', icon: "fa-credit-card"},
    {name: 'Recensioni', route: 'reviews', icon: "fa-credit-card"},
    {name: 'Impostazioni', route: 'settings', icon:"fa-cog"},
  ]

  public Account = {}
  public account_state = {
    loading: false,
    firstname_error: null,
    lastname_error: null,
  }
  public Picture = {
    url: '',
    file: null
  }
  public picture_state = {
    loading: false,
    url_error: '',
    file_error: null
  }

  public logo = '';

  public Services = []

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private profileService: ProfileService, private analyticsService: AnalyticsService, private authService: AuthService, private seoService: SeoService, private contactService: ContactService, private popupsService: PopupsService, private commonService: CommonService) {
    this.navigationService.updateMessage('Account');
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (isBrowser) {
      var auth = localStorage.getItem('auth')
      if (!auth) {
        this.router.navigate(['/'])
        return;
      }
      this.Account = JSON.parse(localStorage.getItem('auth'));
      // console.log(JSON.stringify(this.Account));
      this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
        switch (action.type) {
          case 'logout':
          if (isBrowser) {
            if (localStorage.getItem('auth') !== null) {
              localStorage.removeItem('auth');
            }
          }
          this.navigationService.updatePersonalMenu(false);
          this.router.navigate(['/']);
          break;
        }
      })
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      if (this.page==="services") {
        this.commonService.getMyServices().then((data) => {
          console.log('service data' + JSON.stringify(data));
          this.Services = data.result;
        }).catch((error) => {
          console.log('service error' + JSON.stringify(error));
        })
      }
    })
  }

  saveInformations() {
    // console.log(JSON.stringify(this.Account));
    this.account_state.loading = true
    this.profileService.updateProfile(this.Account).then((data) => {
      if (data.success) {
        let profileData = {};
        if (isBrowser) {
          if (localStorage.getItem('auth') !== null) {
            localStorage.setItem('auth', JSON.stringify(this.Account));
          }
        }
        this.navigationService.updatePersonalMenu(this.Account);
        if (this.Picture.file) {
          this.saveProfilePictureToPath(this.Picture.file, 'accounts/' + this.Account['_id'] + '/avatar/0')
        } else {
          this.account_state.loading = false
        }
      }
    }).catch((error) => {
      this.account_state.loading = false
    })
  }

  saveProfilePictureToPath(file, path) {
    if (file) {
      let AWSService = (<any>window).AWS;
      AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
      AWSService.config.secretAccessKey = "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";
      let bucket = new AWSService.S3()
      let params = {Bucket: 'starbook-s3', Key:path, Body:file, ACL:"public-read"}
      bucket.upload(params, (error, res) => {
        this.account_state.loading = false
        if (!error) {
          // console.log('res upload file: ' + JSON.stringify(res));
        } else {
          // console.log('error upload file: ' + error);
        }
      })
    }
  }

  selectProfilePicture(fileInput:any) {
    this.picture_state.loading = true
    this.Picture.url = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.Picture.url = e.target.result;
      this.picture_state.loading = false
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.Picture.file = this.Picture.url
    this.picture_state.file_error = null
  }

  checkImageUrlFromAccount(account) {
    if (isBrowser) {
      var image = new Image()
      image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0';
      if (this.Picture.url) {
        return this.Picture.url
      } else {
        if (image.width > 0) {
          return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0';
        } else {
          return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/website/user_no_pic.png'
        }
      }
    }
  }
  checkImageUrlFromService(service) {
    if (isBrowser) {
      var image = new Image()
      image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
      if (image.width > 0) {
        return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
      } else {
        return ''
      }
    }
  }
  showService(service) {
    this.commonService.setObjectForKey(service, 'service')
    this.router.navigate(['services', service._id]);
  }
  createService() {
    this.router.navigate(['/insert/title']);
  }
  clickTabItem(route) {
    this.router.navigate(['/account/' + route]);
  }
  logout() {
    this.popupsService.activate({type: 'logout', data: {}});
  }
}
