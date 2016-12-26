import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { AngularMasonry } from 'angular2-masonry';
import { HomeService } from './home.service';
import { NavigationService } from '../shared/navigation.service';
import { Subscription }   from 'rxjs/Subscription';

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

export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  public servicesCategoryList: IServiceCategoryList[] = [];
  public servicesData: IServiceCategory[] = [];
  public activeServiceCategory: boolean|string = false;
  public activeServiceCategoryType: boolean|number = false;
  public model: any;
  public orderData;
  public orderIsFull = false;
  public SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public delta: number = -15;
  subscription: Subscription;

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
    if (this.activeServiceCategoryType !== false) {
      this.masonry.layoutComplete.subscribe(() => {

      });
    }
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
    this.subscription = this.navigationService.getActiveTab$.subscribe(tab => {
      this.activeServiceCategoryType = tab;
      this.activeServiceCategory = tab;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

  swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
    let calculateDelta = this.delta + delta;
    let menuSize = 0;
    let allMenuItems = document.querySelectorAll('.nav-pills > li');
    for (let i = 0; i < allMenuItems.length; i++) {
      let menuItem: any = allMenuItems[i];
      menuSize += menuItem.offsetWidth;
    }
    let menuBlockWidth = document.querySelector('.home-tab-bar').clientWidth;
    let allowMargin = (menuSize + 50) - menuBlockWidth;
    if (allowMargin >= 0) {
      allowMargin = -allowMargin;
      if (calculateDelta > 0) {
        this.delta = -15;
      } else {
        if (calculateDelta < allowMargin) {
          if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
            this.delta = allowMargin;
          }
        } else {
          this.delta = calculateDelta;
        }
      }
    }
  }
}
