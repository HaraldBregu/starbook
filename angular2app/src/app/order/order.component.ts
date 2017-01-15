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
  public isAddressFull = false;
  public isAddressDirty = false;
  public Order = {
    service_id: '',
    delivery_details: '',
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
    payment: {amount: 0, currency: ''}
  };
  public minDate = new Date();
  public submitOrder = false;
  public orderForm: any;
  public isMobileCalendar: any = false;
  public maxOrderBlockSize: number|string = 'auto';
  subscription: Subscription;

  constructor(private orderService: OrderService, private popupsService: PopupsService) {
    for (let i = 0; i < 24; i++) {
      if (i > 7 && i < 20) {
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

  getAddresses(event) {
    this.isAddressDirty = true;
    this.isAddressFull = false;
    if (event.query.length > 2) {
      this.orderService.getAddresses(event.query)
        .then((data) => {
          this.addresses = [];
          this.addresses = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  selectAddress(value: IAddress) {
    if (value.isFull) {
      this.isAddressFull = true;
    } else {
      this.isAddressFull = false;
    }
    this.selectedAddress = value;
  }

  showConfirmation() {
    this.submitOrder = true;
    if (this.Order.date && this.orderIsFull && this.isAddressFull) {
      let date = new Date(this.Order.date);
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      let orderInformation = {
        date: day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear(),
        time: this.Order.time,
        address: this.Order.delivery_address,
        description: this.Order.delivery_description
      };
      this.popupsService.activate({type: 'confirmNewOrder', data: {orderData: this.orderData, information: orderInformation}});
    }
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
      this.orderData.services.forEach((orderCategory) => {
        this.Order.delivery_details += orderCategory.name + ': ';
        let categoryItemsIndex = 0;
        orderCategory.items.forEach((orderItems) => {
          if (categoryItemsIndex === 0) {
            this.Order.delivery_details += orderItems.name;
          } else {
            this.Order.delivery_details += ', ' + orderItems.name;
          }
          categoryItemsIndex++;
        });
        this.Order.delivery_details += '||';
      });

      this.Order.street = this.selectedAddress.street;
      this.Order.street_number = this.selectedAddress.street_number;
      this.Order.city = this.selectedAddress.city;
      this.Order.postal_code = this.selectedAddress.postal_code;
      this.Order.province = this.selectedAddress.province;
      this.Order.country = this.selectedAddress.country;
      this.Order.country_code = this.selectedAddress.country_code;
      this.Order.payment = {
        amount: this.orderData.totalPrice,
        currency: this.orderData.price.currency
      };

      this.orderService.saveOrder(this.Order)
        .then((status) => {
          this.Order.delivery_details = '';
          this.Order.delivery_address = '';
          this.Order.delivery_description = '';
          this.Order.date = null;
          this.Order.time = '';
          this.Order.delivery_date = '';
          this.submitOrder = false;
          this.popupsService.activate({type: 'confirmNewOrderEnd'});
          this.orderCreated.emit({status: true});
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
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
