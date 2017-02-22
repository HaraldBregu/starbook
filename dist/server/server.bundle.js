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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
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
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 5 */
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
    OrderService.prototype.getEstimatePrice = function (data) {
        return this.http.post(this.api + 'calculate_estimate_price', data, this._makeHeaders())
            .toPromise()
            .then(function (response) {
            var price = response.json();
            return price;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__(3);
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
        var remote = 'https://api.starbook.co/v0.9.1/';
        var local = 'http://localhost/v0.9.1/';
        this.api = remote;
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
    AuthService.prototype._makeHeadersFacebook = function (access_token) {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'access_token': access_token });
    };
    AuthService.prototype._makeHeaders = function () {
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
    AuthService.prototype.facebookLogin = function (access_token) {
        var _this = this;
        return this.http.post(this.api + 'facebook_login', {}, { headers: this._makeHeadersFacebook(access_token) })
            .toPromise()
            .then(function (response) {
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
    AuthService.prototype.addPhone = function (phone) {
        return this.http.put(this.api + 'me', { phone_number: phone }, { headers: this._makeHeaders() })
            .toPromise()
            .then(function (result) {
            var data = result.json();
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"] && data.success === true) {
                var userData = JSON.parse(localStorage.getItem('auth'));
                userData.phone_number = phone;
                localStorage.setItem('auth', JSON.stringify(userData));
                return userData;
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.status || error);
    };
    //**********************************************
    //***************** A/B TESTS ******************
    //**********************************************
    AuthService.prototype.registerCompany = function (name, phone, profession) {
        var _this = this;
        return this.http.post(this.api + 'register_company', { name: name, phone_number: phone, profession: profession })
            .toPromise()
            .then(function (response) {
            var data = response.json();
            if (data.success === true) {
                return data.result;
            }
            else {
                _this.handleError(data.message);
            }
        })
            .catch(this.handleError);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(5);
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
            template: __webpack_require__(43)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FacebookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FacebookComponent = (function () {
    function FacebookComponent(router, popupsService, authService) {
        this.router = router;
        this.popupsService = popupsService;
        this.authService = authService;
    }
    FacebookComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.router.events.subscribe(function (s) {
                var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["URLSearchParams"](s.url.split('#')[1]);
                var access_token = params.get('access_token');
                if (access_token) {
                    localStorage.setItem('facebook_token', access_token);
                    window.close();
                }
                else {
                    localStorage.setItem('facebook_token', 'error');
                    window.close();
                }
            });
        }
    };
    FacebookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-facebook',
            template: __webpack_require__(45)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FacebookComponent);
    return FacebookComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/facebook.component.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(5);
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
            template: __webpack_require__(47)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(5);
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
            // {name: 'Metodo di Pagamento', selected: false, url: 'payment'},
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
            /*if (params['page'] ==='payment') {
              this.navigationService.updateMessage('Metodo di pagamento');
              this.isLoading = true;
              let timeStart = Date.now();
              this.paymentService.getCards()
                  .then((cards) => {
                    if (isBrowser) {
                      this.analyticsService.sendTiming({category: 'Get list of cards', timingVar: 'load', timingValue: Date.now()-timeStart});
                    }
                    this.defaultCard = cards.default_source;
                    this.cards = [];
                    cards.sources.data.forEach((cardData) => {
                      this.cards.push(cardData);
                    });
                    this.isLoading = false;
                  })
                  .catch((error) => {
                    this.isLoading = false;
                    if (error.status === 404) {
                      // This Starbook account do not have a Stripe account
                      // When you add a new card, will be created a Stripe account
                      // and update the Starbook account
                    }
                    // if (error.json().message) {
                    //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: error.json().message}});
                    // } else {
                    //   this.popupsService.activate({type: 'error', data: {title:'Errore', message: 'An error has occurred'}});
                    // }
                  })
            }*/
            if (params['page'] === 'settings') {
                _this.navigationService.updateMessage('Informazioni del mio account');
                _this.isLoading = true;
                var timeStart_1 = Date.now();
                _this.profileService.getProfile()
                    .then(function (profile) {
                    if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                        _this.analyticsService.sendTiming({ category: 'Get user profile', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
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
            template: __webpack_require__(48)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_node__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_node_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_routes__ = __webpack_require__(41);













// App
var app = __WEBPACK_IMPORTED_MODULE_4_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_3_path__["join"](__WEBPACK_IMPORTED_MODULE_3_path__["resolve"](__dirname, '..'));
// const port = process.env.PORT || 80 || 8080;
var port = 4200;
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
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(21);
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
var __universal__ = __webpack_require__(23);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal_node__);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(21);


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
    var __universal__ = __webpack_require__(23);
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(2);
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
            template: __webpack_require__(42)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */]) === 'function' && _f) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },
/* 29 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_profile_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_analytics_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_seo_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__order_order_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_orders_orders_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__popups_popups_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_phone_pipe__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_landing_landing_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_expiry_pipe__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_loading_loading_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_facebook_facebook_component__ = __webpack_require__(17);
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
    __WEBPACK_IMPORTED_MODULE_25__shared_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pages_facebook_facebook_component__["a" /* FacebookComponent */]
];
if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(76).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(75).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(32).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(31).AutoCompleteMockComponent;
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_facebook_facebook_component__ = __webpack_require__(17);
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
    },
    {
        path: 'facebook',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_facebook_facebook_component__["a" /* FacebookComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(5);
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
        // public isEnable = true;
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
        this.finalPrice = 0;
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
        // this.isEnable = true;
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
        }
        else {
            this.isAddressFull = false;
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
                var date_1 = new Date(this.Order.date);
                var day_1 = date_1.getDate() > 9 ? date_1.getDate() : '0' + date_1.getDate();
                var correctMonth = 1 + date_1.getMonth();
                var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
                var queryPriceData = {
                    service_id: this.orderData.service_id,
                    country_code: this.Order.country_code,
                    postal_code: this.Order.postal_code,
                    start_date: date_1.getFullYear() + '-' + month + '-' + day_1 + 'T' + '08:00' + ':00.000Z',
                    amount: this.orderData.totalPrice.toString()
                };
                this.popupsService.activate({ type: 'confirmNewOrder', data: { orderData: this.orderData, information: orderInformation, queryPrice: queryPriceData } });
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
            // this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + this.Order.time + ':00.000Z';
            this.Order.delivery_date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
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
            this.Order.payment.amount = this.finalPrice;
            this.orderService.saveOrder(this.Order)
                .then(function (status) {
                _this.analyticsService.sendEvent({ category: 'Order creation form', action: 'send form', label: 'finish' });
                _this.analyticsService.sendTiming({ category: 'Saving order', timingVar: 'save', timingValue: Date.now() - timeStart_1 });
                _this.finalPrice = 0;
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
                    _this.finalPrice = action.data.price;
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
            template: __webpack_require__(44)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.component.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(10);
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
    function LandingComponent(authServics, homeService, router, route, navigationService, analyticsService, popupsService) {
        this.authServics = authServics;
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.popupsService = popupsService;
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
        // TO USE FOR A/B TESTING
        this.route.queryParams.subscribe(function (params) {
            _this.testPage = params['action'];
            // console.log('Parameters: ' + JSON.stringify(params));
            // console.log(this.testPage);
        });
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
    LandingComponent.prototype.callToActionLoginWithFacebook = function () {
        this.analyticsService.sendEvent({ category: 'Login', action: 'login with facebook', label: 'A/B Test Campain' });
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var facebookPopup = window.open(
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
            'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook', '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            this.checkAccessToken(facebookPopup, 1);
        }
    };
    LandingComponent.prototype.callToActionRegisterCompany = function () {
        // console.log('register company');
        this.popupsService.activate({ type: 'registerCompany' });
        this.analyticsService.sendEvent({ category: 'Landing page A/B tests', action: 'CTA', label: 'register company' });
    };
    LandingComponent.prototype.callToActionShareToEarn = function () {
        // console.log('share to earn');
        this.analyticsService.sendEvent({ category: 'Landing page A/B tests', action: 'CTA', label: 'share to earn' });
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var sharelink = 'https://www.facebook.com/sharer/sharer.php';
            var urlToShare = 'https://www.starbook.co';
            var name = "Starbook | Prenota servizi professionali";
            var caption = 'Starbook';
            var description = 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.';
            var facebookPopup = window.open(sharelink + "?u=" + encodeURI(urlToShare) + "&caption=" + encodeURI(caption) + "&description=" + encodeURI(description), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
        }
        // FB.ui({
        //   method: 'feed',
        //   mobile_iframe: true,
        //   name: "Starbook | Prenota servizi professionali",
        //   link: "https://www.starbook.co",
        //   caption: 'Starbook',
        //   description: 'Preventivi diretti? Starbook è la piattaforma dei lavorazioni professionali. Puoi creare preventivi istantanei senza il bisogno di contattare il professionista.'
        // }, function(response) {
        //   console.log(JSON.stringify(response));
        //   if (response && response.post_id) {
        //     console.log('Post was published.');
        //   } else {
        //     console.log('Post was not published.');
        //   }
        // });
    };
    LandingComponent.prototype.checkAccessToken = function (facebookWindow, context) {
        if (facebookWindow.closed) {
            var accessToken = localStorage.getItem('facebook_token');
            // let auth = localStorage.getItem('auth');
            this.authServics.facebookLogin(accessToken)
                .then(function (userData) {
                if (!userData.phone_number) {
                }
                else if (!userData.email) {
                }
                else {
                }
            })
                .catch(function (error) {
                // this.popupsService.formError = {
                //   title: 'Errore!',
                //   message: 'Authorization error'
                // };
            });
        }
        else {
            var self_1 = this;
            setTimeout(function () { self_1.checkAccessToken(facebookWindow, context + 1); }, 200);
        }
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(46),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _g) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/landing.component.js.map

/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__ = __webpack_require__(5);
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
    function PopupsComponent(authServics, navigationService, popupService, ordersService, orderService, paymentService, router, analyticsService) {
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupService = popupService;
        this.ordersService = ordersService;
        this.orderService = orderService;
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
        // A/B Tests
        this.registerCompanyPopupState = 'inactive';
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
            type: '',
            totalPrice: null
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
            text: [],
            type: '',
            data: {},
            from: ''
        };
        this.enterPhoneForm = {
            phone: ''
        };
        this.enterPhoneFormError = {
            phone: false
        };
        // A/B TESTS
        this.registerNewCompany = {
            name: '',
            phone: '',
            profession: ''
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
        // A/B TESTS
        if (type === 'registerCompany') {
            this.registerCompanyPopupState = 'active';
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
        // A/B TESTS
        if (this.registerCompanyPopupState === 'active') {
            this.registerCompanyPopupState = 'inactive';
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
    PopupsComponent.prototype.facebookLogin = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var facebookPopup = window.open(
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook',
            'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook', '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            this.checkAccessToken(facebookPopup, 1);
        }
    };
    PopupsComponent.prototype.checkAccessToken = function (facebookWindow, context) {
        var _this = this;
        if (facebookWindow.closed) {
            var accessToken = localStorage.getItem('facebook_token');
            this.authServics.facebookLogin(accessToken)
                .then(function (userData) {
                if (!userData.phone_number) {
                    _this.closePopup(true);
                    _this.finishPopupState = 'active';
                    _this.finishPopupData.title = 'Completa il profilo';
                    _this.finishPopupData.text.push('Per restare in contatto con i professionisti inserisci il suo numero di telefono.');
                    _this.finishPopupData.type = 'phone';
                    _this.finishPopupData.data = { userData: userData };
                    if (_this.loginData.type === 'fromOrder') {
                        _this.finishPopupData.from = 'order';
                    }
                }
                else if (!userData.email) {
                    _this.closePopup(true);
                }
                else {
                    _this.closePopup(false);
                }
            })
                .catch(function (error) {
                _this.formError = {
                    title: 'Errore!',
                    message: 'Authorization error'
                };
            });
        }
        else {
            var self_1 = this;
            setTimeout(function () { self_1.checkAccessToken(facebookWindow, context + 1); }, 200);
        }
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
        if (type === 'enterPhoneForm') {
            if (value.length > 10) {
                this.enterPhoneFormError.phone = false;
            }
            else {
                this.enterPhoneFormError.phone = true;
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
                // this.router.navigate(['/profile/payment']);
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
        this.popupService.actionComplete({ type: 'confirm', data: { price: this.confirmPopupData.totalPrice } });
        this.closePopup();
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
    PopupsComponent.prototype.setPhoneNumber = function () {
        var _this = this;
        this.enterPhoneFormError.phone = false;
        if (this.enterPhoneForm.phone.length > 10) {
            this.authServics.addPhone(this.enterPhoneForm.phone)
                .then(function (userData) {
                if (userData) {
                    _this.finishPopupData.text = [];
                    _this.closePopup(true);
                    if (_this.finishPopupData.from === 'order') {
                        _this.popupService.activate({ type: 'confirmNewOrder', data: _this.loginData.orderData });
                    }
                    else {
                        _this.finishPopupState = 'active';
                        _this.finishPopupData.title = 'Complimenti!';
                        _this.finishPopupData.text.push('Hai registrato con successo il suo account Starbook.');
                        _this.finishPopupData.type = 'finishFacebookRegistration';
                        _this.finishPopupData.data = { userData: userData };
                    }
                }
            })
                .catch(function (error) {
                _this.closePopup();
                console.log(error);
            });
        }
        else {
            this.enterPhoneFormError.phone = true;
        }
    };
    //**********************************************
    //***************** A/B TESTS ******************
    //**********************************************
    PopupsComponent.prototype.registerCompany = function (name, phone, profession) {
        var _this = this;
        if (name.length > 0 && phone.length > 0) {
            console.log('register the company: ' + name + phone + profession);
            this.isPopupLoading = true;
            this.authServics.registerCompany(name, phone, profession)
                .then(function (data) {
                _this.isPopupLoading = false;
                console.log('register company data: ' + JSON.stringify(data));
                // this.closePopup();
                _this.confirmFinishPopupData.title = "Richiesta d'iscrizione inviata";
                _this.confirmFinishPopupData.text = 'Questo ordine è stato annullato, puoi riattivarlo in un secondo momento.';
                _this.getPopup('confirmFinish');
            })
                .catch(function (error) {
                _this.isPopupLoading = false;
                console.log('error register: ' + error);
                _this.closePopup();
            });
        }
    };
    PopupsComponent.prototype.recommendToFriend = function () {
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
                        _this.confirmPopupData.title = 'Dettagli del servizio';
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
                        _this.isPopupLoading = true;
                        _this.orderService.getEstimatePrice(popup.data.queryPrice)
                            .then(function (price) {
                            _this.isPopupLoading = false;
                            _this.confirmPopupData.totalPrice = price.result.total + price.result.fee;
                        })
                            .catch(function (error) {
                            _this.isPopupLoading = false;
                            _this.closePopup(true);
                            _this.getErrorPopup('Errore', error.message);
                        });
                        // this.confirmPopupData.data.push({productName: 'Totale', itemName: '', price: popup.data.orderData.totalPrice, type: 'total'});
                        _this.confirmPopupData.information = popup.data.information;
                        _this.confirmPopupData.button = 'Prenota servizio';
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
                    // A/B TESTS
                    case 'registerCompany':
                        _this.registerCompanyPopupState = 'active';
                        _this.activePopup = 'registerCompany';
                        _this.shadowState = 'active';
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
            type: '',
            totalPrice: null
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
        this.finishPopupData = {
            title: '',
            text: [],
            type: '',
            data: {},
            from: ''
        };
        this.enterPhoneForm = {
            phone: ''
        };
        this.enterPhoneFormError = {
            phone: false
        };
    };
    PopupsComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
            this.authSubscription.unsubscribe();
        }
    };
    PopupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-popups',
            template: __webpack_require__(49),
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('addCardPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('loginPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('registrationPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('recoveryPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('finishPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmFinishPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('confirmActionPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                // A/B Tests
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('registerCompanyPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '50px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '50px', offset: 0 }),
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _h) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },
/* 38 */
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
            template: __webpack_require__(50)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },
/* 41 */
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
    'profile/:page',
    'facebook'
];
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/server.routes.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" routerLink=\"\" (click)=\"updateTabMenu()\">Starbook</a>\n    <a class=\"navbar-brand mobile\" routerLink=\"\" (click)=\"updateTabMenu()\">S</a>\n    <div class=\"search-block\" *ngIf=\"isFindField\">\n      <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"170px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='13px' height='13px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n        <div class=\"no-result\">Nessun risultato</div>\n      </div>\n    </div>\n    <div class=\"tagline\" *ngIf=\"!isFindField\">{{tagline}}</div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-label=\"Menu\" (click)=\"toggleMenu()\"></button>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth !== false\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/settings\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">{{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n    <!-- <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n    </ul> -->\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-dark navbar-tabs\">\n  <div class=\"container-starbook home-tab-bar\"\n       (swipeleft)=\"swipe($event.type, $event.deltaX)\"\n       (swiperight)=\"swipe($event.type, $event.deltaX)\">\n    <ul class=\"nav nav-pills\"\n        [ngStyle]=\"{'margin-left.px': delta}\">\n      <li class=\"nav-item\" *ngFor=\"let navServices of servicesCategoryList\">\n        <a class=\"nav-link\" [ngClass]=\"{'active':navServices._id===activeServiceCategory && activeServiceCategoryType !== false}\" (click)=\"tabNavigate(navServices._id)\"><i class=\"f{{navServices.icon_name}}\"></i> {{navServices.title}}</a>\n      </li>\n    </ul>\n  </div>\n</nav>-->\n\n<div class=\"container-starbook home-page\" *ngIf=\"isServicesView === true\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\" [ngClass]=\"{'services-block-big': serviceCategory.type === 'content'}\">\n            <span *ngIf=\"serviceCategory.type === 'content'\">\n              <img [src]=\"serviceCategory.image\" (load)=\"makeMasonry()\">\n              <div class=\"description\">{{ serviceCategory.description }}</div>\n            </span>\n            <span *ngIf=\"serviceCategory.type !== 'content'\">\n              <div class=\"header\">{{serviceCategory.title_1}}</div>\n              <div class=\"service content noselect\">\n                <span *ngFor=\"let item of serviceCategory.options\">\n                  <div class=\"item\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                    <i *ngIf=\"item.selected===true\" class=\"fa fa-check-square\"></i>\n                    <i *ngIf=\"item.selected===false\" class=\"fa fa-square-o\"></i>\n                    {{item.title_1}}\n                  </div>\n                  <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                    <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                    <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                  </div>\n                </span>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      <app-order [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\"></app-order>\n    </div>\n  </div>\n\n  <!-- <div class=\"footer-container\">\n    <div class=\"copyright\">Starbook © 2016 Tutti i diritti riservati</div>\n    <span> • </span><a routerLink=\"../../profile/privacy\">Privacy</a>\n    <span> • </span><a routerLink=\"../../profile/conditions\">Condizioni</a>\n    <span> • </span><a routerLink=\"../../profile/help\">Assistenza</a>\n  </div> -->\n</div>\n<app-landing *ngIf=\"isServicesView === false\"></app-landing>\n<app-loading *ngIf=\"isLoading\" class=\"services-loader\"></app-loading>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <div class=\"sidebar-block\">\n      <h2>{{orderData.service}}</h2>\n\n      <!-- <div class=\"order-container\" *ngIf=\"!orderIsFull\">\n        <div class=\"order-list-empty\"><strong>Inserisci</strong> le informazioni necessari del appuntamento e invia la richiesta.</div>\n      </div> -->\n      <!-- <div class=\"order-container\" *ngIf=\"orderData.order_options.min_amount > orderData.totalPrice\">\n        <div class=\"order-list-empty\"><strong></strong>Prezzo minimo del'ordine €{{ orderData.order_options.min_amount / 100 }}</div>\n      </div> -->\n      <!-- <div class=\"order-container selected-orders\" [ngStyle]=\"{'max-height': maxOrderBlockSize}\">\n        <div class=\"category-group category\">\n          <span>{{ orderData.service }}</span>\n        </div>\n        <span  *ngFor=\"let orderService of orderData.services\">\n          <div class=\"category-group\">\n            <span *ngIf=\"orderService.price_type === 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}} {{orderService.option.symbol}}</i></span>\n            <span *ngIf=\"orderService.price_type !== 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}}</i></span>\n          </div>\n        </span>\n      </div> -->\n      <!-- <div class=\"category-group total\">\n        <span>Totale <i>€{{ orderData.totalPrice / 100 }}</i></span>\n      </div> -->\n\n      <div class=\"add-order-form\">\n        <label>Quando vuoi svolgere questo lavoro?</label>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOraMobile\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" readonlyInput=\"readonlyInput\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"!isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOra\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"browser\">\n          <div class=\"input-group date\" (clickOutside)=\"closeTimepicker()\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOra\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">\n              <span class=\"fa fa-clock-o\"></span>\n              {{time}}\n            </div>\n          </div>\n        </div> -->\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"!browser\">\n          is not support if client != browser (clickOutside)=\"closeTimepicker()\"\n          <div class=\"input-group date\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOraServer\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">{{time}}</div>\n          </div>\n        </div> -->\n        <label>Inserisci l’indirizzo</label>\n        <div class=\"form-group\" [ngClass]=\"{isError: !isAddressFull && submitOrder && isAddressDirty}\">\n          <div class=\"input-group date\">\n            <!-- <span class=\"fa fa-map-marker\"></span> -->\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Indirizzo\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"modifyAddress()\" (change)=\"modifyAddress()\">-->\n            <p-autoComplete id=\"luogo\" class=\"form-control text-small\" placeholder=\"Via Giuseppe Verdi 10 Milano\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"Order.delivery_address\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"formattedAddress\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\">\n            </p-autoComplete>\n          </div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address === ''\">Inserisci l'indirizzo esatto</div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address !== '' && isAddressOne\">Indirizzo non trovato</div>\n          <!--<div class=\"error-block\" *ngIf=\"!isAddressOne && isAddressDirty && address !== ''\">Indirizzo non è specifico</div>-->\n        </div>\n        <label>Nota</label>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"nota\" name=\"applicant_description\" [(ngModel)]=\"Order.delivery_description\" placeholder=\"Lascia una nota...\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"showConfirmation()\">Anteprima del progetto</button>\n        </div>\n        <div class=\"footer-links\">\n          <p>\n            Starbook © 2017 •\n            <a routerLink=\"../../profile/privacy\">Privacy</a> •\n            <a routerLink=\"../../profile/conditions\">Condizioni</a> •\n            <a routerLink=\"../../profile/help\">Assistenza</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- A/B TESTS -->\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='' || !testPage\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"callToActionLoginWithFacebook()\">Registrati con Facebook</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='registro_impresa'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"callToActionRegisterCompany()\">Registra la tua impresa</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='invita_un_amico_cell'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"callToActionShareToEarn()\">Consiglia ad un amico</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='invita_un_amico_email'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"callToActionShareToEarn()\">Invita un amico</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\">\n      <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.selected}\" (click)=\"renderPage(tab.name)\">\n        <span></span>\n        <div>{{tab.name}}</div>\n      </a>\n    </div>\n    <div class=\"col-xl-12 orders-container\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"orders-error\" *ngIf=\"pageData.length === 0 && requestIsComplete\">{{emptyListTitle}}</div>\n      <div class=\"order-information\" *ngFor=\"let order of pageData\">\n        <div class=\"header\">\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richiesti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Archivio'\">\n            <span class=\"black\"></span> Scaduto\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 98 && selectTab === 'Archivio'\">\n            <span class=\"orange\"></span> Completato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'Archivio'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-name\">\n            {{ categories[order.category_type] }}\n          </div>\n          <div class=\"order-date\">\n            {{ dateFormating(order.date) }}\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"row\">\n            <div class=\"order-row products col-xl-4\">\n              <!-- <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service' && product.amount > 0\">€{{ product.amount / 100 }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service'\">{{ product.description }}</i></div>\n              <!-- <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Richieste dei clienti'\">\n              <div *ngIf=\"order.status===0\">\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cliente:</div>\n                <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cellulare:</div>\n                <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Email:</div>\n                <div class=\"field-value\">{{ order.customer.email }}</div>\n              </div>\n\n              <!-- <div *ngIf=\"order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div> -->\n\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'I miei ordini'\">\n              <div *ngIf=\"!order.merchant || order.merchant === null || order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>In attesa di conferma...</strong></div>\n                </div>\n              </div>\n              <div *ngIf=\"order.merchant && order.merchant !== null && order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Archivio'\">\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id !== order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id === order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.customer && order.customer !== null && (!order.merchant || order.merchant === null) && order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.status===99\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"order-row description col-xl-4\">\n              {{ order.description }}\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <div class=\"code\">\n            <span>CODICE:</span>\n            {{ order._id }}\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"completaOrder(order._id)\">Completa servizio</button>\n            <div class=\"price-block\"><div class=\"content-price\">Preventivo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\" (click)=\"editOrder(order._id, order.payment.amount)\">Modifica</button>-->\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"confirmOrder(order._id)\">Conferma servizio</button>\n\n            <!--<button class=\"btn btn-primary\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\" (click)=\"reactivateOrder(order._id)\">Reattiva servizio</button>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\" (click)=\"cancelOrder(order._id)\">Annulla servizio</button>-->\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-warning\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\" (click)=\"continueOrder(order._id, order.payment.amount)\"><i class=\"fa fa-lock\"></i> Procedi</button>-->\n            <!--<div class=\"price-block archive\" *ngIf=\"order.status === 3 && selectTab === 'Archivio'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = "<!-- <div class=\"loader\" *ngIf=\"isLoading\"></div> -->\n<div class=\"profile-page\" [ngClass]=\"{whiteBg: selectTab === 'conditions' || selectTab === 'privacy' || selectTab === 'help'}\">\n  <div class=\"container-starbook without-tabs\">\n    <div class=\"row\">\n      <div class=\"left-navigate\" (swipeleft)=\"swipe($event.type, $event.deltaX)\" (swiperight)=\"swipe($event.type, $event.deltaX)\">\n        <div [ngStyle]=\"{'margin-left.px': delta}\">\n          <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.url === selectTab}\" [routerLink]=\"['/profile', tab.url]\">\n            <span></span>\n            <div>{{tab.name}}</div>\n          </a>\n          <a *ngIf=\"isAuthenticated === true\" (click)=\"logout()\"><span></span><div>Esci</div></a>\n        </div>\n      </div>\n      <div class=\"profile-settings\" *ngIf=\"selectTab === 'settings'\">\n        <div class=\"header\">Informazioni del account</div>\n        <form #changProfile=\"ngForm\">\n          <app-loading *ngIf=\"isLoading\"></app-loading>\n          <label>NOME COMPLETO</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"name\" placeholder=\"Nome Cognome\" #fullname=\"ngModel\" [(ngModel)]=\"userData.fullname\" required>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<label>Cognome</label>-->\n            <!--<input class=\"form-control\" name=\"lastname\" #fullname=\"ngModel\" [(ngModel)]=\"userData.lastname\" required disabled>-->\n          <!--</div>-->\n          <!--<div class=\"form-group\">-->\n            <!--<label>Nome Azienda</label>-->\n            <!--<input class=\"form-control\" name=\"patronymic\" #fullname=\"ngModel\" [(ngModel)]=\"userData.patronymic\" required disabled>-->\n          <!--</div>-->\n          <label>CELLULARE</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"phone\" placeholder=\"Numero\" #phone_number=\"ngModel\" [(ngModel)]=\"userData.phone_number\">\n          </div>\n          <label>EMAIL</label>\n          <div class=\"form-group\">\n            <div class=\"email-field\">\n              <input class=\"form-control\" name=\"email\" placeholder=\"Indirizzo email\" value=\"\" #email=\"ngModel\" [(ngModel)]=\"userData.email\" required disabled>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\" disabled>Modifica password</button>\n            </div>\n          </div>\n          <!--<div class=\"form-group password-block\">-->\n            <!--<label>Password</label>-->\n            <!--<div class=\"password-container\">-->\n              <!--<div class=\"password\">-->\n                <!--<span>•••••••••••</span>-->\n              <!--</div>-->\n              <!--<div class=\"change-password\">-->\n                <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!-- <div class=\"header second\">Indirizzo di fatturazione</div> -->\n          <!-- <label>Indirizzo del domicilio</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"address1\" #street=\"ngModel\" [(ngModel)]=\"userData.street\" placeholder=\"Via Verdi 13\">\n          </div> -->\n          <!-- <label>Città e CAP</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"address2\" #city=\"ngModel\" [(ngModel)]=\"userData.city\" placeholder=\"Città\">\n            <input class=\"form-control second\" name=\"number2\" #postal_code=\"ngModel\" [(ngModel)]=\"userData.postal_code\" placeholder=\"CAP\">\n          </div> -->\n          <!-- <label>Provincia e Nazione</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"city\" #province=\"ngModel\" [(ngModel)]=\"userData.province\" placeholder=\"Provincia\">\n            <input class=\"form-control second\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"userData.country\" placeholder=\"Nazione\">\n          </div> -->\n          <!-- <label>Partita IVA</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"piva\" placeholder=\"P.IVA\">\n          </div> -->\n          <!-- <label>Codice Fiscale</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"codice\" placeholder=\"Codice Fiscale\">\n          </div> -->\n          <div class=\"profile-information\" *ngIf=\"formError\">\n            <strong *ngIf=\"formError.title.length > 0\">{{formError.title}}</strong> {{formError.message}}\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateProfile()\">Aggiorna Informazioni</button>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\"><span class=\"fa fa-sign-out\"></span> Log out</button>-->\n          <!--</div>-->\n        </form>\n      </div>\n      <div class=\"cards-page\" *ngIf=\"selectTab === 'payment'\">\n        <app-loading *ngIf=\"isLoading\"></app-loading>\n        <div class=\"card-block\" *ngFor=\"let card of cards\">\n          <div class=\"container\">\n            <div class=\"header\">\n              <div class=\"card-logo {{ formatCssClass(card.brand) }}\"><span>**** {{ card.last4 }}</span></div>\n              <div class=\"isDefault\" *ngIf=\"defaultCard === card.id\">Default</div>\n              <div class=\"buttons-block\">\n                <a class=\"btn btn-primary\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n                <a class=\"btn btn-primary\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n                <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n              </div>\n            </div>\n            <div class=\"content\">\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Nome:</span>\n                  {{ card.name }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Numero:</span>\n                  **** {{ card.last4 }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Scadenza:</span>\n                  {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Tipo:</span>\n                  {{ card.brand }} {{ card.funding }} {{ card.object }}\n                </div>\n              </div>\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Indirizzo:</span>\n                  {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                  {{ card.address_state }} {{ card.address_city }} <br>\n                  {{ card.address_zip }} {{ card.address_country }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <a class=\"new-card\" (click)=\"addNewCard()\">\n            Aggiungi un metodo di pagamento\n          </a>\n        </div>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'conditions'\">\n        <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n        <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n        <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n        <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n        <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n        <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n        <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n        <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n        <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n        <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n        <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n        <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n        <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n        <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n        <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n        <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n        <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n        <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n        <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n        <p><strong>5. SERVIZIO CLIENTI</strong></p>\n        <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n        <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n        <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n        <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n        <p><strong>6. LICENZA D’USO</strong></p>\n        <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n        <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n        <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n        <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n        <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n        <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n        <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n        <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'privacy'\">\n        <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n        <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n        <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n        <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n        2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n        2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n        2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n        2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n        2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'help'\">\n        <p>Hai bisogno di aiuto? <br>\n        Scrivi una mail harald.bregu@starbook.co e ti risponderemo nel più breve tempo possibile.</p>\n        <p>Vuoi entrare a far parte di STARBOOK? Aumenta il numero dei tuoi clienti paganti e risparmia sui costi del trasporto.</p>\n        <p>Per richiedere informazioni:</p>\n        <p>Cellulare: +39 3272415028<br>\n        Email: harald.bregu@starbook.co</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"dark-screen\" *ngIf=\"activePopup !== ''\" (click)=\"closePopup()\"></div>\n<!-- Change password -->\n<div class=\"popup\" *ngIf=\"activePopup === 'changePassword'\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Cambia password</div>\n  <form class=\"login-form\" #changePasswordForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.currentPassword}\">\n      <label for=\"currentPassword\">La tua password</label>\n      <input id=\"currentPassword\" class=\"form-control\" type=\"password\" name=\"currentPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.currentPassword\" #currentPassword=\"ngModel\">\n      <span class=\"error\">La tua password attuale è richiesta</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"newPassword\">Nuova password</label>\n      <input id=\"newPassword\" class=\"form-control\" type=\"password\" name=\"newPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.newPassword\" #newPassword=\"ngModel\">\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.passwordConfirm}\">\n      <label for=\"passwordConfirm\">Ripeti la nuova password</label>\n      <input id=\"passwordConfirm\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.passwordConfirm\" #passwordConfirm=\"ngModel\" (keyup)=\"checkPassword(newPassword.value, passwordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" [disabled]=\"!changePasswordForm.form.valid\" (click)=\"changePassword(currentPassword.value, newPassword.value, passwordConfirm.value)\">Cambia password</button>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <!--<div class=\"alert-block\" *ngIf=\"formError\">-->\n    <!--<div class=\"alert-icn\"></div>-->\n    <!--<div class=\"alert-container\">-->\n      <!--<div class=\"header\">Si è verificato un errore!</div>-->\n      <!--<p>{{formError.message}}</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-container\">\n      <p><span>Errore!</span> {{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <!--<div class=\"form-description\">-->\n      <!--<span>Sei nuovo su Starbook?</span>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n    </div>\n    <div class=\"form-description\">\n      <span>o</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n        <i></i>\n        Continua con Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"form-description\">\n    <span>o</span>\n  </div>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"price-loader\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading\">\n      <div class=\"spinner\">\n        <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <span>Calcolando totale…</span>\n    </div>\n    <div class=\"price-area\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading === false && confirmPopupData.totalPrice\">\n      Totale<span>{{confirmPopupData.totalPrice / 100}}€</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\"><i class=\"fa fa-lock\"></i> Prenota servizio</button>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n      <span *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\" class=\"confirm-button-notice\">Attenzione, chiudendo potresti perdere il prezzo calcolato del servizio.</span>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n    <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n      <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n        <label>Numero di telefono</label>\n        <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n      </div>\n      <div class=\"form-group\">\n        <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n      <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n\n\n<!-- ******************************** A/B Tests ******************************** -->\n\n<div class=\"popup\" [@registerCompanyPopupState]=\"registerCompanyPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Registra la tua impresa</div>\n  <form class=\"registration-company-form\" #registrationCompanyForm=\"ngForm\">\n    <div class=\"form-group\" >\n      <label for=\"regName\">Il tuo nome</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"il tuo nome\" required [(ngModel)]=\"registerNewCompany.name\" #regName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regPhone\">Numero di cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"+39\" required [(ngModel)]=\"registerNewCompany.phone\" #regPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regProfession\">Inserisci la tua professione</label>\n      <input id=\"regProfession\" class=\"form-control\" name=\"profession\" placeholder=\"professione\" [(ngModel)]=\"registerNewCompany.profession\" #regProfession=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registerCompany(regName.value, regPhone.value, regProfession.value)\">Registra la tua impresa</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div>\n\n<!-- <div class=\"popup\" [@recommendToFriendPopupState]=\"recommendToFriendPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Registra la tua impresa</div>\n  <form class=\"registration-company-form\" #registrationCompanyForm=\"ngForm\">\n    <div class=\"form-group\" >\n      <label for=\"regName\">Il tuo nome</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"il tuo nome\" required [(ngModel)]=\"registerNewCompany.name\" #regName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regPhone\">Numero di cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"+39\" required [(ngModel)]=\"registerNewCompany.phone\" #regPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regProfession\">Inserisci la tua professione</label>\n      <input id=\"regProfession\" class=\"form-control\" name=\"profession\" placeholder=\"professione\" [(ngModel)]=\"registerNewCompany.profession\" #regProfession=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registerCompany(regName.value, regPhone.value, regProfession.value)\">Registra la tua impresa</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n"

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = require("ng2-click-outside");

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = require("primeng/components/autocomplete/autocomplete");

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = require("primeng/components/calendar/calendar");

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWJiZGYyYmMwN2UwMWY3MWNkOTAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1jbGljay1vdXRzaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0Q7QUFHekM7SUFLRTtRQUpRLGdCQUFXLEdBQUcsSUFBSSxxREFBTyxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUl6QyxFQUFFLENBQUMsQ0FBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELHNDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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Z0IsOFlBQThZLHNCQUFzQix5SEFBeUgsc0JBQXNCLHNSQUFzUixlQUFlLG1KQUFtSixlQUFlLHdMQUF3TCxlQUFlLG9IQUFvSCxlQUFlLHlnRzs7Ozs7O0FDQXhodUIsd2dCQUF3Z0IsVUFBVSxVQUFVLGdCQUFnQixJQUFJLDRHOzs7Ozs7QUNBaGpCLG9EOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLHlFOzs7Ozs7QUNBQSxpRSIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YmJkZjJiYzA3ZTAxZjcxY2Q5MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUG9wdXBzU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlUG9wdXAgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgcG9wdXBSZXNwb25zZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHVibGljIGdldEFjdGl2ZVBvcHVwJDtcbiAgcHVibGljIGdldFBvcHVwUmVzcG9uc2UkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmdldEFjdGl2ZVBvcHVwJCA9IHRoaXMuYWN0aXZlUG9wdXAuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldFBvcHVwUmVzcG9uc2UkID0gdGhpcy5wb3B1cFJlc3BvbnNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuICBhY3RpdmF0ZShwb3B1cCkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAubmV4dChwb3B1cCk7XG4gIH1cbiAgYWN0aW9uQ29tcGxldGUoZGF0YSkge1xuICAgIHRoaXMucG9wdXBSZXNwb25zZS5uZXh0KGRhdGEpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBoZWFkZXJNZXNzYWdlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwcml2YXRlIGF1dGhEYXRhID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGFjdGl2ZVRhYiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdHVzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuXG4gIHB1YmxpYyBnZXRNZXNzYWdlJDtcbiAgcHVibGljIGdldFBlcnNvbmFsTWVudSQ7XG4gIHB1YmxpYyBnZXRBY3RpdmVUYWIkO1xuICBwdWJsaWMgZ2V0TG9hZGluZ1N0YXR1cyQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmdldE1lc3NhZ2UkID0gdGhpcy5oZWFkZXJNZXNzYWdlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRQZXJzb25hbE1lbnUkID0gdGhpcy5hdXRoRGF0YS5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlVGFiJCA9IHRoaXMuYWN0aXZlVGFiLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRMb2FkaW5nU3RhdHVzJCA9IHRoaXMubG9hZGluZ1N0YXR1cy5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmhlYWRlck1lc3NhZ2UubmV4dChtZXNzYWdlKTtcbiAgfVxuXG4gIHVwZGF0ZVBlcnNvbmFsTWVudShhdXRoKSB7XG4gICAgdGhpcy5hdXRoRGF0YS5uZXh0KGF1dGgpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlVGFiKHRhYikge1xuICAgIHRoaXMuYWN0aXZlVGFiLm5leHQodGFiKTtcbiAgfVxuXG4gIHVwZGF0ZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5sb2FkaW5nU3RhdHVzLm5leHQoc3RhdHVzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGltaW5nIHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGltaW5nVmFyOiBzdHJpbmc7XG4gIHRpbWluZ1ZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNlbmRUaW1pbmcodGltaW5nRGF0YTogSVRpbWluZykge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAndGltaW5nJywgdGltaW5nRGF0YS5jYXRlZ29yeSwgdGltaW5nRGF0YS50aW1pbmdWYXIsIHRpbWluZ0RhdGEudGltaW5nVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRFdmVudChldmVudDogSUV2ZW50KSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudC5jYXRlZ29yeSwgZXZlbnQuYWN0aW9uLCBldmVudC5sYWJlbCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZXJ2aWNlc09iamVjdDtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLyosIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKi8pIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHNlbmRTZXJ2aWNlcyhzZXJ2aWNlcykge1xuICAgIHRoaXMuc2VydmljZXNPYmplY3QgPSBzZXJ2aWNlcztcbiAgfVxuICBnZXRTZXJ2aWNlc09iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc09iamVjdDtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICdjYXRlZ29yaWVzJztcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuYXBpICsgcXVlcnlTdHJpbmcpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFNlcnZpY2VzKCkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdmZWF0dXJlZCcpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlcy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlYXJjaD90aXRsZT0nICsgcXVlcnkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U2VydmljZUJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlcnZpY2VzLycgKyBpZClcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5qc29uKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFVSTFNlYXJjaFBhcmFtcywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJzZWxlbml1bS13ZWJkcml2ZXIvaHR0cFwiO1xuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzcyB7XG4gIHN0cmVldDogc3RyaW5nO1xuICBzdHJlZXRfbnVtYmVyOiBudW1iZXI7XG4gIGNpdHk6IHN0cmluZztcbiAgcG9zdGFsX2NvZGU6IG51bWJlcjtcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGlzRnVsbDogYm9vbGVhbjtcbiAgZm9ybWF0dGVkQWRkcmVzczogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcmRlckV2ZW50ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwdWJsaWMgZ2V0T3JkZXJFdmVudCQ7XG5cbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBwcml2YXRlIGdvb2dsZUFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIHRoaXMuZ29vZ2xlQXBpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRPcmRlckV2ZW50JCA9IHRoaXMub3JkZXJFdmVudC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBtYWtlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyRXZlbnQubmV4dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hlYWRlcnM6IGhlYWRlcnN9O1xuICB9XG5cbiAgc2F2ZU9yZGVyKG9yZGVyRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnb3JkZXJzJywge1xuICAgICAgc2VydmljZV9pZDogb3JkZXJEYXRhLnNlcnZpY2VfaWQsXG4gICAgICBkZXNjcmlwdGlvbjogb3JkZXJEYXRhLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uLFxuICAgICAgZGV0YWlsczogb3JkZXJEYXRhLmRlbGl2ZXJ5X2RldGFpbHMsXG4gICAgICBkYXRlOiBvcmRlckRhdGEuZGVsaXZlcnlfZGF0ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBvcmRlckRhdGEuc3RyZWV0LFxuICAgICAgICBzdHJlZXRfbnVtYmVyOiBvcmRlckRhdGEuc3RyZWV0X251bWJlcixcbiAgICAgICAgY2l0eTogb3JkZXJEYXRhLmNpdHksXG4gICAgICAgIHBvc3RhbF9jb2RlOiBvcmRlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICAgIHByb3ZpbmNlOiBvcmRlckRhdGEucHJvdmluY2UsXG4gICAgICAgIGNvdW50cnk6IG9yZGVyRGF0YS5jb3VudHJ5LFxuICAgICAgICBjb3VudHJ5X2NvZGU6IG9yZGVyRGF0YS5jb3VudHJ5X2NvZGVcbiAgICAgIH0sXG4gICAgICBwYXltZW50OiB7XG4gICAgICAgIGFtb3VudDogb3JkZXJEYXRhLnBheW1lbnQuYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogb3JkZXJEYXRhLnBheW1lbnQuY3VycmVuY3lcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhrZXk6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGxldCBhZGRyZXNzZXMgPSBbXTtcbiAgICBwYXJhbXMuc2V0KCdhZGRyZXNzJywga2V5KTtcbiAgICBwYXJhbXMuc2V0KCdsYW5ndWFnZScsICdpdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2tleScsICdBSXphU3lDTGM1ZXREU3JxaWVBbjRsUENzdkZEcGtNMy1GNy1jNU0nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdvb2dsZUFwaSwge3NlYXJjaDogcGFyYW1zfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHRzO1xuICAgICAgICBkYXRhLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICBsZXQgYWRkcmVzc0RhdGE6IElBZGRyZXNzID0ge1xuICAgICAgICAgICAgc3RyZWV0OiAnJyxcbiAgICAgICAgICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgICAgICAgICAgcHJvdmluY2U6ICcnLFxuICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFkZHJlc3MuYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tcG9uZW50cy50eXBlc1swXSkge1xuICAgICAgICAgICAgICBjYXNlICdzdHJlZXRfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXRfbnVtYmVyID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3JvdXRlJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXQgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnbG9jYWxpdHknOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNpdHkgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5wcm92aW5jZSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb3VudHJ5JzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jb3VudHJ5ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY291bnRyeV9jb2RlID0gY29tcG9uZW50cy5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEucG9zdGFsX2NvZGUgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkZHJlc3NEYXRhLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuXG4gICAgICAgICAgaWYgKGFkZHJlc3MudHlwZXNbMF0gPT09ICdzdHJlZXRfYWRkcmVzcycpIHtcbiAgICAgICAgICAgIGFkZHJlc3NEYXRhLmlzRnVsbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFkZHJlc3NEYXRhLmNvdW50cnlfY29kZSA9PT0gJ0lUJykge1xuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZGRyZXNzZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0RXN0aW1hdGVQcmljZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ2NhbGN1bGF0ZV9lc3RpbWF0ZV9wcmljZScsIGRhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgcHJpY2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgcmV0dXJuIHByaWNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKSB7XG4gICAgbGV0IHJlbW90ZSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgICBsZXQgbG9jYWwgPSAnaHR0cDovL2xvY2FsaG9zdC92MC45LjEvJztcbiAgICB0aGlzLmFwaSA9IHJlbW90ZVxuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzRmFjZWJvb2soYWNjZXNzX3Rva2VuKSB7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKHsnYWNjZXNzX3Rva2VuJzogYWNjZXNzX3Rva2VufSk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBhdXRoSW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoO1xuICB9XG5cbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbG9naW4nLCB7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmR9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBsZXQgYXV0aERhdGEgPSB7XG4gICAgICAgICAgICBfaWQ6IGRhdGEucmVzdWx0Ll9pZCxcbiAgICAgICAgICAgIGVtYWlsOiBkYXRhLnJlc3VsdC5lbWFpbCxcbiAgICAgICAgICAgIHBob25lX251bWJlcjogZGF0YS5yZXN1bHQucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGRhdGEucmVzdWx0KTtcbiAgICAgICAgICByZXR1cm4gYXV0aERhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgc2lnbnVwKG5hbWU6IHN0cmluZywgcGhvbmU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnc2lnbnVwJywge2Z1bGxuYW1lOiBuYW1lLCBwaG9uZV9udW1iZXI6IHBob25lLCBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICAgICAgICAgIGFjY291bnRfdHlwZXM6IGRhdGEucmVzdWx0LmFjY291bnRfdHlwZXMsXG4gICAgICAgICAgICBwcm9maWxlOiBkYXRhLnJlc3VsdC5wcm9maWxlLFxuICAgICAgICAgICAgY29tcGFueTogZGF0YS5yZXN1bHQuY29tcGFueSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGRhdGEucmVzdWx0LmFkZHJlc3MsXG4gICAgICAgICAgICBzZXJ2aWNlczogZGF0YS5yZXN1bHQuc2VydmljZXMsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IGRhdGEucmVzdWx0LmxvY2F0aW9ucyxcbiAgICAgICAgICAgIHBheW1lbnQ6IGRhdGEucmVzdWx0LnBheW1lbnQsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhLnJlc3VsdC5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZF9hdDogZGF0YS5yZXN1bHQudXBkYXRlZF9hdCxcbiAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcmVjb3ZlcnkoZW1haWw6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAncGFzc3dvcmRfcmVjb3ZlcnknLCB7ZW1haWw6IGVtYWlsfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aDtcbiAgfVxuXG4gIGZhY2Vib29rTG9naW4oYWNjZXNzX3Rva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ2ZhY2Vib29rX2xvZ2luJywge30sIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVyc0ZhY2Vib29rKGFjY2Vzc190b2tlbil9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGF1dGhEYXRhID0ge1xuICAgICAgICAgICAgICBfaWQ6IGRhdGEucmVzdWx0Ll9pZCxcbiAgICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6IGRhdGEucmVzdWx0LnBob25lX251bWJlcixcbiAgICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5yZXN1bHQucHJvZmlsZSxcbiAgICAgICAgICAgICAgY29tcGFueTogZGF0YS5yZXN1bHQuY29tcGFueSxcbiAgICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgc2VydmljZXM6IGRhdGEucmVzdWx0LnNlcnZpY2VzLFxuICAgICAgICAgICAgICBsb2NhdGlvbnM6IGRhdGEucmVzdWx0LmxvY2F0aW9ucyxcbiAgICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgICAgY3JlYXRlZF9hdDogZGF0YS5yZXN1bHQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgICAgdXBkYXRlZF9hdDogZGF0YS5yZXN1bHQudXBkYXRlZF9hdCxcbiAgICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gYXV0aERhdGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGFkZFBob25lKHBob25lKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnbWUnLCB7cGhvbmVfbnVtYmVyOiBwaG9uZX0sIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVycygpfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3VsdC5qc29uKCk7XG4gICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiBkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgICAgICB1c2VyRGF0YS5waG9uZV9udW1iZXIgPSBwaG9uZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnN0YXR1cyB8fCBlcnJvcik7XG4gIH1cblxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgLy8qKioqKioqKioqKioqKioqKiBBL0IgVEVTVFMgKioqKioqKioqKioqKioqKioqXG4gIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIHJlZ2lzdGVyQ29tcGFueShuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIHByb2Zlc3Npb246IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdyZWdpc3Rlcl9jb21wYW55Jywge25hbWU6IG5hbWUsIHBob25lX251bWJlcjogcGhvbmUsIHByb2Zlc3Npb246IHByb2Zlc3Npb259KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldE9yZGVycyhwYXJhbXMpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHBhcmFtc1RvUmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuZm9yRWFjaCgocGVyYW0pID0+IHtcbiAgICAgIHBhcmFtc1RvUmVxdWVzdC5zZXQocGVyYW0ubmFtZSwgcGVyYW0udmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ29yZGVycycsIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVycygpLCBzZWFyY2g6IHBhcmFtc1RvUmVxdWVzdH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIFsnSWRyYXVsaWNvJywgJ0VsZXR0cmljaXN0YScsICdGYWJicm8nLCAnU3BhenphY2FtaW5vJywgJ0FudGVubmlzdGEnLCAnUHVsaXppZScsICdFZGlsaXppYScsICdHaWFyZGluYWdnaW8nLCAnSW5mb3JtYXRpY2EnXTtcbiAgfVxuXG4gIG1vZGlmeU9yZGVyKGlkLCB0eXBlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGV9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcmljZShpZCwgdHlwZSwgcHJpY2UpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnb3JkZXJzLycgKyBpZCwge2FjdGlvbjogdHlwZSwgcGF5bWVudDoge2Ftb3VudDogcHJpY2UsIGN1cnJlbmN5OiBcImV1clwiIH19LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvb3JkZXJzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHN0cmlwZVJlc3BvbnNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgZGF0YToge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbihjYXJkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PndpbmRvdykuU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oe1xuICAgICAgICBudW1iZXI6IGNhcmQubnVtYmVyLFxuICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICBleHBfeWVhcjogY2FyZC5leHBfeWVhcixcbiAgICAgICAgY3ZjOiBjYXJkLmN2YyxcbiAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgYWRkcmVzc19jaXR5OiBjYXJkLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeVxuICAgICAgfSwgKHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBzdHJpcGVSZXNwb25zZTogc3RyaXBlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB0b2tlbjogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5jYXJkXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXNvbHZlKHN0cmlwZVJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLnZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDYXJkKGNhcmREYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuKGNhcmREYXRhKVxuICAgICAgICAudGhlbigoZGF0YTogc3RyaXBlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMnLCB7c291cmNlOiBkYXRhLnRva2VufSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHtkZWZhdWx0X3NvdXJjZTogY2FyZElkfSx0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzdGF0dXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZWRpdENhcmQoY2FyZElkLCBjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgY2FyZERhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wYXltZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXywgRE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSB7XG4gIHByaXZhdGUgX2RvbTogRG9tQWRhcHRlciA9IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NKCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHsgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH1cblxuICBzZXRNZXRhRWxlbShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgaGVhZFRhZ3MgPSB0aGlzLl9kb2N1bWVudC5oZWFkLmNoaWxkcmVuIGFzIEhUTUxDb2xsZWN0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtID0gaGVhZFRhZ3NbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbS50YWdOYW1lID09PSAnbWV0YScpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBlbGVtWydhdHRyaWJzJ107XG4gICAgICAgIGlmICgnbmFtZScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnbmFtZScsIG5hbWUpO1xuICAgIHRoaXMuX2RvbS5zZXRBdHRyaWJ1dGUoZWwsICdjb250ZW50JywgdmFsdWUpO1xuICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5oZWFkLCBlbCk7XG4gIH1cblxuICBzZXRPZ0VsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ3Byb3BlcnR5JyBpbiBhdHRyKSB7XG4gICAgICAgICAgaWYgKGF0dHIucHJvcGVydHkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAncHJvcGVydHknLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJNYXNvbnJ5LCBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgTWFzb25yeTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnlMaXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHR5cGU6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbl9jb2RlOiBzdHJpbmc7XG4gIGljb25fbmFtZTogc3RyaW5nO1xuICBsYW5nOiBzdHJpbmc7XG4gIHByb2R1Y3RzOiBJU2VydmljZUNhdGVnb3J5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnkge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IElTZXJ2aWNlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm1JdGVtIHtcbiAgZm9ybUlkPzogbnVtYmVyO1xuICBvcHRpb25JZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGVfMTogc3RyaW5nO1xuICBpbnB1dF90eXBlPzogc3RyaW5nO1xuICBpbnB1dF92YWx1ZT86IGFueTtcbiAgdmFsdWVfc3ltYm9sPzogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgc2VsZWN0ZWQ/OmJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRm9ybSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgcHJpY2VfdHlwZTogc3RyaW5nO1xuICBvcHRpb25zOiBJU2VydmljZUZvcm1JdGVtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlcyB7XG4gIF9pZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZV91cmw6IHN0cmluZztcbiAgcHJpY2U6IHtcbiAgICBiYXNlX2Ftb3VudDogbnVtYmVyO1xuICB9LFxuICBvcmRlcl9vcHRpb25zOiB7XG4gICAgbWluX2Ftb3VudDogbnVtYmVyO1xuICAgIHBheW1lbnRfbWV0aG9kczogc3RyaW5nW11cbiAgfSxcbiAgZm9ybXM6IElTZXJ2aWNlRm9ybVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGJhc2VBbW91bnQgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgY2FsY3VsYXRlZDogMFxuICB9O1xuICBwdWJsaWMgY2FsY3VsYXRlUmVzdWx0cyA9IHtcbiAgICBxdWV1ZUZpcnN0OiAwLFxuICAgIHF1ZXVlU2Vjb25kOiAwLFxuICAgIHF1ZXVlRW5kOiAwXG4gIH07XG4gIHB1YmxpYyBvcGVyYW5kcyA9IHtcbiAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICBxdWV1ZVNlY29uZDogW10sXG4gICAgcXVldWVFbmQ6IFtdXG4gIH07XG4gIHB1YmxpYyBmaW5hbFByaWNlID0gMDtcbiAgcHVibGljIGRlZmF1bHRTZXJ2aWNlcztcblxuICBwdWJsaWMgc2VydmljZXNDYXRlZ29yeUxpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0W10gPSBbXTtcbiAgcHVibGljIGlzU2VydmljZXNWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBzZXJ2aWNlc0RhdGEgPSBbXTtcblxuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5OiBib29sZWFufHN0cmluZyA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZTogYm9vbGVhbnxudW1iZXIgPSBmYWxzZTtcbiAgcHVibGljIG1vZGVsOiBhbnk7XG4gIHB1YmxpYyBvcmRlckRhdGEgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgcHJpY2U6IHtcbiAgICAgIGJhc2VfYW1vdW50OiAwXG4gICAgfSxcbiAgICBvcmRlcl9vcHRpb25zOiB7XG4gICAgICBtaW5fYW1vdW50OiAwLFxuICAgICAgcGF5bWVudF9tZXRob2RzOiBbXVxuICAgIH0sXG4gICAgc2VydmljZTogJycsXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHRvdGFsUHJpY2U6IDBcbiAgfTtcbiAgcHVibGljIG9yZGVySXNGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG4gIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gLTE1O1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBtYXNvbnJ5OiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIEBWaWV3Q2hpbGQoQW5ndWxhck1hc29ucnkpIG1hc29ucnk6IEFuZ3VsYXJNYXNvbnJ5O1xuICAvLyBAVmlld0NoaWxkKE1hc29ucnlNb2R1bGUpIGxheW91dDogTWFzb25yeU1vZHVsZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICByZW5kZXJQYWdlKHNlcnZpY2VzOiBJU2VydmljZXMpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2Uoc2VydmljZXMudGl0bGUpO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgc2VydmljZXMudGl0bGUpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby9zZXJ2aWNlcy8nICsgc2VydmljZXMuX2lkKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5kZWZhdWx0U2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NvbnRlbnQnLFxuICAgICAgICBpbWFnZTogc2VydmljZXMuaW1hZ2VfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VydmljZXMuZGVzY3JpcHRpb24sXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLm9yZGVyRGF0YSA9IHtcbiAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VzLl9pZCxcbiAgICAgIHByaWNlOiBzZXJ2aWNlcy5wcmljZSxcbiAgICAgIG9yZGVyX29wdGlvbnM6IHNlcnZpY2VzLm9yZGVyX29wdGlvbnMsXG4gICAgICBzZXJ2aWNlOiBzZXJ2aWNlcy50aXRsZSxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHRvdGFsUHJpY2U6IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50XG4gICAgfTtcbiAgICB0aGlzLmJhc2VBbW91bnQuc3RhcnQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50O1xuICAgIGxldCBmb3JtSWQgPSAxO1xuICAgIHNlcnZpY2VzLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgdmFyIHRpdGxlXzE6IHN0cmluZztcbiAgICAgIGlmIChmb3JtLnRpdGxlXzEpIHtcbiAgICAgICAgdGl0bGVfMSA9IGZvcm0udGl0bGVfMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2VydmljZUZvcm06IElTZXJ2aWNlRm9ybSA9IHtcbiAgICAgICAgdGl0bGU6IGZvcm0udGl0bGUsXG4gICAgICAgIHRpdGxlXzEgOiB0aXRsZV8xLFxuICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiBmb3JtLnJlcXVpcmVkLFxuICAgICAgICBwcmljZV90eXBlOiBmb3JtLnByaWNlX3R5cGUsXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9O1xuXG4gICAgICBsZXQgb3B0aW9uSWQgPSAwO1xuICAgICAgZm9ybS5vcHRpb25zLmZvckVhY2goKGl0ZW06IElTZXJ2aWNlRm9ybUl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlXzEpIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZV8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlXzEgPSBpdGVtLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICBmb3JtSWQ6IGZvcm1JZCxcbiAgICAgICAgICBvcHRpb25JZDogb3B0aW9uSWQsXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgdGl0bGVfMTogdGl0bGVfMSxcbiAgICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgnaW5wdXRfdHlwZScgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdHlwZSddID0gaXRlbS5pbnB1dF90eXBlO1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdmFsdWUnXSA9IGl0ZW0uaW5wdXRfdmFsdWU7XG4gICAgICAgICAgb3B0aW9uWyd2YWx1ZV9zeW1ib2wnXSA9IGl0ZW0udmFsdWVfc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uWydzZWxlY3RlZCddID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmljZUZvcm0ub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbklkICsrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YS5wdXNoKHNlcnZpY2VGb3JtKTtcbiAgICAgIGZvcm1JZCArKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVTZXJ2aWNlKHNlcnZpY2VOYW1lLCBpdGVtTmFtZSkge1xuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2NoZWNrYm94J30pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTm90RW1wdHlGb3JtKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFZhbHVlICYmIHNlcnZpY2UucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ1JBRElPQlVUVE9OJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdyYWRpb2J1dHRvbid9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoKTtcbiAgfVxuXG4gIGNoZWNrTm90RW1wdHlGb3JtKGZvcm1JZCwgb3B0aW9uSWQpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5vcHRpb25JZCAhPT0gb3B0aW9uSWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShmb3JtSWQsIG9wdGlvbklkKSB7XG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2lucHV0J30pO1xuXG4gICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBzZWxlY3RBbGxDb250ZW50KCRldmVudCkge1xuICAgICRldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gIH1cblxuICB1bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZihzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICB9XG5cbiAgcXVldWVXb3JrZXIoKSB7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQ7XG4gICAgdGhpcy5vcGVyYW5kcyA9IHtcbiAgICAgIHF1ZXVlRmlyc3Q6IFtdLFxuICAgICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgICAgcXVldWVFbmQ6IFtdXG4gICAgfTtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSAwO1xuXG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NlbGVjdGVkJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQgKyBpdGVtLmFtb3VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRmlyc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKz0gdGFzay5hbW91bnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0ID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZVNlY29uZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICogdGFzay5jbnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZVNlY29uZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVFbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyAodGFzay5hbW91bnQgKiB0YXNrLmNudCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUVuZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCArIHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAgIHRoaXMucXVldWVXb3JrZXIoKTtcbiAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcyA9IFtdO1xuICAgIHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICBsZXQgY3VycmVudE9yZGVyU3RhdGUgPSBbXTtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgICAgICAgICAgICAgcHJpY2VfdHlwZTogc2VydmljZS5wcmljZV90eXBlLFxuICAgICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmljZS50eXBlID09PSAnSU5QVVRURVhUJykge1xuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5pbnB1dF92YWx1ZSAqIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0LFxuICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS52YWx1ZV9zeW1ib2xcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnQgKiBpdGVtLmlucHV0X3ZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JkZXJTdGF0ZS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLnB1c2goc2VydmljZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAgIC8vIHRvZ2dsZVNlcnZpY2UoY2F0ZWdvcnlMaXN0SWQ6IHN0cmluZywgY2F0ZWdvcnlJZDogc3RyaW5nLCBzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgLy8gbGV0IGNhdGVnb3J5TGlzdEluZGV4ID0gMDtcbiAgICAvLyB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAgIC8vICAgbGV0IGNhdGVnb3J5SW5kZXggPSAwO1xuICAgIC8vICAgaWYgKGNhdGVnb3J5TGlzdC5faWQgPT09IGNhdGVnb3J5TGlzdElkKSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZWdvcnlEYXRhLl9pZCA9PT0gY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgICAvLyAgICAgICAgICAgaWYgKHNlcnZpY2VEYXRhLm5hbWUgPT09IHNlcnZpY2VOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdFtjYXRlZ29yeUxpc3RJbmRleF0ucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF0uaXRlbXNbc2VydmljZUluZGV4XS5zZWxlY3RlZCA9ICFzZXJ2aWNlRGF0YS5zZWxlY3RlZDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gfVxuXG4gIC8vIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gIC8vICAgbGV0IGFycmF5SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgICBzZXJ2aWNlLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAvLyAgICAgICAgICAgaWYgKGFycmF5SW5kZXggaW4gY3VycmVudE9yZGVyU3RhdGUpIHtcbiAgLy8gICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGVbYXJyYXlJbmRleF0uaXRlbXMucHVzaCh7IG5hbWU6IGl0ZW0ubmFtZSB9KTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdID0ge1xuICAvLyAgICAgICAgICAgICAgIF9pZDogc2VydmljZS5faWQsXG4gIC8vICAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgLy8gICAgICAgICAgICAgICBpdGVtczogW3tcbiAgLy8gICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAvLyAgICAgICAgICAgICAgIH1dXG4gIC8vICAgICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgYXJyYXlJbmRleCsrO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAvLyAgICAgICB0aGlzLm9yZGVyRGF0YS5wdXNoKHNlcnZpY2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmIChjdXJyZW50T3JkZXJTdGF0ZS5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB0aGlzLm9yZGVySXNGdWxsID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHRhYk5hdmlnYXRlKGlkOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IGlkO1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgdGhpcy5jbGVhclNlcnZpY2VEYXRhKCk7XG4gIC8vICAgdGhpcy5yZW5kZXJQYWdlKGlkKTtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKHNlcnZpY2VDYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlQ2F0ZWdvcnlEYXRhLl9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gc2VydmljZUNhdGVnb3J5RGF0YS50eXBlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gcmVuZGVyUGFnZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBpZiAoU2VydmljZXNMaXN0Ll9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBTZXJ2aWNlc0xpc3QucHJvZHVjdHM7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2aWNlc1ZpZXcgIT09IGZhbHNlICYmIGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNYXNvbnJ5KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmKHRoaXMubWFzb25yeSkge1xuICAgICAgICB0aGlzLm1hc29ucnkubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5yb3V0ZS51cmwuc3Vic2NyaWJlKCh1cmwpID0+IHtcbiAgICAvLyAgIGlmICgwIGluIHVybCkge1xuICAgIC8vICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgLy8gICAgIGlmIChzZXJ2aWNlcykge1xuICAgIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShzZXJ2aWNlcyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnU3RhcmJvb2sgfCBBY3F1aXN0YSBzZXJ2aXppIHByb2Zlc3Npb25hbGkgb25saW5lJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBzZXJ2aWNlSWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHRoaXMuaXNTZXJ2aWNlc1ZpZXcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5zZXJ2aWNlcy1ibG9jaycsXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWdpblRvcDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlQnlJZChzZXJ2aWNlSWQpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHNlcnZpY2UgYnkgaWQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9yZGVyU2VydmljZS5nZXRPcmRlckV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyQ3JlYXRlZChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmhvbWVTZXJ2aWNlLmdldENhdGVnb3JpZXMoKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgdGhpcy5wYXJzZVNlcnZpY2VEYXRhKGRhdGEucmVzdWx0KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldEFjdGl2ZVRhYiQuc3Vic2NyaWJlKHRhYiA9PiB7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgPSB0YWI7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IHRhYjtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBwYXJzZVNlcnZpY2VEYXRhKGRhdGEpIHtcbiAgLy8gICBsZXQgaSA9IDA7XG4gIC8vICAgZGF0YS5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IFByb2R1Y3RzID0gW107XG4gIC8vICAgICBTZXJ2aWNlc0xpc3QucHJvZHVjdHMuZm9yRWFjaCgoU2VydmljZXNDYXRlZ29yeSkgPT4ge1xuICAvLyAgICAgICBsZXQgSXRlbXMgPSBbXTtcbiAgLy8gICAgICAgU2VydmljZXNDYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChDYXRlZ29yeUl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBJdGVtcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIG5hbWU6IENhdGVnb3J5SXRlbSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIFByb2R1Y3RzLnB1c2goe1xuICAvLyAgICAgICAgIF9pZDogU2VydmljZXNDYXRlZ29yeS5faWQgYXMgbnVtYmVyLFxuICAvLyAgICAgICAgIHRpdGxlOiBTZXJ2aWNlc0NhdGVnb3J5LnRpdGxlIGFzIHN0cmluZyxcbiAgLy8gICAgICAgICBpdGVtczogSXRlbXNcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QucHVzaCh7XG4gIC8vICAgICAgIF9pZDogU2VydmljZXNMaXN0Ll9pZCBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHR5cGU6IFNlcnZpY2VzTGlzdC50eXBlIGFzIG51bWJlcixcbiAgLy8gICAgICAgdGl0bGU6IFNlcnZpY2VzTGlzdC50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fY29kZTogU2VydmljZXNMaXN0Lmljb25fY29kZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fbmFtZTogU2VydmljZXNMaXN0Lmljb25fbmFtZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGxhbmc6IFNlcnZpY2VzTGlzdC5sYW5nIGFzIHN0cmluZyxcbiAgLy8gICAgICAgcHJvZHVjdHM6IFByb2R1Y3RzXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGlmIChpID09PSAwKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5ID0gU2VydmljZXNMaXN0Ll9pZDtcbiAgLy8gICAgICAgdGhpcy5yZW5kZXJQYWdlKFNlcnZpY2VzTGlzdC5faWQpO1xuICAvLyAgICAgICBpKys7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNlcnZpY2VEYXRhKCkge1xuICAvLyAgIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgLy8gICAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gIC8vICAgICAgIGNhdGVnb3J5RGF0YS5pdGVtcy5mb3JFYWNoKChzZXJ2aWNlRGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdXG4gIC8vICAgICAgICAgICAucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF1cbiAgLy8gICAgICAgICAgIC5pdGVtc1tzZXJ2aWNlSW5kZXhdXG4gIC8vICAgICAgICAgICAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgICBzZXJ2aWNlSW5kZXgrKztcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGNhdGVnb3J5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0SW5kZXgrKztcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAvLyAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgLy8gICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gIC8vICAgICBsZXQgYWxsTWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1waWxscyA+IGxpJyk7XG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgLy8gICAgICAgbWVudVNpemUgKz0gbWVudUl0ZW0ub2Zmc2V0V2lkdGg7XG4gIC8vICAgICB9XG4gIC8vICAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWItYmFyJykuY2xpZW50V2lkdGg7XG4gIC8vICAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUgKyA1MCkgLSBtZW51QmxvY2tXaWR0aDtcbiAgLy8gICAgIGlmIChhbGxvd01hcmdpbiA+PSAwKSB7XG4gIC8vICAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAvLyAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gIC8vICAgICAgICAgdGhpcy5kZWx0YSA9IC0xNTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPCBhbGxvd01hcmdpbikge1xuICAvLyAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBvcmRlckNyZWF0ZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlLnRpdGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlclBhZ2UodGhpcy5kZWZhdWx0U2VydmljZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkNhbmNlbCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMsIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mYWNlYm9vaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNlYm9vay5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShzID0+IHtcbiAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocy51cmwuc3BsaXQoJyMnKVsxXSk7XG4gICAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBwYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgICAgICAgICAgaWYgKGFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhY2Vib29rX3Rva2VuJywgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhY2Vib29rX3Rva2VuJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlciB7XG4gIF9pZDogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgcGF5bWVudD86IHtcbiAgICBhbW91bnQ/OiBudW1iZXIsXG4gICAgY3VycmVuY3k/OiBzdHJpbmdcbiAgfSxcbiAgY2F0ZWdvcnlfdHlwZTogbnVtYmVyO1xuICBkZWxpdmVyeV9kZXRhaWxzOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2RhdGU6IHN0cmluZztcbiAgZGVsaXZlcnlfYWRkcmVzczoge1xuICAgIHN0cmVldDogc3RyaW5nO1xuICAgIHN0cmVldF9udW1iZXI6IHN0cmluZztcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgcG9zdGFsX2NvZGU6IHN0cmluZztcbiAgICBwcm92aW5jZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgfSxcbiAgY3VzdG9tZXI6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gIH0sXG4gIG1lcmNoYW50OiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIHBob25lX251bWJlcjogc3RyaW5nO1xuICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVycy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaXQ6IGFueTtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRhZ2xpbmVzID0ge1xuICAgICdSaWNoaWVzdGUgZGVpIGNsaWVudGknOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJyxcbiAgICAnSSBtaWVpIG9yZGluaSc6ICdJIG1pZWkgb3JkaW5pJyxcbiAgICAnQXJjaGl2aW8nOiAnQXJjaGl2aW8gZGkgdHV0dGkgZ2xpIG9yZGluaSdcbiAgfTtcbiAgcHVibGljIHRhYnMgPSBbXG4gICAge25hbWU6ICdJIG1pZWkgb3JkaW5pJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICBdO1xuICBwdWJsaWMgY2F0ZWdvcmllcyA9IFtdO1xuICBwdWJsaWMgcGFnZURhdGE6IElPcmRlcltdID0gW107XG4gIHB1YmxpYyByZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNWZW5kb3IgPSBmYWxzZTtcbiAgcHVibGljIGVtcHR5TGlzdFRpdGxlID0gJydcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgYXV0aERhdGEgPSB7fTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIHRoaXMuYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgYXV0aERhdGEuYWNjb3VudF90eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdWRU5ET1InKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmVuZG9yID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1ZlbmRvcikge1xuICAgICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnSSBtaWVpIG9yZGluaScsIHNlbGVjdGVkOiBmYWxzZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICAgICAgICAgIF07XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdSaWNoaWVzdGUgZGVpIGNsaWVudGknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgIH1cblxuXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgbGV0IG9yZGVySW5kZXggPSAwO1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW5jZWxPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSA5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlYWN0aXZhdGVPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgaWYgKGFjdGlvbi5kYXRhLmlzTW9kaWZpZWQgPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSh0aGlzLnNlbGVjdFRhYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5wYXltZW50ID0ge2Ftb3VudDogYWN0aW9uLmRhdGEub3JkZXJQcmljZSwgY3VycmVuY3k6ICdldXInfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuYW1vdW50ID0gYWN0aW9uLmRhdGEub3JkZXJQcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuY3VycmVuY3kgPSAnZXVyJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRpbnVlT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0VGFiID0gcGFnZTtcbiAgICBsZXQgdGFiSW5kZXggPSAwO1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICh0YWIubmFtZSA9PT0gcGFnZSkge1xuICAgICAgICB0aGlzLnRhYnNbdGFiSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFic1t0YWJJbmRleF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRhYkluZGV4Kys7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYW1zID0gW107XG5cbiAgICBpZiAocGFnZSA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSAnTm9uIGNpIHNvbm8gb3JkaW5pIHJpY2hpZXN0aSBkYWkgY2xpZW50aSBwZXIgaWwgbW9tZW50bydcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdSRUNFSVZFRCd9KTtcbiAgICB9XG5cbiAgICBpZiAocGFnZSA9PT0gJ0kgbWllaSBvcmRpbmknKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gJ05vbiBjaSBzb25vIG9yZGluaSBlZmZldHR1YXRpJ1xuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ1JFUVVJUkVEJ30pO1xuICAgIH1cblxuICAgIGlmIChwYWdlID09PSAnQXJjaGl2aW8nKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gXCJMJ2FyY2hpdmlvIGRlZ2xpIG9yZGluaSBlIHZ1b3RhXCJcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdBUkNISVZFJ30pO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE9yZGVycyhwYXJhbXMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IGxpc3Qgb2Ygb3JkZXJzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucGFnZURhdGEgPSByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWdlRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLnRhZ2xpbmVzW3BhZ2VdKTtcbiAgICB9XG4gIH1cblxuICBkYXRlRm9ybWF0aW5nKGRhdGUpIHtcbiAgICBsZXQgcmV0dXJuRGF0ZSA9ICcnO1xuICAgIGlmIChkYXRlICE9PSAnbm93Jykge1xuICAgICAgbGV0IGRhdGVTdHJpbmcgPSBkYXRlLnN1YnN0cmluZygwLCBkYXRlLmxlbmd0aCAtIDUpO1xuICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc3BsaXQoJ1QnKTtcbiAgICAgIGxldCBkYXRlQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMF0uc3BsaXQoJy0nKTtcbiAgICAgIGxldCBob3VyQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMV0uc3BsaXQoJzonKTtcbiAgICAgIHJldHVybkRhdGUgPSBkYXRlQ29tcG9uZW50c1syXSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlQ29tcG9uZW50c1sxXS0xXSArICcgJyArIGRhdGVDb21wb25lbnRzWzBdICsgJyAnICsgaG91ckNvbXBvbmVudHNbMF0gKyAnOicgKyBob3VyQ29tcG9uZW50c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgbW9udGggPSAxICsgY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBob3VycyA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCk7XG4gICAgICBsZXQgbWludXRlcyA9IGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGxldCBzZWNvbmRzID0gY3VycmVudERhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgcmV0dXJuRGF0ZSArPSB5ZWFyO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtb250aCA+IDkgPyAnLScgKyBtb250aCA6ICctMCcgKyBtb250aDtcbiAgICAgIHJldHVybkRhdGUgKz0gZGF5ID4gOSA/ICctJyArIGRheSA6ICctMCcgKyBkYXk7XG4gICAgICByZXR1cm5EYXRlICs9IGhvdXJzID4gOSA/ICdUJyArIGhvdXJzIDogJ1QwJyArIGhvdXJzO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtaW51dGVzID4gOSA/ICc6JyArIG1pbnV0ZXMgOiAnOjAnICsgbWludXRlcztcbiAgICAgIHJldHVybkRhdGUgKz0gc2Vjb25kcyA+IDkgPyAnOicgKyBzZWNvbmRzICArICcuMDAwWicgOiAnOjAnICsgc2Vjb25kcyArICcuMDAwWic7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5EYXRlO1xuICB9XG5cbiAgZGF0ZUNvbXBhcmUoZGF0ZTEsIGRhdGUyKSB7XG4gICAgbGV0IGRhdGUxT2JqID0gRGF0ZS5wYXJzZShkYXRlMSk7XG4gICAgbGV0IGRhdGUyT2JqID0gRGF0ZS5wYXJzZShkYXRlMik7XG4gICAgaWYgKGRhdGUxT2JqID4gZGF0ZTJPYmopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXRlbXNGb3JtYXRpbmcoaXRlbXMpIHtcbiAgICBsZXQgcmV0dXJuUHJvZHVjdHMgPSBbXTtcbiAgICBsZXQgcHJvZHVjdHMgPSBpdGVtcy5zcGxpdCgnfHwnKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICBsZXQgcHJvZHVjdENvbXBvbmVudHMgPSBwcm9kdWN0LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocHJvZHVjdENvbXBvbmVudHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5Qcm9kdWN0cy5wdXNoKHtuYW1lOiBwcm9kdWN0Q29tcG9uZW50c1swXSwgaXRlbXM6IHByb2R1Y3RDb21wb25lbnRzWzFdfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblByb2R1Y3RzO1xuICB9XG5cbiAgY29uZmlybU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY2FuY2VsT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgcmVhY3RpdmF0ZU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAncmVhY3RpdmF0ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNvbXBsZXRhT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdhZGRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICBlZGl0T3JkZXIoaWQsIHBheW1lbnQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlZGl0UHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnR9fSk7XG4gIH1cbiAgY29udGludWVPcmRlcihpZCwgcGF5bWVudCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnQsIGluZm9ybWF0aW9uOiAnMTIw4oKsICsgNi424oKsID0gMTI2LjbigqwnfX0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlckRhdGEge1xuICBmdWxsbmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgc3RyZWV0Pzogc3RyaW5nO1xuICBjaXR5Pzogc3RyaW5nO1xuICBwb3N0YWxfY29kZT86IG51bWJlcjtcbiAgcHJvdmluY2U/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcbiAgcHVibGljIGRlbHRhOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgdGFicyA9IFtcbiAgICB7bmFtZTogJ0dlbmVyYWxpJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdzZXR0aW5ncyd9LFxuICAgIC8vIHtuYW1lOiAnTWV0b2RvIGRpIFBhZ2FtZW50bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncGF5bWVudCd9LFxuICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICB7bmFtZTogJ1ByaXZhY3kgUG9saWN5Jywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwcml2YWN5J30sXG4gICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgXTtcblxuICBwdWJsaWMgdXNlckRhdGE6IElVc2VyRGF0YSA9IHtcbiAgICBmdWxsbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lX251bWJlcjogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJydcbiAgfTtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkRXJyb3IgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiBmYWxzZSxcbiAgICBwYXNzd29yZENvbmZpcm06IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBjaGFuZ2VQYXNzd29yZERhdGEgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiAnJyxcbiAgICBuZXdQYXNzd29yZDogJycsXG4gICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICB9O1xuICBwdWJsaWMgZm9ybUVycm9yOiBib29sZWFufHt0aXRsZT86IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nfSA9IGZhbHNlO1xuICBwdWJsaWMgY2FyZHMgPSBbXTtcbiAgcHVibGljIGRlZmF1bHRDYXJkID0gJyc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsXG4gICAgICBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSxcbiAgICAgIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSxcbiAgICAgIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lID0gYXV0aERhdGEuZnVsbG5hbWU7XG4gICAgICAgIHRoaXMudXNlckRhdGEuZW1haWwgPSBhdXRoRGF0YS5lbWFpbDtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnSWwgbWlvIGFjY291bnQnKTtcblxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RUYWIgPSBwYXJhbXNbJ3BhZ2UnXTtcbiAgICAgIC8qaWYgKHBhcmFtc1sncGFnZSddID09PSdwYXltZW50Jykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ01ldG9kbyBkaSBwYWdhbWVudG8nKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5nZXRDYXJkcygpXG4gICAgICAgICAgICAudGhlbigoY2FyZHMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGNhcmRzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmQgPSBjYXJkcy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgICBjYXJkcy5zb3VyY2VzLmRhdGEuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZERhdGEpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgU3RhcmJvb2sgYWNjb3VudCBkbyBub3QgaGF2ZSBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB5b3UgYWRkIGEgbmV3IGNhcmQsIHdpbGwgYmUgY3JlYXRlZCBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZSB0aGUgU3RhcmJvb2sgYWNjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCd9fSk7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0pXG4gICAgICB9Ki9cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0nc2V0dGluZ3MnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnSW5mb3JtYXppb25pIGRlbCBtaW8gYWNjb3VudCcpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUoKVxuICAgICAgICAgICAgLnRoZW4oKHByb2ZpbGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCB1c2VyIHByb2ZpbGUnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5mdWxsbmFtZSA9IHByb2ZpbGUucmVzdWx0LnByb2ZpbGUuZnVsbG5hbWU7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuZW1haWwgPSBwcm9maWxlLnJlc3VsdC5lbWFpbDtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5waG9uZV9udW1iZXIgPSBwcm9maWxlLnJlc3VsdC5waG9uZV9udW1iZXI7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuc3RyZWV0ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5zdHJlZXQ7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuY2l0eSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MuY2l0eTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5wb3N0YWxfY29kZSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MucG9zdGFsX2NvZGU7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucHJvdmluY2UgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmNvdW50cnkgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQnfX0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0nY29uZGl0aW9ucycpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdUZXJtaW5pIGUgY29uZGl6aW9uaSBk4oCZdXRpbGl6em8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdUZXJtaW5pIGUgY29uZGl6aW9uaSBk4oCZdXRpbGl6em8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE1ldGFFbGVtKCdkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdwcml2YWN5Jykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnUHJpdmFjeSBQb2xpY3knKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE1ldGFFbGVtKCdkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnUHJpdmFjeSBQb2xpY3knKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J2hlbHAnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnQXNzaXN0ZW56YScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE1ldGFFbGVtKCdkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnQXNzaXN0ZW56YScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtc1sncGFnZSddKTtcbiAgICB9KTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBvcHVwc1NlcnZpY2UuZ2V0UG9wdXBSZXNwb25zZSQuc3Vic2NyaWJlKGFjdGlvbiA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICduZXdDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaChhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbmV3Q2FyZEVycm9yJzpcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzdGFydE5ld0NhcmQnOlxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2FyZEVkaXRlZCc6XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhcmQuaWQgPT09IGFjdGlvbi5kYXRhLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc1tpXSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGUoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucHJvZmlsZVNlcnZpY2UudXBkYXRlUHJvZmlsZSh0aGlzLnVzZXJEYXRhKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnVXBkYXRlIHVzZXIgcHJvZmlsZScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGxldCBwcm9maWxlRGF0YSA9IHt9O1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLnByb2ZpbGUuZnVsbG5hbWUgPSB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5waG9uZV9udW1iZXIgPSB0aGlzLnVzZXJEYXRhLnBob25lX251bWJlcjtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5zdHJlZXQgPSB0aGlzLnVzZXJEYXRhLnN0cmVldDtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5jaXR5ID0gdGhpcy51c2VyRGF0YS5jaXR5O1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLnBvc3RhbF9jb2RlID0gdGhpcy51c2VyRGF0YS5wb3N0YWxfY29kZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5wcm92aW5jZSA9IHRoaXMudXNlckRhdGEucHJvdmluY2U7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MuY291bnRyeSA9IHRoaXMudXNlckRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgcHJvZmlsZURhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KHByb2ZpbGVEYXRhKTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIYWkgYWdnaW9ybmF0byBsZSB0dWUgaW5mb3JtYXppb25pIGNvbiBzdWNjZXNzbyEnLFxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6ICdFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlclBhZ2UocGFnZSkge1xuICAgIHRoaXMuc2VsZWN0VGFiID0gcGFnZTtcbiAgfVxuXG4gIGdldFBvcHVwKHR5cGUpIHtcbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gdHlwZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9ICcnO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZERhdGEuY3VycmVudFBhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZERhdGEubmV3UGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRGF0YS5wYXNzd29yZENvbmZpcm0gPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjaGVja1Bhc3N3b3JkKG5ld1Bhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0pIHtcbiAgICBpZiAobmV3UGFzc3dvcmQgPT09IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEVycm9yLnBhc3N3b3JkQ29uZmlybSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRXJyb3IucGFzc3dvcmRDb25maXJtID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCwgZGVsdGEpIHtcbiAgICBsZXQgY2FsY3VsYXRlRGVsdGEgPSB0aGlzLmRlbHRhICsgZGVsdGE7XG4gICAgbGV0IG1lbnVTaXplID0gMDtcbiAgICBsZXQgYWxsTWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnQtbmF2aWdhdGUgPiBkaXYgPiBhJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBtZW51SXRlbTogYW55ID0gYWxsTWVudUl0ZW1zW2ldO1xuICAgICAgbWVudVNpemUgKz0gbWVudUl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgfVxuICAgIGxldCBtZW51QmxvY2tXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LW5hdmlnYXRlJykuY2xpZW50V2lkdGg7XG4gICAgbGV0IGFsbG93TWFyZ2luID0gKG1lbnVTaXplKSAtIG1lbnVCbG9ja1dpZHRoO1xuICAgIGlmIChhbGxvd01hcmdpbiA+PSAwKSB7XG4gICAgICBhbGxvd01hcmdpbiA9IC1hbGxvd01hcmdpbjtcbiAgICAgIGlmIChjYWxjdWxhdGVEZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPCBhbGxvd01hcmdpbikge1xuICAgICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQgJiYgYWxsb3dNYXJnaW4gIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSBhbGxvd01hcmdpbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWx0YSA9IGNhbGN1bGF0ZURlbHRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkTmV3Q2FyZCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdhZGRDYXJkJ30pO1xuICB9XG5cbiAgZm9ybWF0WWVhcih5ZWFyKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBmb3JtYXRlZFllYXIgPSAnJztcbiAgICBsZXQgeWVhckFycmF5ID0geWVhci50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICB5ZWFyQXJyYXkuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgZm9ybWF0ZWRZZWFyICs9IG51bTtcbiAgICAgIH1cbiAgICAgIGkrKztcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0ZWRZZWFyO1xuICB9XG5cbiAgZm9ybWF0Q3NzQ2xhc3MoYnJhbmQpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGJyYW5kID09PSAnVmlzYScpIHtcbiAgICAgIHJlc3VsdCA9ICd2aXNhJztcbiAgICB9XG4gICAgaWYgKGJyYW5kID09PSAnQW1lcmljYW4gRXhwcmVzcycpIHtcbiAgICAgIHJlc3VsdCA9ICdhbWV4JztcbiAgICB9XG4gICAgaWYgKGJyYW5kID09PSAnTWFzdGVyQ2FyZCcpIHtcbiAgICAgIHJlc3VsdCA9ICdtYXN0ZXJjYXJkJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNlbGVjdENhcmQoaWQpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wYXltZW50U2VydmljZS5zZWxlY3RDYXJkKGlkKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2VsZWN0aW5nIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkID0gc3RhdHVzLmRlZmF1bHRfc291cmNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQ2FyZChpZCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmRlbGV0ZUNhcmQoaWQpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdEZWxldGluZyBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcmQuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSArKztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaWQgPT09IHRoaXMuZGVmYXVsdENhcmQgJiYgdGhpcy5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgb3RoZXJDYXJkID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhcmQuaWQgIT09IGlkKSB7XG4gICAgICAgICAgICAgICAgb3RoZXJDYXJkID0gY2FyZC5pZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdENhcmQob3RoZXJDYXJkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBlZGl0Q2FyZChpZCkge1xuICAgIGxldCBjYXJkRGF0YSA9IHt9O1xuICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYoY2FyZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgY2FyZERhdGEgPSB7XG4gICAgICAgICAgaWQ6IGNhcmQuaWQsXG4gICAgICAgICAgYWRkcmVzc19jaXR5OiBjYXJkLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgICBhZGRyZXNzX2NvdW50cnk6IGNhcmQuYWRkcmVzc19jb3VudHJ5LFxuICAgICAgICAgIGFkZHJlc3NfbGluZTE6IGNhcmQuYWRkcmVzc19saW5lMSxcbiAgICAgICAgICBhZGRyZXNzX2xpbmUyOiBjYXJkLmFkZHJlc3NfbGluZTIsXG4gICAgICAgICAgYWRkcmVzc19zdGF0ZTogY2FyZC5hZGRyZXNzX3N0YXRlLFxuICAgICAgICAgIGFkZHJlc3NfemlwOiBjYXJkLmFkZHJlc3NfemlwLFxuICAgICAgICAgIGV4cF9tb250aDogY2FyZC5leHBfbW9udGgsXG4gICAgICAgICAgZXhwX3llYXI6IHRoaXMuZm9ybWF0WWVhcihjYXJkLmV4cF95ZWFyKSxcbiAgICAgICAgICBuYW1lOiBjYXJkLm5hbWUsXG4gICAgICAgICAgbnVtYmVyOiAnKioqKiAnICsgY2FyZC5sYXN0NCxcbiAgICAgICAgICBjdmM6ICcqKionXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZWRpdENhcmQnLCBkYXRhOiBjYXJkRGF0YX0pO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ291dCcsIGRhdGE6IHt9fSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hlYWRlcnM6IGhlYWRlcnN9O1xuICB9XG5cbiAgdXBkYXRlUHJvZmlsZSh1c2VyRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGZ1bGxuYW1lOiB1c2VyRGF0YS5mdWxsbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdXNlckRhdGEucGhvbmVfbnVtYmVyLFxuICAgICAgc3RyZWV0OiB1c2VyRGF0YS5zdHJlZXQsXG4gICAgICBjaXR5OiB1c2VyRGF0YS5jaXR5LFxuICAgICAgcG9zdGFsX2NvZGU6IHVzZXJEYXRhLnBvc3RhbF9jb2RlLFxuICAgICAgcHJvdmluY2U6IHVzZXJEYXRhLnByb3ZpbmNlLFxuICAgICAgY291bnRyeTogdXNlckRhdGEuY291bnRyeVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnbWUnLCBkYXRhLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRQcm9maWxlKCkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdtZScsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXG4gKi9cbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxuaW1wb3J0ICcuL19fd29ya2Fyb3VuZC5ub2RlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuLy8gY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODAgfHwgODA4MDtcbmNvbnN0IHBvcnQgPSA0MjAwOyBcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyogVGhlcmUgYXJlIGNvZGUgZnJvbSBvbGQgc2VydmVyICovXG4vLyBhcHAudXNlKCcvJywgcmVxdWlyZSgncmVkaXJlY3QtaHR0cHMnKSh7XG4vLyAgIGJvZHk6ICcnLFxuLy8gICBwb3J0OiA0NDMsXG4vLyAgIHRydXN0UHJveHk6IHRydWVcbi8vIH0pKVxuLy9cbi8vIGFwcC5hbGwoJy8qJywgZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55LCBuZXh0KSB7XG4vLyAgIGlmKCEvXnd3d1xcLi8udGVzdChyZXEuaGVhZGVycy5ob3N0KSkge1xuLy8gICAgIHJlcy5zdGF0dXMoMzAxKS5yZWRpcmVjdChyZXEucHJvdG9jb2wgKyAnOi8vd3d3LicgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLnVybClcbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXh0KClcbi8vICAgfVxuLy8gfSlcblxuXG4vKipcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcblxuLyoqXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxuICovXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcblxuLyoqXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlc1xuICovXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XG4gICAgcmVxLFxuICAgIHJlcyxcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxuICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcbiAgfSk7XG59XG5cbi8qKlxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXG4gKi9cbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XG59KTtcblxuLyoqXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXG4gKi9cblxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcbn0pO1xuXG5cbi8qIFRoZXJlIGFyZSBjb2RlIGZyb20gb2xkIHNlcnZlciAoYXBwLmpzKSAqL1xuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG5sZXQgb3B0aW9ucyA9IHtcbiAga2V5OiBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9jZXJ0L2tleS5wZW0nLCAndXRmOCcpLFxuICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9jZXJ0L3NlcnZlci5jcnQnLCAndXRmOCcpXG59O1xuLy8gaHR0cHMuY3JlYXRlU2VydmVyKG9wdGlvbnMsIGFwcCkubGlzdGVuKDQ0MywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgNDQzYCk7XG4vLyB9KTtcblxuLy8gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiXG4vKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IF9fY29yZV9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBwYXRjaCA9IGZhbHNlO1xuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbn1cblxuXG5cbmlmIChfX2NvbXBpbGVyX18gJiYgX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlciAmJiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3IpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxuaWYgKHBhdGNoKSB7XG4gICAgdmFyIF9fdW5pdmVyc2FsX18gPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciB8fCBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3I7XG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciB8fCBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyO1xufVxuXG4vLyBGaXggTWF0ZXJpYWwgU3VwcG9ydFxuZnVuY3Rpb24gdW5pdmVyc2FsTWF0ZXJpYWxTdXBwb3J0cyhldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gQm9vbGVhbih0aGlzLmlzQ3VzdG9tRXZlbnQoZXZlbnROYW1lKSk7IH1cbl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uSGFtbWVyR2VzdHVyZXNQbHVnaW4ucHJvdG90eXBlLnN1cHBvcnRzID0gdW5pdmVyc2FsTWF0ZXJpYWxTdXBwb3J0cztcbi8vIEVuZCBGaXggTWF0ZXJpYWwgU3VwcG9ydFxuXG4vLyBGaXggVW5pdmVyc2FsIFN0eWxlXG5pbXBvcnQgeyBOb2RlRG9tUm9vdFJlbmRlcmVyLCBOb2RlRG9tUmVuZGVyZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwvbm9kZSc7XG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnRGaXgoY29tcG9uZW50UHJvdG86IGFueSkge1xuICByZXR1cm4gbmV3IE5vZGVEb21SZW5kZXJlcih0aGlzLCBjb21wb25lbnRQcm90bywgdGhpcy5fYW5pbWF0aW9uRHJpdmVyKTtcbn1cbk5vZGVEb21Sb290UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudEZpeDtcbi8vIEVuZCBGaXggVW5pdmVyc2FsIFN0eWxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX193b3JrYXJvdW5kLm5vZGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBFdmVudCwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS9ob21lLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgZ2E6IEZ1bmN0aW9uO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHRhZ2xpbmU6IHN0cmluZztcbiAgcHVibGljIGF1dGg7XG4gIHB1YmxpYyBhY3RpdmVQb3B1cCA9ICcnO1xuICBwdWJsaWMgcG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBuYXZiYXJTdGF0ZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpc0ZpbmRGaWVsZCA9IGZhbHNlO1xuICBwdWJsaWMgc3BpbmVyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgY2xlYXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBmaW5kVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGlzU2VhcmNoZWQgPSBmYWxzZTtcbiAgcHVibGljIGJyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhdXRoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIGxvYWRpbmdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvciAocHVibGljIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGF1dGhTZXJ2aWNzOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQ6RXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICBnYSgnc2VuZCcsICdwYWdldmlldycsIGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3Q7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFJvdXRlLmNoaWxkcmVuWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3VycmVudFJvdXRlID0gY3VycmVudFJvdXRlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdpc0ZpbmRGaWVsZCcgaW4gY3VycmVudFJvdXRlLnNuYXBzaG90LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRGaWVsZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzRmluZEZpZWxkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRMb2dpblBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luJ30pO1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgZ2V0UmVnaXN0cmF0aW9uUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAncmVnaXN0cmF0aW9uJ30pO1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoJycpO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLm5hdmJhclN0YXRlID0gIXRoaXMubmF2YmFyU3RhdGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF1dGggPSB0aGlzLmF1dGhTZXJ2aWNzLmF1dGhJbml0KCk7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldE1lc3NhZ2UkLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgdGhpcy50YWdsaW5lID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5maW5kVmFsdWUgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2VhcmNoZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRoU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRQZXJzb25hbE1lbnUkLnN1YnNjcmliZShhdXRoID0+IHtcbiAgICAgICAgaWYgKGF1dGggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMubG9hZGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0TG9hZGluZ1N0YXR1cyQuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgLy8gICB0aGlzLmlzTG9hZGluZyA9IHN0YXR1cztcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRhYk1lbnUodG9nZ2xlTWVudSA9IGZhbHNlKSB7XG4gICAgaWYgKHRvZ2dsZU1lbnUpIHtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUFjdGl2ZVRhYihmYWxzZSk7XG4gIH1cblxuICBzZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLmlzU2VhcmNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmVyVmlldyA9IHRydWU7XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlYXJjaChldmVudC5xdWVyeSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzLnJlc3VsdDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgIH0pXG4gIH1cblxuICBzZWxlY3RSZXN1bHQoc2VydmljZXNPYmopIHtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlbmRTZXJ2aWNlcyhzZXJ2aWNlc09iaik7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLm5hdmJhclN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5maW5kVmFsdWUgPSAnJztcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlcnZpY2VzJywgc2VydmljZXNPYmouX2lkXSk7XG4gIH1cblxuICBjbGVhclNlYXJjaEZvcm0oKSB7XG4gICAgdGhpcy5maW5kVmFsdWUgPSAnJztcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5hdXRoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIHRoaXMubG9hZGluZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcbiAqIFRoaXMgZmlsZSBhbmQgYG1haW4uYnJvd3Nlci50c2AgYXJlIGlkZW50aWNhbCwgYXQgdGhlIG1vbWVudCghKVxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxuICogWW91IGNhbiBhbHNvIGp1c3QgaGF2ZSAxIGZpbGUsIHRoYXQgaXMgaW1wb3J0ZWQgaW50byBib3RoXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xuICovXG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlLCBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIGltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUsIGlzQnJvd3NlciwgTm9kZUh0dHBNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IEF1dG9Db21wbGV0ZU1vZHVsZSwgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmcyLWNsaWNrLW91dHNpZGUnO1xuLy8gaW1wb3J0IHsgTWFzb25yeU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1hc29ucnknO1xuLy8gaW1wb3J0IHsgTmdiTW9kdWxlLCBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS9ob21lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZW8uc2VydmljZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci9vcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwc0NvbXBvbmVudCB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvbmVQaXBlIH0gZnJvbSAnLi9waXBlcy9waG9uZS5waXBlJztcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwaXJ5UGlwZSB9IGZyb20gJy4vcGlwZXMvZXhwaXJ5LnBpcGUnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjZWJvb2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudCc7XG5cblxuLy8gaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwL2FwcC5yb3V0aW5nJztcblxuLy8gZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbi8vICAgb3ZlcnJpZGVzID0gPGFueT4ge1xuLy8gICAgICdzd2lwZSc6IHt2ZWxvY2l0eTogMC40LCB0aHJlc2hvbGQ6IDIwfVxuLy8gICB9O1xuLy8gfVxuXG5sZXQgaW1wb3J0cyA9IFtcbiAgTm9kZUh0dHBNb2R1bGUsXG4gIFVuaXZlcnNhbE1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIC8vIEJyb3dzZXJNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIC8vIE1hc29ucnlNb2R1bGUsXG5cbiAgUm91dGVyTW9kdWxlLFxuICByb3V0aW5nLFxuICAvLyBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAvLyBBdXRvQ29tcGxldGVNb2R1bGUsXG4gIC8vIENhbGVuZGFyTW9kdWxlLFxuICBDbGlja091dHNpZGVNb2R1bGVcbl07XG5sZXQgZGVjbGFyYXRpb25zID0gW1xuICBBcHBDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIE9yZGVyQ29tcG9uZW50LFxuICBPcmRlcnNDb21wb25lbnQsXG4gIFByb2ZpbGVDb21wb25lbnQsXG4gIFBvcHVwc0NvbXBvbmVudCxcbiAgUGhvbmVQaXBlLFxuICBMYW5kaW5nQ29tcG9uZW50LFxuICBFeHBpcnlQaXBlLFxuICBMb2FkaW5nQ29tcG9uZW50LFxuICBGYWNlYm9va0NvbXBvbmVudFxuXTtcblxuaWYgKGlzQnJvd3Nlcikge1xuICBsZXQgQ2FsZW5kYXJNb2R1bGUgPSByZXF1aXJlKCdwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXInKS5DYWxlbmRhck1vZHVsZTtcbiAgaW1wb3J0cy5wdXNoKENhbGVuZGFyTW9kdWxlKTtcbiAgbGV0IEF1dG9Db21wbGV0ZU1vZHVsZSA9IHJlcXVpcmUoJ3ByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJykuQXV0b0NvbXBsZXRlTW9kdWxlO1xuICBpbXBvcnRzLnB1c2goQXV0b0NvbXBsZXRlTW9kdWxlKTtcbn1cbmVsc2Uge1xuICBsZXQgQ2FsZW5kYXJNb2NrQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQnKS5DYWxlbmRhck1vY2tDb21wb25lbnQ7XG4gIGRlY2xhcmF0aW9ucy5wdXNoKENhbGVuZGFyTW9ja0NvbXBvbmVudCk7XG4gIGxldCBBdXRvQ29tcGxldGVNb2NrTW9kdWxlID0gcmVxdWlyZSgnLi9tb2Nrcy9hdXRvY29tcGxldGUuY29tcG9uZW50JykuQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudDtcbiAgZGVjbGFyYXRpb25zLnB1c2goQXV0b0NvbXBsZXRlTW9ja01vZHVsZSk7XG59XG5cbi8qKlxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xuICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogaW1wb3J0cyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8ge3Byb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBmb3J3YXJkUmVmKCgpID0+IE9yZGVyQ29tcG9uZW50KX0sXG4gICAgLy8ge1xuICAgIC8vICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxuICAgIC8vICAgdXNlQ2xhc3M6IEhhbW1lckNvbmZpZ1xuICAgIC8vIH0sXG4gICAgSG9tZVNlcnZpY2UsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgT3JkZXJTZXJ2aWNlLFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIE9yZGVyc1NlcnZpY2UsXG4gICAgUG9wdXBzU2VydmljZSxcbiAgICBQYXltZW50U2VydmljZSxcbiAgICBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIFNlb1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2Vib29rQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NlcnZpY2VzLzppZCcsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICAgIGRhdGE6IHtpc0ZpbmRGaWVsZDogdHJ1ZX1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdvcmRlcnMnLFxuICAgIGNvbXBvbmVudDogT3JkZXJzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZS86cGFnZScsXG4gICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZmFjZWJvb2snLFxuICAgIGNvbXBvbmVudDogRmFjZWJvb2tDb21wb25lbnRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYXV0b0NvbXBsZXRlJyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdzdWdnZXN0aW9ucycpIHN1Z2dlc3Rpb25zOiBhbnlbXTtcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tb2Nrcy9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhck1vY2tDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+JyxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdsb2NhbGUnKSBsb2NhbGU6IGFueTtcbiAgQElucHV0KCdtaW5EYXRlJykgbWluRGF0ZTogYW55O1xuICBASW5wdXQoJ21heERhdGUnKSBtYXhEYXRlOiBhbnk7XG4gIHB1YmxpYyBvblNlbGVjdDogYW55O1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21vY2tzL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UsIElBZGRyZXNzIH0gZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgb3JkZXJEYXRhO1xuICBASW5wdXQoJ29yZGVySXNGdWxsJykgb3JkZXJJc0Z1bGw7XG5cbiAgcHVibGljIGl0OiBhbnk7XG4gIHB1YmxpYyB0aW1lUGlja2VyID0gW107XG4gIHB1YmxpYyBtb250aHM6IHt9O1xuICBwdWJsaWMgdGltZVBpY2tlcklzU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgYWRkcmVzc2VzID0gW107XG4gIHB1YmxpYyBhZGRyZXNzID0gJyc7XG4gIHB1YmxpYyBzZWxlY3RlZEFkZHJlc3M6IElBZGRyZXNzID0ge1xuICAgIHN0cmVldDogJycsXG4gICAgc3RyZWV0X251bWJlcjogbnVsbCxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJycsXG4gICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgaXNGdWxsOiBmYWxzZSxcbiAgICBmb3JtYXR0ZWRBZGRyZXNzOiAnJ1xuICB9O1xuICBwdWJsaWMgaXNBZGRyZXNzT25lID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICAvLyBwdWJsaWMgaXNFbmFibGUgPSB0cnVlO1xuICBwdWJsaWMgT3JkZXIgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgZGVsaXZlcnlfZGV0YWlsczogW10sXG4gICAgZGVsaXZlcnlfZGVzY3JpcHRpb246ICcnLFxuICAgIGFwcGxpY2FudF9mdWxsbmFtZTogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9lbWFpbDogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9waG9uZTogJ25vbmUnLFxuICAgIGRlbGl2ZXJ5X2FkZHJlc3M6ICcnLFxuICAgIGRhdGU6IG51bGwsXG4gICAgdGltZTogJycsXG4gICAgZGVsaXZlcnlfZGF0ZTogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnLFxuICAgIHBheW1lbnQ6IHthbW91bnQ6IDAsIGN1cnJlbmN5OiAnJ31cbiAgfTtcbiAgcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDI0KjIxKSAqIDYwICogNjAgKiAxMDAwKTtcbiAgcHVibGljIHN1Ym1pdE9yZGVyID0gZmFsc2U7XG4gIHB1YmxpYyBvcmRlckZvcm06IGFueTtcbiAgcHVibGljIGlzTW9iaWxlQ2FsZW5kYXI6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgbWF4T3JkZXJCbG9ja1NpemU6IG51bWJlcnxzdHJpbmcgPSAnYXV0byc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGJyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gIHB1YmxpYyBmaW5hbFByaWNlID0gMDtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXIucHVzaCgnMDg6MDAnLCAnMDg6MzAnLCAnMDk6MDAnLCAnMDk6MzAnLCAnMTA6MDAnLCAnMTA6MzAnLCAnMTE6MDAnLCAnMTQ6MDAnLCAnMTQ6MzAnLCAnMTU6MDAnKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAvLyAgIGlmIChpID4gNyAmJiBpIDwgMTUpIHtcbiAgICAvLyAgICAgaWYgKGkgPiA5KSB7XG4gICAgLy8gICAgICAgdGhpcy50aW1lUGlja2VyLnB1c2goaSArICc6MDAnLCBpICsgJzozMCcpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMudGltZVBpY2tlci5wdXNoKCcwJyArIGkgKyAnOjAwJywgJzAnICsgaSArICc6MzAnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLm1vbnRocyA9IHtcbiAgICAgIDE6ICdHZW5uYWlvJyxcbiAgICAgIDI6ICdGZWJicmFpbycsXG4gICAgICAzOiAnTWFyem8nLFxuICAgICAgNDogJ0FwcmlsZScsXG4gICAgICA1OiAnTWFnZ2lvJyxcbiAgICAgIDY6ICdHaXVnbm8nLFxuICAgICAgNzogJ0x1Z2xpbycsXG4gICAgICA4OiAnQWdvc3RvJyxcbiAgICAgIDk6ICdTZXR0ZW1icmUnLFxuICAgICAgMTA6ICdPdHRvYnJlJyxcbiAgICAgIDExOiAnTm92ZW1icmUnLFxuICAgICAgMTI6ICdEaWNlbWJyZSdcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlczogJyArIHRoaXMuZGVmYXVsdFNlcnZpY2VzLnRpdGxlKTtcblxuICB9XG5cbiAgdG9nZ2xlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSAhdGhpcy50aW1lUGlja2VySXNTaG93O1xuICB9XG5cbiAgb3BlblRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFRpbWUodGltZSkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgdGltZSd9KTtcbiAgICB0aGlzLk9yZGVyLnRpbWUgPSB0aW1lO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzKGV2ZW50KSB7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDIpIHtcbiAgICAgIHRoaXMub3JkZXJTZXJ2aWNlLmdldEFkZHJlc3NlcyhldmVudC5xdWVyeSlcbiAgICAgICAgLnRoZW4oKGFkZHJlc3NlcykgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gW107XG4gICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBhZGRyZXNzZXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBZGRyZXNzKHZhbHVlKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCBhZGRyZXNzJ30pO1xuICAgIGlmICh2YWx1ZS5pc0Z1bGwpIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IHZhbHVlO1xuICB9XG5cbiAgbW9kaWZ5QWRkcmVzcygpIHtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gICAgLy8gdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICB9XG5cbiAgc2hvd0NvbmZpcm1hdGlvbigpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnc3RhcnQnfSk7XG4gICAgdGhpcy5zdWJtaXRPcmRlciA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG5cbiAgICB0aGlzLk9yZGVyLnN0cmVldCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldDtcbiAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXRfbnVtYmVyO1xuICAgIHRoaXMuT3JkZXIuY2l0eSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNpdHk7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5wcm92aW5jZTtcbiAgICB0aGlzLk9yZGVyLmNvdW50cnkgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jb3VudHJ5O1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY291bnRyeV9jb2RlO1xuICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgdGhpcy5hZGRyZXNzID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0ICsgJywgJyArIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldF9udW1iZXIgKyAnLCAnICsgdGhpcy5zZWxlY3RlZEFkZHJlc3MuY2l0eTtcblxuICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAgIC8vIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVmVyc2lvbiB3aXRoIHJlcXVlc3RpbmcgYWRkcmVzcyBhZnRlciBjbGljayAnQ3JlYXRlIGFuIG9yZGVyJyBidXR0b24gLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm9yZGVyU2VydmljZS5nZXRBZGRyZXNzZXModGhpcy5hZGRyZXNzKVxuICAgIC8vICAgICAudGhlbigoYWRkcmVzczogSUFkZHJlc3NbXSkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMSkge1xuICAgIC8vICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gYWRkcmVzcykge1xuICAgIC8vICAgICAgICAgICB2YXIgYWRkciA9IGFkZHJlc3NbaW5kZXhdO1xuICAgIC8vICAgICAgICAgICB2YXIgY2l0eV90b19tYXRjaCA9IG5ldyBSZWdFeHAoYWRkci5jaXR5LCAnaScpXG4gICAgLy8gICAgICAgICAgIHZhciBzdHJlZXRfbnVtYmVyX3RvX21hdGNoID0gbmV3IFJlZ0V4cChTdHJpbmcoYWRkci5zdHJlZXRfbnVtYmVyKSwgJ2knKVxuICAgIC8vICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzLm1hdGNoKGNpdHlfdG9fbWF0Y2gpICYmIHRoaXMuYWRkcmVzcy5tYXRjaChzdHJlZXRfbnVtYmVyX3RvX21hdGNoKSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldCA9IGFkZHIuc3RyZWV0O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9IGFkZHIuc3RyZWV0X251bWJlcjtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyLmNpdHk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IGFkZHIucG9zdGFsX2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wcm92aW5jZSA9IGFkZHIucHJvdmluY2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkci5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gYWRkci5jb3VudHJ5X2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gYWRkci5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkci5zdHJlZXQgKyAnLCAnICsgYWRkci5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHIuY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93UHJldmlld09yZGVyKClcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSBlbHNlIGlmICgwIGluIGFkZHJlc3MpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0ID0gYWRkcmVzc1swXS5zdHJlZXQ7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSBhZGRyZXNzWzBdLnN0cmVldF9udW1iZXI7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyZXNzWzBdLmNpdHk7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gYWRkcmVzc1swXS5wb3N0YWxfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSBhZGRyZXNzWzBdLnByb3ZpbmNlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkcmVzc1swXS5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSBhZGRyZXNzWzBdLmNvdW50cnlfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMF0uZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5zdHJlZXQgKyAnLCAnICsgYWRkcmVzc1swXS5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHJlc3NbMF0uY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgLy8gdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpXG4gICAgLy9cbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gIH1cblxuICBzaG93UHJldmlld09yZGVyKCkge1xuICAgIGlmICh0aGlzLk9yZGVyLmRhdGUgJiYgdGhpcy5vcmRlcklzRnVsbCAmJiB0aGlzLmlzQWRkcmVzc0Z1bGwgJiYgdGhpcy5vcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IDw9IHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IG9yZGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIGRhdGU6IGRheSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldICsgJyAnICsgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB0aW1lOiB0aGlzLk9yZGVyLnRpbWUsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuT3JkZXIuc3RyZWV0ICsgJywgJyArIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciArICcsICcgKyB0aGlzLk9yZGVyLmNpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW5Gcm9tT3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb259fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuT3JkZXIuZGF0ZSk7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgY29ycmVjdE1vbnRoID0gMSArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gY29ycmVjdE1vbnRoID4gOSA/IGNvcnJlY3RNb250aCA6ICcwJyArIGNvcnJlY3RNb250aDtcblxuICAgICAgICBsZXQgcXVlcnlQcmljZURhdGEgPSB7XG4gICAgICAgICAgc2VydmljZV9pZDogdGhpcy5vcmRlckRhdGEuc2VydmljZV9pZCxcbiAgICAgICAgICBjb3VudHJ5X2NvZGU6IHRoaXMuT3JkZXIuY291bnRyeV9jb2RlLFxuICAgICAgICAgIHBvc3RhbF9jb2RlOiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlLFxuICAgICAgICAgIHN0YXJ0X2RhdGU6IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF5ICsgJ1QnICsgJzA4OjAwJyArICc6MDAuMDAwWicsXG4gICAgICAgICAgYW1vdW50OiB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlLnRvU3RyaW5nKClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb24sIHF1ZXJ5UHJpY2U6IHF1ZXJ5UHJpY2VEYXRhfX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9yZGVyKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICBsZXQgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpO1xuICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogJzAnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgY29ycmVjdE1vbnRoID0gMSArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCBtb250aCA9IGNvcnJlY3RNb250aCA+IDkgPyBjb3JyZWN0TW9udGggOiAnMCcgKyBjb3JyZWN0TW9udGg7XG4gICAgICAvLyB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArICdUJyArIHRoaXMuT3JkZXIudGltZSArICc6MDAuMDAwWic7XG4gICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArICdUJyArICcwODowMCcgKyAnOjAwLjAwMFonO1xuICAgICAgdGhpcy5PcmRlci5zZXJ2aWNlX2lkID0gdGhpcy5vcmRlckRhdGEuc2VydmljZV9pZDtcbiAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscyA9IFt7XG4gICAgICAgIHRpdGxlOiB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlLFxuICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgIHR5cGU6ICdzZXJ2aWNlJ1xuICAgICAgfV07XG4gICAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcy5mb3JFYWNoKChvcmRlckNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmIChvcmRlckNhdGVnb3J5LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgLy8gdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSArICcgLSAnICsgb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICB0eXBlOiAnaXRlbSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAvLyB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lICsgJyAtICcgKyBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDogb3JkZXJDYXRlZ29yeS5vcHRpb24ucHJpY2UsXG4gICAgICAgICAgICB0eXBlOiAnaXRlbSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLk9yZGVyLnBheW1lbnQgPSB7XG4gICAgICAgIGFtb3VudDogdGhpcy5vcmRlckRhdGEudG90YWxQcmljZSxcbiAgICAgICAgY3VycmVuY3k6ICdldXInXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuT3JkZXIucGF5bWVudC5hbW91bnQgPSB0aGlzLmZpbmFsUHJpY2U7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5zYXZlT3JkZXIodGhpcy5PcmRlcilcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdmaW5pc2gnfSk7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2F2aW5nIG9yZGVyJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuZmluYWxQcmljZSA9IDA7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzID0gW107XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5PcmRlci50aW1lID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kYXRlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5zdWJtaXRPcmRlciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlckVuZCd9KTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyU2VydmljZS5tYWtlRXZlbnQoe3N0YXR1czogdHJ1ZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ2Vycm9yJ30pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBvciBub3Q6ICcrIGVycm9yKTtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDIpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnUGVyIGZhdm9yZSwgaW5zZXJpc2NpIHVuIG1ldG9kbyBkaSBwYWdhbWVudG8gcHJpbWEgZGkgcHJlbm90YXJlIHVuIHNlcnZpemlvJ319KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0lsIHNlcnZpemlvIHJpY2hpZXN0byBub24gw6ggYW5jb3JhIGRpc3BvbmliaWxlIGluIHF1ZXN0YSB6b25hLiBQZXIgZmF2b3JlIGNvbnRhdHRhY2kgbmVsbGEgc2V6aW9uZSBhc3Npc3RlbnphIGRpIFN0YXJib29rIHBlciByaWNoaWVkZXJlIGlsIHN1cHBvcnRvIG5lbGxhIHpvbmEgZGVzaWRlcmF0YS4nfX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAgZWxzZSB7XG4gICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogXCJDJ8OoIHN0YXRvIHVuIGVycm9yZSByaWd1YXJkbyBhbGxhIHJpY2hpZXN0YSBkZWwgb3JkaW5lLCByaWNhcmljYSBsYSBwYWdpbmEgZSByaXByb3ZhIGRpIG51b3ZvLlwifX0pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW4nfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdjb25maXJtJykge1xuICAgICAgICAgIHRoaXMuZmluYWxQcmljZSA9IGFjdGlvbi5kYXRhLnByaWNlO1xuICAgICAgICAgIHRoaXMuY3JlYXRlT3JkZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGF0ZSgpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IGRhdGUnfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4uLy4uL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHtGYWNlYm9va1NlcnZpY2UsIEZhY2Vib29rTG9naW5SZXNwb25zZX0gZnJvbSAnbmcyLWZhY2Vib29rLXNkayc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGxldCBTd2lwZXI6IGFueTtcbmRlY2xhcmUgY29uc3QgRkI6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGFuZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYW5kaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgLy8gcHJvdmlkZXJzOiBbRmFjZWJvb2tTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMYW5kaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNhcmRTdHlsZXMgPSB7MTogJzAuOTUnLCAyOiAnMC45NScsIDM6ICcwLjknfTtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBzZXJ2aWNlcyA9IFtdO1xuICBwdWJsaWMgc3BpbmVyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgY2xlYXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHN3aXBlcjogYW55O1xuICBwdWJsaWMgdGVzdFBhZ2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY3M6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBUTyBVU0UgRk9SIEEvQiBURVNUSU5HXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnRlc3RQYWdlID0gcGFyYW1zWydhY3Rpb24nXVxuICAgICAgLy8gY29uc29sZS5sb2coJ1BhcmFtZXRlcnM6ICcgKyBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVzdFBhZ2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdVbmEgY2l0dMOgIHNtYXJ0IGhhIGJpc29nbm8gZGkgc2Vydml6aSBzbWFydCcpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzKClcbiAgICAgICAgLnRoZW4oKHNlcnZpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzLnJlc3VsdDtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBmZWF0dXJlZCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuICBjYXJkSG92ZXIoaWQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ29uJykge1xuICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcxJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlkID09PSAzKSB7XG4gICAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMC45JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMC45NSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5zcGluZXJWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VhcmNoKGV2ZW50LnF1ZXJ5KVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NlYXJjaCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzLnJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgICB9KVxuICB9XG5cbiAgc2VsZWN0UmVzdWx0KHNlcnZpY2VzT2JqKSB7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZW5kU2VydmljZXMoc2VydmljZXNPYmopO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VydmljZXMnLCBzZXJ2aWNlc09iai50aXRsZV0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICB9XG5cbiAgY2FsbFRvQWN0aW9uTG9naW5XaXRoRmFjZWJvb2soKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J0xvZ2luJywgYWN0aW9uOiAnbG9naW4gd2l0aCBmYWNlYm9vaycsIGxhYmVsOiAnQS9CIFRlc3QgQ2FtcGFpbid9KTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgucm91bmQoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIDIpIC0gMjg1KTtcbiAgICAgIGxldCBmYWNlYm9va1BvcHVwID0gd2luZG93Lm9wZW4oXG4gICAgICAgIC8vICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdjIuOC9kaWFsb2cvb2F1dGg/Y2xpZW50X2lkPTExMDg0NjEzMjU5MDcyNzcmcmVzcG9uc2VfdHlwZT10b2tlbiZzY29wZT1lbWFpbCxwdWJsaWNfcHJvZmlsZSZyZWRpcmVjdF91cmk9aHR0cHM6Ly93d3cuc3RhcmJvb2suY28vZmFjZWJvb2snLFxuICAgICAgICAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3YyLjgvZGlhbG9nL29hdXRoP2NsaWVudF9pZD0xMTA4NDYxMzI1OTA3Mjc3JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2NvcGU9ZW1haWwscHVibGljX3Byb2ZpbGUmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9mYWNlYm9vaycsXG4gICAgICAgICAgJ19ibGFuaycsXG4gICAgICAgICAgJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxsZWZ0PScgKyBsZWZ0ICsgJywgdG9wPTEwMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyk7XG4gICAgICB0aGlzLmNoZWNrQWNjZXNzVG9rZW4oZmFjZWJvb2tQb3B1cCwgMSk7XG4gICAgfVxuICB9XG4gIGNhbGxUb0FjdGlvblJlZ2lzdGVyQ29tcGFueSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVnaXN0ZXIgY29tcGFueScpO1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ3JlZ2lzdGVyQ29tcGFueSd9KTtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonTGFuZGluZyBwYWdlIEEvQiB0ZXN0cycsIGFjdGlvbjogJ0NUQScsIGxhYmVsOiAncmVnaXN0ZXIgY29tcGFueSd9KTtcbiAgfVxuICBjYWxsVG9BY3Rpb25TaGFyZVRvRWFybigpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hhcmUgdG8gZWFybicpO1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidMYW5kaW5nIHBhZ2UgQS9CIHRlc3RzJywgYWN0aW9uOiAnQ1RBJywgbGFiZWw6ICdzaGFyZSB0byBlYXJuJ30pO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5yb3VuZCgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgLSAyODUpO1xuXG4gICAgICBsZXQgc2hhcmVsaW5rID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocCc7XG4gICAgICBsZXQgdXJsVG9TaGFyZSA9ICdodHRwczovL3d3dy5zdGFyYm9vay5jbyc7XG4gICAgICBsZXQgbmFtZSA9IFwiU3RhcmJvb2sgfCBQcmVub3RhIHNlcnZpemkgcHJvZmVzc2lvbmFsaVwiO1xuICAgICAgbGV0IGNhcHRpb24gPSAnU3RhcmJvb2snO1xuICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJ1ByZXZlbnRpdmkgZGlyZXR0aT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkuIFB1b2kgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laSBzZW56YSBpbCBiaXNvZ25vIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEuJztcblxuICAgICAgbGV0IGZhY2Vib29rUG9wdXAgPSB3aW5kb3cub3BlbihzaGFyZWxpbmsgKyBcIj91PVwiICsgZW5jb2RlVVJJKHVybFRvU2hhcmUpICsgLypcIiZuYW1lPVwiICsgbmFtZSArKi8gXCImY2FwdGlvbj1cIiArIGVuY29kZVVSSShjYXB0aW9uKSArIFwiJmRlc2NyaXB0aW9uPVwiICsgZW5jb2RlVVJJKGRlc2NyaXB0aW9uKSxcbiAgICAgICAgJ19ibGFuaycsICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsbGVmdD0nICsgbGVmdCArICcsIHRvcD0xMDAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycpO1xuICAgICAgLy8gdGhpcy5jaGVja0FjY2Vzc1Rva2VuKGZhY2Vib29rUG9wdXAsIDEpO1xuICAgIH1cblxuICAgIC8vIEZCLnVpKHtcbiAgICAvLyAgIG1ldGhvZDogJ2ZlZWQnLFxuICAgIC8vICAgbW9iaWxlX2lmcmFtZTogdHJ1ZSxcbiAgICAvLyAgIG5hbWU6IFwiU3RhcmJvb2sgfCBQcmVub3RhIHNlcnZpemkgcHJvZmVzc2lvbmFsaVwiLFxuICAgIC8vICAgbGluazogXCJodHRwczovL3d3dy5zdGFyYm9vay5jb1wiLFxuICAgIC8vICAgY2FwdGlvbjogJ1N0YXJib29rJyxcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiAnUHJldmVudGl2aSBkaXJldHRpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaS4gUHVvaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpIHNlbnphIGlsIGJpc29nbm8gZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YS4nXG4gICAgLy8gfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgLy8gICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucG9zdF9pZCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnUG9zdCB3YXMgcHVibGlzaGVkLicpO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1Bvc3Qgd2FzIG5vdCBwdWJsaXNoZWQuJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgfVxuXG4gIGNoZWNrQWNjZXNzVG9rZW4oZmFjZWJvb2tXaW5kb3c6IFdpbmRvdywgY29udGV4dCkge1xuICAgIGlmIChmYWNlYm9va1dpbmRvdy5jbG9zZWQpIHtcbiAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYWNlYm9va190b2tlbicpO1xuICAgICAgLy8gbGV0IGF1dGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpO1xuXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLmZhY2Vib29rTG9naW4oYWNjZXNzVG9rZW4pXG4gICAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZighdXNlckRhdGEucGhvbmVfbnVtYmVyKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMucG9wdXBzU2VydmljZS5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgLy8gdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ29tcGxldGEgaWwgcHJvZmlsbyc7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQucHVzaCgnUGVyIHJlc3RhcmUgaW4gY29udGF0dG8gY29uIGkgcHJvZmVzc2lvbmlzdGkgaW5zZXJpc2NpIGlsIHN1byBudW1lcm8gZGkgdGVsZWZvbm8uJyk7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZmluaXNoUG9wdXBEYXRhLnR5cGUgPSAncGhvbmUnO1xuICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaFBvcHVwRGF0YS5kYXRhID0geyB1c2VyRGF0YTogdXNlckRhdGEgfTtcbiAgICAgICAgICAgICAgLy8gaWYgKHRoaXMubG9naW5EYXRhLnR5cGUgPT09ICdmcm9tT3JkZXInKSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5maW5pc2hQb3B1cERhdGEuZnJvbSA9ICdvcmRlcic7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXVzZXJEYXRhLmVtYWlsKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMucG9wdXBzU2VydmljZS5jbG9zZVBvcHVwKHRydWUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyB0aGlzLnBvcHVwc1NlcnZpY2UuY2xvc2VQb3B1cChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLnBvcHVwc1NlcnZpY2UuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgLy8gICB0aXRsZTogJ0Vycm9yZSEnLFxuICAgICAgICAgICAgLy8gICBtZXNzYWdlOiAnQXV0aG9yaXphdGlvbiBlcnJvcidcbiAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7c2VsZi5jaGVja0FjY2Vzc1Rva2VuKGZhY2Vib29rV2luZG93LCBjb250ZXh0ICsgMSl9LCAyMDApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdleHBpcnknXG59KVxuZXhwb3J0IGNsYXNzIEV4cGlyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL2V4cGlyeS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwaG9uZSdcbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHBob25lID0gJyc7XG4gICAgICBsZXQgbnVtSW5kZXggPSAwO1xuICAgICAgbGV0IHBob25lTnVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIHBob25lTnVtcy5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bUluZGV4ID09PSAyIHx8IG51bUluZGV4ID09PSA0IHx8IG51bUluZGV4ID09PSA2KSB7XG4gICAgICAgICAgcGhvbmUgKz0gbnVtICsgJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBob25lICs9IG51bTtcbiAgICAgICAgfVxuICAgICAgICBudW1JbmRleCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGhvbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL3Bob25lLnBpcGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wb3B1cHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wdXBzLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FkZENhcmRQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdsb2dpblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JlZ2lzdHJhdGlvblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JlY292ZXJ5UG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmluaXNoUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybVBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1GaW5pc2hQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtQWN0aW9uUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG5cbiAgICAvLyBBL0IgVGVzdHNcbiAgICB0cmlnZ2VyKCdyZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcblxuICAgIHRyaWdnZXIoJ3NoYWRvd1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGFkZENhcmRQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGxvZ2luUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyByZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIHJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBmaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcblxuICAvLyBBL0IgVGVzdHNcbiAgcHVibGljIHJlZ2lzdGVyQ29tcGFueVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuXG4gIHB1YmxpYyBzaGFkb3dTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBlbWFpbFBhdHRlcm47XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgYWRkQ2FyZERhdGEgPSB7XG4gICAgb2JqZWN0OiAnY2FyZCcsXG4gICAgZXhwX2RhdGU6ICcnLFxuICAgIGV4cF9tb250aDogbnVsbCxcbiAgICBleHBfeWVhcjogbnVsbCxcbiAgICBudW1iZXI6IG51bGwsXG4gICAgY3ZjOiAnJyxcbiAgICBuYW1lOiAnJywgICAgICAgICAgIC8vIE5vbWUgaW50ZXN0YXRhcmlvXG4gICAgYWRkcmVzc19saW5lMTogJycsICAvLyBWaWFcbiAgICBhZGRyZXNzX2xpbmUyOiAnJywgIC8vIE5yXG4gICAgYWRkcmVzc19jaXR5OiAnJywgICAvLyBDaXR0w6BcbiAgICBhZGRyZXNzX3ppcDogJycsICAgIC8vIENBUFxuICAgIGFkZHJlc3Nfc3RhdGU6ICcnLCAgLy8gUHJvdmluY2lhXG4gICAgYWRkcmVzc19jb3VudHJ5OiAnJyAvLyBQYWVzZVxuICB9O1xuICBwdWJsaWMgYWN0aW9uQ2FyZFR5cGUgPSAnYWRkJztcbiAgcHVibGljIGVkaXRlZENhcmRJZDogbnVtYmVyO1xuICBwdWJsaWMgYWRkQ2FyZEVycm9yID0ge1xuICAgIGV4cF9kYXRlOiBmYWxzZSxcbiAgICBudW1iZXI6IGZhbHNlLFxuICAgIGN2YzogZmFsc2VcbiAgfTtcbiAgcHVibGljIGxvZ2luRGF0YSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIG9yZGVyRGF0YToge31cbiAgfTtcbiAgcHVibGljIGxvZ2luRXJyb3IgPSB7XG4gICAgZW1haWw6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBwaG9uZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gIH07XG4gIHB1YmxpYyByZWdpc3RyYXRpb25FcnJvciA9IHtcbiAgICBuYW1lOiBmYWxzZSxcbiAgICBwaG9uZTogZmFsc2UsXG4gICAgZW1haWw6IGZhbHNlLFxuICAgIHBhc3N3b3JkRmlyc3Q6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgcmVjb3ZlcnlEYXRhID0ge1xuICAgIGVtYWlsOiAnJ1xuICB9O1xuICBwdWJsaWMgcmVjb3ZlcnlFcnJvciA9IHtcbiAgICBlbWFpbDogZmFsc2VcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1Qb3B1cERhdGEgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGRhdGE6IFtdLFxuICAgIGluZm9ybWF0aW9uOiB7fSxcbiAgICBidXR0b246ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHRvdGFsUHJpY2U6IG51bGxcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHR5cGU6ICdjZW50ZXInXG4gIH07XG4gIHB1YmxpYyBjb25maXJtQWN0aW9uUG9wdXBEYXRhID0ge1xuICAgIG9yZGVySWQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0ZXh0MjogJycsXG4gICAgYWN0aW9uczogW10sXG4gICAgYnV0dG9uczogW10sXG4gICAgcHJpY2U6IG51bGxcbiAgfTtcbiAgcHVibGljIGZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogW10sXG4gICAgdHlwZTogJycsXG4gICAgZGF0YToge30sXG4gICAgZnJvbTogJydcbiAgfTtcblxuICBwdWJsaWMgZW50ZXJQaG9uZUZvcm0gPSB7XG4gICAgcGhvbmU6ICcnXG4gIH07XG4gIHB1YmxpYyBlbnRlclBob25lRm9ybUVycm9yID0ge1xuICAgIHBob25lOiBmYWxzZVxuICB9O1xuXG4gIC8vIEEvQiBURVNUU1xuICBwdWJsaWMgcmVnaXN0ZXJOZXdDb21wYW55ID0ge1xuICAgIG5hbWUgOiAnJyxcbiAgICBwaG9uZSA6ICcnLFxuICAgIHByb2Zlc3Npb24gOiAnJ1xuICB9XG5cbiAgcHVibGljIGlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIGZvcm1FcnJvcjogYm9vbGVhbnx7dGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nfSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNzOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcG9wdXBTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsIHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2UsIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHtcbiAgICB0aGlzLmVtYWlsUGF0dGVybiA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuICB9XG4gIGdldFBvcHVwKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ2xvZ2luJykge1xuICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb24nKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWNvdmVyeScpIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZmluaXNoJykge1xuICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdDaGVjayB5b3VyIGluYm94JztcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXG4gICAgICAgICAgJ1dlIHNlbnQgYSBwYXNzd29yZCByZXNldCBsaW5rIHRvIHlvdXIgZW1haWwgYWRkcmVzcy4gUGxlYXNlIGNsaWNrIHRoZSBsaW5rIGluIHRoZSBlbWFpbCB0byBjcmVhdGUgZSBuZXcgcGFzc3dvcmQuJyxcbiAgICAgICAgICAnVGhlIGxpbmsgd2lsbCBvbmx5IGJlIGFjdGl2ZSBmb3IgMSBob3VyLiBBZnRlciB0aGF0IHlvdSB3aWxsIG5lZWQgdG8gcmVxdWVzdCBhIG5ldyBvbmUuJ1xuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1GaW5pc2gnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybUVuZCcpIHtcbiAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhZGRDYXJkJykge1xuICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1BY3Rpb24nKSB7XG4gICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybU9yZGVyRW5kJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cblxuICAgIC8vIEEvQiBURVNUU1xuICAgIGlmICh0eXBlID09PSAncmVnaXN0ZXJDb21wYW55Jykge1xuICAgICAgdGhpcy5yZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoaXNSZW9wZW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmRQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuXG4gICAgLy8gQS9CIFRFU1RTXG4gICAgaWYgKHRoaXMucmVnaXN0ZXJDb21wYW55UG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJDb21wYW55UG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9ICcnO1xuICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2U7XG4gICAgaWYgKCFpc1Jlb3Blbikge1xuICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkgJiYgcGFzc3dvcmQubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MubG9naW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0xvZ2luJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dGggPSBkYXRhO1xuICAgICAgICAgIGlmICh0aGlzLmxvZ2luRGF0YS50eXBlID09PSAnZnJvbU9yZGVyJykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXInLCBkYXRhOiB0aGlzLmxvZ2luRGF0YS5vcmRlckRhdGF9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlIScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ05vbiByaXVzY2lhbW8gYSB0cm92YXJlIHVuIGFjY291bnQgY29uIHF1ZWxs4oCZaW5kaXJpenpvIGUtbWFpbCdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSEnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMYSB0dWEgcGFzc3dvcmQgbm9uIMOoIGNvcnJldHRhJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZmFjZWJvb2tMb2dpbigpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgucm91bmQoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIDIpIC0gMjg1KTtcbiAgICAgIGxldCBmYWNlYm9va1BvcHVwID0gd2luZG93Lm9wZW4oXG4gICAgICAgIC8vICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdjIuOC9kaWFsb2cvb2F1dGg/Y2xpZW50X2lkPTExMDg0NjEzMjU5MDcyNzcmcmVzcG9uc2VfdHlwZT10b2tlbiZzY29wZT1lbWFpbCxwdWJsaWNfcHJvZmlsZSZyZWRpcmVjdF91cmk9aHR0cHM6Ly93d3cuc3RhcmJvb2suY28vZmFjZWJvb2snLFxuICAgICAgICAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3YyLjgvZGlhbG9nL29hdXRoP2NsaWVudF9pZD0xMTA4NDYxMzI1OTA3Mjc3JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2NvcGU9ZW1haWwscHVibGljX3Byb2ZpbGUmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9mYWNlYm9vaycsXG4gICAgICAgICAgJ19ibGFuaycsXG4gICAgICAgICAgJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxsZWZ0PScgKyBsZWZ0ICsgJywgdG9wPTEwMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyk7XG4gICAgICB0aGlzLmNoZWNrQWNjZXNzVG9rZW4oZmFjZWJvb2tQb3B1cCwgMSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tBY2Nlc3NUb2tlbihmYWNlYm9va1dpbmRvdzogV2luZG93LCBjb250ZXh0KSB7XG4gICAgaWYgKGZhY2Vib29rV2luZG93LmNsb3NlZCkge1xuICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZhY2Vib29rX3Rva2VuJyk7XG5cbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MuZmFjZWJvb2tMb2dpbihhY2Nlc3NUb2tlbilcbiAgICAgICAgICAudGhlbigodXNlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmKCF1c2VyRGF0YS5waG9uZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ29tcGxldGEgaWwgcHJvZmlsbyc7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQucHVzaCgnUGVyIHJlc3RhcmUgaW4gY29udGF0dG8gY29uIGkgcHJvZmVzc2lvbmlzdGkgaW5zZXJpc2NpIGlsIHN1byBudW1lcm8gZGkgdGVsZWZvbm8uJyk7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnR5cGUgPSAncGhvbmUnO1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS5kYXRhID0geyB1c2VyRGF0YTogdXNlckRhdGEgfTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubG9naW5EYXRhLnR5cGUgPT09ICdmcm9tT3JkZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEuZnJvbSA9ICdvcmRlcic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXVzZXJEYXRhLmVtYWlsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yZSEnLFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnQXV0aG9yaXphdGlvbiBlcnJvcidcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7c2VsZi5jaGVja0FjY2Vzc1Rva2VuKGZhY2Vib29rV2luZG93LCBjb250ZXh0ICsgMSl9LCAyMDApO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRW1haWwodHlwZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjb3ZlcnknOlxuICAgICAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY292ZXJ5JzpcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrRGF0ZSh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlID09PSAnbmV3Q2FyZCcpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBsZXQgcGFydHMgPSB2YWx1ZS5zcGxpdCgnLycpO1xuICAgICAgICBpZiAocGFydHNbMF0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja05vbkVtcHR5KHR5cGUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdsb2dpbicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25OYW1lJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvblBob25lJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGhvbmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGhvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2VudGVyUGhvbmVGb3JtJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRoaXMuZW50ZXJQaG9uZUZvcm1FcnJvci5waG9uZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbnRlclBob25lRm9ybUVycm9yLnBob25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25QYXNzd29yZCcpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhZGRDYXJkTnVtYmVyJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmRDdnYnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5jdmMgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmN2YyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZENvbmZpcm06IHN0cmluZykge1xuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRXhwaXJ5KHZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbW9udGggPSAoMSArIGRhdGUuZ2V0TW9udGgoKSkudG9TdHJpbmcoKTtcbiAgICBpZiAoKGRhdGUuZ2V0TW9udGgoKSArIDEpIDwgMTApIHtcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGgudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IHllYXJFbGVtcyA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgICBsZXQgeWVhciA9IHBhcnNlSW50KHllYXJFbGVtc1syXS50b1N0cmluZygpICsgeWVhckVsZW1zWzNdLnRvU3RyaW5nKCkpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGRhdGVFbGVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGlmIChlbGVtID09PSAnLycpIHtcbiAgICAgICAgICBkYXRlRWxlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgICAgaWYgKGRhdGVFbGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGVuZ3RoICE9PSA1KSB7XG4gICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDUpIHtcbiAgICAgIGxldCBwYXJ0cyA9IHJlc3VsdC5zcGxpdCgnLycpO1xuICAgICAgaWYgKHBhcnRzWzBdICE9PSByZXN1bHQpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHBhcnRzWzFdKSA+IHllYXIpIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwYXJzZUludChwYXJ0c1swXSkgPj0gcGFyc2VJbnQobW9udGgpICYmIHBhcnNlSW50KHBhcnRzWzFdKSA9PT0geWVhcikge1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlID0gcmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGVja0NhcmROdW1iZXIoY2FyZE51bWJlcikge1xuICAgIC8vIGlmIChjYXJkTnVtYmVyICE9PSBudWxsKSB7XG4gICAgLy8gICBpZiAodGhpcy5wYXltZW50U2VydmljZS5jYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikpIHtcbiAgICAvLyAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gZmFsc2U7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSB0cnVlO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIHJlZ2lzdHJhdGlvbihuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpICYmIHBhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm0gJiYgcGFzc3dvcmQubGVuZ3RoID4gMCAmJiBuYW1lLmxlbmd0aCA+IDAgJiYgcGhvbmUubGVuZ3RoID4gOSkge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3Muc2lnbnVwKG5hbWUsIHBob25lLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnUmVnaXN0cmF0aW9uJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmF1dGggPSBkYXRhO1xuICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGRhdGEpO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGUvcGF5bWVudCddKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXNlIDQwOTpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbmRpcml6em8gZS1tYWlsIGdpw6AgaW4gdXNvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEhhaSBpbmRpY2F0byBkaSBlc3NlcmUgdW4gbnVvdm8gY2xpZW50ZSBtYSDDqCBnacOgXG4gICAgICAgICAgICAgICAgcHJlc2VudGUgdW4gYWNjb3VudCBjb2xsZWdhdG8gYWxsJ2luZGlyaXp6byBlLW1haWw6IG1haWxAZ21haWwuY29tYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDIyOlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BhcmFtZXRyaSBtYW5jYW50aScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEluc2VyaXNjaSB0dXR0aSBpIHBhcmFtZXRyaSBwZXIgcHJvY2VkZXJlIGNvbiBsYSByZWdpc3RyYXppb25lYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yZScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYEMnw6ggc3RhdG8gdW4gZXJyb3JlIHNjb25vc2NpdXRvLCBwZXIgZmF2b3JlIHJpcHJvdmEgcGnDuSB0YXJkaWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY292ZXJ5KGVtYWlsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLnJlY292ZXJ5KGVtYWlsKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnUmVjb3Zlcnkgb2YgcGFzc3dvcmQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2ZpbmlzaCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIHByb2JsZW1hIScsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQ2kgZGlzcGlhY2UuIEltcG9zc2liaWxlIGlkZW50aWZpY2FyZSBsJ2FjY291bnQgY29uIGxlIGluZm9ybWF6aW9uaSBmb3JuaXRlLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uZmlybU9yZGVyKGlkKSB7XG4gICAgLy8gdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnQUNDRVBUJylcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbmZlcm1hdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAvLyAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0FkZXNzbyBub24gcmVzdGEgYWx0cm8gY2hlIG9mZnJpcmUgaWwgc3VvIHNlcnZpemlvIGFsIGNsaWVudGUuIFBlciBxdWFsc2lhc2kgY29tbXVuaWNhemlvbmUgcHXDsiB1c2FyZSBpIGRhdGkgZGVsIGNvbnRhdHRvIGFnZ2l1bnRpIGRhbCBjbGllbnRlLic7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYUVuZCc7XG4gICAgLy8gICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUVuZCcpO1xuICAgIC8vICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgIC8vICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgIC8vICAgICAgICAgdGl0bGU6ICdPcmRlciBjb25maXJtYXRpb24gZXJyb3InLFxuICAgIC8vICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgb3JkZXIgY29uZmlybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAvLyAgICAgICB9O1xuICAgIC8vICAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnQ0FOQ0VMJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBDYW5jZWwnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ09yZGluZSBhbm51bGxhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1F1ZXN0byBvcmRpbmUgw6ggc3RhdG8gYW5udWxsYXRvLCBwdW9pIHJpYXR0aXZhcmxvIGluIHVuIHNlY29uZG8gbW9tZW50by4nO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NhbmNlbE9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWxsYXRpb24gZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNhbmNlbGluZyB5b3VyIG9yZGVyLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHJlYWN0aXZhdGVPcmRlcihpZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ1JFQUNUSVZBVEUnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IFJlYWN0aXZhdGUnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ09yZGluZSByaWF0dGl2YXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdRdWVzdG8gb3JkaW5lIMOoIHN0YXRvIHJpYXR0aXZhdG8sIHZlcnJhaSBub3RpZmljYXRvIHF1YW5kbyB1biBwcm9mZXNzaW9uaXN0YSBjb25mZXJtZXJhIHF1ZXN0byBvcmRpbmUuJztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdyZWFjdGl2YXRlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1JlYWN0aXZhdGlvbiBvcmRlciBlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgRHVyaW5nIHRoZSByZWFjdGl2YXRpb24gb2YgeW91ciBvcmRlciBpcyB0aGUgb3JkZXIgdGhlIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGNvbmZpcm1OZXdPcmRlcigpIHtcbiAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm0nLCBkYXRhOiB7cHJpY2U6IHRoaXMuY29uZmlybVBvcHVwRGF0YS50b3RhbFByaWNlfX0pO1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICB9XG5cbiAgYWRkTmV3Q2FyZCgpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5udW1iZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IGV4cF9wYXJ0cyA9IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChleHBfcGFydHNbMF0gIT09IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfbW9udGggPSBleHBfcGFydHNbMF07XG4gICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuY3ZjLmxlbmd0aCA8IDMpIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnc3RhcnROZXdDYXJkJ30pO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZE5ld0NhcmQodGhpcy5hZGRDYXJkRGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0FkZCBuZXcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZCcsIGRhdGE6IHJlc3BvbnNlfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZEVycm9yJ30pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZWRpdENhcmQoKSB7XG4gICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgbGV0IGVkaXRDYXJkRGF0YSA9IHtcbiAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgIGV4cF95ZWFyOiBudWxsLFxuICAgICAgbmFtZTogJycsXG4gICAgICBhZGRyZXNzX2xpbmUxOiAnJyxcbiAgICAgIGFkZHJlc3NfbGluZTI6ICcnLFxuICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgIGFkZHJlc3NfemlwOiAnJyxcbiAgICAgIGFkZHJlc3Nfc3RhdGU6ICcnLFxuICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgZXhwX3BhcnRzID0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgaWYgKGV4cF9wYXJ0c1swXSAhPT0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSkge1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX21vbnRoID0gZXhwX3BhcnRzWzBdO1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZWRpdENhcmREYXRhLm5hbWUgPSB0aGlzLmFkZENhcmREYXRhLm5hbWU7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19saW5lMSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY2l0eSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5O1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfemlwID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3ppcDtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY291bnRyeSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5O1xuICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdzdGFydE5ld0NhcmQnfSk7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5wYXltZW50U2VydmljZS5lZGl0Q2FyZCh0aGlzLmVkaXRlZENhcmRJZCwgZWRpdENhcmREYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRWRpdCBjYXJkIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NhcmRFZGl0ZWQnLCBkYXRhOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmRFcnJvcid9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFByaWNlKG9yZGVySWQpIHtcbiAgICAvLyBsZXQgb3JkZXJQcmljZUV1ciA9IHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgKyAoKHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgLyAxMDApICogNS41KTtcbiAgICAvLyBsZXQgb3JkZXJQcmljZSA9IHBhcnNlRmxvYXQob3JkZXJQcmljZUV1ci50b0ZpeGVkKDIpKSAqIDEwMDtcblxuICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihvcmRlcklkLCAnQ0xPU0UnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IENsb3NlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbXBsZXRhdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICcnO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2FkZFByaWNlRW5kJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRQcmljZUVuZCc7XG4gICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnYWRkUHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZCwgaXNNb2RpZmllZDogcmVzcG9uc2Uubk1vZGlmaWVkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuICBlZGl0UHJpY2Uob3JkZXJJZCkge1xuICAgIGxldCBvcmRlclByaWNlRXVyID0gcGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSArICgocGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSAvIDEwMCkgKiA1LjUpO1xuICAgIGxldCBvcmRlclByaWNlID0gcGFyc2VGbG9hdChvcmRlclByaWNlRXVyLnRvRml4ZWQoMikpICogMTAwO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5hZGRQcmljZShvcmRlcklkLCAnQUNUSVZFX1BBWU1FTlQnLCBvcmRlclByaWNlKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IEFjdGl2ZSBwYXltZW50JywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnZWRpdFByaWNlJywgZGF0YToge29yZGVySWQ6IG9yZGVySWQsIG9yZGVyUHJpY2U6IG9yZGVyUHJpY2UsIGlzTW9kaWZpZWQ6IHJlc3BvbnNlLm5Nb2RpZmllZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgY29udGludWVPcmRlcihvcmRlcklkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKG9yZGVySWQsICdQQVknKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IFBheScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnUGFnYW1lbnRvIGVmZmV0dHVhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1RpIGFiYmlhbW8gaW52aWF0byB1bmEgbWFpbCBlIHVuIHNtcyBjb24gbGEgY29uZmVybWEgZGVsIHBhZ2FtZW50byBlIGxhIHJpY2V2dXRhIGZpc2NhbGUnO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ2xlZnQnO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2xvZ291dCcsIGRhdGE6IHt9fSk7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gIH1cblxuICBnZXRFcnJvclBvcHVwKHRpdGxlLCB0ZXh0KSB7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtdO1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dC5wdXNoKHRleHQpO1xuICAgIHRoaXMuZ2V0UG9wdXAoJ2Vycm9yJyk7XG4gIH1cblxuICBzZXRQaG9uZU51bWJlcigpIHtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5lbnRlclBob25lRm9ybS5waG9uZS5sZW5ndGggPiAxMCkge1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5hZGRQaG9uZSh0aGlzLmVudGVyUGhvbmVGb3JtLnBob25lKVxuICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maW5pc2hQb3B1cERhdGEuZnJvbSA9PT0gJ29yZGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YTogdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ29tcGxpbWVudGkhJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0LnB1c2goJ0hhaSByZWdpc3RyYXRvIGNvbiBzdWNjZXNzbyBpbCBzdW8gYWNjb3VudCBTdGFyYm9vay4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ2ZpbmlzaEZhY2Vib29rUmVnaXN0cmF0aW9uJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS5kYXRhID0geyB1c2VyRGF0YTogdXNlckRhdGEgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW50ZXJQaG9uZUZvcm1FcnJvci5waG9uZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vKioqKioqKioqKioqKioqKiogQS9CIFRFU1RTICoqKioqKioqKioqKioqKioqKlxuICAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICByZWdpc3RlckNvbXBhbnkobmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBwcm9mZXNzaW9uOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciB0aGUgY29tcGFueTogJyArIG5hbWUgKyBwaG9uZSArIHByb2Zlc3Npb24pO1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MucmVnaXN0ZXJDb21wYW55KG5hbWUsIHBob25lLCBwcm9mZXNzaW9uKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciBjb21wYW55IGRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIC8vIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSBcIlJpY2hpZXN0YSBkJ2lzY3JpemlvbmUgaW52aWF0YVwiO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdRdWVzdG8gb3JkaW5lIMOoIHN0YXRvIGFubnVsbGF0bywgcHVvaSByaWF0dGl2YXJsbyBpbiB1biBzZWNvbmRvIG1vbWVudG8uJztcbiAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciByZWdpc3RlcjogJyArIGVycm9yKTtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlY29tbWVuZFRvRnJpZW5kKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBTZXJ2aWNlLmdldEFjdGl2ZVBvcHVwJC5zdWJzY3JpYmUocG9wdXAgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvcHVwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ2luRnJvbU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLm9yZGVyRGF0YSA9IHBvcHVwLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS50eXBlID0gJ2Zyb21PcmRlcic7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dpbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2FyZFR5cGUgPSAnYWRkJztcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkQ2FyZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNhcmRUeXBlID0gJ2VkaXQnO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRDYXJkSWQgPSBwb3B1cC5kYXRhLmlkO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSA9IHBvcHVwLmRhdGEuZXhwX21vbnRoICsgJy8nICsgcG9wdXAuZGF0YS5leHBfeWVhcjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEubmFtZSA9IHBvcHVwLmRhdGEubmFtZTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMSA9IHBvcHVwLmRhdGEuYWRkcmVzc19saW5lMTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMiA9IHBvcHVwLmRhdGEuYWRkcmVzc19saW5lMjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5ID0gcG9wdXAuZGF0YS5hZGRyZXNzX2NpdHk7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfemlwID0gcG9wdXAuZGF0YS5hZGRyZXNzX3ppcDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZSA9IHBvcHVwLmRhdGEuYWRkcmVzc19zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5ID0gcG9wdXAuZGF0YS5hZGRyZXNzX2NvdW50cnk7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLm51bWJlciA9IHBvcHVwLmRhdGEubnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5jdmMgPSBwb3B1cC5kYXRhLmN2YztcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkQ2FyZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ3JlZ2lzdHJhdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0NvbmZlcm1hIHNlcnZpemlvIGluIGNvcnNv4oCmJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0lsIHNpc3RlbWEgc3RhIGNvbnRyb2xsYW5kbyBzZSBxdWVzdG8gc2Vydml6aW8gw6ggc3RhdG8gYXNzZWduYXRvIGFkIHVuIGFsdHJvIHByb2Zlc3Npb25pc3RhIG8gYW51bGxhdG8gZGFsIGNsaWVudGUgc3Rlc3NvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIocG9wdXAuZGF0YS5vcmRlcklkLCAnQUNDRVBUJylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbmZlcm1hdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdBZGVzc28gbm9uIHJlc3RhIGFsdHJvIGNoZSBvZmZyaXJlIGlsIHN1byBzZXJ2aXppbyBhbCBjbGllbnRlLiBQZXIgcXVhbHNpYXNpIGNvbW11bmljYXppb25lIHB1w7IgdXNhcmUgaSBkYXRpIGRlbCBjb250YXR0byBhZ2dpdW50aSBkYWwgY2xpZW50ZS4nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hRW5kJztcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRW5kJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogcG9wdXAuZGF0YS5vcmRlcklkfX0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPcmRlciBjb25maXJtYXRpb24gZXJyb3InLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgb3JkZXIgY29uZmlybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhbmNlbE9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdBbm51bGxhIG9yZGluZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIGFubnVsbGF0byBxdWVzdG8gb3JkaW5lIHNvbG8gdHUgc2FyYWkgaW4gZ3JhZG8gZGkgdmVkZXJsby4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdBbm51bGxhIG9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZWFjdGl2YXRlT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1JpYXR0aXZhIG9yZGluZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIHJpYXR0aXZhdG8gcXVlc3RvIG9yZGluZSBzYXJhIHZpc2liaWxlIGEgdHV0dGkgaSBwcm9mZXNzaW9uaXN0aS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdSaWF0dGl2YSBvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU5ld09yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdEZXR0YWdsaSBkZWwgc2Vydml6aW8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbe3Byb2R1Y3ROYW1lOiBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlLCBpdGVtTmFtZTogJycsIHByaWNlOiAnJywgdHlwZTogJ3NlcnZpY2UnfV07XG4gICAgICAgICAgICBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlcy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmKHByb2R1Y3QucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCBzeW1ib2w6IHByb2R1Y3Qub3B0aW9uLnN5bWJvbCwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSwgaXRlbU5hbWU6IHByb2R1Y3Qub3B0aW9uLm5hbWUsIHByaWNlOiBwcm9kdWN0Lm9wdGlvbi5wcmljZSwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9yZGVyU2VydmljZS5nZXRFc3RpbWF0ZVByaWNlKHBvcHVwLmRhdGEucXVlcnlQcmljZSlcbiAgICAgICAgICAgICAgICAudGhlbigocHJpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50b3RhbFByaWNlID0gcHJpY2UucmVzdWx0LnRvdGFsICsgcHJpY2UucmVzdWx0LmZlZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogJ1RvdGFsZScsIGl0ZW1OYW1lOiAnJywgcHJpY2U6IHBvcHVwLmRhdGEub3JkZXJEYXRhLnRvdGFsUHJpY2UsIHR5cGU6ICd0b3RhbCd9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9IHBvcHVwLmRhdGEuaW5mb3JtYXRpb247XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ1ByZW5vdGEgc2Vydml6aW8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXInO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU5ld09yZGVyRW5kJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdBY3F1aXN0byBlZmZldHVhdG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnTOKAmW9yZGluZSBlIHN0YXRvIHByZW5vdGF0byBjb24gc3VjY2Vzc28uIFVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBvcmEgc3RhYmlsaXRhIGRhIHZvaS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudHlwZSA9ICdhZGRQcmljZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnQ29tcGxldGFtZW50byBzZXJ2aXppbyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgY29tcGxldGF0byBpbCBzZXJ2aXppbyB2ZXJyYWkgaW5jcmVtZW50YXRvIGRlbCBpbXBvcnRvIHByZXN0YWJpbGl0byB0cmEgNyBnaW9ybmkgbGF2b3JhdGl2aS4nO1xuICAgICAgICAgICAgLy8gdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAvLyAgIHR5cGU6ICdQYXltZW50X2lucHV0X2FkZCcsXG4gICAgICAgICAgICAvLyAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgLy8gICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdhZGRQcmljZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDb21wbGV0YSBpbCBzZXJ2aXppbydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnTW9kaWZpY2EnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIG1vZGlmaWNhdG8gbOKAmWltcG9ydG8gaWwgY2xpZW50ZSB2ZXJyYSBub3RpZmljYXRvIGRpIHF1ZXN0YSBtb2RpZmljYSBlIHBvdHJhIHByb2NlZGVyZSBjb24gaWwgcGFnYW1lbnRvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnRfaW5wdXRfZWRpdCcsXG4gICAgICAgICAgICAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdlZGl0UHJpY2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnSW5zZXJpc2NpIGltcG9ydG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UgPSBNYXRoLnJvdW5kKChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpIC8gMTAwKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb250aW51ZU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlID0gJ1BhZ2FtZW50byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgZWZmZXR0dWF0byBpbCBwYWdhbWVudG8gcmljZXZlcmFpIHVuYSBtYWlsIGNvbiBsYSBmYXR0dXJhIGRlbCBvcmRpbmUuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiA9ICdBbOKAmWltcG9ydG8gdmVycmEgYWdnaXVudG8gNS41JSBkaSB0YXNzZSBTdGFyYm9vay4nO1xuICAgICAgICAgICAgbGV0IHByaWNlID0gTWF0aC5yb3VuZCgocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSAvIDEwMCk7XG4gICAgICAgICAgICBsZXQgdGF4ID0gKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLSBNYXRoLnJvdW5kKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkpIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdQYXltZW50X2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHByaWNlICsgJ+KCrCArICcgKyB0YXggKyAn4oKsID0gJyArIHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxMDAgKyAn4oKsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbnRpbnVlT3JkZXInLFxuICAgICAgICAgICAgICB0ZXh0OiAnUHJvY2VkaSBjb24gaWwgcGFnYW1lbnRvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2ljdXJvIGRpIHZvbGVyIHVzY2lyZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW107XG4gICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAocG9wdXAuZGF0YS50aXRsZSwgcG9wdXAuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQS9CIFRFU1RTXG4gICAgICAgICAgY2FzZSAncmVnaXN0ZXJDb21wYW55JzpcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb21wYW55UG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdyZWdpc3RlckNvbXBhbnknO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2Vydmljcy5hdXRoSW5pdCgpO1xuICB9XG5cbiAgY2xlYXJEYXRhKCkge1xuICAgIHRoaXMuYWRkQ2FyZERhdGEgPSB7XG4gICAgICAgIG9iamVjdDogJ2NhcmQnLFxuICAgICAgICBleHBfZGF0ZTogJycsXG4gICAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgICAgZXhwX3llYXI6IG51bGwsXG4gICAgICAgIG51bWJlcjogbnVsbCxcbiAgICAgICAgY3ZjOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFkZHJlc3NfbGluZTE6ICcnLFxuICAgICAgICBhZGRyZXNzX2xpbmUyOiAnJyxcbiAgICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgICAgYWRkcmVzc196aXA6ICcnLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiAnJyxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgICAgfTtcbiAgICAvLyB0aGlzLmxvZ2luRGF0YSA9IHtcbiAgICAvLyAgICAgZW1haWw6ICcnLFxuICAgIC8vICAgICBwYXNzd29yZDogJycsXG4gICAgLy8gICAgIHR5cGU6ICcnLFxuICAgIC8vICAgICBvcmRlckRhdGE6IHt9XG4gICAgLy8gICB9O1xuICAgIHRoaXMucmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgICAgIH07XG4gICAgdGhpcy5yZWNvdmVyeURhdGEgPSB7XG4gICAgICAgIGVtYWlsOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEgPSB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgaW5mb3JtYXRpb246IHt9LFxuICAgICAgICBidXR0b246ICcnLFxuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgdG90YWxQcmljZTogbnVsbFxuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6ICdjZW50ZXInXG4gICAgICB9O1xuICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YSA9IHtcbiAgICAgICAgb3JkZXJJZDogJycsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0MjogJycsXG4gICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgcHJpY2U6IG51bGxcbiAgICAgIH07XG4gICAgdGhpcy5sb2dpbkVycm9yID0ge1xuICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHRleHQ6IFtdLFxuICAgICAgdHlwZTogJycsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGZyb206ICcnXG4gICAgfTtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtID0ge1xuICAgICAgcGhvbmU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IgPSB7XG4gICAgICBwaG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdzZXJ2aWNlcy86aWQnLFxuICAgICdwcm9maWxlL3ByaXZhY3knLFxuICAgICdwcm9maWxlL2hlbHAnLFxuICAgICdwcm9maWxlL2NvbmRpdGlvbnMnLFxuICAgICdvcmRlcnMnLFxuICAgICdwcm9maWxlLzpwYWdlJyxcbiAgICAnZmFjZWJvb2snXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1maXhlZC10b3AgYmctaW52ZXJzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzLXNlYXJjaCc6IGlzRmluZEZpZWxkfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgdG9wLW1lbnVcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiByb3V0ZXJMaW5rPVxcXCJcXFwiIChjbGljayk9XFxcInVwZGF0ZVRhYk1lbnUoKVxcXCI+U3RhcmJvb2s8L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbW9iaWxlXFxcIiByb3V0ZXJMaW5rPVxcXCJcXFwiIChjbGljayk9XFxcInVwZGF0ZVRhYk1lbnUoKVxcXCI+UzwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWJsb2NrXFxcIiAqbmdJZj1cXFwiaXNGaW5kRmllbGRcXFwiPlxcbiAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwiZmluZFZhbHVlXFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJyZXN1bHRzXFxcIiBmaWVsZD1cXFwidGl0bGVcXFwiIHNjcm9sbEhlaWdodD1cXFwiMTcwcHhcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcInNlYXJjaCgkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RSZXN1bHQoZmluZFZhbHVlKVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgPHRlbXBsYXRlIGxldC1yZXM+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChyZXMpXFxcIj57eyByZXMudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiAqbmdJZj1cXFwic3BpbmVyVmlld1xcXCI+XFxuICAgICAgICA8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzEzcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2xvc2UtY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIXNwaW5lclZpZXcgJiYgY2xlYXJWaWV3XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSByb3VuZGVkIHRoaWNrXFxcIiAoY2xpY2spPVxcXCJjbGVhclNlYXJjaEZvcm0oKVxcXCI+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInVpLWF1dG9jb21wbGV0ZS1wYW5lbCBlbXB0eVxcXCIgKm5nSWY9XFxcInJlc3VsdHMubGVuZ3RoID09PSAwICYmIGZpbmRWYWx1ZS5sZW5ndGggPiAwICYmIGlzU2VhcmNoZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0XFxcIj5OZXNzdW4gcmlzdWx0YXRvPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWdsaW5lXFxcIiAqbmdJZj1cXFwiIWlzRmluZEZpZWxkXFxcIj57e3RhZ2xpbmV9fTwvZGl2PlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGFyaWEtbGFiZWw9XFxcIk1lbnVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+PC9idXR0b24+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoICE9PSBmYWxzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbGxhcHNlJzpuYXZiYXJTdGF0ZT09PWZhbHNlfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgaG9tZVxcXCIgcm91dGVyTGluaz1cXFwiXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDp0cnVlfVxcXCIgKGNsaWNrKT1cXFwidXBkYXRlVGFiTWVudSh0cnVlKVxcXCI+SG9tZTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIG9yZGVyc1xcXCIgcm91dGVyTGluaz1cXFwiL29yZGVyc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPk9yZGluaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIHJvdXRlckxpbms9XFxcIi9wcm9maWxlL3NldHRpbmdzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+e3thdXRoLnByb2ZpbGUuZnVsbG5hbWV9fTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8IS0tIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoID09PSBmYWxzZSAmJiBicm93c2VyXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRMb2dpblBvcHVwKClcXFwiPkFjY2VkaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIChjbGljayk9XFxcImdldFJlZ2lzdHJhdGlvblBvcHVwKClcXFwiPlJlZ2lzdHJhdGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD4gLS0+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoID09PSBmYWxzZSAmJiBicm93c2VyXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRMb2dpblBvcHVwKClcXFwiPkFjY2VkaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIChjbGljayk9XFxcImdldFJlZ2lzdHJhdGlvblBvcHVwKClcXFwiPlJlZ2lzdHJhdGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG5cXG4gIDwvZGl2PlxcbjwvbmF2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48YXBwLXBvcHVwcz48L2FwcC1wb3B1cHM+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItdGFic1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS10YWItYmFyXFxcIlxcbiAgICAgICAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIlxcbiAgICAgICAoc3dpcGVyaWdodCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi1waWxsc1xcXCJcXG4gICAgICAgIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tbGVmdC5weCc6IGRlbHRhfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbmF2U2VydmljZXMgb2Ygc2VydmljZXNDYXRlZ29yeUxpc3RcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzpuYXZTZXJ2aWNlcy5faWQ9PT1hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgJiYgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZSAhPT0gZmFsc2V9XFxcIiAoY2xpY2spPVxcXCJ0YWJOYXZpZ2F0ZShuYXZTZXJ2aWNlcy5faWQpXFxcIj48aSBjbGFzcz1cXFwiZnt7bmF2U2VydmljZXMuaWNvbl9uYW1lfX1cXFwiPjwvaT4ge3tuYXZTZXJ2aWNlcy50aXRsZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L25hdj4tLT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS1wYWdlXFxcIiAqbmdJZj1cXFwiaXNTZXJ2aWNlc1ZpZXcgPT09IHRydWVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTEwIG1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFzb25yeS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlcy1ibG9ja1xcXCIgKm5nRm9yPVxcXCJsZXQgc2VydmljZUNhdGVnb3J5IG9mIHNlcnZpY2VzRGF0YVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2VzLWJsb2NrLWJpZyc6IHNlcnZpY2VDYXRlZ29yeS50eXBlID09PSAnY29udGVudCd9XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic2VydmljZUNhdGVnb3J5LnR5cGUgPT09ICdjb250ZW50J1xcXCI+XFxuICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkuaW1hZ2VcXFwiIChsb2FkKT1cXFwibWFrZU1hc29ucnkoKVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+e3sgc2VydmljZUNhdGVnb3J5LmRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkudHlwZSAhPT0gJ2NvbnRlbnQnXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tzZXJ2aWNlQ2F0ZWdvcnkudGl0bGVfMX19PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlIGNvbnRlbnQgbm9zZWxlY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHNlcnZpY2VDYXRlZ29yeS5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdJZj1cXFwiaXRlbS50eXBlID09PSAnQ0hFQ0tCT1gnIHx8IGl0ZW0udHlwZSA9PT0gJ1JBRElPQlVUVE9OJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NoZWNrZWQnOml0ZW0uc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVTZXJ2aWNlKHNlcnZpY2VDYXRlZ29yeS50aXRsZSwgaXRlbS50aXRsZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XFxcIml0ZW0uc2VsZWN0ZWQ9PT10cnVlXFxcIiBjbGFzcz1cXFwiZmEgZmEtY2hlY2stc3F1YXJlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cXFwiaXRlbS5zZWxlY3RlZD09PWZhbHNlXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3F1YXJlLW9cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS50aXRsZV8xfX1cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0udHlwZSA9PT0gJ0lOUFVUVEVYVCdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0uaW5wdXRfdmFsdWVcXFwiIChrZXl1cCk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGNoYW5nZSk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGZvY3VzKT1cXFwic2VsZWN0QWxsQ29udGVudCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+e3tzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0udmFsdWVfc3ltYm9sfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YXBwLW9yZGVyIFtvcmRlckRhdGFdPVxcXCJvcmRlckRhdGFcXFwiIFtvcmRlcklzRnVsbF09XFxcIm9yZGVySXNGdWxsXFxcIj48L2FwcC1vcmRlcj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+U3RhcmJvb2sgwqkgMjAxNiBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuPGFwcC1sYW5kaW5nICpuZ0lmPVxcXCJpc1NlcnZpY2VzVmlldyA9PT0gZmFsc2VcXFwiPjwvYXBwLWxhbmRpbmc+XFxuPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlcy1sb2FkZXJcXFwiPjwvYXBwLWxvYWRpbmc+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclxcXCI+XFxuICA8Zm9ybSBjbGFzcz1cXFwic2lkZWJhci1jb250YWluZXJcXFwiICNvcmRlckZvcm09XFxcIm5nRm9ybVxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgpXFxcIj5cXG4gICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItYmxvY2tcXFwiPlxcbiAgICAgIDxoMj57e29yZGVyRGF0YS5zZXJ2aWNlfX08L2gyPlxcblxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIW9yZGVySXNGdWxsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWxpc3QtZW1wdHlcXFwiPjxzdHJvbmc+SW5zZXJpc2NpPC9zdHJvbmc+IGxlIGluZm9ybWF6aW9uaSBuZWNlc3NhcmkgZGVsIGFwcHVudGFtZW50byBlIGludmlhIGxhIHJpY2hpZXN0YS48L2Rpdj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCJvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50ID4gb3JkZXJEYXRhLnRvdGFsUHJpY2VcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz48L3N0cm9uZz5QcmV6em8gbWluaW1vIGRlbCdvcmRpbmUg4oKse3sgb3JkZXJEYXRhLm9yZGVyX29wdGlvbnMubWluX2Ftb3VudCAvIDEwMCB9fTwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lciBzZWxlY3RlZC1vcmRlcnNcXFwiIFtuZ1N0eWxlXT1cXFwieydtYXgtaGVpZ2h0JzogbWF4T3JkZXJCbG9ja1NpemV9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIGNhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgPHNwYW4+e3sgb3JkZXJEYXRhLnNlcnZpY2UgfX08L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxzcGFuICAqbmdGb3I9XFxcImxldCBvcmRlclNlcnZpY2Ugb2Ygb3JkZXJEYXRhLnNlcnZpY2VzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fSB7e29yZGVyU2VydmljZS5vcHRpb24uc3ltYm9sfX08L2k+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSAhPT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fTwvaT48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIHRvdGFsXFxcIj5cXG4gICAgICAgIDxzcGFuPlRvdGFsZSA8aT7igqx7eyBvcmRlckRhdGEudG90YWxQcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC1vcmRlci1mb3JtXFxcIj5cXG4gICAgICAgIDxsYWJlbD5RdWFuZG8gdnVvaSBzdm9sZ2VyZSBxdWVzdG8gbGF2b3JvPzwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcImlzTW9iaWxlQ2FsZW5kYXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlIGRhdGVwaWNrZXItYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhci10aW1lcy1vIGNhbGVuZGFyLWJveFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxwLWNhbGVuZGFyIG5hbWU9XFxcImRhdGFPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kYXRlXFxcIiBpZD1cXFwiZGF0YU9yYU1vYmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsYSBkYXRhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgZGF0ZUZvcm1hdD1cXFwiZGQgTU0geXlcXFwiIHJlYWRvbmx5SW5wdXQ9XFxcInJlYWRvbmx5SW5wdXRcXFwiIFtsb2NhbGVdPVxcXCJpdFxcXCIgW21pbkRhdGVdPVxcXCJtaW5EYXRlXFxcIiBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdERhdGUoKVxcXCI+XFxuICAgICAgICAgICAgPC9wLWNhbGVuZGFyPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjYWxlbmRhci1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBzdWJtaXRPcmRlciAmJiAhT3JkZXIuZGF0ZX1cXFwiICpuZ0lmPVxcXCIhaXNNb2JpbGVDYWxlbmRhclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXBpY2tlci1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyLXRpbWVzLW8gY2FsZW5kYXItYm94XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHAtY2FsZW5kYXIgbmFtZT1cXFwiZGF0YU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRhdGVcXFwiIGlkPVxcXCJkYXRhT3JhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxhIGRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGltZS1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBPcmRlci50aW1lID09PSAnJyAmJiBzdWJtaXRPcmRlcn1cXFwiICpuZ0lmPVxcXCJicm93c2VyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCIgKGNsaWNrT3V0c2lkZSk9XFxcImNsb3NlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aW1lT3JhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0aW1lT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIudGltZVxcXCIgdmFsdWU9XFxcInt7T3JkZXIudGltZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiT3JhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2JpbGVBcmVhXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1waWNrZXJcXFwiICpuZ0lmPVxcXCJ0aW1lUGlja2VySXNTaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLWVsZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHRpbWUgb2YgdGltZVBpY2tlclxcXCIgKGNsaWNrKT1cXFwic2VsZWN0VGltZSh0aW1lKVxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAge3t0aW1lfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGltZS1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBPcmRlci50aW1lID09PSAnJyAmJiBzdWJtaXRPcmRlcn1cXFwiICpuZ0lmPVxcXCIhYnJvd3NlclxcXCI+XFxuICAgICAgICAgIGlzIG5vdCBzdXBwb3J0IGlmIGNsaWVudCAhPSBicm93c2VyIChjbGlja091dHNpZGUpPVxcXCJjbG9zZVRpbWVwaWNrZXIoKVxcXCJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGltZU9yYVNlcnZlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGltZU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLnRpbWVcXFwiIHZhbHVlPVxcXCJ7e09yZGVyLnRpbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk9yYVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9iaWxlQXJlYVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtcGlja2VyXFxcIiAqbmdJZj1cXFwidGltZVBpY2tlcklzU2hvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1lbGVtXFxcIiAqbmdGb3I9XFxcImxldCB0aW1lIG9mIHRpbWVQaWNrZXJcXFwiIChjbGljayk9XFxcInNlbGVjdFRpbWUodGltZSlcXFwiPnt7dGltZX19PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgPGxhYmVsPkluc2VyaXNjaSBs4oCZaW5kaXJpenpvPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6ICFpc0FkZHJlc3NGdWxsICYmIHN1Ym1pdE9yZGVyICYmIGlzQWRkcmVzc0RpcnR5fVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGVcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiPjwvc3Bhbj4gLS0+XFxuICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5kaXJpenpvXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6aXNBZGRyZXNzRnVsbCA9PT0gZmFsc2UgJiYgaXNBZGRyZXNzRGlydHkgPT09IHRydWV9XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIiAoa2V5dXApPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiIChjaGFuZ2UpPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiPi0tPlxcbiAgICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBpZD1cXFwibHVvZ29cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdGV4dC1zbWFsbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBHaXVzZXBwZSBWZXJkaSAxMCBNaWxhbm9cXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzppc0FkZHJlc3NGdWxsID09PSBmYWxzZSAmJiBpc0FkZHJlc3NEaXJ0eSA9PT0gdHJ1ZX1cXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kZWxpdmVyeV9hZGRyZXNzXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiIFtzdWdnZXN0aW9uc109XFxcImFkZHJlc3Nlc1xcXCIgZmllbGQ9XFxcImZvcm1hdHRlZEFkZHJlc3NcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcImdldEFkZHJlc3NlcygkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RBZGRyZXNzKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvci1ibG9ja1xcXCIgKm5nSWY9XFxcIiFpc0FkZHJlc3NGdWxsICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgPT09ICcnXFxcIj5JbnNlcmlzY2kgbCdpbmRpcml6em8gZXNhdHRvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc0Z1bGwgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyAhPT0gJycgJiYgaXNBZGRyZXNzT25lXFxcIj5JbmRpcml6em8gbm9uIHRyb3ZhdG88L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc09uZSAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzICE9PSAnJ1xcXCI+SW5kaXJpenpvIG5vbiDDqCBzcGVjaWZpY288L2Rpdj4tLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGxhYmVsPk5vdGE8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibm90YVxcXCIgbmFtZT1cXFwiYXBwbGljYW50X2Rlc2NyaXB0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXNjaWEgdW5hIG5vdGEuLi5cXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAoY2xpY2spPVxcXCJzaG93Q29uZmlybWF0aW9uKClcXFwiPkFudGVwcmltYSBkZWwgcHJvZ2V0dG88L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtzXFxcIj5cXG4gICAgICAgICAgPHA+XFxuICAgICAgICAgICAgU3RhcmJvb2sgwqkgMjAxNyDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9oZWxwXFxcIj5Bc3Npc3RlbnphPC9hPlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxhbmRpbmdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXBhZ2VcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1oZWFkZXJcXFwiPlxcbiAgICAgICAgICA8aDE+SGFpIGJpc29nbm8gZGkgbGF2b3JhemlvbmkgaW50ZXJuaT88L2gxPlxcbiAgICAgICAgICA8aDY+w4ggY29zaSBzZW1wbGljZS4gVHJvdmEgaWwgc2Vydml6aW8uIENhbGNvbGEgaWwgcHJldmVudGl2by4gUHJlbm90YS48L2g2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1zZWFyY2hcXFwiPlxcbiAgICAgICAgICA8cC1hdXRvQ29tcGxldGUgWyhuZ01vZGVsKV09XFxcInF1ZXJ5XFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJyZXN1bHRzXFxcIiBmaWVsZD1cXFwidGl0bGVcXFwiIHNjcm9sbEhlaWdodD1cXFwiMjc1cHhcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcInNlYXJjaCgkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RSZXN1bHQocXVlcnkpXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFyZXRlIGluIGNhcnRvbmdlc3NvLi4uXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBsZXQtcmVzPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPScyMXB4JyBoZWlnaHQ9JzIxcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIiFzcGluZXJWaWV3ICYmIGNsZWFyVmlld1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgZW1wdHlcXFwiICpuZ0lmPVxcXCJyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBxdWVyeS5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDwhLS0gQS9CIFRFU1RTIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbGFuZGluZy1oZWFkZXItYnV0dG9uXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0nJyB8fCAhdGVzdFBhZ2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAoY2xpY2spPVxcXCJjYWxsVG9BY3Rpb25Mb2dpbldpdGhGYWNlYm9vaygpXFxcIj5SZWdpc3RyYXRpIGNvbiBGYWNlYm9vazwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbGFuZGluZy1oZWFkZXItYnV0dG9uXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0ncmVnaXN0cm9faW1wcmVzYSdcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAoY2xpY2spPVxcXCJjYWxsVG9BY3Rpb25SZWdpc3RlckNvbXBhbnkoKVxcXCI+UmVnaXN0cmEgbGEgdHVhIGltcHJlc2E8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGxhbmRpbmctaGVhZGVyLWJ1dHRvblxcXCIgKm5nSWY9XFxcInRlc3RQYWdlPT09J2ludml0YV91bl9hbWljb19jZWxsJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMlxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIChjbGljayk9XFxcImNhbGxUb0FjdGlvblNoYXJlVG9FYXJuKClcXFwiPkNvbnNpZ2xpYSBhZCB1biBhbWljbzwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbGFuZGluZy1oZWFkZXItYnV0dG9uXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0naW52aXRhX3VuX2FtaWNvX2VtYWlsJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMlxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIChjbGljayk9XFxcImNhbGxUb0FjdGlvblNoYXJlVG9FYXJuKClcXFwiPkludml0YSB1biBhbWljbzwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxhdm9yYXppb25pIHBpw7kgcmljaGllc3RpPC9oMj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlcnZpY2VzXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN3aXBlci13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZXMtY2FyZCBzd2lwZXItc2xpZGVcXFwiICpuZ0Zvcj1cXFwibGV0IHNlcnZpY2Ugb2Ygc2VydmljZXNcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChzZXJ2aWNlKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1jb250YWluZXJcXFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cXFwiJ3VybCgnICsgc2VydmljZS5pbWFnZV91cmwgKyAnKSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hhZG93XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgc2VydmljZS50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICBBIFBBUlRJUkUgREEgPHNwYW4+4oKse3sgc2VydmljZS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgLyAxMDAgfX08L3NwYW4+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIndoeS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMj5QZXJjaMOpIFN0YXJib29rPzwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3F1YWxpdHkucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+TGF2b3JhemlvbmkgZGkgYWx0YSBxdWFsaXTDoDwvaDM+XFxuICAgICAgICAgICAgPGg0Pkkgc2Vydml6aSBzdSBTdGFyYm9vayB2ZW5nb25vIGVzZWd1aXRpIGRhbGxlIG1pZ2xpb3JpIGF6aWVuZGUuIFVzYW5kbyB1biBhbGdvcml0bW8gZGkgcmljZXJjYSwgU3RhcmJvb2sgdHJvdmEgbOKAmWF6aWVuZGEgcGnDuSB2aWNpbmEgYWxsYSB0dWEgYWJpdGF6aW9uZS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hcmtldC1wcmljZS5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV6em8gZ2FyYW50aXRvIGRhbCBtZXJjYXRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+SSBwcmV6emkgc3UgU3RhcmJvb2sgdmVuZ29ubyBjYWxjb2xhdGkgZGEgdW4gYWxnb3JpdG1vIGludGVybm8gZGVsbGEgcGlhdHRhZm9ybWEgcGVyIHJlbmRlcmUgcGnDuSBlcXVvIGUgdHJhc3BhcmVudGUgaWwgbWVyY2F0by48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RpbWluZy5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV2ZW50aXZvIGRpcmV0dG88L2gzPlxcbiAgICAgICAgICAgIDxoND5VbmEgdm9sdGEgc2NlbHRvIGlsIHNlcnZpemlvLCBzZWxlemlvbmEgaSBmb3JtIHNlY29uZG8gbGUgZXNpZ2VuemUgZSBjYWxjb2xhIGlsIHByZXZlbnRpdm8gZGlyZXR0YW1lbnRlIGRhbGxhIHBpYXR0YWZvcm1hLjwvaDQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcInBhcnRuZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+TGUgbWlnbGlvcmkgYXppZW5kZSBwYXJ0bmVyPC9oMj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWJyYW5kcy1zY3JvbGxhYmxlXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJwcmUtZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaWN1cmV6emEgZGVsIHNpdG88L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNlY3VyaXR5XFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3J0b24ucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWN1cmUucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cnVzdC5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNpc3RlbWkgZGkgcGFnYW1lbnRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1wYXltZW50LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hc3RlcmNhcmQucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92aXNhLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW1lcmljYW5leHByZXNzLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RyaXBlLnBuZ1xcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+Q29udGF0dGk8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWNvbnRhY3QtbWV0aG9kc1xcXCI+XFxuICAgICAgICAgICAgPGg0PkF0dGl2byAyNC83PC9oND5cXG4gICAgICAgICAgICA8aDQ+Q2VsbHVsYXJlOiArMzkgMzI3IDI0IDE1IDAyODwvaDQ+XFxuICAgICAgICAgICAgPGg0PkVtYWlsOiBpbmZvQHN0YXJib29rLmNvPC9oND5cXG4gICAgICAgICAgICA8aDQ+VmlhIEx1aWdpIFBpcmFuZGVsbG8gMjEsIEJ1c3RvIEFyc2l6aW8gVkE8L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNlZ3VpY2kgc3U8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNvY2lhbHNcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL3N0YXJib29rY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N0YXJib29rLmNvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+PHN0cm9uZz5TdGFyYm9vazwvc3Ryb25nPiDCqSAyMDE3IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGxhbmRpbmctdG9wLWhlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGgxPlByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLCBuZWxsJ29yYSBlIGlsIGdpb3JubyBjaGUgZGVzaWRlcmk8L2gxPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlN0YXJib29rIDxzcGFuPnNlcnZpY2VzPC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICA8cD5TZWxlemlvbmEgdW5vIGRlaSBzZXJ2aXppIHN1IFN0YXJib29rLCBpbXBvc3RhIGxhIGRhdGEsIG9yYSwgaW5kaXJpenpvIGUgY29uZmVybWEgbOKAmW9yZGluZS4gVmVycmFpIG5vdGlmaWNhdG8gY29uIHVuIHNtcyBlIHVuYSBtYWlsIHF1YW5kbyBs4oCZb3JkaW5lIGUgc3RhdG8gYWNjZXR0YXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhIHF1YWxpZmljYXRvLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbMV19XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UHVsaXppZTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+SGFpIGJpc29nbm8gZGkgdW4gc2Vydml6aW8gZGkgcHVsaXppZSBwZXIgbGEgY2FzYSwgbOKAmXVmZmljaW8gbyBpbCBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTg0ZmNmZWU5ZDY3NTI0MjNhNjFlNzllJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDEsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigxLCAnb2ZmJylcXFwiPlByZW5vdGEgUHVsaXppZTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzJdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkVsZXR0cmljaXN0YTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+VGkgc2VydmUgdW4gZWxldHRyaWNpc3RhIHF1YWxpZmljYXRvIGUgYWZmaWRhYmlsZSBwZXIgbGF2b3JpIGRpIGNhc2EsIHVmZmljaW8gbyBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWU0MWRmMWJhZmE0MWNkYmZiOWQxJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDIsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigyLCAnb2ZmJylcXFwiPlByZW5vdGEgRWxldHRyaWNpc3RhPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZCBncmVlbi1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0zXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1szXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5JZHJhdWxpY288L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGlkcmF1bGljbyBwcm9mZXNzaW9uaXN0YSwgcHVvaSBwcmVub3RhcmxvIHN1Yml0byBzdSBTdGFyYm9vayBzZW56YSBpbXBlZ25vLjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWRmZTRmMWJhZmE0MWNkYmZiOWNiJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDMsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigzLCAnb2ZmJylcXFwiPlByZW5vdGEgSWRyYXVsaWNvPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjZW50ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgUmVuZGkgbGEgdHVhIHZpdGEgcGnDuSBmYWNpbGUuIFByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxPkNvbWUgZnVuemlvbmE/PC9oMT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlNlbGV6aW9uYSBpIHNlcnZpemk8L2Rpdj5cXG4gICAgICAgICAgPHA+T2duaSBjYXRlZ29yaWEgaGEgdW5hIGxpc3RhIGRpIHNlcnZpemkuIFNlbGV6aW9uYSBxdWVsbGkgZGkgcXVpIGhhaSBiaXNvZ25vLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlByZW5vdGEgdW4gYXBwdW50YW1lbnRvPC9kaXY+XFxuICAgICAgICAgIDxwPkluc2VyaXNjaSBpIGRhdGkgbmVjZXNzYXJpIGRlbCBvcmRpbmUgZSBpbnZpYSBsYSByaWNoaWVzdGEuPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9ybVxcXCI+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5JbnZpYSByaWNoaWVzdGE8L2E+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ucy1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1iZWxsXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50aW5nXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJpY2V2aSBsYSBjb25mZXJtYSBlIHJpbGFzc2F0aSE8L2Rpdj5cXG4gICAgICAgICAgPHA+VW4gcHJvZmVzc2lvbmlzdGEgc2kgcHJlc2VudGVyw6AgbmVsbGEgZGF0YSBlIGzigJlvcmEgZGVsIGFwcHVudGFtZW50by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5MZSBwcmluY2lwYWxpIGNpdHTDoDwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5WYXJlc2U8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5NaWxhbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItM1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5Ub3Jpbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBjaGUgdGkgZGEgbGEgcG9zc2liaWxpdMOgIGRpIHByZW5vdGFyZSBpIHByb2Zlc3Npb25pc3RpIG5lbGwnb3JhIGUgZGF0YSBjaGUgdHUgZGVzaWRlcmkgc2VuemEgZG92ZXIgY2hpYW1hcmUgZSBsYXNjaWFyZSBhcHB1bnRhbWVudGkgdHJhbWl0ZSB0ZWxlZm9ubyBvIGVtYWlsLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgd2l0aG91dC10YWJzXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtbmF2aWdhdGVcXFwiPlxcbiAgICAgIDxhICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiB0YWJzXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzp0YWIuc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJyZW5kZXJQYWdlKHRhYi5uYW1lKVxcXCI+XFxuICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBvcmRlcnMtY29udGFpbmVyXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlcnMtZXJyb3JcXFwiICpuZ0lmPVxcXCJwYWdlRGF0YS5sZW5ndGggPT09IDAgJiYgcmVxdWVzdElzQ29tcGxldGVcXFwiPnt7ZW1wdHlMaXN0VGl0bGV9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWluZm9ybWF0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBvcmRlciBvZiBwYWdlRGF0YVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBwYWdhbWVudG8uLi4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBBc3NlZ25hdG9cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+PC9zcGFuPiBBbm51bGxhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQXNzZWduYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RpJ1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIHBhZ2FtZW50by4uLi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKGRhdGVGb3JtYXRpbmcoJ25vdycpLCBvcmRlci5kYXRlKSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxhY2tcXFwiPjwvc3Bhbj4gU2NhZHV0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk4ICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBDb21wbGV0YXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj48L3NwYW4+IEFubnVsbGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktbmFtZVxcXCI+XFxuICAgICAgICAgICAge3sgY2F0ZWdvcmllc1tvcmRlci5jYXRlZ29yeV90eXBlXSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZGF0ZVxcXCI+XFxuICAgICAgICAgICAge3sgZGF0ZUZvcm1hdGluZyhvcmRlci5kYXRlKSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItcm93IHByb2R1Y3RzIGNvbC14bC00XFxcIj5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBvcmRlci5kZXRhaWxzXFxcIiBbbmdDbGFzc109XFxcInsnc2VydmljZSc6cHJvZHVjdC50eXBlID09PSAnc2VydmljZSd9XFxcIj57eyBwcm9kdWN0LnRpdGxlIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgIT09ICdzZXJ2aWNlJyAmJiBwcm9kdWN0LmFtb3VudCA+IDBcXFwiPuKCrHt7IHByb2R1Y3QuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSB0b3RhbFxcXCI+VG90YWxlIDxpPuKCrHt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PiAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygb3JkZXIuZGV0YWlsc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2UnOnByb2R1Y3QudHlwZSA9PT0gJ3NlcnZpY2UnfVxcXCI+e3sgcHJvZHVjdC50aXRsZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC50eXBlICE9PSAnc2VydmljZSdcXFwiPnt7IHByb2R1Y3QuZGVzY3JpcHRpb24gfX08L2k+PC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIml0ZW0gdG90YWxcXFwiPlRvdGFsZSA8aT7igqx7eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+SW5kaXJpenpvOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXQgfX0sIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0X251bWJlciB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLmNpdHkgfX0sIHt7IG9yZGVyLmFkZHJlc3MucG9zdGFsX2NvZGUgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5wcm92aW5jZSB9fSwge3sgb3JkZXIuYWRkcmVzcy5jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwgfHwgb3JkZXIuc3RhdHVzPT09MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPkluIGF0dGVzYSBkaSBjb25mZXJtYS4uLjwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIubWVyY2hhbnQgJiYgb3JkZXIubWVyY2hhbnQgIT09IG51bGwgJiYgb3JkZXIuc3RhdHVzPT09MVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLm1lcmNoYW50LnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIihvcmRlci5jdXN0b21lciB8fCBvcmRlci5jdXN0b21lciAhPT0gbnVsbCkgJiYgb3JkZXIuc3RhdHVzPT09OTggJiYgYXV0aERhdGEuX2lkICE9PSBvcmRlci5jdXN0b21lcl9pZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIob3JkZXIuY3VzdG9tZXIgfHwgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTk4ICYmIGF1dGhEYXRhLl9pZCA9PT0gb3JkZXIuY3VzdG9tZXJfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLmN1c3RvbWVyICYmIG9yZGVyLmN1c3RvbWVyICE9PSBudWxsICYmICghb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09OTlcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLXJvdyBkZXNjcmlwdGlvbiBjb2wteGwtNFxcXCI+XFxuICAgICAgICAgICAgICB7eyBvcmRlci5kZXNjcmlwdGlvbiB9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZm9vdGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29kZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+Q09ESUNFOjwvc3Bhbj5cXG4gICAgICAgICAgICB7eyBvcmRlci5faWQgfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29tcGxldGFPcmRlcihvcmRlci5faWQpXFxcIj5Db21wbGV0YSBzZXJ2aXppbzwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5QcmV2ZW50aXZvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiIChjbGljayk9XFxcImVkaXRPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+TW9kaWZpY2E8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKG9yZGVyLl9pZClcXFwiPkNvbmZlcm1hIHNlcnZpemlvPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihvcmRlci5faWQpXFxcIj5SZWF0dGl2YSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsT3JkZXIob3JkZXIuX2lkKVxcXCI+QW5udWxsYSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY29udGludWVPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJvY2VkaTwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9jayBhcmNoaXZlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAzICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIiAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2Rpdj4gLS0+XFxuPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1wYWdlXFxcIiBbbmdDbGFzc109XFxcInt3aGl0ZUJnOiBzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJyB8fCBzZWxlY3RUYWIgPT09ICdwcml2YWN5JyB8fCBzZWxlY3RUYWIgPT09ICdoZWxwJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHdpdGhvdXQtdGFic1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGVmdC1uYXZpZ2F0ZVxcXCIgKHN3aXBlbGVmdCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCIgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiPlxcbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWxlZnQucHgnOiBkZWx0YX1cXFwiPlxcbiAgICAgICAgICA8YSAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6dGFiLnVybCA9PT0gc2VsZWN0VGFifVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9wcm9maWxlJywgdGFiLnVybF1cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDxhICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj48c3Bhbj48L3NwYW4+PGRpdj5Fc2NpPC9kaXY+PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1zZXR0aW5nc1xcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3NldHRpbmdzJ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkluZm9ybWF6aW9uaSBkZWwgYWNjb3VudDwvZGl2PlxcbiAgICAgICAgPGZvcm0gI2NoYW5nUHJvZmlsZT1cXFwibmdGb3JtXFxcIj5cXG4gICAgICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgICAgIDxsYWJlbD5OT01FIENPTVBMRVRPPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOb21lIENvZ25vbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmZ1bGxuYW1lXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPkNvZ25vbWU8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdG5hbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmxhc3RuYW1lXFxcIiByZXF1aXJlZCBkaXNhYmxlZD4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5Ob21lIEF6aWVuZGE8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGF0cm9ueW1pY1xcXCIgI2Z1bGxuYW1lPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucGF0cm9ueW1pY1xcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGxhYmVsPkNFTExVTEFSRTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk51bWVyb1xcXCIgI3Bob25lX251bWJlcj1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBob25lX251bWJlclxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8bGFiZWw+RU1BSUw8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbmRpcml6em8gZW1haWxcXFwiIHZhbHVlPVxcXCJcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmVtYWlsXFxcIiByZXF1aXJlZCBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCIgZGlzYWJsZWQ+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBhc3N3b3JkLWJsb2NrXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFzc3dvcmQtY29udGFpbmVyXFxcIj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwYXNzd29yZFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08c3Bhbj7igKLigKLigKLigKLigKLigKLigKLigKLigKLigKLigKI8L3NwYW4+LS0+XFxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2hhbmdlLXBhc3N3b3JkXFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCI+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIgc2Vjb25kXFxcIj5JbmRpcml6em8gZGkgZmF0dHVyYXppb25lPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5JbmRpcml6em8gZGVsIGRvbWljaWxpbzwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJhZGRyZXNzMVxcXCIgI3N0cmVldD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnN0cmVldFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBWZXJkaSAxM1xcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+Q2l0dMOgIGUgQ0FQPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJhZGRyZXNzMlxcXCIgI2NpdHk9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5jaXR5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2l0dMOgXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBzZWNvbmRcXFwiIG5hbWU9XFxcIm51bWJlcjJcXFwiICNwb3N0YWxfY29kZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBvc3RhbF9jb2RlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ0FQXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5Qcm92aW5jaWEgZSBOYXppb25lPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJjaXR5XFxcIiAjcHJvdmluY2U9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wcm92aW5jZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlByb3ZpbmNpYVxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgc2Vjb25kXFxcIiBuYW1lPVxcXCJjb3VudHJ5XFxcIiAjY291bnRyeT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmNvdW50cnlcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXppb25lXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5QYXJ0aXRhIElWQTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaXZhXFxcIiBwbGFjZWhvbGRlcj1cXFwiUC5JVkFcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkNvZGljZSBGaXNjYWxlPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvZGljZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvZGljZSBGaXNjYWxlXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgICAgICAgICA8c3Ryb25nICpuZ0lmPVxcXCJmb3JtRXJyb3IudGl0bGUubGVuZ3RoID4gMFxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvc3Ryb25nPiB7e2Zvcm1FcnJvci5tZXNzYWdlfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVQcm9maWxlKClcXFwiPkFnZ2lvcm5hIEluZm9ybWF6aW9uaTwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNpZ24tb3V0XFxcIj48L3NwYW4+IExvZyBvdXQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRzLXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdwYXltZW50J1xcXCI+XFxuICAgICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWxvZ28ge3sgZm9ybWF0Q3NzQ2xhc3MoY2FyZC5icmFuZCkgfX1cXFwiPjxzcGFuPioqKioge3sgY2FyZC5sYXN0NCB9fTwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlzRGVmYXVsdFxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkID09PSBjYXJkLmlkXFxcIj5EZWZhdWx0PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkICE9PSBjYXJkLmlkXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RDYXJkKGNhcmQuaWQpXFxcIj5EZWZhdWx0PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJkZWxldGVDYXJkKGNhcmQuaWQpXFxcIj5SaW11b3ZpPC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImVkaXRDYXJkKGNhcmQuaWQpXFxcIj5Nb2RpZmljYTwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pbmZvcm1hdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Ob21lOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5OdW1lcm86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICoqKioge3sgY2FyZC5sYXN0NCB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNjYWRlbnphOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmV4cF9tb250aCB9fS97eyBmb3JtYXRZZWFyKGNhcmQuZXhwX3llYXIpIH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGlwbzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5icmFuZCB9fSB7eyBjYXJkLmZ1bmRpbmcgfX0ge3sgY2FyZC5vYmplY3QgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaW5mb3JtYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+SW5kaXJpenpvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3NfbGluZTEgfX0ge3sgY2FyZC5hZGRyZXNzX2xpbmUyIH19IDxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3Nfc3RhdGUgfX0ge3sgY2FyZC5hZGRyZXNzX2NpdHkgfX0gPGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYWRkcmVzc196aXAgfX0ge3sgY2FyZC5hZGRyZXNzX2NvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmV3LWNhcmRcXFwiIChjbGljayk9XFxcImFkZE5ld0NhcmQoKVxcXCI+XFxuICAgICAgICAgICAgQWdnaXVuZ2kgdW4gbWV0b2RvIGRpIHBhZ2FtZW50b1xcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJ1xcXCI+XFxuICAgICAgICA8cD48c3Ryb25nPjEuIEFDQ0VTU08gRSBSRUdPTEFNRU5UTyBERUwgU0lUTyBTVEFSQk9PSzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4xLiBBY2Nlc3NvIGFsIFNpdG86IDwvc3Ryb25nPkXigJkgcG9zc2liaWxlIGF2ZXJlIGFjY2Vzc28gYWQgYWxjdW5lIGFyZWUgZGVsIFNpdG8gd2ViIGFuY2hlIHNlbnphIGVmZmV0dHVhcmUgdW4gT3JkaW5lIG8gc2VuemEgcHJvY2VkZXJlIGFsbGEgcmVnaXN0cmF6aW9uZSBkZWkgcHJvcHJpIGRhdGkuIExhIG1hZ2dpb3IgcGFydGUgZGVsbGUgYXJlZSBkZWwgU2l0byBzb25vIGFjY2Vzc2liaWxpIGEgY2hpdW5xdWUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjIuIEFjY2V0dGF6aW9uZSBkZWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IExhIG5hdmlnYXppb25lIGluIHF1YWx1bnF1ZSBhcmVhIGRlbCBTaXRvIGNvbXBvcnRhIGwnYWNjZXR0YXppb25lIGRlbCBSZWdvbGFtZW50byBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGVkIHV0ZW50aSBkZWwgU2l0byBjaGUgcmlmaXV0aW5vIGRpIGFjY2V0dGFyZSBpbCBSZWdvbGFtZW50byBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGxhc2NpYXJlIGltbWVkaWF0YW1lbnRlIGlsIFNpdG8gZSBub24gYXZyYW5ubyBsYSBwb3NzaWJpbGl0w6AgZGkgb3JkaW5hcmUgc2Vydml6aSB0cmFtaXRlIGlsIFNpdG8gc3Rlc3NvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS4zLiBNb2RpZmljaGUgYWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IFNUQVJCT09LIGhhIGZhY29sdMOgIGRpIG1vZGlmaWNhcmUgaWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gcXVhbHNpYXNpIG1vbWVudG8uIE9jY29ycmUgcGVydGFudG8gY29udHJvbGxhcmUgcGVyaW9kaWNhbWVudGUgaWwgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gdmlnb3JlIGFsIG1vbWVudG8gcG9pY2jDqSBlc3NhIHZpbmNvbGEgaSB2aXNpdGF0b3JpIGUgZ2xpIHV0ZW50aSBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHNvbm8gdGVudXRpIGFsIHJpc3BldHRvIGRlbGxlIHBvbGljeSBlIGRlbGxhIGRpc2NpcGxpbmEgaW4gdmlnb3JlIGFsIG1vbWVudG8gaW4gY3VpIGVmZmV0dHVhbm8gdW4gT3JkaW5lIHRyYW1pdGUgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjQuIFJlc3BvbnNhYmlsaXTDoDo8L3N0cm9uZz4gU3BldHRhIGFpIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gcHJlZGlzcG9ycmUgcXVhbnRvIG5lY2Vzc2FyaW8gcGVyIGF2ZXJlIGFjY2Vzc28gYWwgU2l0byBzdGVzc28uIElub2x0cmUsIGkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGdhcmFudGlyZSBjaGUgdHV0dGkgY29sb3JvIGNoZSBoYW5ubyBhY2Nlc3NvIGFsIFNpdG8gdHJhbWl0ZSBsYSBsb3JvIGNvbm5lc3Npb25lIGFkIEludGVybmV0IHNpYW5vIGEgY29ub3NjZW56YSBkZWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gZSBsYSByaXNwZXR0aW5vLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4gU1RBVFVTIERFTEzigJlVVEVOVEUgREVMIFNJVE8gU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuMS4gQ2FwYWNpdMOgIGdpdXJpZGljYSBlZCBldMOgOiA8L3N0cm9uZz5FZmZldHR1YW5kbyB1biBPcmRpbmUgdHJhbWl0ZSBpbCBTaXRvLCBs4oCZdXRlbnRlIGdhcmFudGlzY2U6PGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMS48L3N0cm9uZz4gZGkgYXZlciBsYSBjYXBhY2l0w6AgZGkgYWdpcmUgZSBjb25jbHVkZXJlIGNvbnRyYXR0aSBnaXVyaWRpY2FtZW50ZSB2aW5jb2xhbnRpPGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMi48L3N0cm9uZz4gZGkgYXZlcmUgY29tcGl1dG8gMTggYW5uaTwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+My4gTU9EQUxJVMOAIERJIEVNSVNTSU9ORSBERUxMIE9SRElORSBFIERJIEVMQUJPUkFaSU9ORSBERUxM4oCZT1JESU5FPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4zLjEuIENvbXBpbGF6aW9uZSBkZWxs4oCZT3JkaW5lOiA8L3N0cm9uZz5Eb3BvIGF2ZXIgc2VsZXppb25hdG8gaWwgc2Vydml6aW8gY2hlIGludGVuZGUgb3JkaW5hcmUgZGEgdW4gcHJvZmVzc2lvbmlzdGEgcHJlc2NlbHRvIGRhbGxhIHBpYXR0YWZvcm1hIGVkIGF2ZXIgZm9ybml0byBsZSBpbmZvcm1hemlvbmksIGzigJl1dGVudGUgaGEgZmFjb2x0w6AgZGkgZWZmZXR0dWFyZSBs4oCZT3JkaW5lIGNsaWNjYW5kbyBzdWwsIG8gc2VsZXppb25hbmRvIGlsLCBwdWxzYW50ZSDigJxQcm9jZWRpIGNvbiBsJ29yZGluZeKAnSBlIOKAnFByb2NlZGkgY29uIGwnYWNxdWlzdG/igJ0uIFNpIHJpY29yZGEgY2hlIMOoIGltcG9ydGFudGUgY29udHJvbGxhcmUgdHV0dGUgbGUgaW5mb3JtYXppb25pIGltbWVzc2UgZSBjb3JyZWdnZXJlIGV2ZW50dWFsaSBlcnJvcmkgcHJpbWEgZGkgY2xpY2NhcmUgc3VsIHB1bHNhbnRlIG8gZGkgc2VsZXppb25hcmxvIHBvaWNow6ksIGRvcG8gYXZlcmxvIGZhdHRvLCBpbCBwcm9jZWRpbWVudG8gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgaGEgaW5pemlvIGUgbm9uIMOoIHBpw7kgcG9zc2liaWxlIGNvcnJlZ2dlcmUgZXZlbnR1YWxpIGVycm9yaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbOKAmU9yZGluZTogPC9zdHJvbmc+VW5hIHZvbHRhIGNoZSBs4oCZT3JkaW5lIMOoIHN0YXRvIGlub2x0cmF0byBlIGlsIHBhZ2FtZW50byDDqCBzdGF0byBhdXRvcml6emF0byBub24gw6ggcGnDuSBwb3NzaWJpbGUgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBs4oCZT3JkaW5lIGUgbm9uIHNpIGhhIGRpcml0dG8gYWQgYWxjdW4gcmltYm9yc28uIE92ZSBkZXNpZGVyaSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGzigJlPcmRpbmUsIGzigJl1dGVudGUgcHXDsiByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGksIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBjb211bmljYXJnbGkgbGEgcmljaGllc3RhIGRlbGzigJl1dGVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgcG90cmViYmUgYXZlcmUgZ2nDoCBhdnV0byBpbml6aW8uIElsIGNsaWVudGUsIGFpIHNlbnNpIGRlbGwnYXJ0LiA1NSBsZXR0LiBhKSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBub24gaGEgZGlyaXR0byBhIHJlY2VkZXJlIGRhZ2xpIE9yZGluaSBlZmZldHR1YXRpIHVuYSB2b2x0YSBjaGUgaWwgYmVuZSBvIHNlcnZpemlvIHJpY2hpZXN0byDDqCBzdGF0byBjb25zZWduYXRvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My4zLiBBdXRvcml6emF6aW9uZSBhbCBwYWdhbWVudG86PC9zdHJvbmc+IEluIGNhc28gZGkgbWFuY2F0YSBhdXRvcml6emF6aW9uZSByZWxhdGl2YSBhZCB1biBxdWFsc2lhc2kgcGFnYW1lbnRvLCBs4oCZT3JkaW5lIG5vbiB2aWVuZSBlbGFib3JhdG8gbyBub24gdmllbmUgY29tdW5pY2F0byBhbGxhIHBpYXR0YWZvcm1hLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My40LiBFbGFib3JhemlvbmUgZGVsbOKAmU9yZGluZSBlIHJpZml1dG8gZGkgT3JkaW5pIGRhIHBhcnRlIGRlbCBwcm9mZXNzaW9uaXN0YTogPC9zdHJvbmc+QWxsYSByaWNlemlvbmUgZGVsbOKAmU9yZGluZSwgU1RBUkJPT0sgbmUgaW5pemlhIGzigJllbGFib3JhemlvbmUgY29uIGxhIHRyYXNtaXNzaW9uZSBkZWxsbyBzdGVzc28gYWkgcHJvZmVzc2lvbmlzdGkgaW50ZXJlc3NhdGkgZSBub3RpZmljYSBhbGzigJl1dGVudGUsIHRyYW1pdGUgc21zIGUgbWFpbCwgY2hlIGzigJlPcmRpbmUgw6ggc3RhdG8gYXNzZWduYXRvLiBTaSBzcGVjaWZpY2EgY2hlIHF1YWxzaWFzaSBwYWdpbmEgZGkgY29uZmVybWEgY2hlIGzigJl1dGVudGUgcG9zc2EgdmlzdWFsaXp6YXJlIHN1bCBTaXRvIGUgcXVhbHNpYXNpIGNvbmZlcm1hIGRpIE9yZGluZSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcmljZXZhIHRyYW1pdGUgZS1tYWlsIGluZGljYW5vIGVzY2x1c2l2YW1lbnRlIGNoZSBsJ09yZGluZSBkZWxs4oCZdXRlbnRlIMOoIHN0YXRvIGFzc2VnbmF0byBvIMOoIGluIGNvcnNvLiBTVEFSQk9PSyBpbmNvcmFnZ2lhIHR1dHRpIGkgcHJvcHJpIHByb2Zlc3Npb25pc3RpIGFkIGFjY2V0dGFyZSB0dXR0aSBnbGkgT3JkaW5pIGVkIGEgY29tdW5pY2FyZSB0ZW1wZXN0aXZhbWVudGUgZXZlbnR1YWxpIHJpZml1dGksIGUgY29tdW5pY2EgYWxs4oCZdXRlbnRlIChnZW5lcmFsbWVudGUgdHJhbWl0ZSBlLW1haWwpIG5vbiBhcHBlbmEgc2lhIHJhZ2lvbmV2b2xtZW50ZSBwb3NzaWJpbGUgb2duaSBldmVudHVhbGUgcmlmaXV0byBkYSBwYXJ0ZSBkZWwgcHJvZmVzc2lvbmlzdGEuIEluIG9nbmkgY2FzbywgaSBwcm9mZXNzaW9uaXN0aSBwb3Nzb25vIHNjZWdsaWVyZSBkaSByaWZpdXRhcmUgZ2xpIE9yZGluaSBpbiBxdWFsc2lhc2kgbW9tZW50byBwZXIgaWwgZmF0dG8gZGkgZXNzZXJlIGVjY2Vzc2l2YW1lbnRlIGltcGVnbmF0aSwgYSBjYXVzYSBkZWxsZSBjb25kaXppb25pIGF0bW9zZmVyaWNoZSBvIHBlciBxdWFsc2lhc2kgYWx0cmEgcmFnaW9uZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuNS4gRmluaXR1cmEgZGVsIHNlcnZpemlvOjwvc3Ryb25nPiBJIHRlbXBpIHN0aW1hdGkgcGVyIGkgc2Vydml6aSBkYWwgaW5pemlvIGEgZmluZSBsYXZvcmkgdmFyaWFubyB0cmEgMS0yIGdpb3JuaSBhIHNlY29uZGEgZGVsIHRpcG8gZGkgc2Vydml6aW8gb3JkaW5hdG8uIFNUQVJCT09LIGUgaSBwcm9mZXNzaW9uaXN0aSBub24gZ2FyYW50aXNjb25vIGNoZSBpIHNlcnZpemkgdmVycmFubm8gZmluaXRpIGVudHJvIGkgdGVtcGkgc3RpbWF0aS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjQuIFBSRVpaTyBFIFBBR0FNRU5UTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NC4xLiBJVkEgZSBjb3N0aSBkaSBzZXJ2aXppbzo8L3N0cm9uZz4gSSBwcmV6emkgc29ubyBxdWVsbGkgaW5kaWNhdGkgc3VsIFNpdG8uIEkgcHJlenppIHNvbm8gY29tcHJlbnNpdmkgZGkgSVZBLiBUYWxpIGNvc3RpIHZlbmdvbm8gYWdnaXVudGkgYWxs4oCZaW1wb3J0byB0b3RhbGUgZG92dXRvLCBzZSBhcHBsaWNhYmlsaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMi4gRXJyYXRhIGluZGljYXppb25lIGRlbCBwcmV6em86PC9zdHJvbmc+IElsIHByZXNlbnRlIFNpdG8gd2ViIGNvbnRpZW5lIHVuIHZhc3RvIG51bWVybyBkaSBtZW51IGVkIMOoIHNlbXByZSBwb3NzaWJpbGUgY2hlIGFsY3VuaSBkaSBlc3NpIHBvc3Nhbm8gcmVjYXJlIHVuYSBpbmRpY2F6aW9uZSBpbmVzYXR0YSBkZWwgcHJlenpvLiBRdWFsb3JhIGlsIHByZXp6byBlc2F0dG8gZGkgdW4gT3JkaW5lIHNpYSBwacO5IGVsZXZhdG8gZGVsIHByZXp6byBpbmRpY2F0byBzdWwgU2l0bywgU1RBUkJPT0sgbm9ybWFsbWVudGUgcHJvdnZlZGUgYSBjb250YXR0YXJlIGzigJl1dGVudGUgcHJpbWEgZGVsbGEgc3BlZGl6aW9uZSBkZWxsJ09yZGluZS4gSW4gdGFsIGNhc28sIG7DqSBTVEFSQk9PSyBuw6kgaWwgcHJvZmVzc2lvbmlzdGEgaW50ZXJlc3NhdG8gaGFubm8gYWxjdW4gb2JibGlnbyBkaSBhc3NpY3VyYXJlIGNoZSBsJ09yZGluZSB2ZW5nYSBmb3JuaXRvIGFsbOKAmXV0ZW50ZSBhbCBwcmV6em8gaW5mZXJpb3JlIGVycm9uZWFtZW50ZSBpbmRpY2F0byBuw6kgZGkgcmltYm9yc2FyZSBhbGzigJl1dGVudGUgbGEgZGlmZmVyZW56YSByaXNwZXR0byBhbCBwcmV6em8gZXJyYXRvLiBJbiBjYXNvIGlsIHByZXp6byBzaWEgZWNjZXNzaXZhbWVudGUgZWxldmF0byByaXNwZXR0byBhbCBwcmV6em8gb3JpZ2luYXJpYW1lbnRlIGNvbnZlbnV0byBlIGwndXRlbnRlIHNpYSB1biBjb25zdW1hdG9yZSBhaSBzZW5zaSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBsJ3V0ZW50ZSBhdnLDoCBmYWNvbHTDoCBkaSByZWNlZGVyZSBkYWxsJ09yZGluZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMy4gTW9kYWxpdMOgIGRpIHBhZ2FtZW50bzo8L3N0cm9uZz4gSWwgcGFnYW1lbnRvIGRlaSBzZXJ2aXppIGRldmUgZXNzZXJlIGVmZmV0dHVhdG8gbWVkaWFudGUgdW5hIGNhcnRhIGRpIGNyZWRpdG8vZGViaXRvLjxicj5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4gU0VSVklaSU8gQ0xJRU5USTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4xIERpc3Bvc2l6aW9uaSBHZW5lcmFsaTo8L3N0cm9uZz4gU1RBUkJPT0sgY29uc2lkZXJhIGlsIFNlcnZpemlvIENsaWVudGkgZXN0cmVtYW1lbnRlIGltcG9ydGFudGUuIElsIFNlcnZpemlvIENsaWVudGkgY2VyY2EgZHVucXVlIGRpIHByZXN0YXJlIGFzc2lzdGVuemEgYWxs4oCZdXRlbnRlLCBxdWFuZG8gcG9zc2liaWxlLCBpbiBjYXNvIGRpIHByb2JsZW1pIGNvbiBsJ09yZGluZS4gTOKAmXV0ZW50ZSBwdcOyIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIFNlcnZpemlvIENsaWVudGkgYW5kYW5kbyBzdWxsYSBwYWdpbmEgaGVscCBkZWwgc2l0by48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbCdPcmRpbmU6PC9zdHJvbmc+IE92ZSBs4oCZdXRlbnRlIGRlc2lkZXJpIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgaWwgcHJvcHJpbyBPcmRpbmUgZG9wbyBjaGUgZXNzbyBzaWEgc3RhdGEgaW5vbHRyYXRvIGUgaWwgcmVsYXRpdm8gcGFnYW1lbnRvIGF1dG9yaXp6YXRvLCBs4oCZdXRlbnRlIGhhIGZhY29sdMOgIGRpIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSywgY29uIGxlIG1vZGFsaXTDoCBzb3ByYSBkZXNjcml0dGUsIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgY29tdW5pY2FyZSBsZSByaWNoaWVzdGUgZGVsIGNsaWVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGwnT3JkaW5lIHBvdHJlYmJlIGF2ZXJlIGdpw6AgYXZ1dG8gaW5pemlvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS4zLiBSZWNsYW1pIGUgZmVlZGJhY2sgZGEgcGFydGUgZGVnbGkgdXRlbnRpOjwvc3Ryb25nPiBOZWxs4oCZZXZlbnR1YWxpdMOgIGNoZSBs4oCZdXRlbnRlIG5vbiBzaWEgc29kZGlzZmF0dG8gZGVsbGEgcXVhbGl0w6AgZGkgdW4gcXVhbHNpYXNpIHNlcnZpemlvIG8gZGVsIHNlcnZpemlvIGZvcm5pdG8gZGEgdW4gcHJvZmVzc2lvbmlzdGEsIFNUQVJCT09LIGludml0YSBs4oCZdXRlbnRlIGEgZmFyIGNvbm9zY2VyZSBsYSBwcm9wcmlhIG9waW5pb25lIHRyYW1pdGUgaWwgU2l0bywgaW4gZm9ybWEgZGkgdmFsdXRhemlvbmksIGNvbW1lbnRpIGUgcmVjZW5zaW9uaSBjaGUgcmlmbGV0dGFubyBsYSBwcm9wcmlhIGVzcGVyaWVuemEuIExlIFJlY2Vuc2lvbmkgc29ubyB1bmEgcGFydGUgaW1wb3J0YW50ZSBkZWwgcHJvY2Vzc28gZGkgY29udHJvbGxvIHF1YWxpdMOgIGRpIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS40LiBSaXNhcmNpbWVudG86PC9zdHJvbmc+IE5lbGzigJlldmVudHVhbGl0w6AgY2hlIGzigJl1dGVudGUgbm9uIHNpYSBzb2RkaXNmYXR0byBkZWxsYSBxdWFsaXTDoCBkaSB1biBxdWFsc2lhc2kgc2Vydml6aW8gbyBkZWwgc2Vydml6aW8gZm9ybml0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBlIGRlc2lkZXJpIHJpY2hpZWRlcmUgdW4gcmltYm9yc28sIHVuYSByaWR1emlvbmUgcHJvcG9yemlvbmFsZSBkZWwgcHJlenpvIG8gcXVhbHNpYXNpIGFsdHJhIGZvcm1hIGRpIHJpc2FyY2ltZW50bywgw6ggdGVudXRvIGEgY29udGF0dGFyZSBkaXJldHRhbWVudGUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBwcmVzZW50YXJlIGlsIHByb3ByaW8gcmVjbGFtbyBlLCBzZSBkZWwgY2FzbywgYWQgb3NzZXJ2YXJlIGxlIHByb2NlZHVyZSBkaSByZWNsYW1vIHByZXZpc3RlIGRhbCBwcm9mZXNzaW9uaXN0YSBzdGVzc28uIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gc2lhIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEsIG8gcXVhbG9yYSBpbCBwcm9mZXNzaW9uaXN0YSByaWZpdXRpIGRpIG9jY3VwYXJzaSBkZWwgcmVjbGFtbyBkZWxs4oCZdXRlbnRlLCBxdWVzdOKAmXVsdGltbyBwdcOyIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyBjb24gbGUgbW9kYWxpdMOgIHNvcHJhIGRlc2NyaXR0ZSBlbnRybyA0OCBvcmUgZGFsbOKAmWlub2x0cm8gZGVsbCdPcmRpbmUgZSB1bm8gZGVpIENvbnN1bGVudGkgZGVsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgdGVudGVyw6AgZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIHJpY2hpZWRlcmUgdW4gcmlzYXJjaW1lbnRvIHBlciBjb250byBkZWxs4oCZdXRlbnRlLiBTaSBmYSBwcmVzZW50ZSBjaGUgU1RBUkJPT0sgbm9uIGhhIGFsY3VuIGNvbnRyb2xsbyBzdWkgcHJvZmVzc2lvbmlzdGkgbsOpIHN1bGxhIHF1YWxpdMOgIGRlaSBzZXJ2aXppIG8gc3VsIHNlcnZpemlvIGZvcm5pdG8gZGFpIHByb2Zlc3Npb25pc3RpIHN0ZXNzaSBlIG5vbiDDqCBpbiBncmFkbyBkaSBmb3JuaXJlLCBuw6kgYXNzdW1lIGFsY3VuYSByZXNwb25zYWJpbGl0w6AgbyBpbXBlZ25vIGRpIGZvcm5pcmUsIGFsY3VuIHJpc2FyY2ltZW50byBpbiBmYXZvcmUgZGVsbOKAmXV0ZW50ZSBwZXIgY29udG8gZGkgcXVhbHNpYXNpIHByb2Zlc3Npb25pc3RhLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ni4gTElDRU5aQSBE4oCZVVNPPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz42LjEuIFVzbyBjb25zZW50aXRvOjwvc3Ryb25nPiBF4oCZIGNvbnNlbnRpdG8gYWxs4oCZdXRlbnRlIHV0aWxpenphcmUgaWwgU2l0byBub25jaMOpIHN0YW1wYXJlIGUgc2NhcmljYXJlIGRhbCBTaXRvIGVzdHJhdHRpIGRlbCBTaXRvIHN0ZXNzbyBwZXIgdXNvIHBlcnNvbmFsZSBub24gYXZlbnRlIGZpbmFsaXTDoCBjb21tZXJjaWFsaSBhbGxlIHNlZ3VlbnRpIGNvbmRpemlvbmk6PGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMS4gbOKAmXV0ZW50ZSBub24gZGV2ZSB1dGlsaXp6YXJlIGlsIFNpdG8gaW4gbW9kbyBpbXByb3ByaW8sIGl2aSBpbmNsdXNvIG1lZGlhbnRlIHRlY25pY2hlIGRpIHBpcmF0ZXJpYSBpbmZvcm1hdGljYSAoaGFja2luZykgbyBkaSBlc3RyYXppb25lIGluZm9ybWF0aXp6YXRhIGRpIGRhdGkgKHNjcmFwaW5nKS48L3N0cm9uZz4gPGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMi4gUmVzdHJpemlvbmkgZOKAmXVzbzo8L3N0cm9uZz4gU2Fsdm8gcGVyIHF1YW50byBwcmV2aXN0byBhbCBwYXJhZ3JhZm8gNi4xLCBpbCBwcmVzZW50ZSBTaXRvIG5vbiBwdcOyIGVzc2VyZSB1dGlsaXp6YXRvIGUgbmVzc3VuYSBzdWEgcGFydGUgcHXDsiBlc3NlcmUgcmlwcm9kb3R0YSBvIGFyY2hpdmlhdGEgaW4gYWxjdW4gYWx0cm8gc2l0byB3ZWIgbsOpIHB1w7IgZXNzZXJlIGluc2VyaXRvIGluIGFsY3VuIHNpc3RlbWEgbyBzZXJ2aXppbywgcHViYmxpY28gbyBwcml2YXRvLCBwZXIgaWwgcmVjdXBlcm8gZWxldHRyb25pY28gZGVsbGUgaW5mb3JtYXppb25pIHNlbnphIGxhIHByZXZlbnRpdmEgYXV0b3JpenphemlvbmUgc2NyaXR0YSBkaSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjYuMS4zLiBSaXNlcnZhIGRpIERpcml0dGk6PC9zdHJvbmc+IEkgZGlyaXR0aSBub24gZXNwbGljaXRhbWVudGUgY29uY2Vzc2kgbmVsIHByZXNlbnRlIFNpdG8gd2ViIHNvbm8gcmlzZXJ2YXRpLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4gQUNDRVNTTyBBTCBTRVJWSVpJTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4xLiBEaXNwb25pYmlsaXTDoCBkZWwgU2l0bzo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBzaSBhZG9wZXJpIHBlciBmYXIgc8OsIGNoZSBs4oCZYWNjZXNzbyBhbCBTaXRvIHBvc3NhIGRpIG5vcm1hIGF2dmVuaXJlIHZlbnRpcXVhdHRybyBvcmUgc3UgdmVudGlxdWF0dHJvICgyNGgvMjQpLCBTVEFSQk9PSyBub24gYXNzdW1lIGFsY3VuIG9iYmxpZ28gYSByaWd1YXJkbyBlIG5vbiDDqCByZXNwb25zYWJpbGUgbmVpIGNvbmZyb250aSBkZWxs4oCZdXRlbnRlIG5lbCBjYXNvIGluIGN1aSBpbCBTaXRvLCBpbiBxdWFsc2lhc2kgbW9tZW50byBvIHBlciBwZXJpb2RpIGRpIHF1YWxzaWFzaSBkdXJhdGEsIG5vbiBzaWEgZGlzcG9uaWJpbGUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjEuIFNvc3BlbnNpb25lIGRlbGzigJlhY2Nlc3NvOjwvc3Ryb25nPiBM4oCZYWNjZXNzbyBhbCBwcmVzZW50ZSBTaXRvIHB1w7IgZXNzZXJlIHRlbXBvcmFuZWFtZW50ZSBzb3NwZXNvIGluIHF1YWxzaWFzaSBtb21lbnRvLCBhbmNoZSBzZW56YSBwcmVhdnZpc28uPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjIuIFNpY3VyZXp6YSBpbmZvcm1hdGljYTo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBhZG90dGkgbGUgbWlzdXJlIHByZXNjcml0dGUgcGVyIGxlZ2dlIHBlciBsYSB0dXRlbGEgZGVsbGUgaW5mb3JtYXppb25pIGltbWVzc2UsIGVzc2Egbm9uIMOoIGluIGdyYWRvIGRpIGdhcmFudGlyZSBsYSBzaWN1cmV6emEgZGVpIGRhdGkgdHJhc21lc3NpIGFsIFNpdG8gd2ViOyBsYSB0cmFzbWlzc2lvbmUgdmllbmUgcGVydGFudG8gZWZmZXR0dWF0YSBhIHJpc2NoaW8gZGVsbOKAmXV0ZW50ZS48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAncHJpdmFjeSdcXFwiPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLiBJTkZPUk1BWklPTkkgUkFDQ09MVEUgREEgU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD4xLjEuIE5lbCB2aXNpdGFyZSBpbCBTaXRvIG8gbmVsbOKAmXV0aWxpenphcmUgaWwgU2Vydml6aW8gcGVyIGlub2x0cmFyZSB1biBPcmRpbmUgYWQgdW4gcHJvZmVzc2lvbmlzdGEgdHJhbWl0ZSBpbCBTaXRvLCDDqCBwb3NzaWJpbGUgY2hlIHZlbmdhIHJpY2hpZXN0byBkaSBmb3JuaXJlIGluZm9ybWF6aW9uaSBjaGUgcmlndWFyZGFubyBs4oCZdXRlbnRlLCBpdmkgaW5jbHVzbyBub21lLCByZWNhcGl0aSAocXVhbGkgbnVtZXJvIGRpIHRlbGVmb25vIGZpc3NvLCBkaSB0ZWxlZm9ubyBtb2JpbGUgZSBpbmRpcml6em8gZS1tYWlsKSBlIGRhdGkgcmVsYXRpdmkgYWwgcGFnYW1lbnRvIChxdWFsaSBpIGRhdGkgZGVsbGEgY2FydGEgZGkgY3JlZGl0byBvIGRpIGRlYml0bykuIFNUQVJCT09LIHB1w7IgaW5vbHRyZSByYWNjb2dsaWVyZSBpbmZvcm1hemlvbmkgcmVsYXRpdmUgYWxs4oCZdXRpbGl6em8gZGVsIFNpdG8gZSBkZWwgU2Vydml6aW8gZGEgcGFydGUgZGVsbOKAmXV0ZW50ZSBub25jaMOpIHB1w7IgcmFjY29nbGllcmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbOKAmXV0ZW50ZSBhIHBhcnRpcmUgZGFpIG1hdGVyaWFsaSAocXVhbGkgbWVzc2FnZ2kgZSByZWNlbnNpb25pKSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcHViYmxpY2Egc3VsIFNpdG8gbyB0cmFzbWV0dGUgYWwgU2l0byBvIGNoZSBpbnZpYSBhIFNUQVJCT09LIHRyYW1pdGUgZS1tYWlsIG8gcGVyIGxldHRlcmEuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLiBVU08gREVMTEUgSU5GT1JNQVpJT05JPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+Mi4xLiBMZSBpbmZvcm1hemlvbmkgZGVnbGkgdXRlbnRpIGNvbnNlbnRvbm8gYSBTVEFSQk9PSyBkaSBmb3JuaXJlIGFnbGkgdXRlbnRpIHN0ZXNzaSBs4oCZYWNjZXNzbyBhbGxlIHNlemlvbmkgZGVsIFNpdG8gY3VpIHNvbm8gaW50ZXJlc3NhdGkgZSBkaSBmb3JuaXJlIGlsIFNlcnZpemlvLiBFc3NlIG1ldHRvbm8gaW5vbHRyZSBTVEFSQk9PSyBpbiBncmFkbyBkaSBmYXR0dXJhcmUgZ2xpIGltcG9ydGkgZG92dXRpIGUgY29uc2VudG9ubyBhIFNUQVJCT09LIG8gYWQgdW4gcHJvZmVzc2lvbmlzdGEgY3VpIGzigJl1dGVudGUgYWJiaWEgaW5vbHRyYXRvIHVuIE9yZGluZSBkaSBjb250YXR0YXJlIGzigJl1dGVudGUgaW4gbWVyaXRvIGFsIFNlcnZpemlvLCBvdmUgbmVjZXNzYXJpby4gQWQgZXNlbXBpbywgU1RBUkJPT0sgZS9vIGlsIHByb2Zlc3Npb25pc3RhIHBvc3Nvbm8gdXRpbGl6emFyZSBpIGRhdGkgZGVsbOKAmXV0ZW50ZSBwZXIgZm9ybmlyZSBhbGxvIHN0ZXNzbyBhZ2dpb3JuYW1lbnRpIHN1bGxvIHN0YXRvIGRlbGwnT3JkaW5lIG8gYWx0cmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbGEgc3Rlc3NhIG1lZGlhbnRlIGUtbWFpbCwgcGVyIHRlbGVmb25vIGZpc3NvIG8gbW9iaWxlIG8gdHJhbWl0ZSBtZXNzYWdnaXN0aWNhIG1vYmlsZS4gSW5vbHRyZSwgU1RBUkJPT0sgdXRpbGl6emEgZWQgYW5hbGl6emEgbGUgaW5mb3JtYXppb25pIHJhY2NvbHRlIGFsIGZpbmUgZGkgZ2VzdGlyZSwgc29zdGVuZXJlLCBtaWdsaW9yYXJlIGUgc3ZpbHVwcGFyZSBsYSBwcm9wcmlhIGF0dGl2aXTDoCBpbXByZW5kaXRvcmlhbGUsIHBlciBldmVudHVhbGkgYWx0cmUgZmluYWxpdMOgIHN0YXRpc3RpY2hlIG8gYW5hbGl0aWNoZSBub25jaMOpIHBlciBjb250cmlidWlyZSBhbGxhIHByZXZlbnppb25lIGRpIGZyb2RpLiBOZWkgY2FzaSBpbiBjdWkgc2lhIG9wcG9ydHVubywgb3JhIGUgaW4gZnV0dXJvLCBs4oCZdXRlbnRlIHBvdHJlYmJlIGF2ZXJlIGxhIGNhcGFjaXTDoCBkaSBlc3ByaW1lcmUgbGUgcHJvcHJpZSBwcmVmZXJlbnplIHJpZ3VhcmRvIGFsbOKAmXV0aWxpenpvIGRlaSBwcm9wcmkgZGF0aSBzZWNvbmRvIHF1YW50byBwcmV2aXN0byBuZWxsYSBwcmVzZW50ZSBJbmZvcm1hdGl2YSBpbiBtYXRlcmlhIGRpIFByaXZhY3kgZSBkaSBlc2VyY2l0YXJsYSB0cmFtaXRlIGxhIG1ldG9kb2xvZ2lhIHByZXNjZWx0YSBkYWxs4oCZdXRlbnRlIHBlciBs4oCZdXRpbGl6em8gZGVsIFNlcnZpemlvLCBhZCBlc2VtcGlvLCBpbiBtb2RhbGl0w6AgbW9iaWxlLCB0cmFtaXRlIGFwcGxpY2F6aW9uaSBtb2JpbGkgbyBs4oCZZXZlbnR1YWxlIHJhcHByZXNlbnRhemlvbmUgZGVsIFNpdG8uPGJyPlxcbiAgICAgICAgMi4yLiBTVEFSQk9PSyBwdcOyIHV0aWxpenphcmUgbGUgaW5mb3JtYXppb25pIHBlciBjb250YXR0YXJlIGlsIGNsaWVudGUgYWwgZmluZSBkaSBjb25vc2NlcmUsIGNvbiBpbCBzdW8gY29uc2Vuc28sIGxlIHN1ZSBvcGluaW9uaSBzdWwgU2Vydml6aW8gZWQgb2NjYXNpb25hbG1lbnRlIGRpIGluZm9ybWFybG8gZGVsbGUgbW9kaWZpY2hlIG8gZGVnbGkgc3ZpbHVwcGkgaW1wb3J0YW50aSBjaGUgcmlndWFyZGFubyBpbCBTaXRvIG8gaWwgU2Vydml6aW8gc3VkZGV0dG8uPGJyPlxcbiAgICAgICAgMi4zLiBTVEFSQk9PSyBwb3Ryw6AgdXRpbGl6emFyZSBs4oCZaW5kaXJpenpvIGVtYWlsIGZvcm5pdG8gZGFsbOKAmXV0ZW50ZSBkZWwgU2l0byBhbCBtb21lbnRvIGRlbGzigJlhY3F1aXN0byBkaSBwcm9kb3R0aSBpbiB2ZW5kaXRhIHN1bCBTaXRvIHBlciBmYXIgY29ub3NjZXJlIGFsbG8gc3Rlc3NvIHV0ZW50ZSBpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSywgc2ltaWxpIGEgcXVlbGxpIGdpw6AgYWNxdWlzdGF0aSwgY2hlIHBvc3Nhbm8gcmlzY3VvdGVyZSBpbCBzdW8gaW50ZXJlc3NlLiBM4oCZdXRlbnRlIHBvdHLDoCBpbiBvZ25pIG1vbWVudG8sIGdyYXR1aXRhbWVudGUgZSBjb24gZWZmZXR0byBpbW1lZGlhdG8gb3Bwb3JzaSBhbGzigJl1dGlsaXp6byBkZWwgcHJvcHJpbyBpbmRpcml6em8gZW1haWwgcGVyIGxhIHJpY2V6aW9uZSBkaSB0YWxlIG1hdGVyaWFsZSBpbmZvcm1hdGl2byBjbGljY2FuZG8gc3VsbOKAmWFwcG9zaXRvIGxpbmsgaW5zZXJpdG8gaW4gY2FsY2UgYSBjaWFzY3VuYSBlbWFpbCByaWNldnV0YS4gSW4gYWx0ZXJuYXRpdmEsIGzigJl1dGVudGUgcG90csOgIG9wcG9yc2kgYSB0YWxlIHRyYXR0YW1lbnRvIGFuY2hlIG1vZGlmaWNhbmRvIGxlIHByZWZlcmVuemUgZGFsbGEgcmVsYXRpdmEgc2V6aW9uZSBkZWwgcHJvcHJpbyBwcm9maWxvLiBQZXIgZ2VzdGlyZSBsZSBub3RpZmljaGUsIGzigJl1dGVudGUgZG92csOgIGFjY2VkZXJlIGFsbGEgcGFnaW5hIGRlbGxlIGltcG9zdGF6aW9uaSBkZWwgc3VvIHRlbGVmb25vIG8gdGFibGV0IGUgbW9kaWZpY2FyZSBsJ2F1dG9yaXp6YXppb25lIGFsbGUgbm90aWZpY2hlIHBlciBsJ2FwcGxpY2F6aW9uZSBTVEFSQk9PSy4gSW4gY2FzbyBkaSBkaXNhdHRpdmF6aW9uZSBkZWxsZSBub3RpZmljaGUsIGzigJl1dGVudGUgbm9uIHBvdHLDoCBwacO5IHJpY2V2ZXJlIGFnZ2lvcm5hbWVudGkgc3VpIHN1b2kgb3JkaW5pIHZpYSBub3RpZmljaGUuPGJyPlxcbiAgICAgICAgMi40LiBTZSBjb25zZW50aXRvIGRhbGzigJl1dGVudGUgZGVsIFNpdG8sIFNUQVJCT09LIHBvdHLDoCB1dGlsaXp6YXJlIGkgZGF0aSBwZXIgZmFyIGNvbm9zY2VyZSBhbGzigJl1dGVudGUgc3VkZGV0dG8gZ2xpIGFsdHJpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSyBjaGUgcG9zc2FubyByaXNjdW90ZXJlIGlsIHN1byBpbnRlcmVzc2UsIGl2aSBpbmNsdXNpIHNlcnZpemkgY2hlIHBvc3Nhbm8gZXNzZXJlIG9nZ2V0dG8gZGkgZGlyZWN0IG1hcmtldGluZyBtZWRpYW50ZSBzaXN0ZW1pIGRpIG1lc3NhZ2dpc3RpY2EgdHJhbWl0ZSBjZWxsdWxhcmUgZSBhdHRyYXZlcnNvIGxlIG5vdGlmaWNoZS48YnI+XFxuICAgICAgICAyLjUuIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gZGVzaWRlcmkgcGnDuSBjaGUgaSBzdW9pIGRhdGkgc2lhbm8gdXRpbGl6emF0aSBkYSBTVEFSQk9PSyBuZWkgbW9kaSBzb3ByYSBpbmRpY2F0aSBvIGNhbWJpIGlkZWEgcmlndWFyZG8gYWxsYSBwb3NzaWJpbGl0w6AgZGkgZXNzZXJlIGNvbnRhdHRhdG8gaW4gZnV0dXJvLCBzaSBwcmVnYSBkaSBmYXJsbyBzYXBlcmUgYSBTVEFSQk9PSyB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPGJyPlxcbiAgICAgICAgMi42LiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIGRlc2lkZXJpIHBpw7kgY2hlIGkgc3VvaSBkYXRpIHNpYW5vIHV0aWxpenphdGkgZGEgU1RBUkJPT0sgbmVpIG1vZGkgc29wcmEgaW5kaWNhdGkgbyBjYW1iaSBpZGVhIHJpZ3VhcmRvIGFsbGEgcG9zc2liaWxpdMOgIGRpIGVzc2VyZSBjb250YXR0YXRvIGluIGZ1dHVybywgc2kgcHJlZ2EgZGkgb3Bwb3JzaSBhbCB0cmF0dGFtZW50byBuZWkgbW9kaSBzdSBpbmRpY2F0aS4gSW4gbWFuY2FuemEsIMOoIHBvc3NpYmlsZSBpbmZvcm1hcmUgaW4gb2duaSBtb21lbnRvIGZhcmxvIHNhcGVyZSBhIFNUQVJCT09LIGRlbGxhIHByb3ByaWEgZGVjaXNpb25lLCB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ2hlbHAnXFxcIj5cXG4gICAgICAgIDxwPkhhaSBiaXNvZ25vIGRpIGFpdXRvPyA8YnI+XFxuICAgICAgICBTY3JpdmkgdW5hIG1haWwgaGFyYWxkLmJyZWd1QHN0YXJib29rLmNvIGUgdGkgcmlzcG9uZGVyZW1vIG5lbCBwacO5IGJyZXZlIHRlbXBvIHBvc3NpYmlsZS48L3A+XFxuICAgICAgICA8cD5WdW9pIGVudHJhcmUgYSBmYXIgcGFydGUgZGkgU1RBUkJPT0s/IEF1bWVudGEgaWwgbnVtZXJvIGRlaSB0dW9pIGNsaWVudGkgcGFnYW50aSBlIHJpc3Bhcm1pYSBzdWkgY29zdGkgZGVsIHRyYXNwb3J0by48L3A+XFxuICAgICAgICA8cD5QZXIgcmljaGllZGVyZSBpbmZvcm1hemlvbmk6PC9wPlxcbiAgICAgICAgPHA+Q2VsbHVsYXJlOiArMzkgMzI3MjQxNTAyODxicj5cXG4gICAgICAgIEVtYWlsOiBoYXJhbGQuYnJlZ3VAc3RhcmJvb2suY288L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCAhPT0gJydcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+PC9kaXY+XFxuPCEtLSBDaGFuZ2UgcGFzc3dvcmQgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCA9PT0gJ2NoYW5nZVBhc3N3b3JkJ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJsb2dpbi1mb3JtXFxcIiAjY2hhbmdlUGFzc3dvcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGNoYW5nZVBhc3N3b3JkRXJyb3IuY3VycmVudFBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiY3VycmVudFBhc3N3b3JkXFxcIj5MYSB0dWEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZFxcXCIgI2N1cnJlbnRQYXNzd29yZD1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5MYSB0dWEgcGFzc3dvcmQgYXR0dWFsZSDDqCByaWNoaWVzdGE8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJuZXdQYXNzd29yZFxcXCI+TnVvdmEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwibmV3UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJuZXdQYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5uZXdQYXNzd29yZFxcXCIgI25ld1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm19XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiPlJpcGV0aSBsYSBudW92YSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNwYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQobmV3UGFzc3dvcmQudmFsdWUsIHBhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWNoYW5nZVBhc3N3b3JkRm9ybS5mb3JtLnZhbGlkXFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQudmFsdWUsIG5ld1Bhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiIFtAc2hhZG93U3RhdGVdPVxcXCJzaGFkb3dTdGF0ZVxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj48L2Rpdj5cXG48IS0tIExvZ2luIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGxvZ2luUG9wdXBTdGF0ZV09XFxcImxvZ2luUG9wdXBTdGF0ZVxcXCI+XFxuICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPi0tPlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj4tLT5cXG4gICAgPCEtLTxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+LS0+XFxuICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+U2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhPC9kaXY+LS0+XFxuICAgICAgPCEtLTxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD4tLT5cXG4gICAgPCEtLTwvZGl2Pi0tPlxcbiAgPCEtLTwvZGl2Pi0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxwPjxzcGFuPkVycm9yZSE8L3NwYW4+IHt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkFjY2VkaTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImxvZ2luLWZvcm1cXFwiICNsb2dpbkZvcm09XFxcIm5nRm9ybVxcXCIgKGtleXVwLmVudGVyKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5lbWFpbH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5JbmRpcml6em8gZW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5lbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0VtYWlsKCdsb2dpbicsIGVtYWlsLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrRW1haWwoJ2xvZ2luJywgZW1haWwudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluZGlyaXp6byBlbWFpbCBub24gdmFsaWRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBsb2dpbkVycm9yLnBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkIDxhIGNsYXNzPVxcXCJyZWNvdmVyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ3JlY292ZXJ5JylcXFwiPlBhc3N3b3JkIGRpbWVudGljYXRhPzwvYT48L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdsb2dpbicsIHBhc3N3b3JkLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrTm9uRW1wdHkoJ2xvZ2luJywgcGFzc3dvcmQudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSBsYSB0dWEgcGFzc3dvcmQ8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBocmVmPVxcXCIjXFxcIiAoY2xpY2spPVxcXCJsb2dpbihlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXFxcIj5BY2NlZGk8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+LS0+XFxuICAgICAgPCEtLTxzcGFuPlNlaSBudW92byBzdSBTdGFyYm9vaz88L3NwYW4+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgncmVnaXN0cmF0aW9uJylcXFwiPkNyZWEgaWwgdHVvIGFjY291bnQgU3RhcmJvb2s8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICA8c3Bhbj5vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICAgIDxpPjwvaT5cXG4gICAgICAgIENvbnRpbnVhIGNvbiBGYWNlYm9va1xcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWdpc3RyYXRpb24gcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZV09XFxcInJlZ2lzdHJhdGlvblBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPk51b3ZvIGFjY291bnQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWdpc3RyYXRpb24tZm9ybVxcXCIgI3JlZ2lzdHJhdGlvbkZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IubmFtZX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ05hbWVcXFwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEubmFtZVxcXCIgI3JlZ05hbWU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvbk5hbWUnLCByZWdOYW1lLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgaWwgbm9tZSBjb21wbGV0bzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGhvbmV9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQaG9uZVxcXCI+Q2VsbHVsYXJlPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGhvbmVcXFwiICNyZWdQaG9uZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uUGhvbmUnLCByZWdQaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIG51bWVybyBjZWxsdWxhcmU8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnRW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ0VtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLmVtYWlsXFxcIiAjcmVnRW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlZ2lzdHJhdGlvbicsIHJlZ0VtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZFxcXCIgI3JlZ1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25QYXNzd29yZCcsIHJlZ1Bhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgdW5hIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkQ29uZmlybVxcXCI+RGkgbnVvdm8gbGEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNyZWdQYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQocmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0cmF0aW9uKHJlZ05hbWUudmFsdWUsIHJlZ1Bob25lLnZhbHVlLCByZWdFbWFpbC52YWx1ZSwgcmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPkNyZWEgYWNjb3VudDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbm90aWNlXFxcIj5BY2NlZGVuZG8gZGljaGlhcmkgZGkgYXZlciBsZXR0byBlIGFjY2V0dGkgbGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2NvbmRpdGlvbnNcXFwiPmNvbmRpemlvbmkgZ2VuZXJhbGk8L2E+IGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPmzigJlpbmZvcm1hdGl2YSBzdWxsYSBwcml2YWN5PC9hPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+XFxuICAgIDxzcGFuPm88L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcmVnaXN0cmF0aW9uXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICA8aT48L2k+XFxuICAgICAgQ29udGludWEgY29uIEZhY2Vib29rXFxuICAgIDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXIgcmVnaXN0cmF0aW9uXFxcIj5IYWkgZ2lhIHVuIGFjY291bnQgc3UgU3RhcmJvb2s/IDxhIChjbGljayk9XFxcImdldFBvcHVwKCdsb2dpbicpXFxcIj5BY2NlZGk8L2E+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWNvdmVyeSBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0ByZWNvdmVyeVBvcHVwU3RhdGVdPVxcXCJyZWNvdmVyeVBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UmVjdXBlcmEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWNvdmVyeS1mb3JtXFxcIiAjcmVjb3ZlcnlGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlY292ZXJ5RXJyb3IuZW1haWx9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWNvdmVyeUVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWNvdmVyeUVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVjb3ZlcnlEYXRhLmVtYWlsXFxcIiAjcmVjb3ZlcnlFbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgncmVjb3ZlcnknLCByZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWNvdmVyeShyZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+SW52aWEgZW1haWw8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbi1vZmZlclxcXCI+SGFpIGdpYSB1biBhY2NvdW50IHN1IFN0YXJib29rPyA8YSAoY2xpY2spPVxcXCJnZXRQb3B1cCgnbG9naW4nKVxcXCI+QWNjZWRpPC9hPjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gQ29uZmlybSBPcmRlciBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnbmV3LXZlcnNpb24nOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYScgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInBvcHVwLXNwaW5uZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYSdcXFwiPlxcbiAgICA8c3ZnIHdpZHRoPSc0MHB4JyBoZWlnaHQ9JzQwcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTY5LjY0NjAwMzI5Mzg0ODgyIDExMy4wOTczMzU1MjkyMzI1N1xcXCIgc3Ryb2tlPVxcXCIjM0I1NjhEXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEwXFxcIj5cXG4gICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgPC9jaXJjbGU+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJzdWNjZXNzLWljb25cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCcgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnXFxcIj48c3Bhbj48L3NwYW4+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiIFtuZ0NsYXNzXT1cXFwieyd3aXRob3V0LW1lc3NhZ2UnOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCd9XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50aXRsZSAhPT0gJydcXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJjb25maXJtLW9yZGVyLWZvcm1cXFwiICNjb25maXJtT3JkZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8cCAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlICE9PSAnbmV3T3JkZXInICYmIGNvbmZpcm1Qb3B1cERhdGEudHlwZSAhPT0gJ25ld09yZGVyRW5kJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbmZlcm1hLWZpbmlzaCc6IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJ31cXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPHAgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyRW5kJ1xcXCIgY2xhc3M9XFxcImNvbmZpcm0tZW5kXFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVycy1saXN0XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXInXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIGNvbmZpcm1Qb3B1cERhdGEuZGF0YVxcXCI+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3NlcnZpY2UnXFxcIiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0nc2VydmljZSdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1cXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0naXRlbSdcXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0ge3sgcHJvZHVjdC5pdGVtTmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fSB7eyBwcm9kdWN0LnN5bWJvbCB9fTwvaT48L3NwYW4+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fXt7IHByb2R1Y3Quc3ltYm9sIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSd0b3RhbCdcXFwiIGNsYXNzPVxcXCJ0b3RhbC1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tbGlzdFxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+RGF0YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGF0ZSB9fTwvZGl2PlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+T3JlOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi50aW1lIH19PC9kaXY+IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPkluZGlyaXp6bzo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uYWRkcmVzcyB9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRlc2NyaXB0aW9uICE9PSAnJ1xcXCI+PHNwYW4+Tm90YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGVzY3JpcHRpb24gfX08L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWxvYWRlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJyAmJiBpc1BvcHVwTG9hZGluZ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCI+XFxuICAgICAgICA8c3ZnIHdpZHRoPSc0MHB4JyBoZWlnaHQ9JzQwcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPHNwYW4+Q2FsY29sYW5kbyB0b3RhbGXigKY8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZS1hcmVhXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXInICYmIGlzUG9wdXBMb2FkaW5nID09PSBmYWxzZSAmJiBjb25maXJtUG9wdXBEYXRhLnRvdGFsUHJpY2VcXFwiPlxcbiAgICAgIFRvdGFsZTxzcGFuPnt7Y29uZmlybVBvcHVwRGF0YS50b3RhbFByaWNlIC8gMTAwfX3igqw8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdDb25mZXJtYSdcXFwiPkNvbmZlcm1hPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNhbmNlbE9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdBbm51bGxhIG9yZGluZSdcXFwiPkFubnVsbGEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihjb25maXJtUG9wdXBEYXRhLmlkKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUmlhdHRpdmEgb3JkaW5lJ1xcXCI+UmlhdHRpdmEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIG5ldy1vcmRlci1idG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU5ld09yZGVyKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1ByZW5vdGEgc2Vydml6aW8nICYmIGlzUG9wdXBMb2FkaW5nID09PSBmYWxzZVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJlbm90YSBzZXJ2aXppbzwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBsb2dvdXQtYnRuXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdsb2dvdXQnXFxcIj5Fc2NpPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdsb2dvdXQnXFxcIj5Bbm51bGxhPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gIT09ICdsb2dvdXQnXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgICA8c3BhbiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdQcmVub3RhIHNlcnZpemlvJyAmJiBpc1BvcHVwTG9hZGluZyA9PT0gZmFsc2VcXFwiIGNsYXNzPVxcXCJjb25maXJtLWJ1dHRvbi1ub3RpY2VcXFwiPkF0dGVuemlvbmUsIGNoaXVkZW5kbyBwb3RyZXN0aSBwZXJkZXJlIGlsIHByZXp6byBjYWxjb2xhdG8gZGVsIHNlcnZpemlvLjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBDb25maXJtIE9yZGVyIEZpbmlzaCBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtRmluaXNoUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZpbmlzaC1tZXNzYWdlXFxcIiBbbmdDbGFzc109XFxcIntpc0xlZnQ6IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ2xlZnQnfVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgICA8cD57eyBjb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBGaW5pc2ggcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAZmluaXNoUG9wdXBTdGF0ZV09XFxcImZpbmlzaFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmluaXNoLW1lc3NhZ2VcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Zvcm0nOiBmaW5pc2hQb3B1cERhdGEudHlwZSAhPT0gJyd9XFxcIj5cXG4gICAgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiY2xvc2UtcG9wdXBcXFwiPjwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57eyBmaW5pc2hQb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gICAgPHAgKm5nRm9yPVxcXCJsZXQgdGV4dCBvZiBmaW5pc2hQb3B1cERhdGEudGV4dFxcXCI+e3sgdGV4dCB9fTwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGhvbmUtZm9ybVxcXCIgKm5nSWY9XFxcImZpbmlzaFBvcHVwRGF0YS50eXBlID09PSAncGhvbmUnXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBob25lLWZpZWxkXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmV9XFxcIj5cXG4gICAgICAgIDxsYWJlbD5OdW1lcm8gZGkgdGVsZWZvbm88L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IG5hbWU9XFxcInBob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwiZW50ZXJQaG9uZUZvcm0ucGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiICNwaG9uZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgnZW50ZXJQaG9uZUZvcm0nLCBwaG9uZS52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja05vbkVtcHR5KCdlbnRlclBob25lRm9ybScsIHBob25lLnZhbHVlKVxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICA8YSAoY2xpY2spPVxcXCJzZXRQaG9uZU51bWJlcigpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5TYWx2YSBlIGNvbnRpbnVhPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcImZpbmlzaFBvcHVwRGF0YS50eXBlID09PSAnZmluaXNoRmFjZWJvb2tSZWdpc3RyYXRpb24nXFxcIj5cXG4gICAgICA8YSAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCI+Q2hpdWRpPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcblxcbjwhLS0gQWRkIENhcmQgcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAYWRkQ2FyZFBvcHVwU3RhdGVdPVxcXCJhZGRDYXJkUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPk1ldG9kbyBkaSBwYWdhbWVudG88L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJhZGQtY2FyZC1mb3JtXFxcIiAjYWRkQ2FyZEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRzLWxvZ29cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSB2aXNhXFxcIj48L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gbWFzdGVyY2FyZFxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIGFtZXhcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBhZGRDYXJkRXJyb3IubnVtYmVyfVxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnYWRkJ1xcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE51bWJlclxcXCI+TnVtZXJvIGNhcnRhPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROdW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROdW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5udW1iZXJcXFwiICNhZGRDYXJkTnVtYmVyPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0NhcmROdW1iZXIoYWRkQ2FyZE51bWJlci52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja0NhcmROdW1iZXIoYWRkQ2FyZE51bWJlci52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+UGxlYXNlIGVudGVyIGNhcmQgbnVtYmVyPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnZWRpdCdcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImVkaXRDYXJkTnVtYmVyXFxcIj5OdW1lcm8gY2FydGE8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZWRpdENhcmROdW1iZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROdW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5udW1iZXJcXFwiIGRpc2FibGVkPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+UGxlYXNlIGVudGVyIGNhcmQgbnVtYmVyPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBhZGRDYXJkRXJyb3IuZXhwX2RhdGV9XFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZEV4cERhdGVcXFwiPlNjYWRlbnphPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkRXhwRGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkRXhwRGF0ZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk1NL0FBXFxcIiBtYXhsZW5ndGg9XFxcIjVcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5leHBfZGF0ZVxcXCIgI2FkZENhcmRFeHBEYXRlPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0V4cGlyeShhZGRDYXJkRXhwRGF0ZS52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja0V4cGlyeShhZGRDYXJkRXhwRGF0ZS52YWx1ZSlcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5FeHBpcmF0aW9uIGRhdGUgaXNuJ3QgY29ycmVjdDwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLmN2Y31cXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ1ZWXFxcIj5DVlY8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDVlZcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENWVlxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmN2Y1xcXCIgI2FkZENhcmRDVlY9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ2FkZENhcmRDdnYnLCBhZGRDYXJkQ1ZWLnZhbHVlKVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcXVlc3Rpb24tY2lyY2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInJpZ2h0XFxcIiB0aXRsZT1cXFwiVG9vbHRpcCBvbiByaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5DVlYgaXNuJ3QgY29ycmVjdDwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImVkaXRDVlZcXFwiPkNWVjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImVkaXRDVlZcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENWVlxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmN2Y1xcXCIgZGlzYWJsZWQ+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcXVlc3Rpb24tY2lyY2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInJpZ2h0XFxcIiB0aXRsZT1cXFwiVG9vbHRpcCBvbiByaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5DVlYgaXNuJ3QgY29ycmVjdDwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInN1YmhlYWRlclxcXCI+XFxuICAgICAgSW5mb3JtYXppb25pIGZhY29sdGF0aXZpXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkTmFtZVxcXCI+Tm9tZSBpbnRlc3RhdGFyaW88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tZSBDb2dub21lXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubmFtZVxcXCIgI2FkZENhcmROYW1lPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3QtYmlnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRWaWFcXFwiPlZpYTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRWaWFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRWaWFcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxXFxcIiAjYWRkQ2FyZEFkZHJlc3MxPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3Qtc21hbGxcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5yXFxcIj5OcjwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZE5yXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMlxcXCIgI2FkZENhcmRBZGRyZXNzMj1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkQ2l0dGFcXFwiPkNpdHTDoDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDaXR0YVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZENpdHRhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDaXR5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3Qtc21hbGxcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENhcFxcXCI+Q0FQPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZENhcFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZENhcFxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfemlwXFxcIiAjYWRkQ2FyZEFkZHJlc3NaaXA9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIj5Qcm92aW5jaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkUHJvdmluY2lhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZVxcXCIgI2FkZENhcmRBZGRyZXNzU3RhdGU9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgbGFzdFxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkUGVhc2VcXFwiPlBhZXNlPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkUGVhc2VcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnlcXFwiICNhZGRDYXJkQWRkcmVzc0NvdW50cnk9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImFkZE5ld0NhcmQoKVxcXCIgKm5nSWY9XFxcImFjdGlvbkNhcmRUeXBlID09PSAnYWRkJ1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImVkaXRDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5BZ2dpdW5naSBtZXRvZG88L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuXFxuPCEtLSBDb25maXJtIHBvcHVwIHdpdGggYWN0aW9uIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXT1cXFwiY29uZmlybUFjdGlvblBvcHVwU3RhdGVcXFwiIFtuZ0NsYXNzXT1cXFwieydhZGQtcHJpY2UnOiBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZSd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57eyBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiY29uZmlybS1hY3Rpb25cXFwiICNjb25maXJtQWN0aW9uT3JkZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8cD5cXG4gICAgICB7eyBjb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgfX1cXG4gICAgICA8c3BhbiAqbmdJZj1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiAhPT0gJydcXFwiPjxicj4ge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiB9fTwvc3Bhbj5cXG4gICAgPC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhY3Rpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGFjdGlvbiBvZiBjb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnNcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5wdXRfYWRkJ1xcXCI+XFxuICAgICAgICA8bGFiZWw+e3sgYWN0aW9uLmxhYmVsIH19PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvbmZpcm1BY3Rpb25JbnB1dEFkZFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEFkZFByaWNlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj4uMDA8L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvbiBldXJvXFxcIj7igqw8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwcmljZS1kZXNjcmlwdGlvblxcXCI+e3sgYWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5wdXRfZWRpdCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRFZGl0UHJpY2VcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlXFxcIiAjY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj4uMDA8L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvbiBldXJvXFxcIj7igqw8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJwcmljZS1kZXNjcmlwdGlvblxcXCI+e3sgYWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBheW1lbnQtaW5mb3JtYXRpb25cXFwiICpuZ0lmPVxcXCJhY3Rpb24udHlwZSA9PT0gJ1BheW1lbnRfaW5mb3JtYXRpb24nXFxcIj5cXG4gICAgICAgIHt7IGFjdGlvbi5pbmZvcm1hdGlvbiB9fVxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBidXR0b25zLWJsb2NrXFxcIj5cXG4gICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBidXR0b24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zXFxcIj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnYWRkUHJpY2UnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJhZGRQcmljZShjb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQpXFxcIj57eyBidXR0b24udGV4dCB9fTwvYnV0dG9uPlxcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwiYnV0dG9uLnR5cGUgPT09ICdlZGl0UHJpY2UnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJlZGl0UHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnY29udGludWVPcmRlcidcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChjbGljayk9XFxcImNvbnRpbnVlT3JkZXIoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4ge3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnY2xvc2UnXFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcblxcbjwhLS0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQS9CIFRlc3RzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC0tPlxcblxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQHJlZ2lzdGVyQ29tcGFueVBvcHVwU3RhdGVdPVxcXCJyZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlXFxcIj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJlZ2lzdHJhIGxhIHR1YSBpbXByZXNhPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwicmVnaXN0cmF0aW9uLWNvbXBhbnktZm9ybVxcXCIgI3JlZ2lzdHJhdGlvbkNvbXBhbnlGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiA+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnTmFtZVxcXCI+SWwgdHVvIG5vbWU8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcImlsIHR1byBub21lXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJOZXdDb21wYW55Lm5hbWVcXFwiICNyZWdOYW1lPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bob25lXFxcIj5OdW1lcm8gZGkgY2VsbHVsYXJlPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIiszOVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyTmV3Q29tcGFueS5waG9uZVxcXCIgI3JlZ1Bob25lPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Byb2Zlc3Npb25cXFwiPkluc2VyaXNjaSBsYSB0dWEgcHJvZmVzc2lvbmU8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUHJvZmVzc2lvblxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicHJvZmVzc2lvblxcXCIgcGxhY2Vob2xkZXI9XFxcInByb2Zlc3Npb25lXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJOZXdDb21wYW55LnByb2Zlc3Npb25cXFwiICNyZWdQcm9mZXNzaW9uPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWdpc3RlckNvbXBhbnkocmVnTmFtZS52YWx1ZSwgcmVnUGhvbmUudmFsdWUsIHJlZ1Byb2Zlc3Npb24udmFsdWUpXFxcIj5SZWdpc3RyYSBsYSB0dWEgaW1wcmVzYTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+QW5udWxsYTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG48IS0tIDxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQHJlY29tbWVuZFRvRnJpZW5kUG9wdXBTdGF0ZV09XFxcInJlY29tbWVuZFRvRnJpZW5kUG9wdXBTdGF0ZVxcXCI+XFxuICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5SZWdpc3RyYSBsYSB0dWEgaW1wcmVzYTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcInJlZ2lzdHJhdGlvbi1jb21wYW55LWZvcm1cXFwiICNyZWdpc3RyYXRpb25Db21wYW55Rm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ05hbWVcXFwiPklsIHR1byBub21lPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ05hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJpbCB0dW8gbm9tZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyTmV3Q29tcGFueS5uYW1lXFxcIiAjcmVnTmFtZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQaG9uZVxcXCI+TnVtZXJvIGRpIGNlbGx1bGFyZTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQaG9uZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCIrMzlcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3Rlck5ld0NvbXBhbnkucGhvbmVcXFwiICNyZWdQaG9uZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQcm9mZXNzaW9uXFxcIj5JbnNlcmlzY2kgbGEgdHVhIHByb2Zlc3Npb25lPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Byb2Zlc3Npb25cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInByb2Zlc3Npb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJwcm9mZXNzaW9uZVxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyTmV3Q29tcGFueS5wcm9mZXNzaW9uXFxcIiAjcmVnUHJvZmVzc2lvbj1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0ZXJDb21wYW55KHJlZ05hbWUudmFsdWUsIHJlZ1Bob25lLnZhbHVlLCByZWdQcm9mZXNzaW9uLnZhbHVlKVxcXCI+UmVnaXN0cmEgbGEgdHVhIGltcHJlc2E8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPkFubnVsbGE8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+IC0tPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJsb2FkZXJcXFwiPlxcbiAgPHN2ZyB3aWR0aD0nNjBweCcgaGVpZ2h0PSc2MHB4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjYwXFxcIiBoZWlnaHQ9XFxcIjYwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgPC9jaXJjbGU+XFxuICA8L3N2Zz5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsL25vZGVcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLWNsaWNrLW91dHNpZGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItY2xpY2stb3V0c2lkZVwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCJcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhclwiXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9