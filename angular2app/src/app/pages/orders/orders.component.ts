import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../shared/navigation.service';
import { OrdersService } from '../../shared/orders.service';
import { PopupsService } from '../../popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';

export interface IOrder {
  _id: string;
  status: number;
  payment?: {
    amount?: number,
    currency?: string
  },
  category_type: number;
  delivery_details: string;
  delivery_description: string;
  delivery_date: string;
  delivery_address: {
    street: string;
    street_number: string;
    city: string;
    postal_code: string;
    province: string;
    country: string;
    country_code: string;
  },
  customer: {
    email: string;
    fullname: string;
    phone_number: string;
  };
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit, OnDestroy {
  public it: any;
  public selectTab: string|boolean = false;
  public taglines = {
    'Richieste Dei Clienti': 'Ordini Ricevuti',
    'I Miei Odini': 'Ordini Richiesti',
    'Archivio': 'Archivio Ordini'
  };
  public tabs = [
    {name: 'I Miei Odini', selected: false},
    {name: 'Archivio', selected: false}
  ];
  public categories = [];
  public pageData: IOrder[] = [];
  public requestIsComplete = false;
  subscription: Subscription;

  constructor(private navigationService: NavigationService, private ordersService: OrdersService, private popupsService: PopupsService) { }

  ngOnInit() {
    if (localStorage.getItem('auth') !== null) {
      let authData = JSON.parse(localStorage.getItem('auth'));
      if (authData.stripe_account_id !== null) {
        this.tabs = [
            {name: 'Richieste Dei Clienti', selected: false},
            {name: 'I Miei Odini', selected: false},
            {name: 'Archivio', selected: false}
          ];
          this.renderPage('Richieste Dei Clienti');
      } else {
        this.renderPage('I Miei Odini');
      }
    } else {
      this.renderPage('I Miei Odini');
    }

    this.categories = this.ordersService.getCategories();
    this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
      let orderIndex = 0;
      switch (action.type) {
        case 'confirmOrder':
          orderIndex = 0;
          this.pageData.forEach((orderData) => {
            if (orderData._id === action.data.orderId) {
              this.pageData[orderIndex].status = 1;
            }
            orderIndex++;
          });
          break;
        case 'cancelOrder':
          orderIndex = 0;
          this.pageData.forEach((orderData) => {
            if (orderData._id === action.data.orderId) {
              this.pageData[orderIndex].status = 99;
            }
            orderIndex++;
          });
          break;
        case 'reactivateOrder':
          orderIndex = 0;
          this.pageData.forEach((orderData) => {
            if (orderData._id === action.data.orderId) {
              this.pageData[orderIndex].status = 0;
            }
            orderIndex++;
          });
          break;
        case 'addPrice':
          if (action.data.isModified === 0)
          {
            this.renderPage(this.selectTab);
          } else {
            orderIndex = 0;
            this.pageData.forEach((orderData) => {
              if (orderData._id === action.data.orderId) {
                // this.pageData[orderIndex].status = 2;
                // this.pageData[orderIndex].payment = {amount: action.data.orderPrice, currency: 'eur'};
                this.pageData.splice(orderIndex,1);
              }
              orderIndex++;
            });
          }
          break;
        case 'editPrice':
          orderIndex = 0;
          this.pageData.forEach((orderData) => {
            if (orderData._id === action.data.orderId) {
              this.pageData[orderIndex].status = 2;
              this.pageData[orderIndex].payment.amount = action.data.orderPrice;
              this.pageData[orderIndex].payment.currency = 'eur';
            }
            orderIndex++;
          });
          break;
        case 'continueOrder':
          orderIndex = 0;
          this.pageData.forEach((orderData) => {
            if (orderData._id === action.data.orderId) {
              this.pageData.splice(orderIndex,1);
            }
            orderIndex++;
          });
          break;
      }
    });
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  renderPage(page) {
    this.requestIsComplete = false;
    this.selectTab = page;
    let tabIndex = 0;
    this.tabs.forEach((tab) => {
      if (tab.name === page) {
        this.tabs[tabIndex].selected = true;
      } else {
        this.tabs[tabIndex].selected = false;
      }
      tabIndex++;
    });

    let params = [];

    if (page === 'Richieste Dei Clienti') {
      params = [];
      params.push({name: 'sort_delivery_date', value: 1});
      params.push({name: 'delivery_from_now', value: this.dateFormating('now')});
      params.push({name: 'order_type', value: 'RECEIVED'});
    }

    if (page === 'I Miei Odini') {
      params = [];
      params.push({name: 'sort_delivery_date', value: 1});
      params.push({name: 'delivery_from_now', value: this.dateFormating('now')});
      params.push({name: 'order_type', value: 'REQUIRED'});
    }

    if (page === 'Archivio') {
      params = [];
      params.push({name: 'sort_delivery_date', value: -1});
      params.push({name: 'delivery_from_now', value: this.dateFormating('now')});
      params.push({name: 'order_type', value: 'ARCHIVE'});
    }

    this.ordersService.getOrders(params)
      .then((response) => {
        this.requestIsComplete = true;
        this.pageData = response.result;
        console.log(response.result);
      })
      .catch((error) => {
        console.log(error);
    });
    this.navigationService.updateMessage(this.taglines[page]);
  }

  dateFormating(date) {
    let returnDate = '';
    if (date !== 'now') {
      let dateString = date.substring(0, date.length - 5);
      dateString = dateString.split('T');
      let dateComponents = dateString[0].split('-');
      let hourComponents = dateString[1].split(':');
      returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
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
      returnDate += seconds > 9 ? ':' + seconds  + '.000Z' : ':0' + seconds + '.000Z';
    }
    return returnDate;
  }

  dateCompare(date1, date2) {
    let date1Obj = Date.parse(date1);
    let date2Obj = Date.parse(date2);
    if (date1Obj > date2Obj) {
      return true;
    } else {
      return false;
    }
  }

  itemsFormating(items) {
    let returnProducts = [];
    let products = items.split('||');
    products.forEach((product) => {
      let productComponents = product.split(':');
      if (productComponents[0].length > 0) {
        returnProducts.push({name: productComponents[0], items: productComponents[1]});
      }
    });
    return returnProducts;
  }

  confirmOrder(id) {
    this.popupsService.activate({type: 'confirmOrder', data: {orderId: id}});
  }
  cancelOrder(id) {
    this.popupsService.activate({type: 'cancelOrder', data: {orderId: id}});
  }
  reactivateOrder(id) {
    this.popupsService.activate({type: 'reactivateOrder', data: {orderId: id}});
  }
  completaOrder(id) {
    this.popupsService.activate({type: 'addPrice', data: {orderId: id}});
  }
  editOrder(id, payment) {
    this.popupsService.activate({type: 'editPrice', data: {orderId: id, payment: payment}});
  }
  continueOrder(id, payment) {
    this.popupsService.activate({type: 'continueOrder', data: {orderId: id, payment: payment, information: '120€ + 6.6€ = 126.6€'}});
  }
}
