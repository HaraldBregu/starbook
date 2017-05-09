import { isBrowser } from 'angular2-universal';
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { OrderService } from '../../order/order.service';
import { NavigationService } from '../../shared/navigation.service';
import { Subscription }   from 'rxjs/Subscription';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { AnalyticsService } from '../../shared/analytics.service';
import { SeoService } from '../../shared/seo.service';
import { ProfileService } from '../../shared/profile.service';

declare let Masonry: any;

export interface IServiceFormItem {
  formId?: number;
  optionId?: number;
  title: string;
  description?: string;
  image_url?: string;
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
  description?: string;
  image_url?: string;
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
  forms: IServiceForm[];
  technical_details: any[];
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})

export class ServiceComponent implements OnInit {
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
  public servicesData = [];
  public orderData = {
    service_id: '',
    service_image: '',
    price: {
      base_amount: 0
    },
    title: '',
    details: [],
    totalPrice: 0
  };
  public orderIsFull = false;
  public masonry: any;
  public price_state = {
    loading: false,
    is_referral: false,
    referral_id: null
  }
  subscription: Subscription;

  constructor(private homeService: CommonService, private navigationService: NavigationService, private router: Router, private route: ActivatedRoute, private orderService: OrderService, private analyticsService: AnalyticsService, private seoService: SeoService, private profileService: ProfileService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let service_id = params['id'];
      let data = this.homeService.getData();

      this.route.queryParams.subscribe((params: Params) => {
        if (!data.referral_id || data.referral_id.length===0) {
          if (params['ref']) {
            data['referral_id'] = params['ref'];
          }
        }
        if (params['estimated']) {
          // console.log('estimated: ' + params['estimated']);
        }
      });

      // SERVICE
      let service = data.service;
      if (service_id) {
        if (isBrowser) {window.scrollTo(0, 0);}
        if (service) {
          this.renderPage(service);
        } else {
          let timeStart = Date.now();
          this.homeService.getServiceById(service_id).then((data) => {
            this.analyticsService.sendTiming({category: 'Get service by id', timingVar: 'load', timingValue: Date.now()-timeStart});
            this.renderPage(data.result);
          }).catch((error) => {
            this.router.navigateByUrl('/');
          });
        }
      }

      // REFERRAL
      let referral_id = data.referral_id;
      if (referral_id) {
        this.price_state.loading = true;
        this.price_state.is_referral = false;
        this.profileService.getAccountById(referral_id).then((profile) => {
          this.price_state.loading = false;
          this.price_state.is_referral = true;
          this.price_state.referral_id = referral_id;
        }).catch((error) => {
          this.price_state.loading = false;
          this.price_state.is_referral = false;
          this.price_state.referral_id = null;
        });
      }
    });

    if (isBrowser) {
      this.subscription = this.orderService.getOrderEvent$.subscribe(event => {
        this.orderCreated(event);
      });
    }
  }

  renderPage(services: IServices) {
    this.navigationService.updateMessage(services.title);

    this.seoService.setTitle(services.title + "| Preventivo Online");
    this.seoService.setOgElem('og:title', services.title + "| Preventivo Online");
    this.seoService.setMetaElem('description', services.description);
    this.seoService.setOgElem('og:description', services.description);
    this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + services.title.replace(/\s+/g, '-'));
    this.seoService.setOgElem('og:image', services.image_url);
    this.seoService.setOgElem('og:image:secure_url', services.image_url);

    this.defaultServices = services;
    this.title = services.title;
    this.description = services.description;
    this.technical_details = services.technical_details;
    this.image_url = this.defaultServices.image_url;
    this.servicesData = [];
    this.orderData = {
      service_id: services._id,
      service_image: this.image_url,
      price: services.price,
      title: services.title,
      details: [],
      // details: [{title:services.title, type:"service"}],
      totalPrice: services.price.base_amount
    };
    this.baseAmount.start = services.price.base_amount;
    this.baseAmount.calculated = services.price.base_amount;
    let formId = 0;
    services.forms.forEach((form) => {
      let serviceForm: IServiceForm = {
        title: form.title,
        description: form.description,
        image_url: form.image_url,
        type: form.type,
        required: form.required,
        price_type: form.price_type,
        options: []
      };
      let optionId = 0;
      form.options.forEach((item: IServiceFormItem) => {
        var option = {
          formId: formId,
          optionId: optionId,
          title: item.title,
          description: item.description,
          image_url: item.image_url,
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
        optionId ++;
      });
      this.servicesData.push(serviceForm);
      formId ++;
    });
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
              } else {
                if (this.checkNotEmptyForm(item.formId, item.optionId)) {
                  this.servicesData[serviceId].options[itemId].selected = !currentValue;
                }
              }
            } else if (!currentValue && service.required === true) {
              if (service.type === 'RADIOBUTTON') {
                this.uncheckAllItems(serviceName);
                this.servicesData[serviceId].options[itemId].selected = !currentValue;
              } else {
                this.servicesData[serviceId].options[itemId].selected = !currentValue;
              }
            } else {
              if (service.type === 'RADIOBUTTON') {
                this.uncheckAllItems(serviceName);
              } else {
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
    this.orderData.details = [];
    this.orderData.totalPrice = this.baseAmount.calculated;
    let currentOrderState = [];
    let serviceId = 0;
    this.servicesData.forEach((service) => {
      let itemId = 0;
      service.options.forEach((item) => {
        if (service.type === 'RADIOBUTTON') {
          if (item.selected) {
            currentOrderState.push({title: item.title, type:"detail", value:item.input_value});
          }
        } else if (service.type === 'CHECKBOX') {
          if (item.selected) {
            currentOrderState.push({title: item.title, type:"detail", value:item.input_value});
          }
        } else if (service.type === 'INPUTTEXT') {
          if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
            currentOrderState.push({title: item.title, type:"detail", value:item.input_value});
          }
          if (service.price_type === 'AMOUNT_PER_INPUT' && item.input_value != 0) {
            currentOrderState.push({title: item.title, type:"detail", value:item.input_value});
          }
        }
        itemId++;
      });
      serviceId++;
    });

    currentOrderState.forEach((service) => {
      if (service.title) {
        // console.log('serivces is: ' + JSON.stringify(service));
        this.orderData.details.push(service);
      }
    });

    if (currentOrderState.length > 0) {
      this.orderIsFull = true;
    } else {
      this.orderIsFull = false;
    }
  }

  orderCreated(event) {
    this.servicesData.forEach((service) => {
      this.uncheckAllItems(service.title);
    });
    this.renderPage(this.defaultServices);
  }
}
