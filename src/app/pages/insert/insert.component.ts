import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import { AuthService } from '../../shared/auth.service';
import { NavigationService } from '../../shared/navigation.service';
import { isBrowser } from "angular2-universal";

require('aws-sdk/dist/aws-sdk')

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html'
})

export class InsertComponent implements OnInit {
  public steps = ['title', 'price', 'picture', 'register', 'end']
  public step = ''
  public Service = {}
  public logo = '';

  public signupParameters = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public signup_state = {
    loading: false,
    button_title: "Registrati",
    error_message: null,
    email_error: null,
    first_name_error: null,
    last_name_error: null,
    phone_error: null,
    password_error: null,
    confirm_password_error: null
  };

  constructor(private router: Router, private route: ActivatedRoute, private analyticsService: AnalyticsService, private authService: AuthService, private navigationService: NavigationService ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.step = params['step'];
      if (isBrowser) {window.scrollTo(0, 0);}
      if (this.step === 'title') {
        // this.navigationService.updateMessage("Titolo, Immagine, Prezzo");
      } else if (this.step === 'price') {
        // this.navigationService.updateMessage("Prezzo del servizio");
      }
    })
  }

  setProgressWidth() {
    var numSteps = this.steps.length;
    var currentStep = this.steps.indexOf(this.step) + 1
    return 100/numSteps * currentStep + '%'
  }

  inputFile() {
    console.log('input file');
  }
  fileEvent(fileInput:any) {
    this.logo = fileInput.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.logo = e.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0]);

    // let file = fileInput.target.files[0]
    console.log('file: ' + this.logo);

    // let AWSService = (<any>window).AWS;
    // // console.log(AWSService);
    // AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
    // AWSService.config.secretAccessKey = "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";
    // function guid() {
    //   function s4() {
    //     return Math.floor((1 + Math.random()) * 0x10000)
    //       .toString(16)
    //       .substring(1);
    //   }
    //   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    //     s4() + '-' + s4() + s4() + s4();
    // }
    //
    // let bucket = new AWSService.S3()
    // let params = {Bucket: 'starbook-s3', Key:'random_services/' + guid() + '.png', Body:file, ACL:"public-read"}
    // bucket.upload(params, function(error, res){
    //   console.log('error: ' + error);
    //   console.log('res: ' + JSON.stringify(res));
    // })
  }

  undoStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var previousStep = this.steps[currentStepIndex-1]
    this.router.navigate(['insert/' + previousStep]);

    // if (this.step === "price") {
    //   this.router.navigate(['insert/title']);
    // } else if (this.step === "picture") {
    //   this.router.navigate(['insert/price']);
    // }
  }
  saveStep(step) {
    var currentStepIndex = this.steps.indexOf(this.step)
    var nextStep = this.steps[currentStepIndex+1]
    this.router.navigate(['insert/' + nextStep]);

    // if (step === 'title') {
    //   this.router.navigate(['insert/price']);
    // } if (step === 'price') {
    //   this.router.navigate(['insert/picture']);
    // }  if (step === 'picture') {
    //   this.router.navigate(['insert/register']);
    // } if (step === 'register') {
    //   this.router.navigate(['insert/end']);
    // } if (step === 'end') {
    //   // this.router.navigate(['insert/end']);
    // } else {
    //   console.log('Service is: ' + JSON.stringify(this.Service));
    // }
  }

}
