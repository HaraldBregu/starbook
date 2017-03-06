import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import {OrderService, IAddress} from '../../order/order.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit {
  public Order = {
    service_id: '',
    date: null,
    delivery_address: '',
    delivery_date: '',
    delivery_details: [],
    payment: {amount: 0, currency: ''},
    street: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: '',
    country_code: '',
    formattedAddress: '',
  };
  public wizardData: any = {
    order: {
      service: '',
      services: [],
      totalPrice: null
    },
    type: '',
    multiplier: ''
  };
  public it: any;
  public minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  public maxDate = new Date(new Date().getTime() + (24*21) * 60 * 60 * 1000);
  public isAddressDirty = false;
  public isAddressFull = false;
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
  public errorMessage = null;
  public isDataError = false;
  public isLoading = false;
  public emailPattern: any;
  public registrationData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public registrationError = {
    name: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false
  };

  public step = '';

  constructor(private analyticsService: AnalyticsService, private orderService: OrderService, private router: Router) {
    this.wizardData = this.orderService.getWizardData();
    if (this.wizardData.type !== '') {
      this.analyticsService.sendEvent({category:'Order creation wizard', action: 'start', label: 'open wizard'});
      let userData = localStorage.getItem('auth');
      if (userData === null) {
        this.step = 'registration';
      } else {
        this.step = 'confirmation';
      }

    } else {
      this.router.navigateByUrl('/');
    }

    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }

  selectDate() {
    this.isDataError = false;
    this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'select date'});
  }

  getAddresses(event) {
    this.isAddressDirty = true;
    this.isAddressFull = false;
    if (event.query.length > 2) {
      this.orderService.getAddresses(event.query)
          .then((addresses) => {
            this.addresses = [];
            this.addresses = addresses;
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
  selectAddress(value) {
    this.analyticsService.sendEvent({category:'Order creation wizard', action: 'modify', label: 'select address'});
    if (value.isFull) {
      this.isAddressFull = true;
    } else {
      this.isAddressFull = false;
    }
    this.selectedAddress = value;
  }

  createOrder() {
    this.errorMessage = null;

    if (this.Order.date && this.isAddressFull) {
      let userData = localStorage.getItem('auth');
      if (userData !== null && (this.wizardData.type === 'contanti' || this.wizardData.type === 'carta')) {
        let date = new Date(this.Order.date);
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        let correctMonth = 1 + date.getMonth();
        let month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
        this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
        this.Order.service_id = this.wizardData.order.service_id;
        this.Order.delivery_details = [{
          title: this.wizardData.order.service,
          amount: 0,
          type: 'service'
        }];
        this.wizardData.order.services.forEach((orderCategory) => {
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
          amount: this.wizardData.order.totalPrice,
          currency: 'eur'
        };

        this.Order.street = this.selectedAddress.street;
        this.Order.street_number = this.selectedAddress.street_number;
        this.Order.postal_code = this.selectedAddress.postal_code;
        this.Order.country_code = this.selectedAddress.country_code;
        this.Order.formattedAddress = this.selectedAddress.formattedAddress;

        this.isLoading = true;
        let timeStart = Date.now();
        this.Order.payment.amount = this.wizardData.order.totalPrice * this.wizardData.multiplier;
        this.orderService.saveOrder(this.Order)
            .then((status) => {
              this.analyticsService.sendEvent({category:'Order creation wizard', action: 'send form', label: 'finish'});
              this.analyticsService.sendTiming({category: 'Saving order', timingVar: 'save', timingValue: Date.now()-timeStart});
              this.Order.delivery_details = [];
              this.Order.delivery_address = '';
              this.Order.date = null;
              this.Order.delivery_date = '';
              this.Order.street_number = '';
              this.Order.postal_code = '';
              this.Order.country_code = '';
              this.Order.formattedAddress = '';
              this.isLoading = false;
              if (this.step === 'confirmation') {
                this.router.navigateByUrl('/service/' + this.wizardData.order.service);
              }
            })
            .catch((errorData) => {
              if (errorData.status === 402 && this.wizardData.type === '') {
                this.step = 'addcard';
              }
              this.analyticsService.sendEvent({category:'Order creation form', action: 'send form', label: 'error'});
              let error = errorData.json();
              this.errorMessage = error.message;
              this.isLoading = false;
            });
      } else {
        // there are will be call other api
      }

    } else {
      if (this.Order.date === null) {
        this.isDataError = true;
      }
      if (!this.isAddressFull) {
        this.isAddressDirty = true;
      }
    }
  }

  registration() {

  }

  checkEmail(type: string, email: string) {
    if (this.emailPattern.test(email)) {
      switch (type) {
        case 'registration':
          this.registrationError.email = false;
          break;
      }
    } else {
      switch (type) {
        case 'registration':
          this.registrationError.email = true;
          break;
      }
    }
  }

  checkNonEmpty(type, value) {
    if (type === 'registrationName') {
      if (value.length > 0) {
        this.registrationError.name = false;
      } else {
        this.registrationError.name = true;
      }
    }

    if (type === 'registrationPhone') {
      if (value.length > 10) {
        this.registrationError.phone = false;
      } else {
        this.registrationError.phone = true;
      }
    }
  }

  checkPassword (type, password, passwordConfirm) {
    if (type === 'registration') {
      if (password.length > 3) {
        this.registrationError.password = false;
      } else {
        this.registrationError.password = true;
      }
    }
    if (type === 'registrationConfirm') {
      if (password === passwordConfirm) {
        this.registrationError.confirmPassword = false;
      } else {
        this.registrationError.confirmPassword = true;
      }
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
  }

}
