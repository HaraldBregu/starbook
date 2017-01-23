import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { OrderService, IAddress } from './order.service';
import { PopupsService } from '../popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit, OnDestroy {
  @Input() orderData;
  @Input('orderIsFull') orderIsFull;
  @Input('activeServiceCategoryType') activeServiceCategoryType;
  @Output() orderCreated = new EventEmitter();

  public it: any;
  public timePicker = [];
  public months: {};
  public timePickerIsShow = false;
  public addresses = [];
  public address = '';
  public selectedAddress: IAddress = {
    street: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: '',
    country_code: '',
    selected: false,
    isFull: false,
    formattedAddress: ''
  };
  public isAddressOne = false;
  public isAddressFull = false;
  public isAddressDirty = false;
  public isEnable = true;
  public Order = {
    service_id: '',
    delivery_details: [],
    delivery_description: '',
    applicant_fullname: 'none',
    applicant_email: 'none',
    applicant_phone: 'none',
    delivery_address: '',
    date: null,
    time: '',
    delivery_date: '',
    street: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: '',
    country_code: '',
    formattedAddress: '',
    payment: {amount: 0, currency: ''}
  };
  public minDate = new Date();
  public submitOrder = false;
  public orderForm: any;
  public isMobileCalendar: any = false;
  public maxOrderBlockSize: number|string = 'auto';
  public isLoading = false;
  subscription: Subscription;

  constructor(private orderService: OrderService, private popupsService: PopupsService) {
    for (let i = 0; i < 24; i++) {
      if (i > 7 && i < 15) {
        if (i > 9) {
          this.timePicker.push(i + ':00', i + ':30');
        } else {
          this.timePicker.push('0' + i + ':00', '0' + i + ':30');
        }
      }
    }
    this.months = {
      1: 'Gennaio',
      2: 'Febbraio',
      3: 'Marzo',
      4: 'Aprile',
      5: 'Maggio',
      6: 'Giugno',
      7: 'Luglio',
      8: 'Agosto',
      9: 'Settembre',
      10: 'Ottobre',
      11: 'Novembre',
      12: 'Dicembre'
    };
  }

  toggleTimepicker() {
    this.timePickerIsShow = !this.timePickerIsShow;
  }

  openTimepicker() {
    this.timePickerIsShow = true;
  }

  closeTimepicker() {
    this.timePickerIsShow = false;
  }

  selectTime(time) {
    this.Order.time = time;
  }

  // getAddresses(event) {
  //   this.isAddressDirty = true;
  //   this.isAddressFull = false;
  //   if (event.query.length > 2) {
  //     this.orderService.getAddresses(event.query)
  //       .then((data) => {
  //         this.addresses = [];
  //         this.addresses = data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  selectAddress(value: IAddress) {
    if (value.isFull) {
      this.isAddressFull = true;
    } else {
      this.isAddressFull = false;
    }
    this.selectedAddress = value;
  }
  modifyAddress() {
    this.isAddressDirty = false;
    this.isEnable = true;
    this.isAddressDirty = false;
  }

  showConfirmation() {
    this.submitOrder = true;
    this.isAddressDirty = true;
    this.Order.street_number = '';
    this.Order.postal_code = '';
    this.Order.country_code = '';

    this.isLoading = true;
    this.orderService.getAddresses(this.address)
        .then((address: IAddress[]) => {
          this.isLoading = false;
          if (address.length > 1) {
            this.isAddressOne = false;
            this.isEnable = false;
          } else if (0 in address) {
            this.isAddressOne = true;
            this.Order.street = address[0].street;
            this.Order.street_number = address[0].street_number;
            this.Order.city = address[0].city;
            this.Order.postal_code = address[0].postal_code;
            this.Order.province = address[0].province;
            this.Order.country = address[0].country;
            this.Order.country_code = address[0].country_code;
            this.Order.formattedAddress = address[0].formattedAddress;
            this.address = address[0].formattedAddress;

            if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
              this.isAddressFull = true;
              this.isEnable = true;
            } else {
              this.isAddressFull = false;
              this.isEnable = false;
              this.isEnable = false;
            }
          } else {
            this.isAddressOne = true;
            this.isAddressFull = false;
            this.isEnable = false;
          }

          if (this.Order.date && this.orderIsFull && this.isAddressFull && this.orderData.order_options.min_amount <= this.orderData.totalPrice) {
            let date = new Date(this.Order.date);
            let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            let orderInformation = {
              date: day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear(),
              time: this.Order.time,
              address: this.Order.formattedAddress,
              description: this.Order.delivery_description
            };
            if (localStorage.getItem('auth') === null) {
              this.popupsService.activate({type: 'loginFromOrder', data: {orderData: this.orderData, information: orderInformation}});
            } else {
              this.popupsService.activate({type: 'confirmNewOrder', data: {orderData: this.orderData, information: orderInformation}});
            }
          }
        })
        .catch((error) => {
          this.isLoading = false;
        });

  }

  createOrder() {
    let date = new Date(this.Order.date);
    let userData = localStorage.getItem('auth');
    if (userData !== null) {
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let correctMonth = 1 + date.getMonth();
      let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
      this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + this.Order.time + ':00.000Z';
      this.Order.service_id = this.orderData.service_id;
      this.Order.delivery_details = [{
        title: this.orderData.service,
        amount: 0,
        type: 'service'
      }];
      this.orderData.services.forEach((orderCategory) => {
        if (orderCategory.price_type === 'BASE_AMOUNT_INCREMENT') {
          this.Order.delivery_details.push({
            title: orderCategory.name + ' - ' + orderCategory.option.name,
            amount: 0,
            type: 'item'
          });
        } else {
          this.Order.delivery_details.push({
            title: orderCategory.name + ' - ' + orderCategory.option.name,
            amount: orderCategory.option.price,
            type: 'item'
          });
        }
      });

      // this.Order.street = this.selectedAddress.street;
      // this.Order.street_number = this.selectedAddress.street_number;
      // this.Order.city = this.selectedAddress.city;
      // this.Order.postal_code = this.selectedAddress.postal_code;
      // this.Order.province = this.selectedAddress.province;
      // this.Order.country = this.selectedAddress.country;
      // this.Order.country_code = this.selectedAddress.country_code;
      this.Order.payment = {
        amount: this.orderData.totalPrice,
        currency: 'eur'
      };

      this.isLoading = true;
      this.orderService.saveOrder(this.Order)
        .then((status) => {
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
          this.orderCreated.emit({status: true});
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    } else {
      console.log(userData);
      this.popupsService.activate({type: 'login'});
    }
  }

  ngOnInit() {
    this.it = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
      monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };

    this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
      if (action.type === 'confirm') {
        this.createOrder();
      }
    });
    if (document.querySelector('body').clientWidth > 480) {
      this.isMobileCalendar = false;
      this.maxOrderBlockSize = document.body.clientHeight - 450 + 'px';
    } else {
      this.isMobileCalendar = true;
      this.maxOrderBlockSize = 'auto';
    }
  }

  onResize() {
    if (document.querySelector('body').clientWidth > 480) {
      this.isMobileCalendar = false;
      this.maxOrderBlockSize = document.body.clientHeight - 450 + 'px';
    } else {
      this.isMobileCalendar = true;
      this.maxOrderBlockSize = 'auto';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
