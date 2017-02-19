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
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
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
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(3);
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
            template: __webpack_require__(45)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(3);
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
            template: __webpack_require__(46)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__ = __webpack_require__(49);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__ = __webpack_require__(51);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(5);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_profile_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popups_popups_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_analytics_service__ = __webpack_require__(3);
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
    var CalendarModule = __webpack_require__(74).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(73).AutoCompleteModule;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(4);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(3);
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
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                setTimeout(function () {
                    this.swiper = new Swiper('.swiper-container', {
                        freeMode: true,
                        direction: 'horizontal',
                        slidesPerView: 'auto'
                    });
                }, 1);
            }
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(44)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__ = __webpack_require__(3);
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
            template: __webpack_require__(47),
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
            template: __webpack_require__(48)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(67);
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

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Controsoffitto in cartongesso, Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché usare Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\">\n      <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.selected}\" (click)=\"renderPage(tab.name)\">\n        <span></span>\n        <div>{{tab.name}}</div>\n      </a>\n    </div>\n    <div class=\"col-xl-12 orders-container\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"orders-error\" *ngIf=\"pageData.length === 0 && requestIsComplete\">{{emptyListTitle}}</div>\n      <div class=\"order-information\" *ngFor=\"let order of pageData\">\n        <div class=\"header\">\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richiesti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Archivio'\">\n            <span class=\"black\"></span> Scaduto\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 98 && selectTab === 'Archivio'\">\n            <span class=\"orange\"></span> Completato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'Archivio'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-name\">\n            {{ categories[order.category_type] }}\n          </div>\n          <div class=\"order-date\">\n            {{ dateFormating(order.date) }}\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"row\">\n            <div class=\"order-row products col-xl-4\">\n              <!-- <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service' && product.amount > 0\">€{{ product.amount / 100 }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service'\">{{ product.description }}</i></div>\n              <!-- <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Richieste dei clienti'\">\n              <div *ngIf=\"order.status===0\">\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cliente:</div>\n                <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cellulare:</div>\n                <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Email:</div>\n                <div class=\"field-value\">{{ order.customer.email }}</div>\n              </div>\n\n              <!-- <div *ngIf=\"order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div> -->\n\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'I miei ordini'\">\n              <div *ngIf=\"!order.merchant || order.merchant === null || order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>In attesa di conferma...</strong></div>\n                </div>\n              </div>\n              <div *ngIf=\"order.merchant && order.merchant !== null && order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Archivio'\">\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id !== order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id === order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.customer && order.customer !== null && (!order.merchant || order.merchant === null) && order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.status===99\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"order-row description col-xl-4\">\n              {{ order.description }}\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <div class=\"code\">\n            <span>CODICE:</span>\n            {{ order._id }}\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"completaOrder(order._id)\">Completa servizio</button>\n            <div class=\"price-block\"><div class=\"content-price\">Preventivo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\" (click)=\"editOrder(order._id, order.payment.amount)\">Modifica</button>-->\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"confirmOrder(order._id)\">Conferma servizio</button>\n\n            <!--<button class=\"btn btn-primary\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\" (click)=\"reactivateOrder(order._id)\">Reattiva servizio</button>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\" (click)=\"cancelOrder(order._id)\">Annulla servizio</button>-->\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-warning\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\" (click)=\"continueOrder(order._id, order.payment.amount)\"><i class=\"fa fa-lock\"></i> Procedi</button>-->\n            <!--<div class=\"price-block archive\" *ngIf=\"order.status === 3 && selectTab === 'Archivio'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<!-- <div class=\"loader\" *ngIf=\"isLoading\"></div> -->\n<div class=\"profile-page\" [ngClass]=\"{whiteBg: selectTab === 'conditions' || selectTab === 'privacy' || selectTab === 'help'}\">\n  <div class=\"container-starbook without-tabs\">\n    <div class=\"row\">\n      <div class=\"left-navigate\" (swipeleft)=\"swipe($event.type, $event.deltaX)\" (swiperight)=\"swipe($event.type, $event.deltaX)\">\n        <div [ngStyle]=\"{'margin-left.px': delta}\">\n          <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.url === selectTab}\" [routerLink]=\"['/profile', tab.url]\">\n            <span></span>\n            <div>{{tab.name}}</div>\n          </a>\n          <a *ngIf=\"isAuthenticated === true\" (click)=\"logout()\"><span></span><div>Esci</div></a>\n        </div>\n      </div>\n      <div class=\"profile-settings\" *ngIf=\"selectTab === 'settings'\">\n        <div class=\"header\">Informazioni del account</div>\n        <form #changProfile=\"ngForm\">\n          <app-loading *ngIf=\"isLoading\"></app-loading>\n          <label>NOME COMPLETO</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"name\" placeholder=\"Nome Cognome\" #fullname=\"ngModel\" [(ngModel)]=\"userData.fullname\" required>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<label>Cognome</label>-->\n            <!--<input class=\"form-control\" name=\"lastname\" #fullname=\"ngModel\" [(ngModel)]=\"userData.lastname\" required disabled>-->\n          <!--</div>-->\n          <!--<div class=\"form-group\">-->\n            <!--<label>Nome Azienda</label>-->\n            <!--<input class=\"form-control\" name=\"patronymic\" #fullname=\"ngModel\" [(ngModel)]=\"userData.patronymic\" required disabled>-->\n          <!--</div>-->\n          <label>CELLULARE</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"phone\" placeholder=\"Numero\" #phone_number=\"ngModel\" [(ngModel)]=\"userData.phone_number\">\n          </div>\n          <label>EMAIL</label>\n          <div class=\"form-group\">\n            <div class=\"email-field\">\n              <input class=\"form-control\" name=\"email\" placeholder=\"Indirizzo email\" value=\"\" #email=\"ngModel\" [(ngModel)]=\"userData.email\" required disabled>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\" disabled>Modifica password</button>\n            </div>\n          </div>\n          <!--<div class=\"form-group password-block\">-->\n            <!--<label>Password</label>-->\n            <!--<div class=\"password-container\">-->\n              <!--<div class=\"password\">-->\n                <!--<span>•••••••••••</span>-->\n              <!--</div>-->\n              <!--<div class=\"change-password\">-->\n                <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!-- <div class=\"header second\">Indirizzo di fatturazione</div> -->\n          <!-- <label>Indirizzo del domicilio</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"address1\" #street=\"ngModel\" [(ngModel)]=\"userData.street\" placeholder=\"Via Verdi 13\">\n          </div> -->\n          <!-- <label>Città e CAP</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"address2\" #city=\"ngModel\" [(ngModel)]=\"userData.city\" placeholder=\"Città\">\n            <input class=\"form-control second\" name=\"number2\" #postal_code=\"ngModel\" [(ngModel)]=\"userData.postal_code\" placeholder=\"CAP\">\n          </div> -->\n          <!-- <label>Provincia e Nazione</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"city\" #province=\"ngModel\" [(ngModel)]=\"userData.province\" placeholder=\"Provincia\">\n            <input class=\"form-control second\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"userData.country\" placeholder=\"Nazione\">\n          </div> -->\n          <!-- <label>Partita IVA</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"piva\" placeholder=\"P.IVA\">\n          </div> -->\n          <!-- <label>Codice Fiscale</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"codice\" placeholder=\"Codice Fiscale\">\n          </div> -->\n          <div class=\"profile-information\" *ngIf=\"formError\">\n            <strong *ngIf=\"formError.title.length > 0\">{{formError.title}}</strong> {{formError.message}}\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateProfile()\">Aggiorna Informazioni</button>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\"><span class=\"fa fa-sign-out\"></span> Log out</button>-->\n          <!--</div>-->\n        </form>\n      </div>\n      <div class=\"cards-page\" *ngIf=\"selectTab === 'payment'\">\n        <app-loading *ngIf=\"isLoading\"></app-loading>\n        <div class=\"card-block\" *ngFor=\"let card of cards\">\n          <div class=\"container\">\n            <div class=\"header\">\n              <div class=\"card-logo {{ formatCssClass(card.brand) }}\"><span>**** {{ card.last4 }}</span></div>\n              <div class=\"isDefault\" *ngIf=\"defaultCard === card.id\">Default</div>\n              <div class=\"buttons-block\">\n                <a class=\"btn btn-primary\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n                <a class=\"btn btn-primary\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n                <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n              </div>\n            </div>\n            <div class=\"content\">\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Nome:</span>\n                  {{ card.name }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Numero:</span>\n                  **** {{ card.last4 }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Scadenza:</span>\n                  {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Tipo:</span>\n                  {{ card.brand }} {{ card.funding }} {{ card.object }}\n                </div>\n              </div>\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Indirizzo:</span>\n                  {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                  {{ card.address_state }} {{ card.address_city }} <br>\n                  {{ card.address_zip }} {{ card.address_country }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <a class=\"new-card\" (click)=\"addNewCard()\">\n            Aggiungi un metodo di pagamento\n          </a>\n        </div>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'conditions'\">\n        <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n        <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n        <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n        <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n        <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n        <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n        <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n        <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n        <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n        <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n        <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n        <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n        <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n        <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n        <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n        <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n        <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n        <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n        <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n        <p><strong>5. SERVIZIO CLIENTI</strong></p>\n        <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n        <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n        <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n        <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n        <p><strong>6. LICENZA D’USO</strong></p>\n        <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n        <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n        <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n        <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n        <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n        <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n        <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n        <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'privacy'\">\n        <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n        <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n        <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n        <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n        2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n        2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n        2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n        2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n        2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'help'\">\n        <p>Hai bisogno di aiuto? <br>\n        Scrivi una mail harald.bregu@starbook.co e ti risponderemo nel più breve tempo possibile.</p>\n        <p>Vuoi entrare a far parte di STARBOOK? Aumenta il numero dei tuoi clienti paganti e risparmia sui costi del trasporto.</p>\n        <p>Per richiedere informazioni:</p>\n        <p>Cellulare: +39 3272415028<br>\n        Email: harald.bregu@starbook.co</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"dark-screen\" *ngIf=\"activePopup !== ''\" (click)=\"closePopup()\"></div>\n<!-- Change password -->\n<div class=\"popup\" *ngIf=\"activePopup === 'changePassword'\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Cambia password</div>\n  <form class=\"login-form\" #changePasswordForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.currentPassword}\">\n      <label for=\"currentPassword\">La tua password</label>\n      <input id=\"currentPassword\" class=\"form-control\" type=\"password\" name=\"currentPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.currentPassword\" #currentPassword=\"ngModel\">\n      <span class=\"error\">La tua password attuale è richiesta</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"newPassword\">Nuova password</label>\n      <input id=\"newPassword\" class=\"form-control\" type=\"password\" name=\"newPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.newPassword\" #newPassword=\"ngModel\">\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.passwordConfirm}\">\n      <label for=\"passwordConfirm\">Ripeti la nuova password</label>\n      <input id=\"passwordConfirm\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.passwordConfirm\" #passwordConfirm=\"ngModel\" (keyup)=\"checkPassword(newPassword.value, passwordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" [disabled]=\"!changePasswordForm.form.valid\" (click)=\"changePassword(currentPassword.value, newPassword.value, passwordConfirm.value)\">Cambia password</button>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">Si è verificato un errore!</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <div class=\"form-description\">\n      <span>Sei nuovo su Starbook?</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Nuovo account</a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div>\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi (collapse)\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = require("ng2-click-outside");

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("primeng/components/autocomplete/autocomplete");

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = require("primeng/components/calendar/calendar");

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGVmYTdkMDhmYTQyY2NkM2ExZWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItY2xpY2stb3V0c2lkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDSjtBQUNEO0FBR3pDO0lBWUU7UUFYUSxrQkFBYSxHQUFHLElBQUkscURBQU8sRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxxREFBTyxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLHFEQUFPLEVBQVcsQ0FBQztRQVM3QyxFQUFFLEVBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdELENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE9BQU87UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDhDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLEdBQUc7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixNQUFNO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFwQ0g7UUFBQyxnRkFBVSxFQUFFOzt5QkFBQTtJQXFDYix3QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3lDO0FBQ0k7QUFnQjlDO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBVSxHQUFWLFVBQVcsVUFBbUI7UUFDNUIsRUFBRSxFQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2IsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQWZIO1FBQUMsZ0ZBQVUsRUFBRTs7d0JBQUE7SUFpQmIsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDakNELDRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0Q7QUFHekM7SUFLRTtRQUpRLGdCQUFXLEdBQUcsSUFBSSxxREFBTyxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUl6QyxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFqQkg7UUFBQyxnRkFBVSxFQUFFOztxQkFBQTtJQWtCYixvQkFBQztBQUFELENBQUM7Ozs7Ozs7QUN0QkQsMEM7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNOO0FBRUE7QUFFcEMsb0VBQW9FO0FBR3BFO0lBR0UscUJBQW9CLElBQVUsbURBQWtEO1FBQTVELFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLFFBQVE7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUNELHVDQUFpQixHQUFqQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0Usb0RBQW9EO1FBQ3BELElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7YUFDM0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO2FBQ3RDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixxREFBcUQ7WUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBSztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDbkQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQzVDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIscURBQXFEO1FBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTVESDtRQUFDLGdGQUFVLEVBQUU7O21CQUFBO0lBNkRiLGtCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRTZDO0FBQ0o7QUFDb0I7QUFDckI7QUFDTDtBQWlCcEM7SUFPRSxzQkFBb0IsSUFBVSxtREFBa0Q7UUFBNUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQU50QixlQUFVLEdBQUcsSUFBSSxxREFBTyxFQUFVLENBQUM7UUFPekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLG1EQUFtRCxDQUFDO1FBQ3JFLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLG1DQUFZLEdBQXBCO1FBQ0UsSUFBSSxPQUFPLENBQUM7UUFDWixFQUFFLEVBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDbEIsT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLFNBQVM7UUFDakIsb0RBQW9EO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRTtZQUN6QyxVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVU7WUFDaEMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0I7WUFDM0MsT0FBTyxFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7WUFDbkMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRTtnQkFDUCxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07Z0JBQ3hCLGFBQWEsRUFBRSxTQUFTLENBQUMsYUFBYTtnQkFDdEMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNwQixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7Z0JBQ2xDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtnQkFDNUIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2dCQUMxQixZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVk7YUFDckM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFDaEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTthQUNyQztTQUNGLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3BCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxHQUFXO1FBQ3RCLG9EQUFvRDtRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLDhEQUFlLEVBQUUsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUseUNBQXlDLENBQUMsQ0FBQztRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQzthQUNuRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELElBQUksSUFBSSxHQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ25CLElBQUksV0FBVyxHQUFhO29CQUMxQixNQUFNLEVBQUUsRUFBRTtvQkFDVixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLFFBQVEsRUFBRSxFQUFFO29CQUNaLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxFQUFFO29CQUNoQixRQUFRLEVBQUUsS0FBSztvQkFDZixNQUFNLEVBQUUsS0FBSztvQkFDYixnQkFBZ0IsRUFBRSxFQUFFO2lCQUNyQixDQUFDO2dCQUVGLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVO29CQUM1QyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsS0FBSyxlQUFlOzRCQUNsQixXQUFXLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7NEJBQ2pELEtBQUssQ0FBQzt3QkFDUixLQUFLLE9BQU87NEJBQ1YsV0FBVyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDOzRCQUMxQyxLQUFLLENBQUM7d0JBQ1IsS0FBSyxVQUFVOzRCQUNiLFdBQVcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQzs0QkFDeEMsS0FBSyxDQUFDO3dCQUNSLEtBQUssNkJBQTZCOzRCQUNoQyxXQUFXLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7NEJBQzVDLEtBQUssQ0FBQzt3QkFDUixLQUFLLFNBQVM7NEJBQ1osV0FBVyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDOzRCQUMzQyxXQUFXLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7NEJBQ2pELEtBQUssQ0FBQzt3QkFDUixLQUFLLGFBQWE7NEJBQ2hCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztvQkFDbkQsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUV6RCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFDMUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQXBJSDtRQUFDLGdGQUFVLEVBQUU7O29CQUFBO0lBcUliLG1CQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKNkM7QUFDSjtBQUNOO0FBQ0E7QUFDb0I7QUFHeEQ7SUFHRSxxQkFBb0IsSUFBVSxFQUFVLGlCQUFvQztRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMxRSxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFpQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQztJQUVILENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsUUFBZ0I7UUFBckMsaUJBbUNDO1FBbENDLG9EQUFvRDtRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzthQUMxRSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHO29CQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVk7b0JBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7b0JBQ3hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7b0JBQzlCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7b0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7b0JBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDbEIsQ0FBQztnQkFFRixFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztvQkFDZCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNsQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxRQUFnQjtRQUFuRSxpQkFrQ0M7UUFqQ0Msb0RBQW9EO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQzthQUNoSCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHO29CQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hCLFlBQVksRUFBRSxFQUFFO29CQUNoQixhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhO29CQUN4QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO29CQUM5QixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO29CQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO29CQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO29CQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCLENBQUM7Z0JBRUYsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLEtBQWE7UUFBdEIsaUJBY0M7UUFiQyxvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDbEUsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLHFEQUFxRDtZQUNyRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBckhIO1FBQUMsZ0ZBQVUsRUFBRTs7bUJBQUE7SUF1SGIsa0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SDZDO0FBQ0o7QUFDb0I7QUFDMUI7QUFHcEM7SUFHRSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sb0NBQVksR0FBcEI7UUFDRSxJQUFJLE9BQU8sQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLG9EQUFvRDtRQUNwRCxJQUFJLGVBQWUsR0FBRyxJQUFJLDhEQUFlLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNuQixlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFDLENBQUM7YUFDL0YsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksRUFBRSxFQUFFLElBQUk7UUFDbEIsb0RBQW9EO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDLENBQUM7YUFDMUYsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztRQUN0QixvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQzthQUN0SSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixxREFBcUQ7UUFDckQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBdEVIO1FBQUMsZ0ZBQVUsRUFBRTs7cUJBQUE7SUF1RWIsb0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTZDO0FBQ0o7QUFDRztBQUNUO0FBUXBDO0lBR0Usd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLFFBQUcsR0FBRyxpQ0FBaUMsQ0FBQztJQUVkLENBQUM7SUFFM0IscUNBQVksR0FBcEI7UUFDRSxJQUFJLE9BQU8sQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNsQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMzQixNQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTthQUN0QyxFQUFFLFVBQUMsTUFBYyxFQUFFLFFBQWE7Z0JBQy9CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLGNBQWMsR0FBbUI7d0JBQ25DLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO3FCQUNwQixDQUFDO29CQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwyQ0FBa0IsR0FBekIsVUFBMEIsVUFBVTtRQUNsQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLG1DQUFVLEdBQWpCLFVBQWtCLFFBQVE7UUFBMUIsaUJBYUM7UUFaQyxvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxVQUFDLElBQW9CO1lBQ3pCLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNsRixTQUFTLEVBQUU7aUJBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixxREFBcUQ7Z0JBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsTUFBTTtRQUN0QixvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsY0FBYyxFQUFFLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxFQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsTUFBTTtRQUN0QixvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEUsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlDQUFRLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLFFBQVE7UUFDOUIsb0RBQW9EO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsR0FBRyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNoRixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDL0QsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbkhIO1FBQUMsZ0ZBQVUsRUFBRTs7c0JBQUE7SUFxSGIscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IaUQ7QUFFK0I7QUFHakY7SUFFRSxvQkFBc0MsU0FBYztRQUFkLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFENUMsU0FBSSxHQUFlLHVGQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUV6RCw2QkFBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLO0lBQzlCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksSUFBWSxFQUFFLEtBQWE7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBMEIsQ0FBQztRQUM5RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUVILENBQUM7UUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW9CLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBMEIsQ0FBQztRQUM5RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFnQixDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUVILENBQUM7UUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQW9CLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFqREg7UUFBQyxnRkFBVSxFQUFFO21CQUdFLDRFQUFNLENBQUMsbUVBQVEsQ0FBQzs7a0JBSGxCO0lBa0RiLGlCQUFDO0FBQUQsQ0FBQzs7Ozs7OztBQ3RERCwyQzs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDd0M7QUFFMUM7QUFDUztBQUNXO0FBRU87QUFDVDtBQUNaO0FBNkRsRDtJQThDRSxzREFBc0Q7SUFDdEQsbURBQW1EO0lBRW5ELHVCQUFvQixXQUF3QixFQUFVLGlCQUFvQyxFQUFVLE1BQWMsRUFBVSxLQUFxQixFQUFVLFlBQTBCLEVBQVUsZ0JBQWtDLEVBQVUsVUFBc0I7UUFBN08sZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQS9DMVAsZUFBVSxHQUFHO1lBQ2xCLEtBQUssRUFBRSxDQUFDO1lBQ1IsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBQ0sscUJBQWdCLEdBQUc7WUFDeEIsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUNLLGFBQVEsR0FBRztZQUNoQixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0ssZUFBVSxHQUFHLENBQUMsQ0FBQztRQUdmLHlCQUFvQixHQUEyQixFQUFFLENBQUM7UUFDbEQsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsMEJBQXFCLEdBQW1CLEtBQUssQ0FBQztRQUM5Qyw4QkFBeUIsR0FBbUIsS0FBSyxDQUFDO1FBRWxELGNBQVMsR0FBRztZQUNqQixVQUFVLEVBQUUsRUFBRTtZQUNkLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsQ0FBQzthQUNmO1lBQ0QsYUFBYSxFQUFFO2dCQUNiLFVBQVUsRUFBRSxDQUFDO2dCQUNiLGVBQWUsRUFBRSxFQUFFO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztRQUNLLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztRQUMxRCxVQUFLLEdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQVN6QixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLFFBQW1CO1FBQTlCLGlCQXVGQztRQXRGQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsbUNBQW1DLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSx1SEFBdUgsQ0FBQyxDQUFDO1FBQy9KLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLHVIQUF1SCxDQUFDLENBQUM7UUFFMUssSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQjtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsUUFBUSxDQUFDLFNBQVM7Z0JBQ3pCLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVztnQkFDakMsT0FBTyxFQUFFLEVBQUU7YUFDWjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHO1lBQ3hCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztZQUNyQixhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWE7WUFDckMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVztTQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDeEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQzFCLHFCQUFxQjtZQUNyQixJQUFJLE9BQWUsQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxJQUFJLFdBQVcsR0FBaUI7Z0JBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsT0FBTyxFQUFHLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsT0FBTyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBRUYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBc0I7Z0JBQzFDLHFCQUFxQjtnQkFDckIsSUFBSSxPQUFlLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDekIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxJQUFJLE1BQU0sR0FBRztvQkFDWCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixPQUFPLEVBQUUsT0FBTztvQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEIsQ0FBQztnQkFFRixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN6QyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsUUFBUSxFQUFHLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sRUFBRyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxXQUFXLEVBQUUsUUFBUTtRQUFuQyxpQkEwQ0M7UUF6Q0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksUUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDakMsRUFBRSxDQUFDLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDOUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dDQUNuQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUM7NEJBQzVHLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO2dDQUN2RyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0NBQ3hFLENBQUM7NEJBQ0gsQ0FBQzt3QkFDSCxDQUFDO3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3RELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztnQ0FDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO2dDQUMxRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUNsQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxZQUFZLENBQUM7NEJBQ3hFLENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO2dDQUN2RyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxZQUFZLENBQUM7NEJBQ3hFLENBQUM7d0JBQ0gsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztnQ0FDMUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7NEJBQ3pHLENBQUM7NEJBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsWUFBWSxDQUFDO3dCQUN4RSxDQUFDO29CQUNILENBQUM7b0JBQ0QsUUFBTSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLE1BQU0sRUFBRSxRQUFRO1FBQ2hDLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBTSxFQUFFLFFBQVE7UUFDMUIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUVwRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xFLENBQUM7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixNQUFNO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsV0FBVztRQUEzQixpQkFZQztRQVhDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDaEMsRUFBRSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxRQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDOUQsUUFBTSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBeUZDO1FBeEZDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssdUJBQXVCLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztvQ0FDN0IsSUFBSSxFQUFFLHVCQUF1QjtvQ0FDN0IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJO29DQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0NBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQ0FDcEIsQ0FBQyxDQUFDOzRCQUNMLENBQUM7d0JBQ0gsQ0FBQzt3QkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs0QkFDOUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dDQUMxQixJQUFJLEVBQUUsa0JBQWtCO2dDQUN4QixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0NBQ3ZCLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVztnQ0FDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzZCQUNwQixDQUFDLENBQUM7d0JBQ0wsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQ3pDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ25FLENBQUM7d0JBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7NEJBQ25ELEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQ0FDNUIsSUFBSSxFQUFFLHVCQUF1QjtnQ0FDN0IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dDQUN2QixHQUFHLEVBQUUsQ0FBQztnQ0FDTixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07NkJBQ3BCLENBQUMsQ0FBQzt3QkFDTCxDQUFDO3dCQUVELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dDQUMxQixJQUFJLEVBQUUsUUFBUTtnQ0FDZCxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0NBQ3ZCLEdBQUcsRUFBRSxDQUFDO2dDQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTs2QkFDcEIsQ0FBQyxDQUFDO3dCQUNMLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDSCxTQUFTLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUNoRSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ2pFLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25GLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDOUQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztZQUM5RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUFBLGlCQXVFQztRQXRFQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3ZELElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDaEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7NEJBQ3JCLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSzs0QkFDbkIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVOzRCQUM5QixNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2dDQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07NkJBQ25CO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLGlCQUFpQixDQUFDLElBQUksQ0FBQzs0QkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLOzRCQUNuQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7NEJBQzlCLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0NBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTs2QkFDbkI7eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUM7Z0JBQ0gsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLHVCQUF1QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDOzRCQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUs7NEJBQ25CLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTs0QkFDOUIsTUFBTSxFQUFFO2dDQUNOLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztnQ0FDdEIsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVU7Z0NBQzFELE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWTs2QkFDMUI7eUJBQ0YsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZFLGlCQUFpQixDQUFDLElBQUksQ0FBQzs0QkFDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLOzRCQUNuQixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7NEJBQzlCLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0NBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXOzZCQUN0Qzt5QkFDRixDQUFDLENBQUM7b0JBQ0wsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDSCxTQUFTLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDO0lBRUMsbUZBQW1GO0lBQ25GLDZCQUE2QjtJQUM3Qix3REFBd0Q7SUFDeEQsMkJBQTJCO0lBQzNCLCtDQUErQztJQUMvQyx3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLGdDQUFnQztJQUNoQyx3REFBd0Q7SUFDeEQsb0RBQW9EO0lBQ3BELHlJQUF5STtJQUN6SSxxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUVOLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QiwwREFBMEQ7SUFDMUQsbURBQW1EO0lBQ25ELDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsbURBQW1EO0lBQ25ELDZFQUE2RTtJQUM3RSxxQkFBcUI7SUFDckIsZ0RBQWdEO0lBQ2hELGtDQUFrQztJQUNsQyxxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsUUFBUTtJQUNSLEVBQUU7SUFDRiw2Q0FBNkM7SUFDN0MsMEJBQTBCO0lBQzFCLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsUUFBUTtJQUNSLEVBQUU7SUFDRix3Q0FBd0M7SUFDeEMsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsTUFBTTtJQUNOLElBQUk7SUFFSiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGlFQUFpRTtJQUNqRSw0Q0FBNEM7SUFDNUMsbUVBQW1FO0lBQ25FLFFBQVE7SUFDUixRQUFRO0lBQ1IsSUFBSTtJQUVKLDJCQUEyQjtJQUMzQixnRkFBZ0Y7SUFDaEYscUNBQXFDO0lBQ3JDLG1EQUFtRDtJQUNuRCxRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUk7SUFFSix1Q0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLLElBQUksNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNoQyxXQUFXLEVBQUUsR0FBRztnQkFDaEIsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxzQ0FBc0M7UUFDdEMsb0JBQW9CO1FBQ3BCLDJEQUEyRDtRQUMzRCxzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLGVBQWU7UUFDZix3Q0FBd0M7UUFDeEMsUUFBUTtRQUNSLE1BQU07UUFDTixNQUFNO1FBVlIsaUJBdUZDO1FBM0VDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHVJQUF1SSxDQUFDLENBQUM7UUFDcEwsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLGtEQUFrRCxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsdUlBQXVJLENBQUMsQ0FBQztRQUNyTCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsdUhBQXVILENBQUMsQ0FBQztRQUMvSixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSx1SEFBdUgsQ0FBQyxDQUFDO1FBRTFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUNoQyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUIsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsVUFBVSxDQUFDOzRCQUNULElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0NBQ2hDLFdBQVcsRUFBRSxHQUFHO2dDQUNoQixZQUFZLEVBQUUsaUJBQWlCO2dDQUMvQixNQUFNLEVBQUUsRUFBRTtnQ0FDVixVQUFVLEVBQUUsSUFBSTtnQ0FDaEIsU0FBUyxFQUFFLElBQUk7NkJBQ2hCLENBQUMsQ0FBQzt3QkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ1IsQ0FBQztnQkFDSCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzt5QkFDckMsSUFBSSxDQUFDLFVBQUMsSUFBSTt3QkFDVCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxXQUFTLEVBQUMsQ0FBQyxDQUFDO3dCQUN4SCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsVUFBVSxDQUFDO2dDQUNULElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQ0FDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7b0NBQ2hDLFdBQVcsRUFBRSxHQUFHO29DQUNoQixZQUFZLEVBQUUsaUJBQWlCO29DQUMvQixNQUFNLEVBQUUsRUFBRTtvQ0FDVixVQUFVLEVBQUUsSUFBSTtvQ0FDaEIsU0FBUyxFQUFFLElBQUk7aUNBQ2hCLENBQUMsQ0FBQzs0QkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1IsQ0FBQzt3QkFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDekIsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7d0JBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFFVCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxlQUFLO2dCQUNsRSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG1DQUFtQztRQUNuQyxzQkFBc0I7UUFDdEIsMENBQTBDO1FBQzFDLE9BQU87UUFDUCx3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLFFBQVE7UUFFUiw4RUFBOEU7UUFDOUUsMENBQTBDO1FBQzFDLHNDQUFzQztRQUN0QyxNQUFNO0lBQ1IsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxtQ0FBbUM7SUFDckMsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsd0JBQXdCO0lBQ3hCLDJEQUEyRDtJQUMzRCx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsbURBQW1EO0lBQ25ELHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtJQUNWLHVDQUF1QztJQUN2Qyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLDZDQUE2QztJQUM3QyxxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELDJDQUEyQztJQUMzQywyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1REFBdUQ7SUFDdkQsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLElBQUk7SUFFSix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLDBEQUEwRDtJQUMxRCw2QkFBNkI7SUFDN0Isd0RBQXdEO0lBQ3hELDhCQUE4QjtJQUM5QixzREFBc0Q7SUFDdEQsdURBQXVEO0lBQ3ZELHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLElBQUk7SUFFSixtREFBbUQ7SUFDbkQscUJBQXFCO0lBQ3JCLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsdUVBQXVFO0lBQ3ZFLHNEQUFzRDtJQUN0RCw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBQzFDLFFBQVE7SUFDUixnRkFBZ0Y7SUFDaEYsMERBQTBEO0lBQzFELDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsOENBQThDO0lBQzlDLDBFQUEwRTtJQUMxRSx3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0lBQ1IsTUFBTTtJQUNOLElBQUk7SUFFSixvQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUFsQixpQkFLQztRQUpDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUNoQyxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUE1cUJIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlDQUFvQztTQUNyQyxDQUFDOztxQkFBQTtJQTBxQkYsb0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5dUIyRDtBQUNPO0FBQ1I7QUFDQTtBQUVNO0FBQ25CO0FBc0M5QztJQXFCRSx5QkFBb0IsaUJBQW9DLEVBQVUsYUFBNEIsRUFBVSxhQUE0QixFQUFVLGdCQUFrQztRQUE1SixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFuQnpLLGNBQVMsR0FBbUIsS0FBSyxDQUFDO1FBQ2xDLGFBQVEsR0FBRztZQUNoQix1QkFBdUIsRUFBRSx1QkFBdUI7WUFDaEQsZUFBZSxFQUFFLGVBQWU7WUFDaEMsVUFBVSxFQUFFLDhCQUE4QjtTQUMzQyxDQUFDO1FBQ0ssU0FBSSxHQUFHO1lBQ1osRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7U0FDcEMsQ0FBQztRQUNLLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLEVBQUU7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRytKLENBQUM7SUFFckwsa0NBQVEsR0FBUjtRQUFBLGlCQTZHQztRQTVHQyxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRzt3QkFDVixFQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO3dCQUNoRCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQzt3QkFDeEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7cUJBQ3BDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBR0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxnQkFBTTtnQkFDdkUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSyxjQUFjO3dCQUNqQixVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUzs0QkFDOUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDdkMsQ0FBQzs0QkFDRCxVQUFVLEVBQUUsQ0FBQzt3QkFDZixDQUFDLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUM7b0JBQ1IsS0FBSyxhQUFhO3dCQUNoQixVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUzs0QkFDOUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDeEMsQ0FBQzs0QkFDRCxVQUFVLEVBQUUsQ0FBQzt3QkFDZixDQUFDLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUM7b0JBQ1IsS0FBSyxpQkFBaUI7d0JBQ3BCLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTOzRCQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUN2QyxDQUFDOzRCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNmLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQztvQkFDUixLQUFLLFVBQVU7d0JBQ2IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQ2pDLENBQUM7NEJBQ0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2xDLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sVUFBVSxHQUFHLENBQUMsQ0FBQzs0QkFDZixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0NBQzlCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29DQUMxQyx3Q0FBd0M7b0NBQ3hDLHlGQUF5RjtvQ0FDekYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxDQUFDO2dDQUNELFVBQVUsRUFBRSxDQUFDOzRCQUNmLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUM7d0JBQ0QsS0FBSyxDQUFDO29CQUNSLEtBQUssV0FBVzt3QkFDZCxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUzs0QkFDOUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQ0FDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dDQUNsRSxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOzRCQUNyRCxDQUFDOzRCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNmLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQztvQkFDUixLQUFLLGVBQWU7d0JBQ2xCLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTOzRCQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNyQyxDQUFDOzRCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNmLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQztnQkFDVixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNSLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUN4RixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDaEUsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3ZELFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7WUFDckUsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDdEcsQ0FBQztJQUNKLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQUk7UUFBZixpQkFzREM7UUFyREMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQztZQUNELFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcseURBQXlEO1lBQy9FLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLCtCQUErQjtZQUNyRCxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQ0FBaUM7WUFDdkQsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ3pILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDbEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxVQUFVLElBQUksSUFBSSxDQUFDO1lBQ25CLFVBQVUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNyRCxVQUFVLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFDL0MsVUFBVSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ3JELFVBQVUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUMzRCxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFJLE9BQU8sR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNsRixDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDakYsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEVBQUU7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBQ0QscUNBQVcsR0FBWCxVQUFZLEVBQUU7UUFDWixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QseUNBQWUsR0FBZixVQUFnQixFQUFFO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELHVDQUFhLEdBQWIsVUFBYyxFQUFFO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxFQUFFLEVBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCx1Q0FBYSxHQUFiLFVBQWMsRUFBRSxFQUFFLE9BQU87UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFDbkksQ0FBQztJQXpRSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixpQ0FBc0M7U0FDdkMsQ0FBQzs7dUJBQUE7SUF1UUYsc0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFQyRDtBQUNDO0FBQ1U7QUFDSjtBQUNSO0FBQ0U7QUFFSTtBQUNaO0FBQ1A7QUFrQjlDO0lBd0NFLDBCQUNZLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxpQkFBb0MsRUFDcEMsS0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsZ0JBQWtDLEVBQ2xDLFVBQXNCO1FBUHRCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBL0MzQixjQUFTLEdBQW1CLEtBQUssQ0FBQztRQUNsQyxpQkFBWSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDMUQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQUc7WUFDWixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQztZQUM5RCxFQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUM7WUFDbkUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDO1lBQ3pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUM7U0FDbkQsQ0FBQztRQUVLLGFBQVEsR0FBYztZQUMzQixRQUFRLEVBQUUsRUFBRTtZQUNaLEtBQUssRUFBRSxFQUFFO1lBQ1QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUssZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsd0JBQW1CLEdBQUc7WUFDM0IsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZUFBZSxFQUFFLEtBQUs7U0FDdkIsQ0FBQztRQUNLLHVCQUFrQixHQUFHO1lBQzFCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsZUFBZSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztRQUNLLGNBQVMsR0FBNkQsS0FBSyxDQUFDO1FBQzVFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBWS9CLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBNEpDO1FBM0pDLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDOUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QiwrQkFBK0I7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsRUFBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFDO29CQUNuRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7b0JBQ3pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUM7aUJBQ25ELENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsRUFBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFDO2dCQUNuRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUM7Z0JBQ3pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUM7YUFDbkQsQ0FBQztRQUNKLENBQUM7UUFDRCwwREFBMEQ7UUFFMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFNO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO3FCQUN6QixJQUFJLENBQUMsVUFBQyxLQUFLO29CQUNWLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNkLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFdBQVMsRUFBQyxDQUFDLENBQUM7b0JBQzFILENBQUM7b0JBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO29CQUN4QyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTt3QkFDbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUkzQixDQUFDO29CQUNELDhCQUE4QjtvQkFDOUIseUdBQXlHO29CQUN6RyxXQUFXO29CQUNYLDRHQUE0RztvQkFDNUcsSUFBSTtnQkFDTixDQUFDLENBQUM7WUFDUixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFDckUsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksV0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7cUJBQzNCLElBQUksQ0FBQyxVQUFDLE9BQU87b0JBQ1osRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsV0FBUyxFQUFDLENBQUMsQ0FBQztvQkFDekgsQ0FBQztvQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ3pELEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNyRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2pELEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDL0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFDLEVBQUMsQ0FBQyxDQUFDO29CQUN0RyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxFQUFDLENBQUMsQ0FBQztvQkFDekcsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNULENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUN4RSxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsdUlBQXVJLENBQUMsQ0FBQztnQkFDcEwsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxDQUFDLENBQUM7Z0JBQ3pFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLHVJQUF1SSxDQUFDLENBQUM7Z0JBQ3JMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO2dCQUNoRSxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsdUhBQXVILENBQUMsQ0FBQztnQkFDL0osS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsdUhBQXVILENBQUMsQ0FBQztZQUM1SyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHVJQUF1SSxDQUFDLENBQUM7Z0JBQ3BMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSx1SUFBdUksQ0FBQyxDQUFDO2dCQUNyTCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztnQkFDaEUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLHVIQUF1SCxDQUFDLENBQUM7Z0JBQy9KLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLHVIQUF1SCxDQUFDLENBQUM7WUFDNUssQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHVJQUF1SSxDQUFDLENBQUM7Z0JBQ3BMLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsdUlBQXVJLENBQUMsQ0FBQztnQkFDckwsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLDBCQUEwQixDQUFDLENBQUM7Z0JBQ2hFLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSx1SEFBdUgsQ0FBQyxDQUFDO2dCQUMvSixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSx1SEFBdUgsQ0FBQyxDQUFDO1lBQzVLLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFFZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFNO2dCQUN2RSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDcEIsS0FBSyxTQUFTO3dCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLEtBQUssQ0FBQztvQkFDUixLQUFLLGNBQWM7d0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxjQUFjO3dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFDdEIsS0FBSyxDQUFDO29CQUNSLEtBQUssWUFBWTt3QkFDZixJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOzRCQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUM5QixDQUFDOzRCQUNELEdBQUMsRUFBRSxDQUFDO3dCQUNOLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxRQUFRO3dCQUNYLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNkLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQ0FDMUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDbEMsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixLQUFLLENBQUM7Z0JBQ1YsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzdDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDVCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQzFILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNkLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3hELFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO3dCQUNuRCxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO3dCQUNuRCxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO3dCQUN6RCxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzt3QkFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQ2pELFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQ3ZCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDekQsQ0FBQztnQkFDSCxDQUFDO2dCQUVELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRztvQkFDZixLQUFLLEVBQUUsRUFBRTtvQkFDVCxPQUFPLEVBQUUsa0RBQWtEO29CQUMzRCxJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQyxDQUFDLENBQUM7UUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLGVBQWUsRUFBRSxXQUFXLEVBQUUsZUFBZTtRQUMxRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsV0FBVyxFQUFFLGVBQWU7UUFDeEMsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sTUFBZ0MsRUFBRSxLQUFLO1FBQXZDLHNCQUFnQyxHQUFoQyxTQUFTLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztRQUNwQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0MsSUFBSSxRQUFRLEdBQVEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFFLElBQUksV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBYyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEVBQUUsQ0FBQyxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO29CQUMzQixDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7Z0JBQzlCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLElBQUk7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixZQUFZLElBQUksR0FBRyxDQUFDO1lBQ3RCLENBQUM7WUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQVUsR0FBVixVQUFXLEVBQUU7UUFBYixpQkFhQztRQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDckgsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzNDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsQ0FBQztZQUNwRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsRUFBRTtRQUFiLGlCQThCQztRQTdCQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUNwSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELENBQUMsRUFBRyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFdBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixXQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVMsQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RHLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxFQUFFO1FBQVgsaUJBcUJDO1FBcEJDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDdEIsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsUUFBUSxHQUFHO29CQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7b0JBQy9CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtvQkFDckMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO29CQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7b0JBQ2pDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLFFBQVEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ3hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLO29CQUM1QixHQUFHLEVBQUUsS0FBSztpQkFDWCxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBamFIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGlDQUF1QztTQUN4QyxDQUFDOzt3QkFBQTtJQStaRix1QkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hiNkM7QUFDSjtBQUNHO0FBQ1Q7QUFHcEM7SUFHRSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8scUNBQVksR0FBcEI7UUFDRSxJQUFJLE9BQU8sQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxNQUFNLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ3BCLG9EQUFvRDtRQUNwRCxJQUFJLElBQUksR0FBRztZQUNULFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixZQUFZLEVBQUUsUUFBUSxDQUFDLFlBQVk7WUFDbkMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3ZCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7WUFDakMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztTQUMxQixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDN0QsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLHFEQUFxRDtZQUNyRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IscURBQXFEO1lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBM0RIO1FBQUMsZ0ZBQVUsRUFBRTs7c0JBQUE7SUE0RGIscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7OztBQ2pFRCw4Qzs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHdUI7QUFDUztBQUNKO0FBQ0E7QUFDTTtBQUNRO0FBQ2xCO0FBQ0k7QUFFMEI7QUFDUjtBQUNHO0FBQ087QUFDaEI7QUFFeEMsTUFBTTtBQUVOLElBQU0sR0FBRyxHQUFJLHFDQUFPLEVBQUUsQ0FBQztBQUN2QixJQUFNLElBQUksR0FBRywwQ0FBUyxDQUFDLDZDQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQztBQUU1Qzs7R0FFRztBQUNILEVBQUUsQ0FBQyxDQUFDLCtFQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQixvRkFBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsNEZBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLDBDQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFL0Isb0NBQW9DO0FBQ3BDLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixNQUFNO0FBQ04sRUFBRTtBQUNGLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0Msc0ZBQXNGO0FBQ3RGLGFBQWE7QUFDYixhQUFhO0FBQ2IsTUFBTTtBQUNOLEtBQUs7QUFHTDs7R0FFRztBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMseUNBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkI7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSwrQ0FBYyxDQUFDLDBDQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztBQUV4RTs7R0FFRztBQUNILHdCQUF3QjtBQUV4Qjs7OztHQUlHO0FBQ0gsZUFBZSxHQUFRLEVBQUUsR0FBUTtJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNsQixRQUFHO1FBQ0gsUUFBRztRQUNILFFBQVEsRUFBRSx3RUFBUztRQUNuQixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxHQUFHO1FBQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO1FBQzNCLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQiwrREFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFLO0lBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxLQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEtBQUssT0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQVEsRUFBRSxHQUFRO0lBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsSUFBTSxJQUFJLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsQ0FBQztJQUNsRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFHSCw2Q0FBNkM7QUFDN0Msa0RBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUNILElBQUksT0FBTyxHQUFHO0lBQ1osR0FBRyxFQUFFLGdEQUFlLENBQUMsU0FBUyxHQUFHLGVBQWUsRUFBRSxNQUFNLENBQUM7SUFDekQsSUFBSSxFQUFFLGdEQUFlLENBQUMsU0FBUyxHQUFHLGtCQUFrQixFQUFFLE1BQU0sQ0FBQztDQUM5RCxDQUFDO0FBQ0YsdURBQXVEO0FBQ3ZELDBDQUEwQztBQUMxQyxNQUFNO0FBRU4sMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxNQUFNOzs7Ozs7OztBQ3pITjs7R0FFRztBQUVILG9CQUFvQjtBQUNwQixJQUFJLFlBQVksR0FBUSxtQkFBTyxDQUFDLEVBQW1CLENBQUMsQ0FBQztBQUVyRCxJQUFJLGdCQUFnQixHQUFRLG1CQUFPLENBQUMsQ0FBZSxDQUFDLENBQUM7QUFDckQsSUFBSSxLQUFLLEdBQVksS0FBSyxDQUFDO0FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2IsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztBQUM3RCxDQUFDO0FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixHQUFHO1FBQ2xDLGVBQWUsRUFBRSxZQUFZLENBQUMsZUFBZTtRQUM3QyxXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7S0FDeEM7QUFDTCxDQUFDO0FBRUQsSUFBSSxhQUFhLEdBQVEsbUJBQU8sQ0FBQyxFQUE0QyxDQUFDLENBQUM7QUFDL0UsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNSLGFBQWEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ3RELGFBQWEsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVc7SUFDcEQsYUFBYSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZTtBQUNoRSxDQUFDOzs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFBOztHQUVHO0FBRUgsb0JBQW9CO0FBQ3BCLElBQUksWUFBWSxHQUFHLG1CQUFPLENBQUMsRUFBbUIsQ0FBQyxDQUFDO0FBQ3dCO0FBQ3hCO0FBQ2hELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLCtEQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2IsK0RBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsK0RBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQUlELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsZUFBZSxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNFLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixHQUFHO1FBQ2xDLGVBQWUsRUFBRSxZQUFZLENBQUMsZUFBZTtRQUM3QyxXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7S0FDeEM7QUFDTCxDQUFDO0FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNSLElBQUksYUFBYSxHQUFHLG1CQUFPLENBQUMsRUFBNEMsQ0FBQyxDQUFDO0lBQzFFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsK0RBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsYUFBYSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUM7SUFDbEYsYUFBYSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsZUFBZSxJQUFJLFlBQVksQ0FBQyxlQUFlLENBQUM7QUFDbEcsQ0FBQztBQUVELHVCQUF1QjtBQUN2QixtQ0FBbUMsU0FBaUIsSUFBYSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakgsdUZBQTRCLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQztBQUluQjtBQUM5RSw0QkFBNEIsY0FBbUI7SUFDN0MsTUFBTSxDQUFDLElBQUksd0VBQWUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFDRCw0RUFBbUIsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDO0FBQ25FLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDb0I7QUFDYztBQUNrQjtBQUUzQjtBQUNZO0FBQ1I7QUFFTjtBQU9qRDtJQWdCRSxxQ0FBcUM7SUFFckMsc0JBQW9CLE1BQWEsRUFBVSxLQUFxQixFQUFVLFdBQXdCLEVBQVUsaUJBQW9DLEVBQVUsYUFBNEIsRUFBVSxXQUF3QjtRQWxCMU4saUJBb0lDO1FBbEhxQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZmpOLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTyxHQUFHLDZEQUFTLENBQUM7UUFNekIsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQzFCLFVBQUMsS0FBVztnQkFDVixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksOERBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDbkMsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDO3dCQUM5QyxZQUFZLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDMUIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDM0IsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQU87Z0JBQ3RFLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixLQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQUk7Z0JBQzVFLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUlELDRGQUE0RjtRQUM1Riw2QkFBNkI7UUFDN0IsTUFBTTtJQUNSLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsVUFBa0I7UUFBbEIsMEJBQWtCLEdBQWxCLGtCQUFrQjtRQUM5QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sS0FBSztRQUFaLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDWixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxXQUFXO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxFQUFFLEVBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsMENBQTBDO0lBQzVDLENBQUM7SUF2SUg7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUNBQW1DO1NBQ3BDLENBQUM7O29CQUFBO0lBcUlGLG1CQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSW1EO0FBQzJCO0FBQ2Q7QUFFakI7QUFFTTtBQUlmO0FBQ1U7QUFDRTtBQUNDO0FBQ0s7QUFDTTtBQUNSO0FBQ0E7QUFDRTtBQUNJO0FBQ1o7QUFFSDtBQUNPO0FBQ0c7QUFDUztBQUNHO0FBQ1Q7QUFDYjtBQUNzQjtBQUNwQjtBQUNxQjtBQUdyRSxrREFBa0Q7QUFDbEQsaURBQWlEO0FBRWpELDJEQUEyRDtBQUMzRCx3QkFBd0I7QUFDeEIsOENBQThDO0FBQzlDLE9BQU87QUFDUCxJQUFJO0FBRUosSUFBSSxPQUFPLEdBQUc7SUFDWixrRUFBYztJQUNkLG1FQUFlO0lBQ2YsMkRBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUVBQW1CO0lBQ25CLGlCQUFpQjtJQUVqQiw2REFBWTtJQUNaLDZEQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUVBQWtCO0NBQ25CLENBQUM7QUFDRixJQUFJLFlBQVksR0FBRztJQUNqQixxRUFBWTtJQUNaLDRFQUFhO0lBQ2IsK0VBQWM7SUFDZCx3RkFBZTtJQUNmLDJGQUFnQjtJQUNoQixrRkFBZTtJQUNmLHFFQUFTO0lBQ1QsMkZBQWdCO0lBQ2hCLHVFQUFVO0lBQ1YsNEZBQWdCO0NBQ2pCLENBQUM7QUFFRixFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztJQUNkLElBQUksY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBc0MsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLElBQUksa0JBQWtCLEdBQUcsbUJBQU8sQ0FBQyxFQUE4QyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDcEcsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFDRCxJQUFJLENBQUMsQ0FBQztJQUNKLElBQUkscUJBQXFCLEdBQUcsbUJBQU8sQ0FBQyxFQUE0QixDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDeEYsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pDLElBQUksc0JBQXNCLEdBQUcsbUJBQU8sQ0FBQyxFQUFnQyxDQUFDLENBQUMseUJBQXlCLENBQUM7SUFDakcsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRDs7R0FFRztBQXlCSDtJQUFBO0lBRUEsQ0FBQztJQTFCRDtRQUFDLDhFQUFRLENBQUM7WUFDUix5QkFBeUI7WUFDekIsU0FBUyxFQUFFLENBQUUscUVBQVksQ0FBRTtZQUMzQixxQkFBcUI7WUFDckIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsT0FBTyxFQUFFLE9BQU87WUFDaEIsU0FBUyxFQUFFO2dCQUNULGlGQUFpRjtnQkFDakYsSUFBSTtnQkFDSixvQ0FBb0M7Z0JBQ3BDLDJCQUEyQjtnQkFDM0IsS0FBSztnQkFDTCx1RUFBVztnQkFDWCx5RUFBVztnQkFDWCwwRUFBWTtnQkFDWiwrRUFBYztnQkFDZCxzRkFBaUI7Z0JBQ2pCLDhFQUFhO2dCQUNiLDhFQUFhO2dCQUNiLGdGQUFjO2dCQUNkLG9GQUFnQjtnQkFDaEIsd0VBQVU7YUFDWDtTQUNGLENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pIcUQ7QUFFRDtBQUNZO0FBQ0c7QUFHcEUsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSwyRUFBYTtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLDJFQUFhO1FBQ3hCLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUM7S0FDMUI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLHVGQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsZUFBZTtRQUNyQixTQUFTLEVBQUUsMEZBQWdCO0tBQzVCO0NBQ0YsQ0FBQztBQUVLLElBQU0sT0FBTyxHQUF3Qiw2REFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmI7QUFDWTtBQUVqRSxJQUFNLG1DQUFtQyxHQUFRO0lBQ3RELE9BQU8sRUFBRSxpRUFBaUI7SUFDMUIsV0FBVyxFQUFFLGdGQUFVLENBQUMsY0FBTSxnQ0FBeUIsRUFBekIsQ0FBeUIsQ0FBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFPRjtJQUFBO1FBRVUsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUVyQixzQkFBaUIsR0FBZSxjQUFPLENBQUMsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBcUIsY0FBTyxDQUFDLENBQUM7SUFnQnhELENBQUM7SUFkQyxxQ0FBcUM7SUFDckMsOENBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsb0RBQWdCLEdBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQscURBQWlCLEdBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBbkJEO1FBQUMsMkVBQUssQ0FBQyxhQUFhLENBQUM7O2tFQUFBO0lBTnZCO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLGlFQUFpRTtZQUMzRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNqRCxDQUFDOztpQ0FBQTtJQXNCRixnQ0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN5RDtBQUNjO0FBRWpFLElBQU0sbUNBQW1DLEdBQVE7SUFDdEQsT0FBTyxFQUFFLGlFQUFpQjtJQUMxQixXQUFXLEVBQUUsZ0ZBQVUsQ0FBQyxjQUFNLDRCQUFxQixFQUFyQixDQUFxQixDQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU9GO0lBQUE7UUFLVSxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBRXJCLHNCQUFpQixHQUFlLGNBQU8sQ0FBQyxDQUFDO1FBQ3pDLHFCQUFnQixHQUFxQixjQUFPLENBQUMsQ0FBQztJQWdCeEQsQ0FBQztJQWRDLHFDQUFxQztJQUNyQywwQ0FBVSxHQUFWLFVBQVcsS0FBVTtRQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBaUIsR0FBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUF0QkQ7UUFBQywyRUFBSyxDQUFDLFFBQVEsQ0FBQzs7eURBQUE7SUFDaEI7UUFBQywyRUFBSyxDQUFDLFNBQVMsQ0FBQzs7MERBQUE7SUFDakI7UUFBQywyRUFBSyxDQUFDLFNBQVMsQ0FBQzs7MERBQUE7SUFSbkI7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLGlFQUFpRTtZQUMzRSxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNqRCxDQUFDOzs2QkFBQTtJQXlCRiw0QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tFO0FBQ1g7QUFDQTtBQUNNO0FBRWhCO0FBTTlDO0lBeURFLHdCQUFvQixZQUEwQixFQUFVLGFBQTRCLEVBQVUsZ0JBQWtDO1FBQTVHLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBcER6SCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLG9CQUFlLEdBQWE7WUFDakMsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUUsRUFBRTtZQUNSLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsRUFBRTtZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLE1BQU0sRUFBRSxLQUFLO1lBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBQ0ssaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixrQkFBa0IsRUFBRSxNQUFNO1lBQzFCLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLGVBQWUsRUFBRSxNQUFNO1lBQ3ZCLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFLEVBQUU7WUFDUixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUM7U0FDbkMsQ0FBQztRQUNLLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIscUJBQWdCLEdBQVEsS0FBSyxDQUFDO1FBQzlCLHNCQUFpQixHQUFrQixNQUFNLENBQUM7UUFDMUMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsNkRBQVMsQ0FBQztRQUl6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRyxpQ0FBaUM7UUFDakMsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixvREFBb0Q7UUFDcEQsZUFBZTtRQUNmLGdFQUFnRTtRQUNoRSxRQUFRO1FBQ1IsTUFBTTtRQUNOLElBQUk7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osQ0FBQyxFQUFFLFNBQVM7WUFDWixDQUFDLEVBQUUsVUFBVTtZQUNiLENBQUMsRUFBRSxPQUFPO1lBQ1YsQ0FBQyxFQUFFLFFBQVE7WUFDWCxDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxRQUFRO1lBQ1gsQ0FBQyxFQUFFLFFBQVE7WUFDWCxDQUFDLEVBQUUsUUFBUTtZQUNYLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFNBQVM7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxVQUFVO1NBQ2YsQ0FBQztRQUNGLDBEQUEwRDtJQUU1RCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEtBQUs7UUFBbEIsaUJBYUM7UUFaQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxVQUFDLFNBQVM7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzdCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUNELHNDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO1FBQzdHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQUUxSCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDek4sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXhCLDBFQUEwRTtRQUMxRSwwRUFBMEU7UUFDMUUsMEVBQTBFO1FBQzFFLHlCQUF5QjtRQUN6QiwrQ0FBK0M7UUFDL0MsdUNBQXVDO1FBQ3ZDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLHVDQUF1QztRQUN2QywyREFBMkQ7UUFDM0QscUZBQXFGO1FBQ3JGLG1HQUFtRztRQUNuRyx3Q0FBd0M7UUFDeEMsK0NBQStDO1FBQy9DLDZEQUE2RDtRQUM3RCwyQ0FBMkM7UUFDM0MseURBQXlEO1FBQ3pELG1EQUFtRDtRQUNuRCxpREFBaUQ7UUFDakQsMkRBQTJEO1FBQzNELG1FQUFtRTtRQUNuRSxFQUFFO1FBQ0YseUZBQXlGO1FBQ3pGLEVBQUU7UUFDRiwwT0FBME87UUFDMU8sMkNBQTJDO1FBQzNDLHNDQUFzQztRQUN0Qyx1QkFBdUI7UUFDdkIsNENBQTRDO1FBQzVDLHVDQUF1QztRQUN2Qyx1Q0FBdUM7UUFDdkMsZ0JBQWdCO1FBQ2hCLHNDQUFzQztRQUN0QyxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHlDQUF5QztRQUN6QyxvQ0FBb0M7UUFDcEMsY0FBYztRQUNkLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsb0NBQW9DO1FBQ3BDLGlEQUFpRDtRQUNqRCwrREFBK0Q7UUFDL0QsNkNBQTZDO1FBQzdDLDJEQUEyRDtRQUMzRCxxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELDZEQUE2RDtRQUM3RCxxRUFBcUU7UUFDckUsRUFBRTtRQUNGLHVHQUF1RztRQUN2RyxFQUFFO1FBQ0YseURBQXlEO1FBQ3pELEVBQUU7UUFDRixzT0FBc087UUFDdE8sdUNBQXVDO1FBQ3ZDLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsd0NBQXdDO1FBQ3hDLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLEVBQUU7UUFDRixrQ0FBa0M7UUFDbEMsRUFBRTtRQUNGLGlCQUFpQjtRQUNqQixvQ0FBb0M7UUFDcEMsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUNqQyxVQUFVO1FBQ1YsU0FBUztRQUNULDBCQUEwQjtRQUMxQixnQ0FBZ0M7UUFDaEMsVUFBVTtJQUNaLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0SSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckUsSUFBSSxnQkFBZ0IsR0FBRztnQkFDckIsSUFBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hGLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDckYsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CO2FBQzdDLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxFQUFDLENBQUMsQ0FBQztZQUMxSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQzNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFBQSxpQkErRUM7UUE5RUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEtBQUssR0FBRyxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUM7b0JBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87b0JBQzdCLE1BQU0sRUFBRSxDQUFDO29CQUNULElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUM1QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLENBQUMsQ0FBQztvQkFDekQsS0FBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7d0JBQy9CLGlFQUFpRTt3QkFDakUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxJQUFJO3dCQUN6QixXQUFXLEVBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJO3dCQUN2QyxNQUFNLEVBQUUsQ0FBQzt3QkFDVCxJQUFJLEVBQUUsTUFBTTtxQkFDYixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQzt3QkFDL0IsaUVBQWlFO3dCQUNqRSxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUk7d0JBQ3pCLFdBQVcsRUFBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7d0JBQ3ZDLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQ2xDLElBQUksRUFBRSxNQUFNO3FCQUNiLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRztnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVTtnQkFDakMsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksV0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDeEcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFdBQVMsRUFBQyxDQUFDLENBQUM7Z0JBRW5ILEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztnQkFDakMsS0FBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztnQkFDMUQsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDWCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQ3ZHLHdDQUF3QztnQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsNkVBQTZFLEVBQUMsRUFBQyxDQUFDLENBQUM7Z0JBQy9KLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLDZLQUE2SyxFQUFDLEVBQUMsQ0FBQyxDQUFDO2dCQUMvUCxDQUFDO2dCQUNELFVBQVU7Z0JBQ1YscUxBQXFMO2dCQUNyTCxJQUFJO2dCQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkE2QkM7UUE1QkMsSUFBSSxDQUFDLEVBQUUsR0FBRztZQUNSLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUN4RixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDaEUsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3ZELFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7WUFDckUsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDdEcsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLDZEQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxnQkFBTTtnQkFDdkUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFHRCxFQUFFLEVBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNuRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNuRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBbllEO1FBQUMsMkVBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLDJFQUFLLENBQUMsYUFBYSxDQUFDOzt1REFBQTtJQU52QjtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixpQ0FBcUM7U0FDdEMsQ0FBQzs7c0JBQUE7SUFzWUYscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFo2QztBQUN5QjtBQUNBO0FBQ2xCO0FBQ2M7QUFDRjtBQU9qRTtJQVNFLDBCQUFvQixXQUF3QixFQUFVLE1BQWMsRUFBVSxLQUFxQixFQUFVLGlCQUFvQyxFQUFVLGdCQUFrQztRQUF6SyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUnRMLGVBQVUsR0FBRyxFQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDOUMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUV3SyxDQUFDO0lBRWxNLG1DQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTthQUN6QixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDM0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osVUFBVSxDQUFDO29CQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEVBQUU7d0JBQzFDLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFNBQVMsRUFBRSxZQUFZO3dCQUN2QixhQUFhLEVBQUUsTUFBTTtxQkFDeEIsQ0FBQyxDQUFDO2dCQUNQLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsRUFBRSxFQUFFLElBQUk7UUFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQVosaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQy9CLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDWixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUM3RyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxXQUFXO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQWxGSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixpQ0FBdUM7U0FDeEMsQ0FBQzs7d0JBQUE7SUFnRkYsdUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRmtEO0FBS25EO0lBQUE7SUErQkEsQ0FBQztJQTdCQyw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDOUIsSUFBSSxNQUFNLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxXQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixXQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLFdBQVMsQ0FBQyxNQUFNLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxXQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksR0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDVixXQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDckIsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1YsTUFBTSxJQUFJLElBQUksQ0FBQzt3QkFDZixFQUFFLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDWixNQUFNLElBQUksR0FBRyxDQUFDO3dCQUNoQixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sV0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ3JCLE1BQU0sSUFBSSxJQUFJLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFoQ0g7UUFBQywwRUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztrQkFBQTtJQWdDRixpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENrRDtBQUtuRDtJQUFBO0lBcUJBLENBQUM7SUFuQkMsNkJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLE9BQUssR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLFVBQVEsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDcEIsRUFBRSxDQUFDLENBQUMsVUFBUSxLQUFLLENBQUMsSUFBSSxVQUFRLEtBQUssQ0FBQyxJQUFJLFVBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxPQUFLLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDckIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFLLElBQUksR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsVUFBUSxFQUFFLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxPQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUF0Qkg7UUFBQywwRUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDOztpQkFBQTtJQXNCRixnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCNkM7QUFDcUU7QUFDNUM7QUFDbkI7QUFDWTtBQUNoQjtBQUNRO0FBQ0U7QUFDSTtBQTJLOUQ7SUFtR0UseUJBQW9CLFdBQXdCLEVBQVUsaUJBQW9DLEVBQVUsWUFBMkIsRUFBVSxhQUE0QixFQUFVLGNBQThCLEVBQVUsTUFBYyxFQUFVLGdCQUFrQztRQUE3UCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoRzFRLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLFVBQVUsQ0FBQztRQUMvQixvQkFBZSxHQUFHLFVBQVUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxVQUFVLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFHLFVBQVUsQ0FBQztRQUM5QixzQkFBaUIsR0FBRyxVQUFVLENBQUM7UUFDL0IsNEJBQXVCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLDRCQUF1QixHQUFHLFVBQVUsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLFVBQVUsQ0FBQztRQUd4QixnQkFBVyxHQUFHO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsRUFBRTtZQUNqQixlQUFlLEVBQUUsRUFBRSxDQUFDLFFBQVE7U0FDN0IsQ0FBQztRQUNLLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGlCQUFZLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQztRQUNLLGNBQVMsR0FBRztZQUNqQixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFDSyxlQUFVLEdBQUc7WUFDbEIsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDO1FBQ0sscUJBQWdCLEdBQUc7WUFDeEIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixlQUFlLEVBQUUsRUFBRTtTQUNwQixDQUFDO1FBQ0ssc0JBQWlCLEdBQUc7WUFDekIsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osYUFBYSxFQUFFLEtBQUs7WUFDcEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztRQUNLLGlCQUFZLEdBQUc7WUFDcEIsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO1FBQ0ssa0JBQWEsR0FBRztZQUNyQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUM7UUFDSyxxQkFBZ0IsR0FBRztZQUN4QixFQUFFLEVBQUUsSUFBSTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLEVBQUU7WUFDVixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFDSywyQkFBc0IsR0FBRztZQUM5QixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDO1FBQ0ssMkJBQXNCLEdBQUc7WUFDOUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFDSyxvQkFBZSxHQUFHO1lBQ3ZCLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRUssbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsY0FBUyxHQUE2QyxLQUFLLENBQUM7UUFFakUsSUFBSSxDQUFDLFlBQVksR0FBRyxtR0FBbUcsQ0FBQztJQUMxSCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLElBQVk7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRztnQkFDeEIsbUhBQW1IO2dCQUNuSCx5RkFBeUY7YUFDNUYsQ0FBQztRQUNKLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsUUFBUSxDQUFDO1FBQzFDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsUUFBUSxDQUFDO1FBQzFDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLFFBQWdCO1FBQWhCLHdCQUFnQixHQUFoQixnQkFBZ0I7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsVUFBVSxDQUFDO1FBQzNDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDO1FBQzVDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLFFBQWdCO1FBQXJDLGlCQTZDQztRQTVDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxXQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ1QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFdBQVMsRUFBQyxDQUFDLENBQUM7Z0JBQzVHLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztnQkFDeEYsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNkLEtBQUssR0FBRzt3QkFDTixLQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNmLEtBQUssRUFBRSw0QkFBNEI7NEJBQ25DLE9BQU8sRUFBRSwrREFBK0Q7eUJBQ3pFLENBQUM7d0JBQ0YsS0FBSyxDQUFDO29CQUNSLEtBQUssR0FBRzt3QkFDTixLQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNmLEtBQUssRUFBRSw0QkFBNEI7NEJBQ25DLE9BQU8sRUFBRSxnQ0FBZ0M7eUJBQzFDLENBQUM7d0JBQ0YsS0FBSyxDQUFDO29CQUNSO3dCQUNFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNsQyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxLQUFhO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQzlCLEtBQUssQ0FBQztnQkFDUixLQUFLLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxLQUFLLENBQUM7Z0JBQ1IsS0FBSyxVQUFVO29CQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDakMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDN0IsS0FBSyxDQUFDO2dCQUNSLEtBQUssY0FBYztvQkFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3BDLEtBQUssQ0FBQztnQkFDUixLQUFLLFVBQVU7b0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNoQyxLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsSUFBSSxFQUFFLEtBQUs7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDcEMsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDcEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNsQyxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDckMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxRQUFnQixFQUFFLGVBQXVCO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQUs7UUFDZixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksV0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsV0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNqQixXQUFTLENBQUMsTUFBTSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxHQUFDLEVBQUUsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLENBQUMsV0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEdBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1YsV0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNaLE1BQU0sSUFBSSxHQUFHLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0QsTUFBTSxJQUFJLElBQUksQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxHQUFDLEVBQUUsQ0FBQztnQkFDTixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixXQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtvQkFDckIsTUFBTSxJQUFJLElBQUksQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDckMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixVQUFVO1FBQ3hCLDZCQUE2QjtRQUM3Qiw4REFBOEQ7UUFDOUQsd0NBQXdDO1FBQ3hDLGFBQWE7UUFDYix1Q0FBdUM7UUFDdkMsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsZUFBdUI7UUFBbEcsaUJBc0RDO1FBckRDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxlQUFlLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksV0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7aUJBQ2xELElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQ1QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFdBQVMsRUFBQyxDQUFDLENBQUM7Z0JBQ25ILEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNkLEtBQUssR0FBRzt3QkFDTixLQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNmLEtBQUssRUFBRSw4QkFBOEI7NEJBQ3JDLE9BQU8sRUFBRSxnSkFDMEQ7eUJBQ3BFLENBQUM7d0JBQ0YsS0FBSyxDQUFDO29CQUNSLEtBQUssR0FBRzt3QkFDTixLQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNmLEtBQUssRUFBRSxvQkFBb0I7NEJBQzNCLE9BQU8sRUFBRSxnRUFBZ0U7eUJBQzFFLENBQUM7d0JBQ0YsS0FBSyxDQUFDO29CQUNSLEtBQUssR0FBRzt3QkFDTixLQUFJLENBQUMsU0FBUyxHQUFHOzRCQUNmLEtBQUssRUFBRSxRQUFROzRCQUNmLE9BQU8sRUFBRSx5RUFBK0Q7eUJBQ3pFLENBQUM7d0JBQ0YsS0FBSyxDQUFDO29CQUNSO3dCQUNFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEMsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUM5QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNyQyxDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQWE7UUFBdEIsaUJBcUJDO1FBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUM3QixJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFdBQVMsRUFBQyxDQUFDLENBQUM7Z0JBQzNILEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHO29CQUNmLEtBQUssRUFBRSw4QkFBOEI7b0JBQ3JDLE9BQU8sRUFBRSw4RUFBOEU7aUJBQ3hGLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsRUFBRTtRQUNiLCtDQUErQztRQUMvQyw0QkFBNEI7UUFDNUIsMEVBQTBFO1FBQzFFLDBMQUEwTDtRQUMxTCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLHVGQUF1RjtRQUN2RixTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQiwyQkFBMkI7UUFDM0IsNkNBQTZDO1FBQzdDLHdGQUF3RjtRQUN4RixXQUFXO1FBQ1gsVUFBVTtJQUNaLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBRTtRQUFkLGlCQWlCQztRQWhCQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQzthQUN2QyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUMzSCxLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1lBQ3ZELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsMEVBQTBFLENBQUM7WUFDOUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixPQUFPLEVBQUUsaUVBQWlFO2FBQzNFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEVBQUU7UUFBbEIsaUJBaUJDO1FBaEJDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDO2FBQzNDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQy9ILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7WUFDeEQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRyx3R0FBd0csQ0FBQztZQUM1SSxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsT0FBTyxFQUFFLDBGQUEwRjthQUNwRyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQseUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQUEsaUJBMkNDO1FBMUNDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxHQUFHLElBQUksQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLFdBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDM0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsV0FBUyxFQUFDLENBQUMsQ0FBQztnQkFDbkgsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztnQkFDcEUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNYLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ1osS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBc0RDO1FBckRDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLFlBQVksR0FBRztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7UUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsWUFBWSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUMxQyxZQUFZLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVELFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDNUQsWUFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUMxRCxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1lBQ3hELFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDNUQsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksV0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztpQkFDeEQsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxXQUFTLEVBQUMsQ0FBQyxDQUFDO2dCQUNySCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO2dCQUN2RSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1gsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDWixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxPQUFPO1FBQ2QsaUlBQWlJO1FBQ2pJLCtEQUErRDtRQUZqRSxpQkE2QkM7UUF6QkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDMUgsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLGtDQUFrQyxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7WUFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFDNUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDakgsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNYLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUNELG1DQUFTLEdBQVQsVUFBVSxPQUFPO1FBQWpCLGlCQWFDO1FBWkMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5SCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSw4QkFBOEIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUNuSSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQVMsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUMxSSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCx1Q0FBYSxHQUFiLFVBQWMsT0FBTztRQUFyQixpQkFlQztRQWRDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBQ3hILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUM7WUFDM0QsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRywwRkFBMEYsQ0FBQztZQUM5SCxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUMxQyxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRVQsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsS0FBSyxFQUFFLElBQUk7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQThNQztRQTdNQyxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQUs7Z0JBQ25FLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNuQixLQUFLLE9BQU87d0JBQ1YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO3dCQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixLQUFLLGdCQUFnQjt3QkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO3dCQUNsQyxLQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxTQUFTO3dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUM1QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO3dCQUNsQyxLQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixLQUFLLFVBQVU7d0JBQ2IsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDN0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ3hELEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7d0JBQzlELEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUM1QyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxjQUFjO3dCQUNqQixLQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDO3dCQUN2QyxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixLQUFLLGNBQWM7d0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQzlDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsNkJBQTZCLENBQUM7d0JBQzVELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsNEhBQTRILENBQUM7d0JBQzFKLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUNsQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7NkJBQ3pELElBQUksQ0FBQyxVQUFDLFFBQVE7NEJBQ2IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxrQ0FBa0MsQ0FBQzs0QkFDakUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxpSkFBaUosQ0FBQzs0QkFDL0ssS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7NEJBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzVCLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLENBQUM7d0JBQ2hHLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLOzRCQUNYLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUN0QixLQUFJLENBQUMsU0FBUyxHQUFHO2dDQUNmLEtBQUssRUFBRSwwQkFBMEI7Z0NBQ2pDLE9BQU8sRUFBRSxvRUFBb0U7NkJBQzlFLENBQUM7d0JBQ0osQ0FBQyxDQUFDLENBQUM7d0JBQ0wsS0FBSyxDQUFDO29CQUNSLEtBQUssYUFBYTt3QkFDaEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDOUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxzRUFBc0UsQ0FBQzt3QkFDcEcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQzt3QkFDaEQsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxpQkFBaUI7d0JBQ3BCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQzlDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7d0JBQ2pELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsNEVBQTRFLENBQUM7d0JBQzFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUM7d0JBQ2pELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO3dCQUNsQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsS0FBSyxDQUFDO29CQUNSLEtBQUssaUJBQWlCO3dCQUNwQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO3dCQUNyRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDckgsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87NEJBQzVDLEVBQUUsRUFBQyxPQUFPLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQ0FDbEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs0QkFDdkgsQ0FBQzs0QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyx1QkFBdUIsQ0FBQyxFQUFDO2dDQUN6RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs0QkFDdEosQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7NEJBQ3pJLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQzt3QkFDOUgsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQzt3QkFDeEQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO3dCQUNsQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsS0FBSyxDQUFDO29CQUNSLEtBQUssb0JBQW9CO3dCQUN2QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO3dCQUNuRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLDZHQUE2RyxDQUFDO3dCQUMzSSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQzt3QkFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDckMsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixLQUFLLFVBQVU7d0JBQ2IsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDekQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7d0JBQzlDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7d0JBQzdELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsd0dBQXdHLENBQUM7d0JBQzVJLDZDQUE2Qzt3QkFDN0MsK0JBQStCO3dCQUMvQixvQkFBb0I7d0JBQ3BCLGtDQUFrQzt3QkFDbEMsc0VBQXNFO3dCQUN0RSxNQUFNO3dCQUNOLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsVUFBVTs0QkFDaEIsSUFBSSxFQUFFLHNCQUFzQjt5QkFDN0IsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsT0FBTzs0QkFDYixJQUFJLEVBQUUsUUFBUTt5QkFDZixDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxXQUFXO3dCQUNkLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ3pELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO3dCQUMvQyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxHQUFHLG1IQUFtSCxDQUFDO3dCQUN2SixLQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDdkMsSUFBSSxFQUFFLG9CQUFvQjs0QkFDMUIsTUFBTSxFQUFFLE1BQU07NEJBQ2QsS0FBSyxFQUFFLHFCQUFxQjs0QkFDNUIsV0FBVyxFQUFFLG9EQUFvRDt5QkFDbEUsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsV0FBVzs0QkFDakIsSUFBSSxFQUFFLG1CQUFtQjt5QkFDMUIsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsT0FBTzs0QkFDYixJQUFJLEVBQUUsUUFBUTt5QkFDZixDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQzdGLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxRQUFRLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO3dCQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsS0FBSyxDQUFDO29CQUNSLEtBQUssZUFBZTt3QkFDbEIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDekQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsaUZBQWlGLENBQUM7d0JBQ3JILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsbURBQW1ELENBQUM7d0JBQ3hGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDckUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNsRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDdkMsSUFBSSxFQUFFLHFCQUFxQjs0QkFDM0IsV0FBVyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRzt5QkFDdEYsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLDBCQUEwQjt5QkFDakMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxJQUFJLEVBQUUsT0FBTzs0QkFDYixJQUFJLEVBQUUsUUFBUTt5QkFDZixDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1IsS0FBSyxRQUFRO3dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUM7d0JBQ3hELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNoQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzt3QkFDdkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO3dCQUN0QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO3dCQUNsQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzt3QkFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQzVCLEtBQUssQ0FBQztvQkFDUixLQUFLLE9BQU87d0JBQ1YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNoQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDekQsS0FBSyxDQUFDO2dCQUNWLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsSUFBSTtZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLEVBQUU7WUFDUixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGVBQWUsRUFBRSxFQUFFO1NBQ3BCLENBQUM7UUFDSixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLE9BQU87UUFDUCxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEIsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7WUFDWixlQUFlLEVBQUUsRUFBRTtTQUNwQixDQUFDO1FBQ0osSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEIsRUFBRSxFQUFFLElBQUk7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixXQUFXLEVBQUUsRUFBRTtZQUNmLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBQ0osSUFBSSxDQUFDLHNCQUFzQixHQUFHO1lBQzFCLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7UUFDSixJQUFJLENBQUMsc0JBQXNCLEdBQUc7WUFDMUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsNkRBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBM25DSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixpQ0FBc0M7WUFDdEMsVUFBVSxFQUFFO2dCQUNWLDZFQUFPLENBQUMsbUJBQW1CLEVBQUU7b0JBQzNCLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3pCLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsd0JBQXdCLEVBQUU7b0JBQ2hDLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsb0JBQW9CLEVBQUU7b0JBQzVCLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsa0JBQWtCLEVBQUU7b0JBQzFCLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsbUJBQW1CLEVBQUU7b0JBQzNCLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMseUJBQXlCLEVBQUU7b0JBQ2pDLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMseUJBQXlCLEVBQUU7b0JBQ2pDLDJFQUFLLENBQUMsVUFBVSxFQUFFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUMxRCwyRUFBSyxDQUFDLFFBQVEsRUFBSSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDekQsZ0ZBQVUsQ0FBQyxvQkFBb0IsRUFBRTt3QkFDL0IsNkVBQU8sQ0FBQyxHQUFHLEVBQUUsK0VBQVMsQ0FBQzs0QkFDckIsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ2xELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7eUJBQ2hFLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQzdELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ2xFLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNyRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztpQkFDSCxDQUFDO2dCQUNGLDZFQUFPLENBQUMsYUFBYSxFQUFFO29CQUNyQiwyRUFBSyxDQUFDLFVBQVUsRUFBRSwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDdkQsMkVBQUssQ0FBQyxRQUFRLEVBQUksMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBQ3hELGdGQUFVLENBQUMsb0JBQW9CLEVBQUU7d0JBQy9CLDZFQUFPLENBQUMsR0FBRyxFQUFFLCtFQUFTLENBQUM7NEJBQ3JCLDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzs0QkFDbkMsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ25ELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO3lCQUNuRCxDQUFDLENBQUM7cUJBQ0osQ0FBQztvQkFDRixnRkFBVSxDQUFDLG9CQUFvQixFQUFFO3dCQUMvQiw2RUFBTyxDQUFDLEdBQUcsRUFBRSwrRUFBUyxDQUFDOzRCQUNyQiwyRUFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzs0QkFDaEQsMkVBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ25ELDJFQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQzt5QkFDdEMsQ0FBQyxDQUFDO3FCQUNKLENBQUM7aUJBQ0gsQ0FBQzthQUNIO1NBQ0YsQ0FBQzs7dUJBQUE7SUFzOUJGLHNCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeG9DZ0Q7QUFNakQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBVEg7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsaUNBQXVDO1NBQ3hDLENBQUM7O3dCQUFBO0lBUUYsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ2JEO0FBQUEsbUZBQW1GO0FBQ25GLDhGQUE4RjtBQUM5RiwwRUFBMEU7QUFDMUUsK0VBQStFO0FBRXhFLElBQU0sV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEY7QUFBQTtBQUFBLHdFQUF3RTtBQUN4RSw4REFBOEQ7QUFFekI7QUFDVjtBQUNBO0FBQ0U7QUFDQztBQUNFO0FBQ0w7QUFDRjtBQUNFO0FBQ0Y7QUFDQztBQUNDO0FBQ0g7QUFDQTtBQUNJO0FBRUE7Ozs7Ozs7O0FDbkI1QjtBQUFBOzs7Ozs7Ozs7O0lBVUk7QUFDRyxJQUFNLE1BQU0sR0FBYTtJQUM1QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsUUFBUTtJQUNSLGVBQWU7Q0FDbEIsQ0FBQzs7Ozs7OztBQ2xCRiw2RkFBNkYseUJBQXlCLDJnQkFBMmdCLGFBQWEsa21CQUFrbUIsVUFBVSxVQUFVLGdCQUFnQixJQUFJLHlpQkFBeWlCLFNBQVMsb09BQW9PLCtCQUErQixnSkFBZ0osV0FBVyxnWUFBZ1ksdUJBQXVCLCtIQUErSCwrQkFBK0IsOFY7Ozs7OztBQ0E3eEYsb1NBQW9TLHdCQUF3QixrSUFBa0ksd0ZBQXdGLDBEQUEwRCx1QkFBdUIsVUFBVSxtQkFBbUIsNlhBQTZYLHlEQUF5RCwrTEFBK0wsK0JBQStCLG9JQUFvSSx5QkFBeUIsNFBBQTRQLHdCQUF3Qix1UUFBdVEsY0FBYyw2YUFBNmEsK0RBQStELGd3Qjs7Ozs7O0FDQTE4RSw0UEFBNFAsbUJBQW1CLDhhQUE4YSw0Q0FBNEMsaUdBQWlHLGdDQUFnQyx3RUFBd0UscUJBQXFCLHdOQUF3TixxQkFBcUIsS0FBSywwQkFBMEIsR0FBRyw0QkFBNEIsK0ZBQStGLHFCQUFxQixLQUFLLDBCQUEwQiw4SUFBOEksOEJBQThCLGdNQUFnTSxvQ0FBb0MsNGtCQUE0a0Isb0NBQW9DLG1pQkFBbWlCLDBDQUEwQyxnVUFBZ1UsWUFBWSxrYUFBa2EsTUFBTSxpSEFBaUgsMENBQTBDLG9YQUFvWCxZQUFZLG9WQUFvVixNQUFNLHVJQUF1SSx5REFBeUQsbU5BQW1OLDZEQUE2RCwrQ0FBK0MsaUJBQWlCLHNNQUFzTSw2REFBNkQsOERBQThELGlCQUFpQiw4NUM7Ozs7OztBQ0E3NUsseTFCQUF5MUIsYUFBYSw4bkJBQThuQixVQUFVLFVBQVUsZ0JBQWdCLElBQUksdXBDQUF1cEMsaUJBQWlCLDRGQUE0RiwwQ0FBMEMsb2hMQUFvaEwsd0JBQXdCLHN0QkFBc3RCLHdCQUF3Qix5dkJBQXl2Qix3QkFBd0IsczlHOzs7Ozs7QUNBcjJULDhLQUE4SyxzQkFBc0IsNEVBQTRFLFVBQVUsZ09BQWdPLGdCQUFnQixpcUZBQWlxRixtQ0FBbUMsd0VBQXdFLDZCQUE2Qiw0UEFBNFAscUNBQXFDLEtBQUssaUJBQWlCLGtFQUFrRSx3QkFBd0IsaUVBQWlFLDhCQUE4Qix1R0FBdUcscUNBQXFDLEtBQUssaUJBQWlCLDJDQUEyQyx1QkFBdUIsc0VBQXNFLDhCQUE4QixpV0FBaVcsbUNBQW1DLG9MQUFvTCx1Q0FBdUMsdUtBQXVLLHdCQUF3Qiw4T0FBOE8sbUNBQW1DLDRMQUE0TCx1Q0FBdUMsK0tBQStLLHdCQUF3Qiw2TkFBNk4sd0JBQXdCLElBQUksK0JBQStCLDBCQUEwQixzQkFBc0IsSUFBSSw2QkFBNkIsMEJBQTBCLDBCQUEwQixJQUFJLHlCQUF5QixndkJBQWd2QixtQ0FBbUMsNExBQTRMLHVDQUF1QywrS0FBK0ssd0JBQXdCLHVOQUF1Tix3QkFBd0IsSUFBSSwrQkFBK0IsMEJBQTBCLHNCQUFzQixJQUFJLDZCQUE2QiwwQkFBMEIsMEJBQTBCLElBQUkseUJBQXlCLDBiQUEwYixtQ0FBbUMsNExBQTRMLHVDQUF1QywrS0FBK0ssd0JBQXdCLDRWQUE0VixtQ0FBbUMsNExBQTRMLHVDQUF1QywrS0FBK0ssd0JBQXdCLDRWQUE0VixtQ0FBbUMsNExBQTRMLHVDQUF1QywrS0FBK0ssd0JBQXdCLGdRQUFnUSxtQ0FBbUMsNExBQTRMLHVDQUF1QywrS0FBK0ssd0JBQXdCLHVOQUF1Tix3QkFBd0IsSUFBSSwrQkFBK0IsMEJBQTBCLHNCQUFzQixJQUFJLDZCQUE2QiwwQkFBMEIsMEJBQTBCLElBQUkseUJBQXlCLGtKQUFrSixxQkFBcUIsOEtBQThLLGFBQWEsMFlBQTBZLDhCQUE4QixxTEFBcUwsOEJBQThCLDQ2QkFBNDZCLDhCQUE4QixnWkFBZ1osOEJBQThCLHdHOzs7Ozs7QUNBOWhiLHNIQUFzSCx1RkFBdUYscVBBQXFQLHdCQUF3QiwwREFBMEQsK0JBQStCLDBGQUEwRixVQUFVLHMvSEFBcy9ILGlCQUFpQixZQUFZLG1CQUFtQiw4dUJBQTh1Qiw4QkFBOEIsZ0JBQWdCLGNBQWMsaXJCQUFpckIsYUFBYSw4SUFBOEksY0FBYywySUFBMkksa0JBQWtCLEdBQUcsNkJBQTZCLHVJQUF1SSxjQUFjLEdBQUcsZ0JBQWdCLEdBQUcsZUFBZSxrTkFBa04sc0JBQXNCLEdBQUcsc0JBQXNCLDJCQUEyQixzQkFBc0IsR0FBRyxxQkFBcUIsMkJBQTJCLG9CQUFvQixHQUFHLHdCQUF3QixzK1ZBQXMrVixrZ0xBQWtnTCxpQkFBaUIsbUJBQW1CLG1CQUFtQixvTEFBb0wsK0NBQStDLDJyQkFBMnJCLCtDQUErQyxxc0I7Ozs7OztBQ0F4anhCLHVZQUF1WSxtQkFBbUIsK1FBQStRLDRCQUE0Qiw4WUFBOFksK0JBQStCLDhsQ0FBOGxDLGlCQUFpQixtQkFBbUIsbUJBQW1CLCtPQUErTyxrQ0FBa0Msa1pBQWtaLG1DQUFtQyxxWkFBcVosbUNBQW1DLDBZQUEwWSwyQ0FBMkMseWFBQXlhLHNDQUFzQyx3eUNBQXd5QyxpQkFBaUIsbUJBQW1CLG1CQUFtQixtTEFBbUwsK0JBQStCLDZ2QkFBNnZCLDBJQUEwSSxnS0FBZ0ssaUJBQWlCLG1CQUFtQixtQkFBbUIsb2xCQUFvbEIsVUFBVSxVQUFVLGdCQUFnQixJQUFJLHdTQUF3UywyREFBMkQsNkNBQTZDLDBCQUEwQiwwTEFBMEwsMkRBQTJELEtBQUsseUJBQXlCLHVGQUF1Rix5QkFBeUIsd1BBQXdQLHVCQUF1QixzQ0FBc0MsdUJBQXVCLDRGQUE0Rix1QkFBdUIsc0NBQXNDLHVCQUF1QixtRUFBbUUsdUJBQXVCLEdBQUcsb0JBQW9CLHNDQUFzQyx1QkFBdUIsa0VBQWtFLHVCQUF1QixLQUFLLG9CQUFvQixHQUFHLGtCQUFrQixtRUFBbUUsdUJBQXVCLEtBQUssc0JBQXNCLGtCQUFrQix3RkFBd0YsdUJBQXVCLE9BQU8sdUJBQXVCLHVMQUF1TCxxQ0FBcUMsa0VBQWtFLHFDQUFxQyx3RUFBd0Usd0NBQXdDLDZIQUE2SCw0Q0FBNEMsMmxEQUEybEQsK0NBQStDLGlDQUFpQyxnQ0FBZ0MsaUJBQWlCLCtCQUErQiwyWEFBMlgseUJBQXlCLDZEQUE2RCxRQUFRLCtmQUErZiwrQkFBK0IsbzNCQUFvM0IsaUNBQWlDLDZkQUE2ZCw0QkFBNEIscWtIQUFxa0gsd0RBQXdELGdLQUFnSyxpQkFBaUIsbUJBQW1CLG1CQUFtQiw4R0FBOEcsZ0NBQWdDLCtGQUErRiwrQkFBK0IsbUVBQW1FLGdDQUFnQyx3TUFBd00sZ0JBQWdCLDRZQUE0WSxzQkFBc0Isc0hBQXNILGdCQUFnQiw4WUFBOFksc0JBQXNCLHlIQUF5SCxzQkFBc0Isc1JBQXNSLGVBQWUsbUpBQW1KLGVBQWUsd0xBQXdMLGVBQWUsb0hBQW9ILGVBQWUsMEQ7Ozs7OztBQ0F6Mm9CLHdnQkFBd2dCLFVBQVUsVUFBVSxnQkFBZ0IsSUFBSSw0Rzs7Ozs7O0FDQWhqQixvRDs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLCtCOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSx5RTs7Ozs7O0FDQUEsaUUiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGVmYTdkMDhmYTQyY2NkM2ExZWYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBoZWFkZXJNZXNzYWdlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwcml2YXRlIGF1dGhEYXRhID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGFjdGl2ZVRhYiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdHVzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlJDtcbiAgcHVibGljIGdldFBlcnNvbmFsTWVudSQ7XG4gIHB1YmxpYyBnZXRBY3RpdmVUYWIkO1xuICBwdWJsaWMgZ2V0TG9hZGluZ1N0YXR1cyQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmdldE1lc3NhZ2UkID0gdGhpcy5oZWFkZXJNZXNzYWdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRQZXJzb25hbE1lbnUkID0gdGhpcy5hdXRoRGF0YS5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlVGFiJCA9IHRoaXMuYWN0aXZlVGFiLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRMb2FkaW5nU3RhdHVzJCA9IHRoaXMubG9hZGluZ1N0YXR1cy5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmhlYWRlck1lc3NhZ2UubmV4dChtZXNzYWdlKTtcbiAgfVxuXG4gIHVwZGF0ZVBlcnNvbmFsTWVudShhdXRoKSB7XG4gICAgdGhpcy5hdXRoRGF0YS5uZXh0KGF1dGgpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlVGFiKHRhYikge1xuICAgIHRoaXMuYWN0aXZlVGFiLm5leHQodGFiKTtcbiAgfVxuXG4gIHVwZGF0ZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzLm5leHQoc3RhdHVzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGltaW5nIHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGltaW5nVmFyOiBzdHJpbmc7XG4gIHRpbWluZ1ZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNlbmRUaW1pbmcodGltaW5nRGF0YTogSVRpbWluZykge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAndGltaW5nJywgdGltaW5nRGF0YS5jYXRlZ29yeSwgdGltaW5nRGF0YS50aW1pbmdWYXIsIHRpbWluZ0RhdGEudGltaW5nVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRFdmVudChldmVudDogSUV2ZW50KSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudC5jYXRlZ29yeSwgZXZlbnQuYWN0aW9uLCBldmVudC5sYWJlbCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wdXBzU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlUG9wdXAgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgcG9wdXBSZXNwb25zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGdldEFjdGl2ZVBvcHVwJDtcbiAgcHVibGljIGdldFBvcHVwUmVzcG9uc2UkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmdldEFjdGl2ZVBvcHVwJCA9IHRoaXMuYWN0aXZlUG9wdXAuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldFBvcHVwUmVzcG9uc2UkID0gdGhpcy5wb3B1cFJlc3BvbnNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuICBhY3RpdmF0ZShwb3B1cCkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAubmV4dChwb3B1cCk7XG4gIH1cbiAgYWN0aW9uQ29tcGxldGUoZGF0YSkge1xuICAgIHRoaXMucG9wdXBSZXNwb25zZS5uZXh0KGRhdGEpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbi8vIGltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb21lU2VydmljZSB7XG4gIHByaXZhdGUgc2VydmljZXNPYmplY3Q7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cC8qLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSovKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBzZW5kU2VydmljZXMoc2VydmljZXMpIHtcbiAgICB0aGlzLnNlcnZpY2VzT2JqZWN0ID0gc2VydmljZXM7XG4gIH1cbiAgZ2V0U2VydmljZXNPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZXNPYmplY3Q7XG4gIH1cblxuICBnZXRDYXRlZ29yaWVzKCkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSAnY2F0ZWdvcmllcyc7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmFwaSArIHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRTZXJ2aWNlcygpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnZmVhdHVyZWQnKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHNlcnZpY2VzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc2VydmljZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBzZWFyY2gocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdzZWFyY2g/dGl0bGU9JyArIHF1ZXJ5KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0cy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFNlcnZpY2VCeUlkKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdzZXJ2aWNlcy8nICsgaWQpXG4gICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMuanNvbigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBVUkxTZWFyY2hQYXJhbXMsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzcyB7XG4gIHN0cmVldDogc3RyaW5nO1xuICBzdHJlZXRfbnVtYmVyOiBudW1iZXI7XG4gIGNpdHk6IHN0cmluZztcbiAgcG9zdGFsX2NvZGU6IG51bWJlcjtcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGlzRnVsbDogYm9vbGVhbjtcbiAgZm9ybWF0dGVkQWRkcmVzczogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcmRlckV2ZW50ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwdWJsaWMgZ2V0T3JkZXJFdmVudCQ7XG5cbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBwcml2YXRlIGdvb2dsZUFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIHRoaXMuZ29vZ2xlQXBpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRPcmRlckV2ZW50JCA9IHRoaXMub3JkZXJFdmVudC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBtYWtlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyRXZlbnQubmV4dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hlYWRlcnM6IGhlYWRlcnN9O1xuICB9XG5cbiAgc2F2ZU9yZGVyKG9yZGVyRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnb3JkZXJzJywge1xuICAgICAgc2VydmljZV9pZDogb3JkZXJEYXRhLnNlcnZpY2VfaWQsXG4gICAgICBkZXNjcmlwdGlvbjogb3JkZXJEYXRhLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uLFxuICAgICAgZGV0YWlsczogb3JkZXJEYXRhLmRlbGl2ZXJ5X2RldGFpbHMsXG4gICAgICBkYXRlOiBvcmRlckRhdGEuZGVsaXZlcnlfZGF0ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBvcmRlckRhdGEuc3RyZWV0LFxuICAgICAgICBzdHJlZXRfbnVtYmVyOiBvcmRlckRhdGEuc3RyZWV0X251bWJlcixcbiAgICAgICAgY2l0eTogb3JkZXJEYXRhLmNpdHksXG4gICAgICAgIHBvc3RhbF9jb2RlOiBvcmRlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICAgIHByb3ZpbmNlOiBvcmRlckRhdGEucHJvdmluY2UsXG4gICAgICAgIGNvdW50cnk6IG9yZGVyRGF0YS5jb3VudHJ5LFxuICAgICAgICBjb3VudHJ5X2NvZGU6IG9yZGVyRGF0YS5jb3VudHJ5X2NvZGVcbiAgICAgIH0sXG4gICAgICBwYXltZW50OiB7XG4gICAgICAgIGFtb3VudDogb3JkZXJEYXRhLnBheW1lbnQuYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogb3JkZXJEYXRhLnBheW1lbnQuY3VycmVuY3lcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhrZXk6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGxldCBhZGRyZXNzZXMgPSBbXTtcbiAgICBwYXJhbXMuc2V0KCdhZGRyZXNzJywga2V5KTtcbiAgICBwYXJhbXMuc2V0KCdsYW5ndWFnZScsICdpdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2tleScsICdBSXphU3lDTGM1ZXREU3JxaWVBbjRsUENzdkZEcGtNMy1GNy1jNU0nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdvb2dsZUFwaSwge3NlYXJjaDogcGFyYW1zfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHRzO1xuICAgICAgICBkYXRhLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICBsZXQgYWRkcmVzc0RhdGE6IElBZGRyZXNzID0ge1xuICAgICAgICAgICAgc3RyZWV0OiAnJyxcbiAgICAgICAgICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgICAgICAgICAgcHJvdmluY2U6ICcnLFxuICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFkZHJlc3MuYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tcG9uZW50cy50eXBlc1swXSkge1xuICAgICAgICAgICAgICBjYXNlICdzdHJlZXRfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXRfbnVtYmVyID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3JvdXRlJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXQgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnbG9jYWxpdHknOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNpdHkgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5wcm92aW5jZSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb3VudHJ5JzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jb3VudHJ5ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY291bnRyeV9jb2RlID0gY29tcG9uZW50cy5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEucG9zdGFsX2NvZGUgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkZHJlc3NEYXRhLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuXG4gICAgICAgICAgaWYgKGFkZHJlc3MudHlwZXNbMF0gPT09ICdzdHJlZXRfYWRkcmVzcycpIHtcbiAgICAgICAgICAgIGFkZHJlc3NEYXRhLmlzRnVsbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFkZHJlc3NEYXRhLmNvdW50cnlfY29kZSA9PT0gJ0lUJykge1xuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZGRyZXNzZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBhdXRoSW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoO1xuICB9XG5cbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbG9naW4nLCB7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmR9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBsZXQgYXV0aERhdGEgPSB7XG4gICAgICAgICAgICBfaWQ6IGRhdGEucmVzdWx0Ll9pZCxcbiAgICAgICAgICAgIGVtYWlsOiBkYXRhLnJlc3VsdC5lbWFpbCxcbiAgICAgICAgICAgIHBob25lX251bWJlcjogZGF0YS5yZXN1bHQucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGRhdGEucmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4gYXV0aERhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgc2lnbnVwKG5hbWU6IHN0cmluZywgcGhvbmU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnc2lnbnVwJywge2Z1bGxuYW1lOiBuYW1lLCBwaG9uZV9udW1iZXI6IHBob25lLCBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICAgICAgICAgIGFjY291bnRfdHlwZXM6IGRhdGEucmVzdWx0LmFjY291bnRfdHlwZXMsXG4gICAgICAgICAgICBwcm9maWxlOiBkYXRhLnJlc3VsdC5wcm9maWxlLFxuICAgICAgICAgICAgY29tcGFueTogZGF0YS5yZXN1bHQuY29tcGFueSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGRhdGEucmVzdWx0LmFkZHJlc3MsXG4gICAgICAgICAgICBzZXJ2aWNlczogZGF0YS5yZXN1bHQuc2VydmljZXMsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IGRhdGEucmVzdWx0LmxvY2F0aW9ucyxcbiAgICAgICAgICAgIHBheW1lbnQ6IGRhdGEucmVzdWx0LnBheW1lbnQsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhLnJlc3VsdC5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZF9hdDogZGF0YS5yZXN1bHQudXBkYXRlZF9hdCxcbiAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcmVjb3ZlcnkoZW1haWw6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAncGFzc3dvcmRfcmVjb3ZlcnknLCB7ZW1haWw6IGVtYWlsfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnN0YXR1cyB8fCBlcnJvcik7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvYXV0aC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJzU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBnZXRPcmRlcnMocGFyYW1zKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBwYXJhbXNUb1JlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBlcmFtKSA9PiB7XG4gICAgICBwYXJhbXNUb1JlcXVlc3Quc2V0KHBlcmFtLm5hbWUsIHBlcmFtLnZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdvcmRlcnMnLCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKSwgc2VhcmNoOiBwYXJhbXNUb1JlcXVlc3R9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiBbJ0lkcmF1bGljbycsICdFbGV0dHJpY2lzdGEnLCAnRmFiYnJvJywgJ1NwYXp6YWNhbWlubycsICdBbnRlbm5pc3RhJywgJ1B1bGl6aWUnLCAnRWRpbGl6aWEnLCAnR2lhcmRpbmFnZ2lvJywgJ0luZm9ybWF0aWNhJ107XG4gIH1cblxuICBtb2RpZnlPcmRlcihpZCwgdHlwZSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaSArICdvcmRlcnMvJyArIGlkLCB7YWN0aW9uOiB0eXBlfSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzKCl9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYWRkUHJpY2UoaWQsIHR5cGUsIHByaWNlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGUsIHBheW1lbnQ6IHthbW91bnQ6IHByaWNlLCBjdXJyZW5jeTogXCJldXJcIiB9fSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzKCl9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnN0YXR1cyB8fCBlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBzdHJpcGVSZXNwb25zZSB7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGRhdGE6IHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG4gIHByaXZhdGUgYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICBwcml2YXRlIGF1dGg7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiB7aGVhZGVyczogaGVhZGVyc307XG4gIH1cblxuICBwdWJsaWMgZ2V0VG9rZW4oY2FyZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLmNyZWF0ZVRva2VuKHtcbiAgICAgICAgbnVtYmVyOiBjYXJkLm51bWJlcixcbiAgICAgICAgZXhwX21vbnRoOiBjYXJkLmV4cF9tb250aCxcbiAgICAgICAgZXhwX3llYXI6IGNhcmQuZXhwX3llYXIsXG4gICAgICAgIGN2YzogY2FyZC5jdmMsXG4gICAgICAgIG5hbWU6IGNhcmQubmFtZSxcbiAgICAgICAgYWRkcmVzc19saW5lMTogY2FyZC5hZGRyZXNzX2xpbmUxLFxuICAgICAgICBhZGRyZXNzX2xpbmUyOiBjYXJkLmFkZHJlc3NfbGluZTIsXG4gICAgICAgIGFkZHJlc3NfY2l0eTogY2FyZC5hZGRyZXNzX2NpdHksXG4gICAgICAgIGFkZHJlc3NfemlwOiBjYXJkLmFkZHJlc3NfemlwLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiBjYXJkLmFkZHJlc3Nfc3RhdGUsXG4gICAgICAgIGFkZHJlc3NfY291bnRyeTogY2FyZC5hZGRyZXNzX2NvdW50cnlcbiAgICAgIH0sIChzdGF0dXM6IG51bWJlciwgcmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgc3RyaXBlUmVzcG9uc2U6IHN0cmlwZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuY2FyZFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVzb2x2ZShzdHJpcGVSZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2FyZE51bWJlclZhbGlkYXRlKGNhcmROdW1iZXIpIHtcbiAgICByZXR1cm4gKDxhbnk+d2luZG93KS5TdHJpcGUuY2FyZC52YWxpZGF0ZUNhcmROdW1iZXIoY2FyZE51bWJlcik7XG4gIH1cblxuICBwdWJsaWMgYWRkTmV3Q2FyZChjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbihjYXJkRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IHN0cmlwZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2NhcmRzJywge3NvdXJjZTogZGF0YS50b2tlbn0sIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENhcmQoY2FyZElkKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdtZS9jdXN0b21lcnMnLCB7ZGVmYXVsdF9zb3VyY2U6IGNhcmRJZH0sdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpICsgJ21lL2NhcmRzLycgKyBjYXJkSWQsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDYXJkKGNhcmRJZCwgY2FyZERhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2NhcmRzLycgKyBjYXJkSWQsIGNhcmREYXRhLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHN0YXR1cy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdtZS9jdXN0b21lcnMnLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18sIERPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlb1NlcnZpY2Uge1xuICBwcml2YXRlIF9kb206IERvbUFkYXB0ZXIgPSBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLmdldERPTSgpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7IH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICB9XG5cbiAgc2V0TWV0YUVsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ25hbWUnIGluIGF0dHIpIHtcbiAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9kb20ucmVtb3ZlKGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5fZG9tLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKSBhcyBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ25hbWUnLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG5cbiAgc2V0T2dFbGVtKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGxldCBoZWFkVGFncyA9IHRoaXMuX2RvY3VtZW50LmhlYWQuY2hpbGRyZW4gYXMgSFRNTENvbGxlY3Rpb247XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW0gPSBoZWFkVGFnc1tpXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtLnRhZ05hbWUgPT09ICdtZXRhJykge1xuICAgICAgICBsZXQgYXR0ciA9IGVsZW1bJ2F0dHJpYnMnXTtcbiAgICAgICAgaWYgKCdwcm9wZXJ0eScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLnByb3BlcnR5ID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9kb20ucmVtb3ZlKGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5fZG9tLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKSBhcyBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ3Byb3BlcnR5JywgbmFtZSk7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ2NvbnRlbnQnLCB2YWx1ZSk7XG4gICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmhlYWQsIGVsKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvc2VvLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBBbmd1bGFyTWFzb25yeSwgTWFzb25yeU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1hc29ucnknO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IE1hc29ucnk6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNhdGVnb3J5TGlzdCB7XG4gIF9pZDogc3RyaW5nO1xuICB0eXBlOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb25fY29kZTogc3RyaW5nO1xuICBpY29uX25hbWU6IHN0cmluZztcbiAgbGFuZzogc3RyaW5nO1xuICBwcm9kdWN0czogSVNlcnZpY2VDYXRlZ29yeVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNhdGVnb3J5IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1zOiBJU2VydmljZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VGb3JtSXRlbSB7XG4gIGZvcm1JZD86IG51bWJlcjtcbiAgb3B0aW9uSWQ/OiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgaW5wdXRfdHlwZT86IHN0cmluZztcbiAgaW5wdXRfdmFsdWU/OiBhbnk7XG4gIHZhbHVlX3N5bWJvbD86IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHNlbGVjdGVkPzpib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICB0aXRsZV8xOiBzdHJpbmc7XG4gIHByaWNlX3R5cGU6IHN0cmluZztcbiAgb3B0aW9uczogSVNlcnZpY2VGb3JtSXRlbVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZXMge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VfdXJsOiBzdHJpbmc7XG4gIHByaWNlOiB7XG4gICAgYmFzZV9hbW91bnQ6IG51bWJlcjtcbiAgfSxcbiAgb3JkZXJfb3B0aW9uczoge1xuICAgIG1pbl9hbW91bnQ6IG51bWJlcjtcbiAgICBwYXltZW50X21ldGhvZHM6IHN0cmluZ1tdXG4gIH0sXG4gIGZvcm1zOiBJU2VydmljZUZvcm1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBiYXNlQW1vdW50ID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGNhbGN1bGF0ZWQ6IDBcbiAgfTtcbiAgcHVibGljIGNhbGN1bGF0ZVJlc3VsdHMgPSB7XG4gICAgcXVldWVGaXJzdDogMCxcbiAgICBxdWV1ZVNlY29uZDogMCxcbiAgICBxdWV1ZUVuZDogMFxuICB9O1xuICBwdWJsaWMgb3BlcmFuZHMgPSB7XG4gICAgcXVldWVGaXJzdDogW10sXG4gICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgIHF1ZXVlRW5kOiBbXVxuICB9O1xuICBwdWJsaWMgZmluYWxQcmljZSA9IDA7XG4gIHB1YmxpYyBkZWZhdWx0U2VydmljZXM7XG5cbiAgcHVibGljIHNlcnZpY2VzQ2F0ZWdvcnlMaXN0OiBJU2VydmljZUNhdGVnb3J5TGlzdFtdID0gW107XG4gIHB1YmxpYyBpc1NlcnZpY2VzVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgc2VydmljZXNEYXRhID0gW107XG5cbiAgcHVibGljIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeTogYm9vbGVhbnxzdHJpbmcgPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGU6IGJvb2xlYW58bnVtYmVyID0gZmFsc2U7XG4gIHB1YmxpYyBtb2RlbDogYW55O1xuICBwdWJsaWMgb3JkZXJEYXRhID0ge1xuICAgIHNlcnZpY2VfaWQ6ICcnLFxuICAgIHByaWNlOiB7XG4gICAgICBiYXNlX2Ftb3VudDogMFxuICAgIH0sXG4gICAgb3JkZXJfb3B0aW9uczoge1xuICAgICAgbWluX2Ftb3VudDogMCxcbiAgICAgIHBheW1lbnRfbWV0aG9kczogW11cbiAgICB9LFxuICAgIHNlcnZpY2U6ICcnLFxuICAgIHNlcnZpY2VzOiBbXSxcbiAgICB0b3RhbFByaWNlOiAwXG4gIH07XG4gIHB1YmxpYyBvcmRlcklzRnVsbCA9IGZhbHNlO1xuICBwdWJsaWMgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuICBwdWJsaWMgZGVsdGE6IG51bWJlciA9IC0xNTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgbWFzb25yeTogYW55O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvLyBAVmlld0NoaWxkKEFuZ3VsYXJNYXNvbnJ5KSBtYXNvbnJ5OiBBbmd1bGFyTWFzb25yeTtcbiAgLy8gQFZpZXdDaGlsZChNYXNvbnJ5TW9kdWxlKSBsYXlvdXQ6IE1hc29ucnlNb2R1bGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlLCBwcml2YXRlIHNlb1NlcnZpY2U6IFNlb1NlcnZpY2UpIHtcblxuICB9XG5cbiAgcmVuZGVyUGFnZShzZXJ2aWNlczogSVNlcnZpY2VzKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKHNlcnZpY2VzLnRpdGxlKTtcblxuICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZShzZXJ2aWNlcy50aXRsZSk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE1ldGFFbGVtKCdkZXNjcmlwdGlvbicsIHNlcnZpY2VzLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsIHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsIHNlcnZpY2VzLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vc2VydmljZXMvJyArIHNlcnZpY2VzLl9pZCk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcblxuICAgIHRoaXMuZGVmYXVsdFNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgdGhpcy5pc1NlcnZpY2VzVmlldyA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjb250ZW50JyxcbiAgICAgICAgaW1hZ2U6IHNlcnZpY2VzLmltYWdlX3VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IHNlcnZpY2VzLmRlc2NyaXB0aW9uLFxuICAgICAgICBvcHRpb25zOiBbXVxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5vcmRlckRhdGEgPSB7XG4gICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlcy5faWQsXG4gICAgICBwcmljZTogc2VydmljZXMucHJpY2UsXG4gICAgICBvcmRlcl9vcHRpb25zOiBzZXJ2aWNlcy5vcmRlcl9vcHRpb25zLFxuICAgICAgc2VydmljZTogc2VydmljZXMudGl0bGUsXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICB0b3RhbFByaWNlOiBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudFxuICAgIH07XG4gICAgdGhpcy5iYXNlQW1vdW50LnN0YXJ0ID0gc2VydmljZXMucHJpY2UuYmFzZV9hbW91bnQ7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICBsZXQgZm9ybUlkID0gMTtcbiAgICBzZXJ2aWNlcy5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcbiAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICBpZiAoZm9ybS50aXRsZV8xKSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlXzE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZV8xID0gZm9ybS50aXRsZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNlcnZpY2VGb3JtOiBJU2VydmljZUZvcm0gPSB7XG4gICAgICAgIHRpdGxlOiBmb3JtLnRpdGxlLFxuICAgICAgICB0aXRsZV8xIDogdGl0bGVfMSxcbiAgICAgICAgdHlwZTogZm9ybS50eXBlLFxuICAgICAgICByZXF1aXJlZDogZm9ybS5yZXF1aXJlZCxcbiAgICAgICAgcHJpY2VfdHlwZTogZm9ybS5wcmljZV90eXBlLFxuICAgICAgICBvcHRpb25zOiBbXVxuICAgICAgfTtcblxuICAgICAgbGV0IG9wdGlvbklkID0gMDtcbiAgICAgIGZvcm0ub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBJU2VydmljZUZvcm1JdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICB2YXIgdGl0bGVfMTogc3RyaW5nO1xuICAgICAgICBpZiAoaXRlbS50aXRsZV8xKSB7XG4gICAgICAgICAgdGl0bGVfMSA9IGl0ZW0udGl0bGVfMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgZm9ybUlkOiBmb3JtSWQsXG4gICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbklkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgIHRpdGxlXzE6IHRpdGxlXzEsXG4gICAgICAgICAgdHlwZTogZm9ybS50eXBlLFxuICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBvcHRpb25bJ2lucHV0X3R5cGUnXSA9IGl0ZW0uaW5wdXRfdHlwZTtcbiAgICAgICAgICBvcHRpb25bJ2lucHV0X3ZhbHVlJ10gPSBpdGVtLmlucHV0X3ZhbHVlO1xuICAgICAgICAgIG9wdGlvblsndmFsdWVfc3ltYm9sJ10gPSBpdGVtLnZhbHVlX3N5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnc2VsZWN0ZWQnIGluIGl0ZW0pIHtcbiAgICAgICAgICBvcHRpb25bJ3NlbGVjdGVkJ10gPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZpY2VGb3JtLm9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICBvcHRpb25JZCArKztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEucHVzaChzZXJ2aWNlRm9ybSk7XG4gICAgICBmb3JtSWQgKys7XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICB9XG5cbiAgdG9nZ2xlU2VydmljZShzZXJ2aWNlTmFtZSwgaXRlbU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS50aXRsZSA9PT0gc2VydmljZU5hbWUpIHtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IGl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgJiYgc2VydmljZS5yZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3JhZGlvYnV0dG9uJ30pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05vdEVtcHR5Rm9ybShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNEYXRhW3NlcnZpY2VJZF0ub3B0aW9uc1tpdGVtSWRdLnNlbGVjdGVkID0gIWN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNEYXRhW3NlcnZpY2VJZF0ub3B0aW9uc1tpdGVtSWRdLnNlbGVjdGVkID0gIWN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnY2hlY2tib3gnfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3JhZGlvYnV0dG9uJ30pO1xuICAgICAgICAgICAgICAgIHRoaXMudW5jaGVja0FsbEl0ZW1zKHNlcnZpY2VOYW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnY2hlY2tib3gnfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtSWQrKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXJ2aWNlSWQrKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBjaGVja05vdEVtcHR5Rm9ybShmb3JtSWQsIG9wdGlvbklkKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uSWQgIT09IG9wdGlvbklkKSB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2hhbmdlVmFsdWUoZm9ybUlkLCBvcHRpb25JZCkge1xuICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUpO1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdpbnB1dCd9KTtcblxuICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YVtmb3JtSWRdLm9wdGlvbnNbb3B0aW9uSWRdLmlucHV0X3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICB9XG5cbiAgc2VsZWN0QWxsQ29udGVudCgkZXZlbnQpIHtcbiAgICAkZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICB9XG5cbiAgdW5jaGVja0FsbEl0ZW1zKHNlcnZpY2VOYW1lKSB7XG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgaWYoc2VydmljZS50aXRsZSA9PT0gc2VydmljZU5hbWUpIHtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBpdGVtSWQrKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXJ2aWNlSWQrKztcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXVlV29ya2VyKCkge1xuICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LnN0YXJ0O1xuICAgIHRoaXMub3BlcmFuZHMgPSB7XG4gICAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICAgIHF1ZXVlU2Vjb25kOiBbXSxcbiAgICAgIHF1ZXVlRW5kOiBbXVxuICAgIH07XG4gICAgdGhpcy5maW5hbFByaWNlID0gMDtcblxuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGxldCBpdGVtSWQgPSAwO1xuICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCdpbnB1dF90eXBlJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5wdXRfdmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlU2Vjb25kLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcsXG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICAgIGNudDogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUVuZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQU1PVU5UX1BFUl9JTlBVVCcsXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlOiBzZXJ2aWNlLnR5cGUsXG4gICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LnN0YXJ0ICsgaXRlbS5hbW91bnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVGaXJzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IDAsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUVuZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQU1PVU5UJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IDAsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUlkKys7XG4gICAgICB9KTtcbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICs9IHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVGaXJzdCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCAqIHRhc2suY250O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVTZWNvbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICsgKHRhc2suYW1vdW50ICogdGFzay5jbnQpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdBTU9VTlQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyB0YXNrLmFtb3VudDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVSZXN1bHRzLnF1ZXVlRW5kID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcigpIHtcbiAgICB0aGlzLnF1ZXVlV29ya2VyKCk7XG4gICAgdGhpcy5vcmRlckRhdGEuc2VydmljZXMgPSBbXTtcbiAgICB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdDSEVDS0JPWCcpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0lOUFVUVEVYVCcpIHtcbiAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyAmJiBpdGVtLmlucHV0X3ZhbHVlICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uaW5wdXRfdmFsdWUgKiB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVGaXJzdCxcbiAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0udmFsdWVfc3ltYm9sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJyAmJiBpdGVtLmlucHV0X3ZhbHVlICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uYW1vdW50ICogaXRlbS5pbnB1dF92YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUlkKys7XG4gICAgICB9KTtcbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuXG4gICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAgICAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcy5wdXNoKHNlcnZpY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRPcmRlclN0YXRlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yZGVySXNGdWxsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgICAvLyB0b2dnbGVTZXJ2aWNlKGNhdGVnb3J5TGlzdElkOiBzdHJpbmcsIGNhdGVnb3J5SWQ6IHN0cmluZywgc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgIC8vIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gICAgLy8gdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgICAvLyAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgICAvLyAgIGlmIChjYXRlZ29yeUxpc3QuX2lkID09PSBjYXRlZ29yeUxpc3RJZCkge1xuICAgIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGNhdGVnb3J5RGF0YS5faWQgPT09IGNhdGVnb3J5SWQpIHtcbiAgICAvLyAgICAgICAgIGxldCBzZXJ2aWNlSW5kZXggPSAwO1xuICAgIC8vICAgICAgICAgY2F0ZWdvcnlEYXRhLml0ZW1zLmZvckVhY2goKHNlcnZpY2VEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICAgIGlmIChzZXJ2aWNlRGF0YS5uYW1lID09PSBzZXJ2aWNlTmFtZSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdLnByb2R1Y3RzW2NhdGVnb3J5SW5kZXhdLml0ZW1zW3NlcnZpY2VJbmRleF0uc2VsZWN0ZWQgPSAhc2VydmljZURhdGEuc2VsZWN0ZWQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICAgIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHNlcnZpY2VJbmRleCsrO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZWdvcnlJbmRleCsrO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjYXRlZ29yeUxpc3RJbmRleCsrO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vIH1cblxuICAvLyBjYWxjdWxhdGVPcmRlcigpIHtcbiAgLy8gICB0aGlzLm9yZGVyRGF0YSA9IFtdO1xuICAvLyAgIGxldCBjdXJyZW50T3JkZXJTdGF0ZSA9IFtdO1xuICAvLyAgIGxldCBhcnJheUluZGV4ID0gMDtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0LnByb2R1Y3RzLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgLy8gICAgICAgc2VydmljZS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgLy8gICAgICAgICAgIGlmIChhcnJheUluZGV4IGluIGN1cnJlbnRPcmRlclN0YXRlKSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdLml0ZW1zLnB1c2goeyBuYW1lOiBpdGVtLm5hbWUgfSk7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZVthcnJheUluZGV4XSA9IHtcbiAgLy8gICAgICAgICAgICAgICBfaWQ6IHNlcnZpY2UuX2lkLFxuICAvLyAgICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gIC8vICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gIC8vICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWVcbiAgLy8gICAgICAgICAgICAgICB9XVxuICAvLyAgICAgICAgICAgICB9O1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGFycmF5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGN1cnJlbnRPcmRlclN0YXRlLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlLm5hbWUpIHtcbiAgLy8gICAgICAgdGhpcy5vcmRlckRhdGEucHVzaChzZXJ2aWNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyB0YWJOYXZpZ2F0ZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgPSBpZDtcbiAgLy8gICB0aGlzLm9yZGVyRGF0YSA9IFtdO1xuICAvLyAgIHRoaXMuY2xlYXJTZXJ2aWNlRGF0YSgpO1xuICAvLyAgIHRoaXMucmVuZGVyUGFnZShpZCk7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChzZXJ2aWNlQ2F0ZWdvcnlEYXRhKSA9PiB7XG4gIC8vICAgICBpZiAoc2VydmljZUNhdGVnb3J5RGF0YS5faWQgPT09IGlkKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZSA9IHNlcnZpY2VDYXRlZ29yeURhdGEudHlwZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHJlbmRlclBhZ2UoaWQ6IHN0cmluZykge1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoU2VydmljZXNMaXN0OiBJU2VydmljZUNhdGVnb3J5TGlzdCkgPT4ge1xuICAvLyAgICAgaWYgKFNlcnZpY2VzTGlzdC5faWQgPT09IGlkKSB7XG4gIC8vICAgICAgIHRoaXMuc2VydmljZXNEYXRhID0gU2VydmljZXNMaXN0LnByb2R1Y3RzO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmljZXNWaWV3ICE9PSBmYWxzZSAmJiBpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5LWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnNlcnZpY2VzLWJsb2NrJyxcbiAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgb3JpZ2luVG9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtYWtlTWFzb25yeSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZih0aGlzLm1hc29ucnkpIHtcbiAgICAgICAgdGhpcy5tYXNvbnJ5LmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMucm91dGUudXJsLnN1YnNjcmliZSgodXJsKSA9PiB7XG4gICAgLy8gICBpZiAoMCBpbiB1cmwpIHtcbiAgICAvLyAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlc09iamVjdCgpO1xuICAgIC8vICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAvLyAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdTdGFyYm9vayB8IEFjcXVpc3RhIHNlcnZpemkgcHJvZmVzc2lvbmFsaSBvbmxpbmUnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc2VydmljZUlkID0gcGFyYW1zWydpZCddO1xuICAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlc09iamVjdCgpO1xuICAgICAgaWYgKHNlcnZpY2VJZCkge1xuICAgICAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNlcnZpY2VzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKHNlcnZpY2VzKTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHRoaXMuaG9tZVNlcnZpY2UuZ2V0U2VydmljZUJ5SWQoc2VydmljZUlkKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBzZXJ2aWNlIGJ5IGlkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZShkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiA0OTAsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnNlcnZpY2VzLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luVG9wOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vcmRlclNlcnZpY2UuZ2V0T3JkZXJFdmVudCQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5vcmRlckNyZWF0ZWQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5ob21lU2VydmljZS5nZXRDYXRlZ29yaWVzKClcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIHRoaXMucGFyc2VTZXJ2aWNlRGF0YShkYXRhLnJlc3VsdCk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICB9KTtcblxuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRBY3RpdmVUYWIkLnN1YnNjcmliZSh0YWIgPT4ge1xuICAgIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gdGFiO1xuICAgIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgPSB0YWI7XG4gICAgLy8gfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gcGFyc2VTZXJ2aWNlRGF0YShkYXRhKSB7XG4gIC8vICAgbGV0IGkgPSAwO1xuICAvLyAgIGRhdGEuZm9yRWFjaCgoU2VydmljZXNMaXN0OiBhbnkpID0+IHtcbiAgLy8gICAgIGxldCBQcm9kdWN0cyA9IFtdO1xuICAvLyAgICAgU2VydmljZXNMaXN0LnByb2R1Y3RzLmZvckVhY2goKFNlcnZpY2VzQ2F0ZWdvcnkpID0+IHtcbiAgLy8gICAgICAgbGV0IEl0ZW1zID0gW107XG4gIC8vICAgICAgIFNlcnZpY2VzQ2F0ZWdvcnkuaXRlbXMuZm9yRWFjaCgoQ2F0ZWdvcnlJdGVtKSA9PiB7XG4gIC8vICAgICAgICAgSXRlbXMucHVzaCh7XG4gIC8vICAgICAgICAgICBuYW1lOiBDYXRlZ29yeUl0ZW0gYXMgc3RyaW5nLFxuICAvLyAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBQcm9kdWN0cy5wdXNoKHtcbiAgLy8gICAgICAgICBfaWQ6IFNlcnZpY2VzQ2F0ZWdvcnkuX2lkIGFzIG51bWJlcixcbiAgLy8gICAgICAgICB0aXRsZTogU2VydmljZXNDYXRlZ29yeS50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgaXRlbXM6IEl0ZW1zXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LnB1c2goe1xuICAvLyAgICAgICBfaWQ6IFNlcnZpY2VzTGlzdC5faWQgYXMgc3RyaW5nLFxuICAvLyAgICAgICB0eXBlOiBTZXJ2aWNlc0xpc3QudHlwZSBhcyBudW1iZXIsXG4gIC8vICAgICAgIHRpdGxlOiBTZXJ2aWNlc0xpc3QudGl0bGUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBpY29uX2NvZGU6IFNlcnZpY2VzTGlzdC5pY29uX2NvZGUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBpY29uX25hbWU6IFNlcnZpY2VzTGlzdC5pY29uX25hbWUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBsYW5nOiBTZXJ2aWNlc0xpc3QubGFuZyBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHByb2R1Y3RzOiBQcm9kdWN0c1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBpZiAoaSA9PT0gMCkge1xuICAvLyAgICAgICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IFNlcnZpY2VzTGlzdC5faWQ7XG4gIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShTZXJ2aWNlc0xpc3QuX2lkKTtcbiAgLy8gICAgICAgaSsrO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTZXJ2aWNlRGF0YSgpIHtcbiAgLy8gICBsZXQgY2F0ZWdvcnlMaXN0SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBsZXQgY2F0ZWdvcnlJbmRleCA9IDA7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gIC8vICAgICAgIGxldCBzZXJ2aWNlSW5kZXggPSAwO1xuICAvLyAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgLy8gICAgICAgICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0W2NhdGVnb3J5TGlzdEluZGV4XVxuICAvLyAgICAgICAgICAgLnByb2R1Y3RzW2NhdGVnb3J5SW5kZXhdXG4gIC8vICAgICAgICAgICAuaXRlbXNbc2VydmljZUluZGV4XVxuICAvLyAgICAgICAgICAgLnNlbGVjdGVkID0gZmFsc2U7XG4gIC8vICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBzd2lwZShhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCwgZGVsdGEpIHtcbiAgLy8gICBpZiAoaXNCcm93c2VyKSB7XG4gIC8vICAgICBsZXQgY2FsY3VsYXRlRGVsdGEgPSB0aGlzLmRlbHRhICsgZGVsdGE7XG4gIC8vICAgICBsZXQgbWVudVNpemUgPSAwO1xuICAvLyAgICAgbGV0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtcGlsbHMgPiBsaScpO1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgbGV0IG1lbnVJdGVtOiBhbnkgPSBhbGxNZW51SXRlbXNbaV07XG4gIC8vICAgICAgIG1lbnVTaXplICs9IG1lbnVJdGVtLm9mZnNldFdpZHRoO1xuICAvLyAgICAgfVxuICAvLyAgICAgbGV0IG1lbnVCbG9ja1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFiLWJhcicpLmNsaWVudFdpZHRoO1xuICAvLyAgICAgbGV0IGFsbG93TWFyZ2luID0gKG1lbnVTaXplICsgNTApIC0gbWVudUJsb2NrV2lkdGg7XG4gIC8vICAgICBpZiAoYWxsb3dNYXJnaW4gPj0gMCkge1xuICAvLyAgICAgICBhbGxvd01hcmdpbiA9IC1hbGxvd01hcmdpbjtcbiAgLy8gICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhID4gMCkge1xuICAvLyAgICAgICAgIHRoaXMuZGVsdGEgPSAtMTU7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhIDwgYWxsb3dNYXJnaW4pIHtcbiAgLy8gICAgICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQgJiYgYWxsb3dNYXJnaW4gIT09IDApIHtcbiAgLy8gICAgICAgICAgICAgdGhpcy5kZWx0YSA9IGFsbG93TWFyZ2luO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICB0aGlzLmRlbHRhID0gY2FsY3VsYXRlRGVsdGE7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgb3JkZXJDcmVhdGVkKGV2ZW50KSB7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZS50aXRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJQYWdlKHRoaXMuZGVmYXVsdFNlcnZpY2VzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlciB7XG4gIF9pZDogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgcGF5bWVudD86IHtcbiAgICBhbW91bnQ/OiBudW1iZXIsXG4gICAgY3VycmVuY3k/OiBzdHJpbmdcbiAgfSxcbiAgY2F0ZWdvcnlfdHlwZTogbnVtYmVyO1xuICBkZWxpdmVyeV9kZXRhaWxzOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2RhdGU6IHN0cmluZztcbiAgZGVsaXZlcnlfYWRkcmVzczoge1xuICAgIHN0cmVldDogc3RyaW5nO1xuICAgIHN0cmVldF9udW1iZXI6IHN0cmluZztcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgcG9zdGFsX2NvZGU6IHN0cmluZztcbiAgICBwcm92aW5jZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgfSxcbiAgY3VzdG9tZXI6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gIH0sXG4gIG1lcmNoYW50OiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIHBob25lX251bWJlcjogc3RyaW5nO1xuICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVycy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaXQ6IGFueTtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRhZ2xpbmVzID0ge1xuICAgICdSaWNoaWVzdGUgZGVpIGNsaWVudGknOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJyxcbiAgICAnSSBtaWVpIG9yZGluaSc6ICdJIG1pZWkgb3JkaW5pJyxcbiAgICAnQXJjaGl2aW8nOiAnQXJjaGl2aW8gZGkgdHV0dGkgZ2xpIG9yZGluaSdcbiAgfTtcbiAgcHVibGljIHRhYnMgPSBbXG4gICAge25hbWU6ICdJIG1pZWkgb3JkaW5pJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICBdO1xuICBwdWJsaWMgY2F0ZWdvcmllcyA9IFtdO1xuICBwdWJsaWMgcGFnZURhdGE6IElPcmRlcltdID0gW107XG4gIHB1YmxpYyByZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNWZW5kb3IgPSBmYWxzZTtcbiAgcHVibGljIGVtcHR5TGlzdFRpdGxlID0gJydcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgYXV0aERhdGEgPSB7fTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIHRoaXMuYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgYXV0aERhdGEuYWNjb3VudF90eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdWRU5ET1InKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmVuZG9yID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1ZlbmRvcikge1xuICAgICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnSSBtaWVpIG9yZGluaScsIHNlbGVjdGVkOiBmYWxzZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICAgICAgICAgIF07XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdSaWNoaWVzdGUgZGVpIGNsaWVudGknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgIH1cblxuXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgbGV0IG9yZGVySW5kZXggPSAwO1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW5jZWxPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSA5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlYWN0aXZhdGVPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgaWYgKGFjdGlvbi5kYXRhLmlzTW9kaWZpZWQgPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSh0aGlzLnNlbGVjdFRhYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5wYXltZW50ID0ge2Ftb3VudDogYWN0aW9uLmRhdGEub3JkZXJQcmljZSwgY3VycmVuY3k6ICdldXInfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuYW1vdW50ID0gYWN0aW9uLmRhdGEub3JkZXJQcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuY3VycmVuY3kgPSAnZXVyJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRpbnVlT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0VGFiID0gcGFnZTtcbiAgICBsZXQgdGFiSW5kZXggPSAwO1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICh0YWIubmFtZSA9PT0gcGFnZSkge1xuICAgICAgICB0aGlzLnRhYnNbdGFiSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFic1t0YWJJbmRleF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRhYkluZGV4Kys7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYW1zID0gW107XG5cbiAgICBpZiAocGFnZSA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSAnTm9uIGNpIHNvbm8gb3JkaW5pIHJpY2hpZXN0aSBkYWkgY2xpZW50aSBwZXIgaWwgbW9tZW50bydcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdSRUNFSVZFRCd9KTtcbiAgICB9XG5cbiAgICBpZiAocGFnZSA9PT0gJ0kgbWllaSBvcmRpbmknKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gJ05vbiBjaSBzb25vIG9yZGluaSBlZmZldHR1YXRpJ1xuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ1JFUVVJUkVEJ30pO1xuICAgIH1cblxuICAgIGlmIChwYWdlID09PSAnQXJjaGl2aW8nKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gXCJMJ2FyY2hpdmlvIGRlZ2xpIG9yZGluaSBlIHZ1b3RhXCJcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdBUkNISVZFJ30pO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE9yZGVycyhwYXJhbXMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IGxpc3Qgb2Ygb3JkZXJzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucGFnZURhdGEgPSByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWdlRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLnRhZ2xpbmVzW3BhZ2VdKTtcbiAgICB9XG4gIH1cblxuICBkYXRlRm9ybWF0aW5nKGRhdGUpIHtcbiAgICBsZXQgcmV0dXJuRGF0ZSA9ICcnO1xuICAgIGlmIChkYXRlICE9PSAnbm93Jykge1xuICAgICAgbGV0IGRhdGVTdHJpbmcgPSBkYXRlLnN1YnN0cmluZygwLCBkYXRlLmxlbmd0aCAtIDUpO1xuICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc3BsaXQoJ1QnKTtcbiAgICAgIGxldCBkYXRlQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMF0uc3BsaXQoJy0nKTtcbiAgICAgIGxldCBob3VyQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMV0uc3BsaXQoJzonKTtcbiAgICAgIHJldHVybkRhdGUgPSBkYXRlQ29tcG9uZW50c1syXSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlQ29tcG9uZW50c1sxXS0xXSArICcgJyArIGRhdGVDb21wb25lbnRzWzBdICsgJyAnICsgaG91ckNvbXBvbmVudHNbMF0gKyAnOicgKyBob3VyQ29tcG9uZW50c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgbW9udGggPSAxICsgY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBob3VycyA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCk7XG4gICAgICBsZXQgbWludXRlcyA9IGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGxldCBzZWNvbmRzID0gY3VycmVudERhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgcmV0dXJuRGF0ZSArPSB5ZWFyO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtb250aCA+IDkgPyAnLScgKyBtb250aCA6ICctMCcgKyBtb250aDtcbiAgICAgIHJldHVybkRhdGUgKz0gZGF5ID4gOSA/ICctJyArIGRheSA6ICctMCcgKyBkYXk7XG4gICAgICByZXR1cm5EYXRlICs9IGhvdXJzID4gOSA/ICdUJyArIGhvdXJzIDogJ1QwJyArIGhvdXJzO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtaW51dGVzID4gOSA/ICc6JyArIG1pbnV0ZXMgOiAnOjAnICsgbWludXRlcztcbiAgICAgIHJldHVybkRhdGUgKz0gc2Vjb25kcyA+IDkgPyAnOicgKyBzZWNvbmRzICArICcuMDAwWicgOiAnOjAnICsgc2Vjb25kcyArICcuMDAwWic7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5EYXRlO1xuICB9XG5cbiAgZGF0ZUNvbXBhcmUoZGF0ZTEsIGRhdGUyKSB7XG4gICAgbGV0IGRhdGUxT2JqID0gRGF0ZS5wYXJzZShkYXRlMSk7XG4gICAgbGV0IGRhdGUyT2JqID0gRGF0ZS5wYXJzZShkYXRlMik7XG4gICAgaWYgKGRhdGUxT2JqID4gZGF0ZTJPYmopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXRlbXNGb3JtYXRpbmcoaXRlbXMpIHtcbiAgICBsZXQgcmV0dXJuUHJvZHVjdHMgPSBbXTtcbiAgICBsZXQgcHJvZHVjdHMgPSBpdGVtcy5zcGxpdCgnfHwnKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICBsZXQgcHJvZHVjdENvbXBvbmVudHMgPSBwcm9kdWN0LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocHJvZHVjdENvbXBvbmVudHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5Qcm9kdWN0cy5wdXNoKHtuYW1lOiBwcm9kdWN0Q29tcG9uZW50c1swXSwgaXRlbXM6IHByb2R1Y3RDb21wb25lbnRzWzFdfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblByb2R1Y3RzO1xuICB9XG5cbiAgY29uZmlybU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY2FuY2VsT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgcmVhY3RpdmF0ZU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAncmVhY3RpdmF0ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNvbXBsZXRhT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdhZGRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICBlZGl0T3JkZXIoaWQsIHBheW1lbnQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlZGl0UHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnR9fSk7XG4gIH1cbiAgY29udGludWVPcmRlcihpZCwgcGF5bWVudCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnQsIGluZm9ybWF0aW9uOiAnMTIw4oKsICsgNi424oKsID0gMTI2LjbigqwnfX0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlckRhdGEge1xuICBmdWxsbmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgc3RyZWV0Pzogc3RyaW5nO1xuICBjaXR5Pzogc3RyaW5nO1xuICBwb3N0YWxfY29kZT86IG51bWJlcjtcbiAgcHJvdmluY2U/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcbiAgcHVibGljIGRlbHRhOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgdGFicyA9IFtcbiAgICB7bmFtZTogJ0dlbmVyYWxpJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdzZXR0aW5ncyd9LFxuICAgIHtuYW1lOiAnTWV0b2RvIGRpIFBhZ2FtZW50bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncGF5bWVudCd9LFxuICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICB7bmFtZTogJ1ByaXZhY3kgUG9saWN5Jywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwcml2YWN5J30sXG4gICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgXTtcblxuICBwdWJsaWMgdXNlckRhdGE6IElVc2VyRGF0YSA9IHtcbiAgICBmdWxsbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lX251bWJlcjogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJydcbiAgfTtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkRXJyb3IgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiBmYWxzZSxcbiAgICBwYXNzd29yZENvbmZpcm06IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBjaGFuZ2VQYXNzd29yZERhdGEgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiAnJyxcbiAgICBuZXdQYXNzd29yZDogJycsXG4gICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICB9O1xuICBwdWJsaWMgZm9ybUVycm9yOiBib29sZWFufHt0aXRsZT86IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nfSA9IGZhbHNlO1xuICBwdWJsaWMgY2FyZHMgPSBbXTtcbiAgcHVibGljIGRlZmF1bHRDYXJkID0gJyc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsXG4gICAgICBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSxcbiAgICAgIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSxcbiAgICAgIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lID0gYXV0aERhdGEuZnVsbG5hbWU7XG4gICAgICAgIHRoaXMudXNlckRhdGEuZW1haWwgPSBhdXRoRGF0YS5lbWFpbDtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnSWwgbWlvIGFjY291bnQnKTtcblxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RUYWIgPSBwYXJhbXNbJ3BhZ2UnXTtcbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncGF5bWVudCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdNZXRvZG8gZGkgcGFnYW1lbnRvJyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0Q2FyZHMoKVxuICAgICAgICAgICAgLnRoZW4oKGNhcmRzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBjYXJkcycsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkID0gY2FyZHMuZGVmYXVsdF9zb3VyY2U7XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgICAgY2FyZHMuc291cmNlcy5kYXRhLmZvckVhY2goKGNhcmREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmREYXRhKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIFN0YXJib29rIGFjY291bnQgZG8gbm90IGhhdmUgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIFdoZW4geW91IGFkZCBhIG5ldyBjYXJkLCB3aWxsIGJlIGNyZWF0ZWQgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIFN0YXJib29rIGFjY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBpZiAoZXJyb3IuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQnfX0pO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdzZXR0aW5ncycpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdJbmZvcm1hemlvbmkgZGVsIG1pbyBhY2NvdW50Jyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSgpXG4gICAgICAgICAgICAudGhlbigocHJvZmlsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHVzZXIgcHJvZmlsZScsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lID0gcHJvZmlsZS5yZXN1bHQucHJvZmlsZS5mdWxsbmFtZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5lbWFpbCA9IHByb2ZpbGUucmVzdWx0LmVtYWlsO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnBob25lX251bWJlciA9IHByb2ZpbGUucmVzdWx0LnBob25lX251bWJlcjtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5zdHJlZXQgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnN0cmVldDtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5jaXR5ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5jaXR5O1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnBvc3RhbF9jb2RlID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5wb3N0YWxfY29kZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5wcm92aW5jZSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuY291bnRyeSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MuY291bnRyeTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCd9fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdjb25kaXRpb25zJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdUZXJtaW5pIGUgY29uZGl6aW9uaSBk4oCZdXRpbGl6em8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J3ByaXZhY3knKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnUHJpdmFjeSBQb2xpY3knKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0naGVscCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnQXNzaXN0ZW56YScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocGFyYW1zWydwYWdlJ10pO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ25ld0NhcmQnOlxuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICduZXdDYXJkRXJyb3InOlxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N0YXJ0TmV3Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYXJkRWRpdGVkJzpcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzW2ldID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvZmlsZSgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wcm9maWxlU2VydmljZS51cGRhdGVQcm9maWxlKHRoaXMudXNlckRhdGEpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdVcGRhdGUgdXNlciBwcm9maWxlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0ge307XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbGV0IGF1dGhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgICAgICAgYXV0aERhdGEucHJvZmlsZS5mdWxsbmFtZSA9IHRoaXMudXNlckRhdGEuZnVsbG5hbWU7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLnBob25lX251bWJlciA9IHRoaXMudXNlckRhdGEucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLnN0cmVldCA9IHRoaXMudXNlckRhdGEuc3RyZWV0O1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLmNpdHkgPSB0aGlzLnVzZXJEYXRhLmNpdHk7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MucG9zdGFsX2NvZGUgPSB0aGlzLnVzZXJEYXRhLnBvc3RhbF9jb2RlO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLnByb3ZpbmNlID0gdGhpcy51c2VyRGF0YS5wcm92aW5jZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5jb3VudHJ5ID0gdGhpcy51c2VyRGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICBwcm9maWxlRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUocHJvZmlsZURhdGEpO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0hhaSBhZ2dpb3JuYXRvIGxlIHR1ZSBpbmZvcm1hemlvbmkgY29uIHN1Y2Nlc3NvIScsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTogJ0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgdGhpcy5zZWxlY3RUYWIgPSBwYWdlO1xuICB9XG5cbiAgZ2V0UG9wdXAodHlwZSkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJyc7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0pIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRGF0YS5jdXJyZW50UGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRGF0YS5uZXdQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLnBhc3N3b3JkQ29uZmlybSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrUGFzc3dvcmQobmV3UGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkge1xuICAgIGlmIChuZXdQYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRXJyb3IucGFzc3dvcmRDb25maXJtID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgICBsZXQgbWVudVNpemUgPSAwO1xuICAgIGxldCBhbGxNZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdC1uYXZpZ2F0ZSA+IGRpdiA+IGEnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1lbnVJdGVtOiBhbnkgPSBhbGxNZW51SXRlbXNbaV07XG4gICAgICBtZW51U2l6ZSArPSBtZW51SXRlbS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgbGV0IG1lbnVCbG9ja1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbmF2aWdhdGUnKS5jbGllbnRXaWR0aDtcbiAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUpIC0gbWVudUJsb2NrV2lkdGg7XG4gICAgaWYgKGFsbG93TWFyZ2luID49IDApIHtcbiAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxjdWxhdGVEZWx0YSA8IGFsbG93TWFyZ2luKSB7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IGFsbG93TWFyZ2luO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gY2FsY3VsYXRlRGVsdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGROZXdDYXJkKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2FkZENhcmQnfSk7XG4gIH1cblxuICBmb3JtYXRZZWFyKHllYXIpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGZvcm1hdGVkWWVhciA9ICcnO1xuICAgIGxldCB5ZWFyQXJyYXkgPSB5ZWFyLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIHllYXJBcnJheS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgIGlmIChpID4gMSkge1xuICAgICAgICBmb3JtYXRlZFllYXIgKz0gbnVtO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JtYXRlZFllYXI7XG4gIH1cblxuICBmb3JtYXRDc3NDbGFzcyhicmFuZCkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBpZiAoYnJhbmQgPT09ICdWaXNhJykge1xuICAgICAgcmVzdWx0ID0gJ3Zpc2EnO1xuICAgIH1cbiAgICBpZiAoYnJhbmQgPT09ICdBbWVyaWNhbiBFeHByZXNzJykge1xuICAgICAgcmVzdWx0ID0gJ2FtZXgnO1xuICAgIH1cbiAgICBpZiAoYnJhbmQgPT09ICdNYXN0ZXJDYXJkJykge1xuICAgICAgcmVzdWx0ID0gJ21hc3RlcmNhcmQnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VsZWN0Q2FyZChpZCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLnNlbGVjdENhcmQoaWQpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdTZWxlY3RpbmcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmQgPSBzdGF0dXMuZGVmYXVsdF9zb3VyY2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBkZWxldGVDYXJkKGlkKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZGVsZXRlQ2FyZChpZClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0RlbGV0aW5nIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpICsrO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChpZCA9PT0gdGhpcy5kZWZhdWx0Q2FyZCAmJiB0aGlzLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBvdGhlckNhcmQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5pZCAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBvdGhlckNhcmQgPSBjYXJkLmlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2FyZChvdGhlckNhcmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGVkaXRDYXJkKGlkKSB7XG4gICAgbGV0IGNhcmREYXRhID0ge307XG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZihjYXJkLmlkID09PSBpZCkge1xuICAgICAgICBjYXJkRGF0YSA9IHtcbiAgICAgICAgICBpZDogY2FyZC5pZCxcbiAgICAgICAgICBhZGRyZXNzX2NpdHk6IGNhcmQuYWRkcmVzc19jaXR5LFxuICAgICAgICAgIGFkZHJlc3NfY291bnRyeTogY2FyZC5hZGRyZXNzX2NvdW50cnksXG4gICAgICAgICAgYWRkcmVzc19saW5lMTogY2FyZC5hZGRyZXNzX2xpbmUxLFxuICAgICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgICBhZGRyZXNzX3N0YXRlOiBjYXJkLmFkZHJlc3Nfc3RhdGUsXG4gICAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgICAgZXhwX21vbnRoOiBjYXJkLmV4cF9tb250aCxcbiAgICAgICAgICBleHBfeWVhcjogdGhpcy5mb3JtYXRZZWFyKGNhcmQuZXhwX3llYXIpLFxuICAgICAgICAgIG5hbWU6IGNhcmQubmFtZSxcbiAgICAgICAgICBudW1iZXI6ICcqKioqICcgKyBjYXJkLmxhc3Q0LFxuICAgICAgICAgIGN2YzogJyoqKidcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlZGl0Q2FyZCcsIGRhdGE6IGNhcmREYXRhfSk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9nb3V0JywgZGF0YToge319KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBwcml2YXRlIGF1dGg7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiB7aGVhZGVyczogaGVhZGVyc307XG4gIH1cblxuICB1cGRhdGVQcm9maWxlKHVzZXJEYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZnVsbG5hbWU6IHVzZXJEYXRhLmZ1bGxuYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YS5waG9uZV9udW1iZXIsXG4gICAgICBzdHJlZXQ6IHVzZXJEYXRhLnN0cmVldCxcbiAgICAgIGNpdHk6IHVzZXJEYXRhLmNpdHksXG4gICAgICBwb3N0YWxfY29kZTogdXNlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICBwcm92aW5jZTogdXNlckRhdGEucHJvdmluY2UsXG4gICAgICBjb3VudHJ5OiB1c2VyRGF0YS5jb3VudHJ5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaSArICdtZScsIGRhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFByb2ZpbGUoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lJywgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgJy4vX193b3JrYXJvdW5kLm5vZGUnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XG5cbi8vIEFwcFxuXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MCB8fCA4MDgwO1xuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8qKlxuICogRXhwcmVzcyBWaWV3XG4gKi9cbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG4vKiBUaGVyZSBhcmUgY29kZSBmcm9tIG9sZCBzZXJ2ZXIgKi9cbi8vIGFwcC51c2UoJy8nLCByZXF1aXJlKCdyZWRpcmVjdC1odHRwcycpKHtcbi8vICAgYm9keTogJycsXG4vLyAgIHBvcnQ6IDQ0Myxcbi8vICAgdHJ1c3RQcm94eTogdHJ1ZVxuLy8gfSkpXG4vL1xuLy8gYXBwLmFsbCgnLyonLCBmdW5jdGlvbihyZXE6IGFueSwgcmVzOiBhbnksIG5leHQpIHtcbi8vICAgaWYoIS9ed3d3XFwuLy50ZXN0KHJlcS5oZWFkZXJzLmhvc3QpKSB7XG4vLyAgICAgcmVzLnN0YXR1cygzMDEpLnJlZGlyZWN0KHJlcS5wcm90b2NvbCArICc6Ly93d3cuJyArIHJlcS5oZWFkZXJzLmhvc3QgKyByZXEudXJsKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIG5leHQoKVxuLy8gICB9XG4vLyB9KVxuXG5cbi8qKlxuICogRW5hYmxlIGNvbXByZXNzaW9uXG4gKi9cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8qKlxuICogc2VydmUgc3RhdGljIGZpbGVzXG4gKi9cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7aW5kZXg6IGZhbHNlfSkpO1xuXG4vKipcbiAqIHBsYWNlIHlvdXIgYXBpIHJvdXRlcyBoZXJlXG4gKi9cbi8vIGFwcC51c2UoJy9hcGknLCBhcGkpO1xuXG4vKipcbiAqIGJvb3RzdHJhcCB1bml2ZXJzYWwgYXBwXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzXG4gKi9cbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMucmVuZGVyKCdpbmRleCcsIHtcbiAgICByZXEsXG4gICAgcmVzLFxuICAgIG5nTW9kdWxlOiBBcHBNb2R1bGUsXG4gICAgcHJlYm9vdDogZmFsc2UsXG4gICAgYmFzZVVybDogJy8nLFxuICAgIHJlcXVlc3RVcmw6IHJlcS5vcmlnaW5hbFVybCxcbiAgICBvcmlnaW5Vcmw6IHJlcS5ob3N0bmFtZVxuICB9KTtcbn1cblxuLyoqXG4gKiB1c2UgdW5pdmVyc2FsIGZvciBzcGVjaWZpYyByb3V0ZXNcbiAqL1xuYXBwLmdldCgnLycsIG5nQXBwKTtcbnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgYXBwLmdldChgLyR7cm91dGV9YCwgbmdBcHApO1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcbn0pO1xuXG4vKipcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcbiAqL1xuXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xufSk7XG5cblxuLyogVGhlcmUgYXJlIGNvZGUgZnJvbSBvbGQgc2VydmVyIChhcHAuanMpICovXG5odHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbmxldCBvcHRpb25zID0ge1xuICBrZXk6IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL2NlcnQva2V5LnBlbScsICd1dGY4JyksXG4gIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL2NlcnQvc2VydmVyLmNydCcsICd1dGY4Jylcbn07XG4vLyBodHRwcy5jcmVhdGVTZXJ2ZXIob3B0aW9ucywgYXBwKS5saXN0ZW4oNDQzLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCA0NDNgKTtcbi8vIH0pO1xuXG4vLyBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XG5cbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG59XG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbmlmIChwYXRjaCkge1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJcbi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgX19jb3JlX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xubGV0IHBhdGNoID0gZmFsc2U7XG5pZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xufVxuXG5cblxuaWYgKF9fY29tcGlsZXJfXyAmJiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyICYmIF9fY29tcGlsZXJfXy5Dc3NTZWxlY3Rvcikge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG5pZiAocGF0Y2gpIHtcbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yIHx8IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvcjtcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyIHx8IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXI7XG59XG5cbi8vIEZpeCBNYXRlcmlhbCBTdXBwb3J0XG5mdW5jdGlvbiB1bml2ZXJzYWxNYXRlcmlhbFN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBCb29sZWFuKHRoaXMuaXNDdXN0b21FdmVudChldmVudE5hbWUpKTsgfVxuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5IYW1tZXJHZXN0dXJlc1BsdWdpbi5wcm90b3R5cGUuc3VwcG9ydHMgPSB1bml2ZXJzYWxNYXRlcmlhbFN1cHBvcnRzO1xuLy8gRW5kIEZpeCBNYXRlcmlhbCBTdXBwb3J0XG5cbi8vIEZpeCBVbml2ZXJzYWwgU3R5bGVcbmltcG9ydCB7IE5vZGVEb21Sb290UmVuZGVyZXIsIE5vZGVEb21SZW5kZXJlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlJztcbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudEZpeChjb21wb25lbnRQcm90bzogYW55KSB7XG4gIHJldHVybiBuZXcgTm9kZURvbVJlbmRlcmVyKHRoaXMsIGNvbXBvbmVudFByb3RvLCB0aGlzLl9hbmltYXRpb25Ecml2ZXIpO1xufVxuTm9kZURvbVJvb3RSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyQ29tcG9uZW50ID0gcmVuZGVyQ29tcG9uZW50Rml4O1xuLy8gRW5kIEZpeCBVbml2ZXJzYWwgU3R5bGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEV2ZW50LCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi9ob21lL2hvbWUuc2VydmljZSc7XG5kZWNsYXJlIGxldCBnYTogRnVuY3Rpb247XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdGFnbGluZTogc3RyaW5nO1xuICBwdWJsaWMgYXV0aDtcbiAgcHVibGljIGFjdGl2ZVBvcHVwID0gJyc7XG4gIHB1YmxpYyBwb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIG5hdmJhclN0YXRlID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGlzRmluZEZpZWxkID0gZmFsc2U7XG4gIHB1YmxpYyBzcGluZXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBjbGVhclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGZpbmRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgaXNTZWFyY2hlZCA9IGZhbHNlO1xuICBwdWJsaWMgYnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gbG9hZGluZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYXV0aFNlcnZpY3M6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDpFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Um91dGUuY2hpbGRyZW5bMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJyZW50Um91dGUgPSBjdXJyZW50Um91dGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2lzRmluZEZpZWxkJyBpbiBjdXJyZW50Um91dGUuc25hcHNob3QuZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLmlzRmluZEZpZWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGaW5kRmllbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldExvZ2luUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW4nfSk7XG4gICAgdGhpcy50b2dnbGVNZW51KCk7XG4gIH1cblxuICBnZXRSZWdpc3RyYXRpb25Qb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdyZWdpc3RyYXRpb24nfSk7XG4gICAgdGhpcy50b2dnbGVNZW51KCk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSgnJyk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMubmF2YmFyU3RhdGUgPSAhdGhpcy5uYXZiYXJTdGF0ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXV0aCA9IHRoaXMuYXV0aFNlcnZpY3MuYXV0aEluaXQoKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0TWVzc2FnZSQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLnRhZ2xpbmUgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmZpbmRWYWx1ZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTZWFyY2hlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmF1dGhTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldFBlcnNvbmFsTWVudSQuc3Vic2NyaWJlKGF1dGggPT4ge1xuICAgICAgICBpZiAoYXV0aCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLy8gdGhpcy5sb2FkaW5nU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRMb2FkaW5nU3RhdHVzJC5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAvLyAgIHRoaXMuaXNMb2FkaW5nID0gc3RhdHVzO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgdXBkYXRlVGFiTWVudSh0b2dnbGVNZW51ID0gZmFsc2UpIHtcbiAgICBpZiAodG9nZ2xlTWVudSkge1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgfVxuICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlQWN0aXZlVGFiKGZhbHNlKTtcbiAgfVxuXG4gIHNlYXJjaChldmVudCkge1xuICAgIHRoaXMuaXNTZWFyY2hlZCA9IHRydWU7XG4gICAgdGhpcy5zcGluZXJWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VhcmNoKGV2ZW50LnF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgfSlcbiAgfVxuXG4gIHNlbGVjdFJlc3VsdChzZXJ2aWNlc09iaikge1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VuZFNlcnZpY2VzKHNlcnZpY2VzT2JqKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIHRoaXMubmF2YmFyU3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmZpbmRWYWx1ZSA9ICcnO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VydmljZXMnLCBzZXJ2aWNlc09iai5faWRdKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLmZpbmRWYWx1ZSA9ICcnO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmF1dGhTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gdGhpcy5sb2FkaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUsIEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSwgaXNCcm93c2VyLCBOb2RlSHR0cE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgQXV0b0NvbXBsZXRlTW9kdWxlLCBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5pbXBvcnQgeyBDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICduZzItY2xpY2stb3V0c2lkZSc7XG4vLyBpbXBvcnQgeyBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG4vLyBpbXBvcnQgeyBOZ2JNb2R1bGUsIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi9ob21lL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VvU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL29yZGVyL29yZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG9uZVBpcGUgfSBmcm9tICcuL3BpcGVzL3Bob25lLnBpcGUnO1xuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBpcnlQaXBlIH0gZnJvbSAnLi9waXBlcy9leHBpcnkucGlwZSc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5cblxuLy8gaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwL2FwcC5yb3V0aW5nJztcblxuLy8gZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbi8vICAgb3ZlcnJpZGVzID0gPGFueT4ge1xuLy8gICAgICdzd2lwZSc6IHt2ZWxvY2l0eTogMC40LCB0aHJlc2hvbGQ6IDIwfVxuLy8gICB9O1xuLy8gfVxuXG5sZXQgaW1wb3J0cyA9IFtcbiAgTm9kZUh0dHBNb2R1bGUsXG4gIFVuaXZlcnNhbE1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIC8vIEJyb3dzZXJNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIC8vIE1hc29ucnlNb2R1bGUsXG5cbiAgUm91dGVyTW9kdWxlLFxuICByb3V0aW5nLFxuICAvLyBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAvLyBBdXRvQ29tcGxldGVNb2R1bGUsXG4gIC8vIENhbGVuZGFyTW9kdWxlLFxuICBDbGlja091dHNpZGVNb2R1bGVcbl07XG5sZXQgZGVjbGFyYXRpb25zID0gW1xuICBBcHBDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIE9yZGVyQ29tcG9uZW50LFxuICBPcmRlcnNDb21wb25lbnQsXG4gIFByb2ZpbGVDb21wb25lbnQsXG4gIFBvcHVwc0NvbXBvbmVudCxcbiAgUGhvbmVQaXBlLFxuICBMYW5kaW5nQ29tcG9uZW50LFxuICBFeHBpcnlQaXBlLFxuICBMb2FkaW5nQ29tcG9uZW50XG5dO1xuXG5pZiAoaXNCcm93c2VyKSB7XG4gIGxldCBDYWxlbmRhck1vZHVsZSA9IHJlcXVpcmUoJ3ByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhcicpLkNhbGVuZGFyTW9kdWxlO1xuICBpbXBvcnRzLnB1c2goQ2FsZW5kYXJNb2R1bGUpO1xuICBsZXQgQXV0b0NvbXBsZXRlTW9kdWxlID0gcmVxdWlyZSgncHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnKS5BdXRvQ29tcGxldGVNb2R1bGU7XG4gIGltcG9ydHMucHVzaChBdXRvQ29tcGxldGVNb2R1bGUpO1xufVxuZWxzZSB7XG4gIGxldCBDYWxlbmRhck1vY2tDb21wb25lbnQgPSByZXF1aXJlKCcuL21vY2tzL2NhbGVuZGFyLmNvbXBvbmVudCcpLkNhbGVuZGFyTW9ja0NvbXBvbmVudDtcbiAgZGVjbGFyYXRpb25zLnB1c2goQ2FsZW5kYXJNb2NrQ29tcG9uZW50KTtcbiAgbGV0IEF1dG9Db21wbGV0ZU1vY2tNb2R1bGUgPSByZXF1aXJlKCcuL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnKS5BdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50O1xuICBkZWNsYXJhdGlvbnMucHVzaChBdXRvQ29tcGxldGVNb2NrTW9kdWxlKTtcbn1cblxuLyoqXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxuICovXG5ATmdNb2R1bGUoe1xuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgLyoqIE91ciBDb21wb25lbnRzICovXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBpbXBvcnRzLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyB7cHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IGZvcndhcmRSZWYoKCkgPT4gT3JkZXJDb21wb25lbnQpfSxcbiAgICAvLyB7XG4gICAgLy8gICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgLy8gICB1c2VDbGFzczogSGFtbWVyQ29uZmlnXG4gICAgLy8gfSxcbiAgICBIb21lU2VydmljZSxcbiAgICBBdXRoU2VydmljZSxcbiAgICBPcmRlclNlcnZpY2UsXG4gICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgT3JkZXJzU2VydmljZSxcbiAgICBQb3B1cHNTZXJ2aWNlLFxuICAgIFBheW1lbnRTZXJ2aWNlLFxuICAgIEFuYWx5dGljc1NlcnZpY2UsXG4gICAgU2VvU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2VydmljZXMvOmlkJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgZGF0YToge2lzRmluZEZpZWxkOiB0cnVlfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ29yZGVycycsXG4gICAgY29tcG9uZW50OiBPcmRlcnNDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlLzpwYWdlJyxcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYXV0b0NvbXBsZXRlJyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdzdWdnZXN0aW9ucycpIHN1Z2dlc3Rpb25zOiBhbnlbXTtcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tb2Nrcy9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhck1vY2tDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+JyxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdsb2NhbGUnKSBsb2NhbGU6IGFueTtcbiAgQElucHV0KCdtaW5EYXRlJykgbWluRGF0ZTogYW55O1xuICBASW5wdXQoJ21heERhdGUnKSBtYXhEYXRlOiBhbnk7XG4gIHB1YmxpYyBvblNlbGVjdDogYW55O1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21vY2tzL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UsIElBZGRyZXNzIH0gZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgb3JkZXJEYXRhO1xuICBASW5wdXQoJ29yZGVySXNGdWxsJykgb3JkZXJJc0Z1bGw7XG5cbiAgcHVibGljIGl0OiBhbnk7XG4gIHB1YmxpYyB0aW1lUGlja2VyID0gW107XG4gIHB1YmxpYyBtb250aHM6IHt9O1xuICBwdWJsaWMgdGltZVBpY2tlcklzU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgYWRkcmVzc2VzID0gW107XG4gIHB1YmxpYyBhZGRyZXNzID0gJyc7XG4gIHB1YmxpYyBzZWxlY3RlZEFkZHJlc3M6IElBZGRyZXNzID0ge1xuICAgIHN0cmVldDogJycsXG4gICAgc3RyZWV0X251bWJlcjogbnVsbCxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJycsXG4gICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgaXNGdWxsOiBmYWxzZSxcbiAgICBmb3JtYXR0ZWRBZGRyZXNzOiAnJ1xuICB9O1xuICBwdWJsaWMgaXNBZGRyZXNzT25lID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICBwdWJsaWMgaXNFbmFibGUgPSB0cnVlO1xuICBwdWJsaWMgT3JkZXIgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgZGVsaXZlcnlfZGV0YWlsczogW10sXG4gICAgZGVsaXZlcnlfZGVzY3JpcHRpb246ICcnLFxuICAgIGFwcGxpY2FudF9mdWxsbmFtZTogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9lbWFpbDogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9waG9uZTogJ25vbmUnLFxuICAgIGRlbGl2ZXJ5X2FkZHJlc3M6ICcnLFxuICAgIGRhdGU6IG51bGwsXG4gICAgdGltZTogJycsXG4gICAgZGVsaXZlcnlfZGF0ZTogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnLFxuICAgIHBheW1lbnQ6IHthbW91bnQ6IDAsIGN1cnJlbmN5OiAnJ31cbiAgfTtcbiAgcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDI0KjIxKSAqIDYwICogNjAgKiAxMDAwKTtcbiAgcHVibGljIHN1Ym1pdE9yZGVyID0gZmFsc2U7XG4gIHB1YmxpYyBvcmRlckZvcm06IGFueTtcbiAgcHVibGljIGlzTW9iaWxlQ2FsZW5kYXI6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgbWF4T3JkZXJCbG9ja1NpemU6IG51bWJlcnxzdHJpbmcgPSAnYXV0byc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGJyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy50aW1lUGlja2VyLnB1c2goJzA4OjAwJywgJzA4OjMwJywgJzA5OjAwJywgJzA5OjMwJywgJzEwOjAwJywgJzEwOjMwJywgJzExOjAwJywgJzE0OjAwJywgJzE0OjMwJywgJzE1OjAwJyk7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgLy8gICBpZiAoaSA+IDcgJiYgaSA8IDE1KSB7XG4gICAgLy8gICAgIGlmIChpID4gOSkge1xuICAgIC8vICAgICAgIHRoaXMudGltZVBpY2tlci5wdXNoKGkgKyAnOjAwJywgaSArICc6MzAnKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLnRpbWVQaWNrZXIucHVzaCgnMCcgKyBpICsgJzowMCcsICcwJyArIGkgKyAnOjMwJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5tb250aHMgPSB7XG4gICAgICAxOiAnR2VubmFpbycsXG4gICAgICAyOiAnRmViYnJhaW8nLFxuICAgICAgMzogJ01hcnpvJyxcbiAgICAgIDQ6ICdBcHJpbGUnLFxuICAgICAgNTogJ01hZ2dpbycsXG4gICAgICA2OiAnR2l1Z25vJyxcbiAgICAgIDc6ICdMdWdsaW8nLFxuICAgICAgODogJ0Fnb3N0bycsXG4gICAgICA5OiAnU2V0dGVtYnJlJyxcbiAgICAgIDEwOiAnT3R0b2JyZScsXG4gICAgICAxMTogJ05vdmVtYnJlJyxcbiAgICAgIDEyOiAnRGljZW1icmUnXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VydmljZXM6ICcgKyB0aGlzLmRlZmF1bHRTZXJ2aWNlcy50aXRsZSk7XG5cbiAgfVxuXG4gIHRvZ2dsZVRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gIXRoaXMudGltZVBpY2tlcklzU2hvdztcbiAgfVxuXG4gIG9wZW5UaW1lcGlja2VyKCkge1xuICAgIHRoaXMudGltZVBpY2tlcklzU2hvdyA9IHRydWU7XG4gIH1cblxuICBjbG9zZVRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gZmFsc2U7XG4gIH1cblxuICBzZWxlY3RUaW1lKHRpbWUpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IHRpbWUnfSk7XG4gICAgdGhpcy5PcmRlci50aW1lID0gdGltZTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhldmVudCkge1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAyKSB7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5nZXRBZGRyZXNzZXMoZXZlbnQucXVlcnkpXG4gICAgICAgIC50aGVuKChhZGRyZXNzZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IFtdO1xuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gYWRkcmVzc2VzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0QWRkcmVzcyh2YWx1ZSkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgYWRkcmVzcyd9KTtcbiAgICBpZiAodmFsdWUuaXNGdWxsKSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSB2YWx1ZTtcbiAgfVxuXG4gIG1vZGlmeUFkZHJlc3MoKSB7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSBmYWxzZTtcbiAgfVxuXG4gIHNob3dDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ3N0YXJ0J30pO1xuICAgIHRoaXMuc3VibWl0T3JkZXIgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9ICcnO1xuICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSAnJztcbiAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9ICcnO1xuXG4gICAgdGhpcy5PcmRlci5zdHJlZXQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXQ7XG4gICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0X251bWJlcjtcbiAgICB0aGlzLk9yZGVyLmNpdHkgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jaXR5O1xuICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5wb3N0YWxfY29kZTtcbiAgICB0aGlzLk9yZGVyLnByb3ZpbmNlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MucHJvdmluY2U7XG4gICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY291bnRyeTtcbiAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNvdW50cnlfY29kZTtcbiAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldCArICcsICcgKyB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXRfbnVtYmVyICsgJywgJyArIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNpdHk7XG5cbiAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93UHJldmlld09yZGVyKCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFZlcnNpb24gd2l0aCByZXF1ZXN0aW5nIGFkZHJlc3MgYWZ0ZXIgY2xpY2sgJ0NyZWF0ZSBhbiBvcmRlcicgYnV0dG9uIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgLy8gdGhpcy5vcmRlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKHRoaXMuYWRkcmVzcylcbiAgICAvLyAgICAgLnRoZW4oKGFkZHJlc3M6IElBZGRyZXNzW10pID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDEpIHtcbiAgICAvLyAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGFkZHJlc3MpIHtcbiAgICAvLyAgICAgICAgICAgdmFyIGFkZHIgPSBhZGRyZXNzW2luZGV4XTtcbiAgICAvLyAgICAgICAgICAgdmFyIGNpdHlfdG9fbWF0Y2ggPSBuZXcgUmVnRXhwKGFkZHIuY2l0eSwgJ2knKVxuICAgIC8vICAgICAgICAgICB2YXIgc3RyZWV0X251bWJlcl90b19tYXRjaCA9IG5ldyBSZWdFeHAoU3RyaW5nKGFkZHIuc3RyZWV0X251bWJlciksICdpJylcbiAgICAvLyAgICAgICAgICAgaWYgKHRoaXMuYWRkcmVzcy5tYXRjaChjaXR5X3RvX21hdGNoKSAmJiB0aGlzLmFkZHJlc3MubWF0Y2goc3RyZWV0X251bWJlcl90b19tYXRjaCkpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXQgPSBhZGRyLnN0cmVldDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSBhZGRyLnN0cmVldF9udW1iZXI7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jaXR5ID0gYWRkci5jaXR5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSBhZGRyLnBvc3RhbF9jb2RlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSBhZGRyLnByb3ZpbmNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeSA9IGFkZHIuY291bnRyeTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9IGFkZHIuY291bnRyeV9jb2RlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHIuZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHIuc3RyZWV0ICsgJywgJyArIGFkZHIuc3RyZWV0X251bWJlciArICcsICcgKyBhZGRyLmNpdHk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH0gZWxzZSBpZiAoMCBpbiBhZGRyZXNzKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnN0cmVldCA9IGFkZHJlc3NbMF0uc3RyZWV0O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gYWRkcmVzc1swXS5zdHJlZXRfbnVtYmVyO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jaXR5ID0gYWRkcmVzc1swXS5jaXR5O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IGFkZHJlc3NbMF0ucG9zdGFsX2NvZGU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnByb3ZpbmNlID0gYWRkcmVzc1swXS5wcm92aW5jZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeSA9IGFkZHJlc3NbMF0uY291bnRyeTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gYWRkcmVzc1swXS5jb3VudHJ5X2NvZGU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzBdLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3NbMF0uc3RyZWV0ICsgJywgJyArIGFkZHJlc3NbMF0uc3RyZWV0X251bWJlciArICcsICcgKyBhZGRyZXNzWzBdLmNpdHk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIC8vIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3NbMF0uZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKCh0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09ICcnICYmIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09IG51bGwpKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKVxuICAgIC8vXG4gICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZXZpZXdPcmRlcigpIHtcbiAgICBpZiAodGhpcy5PcmRlci5kYXRlICYmIHRoaXMub3JkZXJJc0Z1bGwgJiYgdGhpcy5pc0FkZHJlc3NGdWxsICYmIHRoaXMub3JkZXJEYXRhLm9yZGVyX29wdGlvbnMubWluX2Ftb3VudCA8PSB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlKSB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuT3JkZXIuZGF0ZSk7XG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiAnMCcgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBvcmRlckluZm9ybWF0aW9uID0ge1xuICAgICAgICBkYXRlOiBkYXkgKyAnICcgKyB0aGlzLml0Lm1vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdGltZTogdGhpcy5PcmRlci50aW1lLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLk9yZGVyLnN0cmVldCArICcsICcgKyB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgKyAnLCAnICsgdGhpcy5PcmRlci5jaXR5LFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5PcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvblxuICAgICAgfTtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luRnJvbU9yZGVyJywgZGF0YToge29yZGVyRGF0YTogdGhpcy5vcmRlckRhdGEsIGluZm9ybWF0aW9uOiBvcmRlckluZm9ybWF0aW9ufX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YToge29yZGVyRGF0YTogdGhpcy5vcmRlckRhdGEsIGluZm9ybWF0aW9uOiBvcmRlckluZm9ybWF0aW9ufX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9yZGVyKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICBsZXQgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpO1xuICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogJzAnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgY29ycmVjdE1vbnRoID0gMSArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCBtb250aCA9IGNvcnJlY3RNb250aCA+IDkgPyBjb3JyZWN0TW9udGggOiAnMCcgKyBjb3JyZWN0TW9udGg7XG4gICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArICdUJyArIHRoaXMuT3JkZXIudGltZSArICc6MDAuMDAwWic7XG4gICAgICB0aGlzLk9yZGVyLnNlcnZpY2VfaWQgPSB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlX2lkO1xuICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzID0gW3tcbiAgICAgICAgdGl0bGU6IHRoaXMub3JkZXJEYXRhLnNlcnZpY2UsXG4gICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgdHlwZTogJ3NlcnZpY2UnXG4gICAgICB9XTtcbiAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLmZvckVhY2goKG9yZGVyQ2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQ2F0ZWdvcnkucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAvLyB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lICsgJyAtICcgKyBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgIC8vIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUgKyAnIC0gJyArIG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgYW1vdW50OiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5wcmljZSxcbiAgICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuT3JkZXIucGF5bWVudCA9IHtcbiAgICAgICAgYW1vdW50OiB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlLFxuICAgICAgICBjdXJyZW5jeTogJ2V1cidcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5vcmRlclNlcnZpY2Uuc2F2ZU9yZGVyKHRoaXMuT3JkZXIpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnZmluaXNoJ30pO1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NhdmluZyBvcmRlcicsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcblxuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscyA9IFtdO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfYWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuT3JkZXIudGltZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGF0ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuYWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuc3VibWl0T3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXJFbmQnfSk7XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5vcmRlclNlcnZpY2UubWFrZUV2ZW50KHtzdGF0dXM6IHRydWV9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdlcnJvcid9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3Igb3Igbm90OiAnKyBlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAyKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ1BlciBmYXZvcmUsIGluc2VyaXNjaSB1biBtZXRvZG8gZGkgcGFnYW1lbnRvIHByaW1hIGRpIHByZW5vdGFyZSB1biBzZXJ2aXppbyd9fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdJbCBzZXJ2aXppbyByaWNoaWVzdG8gbm9uIMOoIGFuY29yYSBkaXNwb25pYmlsZSBpbiBxdWVzdGEgem9uYS4gUGVyIGZhdm9yZSBjb250YXR0YWNpIG5lbGxhIHNlemlvbmUgYXNzaXN0ZW56YSBkaSBTdGFyYm9vayBwZXIgcmljaGllZGVyZSBpbCBzdXBwb3J0byBuZWxsYSB6b25hIGRlc2lkZXJhdGEuJ319KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gIGVsc2Uge1xuICAgICAgICAgIC8vICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IFwiQyfDqCBzdGF0byB1biBlcnJvcmUgcmlndWFyZG8gYWxsYSByaWNoaWVzdGEgZGVsIG9yZGluZSwgcmljYXJpY2EgbGEgcGFnaW5hIGUgcmlwcm92YSBkaSBudW92by5cIn19KTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luJ30pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXQgPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIGRheU5hbWVzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICBkYXlOYW1lc1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgZGF5TmFtZXNNaW46IFsnRG8nLCAnTHUnLCAnTWEnLCAnTWUnLCAnR2knLCAnVmUnLCAnU2EnXSxcbiAgICAgIG1vbnRoTmFtZXM6IFsnR2VubmFpbycsICdGZWJicmFpbycsICdNYXJ6bycsICdBcHJpbGUnLCAnTWFnZ2lvJywgJ0dpdWdubycsXG4gICAgICAgICdMdWdsaW8nLCAnQWdvc3RvJywgJ1NldHRlbWJyZScsICdPdHRvYnJlJywgJ05vdmVtYnJlJywgJ0RpY2VtYnJlJ10sXG4gICAgICBtb250aE5hbWVzU2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICAgIH07XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZU9yZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoID4gNDgwKSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA0NTAgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoID4gNDgwKSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA0NTAgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERhdGUoKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCBkYXRlJ30pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9ob21lL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5kZWNsYXJlIGxldCBTd2lwZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxhbmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjYXJkU3R5bGVzID0gezE6ICcwLjk1JywgMjogJzAuOTUnLCAzOiAnMC45J307XG4gIHB1YmxpYyBxdWVyeTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgc2VydmljZXMgPSBbXTtcbiAgcHVibGljIHNwaW5lclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGNsZWFyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzd2lwZXI6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1VuYSBjaXR0w6Agc21hcnQgaGEgYmlzb2dubyBkaSBzZXJ2aXppIHNtYXJ0Jyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaG9tZVNlcnZpY2UuZ2V0U2VydmljZXMoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXMucmVzdWx0O1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGZlYXR1cmVkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICB9XG4gIGNhcmRIb3ZlcihpZCwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnb24nKSB7XG4gICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaWQgPT09IDMpIHtcbiAgICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcwLjknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcwLjk1JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLnNwaW5lclZpZXcgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZWFyY2goZXZlbnQucXVlcnkpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2VhcmNoJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICAgIH0pXG4gIH1cblxuICBzZWxlY3RSZXN1bHQoc2VydmljZXNPYmopIHtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlbmRTZXJ2aWNlcyhzZXJ2aWNlc09iaik7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXJ2aWNlcycsIHNlcnZpY2VzT2JqLnRpdGxlXSk7XG4gIH1cblxuICBjbGVhclNlYXJjaEZvcm0oKSB7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZXhwaXJ5J1xufSlcbmV4cG9ydCBjbGFzcyBFeHBpcnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgZGF0ZUVsZW1zID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgaWYgKGVsZW0gPT09ICcvJykge1xuICAgICAgICAgIGRhdGVFbGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGRhdGVFbGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9ICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9waXBlcy9leHBpcnkucGlwZS50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAncGhvbmUnXG59KVxuZXhwb3J0IGNsYXNzIFBob25lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBwaG9uZSA9ICcnO1xuICAgICAgbGV0IG51bUluZGV4ID0gMDtcbiAgICAgIGxldCBwaG9uZU51bXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBwaG9uZU51bXMuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICAgIGlmIChudW1JbmRleCA9PT0gMiB8fCBudW1JbmRleCA9PT0gNCB8fCBudW1JbmRleCA9PT0gNikge1xuICAgICAgICAgIHBob25lICs9IG51bSArICcgJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaG9uZSArPSBudW07XG4gICAgICAgIH1cbiAgICAgICAgbnVtSW5kZXgrKztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBob25lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4vcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBvcHVwcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3B1cHMuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignYWRkQ2FyZFBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2xvZ2luUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncmVnaXN0cmF0aW9uUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcigncmVjb3ZlcnlQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdmaW5pc2hQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybUZpbmlzaFBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdzaGFkb3dTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIG9wYWNpdHk6IDB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMX0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb3B1cHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBhY3RpdmVQb3B1cCA9ICcnO1xuICBwdWJsaWMgYWRkQ2FyZFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgbG9naW5Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIHJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgcmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGZpbmlzaFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgY29uZmlybVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgY29uZmlybUZpbmlzaFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgc2hhZG93U3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgZW1haWxQYXR0ZXJuO1xuICBwdWJsaWMgYXV0aDtcbiAgcHVibGljICBhZGRDYXJkRGF0YSA9IHtcbiAgICBvYmplY3Q6ICdjYXJkJyxcbiAgICBleHBfZGF0ZTogJycsXG4gICAgZXhwX21vbnRoOiBudWxsLFxuICAgIGV4cF95ZWFyOiBudWxsLFxuICAgIG51bWJlcjogbnVsbCxcbiAgICBjdmM6ICcnLFxuICAgIG5hbWU6ICcnLCAgICAgICAgICAgLy8gTm9tZSBpbnRlc3RhdGFyaW9cbiAgICBhZGRyZXNzX2xpbmUxOiAnJywgIC8vIFZpYVxuICAgIGFkZHJlc3NfbGluZTI6ICcnLCAgLy8gTnJcbiAgICBhZGRyZXNzX2NpdHk6ICcnLCAgIC8vIENpdHTDoFxuICAgIGFkZHJlc3NfemlwOiAnJywgICAgLy8gQ0FQXG4gICAgYWRkcmVzc19zdGF0ZTogJycsICAvLyBQcm92aW5jaWFcbiAgICBhZGRyZXNzX2NvdW50cnk6ICcnIC8vIFBhZXNlXG4gIH07XG4gIHB1YmxpYyBhY3Rpb25DYXJkVHlwZSA9ICdhZGQnO1xuICBwdWJsaWMgZWRpdGVkQ2FyZElkOiBudW1iZXI7XG4gIHB1YmxpYyBhZGRDYXJkRXJyb3IgPSB7XG4gICAgZXhwX2RhdGU6IGZhbHNlLFxuICAgIG51bWJlcjogZmFsc2UsXG4gICAgY3ZjOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgbG9naW5EYXRhID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgdHlwZTogJycsXG4gICAgb3JkZXJEYXRhOiB7fVxuICB9O1xuICBwdWJsaWMgbG9naW5FcnJvciA9IHtcbiAgICBlbWFpbDogZmFsc2UsXG4gICAgcGFzc3dvcmQ6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyByZWdpc3RyYXRpb25EYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgfTtcbiAgcHVibGljIHJlZ2lzdHJhdGlvbkVycm9yID0ge1xuICAgIG5hbWU6IGZhbHNlLFxuICAgIHBob25lOiBmYWxzZSxcbiAgICBlbWFpbDogZmFsc2UsXG4gICAgcGFzc3dvcmRGaXJzdDogZmFsc2UsXG4gICAgcGFzc3dvcmQ6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyByZWNvdmVyeURhdGEgPSB7XG4gICAgZW1haWw6ICcnXG4gIH07XG4gIHB1YmxpYyByZWNvdmVyeUVycm9yID0ge1xuICAgIGVtYWlsOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgY29uZmlybVBvcHVwRGF0YSA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgZGF0YTogW10sXG4gICAgaW5mb3JtYXRpb246IHt9LFxuICAgIGJ1dHRvbjogJycsXG4gICAgdHlwZTogJydcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHR5cGU6ICdjZW50ZXInXG4gIH07XG4gIHB1YmxpYyBjb25maXJtQWN0aW9uUG9wdXBEYXRhID0ge1xuICAgIG9yZGVySWQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0ZXh0MjogJycsXG4gICAgYWN0aW9uczogW10sXG4gICAgYnV0dG9uczogW10sXG4gICAgcHJpY2U6IG51bGxcbiAgfTtcbiAgcHVibGljIGZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogW11cbiAgfTtcblxuICBwdWJsaWMgaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcblxuICBwdWJsaWMgZm9ybUVycm9yOiBib29sZWFufHt0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmd9ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY3M6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwb3B1cFNlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkge1xuICAgIHRoaXMuZW1haWxQYXR0ZXJuID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gIH1cbiAgZ2V0UG9wdXAodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgIGlmICh0eXBlID09PSAnbG9naW4nKSB7XG4gICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvbicpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlY292ZXJ5Jykge1xuICAgICAgdGhpcy5yZWNvdmVyeVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaW5pc2gnKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ0NoZWNrIHlvdXIgaW5ib3gnO1xuICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtcbiAgICAgICAgICAnV2Ugc2VudCBhIHBhc3N3b3JkIHJlc2V0IGxpbmsgdG8geW91ciBlbWFpbCBhZGRyZXNzLiBQbGVhc2UgY2xpY2sgdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIGNyZWF0ZSBlIG5ldyBwYXNzd29yZC4nLFxuICAgICAgICAgICdUaGUgbGluayB3aWxsIG9ubHkgYmUgYWN0aXZlIGZvciAxIGhvdXIuIEFmdGVyIHRoYXQgeW91IHdpbGwgbmVlZCB0byByZXF1ZXN0IGEgbmV3IG9uZS4nXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybUZpbmlzaCcpIHtcbiAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtRW5kJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmQnKSB7XG4gICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybUFjdGlvbicpIHtcbiAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtT3JkZXJFbmQnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gdHlwZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjbG9zZVBvcHVwKGlzUmVvcGVuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5sb2dpblBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWNvdmVyeVBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJyc7XG4gICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIWlzUmVvcGVuKSB7XG4gICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2luYWN0aXZlJztcbiAgICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSAmJiBwYXNzd29yZC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTG9naW4nLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGRhdGE7XG4gICAgICAgICAgaWYgKHRoaXMubG9naW5EYXRhLnR5cGUgPT09ICdmcm9tT3JkZXInKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlcicsIGRhdGE6IHRoaXMubG9naW5EYXRhLm9yZGVyRGF0YX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc3dpdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm9uIHJpdXNjaWFtbyBhIHRyb3ZhcmUgdW4gYWNjb3VudCBjb24gcXVlbGzigJlpbmRpcml6em8gZS1tYWlsJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlIScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xhIHR1YSBwYXNzd29yZCBub24gw6ggY29ycmV0dGEnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjaGVja0VtYWlsKHR5cGU6IHN0cmluZywgZW1haWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY292ZXJ5JzpcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNvdmVyeSc6XG4gICAgICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0RhdGUodHlwZSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ25ld0NhcmQnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgbGV0IHBhcnRzID0gdmFsdWUuc3BsaXQoJy8nKTtcbiAgICAgICAgaWYgKHBhcnRzWzBdID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tOb25FbXB0eSh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlID09PSAnbG9naW4nKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uTmFtZScpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25QaG9uZScpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBob25lID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBob25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25QYXNzd29yZCcpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhZGRDYXJkTnVtYmVyJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmRDdnYnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5jdmMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmN2YyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZENvbmZpcm06IHN0cmluZykge1xuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRXhwaXJ5KHZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKTtcbiAgICBpZiAoKGRhdGUuZ2V0TW9udGgoKSArIDEpIDwgMTApIHtcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IHllYXJFbGVtcyA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICBsZXQgeWVhciA9IHBhcnNlSW50KHllYXJFbGVtc1syXS50b1N0cmluZygpICsgeWVhckVsZW1zWzNdLnRvU3RyaW5nKCkpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGRhdGVFbGVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGlmIChlbGVtID09PSAnLycpIHtcbiAgICAgICAgICBkYXRlRWxlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgICAgaWYgKGRhdGVFbGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSA1KSB7XG4gICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDUpIHtcbiAgICAgIGxldCBwYXJ0cyA9IHJlc3VsdC5zcGxpdCgnLycpO1xuICAgICAgaWYgKHBhcnRzWzBdICE9PSByZXN1bHQpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHBhcnRzWzFdKSA+IHllYXIpIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwYXJzZUludChwYXJ0c1swXSkgPj0gcGFyc2VJbnQobW9udGgpICYmIHBhcnNlSW50KHBhcnRzWzFdKSA9PT0geWVhcikge1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlID0gcmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGVja0NhcmROdW1iZXIoY2FyZE51bWJlcikge1xuICAgIC8vIGlmIChjYXJkTnVtYmVyICE9PSBudWxsKSB7XG4gICAgLy8gICBpZiAodGhpcy5wYXltZW50U2VydmljZS5jYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikpIHtcbiAgICAvLyAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gZmFsc2U7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZ2lzdHJhdGlvbihuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpICYmIHBhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm0gJiYgcGFzc3dvcmQubGVuZ3RoID4gMCAmJiBuYW1lLmxlbmd0aCA+IDAgJiYgcGhvbmUubGVuZ3RoID4gOSkge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3Muc2lnbnVwKG5hbWUsIHBob25lLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnUmVnaXN0cmF0aW9uJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dGggPSBkYXRhO1xuICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGRhdGEpO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUvcGF5bWVudCddKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbmRpcml6em8gZS1tYWlsIGdpw6AgaW4gdXNvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEhhaSBpbmRpY2F0byBkaSBlc3NlcmUgdW4gbnVvdm8gY2xpZW50ZSBtYSDDqCBnacOgXG4gICAgICAgICAgICAgICAgcHJlc2VudGUgdW4gYWNjb3VudCBjb2xsZWdhdG8gYWxsJ2luZGlyaXp6byBlLW1haWw6IG1haWxAZ21haWwuY29tYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BhcmFtZXRyaSBtYW5jYW50aScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEluc2VyaXNjaSB0dXR0aSBpIHBhcmFtZXRyaSBwZXIgcHJvY2VkZXJlIGNvbiBsYSByZWdpc3RyYXppb25lYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yZScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEMnw6ggc3RhdG8gdW4gZXJyb3JlIHNjb25vc2NpdXRvLCBwZXIgZmF2b3JlIHJpcHJvdmEgcGnDuSB0YXJkaWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY292ZXJ5KGVtYWlsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLnJlY292ZXJ5KGVtYWlsKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnUmVjb3Zlcnkgb2YgcGFzc3dvcmQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2ZpbmlzaCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIHByb2JsZW1hIScsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQ2kgZGlzcGlhY2UuIEltcG9zc2liaWxlIGlkZW50aWZpY2FyZSBsJ2FjY291bnQgY29uIGxlIGluZm9ybWF6aW9uaSBmb3JuaXRlLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uZmlybU9yZGVyKGlkKSB7XG4gICAgLy8gdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnQUNDRVBUJylcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbmZlcm1hdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAvLyAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0FkZXNzbyBub24gcmVzdGEgYWx0cm8gY2hlIG9mZnJpcmUgaWwgc3VvIHNlcnZpemlvIGFsIGNsaWVudGUuIFBlciBxdWFsc2lhc2kgY29tbXVuaWNhemlvbmUgcHXDsiB1c2FyZSBpIGRhdGkgZGVsIGNvbnRhdHRvIGFnZ2l1bnRpIGRhbCBjbGllbnRlLic7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYUVuZCc7XG4gICAgLy8gICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUVuZCcpO1xuICAgIC8vICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgIC8vICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgIC8vICAgICAgICAgdGl0bGU6ICdPcmRlciBjb25maXJtYXRpb24gZXJyb3InLFxuICAgIC8vICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgb3JkZXIgY29uZmlybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAvLyAgICAgICB9O1xuICAgIC8vICAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnQ0FOQ0VMJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBDYW5jZWwnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ09yZGluZSBhbm51bGxhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1F1ZXN0byBvcmRpbmUgw6ggc3RhdG8gYW5udWxsYXRvLCBwdW9pIHJpYXR0aXZhcmxvIGluIHVuIHNlY29uZG8gbW9tZW50by4nO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NhbmNlbE9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWxsYXRpb24gZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNhbmNlbGluZyB5b3VyIG9yZGVyLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHJlYWN0aXZhdGVPcmRlcihpZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ1JFQUNUSVZBVEUnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IFJlYWN0aXZhdGUnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ09yZGluZSByaWF0dGl2YXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdRdWVzdG8gb3JkaW5lIMOoIHN0YXRvIHJpYXR0aXZhdG8sIHZlcnJhaSBub3RpZmljYXRvIHF1YW5kbyB1biBwcm9mZXNzaW9uaXN0YSBjb25mZXJtZXJhIHF1ZXN0byBvcmRpbmUuJztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdyZWFjdGl2YXRlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1JlYWN0aXZhdGlvbiBvcmRlciBlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgRHVyaW5nIHRoZSByZWFjdGl2YXRpb24gb2YgeW91ciBvcmRlciBpcyB0aGUgb3JkZXIgdGhlIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGNvbmZpcm1OZXdPcmRlcigpIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm0nfSk7XG4gIH1cblxuICBhZGROZXdDYXJkKCkge1xuICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLm51bWJlci5sZW5ndGggPT09IDApIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgZXhwX3BhcnRzID0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgaWYgKGV4cF9wYXJ0c1swXSAhPT0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSkge1xuICAgICAgICB0aGlzLmFkZENhcmREYXRhLmV4cF9tb250aCA9IGV4cF9wYXJ0c1swXTtcbiAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfeWVhciA9IGV4cF9wYXJ0c1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5jdmMubGVuZ3RoIDwgMykge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdzdGFydE5ld0NhcmQnfSk7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuYWRkTmV3Q2FyZCh0aGlzLmFkZENhcmREYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnQWRkIG5ldyBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICduZXdDYXJkJywgZGF0YTogcmVzcG9uc2V9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICduZXdDYXJkRXJyb3InfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3IuanNvbigpLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlZGl0Q2FyZCgpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBsZXQgZWRpdENhcmREYXRhID0ge1xuICAgICAgZXhwX21vbnRoOiBudWxsLFxuICAgICAgZXhwX3llYXI6IG51bGwsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGFkZHJlc3NfbGluZTE6ICcnLFxuICAgICAgYWRkcmVzc19saW5lMjogJycsXG4gICAgICBhZGRyZXNzX2NpdHk6ICcnLFxuICAgICAgYWRkcmVzc196aXA6ICcnLFxuICAgICAgYWRkcmVzc19zdGF0ZTogJycsXG4gICAgICBhZGRyZXNzX2NvdW50cnk6ICcnXG4gICAgfTtcbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5sZW5ndGggPT09IDUpIHtcbiAgICAgIGxldCBleHBfcGFydHMgPSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLnNwbGl0KCcvJyk7XG4gICAgICBpZiAoZXhwX3BhcnRzWzBdICE9PSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlKSB7XG4gICAgICAgIGVkaXRDYXJkRGF0YS5leHBfbW9udGggPSBleHBfcGFydHNbMF07XG4gICAgICAgIGVkaXRDYXJkRGF0YS5leHBfeWVhciA9IGV4cF9wYXJ0c1sxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBlZGl0Q2FyZERhdGEubmFtZSA9IHRoaXMuYWRkQ2FyZERhdGEubmFtZTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfbGluZTIgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTI7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19jaXR5ID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NpdHk7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc196aXAgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfemlwO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3Nfc3RhdGUgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGU7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19jb3VudHJ5ID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnk7XG4gICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ3N0YXJ0TmV3Q2FyZCd9KTtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmVkaXRDYXJkKHRoaXMuZWRpdGVkQ2FyZElkLCBlZGl0Q2FyZERhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdFZGl0IGNhcmQgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY2FyZEVkaXRlZCcsIGRhdGE6IHJlc3BvbnNlfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZEVycm9yJ30pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJpY2Uob3JkZXJJZCkge1xuICAgIC8vIGxldCBvcmRlclByaWNlRXVyID0gcGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSArICgocGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSAvIDEwMCkgKiA1LjUpO1xuICAgIC8vIGxldCBvcmRlclByaWNlID0gcGFyc2VGbG9hdChvcmRlclByaWNlRXVyLnRvRml4ZWQoMikpICogMTAwO1xuXG4gICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKG9yZGVySWQsICdDTE9TRScpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogQ2xvc2UnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2Vydml6aW8gY29tcGxldGF0byBjb24gc3VjY2Vzc28nO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJyc7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnYWRkUHJpY2VFbmQnO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2FkZFByaWNlRW5kJztcbiAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdhZGRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBvcmRlcklkLCBpc01vZGlmaWVkOiByZXNwb25zZS5uTW9kaWZpZWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3IuanNvbigpLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG4gIGVkaXRQcmljZShvcmRlcklkKSB7XG4gICAgbGV0IG9yZGVyUHJpY2VFdXIgPSBwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpICsgKChwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpIC8gMTAwKSAqIDUuNSk7XG4gICAgbGV0IG9yZGVyUHJpY2UgPSBwYXJzZUZsb2F0KG9yZGVyUHJpY2VFdXIudG9GaXhlZCgyKSkgKiAxMDA7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmFkZFByaWNlKG9yZGVySWQsICdBQ1RJVkVfUEFZTUVOVCcsIG9yZGVyUHJpY2UpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogQWN0aXZlIHBheW1lbnQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdlZGl0UHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZCwgb3JkZXJQcmljZTogb3JkZXJQcmljZSwgaXNNb2RpZmllZDogcmVzcG9uc2Uubk1vZGlmaWVkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgfVxuICBjb250aW51ZU9yZGVyKG9yZGVySWQpIHtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIob3JkZXJJZCwgJ1BBWScpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogUGF5JywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdQYWdhbWVudG8gZWZmZXR0dWF0byc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgPSAnVGkgYWJiaWFtbyBpbnZpYXRvIHVuYSBtYWlsIGUgdW4gc21zIGNvbiBsYSBjb25mZXJtYSBkZWwgcGFnYW1lbnRvIGUgbGEgcmljZXZ1dGEgZmlzY2FsZSc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnR5cGUgPSAnbGVmdCc7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29udGludWVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBvcmRlcklkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbG9nb3V0JywgZGF0YToge319KTtcbiAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgfVxuXG4gIGdldEVycm9yUG9wdXAodGl0bGUsIHRleHQpIHtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW107XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0LnB1c2godGV4dCk7XG4gICAgdGhpcy5nZXRQb3B1cCgnZXJyb3InKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cFNlcnZpY2UuZ2V0QWN0aXZlUG9wdXAkLnN1YnNjcmliZShwb3B1cCA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9wdXAudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLmVtYWlsID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9naW4nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9naW5Gcm9tT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhID0gcG9wdXAuZGF0YTtcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLnR5cGUgPSAnZnJvbU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FkZENhcmQnOlxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DYXJkVHlwZSA9ICdhZGQnO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRDYXJkJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2FyZFR5cGUgPSAnZWRpdCc7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZENhcmRJZCA9IHBvcHVwLmRhdGEuaWQ7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlID0gcG9wdXAuZGF0YS5leHBfbW9udGggKyAnLycgKyBwb3B1cC5kYXRhLmV4cF95ZWFyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5uYW1lID0gcG9wdXAuZGF0YS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxID0gcG9wdXAuZGF0YS5hZGRyZXNzX2xpbmUxO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyID0gcG9wdXAuZGF0YS5hZGRyZXNzX2xpbmUyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NpdHkgPSBwb3B1cC5kYXRhLmFkZHJlc3NfY2l0eTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc196aXAgPSBwb3B1cC5kYXRhLmFkZHJlc3NfemlwO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlID0gcG9wdXAuZGF0YS5hZGRyZXNzX3N0YXRlO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnkgPSBwb3B1cC5kYXRhLmFkZHJlc3NfY291bnRyeTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEubnVtYmVyID0gcG9wdXAuZGF0YS5udW1iZXI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmN2YyA9IHBvcHVwLmRhdGEuY3ZjO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRDYXJkJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAncmVnaXN0cmF0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1PcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnQ29uZmVybWEgc2Vydml6aW8gaW4gY29yc2/igKYnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnSWwgc2lzdGVtYSBzdGEgY29udHJvbGxhbmRvIHNlIHF1ZXN0byBzZXJ2aXppbyDDqCBzdGF0byBhc3NlZ25hdG8gYWQgdW4gYWx0cm8gcHJvZmVzc2lvbmlzdGEgbyBhbnVsbGF0byBkYWwgY2xpZW50ZSBzdGVzc28uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihwb3B1cC5kYXRhLm9yZGVySWQsICdBQ0NFUFQnKVxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2Vydml6aW8gY29uZmVybWF0byBjb24gc3VjY2Vzc28nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0FkZXNzbyBub24gcmVzdGEgYWx0cm8gY2hlIG9mZnJpcmUgaWwgc3VvIHNlcnZpemlvIGFsIGNsaWVudGUuIFBlciBxdWFsc2lhc2kgY29tbXVuaWNhemlvbmUgcHXDsiB1c2FyZSBpIGRhdGkgZGVsIGNvbnRhdHRvIGFnZ2l1bnRpIGRhbCBjbGllbnRlLic7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWFFbmQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1FbmQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm1PcmRlcicsIGRhdGE6IHtvcmRlcklkOiBwb3B1cC5kYXRhLm9yZGVySWR9fSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ09yZGVyIGNvbmZpcm1hdGlvbiBlcnJvcicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBvcmRlciBjb25maXJtYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2FuY2VsT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0FubnVsbGEgb3JkaW5lPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgYW5udWxsYXRvIHF1ZXN0byBvcmRpbmUgc29sbyB0dSBzYXJhaSBpbiBncmFkbyBkaSB2ZWRlcmxvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ0FubnVsbGEgb3JkaW5lJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlYWN0aXZhdGVPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnUmlhdHRpdmEgb3JkaW5lPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgcmlhdHRpdmF0byBxdWVzdG8gb3JkaW5lIHNhcmEgdmlzaWJpbGUgYSB0dXR0aSBpIHByb2Zlc3Npb25pc3RpLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ1JpYXR0aXZhIG9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtTmV3T3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0RldHRhZ2xpIGRlbGzigJlvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbe3Byb2R1Y3ROYW1lOiBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlLCBpdGVtTmFtZTogJycsIHByaWNlOiAnJywgdHlwZTogJ3NlcnZpY2UnfV07XG4gICAgICAgICAgICBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlcy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmKHByb2R1Y3QucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCBzeW1ib2w6IHByb2R1Y3Qub3B0aW9uLnN5bWJvbCwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSwgaXRlbU5hbWU6IHByb2R1Y3Qub3B0aW9uLm5hbWUsIHByaWNlOiBwcm9kdWN0Lm9wdGlvbi5wcmljZSwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6ICdUb3RhbGUnLCBpdGVtTmFtZTogJycsIHByaWNlOiBwb3B1cC5kYXRhLm9yZGVyRGF0YS50b3RhbFByaWNlLCB0eXBlOiAndG90YWwnfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24gPSBwb3B1cC5kYXRhLmluZm9ybWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdQcm9jZWRpIGNvbiBs4oCZYWNxdWlzdG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXInO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU5ld09yZGVyRW5kJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdBY3F1aXN0byBlZmZldHVhdG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnTOKAmW9yZGluZSBlIHN0YXRvIHByZW5vdGF0byBjb24gc3VjY2Vzc28uIFVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBvcmEgc3RhYmlsaXRhIGRhIHZvaS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudHlwZSA9ICdhZGRQcmljZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnQ29tcGxldGFtZW50byBzZXJ2aXppbyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgY29tcGxldGF0byBpbCBzZXJ2aXppbyB2ZXJyYWkgaW5jcmVtZW50YXRvIGRlbCBpbXBvcnRvIHByZXN0YWJpbGl0byB0cmEgNyBnaW9ybmkgbGF2b3JhdGl2aS4nO1xuICAgICAgICAgICAgLy8gdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAvLyAgIHR5cGU6ICdQYXltZW50X2lucHV0X2FkZCcsXG4gICAgICAgICAgICAvLyAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgLy8gICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdhZGRQcmljZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDb21wbGV0YSBpbCBzZXJ2aXppbydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnTW9kaWZpY2EnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIG1vZGlmaWNhdG8gbOKAmWltcG9ydG8gaWwgY2xpZW50ZSB2ZXJyYSBub3RpZmljYXRvIGRpIHF1ZXN0YSBtb2RpZmljYSBlIHBvdHJhIHByb2NlZGVyZSBjb24gaWwgcGFnYW1lbnRvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnRfaW5wdXRfZWRpdCcsXG4gICAgICAgICAgICAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdlZGl0UHJpY2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnSW5zZXJpc2NpIGltcG9ydG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UgPSBNYXRoLnJvdW5kKChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpIC8gMTAwKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb250aW51ZU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlID0gJ1BhZ2FtZW50byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgZWZmZXR0dWF0byBpbCBwYWdhbWVudG8gcmljZXZlcmFpIHVuYSBtYWlsIGNvbiBsYSBmYXR0dXJhIGRlbCBvcmRpbmUuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiA9ICdBbOKAmWltcG9ydG8gdmVycmEgYWdnaXVudG8gNS41JSBkaSB0YXNzZSBTdGFyYm9vay4nO1xuICAgICAgICAgICAgbGV0IHByaWNlID0gTWF0aC5yb3VuZCgocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSAvIDEwMCk7XG4gICAgICAgICAgICBsZXQgdGF4ID0gKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLSBNYXRoLnJvdW5kKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkpIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdQYXltZW50X2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHByaWNlICsgJ+KCrCArICcgKyB0YXggKyAn4oKsID0gJyArIHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxMDAgKyAn4oKsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbnRpbnVlT3JkZXInLFxuICAgICAgICAgICAgICB0ZXh0OiAnUHJvY2VkaSBjb24gaWwgcGFnYW1lbnRvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2ljdXJvIGRpIHZvbGVyIHVzY2lyZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW107XG4gICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAocG9wdXAuZGF0YS50aXRsZSwgcG9wdXAuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF1dGggPSB0aGlzLmF1dGhTZXJ2aWNzLmF1dGhJbml0KCk7XG4gIH1cblxuICBjbGVhckRhdGEoKSB7XG4gICAgdGhpcy5hZGRDYXJkRGF0YSA9IHtcbiAgICAgICAgb2JqZWN0OiAnY2FyZCcsXG4gICAgICAgIGV4cF9kYXRlOiAnJyxcbiAgICAgICAgZXhwX21vbnRoOiBudWxsLFxuICAgICAgICBleHBfeWVhcjogbnVsbCxcbiAgICAgICAgbnVtYmVyOiBudWxsLFxuICAgICAgICBjdmM6ICcnLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYWRkcmVzc19saW5lMTogJycsXG4gICAgICAgIGFkZHJlc3NfbGluZTI6ICcnLFxuICAgICAgICBhZGRyZXNzX2NpdHk6ICcnLFxuICAgICAgICBhZGRyZXNzX3ppcDogJycsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6ICcnLFxuICAgICAgICBhZGRyZXNzX2NvdW50cnk6ICcnXG4gICAgICB9O1xuICAgIC8vIHRoaXMubG9naW5EYXRhID0ge1xuICAgIC8vICAgICBlbWFpbDogJycsXG4gICAgLy8gICAgIHBhc3N3b3JkOiAnJyxcbiAgICAvLyAgICAgdHlwZTogJycsXG4gICAgLy8gICAgIG9yZGVyRGF0YToge31cbiAgICAvLyAgIH07XG4gICAgdGhpcy5yZWdpc3RyYXRpb25EYXRhID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLnJlY292ZXJ5RGF0YSA9IHtcbiAgICAgICAgZW1haWw6ICcnXG4gICAgICB9O1xuICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YSA9IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBpbmZvcm1hdGlvbjoge30sXG4gICAgICAgIGJ1dHRvbjogJycsXG4gICAgICAgIHR5cGU6ICcnXG4gICAgICB9O1xuICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdHlwZTogJ2NlbnRlcidcbiAgICAgIH07XG4gICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhID0ge1xuICAgICAgICBvcmRlcklkOiAnJyxcbiAgICAgICAgdHlwZTogJycsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHRleHQyOiAnJyxcbiAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgICBwcmljZTogbnVsbFxuICAgICAgfTtcbiAgICB0aGlzLmxvZ2luRXJyb3IgPSB7XG4gICAgICBlbWFpbDogZmFsc2UsXG4gICAgICBwYXNzd29yZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cblxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcblxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2x5ZmlsbHMudHMiLCIvKipcbiAqIFNlcnZlci1zaWRlIHJvdXRlcy4gT25seSB0aGUgbGlzdGVkIHJvdXRlcyBzdXBwb3J0IGh0bWw1cHVzaHN0YXRlLlxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cbiAqXG4gKiBJbmRleCAoLykgcm91dGUgZG9lcyBub3QgaGF2ZSB0byBiZSBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gKiAnaG9tZScsICdhYm91dCdcbiAqIF07XG4gKiovXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnc2VydmljZXMvOmlkJyxcbiAgICAncHJvZmlsZS9wcml2YWN5JyxcbiAgICAncHJvZmlsZS9oZWxwJyxcbiAgICAncHJvZmlsZS9jb25kaXRpb25zJyxcbiAgICAnb3JkZXJzJyxcbiAgICAncHJvZmlsZS86cGFnZSdcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWZpeGVkLXRvcCBiZy1pbnZlcnNlXFxcIiBbbmdDbGFzc109XFxcInsnaXMtc2VhcmNoJzogaXNGaW5kRmllbGR9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayB0b3AtbWVudVxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHJvdXRlckxpbms9XFxcIlxcXCIgKGNsaWNrKT1cXFwidXBkYXRlVGFiTWVudSgpXFxcIj5TdGFyYm9vazwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWJsb2NrXFxcIiAqbmdJZj1cXFwiaXNGaW5kRmllbGRcXFwiPlxcbiAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwiZmluZFZhbHVlXFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJyZXN1bHRzXFxcIiBmaWVsZD1cXFwidGl0bGVcXFwiIHNjcm9sbEhlaWdodD1cXFwiMTcwcHhcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcInNlYXJjaCgkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RSZXN1bHQoZmluZFZhbHVlKVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgPHRlbXBsYXRlIGxldC1yZXM+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChyZXMpXFxcIj57eyByZXMudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiAqbmdJZj1cXFwic3BpbmVyVmlld1xcXCI+XFxuICAgICAgICA8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzEzcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2xvc2UtY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIXNwaW5lclZpZXcgJiYgY2xlYXJWaWV3XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSByb3VuZGVkIHRoaWNrXFxcIiAoY2xpY2spPVxcXCJjbGVhclNlYXJjaEZvcm0oKVxcXCI+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInVpLWF1dG9jb21wbGV0ZS1wYW5lbCBlbXB0eVxcXCIgKm5nSWY9XFxcInJlc3VsdHMubGVuZ3RoID09PSAwICYmIGZpbmRWYWx1ZS5sZW5ndGggPiAwICYmIGlzU2VhcmNoZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0XFxcIj5OZXNzdW4gcmlzdWx0YXRvPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWdsaW5lXFxcIiAqbmdJZj1cXFwiIWlzRmluZEZpZWxkXFxcIj57e3RhZ2xpbmV9fTwvZGl2PlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGFyaWEtbGFiZWw9XFxcIk1lbnVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+PC9idXR0b24+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoICE9PSBmYWxzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbGxhcHNlJzpuYXZiYXJTdGF0ZT09PWZhbHNlfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgaG9tZVxcXCIgcm91dGVyTGluaz1cXFwiXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDp0cnVlfVxcXCIgKGNsaWNrKT1cXFwidXBkYXRlVGFiTWVudSh0cnVlKVxcXCI+SG9tZTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIG9yZGVyc1xcXCIgcm91dGVyTGluaz1cXFwiL29yZGVyc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPk9yZGluaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIHJvdXRlckxpbms9XFxcIi9wcm9maWxlL3NldHRpbmdzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+e3thdXRoLnByb2ZpbGUuZnVsbG5hbWV9fTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGZsb2F0LXhzLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYXV0aCA9PT0gZmFsc2UgJiYgYnJvd3NlclxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbGxhcHNlJzpuYXZiYXJTdGF0ZT09PWZhbHNlfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgcHJvZmlsZVxcXCIgKGNsaWNrKT1cXFwiZ2V0TG9naW5Qb3B1cCgpXFxcIj5BY2NlZGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRSZWdpc3RyYXRpb25Qb3B1cCgpXFxcIj5SZWdpc3RyYXRpPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L25hdj5cXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuPGFwcC1wb3B1cHM+PC9hcHAtcG9wdXBzPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLXRhYnNcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIGhvbWUtdGFiLWJhclxcXCJcXG4gICAgICAgKHN3aXBlbGVmdCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCJcXG4gICAgICAgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtcGlsbHNcXFwiXFxuICAgICAgICBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWxlZnQucHgnOiBkZWx0YX1cXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG5hdlNlcnZpY2VzIG9mIHNlcnZpY2VzQ2F0ZWdvcnlMaXN0XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6bmF2U2VydmljZXMuX2lkPT09YWN0aXZlU2VydmljZUNhdGVnb3J5ICYmIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgIT09IGZhbHNlfVxcXCIgKGNsaWNrKT1cXFwidGFiTmF2aWdhdGUobmF2U2VydmljZXMuX2lkKVxcXCI+PGkgY2xhc3M9XFxcImZ7e25hdlNlcnZpY2VzLmljb25fbmFtZX19XFxcIj48L2k+IHt7bmF2U2VydmljZXMudGl0bGV9fTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuPC9uYXY+LS0+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIGhvbWUtcGFnZVxcXCIgKm5nSWY9XFxcImlzU2VydmljZXNWaWV3ID09PSB0cnVlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC0xMCBtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1hc29ucnktY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZXMtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IHNlcnZpY2VDYXRlZ29yeSBvZiBzZXJ2aWNlc0RhdGFcXFwiIFtuZ0NsYXNzXT1cXFwieydzZXJ2aWNlcy1ibG9jay1iaWcnOiBzZXJ2aWNlQ2F0ZWdvcnkudHlwZSA9PT0gJ2NvbnRlbnQnfVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInNlcnZpY2VDYXRlZ29yeS50eXBlID09PSAnY29udGVudCdcXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwic2VydmljZUNhdGVnb3J5LmltYWdlXFxcIiAobG9hZCk9XFxcIm1ha2VNYXNvbnJ5KClcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPnt7IHNlcnZpY2VDYXRlZ29yeS5kZXNjcmlwdGlvbiB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic2VydmljZUNhdGVnb3J5LnR5cGUgIT09ICdjb250ZW50J1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7c2VydmljZUNhdGVnb3J5LnRpdGxlXzF9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZSBjb250ZW50IG5vc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBzZXJ2aWNlQ2F0ZWdvcnkub3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nSWY9XFxcIml0ZW0udHlwZSA9PT0gJ0NIRUNLQk9YJyB8fCBpdGVtLnR5cGUgPT09ICdSQURJT0JVVFRPTidcXFwiIFtuZ0NsYXNzXT1cXFwieydjaGVja2VkJzppdGVtLnNlbGVjdGVkfVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlU2VydmljZShzZXJ2aWNlQ2F0ZWdvcnkudGl0bGUsIGl0ZW0udGl0bGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVxcXCJpdGVtLnNlbGVjdGVkPT09dHJ1ZVxcXCIgY2xhc3M9XFxcImZhIGZhLWNoZWNrLXNxdWFyZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XFxcIml0ZW0uc2VsZWN0ZWQ9PT1mYWxzZVxcXCIgY2xhc3M9XFxcImZhIGZhLXNxdWFyZS1vXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udGl0bGVfMX19XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLnR5cGUgPT09ICdJTlBVVFRFWFQnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VydmljZXNEYXRhW2l0ZW0uZm9ybUlkXS5vcHRpb25zW2l0ZW0ub3B0aW9uSWRdLmlucHV0X3ZhbHVlXFxcIiAoa2V5dXApPVxcXCJjaGFuZ2VWYWx1ZShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZClcXFwiIChjaGFuZ2UpPVxcXCJjaGFuZ2VWYWx1ZShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZClcXFwiIChmb2N1cyk9XFxcInNlbGVjdEFsbENvbnRlbnQoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPnt7c2VydmljZXNEYXRhW2l0ZW0uZm9ybUlkXS5vcHRpb25zW2l0ZW0ub3B0aW9uSWRdLnZhbHVlX3N5bWJvbH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YXBwLW9yZGVyIFtvcmRlckRhdGFdPVxcXCJvcmRlckRhdGFcXFwiIFtvcmRlcklzRnVsbF09XFxcIm9yZGVySXNGdWxsXFxcIj48L2FwcC1vcmRlcj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+U3RhcmJvb2sgwqkgMjAxNiBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuPGFwcC1sYW5kaW5nICpuZ0lmPVxcXCJpc1NlcnZpY2VzVmlldyA9PT0gZmFsc2VcXFwiPjwvYXBwLWxhbmRpbmc+XFxuPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlcy1sb2FkZXJcXFwiPjwvYXBwLWxvYWRpbmc+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclxcXCI+XFxuICA8Zm9ybSBjbGFzcz1cXFwic2lkZWJhci1jb250YWluZXJcXFwiICNvcmRlckZvcm09XFxcIm5nRm9ybVxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgpXFxcIj5cXG4gICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItYmxvY2tcXFwiPlxcbiAgICAgIDxoMj57e29yZGVyRGF0YS5zZXJ2aWNlfX08L2gyPlxcblxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIW9yZGVySXNGdWxsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWxpc3QtZW1wdHlcXFwiPjxzdHJvbmc+SW5zZXJpc2NpPC9zdHJvbmc+IGxlIGluZm9ybWF6aW9uaSBuZWNlc3NhcmkgZGVsIGFwcHVudGFtZW50byBlIGludmlhIGxhIHJpY2hpZXN0YS48L2Rpdj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCJvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50ID4gb3JkZXJEYXRhLnRvdGFsUHJpY2VcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz48L3N0cm9uZz5QcmV6em8gbWluaW1vIGRlbCdvcmRpbmUg4oKse3sgb3JkZXJEYXRhLm9yZGVyX29wdGlvbnMubWluX2Ftb3VudCAvIDEwMCB9fTwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lciBzZWxlY3RlZC1vcmRlcnNcXFwiIFtuZ1N0eWxlXT1cXFwieydtYXgtaGVpZ2h0JzogbWF4T3JkZXJCbG9ja1NpemV9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIGNhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgPHNwYW4+e3sgb3JkZXJEYXRhLnNlcnZpY2UgfX08L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxzcGFuICAqbmdGb3I9XFxcImxldCBvcmRlclNlcnZpY2Ugb2Ygb3JkZXJEYXRhLnNlcnZpY2VzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fSB7e29yZGVyU2VydmljZS5vcHRpb24uc3ltYm9sfX08L2k+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSAhPT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fTwvaT48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIHRvdGFsXFxcIj5cXG4gICAgICAgIDxzcGFuPlRvdGFsZSA8aT7igqx7eyBvcmRlckRhdGEudG90YWxQcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC1vcmRlci1mb3JtXFxcIj5cXG4gICAgICAgIDxsYWJlbD5RdWFuZG8gdnVvaSBzdm9sZ2VyZSBxdWVzdG8gbGF2b3JvPzwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcImlzTW9iaWxlQ2FsZW5kYXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlIGRhdGVwaWNrZXItYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhci10aW1lcy1vIGNhbGVuZGFyLWJveFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxwLWNhbGVuZGFyIG5hbWU9XFxcImRhdGFPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kYXRlXFxcIiBpZD1cXFwiZGF0YU9yYU1vYmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgcmVhZG9ubHlJbnB1dD1cXFwicmVhZG9ubHlJbnB1dFxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcIiFpc01vYmlsZUNhbGVuZGFyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZSBkYXRlcGlja2VyLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXItdGltZXMtbyBjYWxlbmRhci1ib3hcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8cC1jYWxlbmRhciBuYW1lPVxcXCJkYXRhT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGF0ZVxcXCIgaWQ9XFxcImRhdGFPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJEYXRhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgZGF0ZUZvcm1hdD1cXFwiZGQgTU0geXlcXFwiIFtsb2NhbGVdPVxcXCJpdFxcXCIgW21pbkRhdGVdPVxcXCJtaW5EYXRlXFxcIiBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdERhdGUoKVxcXCI+XFxuICAgICAgICAgICAgPC9wLWNhbGVuZGFyPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcImJyb3dzZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIiAoY2xpY2tPdXRzaWRlKT1cXFwiY2xvc2VUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9zcGFuPiAtLT5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRpbWVPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRpbWVPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci50aW1lXFxcIiB2YWx1ZT1cXFwie3tPcmRlci50aW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJPcmFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vYmlsZUFyZWFcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLXBpY2tlclxcXCIgKm5nSWY9XFxcInRpbWVQaWNrZXJJc1Nob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtZWxlbVxcXCIgKm5nRm9yPVxcXCJsZXQgdGltZSBvZiB0aW1lUGlja2VyXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RUaW1lKHRpbWUpXFxcIj5cXG4gICAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiPjwvc3Bhbj4gLS0+XFxuICAgICAgICAgICAgICB7e3RpbWV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcIiFicm93c2VyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCI+IDwhLS0gaXMgbm90IHN1cHBvcnQgaWYgY2xpZW50ICE9IGJyb3dzZXIgKGNsaWNrT3V0c2lkZSk9XFxcImNsb3NlVGltZXBpY2tlcigpXFxcIiAtLT5cXG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvc3Bhbj4gLS0+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aW1lT3JhU2VydmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0aW1lT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIudGltZVxcXCIgdmFsdWU9XFxcInt7T3JkZXIudGltZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiT3JhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2JpbGVBcmVhXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1waWNrZXJcXFwiICpuZ0lmPVxcXCJ0aW1lUGlja2VySXNTaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLWVsZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHRpbWUgb2YgdGltZVBpY2tlclxcXCIgKGNsaWNrKT1cXFwic2VsZWN0VGltZSh0aW1lKVxcXCI+e3t0aW1lfX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxsYWJlbD5JbnNlcmlzY2kgbOKAmWluZGlyaXp6bzwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiAhaXNBZGRyZXNzRnVsbCAmJiBzdWJtaXRPcmRlciAmJiBpc0FkZHJlc3NEaXJ0eX1cXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1tYXAtbWFya2VyXFxcIj48L3NwYW4+IC0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkluZGlyaXp6b1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOmlzQWRkcmVzc0Z1bGwgPT09IGZhbHNlICYmIGlzQWRkcmVzc0RpcnR5ID09PSB0cnVlfVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZHJlc3NcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCIgKGtleXVwKT1cXFwibW9kaWZ5QWRkcmVzcygpXFxcIiAoY2hhbmdlKT1cXFwibW9kaWZ5QWRkcmVzcygpXFxcIj4tLT5cXG4gICAgICAgICAgICA8cC1hdXRvQ29tcGxldGUgaWQ9XFxcImx1b2dvXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHRleHQtc21hbGxcXFwiIHBsYWNlaG9sZGVyPVxcXCJWaWEgR2l1c2VwcGUgVmVyZGkgMTAgTWlsYW5vXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6aXNBZGRyZXNzRnVsbCA9PT0gZmFsc2UgJiYgaXNBZGRyZXNzRGlydHkgPT09IHRydWV9XFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGVsaXZlcnlfYWRkcmVzc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJhZGRyZXNzZXNcXFwiIGZpZWxkPVxcXCJmb3JtYXR0ZWRBZGRyZXNzXFxcIiAoY29tcGxldGVNZXRob2QpPVxcXCJnZXRBZGRyZXNzZXMoJGV2ZW50KVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0QWRkcmVzcygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8L3AtYXV0b0NvbXBsZXRlPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXJyb3ItYmxvY2tcXFwiICpuZ0lmPVxcXCIhaXNBZGRyZXNzRnVsbCAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzID09PSAnJ1xcXCI+SW5zZXJpc2NpIGwnaW5kaXJpenpvIGVzYXR0bzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvci1ibG9ja1xcXCIgKm5nSWY9XFxcIiFpc0FkZHJlc3NGdWxsICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgIT09ICcnICYmIGlzQWRkcmVzc09uZVxcXCI+SW5kaXJpenpvIG5vbiB0cm92YXRvPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJlcnJvci1ibG9ja1xcXCIgKm5nSWY9XFxcIiFpc0FkZHJlc3NPbmUgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyAhPT0gJydcXFwiPkluZGlyaXp6byBub24gw6ggc3BlY2lmaWNvPC9kaXY+LS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxsYWJlbD5Ob3RhPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm5vdGFcXFwiIG5hbWU9XFxcImFwcGxpY2FudF9kZXNjcmlwdGlvblxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzY2lhIHVuYSBub3RhLi4uXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1ibG9ja1xcXCIgKGNsaWNrKT1cXFwic2hvd0NvbmZpcm1hdGlvbigpXFxcIiBbZGlzYWJsZWRdPVxcXCIhaXNFbmFibGVcXFwiPkFudGVwcmltYSBkZWwgcHJvZ2V0dG88L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtzXFxcIj5cXG4gICAgICAgICAgPHA+XFxuICAgICAgICAgICAgU3RhcmJvb2sgwqkgMjAxNyDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9oZWxwXFxcIj5Bc3Npc3RlbnphPC9hPlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlci1wYWdlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgICAgPGgxPkhhaSBiaXNvZ25vIGRpIGxhdm9yYXppb25pIGludGVybmk/PC9oMT5cXG4gICAgICAgICAgPGg2PsOIIGNvc2kgc2VtcGxpY2UuIFRyb3ZhIGlsIHNlcnZpemlvLiBDYWxjb2xhIGlsIHByZXZlbnRpdm8uIFByZW5vdGEuPC9oNj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctc2VhcmNoXFxcIj5cXG4gICAgICAgICAgPHAtYXV0b0NvbXBsZXRlIFsobmdNb2RlbCldPVxcXCJxdWVyeVxcXCIgW3N1Z2dlc3Rpb25zXT1cXFwicmVzdWx0c1xcXCIgZmllbGQ9XFxcInRpdGxlXFxcIiBzY3JvbGxIZWlnaHQ9XFxcIjI3NXB4XFxcIiAoY29tcGxldGVNZXRob2QpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0UmVzdWx0KHF1ZXJ5KVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvbnRyb3NvZmZpdHRvIGluIGNhcnRvbmdlc3NvLCBQYXJldGUgaW4gY2FydG9uZ2Vzc28uLi5cXFwiIG1pbkxlbmd0aD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgPHRlbXBsYXRlIGxldC1yZXM+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIiAoY2xpY2spPVxcXCJzZWxlY3RSZXN1bHQocmVzKVxcXCI+e3sgcmVzLnRpdGxlIH19PC9kaXY+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgKm5nSWY9XFxcInNwaW5lclZpZXdcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgd2lkdGg9JzIxcHgnIGhlaWdodD0nMjFweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgICAgICAgICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTY5LjY0NjAwMzI5Mzg0ODgyIDExMy4wOTczMzU1MjkyMzI1N1xcXCIgc3Ryb2tlPVxcXCIjM0I1NjhEXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xvc2UtY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIXNwaW5lclZpZXcgJiYgY2xlYXJWaWV3XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2Ugcm91bmRlZCB0aGlja1xcXCIgKGNsaWNrKT1cXFwiY2xlYXJTZWFyY2hGb3JtKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVpLWF1dG9jb21wbGV0ZS1wYW5lbCBlbXB0eVxcXCIgKm5nSWY9XFxcInJlc3VsdHMubGVuZ3RoID09PSAwICYmIHF1ZXJ5Lmxlbmd0aCA+IDBcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5vLXJlc3VsdFxcXCI+TmVzc3VuIHJpc3VsdGF0bzwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMj5MYXZvcmF6aW9uaSBwacO5IHJpY2hpZXN0aTwvaDI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1zZXJ2aWNlc1xcXCI+XFxuICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2VzLWNhcmQgc3dpcGVyLXNsaWRlXFxcIiAqbmdGb3I9XFxcImxldCBzZXJ2aWNlIG9mIHNlcnZpY2VzXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RSZXN1bHQoc2VydmljZSlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtY29udGFpbmVyXFxcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XFxcIid1cmwoJyArIHNlcnZpY2UuaW1hZ2VfdXJsICsgJyknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYWRvd1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IHNlcnZpY2UudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgQSBQQVJUSVJFIERBIDxzcGFuPuKCrHt7IHNlcnZpY2Uub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ3aHktY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+UGVyY2jDqSB1c2FyZSBTdGFyYm9vaz88L2gyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgd2h5LWNlbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3Rhcl9xdWFsaXR5LnBuZ1xcXCIgY2xhc3M9XFxcInJvdW5kZWQgbXgtYXV0byBkLWJsb2NrXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxuICAgICAgICAgICAgPGgzPkxhdm9yYXppb25pIGRpIGFsdGEgcXVhbGl0w6A8L2gzPlxcbiAgICAgICAgICAgIDxoND5JIHNlcnZpemkgc3UgU3RhcmJvb2sgdmVuZ29ubyBlc2VndWl0aSBkYWxsZSBtaWdsaW9yaSBhemllbmRlLiBVc2FuZG8gdW4gYWxnb3JpdG1vIGRpIHJpY2VyY2EsIFN0YXJib29rIHRyb3ZhIGzigJlhemllbmRhIHBpw7kgdmljaW5hIGFsbGEgdHVhIGFiaXRhemlvbmUuPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJrZXQtcHJpY2UucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJlenpvIGdhcmFudGl0byBkYWwgbWVyY2F0bzwvaDM+XFxuICAgICAgICAgICAgPGg0PkkgcHJlenppIHN1IFN0YXJib29rIHZlbmdvbm8gY2FsY29sYXRpIGRhIHVuIGFsZ29yaXRtbyBpbnRlcm5vIGRlbGxhIHBpYXR0YWZvcm1hIHBlciByZW5kZXJlIHBpw7kgZXF1byBlIHRyYXNwYXJlbnRlIGlsIG1lcmNhdG8uPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90aW1pbmcucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJldmVudGl2byBkaXJldHRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+VW5hIHZvbHRhIHNjZWx0byBpbCBzZXJ2aXppbywgc2VsZXppb25hIGkgZm9ybSBzZWNvbmRvIGxlIGVzaWdlbnplIGUgY2FsY29sYSBpbCBwcmV2ZW50aXZvIGRpcmV0dGFtZW50ZSBkYWxsYSBwaWF0dGFmb3JtYS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJwYXJ0bmVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxlIG1pZ2xpb3JpIGF6aWVuZGUgcGFydG5lcjwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1icmFuZHMtc2Nyb2xsYWJsZVxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+IC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwicHJlLWZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+U2ljdXJlenphIGRlbCBzaXRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zZWN1cml0eVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm9ydG9uLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VjdXJlLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJ1c3QucG5nXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaXN0ZW1pIGRpIHBhZ2FtZW50bzwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtcGF5bWVudC1tZXRob2RzXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmlzYS5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FtZXJpY2FuZXhwcmVzcy5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0cmlwZS5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PkNvbnRhdHRpPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1jb250YWN0LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxoND5BdHRpdm8gMjQvNzwvaDQ+XFxuICAgICAgICAgICAgPGg0PkNlbGx1bGFyZTogKzM5IDMyNyAyNCAxNSAwMjg8L2g0PlxcbiAgICAgICAgICAgIDxoND5FbWFpbDogaW5mb0BzdGFyYm9vay5jbzwvaDQ+XFxuICAgICAgICAgICAgPGg0PlZpYSBMdWlnaSBQaXJhbmRlbGxvIDIxLCBCdXN0byBBcnNpemlvIFZBPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TZWd1aWNpIHN1PC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zb2NpYWxzXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3RhcmJvb2suY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2sucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zdGFyYm9va2NvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0ucG5nXFxcIj48L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb3B5cmlnaHRcXFwiPjxzdHJvbmc+U3RhcmJvb2s8L3N0cm9uZz4gwqkgMjAxNyBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsYW5kaW5nLXRvcC1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxoMT5QcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2dubywgbmVsbCdvcmEgZSBpbCBnaW9ybm8gY2hlIGRlc2lkZXJpPC9oMT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TdGFyYm9vayA8c3Bhbj5zZXJ2aWNlczwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgPHA+U2VsZXppb25hIHVubyBkZWkgc2Vydml6aSBzdSBTdGFyYm9vaywgaW1wb3N0YSBsYSBkYXRhLCBvcmEsIGluZGlyaXp6byBlIGNvbmZlcm1hIGzigJlvcmRpbmUuIFZlcnJhaSBub3RpZmljYXRvIGNvbiB1biBzbXMgZSB1bmEgbWFpbCBxdWFuZG8gbOKAmW9yZGluZSBlIHN0YXRvIGFjY2V0dGF0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBxdWFsaWZpY2F0by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzFdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlB1bGl6aWU8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkhhaSBiaXNvZ25vIGRpIHVuIHNlcnZpemlvIGRpIHB1bGl6aWUgcGVyIGxhIGNhc2EsIGzigJl1ZmZpY2lvIG8gaWwgbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4NGZjZmVlOWQ2NzUyNDIzYTYxZTc5ZScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigxLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMSwgJ29mZicpXFxcIj5QcmVub3RhIFB1bGl6aWU8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0yXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1syXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5FbGV0dHJpY2lzdGE8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGVsZXR0cmljaXN0YSBxdWFsaWZpY2F0byBlIGFmZmlkYWJpbGUgcGVyIGxhdm9yaSBkaSBjYXNhLCB1ZmZpY2lvIG8gbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVlNDFkZjFiYWZhNDFjZGJmYjlkMScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigyLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMiwgJ29mZicpXFxcIj5QcmVub3RhIEVsZXR0cmljaXN0YTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmQgZ3JlZW4tY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtM1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbM119XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+SWRyYXVsaWNvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5UaSBzZXJ2ZSB1biBpZHJhdWxpY28gcHJvZmVzc2lvbmlzdGEsIHB1b2kgcHJlbm90YXJsbyBzdWJpdG8gc3UgU3RhcmJvb2sgc2VuemEgaW1wZWduby48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVkZmU0ZjFiYWZhNDFjZGJmYjljYicpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigzLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMywgJ29mZicpXFxcIj5QcmVub3RhIElkcmF1bGljbzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2VudGVyLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgIFJlbmRpIGxhIHR1YSB2aXRhIHBpw7kgZmFjaWxlLiBQcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2duby5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5Db21lIGZ1bnppb25hPzwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TZWxlemlvbmEgaSBzZXJ2aXppPC9kaXY+XFxuICAgICAgICAgIDxwPk9nbmkgY2F0ZWdvcmlhIGhhIHVuYSBsaXN0YSBkaSBzZXJ2aXppLiBTZWxlemlvbmEgcXVlbGxpIGRpIHF1aSBoYWkgYmlzb2duby48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5QcmVub3RhIHVuIGFwcHVudGFtZW50bzwvZGl2PlxcbiAgICAgICAgICA8cD5JbnNlcmlzY2kgaSBkYXRpIG5lY2Vzc2FyaSBkZWwgb3JkaW5lIGUgaW52aWEgbGEgcmljaGllc3RhLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+SW52aWEgcmljaGllc3RhPC9hPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnMtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtYmVsbFxcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudGluZ1xcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5SaWNldmkgbGEgY29uZmVybWEgZSByaWxhc3NhdGkhPC9kaXY+XFxuICAgICAgICAgIDxwPlVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBs4oCZb3JhIGRlbCBhcHB1bnRhbWVudG8uPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDE+TGUgcHJpbmNpcGFsaSBjaXR0w6A8L2gxPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTFcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VmFyZXNlPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+TWlsYW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VG9yaW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgY2hlIHRpIGRhIGxhIHBvc3NpYmlsaXTDoCBkaSBwcmVub3RhcmUgaSBwcm9mZXNzaW9uaXN0aSBuZWxsJ29yYSBlIGRhdGEgY2hlIHR1IGRlc2lkZXJpIHNlbnphIGRvdmVyIGNoaWFtYXJlIGUgbGFzY2lhcmUgYXBwdW50YW1lbnRpIHRyYW1pdGUgdGVsZWZvbm8gbyBlbWFpbC5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHdpdGhvdXQtdGFic1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0LW5hdmlnYXRlXFxcIj5cXG4gICAgICA8YSAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6dGFiLnNlbGVjdGVkfVxcXCIgKGNsaWNrKT1cXFwicmVuZGVyUGFnZSh0YWIubmFtZSlcXFwiPlxcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgICAgPGRpdj57e3RhYi5uYW1lfX08L2Rpdj5cXG4gICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgb3JkZXJzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXJzLWVycm9yXFxcIiAqbmdJZj1cXFwicGFnZURhdGEubGVuZ3RoID09PSAwICYmIHJlcXVlc3RJc0NvbXBsZXRlXFxcIj57e2VtcHR5TGlzdFRpdGxlfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgb3JkZXIgb2YgcGFnZURhdGFcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUoZGF0ZUZvcm1hdGluZygnbm93JyksIG9yZGVyLmRhdGUpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gU2Vydml6aW8gaW4gY29yc28uLi5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBJbiBhdHRlc2EgZGkgcGFnYW1lbnRvLi4uLS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdyZWVuXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBjb25mZXJtYVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUob3JkZXIuZGF0ZSwgZGF0ZUZvcm1hdGluZygnbm93JykpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQXNzZWduYXRvXFxuICAgICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZWRcXFwiPjwvc3Bhbj4gQW5udWxsYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdyZWVuXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBjb25mZXJtYVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUob3JkZXIuZGF0ZSwgZGF0ZUZvcm1hdGluZygnbm93JykpICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEFzc2VnbmF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0aSdcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBwYWdhbWVudG8uLi4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gU2Vydml6aW8gaW4gY29yc28uLi5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsYWNrXFxcIj48L3NwYW4+IFNjYWR1dG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OCAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQ29tcGxldGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk5ICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+PC9zcGFuPiBBbm51bGxhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LW5hbWVcXFwiPlxcbiAgICAgICAgICAgIHt7IGNhdGVnb3JpZXNbb3JkZXIuY2F0ZWdvcnlfdHlwZV0gfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWRhdGVcXFwiPlxcbiAgICAgICAgICAgIHt7IGRhdGVGb3JtYXRpbmcob3JkZXIuZGF0ZSkgfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWJvZHlcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLXJvdyBwcm9kdWN0cyBjb2wteGwtNFxcXCI+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygb3JkZXIuZGV0YWlsc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2UnOnByb2R1Y3QudHlwZSA9PT0gJ3NlcnZpY2UnfVxcXCI+e3sgcHJvZHVjdC50aXRsZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC50eXBlICE9PSAnc2VydmljZScgJiYgcHJvZHVjdC5hbW91bnQgPiAwXFxcIj7igqx7eyBwcm9kdWN0LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0gdG90YWxcXFwiPlRvdGFsZSA8aT7igqx7eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIG9yZGVyLmRldGFpbHNcXFwiIFtuZ0NsYXNzXT1cXFwieydzZXJ2aWNlJzpwcm9kdWN0LnR5cGUgPT09ICdzZXJ2aWNlJ31cXFwiPnt7IHByb2R1Y3QudGl0bGUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QudHlwZSAhPT0gJ3NlcnZpY2UnXFxcIj57eyBwcm9kdWN0LmRlc2NyaXB0aW9uIH19PC9pPjwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJpdGVtIHRvdGFsXFxcIj5Ub3RhbGUgPGk+4oKse3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX08L2k+PC9kaXY+IC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT0wXFxcIj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09MVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIubWVyY2hhbnQucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIW9yZGVyLm1lcmNoYW50IHx8IG9yZGVyLm1lcmNoYW50ID09PSBudWxsIHx8IG9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz5JbiBhdHRlc2EgZGkgY29uZmVybWEuLi48L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLm1lcmNoYW50ICYmIG9yZGVyLm1lcmNoYW50ICE9PSBudWxsICYmIG9yZGVyLnN0YXR1cz09PTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5JbmRpcml6em86PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnN0cmVldCB9fSwge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXRfbnVtYmVyIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MuY2l0eSB9fSwge3sgb3JkZXIuYWRkcmVzcy5wb3N0YWxfY29kZSB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnByb3ZpbmNlIH19LCB7eyBvcmRlci5hZGRyZXNzLmNvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGllbnQtaW5mbyBjb2wteGwtNFxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIob3JkZXIuY3VzdG9tZXIgfHwgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTk4ICYmIGF1dGhEYXRhLl9pZCAhPT0gb3JkZXIuY3VzdG9tZXJfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiKG9yZGVyLmN1c3RvbWVyIHx8IG9yZGVyLmN1c3RvbWVyICE9PSBudWxsKSAmJiBvcmRlci5zdGF0dXM9PT05OCAmJiBhdXRoRGF0YS5faWQgPT09IG9yZGVyLmN1c3RvbWVyX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+UHJvZmVzc2lvbmlzdGE6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIubWVyY2hhbnQucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5jdXN0b21lciAmJiBvcmRlci5jdXN0b21lciAhPT0gbnVsbCAmJiAoIW9yZGVyLm1lcmNoYW50IHx8IG9yZGVyLm1lcmNoYW50ID09PSBudWxsKSAmJiBvcmRlci5zdGF0dXM9PT0wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTk5XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5JbmRpcml6em86PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnN0cmVldCB9fSwge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXRfbnVtYmVyIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MuY2l0eSB9fSwge3sgb3JkZXIuYWRkcmVzcy5wb3N0YWxfY29kZSB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnByb3ZpbmNlIH19LCB7eyBvcmRlci5hZGRyZXNzLmNvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1yb3cgZGVzY3JpcHRpb24gY29sLXhsLTRcXFwiPlxcbiAgICAgICAgICAgICAge3sgb3JkZXIuZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWZvb3RlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvZGVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPkNPRElDRTo8L3NwYW4+XFxuICAgICAgICAgICAge3sgb3JkZXIuX2lkIH19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUoZGF0ZUZvcm1hdGluZygnbm93JyksIG9yZGVyLmRhdGUpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScgJiYgaXNWZW5kb3IgPT09IHRydWVcXFwiIChjbGljayk9XFxcImNvbXBsZXRhT3JkZXIob3JkZXIuX2lkKVxcXCI+Q29tcGxldGEgc2Vydml6aW88L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+UHJldmVudGl2bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIiAoY2xpY2spPVxcXCJlZGl0T3JkZXIob3JkZXIuX2lkLCBvcmRlci5wYXltZW50LmFtb3VudClcXFwiPk1vZGlmaWNhPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScgJiYgaXNWZW5kb3IgPT09IHRydWVcXFwiIChjbGljayk9XFxcImNvbmZpcm1PcmRlcihvcmRlci5faWQpXFxcIj5Db25mZXJtYSBzZXJ2aXppbzwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk5ICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIiAoY2xpY2spPVxcXCJyZWFjdGl2YXRlT3JkZXIob3JkZXIuX2lkKVxcXCI+UmVhdHRpdmEgc2Vydml6aW88L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcImNhbmNlbE9yZGVyKG9yZGVyLl9pZClcXFwiPkFubnVsbGEgc2Vydml6aW88L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcImNvbnRpbnVlT3JkZXIob3JkZXIuX2lkLCBvcmRlci5wYXltZW50LmFtb3VudClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IFByb2NlZGk8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2sgYXJjaGl2ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMyAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCIgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9kaXY+IC0tPlxcbjxkaXYgY2xhc3M9XFxcInByb2ZpbGUtcGFnZVxcXCIgW25nQ2xhc3NdPVxcXCJ7d2hpdGVCZzogc2VsZWN0VGFiID09PSAnY29uZGl0aW9ucycgfHwgc2VsZWN0VGFiID09PSAncHJpdmFjeScgfHwgc2VsZWN0VGFiID09PSAnaGVscCd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayB3aXRob3V0LXRhYnNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtbmF2aWdhdGVcXFwiIChzd2lwZWxlZnQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiIChzd2lwZXJpZ2h0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIj5cXG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1sZWZ0LnB4JzogZGVsdGF9XFxcIj5cXG4gICAgICAgICAgPGEgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnNcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOnRhYi51cmwgPT09IHNlbGVjdFRhYn1cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcHJvZmlsZScsIHRhYi51cmxdXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgPGRpdj57e3RhYi5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8YSAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+PHNwYW4+PC9zcGFuPjxkaXY+RXNjaTwvZGl2PjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2ZpbGUtc2V0dGluZ3NcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdzZXR0aW5ncydcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5JbmZvcm1hemlvbmkgZGVsIGFjY291bnQ8L2Rpdj5cXG4gICAgICAgIDxmb3JtICNjaGFuZ1Byb2ZpbGU9XFxcIm5nRm9ybVxcXCI+XFxuICAgICAgICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICAgICAgICA8bGFiZWw+Tk9NRSBDT01QTEVUTzwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tZSBDb2dub21lXFxcIiAjZnVsbG5hbWU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5mdWxsbmFtZVxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5Db2dub21lPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3RuYW1lXFxcIiAjZnVsbG5hbWU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5sYXN0bmFtZVxcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08bGFiZWw+Tm9tZSBBemllbmRhPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhdHJvbnltaWNcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBhdHJvbnltaWNcXFwiIHJlcXVpcmVkIGRpc2FibGVkPi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxsYWJlbD5DRUxMVUxBUkU8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW1lcm9cXFwiICNwaG9uZV9udW1iZXI9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5waG9uZV9udW1iZXJcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGxhYmVsPkVNQUlMPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW1haWwtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5kaXJpenpvIGVtYWlsXFxcIiB2YWx1ZT1cXFwiXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5lbWFpbFxcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2NoYW5nZVBhc3N3b3JkJylcXFwiIGRpc2FibGVkPk1vZGlmaWNhIHBhc3N3b3JkPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwYXNzd29yZC1ibG9ja1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5QYXNzd29yZDwvbGFiZWw+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInBhc3N3b3JkLWNvbnRhaW5lclxcXCI+LS0+XFxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFzc3dvcmRcXFwiPi0tPlxcbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4+4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiPC9zcGFuPi0tPlxcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNoYW5nZS1wYXNzd29yZFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2NoYW5nZVBhc3N3b3JkJylcXFwiPk1vZGlmaWNhIHBhc3N3b3JkPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaGVhZGVyIHNlY29uZFxcXCI+SW5kaXJpenpvIGRpIGZhdHR1cmF6aW9uZTwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+SW5kaXJpenpvIGRlbCBkb21pY2lsaW88L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYWRkcmVzczFcXFwiICNzdHJlZXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5zdHJlZXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJWaWEgVmVyZGkgMTNcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkNpdHTDoCBlIENBUDwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZG91YmxlLWlucHV0XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmaXJzdFxcXCIgbmFtZT1cXFwiYWRkcmVzczJcXFwiICNjaXR5PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuY2l0eVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNpdHTDoFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgc2Vjb25kXFxcIiBuYW1lPVxcXCJudW1iZXIyXFxcIiAjcG9zdGFsX2NvZGU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wb3N0YWxfY29kZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNBUFxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+UHJvdmluY2lhIGUgTmF6aW9uZTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZG91YmxlLWlucHV0XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmaXJzdFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgI3Byb3ZpbmNlPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucHJvdmluY2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJQcm92aW5jaWFcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHNlY29uZFxcXCIgbmFtZT1cXFwiY291bnRyeVxcXCIgI2NvdW50cnk9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5jb3VudHJ5XFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF6aW9uZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+UGFydGl0YSBJVkE8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGl2YVxcXCIgcGxhY2Vob2xkZXI9XFxcIlAuSVZBXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5Db2RpY2UgRmlzY2FsZTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb2RpY2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb2RpY2UgRmlzY2FsZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1pbmZvcm1hdGlvblxcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgICAgICAgICAgPHN0cm9uZyAqbmdJZj1cXFwiZm9ybUVycm9yLnRpdGxlLmxlbmd0aCA+IDBcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L3N0cm9uZz4ge3tmb3JtRXJyb3IubWVzc2FnZX19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwidXBkYXRlUHJvZmlsZSgpXFxcIj5BZ2dpb3JuYSBJbmZvcm1hemlvbmk8L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zaWduLW91dFxcXCI+PC9zcGFuPiBMb2cgb3V0PC9idXR0b24+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAncGF5bWVudCdcXFwiPlxcbiAgICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIiAqbmdGb3I9XFxcImxldCBjYXJkIG9mIGNhcmRzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1sb2dvIHt7IGZvcm1hdENzc0NsYXNzKGNhcmQuYnJhbmQpIH19XFxcIj48c3Bhbj4qKioqIHt7IGNhcmQubGFzdDQgfX08L3NwYW4+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpc0RlZmF1bHRcXFwiICpuZ0lmPVxcXCJkZWZhdWx0Q2FyZCA9PT0gY2FyZC5pZFxcXCI+RGVmYXVsdDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJkZWZhdWx0Q2FyZCAhPT0gY2FyZC5pZFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0Q2FyZChjYXJkLmlkKVxcXCI+RGVmYXVsdDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ2FyZChjYXJkLmlkKVxcXCI+UmltdW92aTwvYT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZChjYXJkLmlkKVxcXCI+TW9kaWZpY2E8L2E+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaW5mb3JtYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tZTo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5uYW1lIH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+TnVtZXJvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAqKioqIHt7IGNhcmQubGFzdDQgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TY2FkZW56YTo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5leHBfbW9udGggfX0ve3sgZm9ybWF0WWVhcihjYXJkLmV4cF95ZWFyKSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRpcG86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYnJhbmQgfX0ge3sgY2FyZC5mdW5kaW5nIH19IHt7IGNhcmQub2JqZWN0IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWluZm9ybWF0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkluZGlyaXp6bzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5hZGRyZXNzX2xpbmUxIH19IHt7IGNhcmQuYWRkcmVzc19saW5lMiB9fSA8YnI+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5hZGRyZXNzX3N0YXRlIH19IHt7IGNhcmQuYWRkcmVzc19jaXR5IH19IDxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3NfemlwIH19IHt7IGNhcmQuYWRkcmVzc19jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcIm5ldy1jYXJkXFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiPlxcbiAgICAgICAgICAgIEFnZ2l1bmdpIHVuIG1ldG9kbyBkaSBwYWdhbWVudG9cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnY29uZGl0aW9ucydcXFwiPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLiBBQ0NFU1NPIEUgUkVHT0xBTUVOVE8gREVMIFNJVE8gU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjEuMS4gQWNjZXNzbyBhbCBTaXRvOiA8L3N0cm9uZz5F4oCZIHBvc3NpYmlsZSBhdmVyZSBhY2Nlc3NvIGFkIGFsY3VuZSBhcmVlIGRlbCBTaXRvIHdlYiBhbmNoZSBzZW56YSBlZmZldHR1YXJlIHVuIE9yZGluZSBvIHNlbnphIHByb2NlZGVyZSBhbGxhIHJlZ2lzdHJhemlvbmUgZGVpIHByb3ByaSBkYXRpLiBMYSBtYWdnaW9yIHBhcnRlIGRlbGxlIGFyZWUgZGVsIFNpdG8gc29ubyBhY2Nlc3NpYmlsaSBhIGNoaXVucXVlLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS4yLiBBY2NldHRhemlvbmUgZGVsIFJlZ29sYW1lbnRvIGRlbCBTaXRvOjwvc3Ryb25nPiBMYSBuYXZpZ2F6aW9uZSBpbiBxdWFsdW5xdWUgYXJlYSBkZWwgU2l0byBjb21wb3J0YSBsJ2FjY2V0dGF6aW9uZSBkZWwgUmVnb2xhbWVudG8gZGVsIFNpdG8uIEkgdmlzaXRhdG9yaSBlZCB1dGVudGkgZGVsIFNpdG8gY2hlIHJpZml1dGlubyBkaSBhY2NldHRhcmUgaWwgUmVnb2xhbWVudG8gZGVsIFNpdG8gc29ubyB0ZW51dGkgYSBsYXNjaWFyZSBpbW1lZGlhdGFtZW50ZSBpbCBTaXRvIGUgbm9uIGF2cmFubm8gbGEgcG9zc2liaWxpdMOgIGRpIG9yZGluYXJlIHNlcnZpemkgdHJhbWl0ZSBpbCBTaXRvIHN0ZXNzby48YnI+XFxuICAgICAgICA8c3Ryb25nPjEuMy4gTW9kaWZpY2hlIGFsIFJlZ29sYW1lbnRvIGRlbCBTaXRvOjwvc3Ryb25nPiBTVEFSQk9PSyBoYSBmYWNvbHTDoCBkaSBtb2RpZmljYXJlIGlsIHByZXNlbnRlIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGluIHF1YWxzaWFzaSBtb21lbnRvLiBPY2NvcnJlIHBlcnRhbnRvIGNvbnRyb2xsYXJlIHBlcmlvZGljYW1lbnRlIGlsIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGluIHZpZ29yZSBhbCBtb21lbnRvIHBvaWNow6kgZXNzYSB2aW5jb2xhIGkgdmlzaXRhdG9yaSBlIGdsaSB1dGVudGkgZGVsIFNpdG8uIEkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBzb25vIHRlbnV0aSBhbCByaXNwZXR0byBkZWxsZSBwb2xpY3kgZSBkZWxsYSBkaXNjaXBsaW5hIGluIHZpZ29yZSBhbCBtb21lbnRvIGluIGN1aSBlZmZldHR1YW5vIHVuIE9yZGluZSB0cmFtaXRlIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS40LiBSZXNwb25zYWJpbGl0w6A6PC9zdHJvbmc+IFNwZXR0YSBhaSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHByZWRpc3BvcnJlIHF1YW50byBuZWNlc3NhcmlvIHBlciBhdmVyZSBhY2Nlc3NvIGFsIFNpdG8gc3Rlc3NvLiBJbm9sdHJlLCBpIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gc29ubyB0ZW51dGkgYSBnYXJhbnRpcmUgY2hlIHR1dHRpIGNvbG9ybyBjaGUgaGFubm8gYWNjZXNzbyBhbCBTaXRvIHRyYW1pdGUgbGEgbG9ybyBjb25uZXNzaW9uZSBhZCBJbnRlcm5ldCBzaWFubyBhIGNvbm9zY2VuemEgZGVsIHByZXNlbnRlIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGUgbGEgcmlzcGV0dGluby48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuIFNUQVRVUyBERUxM4oCZVVRFTlRFIERFTCBTSVRPIFNUQVJCT09LPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLjEuIENhcGFjaXTDoCBnaXVyaWRpY2EgZWQgZXTDoDogPC9zdHJvbmc+RWZmZXR0dWFuZG8gdW4gT3JkaW5lIHRyYW1pdGUgaWwgU2l0bywgbOKAmXV0ZW50ZSBnYXJhbnRpc2NlOjxicj5cXG4gICAgICAgIDxzdHJvbmc+Mi4xLjEuPC9zdHJvbmc+IGRpIGF2ZXIgbGEgY2FwYWNpdMOgIGRpIGFnaXJlIGUgY29uY2x1ZGVyZSBjb250cmF0dGkgZ2l1cmlkaWNhbWVudGUgdmluY29sYW50aTxicj5cXG4gICAgICAgIDxzdHJvbmc+Mi4xLjIuPC9zdHJvbmc+IGRpIGF2ZXJlIGNvbXBpdXRvIDE4IGFubmk8L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjMuIE1PREFMSVTDgCBESSBFTUlTU0lPTkUgREVMTCBPUkRJTkUgRSBESSBFTEFCT1JBWklPTkUgREVMTOKAmU9SRElORTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+My4xLiBDb21waWxhemlvbmUgZGVsbOKAmU9yZGluZTogPC9zdHJvbmc+RG9wbyBhdmVyIHNlbGV6aW9uYXRvIGlsIHNlcnZpemlvIGNoZSBpbnRlbmRlIG9yZGluYXJlIGRhIHVuIHByb2Zlc3Npb25pc3RhIHByZXNjZWx0byBkYWxsYSBwaWF0dGFmb3JtYSBlZCBhdmVyIGZvcm5pdG8gbGUgaW5mb3JtYXppb25pLCBs4oCZdXRlbnRlIGhhIGZhY29sdMOgIGRpIGVmZmV0dHVhcmUgbOKAmU9yZGluZSBjbGljY2FuZG8gc3VsLCBvIHNlbGV6aW9uYW5kbyBpbCwgcHVsc2FudGUg4oCcUHJvY2VkaSBjb24gbCdvcmRpbmXigJ0gZSDigJxQcm9jZWRpIGNvbiBsJ2FjcXVpc3Rv4oCdLiBTaSByaWNvcmRhIGNoZSDDqCBpbXBvcnRhbnRlIGNvbnRyb2xsYXJlIHR1dHRlIGxlIGluZm9ybWF6aW9uaSBpbW1lc3NlIGUgY29ycmVnZ2VyZSBldmVudHVhbGkgZXJyb3JpIHByaW1hIGRpIGNsaWNjYXJlIHN1bCBwdWxzYW50ZSBvIGRpIHNlbGV6aW9uYXJsbyBwb2ljaMOpLCBkb3BvIGF2ZXJsbyBmYXR0bywgaWwgcHJvY2VkaW1lbnRvIGRpIGVsYWJvcmF6aW9uZSBkZWxs4oCZT3JkaW5lIGhhIGluaXppbyBlIG5vbiDDqCBwacO5IHBvc3NpYmlsZSBjb3JyZWdnZXJlIGV2ZW50dWFsaSBlcnJvcmkuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjIuIE1vZGlmaWNhIG8gYW5udWxsYW1lbnRvIGRlbGzigJlPcmRpbmU6IDwvc3Ryb25nPlVuYSB2b2x0YSBjaGUgbOKAmU9yZGluZSDDqCBzdGF0byBpbm9sdHJhdG8gZSBpbCBwYWdhbWVudG8gw6ggc3RhdG8gYXV0b3JpenphdG8gbm9uIMOoIHBpw7kgcG9zc2liaWxlIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgbOKAmU9yZGluZSBlIG5vbiBzaSBoYSBkaXJpdHRvIGFkIGFsY3VuIHJpbWJvcnNvLiBPdmUgZGVzaWRlcmkgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBs4oCZT3JkaW5lLCBs4oCZdXRlbnRlIHB1w7Igcml2b2xnZXJzaSBhbCBTZXJ2aXppbyBDbGllbnRpLCBpbCBxdWFsZSB0ZW50ZXLDoCBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgY29tdW5pY2FyZ2xpIGxhIHJpY2hpZXN0YSBkZWxs4oCZdXRlbnRlLiBOb24gdmkgw6ggYWxjdW5hIGFzc2ljdXJhemlvbmUsIHR1dHRhdmlhLCByaWd1YXJkbyBhbCBmYXR0byBjaGUgaWwgU2Vydml6aW8gQ2xpZW50aSBzYXLDoCBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIG8gY2hlIGlsIHByb2Zlc3Npb25pc3RhIGFjY2V0dGVyw6AgbGUgcmljaGllc3RlIGRlbGzigJl1dGVudGUgaW4gcXVhbnRvIGlsIHByb2Nlc3NvIGRpIGVsYWJvcmF6aW9uZSBkZWxs4oCZT3JkaW5lIHBvdHJlYmJlIGF2ZXJlIGdpw6AgYXZ1dG8gaW5pemlvLiBJbCBjbGllbnRlLCBhaSBzZW5zaSBkZWxsJ2FydC4gNTUgbGV0dC4gYSkgZGVsIENvZGljZSBkZWwgQ29uc3Vtbywgbm9uIGhhIGRpcml0dG8gYSByZWNlZGVyZSBkYWdsaSBPcmRpbmkgZWZmZXR0dWF0aSB1bmEgdm9sdGEgY2hlIGlsIGJlbmUgbyBzZXJ2aXppbyByaWNoaWVzdG8gw6ggc3RhdG8gY29uc2VnbmF0by48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuMy4gQXV0b3JpenphemlvbmUgYWwgcGFnYW1lbnRvOjwvc3Ryb25nPiBJbiBjYXNvIGRpIG1hbmNhdGEgYXV0b3JpenphemlvbmUgcmVsYXRpdmEgYWQgdW4gcXVhbHNpYXNpIHBhZ2FtZW50bywgbOKAmU9yZGluZSBub24gdmllbmUgZWxhYm9yYXRvIG8gbm9uIHZpZW5lIGNvbXVuaWNhdG8gYWxsYSBwaWF0dGFmb3JtYS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuNC4gRWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgZSByaWZpdXRvIGRpIE9yZGluaSBkYSBwYXJ0ZSBkZWwgcHJvZmVzc2lvbmlzdGE6IDwvc3Ryb25nPkFsbGEgcmljZXppb25lIGRlbGzigJlPcmRpbmUsIFNUQVJCT09LIG5lIGluaXppYSBs4oCZZWxhYm9yYXppb25lIGNvbiBsYSB0cmFzbWlzc2lvbmUgZGVsbG8gc3Rlc3NvIGFpIHByb2Zlc3Npb25pc3RpIGludGVyZXNzYXRpIGUgbm90aWZpY2EgYWxs4oCZdXRlbnRlLCB0cmFtaXRlIHNtcyBlIG1haWwsIGNoZSBs4oCZT3JkaW5lIMOoIHN0YXRvIGFzc2VnbmF0by4gU2kgc3BlY2lmaWNhIGNoZSBxdWFsc2lhc2kgcGFnaW5hIGRpIGNvbmZlcm1hIGNoZSBs4oCZdXRlbnRlIHBvc3NhIHZpc3VhbGl6emFyZSBzdWwgU2l0byBlIHF1YWxzaWFzaSBjb25mZXJtYSBkaSBPcmRpbmUgY2hlIGzigJl1dGVudGUgc3Rlc3NvIHJpY2V2YSB0cmFtaXRlIGUtbWFpbCBpbmRpY2FubyBlc2NsdXNpdmFtZW50ZSBjaGUgbCdPcmRpbmUgZGVsbOKAmXV0ZW50ZSDDqCBzdGF0byBhc3NlZ25hdG8gbyDDqCBpbiBjb3Jzby4gU1RBUkJPT0sgaW5jb3JhZ2dpYSB0dXR0aSBpIHByb3ByaSBwcm9mZXNzaW9uaXN0aSBhZCBhY2NldHRhcmUgdHV0dGkgZ2xpIE9yZGluaSBlZCBhIGNvbXVuaWNhcmUgdGVtcGVzdGl2YW1lbnRlIGV2ZW50dWFsaSByaWZpdXRpLCBlIGNvbXVuaWNhIGFsbOKAmXV0ZW50ZSAoZ2VuZXJhbG1lbnRlIHRyYW1pdGUgZS1tYWlsKSBub24gYXBwZW5hIHNpYSByYWdpb25ldm9sbWVudGUgcG9zc2liaWxlIG9nbmkgZXZlbnR1YWxlIHJpZml1dG8gZGEgcGFydGUgZGVsIHByb2Zlc3Npb25pc3RhLiBJbiBvZ25pIGNhc28sIGkgcHJvZmVzc2lvbmlzdGkgcG9zc29ubyBzY2VnbGllcmUgZGkgcmlmaXV0YXJlIGdsaSBPcmRpbmkgaW4gcXVhbHNpYXNpIG1vbWVudG8gcGVyIGlsIGZhdHRvIGRpIGVzc2VyZSBlY2Nlc3NpdmFtZW50ZSBpbXBlZ25hdGksIGEgY2F1c2EgZGVsbGUgY29uZGl6aW9uaSBhdG1vc2ZlcmljaGUgbyBwZXIgcXVhbHNpYXNpIGFsdHJhIHJhZ2lvbmUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjUuIEZpbml0dXJhIGRlbCBzZXJ2aXppbzo8L3N0cm9uZz4gSSB0ZW1waSBzdGltYXRpIHBlciBpIHNlcnZpemkgZGFsIGluaXppbyBhIGZpbmUgbGF2b3JpIHZhcmlhbm8gdHJhIDEtMiBnaW9ybmkgYSBzZWNvbmRhIGRlbCB0aXBvIGRpIHNlcnZpemlvIG9yZGluYXRvLiBTVEFSQk9PSyBlIGkgcHJvZmVzc2lvbmlzdGkgbm9uIGdhcmFudGlzY29ubyBjaGUgaSBzZXJ2aXppIHZlcnJhbm5vIGZpbml0aSBlbnRybyBpIHRlbXBpIHN0aW1hdGkuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz40LiBQUkVaWk8gRSBQQUdBTUVOVE88L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjQuMS4gSVZBIGUgY29zdGkgZGkgc2Vydml6aW86PC9zdHJvbmc+IEkgcHJlenppIHNvbm8gcXVlbGxpIGluZGljYXRpIHN1bCBTaXRvLiBJIHByZXp6aSBzb25vIGNvbXByZW5zaXZpIGRpIElWQS4gVGFsaSBjb3N0aSB2ZW5nb25vIGFnZ2l1bnRpIGFsbOKAmWltcG9ydG8gdG90YWxlIGRvdnV0bywgc2UgYXBwbGljYWJpbGkuPGJyPlxcbiAgICAgICAgPHN0cm9uZz40LjIuIEVycmF0YSBpbmRpY2F6aW9uZSBkZWwgcHJlenpvOjwvc3Ryb25nPiBJbCBwcmVzZW50ZSBTaXRvIHdlYiBjb250aWVuZSB1biB2YXN0byBudW1lcm8gZGkgbWVudSBlZCDDqCBzZW1wcmUgcG9zc2liaWxlIGNoZSBhbGN1bmkgZGkgZXNzaSBwb3NzYW5vIHJlY2FyZSB1bmEgaW5kaWNhemlvbmUgaW5lc2F0dGEgZGVsIHByZXp6by4gUXVhbG9yYSBpbCBwcmV6em8gZXNhdHRvIGRpIHVuIE9yZGluZSBzaWEgcGnDuSBlbGV2YXRvIGRlbCBwcmV6em8gaW5kaWNhdG8gc3VsIFNpdG8sIFNUQVJCT09LIG5vcm1hbG1lbnRlIHByb3Z2ZWRlIGEgY29udGF0dGFyZSBs4oCZdXRlbnRlIHByaW1hIGRlbGxhIHNwZWRpemlvbmUgZGVsbCdPcmRpbmUuIEluIHRhbCBjYXNvLCBuw6kgU1RBUkJPT0sgbsOpIGlsIHByb2Zlc3Npb25pc3RhIGludGVyZXNzYXRvIGhhbm5vIGFsY3VuIG9iYmxpZ28gZGkgYXNzaWN1cmFyZSBjaGUgbCdPcmRpbmUgdmVuZ2EgZm9ybml0byBhbGzigJl1dGVudGUgYWwgcHJlenpvIGluZmVyaW9yZSBlcnJvbmVhbWVudGUgaW5kaWNhdG8gbsOpIGRpIHJpbWJvcnNhcmUgYWxs4oCZdXRlbnRlIGxhIGRpZmZlcmVuemEgcmlzcGV0dG8gYWwgcHJlenpvIGVycmF0by4gSW4gY2FzbyBpbCBwcmV6em8gc2lhIGVjY2Vzc2l2YW1lbnRlIGVsZXZhdG8gcmlzcGV0dG8gYWwgcHJlenpvIG9yaWdpbmFyaWFtZW50ZSBjb252ZW51dG8gZSBsJ3V0ZW50ZSBzaWEgdW4gY29uc3VtYXRvcmUgYWkgc2Vuc2kgZGVsIENvZGljZSBkZWwgQ29uc3VtbywgbCd1dGVudGUgYXZyw6AgZmFjb2x0w6AgZGkgcmVjZWRlcmUgZGFsbCdPcmRpbmUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz40LjMuIE1vZGFsaXTDoCBkaSBwYWdhbWVudG86PC9zdHJvbmc+IElsIHBhZ2FtZW50byBkZWkgc2Vydml6aSBkZXZlIGVzc2VyZSBlZmZldHR1YXRvIG1lZGlhbnRlIHVuYSBjYXJ0YSBkaSBjcmVkaXRvL2RlYml0by48YnI+XFxuICAgICAgICA8cD48c3Ryb25nPjUuIFNFUlZJWklPIENMSUVOVEk8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjUuMSBEaXNwb3NpemlvbmkgR2VuZXJhbGk6PC9zdHJvbmc+IFNUQVJCT09LIGNvbnNpZGVyYSBpbCBTZXJ2aXppbyBDbGllbnRpIGVzdHJlbWFtZW50ZSBpbXBvcnRhbnRlLiBJbCBTZXJ2aXppbyBDbGllbnRpIGNlcmNhIGR1bnF1ZSBkaSBwcmVzdGFyZSBhc3Npc3RlbnphIGFsbOKAmXV0ZW50ZSwgcXVhbmRvIHBvc3NpYmlsZSwgaW4gY2FzbyBkaSBwcm9ibGVtaSBjb24gbCdPcmRpbmUuIEzigJl1dGVudGUgcHXDsiBlbnRyYXJlIGluIGNvbnRhdHRvIGNvbiBpbCBTZXJ2aXppbyBDbGllbnRpIGFuZGFuZG8gc3VsbGEgcGFnaW5hIGhlbHAgZGVsIHNpdG8uPGJyPlxcbiAgICAgICAgPHN0cm9uZz41LjIuIE1vZGlmaWNhIG8gYW5udWxsYW1lbnRvIGRlbGwnT3JkaW5lOjwvc3Ryb25nPiBPdmUgbOKAmXV0ZW50ZSBkZXNpZGVyaSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGlsIHByb3ByaW8gT3JkaW5lIGRvcG8gY2hlIGVzc28gc2lhIHN0YXRhIGlub2x0cmF0byBlIGlsIHJlbGF0aXZvIHBhZ2FtZW50byBhdXRvcml6emF0bywgbOKAmXV0ZW50ZSBoYSBmYWNvbHTDoCBkaSByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0ssIGNvbiBsZSBtb2RhbGl0w6Agc29wcmEgZGVzY3JpdHRlLCBpbCBxdWFsZSB0ZW50ZXLDoCBkaSBlbnRyYXJlIGluIGNvbnRhdHRvIGNvbiBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIGNvbXVuaWNhcmUgbGUgcmljaGllc3RlIGRlbCBjbGllbnRlLiBOb24gdmkgw6ggYWxjdW5hIGFzc2ljdXJhemlvbmUsIHR1dHRhdmlhLCByaWd1YXJkbyBhbCBmYXR0byBjaGUgaWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyBzYXLDoCBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIG8gY2hlIGlsIHByb2Zlc3Npb25pc3RhIGFjY2V0dGVyw6AgbGUgcmljaGllc3RlIGRlbGzigJl1dGVudGUgaW4gcXVhbnRvIGlsIHByb2Nlc3NvIGRpIGVsYWJvcmF6aW9uZSBkZWxsJ09yZGluZSBwb3RyZWJiZSBhdmVyZSBnacOgIGF2dXRvIGluaXppby48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuMy4gUmVjbGFtaSBlIGZlZWRiYWNrIGRhIHBhcnRlIGRlZ2xpIHV0ZW50aTo8L3N0cm9uZz4gTmVsbOKAmWV2ZW50dWFsaXTDoCBjaGUgbOKAmXV0ZW50ZSBub24gc2lhIHNvZGRpc2ZhdHRvIGRlbGxhIHF1YWxpdMOgIGRpIHVuIHF1YWxzaWFzaSBzZXJ2aXppbyBvIGRlbCBzZXJ2aXppbyBmb3JuaXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhLCBTVEFSQk9PSyBpbnZpdGEgbOKAmXV0ZW50ZSBhIGZhciBjb25vc2NlcmUgbGEgcHJvcHJpYSBvcGluaW9uZSB0cmFtaXRlIGlsIFNpdG8sIGluIGZvcm1hIGRpIHZhbHV0YXppb25pLCBjb21tZW50aSBlIHJlY2Vuc2lvbmkgY2hlIHJpZmxldHRhbm8gbGEgcHJvcHJpYSBlc3BlcmllbnphLiBMZSBSZWNlbnNpb25pIHNvbm8gdW5hIHBhcnRlIGltcG9ydGFudGUgZGVsIHByb2Nlc3NvIGRpIGNvbnRyb2xsbyBxdWFsaXTDoCBkaSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuNC4gUmlzYXJjaW1lbnRvOjwvc3Ryb25nPiBOZWxs4oCZZXZlbnR1YWxpdMOgIGNoZSBs4oCZdXRlbnRlIG5vbiBzaWEgc29kZGlzZmF0dG8gZGVsbGEgcXVhbGl0w6AgZGkgdW4gcXVhbHNpYXNpIHNlcnZpemlvIG8gZGVsIHNlcnZpemlvIGZvcm5pdG8gZGEgdW4gcHJvZmVzc2lvbmlzdGEgZSBkZXNpZGVyaSByaWNoaWVkZXJlIHVuIHJpbWJvcnNvLCB1bmEgcmlkdXppb25lIHByb3Bvcnppb25hbGUgZGVsIHByZXp6byBvIHF1YWxzaWFzaSBhbHRyYSBmb3JtYSBkaSByaXNhcmNpbWVudG8sIMOoIHRlbnV0byBhIGNvbnRhdHRhcmUgZGlyZXR0YW1lbnRlIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgcHJlc2VudGFyZSBpbCBwcm9wcmlvIHJlY2xhbW8gZSwgc2UgZGVsIGNhc28sIGFkIG9zc2VydmFyZSBsZSBwcm9jZWR1cmUgZGkgcmVjbGFtbyBwcmV2aXN0ZSBkYWwgcHJvZmVzc2lvbmlzdGEgc3Rlc3NvLiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIHNpYSBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhLCBvIHF1YWxvcmEgaWwgcHJvZmVzc2lvbmlzdGEgcmlmaXV0aSBkaSBvY2N1cGFyc2kgZGVsIHJlY2xhbW8gZGVsbOKAmXV0ZW50ZSwgcXVlc3TigJl1bHRpbW8gcHXDsiByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgY29uIGxlIG1vZGFsaXTDoCBzb3ByYSBkZXNjcml0dGUgZW50cm8gNDggb3JlIGRhbGzigJlpbm9sdHJvIGRlbGwnT3JkaW5lIGUgdW5vIGRlaSBDb25zdWxlbnRpIGRlbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIHRlbnRlcsOgIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSByaWNoaWVkZXJlIHVuIHJpc2FyY2ltZW50byBwZXIgY29udG8gZGVsbOKAmXV0ZW50ZS4gU2kgZmEgcHJlc2VudGUgY2hlIFNUQVJCT09LIG5vbiBoYSBhbGN1biBjb250cm9sbG8gc3VpIHByb2Zlc3Npb25pc3RpIG7DqSBzdWxsYSBxdWFsaXTDoCBkZWkgc2Vydml6aSBvIHN1bCBzZXJ2aXppbyBmb3JuaXRvIGRhaSBwcm9mZXNzaW9uaXN0aSBzdGVzc2kgZSBub24gw6ggaW4gZ3JhZG8gZGkgZm9ybmlyZSwgbsOpIGFzc3VtZSBhbGN1bmEgcmVzcG9uc2FiaWxpdMOgIG8gaW1wZWdubyBkaSBmb3JuaXJlLCBhbGN1biByaXNhcmNpbWVudG8gaW4gZmF2b3JlIGRlbGzigJl1dGVudGUgcGVyIGNvbnRvIGRpIHF1YWxzaWFzaSBwcm9mZXNzaW9uaXN0YS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjYuIExJQ0VOWkEgROKAmVVTTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ni4xLiBVc28gY29uc2VudGl0bzo8L3N0cm9uZz4gReKAmSBjb25zZW50aXRvIGFsbOKAmXV0ZW50ZSB1dGlsaXp6YXJlIGlsIFNpdG8gbm9uY2jDqSBzdGFtcGFyZSBlIHNjYXJpY2FyZSBkYWwgU2l0byBlc3RyYXR0aSBkZWwgU2l0byBzdGVzc28gcGVyIHVzbyBwZXJzb25hbGUgbm9uIGF2ZW50ZSBmaW5hbGl0w6AgY29tbWVyY2lhbGkgYWxsZSBzZWd1ZW50aSBjb25kaXppb25pOjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ni4xLjEuIGzigJl1dGVudGUgbm9uIGRldmUgdXRpbGl6emFyZSBpbCBTaXRvIGluIG1vZG8gaW1wcm9wcmlvLCBpdmkgaW5jbHVzbyBtZWRpYW50ZSB0ZWNuaWNoZSBkaSBwaXJhdGVyaWEgaW5mb3JtYXRpY2EgKGhhY2tpbmcpIG8gZGkgZXN0cmF6aW9uZSBpbmZvcm1hdGl6emF0YSBkaSBkYXRpIChzY3JhcGluZykuPC9zdHJvbmc+IDxicj5cXG4gICAgICAgIDxzdHJvbmc+Ni4xLjIuIFJlc3RyaXppb25pIGTigJl1c286PC9zdHJvbmc+IFNhbHZvIHBlciBxdWFudG8gcHJldmlzdG8gYWwgcGFyYWdyYWZvIDYuMSwgaWwgcHJlc2VudGUgU2l0byBub24gcHXDsiBlc3NlcmUgdXRpbGl6emF0byBlIG5lc3N1bmEgc3VhIHBhcnRlIHB1w7IgZXNzZXJlIHJpcHJvZG90dGEgbyBhcmNoaXZpYXRhIGluIGFsY3VuIGFsdHJvIHNpdG8gd2ViIG7DqSBwdcOyIGVzc2VyZSBpbnNlcml0byBpbiBhbGN1biBzaXN0ZW1hIG8gc2Vydml6aW8sIHB1YmJsaWNvIG8gcHJpdmF0bywgcGVyIGlsIHJlY3VwZXJvIGVsZXR0cm9uaWNvIGRlbGxlIGluZm9ybWF6aW9uaSBzZW56YSBsYSBwcmV2ZW50aXZhIGF1dG9yaXp6YXppb25lIHNjcml0dGEgZGkgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMy4gUmlzZXJ2YSBkaSBEaXJpdHRpOjwvc3Ryb25nPiBJIGRpcml0dGkgbm9uIGVzcGxpY2l0YW1lbnRlIGNvbmNlc3NpIG5lbCBwcmVzZW50ZSBTaXRvIHdlYiBzb25vIHJpc2VydmF0aS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjcuIEFDQ0VTU08gQUwgU0VSVklaSU88L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjcuMS4gRGlzcG9uaWJpbGl0w6AgZGVsIFNpdG86PC9zdHJvbmc+IFNlYmJlbmUgU1RBUkJPT0sgc2kgYWRvcGVyaSBwZXIgZmFyIHPDrCBjaGUgbOKAmWFjY2Vzc28gYWwgU2l0byBwb3NzYSBkaSBub3JtYSBhdnZlbmlyZSB2ZW50aXF1YXR0cm8gb3JlIHN1IHZlbnRpcXVhdHRybyAoMjRoLzI0KSwgU1RBUkJPT0sgbm9uIGFzc3VtZSBhbGN1biBvYmJsaWdvIGEgcmlndWFyZG8gZSBub24gw6ggcmVzcG9uc2FiaWxlIG5laSBjb25mcm9udGkgZGVsbOKAmXV0ZW50ZSBuZWwgY2FzbyBpbiBjdWkgaWwgU2l0bywgaW4gcXVhbHNpYXNpIG1vbWVudG8gbyBwZXIgcGVyaW9kaSBkaSBxdWFsc2lhc2kgZHVyYXRhLCBub24gc2lhIGRpc3BvbmliaWxlLjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ny4xLiBTb3NwZW5zaW9uZSBkZWxs4oCZYWNjZXNzbzo8L3N0cm9uZz4gTOKAmWFjY2Vzc28gYWwgcHJlc2VudGUgU2l0byBwdcOyIGVzc2VyZSB0ZW1wb3JhbmVhbWVudGUgc29zcGVzbyBpbiBxdWFsc2lhc2kgbW9tZW50bywgYW5jaGUgc2VuemEgcHJlYXZ2aXNvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ny4yLiBTaWN1cmV6emEgaW5mb3JtYXRpY2E6PC9zdHJvbmc+IFNlYmJlbmUgU1RBUkJPT0sgYWRvdHRpIGxlIG1pc3VyZSBwcmVzY3JpdHRlIHBlciBsZWdnZSBwZXIgbGEgdHV0ZWxhIGRlbGxlIGluZm9ybWF6aW9uaSBpbW1lc3NlLCBlc3NhIG5vbiDDqCBpbiBncmFkbyBkaSBnYXJhbnRpcmUgbGEgc2ljdXJlenphIGRlaSBkYXRpIHRyYXNtZXNzaSBhbCBTaXRvIHdlYjsgbGEgdHJhc21pc3Npb25lIHZpZW5lIHBlcnRhbnRvIGVmZmV0dHVhdGEgYSByaXNjaGlvIGRlbGzigJl1dGVudGUuPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3ByaXZhY3knXFxcIj5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4gSU5GT1JNQVpJT05JIFJBQ0NPTFRFIERBIFNUQVJCT09LPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+MS4xLiBOZWwgdmlzaXRhcmUgaWwgU2l0byBvIG5lbGzigJl1dGlsaXp6YXJlIGlsIFNlcnZpemlvIHBlciBpbm9sdHJhcmUgdW4gT3JkaW5lIGFkIHVuIHByb2Zlc3Npb25pc3RhIHRyYW1pdGUgaWwgU2l0bywgw6ggcG9zc2liaWxlIGNoZSB2ZW5nYSByaWNoaWVzdG8gZGkgZm9ybmlyZSBpbmZvcm1hemlvbmkgY2hlIHJpZ3VhcmRhbm8gbOKAmXV0ZW50ZSwgaXZpIGluY2x1c28gbm9tZSwgcmVjYXBpdGkgKHF1YWxpIG51bWVybyBkaSB0ZWxlZm9ubyBmaXNzbywgZGkgdGVsZWZvbm8gbW9iaWxlIGUgaW5kaXJpenpvIGUtbWFpbCkgZSBkYXRpIHJlbGF0aXZpIGFsIHBhZ2FtZW50byAocXVhbGkgaSBkYXRpIGRlbGxhIGNhcnRhIGRpIGNyZWRpdG8gbyBkaSBkZWJpdG8pLiBTVEFSQk9PSyBwdcOyIGlub2x0cmUgcmFjY29nbGllcmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbOKAmXV0aWxpenpvIGRlbCBTaXRvIGUgZGVsIFNlcnZpemlvIGRhIHBhcnRlIGRlbGzigJl1dGVudGUgbm9uY2jDqSBwdcOyIHJhY2NvZ2xpZXJlIGluZm9ybWF6aW9uaSByZWxhdGl2ZSBhbGzigJl1dGVudGUgYSBwYXJ0aXJlIGRhaSBtYXRlcmlhbGkgKHF1YWxpIG1lc3NhZ2dpIGUgcmVjZW5zaW9uaSkgY2hlIGzigJl1dGVudGUgc3Rlc3NvIHB1YmJsaWNhIHN1bCBTaXRvIG8gdHJhc21ldHRlIGFsIFNpdG8gbyBjaGUgaW52aWEgYSBTVEFSQk9PSyB0cmFtaXRlIGUtbWFpbCBvIHBlciBsZXR0ZXJhLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4gVVNPIERFTExFIElORk9STUFaSU9OSTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjIuMS4gTGUgaW5mb3JtYXppb25pIGRlZ2xpIHV0ZW50aSBjb25zZW50b25vIGEgU1RBUkJPT0sgZGkgZm9ybmlyZSBhZ2xpIHV0ZW50aSBzdGVzc2kgbOKAmWFjY2Vzc28gYWxsZSBzZXppb25pIGRlbCBTaXRvIGN1aSBzb25vIGludGVyZXNzYXRpIGUgZGkgZm9ybmlyZSBpbCBTZXJ2aXppby4gRXNzZSBtZXR0b25vIGlub2x0cmUgU1RBUkJPT0sgaW4gZ3JhZG8gZGkgZmF0dHVyYXJlIGdsaSBpbXBvcnRpIGRvdnV0aSBlIGNvbnNlbnRvbm8gYSBTVEFSQk9PSyBvIGFkIHVuIHByb2Zlc3Npb25pc3RhIGN1aSBs4oCZdXRlbnRlIGFiYmlhIGlub2x0cmF0byB1biBPcmRpbmUgZGkgY29udGF0dGFyZSBs4oCZdXRlbnRlIGluIG1lcml0byBhbCBTZXJ2aXppbywgb3ZlIG5lY2Vzc2FyaW8uIEFkIGVzZW1waW8sIFNUQVJCT09LIGUvbyBpbCBwcm9mZXNzaW9uaXN0YSBwb3Nzb25vIHV0aWxpenphcmUgaSBkYXRpIGRlbGzigJl1dGVudGUgcGVyIGZvcm5pcmUgYWxsbyBzdGVzc28gYWdnaW9ybmFtZW50aSBzdWxsbyBzdGF0byBkZWxsJ09yZGluZSBvIGFsdHJlIGluZm9ybWF6aW9uaSByZWxhdGl2ZSBhbGxhIHN0ZXNzYSBtZWRpYW50ZSBlLW1haWwsIHBlciB0ZWxlZm9ubyBmaXNzbyBvIG1vYmlsZSBvIHRyYW1pdGUgbWVzc2FnZ2lzdGljYSBtb2JpbGUuIElub2x0cmUsIFNUQVJCT09LIHV0aWxpenphIGVkIGFuYWxpenphIGxlIGluZm9ybWF6aW9uaSByYWNjb2x0ZSBhbCBmaW5lIGRpIGdlc3RpcmUsIHNvc3RlbmVyZSwgbWlnbGlvcmFyZSBlIHN2aWx1cHBhcmUgbGEgcHJvcHJpYSBhdHRpdml0w6AgaW1wcmVuZGl0b3JpYWxlLCBwZXIgZXZlbnR1YWxpIGFsdHJlIGZpbmFsaXTDoCBzdGF0aXN0aWNoZSBvIGFuYWxpdGljaGUgbm9uY2jDqSBwZXIgY29udHJpYnVpcmUgYWxsYSBwcmV2ZW56aW9uZSBkaSBmcm9kaS4gTmVpIGNhc2kgaW4gY3VpIHNpYSBvcHBvcnR1bm8sIG9yYSBlIGluIGZ1dHVybywgbOKAmXV0ZW50ZSBwb3RyZWJiZSBhdmVyZSBsYSBjYXBhY2l0w6AgZGkgZXNwcmltZXJlIGxlIHByb3ByaWUgcHJlZmVyZW56ZSByaWd1YXJkbyBhbGzigJl1dGlsaXp6byBkZWkgcHJvcHJpIGRhdGkgc2Vjb25kbyBxdWFudG8gcHJldmlzdG8gbmVsbGEgcHJlc2VudGUgSW5mb3JtYXRpdmEgaW4gbWF0ZXJpYSBkaSBQcml2YWN5IGUgZGkgZXNlcmNpdGFybGEgdHJhbWl0ZSBsYSBtZXRvZG9sb2dpYSBwcmVzY2VsdGEgZGFsbOKAmXV0ZW50ZSBwZXIgbOKAmXV0aWxpenpvIGRlbCBTZXJ2aXppbywgYWQgZXNlbXBpbywgaW4gbW9kYWxpdMOgIG1vYmlsZSwgdHJhbWl0ZSBhcHBsaWNhemlvbmkgbW9iaWxpIG8gbOKAmWV2ZW50dWFsZSByYXBwcmVzZW50YXppb25lIGRlbCBTaXRvLjxicj5cXG4gICAgICAgIDIuMi4gU1RBUkJPT0sgcHXDsiB1dGlsaXp6YXJlIGxlIGluZm9ybWF6aW9uaSBwZXIgY29udGF0dGFyZSBpbCBjbGllbnRlIGFsIGZpbmUgZGkgY29ub3NjZXJlLCBjb24gaWwgc3VvIGNvbnNlbnNvLCBsZSBzdWUgb3Bpbmlvbmkgc3VsIFNlcnZpemlvIGVkIG9jY2FzaW9uYWxtZW50ZSBkaSBpbmZvcm1hcmxvIGRlbGxlIG1vZGlmaWNoZSBvIGRlZ2xpIHN2aWx1cHBpIGltcG9ydGFudGkgY2hlIHJpZ3VhcmRhbm8gaWwgU2l0byBvIGlsIFNlcnZpemlvIHN1ZGRldHRvLjxicj5cXG4gICAgICAgIDIuMy4gU1RBUkJPT0sgcG90csOgIHV0aWxpenphcmUgbOKAmWluZGlyaXp6byBlbWFpbCBmb3JuaXRvIGRhbGzigJl1dGVudGUgZGVsIFNpdG8gYWwgbW9tZW50byBkZWxs4oCZYWNxdWlzdG8gZGkgcHJvZG90dGkgaW4gdmVuZGl0YSBzdWwgU2l0byBwZXIgZmFyIGNvbm9zY2VyZSBhbGxvIHN0ZXNzbyB1dGVudGUgaSBwcm9kb3R0aSBlIHNlcnZpemkgZGkgU1RBUkJPT0ssIHNpbWlsaSBhIHF1ZWxsaSBnacOgIGFjcXVpc3RhdGksIGNoZSBwb3NzYW5vIHJpc2N1b3RlcmUgaWwgc3VvIGludGVyZXNzZS4gTOKAmXV0ZW50ZSBwb3Ryw6AgaW4gb2duaSBtb21lbnRvLCBncmF0dWl0YW1lbnRlIGUgY29uIGVmZmV0dG8gaW1tZWRpYXRvIG9wcG9yc2kgYWxs4oCZdXRpbGl6em8gZGVsIHByb3ByaW8gaW5kaXJpenpvIGVtYWlsIHBlciBsYSByaWNlemlvbmUgZGkgdGFsZSBtYXRlcmlhbGUgaW5mb3JtYXRpdm8gY2xpY2NhbmRvIHN1bGzigJlhcHBvc2l0byBsaW5rIGluc2VyaXRvIGluIGNhbGNlIGEgY2lhc2N1bmEgZW1haWwgcmljZXZ1dGEuIEluIGFsdGVybmF0aXZhLCBs4oCZdXRlbnRlIHBvdHLDoCBvcHBvcnNpIGEgdGFsZSB0cmF0dGFtZW50byBhbmNoZSBtb2RpZmljYW5kbyBsZSBwcmVmZXJlbnplIGRhbGxhIHJlbGF0aXZhIHNlemlvbmUgZGVsIHByb3ByaW8gcHJvZmlsby4gUGVyIGdlc3RpcmUgbGUgbm90aWZpY2hlLCBs4oCZdXRlbnRlIGRvdnLDoCBhY2NlZGVyZSBhbGxhIHBhZ2luYSBkZWxsZSBpbXBvc3RhemlvbmkgZGVsIHN1byB0ZWxlZm9ubyBvIHRhYmxldCBlIG1vZGlmaWNhcmUgbCdhdXRvcml6emF6aW9uZSBhbGxlIG5vdGlmaWNoZSBwZXIgbCdhcHBsaWNhemlvbmUgU1RBUkJPT0suIEluIGNhc28gZGkgZGlzYXR0aXZhemlvbmUgZGVsbGUgbm90aWZpY2hlLCBs4oCZdXRlbnRlIG5vbiBwb3Ryw6AgcGnDuSByaWNldmVyZSBhZ2dpb3JuYW1lbnRpIHN1aSBzdW9pIG9yZGluaSB2aWEgbm90aWZpY2hlLjxicj5cXG4gICAgICAgIDIuNC4gU2UgY29uc2VudGl0byBkYWxs4oCZdXRlbnRlIGRlbCBTaXRvLCBTVEFSQk9PSyBwb3Ryw6AgdXRpbGl6emFyZSBpIGRhdGkgcGVyIGZhciBjb25vc2NlcmUgYWxs4oCZdXRlbnRlIHN1ZGRldHRvIGdsaSBhbHRyaSBwcm9kb3R0aSBlIHNlcnZpemkgZGkgU1RBUkJPT0sgY2hlIHBvc3Nhbm8gcmlzY3VvdGVyZSBpbCBzdW8gaW50ZXJlc3NlLCBpdmkgaW5jbHVzaSBzZXJ2aXppIGNoZSBwb3NzYW5vIGVzc2VyZSBvZ2dldHRvIGRpIGRpcmVjdCBtYXJrZXRpbmcgbWVkaWFudGUgc2lzdGVtaSBkaSBtZXNzYWdnaXN0aWNhIHRyYW1pdGUgY2VsbHVsYXJlIGUgYXR0cmF2ZXJzbyBsZSBub3RpZmljaGUuPGJyPlxcbiAgICAgICAgMi41LiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIGRlc2lkZXJpIHBpw7kgY2hlIGkgc3VvaSBkYXRpIHNpYW5vIHV0aWxpenphdGkgZGEgU1RBUkJPT0sgbmVpIG1vZGkgc29wcmEgaW5kaWNhdGkgbyBjYW1iaSBpZGVhIHJpZ3VhcmRvIGFsbGEgcG9zc2liaWxpdMOgIGRpIGVzc2VyZSBjb250YXR0YXRvIGluIGZ1dHVybywgc2kgcHJlZ2EgZGkgZmFybG8gc2FwZXJlIGEgU1RBUkJPT0sgdXRpbGl6emFuZG8gaSByZWNhcGl0aSBpbmRpY2F0aSBhbCBzdWNjZXNzaXZvIGFydGljb2xvIDggZS9vIG1vZGlmaWNhbmRvIGNvcnJpc3BvbmRlbnRlbWVudGUgaWwgcHJvcHJpbyBwcm9maWxvLjxicj5cXG4gICAgICAgIDIuNi4gUXVhbG9yYSBs4oCZdXRlbnRlIG5vbiBkZXNpZGVyaSBwacO5IGNoZSBpIHN1b2kgZGF0aSBzaWFubyB1dGlsaXp6YXRpIGRhIFNUQVJCT09LIG5laSBtb2RpIHNvcHJhIGluZGljYXRpIG8gY2FtYmkgaWRlYSByaWd1YXJkbyBhbGxhIHBvc3NpYmlsaXTDoCBkaSBlc3NlcmUgY29udGF0dGF0byBpbiBmdXR1cm8sIHNpIHByZWdhIGRpIG9wcG9yc2kgYWwgdHJhdHRhbWVudG8gbmVpIG1vZGkgc3UgaW5kaWNhdGkuIEluIG1hbmNhbnphLCDDqCBwb3NzaWJpbGUgaW5mb3JtYXJlIGluIG9nbmkgbW9tZW50byBmYXJsbyBzYXBlcmUgYSBTVEFSQk9PSyBkZWxsYSBwcm9wcmlhIGRlY2lzaW9uZSwgdXRpbGl6emFuZG8gaSByZWNhcGl0aSBpbmRpY2F0aSBhbCBzdWNjZXNzaXZvIGFydGljb2xvIDggZS9vIG1vZGlmaWNhbmRvIGNvcnJpc3BvbmRlbnRlbWVudGUgaWwgcHJvcHJpbyBwcm9maWxvLjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdoZWxwJ1xcXCI+XFxuICAgICAgICA8cD5IYWkgYmlzb2dubyBkaSBhaXV0bz8gPGJyPlxcbiAgICAgICAgU2NyaXZpIHVuYSBtYWlsIGhhcmFsZC5icmVndUBzdGFyYm9vay5jbyBlIHRpIHJpc3BvbmRlcmVtbyBuZWwgcGnDuSBicmV2ZSB0ZW1wbyBwb3NzaWJpbGUuPC9wPlxcbiAgICAgICAgPHA+VnVvaSBlbnRyYXJlIGEgZmFyIHBhcnRlIGRpIFNUQVJCT09LPyBBdW1lbnRhIGlsIG51bWVybyBkZWkgdHVvaSBjbGllbnRpIHBhZ2FudGkgZSByaXNwYXJtaWEgc3VpIGNvc3RpIGRlbCB0cmFzcG9ydG8uPC9wPlxcbiAgICAgICAgPHA+UGVyIHJpY2hpZWRlcmUgaW5mb3JtYXppb25pOjwvcD5cXG4gICAgICAgIDxwPkNlbGx1bGFyZTogKzM5IDMyNzI0MTUwMjg8YnI+XFxuICAgICAgICBFbWFpbDogaGFyYWxkLmJyZWd1QHN0YXJib29rLmNvPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcblxcblxcbjxkaXYgY2xhc3M9XFxcImRhcmstc2NyZWVuXFxcIiAqbmdJZj1cXFwiYWN0aXZlUG9wdXAgIT09ICcnXFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPjwvZGl2PlxcbjwhLS0gQ2hhbmdlIHBhc3N3b3JkIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiAqbmdJZj1cXFwiYWN0aXZlUG9wdXAgPT09ICdjaGFuZ2VQYXNzd29yZCdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+Q2FtYmlhIHBhc3N3b3JkPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwibG9naW4tZm9ybVxcXCIgI2NoYW5nZVBhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBjaGFuZ2VQYXNzd29yZEVycm9yLmN1cnJlbnRQYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImN1cnJlbnRQYXNzd29yZFxcXCI+TGEgdHVhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImN1cnJlbnRQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImN1cnJlbnRQYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5jdXJyZW50UGFzc3dvcmRcXFwiICNjdXJyZW50UGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGEgdHVhIHBhc3N3b3JkIGF0dHVhbGUgw6ggcmljaGllc3RhPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwibmV3UGFzc3dvcmRcXFwiPk51b3ZhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcIm5ld1Bhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwibmV3UGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJjaGFuZ2VQYXNzd29yZERhdGEubmV3UGFzc3dvcmRcXFwiICNuZXdQYXNzd29yZD1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGNoYW5nZVBhc3N3b3JkRXJyb3IucGFzc3dvcmRDb25maXJtfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRDb25maXJtXFxcIj5SaXBldGkgbGEgbnVvdmEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJjaGFuZ2VQYXNzd29yZERhdGEucGFzc3dvcmRDb25maXJtXFxcIiAjcGFzc3dvcmRDb25maXJtPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja1Bhc3N3b3JkKG5ld1Bhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkxlIHBhc3N3b3JkIG5vbiBjb3JyaXNwb25kb25vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFjaGFuZ2VQYXNzd29yZEZvcm0uZm9ybS52YWxpZFxcXCIgKGNsaWNrKT1cXFwiY2hhbmdlUGFzc3dvcmQoY3VycmVudFBhc3N3b3JkLnZhbHVlLCBuZXdQYXNzd29yZC52YWx1ZSwgcGFzc3dvcmRDb25maXJtLnZhbHVlKVxcXCI+Q2FtYmlhIHBhc3N3b3JkPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRhcmstc2NyZWVuXFxcIiBbQHNoYWRvd1N0YXRlXT1cXFwic2hhZG93U3RhdGVcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+PC9kaXY+XFxuPCEtLSBMb2dpbiBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bsb2dpblBvcHVwU3RhdGVdPVxcXCJsb2dpblBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+U2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhPC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+QWNjZWRpPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwibG9naW4tZm9ybVxcXCIgI2xvZ2luRm9ybT1cXFwibmdGb3JtXFxcIiAoa2V5dXAuZW50ZXIpPVxcXCJsb2dpbihlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBsb2dpbkVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPkluZGlyaXp6byBlbWFpbDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwibG9naW5EYXRhLmVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ2xvZ2luJywgZW1haWwudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tFbWFpbCgnbG9naW4nLCBlbWFpbC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5kaXJpenpvIGVtYWlsIG5vbiB2YWxpZG88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGxvZ2luRXJyb3IucGFzc3dvcmR9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQgPGEgY2xhc3M9XFxcInJlY292ZXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgncmVjb3ZlcnknKVxcXCI+UGFzc3dvcmQgZGltZW50aWNhdGE/PC9hPjwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwibG9naW5EYXRhLnBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ2xvZ2luJywgcGFzc3dvcmQudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tOb25FbXB0eSgnbG9naW4nLCBwYXNzd29yZC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIGxhIHR1YSBwYXNzd29yZDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIGhyZWY9XFxcIiNcXFwiIChjbGljayk9XFxcImxvZ2luKGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSlcXFwiPkFjY2VkaTwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgIDxzcGFuPlNlaSBudW92byBzdSBTdGFyYm9vaz88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdyZWdpc3RyYXRpb24nKVxcXCI+TnVvdm8gYWNjb3VudDwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWdpc3RyYXRpb24gcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZV09XFxcInJlZ2lzdHJhdGlvblBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPk51b3ZvIGFjY291bnQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWdpc3RyYXRpb24tZm9ybVxcXCIgI3JlZ2lzdHJhdGlvbkZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IubmFtZX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ05hbWVcXFwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEubmFtZVxcXCIgI3JlZ05hbWU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvbk5hbWUnLCByZWdOYW1lLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgaWwgbm9tZSBjb21wbGV0bzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGhvbmV9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQaG9uZVxcXCI+Q2VsbHVsYXJlPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGhvbmVcXFwiICNyZWdQaG9uZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uUGhvbmUnLCByZWdQaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIG51bWVybyBjZWxsdWxhcmU8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnRW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ0VtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLmVtYWlsXFxcIiAjcmVnRW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlZ2lzdHJhdGlvbicsIHJlZ0VtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZFxcXCIgI3JlZ1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25QYXNzd29yZCcsIHJlZ1Bhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgdW5hIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkQ29uZmlybVxcXCI+RGkgbnVvdm8gbGEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNyZWdQYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQocmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0cmF0aW9uKHJlZ05hbWUudmFsdWUsIHJlZ1Bob25lLnZhbHVlLCByZWdFbWFpbC52YWx1ZSwgcmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPkNyZWEgYWNjb3VudDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbm90aWNlXFxcIj5BY2NlZGVuZG8gZGljaGlhcmkgZGkgYXZlciBsZXR0byBlIGFjY2V0dGkgbGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2NvbmRpdGlvbnNcXFwiPmNvbmRpemlvbmkgZ2VuZXJhbGk8L2E+IGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPmzigJlpbmZvcm1hdGl2YSBzdWxsYSBwcml2YWN5PC9hPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXJcXFwiPkhhaSBnaWEgdW4gYWNjb3VudCBzdSBTdGFyYm9vaz8gPGEgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2xvZ2luJylcXFwiPkFjY2VkaTwvYT48L2Rpdj5cXG48L2Rpdj5cXG5cXG48IS0tIFJlY292ZXJ5IHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQHJlY292ZXJ5UG9wdXBTdGF0ZV09XFxcInJlY292ZXJ5UG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5SZWN1cGVyYSBwYXNzd29yZDwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcInJlY292ZXJ5LWZvcm1cXFwiICNyZWNvdmVyeUZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVjb3ZlcnlFcnJvci5lbWFpbH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlY292ZXJ5RW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlY292ZXJ5RW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWNvdmVyeURhdGEuZW1haWxcXFwiICNyZWNvdmVyeUVtYWlsPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0VtYWlsKCdyZWNvdmVyeScsIHJlY292ZXJ5RW1haWwudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluZGlyaXp6byBlbWFpbCBub24gdmFsaWRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInJlY292ZXJ5KHJlY292ZXJ5RW1haWwudmFsdWUpXFxcIj5JbnZpYSBlbWFpbDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luLW9mZmVyXFxcIj5IYWkgZ2lhIHVuIGFjY291bnQgc3UgU3RhcmJvb2s/IDxhIChjbGljayk9XFxcImdldFBvcHVwKCdsb2dpbicpXFxcIj5BY2NlZGk8L2E+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBDb25maXJtIE9yZGVyIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGNvbmZpcm1Qb3B1cFN0YXRlXT1cXFwiY29uZmlybVBvcHVwU3RhdGVcXFwiIFtuZ0NsYXNzXT1cXFwieyduZXctdmVyc2lvbic6IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hJyB8fCBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCcgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwicG9wdXAtc3Bpbm5lclxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hJ1xcXCI+XFxuICAgIDxzdmcgd2lkdGg9JzQwcHgnIGhlaWdodD0nNDBweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICA8L2NpcmNsZT5cXG4gICAgPC9zdmc+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInN1Y2Nlc3MtaWNvblxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJyB8fCBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCdcXFwiPjxzcGFuPjwvc3Bhbj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCIgW25nQ2xhc3NdPVxcXCJ7J3dpdGhvdXQtbWVzc2FnZSc6IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ31cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnRpdGxlICE9PSAnJ1xcXCI+e3sgY29uZmlybVBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImNvbmZpcm0tb3JkZXItZm9ybVxcXCIgI2NvbmZpcm1PcmRlckZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxwICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgIT09ICduZXdPcmRlcicgJiYgY29uZmlybVBvcHVwRGF0YS50eXBlICE9PSAnbmV3T3JkZXJFbmQnXFxcIiBbbmdDbGFzc109XFxcInsnY29uZmVybWEtZmluaXNoJzogY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnfVxcXCI+e3sgY29uZmlybVBvcHVwRGF0YS50ZXh0IH19PC9wPlxcbiAgICA8cCAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXJFbmQnXFxcIiBjbGFzcz1cXFwiY29uZmlybS1lbmRcXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwib3JkZXJzLWxpc3RcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICduZXdPcmRlcidcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2YgY29uZmlybVBvcHVwRGF0YS5kYXRhXFxcIj5cXG4gICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0nc2VydmljZSdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1cXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdzZXJ2aWNlJ1xcXCIgY2xhc3M9XFxcInNlcnZpY2UtaXRlbVxcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPlxcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdpdGVtJ1xcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSB7eyBwcm9kdWN0Lml0ZW1OYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0naXRlbSdcXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX08aT57eyBwcm9kdWN0Lml0ZW1OYW1lIH19IHt7IHByb2R1Y3Quc3ltYm9sIH19PC9pPjwvc3Bhbj5cXG4gICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0naXRlbSdcXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX08aT57eyBwcm9kdWN0Lml0ZW1OYW1lIH19e3sgcHJvZHVjdC5zeW1ib2wgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3RvdGFsJ1xcXCIgY2xhc3M9XFxcInRvdGFsLWl0ZW1cXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0gPGk+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1saXN0XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXInXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIj48c3Bhbj5EYXRhOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi5kYXRlIH19PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+T3JlOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi50aW1lIH19PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+SW5kaXJpenpvOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi5hZGRyZXNzIH19PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGVzY3JpcHRpb24gIT09ICcnXFxcIj48c3Bhbj5Ob3RhOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi5kZXNjcmlwdGlvbiB9fTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNvbmZpcm1PcmRlcihjb25maXJtUG9wdXBEYXRhLmlkKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnQ29uZmVybWEnXFxcIj5Db25mZXJtYTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjYW5jZWxPcmRlcihjb25maXJtUG9wdXBEYXRhLmlkKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnQW5udWxsYSBvcmRpbmUnXFxcIj5Bbm51bGxhIG9yZGluZTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWFjdGl2YXRlT3JkZXIoY29uZmlybVBvcHVwRGF0YS5pZClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1JpYXR0aXZhIG9yZGluZSdcXFwiPlJpYXR0aXZhIG9yZGluZTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBuZXctb3JkZXItYnRuXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNvbmZpcm1OZXdPcmRlcigpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdQcm9jZWRpIGNvbiBs4oCZYWNxdWlzdG8nXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbG9ja1xcXCI+PC9pPiBQcm9jZWRpIGNvbiBs4oCZYWNxdWlzdG88L2J1dHRvbj5cXG4gICAgICA8c3BhbiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdQcm9jZWRpIGNvbiBs4oCZYWNxdWlzdG8nXFxcIiBjbGFzcz1cXFwiY29uZmlybS1idXR0b24tbm90aWNlXFxcIj5WZXJyYWkgbm90aWZpY2F0byBjb24gdW4gc21zIGUgbWFpbCBhZCBhY3F1aXN0byBlZmZldHR1YXRvPC9zcGFuPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBsb2dvdXQtYnRuXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdsb2dvdXQnXFxcIj5Fc2NpPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdsb2dvdXQnXFxcIj5Bbm51bGxhPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gIT09ICdsb2dvdXQnXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBDb25maXJtIE9yZGVyIEZpbmlzaCBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtRmluaXNoUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZpbmlzaC1tZXNzYWdlXFxcIiBbbmdDbGFzc109XFxcIntpc0xlZnQ6IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ2xlZnQnfVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgICA8cD57eyBjb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBGaW5pc2ggcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAZmluaXNoUG9wdXBTdGF0ZV09XFxcImZpbmlzaFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmluaXNoLW1lc3NhZ2VcXFwiPlxcbiAgICA8YSAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIGNsYXNzPVxcXCJjbG9zZS1wb3B1cFxcXCI+PC9hPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IGZpbmlzaFBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgICA8cCAqbmdGb3I9XFxcImxldCB0ZXh0IG9mIGZpbmlzaFBvcHVwRGF0YS50ZXh0XFxcIj57eyB0ZXh0IH19PC9wPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuPCEtLSBBZGQgQ2FyZCBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0BhZGRDYXJkUG9wdXBTdGF0ZV09XFxcImFkZENhcmRQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+TWV0b2RvIGRpIHBhZ2FtZW50bzwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImFkZC1jYXJkLWZvcm1cXFwiICNhZGRDYXJkRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZHMtbG9nb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIHZpc2FcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSBtYXN0ZXJjYXJkXFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gYW1leFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5udW1iZXJ9XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdhZGQnXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkTnVtYmVyXFxcIj5OdW1lcm8gY2FydGE8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZE51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZE51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm51bWJlclxcXCIgI2FkZENhcmROdW1iZXI9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrQ2FyZE51bWJlcihhZGRDYXJkTnVtYmVyLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrQ2FyZE51bWJlcihhZGRDYXJkTnVtYmVyLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5QbGVhc2UgZW50ZXIgY2FyZCBudW1iZXI8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiZWRpdENhcmROdW1iZXJcXFwiPk51bWVybyBjYXJ0YTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJlZGl0Q2FyZE51bWJlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZE51bWJlclxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm51bWJlclxcXCIgZGlzYWJsZWQ+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5QbGVhc2UgZW50ZXIgY2FyZCBudW1iZXI8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0XFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5leHBfZGF0ZX1cXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkRXhwRGF0ZVxcXCI+U2NhZGVuemE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRFeHBEYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRFeHBEYXRlXFxcIiBwbGFjZWhvbGRlcj1cXFwiTU0vQUFcXFwiIG1heGxlbmd0aD1cXFwiNVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmV4cF9kYXRlXFxcIiAjYWRkQ2FyZEV4cERhdGU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRXhwaXJ5KGFkZENhcmRFeHBEYXRlLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrRXhwaXJ5KGFkZENhcmRFeHBEYXRlLnZhbHVlKVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkV4cGlyYXRpb24gZGF0ZSBpc24ndCBjb3JyZWN0PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgbGFzdFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBhZGRDYXJkRXJyb3IuY3ZjfVxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnYWRkJ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDVlZcXFwiPkNWVjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENWVlxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ1ZWXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuY3ZjXFxcIiAjYWRkQ2FyZENWVj1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgnYWRkQ2FyZEN2dicsIGFkZENhcmRDVlYudmFsdWUpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1xdWVzdGlvbi1jaXJjbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwicmlnaHRcXFwiIHRpdGxlPVxcXCJUb29sdGlwIG9uIHJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkNWViBpc24ndCBjb3JyZWN0PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgbGFzdFxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnZWRpdCdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZWRpdENWVlxcXCI+Q1ZWPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiZWRpdENWVlxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ1ZWXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuY3ZjXFxcIiBkaXNhYmxlZD5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1xdWVzdGlvbi1jaXJjbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwicmlnaHRcXFwiIHRpdGxlPVxcXCJUb29sdGlwIG9uIHJpZ2h0XFxcIj48L3NwYW4+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkNWViBpc24ndCBjb3JyZWN0PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3ViaGVhZGVyXFxcIj5cXG4gICAgICBJbmZvcm1hemlvbmkgZmFjb2x0YXRpdmkgKGNvbGxhcHNlKVxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5hbWVcXFwiPk5vbWUgaW50ZXN0YXRhcmlvPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbWUgQ29nbm9tZVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm5hbWVcXFwiICNhZGRDYXJkTmFtZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkVmlhXFxcIj5WaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkVmlhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkVmlhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMVxcXCIgI2FkZENhcmRBZGRyZXNzMT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROclxcXCI+TnI8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROclxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfbGluZTJcXFwiICNhZGRDYXJkQWRkcmVzczI9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdC1iaWdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENpdHRhXFxcIj5DaXR0w6A8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkQ2l0dGFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDaXR0YVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfY2l0eVxcXCIgI2FkZENhcmRBZGRyZXNzQ2l0eT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRDYXBcXFwiPkNBUDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDYXBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDYXBcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX3ppcFxcXCIgI2FkZENhcmRBZGRyZXNzWmlwPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCI+UHJvdmluY2lhPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGVcXFwiICNhZGRDYXJkQWRkcmVzc1N0YXRlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFBlYXNlXFxcIj5QYWVzZTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRQZWFzZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDb3VudHJ5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPkFnZ2l1bmdpIG1ldG9kbzwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZCgpXFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcblxcbjwhLS0gQ29uZmlybSBwb3B1cCB3aXRoIGFjdGlvbiAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtQWN0aW9uUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnYWRkLXByaWNlJzogY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2UnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImNvbmZpcm0tYWN0aW9uXFxcIiAjY29uZmlybUFjdGlvbk9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHA+XFxuICAgICAge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0IH19XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgIT09ICcnXFxcIj48YnI+IHt7IGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgfX08L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2FkZCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2VcXFwiICNjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2VkaXQnXFxcIj5cXG4gICAgICAgIDxsYWJlbD57eyBhY3Rpb24ubGFiZWwgfX08L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEVkaXRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXltZW50LWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2luZm9ybWF0aW9uJ1xcXCI+XFxuICAgICAgICB7eyBhY3Rpb24uaW5mb3JtYXRpb24gfX1cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgYnV0dG9uIG9mIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2FkZFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiYWRkUHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnZWRpdFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiZWRpdFByaWNlKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2NvbnRpbnVlT3JkZXInXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJjb250aW51ZU9yZGVyKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IHt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2Nsb3NlJ1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIj5cXG4gIDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCI2MFxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgIDwvY2lyY2xlPlxcbiAgPC9zdmc+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1jbGljay1vdXRzaWRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWNsaWNrLW91dHNpZGVcIlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==