import { isBrowser } from "angular2-universal";
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { CommonService } from '../../shared/common.service';
import { AuthService } from '../../shared/auth.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import * as globals from '../../globals';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html'
})
export class QuotationComponent implements OnInit {
  public quotation = {}
  public it = globals.it_calendar
  public Account = {}

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, private commonService: CommonService, private fb: FacebookService, private authServics: AuthService) {
    this.navigationService.updateMessage("Preventivo")
    if (isBrowser) {
      this.Account = JSON.parse(localStorage.getItem('auth'))
      window.scrollTo(0, 0);
      if (document.location.hostname === "www.starbook.co") {
        fb.init({appId: '1108461325907277', version: 'v2.7'})
      } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
        fb.init({appId: '1251898728230202', version: 'v2.7'})
      }
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let token = params['token']
      if (token) {
        this.commonService.getMethod('quotations?token=' + token).then((data) => {
          this.quotation = data.result
          // console.log('data: ' + JSON.stringify(data))
          this.commonService.putMethod('view/quotations/' + this.quotation['_id'], {}).then((data) => {
            // console.log('data: ' + JSON.stringify(data))
          }).catch((error) => {
            // console.log('error: ' + JSON.stringify(error))
          })
        }).catch((error) => {
          this.router.navigate([''])
        })
      } else {
        this.router.navigate([''])
      }
    })
  }

  continueWithFacebook() {
    this.fb.login().then((res: LoginResponse) => {
      let fb_token = res.authResponse.accessToken
      this.authServics.facebookLogin(fb_token).then((userData) => {
        this.commonService.putMethod('save/quotations/' + this.quotation['_id'], {}).then((data) => {
          this.router.navigate(['account/quotation'])
          // console.log('data: ' + JSON.stringify(data))
        }).catch((error) => {
          this.router.navigate(['account/quotation'])
          // console.log('error: ' + JSON.stringify(error))
        })
      }).catch((error) => {

      })
    }).catch((error) => {

    })
  }

  saveQuotation() {
    this.commonService.putMethod('save/quotations/' + this.quotation['_id'], {}).then((data) => {
      this.router.navigate(['account/quotation'])
      // console.log('data: ' + JSON.stringify(data))
    }).catch((error) => {
      this.router.navigate(['account/quotation'])
      // console.log('error: ' + JSON.stringify(error))
    })
  }

  description(quotation) {
    var string = quotation['description']
    // if (string) {
    //   console.log('desc: ' + string.replace(/\n/g, "<br />"))
    //   return string.replace(/\n/g, "<br />")
    // }
    // console.log('desc: ' + string);
    // var rep = string.replace(/\n/g, "<br />")
    // console.log('reps is: ' + rep);
    return string
  }
  address(quotation) {
    var address = quotation['address']
    if (address) {
      // console.log('address: ' + address);
      let street = address['street']
      let cap = address['postal_code']
      let city = address['city']
      return street + ', ' + cap + ' ' + city
    }
  }
  date(quotation) {
    var date = quotation['date']
    if (date) {
      return date
    }
  }

  formatedDateFromString(date) {
    let returnDate = '';
    if (date !== 'now') {
      let dateString = date.substring(0, date.length - 5);
      dateString = dateString.split('T');
      let dateComponents = dateString[0].split('-');
      let hourComponents = dateString[1].split(':');
      // returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
      returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1] - 1] + ' ' + dateComponents[0];
    } else {
      let currentDate = new Date();
      let day = currentDate.getDate();
      let month = 1 + currentDate.getMonth();
      let year = currentDate.getFullYear();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let seconds = currentDate.getSeconds();
      returnDate += year;
      returnDate += month > 9 ? '-' + month : '-0' + month;
      returnDate += day > 9 ? '-' + day : '-0' + day;
      returnDate += hours > 9 ? 'T' + hours : 'T0' + hours;
      returnDate += minutes > 9 ? ':' + minutes : ':0' + minutes;
      returnDate += seconds > 9 ? ':' + seconds + '.000Z' : ':0' + seconds + '.000Z';
    }
    return returnDate;
  }
  formatedAddressFromObject(address) {
    let returnAddress = '';
    if (address.street) {
      returnAddress += address.street
    }
    if (address.postal_code) {
      returnAddress += ' ' + address.postal_code
    }
    if (address.city) {
      returnAddress += ', ' + address.city
    }
    return returnAddress;
  }
}
