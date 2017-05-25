import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { OrdersService } from '../../shared/orders.service';
import { PopupsService } from '../../popups/popups.service';
import { Subscription }   from 'rxjs/Subscription';
import { AnalyticsService } from '../../shared/analytics.service';
import { isBrowser } from "angular2-universal";
import { OrderService } from '../../order/order.service';
import { ShareService } from '../share/share.service';

export interface IOrder {
  _id: string;
  status: number;
  price: {
    final: number,
    initial: number,
    currency: string
  },
  payment?: {
    state?: string,
    milestones?: string,
    rest: string
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
  },
  merchant: {
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
  public tabs = [
    {name: 'Lavorazioni', route: 'requests', icon: "fa-tasks"},
    {name: 'Preventivi', route: 'estimates', icon: "fa-file"}
  ];
  public pageData;
  public currentUser;
  public page = '';
  subscription: Subscription;
  public estimates;
  public popup;
  public selectedOrder;
  public upfront;
  public detail = {
    title : "",
    type : "detail",
    count : 0,
    amount : 0
  };
  public newDetail = {
    title : "",
    type : "detail",
    count : 0,
    amount : 0
  };
  public details = [];
  public newDetails = [];

  public payment_state = {
    loading : false,
  }
  public update_state = {
    loading : false,
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private ordersService: OrdersService,
    private popupsService: PopupsService,
    private analyticsService: AnalyticsService,
    private orderService: OrderService,
    private shareService: ShareService) {
    this.navigationService.updateMessage("Ordini");
    if (isBrowser) {
      if (!localStorage.getItem('auth')) {
        this.router.navigate(['']);
        return;
      }
      this.currentUser = JSON.parse(localStorage.getItem('auth'));
      // console.log('currentUser: ' + JSON.stringify(this.currentUser));
    }
  }

  ngOnInit() {
    if (isBrowser) {
      this.route.params.subscribe(params => {
        window.scrollTo(0, 0);
        this.page = params['page']
        if (this.page === 'requests') {
          this.getActiveOrders()
        } else if (this.page === 'estimates') {
          this.router.navigate(['orders/requests']);
          // if (isBrowser) {
          //   this.estimates = JSON.parse(localStorage.getItem('estimates'))
          // }
        } else {
          this.router.navigate(['orders/requests']);
        }
      })
    }

    if (isBrowser) {
      this.subscription = this.popupsService.getPopupResponse$.subscribe(action => {
        let orderIndex = 0;
        switch (action.type) {
          case 'confirmOrder':
            orderIndex = 0;
            // this.pageData.forEach((orderData) => {
            //   if (orderData._id === action.data.orderId) {
            //     this.pageData[orderIndex].status = 1;
            //   }
            //   orderIndex++;
            // });
            break;
          case 'cancelOrder':
            orderIndex = 0;
            // this.pageData.forEach((orderData) => {
            //   if (orderData._id === action.data.orderId) {
            //     this.pageData[orderIndex].status = 99;
            //   }
            //   orderIndex++;
            // });
            break;
          case 'reactivateOrder':
            orderIndex = 0;
            // this.pageData.forEach((orderData) => {
            //   if (orderData._id === action.data.orderId) {
            //     this.pageData[orderIndex].status = 0;
            //   }
            //   orderIndex++;
            // });
            break;
          case 'addPrice':
            // if (action.data.isModified === 0)
            // {
            //   this.renderPage(this.selectTab);
            // } else {
            //   orderIndex = 0;
            //   this.pageData.forEach((orderData) => {
            //     if (orderData._id === action.data.orderId) {
            //       // this.pageData[orderIndex].status = 2;
            //       // this.pageData[orderIndex].payment = {amount: action.data.orderPrice, currency: 'eur'};
            //       this.pageData.splice(orderIndex,1);
            //     }
            //     orderIndex++;
            //   });
            // }
            break;
          case 'editPrice':
            orderIndex = 0;
            // this.pageData.forEach((orderData) => {
            //   if (orderData._id === action.data.orderId) {
            //     this.pageData[orderIndex].status = 2;
            //     this.pageData[orderIndex].payment.amount = action.data.orderPrice;
            //     this.pageData[orderIndex].payment.currency = 'eur';
            //   }
            //   orderIndex++;
            // });
            break;
          case 'continueOrder':
            orderIndex = 0;
            // this.pageData.forEach((orderData) => {
            //   if (orderData._id === action.data.orderId) {
            //     this.pageData.splice(orderIndex,1);
            //   }
            //   orderIndex++;
            // });
            break;
        }
      });
    }

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
    if (isBrowser) {
      this.subscription.unsubscribe();
    }
  }
  renderPage(route) {
    this.router.navigate(['orders/' + route]);
  }
  getTiming(initial_price) {
    var days = initial_price/45000;
    if (days < 0.5) {
      return "metà giornata";
    } else if (days > 0.5 && days < 1.5) {
      return Math.round(days) + " giorno";
    } else {
      return Math.round(days) + " giorni";
    }
  }
  startWizard(estimate) {
    this.orderService.updateWizardData(estimate);
    this.router.navigate(['order/summary']);
    return false;
  }
  shareEstimate(estimate) {
    this.shareService.setObject(estimate);
    var newWizardData = estimate;
    let navigationExtras: NavigationExtras = {queryParams:{estimate:JSON.stringify(estimate)}};
    this.router.navigate(['share/service'], navigationExtras);
  }
  deleteEstimate(estimate) {
    this.deleteEstimateQuotationFromLocal(estimate);
    if (isBrowser) {
      this.estimates = JSON.parse(localStorage.getItem('estimates'));
    }
  }

  ///////////////////////////
  ////////// ORDER //////////
  ///////////////////////////
  getActiveOrders() {
    this.navigationService.updateMessage("Ordini...");
    this.ordersService.getOrders([{name: 'order_type', value: 'ACTIVE'}]).then((response) => {
      this.navigationService.updateMessage("Ordini");
      this.pageData = response.result;
    }).catch((error) => {
      this.navigationService.updateMessage("Ordini");
      this.pageData = [];
    });
  }
  deleteEstimateQuotationFromLocal(object) {
    if (isBrowser) {
      var estimates = JSON.parse(localStorage.getItem('estimates'))
      var new_estimates = [];
      for (var i in estimates) {
        var estimate = estimates[i];
        if (JSON.stringify(object) !== JSON.stringify(estimate)) {
          new_estimates.push(estimate)
        }
      }
      localStorage.setItem('estimates', JSON.stringify(new_estimates));
    }
  }

  //////////////////////////////////////
  ////////////// POPUP /////////////////
  //////////////////////////////////////
  openPopup(popup, order) {
    this.selectedOrder = order;
    this.popup = popup;
    this.newDetails = [];
    this.newDetails = this.newDetails.concat(order.details);
  }
  closePopup() {
    this.popup = null;
    this.getActiveOrders()
  }

  acceptOrder() {
    this.ordersService.acceptWork(this.selectedOrder._id, 'ACCEPT').then((response) => {
      this.popup = null;
      // console.log('Response: ' + JSON.stringify(response));
    }).catch((error) => {
      this.popup = null;
      // console.log('Error: ' + JSON.stringify(error));
    });
  }
  payUpfront() {
    if (this.payment_state.loading) {return;}
    this.payment_state.loading = true;
    this.ordersService.updateOrder(this.selectedOrder._id, {action: 'PAY_UPFRONT', upfront:this.upfront}).then((response) => {
      this.popup = null;
      this.payment_state.loading = false;
    }).catch((error) => {
      this.popup = null;
      this.payment_state.loading = false;
    });
  }
  payRestAmount(rest) {
    if (this.payment_state.loading) {return;}
    this.payment_state.loading = true;
    this.ordersService.updateOrder(this.selectedOrder._id, {action: 'PAY_UPFRONT', upfront:rest}).then((response) => {
      this.popup = null;
      this.payment_state.loading = false;
    }).catch((error) => {
      this.popup = null;
      this.payment_state.loading = false;
    });
  }

  getTotalAmount(details) {
    var newValue = 0
    for (var i = 0; i < details.length; i++) {
      var detail = details[i]
      var price;
      if (isNaN(detail.amount)) {
        price = 0;
      } else {
        price = detail.amount;
      }
      newValue += parseInt(price)
    }
    return newValue;
  }
  getTotalMilestones(milestones) {
    var newValue = 0
    for (var i = 0; i < milestones.length; i++) {
      var detail = milestones[i]
      var price;
      if (isNaN(detail.amount)) {
        price = 0;
      } else {
        price = detail.amount;
      }
      newValue += price;
    }
    return newValue;
  }
  getRestToPay() {
    var milestones = this.selectedOrder.milestones
    var details = this.selectedOrder.details
    return this.getTotalAmount(details) - this.getTotalMilestones(milestones)
  }

  // updateNewDetailTitle(title) {
  //   console.log('title is : ' + title);
  // }
  detailItemTitleChangeAtIndex(index) {
    // var newDetail = this.newDetails[index]
    // this.newDetails[index] = newDetail;
    // console.log('detail title is: ' + newDetail.title);
    // console.log('detail change change: ' + newDetail);
  }
  detailItemAmountChangeAtIndex(index) {
    // console.log('detail amount change');
    // return 2300;
  }
  getAmountItem(amount) {
    if (isNaN(amount)) {return 0;}
    return amount/100;
  }
  deleteDetailAtIndex(index) {
    this.newDetails.splice(index,1);
  }
  newDetailItemChange() {

  }
  newDetailAmountChange() {

  }
  addNewItem(newDetail) {
    if (newDetail.title) {
      newDetail.amount = Number(newDetail.amount)
      var detail = {
        title : newDetail.title,
        type : newDetail.type,
        count : newDetail.count,
        amount : newDetail.amount
      }
      this.newDetails.push(detail)

      newDetail.title = ""
      newDetail.amount = 0

      // console.log('detail is: ' + JSON.stringify(newDetail));
      // console.log('new details are: ' + JSON.stringify(this.newDetails));
    } else {
      // Detail is not complete
    }
  }

  onAmountChange() {

  }

  updateDetailsOrder() {
    if (this.update_state.loading) {return;}
    this.update_state.loading = true;
    // this.detail.amount = Number(this.detail.amount)
    this.ordersService.updateOrder(this.selectedOrder._id, {action: 'UPDATE_DETAILS', details:this.newDetails}).then((response) => {
      this.popup = null;
      this.update_state.loading = false;
      // console.log('Response: ' + JSON.stringify(response));
      // this.getActiveOrders()
    }).catch((error) => {
      this.popup = null;
      this.update_state.loading = false;
      // console.log('Error: ' + JSON.stringify(error));
    });
  }


  // old
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

  formatedAddressFromObject(address) {
    let returnAddress = '';
    if (address.street) {
      returnAddress += address.street
    }
    if (address.street_number) {
      returnAddress += ' ' + address.street_number
    }
    if (address.city) {
      returnAddress += ', ' + address.city
    }
    return returnAddress;
  }
  formatedDateFromString(date) {
    let returnDate = '';
    if (date !== 'now') {
      let dateString = date.substring(0, date.length - 5);
      dateString = dateString.split('T');
      let dateComponents = dateString[0].split('-');
      let hourComponents = dateString[1].split(':');
      // returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
      returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0];
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
    // products.forEach((product) => {
    //   let productComponents = product.split(':');
    //   if (productComponents[0].length > 0) {
    //     returnProducts.push({name: productComponents[0], items: productComponents[1]});
    //   }
    // });
    return returnProducts;
  }
}
