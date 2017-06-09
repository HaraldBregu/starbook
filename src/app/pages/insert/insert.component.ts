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
  public logo = '';

  constructor(private router: Router, private route: ActivatedRoute, private analyticsService: AnalyticsService, private authService: AuthService, private navigationService: NavigationService ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.step = params['step'];
      if (isBrowser) {window.scrollTo(0, 0);}
      if (this.step === 'title') {
        this.navigationService.updateMessage("Titolo, Immagine, Prezzo");
      } else if (this.step === 'price') {
        this.navigationService.updateMessage("Prezzo del servizio");
      }
    })
  }

  setProgressWidth() {
    if (this.step==='title') {
      return '25%';
    } else if (this.step==='price') {
      return '50%';
    } else if (this.step==='picture') {
      return '75%';
    } else {
      return '0%';
    }
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
    if (this.step === "price") {
      this.router.navigate(['insert/title']);
    } else if (this.step === "picture") {
      this.router.navigate(['insert/price']);
    }
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
