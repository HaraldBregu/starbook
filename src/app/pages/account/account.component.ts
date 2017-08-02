import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
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
    {name: 'Attività', route: 'company'},
    {name: 'Servizi', route: 'services', icon: "fa-credit-card"},
    // {name: 'Recensioni', route: 'reviews', icon: "fa-credit-card"},
    {name: 'Impostazioni', route: 'settings', icon:"fa-cog"},
  ]

  public Account = {
    email:'',
    phone_number: '',
    profile: {
      firstname: '',
      lastname:'',
      description: ''
    },
    business: {
      name:'',
      tagline: '',
      description: '',
      vat: ''
    },
    price: {
      hourly:0,
    }
  }
  public account_state = {
    loading: false,
    message_error: null,
    message_success: null,
    firstname_error: null,
    lastname_error: null,
  }
  public Password = {
    old: '',
    new: '',
    confirm: ''
  }
  public password_state = {
    loading: false,
    message_error: null,
    message_success: null,
    old_password_error: null,
    new_password_error: null,
    confirm_password_error: null,
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
  public Services = []

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private profileService: ProfileService, private authService: AuthService, private seoService: SeoService, private contactService: ContactService, private popupsService: PopupsService, private commonService: CommonService) {
    this.navigationService.updateMessage('Account');
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (isBrowser) {
      var auth = localStorage.getItem('auth')
      if (!auth) {
        this.router.navigate(['/'])
        return;
      }

      let account = JSON.parse(localStorage.getItem('auth'))
      if (!account['business']) {
        account['business'] = {
          name:'',
          tagline: ''
        }
      }
      if (!account['price']) {
        account['price'] = {
          hourly:0
        }
      }
      this.Account = account

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
          if (this.page === "Account") {
            this.router.navigate(['/'])
          }
          break;
        }
      })
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      if (isBrowser) { window.scrollTo(0, 0) }
      if (this.page==="services") {
        this.commonService.getMyServices().then((data) => {
          // console.log('service data' + JSON.stringify(data));
          this.Services = data.result;
        }).catch((error) => {
          // console.log('service error' + JSON.stringify(error));
        })
      }
      else if (this.page==="profile") {

      }
      else if (this.page==="company") {

      }
      else if (this.page==="reviews") {

      }
      else if (this.page==="settings") {

      }
      else {
        this.router.navigate(['/account/profile'])
      }
    })
  }

  saveInformations() {
    this.account_state.loading = true
    // if (this.Account.price.hourly>0) {
    //   this.Account.price.hourly *= 100
    // }
    this.profileService.updateProfile(this.Account).then((data) => {
      if (data.success) {
        let profileData = {};
        if (isBrowser) {
          this.Account['profile']['fullname'] = this.Account['profile']['firstname'] + ' ' + this.Account['profile']['lastname']
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
      let params = {
        Bucket: 'starbook-s3',
        Key:path,
        Body:file,
        ACL:"public-read",
        CacheControl: "public, max-age=8"
      }
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

  updateEmail() {
    if (this.account_state.loading) {return}
    if (this.Account['email'].length === 0) {
      this.account_state.message_error = "Per favore, inserisci un email!"
      return
    }
    this.account_state.loading = true
    this.account_state.message_error = null
    this.account_state.message_success = null
    this.profileService.changeEmail({email:this.Account['email']}).then((data) => {
      this.account_state.loading = false
      this.account_state.message_success = "Verifica la nuova email clicando il link che ti abbiamo inviato nella vecchia email."
    }).catch((error) => {
      this.account_state.loading = false
      this.account_state.message_error = null
      if (error.status === 401) {
        this.account_state.message_error = "Errore nel cambio email";
      }
      else if (error.status === 409) {
        this.account_state.message_error = "La nuova email scelta esiste gia, scegli un indirizzo diverso."
      }
    })
  }

  updatePassword() {
    if (this.password_state.loading) {return;}
    if (this.Password.old.length !== 0 && this.Password.new.length !== 0 && this.Password.confirm.length !== 0) {
      if (this.Password.new !== this.Password.confirm) {
        this.password_state.message_error = "Per favore, conferma correttamente la nuova password!";
        return;
      }
    }
    else if (this.Password.old.length === 0 || this.Password.new.length === 0 || this.Password.confirm.length === 0) {
      this.password_state.message_error = "Per favore, compila tutti i campi richiesti!";
      return;
    }
    this.password_state.loading = true;
    this.password_state.message_success = null;
    this.password_state.message_error = null;
    this.profileService.changePassword(this.Password).then((data) => {
      this.password_state.loading = false;
      this.Password.old = '';
      this.Password.new = '';
      this.Password.confirm = '';
      this.password_state.message_success = "Verifica la nuova password clicando il link che ti abbiamo inviato tramite mail.";
      this.password_state.message_error = null;
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
      this.password_state.loading = false;
      this.password_state.message_success = null;
      this.password_state.message_error = "Errore nel cambio password";
      if (error.status === 401) {
        this.password_state.message_error = "La password attuale inserita non è corretta.";
      }
      if (error.status === 422) {
        this.password_state.message_error = "Per favore, inserisci tutti i parametri richiesti correttamente.";
      }
    })
  }
  updatePrice() {
    let value = this.Account.price.hourly
    if (isNaN(value) || value === 0 || value < 0) {
      this.Account.price.hourly = 0
    } else if (!this.Account.price.hourly) {
      this.Account.price.hourly = 0
    } else {
      this.Account.price.hourly = value
    }
  }
  checkImageUrlFromAccount(account) {
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
  checkImageUrlFromService(service) {
    var image = new Image()
    image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
    if (image.width > 0) {
      return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
    } else {
      return ''
    }
  }
  showService(service) {
    this.commonService.setObjectForKey(service, 'service')
    this.router.navigate(['services', service._id]);
  }
  createService() {
    this.router.navigate(['/insert/product']);
  }
  clickTabItem(route) {
    this.router.navigate(['/account/' + route]);
  }
  logout() {
    this.popupsService.activate({type: 'logout', data: {}});
  }

  shareOnFacebook(service) {
    if (isBrowser) {
      // var sharelink = window.location.href
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + '/services/' + service['_id']
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnTwitter(service) {
    if (isBrowser) {
      // var sharelink = window.location.href
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + '/services/' + service['_id']
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://twitter.com/home?status=" + sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnLinkedin(service) {
    if (isBrowser) {
      // var sharelink = window.location.href
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + '/services/' + service['_id']
      let link = sharelink;
      let title = "Titolo";
      let summary = "Summary";
      let source = "";
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
}
