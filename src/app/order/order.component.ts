import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService, IAddress } from './order.service';
import { PopupsService } from '../popups/popups.service';
import { AnalyticsService } from '../shared/analytics.service';
import { ProfileService } from '../shared/profile.service';
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

  constructor(private orderService: OrderService, private popupsService: PopupsService, private analyticsService: AnalyticsService, private profileService: ProfileService, private router: Router) {
  }

  ngOnInit() {

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

  startWizard() {
    this.analyticsService.sendEvent({category:'Order', action: 'Wizard', label: "Start"});

    if (this.price_state.loading) {return;}
    let wizardData = {
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
      }
    };
    
    wizardData.details.unshift({title:this.orderData.title, type:"service"})

    this.orderService.updateWizardData(wizardData);
    this.router.navigateByUrl('/order/summary');
    return false;
  }


  // changeTab(tab) {
  //   this.openedTab = tab;
  //   if (tab === 'TRADITIONAL') {
  //     this.multiplier = 1;
  //     this.message_0 = "Pagamento tradizionale. Hai la flessibilità di poter pagare il professionista a fine lavori nei modi tradizionali.";
  //   }
  //   if (tab === 'CARD') {
  //     this.multiplier = 0.98;
  //     this.message_0 = "Pagamento con carta. Prezzo garantito e sicuro. Con questa modalità hai diritto di sconti e agevolazioni.";
  //   }
  //   if (tab === 'LOAN') {
  //     this.multiplier = 0.99;
  //     this.message_0 = "Puoi richiedere un prestito per il lavoro che ti serve. Consigliamo questa opzione per lavori con un totale più di 2000 euro.";
  //   }
  // }

  getEstimatePrice(standardPrice) {
    // this.orderService.getEstimatePrice(event.query)
    // .then((addresses) => {
    //   this.addresses = [];
    //   this.addresses = addresses;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    return standardPrice/100;
  }

  // toggleTimepicker() {
  //   this.timePickerIsShow = !this.timePickerIsShow;
  // }
  //
  // openTimepicker() {
  //   this.timePickerIsShow = true;
  // }
  //
  // closeTimepicker() {
  //   this.timePickerIsShow = false;
  // }
  //
  // selectTime(time) {
  //   this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'select time'});
  //   this.Order.time = time;
  // }

  // getAddresses(event) {
  //   this.isAddressDirty = true;
  //   this.isAddressFull = false;
  //   if (event.query.length > 2) {
  //     this.orderService.getAddresses(event.query)
  //       .then((addresses) => {
  //         this.addresses = [];
  //         this.addresses = addresses;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }
  // selectAddress(value) {
  //   this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'select address'});
  //   if (value.isFull) {
  //     this.isAddressFull = true;
  //   } else {
  //     this.isAddressFull = false;
  //   }
  //   this.selectedAddress = value;
  // }
  // modifyAddress() {
  //   this.isAddressDirty = false;
  //   // this.isEnable = true;
  //   this.isAddressDirty = false;
  // }

