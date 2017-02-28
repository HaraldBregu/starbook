import { isBrowser } from 'angular2-universal';
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
// import { AngularMasonry, MasonryModule } from 'angular2-masonry';
import { HomeService } from './home.service';
import { OrderService } from '../order/order.service';
import { NavigationService } from '../shared/navigation.service';
import { Subscription }   from 'rxjs/Subscription';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from '../shared/analytics.service';
import { SeoService } from '../shared/seo.service';
declare let Masonry: any;

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

export interface IServiceFormItem {
  formId?: number;
  optionId?: number;
  title: string;
  title_1: string;
  input_type?: string;
  input_value?: any;
  value_symbol?: string;
  amount: number;
  selected?:boolean;
}
export interface IServiceForm {
  type: string;
  required: boolean;
  title: string;
  title_1: string;
  price_type: string;
  options: IServiceFormItem[];
}
export interface IServices {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  price: {
    base_amount: number;
  },
  order_options: {
    min_amount: number;
    payment_methods: string[]
  },
  forms: IServiceForm[];
  technical_details: any[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {

  public baseAmount = {
    start: 0,
    calculated: 0
  };
  public calculateResults = {
    queueFirst: 0,
    queueSecond: 0,
    queueEnd: 0
  };
  public operands = {
    queueFirst: [],
    queueSecond: [],
    queueEnd: []
  };
  public finalPrice = 0;
  public defaultServices;
  public title;
  public description;
  public image_url;
  public technical_details;

  public servicesCategoryList: IServiceCategoryList[] = [];
  public isServicesView = false;
  public servicesData = [];

  public activeServiceCategory: boolean|string = false;
  public activeServiceCategoryType: boolean|number = false;
  public model: any;
  public orderData = {
    service_id: '',
    price: {
      base_amount: 0
    },
    order_options: {
      min_amount: 0,
      payment_methods: []
    },
    service: '',
    services: [],
    totalPrice: 0
  };
  public orderIsFull = false;
  public SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public delta: number = -15;
  public isLoading = false;
  public masonry: any;
  subscription: Subscription;

  // @ViewChild(AngularMasonry) masonry: AngularMasonry;
  // @ViewChild(MasonryModule) layout: MasonryModule;

  constructor(private homeService: HomeService, private navigationService: NavigationService, private router: Router, private route: ActivatedRoute, private orderService: OrderService, private analyticsService: AnalyticsService, private seoService: SeoService) {

  }

  renderPage(services: IServices) {
    this.navigationService.updateMessage(services.title);

    this.seoService.setTitle(services.title);
    this.seoService.setMetaElem('description', services.description);
    this.seoService.setOgElem('og:title', services.title);
    this.seoService.setOgElem('og:description', services.description);
    this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + services._id);
    this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
    this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');

    this.defaultServices = services;
    this.title = services.title;
    this.description = services.description;
    this.technical_details = services.technical_details;
    this.image_url = this.defaultServices.image_url;
    this.isServicesView = true;
    this.servicesData = [
      // {
      //   type: 'content',
      //   image: services.image_url,
      //   description: services.description,
      //   options: []
      // }
    ];
    this.orderData = {
      service_id: services._id,
      price: services.price,
      order_options: services.order_options,
      service: services.title,
      services: [],
      totalPrice: services.price.base_amount
    };
    this.baseAmount.start = services.price.base_amount;
    this.baseAmount.calculated = services.price.base_amount;
    let formId = 0;
    // console.log('services:' + JSON.stringify(services));
    services.forms.forEach((form) => {
      // console.log(form);
      var title_1: string;
      if (form.title_1) {
        title_1 = form.title_1;
      } else {
        title_1 = form.title;
      }

      let serviceForm: IServiceForm = {
        title: form.title,
        title_1 : title_1,
        type: form.type,
        required: form.required,
        price_type: form.price_type,
        options: []
      };

      let optionId = 0;
      form.options.forEach((item: IServiceFormItem) => {
        // console.log(item);
        var title_1: string;
        if (item.title_1) {
          title_1 = item.title_1;
        } else {
          title_1 = item.title;
        }

        var option = {
          formId: formId,
          optionId: optionId,
          title: item.title,
          title_1: title_1,
          type: form.type,
          amount: item.amount
        };

        if ('input_type' in item) {
          option['input_type'] = item.input_type;
          option['input_value'] = item.input_value;
          option['value_symbol'] = item.value_symbol;
        }

        if ('selected' in item) {
          option['selected'] = item.selected;
        } else {
          option['selected'] = false;
        }
        serviceForm.options.push(option);
        // console.log('option: ' + JSON.stringify(option));
        optionId ++;
      });
      this.servicesData.push(serviceForm);
      formId ++;
    });
    // console.log('services:' + JSON.stringify(this.servicesData));
    this.calculateOrder();
  }

  toggleService(serviceName, itemName) {
    let serviceId = 0;
    this.servicesData.forEach((service) => {
      if (service.title === serviceName) {
        let itemId = 0;
        service.options.forEach((item) => {
          if (item.title === itemName) {
            let currentValue = item.selected;
            if (currentValue && service.required === true) {
              if (service.type === 'RADIOBUTTON') {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'radiobutton'});
              } else {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'checkbox'});
                if (this.checkNotEmptyForm(item.formId, item.optionId)) {
                  this.servicesData[serviceId].options[itemId].selected = !currentValue;
                }
              }
            } else if (!currentValue && service.required === true) {
              if (service.type === 'RADIOBUTTON') {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'radiobutton'});
                this.uncheckAllItems(serviceName);
                this.servicesData[serviceId].options[itemId].selected = !currentValue;
              } else {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'checkbox'});
                this.servicesData[serviceId].options[itemId].selected = !currentValue;
              }
            } else {
              if (service.type === 'RADIOBUTTON') {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'radiobutton'});
                this.uncheckAllItems(serviceName);
              } else {
                this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'checkbox'});
              }
              this.servicesData[serviceId].options[itemId].selected = !currentValue;
            }
          }
          itemId++;
        });
      }
      serviceId++;
    });
    this.calculateOrder();
  }

  checkNotEmptyForm(formId, optionId): boolean {
    let result: boolean = false;
    this.servicesData[formId].options.forEach((option) => {
      if (option.optionId !== optionId) {
        if (option.selected) {
          result = true;
        }
      }
    });

    return result;
  }

  changeValue(formId, optionId) {
    let value = parseInt(this.servicesData[formId].options[optionId].input_value);
    this.analyticsService.sendEvent({category:'Order creation form', action: 'modify', label: 'input'});

    if (isNaN(value) || value === 0) {
      this.servicesData[formId].options[optionId].input_value = 0;
    } else {
      this.servicesData[formId].options[optionId].input_value = value;
    }

    this.calculateOrder();
  }

  selectAllContent($event) {
    $event.target.select();
  }

  uncheckAllItems(serviceName) {
    let serviceId = 0;
    this.servicesData.forEach((service) => {
      if(service.title === serviceName) {
        let itemId = 0;
        service.options.forEach((item) => {
          this.servicesData[serviceId].options[itemId].selected = false;
          itemId++;
        });
      }
      serviceId++;
    });
  }

  queueWorker() {
    this.baseAmount.calculated = this.baseAmount.start;
    this.operands = {
      queueFirst: [],
      queueSecond: [],
      queueEnd: []
    };
    this.finalPrice = 0;

    let serviceId = 0;
    this.servicesData.forEach((service) => {
      let itemId = 0;
      // console.log('Each service: ' + JSON.stringify(service));
      service.options.forEach((item) => {
        if ('input_type' in item) {
          if (item.input_value != 0) {
            if (service.price_type === 'BASE_AMOUNT_PER_INPUT') {
              if (item.input_value !== 0) {
                this.operands.queueSecond.push({
                  type: 'BASE_AMOUNT_PER_INPUT',
                  fieldType: service.type,
                  cnt: item.input_value,
                  amount: item.amount
                });
              }
            }

            if (service.price_type === 'AMOUNT_PER_INPUT') {
              this.operands.queueEnd.push({
                type: 'AMOUNT_PER_INPUT',
                fieldType: service.type,
                cnt: item.input_value,
                amount: item.amount
              });
            }
          }
        }

        if ('selected' in item) {
          if (item.selected) {
            if (service.price_type === 'BASE_AMOUNT') {
              this.baseAmount.calculated = this.baseAmount.start + item.amount;
            }

            if (service.price_type === 'BASE_AMOUNT_INCREMENT') {
              this.operands.queueFirst.push({
                type: 'BASE_AMOUNT_INCREMENT',
                fieldType: service.type,
                cnt: 0,
                amount: item.amount
              });
            }

            if (service.price_type === 'AMOUNT') {
              this.operands.queueEnd.push({
                type: 'AMOUNT',
                fieldType: service.type,
                cnt: 0,
                amount: item.amount
              });
            }
          }
        }
        itemId++;
      });
      serviceId++;
    });

    this.operands.queueFirst.forEach((task) => {
      if (task.type === 'BASE_AMOUNT_INCREMENT') {
        this.baseAmount.calculated += task.amount;
        this.calculateResults.queueFirst = this.baseAmount.calculated;
      }
    });
    this.operands.queueSecond.forEach((task) => {
      if (task.type === 'BASE_AMOUNT_PER_INPUT') {
        this.baseAmount.calculated = this.baseAmount.calculated * task.cnt;
        this.calculateResults.queueSecond = this.baseAmount.calculated;
      }
    });
    this.operands.queueEnd.forEach((task) => {
      if (task.type === 'AMOUNT_PER_INPUT') {
        this.baseAmount.calculated = this.baseAmount.calculated + (task.amount * task.cnt);
        this.calculateResults.queueEnd = this.baseAmount.calculated;
      }
      if (task.type === 'AMOUNT') {
        this.baseAmount.calculated = this.baseAmount.calculated + task.amount;
        this.calculateResults.queueEnd = this.baseAmount.calculated;
      }
    });
  }

  calculateOrder() {
    this.queueWorker();
    this.orderData.services = [];
    this.orderData.totalPrice = this.baseAmount.calculated;
    let currentOrderState = [];
    let serviceId = 0;
    this.servicesData.forEach((service) => {
      let itemId = 0;
      service.options.forEach((item) => {
        if (service.type === 'RADIOBUTTON') {
          if (item.selected) {
            currentOrderState.push({
              name: service.title,
              price_type: service.price_type,
              option: {
                name: item.title,
                price: item.amount
              }
            });
          }
        } else if (service.type === 'CHECKBOX') {
          if (item.selected) {
            currentOrderState.push({
              name: service.title,
              price_type: service.price_type,
              option: {
                name: item.title,
                price: item.amount
              }
            });
          }
        } else if (service.type === 'INPUTTEXT') {
          if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
            currentOrderState.push({
              name: service.title,
              price_type: service.price_type,
              option: {
                name: item.input_value,
                price: item.input_value * this.calculateResults.queueFirst,
                symbol: item.value_symbol
              }
            });
          }

          if (service.price_type === 'AMOUNT_PER_INPUT' && item.input_value != 0) {
            currentOrderState.push({
              name: service.title,
              price_type: service.price_type,
              option: {
                name: item.input_value,
                price: item.amount * item.input_value
              }
            });
          }
        }
        itemId++;
      });
      serviceId++;
    });

    currentOrderState.forEach((service) => {
      if (service.name) {
        this.orderData.services.push(service);
      }
    });

    if (currentOrderState.length > 0) {
      this.orderIsFull = true;
    } else {
      this.orderIsFull = false;
    }
  }

    // toggleService(categoryListId: string, categoryId: string, serviceName: string) {
    // let categoryListIndex = 0;
    // this.servicesCategoryList.forEach((categoryList) => {
    //   let categoryIndex = 0;
    //   if (categoryList._id === categoryListId) {
    //     categoryList.products.forEach((categoryData) => {
    //       if (categoryData._id === categoryId) {
    //         let serviceIndex = 0;
    //         categoryData.items.forEach((serviceData) => {
    //           if (serviceData.name === serviceName) {
    //             this.servicesCategoryList[categoryListIndex].products[categoryIndex].items[serviceIndex].selected = !serviceData.selected;
    //             this.calculateOrder();
    //           } else {
    //             serviceIndex++;
    //           }
    //         });
    //       } else {
    //         categoryIndex++;
    //       }
    //     });
    //   } else {
    //     categoryListIndex++;
    //   }
    // });
    // }

  // calculateOrder() {
  //   this.orderData = [];
  //   let currentOrderState = [];
  //   let arrayIndex = 0;
  //   this.servicesCategoryList.forEach((categoryList) => {
  //     categoryList.products.forEach((service) => {
  //       service.items.forEach((item) => {
  //         if (item.selected) {
  //           if (arrayIndex in currentOrderState) {
  //             currentOrderState[arrayIndex].items.push({ name: item.name });
  //           } else {
  //             currentOrderState[arrayIndex] = {
  //               _id: service._id,
  //               name: service.title,
  //               items: [{
  //                 name: item.name
  //               }]
  //             };
  //           }
  //         }
  //       });
  //       arrayIndex++;
  //     });
  //   });
  //
  //   currentOrderState.forEach((service) => {
  //     if (service.name) {
  //       this.orderData.push(service);
  //     }
  //   });
  //
  //   if (currentOrderState.length > 0) {
  //     this.orderIsFull = true;
  //   } else {
  //     this.orderIsFull = false;
  //   }
  // }

  // tabNavigate(id: string) {
  //   this.activeServiceCategory = id;
  //   this.orderData = [];
  //   this.clearServiceData();
  //   this.renderPage(id);
  //   this.servicesCategoryList.forEach((serviceCategoryData) => {
  //     if (serviceCategoryData._id === id) {
  //       this.activeServiceCategoryType = serviceCategoryData.type;
  //     }
  //   });
  // }

  // renderPage(id: string) {
  //   this.servicesCategoryList.forEach((ServicesList: IServiceCategoryList) => {
  //     if (ServicesList._id === id) {
  //       this.servicesData = ServicesList.products;
  //     }
  //   });
  // }

  ngAfterViewInit() {
    if (this.isServicesView !== false && isBrowser) {
      let elems = document.querySelector('.masonry-container');
      this.masonry = new Masonry(elems, {
        columnWidth: 490,
        itemSelector: '.services-block',
        gutter: 20,
        originLeft: true,
        originTop: true
      });
    }
  }

  makeMasonry() {
    if (isBrowser) {
      if(this.masonry) {
        this.masonry.layout();
      }
    }
  }

  ngOnInit() {
    // this.route.url.subscribe((url) => {
    //   if (0 in url) {
    //     let services = this.homeService.getServicesObject();
    //     if (services) {
    //       this.renderPage(services);
    //     } else {
    //       this.router.navigateByUrl('/');
    //     }
    //   }
    // });

    this.seoService.setTitle('Starbook | Prenota lavorazioni professionali per la tua casa');
    this.seoService.setOgElem('og:title', 'Starbook | Prenota lavorazioni professionali per la tua casa');
    this.seoService.setMetaElem('description', 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.');
    this.seoService.setOgElem('og:description', 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.');
    this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
    this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
    this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');

    this.route.params.subscribe(params => {
      let serviceId = params['id'];
      let services = this.homeService.getServicesObject();
      if (serviceId) {
        this.isServicesView = true;
        if (services) {
          this.renderPage(services);
          if (isBrowser) {
            setTimeout(function () {
              let elems = document.querySelector('.masonry-container');
              this.masonry = new Masonry(elems, {
                columnWidth: 490,
                itemSelector: '.services-block',
                gutter: 20,
                originLeft: true,
                originTop: true
              });
            }, 1);
          }
        } else {
          this.isLoading = true;
          let timeStart = Date.now();
          this.homeService.getServiceById(serviceId)
              .then((data) => {
                this.analyticsService.sendTiming({category: 'Get service by id', timingVar: 'load', timingValue: Date.now()-timeStart});
                this.renderPage(data.result);
                if (isBrowser) {
                  setTimeout(function () {
                    let elems = document.querySelector('.masonry-container');
                    this.masonry = new Masonry(elems, {
                      columnWidth: 490,
                      itemSelector: '.services-block',
                      gutter: 20,
                      originLeft: true,
                      originTop: true
                    });
                  }, 1);
                }
                this.isLoading = false;
              })
              .catch((error) => {
                this.isLoading = false;
                this.router.navigateByUrl('/');
              });
          //this.router.navigateByUrl('/');
        }
      }
    });

    if (isBrowser) {
      this.subscription = this.orderService.getOrderEvent$.subscribe(event => {
        this.orderCreated(event);
      });
    }

    // this.homeService.getCategories()
    //   .then((data) => {
    //     this.parseServiceData(data.result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // this.subscription = this.navigationService.getActiveTab$.subscribe(tab => {
    //   this.activeServiceCategoryType = tab;
    //   this.activeServiceCategory = tab;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  // parseServiceData(data) {
  //   let i = 0;
  //   data.forEach((ServicesList: any) => {
  //     let Products = [];
  //     ServicesList.products.forEach((ServicesCategory) => {
  //       let Items = [];
  //       ServicesCategory.items.forEach((CategoryItem) => {
  //         Items.push({
  //           name: CategoryItem as string,
  //           selected: false
  //         });
  //       });
  //       Products.push({
  //         _id: ServicesCategory._id as number,
  //         title: ServicesCategory.title as string,
  //         items: Items
  //       });
  //     });
  //     this.servicesCategoryList.push({
  //       _id: ServicesList._id as string,
  //       type: ServicesList.type as number,
  //       title: ServicesList.title as string,
  //       icon_code: ServicesList.icon_code as string,
  //       icon_name: ServicesList.icon_name as string,
  //       lang: ServicesList.lang as string,
  //       products: Products
  //     });
  //     if (i === 0) {
  //       this.activeServiceCategory = ServicesList._id;
  //       this.renderPage(ServicesList._id);
  //       i++;
  //     }
  //   });
  // }

  // clearServiceData() {
  //   let categoryListIndex = 0;
  //   this.servicesCategoryList.forEach((categoryList) => {
  //     let categoryIndex = 0;
  //     categoryList.products.forEach((categoryData) => {
  //       let serviceIndex = 0;
  //       categoryData.items.forEach((serviceData) => {
  //         this.servicesCategoryList[categoryListIndex]
  //           .products[categoryIndex]
  //           .items[serviceIndex]
  //           .selected = false;
  //         serviceIndex++;
  //       });
  //       categoryIndex++;
  //     });
  //     categoryListIndex++;
  //   });
  // }

  // swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
  //   if (isBrowser) {
  //     let calculateDelta = this.delta + delta;
  //     let menuSize = 0;
  //     let allMenuItems = document.querySelectorAll('.nav-pills > li');
  //     for (let i = 0; i < allMenuItems.length; i++) {
  //       let menuItem: any = allMenuItems[i];
  //       menuSize += menuItem.offsetWidth;
  //     }
  //     let menuBlockWidth = document.querySelector('.home-tab-bar').clientWidth;
  //     let allowMargin = (menuSize + 50) - menuBlockWidth;
  //     if (allowMargin >= 0) {
  //       allowMargin = -allowMargin;
  //       if (calculateDelta > 0) {
  //         this.delta = -15;
  //       } else {
  //         if (calculateDelta < allowMargin) {
  //           if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
  //             this.delta = allowMargin;
  //           }
  //         } else {
  //           this.delta = calculateDelta;
  //         }
  //       }
  //     }
  //   }
  // }

  orderCreated(event) {
    this.servicesData.forEach((service) => {
      this.uncheckAllItems(service.title);
    });
    this.renderPage(this.defaultServices);
  }
}
