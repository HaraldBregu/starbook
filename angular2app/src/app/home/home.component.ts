import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { AngularMasonry } from 'angular2-masonry';
import { HomeService } from './home.service';
import { NavigationService } from '../shared/navigation.service';

export interface IServiceCategoryList {
  _id: string;
  type: number;
  title: string;
  icon_code: string;
  icon_name: string;
  lang: string;
  products: IServiceCategory[];
}
export interface IServiceCategory {
  _id: string;
  title: string;
  items: IService[];
}
export interface IService {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements AfterViewInit, OnInit {
  public servicesCategoryList: IServiceCategoryList[] = [];
  public servicesData: IServiceCategory[] = [];
  public activeServiceCategory: boolean|string = false;
  public activeServiceCategoryType = 0;
  public model: any;
  public orderData;
  public orderIsFull = false;

  @ViewChild(AngularMasonry) masonry: AngularMasonry;

  constructor(private homeService: HomeService, private navigationService: NavigationService) {}

  toggleService(categoryListId: string, categoryId: string, serviceName: string) {
    let categoryListIndex = 0;
    this.servicesCategoryList.forEach((categoryList) => {
      let categoryIndex = 0;
      if (categoryList._id === categoryListId) {
        categoryList.products.forEach((categoryData) => {
          if (categoryData._id === categoryId) {
            let serviceIndex = 0;
            categoryData.items.forEach((serviceData) => {
              if (serviceData.name === serviceName) {
                this.servicesCategoryList[categoryListIndex].products[categoryIndex].items[serviceIndex].selected = !serviceData.selected;
                this.calculateOrder();
              } else {
                serviceIndex++;
              }
            });
          } else {
            categoryIndex++;
          }
        });
      } else {
        categoryListIndex++;
      }
    });
  }

  calculateOrder() {
    this.orderData = [];
    let currentOrderState = [];
    let arrayIndex = 0;
    this.servicesCategoryList.forEach((categoryList) => {
      categoryList.products.forEach((service) => {
        service.items.forEach((item) => {
          if (item.selected) {
            if (arrayIndex in currentOrderState) {
              currentOrderState[arrayIndex].items.push({ name: item.name });
            } else {
              currentOrderState[arrayIndex] = {
                _id: service._id,
                name: service.title,
                items: [{
                  name: item.name
                }]
              };
            }
          }
        });
        arrayIndex++;
      });
    });

    currentOrderState.forEach((service) => {
      if (service.name) {
        this.orderData.push(service);
      }
    });

    if (currentOrderState.length > 0) {
      this.orderIsFull = true;
    } else {
      this.orderIsFull = false;
    }
  }

  tabNavigate(id: string) {
    this.activeServiceCategory = id;
    this.orderData = [];
    this.clearServiceData();
    this.renderPage(id);
    this.servicesCategoryList.forEach((serviceCategoryData) => {
      if (serviceCategoryData._id === id) {
        this.activeServiceCategoryType = serviceCategoryData.type;
      }
    });
  }

  renderPage(id: string) {
    this.servicesCategoryList.forEach((ServicesList: IServiceCategoryList) => {
      if (ServicesList._id === id) {
        this.servicesData = ServicesList.products;
      }
    });
  }

  ngAfterViewInit() {
      this.masonry.layoutComplete.subscribe(() => {

      });
  }

  ngOnInit() {
    this.homeService.getCategories()
      .then((data) => {
        this.parseServiceData(data.result);
      })
      .catch((error) => {
        console.log(error);
      });

    this.navigationService.updateMessage('Trova servizi nella tua zona');
  }

  parseServiceData(data) {
    let i = 0;
    data.forEach((ServicesList: any) => {
      let Products = [];
      ServicesList.products.forEach((ServicesCategory) => {
        let Items = [];
        ServicesCategory.items.forEach((CategoryItem) => {
          Items.push({
            name: CategoryItem as string,
            selected: false
          });
        });
        Products.push({
          _id: ServicesCategory._id as number,
          title: ServicesCategory.title as string,
          items: Items
        });
      });
      this.servicesCategoryList.push({
        _id: ServicesList._id as string,
        type: ServicesList.type as number,
        title: ServicesList.title as string,
        icon_code: ServicesList.icon_code as string,
        icon_name: ServicesList.icon_name as string,
        lang: ServicesList.lang as string,
        products: Products
      });
      if (i === 0) {
        this.activeServiceCategory = ServicesList._id;
        this.renderPage(ServicesList._id);
        i++;
      }
    });
  }

  clearServiceData() {
    let categoryListIndex = 0;
    this.servicesCategoryList.forEach((categoryList) => {
      let categoryIndex = 0;
      categoryList.products.forEach((categoryData) => {
        let serviceIndex = 0;
        categoryData.items.forEach((serviceData) => {
          this.servicesCategoryList[categoryListIndex]
            .products[categoryIndex]
            .items[serviceIndex]
            .selected = false;
          serviceIndex++;
        });
        categoryIndex++;
      });
      categoryListIndex++;
    });
  }
}
