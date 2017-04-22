import { Component, OnInit } from '@angular/core';
import { isBrowser } from 'angular2-universal';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { JoinService } from '../../shared/join.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private joinService: JoinService) {
    this.navigationService.updateMessage("Condividi");
    // this.navigationService.updateMessage("Programma di affiliazione");
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.numPattern = /^\d+$/;
    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
        this.sharelink =  document.location.protocol + '//'+ document.location.hostname + '/?ref=' + this.currentUser._id;
      } else {
        this.router.navigate(['recruiter/partnerjoin']);
      }
    }
  }

  ngOnInit() {
    if (isBrowser) {
      window.scrollTo(0, 0);
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
      this.contacts = '';
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
  copyLink() {
    // console.log('copyLink');
    // Object.assign({}, 'copyLink link  link');
    // var successful = document.execCommand('copy');
    // window.prompt("Copy to clipboard: Ctrl+C", text);
    // window.prompt("Copy to clipboard: Ctrl+C", 'this is a texts');
  }
}
