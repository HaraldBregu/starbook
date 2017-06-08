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
  public step = ''
  public Service = {}

  constructor(private router: Router, private route: ActivatedRoute, private analyticsService: AnalyticsService, private authService: AuthService, private navigationService: NavigationService ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.step = params['step'];
      if (isBrowser) {window.scrollTo(0, 0);}

      if (this.step === 'title') {
        this.navigationService.updateMessage("Titolo del servizio");
      } else if (this.step === 'price') {
        this.navigationService.updateMessage("Prezzo del servizio");
      }
    })
  }

  setProgressWidth() {
    if (this.step==='title') {
      return '20%';
    } else if (this.step==='price') {
      return '40%';
    } else {
      return '0%';
    }
  }

  fileEvent(fileInput:any) {
    let AWSService = (<any>window).AWS;
    // console.log(AWSService);
    let file = fileInput.target.files[0]
    AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
    AWSService.config.secretAccessKey = "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";
    // let bucket = new AWSService.S3({params:{Bucket:"starbook-s3"}})

    // function randomString(length, chars) {
    //     var mask = '';
    //     if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    //     if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     if (chars.indexOf('#') > -1) mask += '0123456789';
    //     if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    //     var result = '';
    //     for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    //     return result;
    // }
    // randomString(36, '#A')

    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    let bucket = new AWSService.S3()
    let params = {Bucket: 'starbook-s3', Key:'random_services/' + guid() + '.png', Body:file, ACL:"public-read"}
    bucket.upload(params, function(error, res){
      console.log('error: ' + error);
      console.log('res: ' + JSON.stringify(res));
    })
  }

  undoStep() {
    
  }
  saveStep(step) {
    if (step === 'title') {
      this.router.navigate(['insert/price']);
    } if (step === 'price') {
      this.router.navigate(['insert/picture']);
    } else {
      console.log('Service is: ' + JSON.stringify(this.Service));
    }
  }

}