/*
  showConfirmation() {
    this.analyticsService.sendEvent({category:'Order creation form', action: 'send form', label: 'start'});

    this.submitOrder = true;
    this.isAddressDirty = true;
    this.Order.street_number = '';
    this.Order.postal_code = '';
    this.Order.country_code = '';

    this.Order.street = this.selectedAddress.street;
    this.Order.street_number = this.selectedAddress.street_number;
    this.Order.city = this.selectedAddress.city;
    this.Order.postal_code = this.selectedAddress.postal_code;
    this.Order.province = this.selectedAddress.province;
    this.Order.country = this.selectedAddress.country;
    this.Order.country_code = this.selectedAddress.country_code;
    this.Order.formattedAddress = this.selectedAddress.formattedAddress;
    this.address = this.selectedAddress.street + ', ' + this.selectedAddress.street_number + ', ' + this.selectedAddress.city;

    if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
      this.isAddressFull = true;
    } else {
      this.isAddressFull = false;
    }

    this.showPreviewOrder();

    //////////////////////////////////////////////////////////////////////////
    // Version with requesting address after click 'Create an order' button //
    //////////////////////////////////////////////////////////////////////////
    // this.isLoading = true;
    // this.orderService.getAddresses(this.address)
    //     .then((address: IAddress[]) => {
    //       this.isLoading = false;
    //       if (address.length > 1) {
    //         for (var index in address) {
    //           var addr = address[index];
    //           var city_to_match = new RegExp(addr.city, 'i')
    //           var street_number_to_match = new RegExp(String(addr.street_number), 'i')
    //           if (this.address.match(city_to_match) && this.address.match(street_number_to_match)) {
    //             this.isAddressOne = true;
    //             this.Order.street = addr.street;
    //             this.Order.street_number = addr.street_number;
    //             this.Order.city = addr.city;
    //             this.Order.postal_code = addr.postal_code;
    //             this.Order.province = addr.province;
    //             this.Order.country = addr.country;
    //             this.Order.country_code = addr.country_code;
    //             this.Order.formattedAddress = addr.formattedAddress;
    //
    //             this.address = addr.street + ', ' + addr.street_number + ', ' + addr.city;
    //
    //             if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
    //               this.isAddressFull = true;
    //               this.isEnable = true;
    //             } else {
    //               this.isAddressFull = false;
    //               this.isEnable = false;
    //               this.isEnable = false;
    //             }
    //             this.showPreviewOrder()
    //             break;
    //           } else {
    //             this.isAddressOne = false;
    //             this.isEnable = true;
    //           }
    //         }
    //       } else if (0 in address) {
    //         this.isAddressOne = true;
    //         this.Order.street = address[0].street;
    //         this.Order.street_number = address[0].street_number;
    //         this.Order.city = address[0].city;
    //         this.Order.postal_code = address[0].postal_code;
    //         this.Order.province = address[0].province;
    //         this.Order.country = address[0].country;
    //         this.Order.country_code = address[0].country_code;
    //         this.Order.formattedAddress = address[0].formattedAddress;
    //
    //         this.address = address[0].street + ', ' + address[0].street_number + ', ' + address[0].city;
    //
    //         // this.address = address[0].formattedAddress;
    //
    //         if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
    //           this.isAddressFull = true;
    //           this.isEnable = true;
    //         } else {
    //           this.isAddressFull = false;
    //           this.isEnable = false;
    //           this.isEnable = false;
    //         }
    //
    //         this.showPreviewOrder()
    //
    //       } else {
    //         this.isAddressOne = true;
    //         this.isAddressFull = false;
    //         this.isEnable = false;
    //       }
    //     })
    //     .catch((error) => {
    //       this.isLoading = false;
    //     });
  }*/


  onResize() {
    if (isBrowser) {
      // if (document.querySelector('body').clientWidth > 480) {
      //   this.isMobileCalendar = false;
      //   this.maxOrderBlockSize = document.body.clientHeight - 450 + 'px';
      // } else {
      //   this.isMobileCalendar = true;
      //   this.maxOrderBlockSize = 'auto';
      // }
    }
  }

  ngOnDestroy() {
    if (isBrowser) {
      // this.subscription.unsubscribe();
    }
  }

  // selectDate() {
  //   this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'select date'});
  // }

  /*
  showPreviewOrder() {
    if (this.Order.date && this.orderIsFull && this.isAddressFull && this.orderData.order_options.min_amount <= this.orderData.totalPrice) {
      let date = new Date(this.Order.date);
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let orderInformation = {
        date: day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear(),
        time: this.Order.time,
        address: this.Order.street + ', ' + this.Order.street_number + ', ' + this.Order.city,
        description: this.Order.delivery_description
      };
      if (localStorage.getItem('auth') === null) {
        this.popupsService.activate({type: 'loginFromOrder', data: {orderData: this.orderData, information: orderInformation}});
      } else {
        let date = new Date(this.Order.date);
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        let correctMonth = 1 + date.getMonth();
        let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;

        let queryPriceData = {
          service_id: this.orderData.service_id,
          country_code: this.Order.country_code,
          postal_code: this.Order.postal_code,
          start_date: date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z',
          amount: this.orderData.totalPrice.toString()
        };

        this.popupsService.activate({type: 'confirmNewOrder', data: {orderData: this.orderData, information: orderInformation, queryPrice: queryPriceData}});
      }
    }
  }

  createOrder() {
    let date = new Date(this.Order.date);
    let userData = localStorage.getItem('auth');
    if (userData !== null) {
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let correctMonth = 1 + date.getMonth();
      let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
      // this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + this.Order.time + ':00.000Z';
      this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
      this.Order.service_id = this.orderData.service_id;
      this.Order.delivery_details = [{
        title: this.orderData.service,
        amount: 0,
        type: 'service'
      }];
      this.orderData.services.forEach((orderCategory) => {
        if (orderCategory.price_type === 'BASE_AMOUNT_INCREMENT') {
          this.Order.delivery_details.push({
            title: orderCategory.name,
            description : orderCategory.option.name,
            amount: 0,
            type: 'item'
          });
        } else {
          this.Order.delivery_details.push({
            title: orderCategory.name,
            description : orderCategory.option.name,
            amount: orderCategory.option.price,
            type: 'item'
          });
        }
      });
      this.Order.payment = {
        amount: this.orderData.totalPrice,
        currency: 'eur'
      };

      this.isLoading = true;
      let timeStart = Date.now();
      this.Order.payment.amount = this.finalPrice;
      this.orderService.saveOrder(this.Order)
        .then((status) => {
          this.analyticsService.sendEvent({category:'Order creation form', action: 'send form', label: 'finish'});
          this.analyticsService.sendTiming({category: 'Saving order', timingVar: 'save', timingValue: Date.now()-timeStart});
          this.finalPrice = 0;
          this.Order.delivery_details = [];
          this.Order.delivery_address = '';
          this.Order.delivery_description = '';
          this.Order.date = null;
          this.Order.time = '';
          this.Order.delivery_date = '';
          this.Order.street_number = '';
          this.Order.postal_code = '';
          this.Order.country_code = '';
          this.Order.formattedAddress = '';
          this.address = '';
          this.submitOrder = false;
          this.popupsService.activate({type: 'confirmNewOrderEnd'});
          if (isBrowser) {
            this.orderService.makeEvent({status: true});
          }
          this.isLoading = false;
        })
        .catch((error) => {
          this.analyticsService.sendEvent({category:'Order creation form', action: 'send form', label: 'error'});
          // console.log('error or not: '+ error);
          if (error.status === 402) {
            this.popupsService.activate({type: 'error', data: {title:'Errore', message: 'Per favore, inserisci un metodo di pagamento prima di prenotare un servizio'}});
          } else if (error.status === 403) {
            this.popupsService.activate({type: 'error', data: {title:'Errore', message: 'Il servizio richiesto non è ancora disponibile in questa zona. Per favore contattaci nella sezione assistenza di Starbook per richiedere il supporto nella zona desiderata.'}});
          }
          //  else {
          //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: "C'è stato un errore riguardo alla richiesta del ordine, ricarica la pagina e riprova di nuovo."}});
          // }
          this.isLoading = false;
        });
    } else {
      this.popupsService.activate({type: 'login'});
    }
  }*/
}
