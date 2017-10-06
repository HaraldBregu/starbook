import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { Subscription }   from 'rxjs/Subscription';
import { SeoService } from '../../shared/seo.service';
import { ContactService } from '../../shared/contact.service';
import { isBrowser } from "angular2-universal";
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  public page = ''
  public logo = ''
  public seoObject = {}

  public Account = null
  public Message = {
    text : '',
    phone_number : '',
    email : ''
  }
  public Message_State = {
    loading : false,
    created : false,
    error_message : '',
    text_error : '',
    phone_number_error : '',
    email_error : ''
  }
  public CurrentAccount = null
  public popup = null

  constructor(private commonService: CommonService, private profileService: ProfileService, private router: Router, private navigationService: NavigationService, private route: ActivatedRoute, private joinService: ContactService, private seoService: SeoService) {
    this.navigationService.updateMessage('')
    if (isBrowser) {
      this.CurrentAccount = JSON.parse(localStorage.getItem('auth'))
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      if (this.page==='' || this.page===undefined) {
        if (localStorage.getItem('auth') !== null) {
          this.Account = JSON.parse(localStorage.getItem('auth'))
        }
      } else {
        this.profileService.getAccountById(this.page).then((data) => {
          if (data.success) {
            this.Account = data.result

            this.seoObject['title'] = this.checkCompanyName(this.Account)
            this.seoObject['description'] = this.checkTagline(this.Account)
            this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
            // this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png"
            this.seoObject['image_url'] = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1'
            // var logo = new Image()
            // logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1'
            // if (logo.width>0) {
            //   this.seoObject['image_url'] = logo.src
            // } else {
            //   this.seoObject['image_url'] = '../assets/images/no_logo.png'
            // }


            this.seoService.setTitle(this.checkCompanyName(this.Account));
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
        }).catch((error) => {
          // console.log(JSON.stringify(error))
          this.router.navigate(['/'])        //"username" : "universalcolor"
        })
      }
    })
  }

  businessName(){
    if (this.Account) {
      if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['name'] && this.Account['business']['name']!==null) {
          return this.Account['business']['name']
        }
      }
      else {
        return ""
      }
    }
  }
  checkCompanyName(account) {
    if (account.business && account.business.name) {
      return account.business.name
    } else {
      return account.profile.fullname
    }
  }
  checkTagline(account) {
    if (account.business && account.business.tagline) {
      return account.business.tagline
    } else {
      return false
    }
  }
  businessDescription(account) {
    if (account.business && account.business.description) {
      return account.business.description
    } else {
      return false
    }
  }
  checkBigPicture(account) {
    if (isBrowser) {
      // var picture = new Image()
      var logo = new Image()
      // picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      // if ((logo.width===0) && (picture.width>0)) {
      //   return picture.src
      // } else if (((logo.width>0) && (picture.width>0)) || ((logo.width>0) && (picture.width===0))) {
      //   return logo.src
      // } else if ((logo.width===0) && (picture.width===0)) {
      //   return '../assets/images/no_logo.png'
      // }
      if (logo.width>0) {
        return logo.src
        // return "{'background-image' : 'url('" + logo.src + "')'}"
      } else {
        return '../assets/images/no_logo.png'
        // return "{'background-image' : ' url('../assets/images/no_logo.png')'}"
      }
    }
  }
  checkSmallPicture(account) {
    return '../assets/images/no_logo_blue.png'
    // if (isBrowser) {
    //   var picture = new Image()
    //   var logo = new Image()
    //   picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
    //   logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
    //   if ((logo.width===0) && (picture.width>0)) {
    //     return '../assets/images/no_logo_blue.png'
    //   } else if ((logo.width>0) && (picture.width>0)) {
    //     return picture.src
    //   } else if ((logo.width>0) && (picture.width===0)) {
    //     return '../assets/images/no_picture.png'
    //   } else if ((logo.width===0) && (picture.width===0)) {
    //     return '../assets/images/no_logo_blue.png'
    //   }
    // }
  }
  sendPrivateMessage() {
    this.Message_State.loading = true
    this.Message_State.error_message = ""
    this.Message_State.text_error = ""
    this.Message_State.phone_number_error = ""
    this.Message_State.email_error = ""

    if (this.Message.text.length===0) {
      this.Message_State.loading = false
      this.Message_State.error_message = "Per favore inserisci un messaggio da inviare"
      this.Message_State.text_error = "errore"
      return
    } else if (!this.CurrentAccount && (this.Message.phone_number.length===0 || this.Message.email.length===0)) {
      this.Message_State.loading = false
      this.Message_State.phone_number_error = (this.Message.phone_number.length===0) ? "errore" : ""
      this.Message_State.email_error = (this.Message.email.length===0) ? "errore" : ""
      this.Message_State.error_message = "Per favore inserisci tutti i campi richiesti"
      return
    }


    if (!this.CurrentAccount) {
      this.Message['from'] = {
        account_id : null,
        email : this.Message.email,
        phone_number : this.Message.phone_number
      }
    }
    else if (this.CurrentAccount) {
      var phone = null
      if (this.CurrentAccount['phone_number'] && this.CurrentAccount['phone_number']!==null) {
        phone = this.CurrentAccount['phone_number']
      }
      else if (this.CurrentAccount['business'] && this.CurrentAccount['business']['phone_number'] && this.CurrentAccount['business']['phone_number']!==null) {
        phone = this.CurrentAccount['business']['phone_number']
      }
      this.Message['from'] = {
        account_id : this.CurrentAccount._id,
        email : this.CurrentAccount.email,
        phone_number : phone
      }
    }

    var phone = null
    if (this.Account['phone_number'] && this.Account['phone_number']!==null) {
      phone = this.Account['phone_number']
    }
    else if (this.Account['business']['phone_number'] && this.Account['business']['phone_number']!==null) {
      phone = this.Account['business']['phone_number']
    }
    this.Message['to'] = {
      account_id : this.Account._id,
      email : this.Account.email,
      phone_number : phone
    }

    this.commonService.postMethod('message', this.Message).then((data) => {
      // console.log(JSON.stringify(data))
      this.Message_State.created = true
      this.Message_State.loading = false
      this.popup = null
    }).catch((error) => {
      // console.log(JSON.stringify(error))
      if (error.status===400) {
      } else if (error.status===402) {
      }
      this.Message_State.loading = false
      this.Message_State.created = false
      this.popup = null
    })
  }
  getGoogleMapsLink(account) {
    if (account['address']['city']) {
      return "https://maps.google.com/?q=" + account['address']['city'] + ", " + account['address']['street']
    } else {
      return ""
    }
  }
  getPhoneNumber() {
    if (this.Account) {
      if (this.Account['phone_number'] && this.Account['phone_number']!==null) {
        return this.Account['phone_number']
      }
      else if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['phone_number'] && this.Account['business']['phone_number']!==null) {
          return this.Account['business']['phone_number']
        }
      }
      else {
        return ""
      }
    }
  }
  getEmailAddress() {
    if (this.Account) {
      if (this.Account['business'] && this.Account['business']!==null) {
        if (this.Account['business']['email'] && this.Account['business']['email']!==null) {
          return this.Account['business']['email']
        }
      }
      else if (this.Account['email'] && this.Account['email']!==null) {
        return this.Account['email']
      }
      else {
        return ""
      }
    }
  }
}
