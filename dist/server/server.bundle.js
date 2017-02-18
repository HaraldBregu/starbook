module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = (function () {
    function NavigationService() {
        this.headerMessage = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.authData = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.activeTab = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.loadingStatus = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getMessage$ = this.headerMessage.asObservable();
            this.getPersonalMenu$ = this.authData.asObservable();
            this.getActiveTab$ = this.activeTab.asObservable();
            this.getLoadingStatus$ = this.loadingStatus.asObservable();
        }
    }
    NavigationService.prototype.updateMessage = function (message) {
        this.headerMessage.next(message);
    };
    NavigationService.prototype.updatePersonalMenu = function (auth) {
        this.authData.next(auth);
    };
    NavigationService.prototype.updateActiveTab = function (tab) {
        this.activeTab.next(tab);
    };
    NavigationService.prototype.updateLoadingStatus = function (status) {
        this.loadingStatus.next(status);
    };
    NavigationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], NavigationService);
    return NavigationService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/navigation.service.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopupsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupsService = (function () {
    function PopupsService() {
        this.activePopup = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.popupResponse = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getActivePopup$ = this.activePopup.asObservable();
            this.getPopupResponse$ = this.popupResponse.asObservable();
        }
    }
    PopupsService.prototype.activate = function (popup) {
        this.activePopup.next(popup);
    };
    PopupsService.prototype.actionComplete = function (data) {
        this.popupResponse.next(data);
    };
    PopupsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], PopupsService);
    return PopupsService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.service.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsService = (function () {
    function AnalyticsService() {
    }
    AnalyticsService.prototype.sendTiming = function (timingData) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            ga('send', 'timing', timingData.category, timingData.timingVar, timingData.timingValue);
        }
    };
    AnalyticsService.prototype.sendEvent = function (event) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            ga('send', 'event', event.category, event.action, event.label);
        }
    };
    AnalyticsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AnalyticsService);
    return AnalyticsService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/analytics.service.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NavigationService } from '../shared/navigation.service';
var HomeService = (function () {
    function HomeService(http /*, private navigationService: NavigationService*/) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    HomeService.prototype.sendServices = function (services) {
        this.servicesObject = services;
    };
    HomeService.prototype.getServicesObject = function () {
        return this.servicesObject;
    };
    HomeService.prototype.getCategories = function () {
        // this.navigationService.updateLoadingStatus(true);
        var queryString = 'categories';
        return this.http
            .get(this.api + queryString)
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    HomeService.prototype.getServices = function () {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.get(this.api + 'featured')
            .toPromise()
            .then(function (services) {
            // this.navigationService.updateLoadingStatus(false);
            return services.json();
        })
            .catch(this.handleError);
    };
    HomeService.prototype.search = function (query) {
        return this.http.get(this.api + 'search?title=' + query)
            .toPromise()
            .then(function (results) {
            return results.json();
        })
            .catch(this.handleError);
    };
    HomeService.prototype.getServiceById = function (id) {
        return this.http.get(this.api + 'services/' + id)
            .toPromise()
            .then(function (results) {
            return results.json();
        })
            .catch(this.handleError);
    };
    HomeService.prototype.handleError = function (error) {
        // this.navigationService.updateLoadingStatus(false);
        return Promise.reject(error.message || error);
    };
    HomeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], HomeService);
    return HomeService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/home.service.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = (function () {
    function OrderService(http /*, private navigationService: NavigationService*/) {
        this.http = http;
        this.orderEvent = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.api = 'https://api.starbook.co/v0.9.1/';
        this.googleApi = 'https://maps.googleapis.com/maps/api/geocode/json';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getOrderEvent$ = this.orderEvent.asObservable();
        }
    }
    OrderService.prototype.makeEvent = function (event) {
        this.orderEvent.next(event);
    };
    OrderService.prototype._makeHeaders = function () {
        var headers;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                this.auth = JSON.parse(localStorage.getItem('auth'));
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': this.auth.token });
            }
            else {
                this.auth = false;
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
            }
        }
        else {
            this.auth = false;
            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
        }
        return { headers: headers };
    };
    OrderService.prototype.saveOrder = function (orderData) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'orders', {
            service_id: orderData.service_id,
            description: orderData.delivery_description,
            details: orderData.delivery_details,
            date: orderData.delivery_date,
            address: {
                street: orderData.street,
                street_number: orderData.street_number,
                city: orderData.city,
                postal_code: orderData.postal_code,
                province: orderData.province,
                country: orderData.country,
                country_code: orderData.country_code
            },
            payment: {
                amount: orderData.payment.amount,
                currency: orderData.payment.currency
            }
        }, this._makeHeaders())
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(this.handleError);
    };
    OrderService.prototype.getAddresses = function (key) {
        // this.navigationService.updateLoadingStatus(true);
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var addresses = [];
        params.set('address', key);
        params.set('language', 'it');
        params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M');
        return this.http.get(this.googleApi, { search: params })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json().results;
            data.forEach(function (address) {
                var addressData = {
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
                address.address_components.forEach(function (components) {
                    switch (components.types[0]) {
                        case 'street_number':
                            addressData.street_number = components.long_name;
                            break;
                        case 'route':
                            addressData.street = components.long_name;
                            break;
                        case 'locality':
                            addressData.city = components.long_name;
                            break;
                        case 'administrative_area_level_2':
                            addressData.province = components.long_name;
                            break;
                        case 'country':
                            addressData.country = components.long_name;
                            addressData.country_code = components.short_name;
                            break;
                        case 'postal_code':
                            addressData.postal_code = components.long_name;
                    }
                });
                addressData.formattedAddress = address.formatted_address;
                if (address.types[0] === 'street_address') {
                    addressData.isFull = true;
                }
                if (addressData.country_code === 'IT') {
                    addresses.push(addressData);
                }
            });
            return addresses;
        })
            .catch(this.handleError);
    };
    OrderService.prototype.handleError = function (error) {
        return Promise.reject(error);
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.service.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, navigationService) {
        this.http = http;
        this.navigationService = navigationService;
        this.api = 'https://api.starbook.co/v0.9.1/';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                this.auth = JSON.parse(localStorage.getItem('auth'));
            }
            else {
                this.auth = false;
            }
        }
        else {
            this.auth = false;
        }
    }
    AuthService.prototype.authInit = function () {
        return this.auth;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'login', { email: email, password: password })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json();
            if (data.success === true) {
                var authData = {
                    _id: data.result._id,
                    email: data.result.email,
                    phone_number: data.result.phone_number,
                    account_types: data.result.account_types,
                    profile: data.result.profile,
                    company: data.result.company,
                    address: data.result.address,
                    services: data.result.services,
                    locations: data.result.locations,
                    payment: data.result.payment,
                    created_at: data.result.created_at,
                    updated_at: data.result.updated_at,
                    token: data.token
                };
                if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                    localStorage.setItem('auth', JSON.stringify(authData));
                }
                _this.navigationService.updatePersonalMenu(data.result);
                return authData;
            }
            else {
                _this.handleError(data.message);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.signup = function (name, phone, email, password) {
        var _this = this;
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'signup', { fullname: name, phone_number: phone, email: email, password: password })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json();
            if (data.success === true) {
                var authData = {
                    _id: data.result._id,
                    email: data.result.email,
                    phone_number: '',
                    account_types: data.result.account_types,
                    profile: data.result.profile,
                    company: data.result.company,
                    address: data.result.address,
                    services: data.result.services,
                    locations: data.result.locations,
                    payment: data.result.payment,
                    created_at: data.result.created_at,
                    updated_at: data.result.updated_at,
                    token: data.token
                };
                if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                    localStorage.setItem('auth', JSON.stringify(authData));
                }
                return data.result;
            }
            else {
                _this.handleError(data.message);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.recovery = function (email) {
        var _this = this;
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'password_recovery', { email: email })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json();
            if (data.success === true) {
                return true;
            }
            else {
                _this.handleError(data.message);
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.getUserData = function () {
        return this.auth;
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.status || error);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/auth.service.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrdersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    OrdersService.prototype._makeHeaders = function () {
        var headers;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                this.auth = JSON.parse(localStorage.getItem('auth'));
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': this.auth.token });
            }
            else {
                this.auth = false;
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
            }
        }
        else {
            this.auth = false;
            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
        }
        return headers;
    };
    OrdersService.prototype.getOrders = function (params) {
        // this.navigationService.updateLoadingStatus(true);
        var paramsToRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.forEach(function (peram) {
            paramsToRequest.set(peram.name, peram.value);
        });
        return this.http.get(this.api + 'orders', { headers: this._makeHeaders(), search: paramsToRequest })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    OrdersService.prototype.getCategories = function () {
        return ['Idraulico', 'Elettricista', 'Fabbro', 'Spazzacamino', 'Antennista', 'Pulizie', 'Edilizia', 'Giardinaggio', 'Informatica'];
    };
    OrdersService.prototype.modifyOrder = function (id, type) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.put(this.api + 'orders/' + id, { action: type }, { headers: this._makeHeaders() })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return true;
        })
            .catch(this.handleError);
    };
    OrdersService.prototype.addPrice = function (id, type, price) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.put(this.api + 'orders/' + id, { action: type, payment: { amount: price, currency: "eur" } }, { headers: this._makeHeaders() })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    OrdersService.prototype.handleError = function (error) {
        // this.navigationService.updateLoadingStatus(false);
        return Promise.reject(error.status || error);
    };
    OrdersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], OrdersService);
    return OrdersService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.service.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    PaymentService.prototype._makeHeaders = function () {
        var headers;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                this.auth = JSON.parse(localStorage.getItem('auth'));
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': this.auth.token });
            }
            else {
                this.auth = false;
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
            }
        }
        else {
            this.auth = false;
            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
        }
        return { headers: headers };
    };
    PaymentService.prototype.getToken = function (card) {
        return new Promise(function (resolve, reject) {
            window.Stripe.card.createToken({
                number: card.number,
                exp_month: card.exp_month,
                exp_year: card.exp_year,
                cvc: card.cvc,
                name: card.name,
                address_line1: card.address_line1,
                address_line2: card.address_line2,
                address_city: card.address_city,
                address_zip: card.address_zip,
                address_state: card.address_state,
                address_country: card.address_country
            }, function (status, response) {
                if (status === 200) {
                    var stripeResponse = {
                        token: response.id,
                        data: response.card
                    };
                    resolve(stripeResponse);
                }
                else {
                    reject(status);
                }
            });
        });
    };
    PaymentService.prototype.cardNumberValidate = function (cardNumber) {
        return window.Stripe.card.validateCardNumber(cardNumber);
    };
    PaymentService.prototype.addNewCard = function (cardData) {
        var _this = this;
        // this.navigationService.updateLoadingStatus(true);
        return this.getToken(cardData)
            .then(function (data) {
            return _this.http.post(_this.api + 'me/cards', { source: data.token }, _this._makeHeaders())
                .toPromise()
                .then(function (response) {
                // this.navigationService.updateLoadingStatus(false);
                return response.json();
            })
                .catch(_this.handleError);
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.selectCard = function (cardId) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'me/customers', { default_source: cardId }, this._makeHeaders())
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.deleteCard = function (cardId) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.delete(this.api + 'me/cards/' + cardId, this._makeHeaders())
            .toPromise()
            .then(function (status) {
            // this.navigationService.updateLoadingStatus(false);
            return status.json();
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.editCard = function (cardId, cardData) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'me/cards/' + cardId, cardData, this._makeHeaders())
            .toPromise()
            .then(function (status) {
            // this.navigationService.updateLoadingStatus(false);
            return status.json();
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.getCards = function () {
        return this.http.get(this.api + 'me/customers', this._makeHeaders())
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    PaymentService.prototype.handleError = function (error) {
        return Promise.reject(error);
    };
    PaymentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], PaymentService);
    return PaymentService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/payment.service.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SeoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SeoService = (function () {
    function SeoService(_document) {
        this._document = _document;
        this._dom = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["__platform_browser_private__"].getDOM();
    }
    SeoService.prototype.setTitle = function (title) {
        this._document.title = title;
    };
    SeoService.prototype.setMetaElem = function (name, value) {
        var headTags = this._document.head.children;
        for (var i = 0; i < headTags.length; i++) {
            var elem = headTags[i];
            if (elem.tagName === 'meta') {
                var attr = elem['attribs'];
                if ('name' in attr) {
                    if (attr.name === name) {
                        this._dom.remove(elem);
                    }
                }
            }
        }
        var el = this._dom.createElement('meta');
        this._dom.setAttribute(el, 'name', name);
        this._dom.setAttribute(el, 'content', value);
        this._dom.appendChild(this._document.head, el);
    };
    SeoService.prototype.setOgElem = function (name, value) {
        var headTags = this._document.head.children;
        for (var i = 0; i < headTags.length; i++) {
            var elem = headTags[i];
            if (elem.tagName === 'meta') {
                var attr = elem['attribs'];
                if ('property' in attr) {
                    if (attr.property === name) {
                        this._dom.remove(elem);
                    }
                }
            }
        }
        var el = this._dom.createElement('meta');
        this._dom.setAttribute(el, 'property', name);
        this._dom.setAttribute(el, 'content', value);
        this._dom.appendChild(this._document.head, el);
    };
    SeoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])), 
        __metadata('design:paramtypes', [Object])
    ], SeoService);
    return SeoService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/seo.service.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    // @ViewChild(AngularMasonry) masonry: AngularMasonry;
    // @ViewChild(MasonryModule) layout: MasonryModule;
    function HomeComponent(homeService, navigationService, router, route, orderService, analyticsService, seoService) {
        this.homeService = homeService;
        this.navigationService = navigationService;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.baseAmount = {
            start: 0,
            calculated: 0
        };
        this.calculateResults = {
            queueFirst: 0,
            queueSecond: 0,
            queueEnd: 0
        };
        this.operands = {
            queueFirst: [],
            queueSecond: [],
            queueEnd: []
        };
        this.finalPrice = 0;
        this.servicesCategoryList = [];
        this.isServicesView = false;
        this.servicesData = [];
        this.activeServiceCategory = false;
        this.activeServiceCategoryType = false;
        this.orderData = {
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
        this.orderIsFull = false;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.delta = -15;
        this.isLoading = false;
    }
    HomeComponent.prototype.renderPage = function (services) {
        var _this = this;
        this.navigationService.updateMessage(services.title);
        this.seoService.setTitle(services.title);
        this.seoService.setMetaElem('description', services.description);
        this.seoService.setOgElem('og:title', services.title);
        this.seoService.setOgElem('og:description', services.description);
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + services._id);
        this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
        this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
        this.defaultServices = services;
        this.isServicesView = true;
        this.servicesData = [
            {
                type: 'content',
                image: services.image_url,
                description: services.description,
                options: []
            }
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
        var formId = 1;
        services.forms.forEach(function (form) {
            // console.log(form);
            var title_1;
            if (form.title_1) {
                title_1 = form.title_1;
            }
            else {
                title_1 = form.title;
            }
            var serviceForm = {
                title: form.title,
                title_1: title_1,
                type: form.type,
                required: form.required,
                price_type: form.price_type,
                options: []
            };
            var optionId = 0;
            form.options.forEach(function (item) {
                // console.log(item);
                var title_1;
                if (item.title_1) {
                    title_1 = item.title_1;
                }
                else {
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
                }
                else {
                    option['selected'] = false;
                }
                serviceForm.options.push(option);
                optionId++;
            });
            _this.servicesData.push(serviceForm);
            formId++;
        });
        this.calculateOrder();
    };
    HomeComponent.prototype.toggleService = function (serviceName, itemName) {
        var _this = this;
        var serviceId = 0;
        this.servicesData.forEach(function (service) {
            if (service.title === serviceName) {
                var itemId_1 = 0;
                service.options.forEach(function (item) {
                    if (item.title === itemName) {
                        var currentValue = item.selected;
                        if (currentValue && service.required === true) {
                            if (service.type === 'RADIOBUTTON') {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'radiobutton' });
                            }
                            else {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'checkbox' });
                                if (_this.checkNotEmptyForm(item.formId, item.optionId)) {
                                    _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                                }
                            }
                        }
                        else if (!currentValue && service.required === true) {
                            if (service.type === 'RADIOBUTTON') {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'radiobutton' });
                                _this.uncheckAllItems(serviceName);
                                _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                            }
                            else {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'checkbox' });
                                _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                            }
                        }
                        else {
                            if (service.type === 'RADIOBUTTON') {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'radiobutton' });
                                _this.uncheckAllItems(serviceName);
                            }
                            else {
                                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'checkbox' });
                            }
                            _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                        }
                    }
                    itemId_1++;
                });
            }
            serviceId++;
        });
        this.calculateOrder();
    };
    HomeComponent.prototype.checkNotEmptyForm = function (formId, optionId) {
        var result = false;
        this.servicesData[formId].options.forEach(function (option) {
            if (option.optionId !== optionId) {
                if (option.selected) {
                    result = true;
                }
            }
        });
        return result;
    };
    HomeComponent.prototype.changeValue = function (formId, optionId) {
        var value = parseInt(this.servicesData[formId].options[optionId].input_value);
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'input' });
        if (isNaN(value) || value === 0) {
            this.servicesData[formId].options[optionId].input_value = 0;
        }
        else {
            this.servicesData[formId].options[optionId].input_value = value;
        }
        this.calculateOrder();
    };
    HomeComponent.prototype.selectAllContent = function ($event) {
        $event.target.select();
    };
    HomeComponent.prototype.uncheckAllItems = function (serviceName) {
        var _this = this;
        var serviceId = 0;
        this.servicesData.forEach(function (service) {
            if (service.title === serviceName) {
                var itemId_2 = 0;
                service.options.forEach(function (item) {
                    _this.servicesData[serviceId].options[itemId_2].selected = false;
                    itemId_2++;
                });
            }
            serviceId++;
        });
    };
    HomeComponent.prototype.queueWorker = function () {
        var _this = this;
        this.baseAmount.calculated = this.baseAmount.start;
        this.operands = {
            queueFirst: [],
            queueSecond: [],
            queueEnd: []
        };
        this.finalPrice = 0;
        var serviceId = 0;
        this.servicesData.forEach(function (service) {
            var itemId = 0;
            service.options.forEach(function (item) {
                if ('input_type' in item) {
                    if (item.input_value != 0) {
                        if (service.price_type === 'BASE_AMOUNT_PER_INPUT') {
                            if (item.input_value !== 0) {
                                _this.operands.queueSecond.push({
                                    type: 'BASE_AMOUNT_PER_INPUT',
                                    fieldType: service.type,
                                    cnt: item.input_value,
                                    amount: item.amount
                                });
                            }
                        }
                        if (service.price_type === 'AMOUNT_PER_INPUT') {
                            _this.operands.queueEnd.push({
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
                            _this.baseAmount.calculated = _this.baseAmount.start + item.amount;
                        }
                        if (service.price_type === 'BASE_AMOUNT_INCREMENT') {
                            _this.operands.queueFirst.push({
                                type: 'BASE_AMOUNT_INCREMENT',
                                fieldType: service.type,
                                cnt: 0,
                                amount: item.amount
                            });
                        }
                        if (service.price_type === 'AMOUNT') {
                            _this.operands.queueEnd.push({
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
        this.operands.queueFirst.forEach(function (task) {
            if (task.type === 'BASE_AMOUNT_INCREMENT') {
                _this.baseAmount.calculated += task.amount;
                _this.calculateResults.queueFirst = _this.baseAmount.calculated;
            }
        });
        this.operands.queueSecond.forEach(function (task) {
            if (task.type === 'BASE_AMOUNT_PER_INPUT') {
                _this.baseAmount.calculated = _this.baseAmount.calculated * task.cnt;
                _this.calculateResults.queueSecond = _this.baseAmount.calculated;
            }
        });
        this.operands.queueEnd.forEach(function (task) {
            if (task.type === 'AMOUNT_PER_INPUT') {
                _this.baseAmount.calculated = _this.baseAmount.calculated + (task.amount * task.cnt);
                _this.calculateResults.queueEnd = _this.baseAmount.calculated;
            }
            if (task.type === 'AMOUNT') {
                _this.baseAmount.calculated = _this.baseAmount.calculated + task.amount;
                _this.calculateResults.queueEnd = _this.baseAmount.calculated;
            }
        });
    };
    HomeComponent.prototype.calculateOrder = function () {
        var _this = this;
        this.queueWorker();
        this.orderData.services = [];
        this.orderData.totalPrice = this.baseAmount.calculated;
        var currentOrderState = [];
        var serviceId = 0;
        this.servicesData.forEach(function (service) {
            var itemId = 0;
            service.options.forEach(function (item) {
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
                }
                else if (service.type === 'CHECKBOX') {
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
                }
                else if (service.type === 'INPUTTEXT') {
                    if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
                        currentOrderState.push({
                            name: service.title,
                            price_type: service.price_type,
                            option: {
                                name: item.input_value,
                                price: item.input_value * _this.calculateResults.queueFirst,
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
        currentOrderState.forEach(function (service) {
            if (service.name) {
                _this.orderData.services.push(service);
            }
        });
        if (currentOrderState.length > 0) {
            this.orderIsFull = true;
        }
        else {
            this.orderIsFull = false;
        }
    };
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
    HomeComponent.prototype.ngAfterViewInit = function () {
        if (this.isServicesView !== false && __WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var elems = document.querySelector('.masonry-container');
            this.masonry = new Masonry(elems, {
                columnWidth: 490,
                itemSelector: '.services-block',
                gutter: 18,
                originLeft: true,
                originTop: true
            });
        }
    };
    HomeComponent.prototype.makeMasonry = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (this.masonry) {
                this.masonry.layout();
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
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
        var _this = this;
        this.seoService.setTitle('Starbook | Acquista servizi professionali online');
        this.seoService.setMetaElem('description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
        this.seoService.setOgElem('og:title', 'Starbook | Acquista servizi professionali online');
        this.seoService.setOgElem('og:description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
        this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
        this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
        this.route.params.subscribe(function (params) {
            var serviceId = params['id'];
            var services = _this.homeService.getServicesObject();
            if (serviceId) {
                _this.isServicesView = true;
                if (services) {
                    _this.renderPage(services);
                    if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                        setTimeout(function () {
                            var elems = document.querySelector('.masonry-container');
                            this.masonry = new Masonry(elems, {
                                columnWidth: 490,
                                itemSelector: '.services-block',
                                gutter: 18,
                                originLeft: true,
                                originTop: true
                            });
                        }, 1);
                    }
                }
                else {
                    _this.isLoading = true;
                    var timeStart_1 = Date.now();
                    _this.homeService.getServiceById(serviceId)
                        .then(function (data) {
                        _this.analyticsService.sendTiming({ category: 'Get service by id', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
                        _this.renderPage(data.result);
                        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                            setTimeout(function () {
                                var elems = document.querySelector('.masonry-container');
                                this.masonry = new Masonry(elems, {
                                    columnWidth: 490,
                                    itemSelector: '.services-block',
                                    gutter: 18,
                                    originLeft: true,
                                    originTop: true
                                });
                            }, 1);
                        }
                        _this.isLoading = false;
                    })
                        .catch(function (error) {
                        _this.isLoading = false;
                        _this.router.navigateByUrl('/');
                    });
                }
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription = this.orderService.getOrderEvent$.subscribe(function (event) {
                _this.orderCreated(event);
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
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
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
    HomeComponent.prototype.orderCreated = function (event) {
        var _this = this;
        this.servicesData.forEach(function (service) {
            _this.uncheckAllItems(service.title);
        });
        this.renderPage(this.defaultServices);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(42)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/home.component.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersComponent = (function () {
    function OrdersComponent(navigationService, ordersService, popupsService, analyticsService) {
        this.navigationService = navigationService;
        this.ordersService = ordersService;
        this.popupsService = popupsService;
        this.analyticsService = analyticsService;
        this.selectTab = false;
        this.taglines = {
            'Richieste dei clienti': 'Richieste dei clienti',
            'I miei ordini': 'I miei ordini',
            'Archivio': 'Archivio di tutti gli ordini'
        };
        this.tabs = [
            { name: 'I miei ordini', selected: false },
            { name: 'Archivio', selected: false }
        ];
        this.categories = [];
        this.pageData = [];
        this.requestIsComplete = false;
        this.isVendor = false;
        this.emptyListTitle = '';
        this.isLoading = false;
        this.authData = {};
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                var authData = JSON.parse(localStorage.getItem('auth'));
                this.authData = authData;
                authData.account_types.forEach(function (type) {
                    if (type === 'VENDOR') {
                        _this.isVendor = true;
                    }
                });
                if (this.isVendor) {
                    this.tabs = [
                        { name: 'Richieste dei clienti', selected: false },
                        { name: 'I miei ordini', selected: false },
                        { name: 'Archivio', selected: false }
                    ];
                    this.renderPage('Richieste dei clienti');
                }
                else {
                    this.renderPage('I miei ordini');
                }
            }
            else {
                this.renderPage('I miei ordini');
            }
        }
        else {
            this.renderPage('I miei ordini');
        }
        this.categories = this.ordersService.getCategories();
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                var orderIndex = 0;
                switch (action.type) {
                    case 'confirmOrder':
                        orderIndex = 0;
                        _this.pageData.forEach(function (orderData) {
                            if (orderData._id === action.data.orderId) {
                                _this.pageData[orderIndex].status = 1;
                            }
                            orderIndex++;
                        });
                        break;
                    case 'cancelOrder':
                        orderIndex = 0;
                        _this.pageData.forEach(function (orderData) {
                            if (orderData._id === action.data.orderId) {
                                _this.pageData[orderIndex].status = 99;
                            }
                            orderIndex++;
                        });
                        break;
                    case 'reactivateOrder':
                        orderIndex = 0;
                        _this.pageData.forEach(function (orderData) {
                            if (orderData._id === action.data.orderId) {
                                _this.pageData[orderIndex].status = 0;
                            }
                            orderIndex++;
                        });
                        break;
                    case 'addPrice':
                        if (action.data.isModified === 0) {
                            _this.renderPage(_this.selectTab);
                        }
                        else {
                            orderIndex = 0;
                            _this.pageData.forEach(function (orderData) {
                                if (orderData._id === action.data.orderId) {
                                    // this.pageData[orderIndex].status = 2;
                                    // this.pageData[orderIndex].payment = {amount: action.data.orderPrice, currency: 'eur'};
                                    _this.pageData.splice(orderIndex, 1);
                                }
                                orderIndex++;
                            });
                        }
                        break;
                    case 'editPrice':
                        orderIndex = 0;
                        _this.pageData.forEach(function (orderData) {
                            if (orderData._id === action.data.orderId) {
                                _this.pageData[orderIndex].status = 2;
                                _this.pageData[orderIndex].payment.amount = action.data.orderPrice;
                                _this.pageData[orderIndex].payment.currency = 'eur';
                            }
                            orderIndex++;
                        });
                        break;
                    case 'continueOrder':
                        orderIndex = 0;
                        _this.pageData.forEach(function (orderData) {
                            if (orderData._id === action.data.orderId) {
                                _this.pageData.splice(orderIndex, 1);
                            }
                            orderIndex++;
                        });
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
    };
    OrdersComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
        }
    };
    OrdersComponent.prototype.renderPage = function (page) {
        var _this = this;
        this.requestIsComplete = false;
        this.selectTab = page;
        var tabIndex = 0;
        this.tabs.forEach(function (tab) {
            if (tab.name === page) {
                _this.tabs[tabIndex].selected = true;
            }
            else {
                _this.tabs[tabIndex].selected = false;
            }
            tabIndex++;
        });
        var params = [];
        if (page === 'Richieste dei clienti') {
            this.requestIsComplete = false;
            this.emptyListTitle = 'Non ci sono ordini richiesti dai clienti per il momento';
            params = [];
            params.push({ name: 'order_type', value: 'RECEIVED' });
        }
        if (page === 'I miei ordini') {
            this.requestIsComplete = false;
            this.emptyListTitle = 'Non ci sono ordini effettuati';
            params = [];
            params.push({ name: 'order_type', value: 'REQUIRED' });
        }
        if (page === 'Archivio') {
            this.requestIsComplete = false;
            this.emptyListTitle = "L'archivio degli ordini e vuota";
            params = [];
            params.push({ name: 'order_type', value: 'ARCHIVE' });
        }
        this.isLoading = true;
        var timeStart = Date.now();
        this.ordersService.getOrders(params)
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Get list of orders', timingVar: 'load', timingValue: Date.now() - timeStart });
            _this.isLoading = false;
            _this.requestIsComplete = true;
            if (response.result !== null) {
                _this.pageData = response.result;
            }
            else {
                _this.pageData = [];
            }
        })
            .catch(function (error) {
            _this.isLoading = false;
        });
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            this.navigationService.updateMessage(this.taglines[page]);
        }
    };
    OrdersComponent.prototype.dateFormating = function (date) {
        var returnDate = '';
        if (date !== 'now') {
            var dateString = date.substring(0, date.length - 5);
            dateString = dateString.split('T');
            var dateComponents = dateString[0].split('-');
            var hourComponents = dateString[1].split(':');
            returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1] - 1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
        }
        else {
            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = 1 + currentDate.getMonth();
            var year = currentDate.getFullYear();
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();
            returnDate += year;
            returnDate += month > 9 ? '-' + month : '-0' + month;
            returnDate += day > 9 ? '-' + day : '-0' + day;
            returnDate += hours > 9 ? 'T' + hours : 'T0' + hours;
            returnDate += minutes > 9 ? ':' + minutes : ':0' + minutes;
            returnDate += seconds > 9 ? ':' + seconds + '.000Z' : ':0' + seconds + '.000Z';
        }
        return returnDate;
    };
    OrdersComponent.prototype.dateCompare = function (date1, date2) {
        var date1Obj = Date.parse(date1);
        var date2Obj = Date.parse(date2);
        if (date1Obj > date2Obj) {
            return true;
        }
        else {
            return false;
        }
    };
    OrdersComponent.prototype.itemsFormating = function (items) {
        var returnProducts = [];
        var products = items.split('||');
        products.forEach(function (product) {
            var productComponents = product.split(':');
            if (productComponents[0].length > 0) {
                returnProducts.push({ name: productComponents[0], items: productComponents[1] });
            }
        });
        return returnProducts;
    };
    OrdersComponent.prototype.confirmOrder = function (id) {
        this.popupsService.activate({ type: 'confirmOrder', data: { orderId: id } });
    };
    OrdersComponent.prototype.cancelOrder = function (id) {
        this.popupsService.activate({ type: 'cancelOrder', data: { orderId: id } });
    };
    OrdersComponent.prototype.reactivateOrder = function (id) {
        this.popupsService.activate({ type: 'reactivateOrder', data: { orderId: id } });
    };
    OrdersComponent.prototype.completaOrder = function (id) {
        this.popupsService.activate({ type: 'addPrice', data: { orderId: id } });
    };
    OrdersComponent.prototype.editOrder = function (id, payment) {
        this.popupsService.activate({ type: 'editPrice', data: { orderId: id, payment: payment } });
    };
    OrdersComponent.prototype.continueOrder = function (id, payment) {
        this.popupsService.activate({ type: 'continueOrder', data: { orderId: id, payment: payment, information: '120€ + 6.6€ = 126.6€' } });
    };
    OrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(44)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileComponent = (function () {
    function ProfileComponent(profileService, router, navigationService, route, popupsService, paymentService, analyticsService, seoService) {
        this.profileService = profileService;
        this.router = router;
        this.navigationService = navigationService;
        this.route = route;
        this.popupsService = popupsService;
        this.paymentService = paymentService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.selectTab = false;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.delta = 0;
        this.tabs = [
            { name: 'Generali', selected: false, url: 'settings' },
            { name: 'Metodo di Pagamento', selected: false, url: 'payment' },
            { name: 'Condizioni d’utilizzo', selected: false, url: 'conditions' },
            { name: 'Privacy Policy', selected: false, url: 'privacy' },
            { name: 'Assistenza', selected: false, url: 'help' }
        ];
        this.userData = {
            fullname: '',
            email: '',
            phone_number: '',
            street: '',
            city: '',
            postal_code: null,
            province: '',
            country: ''
        };
        this.activePopup = '';
        this.changePasswordError = {
            currentPassword: false,
            passwordConfirm: false
        };
        this.changePasswordData = {
            currentPassword: '',
            newPassword: '',
            passwordConfirm: ''
        };
        this.formError = false;
        this.cards = [];
        this.defaultCard = '';
        this.isLoading = false;
        this.isAuthenticated = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                var authData = JSON.parse(localStorage.getItem('auth'));
                this.userData.fullname = authData.fullname;
                this.userData.email = authData.email;
                this.isAuthenticated = true;
            }
            else {
                this.isAuthenticated = false;
                // this.router.navigate(['/']);
                this.tabs = [
                    { name: 'Condizioni d’utilizzo', selected: false, url: 'conditions' },
                    { name: 'Privacy Policy', selected: false, url: 'privacy' },
                    { name: 'Assistenza', selected: false, url: 'help' }
                ];
            }
        }
        else {
            this.isAuthenticated = false;
            // this.router.navigate(['/']);
            this.tabs = [
                { name: 'Condizioni d’utilizzo', selected: false, url: 'conditions' },
                { name: 'Privacy Policy', selected: false, url: 'privacy' },
                { name: 'Assistenza', selected: false, url: 'help' }
            ];
        }
        // this.navigationService.updateMessage('Il mio account');
        this.route.params.subscribe(function (params) {
            _this.selectTab = params['page'];
            if (params['page'] === 'payment') {
                _this.navigationService.updateMessage('Metodo di pagamento');
                _this.isLoading = true;
                var timeStart_1 = Date.now();
                _this.paymentService.getCards()
                    .then(function (cards) {
                    if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                        _this.analyticsService.sendTiming({ category: 'Get list of cards', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
                    }
                    _this.defaultCard = cards.default_source;
                    _this.cards = [];
                    cards.sources.data.forEach(function (cardData) {
                        _this.cards.push(cardData);
                    });
                    _this.isLoading = false;
                })
                    .catch(function (error) {
                    _this.isLoading = false;
                    if (error.status === 404) {
                    }
                    // if (error.json().message) {
                    //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: error.json().message}});
                    // } else {
                    //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: 'An error has occurred'}});
                    // }
                });
            }
            if (params['page'] === 'settings') {
                _this.navigationService.updateMessage('Informazioni del mio account');
                _this.isLoading = true;
                var timeStart_2 = Date.now();
                _this.profileService.getProfile()
                    .then(function (profile) {
                    if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                        _this.analyticsService.sendTiming({ category: 'Get user profile', timingVar: 'load', timingValue: Date.now() - timeStart_2 });
                    }
                    _this.userData.fullname = profile.result.profile.fullname;
                    _this.userData.email = profile.result.email;
                    _this.userData.phone_number = profile.result.phone_number;
                    _this.userData.street = profile.result.address.street;
                    _this.userData.city = profile.result.address.city;
                    _this.userData.postal_code = profile.result.address.postal_code;
                    _this.userData.province = profile.result.address.province;
                    _this.userData.country = profile.result.address.country;
                    _this.isLoading = false;
                })
                    .catch(function (error) {
                    _this.isLoading = false;
                    if (error.json().message) {
                        _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: error.json().message } });
                    }
                    else {
                        _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: 'An error has occurred' } });
                    }
                });
            }
            if (params['page'] === 'conditions') {
                _this.navigationService.updateMessage('Termini e condizioni d’utilizzo');
                _this.seoService.setTitle('Termini e condizioni d’utilizzo');
                _this.seoService.setMetaElem('description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:title', 'Termini e condizioni d’utilizzo');
                _this.seoService.setOgElem('og:description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
                _this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
                _this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
            }
            if (params['page'] === 'privacy') {
                _this.navigationService.updateMessage('Privacy Policy');
                _this.seoService.setTitle('Privacy Policy');
                _this.seoService.setMetaElem('description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:title', 'Privacy Policy');
                _this.seoService.setOgElem('og:description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
                _this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
                _this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
            }
            if (params['page'] === 'help') {
                _this.navigationService.updateMessage('Assistenza');
                _this.seoService.setTitle('Assistenza');
                _this.seoService.setMetaElem('description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:title', 'Assistenza');
                _this.seoService.setOgElem('og:description', 'Preventivi veloci? Starbook è la piattaforma dei lavorazioni professionali online con la possibilità di creare preventivi istantanei.');
                _this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
                _this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
                _this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/lavorazioni%2Bcartongesso%2Bcontrosoffitti%2Bpareti%2Bcontropareti.png');
            }
            console.log(params['page']);
        });
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                switch (action.type) {
                    case 'newCard':
                        _this.cards.push(action.data);
                        _this.isLoading = false;
                        break;
                    case 'newCardError':
                        _this.isLoading = false;
                        break;
                    case 'startNewCard':
                        _this.isLoading = true;
                        break;
                    case 'cardEdited':
                        var i_1 = 0;
                        _this.cards.forEach(function (card) {
                            if (card.id === action.data.id) {
                                _this.cards[i_1] = action.data;
                            }
                            i_1++;
                        });
                        _this.isLoading = false;
                        break;
                    case 'logout':
                        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                            if (localStorage.getItem('auth') !== null) {
                                localStorage.removeItem('auth');
                            }
                        }
                        _this.navigationService.updatePersonalMenu(false);
                        _this.router.navigate(['/']);
                        break;
                }
            });
        }
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.isLoading = true;
        var timeStart = Date.now();
        this.profileService.updateProfile(this.userData)
            .then(function (data) {
            _this.analyticsService.sendTiming({ category: 'Update user profile', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.isLoading = false;
            if (data.success) {
                var profileData = {};
                if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                    if (localStorage.getItem('auth') !== null) {
                        var authData = JSON.parse(localStorage.getItem('auth'));
                        authData.profile.fullname = _this.userData.fullname;
                        authData.phone_number = _this.userData.phone_number;
                        authData.address.street = _this.userData.street;
                        authData.address.city = _this.userData.city;
                        authData.address.postal_code = _this.userData.postal_code;
                        authData.address.province = _this.userData.province;
                        authData.address.country = _this.userData.country;
                        profileData = authData;
                        localStorage.setItem('auth', JSON.stringify(authData));
                    }
                }
                _this.navigationService.updatePersonalMenu(profileData);
                _this.formError = {
                    title: '',
                    message: 'Hai aggiornato le tue informazioni con successo!',
                    type: 'success'
                };
            }
        })
            .catch(function (error) {
            _this.isLoading = false;
            _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: error.json().message } });
        });
        return false;
    };
    ProfileComponent.prototype.renderPage = function (page) {
        this.selectTab = page;
    };
    ProfileComponent.prototype.getPopup = function (type) {
        this.activePopup = type;
    };
    ProfileComponent.prototype.closePopup = function () {
        this.activePopup = '';
    };
    ProfileComponent.prototype.changePassword = function (currentPassword, newPassword, passwordConfirm) {
        this.closePopup();
        this.changePasswordData.currentPassword = '';
        this.changePasswordData.newPassword = '';
        this.changePasswordData.passwordConfirm = '';
        return false;
    };
    ProfileComponent.prototype.checkPassword = function (newPassword, passwordConfirm) {
        if (newPassword === passwordConfirm) {
            this.changePasswordError.passwordConfirm = false;
        }
        else {
            this.changePasswordError.passwordConfirm = true;
        }
    };
    ProfileComponent.prototype.swipe = function (action, delta) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        var calculateDelta = this.delta + delta;
        var menuSize = 0;
        var allMenuItems = document.querySelectorAll('.left-navigate > div > a');
        for (var i = 0; i < allMenuItems.length; i++) {
            var menuItem = allMenuItems[i];
            menuSize += menuItem.offsetWidth;
        }
        var menuBlockWidth = document.querySelector('.left-navigate').clientWidth;
        var allowMargin = (menuSize) - menuBlockWidth;
        if (allowMargin >= 0) {
            allowMargin = -allowMargin;
            if (calculateDelta > 0) {
                this.delta = 0;
            }
            else {
                if (calculateDelta < allowMargin) {
                    if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
                        this.delta = allowMargin;
                    }
                }
                else {
                    this.delta = calculateDelta;
                }
            }
        }
    };
    ProfileComponent.prototype.addNewCard = function () {
        this.popupsService.activate({ type: 'addCard' });
    };
    ProfileComponent.prototype.formatYear = function (year) {
        var i = 0;
        var formatedYear = '';
        var yearArray = year.toString().split('');
        yearArray.forEach(function (num) {
            if (i > 1) {
                formatedYear += num;
            }
            i++;
        });
        return formatedYear;
    };
    ProfileComponent.prototype.formatCssClass = function (brand) {
        var result = '';
        if (brand === 'Visa') {
            result = 'visa';
        }
        if (brand === 'American Express') {
            result = 'amex';
        }
        if (brand === 'MasterCard') {
            result = 'mastercard';
        }
        return result;
    };
    ProfileComponent.prototype.selectCard = function (id) {
        var _this = this;
        this.isLoading = true;
        var timeStart = Date.now();
        this.paymentService.selectCard(id)
            .then(function (status) {
            _this.analyticsService.sendTiming({ category: 'Selecting card', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.isLoading = false;
            _this.defaultCard = status.default_source;
        })
            .catch(function (error) {
            _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: error.json().message } });
            _this.isLoading = false;
        });
    };
    ProfileComponent.prototype.deleteCard = function (id) {
        var _this = this;
        this.isLoading = true;
        var timeStart = Date.now();
        this.paymentService.deleteCard(id)
            .then(function (status) {
            _this.analyticsService.sendTiming({ category: 'Deleting card', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.isLoading = false;
            var i = 0;
            _this.cards.forEach(function (card) {
                if (card.id === id) {
                    _this.cards.splice(i, 1);
                }
                i++;
            });
            if (id === _this.defaultCard && _this.cards.length > 0) {
                var otherCard_1 = '';
                _this.cards.forEach(function (card) {
                    if (card.id !== id) {
                        otherCard_1 = card.id;
                    }
                });
                _this.selectCard(otherCard_1);
            }
            else {
                _this.isLoading = false;
            }
        })
            .catch(function (error) {
            _this.isLoading = false;
            _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: error.json().message } });
        });
    };
    ProfileComponent.prototype.editCard = function (id) {
        var _this = this;
        var cardData = {};
        this.cards.forEach(function (card) {
            if (card.id === id) {
                cardData = {
                    id: card.id,
                    address_city: card.address_city,
                    address_country: card.address_country,
                    address_line1: card.address_line1,
                    address_line2: card.address_line2,
                    address_state: card.address_state,
                    address_zip: card.address_zip,
                    exp_month: card.exp_month,
                    exp_year: _this.formatYear(card.exp_year),
                    name: card.name,
                    number: '**** ' + card.last4,
                    cvc: '***'
                };
            }
        });
        this.popupsService.activate({ type: 'editCard', data: cardData });
    };
    ProfileComponent.prototype.logout = function () {
        this.popupsService.activate({ type: 'logout', data: {} });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(45)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    ProfileService.prototype._makeHeaders = function () {
        var headers;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                this.auth = JSON.parse(localStorage.getItem('auth'));
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': this.auth.token });
            }
            else {
                this.auth = false;
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
            }
        }
        else {
            this.auth = false;
            headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Token': '' });
        }
        return { headers: headers };
    };
    ProfileService.prototype.updateProfile = function (userData) {
        // this.navigationService.updateLoadingStatus(true);
        var data = {
            fullname: userData.fullname,
            phone_number: userData.phone_number,
            street: userData.street,
            city: userData.city,
            postal_code: userData.postal_code,
            province: userData.province,
            country: userData.country
        };
        return this.http.put(this.api + 'me', data, this._makeHeaders())
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.getProfile = function () {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.get(this.api + 'me', this._makeHeaders())
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        return Promise.reject(error);
    };
    ProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.service.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_node__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_routes__ = __webpack_require__(40);













// App
var app = __WEBPACK_IMPORTED_MODULE_4_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_3_path__["join"](__WEBPACK_IMPORTED_MODULE_3_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 80 || 8080;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_3_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/* There are code from old server */
// app.use('/', require('redirect-https')({
//   body: '',
//   port: 443,
//   trustProxy: true
// }))
//
// app.all('/*', function(req: any, res: any, next) {
//   if(!/^www\./.test(req.headers.host)) {
//     res.status(301).redirect(req.protocol + '://www.' + req.headers.host + req.url)
//   } else {
//     next()
//   }
// })
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_5_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_4_express__["static"](__WEBPACK_IMPORTED_MODULE_3_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_12__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
/* There are code from old server (app.js) */
__WEBPACK_IMPORTED_MODULE_7_http__["createServer"](app).listen(port, function () {
    console.log("Listening on port " + port);
});
var options = {
    key: __WEBPACK_IMPORTED_MODULE_6_fs__["readFileSync"](__dirname + '/cert/key.pem', 'utf8'),
    cert: __WEBPACK_IMPORTED_MODULE_6_fs__["readFileSync"](__dirname + '/cert/server.crt', 'utf8')
};
// https.createServer(options, app).listen(443, () => {
//   console.log(`Listening on port 443`);
// });
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/server.js.map

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(20);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(22);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(20);


var patch = false;
if (!__WEBPACK_IMPORTED_MODULE_1__angular_core__["__core_private__"]['ViewUtils']) {
    patch = true;
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["__core_private__"]['ViewUtils'] = __WEBPACK_IMPORTED_MODULE_1__angular_core__["__core_private__"]['view_utils'];
}
if (__compiler__ && __compiler__.SelectorMatcher && __compiler__.CssSelector) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
if (patch) {
    var __universal__ = __webpack_require__(22);
    __universal__.ViewUtils = __WEBPACK_IMPORTED_MODULE_1__angular_core__["__core_private__"]['view_utils'];
    __universal__.CssSelector = __universal__.CssSelector || __compiler__.CssSelector;
    __universal__.SelectorMatcher = __universal__.SelectorMatcher || __compiler__.SelectorMatcher;
}
// Fix Material Support
function universalMaterialSupports(eventName) { return Boolean(this.isCustomEvent(eventName)); }
__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["__platform_browser_private__"].HammerGesturesPlugin.prototype.supports = universalMaterialSupports;

function renderComponentFix(componentProto) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__["NodeDomRenderer"](this, componentProto, this._animationDriver);
}
__WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__["NodeDomRootRenderer"].prototype.renderComponent = renderComponentFix;
// End Fix Universal Style
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__workaround.node.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    // loadingSubscription: Subscription;
    function AppComponent(router, route, authServics, navigationService, popupsService, homeService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupsService = popupsService;
        this.homeService = homeService;
        this.activePopup = '';
        this.popupState = 'inactive';
        this.navbarState = false;
        this.isLoading = false;
        this.isFindField = false;
        this.spinerView = false;
        this.clearView = false;
        this.findValue = '';
        this.results = [];
        this.isSearched = false;
        this.browser = __WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"];
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["NavigationEnd"]) {
                    ga('send', 'pageview', event.urlAfterRedirects);
                    var currentRoute = _this.route.root;
                    while (currentRoute.children[0] !== undefined) {
                        currentRoute = currentRoute.children[0];
                    }
                    if ('isFindField' in currentRoute.snapshot.data) {
                        _this.isFindField = true;
                    }
                    else {
                        _this.isFindField = false;
                    }
                }
            });
        }
    }
    AppComponent.prototype.getLoginPopup = function () {
        this.popupsService.activate({ type: 'login' });
        this.toggleMenu();
    };
    AppComponent.prototype.getRegistrationPopup = function () {
        this.popupsService.activate({ type: 'registration' });
        this.toggleMenu();
    };
    AppComponent.prototype.closePopup = function () {
        this.popupsService.activate('');
    };
    AppComponent.prototype.toggleMenu = function () {
        this.navbarState = !this.navbarState;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = this.authServics.authInit();
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription = this.navigationService.getMessage$.subscribe(function (message) {
                _this.tagline = message;
                _this.findValue = message;
                _this.results = [];
                _this.clearView = true;
                _this.isSearched = false;
            });
            this.authSubscription = this.navigationService.getPersonalMenu$.subscribe(function (auth) {
                if (auth !== false) {
                    _this.auth = auth;
                }
                else {
                    _this.auth = false;
                }
            });
        }
        // this.loadingSubscription = this.navigationService.getLoadingStatus$.subscribe(status => {
        //   this.isLoading = status;
        // });
    };
    AppComponent.prototype.updateTabMenu = function (toggleMenu) {
        if (toggleMenu === void 0) { toggleMenu = false; }
        if (toggleMenu) {
            this.toggleMenu();
        }
        this.navigationService.updateActiveTab(false);
    };
    AppComponent.prototype.search = function (event) {
        var _this = this;
        this.isSearched = true;
        this.spinerView = true;
        this.clearView = false;
        this.homeService.search(event.query)
            .then(function (results) {
            _this.spinerView = false;
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = results.result;
        })
            .catch(function (error) {
            _this.spinerView = false;
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = [];
        });
    };
    AppComponent.prototype.selectResult = function (servicesObj) {
        this.homeService.sendServices(servicesObj);
        this.results = [];
        this.clearView = false;
        this.navbarState = false;
        this.findValue = '';
        this.router.navigate(['services', servicesObj._id]);
    };
    AppComponent.prototype.clearSearchForm = function () {
        this.findValue = '';
        this.results = [];
        this.clearView = false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
            this.authSubscription.unsubscribe();
        }
        // this.loadingSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(41)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */]) === 'function' && _f) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_profile_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popups_popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_analytics_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_seo_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__order_order_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popups_popups_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_phone_pipe__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_landing_landing_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_expiry_pipe__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_loading_loading_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
// export class HammerConfig extends HammerGestureConfig  {
//   overrides = <any> {
//     'swipe': {velocity: 0.4, threshold: 20}
//   };
// }
var imports = [
    __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["NodeHttpModule"],
    __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
    // BrowserModule,
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
    // MasonryModule,
    __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
    __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
    // NgbModule.forRoot(),
    // AutoCompleteModule,
    // CalendarModule,
    __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__["ClickOutsideModule"]
];
var declarations = [
    __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_18__order_order_component__["a" /* OrderComponent */],
    __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_21__popups_popups_component__["a" /* PopupsComponent */],
    __WEBPACK_IMPORTED_MODULE_22__pipes_phone_pipe__["a" /* PhonePipe */],
    __WEBPACK_IMPORTED_MODULE_23__pages_landing_landing_component__["a" /* LandingComponent */],
    __WEBPACK_IMPORTED_MODULE_24__pipes_expiry_pipe__["a" /* ExpiryPipe */],
    __WEBPACK_IMPORTED_MODULE_25__shared_loading_loading_component__["a" /* LoadingComponent */]
];
if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(73).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(72).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(31).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(30).AutoCompleteMockComponent;
    declarations.push(AutoCompleteMockModule);
}
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: declarations,
            imports: imports,
            providers: [
                // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
                // {
                //   provide: HAMMER_GESTURE_CONFIG,
                //   useClass: HammerConfig
                // },
                __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_8__order_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_orders_service__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_12__popups_popups_service__["a" /* PopupsService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_seo_service__["a" /* SeoService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.node.module.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_component__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'services/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
        data: { isFindField: true }
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders_component__["a" /* OrdersComponent */]
    },
    {
        path: 'profile/:page',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_component__["a" /* ProfileComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(exports, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(exports, "AutoCompleteMockComponent", function() { return AutoCompleteMockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AutoCompleteMockComponent; }),
    multi: true
};
var AutoCompleteMockComponent = (function () {
    function AutoCompleteMockComponent() {
        this.innerValue = '';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    //From ControlValueAccessor interface
    AutoCompleteMockComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    AutoCompleteMockComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    AutoCompleteMockComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('suggestions'), 
        __metadata('design:type', Array)
    ], AutoCompleteMockComponent.prototype, "suggestions", void 0);
    AutoCompleteMockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'p-autoComplete',
            template: '<input type="text" class="form-control" style="display: none"/>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], AutoCompleteMockComponent);
    return AutoCompleteMockComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/autocomplete.component.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(exports, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(exports, "CalendarMockComponent", function() { return CalendarMockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CalendarMockComponent; }),
    multi: true
};
var CalendarMockComponent = (function () {
    function CalendarMockComponent() {
        this.innerValue = '';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    //From ControlValueAccessor interface
    CalendarMockComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    CalendarMockComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CalendarMockComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('locale'), 
        __metadata('design:type', Object)
    ], CalendarMockComponent.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('minDate'), 
        __metadata('design:type', Object)
    ], CalendarMockComponent.prototype, "minDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('maxDate'), 
        __metadata('design:type', Object)
    ], CalendarMockComponent.prototype, "maxDate", void 0);
    CalendarMockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'p-calendar',
            template: '<input type="text" class="form-control" style="display: none"/>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarMockComponent);
    return CalendarMockComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/calendar.component.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderComponent = (function () {
    function OrderComponent(orderService, popupsService, analyticsService) {
        this.orderService = orderService;
        this.popupsService = popupsService;
        this.analyticsService = analyticsService;
        this.timePicker = [];
        this.timePickerIsShow = false;
        this.addresses = [];
        this.address = '';
        this.selectedAddress = {
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
        this.isAddressOne = false;
        this.isAddressFull = false;
        this.isAddressDirty = false;
        this.isEnable = true;
        this.Order = {
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
            payment: { amount: 0, currency: '' }
        };
        this.minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.maxDate = new Date(new Date().getTime() + (24 * 21) * 60 * 60 * 1000);
        this.submitOrder = false;
        this.isMobileCalendar = false;
        this.maxOrderBlockSize = 'auto';
        this.isLoading = false;
        this.browser = __WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"];
        this.timePicker.push('08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00');
        // for (let i = 0; i < 24; i++) {
        //   if (i > 7 && i < 15) {
        //     if (i > 9) {
        //       this.timePicker.push(i + ':00', i + ':30');
        //     } else {
        //       this.timePicker.push('0' + i + ':00', '0' + i + ':30');
        //     }
        //   }
        // }
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
        // console.log('services: ' + this.defaultServices.title);
    }
    OrderComponent.prototype.toggleTimepicker = function () {
        this.timePickerIsShow = !this.timePickerIsShow;
    };
    OrderComponent.prototype.openTimepicker = function () {
        this.timePickerIsShow = true;
    };
    OrderComponent.prototype.closeTimepicker = function () {
        this.timePickerIsShow = false;
    };
    OrderComponent.prototype.selectTime = function (time) {
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'select time' });
        this.Order.time = time;
    };
    OrderComponent.prototype.getAddresses = function (event) {
        var _this = this;
        this.isAddressDirty = true;
        this.isAddressFull = false;
        if (event.query.length > 2) {
            this.orderService.getAddresses(event.query)
                .then(function (addresses) {
                _this.addresses = [];
                _this.addresses = addresses;
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    OrderComponent.prototype.selectAddress = function (value) {
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'select address' });
        if (value.isFull) {
            this.isAddressFull = true;
        }
        else {
            this.isAddressFull = false;
        }
        this.selectedAddress = value;
    };
    OrderComponent.prototype.modifyAddress = function () {
        this.isAddressDirty = false;
        this.isEnable = true;
        this.isAddressDirty = false;
    };
    OrderComponent.prototype.showConfirmation = function () {
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'send form', label: 'start' });
        this.submitOrder = true;
        this.isAddressDirty = true;
        this.Order.street_number = '';
        this.Order.postal_code = '';
        this.Order.country_code = '';
        this.Order.street = this.selectedAddress.street;
        this.Order.street_number = this.selectedAddress.street_number;
        this.Order.city = this.selectedAddress.city;
        this.Order.postal_code = this.selectedAddress.postal_code;
        this.Order.province = this.selectedAddress.province;
        this.Order.country = this.selectedAddress.country;
        this.Order.country_code = this.selectedAddress.country_code;
        this.Order.formattedAddress = this.selectedAddress.formattedAddress;
        this.address = this.selectedAddress.street + ', ' + this.selectedAddress.street_number + ', ' + this.selectedAddress.city;
        if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
            this.isAddressFull = true;
            this.isEnable = true;
        }
        else {
            this.isAddressFull = false;
            this.isEnable = false;
        }
        this.showPreviewOrder();
        //////////////////////////////////////////////////////////////////////////
        // Version with requesting address after click 'Create an order' button //
        //////////////////////////////////////////////////////////////////////////
        // this.isLoading = true;
        // this.orderService.getAddresses(this.address)
        //     .then((address: IAddress[]) => {
        //       this.isLoading = false;
        //       if (address.length > 1) {
        //         for (var index in address) {
        //           var addr = address[index];
        //           var city_to_match = new RegExp(addr.city, 'i')
        //           var street_number_to_match = new RegExp(String(addr.street_number), 'i')
        //           if (this.address.match(city_to_match) && this.address.match(street_number_to_match)) {
        //             this.isAddressOne = true;
        //             this.Order.street = addr.street;
        //             this.Order.street_number = addr.street_number;
        //             this.Order.city = addr.city;
        //             this.Order.postal_code = addr.postal_code;
        //             this.Order.province = addr.province;
        //             this.Order.country = addr.country;
        //             this.Order.country_code = addr.country_code;
        //             this.Order.formattedAddress = addr.formattedAddress;
        //
        //             this.address = addr.street + ', ' + addr.street_number + ', ' + addr.city;
        //
        //             if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
        //               this.isAddressFull = true;
        //               this.isEnable = true;
        //             } else {
        //               this.isAddressFull = false;
        //               this.isEnable = false;
        //               this.isEnable = false;
        //             }
        //             this.showPreviewOrder()
        //             break;
        //           } else {
        //             this.isAddressOne = false;
        //             this.isEnable = true;
        //           }
        //         }
        //       } else if (0 in address) {
        //         this.isAddressOne = true;
        //         this.Order.street = address[0].street;
        //         this.Order.street_number = address[0].street_number;
        //         this.Order.city = address[0].city;
        //         this.Order.postal_code = address[0].postal_code;
        //         this.Order.province = address[0].province;
        //         this.Order.country = address[0].country;
        //         this.Order.country_code = address[0].country_code;
        //         this.Order.formattedAddress = address[0].formattedAddress;
        //
        //         this.address = address[0].street + ', ' + address[0].street_number + ', ' + address[0].city;
        //
        //         // this.address = address[0].formattedAddress;
        //
        //         if ((this.Order.street_number !== '' && this.Order.street_number !== null) && (this.Order.postal_code !== '' && this.Order.postal_code !== null) && (this.Order.country_code !== '' && this.Order.country_code !== null)) {
        //           this.isAddressFull = true;
        //           this.isEnable = true;
        //         } else {
        //           this.isAddressFull = false;
        //           this.isEnable = false;
        //           this.isEnable = false;
        //         }
        //
        //         this.showPreviewOrder()
        //
        //       } else {
        //         this.isAddressOne = true;
        //         this.isAddressFull = false;
        //         this.isEnable = false;
        //       }
        //     })
        //     .catch((error) => {
        //       this.isLoading = false;
        //     });
    };
    OrderComponent.prototype.showPreviewOrder = function () {
        if (this.Order.date && this.orderIsFull && this.isAddressFull && this.orderData.order_options.min_amount <= this.orderData.totalPrice) {
            var date = new Date(this.Order.date);
            var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            var orderInformation = {
                date: day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear(),
                time: this.Order.time,
                address: this.Order.street + ', ' + this.Order.street_number + ', ' + this.Order.city,
                description: this.Order.delivery_description
            };
            if (localStorage.getItem('auth') === null) {
                this.popupsService.activate({ type: 'loginFromOrder', data: { orderData: this.orderData, information: orderInformation } });
            }
            else {
                this.popupsService.activate({ type: 'confirmNewOrder', data: { orderData: this.orderData, information: orderInformation } });
            }
        }
    };
    OrderComponent.prototype.createOrder = function () {
        var _this = this;
        var date = new Date(this.Order.date);
        var userData = localStorage.getItem('auth');
        if (userData !== null) {
            var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            var correctMonth = 1 + date.getMonth();
            var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
            this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + this.Order.time + ':00.000Z';
            this.Order.service_id = this.orderData.service_id;
            this.Order.delivery_details = [{
                    title: this.orderData.service,
                    amount: 0,
                    type: 'service'
                }];
            this.orderData.services.forEach(function (orderCategory) {
                if (orderCategory.price_type === 'BASE_AMOUNT_INCREMENT') {
                    _this.Order.delivery_details.push({
                        // title: orderCategory.name + ' - ' + orderCategory.option.name,
                        title: orderCategory.name,
                        description: orderCategory.option.name,
                        amount: 0,
                        type: 'item'
                    });
                }
                else {
                    _this.Order.delivery_details.push({
                        // title: orderCategory.name + ' - ' + orderCategory.option.name,
                        title: orderCategory.name,
                        description: orderCategory.option.name,
                        amount: orderCategory.option.price,
                        type: 'item'
                    });
                }
            });
            this.Order.payment = {
                amount: this.orderData.totalPrice,
                currency: 'eur'
            };
            this.isLoading = true;
            var timeStart_1 = Date.now();
            this.orderService.saveOrder(this.Order)
                .then(function (status) {
                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'send form', label: 'finish' });
                _this.analyticsService.sendTiming({ category: 'Saving order', timingVar: 'save', timingValue: Date.now() - timeStart_1 });
                _this.Order.delivery_details = [];
                _this.Order.delivery_address = '';
                _this.Order.delivery_description = '';
                _this.Order.date = null;
                _this.Order.time = '';
                _this.Order.delivery_date = '';
                _this.Order.street_number = '';
                _this.Order.postal_code = '';
                _this.Order.country_code = '';
                _this.Order.formattedAddress = '';
                _this.address = '';
                _this.submitOrder = false;
                _this.popupsService.activate({ type: 'confirmNewOrderEnd' });
                if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                    _this.orderService.makeEvent({ status: true });
                }
                _this.isLoading = false;
            })
                .catch(function (error) {
                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'send form', label: 'error' });
                // console.log('error or not: '+ error);
                if (error.status === 402) {
                    _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: 'Per favore, inserisci un metodo di pagamento prima di prenotare un servizio' } });
                }
                else if (error.status === 403) {
                    _this.popupsService.activate({ type: 'error', data: { title: 'Errore', message: 'Il servizio richiesto non è ancora disponibile in questa zona. Per favore contattaci nella sezione assistenza di Starbook per richiedere il supporto nella zona desiderata.' } });
                }
                //  else {
                //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: "C'è stato un errore riguardo alla richiesta del ordine, ricarica la pagina e riprova di nuovo."}});
                // }
                _this.isLoading = false;
            });
        }
        else {
            this.popupsService.activate({ type: 'login' });
        }
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.it = {
            firstDayOfWeek: 1,
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
                'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                if (action.type === 'confirm') {
                    _this.createOrder();
                }
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            if (document.querySelector('body').clientWidth > 480) {
                this.isMobileCalendar = false;
                this.maxOrderBlockSize = document.body.clientHeight - 450 + 'px';
            }
            else {
                this.isMobileCalendar = true;
                this.maxOrderBlockSize = 'auto';
            }
        }
    };
    OrderComponent.prototype.onResize = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            if (document.querySelector('body').clientWidth > 480) {
                this.isMobileCalendar = false;
                this.maxOrderBlockSize = document.body.clientHeight - 450 + 'px';
            }
            else {
                this.isMobileCalendar = true;
                this.maxOrderBlockSize = 'auto';
            }
        }
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
        }
    };
    OrderComponent.prototype.selectDate = function () {
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'select date' });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "orderData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('orderIsFull'), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "orderIsFull", void 0);
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(43)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.component.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingComponent = (function () {
    function LandingComponent(homeService, router, route, navigationService, analyticsService) {
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.cardStyles = { 1: '0.95', 2: '0.95', 3: '0.9' };
        this.query = '';
        this.results = [];
        this.services = [];
        this.spinerView = false;
        this.clearView = false;
        this.isLoading = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.updateMessage('Una città smart ha bisogno di servizi smart');
        this.isLoading = true;
        var timeStart = Date.now();
        this.homeService.getServices()
            .then(function (services) {
            _this.services = services.result;
            _this.analyticsService.sendTiming({ category: 'Get list of featured', timingVar: 'load', timingValue: Date.now() - timeStart });
            _this.isLoading = false;
        })
            .catch(function (error) {
            console.log(error);
            _this.isLoading = false;
        });
    };
    LandingComponent.prototype.cardHover = function (id, type) {
        if (type === 'on') {
            this.cardStyles[id] = '1';
        }
        else {
            if (id === 3) {
                this.cardStyles[id] = '0.9';
            }
            else {
                this.cardStyles[id] = '0.95';
            }
        }
    };
    LandingComponent.prototype.search = function (event) {
        var _this = this;
        this.spinerView = true;
        this.clearView = false;
        var timeStart = Date.now();
        this.homeService.search(event.query)
            .then(function (results) {
            _this.spinerView = false;
            _this.analyticsService.sendTiming({ category: 'Search', timingVar: 'load', timingValue: Date.now() - timeStart });
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = results.result;
        })
            .catch(function (error) {
            _this.spinerView = false;
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = [];
        });
    };
    LandingComponent.prototype.selectResult = function (servicesObj) {
        this.homeService.sendServices(servicesObj);
        this.router.navigate(['services', servicesObj.title]);
    };
    LandingComponent.prototype.clearSearchForm = function () {
        this.query = '';
        this.results = [];
        this.clearView = false;
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(78)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__home_home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/landing.component.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExpiryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpiryPipe = (function () {
    function ExpiryPipe() {
    }
    ExpiryPipe.prototype.transform = function (value, args) {
        var result;
        if (value) {
            var dateElems_1 = value.split('');
            var i_1 = 0;
            dateElems_1.forEach(function (elem) {
                if (elem === '/') {
                    dateElems_1.splice(i_1, 1);
                }
            });
            if (dateElems_1.length > 1) {
                var i_2 = 0;
                dateElems_1.forEach(function (elem) {
                    if (i_2 < 3) {
                        result += elem;
                        if (i_2 === 1) {
                            result += '/';
                        }
                    }
                });
            }
            else {
                dateElems_1.forEach(function (elem) {
                    result += elem;
                });
            }
        }
        return result;
    };
    ExpiryPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'expiry'
        }), 
        __metadata('design:paramtypes', [])
    ], ExpiryPipe);
    return ExpiryPipe;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/expiry.pipe.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PhonePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (value, args) {
        if (value) {
            var phone_1 = '';
            var numIndex_1 = 0;
            var phoneNums = value.split('');
            phoneNums.forEach(function (num) {
                if (numIndex_1 === 2 || numIndex_1 === 4 || numIndex_1 === 6) {
                    phone_1 += num + ' ';
                }
                else {
                    phone_1 += num;
                }
                numIndex_1++;
            });
            return phone_1;
        }
        else {
            return null;
        }
    };
    PhonePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'phone'
        }), 
        __metadata('design:paramtypes', [])
    ], PhonePipe);
    return PhonePipe;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/phone.pipe.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PopupsComponent = (function () {
    function PopupsComponent(authServics, navigationService, popupService, ordersService, paymentService, router, analyticsService) {
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupService = popupService;
        this.ordersService = ordersService;
        this.paymentService = paymentService;
        this.router = router;
        this.analyticsService = analyticsService;
        this.activePopup = '';
        this.addCardPopupState = 'inactive';
        this.loginPopupState = 'inactive';
        this.registrationPopupState = 'inactive';
        this.recoveryPopupState = 'inactive';
        this.finishPopupState = 'inactive';
        this.confirmPopupState = 'inactive';
        this.confirmFinishPopupState = 'inactive';
        this.confirmActionPopupState = 'inactive';
        this.shadowState = 'inactive';
        this.addCardData = {
            object: 'card',
            exp_date: '',
            exp_month: null,
            exp_year: null,
            number: null,
            cvc: '',
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_zip: '',
            address_state: '',
            address_country: '' // Paese
        };
        this.actionCardType = 'add';
        this.addCardError = {
            exp_date: false,
            number: false,
            cvc: false
        };
        this.loginData = {
            email: '',
            password: '',
            type: '',
            orderData: {}
        };
        this.loginError = {
            email: false,
            password: false
        };
        this.registrationData = {
            name: '',
            phone: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
        this.registrationError = {
            name: false,
            phone: false,
            email: false,
            passwordFirst: false,
            password: false
        };
        this.recoveryData = {
            email: ''
        };
        this.recoveryError = {
            email: false
        };
        this.confirmPopupData = {
            id: null,
            title: '',
            text: '',
            data: [],
            information: {},
            button: '',
            type: ''
        };
        this.confirmFinishPopupData = {
            title: '',
            text: '',
            type: 'center'
        };
        this.confirmActionPopupData = {
            orderId: '',
            type: '',
            title: '',
            text: '',
            text2: '',
            actions: [],
            buttons: [],
            price: null
        };
        this.finishPopupData = {
            title: '',
            text: []
        };
        this.isPopupLoading = false;
        this.formError = false;
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    PopupsComponent.prototype.getPopup = function (type) {
        this.closePopup(true);
        if (type === 'login') {
            this.loginPopupState = 'active';
        }
        if (type === 'registration') {
            this.registrationPopupState = 'active';
        }
        if (type === 'recovery') {
            this.recoveryPopupState = 'active';
        }
        if (type === 'finish') {
            this.finishPopupState = 'active';
            this.finishPopupData.title = 'Check your inbox';
            this.finishPopupData.text = [
                'We sent a password reset link to your email address. Please click the link in the email to create e new password.',
                'The link will only be active for 1 hour. After that you will need to request a new one.'
            ];
        }
        if (type === 'error') {
            this.finishPopupState = 'active';
        }
        if (type === 'confirmFinish') {
            this.confirmFinishPopupState = 'active';
        }
        if (type === 'confirmEnd') {
            this.confirmPopupState = 'active';
        }
        if (type === 'addCard') {
            this.addCardPopupState = 'active';
        }
        if (type === 'confirmAction') {
            this.confirmActionPopupState = 'active';
        }
        if (type === 'confirmOrderEnd') {
            this.confirmPopupState = 'active';
        }
        this.shadowState = 'active';
        this.activePopup = type;
        return false;
    };
    PopupsComponent.prototype.closePopup = function (isReopen) {
        if (isReopen === void 0) { isReopen = false; }
        if (this.loginPopupState === 'active') {
            this.loginPopupState = 'inactive';
        }
        if (this.registrationPopupState === 'active') {
            this.registrationPopupState = 'inactive';
        }
        if (this.recoveryPopupState === 'active') {
            this.recoveryPopupState = 'inactive';
        }
        if (this.finishPopupState === 'active') {
            this.finishPopupState = 'inactive';
        }
        if (this.confirmPopupState === 'active') {
            this.confirmPopupState = 'inactive';
        }
        if (this.confirmFinishPopupState === 'active') {
            this.confirmFinishPopupState = 'inactive';
        }
        if (this.addCardPopupState === 'active') {
            this.addCardPopupState = 'inactive';
        }
        if (this.confirmActionPopupState === 'active') {
            this.confirmActionPopupState = 'inactive';
        }
        this.activePopup = '';
        this.formError = false;
        if (!isReopen) {
            this.shadowState = 'inactive';
            this.clearData();
        }
    };
    PopupsComponent.prototype.login = function (email, password) {
        var _this = this;
        if (this.emailPattern.test(email) && password.length > 0) {
            this.isPopupLoading = true;
            var timeStart_1 = Date.now();
            this.authServics.login(email, password)
                .then(function (data) {
                _this.analyticsService.sendTiming({ category: 'Login', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
                _this.isPopupLoading = false;
                _this.auth = data;
                if (_this.loginData.type === 'fromOrder') {
                    _this.closePopup(true);
                    _this.popupService.activate({ type: 'confirmNewOrder', data: _this.loginData.orderData });
                }
                else {
                    _this.closePopup();
                    _this.router.navigate(['/']);
                }
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                switch (error) {
                    case 404:
                        _this.formError = {
                            title: 'Si è verificato un errore!',
                            message: 'Non riusciamo a trovare un account con quell’indirizzo e-mail'
                        };
                        break;
                    case 401:
                        _this.formError = {
                            title: 'Si è verificato un errore!',
                            message: 'La tua password non è corretta'
                        };
                        break;
                    default:
                        _this.formError = false;
                }
            });
        }
        else {
            if (password.length < 1) {
                this.loginError.password = true;
            }
            if (!this.emailPattern.test(email)) {
                this.loginError.email = true;
            }
        }
        return false;
    };
    PopupsComponent.prototype.checkEmail = function (type, email) {
        if (this.emailPattern.test(email)) {
            switch (type) {
                case 'login':
                    this.loginError.email = false;
                    break;
                case 'registration':
                    this.registrationError.email = false;
                    break;
                case 'recovery':
                    this.recoveryError.email = false;
                    break;
            }
        }
        else {
            switch (type) {
                case 'login':
                    this.loginError.email = true;
                    break;
                case 'registration':
                    this.registrationError.email = true;
                    break;
                case 'recovery':
                    this.recoveryError.email = true;
                    break;
            }
        }
    };
    PopupsComponent.prototype.checkDate = function (type, value) {
        if (type === 'newCard') {
            if (value.length !== 5) {
                this.addCardError.exp_date = true;
            }
            if (value.length === 5) {
                var parts = value.split('/');
                if (parts[0] === value) {
                    this.addCardError.exp_date = true;
                }
                else {
                    this.addCardError.exp_date = false;
                }
            }
        }
    };
    PopupsComponent.prototype.checkNonEmpty = function (type, value) {
        if (type === 'login') {
            if (value.length > 0) {
                this.loginError.password = false;
            }
            else {
                this.loginError.password = true;
            }
        }
        if (type === 'registrationName') {
            if (value.length > 0) {
                this.registrationError.name = false;
            }
            else {
                this.registrationError.name = true;
            }
        }
        if (type === 'registrationPhone') {
            if (value.length > 10) {
                this.registrationError.phone = false;
            }
            else {
                this.registrationError.phone = true;
            }
        }
        if (type === 'registrationPassword') {
            if (value.length > 0) {
                this.registrationError.passwordFirst = false;
            }
            else {
                this.registrationError.passwordFirst = true;
            }
        }
        if (type === 'addCardNumber') {
            if (value.length > 0) {
                this.addCardError.number = false;
            }
            else {
                this.addCardError.number = true;
            }
        }
        if (type === 'addCardCvv') {
            if (value.length > 2) {
                this.addCardError.cvc = false;
            }
            else {
                this.addCardError.cvc = true;
            }
        }
    };
    PopupsComponent.prototype.checkPassword = function (password, passwordConfirm) {
        if (password !== passwordConfirm) {
            this.registrationError.password = true;
        }
        else {
            this.registrationError.password = false;
        }
    };
    PopupsComponent.prototype.checkExpiry = function (value) {
        var result = '';
        var date = new Date();
        var month = (1 + date.getMonth()).toString();
        if ((date.getMonth() + 1) < 10) {
            month = '0' + month.toString();
        }
        var yearElems = date.getFullYear().toString().split('');
        var year = parseInt(yearElems[2].toString() + yearElems[3].toString());
        if (value) {
            var dateElems_1 = value.split('');
            var i_1 = 0;
            dateElems_1.forEach(function (elem) {
                if (elem === '/') {
                    dateElems_1.splice(i_1, 1);
                }
                i_1++;
            });
            if (dateElems_1.length > 1) {
                var i_2 = 0;
                dateElems_1.forEach(function (elem) {
                    if (i_2 < 4) {
                        if (i_2 === 2) {
                            result += '/';
                        }
                        result += elem;
                    }
                    i_2++;
                });
            }
            else {
                dateElems_1.forEach(function (elem) {
                    result += elem;
                });
            }
        }
        if (result.length !== 5) {
            this.addCardError.exp_date = true;
        }
        if (result.length === 5) {
            var parts = result.split('/');
            if (parts[0] !== result) {
                if (parseInt(parts[1]) > year) {
                    this.addCardError.exp_date = false;
                }
                else {
                    if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
                        this.addCardError.exp_date = false;
                    }
                    else {
                        this.addCardError.exp_date = true;
                    }
                }
            }
            else {
                this.addCardError.exp_date = true;
            }
        }
        this.addCardData.exp_date = result;
        return result;
    };
    PopupsComponent.prototype.checkCardNumber = function (cardNumber) {
        // if (cardNumber !== null) {
        //   if (this.paymentService.cardNumberValidate(cardNumber)) {
        //     this.addCardError.number = false;
        //   } else {
        //     this.addCardError.number = true;
        //   }
        // }
    };
    PopupsComponent.prototype.registration = function (name, phone, email, password, passwordConfirm) {
        var _this = this;
        if (this.emailPattern.test(email) && password === passwordConfirm && password.length > 0 && name.length > 0 && phone.length > 9) {
            this.isPopupLoading = true;
            var timeStart_2 = Date.now();
            this.authServics.signup(name, phone, email, password)
                .then(function (data) {
                _this.analyticsService.sendTiming({ category: 'Registration', timingVar: 'save', timingValue: Date.now() - timeStart_2 });
                _this.isPopupLoading = false;
                _this.auth = data;
                _this.navigationService.updatePersonalMenu(data);
                _this.closePopup();
                _this.router.navigate(['/profile/payment']);
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                switch (error) {
                    case 409:
                        _this.formError = {
                            title: 'Indirizzo e-mail già in uso.',
                            message: "Hai indicato di essere un nuovo cliente ma \u00E8 gi\u00E0\n                presente un account collegato all'indirizzo e-mail: mail@gmail.com"
                        };
                        break;
                    case 422:
                        _this.formError = {
                            title: 'Parametri mancanti',
                            message: "Inserisci tutti i parametri per procedere con la registrazione"
                        };
                        break;
                    case 404:
                        _this.formError = {
                            title: 'Errore',
                            message: "C'\u00E8 stato un errore sconosciuto, per favore riprova pi\u00F9 tardi"
                        };
                        break;
                    default:
                        _this.formError = false;
                }
            });
        }
        else {
            if (!this.emailPattern.test(email)) {
                this.registrationError.email = true;
            }
            if (password !== passwordConfirm) {
                this.registrationError.password = true;
            }
            if (password.length < 1) {
                this.registrationError.passwordFirst = true;
            }
            if (name.length < 1) {
                this.registrationError.name = true;
            }
        }
        return false;
    };
    PopupsComponent.prototype.recovery = function (email) {
        var _this = this;
        if (this.emailPattern.test(email)) {
            this.isPopupLoading = true;
            var timeStart_3 = Date.now();
            this.authServics.recovery(email)
                .then(function (status) {
                _this.analyticsService.sendTiming({ category: 'Recovery of password', timingVar: 'load', timingValue: Date.now() - timeStart_3 });
                _this.isPopupLoading = false;
                _this.getPopup('finish');
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                _this.formError = {
                    title: 'Si è verificato un problema!',
                    message: "Ci dispiace. Impossibile identificare l'account con le informazioni fornite."
                };
            });
        }
        else {
            this.recoveryError.email = true;
        }
        return false;
    };
    PopupsComponent.prototype.confirmOrder = function (id) {
        // this.ordersService.modifyOrder(id, 'ACCEPT')
        //     .then((response) => {
        //       this.confirmPopupData.title = 'Servizio confermato con successo';
        //         this.confirmPopupData.text = 'Adesso non resta altro che offrire il suo servizio al cliente. Per qualsiasi communicazione può usare i dati del contatto aggiunti dal cliente.';
        //         this.confirmPopupData.type = 'confermaEnd';
        //       this.getPopup('confirmEnd');
        //       this.popupService.actionComplete({type: 'confirmOrder', data: {orderId: id}});
        //     })
        //     .catch((error) => {
        //       this.formError = true;
        //       this.formError = {
        //         title: 'Order confirmation error',
        //         message: `An error occurred during the order confirmation. Please try again.`
        //       };
        //     });
    };
    PopupsComponent.prototype.cancelOrder = function (id) {
        var _this = this;
        var timeStart = Date.now();
        this.ordersService.modifyOrder(id, 'CANCEL')
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Modify order: Cancel', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.confirmFinishPopupData.title = 'Ordine annullato';
            _this.confirmFinishPopupData.text = 'Questo ordine è stato annullato, puoi riattivarlo in un secondo momento.';
            _this.getPopup('confirmFinish');
            _this.popupService.actionComplete({ type: 'cancelOrder', data: { orderId: id } });
        })
            .catch(function (error) {
            _this.formError = true;
            _this.formError = {
                title: 'Cancellation error',
                message: "An error occurred while canceling your order. Please try again."
            };
        });
    };
    PopupsComponent.prototype.reactivateOrder = function (id) {
        var _this = this;
        var timeStart = Date.now();
        this.ordersService.modifyOrder(id, 'REACTIVATE')
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Modify order: Reactivate', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.confirmFinishPopupData.title = 'Ordine riattivato';
            _this.confirmFinishPopupData.text = 'Questo ordine è stato riattivato, verrai notificato quando un professionista confermera questo ordine.';
            _this.getPopup('confirmFinish');
            _this.popupService.actionComplete({ type: 'reactivateOrder', data: { orderId: id } });
        })
            .catch(function (error) {
            _this.formError = true;
            _this.formError = {
                title: 'Reactivation order error',
                message: "During the reactivation of your order is the order the error occurred. Please try again."
            };
        });
    };
    PopupsComponent.prototype.confirmNewOrder = function () {
        this.closePopup();
        this.popupService.actionComplete({ type: 'confirm' });
    };
    PopupsComponent.prototype.addNewCard = function () {
        var _this = this;
        var error = false;
        if (this.addCardData.number.length === 0) {
            error = true;
        }
        if (this.addCardData.exp_date.length === 5) {
            var exp_parts = this.addCardData.exp_date.split('/');
            if (exp_parts[0] !== this.addCardData.exp_date) {
                this.addCardData.exp_month = exp_parts[0];
                this.addCardData.exp_year = exp_parts[1];
            }
            else {
                error = true;
            }
        }
        else {
            error = true;
        }
        if (this.addCardData.cvc.length < 3) {
            error = true;
        }
        if (!error) {
            this.isPopupLoading = true;
            this.popupService.actionComplete({ type: 'startNewCard' });
            var timeStart_4 = Date.now();
            this.paymentService.addNewCard(this.addCardData)
                .then(function (response) {
                _this.analyticsService.sendTiming({ category: 'Add new card', timingVar: 'save', timingValue: Date.now() - timeStart_4 });
                _this.isPopupLoading = false;
                _this.popupService.actionComplete({ type: 'newCard', data: response });
                _this.closePopup();
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                _this.popupService.actionComplete({ type: 'newCardError' });
                _this.closePopup();
                var message = error.json().message;
                if (message) {
                    _this.getErrorPopup('Errore', message);
                }
                else {
                    _this.getErrorPopup('Errore', 'An error occurred');
                }
            });
        }
    };
    PopupsComponent.prototype.editCard = function () {
        var _this = this;
        var error = false;
        var editCardData = {
            exp_month: null,
            exp_year: null,
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_zip: '',
            address_state: '',
            address_country: ''
        };
        if (this.addCardData.exp_date.length === 5) {
            var exp_parts = this.addCardData.exp_date.split('/');
            if (exp_parts[0] !== this.addCardData.exp_date) {
                editCardData.exp_month = exp_parts[0];
                editCardData.exp_year = exp_parts[1];
            }
            else {
                error = true;
            }
        }
        else {
            error = true;
        }
        if (!error) {
            editCardData.name = this.addCardData.name;
            editCardData.address_line1 = this.addCardData.address_line1;
            editCardData.address_line2 = this.addCardData.address_line2;
            editCardData.address_city = this.addCardData.address_city;
            editCardData.address_zip = this.addCardData.address_zip;
            editCardData.address_state = this.addCardData.address_state;
            editCardData.address_country = this.addCardData.address_country;
            this.popupService.actionComplete({ type: 'startNewCard' });
            this.isPopupLoading = true;
            var timeStart_5 = Date.now();
            this.paymentService.editCard(this.editedCardId, editCardData)
                .then(function (response) {
                _this.analyticsService.sendTiming({ category: 'Edit card card', timingVar: 'save', timingValue: Date.now() - timeStart_5 });
                _this.isPopupLoading = false;
                _this.popupService.actionComplete({ type: 'cardEdited', data: response });
                _this.closePopup();
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                _this.popupService.actionComplete({ type: 'newCardError' });
                _this.closePopup();
                var message = error.json().message;
                if (message) {
                    _this.getErrorPopup('Errore', message);
                }
                else {
                    _this.getErrorPopup('Errore', 'An error occurred');
                }
            });
        }
    };
    PopupsComponent.prototype.addPrice = function (orderId) {
        // let orderPriceEur = parseInt(this.confirmActionPopupData.price) + ((parseInt(this.confirmActionPopupData.price) / 100) * 5.5);
        // let orderPrice = parseFloat(orderPriceEur.toFixed(2)) * 100;
        var _this = this;
        this.isPopupLoading = true;
        var timeStart = Date.now();
        this.ordersService.modifyOrder(orderId, 'CLOSE')
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Modify order: Close', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.isPopupLoading = false;
            _this.closePopup(true);
            _this.confirmPopupData.title = 'Servizio completato con successo';
            _this.confirmPopupData.text = '';
            _this.confirmPopupData.type = 'addPriceEnd';
            _this.confirmPopupState = 'active';
            _this.activePopup = 'addPriceEnd';
            _this.shadowState = 'active';
            _this.popupService.actionComplete({ type: 'addPrice', data: { orderId: orderId, isModified: response.nModified } });
        })
            .catch(function (error) {
            _this.isPopupLoading = false;
            _this.closePopup();
            var message = error.json().message;
            if (message) {
                _this.getErrorPopup('Errore', message);
            }
            else {
                _this.getErrorPopup('Errore', 'An error occurred');
            }
        });
    };
    PopupsComponent.prototype.editPrice = function (orderId) {
        var _this = this;
        var orderPriceEur = parseInt(this.confirmActionPopupData.price) + ((parseInt(this.confirmActionPopupData.price) / 100) * 5.5);
        var orderPrice = parseFloat(orderPriceEur.toFixed(2)) * 100;
        var timeStart = Date.now();
        this.ordersService.addPrice(orderId, 'ACTIVE_PAYMENT', orderPrice)
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Modify order: Active payment', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.closePopup();
            _this.popupService.actionComplete({ type: 'editPrice', data: { orderId: orderId, orderPrice: orderPrice, isModified: response.nModified } });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PopupsComponent.prototype.continueOrder = function (orderId) {
        var _this = this;
        var timeStart = Date.now();
        this.ordersService.modifyOrder(orderId, 'PAY')
            .then(function (response) {
            _this.analyticsService.sendTiming({ category: 'Modify order: Pay', timingVar: 'save', timingValue: Date.now() - timeStart });
            _this.confirmFinishPopupData.title = 'Pagamento effettuato';
            _this.confirmFinishPopupData.text = 'Ti abbiamo inviato una mail e un sms con la conferma del pagamento e la ricevuta fiscale';
            _this.confirmFinishPopupData.type = 'left';
            _this.getPopup('confirmFinish');
            _this.popupService.actionComplete({ type: 'continueOrder', data: { orderId: orderId } });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PopupsComponent.prototype.logout = function () {
        this.popupService.actionComplete({ type: 'logout', data: {} });
        this.closePopup();
    };
    PopupsComponent.prototype.getErrorPopup = function (title, text) {
        this.finishPopupData.text = [];
        this.finishPopupData.title = title;
        this.finishPopupData.text.push(text);
        this.getPopup('error');
    };
    PopupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription = this.popupService.getActivePopup$.subscribe(function (popup) {
                switch (popup.type) {
                    case 'login':
                        _this.loginData.email = '';
                        _this.loginData.password = '';
                        _this.loginPopupState = 'active';
                        _this.activePopup = 'login';
                        _this.shadowState = 'active';
                        break;
                    case 'loginFromOrder':
                        _this.loginData.orderData = popup.data;
                        _this.loginData.type = 'fromOrder';
                        _this.loginPopupState = 'active';
                        _this.activePopup = 'login';
                        _this.shadowState = 'active';
                        break;
                    case 'addCard':
                        _this.actionCardType = 'add';
                        _this.addCardPopupState = 'active';
                        _this.activePopup = 'addCard';
                        _this.shadowState = 'active';
                        break;
                    case 'editCard':
                        _this.actionCardType = 'edit';
                        _this.editedCardId = popup.data.id;
                        _this.addCardData.exp_date = popup.data.exp_month + '/' + popup.data.exp_year;
                        _this.addCardData.name = popup.data.name;
                        _this.addCardData.address_line1 = popup.data.address_line1;
                        _this.addCardData.address_line2 = popup.data.address_line2;
                        _this.addCardData.address_city = popup.data.address_city;
                        _this.addCardData.address_zip = popup.data.address_zip;
                        _this.addCardData.address_state = popup.data.address_state;
                        _this.addCardData.address_country = popup.data.address_country;
                        _this.addCardData.number = popup.data.number;
                        _this.addCardData.cvc = popup.data.cvc;
                        _this.addCardPopupState = 'active';
                        _this.activePopup = 'addCard';
                        _this.shadowState = 'active';
                        break;
                    case 'registration':
                        _this.registrationPopupState = 'active';
                        _this.activePopup = 'registration';
                        _this.shadowState = 'active';
                        break;
                    case 'confirmOrder':
                        _this.confirmPopupData.id = popup.data.orderId;
                        _this.confirmPopupData.title = 'Conferma servizio in corso…';
                        _this.confirmPopupData.text = 'Il sistema sta controllando se questo servizio è stato assegnato ad un altro professionista o anullato dal cliente stesso.';
                        _this.confirmPopupData.button = '';
                        _this.confirmPopupData.type = 'conferma';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'confirmOrder';
                        _this.shadowState = 'active';
                        _this.ordersService.modifyOrder(popup.data.orderId, 'ACCEPT')
                            .then(function (response) {
                            _this.confirmPopupData.title = 'Servizio confermato con successo';
                            _this.confirmPopupData.text = 'Adesso non resta altro che offrire il suo servizio al cliente. Per qualsiasi communicazione può usare i dati del contatto aggiunti dal cliente.';
                            _this.confirmPopupData.type = 'confermaEnd';
                            _this.getPopup('confirmEnd');
                            _this.popupService.actionComplete({ type: 'confirmOrder', data: { orderId: popup.data.orderId } });
                        })
                            .catch(function (error) {
                            _this.formError = true;
                            _this.formError = {
                                title: 'Order confirmation error',
                                message: "An error occurred during the order confirmation. Please try again."
                            };
                        });
                        break;
                    case 'cancelOrder':
                        _this.confirmPopupData.id = popup.data.orderId;
                        _this.confirmPopupData.title = 'Annulla ordine?';
                        _this.confirmPopupData.text = 'Dopo aver annullato questo ordine solo tu sarai in grado di vederlo.';
                        _this.confirmPopupData.button = 'Annulla ordine';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'confirmOrder';
                        _this.shadowState = 'active';
                        break;
                    case 'reactivateOrder':
                        _this.confirmPopupData.id = popup.data.orderId;
                        _this.confirmPopupData.title = 'Riattiva ordine?';
                        _this.confirmPopupData.text = 'Dopo aver riattivato questo ordine sara visibile a tutti i professionisti.';
                        _this.confirmPopupData.button = 'Riattiva ordine';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'confirmOrder';
                        _this.shadowState = 'active';
                        break;
                    case 'confirmNewOrder':
                        _this.confirmPopupData.title = 'Dettagli dell’ordine';
                        _this.confirmPopupData.data = [{ productName: popup.data.orderData.service, itemName: '', price: '', type: 'service' }];
                        popup.data.orderData.services.forEach(function (product) {
                            if (product.price_type === 'BASE_AMOUNT_INCREMENT') {
                                _this.confirmPopupData.data.push({ productName: product.name, itemName: product.option.name, price: '', type: 'item' });
                            }
                            else if (product.price_type === 'BASE_AMOUNT_PER_INPUT') {
                                _this.confirmPopupData.data.push({ productName: product.name, itemName: product.option.name, price: '', symbol: product.option.symbol, type: 'item' });
                            }
                            else {
                                _this.confirmPopupData.data.push({ productName: product.name, itemName: product.option.name, price: product.option.price, type: 'item' });
                            }
                        });
                        _this.confirmPopupData.data.push({ productName: 'Totale', itemName: '', price: popup.data.orderData.totalPrice, type: 'total' });
                        _this.confirmPopupData.information = popup.data.information;
                        _this.confirmPopupData.button = 'Procedi con l’acquisto';
                        _this.confirmPopupData.type = 'newOrder';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'confirmOrder';
                        _this.shadowState = 'active';
                        break;
                    case 'confirmNewOrderEnd':
                        _this.confirmPopupData.title = 'Acquisto effetuato';
                        _this.confirmPopupData.text = 'L’ordine e stato prenotato con successo. Un professionista si presenterà nella data e ora stabilita da voi.';
                        _this.confirmPopupData.type = 'newOrderEnd';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'confirmOrderEnd';
                        _this.shadowState = 'active';
                        break;
                    case 'addPrice':
                        _this.confirmActionPopupData.orderId = popup.data.orderId;
                        _this.confirmActionPopupData.type = 'addPrice';
                        _this.confirmActionPopupData.title = 'Completamento servizio';
                        _this.confirmActionPopupData.text = 'Dopo aver completato il servizio verrai incrementato del importo prestabilito tra 7 giorni lavorativi.';
                        // this.confirmActionPopupData.actions.push({
                        //   type: 'Payment_input_add',
                        //   source: 'euro',
                        //   label: 'Inserisci l’importo',
                        //   description: 'All’importo verra aggiunto 5.5% di tassa Starbook.'
                        // });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'addPrice',
                            text: 'Completa il servizio'
                        });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'close',
                            text: 'Chiudi'
                        });
                        _this.confirmActionPopupState = 'active';
                        _this.activePopup = 'confirmAction';
                        _this.shadowState = 'active';
                        break;
                    case 'editPrice':
                        _this.confirmActionPopupData.orderId = popup.data.orderId;
                        _this.confirmActionPopupData.title = 'Modifica';
                        _this.confirmActionPopupData.text = 'Dopo aver modificato l’importo il cliente verra notificato di questa modifica e potra procedere con il pagamento.';
                        _this.confirmActionPopupData.actions.push({
                            type: 'Payment_input_edit',
                            source: 'euro',
                            label: 'Inserisci l’importo',
                            description: 'All’importo verra aggiunto 5.5% di tassa Starbook.'
                        });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'editPrice',
                            text: 'Inserisci importo'
                        });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'close',
                            text: 'Chiudi'
                        });
                        _this.confirmActionPopupData.price = Math.round((parseInt(popup.data.payment) / 1.055) / 100);
                        _this.confirmActionPopupState = 'active';
                        _this.activePopup = 'confirmAction';
                        _this.shadowState = 'active';
                        break;
                    case 'continueOrder':
                        _this.confirmActionPopupData.orderId = popup.data.orderId;
                        _this.confirmActionPopupData.title = 'Pagamento';
                        _this.confirmActionPopupData.text = 'Dopo aver effettuato il pagamento riceverai una mail con la fattura del ordine.';
                        _this.confirmActionPopupData.text2 = 'Al’importo verra aggiunto 5.5% di tasse Starbook.';
                        var price = Math.round((parseInt(popup.data.payment) / 1.055) / 100);
                        var tax = (parseInt(popup.data.payment) - Math.round(parseInt(popup.data.payment) / 1.055)) / 100;
                        _this.confirmActionPopupData.actions.push({
                            type: 'Payment_information',
                            information: price + '€ + ' + tax + '€ = ' + parseInt(popup.data.payment) / 100 + '€'
                        });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'continueOrder',
                            text: 'Procedi con il pagamento'
                        });
                        _this.confirmActionPopupData.buttons.push({
                            type: 'close',
                            text: 'Chiudi'
                        });
                        _this.confirmActionPopupState = 'active';
                        _this.activePopup = 'confirmAction';
                        _this.shadowState = 'active';
                        break;
                    case 'logout':
                        _this.confirmPopupData.title = 'Sicuro di voler uscire?';
                        _this.confirmPopupData.data = [];
                        _this.confirmPopupData.information = '';
                        _this.confirmPopupData.button = 'logout';
                        _this.confirmPopupData.type = 'logout';
                        _this.confirmPopupState = 'active';
                        _this.activePopup = 'logout';
                        _this.shadowState = 'active';
                        break;
                    case 'error':
                        _this.finishPopupData.title = '';
                        _this.finishPopupData.text = [];
                        _this.getErrorPopup(popup.data.title, popup.data.message);
                        break;
                }
            });
        }
        this.auth = this.authServics.authInit();
    };
    PopupsComponent.prototype.clearData = function () {
        this.addCardData = {
            object: 'card',
            exp_date: '',
            exp_month: null,
            exp_year: null,
            number: null,
            cvc: '',
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_zip: '',
            address_state: '',
            address_country: ''
        };
        // this.loginData = {
        //     email: '',
        //     password: '',
        //     type: '',
        //     orderData: {}
        //   };
        this.registrationData = {
            name: '',
            phone: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
        this.recoveryData = {
            email: ''
        };
        this.confirmPopupData = {
            id: null,
            title: '',
            text: '',
            data: [],
            information: {},
            button: '',
            type: ''
        };
        this.confirmFinishPopupData = {
            title: '',
            text: '',
            type: 'center'
        };
        this.confirmActionPopupData = {
            orderId: '',
            type: '',
            title: '',
            text: '',
            text2: '',
            actions: [],
            buttons: [],
            price: null
        };
        this.loginError = {
            email: false,
            password: false
        };
    };
    PopupsComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
        }
    };
    PopupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-popups',
            template: __webpack_require__(46),
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('addCardPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('loginPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('registrationPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('recoveryPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('finishPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmFinishPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmActionPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '42px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '42px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('shadowState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', offset: 1.0 })
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(47)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/environment.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'services/:id',
    'profile/privacy',
    'profile/help',
    'profile/conditions',
    'orders',
    'profile/:page'
];
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/server.routes.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" routerLink=\"\" (click)=\"updateTabMenu()\">Starbook</a>\n    <div class=\"search-block\" *ngIf=\"isFindField\">\n      <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"170px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='13px' height='13px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n        <div class=\"no-result\">Nessun risultato</div>\n      </div>\n    </div>\n    <div class=\"tagline\" *ngIf=\"!isFindField\">{{tagline}}</div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-label=\"Menu\" (click)=\"toggleMenu()\"></button>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth !== false\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/settings\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">{{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-dark navbar-tabs\">\n  <div class=\"container-starbook home-tab-bar\"\n       (swipeleft)=\"swipe($event.type, $event.deltaX)\"\n       (swiperight)=\"swipe($event.type, $event.deltaX)\">\n    <ul class=\"nav nav-pills\"\n        [ngStyle]=\"{'margin-left.px': delta}\">\n      <li class=\"nav-item\" *ngFor=\"let navServices of servicesCategoryList\">\n        <a class=\"nav-link\" [ngClass]=\"{'active':navServices._id===activeServiceCategory && activeServiceCategoryType !== false}\" (click)=\"tabNavigate(navServices._id)\"><i class=\"f{{navServices.icon_name}}\"></i> {{navServices.title}}</a>\n      </li>\n    </ul>\n  </div>\n</nav>-->\n\n<div class=\"container-starbook home-page\" *ngIf=\"isServicesView === true\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\" [ngClass]=\"{'services-block-big': serviceCategory.type === 'content'}\">\n            <span *ngIf=\"serviceCategory.type === 'content'\">\n              <img [src]=\"serviceCategory.image\" (load)=\"makeMasonry()\">\n              <div class=\"description\">{{ serviceCategory.description }}</div>\n            </span>\n            <span *ngIf=\"serviceCategory.type !== 'content'\">\n              <div class=\"header\">{{serviceCategory.title_1}}</div>\n              <div class=\"service content noselect\">\n                <span *ngFor=\"let item of serviceCategory.options\">\n                  <div class=\"item\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                    <i *ngIf=\"item.selected===true\" class=\"fa fa-check-square\"></i>\n                    <i *ngIf=\"item.selected===false\" class=\"fa fa-square-o\"></i>\n                    {{item.title_1}}\n                  </div>\n                  <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                    <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                    <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                  </div>\n                  </span>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      <app-order [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\"></app-order>\n    </div>\n  </div>\n  <!-- <div class=\"footer-container\">\n    <div class=\"copyright\">Starbook © 2016 Tutti i diritti riservati</div>\n    <span> • </span><a routerLink=\"../../profile/privacy\">Privacy</a>\n    <span> • </span><a routerLink=\"../../profile/conditions\">Condizioni</a>\n    <span> • </span><a routerLink=\"../../profile/help\">Assistenza</a>\n  </div> -->\n</div>\n<app-landing *ngIf=\"isServicesView === false\"></app-landing>\n<app-loading *ngIf=\"isLoading\" class=\"services-loader\"></app-loading>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <div class=\"sidebar-block\">\n      <h2>{{orderData.service}}</h2>\n\n      <!-- <div class=\"order-container\" *ngIf=\"!orderIsFull\">\n        <div class=\"order-list-empty\"><strong>Inserisci</strong> le informazioni necessari del appuntamento e invia la richiesta.</div>\n      </div> -->\n      <!-- <div class=\"order-container\" *ngIf=\"orderData.order_options.min_amount > orderData.totalPrice\">\n        <div class=\"order-list-empty\"><strong></strong>Prezzo minimo del'ordine €{{ orderData.order_options.min_amount / 100 }}</div>\n      </div> -->\n      <!-- <div class=\"order-container selected-orders\" [ngStyle]=\"{'max-height': maxOrderBlockSize}\">\n        <div class=\"category-group category\">\n          <span>{{ orderData.service }}</span>\n        </div>\n        <span  *ngFor=\"let orderService of orderData.services\">\n          <div class=\"category-group\">\n            <span *ngIf=\"orderService.price_type === 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}} {{orderService.option.symbol}}</i></span>\n            <span *ngIf=\"orderService.price_type !== 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}}</i></span>\n          </div>\n        </span>\n      </div> -->\n      <!-- <div class=\"category-group total\">\n        <span>Totale <i>€{{ orderData.totalPrice / 100 }}</i></span>\n      </div> -->\n\n      <div class=\"add-order-form\">\n        <label>Quando vuoi svolgere questo lavoro?</label>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOraMobile\" class=\"form-control\" placeholder=\"Data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" readonlyInput=\"readonlyInput\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"!isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOra\" class=\"form-control\" placeholder=\"Data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"browser\">\n          <div class=\"input-group date\" (clickOutside)=\"closeTimepicker()\">\n            <!-- <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span> -->\n            <input id=\"timeOra\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">\n              <!-- <span class=\"fa fa-clock-o\"></span> -->\n              {{time}}\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"!browser\">\n          <div class=\"input-group date\"> <!-- is not support if client != browser (clickOutside)=\"closeTimepicker()\" -->\n            <!-- <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span> -->\n            <input id=\"timeOraServer\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">{{time}}</div>\n          </div>\n        </div>\n        <label>Inserisci l’indirizzo</label>\n        <div class=\"form-group\" [ngClass]=\"{isError: !isAddressFull && submitOrder && isAddressDirty}\">\n          <div class=\"input-group date\">\n            <!-- <span class=\"fa fa-map-marker\"></span> -->\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Indirizzo\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"modifyAddress()\" (change)=\"modifyAddress()\">-->\n            <p-autoComplete id=\"luogo\" class=\"form-control text-small\" placeholder=\"Via Giuseppe Verdi 10 Milano\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"Order.delivery_address\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"formattedAddress\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\">\n            </p-autoComplete>\n          </div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address === ''\">Inserisci l'indirizzo esatto</div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address !== '' && isAddressOne\">Indirizzo non trovato</div>\n          <!--<div class=\"error-block\" *ngIf=\"!isAddressOne && isAddressDirty && address !== ''\">Indirizzo non è specifico</div>-->\n        </div>\n        <label>Nota</label>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"nota\" name=\"applicant_description\" [(ngModel)]=\"Order.delivery_description\" placeholder=\"Lascia una nota...\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"showConfirmation()\" [disabled]=\"!isEnable\">Anteprima del progetto</button>\n        </div>\n        <div class=\"footer-links\">\n          <p>\n            Starbook © 2017 •\n            <a routerLink=\"../../profile/privacy\">Privacy</a> •\n            <a routerLink=\"../../profile/conditions\">Condizioni</a> •\n            <a routerLink=\"../../profile/help\">Assistenza</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\">\n      <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.selected}\" (click)=\"renderPage(tab.name)\">\n        <span></span>\n        <div>{{tab.name}}</div>\n      </a>\n    </div>\n    <div class=\"col-xl-12 orders-container\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"orders-error\" *ngIf=\"pageData.length === 0 && requestIsComplete\">{{emptyListTitle}}</div>\n      <div class=\"order-information\" *ngFor=\"let order of pageData\">\n        <div class=\"header\">\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richiesti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Archivio'\">\n            <span class=\"black\"></span> Scaduto\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 98 && selectTab === 'Archivio'\">\n            <span class=\"orange\"></span> Completato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'Archivio'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-name\">\n            {{ categories[order.category_type] }}\n          </div>\n          <div class=\"order-date\">\n            {{ dateFormating(order.date) }}\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"row\">\n            <div class=\"order-row products col-xl-4\">\n              <!-- <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service' && product.amount > 0\">€{{ product.amount / 100 }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service'\">{{ product.description }}</i></div>\n              <!-- <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Richieste dei clienti'\">\n              <div *ngIf=\"order.status===0\">\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cliente:</div>\n                <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cellulare:</div>\n                <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Email:</div>\n                <div class=\"field-value\">{{ order.customer.email }}</div>\n              </div>\n\n              <!-- <div *ngIf=\"order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div> -->\n\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'I miei ordini'\">\n              <div *ngIf=\"!order.merchant || order.merchant === null || order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>In attesa di conferma...</strong></div>\n                </div>\n              </div>\n              <div *ngIf=\"order.merchant && order.merchant !== null && order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Archivio'\">\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id !== order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id === order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.customer && order.customer !== null && (!order.merchant || order.merchant === null) && order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.status===99\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"order-row description col-xl-4\">\n              {{ order.description }}\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <div class=\"code\">\n            <span>CODICE:</span>\n            {{ order._id }}\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"completaOrder(order._id)\">Completa servizio</button>\n            <div class=\"price-block\"><div class=\"content-price\">Preventivo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\" (click)=\"editOrder(order._id, order.payment.amount)\">Modifica</button>-->\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"confirmOrder(order._id)\">Conferma servizio</button>\n\n            <!--<button class=\"btn btn-primary\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\" (click)=\"reactivateOrder(order._id)\">Reattiva servizio</button>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\" (click)=\"cancelOrder(order._id)\">Annulla servizio</button>-->\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-warning\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\" (click)=\"continueOrder(order._id, order.payment.amount)\"><i class=\"fa fa-lock\"></i> Procedi</button>-->\n            <!--<div class=\"price-block archive\" *ngIf=\"order.status === 3 && selectTab === 'Archivio'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = "<!-- <div class=\"loader\" *ngIf=\"isLoading\"></div> -->\n<div class=\"profile-page\" [ngClass]=\"{whiteBg: selectTab === 'conditions' || selectTab === 'privacy' || selectTab === 'help'}\">\n  <div class=\"container-starbook without-tabs\">\n    <div class=\"row\">\n      <div class=\"left-navigate\" (swipeleft)=\"swipe($event.type, $event.deltaX)\" (swiperight)=\"swipe($event.type, $event.deltaX)\">\n        <div [ngStyle]=\"{'margin-left.px': delta}\">\n          <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.url === selectTab}\" [routerLink]=\"['/profile', tab.url]\">\n            <span></span>\n            <div>{{tab.name}}</div>\n          </a>\n          <a *ngIf=\"isAuthenticated === true\" (click)=\"logout()\"><span></span><div>Esci</div></a>\n        </div>\n      </div>\n      <div class=\"profile-settings\" *ngIf=\"selectTab === 'settings'\">\n        <div class=\"header\">Informazioni del account</div>\n        <form #changProfile=\"ngForm\">\n          <app-loading *ngIf=\"isLoading\"></app-loading>\n          <label>NOME COMPLETO</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"name\" placeholder=\"Nome Cognome\" #fullname=\"ngModel\" [(ngModel)]=\"userData.fullname\" required>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<label>Cognome</label>-->\n            <!--<input class=\"form-control\" name=\"lastname\" #fullname=\"ngModel\" [(ngModel)]=\"userData.lastname\" required disabled>-->\n          <!--</div>-->\n          <!--<div class=\"form-group\">-->\n            <!--<label>Nome Azienda</label>-->\n            <!--<input class=\"form-control\" name=\"patronymic\" #fullname=\"ngModel\" [(ngModel)]=\"userData.patronymic\" required disabled>-->\n          <!--</div>-->\n          <label>CELLULARE</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"phone\" placeholder=\"Numero\" #phone_number=\"ngModel\" [(ngModel)]=\"userData.phone_number\">\n          </div>\n          <label>EMAIL</label>\n          <div class=\"form-group\">\n            <div class=\"email-field\">\n              <input class=\"form-control\" name=\"email\" placeholder=\"Indirizzo email\" value=\"\" #email=\"ngModel\" [(ngModel)]=\"userData.email\" required disabled>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\" disabled>Modifica password</button>\n            </div>\n          </div>\n          <!--<div class=\"form-group password-block\">-->\n            <!--<label>Password</label>-->\n            <!--<div class=\"password-container\">-->\n              <!--<div class=\"password\">-->\n                <!--<span>•••••••••••</span>-->\n              <!--</div>-->\n              <!--<div class=\"change-password\">-->\n                <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!-- <div class=\"header second\">Indirizzo di fatturazione</div> -->\n          <!-- <label>Indirizzo del domicilio</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"address1\" #street=\"ngModel\" [(ngModel)]=\"userData.street\" placeholder=\"Via Verdi 13\">\n          </div> -->\n          <!-- <label>Città e CAP</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"address2\" #city=\"ngModel\" [(ngModel)]=\"userData.city\" placeholder=\"Città\">\n            <input class=\"form-control second\" name=\"number2\" #postal_code=\"ngModel\" [(ngModel)]=\"userData.postal_code\" placeholder=\"CAP\">\n          </div> -->\n          <!-- <label>Provincia e Nazione</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"city\" #province=\"ngModel\" [(ngModel)]=\"userData.province\" placeholder=\"Provincia\">\n            <input class=\"form-control second\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"userData.country\" placeholder=\"Nazione\">\n          </div> -->\n          <!-- <label>Partita IVA</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"piva\" placeholder=\"P.IVA\">\n          </div> -->\n          <!-- <label>Codice Fiscale</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"codice\" placeholder=\"Codice Fiscale\">\n          </div> -->\n          <div class=\"profile-information\" *ngIf=\"formError\">\n            <strong *ngIf=\"formError.title.length > 0\">{{formError.title}}</strong> {{formError.message}}\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateProfile()\">Aggiorna Informazioni</button>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\"><span class=\"fa fa-sign-out\"></span> Log out</button>-->\n          <!--</div>-->\n        </form>\n      </div>\n      <div class=\"cards-page\" *ngIf=\"selectTab === 'payment'\">\n        <app-loading *ngIf=\"isLoading\"></app-loading>\n        <div class=\"card-block\" *ngFor=\"let card of cards\">\n          <div class=\"container\">\n            <div class=\"header\">\n              <div class=\"card-logo {{ formatCssClass(card.brand) }}\"><span>**** {{ card.last4 }}</span></div>\n              <div class=\"isDefault\" *ngIf=\"defaultCard === card.id\">Default</div>\n              <div class=\"buttons-block\">\n                <a class=\"btn btn-primary\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n                <a class=\"btn btn-primary\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n                <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n              </div>\n            </div>\n            <div class=\"content\">\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Nome:</span>\n                  {{ card.name }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Numero:</span>\n                  **** {{ card.last4 }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Scadenza:</span>\n                  {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Tipo:</span>\n                  {{ card.brand }} {{ card.funding }} {{ card.object }}\n                </div>\n              </div>\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Indirizzo:</span>\n                  {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                  {{ card.address_state }} {{ card.address_city }} <br>\n                  {{ card.address_zip }} {{ card.address_country }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <a class=\"new-card\" (click)=\"addNewCard()\">\n            Aggiungi un metodo di pagamento\n          </a>\n        </div>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'conditions'\">\n        <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n        <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n        <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n        <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n        <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n        <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n        <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n        <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n        <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n        <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n        <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n        <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n        <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n        <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n        <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n        <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n        <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n        <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n        <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n        <p><strong>5. SERVIZIO CLIENTI</strong></p>\n        <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n        <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n        <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n        <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n        <p><strong>6. LICENZA D’USO</strong></p>\n        <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n        <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n        <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n        <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n        <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n        <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n        <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n        <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'privacy'\">\n        <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n        <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n        <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n        <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n        2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n        2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n        2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n        2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n        2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'help'\">\n        <p>Hai bisogno di aiuto? <br>\n        Scrivi una mail harald.bregu@starbook.co e ti risponderemo nel più breve tempo possibile.</p>\n        <p>Vuoi entrare a far parte di STARBOOK? Aumenta il numero dei tuoi clienti paganti e risparmia sui costi del trasporto.</p>\n        <p>Per richiedere informazioni:</p>\n        <p>Cellulare: +39 3272415028<br>\n        Email: harald.bregu@starbook.co</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"dark-screen\" *ngIf=\"activePopup !== ''\" (click)=\"closePopup()\"></div>\n<!-- Change password -->\n<div class=\"popup\" *ngIf=\"activePopup === 'changePassword'\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Cambia password</div>\n  <form class=\"login-form\" #changePasswordForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.currentPassword}\">\n      <label for=\"currentPassword\">La tua password</label>\n      <input id=\"currentPassword\" class=\"form-control\" type=\"password\" name=\"currentPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.currentPassword\" #currentPassword=\"ngModel\">\n      <span class=\"error\">La tua password attuale è richiesta</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"newPassword\">Nuova password</label>\n      <input id=\"newPassword\" class=\"form-control\" type=\"password\" name=\"newPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.newPassword\" #newPassword=\"ngModel\">\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.passwordConfirm}\">\n      <label for=\"passwordConfirm\">Ripeti la nuova password</label>\n      <input id=\"passwordConfirm\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.passwordConfirm\" #passwordConfirm=\"ngModel\" (keyup)=\"checkPassword(newPassword.value, passwordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" [disabled]=\"!changePasswordForm.form.valid\" (click)=\"changePassword(currentPassword.value, newPassword.value, passwordConfirm.value)\">Cambia password</button>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">Si è verificato un errore!</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\nc      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <div class=\"form-description\">\n      <span>Sei nuovo su Starbook?</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Nuovo account</a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div>\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi (collapse)\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("ng2-click-outside");

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = require("primeng/components/autocomplete/autocomplete");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("primeng/components/calendar/calendar");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ },
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Controsoffitto in cartongesso, Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-services\">\n          <app-loading *ngIf=\"isLoading\"></app-loading>\n          <div class=\"services-card\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché usare Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDc3MGE1YzYwNmFlOGU1MGQ4ZTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItY2xpY2stb3V0c2lkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLHlFOzs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHkxQkFBeTFCLGFBQWEsOG5CQUE4bkIsVUFBVSxVQUFVLGdCQUFnQixJQUFJLGlsQ0FBaWxDLGlCQUFpQiw0RkFBNEYsMENBQTBDLG9oTEFBb2hMLHdCQUF3QixzdEJBQXN0Qix3QkFBd0IseXZCQUF5dkIsd0JBQXdCLHM5RyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NzcwYTVjNjA2YWU4ZTUwZDhlOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGhlYWRlck1lc3NhZ2UgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgYXV0aERhdGEgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgYWN0aXZlVGFiID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGxvYWRpbmdTdGF0dXMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cbiAgcHVibGljIGdldE1lc3NhZ2UkO1xuICBwdWJsaWMgZ2V0UGVyc29uYWxNZW51JDtcbiAgcHVibGljIGdldEFjdGl2ZVRhYiQ7XG4gIHB1YmxpYyBnZXRMb2FkaW5nU3RhdHVzJDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZ2V0TWVzc2FnZSQgPSB0aGlzLmhlYWRlck1lc3NhZ2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldFBlcnNvbmFsTWVudSQgPSB0aGlzLmF1dGhEYXRhLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRBY3RpdmVUYWIkID0gdGhpcy5hY3RpdmVUYWIuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldExvYWRpbmdTdGF0dXMkID0gdGhpcy5sb2FkaW5nU3RhdHVzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuaGVhZGVyTWVzc2FnZS5uZXh0KG1lc3NhZ2UpO1xuICB9XG5cbiAgdXBkYXRlUGVyc29uYWxNZW51KGF1dGgpIHtcbiAgICB0aGlzLmF1dGhEYXRhLm5leHQoYXV0aCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVUYWIodGFiKSB7XG4gICAgdGhpcy5hY3RpdmVUYWIubmV4dCh0YWIpO1xuICB9XG5cbiAgdXBkYXRlTG9hZGluZ1N0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMubmV4dChzdGF0dXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3B1cHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVQb3B1cCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBwb3B1cFJlc3BvbnNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgZ2V0QWN0aXZlUG9wdXAkO1xuICBwdWJsaWMgZ2V0UG9wdXBSZXNwb25zZSQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlUG9wdXAkID0gdGhpcy5hY3RpdmVQb3B1cC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0UG9wdXBSZXNwb25zZSQgPSB0aGlzLnBvcHVwUmVzcG9uc2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG4gIGFjdGl2YXRlKHBvcHVwKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cC5uZXh0KHBvcHVwKTtcbiAgfVxuICBhY3Rpb25Db21wbGV0ZShkYXRhKSB7XG4gICAgdGhpcy5wb3B1cFJlc3BvbnNlLm5leHQoZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGltaW5nIHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGltaW5nVmFyOiBzdHJpbmc7XG4gIHRpbWluZ1ZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNlbmRUaW1pbmcodGltaW5nRGF0YTogSVRpbWluZykge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAndGltaW5nJywgdGltaW5nRGF0YS5jYXRlZ29yeSwgdGltaW5nRGF0YS50aW1pbmdWYXIsIHRpbWluZ0RhdGEudGltaW5nVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRFdmVudChldmVudDogSUV2ZW50KSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudC5jYXRlZ29yeSwgZXZlbnQuYWN0aW9uLCBldmVudC5sYWJlbCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZXJ2aWNlc09iamVjdDtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLyosIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKi8pIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHNlbmRTZXJ2aWNlcyhzZXJ2aWNlcykge1xuICAgIHRoaXMuc2VydmljZXNPYmplY3QgPSBzZXJ2aWNlcztcbiAgfVxuICBnZXRTZXJ2aWNlc09iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc09iamVjdDtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICdjYXRlZ29yaWVzJztcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuYXBpICsgcXVlcnlTdHJpbmcpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFNlcnZpY2VzKCkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdmZWF0dXJlZCcpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlcy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlYXJjaD90aXRsZT0nICsgcXVlcnkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U2VydmljZUJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlcnZpY2VzLycgKyBpZClcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5qc29uKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFVSTFNlYXJjaFBhcmFtcywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG4vLyBpbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBZGRyZXNzIHtcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIHN0cmVldF9udW1iZXI6IG51bWJlcjtcbiAgY2l0eTogc3RyaW5nO1xuICBwb3N0YWxfY29kZTogbnVtYmVyO1xuICBwcm92aW5jZTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIGNvdW50cnlfY29kZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgaXNGdWxsOiBib29sZWFuO1xuICBmb3JtYXR0ZWRBZGRyZXNzOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2Uge1xuICBwcml2YXRlIG9yZGVyRXZlbnQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHB1YmxpYyBnZXRPcmRlckV2ZW50JDtcblxuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBwcml2YXRlIGF1dGg7XG4gIHByaXZhdGUgZ29vZ2xlQXBpOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cC8qLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSovKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gICAgdGhpcy5nb29nbGVBcGkgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbic7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmdldE9yZGVyRXZlbnQkID0gdGhpcy5vcmRlckV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VFdmVudChldmVudCkge1xuICAgIHRoaXMub3JkZXJFdmVudC5uZXh0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiB7aGVhZGVyczogaGVhZGVyc307XG4gIH1cblxuICBzYXZlT3JkZXIob3JkZXJEYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdvcmRlcnMnLCB7XG4gICAgICBzZXJ2aWNlX2lkOiBvcmRlckRhdGEuc2VydmljZV9pZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcmRlckRhdGEuZGVsaXZlcnlfZGVzY3JpcHRpb24sXG4gICAgICBkZXRhaWxzOiBvcmRlckRhdGEuZGVsaXZlcnlfZGV0YWlscyxcbiAgICAgIGRhdGU6IG9yZGVyRGF0YS5kZWxpdmVyeV9kYXRlLFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IG9yZGVyRGF0YS5zdHJlZXQsXG4gICAgICAgIHN0cmVldF9udW1iZXI6IG9yZGVyRGF0YS5zdHJlZXRfbnVtYmVyLFxuICAgICAgICBjaXR5OiBvcmRlckRhdGEuY2l0eSxcbiAgICAgICAgcG9zdGFsX2NvZGU6IG9yZGVyRGF0YS5wb3N0YWxfY29kZSxcbiAgICAgICAgcHJvdmluY2U6IG9yZGVyRGF0YS5wcm92aW5jZSxcbiAgICAgICAgY291bnRyeTogb3JkZXJEYXRhLmNvdW50cnksXG4gICAgICAgIGNvdW50cnlfY29kZTogb3JkZXJEYXRhLmNvdW50cnlfY29kZVxuICAgICAgfSxcbiAgICAgIHBheW1lbnQ6IHtcbiAgICAgICAgYW1vdW50OiBvcmRlckRhdGEucGF5bWVudC5hbW91bnQsXG4gICAgICAgIGN1cnJlbmN5OiBvcmRlckRhdGEucGF5bWVudC5jdXJyZW5jeVxuICAgICAgfVxuICAgIH0sIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzKGtleTogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgbGV0IGFkZHJlc3NlcyA9IFtdO1xuICAgIHBhcmFtcy5zZXQoJ2FkZHJlc3MnLCBrZXkpO1xuICAgIHBhcmFtcy5zZXQoJ2xhbmd1YWdlJywgJ2l0Jyk7XG4gICAgcGFyYW1zLnNldCgna2V5JywgJ0FJemFTeUNMYzVldERTcnFpZUFuNGxQQ3N2RkRwa00zLUY3LWM1TScpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ29vZ2xlQXBpLCB7c2VhcmNoOiBwYXJhbXN9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGE6IGFueVtdID0gcmVzcG9uc2UuanNvbigpLnJlc3VsdHM7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgIGxldCBhZGRyZXNzRGF0YTogSUFkZHJlc3MgPSB7XG4gICAgICAgICAgICBzdHJlZXQ6ICcnLFxuICAgICAgICAgICAgc3RyZWV0X251bWJlcjogbnVsbCxcbiAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgcG9zdGFsX2NvZGU6IG51bGwsXG4gICAgICAgICAgICBwcm92aW5jZTogJycsXG4gICAgICAgICAgICBjb3VudHJ5OiAnJyxcbiAgICAgICAgICAgIGNvdW50cnlfY29kZTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBpc0Z1bGw6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogJydcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgYWRkcmVzcy5hZGRyZXNzX2NvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50cykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChjb21wb25lbnRzLnR5cGVzWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3N0cmVldF9udW1iZXInOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLnN0cmVldF9udW1iZXIgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAncm91dGUnOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLnN0cmVldCA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdsb2NhbGl0eSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY2l0eSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzInOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLnByb3ZpbmNlID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2NvdW50cnknOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNvdW50cnkgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jb3VudHJ5X2NvZGUgPSBjb21wb25lbnRzLnNob3J0X25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc3RhbF9jb2RlJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5wb3N0YWxfY29kZSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWRkcmVzc0RhdGEuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3MuZm9ybWF0dGVkX2FkZHJlc3M7XG5cbiAgICAgICAgICBpZiAoYWRkcmVzcy50eXBlc1swXSA9PT0gJ3N0cmVldF9hZGRyZXNzJykge1xuICAgICAgICAgICAgYWRkcmVzc0RhdGEuaXNGdWxsID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWRkcmVzc0RhdGEuY291bnRyeV9jb2RlID09PSAnSVQnKSB7XG4gICAgICAgICAgICBhZGRyZXNzZXMucHVzaChhZGRyZXNzRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3NlcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGF1dGhJbml0KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGg7XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdsb2dpbicsIHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBkYXRhLnJlc3VsdC5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICBhY2NvdW50X3R5cGVzOiBkYXRhLnJlc3VsdC5hY2NvdW50X3R5cGVzLFxuICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5yZXN1bHQucHJvZmlsZSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEucmVzdWx0LmNvbXBhbnksXG4gICAgICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgc2VydmljZXM6IGRhdGEucmVzdWx0LnNlcnZpY2VzLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBkYXRhLnJlc3VsdC5sb2NhdGlvbnMsXG4gICAgICAgICAgICBwYXltZW50OiBkYXRhLnJlc3VsdC5wYXltZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogZGF0YS5yZXN1bHQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGEucmVzdWx0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICB0b2tlbjogZGF0YS50b2tlblxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YS5yZXN1bHQpO1xuICAgICAgICAgIHJldHVybiBhdXRoRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBzaWdudXAobmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdzaWdudXAnLCB7ZnVsbG5hbWU6IG5hbWUsIHBob25lX251bWJlcjogcGhvbmUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGF1dGhEYXRhID0ge1xuICAgICAgICAgICAgX2lkOiBkYXRhLnJlc3VsdC5faWQsXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5yZXN1bHQuZW1haWwsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICByZWNvdmVyeShlbWFpbDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdwYXNzd29yZF9yZWNvdmVyeScsIHtlbWFpbDogZW1haWx9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldE9yZGVycyhwYXJhbXMpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHBhcmFtc1RvUmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuZm9yRWFjaCgocGVyYW0pID0+IHtcbiAgICAgIHBhcmFtc1RvUmVxdWVzdC5zZXQocGVyYW0ubmFtZSwgcGVyYW0udmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ29yZGVycycsIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVycygpLCBzZWFyY2g6IHBhcmFtc1RvUmVxdWVzdH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIFsnSWRyYXVsaWNvJywgJ0VsZXR0cmljaXN0YScsICdGYWJicm8nLCAnU3BhenphY2FtaW5vJywgJ0FudGVubmlzdGEnLCAnUHVsaXppZScsICdFZGlsaXppYScsICdHaWFyZGluYWdnaW8nLCAnSW5mb3JtYXRpY2EnXTtcbiAgfVxuXG4gIG1vZGlmeU9yZGVyKGlkLCB0eXBlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGV9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcmljZShpZCwgdHlwZSwgcHJpY2UpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnb3JkZXJzLycgKyBpZCwge2FjdGlvbjogdHlwZSwgcGF5bWVudDoge2Ftb3VudDogcHJpY2UsIGN1cnJlbmN5OiBcImV1clwiIH19LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvb3JkZXJzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHN0cmlwZVJlc3BvbnNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgZGF0YToge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbihjYXJkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PndpbmRvdykuU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oe1xuICAgICAgICBudW1iZXI6IGNhcmQubnVtYmVyLFxuICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICBleHBfeWVhcjogY2FyZC5leHBfeWVhcixcbiAgICAgICAgY3ZjOiBjYXJkLmN2YyxcbiAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgYWRkcmVzc19jaXR5OiBjYXJkLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeVxuICAgICAgfSwgKHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBzdHJpcGVSZXNwb25zZTogc3RyaXBlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB0b2tlbjogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5jYXJkXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXNvbHZlKHN0cmlwZVJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLnZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDYXJkKGNhcmREYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuKGNhcmREYXRhKVxuICAgICAgICAudGhlbigoZGF0YTogc3RyaXBlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMnLCB7c291cmNlOiBkYXRhLnRva2VufSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHtkZWZhdWx0X3NvdXJjZTogY2FyZElkfSx0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzdGF0dXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZWRpdENhcmQoY2FyZElkLCBjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgY2FyZERhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wYXltZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXywgRE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSB7XG4gIHByaXZhdGUgX2RvbTogRG9tQWRhcHRlciA9IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NKCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHsgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH1cblxuICBzZXRNZXRhRWxlbShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgaGVhZFRhZ3MgPSB0aGlzLl9kb2N1bWVudC5oZWFkLmNoaWxkcmVuIGFzIEhUTUxDb2xsZWN0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtID0gaGVhZFRhZ3NbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbS50YWdOYW1lID09PSAnbWV0YScpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBlbGVtWydhdHRyaWJzJ107XG4gICAgICAgIGlmICgnbmFtZScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnbmFtZScsIG5hbWUpO1xuICAgIHRoaXMuX2RvbS5zZXRBdHRyaWJ1dGUoZWwsICdjb250ZW50JywgdmFsdWUpO1xuICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5oZWFkLCBlbCk7XG4gIH1cblxuICBzZXRPZ0VsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ3Byb3BlcnR5JyBpbiBhdHRyKSB7XG4gICAgICAgICAgaWYgKGF0dHIucHJvcGVydHkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAncHJvcGVydHknLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJNYXNvbnJ5LCBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgTWFzb25yeTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnlMaXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHR5cGU6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbl9jb2RlOiBzdHJpbmc7XG4gIGljb25fbmFtZTogc3RyaW5nO1xuICBsYW5nOiBzdHJpbmc7XG4gIHByb2R1Y3RzOiBJU2VydmljZUNhdGVnb3J5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnkge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IElTZXJ2aWNlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm1JdGVtIHtcbiAgZm9ybUlkPzogbnVtYmVyO1xuICBvcHRpb25JZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGVfMTogc3RyaW5nO1xuICBpbnB1dF90eXBlPzogc3RyaW5nO1xuICBpbnB1dF92YWx1ZT86IGFueTtcbiAgdmFsdWVfc3ltYm9sPzogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgc2VsZWN0ZWQ/OmJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRm9ybSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgcHJpY2VfdHlwZTogc3RyaW5nO1xuICBvcHRpb25zOiBJU2VydmljZUZvcm1JdGVtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlcyB7XG4gIF9pZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZV91cmw6IHN0cmluZztcbiAgcHJpY2U6IHtcbiAgICBiYXNlX2Ftb3VudDogbnVtYmVyO1xuICB9LFxuICBvcmRlcl9vcHRpb25zOiB7XG4gICAgbWluX2Ftb3VudDogbnVtYmVyO1xuICAgIHBheW1lbnRfbWV0aG9kczogc3RyaW5nW11cbiAgfSxcbiAgZm9ybXM6IElTZXJ2aWNlRm9ybVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGJhc2VBbW91bnQgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgY2FsY3VsYXRlZDogMFxuICB9O1xuICBwdWJsaWMgY2FsY3VsYXRlUmVzdWx0cyA9IHtcbiAgICBxdWV1ZUZpcnN0OiAwLFxuICAgIHF1ZXVlU2Vjb25kOiAwLFxuICAgIHF1ZXVlRW5kOiAwXG4gIH07XG4gIHB1YmxpYyBvcGVyYW5kcyA9IHtcbiAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICBxdWV1ZVNlY29uZDogW10sXG4gICAgcXVldWVFbmQ6IFtdXG4gIH07XG4gIHB1YmxpYyBmaW5hbFByaWNlID0gMDtcbiAgcHVibGljIGRlZmF1bHRTZXJ2aWNlcztcblxuICBwdWJsaWMgc2VydmljZXNDYXRlZ29yeUxpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0W10gPSBbXTtcbiAgcHVibGljIGlzU2VydmljZXNWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBzZXJ2aWNlc0RhdGEgPSBbXTtcblxuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5OiBib29sZWFufHN0cmluZyA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZTogYm9vbGVhbnxudW1iZXIgPSBmYWxzZTtcbiAgcHVibGljIG1vZGVsOiBhbnk7XG4gIHB1YmxpYyBvcmRlckRhdGEgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgcHJpY2U6IHtcbiAgICAgIGJhc2VfYW1vdW50OiAwXG4gICAgfSxcbiAgICBvcmRlcl9vcHRpb25zOiB7XG4gICAgICBtaW5fYW1vdW50OiAwLFxuICAgICAgcGF5bWVudF9tZXRob2RzOiBbXVxuICAgIH0sXG4gICAgc2VydmljZTogJycsXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHRvdGFsUHJpY2U6IDBcbiAgfTtcbiAgcHVibGljIG9yZGVySXNGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG4gIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gLTE1O1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBtYXNvbnJ5OiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIEBWaWV3Q2hpbGQoQW5ndWxhck1hc29ucnkpIG1hc29ucnk6IEFuZ3VsYXJNYXNvbnJ5O1xuICAvLyBAVmlld0NoaWxkKE1hc29ucnlNb2R1bGUpIGxheW91dDogTWFzb25yeU1vZHVsZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICByZW5kZXJQYWdlKHNlcnZpY2VzOiBJU2VydmljZXMpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2Uoc2VydmljZXMudGl0bGUpO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgc2VydmljZXMudGl0bGUpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby9zZXJ2aWNlcy8nICsgc2VydmljZXMuX2lkKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5kZWZhdWx0U2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NvbnRlbnQnLFxuICAgICAgICBpbWFnZTogc2VydmljZXMuaW1hZ2VfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VydmljZXMuZGVzY3JpcHRpb24sXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLm9yZGVyRGF0YSA9IHtcbiAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VzLl9pZCxcbiAgICAgIHByaWNlOiBzZXJ2aWNlcy5wcmljZSxcbiAgICAgIG9yZGVyX29wdGlvbnM6IHNlcnZpY2VzLm9yZGVyX29wdGlvbnMsXG4gICAgICBzZXJ2aWNlOiBzZXJ2aWNlcy50aXRsZSxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHRvdGFsUHJpY2U6IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50XG4gICAgfTtcbiAgICB0aGlzLmJhc2VBbW91bnQuc3RhcnQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50O1xuICAgIGxldCBmb3JtSWQgPSAxO1xuICAgIHNlcnZpY2VzLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgdmFyIHRpdGxlXzE6IHN0cmluZztcbiAgICAgIGlmIChmb3JtLnRpdGxlXzEpIHtcbiAgICAgICAgdGl0bGVfMSA9IGZvcm0udGl0bGVfMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2VydmljZUZvcm06IElTZXJ2aWNlRm9ybSA9IHtcbiAgICAgICAgdGl0bGU6IGZvcm0udGl0bGUsXG4gICAgICAgIHRpdGxlXzEgOiB0aXRsZV8xLFxuICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiBmb3JtLnJlcXVpcmVkLFxuICAgICAgICBwcmljZV90eXBlOiBmb3JtLnByaWNlX3R5cGUsXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9O1xuXG4gICAgICBsZXQgb3B0aW9uSWQgPSAwO1xuICAgICAgZm9ybS5vcHRpb25zLmZvckVhY2goKGl0ZW06IElTZXJ2aWNlRm9ybUl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlXzEpIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZV8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlXzEgPSBpdGVtLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICBmb3JtSWQ6IGZvcm1JZCxcbiAgICAgICAgICBvcHRpb25JZDogb3B0aW9uSWQsXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgdGl0bGVfMTogdGl0bGVfMSxcbiAgICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgnaW5wdXRfdHlwZScgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdHlwZSddID0gaXRlbS5pbnB1dF90eXBlO1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdmFsdWUnXSA9IGl0ZW0uaW5wdXRfdmFsdWU7XG4gICAgICAgICAgb3B0aW9uWyd2YWx1ZV9zeW1ib2wnXSA9IGl0ZW0udmFsdWVfc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uWydzZWxlY3RlZCddID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmljZUZvcm0ub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbklkICsrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YS5wdXNoKHNlcnZpY2VGb3JtKTtcbiAgICAgIGZvcm1JZCArKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVTZXJ2aWNlKHNlcnZpY2VOYW1lLCBpdGVtTmFtZSkge1xuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2NoZWNrYm94J30pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTm90RW1wdHlGb3JtKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFZhbHVlICYmIHNlcnZpY2UucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ1JBRElPQlVUVE9OJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdyYWRpb2J1dHRvbid9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoKTtcbiAgfVxuXG4gIGNoZWNrTm90RW1wdHlGb3JtKGZvcm1JZCwgb3B0aW9uSWQpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5vcHRpb25JZCAhPT0gb3B0aW9uSWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShmb3JtSWQsIG9wdGlvbklkKSB7XG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2lucHV0J30pO1xuXG4gICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBzZWxlY3RBbGxDb250ZW50KCRldmVudCkge1xuICAgICRldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gIH1cblxuICB1bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZihzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICB9XG5cbiAgcXVldWVXb3JrZXIoKSB7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQ7XG4gICAgdGhpcy5vcGVyYW5kcyA9IHtcbiAgICAgIHF1ZXVlRmlyc3Q6IFtdLFxuICAgICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgICAgcXVldWVFbmQ6IFtdXG4gICAgfTtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSAwO1xuXG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NlbGVjdGVkJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQgKyBpdGVtLmFtb3VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRmlyc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKz0gdGFzay5hbW91bnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0ID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZVNlY29uZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICogdGFzay5jbnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZVNlY29uZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVFbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyAodGFzay5hbW91bnQgKiB0YXNrLmNudCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUVuZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCArIHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAgIHRoaXMucXVldWVXb3JrZXIoKTtcbiAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcyA9IFtdO1xuICAgIHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICBsZXQgY3VycmVudE9yZGVyU3RhdGUgPSBbXTtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgICAgICAgICAgICAgcHJpY2VfdHlwZTogc2VydmljZS5wcmljZV90eXBlLFxuICAgICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmljZS50eXBlID09PSAnSU5QVVRURVhUJykge1xuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5pbnB1dF92YWx1ZSAqIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0LFxuICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS52YWx1ZV9zeW1ib2xcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnQgKiBpdGVtLmlucHV0X3ZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JkZXJTdGF0ZS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLnB1c2goc2VydmljZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAgIC8vIHRvZ2dsZVNlcnZpY2UoY2F0ZWdvcnlMaXN0SWQ6IHN0cmluZywgY2F0ZWdvcnlJZDogc3RyaW5nLCBzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgLy8gbGV0IGNhdGVnb3J5TGlzdEluZGV4ID0gMDtcbiAgICAvLyB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAgIC8vICAgbGV0IGNhdGVnb3J5SW5kZXggPSAwO1xuICAgIC8vICAgaWYgKGNhdGVnb3J5TGlzdC5faWQgPT09IGNhdGVnb3J5TGlzdElkKSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZWdvcnlEYXRhLl9pZCA9PT0gY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgICAvLyAgICAgICAgICAgaWYgKHNlcnZpY2VEYXRhLm5hbWUgPT09IHNlcnZpY2VOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdFtjYXRlZ29yeUxpc3RJbmRleF0ucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF0uaXRlbXNbc2VydmljZUluZGV4XS5zZWxlY3RlZCA9ICFzZXJ2aWNlRGF0YS5zZWxlY3RlZDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gfVxuXG4gIC8vIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gIC8vICAgbGV0IGFycmF5SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgICBzZXJ2aWNlLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAvLyAgICAgICAgICAgaWYgKGFycmF5SW5kZXggaW4gY3VycmVudE9yZGVyU3RhdGUpIHtcbiAgLy8gICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGVbYXJyYXlJbmRleF0uaXRlbXMucHVzaCh7IG5hbWU6IGl0ZW0ubmFtZSB9KTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdID0ge1xuICAvLyAgICAgICAgICAgICAgIF9pZDogc2VydmljZS5faWQsXG4gIC8vICAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgLy8gICAgICAgICAgICAgICBpdGVtczogW3tcbiAgLy8gICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAvLyAgICAgICAgICAgICAgIH1dXG4gIC8vICAgICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgYXJyYXlJbmRleCsrO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAvLyAgICAgICB0aGlzLm9yZGVyRGF0YS5wdXNoKHNlcnZpY2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmIChjdXJyZW50T3JkZXJTdGF0ZS5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB0aGlzLm9yZGVySXNGdWxsID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHRhYk5hdmlnYXRlKGlkOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IGlkO1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgdGhpcy5jbGVhclNlcnZpY2VEYXRhKCk7XG4gIC8vICAgdGhpcy5yZW5kZXJQYWdlKGlkKTtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKHNlcnZpY2VDYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlQ2F0ZWdvcnlEYXRhLl9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gc2VydmljZUNhdGVnb3J5RGF0YS50eXBlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gcmVuZGVyUGFnZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBpZiAoU2VydmljZXNMaXN0Ll9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBTZXJ2aWNlc0xpc3QucHJvZHVjdHM7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2aWNlc1ZpZXcgIT09IGZhbHNlICYmIGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNYXNvbnJ5KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmKHRoaXMubWFzb25yeSkge1xuICAgICAgICB0aGlzLm1hc29ucnkubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5yb3V0ZS51cmwuc3Vic2NyaWJlKCh1cmwpID0+IHtcbiAgICAvLyAgIGlmICgwIGluIHVybCkge1xuICAgIC8vICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgLy8gICAgIGlmIChzZXJ2aWNlcykge1xuICAgIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShzZXJ2aWNlcyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnU3RhcmJvb2sgfCBBY3F1aXN0YSBzZXJ2aXppIHByb2Zlc3Npb25hbGkgb25saW5lJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBzZXJ2aWNlSWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHRoaXMuaXNTZXJ2aWNlc1ZpZXcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5zZXJ2aWNlcy1ibG9jaycsXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWdpblRvcDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlQnlJZChzZXJ2aWNlSWQpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHNlcnZpY2UgYnkgaWQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9yZGVyU2VydmljZS5nZXRPcmRlckV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyQ3JlYXRlZChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmhvbWVTZXJ2aWNlLmdldENhdGVnb3JpZXMoKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgdGhpcy5wYXJzZVNlcnZpY2VEYXRhKGRhdGEucmVzdWx0KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldEFjdGl2ZVRhYiQuc3Vic2NyaWJlKHRhYiA9PiB7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgPSB0YWI7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IHRhYjtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBwYXJzZVNlcnZpY2VEYXRhKGRhdGEpIHtcbiAgLy8gICBsZXQgaSA9IDA7XG4gIC8vICAgZGF0YS5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IFByb2R1Y3RzID0gW107XG4gIC8vICAgICBTZXJ2aWNlc0xpc3QucHJvZHVjdHMuZm9yRWFjaCgoU2VydmljZXNDYXRlZ29yeSkgPT4ge1xuICAvLyAgICAgICBsZXQgSXRlbXMgPSBbXTtcbiAgLy8gICAgICAgU2VydmljZXNDYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChDYXRlZ29yeUl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBJdGVtcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIG5hbWU6IENhdGVnb3J5SXRlbSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIFByb2R1Y3RzLnB1c2goe1xuICAvLyAgICAgICAgIF9pZDogU2VydmljZXNDYXRlZ29yeS5faWQgYXMgbnVtYmVyLFxuICAvLyAgICAgICAgIHRpdGxlOiBTZXJ2aWNlc0NhdGVnb3J5LnRpdGxlIGFzIHN0cmluZyxcbiAgLy8gICAgICAgICBpdGVtczogSXRlbXNcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QucHVzaCh7XG4gIC8vICAgICAgIF9pZDogU2VydmljZXNMaXN0Ll9pZCBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHR5cGU6IFNlcnZpY2VzTGlzdC50eXBlIGFzIG51bWJlcixcbiAgLy8gICAgICAgdGl0bGU6IFNlcnZpY2VzTGlzdC50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fY29kZTogU2VydmljZXNMaXN0Lmljb25fY29kZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fbmFtZTogU2VydmljZXNMaXN0Lmljb25fbmFtZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGxhbmc6IFNlcnZpY2VzTGlzdC5sYW5nIGFzIHN0cmluZyxcbiAgLy8gICAgICAgcHJvZHVjdHM6IFByb2R1Y3RzXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGlmIChpID09PSAwKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5ID0gU2VydmljZXNMaXN0Ll9pZDtcbiAgLy8gICAgICAgdGhpcy5yZW5kZXJQYWdlKFNlcnZpY2VzTGlzdC5faWQpO1xuICAvLyAgICAgICBpKys7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNlcnZpY2VEYXRhKCkge1xuICAvLyAgIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgLy8gICAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gIC8vICAgICAgIGNhdGVnb3J5RGF0YS5pdGVtcy5mb3JFYWNoKChzZXJ2aWNlRGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdXG4gIC8vICAgICAgICAgICAucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF1cbiAgLy8gICAgICAgICAgIC5pdGVtc1tzZXJ2aWNlSW5kZXhdXG4gIC8vICAgICAgICAgICAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgICBzZXJ2aWNlSW5kZXgrKztcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGNhdGVnb3J5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0SW5kZXgrKztcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAvLyAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgLy8gICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gIC8vICAgICBsZXQgYWxsTWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1waWxscyA+IGxpJyk7XG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgLy8gICAgICAgbWVudVNpemUgKz0gbWVudUl0ZW0ub2Zmc2V0V2lkdGg7XG4gIC8vICAgICB9XG4gIC8vICAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWItYmFyJykuY2xpZW50V2lkdGg7XG4gIC8vICAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUgKyA1MCkgLSBtZW51QmxvY2tXaWR0aDtcbiAgLy8gICAgIGlmIChhbGxvd01hcmdpbiA+PSAwKSB7XG4gIC8vICAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAvLyAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gIC8vICAgICAgICAgdGhpcy5kZWx0YSA9IC0xNTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPCBhbGxvd01hcmdpbikge1xuICAvLyAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBvcmRlckNyZWF0ZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlLnRpdGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlclBhZ2UodGhpcy5kZWZhdWx0U2VydmljZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVyIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBwYXltZW50Pzoge1xuICAgIGFtb3VudD86IG51bWJlcixcbiAgICBjdXJyZW5jeT86IHN0cmluZ1xuICB9LFxuICBjYXRlZ29yeV90eXBlOiBudW1iZXI7XG4gIGRlbGl2ZXJ5X2RldGFpbHM6IHN0cmluZztcbiAgZGVsaXZlcnlfZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGVsaXZlcnlfZGF0ZTogc3RyaW5nO1xuICBkZWxpdmVyeV9hZGRyZXNzOiB7XG4gICAgc3RyZWV0OiBzdHJpbmc7XG4gICAgc3RyZWV0X251bWJlcjogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBwb3N0YWxfY29kZTogc3RyaW5nO1xuICAgIHByb3ZpbmNlOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xuICB9LFxuICBjdXN0b21lcjoge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgZnVsbG5hbWU6IHN0cmluZztcbiAgICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgfSxcbiAgbWVyY2hhbnQ6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXJzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpdDogYW55O1xuICBwdWJsaWMgc2VsZWN0VGFiOiBzdHJpbmd8Ym9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFnbGluZXMgPSB7XG4gICAgJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSc6ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknLFxuICAgICdJIG1pZWkgb3JkaW5pJzogJ0kgbWllaSBvcmRpbmknLFxuICAgICdBcmNoaXZpbyc6ICdBcmNoaXZpbyBkaSB0dXR0aSBnbGkgb3JkaW5pJ1xuICB9O1xuICBwdWJsaWMgdGFicyA9IFtcbiAgICB7bmFtZTogJ0kgbWllaSBvcmRpbmknLCBzZWxlY3RlZDogZmFsc2V9LFxuICAgIHtuYW1lOiAnQXJjaGl2aW8nLCBzZWxlY3RlZDogZmFsc2V9XG4gIF07XG4gIHB1YmxpYyBjYXRlZ29yaWVzID0gW107XG4gIHB1YmxpYyBwYWdlRGF0YTogSU9yZGVyW10gPSBbXTtcbiAgcHVibGljIHJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gIHB1YmxpYyBpc1ZlbmRvciA9IGZhbHNlO1xuICBwdWJsaWMgZW1wdHlMaXN0VGl0bGUgPSAnJ1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBhdXRoRGF0YSA9IHt9O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGF1dGhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgdGhpcy5hdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICBhdXRoRGF0YS5hY2NvdW50X3R5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ1ZFTkRPUicpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWZW5kb3IgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmlzVmVuZG9yKSB7XG4gICAgICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICAgICAge25hbWU6ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknLCBzZWxlY3RlZDogZmFsc2V9LFxuICAgICAgICAgICAge25hbWU6ICdJIG1pZWkgb3JkaW5pJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQXJjaGl2aW8nLCBzZWxlY3RlZDogZmFsc2V9XG4gICAgICAgICAgXTtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBsZXQgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjb25maXJtT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhbmNlbE9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVhY3RpdmF0ZU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRQcmljZSc6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRhdGEuaXNNb2RpZmllZCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKHRoaXMuc2VsZWN0VGFiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDI7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQgPSB7YW1vdW50OiBhY3Rpb24uZGF0YS5vcmRlclByaWNlLCBjdXJyZW5jeTogJ2V1cid9O1xuICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5zcGxpY2Uob3JkZXJJbmRleCwxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRQcmljZSc6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0ucGF5bWVudC5hbW91bnQgPSBhY3Rpb24uZGF0YS5vcmRlclByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0ucGF5bWVudC5jdXJyZW5jeSA9ICdldXInO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29udGludWVPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5zcGxpY2Uob3JkZXJJbmRleCwxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLml0ID0ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IDEsXG4gICAgICBkYXlOYW1lczogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgZGF5TmFtZXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgIGRheU5hbWVzTWluOiBbJ0RvJywgJ0x1JywgJ01hJywgJ01lJywgJ0dpJywgJ1ZlJywgJ1NhJ10sXG4gICAgICBtb250aE5hbWVzOiBbJ0dlbm5haW8nLCAnRmViYnJhaW8nLCAnTWFyem8nLCAnQXByaWxlJywgJ01hZ2dpbycsICdHaXVnbm8nLFxuICAgICAgICAnTHVnbGlvJywgJ0Fnb3N0bycsICdTZXR0ZW1icmUnLCAnT3R0b2JyZScsICdOb3ZlbWJyZScsICdEaWNlbWJyZSddLFxuICAgICAgbW9udGhOYW1lc1Nob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RUYWIgPSBwYWdlO1xuICAgIGxldCB0YWJJbmRleCA9IDA7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYi5uYW1lID09PSBwYWdlKSB7XG4gICAgICAgIHRoaXMudGFic1t0YWJJbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJzW3RhYkluZGV4XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGFiSW5kZXgrKztcbiAgICB9KTtcblxuICAgIGxldCBwYXJhbXMgPSBbXTtcblxuICAgIGlmIChwYWdlID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJykge1xuICAgICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbXB0eUxpc3RUaXRsZSA9ICdOb24gY2kgc29ubyBvcmRpbmkgcmljaGllc3RpIGRhaSBjbGllbnRpIHBlciBpbCBtb21lbnRvJ1xuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ1JFQ0VJVkVEJ30pO1xuICAgIH1cblxuICAgIGlmIChwYWdlID09PSAnSSBtaWVpIG9yZGluaScpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSAnTm9uIGNpIHNvbm8gb3JkaW5pIGVmZmV0dHVhdGknXG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICAgIHBhcmFtcy5wdXNoKHtuYW1lOiAnb3JkZXJfdHlwZScsIHZhbHVlOiAnUkVRVUlSRUQnfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgPT09ICdBcmNoaXZpbycpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSBcIkwnYXJjaGl2aW8gZGVnbGkgb3JkaW5pIGUgdnVvdGFcIlxuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ0FSQ0hJVkUnfSk7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0T3JkZXJzKHBhcmFtcylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBvcmRlcnMnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wYWdlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhZ2VEYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKHRoaXMudGFnbGluZXNbcGFnZV0pO1xuICAgIH1cbiAgfVxuXG4gIGRhdGVGb3JtYXRpbmcoZGF0ZSkge1xuICAgIGxldCByZXR1cm5EYXRlID0gJyc7XG4gICAgaWYgKGRhdGUgIT09ICdub3cnKSB7XG4gICAgICBsZXQgZGF0ZVN0cmluZyA9IGRhdGUuc3Vic3RyaW5nKDAsIGRhdGUubGVuZ3RoIC0gNSk7XG4gICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zcGxpdCgnVCcpO1xuICAgICAgbGV0IGRhdGVDb21wb25lbnRzID0gZGF0ZVN0cmluZ1swXS5zcGxpdCgnLScpO1xuICAgICAgbGV0IGhvdXJDb21wb25lbnRzID0gZGF0ZVN0cmluZ1sxXS5zcGxpdCgnOicpO1xuICAgICAgcmV0dXJuRGF0ZSA9IGRhdGVDb21wb25lbnRzWzJdICsgJyAnICsgdGhpcy5pdC5tb250aE5hbWVzW2RhdGVDb21wb25lbnRzWzFdLTFdICsgJyAnICsgZGF0ZUNvbXBvbmVudHNbMF0gKyAnICcgKyBob3VyQ29tcG9uZW50c1swXSArICc6JyArIGhvdXJDb21wb25lbnRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBtb250aCA9IDEgKyBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgbGV0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbGV0IGhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKTtcbiAgICAgIGxldCBtaW51dGVzID0gY3VycmVudERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgbGV0IHNlY29uZHMgPSBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICByZXR1cm5EYXRlICs9IHllYXI7XG4gICAgICByZXR1cm5EYXRlICs9IG1vbnRoID4gOSA/ICctJyArIG1vbnRoIDogJy0wJyArIG1vbnRoO1xuICAgICAgcmV0dXJuRGF0ZSArPSBkYXkgPiA5ID8gJy0nICsgZGF5IDogJy0wJyArIGRheTtcbiAgICAgIHJldHVybkRhdGUgKz0gaG91cnMgPiA5ID8gJ1QnICsgaG91cnMgOiAnVDAnICsgaG91cnM7XG4gICAgICByZXR1cm5EYXRlICs9IG1pbnV0ZXMgPiA5ID8gJzonICsgbWludXRlcyA6ICc6MCcgKyBtaW51dGVzO1xuICAgICAgcmV0dXJuRGF0ZSArPSBzZWNvbmRzID4gOSA/ICc6JyArIHNlY29uZHMgICsgJy4wMDBaJyA6ICc6MCcgKyBzZWNvbmRzICsgJy4wMDBaJztcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkRhdGU7XG4gIH1cblxuICBkYXRlQ29tcGFyZShkYXRlMSwgZGF0ZTIpIHtcbiAgICBsZXQgZGF0ZTFPYmogPSBEYXRlLnBhcnNlKGRhdGUxKTtcbiAgICBsZXQgZGF0ZTJPYmogPSBEYXRlLnBhcnNlKGRhdGUyKTtcbiAgICBpZiAoZGF0ZTFPYmogPiBkYXRlMk9iaikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpdGVtc0Zvcm1hdGluZyhpdGVtcykge1xuICAgIGxldCByZXR1cm5Qcm9kdWN0cyA9IFtdO1xuICAgIGxldCBwcm9kdWN0cyA9IGl0ZW1zLnNwbGl0KCd8fCcpO1xuICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGxldCBwcm9kdWN0Q29tcG9uZW50cyA9IHByb2R1Y3Quc3BsaXQoJzonKTtcbiAgICAgIGlmIChwcm9kdWN0Q29tcG9uZW50c1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVyblByb2R1Y3RzLnB1c2goe25hbWU6IHByb2R1Y3RDb21wb25lbnRzWzBdLCBpdGVtczogcHJvZHVjdENvbXBvbmVudHNbMV19KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuUHJvZHVjdHM7XG4gIH1cblxuICBjb25maXJtT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjYW5jZWxPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICByZWFjdGl2YXRlT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdyZWFjdGl2YXRlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgY29tcGxldGFPcmRlcihpZCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2FkZFByaWNlJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGVkaXRPcmRlcihpZCwgcGF5bWVudCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2VkaXRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBpZCwgcGF5bWVudDogcGF5bWVudH19KTtcbiAgfVxuICBjb250aW51ZU9yZGVyKGlkLCBwYXltZW50KSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29udGludWVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZCwgcGF5bWVudDogcGF5bWVudCwgaW5mb3JtYXRpb246ICcxMjDigqwgKyA2LjbigqwgPSAxMjYuNuKCrCd9fSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyRGF0YSB7XG4gIGZ1bGxuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xuICBzdHJlZXQ/OiBzdHJpbmc7XG4gIGNpdHk/OiBzdHJpbmc7XG4gIHBvc3RhbF9jb2RlPzogbnVtYmVyO1xuICBwcm92aW5jZT86IHN0cmluZztcbiAgY291bnRyeT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc2VsZWN0VGFiOiBzdHJpbmd8Ym9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuICBwdWJsaWMgZGVsdGE6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB0YWJzID0gW1xuICAgIHtuYW1lOiAnR2VuZXJhbGknLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3NldHRpbmdzJ30sXG4gICAge25hbWU6ICdNZXRvZG8gZGkgUGFnYW1lbnRvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwYXltZW50J30sXG4gICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICBdO1xuXG4gIHB1YmxpYyB1c2VyRGF0YTogSVVzZXJEYXRhID0ge1xuICAgIGZ1bGxuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJ1xuICB9O1xuXG4gIHB1YmxpYyBhY3RpdmVQb3B1cCA9ICcnO1xuICBwdWJsaWMgY2hhbmdlUGFzc3dvcmRFcnJvciA9IHtcbiAgICBjdXJyZW50UGFzc3dvcmQ6IGZhbHNlLFxuICAgIHBhc3N3b3JkQ29uZmlybTogZmFsc2VcbiAgfTtcbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkRGF0YSA9IHtcbiAgICBjdXJyZW50UGFzc3dvcmQ6ICcnLFxuICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gIH07XG4gIHB1YmxpYyBmb3JtRXJyb3I6IGJvb2xlYW58e3RpdGxlPzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmd9ID0gZmFsc2U7XG4gIHB1YmxpYyBjYXJkcyA9IFtdO1xuICBwdWJsaWMgZGVmYXVsdENhcmQgPSAnJztcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSxcbiAgICAgIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBzZW9TZXJ2aWNlOiBTZW9TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIHRoaXMudXNlckRhdGEuZnVsbG5hbWUgPSBhdXRoRGF0YS5mdWxsbmFtZTtcbiAgICAgICAgdGhpcy51c2VyRGF0YS5lbWFpbCA9IGF1dGhEYXRhLmVtYWlsO1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAgICAgICAge25hbWU6ICdQcml2YWN5IFBvbGljeScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncHJpdmFjeSd9LFxuICAgICAgICAgIHtuYW1lOiAnQXNzaXN0ZW56YScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnaGVscCd9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICAgICAge25hbWU6ICdQcml2YWN5IFBvbGljeScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncHJpdmFjeSd9LFxuICAgICAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdJbCBtaW8gYWNjb3VudCcpO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFRhYiA9IHBhcmFtc1sncGFnZSddO1xuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdwYXltZW50Jykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ01ldG9kbyBkaSBwYWdhbWVudG8nKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5nZXRDYXJkcygpXG4gICAgICAgICAgICAudGhlbigoY2FyZHMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGNhcmRzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmQgPSBjYXJkcy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgICBjYXJkcy5zb3VyY2VzLmRhdGEuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZERhdGEpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgU3RhcmJvb2sgYWNjb3VudCBkbyBub3QgaGF2ZSBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB5b3UgYWRkIGEgbmV3IGNhcmQsIHdpbGwgYmUgY3JlYXRlZCBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZSB0aGUgU3RhcmJvb2sgYWNjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCd9fSk7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J3NldHRpbmdzJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0luZm9ybWF6aW9uaSBkZWwgbWlvIGFjY291bnQnKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlKClcbiAgICAgICAgICAgIC50aGVuKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgdXNlciBwcm9maWxlJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuZnVsbG5hbWUgPSBwcm9maWxlLnJlc3VsdC5wcm9maWxlLmZ1bGxuYW1lO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmVtYWlsID0gcHJvZmlsZS5yZXN1bHQuZW1haWw7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucGhvbmVfbnVtYmVyID0gcHJvZmlsZS5yZXN1bHQucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnN0cmVldCA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3Muc3RyZWV0O1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmNpdHkgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGUgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5jb3VudHJ5ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJ319KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J2NvbmRpdGlvbnMnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncHJpdmFjeScpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdoZWxwJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXNbJ3BhZ2UnXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbmV3Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25ld0NhcmRFcnJvcic6XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RhcnROZXdDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhcmRFZGl0ZWQnOlxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNbaV0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9maWxlKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLnVwZGF0ZVByb2ZpbGUodGhpcy51c2VyRGF0YSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1VwZGF0ZSB1c2VyIHByb2ZpbGUnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7fTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5wcm9maWxlLmZ1bGxuYW1lID0gdGhpcy51c2VyRGF0YS5mdWxsbmFtZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEucGhvbmVfbnVtYmVyID0gdGhpcy51c2VyRGF0YS5waG9uZV9udW1iZXI7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3Muc3RyZWV0ID0gdGhpcy51c2VyRGF0YS5zdHJlZXQ7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MuY2l0eSA9IHRoaXMudXNlckRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5wb3N0YWxfY29kZSA9IHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGU7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MucHJvdmluY2UgPSB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLmNvdW50cnkgPSB0aGlzLnVzZXJEYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgIHByb2ZpbGVEYXRhID0gYXV0aERhdGE7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShwcm9maWxlRGF0YSk7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnSGFpIGFnZ2lvcm5hdG8gbGUgdHVlIGluZm9ybWF6aW9uaSBjb24gc3VjY2Vzc28hJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOiAnRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXJQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnNlbGVjdFRhYiA9IHBhZ2U7XG4gIH1cblxuICBnZXRQb3B1cCh0eXBlKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9IHR5cGU7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkge1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLm5ld1Bhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZERhdGEucGFzc3dvcmRDb25maXJtID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tQYXNzd29yZChuZXdQYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgaWYgKG5ld1Bhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEVycm9yLnBhc3N3b3JkQ29uZmlybSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQsIGRlbHRhKSB7XG4gICAgbGV0IGNhbGN1bGF0ZURlbHRhID0gdGhpcy5kZWx0YSArIGRlbHRhO1xuICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gICAgbGV0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0LW5hdmlnYXRlID4gZGl2ID4gYScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgICAgIG1lbnVTaXplICs9IG1lbnVJdGVtLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1uYXZpZ2F0ZScpLmNsaWVudFdpZHRoO1xuICAgIGxldCBhbGxvd01hcmdpbiA9IChtZW51U2l6ZSkgLSBtZW51QmxvY2tXaWR0aDtcbiAgICBpZiAoYWxsb3dNYXJnaW4gPj0gMCkge1xuICAgICAgYWxsb3dNYXJnaW4gPSAtYWxsb3dNYXJnaW47XG4gICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhIDwgYWxsb3dNYXJnaW4pIHtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUICYmIGFsbG93TWFyZ2luICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZE5ld0NhcmQoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnYWRkQ2FyZCd9KTtcbiAgfVxuXG4gIGZvcm1hdFllYXIoeWVhcikge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZm9ybWF0ZWRZZWFyID0gJyc7XG4gICAgbGV0IHllYXJBcnJheSA9IHllYXIudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgeWVhckFycmF5LmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgaWYgKGkgPiAxKSB7XG4gICAgICAgIGZvcm1hdGVkWWVhciArPSBudW07XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdGVkWWVhcjtcbiAgfVxuXG4gIGZvcm1hdENzc0NsYXNzKGJyYW5kKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChicmFuZCA9PT0gJ1Zpc2EnKSB7XG4gICAgICByZXN1bHQgPSAndmlzYSc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ0FtZXJpY2FuIEV4cHJlc3MnKSB7XG4gICAgICByZXN1bHQgPSAnYW1leCc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ01hc3RlckNhcmQnKSB7XG4gICAgICByZXN1bHQgPSAnbWFzdGVyY2FyZCc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZWxlY3RDYXJkKGlkKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucGF5bWVudFNlcnZpY2Uuc2VsZWN0Q2FyZChpZClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NlbGVjdGluZyBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZCA9IHN0YXR1cy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wYXltZW50U2VydmljZS5kZWxldGVDYXJkKGlkKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRGVsZXRpbmcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLmNhcmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRDYXJkICYmIHRoaXMuY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG90aGVyQ2FyZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgICAgIG90aGVyQ2FyZCA9IGNhcmQuaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RDYXJkKG90aGVyQ2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZWRpdENhcmQoaWQpIHtcbiAgICBsZXQgY2FyZERhdGEgPSB7fTtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmKGNhcmQuaWQgPT09IGlkKSB7XG4gICAgICAgIGNhcmREYXRhID0ge1xuICAgICAgICAgIGlkOiBjYXJkLmlkLFxuICAgICAgICAgIGFkZHJlc3NfY2l0eTogY2FyZC5hZGRyZXNzX2NpdHksXG4gICAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeSxcbiAgICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgICAgYWRkcmVzc19saW5lMjogY2FyZC5hZGRyZXNzX2xpbmUyLFxuICAgICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgICBhZGRyZXNzX3ppcDogY2FyZC5hZGRyZXNzX3ppcCxcbiAgICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICAgIGV4cF95ZWFyOiB0aGlzLmZvcm1hdFllYXIoY2FyZC5leHBfeWVhciksXG4gICAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICAgIG51bWJlcjogJyoqKiogJyArIGNhcmQubGFzdDQsXG4gICAgICAgICAgY3ZjOiAnKioqJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2VkaXRDYXJkJywgZGF0YTogY2FyZERhdGF9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dvdXQnLCBkYXRhOiB7fX0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGUodXNlckRhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBmdWxsbmFtZTogdXNlckRhdGEuZnVsbG5hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhLnBob25lX251bWJlcixcbiAgICAgIHN0cmVldDogdXNlckRhdGEuc3RyZWV0LFxuICAgICAgY2l0eTogdXNlckRhdGEuY2l0eSxcbiAgICAgIHBvc3RhbF9jb2RlOiB1c2VyRGF0YS5wb3N0YWxfY29kZSxcbiAgICAgIHByb3ZpbmNlOiB1c2VyRGF0YS5wcm92aW5jZSxcbiAgICAgIGNvdW50cnk6IHVzZXJEYXRhLmNvdW50cnlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ21lJywgZGF0YSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZSgpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnbWUnLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL3Byb2ZpbGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcbmltcG9ydCAnLi9fX3dvcmthcm91bmQubm9kZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgeyBjcmVhdGVFbmdpbmUgfSBmcm9tICdhbmd1bGFyMi1leHByZXNzLWVuZ2luZSc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9zZXJ2ZXIucm91dGVzJztcblxuLy8gQXBwXG5cbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwIHx8IDgwODA7XG5cbi8qKlxuICogZW5hYmxlIHByb2QgbW9kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAqL1xuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLyoqXG4gKiBFeHByZXNzIFZpZXdcbiAqL1xuYXBwLmVuZ2luZSgnLmh0bWwnLCBjcmVhdGVFbmdpbmUoe30pKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG5cbi8qIFRoZXJlIGFyZSBjb2RlIGZyb20gb2xkIHNlcnZlciAqL1xuLy8gYXBwLnVzZSgnLycsIHJlcXVpcmUoJ3JlZGlyZWN0LWh0dHBzJykoe1xuLy8gICBib2R5OiAnJyxcbi8vICAgcG9ydDogNDQzLFxuLy8gICB0cnVzdFByb3h5OiB0cnVlXG4vLyB9KSlcbi8vXG4vLyBhcHAuYWxsKCcvKicsIGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSwgbmV4dCkge1xuLy8gICBpZighL153d3dcXC4vLnRlc3QocmVxLmhlYWRlcnMuaG9zdCkpIHtcbi8vICAgICByZXMuc3RhdHVzKDMwMSkucmVkaXJlY3QocmVxLnByb3RvY29sICsgJzovL3d3dy4nICsgcmVxLmhlYWRlcnMuaG9zdCArIHJlcS51cmwpXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbmV4dCgpXG4vLyAgIH1cbi8vIH0pXG5cblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuXG4vKiBUaGVyZSBhcmUgY29kZSBmcm9tIG9sZCBzZXJ2ZXIgKGFwcC5qcykgKi9cbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xubGV0IG9wdGlvbnMgPSB7XG4gIGtleTogZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvY2VydC9rZXkucGVtJywgJ3V0ZjgnKSxcbiAgY2VydDogZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvY2VydC9zZXJ2ZXIuY3J0JywgJ3V0ZjgnKVxufTtcbi8vIGh0dHBzLmNyZWF0ZVNlcnZlcihvcHRpb25zLCBhcHApLmxpc3Rlbig0NDMsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0IDQ0M2ApO1xuLy8gfSk7XG5cbi8vIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcblxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbn1cblxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIlxuLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBfX2NvcmVfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5sZXQgcGF0Y2ggPSBmYWxzZTtcbmlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG59XG5cblxuXG5pZiAoX19jb21waWxlcl9fICYmIF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIgJiYgX19jb21waWxlcl9fLkNzc1NlbGVjdG9yKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbmlmIChwYXRjaCkge1xuICAgIHZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgfHwgX19jb21waWxlcl9fLkNzc1NlbGVjdG9yO1xuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgfHwgX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcjtcbn1cblxuLy8gRml4IE1hdGVyaWFsIFN1cHBvcnRcbmZ1bmN0aW9uIHVuaXZlcnNhbE1hdGVyaWFsU3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIEJvb2xlYW4odGhpcy5pc0N1c3RvbUV2ZW50KGV2ZW50TmFtZSkpOyB9XG5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luLnByb3RvdHlwZS5zdXBwb3J0cyA9IHVuaXZlcnNhbE1hdGVyaWFsU3VwcG9ydHM7XG4vLyBFbmQgRml4IE1hdGVyaWFsIFN1cHBvcnRcblxuLy8gRml4IFVuaXZlcnNhbCBTdHlsZVxuaW1wb3J0IHsgTm9kZURvbVJvb3RSZW5kZXJlciwgTm9kZURvbVJlbmRlcmVyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsL25vZGUnO1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50Rml4KGNvbXBvbmVudFByb3RvOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBOb2RlRG9tUmVuZGVyZXIodGhpcywgY29tcG9uZW50UHJvdG8sIHRoaXMuX2FuaW1hdGlvbkRyaXZlcik7XG59XG5Ob2RlRG9tUm9vdFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnRGaXg7XG4vLyBFbmQgRml4IFVuaXZlcnNhbCBTdHlsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fd29ya2Fyb3VuZC5ub2RlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB0YWdsaW5lOiBzdHJpbmc7XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIHBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgbmF2YmFyU3RhdGUgPSBmYWxzZTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgaXNGaW5kRmllbGQgPSBmYWxzZTtcbiAgcHVibGljIHNwaW5lclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGNsZWFyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgZmluZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBpc1NlYXJjaGVkID0gZmFsc2U7XG4gIHB1YmxpYyBicm93c2VyID0gaXNCcm93c2VyO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYXV0aFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyBsb2FkaW5nU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IgKHB1YmxpYyByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhdXRoU2VydmljczogQXV0aFNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgaG9tZVNlcnZpY2U6IEhvbWVTZXJ2aWNlKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShcbiAgICAgICAgKGV2ZW50OkV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy5yb3V0ZS5yb290O1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRSb3V0ZS5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnaXNGaW5kRmllbGQnIGluIGN1cnJlbnRSb3V0ZS5zbmFwc2hvdC5kYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGaW5kRmllbGQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TG9naW5Qb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dpbid9KTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG4gIGdldFJlZ2lzdHJhdGlvblBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ3JlZ2lzdHJhdGlvbid9KTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKCcnKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5uYXZiYXJTdGF0ZSA9ICF0aGlzLm5hdmJhclN0YXRlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2Vydmljcy5hdXRoSW5pdCgpO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRNZXNzYWdlJC5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICAgIHRoaXMudGFnbGluZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZmluZFZhbHVlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1NlYXJjaGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0UGVyc29uYWxNZW51JC5zdWJzY3JpYmUoYXV0aCA9PiB7XG4gICAgICAgIGlmIChhdXRoICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICAvLyB0aGlzLmxvYWRpbmdTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldExvYWRpbmdTdGF0dXMkLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgIC8vICAgdGhpcy5pc0xvYWRpbmcgPSBzdGF0dXM7XG4gICAgLy8gfSk7XG4gIH1cblxuICB1cGRhdGVUYWJNZW51KHRvZ2dsZU1lbnUgPSBmYWxzZSkge1xuICAgIGlmICh0b2dnbGVNZW51KSB7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVBY3RpdmVUYWIoZmFsc2UpO1xuICB9XG5cbiAgc2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5pc1NlYXJjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5lclZpZXcgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZWFyY2goZXZlbnQucXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cy5yZXN1bHQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICB9KVxuICB9XG5cbiAgc2VsZWN0UmVzdWx0KHNlcnZpY2VzT2JqKSB7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZW5kU2VydmljZXMoc2VydmljZXNPYmopO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgdGhpcy5uYXZiYXJTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZmluZFZhbHVlID0gJyc7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXJ2aWNlcycsIHNlcnZpY2VzT2JqLl9pZF0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMuZmluZFZhbHVlID0gJyc7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAvLyB0aGlzLmxvYWRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcbiAqL1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgSGFtbWVyR2VzdHVyZUNvbmZpZywgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBpbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlLCBpc0Jyb3dzZXIsIE5vZGVIdHRwTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBBdXRvQ29tcGxldGVNb2R1bGUsIENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJ25nMi1jbGljay1vdXRzaWRlJztcbi8vIGltcG9ydCB7IE1hc29ucnlNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tYXNvbnJ5Jztcbi8vIGltcG9ydCB7IE5nYk1vZHVsZSwgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vb3JkZXIvb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXIvb3JkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cHNDb21wb25lbnQgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBob25lUGlwZSB9IGZyb20gJy4vcGlwZXMvcGhvbmUucGlwZSc7XG5pbXBvcnQgeyBMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGlyeVBpcGUgfSBmcm9tICcuL3BpcGVzL2V4cGlyeS5waXBlJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcblxuXG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9hcHAvYXBwLnJvdXRpbmcnO1xuXG4vLyBleHBvcnQgY2xhc3MgSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyAge1xuLy8gICBvdmVycmlkZXMgPSA8YW55PiB7XG4vLyAgICAgJ3N3aXBlJzoge3ZlbG9jaXR5OiAwLjQsIHRocmVzaG9sZDogMjB9XG4vLyAgIH07XG4vLyB9XG5cbmxldCBpbXBvcnRzID0gW1xuICBOb2RlSHR0cE1vZHVsZSxcbiAgVW5pdmVyc2FsTW9kdWxlLFxuICBGb3Jtc01vZHVsZSxcbiAgLy8gQnJvd3Nlck1vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgLy8gTWFzb25yeU1vZHVsZSxcblxuICBSb3V0ZXJNb2R1bGUsXG4gIHJvdXRpbmcsXG4gIC8vIE5nYk1vZHVsZS5mb3JSb290KCksXG4gIC8vIEF1dG9Db21wbGV0ZU1vZHVsZSxcbiAgLy8gQ2FsZW5kYXJNb2R1bGUsXG4gIENsaWNrT3V0c2lkZU1vZHVsZVxuXTtcbmxldCBkZWNsYXJhdGlvbnMgPSBbXG4gIEFwcENvbXBvbmVudCxcbiAgSG9tZUNvbXBvbmVudCxcbiAgT3JkZXJDb21wb25lbnQsXG4gIE9yZGVyc0NvbXBvbmVudCxcbiAgUHJvZmlsZUNvbXBvbmVudCxcbiAgUG9wdXBzQ29tcG9uZW50LFxuICBQaG9uZVBpcGUsXG4gIExhbmRpbmdDb21wb25lbnQsXG4gIEV4cGlyeVBpcGUsXG4gIExvYWRpbmdDb21wb25lbnRcbl07XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgbGV0IENhbGVuZGFyTW9kdWxlID0gcmVxdWlyZSgncHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyJykuQ2FsZW5kYXJNb2R1bGU7XG4gIGltcG9ydHMucHVzaChDYWxlbmRhck1vZHVsZSk7XG4gIGxldCBBdXRvQ29tcGxldGVNb2R1bGUgPSByZXF1aXJlKCdwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZScpLkF1dG9Db21wbGV0ZU1vZHVsZTtcbiAgaW1wb3J0cy5wdXNoKEF1dG9Db21wbGV0ZU1vZHVsZSk7XG59XG5lbHNlIHtcbiAgbGV0IENhbGVuZGFyTW9ja0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vbW9ja3MvY2FsZW5kYXIuY29tcG9uZW50JykuQ2FsZW5kYXJNb2NrQ29tcG9uZW50O1xuICBkZWNsYXJhdGlvbnMucHVzaChDYWxlbmRhck1vY2tDb21wb25lbnQpO1xuICBsZXQgQXV0b0NvbXBsZXRlTW9ja01vZHVsZSA9IHJlcXVpcmUoJy4vbW9ja3MvYXV0b2NvbXBsZXRlLmNvbXBvbmVudCcpLkF1dG9Db21wbGV0ZU1vY2tDb21wb25lbnQ7XG4gIGRlY2xhcmF0aW9ucy5wdXNoKEF1dG9Db21wbGV0ZU1vY2tNb2R1bGUpO1xufVxuXG4vKipcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXG4gKi9cbkBOZ01vZHVsZSh7XG4gIC8qKiBSb290IEFwcCBDb21wb25lbnQgKi9cbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gIGltcG9ydHM6IGltcG9ydHMsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIHtwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogZm9yd2FyZFJlZigoKSA9PiBPcmRlckNvbXBvbmVudCl9LFxuICAgIC8vIHtcbiAgICAvLyAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAvLyAgIHVzZUNsYXNzOiBIYW1tZXJDb25maWdcbiAgICAvLyB9LFxuICAgIEhvbWVTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIE9yZGVyU2VydmljZSxcbiAgICBQcm9maWxlU2VydmljZSxcbiAgICBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBPcmRlcnNTZXJ2aWNlLFxuICAgIFBvcHVwc1NlcnZpY2UsXG4gICAgUGF5bWVudFNlcnZpY2UsXG4gICAgQW5hbHl0aWNzU2VydmljZSxcbiAgICBTZW9TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzZXJ2aWNlcy86aWQnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7aXNGaW5kRmllbGQ6IHRydWV9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnb3JkZXJzJyxcbiAgICBjb21wb25lbnQ6IE9yZGVyc0NvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2ZpbGUvOnBhZ2UnLFxuICAgIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9Db21wbGV0ZU1vY2tDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1hdXRvQ29tcGxldGUnLFxuICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIvPicsXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ3N1Z2dlc3Rpb25zJykgc3VnZ2VzdGlvbnM6IGFueVtdO1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhbGVuZGFyTW9ja0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2NrQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ2xvY2FsZScpIGxvY2FsZTogYW55O1xuICBASW5wdXQoJ21pbkRhdGUnKSBtaW5EYXRlOiBhbnk7XG4gIEBJbnB1dCgnbWF4RGF0ZScpIG1heERhdGU6IGFueTtcbiAgcHVibGljIG9uU2VsZWN0OiBhbnk7XG4gIHByaXZhdGUgaW5uZXJWYWx1ZTogYW55ID0gJyc7XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbW9ja3MvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSwgSUFkZHJlc3MgfSBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBvcmRlckRhdGE7XG4gIEBJbnB1dCgnb3JkZXJJc0Z1bGwnKSBvcmRlcklzRnVsbDtcblxuICBwdWJsaWMgaXQ6IGFueTtcbiAgcHVibGljIHRpbWVQaWNrZXIgPSBbXTtcbiAgcHVibGljIG1vbnRoczoge307XG4gIHB1YmxpYyB0aW1lUGlja2VySXNTaG93ID0gZmFsc2U7XG4gIHB1YmxpYyBhZGRyZXNzZXMgPSBbXTtcbiAgcHVibGljIGFkZHJlc3MgPSAnJztcbiAgcHVibGljIHNlbGVjdGVkQWRkcmVzczogSUFkZHJlc3MgPSB7XG4gICAgc3RyZWV0OiAnJyxcbiAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBpc0Z1bGw6IGZhbHNlLFxuICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gIH07XG4gIHB1YmxpYyBpc0FkZHJlc3NPbmUgPSBmYWxzZTtcbiAgcHVibGljIGlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgcHVibGljIGlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gIHB1YmxpYyBpc0VuYWJsZSA9IHRydWU7XG4gIHB1YmxpYyBPcmRlciA9IHtcbiAgICBzZXJ2aWNlX2lkOiAnJyxcbiAgICBkZWxpdmVyeV9kZXRhaWxzOiBbXSxcbiAgICBkZWxpdmVyeV9kZXNjcmlwdGlvbjogJycsXG4gICAgYXBwbGljYW50X2Z1bGxuYW1lOiAnbm9uZScsXG4gICAgYXBwbGljYW50X2VtYWlsOiAnbm9uZScsXG4gICAgYXBwbGljYW50X3Bob25lOiAnbm9uZScsXG4gICAgZGVsaXZlcnlfYWRkcmVzczogJycsXG4gICAgZGF0ZTogbnVsbCxcbiAgICB0aW1lOiAnJyxcbiAgICBkZWxpdmVyeV9kYXRlOiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgY2l0eTogJycsXG4gICAgcG9zdGFsX2NvZGU6IG51bGwsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNvdW50cnk6ICcnLFxuICAgIGNvdW50cnlfY29kZTogJycsXG4gICAgZm9ybWF0dGVkQWRkcmVzczogJycsXG4gICAgcGF5bWVudDoge2Ftb3VudDogMCwgY3VycmVuY3k6ICcnfVxuICB9O1xuICBwdWJsaWMgbWluRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMjQqMjEpICogNjAgKiA2MCAqIDEwMDApO1xuICBwdWJsaWMgc3VibWl0T3JkZXIgPSBmYWxzZTtcbiAgcHVibGljIG9yZGVyRm9ybTogYW55O1xuICBwdWJsaWMgaXNNb2JpbGVDYWxlbmRhcjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBtYXhPcmRlckJsb2NrU2l6ZTogbnVtYmVyfHN0cmluZyA9ICdhdXRvJztcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgYnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXIucHVzaCgnMDg6MDAnLCAnMDg6MzAnLCAnMDk6MDAnLCAnMDk6MzAnLCAnMTA6MDAnLCAnMTA6MzAnLCAnMTE6MDAnLCAnMTQ6MDAnLCAnMTQ6MzAnLCAnMTU6MDAnKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAvLyAgIGlmIChpID4gNyAmJiBpIDwgMTUpIHtcbiAgICAvLyAgICAgaWYgKGkgPiA5KSB7XG4gICAgLy8gICAgICAgdGhpcy50aW1lUGlja2VyLnB1c2goaSArICc6MDAnLCBpICsgJzozMCcpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMudGltZVBpY2tlci5wdXNoKCcwJyArIGkgKyAnOjAwJywgJzAnICsgaSArICc6MzAnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLm1vbnRocyA9IHtcbiAgICAgIDE6ICdHZW5uYWlvJyxcbiAgICAgIDI6ICdGZWJicmFpbycsXG4gICAgICAzOiAnTWFyem8nLFxuICAgICAgNDogJ0FwcmlsZScsXG4gICAgICA1OiAnTWFnZ2lvJyxcbiAgICAgIDY6ICdHaXVnbm8nLFxuICAgICAgNzogJ0x1Z2xpbycsXG4gICAgICA4OiAnQWdvc3RvJyxcbiAgICAgIDk6ICdTZXR0ZW1icmUnLFxuICAgICAgMTA6ICdPdHRvYnJlJyxcbiAgICAgIDExOiAnTm92ZW1icmUnLFxuICAgICAgMTI6ICdEaWNlbWJyZSdcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlczogJyArIHRoaXMuZGVmYXVsdFNlcnZpY2VzLnRpdGxlKTtcblxuICB9XG5cbiAgdG9nZ2xlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSAhdGhpcy50aW1lUGlja2VySXNTaG93O1xuICB9XG5cbiAgb3BlblRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFRpbWUodGltZSkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgdGltZSd9KTtcbiAgICB0aGlzLk9yZGVyLnRpbWUgPSB0aW1lO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzKGV2ZW50KSB7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDIpIHtcbiAgICAgIHRoaXMub3JkZXJTZXJ2aWNlLmdldEFkZHJlc3NlcyhldmVudC5xdWVyeSlcbiAgICAgICAgLnRoZW4oKGFkZHJlc3NlcykgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gW107XG4gICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBhZGRyZXNzZXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBZGRyZXNzKHZhbHVlKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCBhZGRyZXNzJ30pO1xuICAgIGlmICh2YWx1ZS5pc0Z1bGwpIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IHZhbHVlO1xuICB9XG5cbiAgbW9kaWZ5QWRkcmVzcygpIHtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICB9XG5cbiAgc2hvd0NvbmZpcm1hdGlvbigpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnc3RhcnQnfSk7XG4gICAgdGhpcy5zdWJtaXRPcmRlciA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG5cbiAgICB0aGlzLk9yZGVyLnN0cmVldCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldDtcbiAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXRfbnVtYmVyO1xuICAgIHRoaXMuT3JkZXIuY2l0eSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNpdHk7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5wcm92aW5jZTtcbiAgICB0aGlzLk9yZGVyLmNvdW50cnkgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jb3VudHJ5O1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY291bnRyeV9jb2RlO1xuICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgdGhpcy5hZGRyZXNzID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0ICsgJywgJyArIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldF9udW1iZXIgKyAnLCAnICsgdGhpcy5zZWxlY3RlZEFkZHJlc3MuY2l0eTtcblxuICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVmVyc2lvbiB3aXRoIHJlcXVlc3RpbmcgYWRkcmVzcyBhZnRlciBjbGljayAnQ3JlYXRlIGFuIG9yZGVyJyBidXR0b24gLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm9yZGVyU2VydmljZS5nZXRBZGRyZXNzZXModGhpcy5hZGRyZXNzKVxuICAgIC8vICAgICAudGhlbigoYWRkcmVzczogSUFkZHJlc3NbXSkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMSkge1xuICAgIC8vICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gYWRkcmVzcykge1xuICAgIC8vICAgICAgICAgICB2YXIgYWRkciA9IGFkZHJlc3NbaW5kZXhdO1xuICAgIC8vICAgICAgICAgICB2YXIgY2l0eV90b19tYXRjaCA9IG5ldyBSZWdFeHAoYWRkci5jaXR5LCAnaScpXG4gICAgLy8gICAgICAgICAgIHZhciBzdHJlZXRfbnVtYmVyX3RvX21hdGNoID0gbmV3IFJlZ0V4cChTdHJpbmcoYWRkci5zdHJlZXRfbnVtYmVyKSwgJ2knKVxuICAgIC8vICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzLm1hdGNoKGNpdHlfdG9fbWF0Y2gpICYmIHRoaXMuYWRkcmVzcy5tYXRjaChzdHJlZXRfbnVtYmVyX3RvX21hdGNoKSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldCA9IGFkZHIuc3RyZWV0O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9IGFkZHIuc3RyZWV0X251bWJlcjtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyLmNpdHk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IGFkZHIucG9zdGFsX2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wcm92aW5jZSA9IGFkZHIucHJvdmluY2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkci5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gYWRkci5jb3VudHJ5X2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gYWRkci5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkci5zdHJlZXQgKyAnLCAnICsgYWRkci5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHIuY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93UHJldmlld09yZGVyKClcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSBlbHNlIGlmICgwIGluIGFkZHJlc3MpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0ID0gYWRkcmVzc1swXS5zdHJlZXQ7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSBhZGRyZXNzWzBdLnN0cmVldF9udW1iZXI7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyZXNzWzBdLmNpdHk7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gYWRkcmVzc1swXS5wb3N0YWxfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSBhZGRyZXNzWzBdLnByb3ZpbmNlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkcmVzc1swXS5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSBhZGRyZXNzWzBdLmNvdW50cnlfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMF0uZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5zdHJlZXQgKyAnLCAnICsgYWRkcmVzc1swXS5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHJlc3NbMF0uY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgLy8gdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpXG4gICAgLy9cbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gIH1cblxuICBzaG93UHJldmlld09yZGVyKCkge1xuICAgIGlmICh0aGlzLk9yZGVyLmRhdGUgJiYgdGhpcy5vcmRlcklzRnVsbCAmJiB0aGlzLmlzQWRkcmVzc0Z1bGwgJiYgdGhpcy5vcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IDw9IHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IG9yZGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIGRhdGU6IGRheSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldICsgJyAnICsgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB0aW1lOiB0aGlzLk9yZGVyLnRpbWUsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuT3JkZXIuc3RyZWV0ICsgJywgJyArIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciArICcsICcgKyB0aGlzLk9yZGVyLmNpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW5Gcm9tT3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb259fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb259fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT3JkZXIoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLk9yZGVyLmRhdGUpO1xuICAgIGxldCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJyk7XG4gICAgaWYgKHVzZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiAnMCcgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBjb3JyZWN0TW9udGggPSAxICsgZGF0ZS5nZXRNb250aCgpO1xuICAgICAgbGV0IG1vbnRoID0gY29ycmVjdE1vbnRoID4gOSA/IGNvcnJlY3RNb250aCA6ICcwJyArIGNvcnJlY3RNb250aDtcbiAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF5ICsgJ1QnICsgdGhpcy5PcmRlci50aW1lICsgJzowMC4wMDBaJztcbiAgICAgIHRoaXMuT3JkZXIuc2VydmljZV9pZCA9IHRoaXMub3JkZXJEYXRhLnNlcnZpY2VfaWQ7XG4gICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMgPSBbe1xuICAgICAgICB0aXRsZTogdGhpcy5vcmRlckRhdGEuc2VydmljZSxcbiAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICB0eXBlOiAnc2VydmljZSdcbiAgICAgIH1dO1xuICAgICAgdGhpcy5vcmRlckRhdGEuc2VydmljZXMuZm9yRWFjaCgob3JkZXJDYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAob3JkZXJDYXRlZ29yeS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJykge1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgIC8vIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUgKyAnIC0gJyArIG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgLy8gdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSArICcgLSAnICsgb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLnByaWNlLFxuICAgICAgICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5PcmRlci5wYXltZW50ID0ge1xuICAgICAgICBhbW91bnQ6IHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UsXG4gICAgICAgIGN1cnJlbmN5OiAnZXVyJ1xuICAgICAgfTtcblxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5zYXZlT3JkZXIodGhpcy5PcmRlcilcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdmaW5pc2gnfSk7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2F2aW5nIG9yZGVyJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuXG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzID0gW107XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5PcmRlci50aW1lID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kYXRlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5zdWJtaXRPcmRlciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlckVuZCd9KTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyU2VydmljZS5tYWtlRXZlbnQoe3N0YXR1czogdHJ1ZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ2Vycm9yJ30pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBvciBub3Q6ICcrIGVycm9yKTtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDIpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnUGVyIGZhdm9yZSwgaW5zZXJpc2NpIHVuIG1ldG9kbyBkaSBwYWdhbWVudG8gcHJpbWEgZGkgcHJlbm90YXJlIHVuIHNlcnZpemlvJ319KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0lsIHNlcnZpemlvIHJpY2hpZXN0byBub24gw6ggYW5jb3JhIGRpc3BvbmliaWxlIGluIHF1ZXN0YSB6b25hLiBQZXIgZmF2b3JlIGNvbnRhdHRhY2kgbmVsbGEgc2V6aW9uZSBhc3Npc3RlbnphIGRpIFN0YXJib29rIHBlciByaWNoaWVkZXJlIGlsIHN1cHBvcnRvIG5lbGxhIHpvbmEgZGVzaWRlcmF0YS4nfX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAgZWxzZSB7XG4gICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogXCJDJ8OoIHN0YXRvIHVuIGVycm9yZSByaWd1YXJkbyBhbGxhIHJpY2hpZXN0YSBkZWwgb3JkaW5lLCByaWNhcmljYSBsYSBwYWdpbmEgZSByaXByb3ZhIGRpIG51b3ZvLlwifX0pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW4nfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdjb25maXJtJykge1xuICAgICAgICAgIHRoaXMuY3JlYXRlT3JkZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGF0ZSgpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IGRhdGUnfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaG9tZS9ob21lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGFuZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYW5kaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMYW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNhcmRTdHlsZXMgPSB7MTogJzAuOTUnLCAyOiAnMC45NScsIDM6ICcwLjknfTtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBzZXJ2aWNlcyA9IFtdO1xuICBwdWJsaWMgc3BpbmVyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgY2xlYXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1VuYSBjaXR0w6Agc21hcnQgaGEgYmlzb2dubyBkaSBzZXJ2aXppIHNtYXJ0Jyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaG9tZVNlcnZpY2UuZ2V0U2VydmljZXMoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXMucmVzdWx0O1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGZlYXR1cmVkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gIH1cbiAgY2FyZEhvdmVyKGlkLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdvbicpIHtcbiAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpZCA9PT0gMykge1xuICAgICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzAuOSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzAuOTUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaChldmVudCkge1xuICAgIHRoaXMuc3BpbmVyVmlldyA9IHRydWU7XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlYXJjaChldmVudC5xdWVyeSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdTZWFyY2gnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cy5yZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgICAgfSlcbiAgfVxuXG4gIHNlbGVjdFJlc3VsdChzZXJ2aWNlc09iaikge1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VuZFNlcnZpY2VzKHNlcnZpY2VzT2JqKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlcnZpY2VzJywgc2VydmljZXNPYmoudGl0bGVdKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gJyc7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdleHBpcnknXG59KVxuZXhwb3J0IGNsYXNzIEV4cGlyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL2V4cGlyeS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwaG9uZSdcbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHBob25lID0gJyc7XG4gICAgICBsZXQgbnVtSW5kZXggPSAwO1xuICAgICAgbGV0IHBob25lTnVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIHBob25lTnVtcy5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bUluZGV4ID09PSAyIHx8IG51bUluZGV4ID09PSA0IHx8IG51bUluZGV4ID09PSA2KSB7XG4gICAgICAgICAgcGhvbmUgKz0gbnVtICsgJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBob25lICs9IG51bTtcbiAgICAgICAgfVxuICAgICAgICBudW1JbmRleCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGhvbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL3Bob25lLnBpcGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcG9wdXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcHVwcy5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhZGRDYXJkUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignbG9naW5Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWdpc3RyYXRpb25Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWNvdmVyeVBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbmlzaFBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtRmluaXNoUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybUFjdGlvblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NoYWRvd1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIGFjdGl2ZVBvcHVwID0gJyc7XG4gIHB1YmxpYyBhZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBsb2dpblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyByZWNvdmVyeVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBzaGFkb3dTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBlbWFpbFBhdHRlcm47XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgIGFkZENhcmREYXRhID0ge1xuICAgIG9iamVjdDogJ2NhcmQnLFxuICAgIGV4cF9kYXRlOiAnJyxcbiAgICBleHBfbW9udGg6IG51bGwsXG4gICAgZXhwX3llYXI6IG51bGwsXG4gICAgbnVtYmVyOiBudWxsLFxuICAgIGN2YzogJycsXG4gICAgbmFtZTogJycsICAgICAgICAgICAvLyBOb21lIGludGVzdGF0YXJpb1xuICAgIGFkZHJlc3NfbGluZTE6ICcnLCAgLy8gVmlhXG4gICAgYWRkcmVzc19saW5lMjogJycsICAvLyBOclxuICAgIGFkZHJlc3NfY2l0eTogJycsICAgLy8gQ2l0dMOgXG4gICAgYWRkcmVzc196aXA6ICcnLCAgICAvLyBDQVBcbiAgICBhZGRyZXNzX3N0YXRlOiAnJywgIC8vIFByb3ZpbmNpYVxuICAgIGFkZHJlc3NfY291bnRyeTogJycgLy8gUGFlc2VcbiAgfTtcbiAgcHVibGljIGFjdGlvbkNhcmRUeXBlID0gJ2FkZCc7XG4gIHB1YmxpYyBlZGl0ZWRDYXJkSWQ6IG51bWJlcjtcbiAgcHVibGljIGFkZENhcmRFcnJvciA9IHtcbiAgICBleHBfZGF0ZTogZmFsc2UsXG4gICAgbnVtYmVyOiBmYWxzZSxcbiAgICBjdmM6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBsb2dpbkRhdGEgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBvcmRlckRhdGE6IHt9XG4gIH07XG4gIHB1YmxpYyBsb2dpbkVycm9yID0ge1xuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBwYXNzd29yZDogZmFsc2VcbiAgfTtcbiAgcHVibGljIHJlZ2lzdHJhdGlvbkRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICB9O1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uRXJyb3IgPSB7XG4gICAgbmFtZTogZmFsc2UsXG4gICAgcGhvbmU6IGZhbHNlLFxuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBwYXNzd29yZEZpcnN0OiBmYWxzZSxcbiAgICBwYXNzd29yZDogZmFsc2VcbiAgfTtcbiAgcHVibGljIHJlY292ZXJ5RGF0YSA9IHtcbiAgICBlbWFpbDogJydcbiAgfTtcbiAgcHVibGljIHJlY292ZXJ5RXJyb3IgPSB7XG4gICAgZW1haWw6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBjb25maXJtUG9wdXBEYXRhID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBkYXRhOiBbXSxcbiAgICBpbmZvcm1hdGlvbjoge30sXG4gICAgYnV0dG9uOiAnJyxcbiAgICB0eXBlOiAnJ1xuICB9O1xuICBwdWJsaWMgY29uZmlybUZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgdHlwZTogJ2NlbnRlcidcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEgPSB7XG4gICAgb3JkZXJJZDogJycsXG4gICAgdHlwZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHRleHQyOiAnJyxcbiAgICBhY3Rpb25zOiBbXSxcbiAgICBidXR0b25zOiBbXSxcbiAgICBwcmljZTogbnVsbFxuICB9O1xuICBwdWJsaWMgZmluaXNoUG9wdXBEYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiBbXVxuICB9O1xuXG4gIHB1YmxpYyBpc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBmb3JtRXJyb3I6IGJvb2xlYW58e3RpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZ30gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljczogQXV0aFNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBvcHVwU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbWFpbFBhdHRlcm4gPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgfVxuICBnZXRQb3B1cCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdsb2dpbicpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uJykge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVjb3ZlcnknKSB7XG4gICAgICB0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ2hlY2sgeW91ciBpbmJveCc7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW1xuICAgICAgICAgICdXZSBzZW50IGEgcGFzc3dvcmQgcmVzZXQgbGluayB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFBsZWFzZSBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gY3JlYXRlIGUgbmV3IHBhc3N3b3JkLicsXG4gICAgICAgICAgJ1RoZSBsaW5rIHdpbGwgb25seSBiZSBhY3RpdmUgZm9yIDEgaG91ci4gQWZ0ZXIgdGhhdCB5b3Ugd2lsbCBuZWVkIHRvIHJlcXVlc3QgYSBuZXcgb25lLidcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtRmluaXNoJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1FbmQnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZCcpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtQWN0aW9uJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1PcmRlckVuZCcpIHtcbiAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoaXNSZW9wZW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmRQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgIGlmICghaXNSZW9wZW4pIHtcbiAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpICYmIHBhc3N3b3JkLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdMb2dpbicsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZGF0YTtcbiAgICAgICAgICBpZiAodGhpcy5sb2dpbkRhdGEudHlwZSA9PT0gJ2Zyb21PcmRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YTogdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSEnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOb24gcml1c2NpYW1vIGEgdHJvdmFyZSB1biBhY2NvdW50IGNvbiBxdWVsbOKAmWluZGlyaXp6byBlLW1haWwnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGEgdHVhIHBhc3N3b3JkIG5vbiDDqCBjb3JyZXR0YSdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrRW1haWwodHlwZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjb3ZlcnknOlxuICAgICAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY292ZXJ5JzpcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRGF0ZSh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlID09PSAnbmV3Q2FyZCcpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS5zcGxpdCgnLycpO1xuICAgICAgICBpZiAocGFydHNbMF0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja05vbkVtcHR5KHR5cGUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdsb2dpbicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25OYW1lJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvblBob25lJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGhvbmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGhvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvblBhc3N3b3JkJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmROdW1iZXInKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZEN2dicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmN2YyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuY3ZjID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nKSB7XG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFeHBpcnkodmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9ICgxICsgZGF0ZS5nZXRNb250aCgpKS50b1N0cmluZygpO1xuICAgIGlmICgoZGF0ZS5nZXRNb250aCgpICsgMSkgPCAxMCkge1xuICAgICAgbW9udGggPSAnMCcgKyBtb250aC50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgeWVhckVsZW1zID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIGxldCB5ZWFyID0gcGFyc2VJbnQoeWVhckVsZW1zWzJdLnRvU3RyaW5nKCkgKyB5ZWFyRWxlbXNbM10udG9TdHJpbmcoKSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgZGF0ZUVsZW1zID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgaWYgKGVsZW0gPT09ICcvJykge1xuICAgICAgICAgIGRhdGVFbGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9ICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggIT09IDUpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IHBhcnRzID0gcmVzdWx0LnNwbGl0KCcvJyk7XG4gICAgICBpZiAocGFydHNbMF0gIT09IHJlc3VsdCkge1xuICAgICAgICBpZiAocGFyc2VJbnQocGFydHNbMV0pID4geWVhcikge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KHBhcnRzWzBdKSA+PSBwYXJzZUludChtb250aCkgJiYgcGFyc2VJbnQocGFydHNbMV0pID09PSB5ZWFyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNoZWNrQ2FyZE51bWJlcihjYXJkTnVtYmVyKSB7XG4gICAgLy8gaWYgKGNhcmROdW1iZXIgIT09IG51bGwpIHtcbiAgICAvLyAgIGlmICh0aGlzLnBheW1lbnRTZXJ2aWNlLmNhcmROdW1iZXJWYWxpZGF0ZShjYXJkTnVtYmVyKSkge1xuICAgIC8vICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSBmYWxzZTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgcmVnaXN0cmF0aW9uKG5hbWU6IHN0cmluZywgcGhvbmU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcGFzc3dvcmRDb25maXJtOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkgJiYgcGFzc3dvcmQgPT09IHBhc3N3b3JkQ29uZmlybSAmJiBwYXNzd29yZC5sZW5ndGggPiAwICYmIG5hbWUubGVuZ3RoID4gMCAmJiBwaG9uZS5sZW5ndGggPiA5KSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5zaWdudXAobmFtZSwgcGhvbmUsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdSZWdpc3RyYXRpb24nLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YSk7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZS9wYXltZW50J10pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0luZGlyaXp6byBlLW1haWwgZ2nDoCBpbiB1c28uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSGFpIGluZGljYXRvIGRpIGVzc2VyZSB1biBudW92byBjbGllbnRlIG1hIMOoIGdpw6BcbiAgICAgICAgICAgICAgICBwcmVzZW50ZSB1biBhY2NvdW50IGNvbGxlZ2F0byBhbGwnaW5kaXJpenpvIGUtbWFpbDogbWFpbEBnbWFpbC5jb21gXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MjI6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGFyYW1ldHJpIG1hbmNhbnRpJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSW5zZXJpc2NpIHR1dHRpIGkgcGFyYW1ldHJpIHBlciBwcm9jZWRlcmUgY29uIGxhIHJlZ2lzdHJhemlvbmVgXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3JlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQyfDqCBzdGF0byB1biBlcnJvcmUgc2Nvbm9zY2l1dG8sIHBlciBmYXZvcmUgcmlwcm92YSBwacO5IHRhcmRpYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVjb3ZlcnkoZW1haWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MucmVjb3ZlcnkoZW1haWwpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdSZWNvdmVyeSBvZiBwYXNzd29yZCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnZmluaXNoJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1NpIMOoIHZlcmlmaWNhdG8gdW4gcHJvYmxlbWEhJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBDaSBkaXNwaWFjZS4gSW1wb3NzaWJpbGUgaWRlbnRpZmljYXJlIGwnYWNjb3VudCBjb24gbGUgaW5mb3JtYXppb25pIGZvcm5pdGUuYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25maXJtT3JkZXIoaWQpIHtcbiAgICAvLyB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdBQ0NFUFQnKVxuICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2Vydml6aW8gY29uZmVybWF0byBjb24gc3VjY2Vzc28nO1xuICAgIC8vICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnQWRlc3NvIG5vbiByZXN0YSBhbHRybyBjaGUgb2ZmcmlyZSBpbCBzdW8gc2Vydml6aW8gYWwgY2xpZW50ZS4gUGVyIHF1YWxzaWFzaSBjb21tdW5pY2F6aW9uZSBwdcOyIHVzYXJlIGkgZGF0aSBkZWwgY29udGF0dG8gYWdnaXVudGkgZGFsIGNsaWVudGUuJztcbiAgICAvLyAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hRW5kJztcbiAgICAvLyAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRW5kJyk7XG4gICAgLy8gICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgLy8gICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgLy8gICAgICAgICB0aXRsZTogJ09yZGVyIGNvbmZpcm1hdGlvbiBlcnJvcicsXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBvcmRlciBjb25maXJtYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgIC8vICAgICAgIH07XG4gICAgLy8gICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdDQU5DRUwnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IENhbmNlbCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnT3JkaW5lIGFubnVsbGF0byc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgPSAnUXVlc3RvIG9yZGluZSDDqCBzdGF0byBhbm51bGxhdG8sIHB1b2kgcmlhdHRpdmFybG8gaW4gdW4gc2Vjb25kbyBtb21lbnRvLic7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY2FuY2VsT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhbmNlbGxhdGlvbiBlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY2FuY2VsaW5nIHlvdXIgb3JkZXIuIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcmVhY3RpdmF0ZU9yZGVyKGlkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnUkVBQ1RJVkFURScpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogUmVhY3RpdmF0ZScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnT3JkaW5lIHJpYXR0aXZhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1F1ZXN0byBvcmRpbmUgw6ggc3RhdG8gcmlhdHRpdmF0bywgdmVycmFpIG5vdGlmaWNhdG8gcXVhbmRvIHVuIHByb2Zlc3Npb25pc3RhIGNvbmZlcm1lcmEgcXVlc3RvIG9yZGluZS4nO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ3JlYWN0aXZhdGVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhY3RpdmF0aW9uIG9yZGVyIGVycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBEdXJpbmcgdGhlIHJlYWN0aXZhdGlvbiBvZiB5b3VyIG9yZGVyIGlzIHRoZSBvcmRlciB0aGUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICB9XG5cbiAgY29uZmlybU5ld09yZGVyKCkge1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybSd9KTtcbiAgfVxuXG4gIGFkZE5ld0NhcmQoKSB7XG4gICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEubnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5sZW5ndGggPT09IDUpIHtcbiAgICAgIGxldCBleHBfcGFydHMgPSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLnNwbGl0KCcvJyk7XG4gICAgICBpZiAoZXhwX3BhcnRzWzBdICE9PSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX21vbnRoID0gZXhwX3BhcnRzWzBdO1xuICAgICAgICB0aGlzLmFkZENhcmREYXRhLmV4cF95ZWFyID0gZXhwX3BhcnRzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmN2Yy5sZW5ndGggPCAzKSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ3N0YXJ0TmV3Q2FyZCd9KTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5wYXltZW50U2VydmljZS5hZGROZXdDYXJkKHRoaXMuYWRkQ2FyZERhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdBZGQgbmV3IGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmQnLCBkYXRhOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmRFcnJvcid9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRDYXJkKCkge1xuICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgIGxldCBlZGl0Q2FyZERhdGEgPSB7XG4gICAgICBleHBfbW9udGg6IG51bGwsXG4gICAgICBleHBfeWVhcjogbnVsbCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgYWRkcmVzc19saW5lMTogJycsXG4gICAgICBhZGRyZXNzX2xpbmUyOiAnJyxcbiAgICAgIGFkZHJlc3NfY2l0eTogJycsXG4gICAgICBhZGRyZXNzX3ppcDogJycsXG4gICAgICBhZGRyZXNzX3N0YXRlOiAnJyxcbiAgICAgIGFkZHJlc3NfY291bnRyeTogJydcbiAgICB9O1xuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IGV4cF9wYXJ0cyA9IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChleHBfcGFydHNbMF0gIT09IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUpIHtcbiAgICAgICAgZWRpdENhcmREYXRhLmV4cF9tb250aCA9IGV4cF9wYXJ0c1swXTtcbiAgICAgICAgZWRpdENhcmREYXRhLmV4cF95ZWFyID0gZXhwX3BhcnRzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGVkaXRDYXJkRGF0YS5uYW1lID0gdGhpcy5hZGRDYXJkRGF0YS5uYW1lO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfbGluZTEgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTE7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19saW5lMiA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMjtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2NpdHkgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY2l0eTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX3ppcCA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc196aXA7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19zdGF0ZSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnkgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY291bnRyeTtcbiAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnc3RhcnROZXdDYXJkJ30pO1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZWRpdENhcmQodGhpcy5lZGl0ZWRDYXJkSWQsIGVkaXRDYXJkRGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0VkaXQgY2FyZCBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjYXJkRWRpdGVkJywgZGF0YTogcmVzcG9uc2V9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICduZXdDYXJkRXJyb3InfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3IuanNvbigpLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRQcmljZShvcmRlcklkKSB7XG4gICAgLy8gbGV0IG9yZGVyUHJpY2VFdXIgPSBwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpICsgKChwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpIC8gMTAwKSAqIDUuNSk7XG4gICAgLy8gbGV0IG9yZGVyUHJpY2UgPSBwYXJzZUZsb2F0KG9yZGVyUHJpY2VFdXIudG9GaXhlZCgyKSkgKiAxMDA7XG5cbiAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIob3JkZXJJZCwgJ0NMT1NFJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBDbG9zZScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb21wbGV0YXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdhZGRQcmljZUVuZCc7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkUHJpY2VFbmQnO1xuICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2FkZFByaWNlJywgZGF0YToge29yZGVySWQ6IG9yZGVySWQsIGlzTW9kaWZpZWQ6IHJlc3BvbnNlLm5Nb2RpZmllZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cbiAgZWRpdFByaWNlKG9yZGVySWQpIHtcbiAgICBsZXQgb3JkZXJQcmljZUV1ciA9IHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgKyAoKHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgLyAxMDApICogNS41KTtcbiAgICBsZXQgb3JkZXJQcmljZSA9IHBhcnNlRmxvYXQob3JkZXJQcmljZUV1ci50b0ZpeGVkKDIpKSAqIDEwMDtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UuYWRkUHJpY2Uob3JkZXJJZCwgJ0FDVElWRV9QQVlNRU5UJywgb3JkZXJQcmljZSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBBY3RpdmUgcGF5bWVudCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2VkaXRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBvcmRlcklkLCBvcmRlclByaWNlOiBvcmRlclByaWNlLCBpc01vZGlmaWVkOiByZXNwb25zZS5uTW9kaWZpZWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICB9XG4gIGNvbnRpbnVlT3JkZXIob3JkZXJJZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihvcmRlcklkLCAnUEFZJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBQYXknLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ1BhZ2FtZW50byBlZmZldHR1YXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdUaSBhYmJpYW1vIGludmlhdG8gdW5hIG1haWwgZSB1biBzbXMgY29uIGxhIGNvbmZlcm1hIGRlbCBwYWdhbWVudG8gZSBsYSByaWNldnV0YSBmaXNjYWxlJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb250aW51ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IG9yZGVySWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdsb2dvdXQnLCBkYXRhOiB7fX0pO1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICB9XG5cbiAgZ2V0RXJyb3JQb3B1cCh0aXRsZSwgdGV4dCkge1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQucHVzaCh0ZXh0KTtcbiAgICB0aGlzLmdldFBvcHVwKCdlcnJvcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBvcHVwU2VydmljZS5nZXRBY3RpdmVQb3B1cCQuc3Vic2NyaWJlKHBvcHVwID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3B1cC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEuZW1haWwgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dpbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dpbkZyb21PcmRlcic6XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5vcmRlckRhdGEgPSBwb3B1cC5kYXRhO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEudHlwZSA9ICdmcm9tT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9naW4nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkQ2FyZCc6XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNhcmRUeXBlID0gJ2FkZCc7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2FkZENhcmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZWRpdENhcmQnOlxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DYXJkVHlwZSA9ICdlZGl0JztcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkQ2FyZElkID0gcG9wdXAuZGF0YS5pZDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUgPSBwb3B1cC5kYXRhLmV4cF9tb250aCArICcvJyArIHBvcHVwLmRhdGEuZXhwX3llYXI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLm5hbWUgPSBwb3B1cC5kYXRhLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTEgPSBwb3B1cC5kYXRhLmFkZHJlc3NfbGluZTE7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTIgPSBwb3B1cC5kYXRhLmFkZHJlc3NfbGluZTI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY2l0eSA9IHBvcHVwLmRhdGEuYWRkcmVzc19jaXR5O1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3ppcCA9IHBvcHVwLmRhdGEuYWRkcmVzc196aXA7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGUgPSBwb3B1cC5kYXRhLmFkZHJlc3Nfc3RhdGU7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY291bnRyeSA9IHBvcHVwLmRhdGEuYWRkcmVzc19jb3VudHJ5O1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5udW1iZXIgPSBwb3B1cC5kYXRhLm51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuY3ZjID0gcG9wdXAuZGF0YS5jdmM7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2FkZENhcmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdyZWdpc3RyYXRpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdDb25mZXJtYSBzZXJ2aXppbyBpbiBjb3Jzb+KApic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdJbCBzaXN0ZW1hIHN0YSBjb250cm9sbGFuZG8gc2UgcXVlc3RvIHNlcnZpemlvIMOoIHN0YXRvIGFzc2VnbmF0byBhZCB1biBhbHRybyBwcm9mZXNzaW9uaXN0YSBvIGFudWxsYXRvIGRhbCBjbGllbnRlIHN0ZXNzby4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWEnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKHBvcHVwLmRhdGEub3JkZXJJZCwgJ0FDQ0VQVCcpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb25mZXJtYXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnQWRlc3NvIG5vbiByZXN0YSBhbHRybyBjaGUgb2ZmcmlyZSBpbCBzdW8gc2Vydml6aW8gYWwgY2xpZW50ZS4gUGVyIHF1YWxzaWFzaSBjb21tdW5pY2F6aW9uZSBwdcOyIHVzYXJlIGkgZGF0aSBkZWwgY29udGF0dG8gYWdnaXVudGkgZGFsIGNsaWVudGUuJztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYUVuZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUVuZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IHBvcHVwLmRhdGEub3JkZXJJZH19KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT3JkZXIgY29uZmlybWF0aW9uIGVycm9yJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIG9yZGVyIGNvbmZpcm1hdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW5jZWxPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnQW5udWxsYSBvcmRpbmU/JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBhbm51bGxhdG8gcXVlc3RvIG9yZGluZSBzb2xvIHR1IHNhcmFpIGluIGdyYWRvIGRpIHZlZGVybG8uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnQW5udWxsYSBvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVhY3RpdmF0ZU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdSaWF0dGl2YSBvcmRpbmU/JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciByaWF0dGl2YXRvIHF1ZXN0byBvcmRpbmUgc2FyYSB2aXNpYmlsZSBhIHR1dHRpIGkgcHJvZmVzc2lvbmlzdGkuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnUmlhdHRpdmEgb3JkaW5lJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1OZXdPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnRGV0dGFnbGkgZGVsbOKAmW9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YSA9IFt7cHJvZHVjdE5hbWU6IHBvcHVwLmRhdGEub3JkZXJEYXRhLnNlcnZpY2UsIGl0ZW1OYW1lOiAnJywgcHJpY2U6ICcnLCB0eXBlOiAnc2VydmljZSd9XTtcbiAgICAgICAgICAgIHBvcHVwLmRhdGEub3JkZXJEYXRhLnNlcnZpY2VzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgaWYocHJvZHVjdC5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiBwcm9kdWN0Lm5hbWUsIGl0ZW1OYW1lOiBwcm9kdWN0Lm9wdGlvbi5uYW1lLCBwcmljZTogJycsIHR5cGU6ICdpdGVtJ30pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3QucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiBwcm9kdWN0Lm5hbWUsIGl0ZW1OYW1lOiBwcm9kdWN0Lm9wdGlvbi5uYW1lLCBwcmljZTogJycsIHN5bWJvbDogcHJvZHVjdC5vcHRpb24uc3ltYm9sLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6IHByb2R1Y3Qub3B0aW9uLnByaWNlLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogJ1RvdGFsZScsIGl0ZW1OYW1lOiAnJywgcHJpY2U6IHBvcHVwLmRhdGEub3JkZXJEYXRhLnRvdGFsUHJpY2UsIHR5cGU6ICd0b3RhbCd9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9IHBvcHVwLmRhdGEuaW5mb3JtYXRpb247XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICduZXdPcmRlcic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtTmV3T3JkZXJFbmQnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0FjcXVpc3RvIGVmZmV0dWF0byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdM4oCZb3JkaW5lIGUgc3RhdG8gcHJlbm90YXRvIGNvbiBzdWNjZXNzby4gVW4gcHJvZmVzc2lvbmlzdGEgc2kgcHJlc2VudGVyw6AgbmVsbGEgZGF0YSBlIG9yYSBzdGFiaWxpdGEgZGEgdm9pLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICduZXdPcmRlckVuZCc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlckVuZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRQcmljZSc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID0gJ2FkZFByaWNlJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSA9ICdDb21wbGV0YW1lbnRvIHNlcnZpemlvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBjb21wbGV0YXRvIGlsIHNlcnZpemlvIHZlcnJhaSBpbmNyZW1lbnRhdG8gZGVsIGltcG9ydG8gcHJlc3RhYmlsaXRvIHRyYSA3IGdpb3JuaSBsYXZvcmF0aXZpLic7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIC8vICAgdHlwZTogJ1BheW1lbnRfaW5wdXRfYWRkJyxcbiAgICAgICAgICAgIC8vICAgc291cmNlOiAnZXVybycsXG4gICAgICAgICAgICAvLyAgIGxhYmVsOiAnSW5zZXJpc2NpIGzigJlpbXBvcnRvJyxcbiAgICAgICAgICAgIC8vICAgZGVzY3JpcHRpb246ICdBbGzigJlpbXBvcnRvIHZlcnJhIGFnZ2l1bnRvIDUuNSUgZGkgdGFzc2EgU3RhcmJvb2suJ1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FkZFByaWNlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRhIGlsIHNlcnZpemlvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRQcmljZSc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSA9ICdNb2RpZmljYSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgbW9kaWZpY2F0byBs4oCZaW1wb3J0byBpbCBjbGllbnRlIHZlcnJhIG5vdGlmaWNhdG8gZGkgcXVlc3RhIG1vZGlmaWNhIGUgcG90cmEgcHJvY2VkZXJlIGNvbiBpbCBwYWdhbWVudG8uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnUGF5bWVudF9pbnB1dF9lZGl0JyxcbiAgICAgICAgICAgICAgc291cmNlOiAnZXVybycsXG4gICAgICAgICAgICAgIGxhYmVsOiAnSW5zZXJpc2NpIGzigJlpbXBvcnRvJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbGzigJlpbXBvcnRvIHZlcnJhIGFnZ2l1bnRvIDUuNSUgZGkgdGFzc2EgU3RhcmJvb2suJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VkaXRQcmljZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdJbnNlcmlzY2kgaW1wb3J0bydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSA9IE1hdGgucm91bmQoKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRpbnVlT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnUGFnYW1lbnRvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBlZmZldHR1YXRvIGlsIHBhZ2FtZW50byByaWNldmVyYWkgdW5hIG1haWwgY29uIGxhIGZhdHR1cmEgZGVsIG9yZGluZS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQyID0gJ0Fs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NlIFN0YXJib29rLic7XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBNYXRoLnJvdW5kKChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpIC8gMTAwKTtcbiAgICAgICAgICAgIGxldCB0YXggPSAocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAtIE1hdGgucm91bmQocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnRfaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgICBpbmZvcm1hdGlvbjogcHJpY2UgKyAn4oKsICsgJyArIHRheCArICfigqwgPSAnICsgcGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEwMCArICfigqwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY29udGludWVPcmRlcicsXG4gICAgICAgICAgICAgIHRleHQ6ICdQcm9jZWRpIGNvbiBpbCBwYWdhbWVudG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1BY3Rpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTaWN1cm8gZGkgdm9sZXIgdXNjaXJlPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ2xvZ291dCc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cChwb3B1cC5kYXRhLnRpdGxlLCBwb3B1cC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXV0aCA9IHRoaXMuYXV0aFNlcnZpY3MuYXV0aEluaXQoKTtcbiAgfVxuXG4gIGNsZWFyRGF0YSgpIHtcbiAgICB0aGlzLmFkZENhcmREYXRhID0ge1xuICAgICAgICBvYmplY3Q6ICdjYXJkJyxcbiAgICAgICAgZXhwX2RhdGU6ICcnLFxuICAgICAgICBleHBfbW9udGg6IG51bGwsXG4gICAgICAgIGV4cF95ZWFyOiBudWxsLFxuICAgICAgICBudW1iZXI6IG51bGwsXG4gICAgICAgIGN2YzogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiAnJyxcbiAgICAgICAgYWRkcmVzc19saW5lMjogJycsXG4gICAgICAgIGFkZHJlc3NfY2l0eTogJycsXG4gICAgICAgIGFkZHJlc3NfemlwOiAnJyxcbiAgICAgICAgYWRkcmVzc19zdGF0ZTogJycsXG4gICAgICAgIGFkZHJlc3NfY291bnRyeTogJydcbiAgICAgIH07XG4gICAgLy8gdGhpcy5sb2dpbkRhdGEgPSB7XG4gICAgLy8gICAgIGVtYWlsOiAnJyxcbiAgICAvLyAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIC8vICAgICB0eXBlOiAnJyxcbiAgICAvLyAgICAgb3JkZXJEYXRhOiB7fVxuICAgIC8vICAgfTtcbiAgICB0aGlzLnJlZ2lzdHJhdGlvbkRhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwaG9uZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gICAgICB9O1xuICAgIHRoaXMucmVjb3ZlcnlEYXRhID0ge1xuICAgICAgICBlbWFpbDogJydcbiAgICAgIH07XG4gICAgdGhpcy5jb25maXJtUG9wdXBEYXRhID0ge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGluZm9ybWF0aW9uOiB7fSxcbiAgICAgICAgYnV0dG9uOiAnJyxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH07XG4gICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhID0ge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0eXBlOiAnY2VudGVyJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEgPSB7XG4gICAgICAgIG9yZGVySWQ6ICcnLFxuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdGV4dDI6ICcnLFxuICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgIHByaWNlOiBudWxsXG4gICAgICB9O1xuICAgIHRoaXMubG9naW5FcnJvciA9IHtcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdzZXJ2aWNlcy86aWQnLFxuICAgICdwcm9maWxlL3ByaXZhY3knLFxuICAgICdwcm9maWxlL2hlbHAnLFxuICAgICdwcm9maWxlL2NvbmRpdGlvbnMnLFxuICAgICdvcmRlcnMnLFxuICAgICdwcm9maWxlLzpwYWdlJ1xuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItZml4ZWQtdG9wIGJnLWludmVyc2VcXFwiIFtuZ0NsYXNzXT1cXFwieydpcy1zZWFyY2gnOiBpc0ZpbmRGaWVsZH1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHRvcC1tZW51XFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgcm91dGVyTGluaz1cXFwiXFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVUYWJNZW51KClcXFwiPlN0YXJib29rPC9hPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtYmxvY2tcXFwiICpuZ0lmPVxcXCJpc0ZpbmRGaWVsZFxcXCI+XFxuICAgICAgPHAtYXV0b0NvbXBsZXRlIFsobmdNb2RlbCldPVxcXCJmaW5kVmFsdWVcXFwiIFtzdWdnZXN0aW9uc109XFxcInJlc3VsdHNcXFwiIGZpZWxkPVxcXCJ0aXRsZVxcXCIgc2Nyb2xsSGVpZ2h0PVxcXCIxNzBweFxcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwic2VhcmNoKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdFJlc3VsdChmaW5kVmFsdWUpXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2VyY2FcXFwiIG1pbkxlbmd0aD1cXFwiMFxcXCI+XFxuICAgICAgICA8dGVtcGxhdGUgbGV0LXJlcz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICA8L3AtYXV0b0NvbXBsZXRlPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgIDxzdmcgd2lkdGg9JzEzcHgnIGhlaWdodD0nMTNweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgICAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICAgICAgPC9jaXJjbGU+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhc3BpbmVyVmlldyAmJiBjbGVhclZpZXdcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidWktYXV0b2NvbXBsZXRlLXBhbmVsIGVtcHR5XFxcIiAqbmdJZj1cXFwicmVzdWx0cy5sZW5ndGggPT09IDAgJiYgZmluZFZhbHVlLmxlbmd0aCA+IDAgJiYgaXNTZWFyY2hlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhZ2xpbmVcXFwiICpuZ0lmPVxcXCIhaXNGaW5kRmllbGRcXFwiPnt7dGFnbGluZX19PC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVyXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbD1cXFwiTWVudVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgpXFxcIj48L2J1dHRvbj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBmbG9hdC14cy1yaWdodFxcXCIgKm5nSWY9XFxcImF1dGggIT09IGZhbHNlXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBob21lXFxcIiByb3V0ZXJMaW5rPVxcXCJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OnRydWV9XFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVUYWJNZW51KHRydWUpXFxcIj5Ib21lPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgb3JkZXJzXFxcIiByb3V0ZXJMaW5rPVxcXCIvb3JkZXJzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+T3JkaW5pPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgcHJvZmlsZVxcXCIgcm91dGVyTGluaz1cXFwiL3Byb2ZpbGUvc2V0dGluZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgpXFxcIj57e2F1dGgucHJvZmlsZS5mdWxsbmFtZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoID09PSBmYWxzZSAmJiBicm93c2VyXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRMb2dpblBvcHVwKClcXFwiPkFjY2VkaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIChjbGljayk9XFxcImdldFJlZ2lzdHJhdGlvblBvcHVwKClcXFwiPlJlZ2lzdHJhdGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvbmF2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48YXBwLXBvcHVwcz48L2FwcC1wb3B1cHM+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItdGFic1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS10YWItYmFyXFxcIlxcbiAgICAgICAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIlxcbiAgICAgICAoc3dpcGVyaWdodCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi1waWxsc1xcXCJcXG4gICAgICAgIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tbGVmdC5weCc6IGRlbHRhfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbmF2U2VydmljZXMgb2Ygc2VydmljZXNDYXRlZ29yeUxpc3RcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzpuYXZTZXJ2aWNlcy5faWQ9PT1hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgJiYgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZSAhPT0gZmFsc2V9XFxcIiAoY2xpY2spPVxcXCJ0YWJOYXZpZ2F0ZShuYXZTZXJ2aWNlcy5faWQpXFxcIj48aSBjbGFzcz1cXFwiZnt7bmF2U2VydmljZXMuaWNvbl9uYW1lfX1cXFwiPjwvaT4ge3tuYXZTZXJ2aWNlcy50aXRsZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L25hdj4tLT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS1wYWdlXFxcIiAqbmdJZj1cXFwiaXNTZXJ2aWNlc1ZpZXcgPT09IHRydWVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTEwIG1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFzb25yeS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlcy1ibG9ja1xcXCIgKm5nRm9yPVxcXCJsZXQgc2VydmljZUNhdGVnb3J5IG9mIHNlcnZpY2VzRGF0YVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2VzLWJsb2NrLWJpZyc6IHNlcnZpY2VDYXRlZ29yeS50eXBlID09PSAnY29udGVudCd9XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic2VydmljZUNhdGVnb3J5LnR5cGUgPT09ICdjb250ZW50J1xcXCI+XFxuICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkuaW1hZ2VcXFwiIChsb2FkKT1cXFwibWFrZU1hc29ucnkoKVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+e3sgc2VydmljZUNhdGVnb3J5LmRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkudHlwZSAhPT0gJ2NvbnRlbnQnXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tzZXJ2aWNlQ2F0ZWdvcnkudGl0bGVfMX19PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlIGNvbnRlbnQgbm9zZWxlY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHNlcnZpY2VDYXRlZ29yeS5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdJZj1cXFwiaXRlbS50eXBlID09PSAnQ0hFQ0tCT1gnIHx8IGl0ZW0udHlwZSA9PT0gJ1JBRElPQlVUVE9OJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NoZWNrZWQnOml0ZW0uc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVTZXJ2aWNlKHNlcnZpY2VDYXRlZ29yeS50aXRsZSwgaXRlbS50aXRsZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XFxcIml0ZW0uc2VsZWN0ZWQ9PT10cnVlXFxcIiBjbGFzcz1cXFwiZmEgZmEtY2hlY2stc3F1YXJlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cXFwiaXRlbS5zZWxlY3RlZD09PWZhbHNlXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3F1YXJlLW9cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS50aXRsZV8xfX1cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0udHlwZSA9PT0gJ0lOUFVUVEVYVCdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0uaW5wdXRfdmFsdWVcXFwiIChrZXl1cCk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGNoYW5nZSk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGZvY3VzKT1cXFwic2VsZWN0QWxsQ29udGVudCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+e3tzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0udmFsdWVfc3ltYm9sfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxhcHAtb3JkZXIgW29yZGVyRGF0YV09XFxcIm9yZGVyRGF0YVxcXCIgW29yZGVySXNGdWxsXT1cXFwib3JkZXJJc0Z1bGxcXFwiPjwvYXBwLW9yZGVyPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29weXJpZ2h0XFxcIj5TdGFyYm9vayDCqSAyMDE2IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2NvbmRpdGlvbnNcXFwiPkNvbmRpemlvbmk8L2E+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG48YXBwLWxhbmRpbmcgKm5nSWY9XFxcImlzU2VydmljZXNWaWV3ID09PSBmYWxzZVxcXCI+PC9hcHAtbGFuZGluZz5cXG48YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgY2xhc3M9XFxcInNlcnZpY2VzLWxvYWRlclxcXCI+PC9hcHAtbG9hZGluZz5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtMiBzaWRlYmFyXFxcIj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJzaWRlYmFyLWNvbnRhaW5lclxcXCIgI29yZGVyRm9ybT1cXFwibmdGb3JtXFxcIiAod2luZG93OnJlc2l6ZSk9XFxcIm9uUmVzaXplKClcXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1ibG9ja1xcXCI+XFxuICAgICAgPGgyPnt7b3JkZXJEYXRhLnNlcnZpY2V9fTwvaDI+XFxuXFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhb3JkZXJJc0Z1bGxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz5JbnNlcmlzY2k8L3N0cm9uZz4gbGUgaW5mb3JtYXppb25pIG5lY2Vzc2FyaSBkZWwgYXBwdW50YW1lbnRvIGUgaW52aWEgbGEgcmljaGllc3RhLjwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIm9yZGVyRGF0YS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgPiBvcmRlckRhdGEudG90YWxQcmljZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1saXN0LWVtcHR5XFxcIj48c3Ryb25nPjwvc3Ryb25nPlByZXp6byBtaW5pbW8gZGVsJ29yZGluZSDigqx7eyBvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9kaXY+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyIHNlbGVjdGVkLW9yZGVyc1xcXCIgW25nU3R5bGVdPVxcXCJ7J21heC1oZWlnaHQnOiBtYXhPcmRlckJsb2NrU2l6ZX1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgY2F0ZWdvcnlcXFwiPlxcbiAgICAgICAgICA8c3Bhbj57eyBvcmRlckRhdGEuc2VydmljZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHNwYW4gICpuZ0Zvcj1cXFwibGV0IG9yZGVyU2VydmljZSBvZiBvcmRlckRhdGEuc2VydmljZXNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19IHt7b3JkZXJTZXJ2aWNlLm9wdGlvbi5zeW1ib2x9fTwvaT48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlICE9PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgdG90YWxcXFwiPlxcbiAgICAgICAgPHNwYW4+VG90YWxlIDxpPuKCrHt7IG9yZGVyRGF0YS50b3RhbFByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkLW9yZGVyLWZvcm1cXFwiPlxcbiAgICAgICAgPGxhYmVsPlF1YW5kbyB2dW9pIHN2b2xnZXJlIHF1ZXN0byBsYXZvcm8/PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY2FsZW5kYXItcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogc3VibWl0T3JkZXIgJiYgIU9yZGVyLmRhdGV9XFxcIiAqbmdJZj1cXFwiaXNNb2JpbGVDYWxlbmRhclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXBpY2tlci1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyLXRpbWVzLW8gY2FsZW5kYXItYm94XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHAtY2FsZW5kYXIgbmFtZT1cXFwiZGF0YU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRhdGVcXFwiIGlkPVxcXCJkYXRhT3JhTW9iaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRGF0YVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIGRhdGVGb3JtYXQ9XFxcImRkIE1NIHl5XFxcIiByZWFkb25seUlucHV0PVxcXCJyZWFkb25seUlucHV0XFxcIiBbbG9jYWxlXT1cXFwiaXRcXFwiIFttaW5EYXRlXT1cXFwibWluRGF0ZVxcXCIgW21heERhdGVdPVxcXCJtYXhEYXRlXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3REYXRlKClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1jYWxlbmRhcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY2FsZW5kYXItcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogc3VibWl0T3JkZXIgJiYgIU9yZGVyLmRhdGV9XFxcIiAqbmdJZj1cXFwiIWlzTW9iaWxlQ2FsZW5kYXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlIGRhdGVwaWNrZXItYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhci10aW1lcy1vIGNhbGVuZGFyLWJveFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxwLWNhbGVuZGFyIG5hbWU9XFxcImRhdGFPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kYXRlXFxcIiBpZD1cXFwiZGF0YU9yYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRpbWUtcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogT3JkZXIudGltZSA9PT0gJycgJiYgc3VibWl0T3JkZXJ9XFxcIiAqbmdJZj1cXFwiYnJvd3NlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGVcXFwiIChjbGlja091dHNpZGUpPVxcXCJjbG9zZVRpbWVwaWNrZXIoKVxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L3NwYW4+IC0tPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGltZU9yYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGltZU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLnRpbWVcXFwiIHZhbHVlPVxcXCJ7e09yZGVyLnRpbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk9yYVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9iaWxlQXJlYVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtcGlja2VyXFxcIiAqbmdJZj1cXFwidGltZVBpY2tlcklzU2hvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1lbGVtXFxcIiAqbmdGb3I9XFxcImxldCB0aW1lIG9mIHRpbWVQaWNrZXJcXFwiIChjbGljayk9XFxcInNlbGVjdFRpbWUodGltZSlcXFwiPlxcbiAgICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCI+PC9zcGFuPiAtLT5cXG4gICAgICAgICAgICAgIHt7dGltZX19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRpbWUtcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogT3JkZXIudGltZSA9PT0gJycgJiYgc3VibWl0T3JkZXJ9XFxcIiAqbmdJZj1cXFwiIWJyb3dzZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIj4gPCEtLSBpcyBub3Qgc3VwcG9ydCBpZiBjbGllbnQgIT0gYnJvd3NlciAoY2xpY2tPdXRzaWRlKT1cXFwiY2xvc2VUaW1lcGlja2VyKClcXFwiIC0tPlxcbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9zcGFuPiAtLT5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRpbWVPcmFTZXJ2ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRpbWVPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci50aW1lXFxcIiB2YWx1ZT1cXFwie3tPcmRlci50aW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJPcmFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vYmlsZUFyZWFcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLXBpY2tlclxcXCIgKm5nSWY9XFxcInRpbWVQaWNrZXJJc1Nob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtZWxlbVxcXCIgKm5nRm9yPVxcXCJsZXQgdGltZSBvZiB0aW1lUGlja2VyXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RUaW1lKHRpbWUpXFxcIj57e3RpbWV9fTwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGxhYmVsPkluc2VyaXNjaSBs4oCZaW5kaXJpenpvPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6ICFpc0FkZHJlc3NGdWxsICYmIHN1Ym1pdE9yZGVyICYmIGlzQWRkcmVzc0RpcnR5fVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGVcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiPjwvc3Bhbj4gLS0+XFxuICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5kaXJpenpvXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6aXNBZGRyZXNzRnVsbCA9PT0gZmFsc2UgJiYgaXNBZGRyZXNzRGlydHkgPT09IHRydWV9XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIiAoa2V5dXApPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiIChjaGFuZ2UpPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiPi0tPlxcbiAgICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBpZD1cXFwibHVvZ29cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdGV4dC1zbWFsbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBHaXVzZXBwZSBWZXJkaSAxMCBNaWxhbm9cXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzppc0FkZHJlc3NGdWxsID09PSBmYWxzZSAmJiBpc0FkZHJlc3NEaXJ0eSA9PT0gdHJ1ZX1cXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kZWxpdmVyeV9hZGRyZXNzXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiIFtzdWdnZXN0aW9uc109XFxcImFkZHJlc3Nlc1xcXCIgZmllbGQ9XFxcImZvcm1hdHRlZEFkZHJlc3NcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcImdldEFkZHJlc3NlcygkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RBZGRyZXNzKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvci1ibG9ja1xcXCIgKm5nSWY9XFxcIiFpc0FkZHJlc3NGdWxsICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgPT09ICcnXFxcIj5JbnNlcmlzY2kgbCdpbmRpcml6em8gZXNhdHRvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc0Z1bGwgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyAhPT0gJycgJiYgaXNBZGRyZXNzT25lXFxcIj5JbmRpcml6em8gbm9uIHRyb3ZhdG88L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc09uZSAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzICE9PSAnJ1xcXCI+SW5kaXJpenpvIG5vbiDDqCBzcGVjaWZpY288L2Rpdj4tLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGxhYmVsPk5vdGE8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibm90YVxcXCIgbmFtZT1cXFwiYXBwbGljYW50X2Rlc2NyaXB0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXNjaWEgdW5hIG5vdGEuLi5cXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAoY2xpY2spPVxcXCJzaG93Q29uZmlybWF0aW9uKClcXFwiIFtkaXNhYmxlZF09XFxcIiFpc0VuYWJsZVxcXCI+QW50ZXByaW1hIGRlbCBwcm9nZXR0bzwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItbGlua3NcXFwiPlxcbiAgICAgICAgICA8cD5cXG4gICAgICAgICAgICBTdGFyYm9vayDCqSAyMDE3IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPiDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayB3aXRob3V0LXRhYnNcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibGVmdC1uYXZpZ2F0ZVxcXCI+XFxuICAgICAgPGEgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnNcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOnRhYi5zZWxlY3RlZH1cXFwiIChjbGljayk9XFxcInJlbmRlclBhZ2UodGFiLm5hbWUpXFxcIj5cXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgIDxkaXY+e3t0YWIubmFtZX19PC9kaXY+XFxuICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIG9yZGVycy1jb250YWluZXJcXFwiPlxcbiAgICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVycy1lcnJvclxcXCIgKm5nSWY9XFxcInBhZ2VEYXRhLmxlbmd0aCA9PT0gMCAmJiByZXF1ZXN0SXNDb21wbGV0ZVxcXCI+e3tlbXB0eUxpc3RUaXRsZX19PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IG9yZGVyIG9mIHBhZ2VEYXRhXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKGRhdGVGb3JtYXRpbmcoJ25vdycpLCBvcmRlci5kYXRlKSAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IFNlcnZpemlvIGluIGNvcnNvLi4uXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIHBhZ2FtZW50by4uLi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJncmVlblxcXCI+PC9zcGFuPiBJbiBhdHRlc2EgZGkgY29uZmVybWFcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKG9yZGVyLmRhdGUsIGRhdGVGb3JtYXRpbmcoJ25vdycpKSAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEFzc2VnbmF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk5ICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj48L3NwYW4+IEFubnVsbGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJncmVlblxcXCI+PC9zcGFuPiBJbiBhdHRlc2EgZGkgY29uZmVybWFcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKG9yZGVyLmRhdGUsIGRhdGVGb3JtYXRpbmcoJ25vdycpKSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBBc3NlZ25hdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGknXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBJbiBhdHRlc2EgZGkgcGFnYW1lbnRvLi4uLS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUoZGF0ZUZvcm1hdGluZygnbm93JyksIG9yZGVyLmRhdGUpICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IFNlcnZpemlvIGluIGNvcnNvLi4uXFxuICAgICAgICAgIDwvZGl2PlxcblxcblxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJibGFja1xcXCI+PC9zcGFuPiBTY2FkdXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTggJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IENvbXBsZXRhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OSAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZWRcXFwiPjwvc3Bhbj4gQW5udWxsYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1uYW1lXFxcIj5cXG4gICAgICAgICAgICB7eyBjYXRlZ29yaWVzW29yZGVyLmNhdGVnb3J5X3R5cGVdIH19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1kYXRlXFxcIj5cXG4gICAgICAgICAgICB7eyBkYXRlRm9ybWF0aW5nKG9yZGVyLmRhdGUpIH19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1ib2R5XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1yb3cgcHJvZHVjdHMgY29sLXhsLTRcXFwiPlxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIG9yZGVyLmRldGFpbHNcXFwiIFtuZ0NsYXNzXT1cXFwieydzZXJ2aWNlJzpwcm9kdWN0LnR5cGUgPT09ICdzZXJ2aWNlJ31cXFwiPnt7IHByb2R1Y3QudGl0bGUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QudHlwZSAhPT0gJ3NlcnZpY2UnICYmIHByb2R1Y3QuYW1vdW50ID4gMFxcXCI+4oKse3sgcHJvZHVjdC5hbW91bnQgLyAxMDAgfX08L2k+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtIHRvdGFsXFxcIj5Ub3RhbGUgPGk+4oKse3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX08L2k+PC9kaXY+IC0tPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBvcmRlci5kZXRhaWxzXFxcIiBbbmdDbGFzc109XFxcInsnc2VydmljZSc6cHJvZHVjdC50eXBlID09PSAnc2VydmljZSd9XFxcIj57eyBwcm9kdWN0LnRpdGxlIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgIT09ICdzZXJ2aWNlJ1xcXCI+e3sgcHJvZHVjdC5kZXNjcmlwdGlvbiB9fTwvaT48L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaXRlbSB0b3RhbFxcXCI+VG90YWxlIDxpPuKCrHt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PiAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGllbnQtaW5mbyBjb2wteGwtNFxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09MFxcXCI+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLm1lcmNoYW50LnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cXG5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5JbmRpcml6em86PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnN0cmVldCB9fSwge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXRfbnVtYmVyIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MuY2l0eSB9fSwge3sgb3JkZXIuYWRkcmVzcy5wb3N0YWxfY29kZSB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnByb3ZpbmNlIH19LCB7eyBvcmRlci5hZGRyZXNzLmNvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGllbnQtaW5mbyBjb2wteGwtNFxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiFvcmRlci5tZXJjaGFudCB8fCBvcmRlci5tZXJjaGFudCA9PT0gbnVsbCB8fCBvcmRlci5zdGF0dXM9PT0wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+UHJvZmVzc2lvbmlzdGE6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+SW4gYXR0ZXNhIGRpIGNvbmZlcm1hLi4uPC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5tZXJjaGFudCAmJiBvcmRlci5tZXJjaGFudCAhPT0gbnVsbCAmJiBvcmRlci5zdGF0dXM9PT0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+UHJvZmVzc2lvbmlzdGE6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIubWVyY2hhbnQucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+SW5kaXJpenpvOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXQgfX0sIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0X251bWJlciB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLmNpdHkgfX0sIHt7IG9yZGVyLmFkZHJlc3MucG9zdGFsX2NvZGUgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5wcm92aW5jZSB9fSwge3sgb3JkZXIuYWRkcmVzcy5jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiKG9yZGVyLmN1c3RvbWVyIHx8IG9yZGVyLmN1c3RvbWVyICE9PSBudWxsKSAmJiBvcmRlci5zdGF0dXM9PT05OCAmJiBhdXRoRGF0YS5faWQgIT09IG9yZGVyLmN1c3RvbWVyX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIihvcmRlci5jdXN0b21lciB8fCBvcmRlci5jdXN0b21lciAhPT0gbnVsbCkgJiYgb3JkZXIuc3RhdHVzPT09OTggJiYgYXV0aERhdGEuX2lkID09PSBvcmRlci5jdXN0b21lcl9pZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLm1lcmNoYW50LnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIuY3VzdG9tZXIgJiYgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwgJiYgKCFvcmRlci5tZXJjaGFudCB8fCBvcmRlci5tZXJjaGFudCA9PT0gbnVsbCkgJiYgb3JkZXIuc3RhdHVzPT09MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT05OVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+SW5kaXJpenpvOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXQgfX0sIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0X251bWJlciB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLmNpdHkgfX0sIHt7IG9yZGVyLmFkZHJlc3MucG9zdGFsX2NvZGUgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5wcm92aW5jZSB9fSwge3sgb3JkZXIuYWRkcmVzcy5jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItcm93IGRlc2NyaXB0aW9uIGNvbC14bC00XFxcIj5cXG4gICAgICAgICAgICAgIHt7IG9yZGVyLmRlc2NyaXB0aW9uIH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1mb290ZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2RlXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj5DT0RJQ0U6PC9zcGFuPlxcbiAgICAgICAgICAgIHt7IG9yZGVyLl9pZCB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9uc1xcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKGRhdGVGb3JtYXRpbmcoJ25vdycpLCBvcmRlci5kYXRlKSAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknICYmIGlzVmVuZG9yID09PSB0cnVlXFxcIiAoY2xpY2spPVxcXCJjb21wbGV0YU9yZGVyKG9yZGVyLl9pZClcXFwiPkNvbXBsZXRhIHNlcnZpemlvPC9idXR0b24+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPlByZXZlbnRpdm86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2PlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5JbXBvcnRvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCIgKGNsaWNrKT1cXFwiZWRpdE9yZGVyKG9yZGVyLl9pZCwgb3JkZXIucGF5bWVudC5hbW91bnQpXFxcIj5Nb2RpZmljYTwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknICYmIGlzVmVuZG9yID09PSB0cnVlXFxcIiAoY2xpY2spPVxcXCJjb25maXJtT3JkZXIob3JkZXIuX2lkKVxcXCI+Q29uZmVybWEgc2Vydml6aW88L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwicmVhY3RpdmF0ZU9yZGVyKG9yZGVyLl9pZClcXFwiPlJlYXR0aXZhIHNlcnZpemlvPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIiAoY2xpY2spPVxcXCJjYW5jZWxPcmRlcihvcmRlci5faWQpXFxcIj5Bbm51bGxhIHNlcnZpemlvPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5JbXBvcnRvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIiAoY2xpY2spPVxcXCJjb250aW51ZU9yZGVyKG9yZGVyLl9pZCwgb3JkZXIucGF5bWVudC5hbW91bnQpXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbG9ja1xcXCI+PC9pPiBQcm9jZWRpPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrIGFyY2hpdmVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDMgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5JbXBvcnRvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj4tLT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvZGl2PiAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwcm9maWxlLXBhZ2VcXFwiIFtuZ0NsYXNzXT1cXFwie3doaXRlQmc6IHNlbGVjdFRhYiA9PT0gJ2NvbmRpdGlvbnMnIHx8IHNlbGVjdFRhYiA9PT0gJ3ByaXZhY3knIHx8IHNlbGVjdFRhYiA9PT0gJ2hlbHAnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgd2l0aG91dC10YWJzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0LW5hdmlnYXRlXFxcIiAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIiAoc3dpcGVyaWdodCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCI+XFxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tbGVmdC5weCc6IGRlbHRhfVxcXCI+XFxuICAgICAgICAgIDxhICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiB0YWJzXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzp0YWIudXJsID09PSBzZWxlY3RUYWJ9XFxcIiBbcm91dGVyTGlua109XFxcIlsnL3Byb2ZpbGUnLCB0YWIudXJsXVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgICAgICAgIDxkaXY+e3t0YWIubmFtZX19PC9kaXY+XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPGEgKm5nSWY9XFxcImlzQXV0aGVudGljYXRlZCA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPjxzcGFuPjwvc3Bhbj48ZGl2PkVzY2k8L2Rpdj48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLXNldHRpbmdzXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnc2V0dGluZ3MnXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+SW5mb3JtYXppb25pIGRlbCBhY2NvdW50PC9kaXY+XFxuICAgICAgICA8Zm9ybSAjY2hhbmdQcm9maWxlPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICAgICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICAgICAgPGxhYmVsPk5PTUUgQ09NUExFVE88L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbWUgQ29nbm9tZVxcXCIgI2Z1bGxuYW1lPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuZnVsbG5hbWVcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08bGFiZWw+Q29nbm9tZTwvbGFiZWw+LS0+XFxuICAgICAgICAgICAgPCEtLTxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsYXN0bmFtZVxcXCIgI2Z1bGxuYW1lPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEubGFzdG5hbWVcXFwiIHJlcXVpcmVkIGRpc2FibGVkPi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPk5vbWUgQXppZW5kYTwvbGFiZWw+LS0+XFxuICAgICAgICAgICAgPCEtLTxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXRyb255bWljXFxcIiAjZnVsbG5hbWU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wYXRyb255bWljXFxcIiByZXF1aXJlZCBkaXNhYmxlZD4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8bGFiZWw+Q0VMTFVMQVJFPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTnVtZXJvXFxcIiAjcGhvbmVfbnVtYmVyPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucGhvbmVfbnVtYmVyXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxsYWJlbD5FTUFJTDwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVtYWlsLWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkluZGlyaXp6byBlbWFpbFxcXCIgdmFsdWU9XFxcIlxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuZW1haWxcXFwiIHJlcXVpcmVkIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdjaGFuZ2VQYXNzd29yZCcpXFxcIiBkaXNhYmxlZD5Nb2RpZmljYSBwYXNzd29yZDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcGFzc3dvcmQtYmxvY2tcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwYXNzd29yZC1jb250YWluZXJcXFwiPi0tPlxcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInBhc3N3b3JkXFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuPuKAouKAouKAouKAouKAouKAouKAouKAouKAouKAouKAojwvc3Bhbj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjaGFuZ2UtcGFzc3dvcmRcXFwiPi0tPlxcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdjaGFuZ2VQYXNzd29yZCcpXFxcIj5Nb2RpZmljYSBwYXNzd29yZDwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImhlYWRlciBzZWNvbmRcXFwiPkluZGlyaXp6byBkaSBmYXR0dXJhemlvbmU8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkluZGlyaXp6byBkZWwgZG9taWNpbGlvPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImFkZHJlc3MxXFxcIiAjc3RyZWV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuc3RyZWV0XFxcIiBwbGFjZWhvbGRlcj1cXFwiVmlhIFZlcmRpIDEzXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5DaXR0w6AgZSBDQVA8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGRvdWJsZS1pbnB1dFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgZmlyc3RcXFwiIG5hbWU9XFxcImFkZHJlc3MyXFxcIiAjY2l0eT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmNpdHlcXFwiIHBsYWNlaG9sZGVyPVxcXCJDaXR0w6BcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHNlY29uZFxcXCIgbmFtZT1cXFwibnVtYmVyMlxcXCIgI3Bvc3RhbF9jb2RlPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucG9zdGFsX2NvZGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJDQVBcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPlByb3ZpbmNpYSBlIE5hemlvbmU8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGRvdWJsZS1pbnB1dFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgZmlyc3RcXFwiIG5hbWU9XFxcImNpdHlcXFwiICNwcm92aW5jZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnByb3ZpbmNlXFxcIiBwbGFjZWhvbGRlcj1cXFwiUHJvdmluY2lhXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBzZWNvbmRcXFwiIG5hbWU9XFxcImNvdW50cnlcXFwiICNjb3VudHJ5PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuY291bnRyeVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hemlvbmVcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPlBhcnRpdGEgSVZBPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBpdmFcXFwiIHBsYWNlaG9sZGVyPVxcXCJQLklWQVxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+Q29kaWNlIEZpc2NhbGU8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29kaWNlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29kaWNlIEZpc2NhbGVcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2ZpbGUtaW5mb3JtYXRpb25cXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICAgICAgICAgIDxzdHJvbmcgKm5nSWY9XFxcImZvcm1FcnJvci50aXRsZS5sZW5ndGggPiAwXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9zdHJvbmc+IHt7Zm9ybUVycm9yLm1lc3NhZ2V9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChjbGljayk9XFxcInVwZGF0ZVByb2ZpbGUoKVxcXCI+QWdnaW9ybmEgSW5mb3JtYXppb25pPC9idXR0b24+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtc2lnbi1vdXRcXFwiPjwvc3Bhbj4gTG9nIG91dDwvYnV0dG9uPi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZHMtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3BheW1lbnQnXFxcIj5cXG4gICAgICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCIgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkc1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtbG9nbyB7eyBmb3JtYXRDc3NDbGFzcyhjYXJkLmJyYW5kKSB9fVxcXCI+PHNwYW4+KioqKiB7eyBjYXJkLmxhc3Q0IH19PC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXNEZWZhdWx0XFxcIiAqbmdJZj1cXFwiZGVmYXVsdENhcmQgPT09IGNhcmQuaWRcXFwiPkRlZmF1bHQ8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnMtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwiZGVmYXVsdENhcmQgIT09IGNhcmQuaWRcXFwiIChjbGljayk9XFxcInNlbGVjdENhcmQoY2FyZC5pZClcXFwiPkRlZmF1bHQ8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIChjbGljayk9XFxcImRlbGV0ZUNhcmQoY2FyZC5pZClcXFwiPlJpbXVvdmk8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwiZWRpdENhcmQoY2FyZC5pZClcXFwiPk1vZGlmaWNhPC9hPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWluZm9ybWF0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk5vbWU6PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQubmFtZSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk51bWVybzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgKioqKiB7eyBjYXJkLmxhc3Q0IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2NhZGVuemE6PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuZXhwX21vbnRoIH19L3t7IGZvcm1hdFllYXIoY2FyZC5leHBfeWVhcikgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5UaXBvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmJyYW5kIH19IHt7IGNhcmQuZnVuZGluZyB9fSB7eyBjYXJkLm9iamVjdCB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pbmZvcm1hdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5JbmRpcml6em86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYWRkcmVzc19saW5lMSB9fSB7eyBjYXJkLmFkZHJlc3NfbGluZTIgfX0gPGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYWRkcmVzc19zdGF0ZSB9fSB7eyBjYXJkLmFkZHJlc3NfY2l0eSB9fSA8YnI+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5hZGRyZXNzX3ppcCB9fSB7eyBjYXJkLmFkZHJlc3NfY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJuZXctY2FyZFxcXCIgKGNsaWNrKT1cXFwiYWRkTmV3Q2FyZCgpXFxcIj5cXG4gICAgICAgICAgICBBZ2dpdW5naSB1biBtZXRvZG8gZGkgcGFnYW1lbnRvXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ2NvbmRpdGlvbnMnXFxcIj5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4gQUNDRVNTTyBFIFJFR09MQU1FTlRPIERFTCBTSVRPIFNUQVJCT09LPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLjEuIEFjY2Vzc28gYWwgU2l0bzogPC9zdHJvbmc+ReKAmSBwb3NzaWJpbGUgYXZlcmUgYWNjZXNzbyBhZCBhbGN1bmUgYXJlZSBkZWwgU2l0byB3ZWIgYW5jaGUgc2VuemEgZWZmZXR0dWFyZSB1biBPcmRpbmUgbyBzZW56YSBwcm9jZWRlcmUgYWxsYSByZWdpc3RyYXppb25lIGRlaSBwcm9wcmkgZGF0aS4gTGEgbWFnZ2lvciBwYXJ0ZSBkZWxsZSBhcmVlIGRlbCBTaXRvIHNvbm8gYWNjZXNzaWJpbGkgYSBjaGl1bnF1ZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjEuMi4gQWNjZXR0YXppb25lIGRlbCBSZWdvbGFtZW50byBkZWwgU2l0bzo8L3N0cm9uZz4gTGEgbmF2aWdhemlvbmUgaW4gcXVhbHVucXVlIGFyZWEgZGVsIFNpdG8gY29tcG9ydGEgbCdhY2NldHRhemlvbmUgZGVsIFJlZ29sYW1lbnRvIGRlbCBTaXRvLiBJIHZpc2l0YXRvcmkgZWQgdXRlbnRpIGRlbCBTaXRvIGNoZSByaWZpdXRpbm8gZGkgYWNjZXR0YXJlIGlsIFJlZ29sYW1lbnRvIGRlbCBTaXRvIHNvbm8gdGVudXRpIGEgbGFzY2lhcmUgaW1tZWRpYXRhbWVudGUgaWwgU2l0byBlIG5vbiBhdnJhbm5vIGxhIHBvc3NpYmlsaXTDoCBkaSBvcmRpbmFyZSBzZXJ2aXppIHRyYW1pdGUgaWwgU2l0byBzdGVzc28uPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjMuIE1vZGlmaWNoZSBhbCBSZWdvbGFtZW50byBkZWwgU2l0bzo8L3N0cm9uZz4gU1RBUkJPT0sgaGEgZmFjb2x0w6AgZGkgbW9kaWZpY2FyZSBpbCBwcmVzZW50ZSBSZWdvbGFtZW50byBkZWwgU2l0byBpbiBxdWFsc2lhc2kgbW9tZW50by4gT2Njb3JyZSBwZXJ0YW50byBjb250cm9sbGFyZSBwZXJpb2RpY2FtZW50ZSBpbCBSZWdvbGFtZW50byBkZWwgU2l0byBpbiB2aWdvcmUgYWwgbW9tZW50byBwb2ljaMOpIGVzc2EgdmluY29sYSBpIHZpc2l0YXRvcmkgZSBnbGkgdXRlbnRpIGRlbCBTaXRvLiBJIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gc29ubyB0ZW51dGkgYWwgcmlzcGV0dG8gZGVsbGUgcG9saWN5IGUgZGVsbGEgZGlzY2lwbGluYSBpbiB2aWdvcmUgYWwgbW9tZW50byBpbiBjdWkgZWZmZXR0dWFubyB1biBPcmRpbmUgdHJhbWl0ZSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjEuNC4gUmVzcG9uc2FiaWxpdMOgOjwvc3Ryb25nPiBTcGV0dGEgYWkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBwcmVkaXNwb3JyZSBxdWFudG8gbmVjZXNzYXJpbyBwZXIgYXZlcmUgYWNjZXNzbyBhbCBTaXRvIHN0ZXNzby4gSW5vbHRyZSwgaSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHNvbm8gdGVudXRpIGEgZ2FyYW50aXJlIGNoZSB0dXR0aSBjb2xvcm8gY2hlIGhhbm5vIGFjY2Vzc28gYWwgU2l0byB0cmFtaXRlIGxhIGxvcm8gY29ubmVzc2lvbmUgYWQgSW50ZXJuZXQgc2lhbm8gYSBjb25vc2NlbnphIGRlbCBwcmVzZW50ZSBSZWdvbGFtZW50byBkZWwgU2l0byBlIGxhIHJpc3BldHRpbm8uPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLiBTVEFUVVMgREVMTOKAmVVURU5URSBERUwgU0lUTyBTVEFSQk9PSzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4xLiBDYXBhY2l0w6AgZ2l1cmlkaWNhIGVkIGV0w6A6IDwvc3Ryb25nPkVmZmV0dHVhbmRvIHVuIE9yZGluZSB0cmFtaXRlIGlsIFNpdG8sIGzigJl1dGVudGUgZ2FyYW50aXNjZTo8YnI+XFxuICAgICAgICA8c3Ryb25nPjIuMS4xLjwvc3Ryb25nPiBkaSBhdmVyIGxhIGNhcGFjaXTDoCBkaSBhZ2lyZSBlIGNvbmNsdWRlcmUgY29udHJhdHRpIGdpdXJpZGljYW1lbnRlIHZpbmNvbGFudGk8YnI+XFxuICAgICAgICA8c3Ryb25nPjIuMS4yLjwvc3Ryb25nPiBkaSBhdmVyZSBjb21waXV0byAxOCBhbm5pPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4zLiBNT0RBTElUw4AgREkgRU1JU1NJT05FIERFTEwgT1JESU5FIEUgREkgRUxBQk9SQVpJT05FIERFTEzigJlPUkRJTkU8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjMuMS4gQ29tcGlsYXppb25lIGRlbGzigJlPcmRpbmU6IDwvc3Ryb25nPkRvcG8gYXZlciBzZWxlemlvbmF0byBpbCBzZXJ2aXppbyBjaGUgaW50ZW5kZSBvcmRpbmFyZSBkYSB1biBwcm9mZXNzaW9uaXN0YSBwcmVzY2VsdG8gZGFsbGEgcGlhdHRhZm9ybWEgZWQgYXZlciBmb3JuaXRvIGxlIGluZm9ybWF6aW9uaSwgbOKAmXV0ZW50ZSBoYSBmYWNvbHTDoCBkaSBlZmZldHR1YXJlIGzigJlPcmRpbmUgY2xpY2NhbmRvIHN1bCwgbyBzZWxlemlvbmFuZG8gaWwsIHB1bHNhbnRlIOKAnFByb2NlZGkgY29uIGwnb3JkaW5l4oCdIGUg4oCcUHJvY2VkaSBjb24gbCdhY3F1aXN0b+KAnS4gU2kgcmljb3JkYSBjaGUgw6ggaW1wb3J0YW50ZSBjb250cm9sbGFyZSB0dXR0ZSBsZSBpbmZvcm1hemlvbmkgaW1tZXNzZSBlIGNvcnJlZ2dlcmUgZXZlbnR1YWxpIGVycm9yaSBwcmltYSBkaSBjbGljY2FyZSBzdWwgcHVsc2FudGUgbyBkaSBzZWxlemlvbmFybG8gcG9pY2jDqSwgZG9wbyBhdmVybG8gZmF0dG8sIGlsIHByb2NlZGltZW50byBkaSBlbGFib3JhemlvbmUgZGVsbOKAmU9yZGluZSBoYSBpbml6aW8gZSBub24gw6ggcGnDuSBwb3NzaWJpbGUgY29ycmVnZ2VyZSBldmVudHVhbGkgZXJyb3JpLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My4yLiBNb2RpZmljYSBvIGFubnVsbGFtZW50byBkZWxs4oCZT3JkaW5lOiA8L3N0cm9uZz5VbmEgdm9sdGEgY2hlIGzigJlPcmRpbmUgw6ggc3RhdG8gaW5vbHRyYXRvIGUgaWwgcGFnYW1lbnRvIMOoIHN0YXRvIGF1dG9yaXp6YXRvIG5vbiDDqCBwacO5IHBvc3NpYmlsZSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGzigJlPcmRpbmUgZSBub24gc2kgaGEgZGlyaXR0byBhZCBhbGN1biByaW1ib3Jzby4gT3ZlIGRlc2lkZXJpIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgbOKAmU9yZGluZSwgbOKAmXV0ZW50ZSBwdcOyIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSwgaWwgcXVhbGUgdGVudGVyw6AgZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIGNvbXVuaWNhcmdsaSBsYSByaWNoaWVzdGEgZGVsbOKAmXV0ZW50ZS4gTm9uIHZpIMOoIGFsY3VuYSBhc3NpY3VyYXppb25lLCB0dXR0YXZpYSwgcmlndWFyZG8gYWwgZmF0dG8gY2hlIGlsIFNlcnZpemlvIENsaWVudGkgc2Fyw6AgaW4gZ3JhZG8gZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBvIGNoZSBpbCBwcm9mZXNzaW9uaXN0YSBhY2NldHRlcsOgIGxlIHJpY2hpZXN0ZSBkZWxs4oCZdXRlbnRlIGluIHF1YW50byBpbCBwcm9jZXNzbyBkaSBlbGFib3JhemlvbmUgZGVsbOKAmU9yZGluZSBwb3RyZWJiZSBhdmVyZSBnacOgIGF2dXRvIGluaXppby4gSWwgY2xpZW50ZSwgYWkgc2Vuc2kgZGVsbCdhcnQuIDU1IGxldHQuIGEpIGRlbCBDb2RpY2UgZGVsIENvbnN1bW8sIG5vbiBoYSBkaXJpdHRvIGEgcmVjZWRlcmUgZGFnbGkgT3JkaW5pIGVmZmV0dHVhdGkgdW5hIHZvbHRhIGNoZSBpbCBiZW5lIG8gc2Vydml6aW8gcmljaGllc3RvIMOoIHN0YXRvIGNvbnNlZ25hdG8uPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjMuIEF1dG9yaXp6YXppb25lIGFsIHBhZ2FtZW50bzo8L3N0cm9uZz4gSW4gY2FzbyBkaSBtYW5jYXRhIGF1dG9yaXp6YXppb25lIHJlbGF0aXZhIGFkIHVuIHF1YWxzaWFzaSBwYWdhbWVudG8sIGzigJlPcmRpbmUgbm9uIHZpZW5lIGVsYWJvcmF0byBvIG5vbiB2aWVuZSBjb211bmljYXRvIGFsbGEgcGlhdHRhZm9ybWEuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjQuIEVsYWJvcmF6aW9uZSBkZWxs4oCZT3JkaW5lIGUgcmlmaXV0byBkaSBPcmRpbmkgZGEgcGFydGUgZGVsIHByb2Zlc3Npb25pc3RhOiA8L3N0cm9uZz5BbGxhIHJpY2V6aW9uZSBkZWxs4oCZT3JkaW5lLCBTVEFSQk9PSyBuZSBpbml6aWEgbOKAmWVsYWJvcmF6aW9uZSBjb24gbGEgdHJhc21pc3Npb25lIGRlbGxvIHN0ZXNzbyBhaSBwcm9mZXNzaW9uaXN0aSBpbnRlcmVzc2F0aSBlIG5vdGlmaWNhIGFsbOKAmXV0ZW50ZSwgdHJhbWl0ZSBzbXMgZSBtYWlsLCBjaGUgbOKAmU9yZGluZSDDqCBzdGF0byBhc3NlZ25hdG8uIFNpIHNwZWNpZmljYSBjaGUgcXVhbHNpYXNpIHBhZ2luYSBkaSBjb25mZXJtYSBjaGUgbOKAmXV0ZW50ZSBwb3NzYSB2aXN1YWxpenphcmUgc3VsIFNpdG8gZSBxdWFsc2lhc2kgY29uZmVybWEgZGkgT3JkaW5lIGNoZSBs4oCZdXRlbnRlIHN0ZXNzbyByaWNldmEgdHJhbWl0ZSBlLW1haWwgaW5kaWNhbm8gZXNjbHVzaXZhbWVudGUgY2hlIGwnT3JkaW5lIGRlbGzigJl1dGVudGUgw6ggc3RhdG8gYXNzZWduYXRvIG8gw6ggaW4gY29yc28uIFNUQVJCT09LIGluY29yYWdnaWEgdHV0dGkgaSBwcm9wcmkgcHJvZmVzc2lvbmlzdGkgYWQgYWNjZXR0YXJlIHR1dHRpIGdsaSBPcmRpbmkgZWQgYSBjb211bmljYXJlIHRlbXBlc3RpdmFtZW50ZSBldmVudHVhbGkgcmlmaXV0aSwgZSBjb211bmljYSBhbGzigJl1dGVudGUgKGdlbmVyYWxtZW50ZSB0cmFtaXRlIGUtbWFpbCkgbm9uIGFwcGVuYSBzaWEgcmFnaW9uZXZvbG1lbnRlIHBvc3NpYmlsZSBvZ25pIGV2ZW50dWFsZSByaWZpdXRvIGRhIHBhcnRlIGRlbCBwcm9mZXNzaW9uaXN0YS4gSW4gb2duaSBjYXNvLCBpIHByb2Zlc3Npb25pc3RpIHBvc3Nvbm8gc2NlZ2xpZXJlIGRpIHJpZml1dGFyZSBnbGkgT3JkaW5pIGluIHF1YWxzaWFzaSBtb21lbnRvIHBlciBpbCBmYXR0byBkaSBlc3NlcmUgZWNjZXNzaXZhbWVudGUgaW1wZWduYXRpLCBhIGNhdXNhIGRlbGxlIGNvbmRpemlvbmkgYXRtb3NmZXJpY2hlIG8gcGVyIHF1YWxzaWFzaSBhbHRyYSByYWdpb25lLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My41LiBGaW5pdHVyYSBkZWwgc2Vydml6aW86PC9zdHJvbmc+IEkgdGVtcGkgc3RpbWF0aSBwZXIgaSBzZXJ2aXppIGRhbCBpbml6aW8gYSBmaW5lIGxhdm9yaSB2YXJpYW5vIHRyYSAxLTIgZ2lvcm5pIGEgc2Vjb25kYSBkZWwgdGlwbyBkaSBzZXJ2aXppbyBvcmRpbmF0by4gU1RBUkJPT0sgZSBpIHByb2Zlc3Npb25pc3RpIG5vbiBnYXJhbnRpc2Nvbm8gY2hlIGkgc2Vydml6aSB2ZXJyYW5ubyBmaW5pdGkgZW50cm8gaSB0ZW1waSBzdGltYXRpLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NC4gUFJFWlpPIEUgUEFHQU1FTlRPPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz40LjEuIElWQSBlIGNvc3RpIGRpIHNlcnZpemlvOjwvc3Ryb25nPiBJIHByZXp6aSBzb25vIHF1ZWxsaSBpbmRpY2F0aSBzdWwgU2l0by4gSSBwcmV6emkgc29ubyBjb21wcmVuc2l2aSBkaSBJVkEuIFRhbGkgY29zdGkgdmVuZ29ubyBhZ2dpdW50aSBhbGzigJlpbXBvcnRvIHRvdGFsZSBkb3Z1dG8sIHNlIGFwcGxpY2FiaWxpLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NC4yLiBFcnJhdGEgaW5kaWNhemlvbmUgZGVsIHByZXp6bzo8L3N0cm9uZz4gSWwgcHJlc2VudGUgU2l0byB3ZWIgY29udGllbmUgdW4gdmFzdG8gbnVtZXJvIGRpIG1lbnUgZWQgw6ggc2VtcHJlIHBvc3NpYmlsZSBjaGUgYWxjdW5pIGRpIGVzc2kgcG9zc2FubyByZWNhcmUgdW5hIGluZGljYXppb25lIGluZXNhdHRhIGRlbCBwcmV6em8uIFF1YWxvcmEgaWwgcHJlenpvIGVzYXR0byBkaSB1biBPcmRpbmUgc2lhIHBpw7kgZWxldmF0byBkZWwgcHJlenpvIGluZGljYXRvIHN1bCBTaXRvLCBTVEFSQk9PSyBub3JtYWxtZW50ZSBwcm92dmVkZSBhIGNvbnRhdHRhcmUgbOKAmXV0ZW50ZSBwcmltYSBkZWxsYSBzcGVkaXppb25lIGRlbGwnT3JkaW5lLiBJbiB0YWwgY2FzbywgbsOpIFNUQVJCT09LIG7DqSBpbCBwcm9mZXNzaW9uaXN0YSBpbnRlcmVzc2F0byBoYW5ubyBhbGN1biBvYmJsaWdvIGRpIGFzc2ljdXJhcmUgY2hlIGwnT3JkaW5lIHZlbmdhIGZvcm5pdG8gYWxs4oCZdXRlbnRlIGFsIHByZXp6byBpbmZlcmlvcmUgZXJyb25lYW1lbnRlIGluZGljYXRvIG7DqSBkaSByaW1ib3JzYXJlIGFsbOKAmXV0ZW50ZSBsYSBkaWZmZXJlbnphIHJpc3BldHRvIGFsIHByZXp6byBlcnJhdG8uIEluIGNhc28gaWwgcHJlenpvIHNpYSBlY2Nlc3NpdmFtZW50ZSBlbGV2YXRvIHJpc3BldHRvIGFsIHByZXp6byBvcmlnaW5hcmlhbWVudGUgY29udmVudXRvIGUgbCd1dGVudGUgc2lhIHVuIGNvbnN1bWF0b3JlIGFpIHNlbnNpIGRlbCBDb2RpY2UgZGVsIENvbnN1bW8sIGwndXRlbnRlIGF2csOgIGZhY29sdMOgIGRpIHJlY2VkZXJlIGRhbGwnT3JkaW5lLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NC4zLiBNb2RhbGl0w6AgZGkgcGFnYW1lbnRvOjwvc3Ryb25nPiBJbCBwYWdhbWVudG8gZGVpIHNlcnZpemkgZGV2ZSBlc3NlcmUgZWZmZXR0dWF0byBtZWRpYW50ZSB1bmEgY2FydGEgZGkgY3JlZGl0by9kZWJpdG8uPGJyPlxcbiAgICAgICAgPHA+PHN0cm9uZz41LiBTRVJWSVpJTyBDTElFTlRJPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz41LjEgRGlzcG9zaXppb25pIEdlbmVyYWxpOjwvc3Ryb25nPiBTVEFSQk9PSyBjb25zaWRlcmEgaWwgU2Vydml6aW8gQ2xpZW50aSBlc3RyZW1hbWVudGUgaW1wb3J0YW50ZS4gSWwgU2Vydml6aW8gQ2xpZW50aSBjZXJjYSBkdW5xdWUgZGkgcHJlc3RhcmUgYXNzaXN0ZW56YSBhbGzigJl1dGVudGUsIHF1YW5kbyBwb3NzaWJpbGUsIGluIGNhc28gZGkgcHJvYmxlbWkgY29uIGwnT3JkaW5lLiBM4oCZdXRlbnRlIHB1w7IgZW50cmFyZSBpbiBjb250YXR0byBjb24gaWwgU2Vydml6aW8gQ2xpZW50aSBhbmRhbmRvIHN1bGxhIHBhZ2luYSBoZWxwIGRlbCBzaXRvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS4yLiBNb2RpZmljYSBvIGFubnVsbGFtZW50byBkZWxsJ09yZGluZTo8L3N0cm9uZz4gT3ZlIGzigJl1dGVudGUgZGVzaWRlcmkgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBpbCBwcm9wcmlvIE9yZGluZSBkb3BvIGNoZSBlc3NvIHNpYSBzdGF0YSBpbm9sdHJhdG8gZSBpbCByZWxhdGl2byBwYWdhbWVudG8gYXV0b3JpenphdG8sIGzigJl1dGVudGUgaGEgZmFjb2x0w6AgZGkgcml2b2xnZXJzaSBhbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LLCBjb24gbGUgbW9kYWxpdMOgIHNvcHJhIGRlc2NyaXR0ZSwgaWwgcXVhbGUgdGVudGVyw6AgZGkgZW50cmFyZSBpbiBjb250YXR0byBjb24gaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBjb211bmljYXJlIGxlIHJpY2hpZXN0ZSBkZWwgY2xpZW50ZS4gTm9uIHZpIMOoIGFsY3VuYSBhc3NpY3VyYXppb25lLCB0dXR0YXZpYSwgcmlndWFyZG8gYWwgZmF0dG8gY2hlIGlsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgc2Fyw6AgaW4gZ3JhZG8gZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBvIGNoZSBpbCBwcm9mZXNzaW9uaXN0YSBhY2NldHRlcsOgIGxlIHJpY2hpZXN0ZSBkZWxs4oCZdXRlbnRlIGluIHF1YW50byBpbCBwcm9jZXNzbyBkaSBlbGFib3JhemlvbmUgZGVsbCdPcmRpbmUgcG90cmViYmUgYXZlcmUgZ2nDoCBhdnV0byBpbml6aW8uPGJyPlxcbiAgICAgICAgPHN0cm9uZz41LjMuIFJlY2xhbWkgZSBmZWVkYmFjayBkYSBwYXJ0ZSBkZWdsaSB1dGVudGk6PC9zdHJvbmc+IE5lbGzigJlldmVudHVhbGl0w6AgY2hlIGzigJl1dGVudGUgbm9uIHNpYSBzb2RkaXNmYXR0byBkZWxsYSBxdWFsaXTDoCBkaSB1biBxdWFsc2lhc2kgc2Vydml6aW8gbyBkZWwgc2Vydml6aW8gZm9ybml0byBkYSB1biBwcm9mZXNzaW9uaXN0YSwgU1RBUkJPT0sgaW52aXRhIGzigJl1dGVudGUgYSBmYXIgY29ub3NjZXJlIGxhIHByb3ByaWEgb3BpbmlvbmUgdHJhbWl0ZSBpbCBTaXRvLCBpbiBmb3JtYSBkaSB2YWx1dGF6aW9uaSwgY29tbWVudGkgZSByZWNlbnNpb25pIGNoZSByaWZsZXR0YW5vIGxhIHByb3ByaWEgZXNwZXJpZW56YS4gTGUgUmVjZW5zaW9uaSBzb25vIHVuYSBwYXJ0ZSBpbXBvcnRhbnRlIGRlbCBwcm9jZXNzbyBkaSBjb250cm9sbG8gcXVhbGl0w6AgZGkgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz41LjQuIFJpc2FyY2ltZW50bzo8L3N0cm9uZz4gTmVsbOKAmWV2ZW50dWFsaXTDoCBjaGUgbOKAmXV0ZW50ZSBub24gc2lhIHNvZGRpc2ZhdHRvIGRlbGxhIHF1YWxpdMOgIGRpIHVuIHF1YWxzaWFzaSBzZXJ2aXppbyBvIGRlbCBzZXJ2aXppbyBmb3JuaXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhIGUgZGVzaWRlcmkgcmljaGllZGVyZSB1biByaW1ib3JzbywgdW5hIHJpZHV6aW9uZSBwcm9wb3J6aW9uYWxlIGRlbCBwcmV6em8gbyBxdWFsc2lhc2kgYWx0cmEgZm9ybWEgZGkgcmlzYXJjaW1lbnRvLCDDqCB0ZW51dG8gYSBjb250YXR0YXJlIGRpcmV0dGFtZW50ZSBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIHByZXNlbnRhcmUgaWwgcHJvcHJpbyByZWNsYW1vIGUsIHNlIGRlbCBjYXNvLCBhZCBvc3NlcnZhcmUgbGUgcHJvY2VkdXJlIGRpIHJlY2xhbW8gcHJldmlzdGUgZGFsIHByb2Zlc3Npb25pc3RhIHN0ZXNzby4gUXVhbG9yYSBs4oCZdXRlbnRlIG5vbiBzaWEgaW4gZ3JhZG8gZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSwgbyBxdWFsb3JhIGlsIHByb2Zlc3Npb25pc3RhIHJpZml1dGkgZGkgb2NjdXBhcnNpIGRlbCByZWNsYW1vIGRlbGzigJl1dGVudGUsIHF1ZXN04oCZdWx0aW1vIHB1w7Igcml2b2xnZXJzaSBhbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIGNvbiBsZSBtb2RhbGl0w6Agc29wcmEgZGVzY3JpdHRlIGVudHJvIDQ4IG9yZSBkYWxs4oCZaW5vbHRybyBkZWxsJ09yZGluZSBlIHVubyBkZWkgQ29uc3VsZW50aSBkZWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyB0ZW50ZXLDoCBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgcmljaGllZGVyZSB1biByaXNhcmNpbWVudG8gcGVyIGNvbnRvIGRlbGzigJl1dGVudGUuIFNpIGZhIHByZXNlbnRlIGNoZSBTVEFSQk9PSyBub24gaGEgYWxjdW4gY29udHJvbGxvIHN1aSBwcm9mZXNzaW9uaXN0aSBuw6kgc3VsbGEgcXVhbGl0w6AgZGVpIHNlcnZpemkgbyBzdWwgc2Vydml6aW8gZm9ybml0byBkYWkgcHJvZmVzc2lvbmlzdGkgc3Rlc3NpIGUgbm9uIMOoIGluIGdyYWRvIGRpIGZvcm5pcmUsIG7DqSBhc3N1bWUgYWxjdW5hIHJlc3BvbnNhYmlsaXTDoCBvIGltcGVnbm8gZGkgZm9ybmlyZSwgYWxjdW4gcmlzYXJjaW1lbnRvIGluIGZhdm9yZSBkZWxs4oCZdXRlbnRlIHBlciBjb250byBkaSBxdWFsc2lhc2kgcHJvZmVzc2lvbmlzdGEuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz42LiBMSUNFTlpBIETigJlVU088L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjYuMS4gVXNvIGNvbnNlbnRpdG86PC9zdHJvbmc+IEXigJkgY29uc2VudGl0byBhbGzigJl1dGVudGUgdXRpbGl6emFyZSBpbCBTaXRvIG5vbmNow6kgc3RhbXBhcmUgZSBzY2FyaWNhcmUgZGFsIFNpdG8gZXN0cmF0dGkgZGVsIFNpdG8gc3Rlc3NvIHBlciB1c28gcGVyc29uYWxlIG5vbiBhdmVudGUgZmluYWxpdMOgIGNvbW1lcmNpYWxpIGFsbGUgc2VndWVudGkgY29uZGl6aW9uaTo8YnI+XFxuICAgICAgICA8c3Ryb25nPjYuMS4xLiBs4oCZdXRlbnRlIG5vbiBkZXZlIHV0aWxpenphcmUgaWwgU2l0byBpbiBtb2RvIGltcHJvcHJpbywgaXZpIGluY2x1c28gbWVkaWFudGUgdGVjbmljaGUgZGkgcGlyYXRlcmlhIGluZm9ybWF0aWNhIChoYWNraW5nKSBvIGRpIGVzdHJhemlvbmUgaW5mb3JtYXRpenphdGEgZGkgZGF0aSAoc2NyYXBpbmcpLjwvc3Ryb25nPiA8YnI+XFxuICAgICAgICA8c3Ryb25nPjYuMS4yLiBSZXN0cml6aW9uaSBk4oCZdXNvOjwvc3Ryb25nPiBTYWx2byBwZXIgcXVhbnRvIHByZXZpc3RvIGFsIHBhcmFncmFmbyA2LjEsIGlsIHByZXNlbnRlIFNpdG8gbm9uIHB1w7IgZXNzZXJlIHV0aWxpenphdG8gZSBuZXNzdW5hIHN1YSBwYXJ0ZSBwdcOyIGVzc2VyZSByaXByb2RvdHRhIG8gYXJjaGl2aWF0YSBpbiBhbGN1biBhbHRybyBzaXRvIHdlYiBuw6kgcHXDsiBlc3NlcmUgaW5zZXJpdG8gaW4gYWxjdW4gc2lzdGVtYSBvIHNlcnZpemlvLCBwdWJibGljbyBvIHByaXZhdG8sIHBlciBpbCByZWN1cGVybyBlbGV0dHJvbmljbyBkZWxsZSBpbmZvcm1hemlvbmkgc2VuemEgbGEgcHJldmVudGl2YSBhdXRvcml6emF6aW9uZSBzY3JpdHRhIGRpIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ni4xLjMuIFJpc2VydmEgZGkgRGlyaXR0aTo8L3N0cm9uZz4gSSBkaXJpdHRpIG5vbiBlc3BsaWNpdGFtZW50ZSBjb25jZXNzaSBuZWwgcHJlc2VudGUgU2l0byB3ZWIgc29ubyByaXNlcnZhdGkuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz43LiBBQ0NFU1NPIEFMIFNFUlZJWklPPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz43LjEuIERpc3BvbmliaWxpdMOgIGRlbCBTaXRvOjwvc3Ryb25nPiBTZWJiZW5lIFNUQVJCT09LIHNpIGFkb3BlcmkgcGVyIGZhciBzw6wgY2hlIGzigJlhY2Nlc3NvIGFsIFNpdG8gcG9zc2EgZGkgbm9ybWEgYXZ2ZW5pcmUgdmVudGlxdWF0dHJvIG9yZSBzdSB2ZW50aXF1YXR0cm8gKDI0aC8yNCksIFNUQVJCT09LIG5vbiBhc3N1bWUgYWxjdW4gb2JibGlnbyBhIHJpZ3VhcmRvIGUgbm9uIMOoIHJlc3BvbnNhYmlsZSBuZWkgY29uZnJvbnRpIGRlbGzigJl1dGVudGUgbmVsIGNhc28gaW4gY3VpIGlsIFNpdG8sIGluIHF1YWxzaWFzaSBtb21lbnRvIG8gcGVyIHBlcmlvZGkgZGkgcXVhbHNpYXNpIGR1cmF0YSwgbm9uIHNpYSBkaXNwb25pYmlsZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjcuMS4gU29zcGVuc2lvbmUgZGVsbOKAmWFjY2Vzc286PC9zdHJvbmc+IEzigJlhY2Nlc3NvIGFsIHByZXNlbnRlIFNpdG8gcHXDsiBlc3NlcmUgdGVtcG9yYW5lYW1lbnRlIHNvc3Blc28gaW4gcXVhbHNpYXNpIG1vbWVudG8sIGFuY2hlIHNlbnphIHByZWF2dmlzby48YnI+XFxuICAgICAgICA8c3Ryb25nPjcuMi4gU2ljdXJlenphIGluZm9ybWF0aWNhOjwvc3Ryb25nPiBTZWJiZW5lIFNUQVJCT09LIGFkb3R0aSBsZSBtaXN1cmUgcHJlc2NyaXR0ZSBwZXIgbGVnZ2UgcGVyIGxhIHR1dGVsYSBkZWxsZSBpbmZvcm1hemlvbmkgaW1tZXNzZSwgZXNzYSBub24gw6ggaW4gZ3JhZG8gZGkgZ2FyYW50aXJlIGxhIHNpY3VyZXp6YSBkZWkgZGF0aSB0cmFzbWVzc2kgYWwgU2l0byB3ZWI7IGxhIHRyYXNtaXNzaW9uZSB2aWVuZSBwZXJ0YW50byBlZmZldHR1YXRhIGEgcmlzY2hpbyBkZWxs4oCZdXRlbnRlLjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdwcml2YWN5J1xcXCI+XFxuICAgICAgICA8cD48c3Ryb25nPjEuIElORk9STUFaSU9OSSBSQUNDT0xURSBEQSBTVEFSQk9PSzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjEuMS4gTmVsIHZpc2l0YXJlIGlsIFNpdG8gbyBuZWxs4oCZdXRpbGl6emFyZSBpbCBTZXJ2aXppbyBwZXIgaW5vbHRyYXJlIHVuIE9yZGluZSBhZCB1biBwcm9mZXNzaW9uaXN0YSB0cmFtaXRlIGlsIFNpdG8sIMOoIHBvc3NpYmlsZSBjaGUgdmVuZ2EgcmljaGllc3RvIGRpIGZvcm5pcmUgaW5mb3JtYXppb25pIGNoZSByaWd1YXJkYW5vIGzigJl1dGVudGUsIGl2aSBpbmNsdXNvIG5vbWUsIHJlY2FwaXRpIChxdWFsaSBudW1lcm8gZGkgdGVsZWZvbm8gZmlzc28sIGRpIHRlbGVmb25vIG1vYmlsZSBlIGluZGlyaXp6byBlLW1haWwpIGUgZGF0aSByZWxhdGl2aSBhbCBwYWdhbWVudG8gKHF1YWxpIGkgZGF0aSBkZWxsYSBjYXJ0YSBkaSBjcmVkaXRvIG8gZGkgZGViaXRvKS4gU1RBUkJPT0sgcHXDsiBpbm9sdHJlIHJhY2NvZ2xpZXJlIGluZm9ybWF6aW9uaSByZWxhdGl2ZSBhbGzigJl1dGlsaXp6byBkZWwgU2l0byBlIGRlbCBTZXJ2aXppbyBkYSBwYXJ0ZSBkZWxs4oCZdXRlbnRlIG5vbmNow6kgcHXDsiByYWNjb2dsaWVyZSBpbmZvcm1hemlvbmkgcmVsYXRpdmUgYWxs4oCZdXRlbnRlIGEgcGFydGlyZSBkYWkgbWF0ZXJpYWxpIChxdWFsaSBtZXNzYWdnaSBlIHJlY2Vuc2lvbmkpIGNoZSBs4oCZdXRlbnRlIHN0ZXNzbyBwdWJibGljYSBzdWwgU2l0byBvIHRyYXNtZXR0ZSBhbCBTaXRvIG8gY2hlIGludmlhIGEgU1RBUkJPT0sgdHJhbWl0ZSBlLW1haWwgbyBwZXIgbGV0dGVyYS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuIFVTTyBERUxMRSBJTkZPUk1BWklPTkk8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD4yLjEuIExlIGluZm9ybWF6aW9uaSBkZWdsaSB1dGVudGkgY29uc2VudG9ubyBhIFNUQVJCT09LIGRpIGZvcm5pcmUgYWdsaSB1dGVudGkgc3Rlc3NpIGzigJlhY2Nlc3NvIGFsbGUgc2V6aW9uaSBkZWwgU2l0byBjdWkgc29ubyBpbnRlcmVzc2F0aSBlIGRpIGZvcm5pcmUgaWwgU2Vydml6aW8uIEVzc2UgbWV0dG9ubyBpbm9sdHJlIFNUQVJCT09LIGluIGdyYWRvIGRpIGZhdHR1cmFyZSBnbGkgaW1wb3J0aSBkb3Z1dGkgZSBjb25zZW50b25vIGEgU1RBUkJPT0sgbyBhZCB1biBwcm9mZXNzaW9uaXN0YSBjdWkgbOKAmXV0ZW50ZSBhYmJpYSBpbm9sdHJhdG8gdW4gT3JkaW5lIGRpIGNvbnRhdHRhcmUgbOKAmXV0ZW50ZSBpbiBtZXJpdG8gYWwgU2Vydml6aW8sIG92ZSBuZWNlc3NhcmlvLiBBZCBlc2VtcGlvLCBTVEFSQk9PSyBlL28gaWwgcHJvZmVzc2lvbmlzdGEgcG9zc29ubyB1dGlsaXp6YXJlIGkgZGF0aSBkZWxs4oCZdXRlbnRlIHBlciBmb3JuaXJlIGFsbG8gc3Rlc3NvIGFnZ2lvcm5hbWVudGkgc3VsbG8gc3RhdG8gZGVsbCdPcmRpbmUgbyBhbHRyZSBpbmZvcm1hemlvbmkgcmVsYXRpdmUgYWxsYSBzdGVzc2EgbWVkaWFudGUgZS1tYWlsLCBwZXIgdGVsZWZvbm8gZmlzc28gbyBtb2JpbGUgbyB0cmFtaXRlIG1lc3NhZ2dpc3RpY2EgbW9iaWxlLiBJbm9sdHJlLCBTVEFSQk9PSyB1dGlsaXp6YSBlZCBhbmFsaXp6YSBsZSBpbmZvcm1hemlvbmkgcmFjY29sdGUgYWwgZmluZSBkaSBnZXN0aXJlLCBzb3N0ZW5lcmUsIG1pZ2xpb3JhcmUgZSBzdmlsdXBwYXJlIGxhIHByb3ByaWEgYXR0aXZpdMOgIGltcHJlbmRpdG9yaWFsZSwgcGVyIGV2ZW50dWFsaSBhbHRyZSBmaW5hbGl0w6Agc3RhdGlzdGljaGUgbyBhbmFsaXRpY2hlIG5vbmNow6kgcGVyIGNvbnRyaWJ1aXJlIGFsbGEgcHJldmVuemlvbmUgZGkgZnJvZGkuIE5laSBjYXNpIGluIGN1aSBzaWEgb3Bwb3J0dW5vLCBvcmEgZSBpbiBmdXR1cm8sIGzigJl1dGVudGUgcG90cmViYmUgYXZlcmUgbGEgY2FwYWNpdMOgIGRpIGVzcHJpbWVyZSBsZSBwcm9wcmllIHByZWZlcmVuemUgcmlndWFyZG8gYWxs4oCZdXRpbGl6em8gZGVpIHByb3ByaSBkYXRpIHNlY29uZG8gcXVhbnRvIHByZXZpc3RvIG5lbGxhIHByZXNlbnRlIEluZm9ybWF0aXZhIGluIG1hdGVyaWEgZGkgUHJpdmFjeSBlIGRpIGVzZXJjaXRhcmxhIHRyYW1pdGUgbGEgbWV0b2RvbG9naWEgcHJlc2NlbHRhIGRhbGzigJl1dGVudGUgcGVyIGzigJl1dGlsaXp6byBkZWwgU2Vydml6aW8sIGFkIGVzZW1waW8sIGluIG1vZGFsaXTDoCBtb2JpbGUsIHRyYW1pdGUgYXBwbGljYXppb25pIG1vYmlsaSBvIGzigJlldmVudHVhbGUgcmFwcHJlc2VudGF6aW9uZSBkZWwgU2l0by48YnI+XFxuICAgICAgICAyLjIuIFNUQVJCT09LIHB1w7IgdXRpbGl6emFyZSBsZSBpbmZvcm1hemlvbmkgcGVyIGNvbnRhdHRhcmUgaWwgY2xpZW50ZSBhbCBmaW5lIGRpIGNvbm9zY2VyZSwgY29uIGlsIHN1byBjb25zZW5zbywgbGUgc3VlIG9waW5pb25pIHN1bCBTZXJ2aXppbyBlZCBvY2Nhc2lvbmFsbWVudGUgZGkgaW5mb3JtYXJsbyBkZWxsZSBtb2RpZmljaGUgbyBkZWdsaSBzdmlsdXBwaSBpbXBvcnRhbnRpIGNoZSByaWd1YXJkYW5vIGlsIFNpdG8gbyBpbCBTZXJ2aXppbyBzdWRkZXR0by48YnI+XFxuICAgICAgICAyLjMuIFNUQVJCT09LIHBvdHLDoCB1dGlsaXp6YXJlIGzigJlpbmRpcml6em8gZW1haWwgZm9ybml0byBkYWxs4oCZdXRlbnRlIGRlbCBTaXRvIGFsIG1vbWVudG8gZGVsbOKAmWFjcXVpc3RvIGRpIHByb2RvdHRpIGluIHZlbmRpdGEgc3VsIFNpdG8gcGVyIGZhciBjb25vc2NlcmUgYWxsbyBzdGVzc28gdXRlbnRlIGkgcHJvZG90dGkgZSBzZXJ2aXppIGRpIFNUQVJCT09LLCBzaW1pbGkgYSBxdWVsbGkgZ2nDoCBhY3F1aXN0YXRpLCBjaGUgcG9zc2FubyByaXNjdW90ZXJlIGlsIHN1byBpbnRlcmVzc2UuIEzigJl1dGVudGUgcG90csOgIGluIG9nbmkgbW9tZW50bywgZ3JhdHVpdGFtZW50ZSBlIGNvbiBlZmZldHRvIGltbWVkaWF0byBvcHBvcnNpIGFsbOKAmXV0aWxpenpvIGRlbCBwcm9wcmlvIGluZGlyaXp6byBlbWFpbCBwZXIgbGEgcmljZXppb25lIGRpIHRhbGUgbWF0ZXJpYWxlIGluZm9ybWF0aXZvIGNsaWNjYW5kbyBzdWxs4oCZYXBwb3NpdG8gbGluayBpbnNlcml0byBpbiBjYWxjZSBhIGNpYXNjdW5hIGVtYWlsIHJpY2V2dXRhLiBJbiBhbHRlcm5hdGl2YSwgbOKAmXV0ZW50ZSBwb3Ryw6Agb3Bwb3JzaSBhIHRhbGUgdHJhdHRhbWVudG8gYW5jaGUgbW9kaWZpY2FuZG8gbGUgcHJlZmVyZW56ZSBkYWxsYSByZWxhdGl2YSBzZXppb25lIGRlbCBwcm9wcmlvIHByb2ZpbG8uIFBlciBnZXN0aXJlIGxlIG5vdGlmaWNoZSwgbOKAmXV0ZW50ZSBkb3Zyw6AgYWNjZWRlcmUgYWxsYSBwYWdpbmEgZGVsbGUgaW1wb3N0YXppb25pIGRlbCBzdW8gdGVsZWZvbm8gbyB0YWJsZXQgZSBtb2RpZmljYXJlIGwnYXV0b3JpenphemlvbmUgYWxsZSBub3RpZmljaGUgcGVyIGwnYXBwbGljYXppb25lIFNUQVJCT09LLiBJbiBjYXNvIGRpIGRpc2F0dGl2YXppb25lIGRlbGxlIG5vdGlmaWNoZSwgbOKAmXV0ZW50ZSBub24gcG90csOgIHBpw7kgcmljZXZlcmUgYWdnaW9ybmFtZW50aSBzdWkgc3VvaSBvcmRpbmkgdmlhIG5vdGlmaWNoZS48YnI+XFxuICAgICAgICAyLjQuIFNlIGNvbnNlbnRpdG8gZGFsbOKAmXV0ZW50ZSBkZWwgU2l0bywgU1RBUkJPT0sgcG90csOgIHV0aWxpenphcmUgaSBkYXRpIHBlciBmYXIgY29ub3NjZXJlIGFsbOKAmXV0ZW50ZSBzdWRkZXR0byBnbGkgYWx0cmkgcHJvZG90dGkgZSBzZXJ2aXppIGRpIFNUQVJCT09LIGNoZSBwb3NzYW5vIHJpc2N1b3RlcmUgaWwgc3VvIGludGVyZXNzZSwgaXZpIGluY2x1c2kgc2Vydml6aSBjaGUgcG9zc2FubyBlc3NlcmUgb2dnZXR0byBkaSBkaXJlY3QgbWFya2V0aW5nIG1lZGlhbnRlIHNpc3RlbWkgZGkgbWVzc2FnZ2lzdGljYSB0cmFtaXRlIGNlbGx1bGFyZSBlIGF0dHJhdmVyc28gbGUgbm90aWZpY2hlLjxicj5cXG4gICAgICAgIDIuNS4gUXVhbG9yYSBs4oCZdXRlbnRlIG5vbiBkZXNpZGVyaSBwacO5IGNoZSBpIHN1b2kgZGF0aSBzaWFubyB1dGlsaXp6YXRpIGRhIFNUQVJCT09LIG5laSBtb2RpIHNvcHJhIGluZGljYXRpIG8gY2FtYmkgaWRlYSByaWd1YXJkbyBhbGxhIHBvc3NpYmlsaXTDoCBkaSBlc3NlcmUgY29udGF0dGF0byBpbiBmdXR1cm8sIHNpIHByZWdhIGRpIGZhcmxvIHNhcGVyZSBhIFNUQVJCT09LIHV0aWxpenphbmRvIGkgcmVjYXBpdGkgaW5kaWNhdGkgYWwgc3VjY2Vzc2l2byBhcnRpY29sbyA4IGUvbyBtb2RpZmljYW5kbyBjb3JyaXNwb25kZW50ZW1lbnRlIGlsIHByb3ByaW8gcHJvZmlsby48YnI+XFxuICAgICAgICAyLjYuIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gZGVzaWRlcmkgcGnDuSBjaGUgaSBzdW9pIGRhdGkgc2lhbm8gdXRpbGl6emF0aSBkYSBTVEFSQk9PSyBuZWkgbW9kaSBzb3ByYSBpbmRpY2F0aSBvIGNhbWJpIGlkZWEgcmlndWFyZG8gYWxsYSBwb3NzaWJpbGl0w6AgZGkgZXNzZXJlIGNvbnRhdHRhdG8gaW4gZnV0dXJvLCBzaSBwcmVnYSBkaSBvcHBvcnNpIGFsIHRyYXR0YW1lbnRvIG5laSBtb2RpIHN1IGluZGljYXRpLiBJbiBtYW5jYW56YSwgw6ggcG9zc2liaWxlIGluZm9ybWFyZSBpbiBvZ25pIG1vbWVudG8gZmFybG8gc2FwZXJlIGEgU1RBUkJPT0sgZGVsbGEgcHJvcHJpYSBkZWNpc2lvbmUsIHV0aWxpenphbmRvIGkgcmVjYXBpdGkgaW5kaWNhdGkgYWwgc3VjY2Vzc2l2byBhcnRpY29sbyA4IGUvbyBtb2RpZmljYW5kbyBjb3JyaXNwb25kZW50ZW1lbnRlIGlsIHByb3ByaW8gcHJvZmlsby48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnaGVscCdcXFwiPlxcbiAgICAgICAgPHA+SGFpIGJpc29nbm8gZGkgYWl1dG8/IDxicj5cXG4gICAgICAgIFNjcml2aSB1bmEgbWFpbCBoYXJhbGQuYnJlZ3VAc3RhcmJvb2suY28gZSB0aSByaXNwb25kZXJlbW8gbmVsIHBpw7kgYnJldmUgdGVtcG8gcG9zc2liaWxlLjwvcD5cXG4gICAgICAgIDxwPlZ1b2kgZW50cmFyZSBhIGZhciBwYXJ0ZSBkaSBTVEFSQk9PSz8gQXVtZW50YSBpbCBudW1lcm8gZGVpIHR1b2kgY2xpZW50aSBwYWdhbnRpIGUgcmlzcGFybWlhIHN1aSBjb3N0aSBkZWwgdHJhc3BvcnRvLjwvcD5cXG4gICAgICAgIDxwPlBlciByaWNoaWVkZXJlIGluZm9ybWF6aW9uaTo8L3A+XFxuICAgICAgICA8cD5DZWxsdWxhcmU6ICszOSAzMjcyNDE1MDI4PGJyPlxcbiAgICAgICAgRW1haWw6IGhhcmFsZC5icmVndUBzdGFyYm9vay5jbzwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG5cXG48ZGl2IGNsYXNzPVxcXCJkYXJrLXNjcmVlblxcXCIgKm5nSWY9XFxcImFjdGl2ZVBvcHVwICE9PSAnJ1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj48L2Rpdj5cXG48IS0tIENoYW5nZSBwYXNzd29yZCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgKm5nSWY9XFxcImFjdGl2ZVBvcHVwID09PSAnY2hhbmdlUGFzc3dvcmQnXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkNhbWJpYSBwYXNzd29yZDwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImxvZ2luLWZvcm1cXFwiICNjaGFuZ2VQYXNzd29yZEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogY2hhbmdlUGFzc3dvcmRFcnJvci5jdXJyZW50UGFzc3dvcmR9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJjdXJyZW50UGFzc3dvcmRcXFwiPkxhIHR1YSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJjdXJyZW50UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjdXJyZW50UGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJjaGFuZ2VQYXNzd29yZERhdGEuY3VycmVudFBhc3N3b3JkXFxcIiAjY3VycmVudFBhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkxhIHR1YSBwYXNzd29yZCBhdHR1YWxlIMOoIHJpY2hpZXN0YTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcIm5ld1Bhc3N3b3JkXFxcIj5OdW92YSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJuZXdQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcIm5ld1Bhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiY2hhbmdlUGFzc3dvcmREYXRhLm5ld1Bhc3N3b3JkXFxcIiAjbmV3UGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBjaGFuZ2VQYXNzd29yZEVycm9yLnBhc3N3b3JkQ29uZmlybX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkQ29uZmlybVxcXCI+UmlwZXRpIGxhIG51b3ZhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkQ29uZmlybVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiY2hhbmdlUGFzc3dvcmREYXRhLnBhc3N3b3JkQ29uZmlybVxcXCIgI3Bhc3N3b3JkQ29uZmlybT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tQYXNzd29yZChuZXdQYXNzd29yZC52YWx1ZSwgcGFzc3dvcmRDb25maXJtLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5MZSBwYXNzd29yZCBub24gY29ycmlzcG9uZG9ubzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCIhY2hhbmdlUGFzc3dvcmRGb3JtLmZvcm0udmFsaWRcXFwiIChjbGljayk9XFxcImNoYW5nZVBhc3N3b3JkKGN1cnJlbnRQYXNzd29yZC52YWx1ZSwgbmV3UGFzc3dvcmQudmFsdWUsIHBhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPkNhbWJpYSBwYXNzd29yZDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJkYXJrLXNjcmVlblxcXCIgW0BzaGFkb3dTdGF0ZV09XFxcInNoYWRvd1N0YXRlXFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPjwvZGl2PlxcbjwhLS0gTG9naW4gcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAbG9naW5Qb3B1cFN0YXRlXT1cXFwibG9naW5Qb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlNpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlITwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkFjY2VkaTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImxvZ2luLWZvcm1cXFwiICNsb2dpbkZvcm09XFxcIm5nRm9ybVxcXCIgKGtleXVwLmVudGVyKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5lbWFpbH1cXFwiPlxcbmMgICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkRhdGEuZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgnbG9naW4nLCBlbWFpbC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja0VtYWlsKCdsb2dpbicsIGVtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZCA8YSBjbGFzcz1cXFwicmVjb3ZlcnlcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdyZWNvdmVyeScpXFxcIj5QYXNzd29yZCBkaW1lbnRpY2F0YT88L2E+PC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkRhdGEucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgnbG9naW4nLCBwYXNzd29yZC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja05vbkVtcHR5KCdsb2dpbicsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgbGEgdHVhIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgaHJlZj1cXFwiI1xcXCIgKGNsaWNrKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+QWNjZWRpPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgPHNwYW4+U2VpIG51b3ZvIHN1IFN0YXJib29rPzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ3JlZ2lzdHJhdGlvbicpXFxcIj5OdW92byBhY2NvdW50PC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG48IS0tIFJlZ2lzdHJhdGlvbiBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0ByZWdpc3RyYXRpb25Qb3B1cFN0YXRlXT1cXFwicmVnaXN0cmF0aW9uUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+TnVvdm8gYWNjb3VudDwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcInJlZ2lzdHJhdGlvbi1mb3JtXFxcIiAjcmVnaXN0cmF0aW9uRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5uYW1lfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnTmFtZVxcXCI+Tm9tZSBjb21wbGV0bzwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5uYW1lXFxcIiAjcmVnTmFtZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uTmFtZScsIHJlZ05hbWUudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSBpbCBub21lIGNvbXBsZXRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5waG9uZX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bob25lXFxcIj5DZWxsdWxhcmU8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGhvbmVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5waG9uZVxcXCIgI3JlZ1Bob25lPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25QaG9uZScsIHJlZ1Bob25lLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgbnVtZXJvIGNlbGx1bGFyZTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IuZW1haWx9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdFbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnRW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEuZW1haWxcXFwiICNyZWdFbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgncmVnaXN0cmF0aW9uJywgcmVnRW1haWwudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluZGlyaXp6byBlbWFpbCBub24gdmFsaWRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0fVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnUGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLnBhc3N3b3JkXFxcIiAjcmVnUGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvblBhc3N3b3JkJywgcmVnUGFzc3dvcmQudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSB1bmEgcGFzc3dvcmQ8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnUGFzc3dvcmRDb25maXJtXFxcIj5EaSBudW92byBsYSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQYXNzd29yZENvbmZpcm1cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLnBhc3N3b3JkQ29uZmlybVxcXCIgI3JlZ1Bhc3N3b3JkQ29uZmlybT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tQYXNzd29yZChyZWdQYXNzd29yZC52YWx1ZSwgcmVnUGFzc3dvcmRDb25maXJtLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5MZSBwYXNzd29yZCBub24gY29ycmlzcG9uZG9ubzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWdpc3RyYXRpb24ocmVnTmFtZS52YWx1ZSwgcmVnUGhvbmUudmFsdWUsIHJlZ0VtYWlsLnZhbHVlLCByZWdQYXNzd29yZC52YWx1ZSwgcmVnUGFzc3dvcmRDb25maXJtLnZhbHVlKVxcXCI+Q3JlYSBhY2NvdW50PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ub3RpY2VcXFwiPkFjY2VkZW5kbyBkaWNoaWFyaSBkaSBhdmVyIGxldHRvIGUgYWNjZXR0aSBsZSA8YSAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIHJvdXRlckxpbms9XFxcInByb2ZpbGUvY29uZGl0aW9uc1xcXCI+Y29uZGl6aW9uaSBnZW5lcmFsaTwvYT4gZSA8YSAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIHJvdXRlckxpbms9XFxcInByb2ZpbGUvcHJpdmFjeVxcXCI+bOKAmWluZm9ybWF0aXZhIHN1bGxhIHByaXZhY3k8L2E+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbi1vZmZlclxcXCI+SGFpIGdpYSB1biBhY2NvdW50IHN1IFN0YXJib29rPyA8YSAoY2xpY2spPVxcXCJnZXRQb3B1cCgnbG9naW4nKVxcXCI+QWNjZWRpPC9hPjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gUmVjb3ZlcnkgcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVjb3ZlcnlQb3B1cFN0YXRlXT1cXFwicmVjb3ZlcnlQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJlY3VwZXJhIHBhc3N3b3JkPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwicmVjb3ZlcnktZm9ybVxcXCIgI3JlY292ZXJ5Rm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWNvdmVyeUVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVjb3ZlcnlFbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVjb3ZlcnlFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlY292ZXJ5RGF0YS5lbWFpbFxcXCIgI3JlY292ZXJ5RW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlY292ZXJ5JywgcmVjb3ZlcnlFbWFpbC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5kaXJpenpvIGVtYWlsIG5vbiB2YWxpZG88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVjb3ZlcnkocmVjb3ZlcnlFbWFpbC52YWx1ZSlcXFwiPkludmlhIGVtYWlsPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXJcXFwiPkhhaSBnaWEgdW4gYWNjb3VudCBzdSBTdGFyYm9vaz8gPGEgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2xvZ2luJylcXFwiPkFjY2VkaTwvYT48L2Rpdj5cXG48L2Rpdj5cXG5cXG48IS0tIENvbmZpcm0gT3JkZXIgcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAY29uZmlybVBvcHVwU3RhdGVdPVxcXCJjb25maXJtUG9wdXBTdGF0ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J25ldy12ZXJzaW9uJzogY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWEnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJyB8fCBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJwb3B1cC1zcGlubmVyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWEnXFxcIj5cXG4gICAgPHN2ZyB3aWR0aD0nNDBweCcgaGVpZ2h0PSc0MHB4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzE4MCA1MCA1MDszNjAgNTAgNTA7XFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgZHVyPVxcXCIxc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgIDwvY2lyY2xlPlxcbiAgICA8L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwic3VjY2Vzcy1pY29uXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ1xcXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIiBbbmdDbGFzc109XFxcInsnd2l0aG91dC1tZXNzYWdlJzogY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnfVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudGl0bGUgIT09ICcnXFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiY29uZmlybS1vcmRlci1mb3JtXFxcIiAjY29uZmlybU9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHAgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSAhPT0gJ25ld09yZGVyJyAmJiBjb25maXJtUG9wdXBEYXRhLnR5cGUgIT09ICduZXdPcmRlckVuZCdcXFwiIFtuZ0NsYXNzXT1cXFwieydjb25mZXJtYS1maW5pc2gnOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCd9XFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxwICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICduZXdPcmRlckVuZCdcXFwiIGNsYXNzPVxcXCJjb25maXJtLWVuZFxcXCI+e3sgY29uZmlybVBvcHVwRGF0YS50ZXh0IH19PC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlcnMtbGlzdFxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBjb25maXJtUG9wdXBEYXRhLmRhdGFcXFwiPlxcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdzZXJ2aWNlJ1xcXCIgY2xhc3M9XFxcInNlcnZpY2UtaXRlbVxcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3NlcnZpY2UnXFxcIiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IHt7IHByb2R1Y3QuaXRlbU5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdpdGVtJ1xcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fTxpPnt7IHByb2R1Y3QuaXRlbU5hbWUgfX0ge3sgcHJvZHVjdC5zeW1ib2wgfX08L2k+PC9zcGFuPlxcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdpdGVtJ1xcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fTxpPnt7IHByb2R1Y3QuaXRlbU5hbWUgfX17eyBwcm9kdWN0LnN5bWJvbCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0ndG90YWwnXFxcIiBjbGFzcz1cXFwidG90YWwtaXRlbVxcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSA8aT7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWxpc3RcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICduZXdPcmRlcidcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPkRhdGE6PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRhdGUgfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIj48c3Bhbj5PcmU6PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLnRpbWUgfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIj48c3Bhbj5JbmRpcml6em86PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmFkZHJlc3MgfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi5kZXNjcmlwdGlvbiAhPT0gJydcXFwiPjxzcGFuPk5vdGE6PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdDb25mZXJtYSdcXFwiPkNvbmZlcm1hPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNhbmNlbE9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdBbm51bGxhIG9yZGluZSdcXFwiPkFubnVsbGEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihjb25maXJtUG9wdXBEYXRhLmlkKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUmlhdHRpdmEgb3JkaW5lJ1xcXCI+UmlhdHRpdmEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIG5ldy1vcmRlci1idG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU5ld09yZGVyKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0bydcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IFByb2NlZGkgY29uIGzigJlhY3F1aXN0bzwvYnV0dG9uPlxcbiAgICAgIDxzcGFuICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0bydcXFwiIGNsYXNzPVxcXCJjb25maXJtLWJ1dHRvbi1ub3RpY2VcXFwiPlZlcnJhaSBub3RpZmljYXRvIGNvbiB1biBzbXMgZSBtYWlsIGFkIGFjcXVpc3RvIGVmZmV0dHVhdG88L3NwYW4+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGxvZ291dC1idG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ2xvZ291dCdcXFwiPkVzY2k8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ2xvZ291dCdcXFwiPkFubnVsbGE8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiAhPT0gJ2xvZ291dCdcXFwiPkNoaXVkaTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG48IS0tIENvbmZpcm0gT3JkZXIgRmluaXNoIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlXT1cXFwiY29uZmlybUZpbmlzaFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmluaXNoLW1lc3NhZ2VcXFwiIFtuZ0NsYXNzXT1cXFwie2lzTGVmdDogY29uZmlybUZpbmlzaFBvcHVwRGF0YS50eXBlID09PSAnbGVmdCd9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57eyBjb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwPnt7IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48IS0tIEZpbmlzaCBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0BmaW5pc2hQb3B1cFN0YXRlXT1cXFwiZmluaXNoUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmaW5pc2gtbWVzc2FnZVxcXCI+XFxuICAgIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgY2xhc3M9XFxcImNsb3NlLXBvcHVwXFxcIj48L2E+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgZmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwICpuZ0Zvcj1cXFwibGV0IHRleHQgb2YgZmluaXNoUG9wdXBEYXRhLnRleHRcXFwiPnt7IHRleHQgfX08L3A+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG48IS0tIEFkZCBDYXJkIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGFkZENhcmRQb3B1cFN0YXRlXT1cXFwiYWRkQ2FyZFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5NZXRvZG8gZGkgcGFnYW1lbnRvPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiYWRkLWNhcmQtZm9ybVxcXCIgI2FkZENhcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1sb2dvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gdmlzYVxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIG1hc3RlcmNhcmRcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSBhbWV4XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLm51bWJlcn1cXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROdW1iZXJcXFwiPk51bWVybyBjYXJ0YTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiAjYWRkQ2FyZE51bWJlcj1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q2FyZE51bWJlclxcXCI+TnVtZXJvIGNhcnRhPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImVkaXRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiBkaXNhYmxlZD5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLmV4cF9kYXRlfVxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRFeHBEYXRlXFxcIj5TY2FkZW56YTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEV4cERhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZEV4cERhdGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTS9BQVxcXCIgbWF4bGVuZ3RoPVxcXCI1XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuZXhwX2RhdGVcXFwiICNhZGRDYXJkRXhwRGF0ZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+RXhwaXJhdGlvbiBkYXRlIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5jdmN9XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdhZGQnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENWVlxcXCI+Q1ZWPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiICNhZGRDYXJkQ1ZWPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdhZGRDYXJkQ3Z2JywgYWRkQ2FyZENWVi52YWx1ZSlcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q1ZWXFxcIj5DVlY8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJlZGl0Q1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWJoZWFkZXJcXFwiPlxcbiAgICAgIEluZm9ybWF6aW9uaSBmYWNvbHRhdGl2aSAoY29sbGFwc2UpXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkTmFtZVxcXCI+Tm9tZSBpbnRlc3RhdGFyaW88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tZSBDb2dub21lXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubmFtZVxcXCIgI2FkZENhcmROYW1lPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3QtYmlnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRWaWFcXFwiPlZpYTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRWaWFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRWaWFcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxXFxcIiAjYWRkQ2FyZEFkZHJlc3MxPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3Qtc21hbGxcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5yXFxcIj5OcjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZE5yXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMlxcXCIgI2FkZENhcmRBZGRyZXNzMj1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkQ2l0dGFcXFwiPkNpdHTDoDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDaXR0YVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZENpdHRhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDaXR5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3Qtc21hbGxcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENhcFxcXCI+Q0FQPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZENhcFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZENhcFxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfemlwXFxcIiAjYWRkQ2FyZEFkZHJlc3NaaXA9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIj5Qcm92aW5jaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZVxcXCIgI2FkZENhcmRBZGRyZXNzU3RhdGU9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgbGFzdFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkUGVhc2VcXFwiPlBhZXNlPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkUGVhc2VcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnlcXFwiICNhZGRDYXJkQWRkcmVzc0NvdW50cnk9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImFkZE5ld0NhcmQoKVxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnYWRkJ1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImVkaXRDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5BZ2dpdW5naSBtZXRvZG88L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuXFxuPCEtLSBDb25maXJtIHBvcHVwIHdpdGggYWN0aW9uIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXT1cXFwiY29uZmlybUFjdGlvblBvcHVwU3RhdGVcXFwiIFtuZ0NsYXNzXT1cXFwieydhZGQtcHJpY2UnOiBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZSd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57eyBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiY29uZmlybS1hY3Rpb25cXFwiICNjb25maXJtQWN0aW9uT3JkZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8cD5cXG4gICAgICB7eyBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgfX1cXG4gICAgICA8c3BhbiAqbmdJZj1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiAhPT0gJydcXFwiPjxicj4ge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiB9fTwvc3Bhbj5cXG4gICAgPC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY3Rpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGFjdGlvbiBvZiBjb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnNcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5wdXRfYWRkJ1xcXCI+XFxuICAgICAgICA8bGFiZWw+e3sgYWN0aW9uLmxhYmVsIH19PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvbmZpcm1BY3Rpb25JbnB1dEFkZFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEFkZFByaWNlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj4uMDA8L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvbiBldXJvXFxcIj7igqw8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwcmljZS1kZXNjcmlwdGlvblxcXCI+e3sgYWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5wdXRfZWRpdCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRFZGl0UHJpY2VcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlXFxcIiAjY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj4uMDA8L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvbiBldXJvXFxcIj7igqw8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwcmljZS1kZXNjcmlwdGlvblxcXCI+e3sgYWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBheW1lbnQtaW5mb3JtYXRpb25cXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5mb3JtYXRpb24nXFxcIj5cXG4gICAgICAgIHt7IGFjdGlvbi5pbmZvcm1hdGlvbiB9fVxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBidXR0b25zLWJsb2NrXFxcIj5cXG4gICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBidXR0b24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zXFxcIj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnYWRkUHJpY2UnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJhZGRQcmljZShjb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQpXFxcIj57eyBidXR0b24udGV4dCB9fTwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiYnV0dG9uLnR5cGUgPT09ICdlZGl0UHJpY2UnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJlZGl0UHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnY29udGludWVPcmRlcidcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChjbGljayk9XFxcImNvbnRpbnVlT3JkZXIoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4ge3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnY2xvc2UnXFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiPlxcbiAgPHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgPC9jaXJjbGU+XFxuICA8L3N2Zz5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsL25vZGVcIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWNsaWNrLW91dHNpZGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItY2xpY2stb3V0c2lkZVwiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcGFnZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICAgIDxoMT5IYWkgYmlzb2dubyBkaSBsYXZvcmF6aW9uaSBpbnRlcm5pPzwvaDE+XFxuICAgICAgICAgIDxoNj7DiCBjb3NpIHNlbXBsaWNlLiBUcm92YSBpbCBzZXJ2aXppby4gQ2FsY29sYSBpbCBwcmV2ZW50aXZvLiBQcmVub3RhLjwvaDY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlYXJjaFxcXCI+XFxuICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwicXVlcnlcXFwiIFtzdWdnZXN0aW9uc109XFxcInJlc3VsdHNcXFwiIGZpZWxkPVxcXCJ0aXRsZVxcXCIgc2Nyb2xsSGVpZ2h0PVxcXCIyNzVweFxcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwic2VhcmNoKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdFJlc3VsdChxdWVyeSlcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb250cm9zb2ZmaXR0byBpbiBjYXJ0b25nZXNzbywgUGFyZXRlIGluIGNhcnRvbmdlc3NvLi4uXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBsZXQtcmVzPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPScyMXB4JyBoZWlnaHQ9JzIxcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIiFzcGluZXJWaWV3ICYmIGNsZWFyVmlld1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgZW1wdHlcXFwiICpuZ0lmPVxcXCJyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBxdWVyeS5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+TGF2b3JhemlvbmkgcGnDuSByaWNoaWVzdGk8L2gyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1zZXJ2aWNlc1xcXCI+XFxuICAgICAgICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlcy1jYXJkXFxcIiAqbmdGb3I9XFxcImxldCBzZXJ2aWNlIG9mIHNlcnZpY2VzXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RSZXN1bHQoc2VydmljZSlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtY29udGFpbmVyXFxcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XFxcIid1cmwoJyArIHNlcnZpY2UuaW1hZ2VfdXJsICsgJyknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYWRvd1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IHNlcnZpY2UudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgQSBQQVJUSVJFIERBIDxzcGFuPuKCrHt7IHNlcnZpY2Uub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ3aHktY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+UGVyY2jDqSB1c2FyZSBTdGFyYm9vaz88L2gyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgd2h5LWNlbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3Rhcl9xdWFsaXR5LnBuZ1xcXCIgY2xhc3M9XFxcInJvdW5kZWQgbXgtYXV0byBkLWJsb2NrXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxuICAgICAgICAgICAgPGgzPkxhdm9yYXppb25pIGRpIGFsdGEgcXVhbGl0w6A8L2gzPlxcbiAgICAgICAgICAgIDxoND5JIHNlcnZpemkgc3UgU3RhcmJvb2sgdmVuZ29ubyBlc2VndWl0aSBkYWxsZSBtaWdsaW9yaSBhemllbmRlLiBVc2FuZG8gdW4gYWxnb3JpdG1vIGRpIHJpY2VyY2EsIFN0YXJib29rIHRyb3ZhIGzigJlhemllbmRhIHBpw7kgdmljaW5hIGFsbGEgdHVhIGFiaXRhemlvbmUuPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJrZXQtcHJpY2UucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJlenpvIGdhcmFudGl0byBkYWwgbWVyY2F0bzwvaDM+XFxuICAgICAgICAgICAgPGg0PkkgcHJlenppIHN1IFN0YXJib29rIHZlbmdvbm8gY2FsY29sYXRpIGRhIHVuIGFsZ29yaXRtbyBpbnRlcm5vIGRlbGxhIHBpYXR0YWZvcm1hIHBlciByZW5kZXJlIHBpw7kgZXF1byBlIHRyYXNwYXJlbnRlIGlsIG1lcmNhdG8uPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90aW1pbmcucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJldmVudGl2byBkaXJldHRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+VW5hIHZvbHRhIHNjZWx0byBpbCBzZXJ2aXppbywgc2VsZXppb25hIGkgZm9ybSBzZWNvbmRvIGxlIGVzaWdlbnplIGUgY2FsY29sYSBpbCBwcmV2ZW50aXZvIGRpcmV0dGFtZW50ZSBkYWxsYSBwaWF0dGFmb3JtYS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJwYXJ0bmVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxlIG1pZ2xpb3JpIGF6aWVuZGUgcGFydG5lcjwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1icmFuZHMtc2Nyb2xsYWJsZVxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+IC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwicHJlLWZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+U2ljdXJlenphIGRlbCBzaXRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zZWN1cml0eVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm9ydG9uLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VjdXJlLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJ1c3QucG5nXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaXN0ZW1pIGRpIHBhZ2FtZW50bzwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtcGF5bWVudC1tZXRob2RzXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmlzYS5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FtZXJpY2FuZXhwcmVzcy5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0cmlwZS5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PkNvbnRhdHRpPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1jb250YWN0LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxoND5BdHRpdm8gMjQvNzwvaDQ+XFxuICAgICAgICAgICAgPGg0PkNlbGx1bGFyZTogKzM5IDMyNyAyNCAxNSAwMjg8L2g0PlxcbiAgICAgICAgICAgIDxoND5FbWFpbDogaW5mb0BzdGFyYm9vay5jbzwvaDQ+XFxuICAgICAgICAgICAgPGg0PlZpYSBMdWlnaSBQaXJhbmRlbGxvIDIxLCBCdXN0byBBcnNpemlvIFZBPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TZWd1aWNpIHN1PC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zb2NpYWxzXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3RhcmJvb2suY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2sucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zdGFyYm9va2NvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0ucG5nXFxcIj48L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb3B5cmlnaHRcXFwiPjxzdHJvbmc+U3RhcmJvb2s8L3N0cm9uZz4gwqkgMjAxNyBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsYW5kaW5nLXRvcC1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxoMT5QcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2dubywgbmVsbCdvcmEgZSBpbCBnaW9ybm8gY2hlIGRlc2lkZXJpPC9oMT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TdGFyYm9vayA8c3Bhbj5zZXJ2aWNlczwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgPHA+U2VsZXppb25hIHVubyBkZWkgc2Vydml6aSBzdSBTdGFyYm9vaywgaW1wb3N0YSBsYSBkYXRhLCBvcmEsIGluZGlyaXp6byBlIGNvbmZlcm1hIGzigJlvcmRpbmUuIFZlcnJhaSBub3RpZmljYXRvIGNvbiB1biBzbXMgZSB1bmEgbWFpbCBxdWFuZG8gbOKAmW9yZGluZSBlIHN0YXRvIGFjY2V0dGF0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBxdWFsaWZpY2F0by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzFdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlB1bGl6aWU8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkhhaSBiaXNvZ25vIGRpIHVuIHNlcnZpemlvIGRpIHB1bGl6aWUgcGVyIGxhIGNhc2EsIGzigJl1ZmZpY2lvIG8gaWwgbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4NGZjZmVlOWQ2NzUyNDIzYTYxZTc5ZScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigxLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMSwgJ29mZicpXFxcIj5QcmVub3RhIFB1bGl6aWU8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0yXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1syXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5FbGV0dHJpY2lzdGE8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGVsZXR0cmljaXN0YSBxdWFsaWZpY2F0byBlIGFmZmlkYWJpbGUgcGVyIGxhdm9yaSBkaSBjYXNhLCB1ZmZpY2lvIG8gbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVlNDFkZjFiYWZhNDFjZGJmYjlkMScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigyLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMiwgJ29mZicpXFxcIj5QcmVub3RhIEVsZXR0cmljaXN0YTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmQgZ3JlZW4tY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtM1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbM119XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+SWRyYXVsaWNvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5UaSBzZXJ2ZSB1biBpZHJhdWxpY28gcHJvZmVzc2lvbmlzdGEsIHB1b2kgcHJlbm90YXJsbyBzdWJpdG8gc3UgU3RhcmJvb2sgc2VuemEgaW1wZWduby48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVkZmU0ZjFiYWZhNDFjZGJmYjljYicpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigzLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMywgJ29mZicpXFxcIj5QcmVub3RhIElkcmF1bGljbzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2VudGVyLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgIFJlbmRpIGxhIHR1YSB2aXRhIHBpw7kgZmFjaWxlLiBQcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2duby5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5Db21lIGZ1bnppb25hPzwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TZWxlemlvbmEgaSBzZXJ2aXppPC9kaXY+XFxuICAgICAgICAgIDxwPk9nbmkgY2F0ZWdvcmlhIGhhIHVuYSBsaXN0YSBkaSBzZXJ2aXppLiBTZWxlemlvbmEgcXVlbGxpIGRpIHF1aSBoYWkgYmlzb2duby48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5QcmVub3RhIHVuIGFwcHVudGFtZW50bzwvZGl2PlxcbiAgICAgICAgICA8cD5JbnNlcmlzY2kgaSBkYXRpIG5lY2Vzc2FyaSBkZWwgb3JkaW5lIGUgaW52aWEgbGEgcmljaGllc3RhLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+SW52aWEgcmljaGllc3RhPC9hPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnMtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtYmVsbFxcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudGluZ1xcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5SaWNldmkgbGEgY29uZmVybWEgZSByaWxhc3NhdGkhPC9kaXY+XFxuICAgICAgICAgIDxwPlVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBs4oCZb3JhIGRlbCBhcHB1bnRhbWVudG8uPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDE+TGUgcHJpbmNpcGFsaSBjaXR0w6A8L2gxPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTFcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VmFyZXNlPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+TWlsYW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VG9yaW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgY2hlIHRpIGRhIGxhIHBvc3NpYmlsaXTDoCBkaSBwcmVub3RhcmUgaSBwcm9mZXNzaW9uaXN0aSBuZWxsJ29yYSBlIGRhdGEgY2hlIHR1IGRlc2lkZXJpIHNlbnphIGRvdmVyIGNoaWFtYXJlIGUgbGFzY2lhcmUgYXBwdW50YW1lbnRpIHRyYW1pdGUgdGVsZWZvbm8gbyBlbWFpbC5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9