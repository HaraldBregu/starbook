import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";
import { AuthService } from '../../shared/auth.service';
import { ContactService } from '../../shared/contact.service';
import { SeoService } from '../../shared/seo.service';
import { CommonService } from '../../shared/common.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
  public page = ''
  public emailPattern: any;
  public email_verification = {
    title: 'Verificando la tua email',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public password_verification = {
    title: 'Verificando la nuova password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public new_password_creation = {
    title: 'Inserisci una password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    password_field: {
      title:'Crea una password sicura',
      value: '',
      visible: true
    },
    button: {
      title : 'Crea password',
      visible: true
    },
    code: ''
  }
  public loginParameters = {
    email: '',
    password: ''
  };
  public login_state = {
    loading: false,
    button_title: "Accedi",
    error_message: null,
    email_error: null,
    password_error: null,
  };
  public Signup = {
    profile : {
      firstname: '',
      lastname: '',
    },
    business : {
      name : '',
    },
    email: '',
    password: ''
  };
  public Signup_State = {
    creating: false,
    loading: false,
    created: false,
    error_message: null,
  };
  public profession = '';
  public currentUser;
  public seoObject = {}

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
      tagline: ''
    },
    price: {
      hourly:0,
    }
  }
  public Password = {
    old:'',
    new: '',
    confirm: ''
  }
  public Picture = {
    url: '',
    file: null
  }

  public registration_state = {
    loading: false,
    message_error: null,
    success_error: null,
  }

  public picture_state = {
    loading: false,
    url_error: '',
    file_error: null
  }

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private profileService: ProfileService, private authService: AuthService, private seoService: SeoService, private contactService: ContactService, private fb: FacebookService, private commonService: CommonService) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (isBrowser) {
      window.scrollTo(0, 0)
      this.currentUser = JSON.parse(localStorage.getItem('auth'))
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

      this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";
      this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;

      this.route.queryParams.subscribe((params: Params) => {
        if (this.page==='login' && !this.currentUser) {
          this.navigationService.updateMessage('Accedi al tuo account')

          this.seoObject['title'] = "Accedi | Starbook"
          this.seoObject['description'] = "Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi."
        }
        else if (this.page==='signup' && !this.currentUser) {
          this.navigationService.updateMessage('Iscriviti su Starbook')

          this.seoObject['title'] = "Iscriviti | Starbook"
          this.seoObject['description'] = "Hai una professione, un attivita o un'azienda e vuoi promuoverla? Iscriviti su Starbook gratuitamente e crea la tua pagina professionale."
        }
        else if (this.page === 'password_recovery'&&!this.currentUser) {
          this.navigationService.updateMessage('Recupera password')

          this.seoObject['title'] = "Starbook | Recupera password";
          this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";
        }
        else if (this.page === 'email_verification') {
          this.navigationService.updateMessage('Verifica la tua email')

          var code = params['code']
          if (code) {
            this.email_verification.spinner.visible = true;
            this.profileService.verifyEmail(code).then((object) => {
              this.email_verification.title = 'Email verificato!';
              this.email_verification.spinner.visible = false;
              this.email_verification.success.visible = true;
              this.email_verification.button.visible = true;
            }).catch((error) => {
              this.email_verification.title = 'Errore verifica email!';
              this.email_verification.spinner.visible = false;
            });
          } else {
            this.router.navigate(['']);
          }
        }
        else if (this.page === 'password_verification') {
          this.navigationService.updateMessage('Nuova password')

          var code = params['code']
          if (code) {
            this.password_verification.spinner.visible = true;
            this.profileService.verifyNewPassword(code).then((object) => {
              this.password_verification.title = 'Nuova password verificata!';
              this.password_verification.spinner.visible = false;
              this.password_verification.success.visible = true;
              this.password_verification.button.visible = true;
            }).catch((error) => {
              this.password_verification.title = 'Errore verifica password!';
              this.password_verification.spinner.visible = false;
            });
          } else {
            this.router.navigate(['']);
          }
        }
        else if (this.page === 'create_new_password') {
          this.navigationService.updateMessage('Crea nuova password')

          var code = params['code']
          if (!code) {
            this.router.navigate(['']);
            return;
          }
          this.new_password_creation.code = code;
        }
        else if (this.page === 'token_auth') {
          this.seoObject['title'] = "Accedi"
          this.seoObject['description'] = "Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi."

          this.route.queryParams.subscribe(params => {
            var token = params['token']
            if (token) {
              this.commonService.postMethod("login", {token:token}).then((data) => {
                localStorage.clear()
                var account = data.result
                account['token'] = data.token
                localStorage.setItem('auth', JSON.stringify(account))
                this.navigationService.updatePersonalMenu(data.result)
                this.router.navigate(['/'])
              }).catch((error) => {
                this.router.navigate(['/login'])
                switch (error) {
                  case 404:
                    break;
                  case 401:
                    break;
                  default:
                }
              })
            }
          })
        }
        else if (!this.currentUser) {
          this.router.navigate(['/auth/login'])
        } else {
          this.router.navigate(['/'])
        }
      })
    })

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
  }

  login() {
    if (this.login_state.loading) {return;}
    if (this.loginParameters.email.length === 0 ||
      this.loginParameters.password.length === 0) {
      if (this.loginParameters.email.length === 0) {
        this.login_state.email_error = "Inserisci un indirizzo email";
      } else {
        this.login_state.email_error = null;
      }
      if (this.loginParameters.password.length === 0) {
        this.login_state.password_error = "Inserisci una password";
      } else {
        this.login_state.password_error = null;
      }
      return;
    }
    this.login_state.loading = true;
    this.login_state.button_title = "Accedendo...";
    this.authService.login(this.loginParameters.email, this.loginParameters.password).then((data) => {
      this.login_state.loading = false;
      this.login_state.button_title = "Accedi";
      this.login_state.error_message = null;
      this.router.navigate(['/'])
    }).catch((error) => {
      this.login_state.email_error = null;
      this.login_state.password_error = null;
      this.login_state.loading = false;
      this.login_state.button_title = "Accedi";
      switch (error) {
        case 404:
        this.login_state.error_message = "Non esiste un account con questa mail! Crea un nuovo account."
          break;
        case 401:
        this.login_state.error_message = "La password non è corretta!"
          break;
        default:
      }
    })
  }
  signup() {
    if (this.Signup_State.loading) {return}
    this.Signup_State.creating = true
    this.Signup_State.error_message = null
    if (!this.Signup.profile.firstname || !this.Signup.profile.lastname || !this.Signup.business.name || !this.Signup.email || !this.Signup.password) {
      this.Signup_State.error_message = "Per favore, inserisci tutti i campi richiesti."
      return
    }
    this.Signup_State.loading = true
    this.Signup.profile['fullname'] = this.Signup.profile.firstname.trim() + ' ' + this.Signup.profile.lastname.trim()
    this.authService.signup(this.Signup).then((data) => {
      this.navigationService.updatePersonalMenu(data)
      this.Signup_State.error_message = null
      this.Signup_State.creating = false
      this.Signup_State.loading = false
      this.Signup_State.created = true
      this.router.navigate(['/'])
    }).catch((error) => {
      this.Signup_State.creating = false
      this.Signup_State.loading = false
      this.Signup_State.created = false
      switch (error) {
        case 409:
        this.Signup_State.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere."
          break;
        case 422:
        this.Signup_State.error_message = "Inserisci tutti i campi richiesti"
          break;
        case 404:
        this.Signup_State.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi"
          break
        default:
        this.Signup_State.error_message = null
      }
    })
  }
  continueWithFacebook(route) {
    if (this.Signup_State.loading || this.login_state.loading) {return}
    this.login_state.loading = true
    this.Signup_State.loading = true
    this.fb.logout()
    this.fb.login().then((res: LoginResponse) => {
      let fb_token = res.authResponse.accessToken
      this.authService.facebookLogin(fb_token).then((userData) => {
        this.navigationService.updatePersonalMenu(userData)
        this.login_state.loading = false
        this.Signup_State.loading = false
        this.router.navigate([route])
      }).catch((error) => {
        this.login_state.loading = false
        this.Signup_State.loading = false
      })
    }).catch((error) => {
      // console.log("fb login error: " + error);
    })
  }
  recoverPassword(email) {
    this.authService.recovery(email).then((status) => {
      this.router.navigate(['']);
    }).catch((error) => {
      this.router.navigate(['']);
    });
  }

  registerWorker() {
    this.registration_state.message_error = null;
    if (this.Account.email.length===0 || this.Account.phone_number.length===0 ||
      this.Account.profile.firstname.length===0 || this.Account.profile.lastname.length===0 ||
      // this.Account.business.tagline.length===0 || this.Account.price.hourly<=0 ||
      this.Password.new.length===0) {
      this.registration_state.message_error = "Per favore, inserisci tutti i campi.";
      return
    }
    this.Account.price.hourly *= 100
    // if (this.Picture.url.length===0) {
    //   this.registration_state.message_error = "Per favore, carica una foto del tuo volto.";
    //   return
    // }
    this.Account['password'] = this.Password.new
    this.registration_state.loading = true
    this.authService.registerWorker(this.Account).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.registration_state.message_error = null;
      if (this.Picture.url.length>0) {
        this.savePictureToPath(this.Picture.file, 'accounts/' + data._id + '/avatar/0')
      } else {
        this.registration_state.loading = false
        this.router.navigate(['/'])
      }
    }).catch((error) => {
      this.registration_state.loading = false
      this.registration_state.message_error = null;
      switch (error) {
        case 409:
        this.registration_state.message_error = "Questo indirizzo email è gia in uso. Prova ad accedere.";
          break;
        case 422:
        this.registration_state.message_error = "Inserisci tutti i campi richiesti";
          break;
        case 404:
        this.registration_state.message_error = "C'è stato un errore sconosciuto, per favore riprova più tardi";
          break;
        default:
        this.registration_state.message_error = null;
      }
    })
  }

  getPicture() {
    if (this.Picture.url) {
      return this.Picture.url
    } else {
      return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/website/user_no_pic.png'
    }
  }
  selectProfilePicture(fileInput:any) {
    this.Picture.url = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.Picture.url = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.Picture.file = this.Picture.url
  }
  savePictureToPath(file, path) {
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
      this.registration_state.loading = false
      this.router.navigate(['account/profile'])
      if (!error) {

      } else {

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

  sendEmail(subject, message) {
    var email = {
      subject : subject,
      message : message
    }
    this.contactService.sendEmail(email).then((response) => {}).catch((error) => {});
  }
  createNewPassword(password) {
    this.new_password_creation.spinner.visible = true;
    this.profileService.createNewPassword(this.new_password_creation.code, password)
    .then((object) => {
      this.new_password_creation.title = 'Nuova password creata!';
      this.new_password_creation.spinner.visible = false;
      this.new_password_creation.success.visible = true;
      this.new_password_creation.button.visible = true;
    })
    .catch((error) => {
      this.new_password_creation.title = 'Errore creazione password!';
      this.new_password_creation.spinner.visible = false;
    });
  }
}
