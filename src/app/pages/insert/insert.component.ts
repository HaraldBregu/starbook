import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { isBrowser } from "angular2-universal";
import { CommonService } from '../../shared/common.service';

require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html'
})

export class InsertComponent implements OnInit {
  public emailPattern: any;
  public steps = []
  public step = ''
  public Service = {}
  public state = {
    loading:false,
    title_error: null,
    pricing_error: null,
    picture_file_loading: false,
    picture_file_error: null,
  }
  public logo = '';
  public currentUser;

  public signupParameters = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: {},
    password: '',
  }
  public signup_state = {
    loading: false,
    button_title: "Registrati",
    error_message: null,
    email_error: null,
    first_name_error: null,
    last_name_error: null,
    phone_error: null,
    address_error: null,
    password_error: null,
  }
  public loginParameters = {
    email: '',
    password: ''
  }
  public login_state = {
    loading: false,
    button_title: "Accedi",
    error_message: null,
    email_error: null,
    password_error: null,
  }
  public profile_picture = {
    url: '',
    file: null
  }
  public profile_picture_state = {
    url_error: '',
    file_error: null
  }
  public usr = ''

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private navigationService: NavigationService, private commonService: CommonService) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (this.commonService.readObjectForKey("insert_service")) {
      this.Service = this.commonService.readObjectForKey("insert_service")
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (isBrowser) {
        window.scrollTo(0, 0)
        this.currentUser = JSON.parse(localStorage.getItem('auth'))
      }
      this.step = params['step']
      if (this.currentUser) {
        this.steps = ['product', 'pricing', 'end']
      } else {
        this.steps = ['product', 'pricing', 'register', 'end']
        if (this.step==='register' || this.step==='login' || this.step==='recover') {
          this.steps[2] = this.step
        }
      }

      if (this.step==='product') {

      }
      else if (this.step==='pricing') {

      }
      // else if (this.step==='picture') {
      //
      // }
      else if (this.step==='register') {

      }
      else if (this.step==='login') {

      }
      else if (this.step==='end') {

      }
      else {
        this.router.navigate(['insert/product']);
      }

    })
  }

  undoStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var previousStep = this.steps[currentStepIndex-1]
    if (this.step==="product") {
      this.router.navigate(['company']);
    } else {
      this.router.navigate(['insert/' + previousStep]);
    }
  }
  nextStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var nextStep = this.steps[currentStepIndex+1]
    if (this.step==='product') {
      this.state.title_error = null
      if (!this.Service['title'] || this.Service['title'].length===0 || !/\S/.test(this.Service['title'])) {
        this.commonService.saveObjectForKey(this.Service, "insert_service")
        this.state.title_error = "Per favore, inserisci un titolo."
        return;
      }
    }
    else if (this.step === 'pricing') {
      this.state.pricing_error = null
      if (!this.Service['price'] || !this.Service['unit']) {
        this.commonService.saveObjectForKey(this.Service, "insert_service")
        this.state.pricing_error = "Per favore, compila i campi richiesti."
        return;
      }
      if (this.currentUser) {
        if (this.state.loading) {return}
        this.state.loading = true
        this.saveServiceForAccountId(this.currentUser._id)
        return
      }
    }
    else if (this.step === 'end') {
      this.router.navigate(['services']);
      return;
    }
    this.commonService.saveObjectForKey(this.Service, "insert_service")
    this.router.navigate(['insert/' + nextStep]);
  }

  signup() {
    if (this.signup_state.loading) { return; }
    this.signup_state.email_error = null;
    this.signup_state.first_name_error = null;
    this.signup_state.last_name_error = null;
    this.signup_state.phone_error = null;
    this.signup_state.password_error = null;
    if (this.signupParameters.email.length===0 || this.signupParameters.firstname.length===0 || this.signupParameters.lastname.length===0 || this.signupParameters.phone.length===0 || this.signupParameters.password.length===0) {
      if (!this.emailPattern.test(this.signupParameters.email)) {
        this.signup_state.email_error = "Inserisci un indirizzo email corretto";
      }
      this.signup_state.email_error = (this.signupParameters.email.length===0) ? "Inserisci un indirizzo email" : null;
      this.signup_state.first_name_error = (this.signupParameters.firstname.length===0) ? "Inserisci un nome" : null;
      this.signup_state.last_name_error = (this.signupParameters.lastname.length===0) ? "Inserisci un cognome" : null;
      this.signup_state.phone_error = (this.signupParameters.phone.length<9) ? "Inserisci un numero di telefono corretto" : null;
      this.signup_state.password_error = (this.signupParameters.password.length===0) ? "Inserisci una password" : null;
      return;
    }
    this.signup_state.loading = true;
    this.signup_state.button_title = "Registrando...";
    var account = {
      email:this.signupParameters.email,
      password:this.signupParameters.password,
      phone_number:this.signupParameters.phone,
      profile: {
        firstname:this.signupParameters.firstname,
        lastname:this.signupParameters.lastname
      }
    }
    this.authService.registerWorker(account).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.saveServiceForAccountId(data._id)
      this.saveProfilePictureToPath(this.profile_picture.file, 'accounts/' + data._id + '/avatar/0')
    }).catch((error) => {
      this.signup_state.loading = false;
      this.signup_state.button_title = "Registrati";
      switch (error) {
        case 409:
        this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
          break;
        case 422:
        this.signup_state.error_message = "Inserisci tutti i campi richiesti";
          break;
        case 404:
        this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
          break;
        default:
        this.signup_state.error_message = null;
      }
    });
  }
  login() {
    if (this.login_state.loading) { return; }
    this.login_state.email_error = null;
    this.login_state.password_error = null;
    if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
      this.login_state.email_error = (this.loginParameters.email.length === 0) ? "Inserisci un indirizzo email" : null;
      this.login_state.password_error = (this.loginParameters.password.length === 0) ? "Inserisci una password" : null;
      return;
    }
    this.login_state.loading = true;
    this.login_state.button_title = "Accedendo...";
    this.authService.login(this.loginParameters.email, this.loginParameters.password).then((data) => {
      this.navigationService.updatePersonalMenu(data);
      this.saveServiceForAccountId(data._id)
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

  saveServiceForAccountId(account_id) {
    this.Service['supplier_id'] = account_id
    this.Service['price'] *= 100
    this.commonService.createService(this.Service).then((data) => {
      var file = this.Service['picture_file']
      if (file) {
        var path = 'services/' + data.result._id + '/cover/0'
        this.saveServicePictureToPath(file, path)
      } else {
        this.state.loading = false
        this.login_state.loading = false;
        this.login_state.button_title = "Accedi";
        this.login_state.error_message = null;
        this.signup_state.loading = false;
        this.signup_state.button_title = "Registrati";
        this.signup_state.error_message = null;
        this.commonService.deleteObjectForKey("insert_service")
        this.router.navigate(['insert/end'])
      }
    }).catch((error) => {})
  }
  saveServicePictureToPath(file, path) {
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
      this.commonService.deleteObjectForKey("insert_service")
      if (!error) {
        this.state.loading = false
        this.login_state.loading = false;
        this.login_state.button_title = "Accedi";
        this.login_state.error_message = null;
        this.signup_state.loading = false;
        this.signup_state.button_title = "Registrati";
        this.signup_state.error_message = null;
        this.state.picture_file_loading = false;
        this.state.picture_file_error = null
      } else {
        this.state.picture_file_loading = false;
        this.state.picture_file_error = null
      }
      this.router.navigate(['insert/end'])
    })
  }

  selectServicePicture(fileInput:any) {
    this.logo = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.logo = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.Service['picture_file'] = this.logo
    this.state.picture_file_error = null
  }
  selectProfilePicture(fileInput:any) {
    this.profile_picture.url = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.profile_picture.url = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0])
    this.profile_picture.file = this.profile_picture.url
    this.profile_picture_state.file_error = null
  }

  changeToLogin() {
    this.steps[2] = 'login'
    this.step = 'login'
    this.router.navigate(['insert/login'])
  }
  changeToSignup() {
    this.steps[2] = 'register'
    this.step = 'register'
    this.router.navigate(['insert/register'])
  }
  changeToRecoverPassword() {
    this.steps[2] = 'recover'
    this.step = 'recover'
    this.router.navigate(['insert/recover'])
  }

  saveProfilePictureToPath(file, path) {
    if (file) {
      let AWSService = (<any>window).AWS;
      AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
      AWSService.config.secretAccessKey = "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";
      let bucket = new AWSService.S3()
      let params = {Bucket: 'starbook-s3', Key:path, Body:file, ACL:"public-read"}
      bucket.upload(params, (error, res) => {
        if (!error) {
          // console.log('res upload file: ' + JSON.stringify(res));
        } else {
          // console.log('error upload file: ' + error);
        }
      })
    }
  }

  // UTILS
  updatePrice() {
    let value = parseInt(this.Service['price']);
    if (isNaN(value) || value === 0 ) {
      this.Service['price'] = null
    } else if (!this.Service['price']) {
      this.Service['price'] = 0
    } else {
      this.Service['price'] = value
    }
  }
  updateTitle() {
    this.Service['title'] = this.Service['title'].replace(/[^a-zA-Z0-9,èòàùéì'" ]/g, "")
    this.Service['title'] = this.Service['title'].charAt(0).toUpperCase() + this.Service['title'].slice(1);
  }
  setProgressWidth() {
    var numSteps = this.steps.length;
    var currentStep = this.steps.indexOf(this.step) + 1
    return 100/numSteps * currentStep + '%'
  }
}
