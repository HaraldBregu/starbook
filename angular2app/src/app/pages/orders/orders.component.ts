import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/navigation.service';
import { OrdersService } from '../../shared/orders.service';

export interface IOrder {
  _id: string;
  status: number;
  category_type: number;
  delivery_details: string;
  delivery_description: string;
  delivery_date: string;
  street: string;
  street_number: string;
  city: string;
  postal_code: string;
  province: string;
  country: string;
  country_code: string;
  applicant: {
    email: string;
    fullname: string;
    phone_number: string;
  };
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  public selectTab: string|boolean = false;
  public taglines = {
    'Ordini ricevuti': 'Ordini ricevuti',
    'Ordini richiesti': 'Ordini richiesti',
    'Archivio': 'Archivio ordini'
  };
  public tabs = [
    {name: 'Ordini ricevuti', selected: false},
    {name: 'Ordini richiesti', selected: false},
    {name: 'Archivio', selected: false}
  ];
  public categories = [];
  public pageData: IOrder[] = [];

  constructor(private navigationService: NavigationService, private ordersService: OrdersService) { }

  ngOnInit() {
    this.renderPage('Ordini ricevuti');
    this.categories = this.ordersService.getCategories();
    console.log(this.categories);
  }

  renderPage(page) {
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

    if (page === 'Ordini ricevuti') {
      params = [];
      params.push({name: 'sort_delivery_date', value: 1});
      params.push({name: 'delivery_after_date', value: this.dateFormating('now')});
      params.push({name: 'applicant', value: 'other'});
    }

    if (page === 'Ordini richiesti') {
      params = [];
      params.push({name: 'sort_delivery_date', value: 1});
      params.push({name: 'delivery_after_date', value: this.dateFormating('now')});
      params.push({name: 'applicant', value: 'me'});
    }

    this.ordersService.getOrders(params)
      .then((response) => {
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
      returnDate = dateComponents[2] + '-' + dateComponents[1] + '-' + dateComponents[0] + ' ' + dateString[1];
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

}
