import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { JoinService } from '../../shared/join.service';
import { ShareService } from './share.service';
import { AnalyticsService } from '../../shared/analytics.service';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html'
})
export class ShareComponent implements OnInit {
  public emailPattern: any;
  public numPattern: any;
  public contacts = '';
  public sharelink = '';
  public currentUser;
  public invitation_state = {
    message_success: null,
    message_error: null
  };
  public serviceObject;
  public page = '';
  public Estimate = null;
  public estimate_state = {
    saved: false
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private joinService: JoinService,
    private shareService: ShareService,
    private analyticsService: AnalyticsService,
    private orderService: OrderService) {
    this.navigationService.updateMessage("Condividi");
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.numPattern = /^\d+$/;
    this.serviceObject = this.shareService.getObject();
    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      }
      this.route.params.subscribe((params: Params) => {
        window.scrollTo(0, 0);
        this.page = params['page']

        if (this.page === 'starbook') {
          this.navigationService.updateMessage("Condividi");
          if (localStorage.getItem('auth')) {
            this.sharelink =  document.location.protocol + '//'+ document.location.hostname + '/?ref=' + this.currentUser._id;
          }
        } else if (this.page === 'service') {
          this.navigationService.updateMessage("Condividi servizio");
          // this.sharelink = document.location.protocol + '//'+ document.location.hostname + this.router.url;
          // console.log('router url: ' + this.router.url);
          this.route.queryParams.subscribe(params => {
            var estimateParams = params['estimate'];
            if (estimateParams) {
              this.sharelink = document.location.protocol + '//'+ document.location.hostname + '/share/estimate?estimate=' + encodeURI(estimateParams);
              // console.log('share link is: ' + this.sharelink);
              try {
                var estimateObject = JSON.parse(estimateParams);
                this.Estimate = estimateObject;
              } catch (e) {
                this.router.navigate(['share/starbook']);
              }
            } else {
              this.router.navigate(['share/starbook']);
            }
          });
        } else if (this.page === 'estimate') {
          this.navigationService.updateMessage("Preventivo");
          this.route.queryParams.subscribe(params => {
            var estimateParams = params['estimate'];
            if (estimateParams) {
              try {
                var estimateObject = JSON.parse(estimateParams);
                this.Estimate = estimateObject;
              } catch (e) {
                this.router.navigate(['share/starbook']);
              }
            } else {
              this.router.navigate(['share/starbook']);
            }
          });

        }  else {
          this.router.navigate(['share/starbook']);
        }
      })
    }
  }

  ngOnInit() {

  }

  startWizard() {
    this.analyticsService.sendEvent({category:'Share', action: 'Start Wizard', label: "Order Campain"});
    this.orderService.updateWizardData(this.Estimate);
    this.router.navigate(['order/summary']);
    return false;
  }
  saveEstimate() {
    if (this.estimate_state.saved === false) {
      this.estimate_state.saved = true;
      this.saveEstimateQuotationToLocal(this.Estimate)
    }
  }

  sendInvitations() {
    var phone_numbers = [];
    var email_addresses = [];
    var strings = this.contacts.split(',');
    for (var i = 0; i < strings.length; i++) {
      var string = strings[i];
      string = string.replace(/\s/g, '');
      if (this.emailPattern.test(string)) {
        email_addresses.push(string);
      } else if (this.numPattern.test(string)) {
        phone_numbers.push(string);
      }
    }
    var phones = '';
    for (var i = 0; i < phone_numbers.length; i++) {
      var p = phone_numbers[i]
      phones += (i != 0) ? ',' : ''
      phones += p
    }

    var emails = '';
    for (var i = 0; i < email_addresses.length; i++) {
      var e = email_addresses[i]
      emails += (i != 0) ? ',' : ''
      emails += e
    }
    if (phones==='' && emails==='') {
      this.invitation_state.message_success = null;
      this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
      return;
    }
    this.invitation_state.message_success = null;
    this.invitation_state.message_error = null;
    this.joinService.sendInvitations(this.sharelink, phones, emails).then((response) => {
      // console.log('response: ' + JSON.stringify(response));
      this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
      // this.contacts = '';
    }).catch((error) => {
      // console.log('error: ' + JSON.stringify(error));
    });
  }
  shareOnFacebook() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnTwitter() {
    if (isBrowser) {
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      console.log('share link is: ' + this.sharelink);
      window.open("https://twitter.com/home?status=" + this.sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnLinkedin() {
    if (isBrowser) {
      let link = this.sharelink;
      let title = "Titolo";
      let summary = "Summary";
      let source = "";
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnGoogle() {
    if (isBrowser) {
      let link = this.sharelink;
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://plus.google.com/share?url=" + link,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareWithEmail() {
    if (isBrowser) {
      let message = "Ciao, utilizza il link sotto per ricevere 5% di scondo sui servizi Starbook. \n" + this.sharelink;
      let subject = "Promozione Starbook"
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message),
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  copyLink( value: string ) : void {
    // console.group( "Clipboard Success" );
    // console.log( value );
    // console.groupEnd();
  }
  copyError( error: Error ) : void {
    // console.group( "Clipboard Error" );
    // console.error( error );
    // console.groupEnd();
  }

  ///////////////////////////
  ////////// ORDER //////////
  ///////////////////////////
  saveEstimateQuotationToLocal(object) {
    if (isBrowser) {
      if (!localStorage.getItem('estimates')) {
        var estimates = [];
        estimates.push(object);
        localStorage.setItem('estimates', JSON.stringify(estimates));
      } else {
        var estimates = [];
        estimates = JSON.parse(localStorage.getItem('estimates'))
        var objectExist = false;
        for (var i in estimates) {
          if (JSON.stringify(object) === JSON.stringify(estimates[i])) {
            objectExist = true;
          }
        }
        if (objectExist===false) {
          estimates.push(object);
          localStorage.setItem('estimates', JSON.stringify(estimates));
        }
      }
    }
  }
}
