import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { OrderService, IAddress } from './order.service';
import { PopupsService } from '../popups/popups.service';
import { AnalyticsService } from '../shared/analytics.service';
import { ProfileService } from '../shared/profile.service';
import { ShareService } from '../pages/share/share.service';

import { Subscription }   from 'rxjs/Subscription';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy {
  @Input() orderData;
  @Input('orderIsFull') orderIsFull;
  @Input() price_state;

  public currentUser;
  public estimate_state = {
    saved: false
  };

  constructor(private orderService: OrderService, private popupsService: PopupsService, private analyticsService: AnalyticsService, private profileService: ProfileService, private router: Router, private shareService: ShareService) {
    if (isBrowser) {
      if (localStorage.getItem('auth')) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      }
    }
  }

  ngOnInit() {

  }

  onResize() {
    if (isBrowser) {
    }
  }

  ngOnDestroy() {
    if (isBrowser) {
    }
  }

  ///////////////////////////
  //// PRICE BLOCK //////////
  ///////////////////////////
  getFinalPrice() {
    let total_price = this.orderData.totalPrice;
    if (!this.price_state.is_referral) {
      return total_price;
    } else {
      return (total_price - (total_price * 0.05));
    }
  }
  getInitialPrice() {
    return this.orderData.totalPrice;
  }
  getUpFront() {
    return Math.round((this.getFinalPrice() * 0.3));
  }
  getTiming() {
    var days = this.getInitialPrice()/45000;
    if (days < 0.5) {
      return "1/2 Giorno";
    } else if (days > 0.5 && days < 1.5) {
      return Math.round(days) + " Giorno";
    } else {
      return Math.round(days) + " Giorni";
    }
  }

  wizardData() {
    var object = {
      service_id: this.orderData.service_id,
      title: this.orderData.title,
      details: this.orderData.details,
      referral_id: this.price_state.referral_id,
      price: {
        final: this.getFinalPrice(),
        initial: this.getInitialPrice(),
        currency: 'eur'
      },
      payment: {
        upfront: this.getUpFront()
      },
      timing: {
        days: this.getTiming()
      }
    };
    // var newObject = object;
    // newObject.details.push({title:this.orderData.title, type:"service"});
    // newObject.details.push(this.orderData.details)
    // newObject.details.unshift({title:this.orderData.title, type:"service"})
    let hasTitle = false;
    for (var i in object.details) {
      if (object.details[i]['type'] === "service") {
        hasTitle = true;
      }
    }
    if (hasTitle===false) {
      object.details.unshift({title:this.orderData.title, type:"service"})
    }

    return object;
  }

  startWizard() {
    if (this.price_state.loading) {return;}
    this.analyticsService.sendEvent({category:'Order', action: 'Wizard', label: "Start"});
    var newWizardData = this.wizardData();
    this.orderService.updateWizardData(newWizardData);
    this.router.navigate(['order/summary']);
    return false;
  }
  share() {
    this.analyticsService.sendEvent({category:'Share Service', action: 'Click To Share', label: "Share Campain Research"});
    this.shareService.setObject(this.wizardData());
    var newWizardData = this.wizardData();
    let navigationExtras: NavigationExtras = {queryParams:{estimate:JSON.stringify(newWizardData)}};
    this.router.navigate(['share/service'], navigationExtras);
  }
  saveEstimate() {
    if (this.estimate_state.saved === false) {
      this.estimate_state.saved = true;
      var newWizardData = this.wizardData();
      this.saveEstimateQuotationToLocal(newWizardData)
    }
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
