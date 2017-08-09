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

  constructor(
    private commonService: CommonService,
    private profileService: ProfileService,
    private router: Router,
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private joinService: ContactService,
    private seoService: SeoService) {
    this.navigationService.updateMessage('');
  }

  ngOnInit() {
    if (isBrowser) {
      this.route.params.subscribe(params => {
        window.scrollTo(0, 0)
        this.page = params['page']
        if (this.page==='' || this.page===undefined) {
          if (localStorage.getItem('auth') !== null) {
            this.Account = JSON.parse(localStorage.getItem('auth'))
          }
        } else {
          this.profileService.getAccountById(this.page).then((data) => {
            if (data.success) {
              // console.log(JSON.stringify(data.result));
              this.Account = data.result
            }
          }).catch((error) => {
            // console.log(JSON.stringify(error));
          })
        }
      })
    }


    this.seoObject['title'] = "Visita il mio profilo Starbook";
    this.seoObject['description'] = "Crea il tuo profilo professionale su Starbook gratis.";
    this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
    this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";

    this.seoService.setTitle("Visita il mio profilo Starbook");
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

  bookProfile() {
    var OrderService = {}
    OrderService['_id'] = null
    OrderService['title'] = 'Appuntamento: ' + this.Account.profile.fullname
    OrderService['details'] = []
    if (this.commonService.readObjectForKey("checkout_order")) {
      var current_checkout_order = this.commonService.readObjectForKey("checkout_order")
      current_checkout_order['services'] = [OrderService]
      this.commonService.saveObjectForKey(current_checkout_order, "checkout_order")
    } else {
      this.commonService.saveObjectForKey({services:[OrderService]}, "checkout_order")
    }
    this.router.navigate(['checkout/address']);
    return false;
  }

  // UTILS
  checkName(account) {
    if (account.business && account.business.name) {
      return account.business.name
    } else {
      return account.profile.fullname
    }
  }
  checkDescription(account) {
    if (account.business && account.business.description) {
      return account.business.description
    } else {
      return account.profile.description
    }
  }
  checkBigPicture(account) {
    if (isBrowser) {
      var picture = new Image()
      var logo = new Image()
      picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      if ((logo.width===0) && (picture.width>0)) {
        return picture.src
      } else if (((logo.width>0) && (picture.width>0)) || ((logo.width>0) && (picture.width===0))) {
        return logo.src
      } else if ((logo.width===0) && (picture.width===0)) {
        return '../assets/images/no_picture.png'
      }
    }
  }
  checkSmallPicture(account) {
    if (isBrowser) {
      var picture = new Image()
      var logo = new Image()
      picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
      logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
      if ((logo.width===0) && (picture.width>0)) {
        return '../assets/images/no_logo_blue.png'
      } else if ((logo.width>0) && (picture.width>0)) {
        return picture.src
      } else if ((logo.width>0) && (picture.width===0)) {
        return '../assets/images/no_picture.png'
      } else if ((logo.width===0) && (picture.width===0)) {
        return '../assets/images/no_logo_blue.png'
      }
    }
  }
}
