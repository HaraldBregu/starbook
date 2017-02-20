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
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 4 */
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
    AuthService.prototype._makeHeaders = function (access_token) {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'access_token': access_token });
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
        return this.http.post(this.api + 'facebook_login', {}, this._makeHeaders(access_token))
            .toPromise()
            .then(function (response) {
            var data = response.json();
            return data;
        })
            .catch(this.handleError);
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
/* 10 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(9);
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
        var _this = this;
        this.router.events.subscribe(function (s) {
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"](s.url.split('#')[1]);
            var access_token = params.get('access_token');
            _this.authService.facebookLogin(access_token)
                .then(function (userData) {
                console.log(userData);
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    FacebookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facebook',
            template: __webpack_require__(45)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(4);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(4);
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
var port = 4200; //process.env.PORT || 80 || 8080;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(4);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_order_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_profile_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__popups_popups_service__ = __webpack_require__(4);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(3);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__ = __webpack_require__(4);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(5);
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
        // TO USE FOR A/B TESTING
        this.route.queryParams.subscribe(function (params) {
            _this.testPage = params['page'];
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
    LandingComponent.prototype.callToActionRegisterCompany = function () {
        console.log('register company');
        this.analyticsService.sendEvent({ category: 'Landing page actions', action: 'test buttons', label: 'register company' });
    };
    LandingComponent.prototype.callToActionShareToEarn = function () {
        console.log('share to earn');
        this.analyticsService.sendEvent({ category: 'Landing page actions', action: 'test buttons', label: 'share to earn' });
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(46)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__ = __webpack_require__(5);
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
    PopupsComponent.prototype.facebookLogin = function () {
        window.open('https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
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
            template: __webpack_require__(49),
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

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" routerLink=\"\" (click)=\"updateTabMenu()\">Starbook</a>\n    <div class=\"search-block\" *ngIf=\"isFindField\">\n      <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"170px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='13px' height='13px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n        <div class=\"no-result\">Nessun risultato</div>\n      </div>\n    </div>\n    <div class=\"tagline\" *ngIf=\"!isFindField\">{{tagline}}</div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-label=\"Menu\" (click)=\"toggleMenu()\"></button>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth !== false\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/settings\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">{{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-dark navbar-tabs\">\n  <div class=\"container-starbook home-tab-bar\"\n       (swipeleft)=\"swipe($event.type, $event.deltaX)\"\n       (swiperight)=\"swipe($event.type, $event.deltaX)\">\n    <ul class=\"nav nav-pills\"\n        [ngStyle]=\"{'margin-left.px': delta}\">\n      <li class=\"nav-item\" *ngFor=\"let navServices of servicesCategoryList\">\n        <a class=\"nav-link\" [ngClass]=\"{'active':navServices._id===activeServiceCategory && activeServiceCategoryType !== false}\" (click)=\"tabNavigate(navServices._id)\"><i class=\"f{{navServices.icon_name}}\"></i> {{navServices.title}}</a>\n      </li>\n    </ul>\n  </div>\n</nav>-->\n\n<div class=\"container-starbook home-page\" *ngIf=\"isServicesView === true\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\" [ngClass]=\"{'services-block-big': serviceCategory.type === 'content'}\">\n            <span *ngIf=\"serviceCategory.type === 'content'\">\n              <img [src]=\"serviceCategory.image\" (load)=\"makeMasonry()\">\n              <div class=\"description\">{{ serviceCategory.description }}</div>\n            </span>\n            <span *ngIf=\"serviceCategory.type !== 'content'\">\n              <div class=\"header\">{{serviceCategory.title_1}}</div>\n              <div class=\"service content noselect\">\n                <span *ngFor=\"let item of serviceCategory.options\">\n                  <div class=\"item\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                    <i *ngIf=\"item.selected===true\" class=\"fa fa-check-square\"></i>\n                    <i *ngIf=\"item.selected===false\" class=\"fa fa-square-o\"></i>\n                    {{item.title_1}}\n                  </div>\n                  <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                    <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                    <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                  </div>\n                  </span>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      <app-order [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\"></app-order>\n    </div>\n  </div>\n  <!-- <div class=\"footer-container\">\n    <div class=\"copyright\">Starbook © 2016 Tutti i diritti riservati</div>\n    <span> • </span><a routerLink=\"../../profile/privacy\">Privacy</a>\n    <span> • </span><a routerLink=\"../../profile/conditions\">Condizioni</a>\n    <span> • </span><a routerLink=\"../../profile/help\">Assistenza</a>\n  </div> -->\n</div>\n<app-landing *ngIf=\"isServicesView === false\"></app-landing>\n<app-loading *ngIf=\"isLoading\" class=\"services-loader\"></app-loading>\n"

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <div class=\"sidebar-block\">\n      <h2>{{orderData.service}}</h2>\n\n      <!-- <div class=\"order-container\" *ngIf=\"!orderIsFull\">\n        <div class=\"order-list-empty\"><strong>Inserisci</strong> le informazioni necessari del appuntamento e invia la richiesta.</div>\n      </div> -->\n      <!-- <div class=\"order-container\" *ngIf=\"orderData.order_options.min_amount > orderData.totalPrice\">\n        <div class=\"order-list-empty\"><strong></strong>Prezzo minimo del'ordine €{{ orderData.order_options.min_amount / 100 }}</div>\n      </div> -->\n      <!-- <div class=\"order-container selected-orders\" [ngStyle]=\"{'max-height': maxOrderBlockSize}\">\n        <div class=\"category-group category\">\n          <span>{{ orderData.service }}</span>\n        </div>\n        <span  *ngFor=\"let orderService of orderData.services\">\n          <div class=\"category-group\">\n            <span *ngIf=\"orderService.price_type === 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}} {{orderService.option.symbol}}</i></span>\n            <span *ngIf=\"orderService.price_type !== 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}}</i></span>\n          </div>\n        </span>\n      </div> -->\n      <!-- <div class=\"category-group total\">\n        <span>Totale <i>€{{ orderData.totalPrice / 100 }}</i></span>\n      </div> -->\n\n      <div class=\"add-order-form\">\n        <label>Quando vuoi svolgere questo lavoro?</label>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOraMobile\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" readonlyInput=\"readonlyInput\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"!isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOra\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"browser\">\n          <div class=\"input-group date\" (clickOutside)=\"closeTimepicker()\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOra\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">\n              <span class=\"fa fa-clock-o\"></span>\n              {{time}}\n            </div>\n          </div>\n        </div> -->\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"!browser\">\n          is not support if client != browser (clickOutside)=\"closeTimepicker()\"\n          <div class=\"input-group date\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOraServer\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">{{time}}</div>\n          </div>\n        </div> -->\n        <label>Inserisci l’indirizzo</label>\n        <div class=\"form-group\" [ngClass]=\"{isError: !isAddressFull && submitOrder && isAddressDirty}\">\n          <div class=\"input-group date\">\n            <!-- <span class=\"fa fa-map-marker\"></span> -->\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Indirizzo\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"modifyAddress()\" (change)=\"modifyAddress()\">-->\n            <p-autoComplete id=\"luogo\" class=\"form-control text-small\" placeholder=\"Via Giuseppe Verdi 10 Milano\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"Order.delivery_address\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"formattedAddress\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\">\n            </p-autoComplete>\n          </div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address === ''\">Inserisci l'indirizzo esatto</div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address !== '' && isAddressOne\">Indirizzo non trovato</div>\n          <!--<div class=\"error-block\" *ngIf=\"!isAddressOne && isAddressDirty && address !== ''\">Indirizzo non è specifico</div>-->\n        </div>\n        <label>Nota</label>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"nota\" name=\"applicant_description\" [(ngModel)]=\"Order.delivery_description\" placeholder=\"Lascia una nota...\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"showConfirmation()\">Anteprima del progetto</button>\n        </div>\n        <div class=\"footer-links\">\n          <p>\n            Starbook © 2017 •\n            <a routerLink=\"../../profile/privacy\">Privacy</a> •\n            <a routerLink=\"../../profile/conditions\">Condizioni</a> •\n            <a routerLink=\"../../profile/help\">Assistenza</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = "<p>\n  facebook works!\n</p>\n"

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Controsoffitto in cartongesso, Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='register_company' || testPage==='share_starbook'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" *ngIf=\"testPage==='register_company'\" (click)=\"callToActionRegisterCompany()\">Registra la tua impresa</button>\n          <button class=\"btn btn-success btn-block\" *ngIf=\"testPage==='share_starbook'\" (click)=\"callToActionShareToEarn()\">Condividi e guadagna</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché usare Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

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

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <!--<div class=\"alert-block\" *ngIf=\"formError\">-->\n    <!--<div class=\"alert-icn\"></div>-->\n    <!--<div class=\"alert-container\">-->\n      <!--<div class=\"header\">Si è verificato un errore!</div>-->\n      <!--<p>{{formError.message}}</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-container\">\n      <p><span>Errore!</span> {{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <!--<div class=\"form-description\">-->\n      <!--<span>Sei nuovo su Starbook?</span>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n    </div>\n    <div class=\"form-description\">\n      <span>o</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n        <i></i>\n        Continua con Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"form-description\">\n    <span>o</span>\n  </div>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-primary facebook\" (click)=\"getPopup('registration')\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2Y5ZTA1YTBjMjQ2ZTQzYWQ3MzEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1jbGljay1vdXRzaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0Q7QUFHekM7SUFZRTtRQVhRLGtCQUFhLEdBQUcsSUFBSSxxREFBTyxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUkscURBQU8sRUFBTyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUkscURBQU8sRUFBVyxDQUFDO1FBUzdDLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMs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QTRDLDJsREFBMmxELCtDQUErQyxpQ0FBaUMsZ0NBQWdDLGlCQUFpQiwrQkFBK0IsMlhBQTJYLHlCQUF5Qiw2REFBNkQsUUFBUSwrZkFBK2YsK0JBQStCLG8zQkFBbzNCLGlDQUFpQyw2ZEFBNmQsNEJBQTRCLDBqSEFBMGpILHdEQUF3RCxnS0FBZ0ssaUJBQWlCLG1CQUFtQixtQkFBbUIsOEdBQThHLGdDQUFnQywrRkFBK0YsK0JBQStCLG1FQUFtRSxnQ0FBZ0Msd01BQXdNLGdCQUFnQiw0WUFBNFksc0JBQXNCLHNIQUFzSCxnQkFBZ0IsOFlBQThZLHNCQUFzQix5SEFBeUgsc0JBQXNCLHNSQUFzUixlQUFlLG1KQUFtSixlQUFlLHdMQUF3TCxlQUFlLG9IQUFvSCxlQUFlLDBEOzs7Ozs7QUNBeG1xQix3Z0JBQXdnQixVQUFVLFVBQVUsZ0JBQWdCLElBQUksNEc7Ozs7OztBQ0FoakIsb0Q7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSwrQjs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEseUU7Ozs7OztBQ0FBLGlFIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNmOWUwNWEwYzI0NmU0M2FkNzMxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgaGVhZGVyTWVzc2FnZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBhdXRoRGF0YSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBhY3RpdmVUYWIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgbG9hZGluZ1N0YXR1cyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblxuICBwdWJsaWMgZ2V0TWVzc2FnZSQ7XG4gIHB1YmxpYyBnZXRQZXJzb25hbE1lbnUkO1xuICBwdWJsaWMgZ2V0QWN0aXZlVGFiJDtcbiAgcHVibGljIGdldExvYWRpbmdTdGF0dXMkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRNZXNzYWdlJCA9IHRoaXMuaGVhZGVyTWVzc2FnZS5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0UGVyc29uYWxNZW51JCA9IHRoaXMuYXV0aERhdGEuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldEFjdGl2ZVRhYiQgPSB0aGlzLmFjdGl2ZVRhYi5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0TG9hZGluZ1N0YXR1cyQgPSB0aGlzLmxvYWRpbmdTdGF0dXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5oZWFkZXJNZXNzYWdlLm5leHQobWVzc2FnZSk7XG4gIH1cblxuICB1cGRhdGVQZXJzb25hbE1lbnUoYXV0aCkge1xuICAgIHRoaXMuYXV0aERhdGEubmV4dChhdXRoKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVRhYih0YWIpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYi5uZXh0KHRhYik7XG4gIH1cblxuICB1cGRhdGVMb2FkaW5nU3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMubG9hZGluZ1N0YXR1cy5uZXh0KHN0YXR1cyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcHVwc1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZVBvcHVwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHBvcHVwUmVzcG9uc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBnZXRBY3RpdmVQb3B1cCQ7XG4gIHB1YmxpYyBnZXRQb3B1cFJlc3BvbnNlJDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRBY3RpdmVQb3B1cCQgPSB0aGlzLmFjdGl2ZVBvcHVwLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRQb3B1cFJlc3BvbnNlJCA9IHRoaXMucG9wdXBSZXNwb25zZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbiAgYWN0aXZhdGUocG9wdXApIHtcbiAgICB0aGlzLmFjdGl2ZVBvcHVwLm5leHQocG9wdXApO1xuICB9XG4gIGFjdGlvbkNvbXBsZXRlKGRhdGEpIHtcbiAgICB0aGlzLnBvcHVwUmVzcG9uc2UubmV4dChkYXRhKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuZGVjbGFyZSBsZXQgZ2E6IEZ1bmN0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1pbmcge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB0aW1pbmdWYXI6IHN0cmluZztcbiAgdGltaW5nVmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBhY3Rpb246IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2VuZFRpbWluZyh0aW1pbmdEYXRhOiBJVGltaW5nKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBnYSgnc2VuZCcsICd0aW1pbmcnLCB0aW1pbmdEYXRhLmNhdGVnb3J5LCB0aW1pbmdEYXRhLnRpbWluZ1ZhciwgdGltaW5nRGF0YS50aW1pbmdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VuZEV2ZW50KGV2ZW50OiBJRXZlbnQpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50LmNhdGVnb3J5LCBldmVudC5hY3Rpb24sIGV2ZW50LmxhYmVsKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG4vLyBpbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG9tZVNlcnZpY2Uge1xuICBwcml2YXRlIHNlcnZpY2VzT2JqZWN0O1xuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICB9XG5cbiAgc2VuZFNlcnZpY2VzKHNlcnZpY2VzKSB7XG4gICAgdGhpcy5zZXJ2aWNlc09iamVjdCA9IHNlcnZpY2VzO1xuICB9XG4gIGdldFNlcnZpY2VzT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VzT2JqZWN0O1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJ2NhdGVnb3JpZXMnO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5hcGkgKyBxdWVyeVN0cmluZylcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U2VydmljZXMoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ2ZlYXR1cmVkJylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzZXJ2aWNlcykgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnc2VhcmNoP3RpdGxlPScgKyBxdWVyeSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRTZXJ2aWNlQnlJZChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnc2VydmljZXMvJyArIGlkKVxuICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmpzb24oKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycyhhY2Nlc3NfdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoeydhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW59KTtcbiAgfVxuXG4gIGF1dGhJbml0KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGg7XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdsb2dpbicsIHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBkYXRhLnJlc3VsdC5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICBhY2NvdW50X3R5cGVzOiBkYXRhLnJlc3VsdC5hY2NvdW50X3R5cGVzLFxuICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5yZXN1bHQucHJvZmlsZSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEucmVzdWx0LmNvbXBhbnksXG4gICAgICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgc2VydmljZXM6IGRhdGEucmVzdWx0LnNlcnZpY2VzLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBkYXRhLnJlc3VsdC5sb2NhdGlvbnMsXG4gICAgICAgICAgICBwYXltZW50OiBkYXRhLnJlc3VsdC5wYXltZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogZGF0YS5yZXN1bHQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGEucmVzdWx0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICB0b2tlbjogZGF0YS50b2tlblxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YS5yZXN1bHQpO1xuICAgICAgICAgIHJldHVybiBhdXRoRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBzaWdudXAobmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdzaWdudXAnLCB7ZnVsbG5hbWU6IG5hbWUsIHBob25lX251bWJlcjogcGhvbmUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGF1dGhEYXRhID0ge1xuICAgICAgICAgICAgX2lkOiBkYXRhLnJlc3VsdC5faWQsXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5yZXN1bHQuZW1haWwsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICByZWNvdmVyeShlbWFpbDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdwYXNzd29yZF9yZWNvdmVyeScsIHtlbWFpbDogZW1haWx9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoO1xuICB9XG5cbiAgZmFjZWJvb2tMb2dpbihhY2Nlc3NfdG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnZmFjZWJvb2tfbG9naW4nLCB7fSwgdGhpcy5fbWFrZUhlYWRlcnMoYWNjZXNzX3Rva2VuKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5zdGF0dXMgfHwgZXJyb3IpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2F1dGguc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBVUkxTZWFyY2hQYXJhbXMsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzcyB7XG4gIHN0cmVldDogc3RyaW5nO1xuICBzdHJlZXRfbnVtYmVyOiBudW1iZXI7XG4gIGNpdHk6IHN0cmluZztcbiAgcG9zdGFsX2NvZGU6IG51bWJlcjtcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGlzRnVsbDogYm9vbGVhbjtcbiAgZm9ybWF0dGVkQWRkcmVzczogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcmRlckV2ZW50ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwdWJsaWMgZ2V0T3JkZXJFdmVudCQ7XG5cbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBwcml2YXRlIGdvb2dsZUFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIHRoaXMuZ29vZ2xlQXBpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRPcmRlckV2ZW50JCA9IHRoaXMub3JkZXJFdmVudC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBtYWtlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyRXZlbnQubmV4dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hlYWRlcnM6IGhlYWRlcnN9O1xuICB9XG5cbiAgc2F2ZU9yZGVyKG9yZGVyRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnb3JkZXJzJywge1xuICAgICAgc2VydmljZV9pZDogb3JkZXJEYXRhLnNlcnZpY2VfaWQsXG4gICAgICBkZXNjcmlwdGlvbjogb3JkZXJEYXRhLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uLFxuICAgICAgZGV0YWlsczogb3JkZXJEYXRhLmRlbGl2ZXJ5X2RldGFpbHMsXG4gICAgICBkYXRlOiBvcmRlckRhdGEuZGVsaXZlcnlfZGF0ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBvcmRlckRhdGEuc3RyZWV0LFxuICAgICAgICBzdHJlZXRfbnVtYmVyOiBvcmRlckRhdGEuc3RyZWV0X251bWJlcixcbiAgICAgICAgY2l0eTogb3JkZXJEYXRhLmNpdHksXG4gICAgICAgIHBvc3RhbF9jb2RlOiBvcmRlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICAgIHByb3ZpbmNlOiBvcmRlckRhdGEucHJvdmluY2UsXG4gICAgICAgIGNvdW50cnk6IG9yZGVyRGF0YS5jb3VudHJ5LFxuICAgICAgICBjb3VudHJ5X2NvZGU6IG9yZGVyRGF0YS5jb3VudHJ5X2NvZGVcbiAgICAgIH0sXG4gICAgICBwYXltZW50OiB7XG4gICAgICAgIGFtb3VudDogb3JkZXJEYXRhLnBheW1lbnQuYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogb3JkZXJEYXRhLnBheW1lbnQuY3VycmVuY3lcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhrZXk6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGxldCBhZGRyZXNzZXMgPSBbXTtcbiAgICBwYXJhbXMuc2V0KCdhZGRyZXNzJywga2V5KTtcbiAgICBwYXJhbXMuc2V0KCdsYW5ndWFnZScsICdpdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2tleScsICdBSXphU3lDTGM1ZXREU3JxaWVBbjRsUENzdkZEcGtNMy1GNy1jNU0nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdvb2dsZUFwaSwge3NlYXJjaDogcGFyYW1zfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHRzO1xuICAgICAgICBkYXRhLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICBsZXQgYWRkcmVzc0RhdGE6IElBZGRyZXNzID0ge1xuICAgICAgICAgICAgc3RyZWV0OiAnJyxcbiAgICAgICAgICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgICAgICAgICAgcHJvdmluY2U6ICcnLFxuICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFkZHJlc3MuYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tcG9uZW50cy50eXBlc1swXSkge1xuICAgICAgICAgICAgICBjYXNlICdzdHJlZXRfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXRfbnVtYmVyID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3JvdXRlJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXQgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnbG9jYWxpdHknOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNpdHkgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5wcm92aW5jZSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb3VudHJ5JzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jb3VudHJ5ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY291bnRyeV9jb2RlID0gY29tcG9uZW50cy5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEucG9zdGFsX2NvZGUgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkZHJlc3NEYXRhLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuXG4gICAgICAgICAgaWYgKGFkZHJlc3MudHlwZXNbMF0gPT09ICdzdHJlZXRfYWRkcmVzcycpIHtcbiAgICAgICAgICAgIGFkZHJlc3NEYXRhLmlzRnVsbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFkZHJlc3NEYXRhLmNvdW50cnlfY29kZSA9PT0gJ0lUJykge1xuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZGRyZXNzZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldE9yZGVycyhwYXJhbXMpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHBhcmFtc1RvUmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuZm9yRWFjaCgocGVyYW0pID0+IHtcbiAgICAgIHBhcmFtc1RvUmVxdWVzdC5zZXQocGVyYW0ubmFtZSwgcGVyYW0udmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ29yZGVycycsIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVycygpLCBzZWFyY2g6IHBhcmFtc1RvUmVxdWVzdH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIFsnSWRyYXVsaWNvJywgJ0VsZXR0cmljaXN0YScsICdGYWJicm8nLCAnU3BhenphY2FtaW5vJywgJ0FudGVubmlzdGEnLCAnUHVsaXppZScsICdFZGlsaXppYScsICdHaWFyZGluYWdnaW8nLCAnSW5mb3JtYXRpY2EnXTtcbiAgfVxuXG4gIG1vZGlmeU9yZGVyKGlkLCB0eXBlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGV9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcmljZShpZCwgdHlwZSwgcHJpY2UpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnb3JkZXJzLycgKyBpZCwge2FjdGlvbjogdHlwZSwgcGF5bWVudDoge2Ftb3VudDogcHJpY2UsIGN1cnJlbmN5OiBcImV1clwiIH19LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvb3JkZXJzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHN0cmlwZVJlc3BvbnNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgZGF0YToge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbihjYXJkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PndpbmRvdykuU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oe1xuICAgICAgICBudW1iZXI6IGNhcmQubnVtYmVyLFxuICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICBleHBfeWVhcjogY2FyZC5leHBfeWVhcixcbiAgICAgICAgY3ZjOiBjYXJkLmN2YyxcbiAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgYWRkcmVzc19jaXR5OiBjYXJkLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeVxuICAgICAgfSwgKHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBzdHJpcGVSZXNwb25zZTogc3RyaXBlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB0b2tlbjogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5jYXJkXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXNvbHZlKHN0cmlwZVJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLnZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDYXJkKGNhcmREYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuKGNhcmREYXRhKVxuICAgICAgICAudGhlbigoZGF0YTogc3RyaXBlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMnLCB7c291cmNlOiBkYXRhLnRva2VufSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHtkZWZhdWx0X3NvdXJjZTogY2FyZElkfSx0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzdGF0dXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZWRpdENhcmQoY2FyZElkLCBjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgY2FyZERhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wYXltZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXywgRE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSB7XG4gIHByaXZhdGUgX2RvbTogRG9tQWRhcHRlciA9IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NKCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHsgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH1cblxuICBzZXRNZXRhRWxlbShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgaGVhZFRhZ3MgPSB0aGlzLl9kb2N1bWVudC5oZWFkLmNoaWxkcmVuIGFzIEhUTUxDb2xsZWN0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtID0gaGVhZFRhZ3NbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbS50YWdOYW1lID09PSAnbWV0YScpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBlbGVtWydhdHRyaWJzJ107XG4gICAgICAgIGlmICgnbmFtZScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnbmFtZScsIG5hbWUpO1xuICAgIHRoaXMuX2RvbS5zZXRBdHRyaWJ1dGUoZWwsICdjb250ZW50JywgdmFsdWUpO1xuICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5oZWFkLCBlbCk7XG4gIH1cblxuICBzZXRPZ0VsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ3Byb3BlcnR5JyBpbiBhdHRyKSB7XG4gICAgICAgICAgaWYgKGF0dHIucHJvcGVydHkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAncHJvcGVydHknLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJNYXNvbnJ5LCBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgTWFzb25yeTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnlMaXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHR5cGU6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbl9jb2RlOiBzdHJpbmc7XG4gIGljb25fbmFtZTogc3RyaW5nO1xuICBsYW5nOiBzdHJpbmc7XG4gIHByb2R1Y3RzOiBJU2VydmljZUNhdGVnb3J5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnkge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IElTZXJ2aWNlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm1JdGVtIHtcbiAgZm9ybUlkPzogbnVtYmVyO1xuICBvcHRpb25JZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGVfMTogc3RyaW5nO1xuICBpbnB1dF90eXBlPzogc3RyaW5nO1xuICBpbnB1dF92YWx1ZT86IGFueTtcbiAgdmFsdWVfc3ltYm9sPzogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgc2VsZWN0ZWQ/OmJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRm9ybSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgcHJpY2VfdHlwZTogc3RyaW5nO1xuICBvcHRpb25zOiBJU2VydmljZUZvcm1JdGVtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlcyB7XG4gIF9pZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZV91cmw6IHN0cmluZztcbiAgcHJpY2U6IHtcbiAgICBiYXNlX2Ftb3VudDogbnVtYmVyO1xuICB9LFxuICBvcmRlcl9vcHRpb25zOiB7XG4gICAgbWluX2Ftb3VudDogbnVtYmVyO1xuICAgIHBheW1lbnRfbWV0aG9kczogc3RyaW5nW11cbiAgfSxcbiAgZm9ybXM6IElTZXJ2aWNlRm9ybVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGJhc2VBbW91bnQgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgY2FsY3VsYXRlZDogMFxuICB9O1xuICBwdWJsaWMgY2FsY3VsYXRlUmVzdWx0cyA9IHtcbiAgICBxdWV1ZUZpcnN0OiAwLFxuICAgIHF1ZXVlU2Vjb25kOiAwLFxuICAgIHF1ZXVlRW5kOiAwXG4gIH07XG4gIHB1YmxpYyBvcGVyYW5kcyA9IHtcbiAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICBxdWV1ZVNlY29uZDogW10sXG4gICAgcXVldWVFbmQ6IFtdXG4gIH07XG4gIHB1YmxpYyBmaW5hbFByaWNlID0gMDtcbiAgcHVibGljIGRlZmF1bHRTZXJ2aWNlcztcblxuICBwdWJsaWMgc2VydmljZXNDYXRlZ29yeUxpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0W10gPSBbXTtcbiAgcHVibGljIGlzU2VydmljZXNWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBzZXJ2aWNlc0RhdGEgPSBbXTtcblxuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5OiBib29sZWFufHN0cmluZyA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZTogYm9vbGVhbnxudW1iZXIgPSBmYWxzZTtcbiAgcHVibGljIG1vZGVsOiBhbnk7XG4gIHB1YmxpYyBvcmRlckRhdGEgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgcHJpY2U6IHtcbiAgICAgIGJhc2VfYW1vdW50OiAwXG4gICAgfSxcbiAgICBvcmRlcl9vcHRpb25zOiB7XG4gICAgICBtaW5fYW1vdW50OiAwLFxuICAgICAgcGF5bWVudF9tZXRob2RzOiBbXVxuICAgIH0sXG4gICAgc2VydmljZTogJycsXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHRvdGFsUHJpY2U6IDBcbiAgfTtcbiAgcHVibGljIG9yZGVySXNGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG4gIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gLTE1O1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBtYXNvbnJ5OiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIEBWaWV3Q2hpbGQoQW5ndWxhck1hc29ucnkpIG1hc29ucnk6IEFuZ3VsYXJNYXNvbnJ5O1xuICAvLyBAVmlld0NoaWxkKE1hc29ucnlNb2R1bGUpIGxheW91dDogTWFzb25yeU1vZHVsZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICByZW5kZXJQYWdlKHNlcnZpY2VzOiBJU2VydmljZXMpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2Uoc2VydmljZXMudGl0bGUpO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgc2VydmljZXMudGl0bGUpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby9zZXJ2aWNlcy8nICsgc2VydmljZXMuX2lkKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5kZWZhdWx0U2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NvbnRlbnQnLFxuICAgICAgICBpbWFnZTogc2VydmljZXMuaW1hZ2VfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VydmljZXMuZGVzY3JpcHRpb24sXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLm9yZGVyRGF0YSA9IHtcbiAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VzLl9pZCxcbiAgICAgIHByaWNlOiBzZXJ2aWNlcy5wcmljZSxcbiAgICAgIG9yZGVyX29wdGlvbnM6IHNlcnZpY2VzLm9yZGVyX29wdGlvbnMsXG4gICAgICBzZXJ2aWNlOiBzZXJ2aWNlcy50aXRsZSxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHRvdGFsUHJpY2U6IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50XG4gICAgfTtcbiAgICB0aGlzLmJhc2VBbW91bnQuc3RhcnQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50O1xuICAgIGxldCBmb3JtSWQgPSAxO1xuICAgIHNlcnZpY2VzLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgdmFyIHRpdGxlXzE6IHN0cmluZztcbiAgICAgIGlmIChmb3JtLnRpdGxlXzEpIHtcbiAgICAgICAgdGl0bGVfMSA9IGZvcm0udGl0bGVfMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2VydmljZUZvcm06IElTZXJ2aWNlRm9ybSA9IHtcbiAgICAgICAgdGl0bGU6IGZvcm0udGl0bGUsXG4gICAgICAgIHRpdGxlXzEgOiB0aXRsZV8xLFxuICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiBmb3JtLnJlcXVpcmVkLFxuICAgICAgICBwcmljZV90eXBlOiBmb3JtLnByaWNlX3R5cGUsXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9O1xuXG4gICAgICBsZXQgb3B0aW9uSWQgPSAwO1xuICAgICAgZm9ybS5vcHRpb25zLmZvckVhY2goKGl0ZW06IElTZXJ2aWNlRm9ybUl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlXzEpIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZV8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlXzEgPSBpdGVtLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICBmb3JtSWQ6IGZvcm1JZCxcbiAgICAgICAgICBvcHRpb25JZDogb3B0aW9uSWQsXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgdGl0bGVfMTogdGl0bGVfMSxcbiAgICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgnaW5wdXRfdHlwZScgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdHlwZSddID0gaXRlbS5pbnB1dF90eXBlO1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdmFsdWUnXSA9IGl0ZW0uaW5wdXRfdmFsdWU7XG4gICAgICAgICAgb3B0aW9uWyd2YWx1ZV9zeW1ib2wnXSA9IGl0ZW0udmFsdWVfc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uWydzZWxlY3RlZCddID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmljZUZvcm0ub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbklkICsrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YS5wdXNoKHNlcnZpY2VGb3JtKTtcbiAgICAgIGZvcm1JZCArKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVTZXJ2aWNlKHNlcnZpY2VOYW1lLCBpdGVtTmFtZSkge1xuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2NoZWNrYm94J30pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTm90RW1wdHlGb3JtKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFZhbHVlICYmIHNlcnZpY2UucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ1JBRElPQlVUVE9OJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdyYWRpb2J1dHRvbid9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoKTtcbiAgfVxuXG4gIGNoZWNrTm90RW1wdHlGb3JtKGZvcm1JZCwgb3B0aW9uSWQpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5vcHRpb25JZCAhPT0gb3B0aW9uSWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShmb3JtSWQsIG9wdGlvbklkKSB7XG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2lucHV0J30pO1xuXG4gICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBzZWxlY3RBbGxDb250ZW50KCRldmVudCkge1xuICAgICRldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gIH1cblxuICB1bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZihzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICB9XG5cbiAgcXVldWVXb3JrZXIoKSB7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQ7XG4gICAgdGhpcy5vcGVyYW5kcyA9IHtcbiAgICAgIHF1ZXVlRmlyc3Q6IFtdLFxuICAgICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgICAgcXVldWVFbmQ6IFtdXG4gICAgfTtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSAwO1xuXG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NlbGVjdGVkJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQgKyBpdGVtLmFtb3VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRmlyc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKz0gdGFzay5hbW91bnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0ID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZVNlY29uZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICogdGFzay5jbnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZVNlY29uZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVFbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyAodGFzay5hbW91bnQgKiB0YXNrLmNudCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUVuZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCArIHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAgIHRoaXMucXVldWVXb3JrZXIoKTtcbiAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcyA9IFtdO1xuICAgIHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICBsZXQgY3VycmVudE9yZGVyU3RhdGUgPSBbXTtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgICAgICAgICAgICAgcHJpY2VfdHlwZTogc2VydmljZS5wcmljZV90eXBlLFxuICAgICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmljZS50eXBlID09PSAnSU5QVVRURVhUJykge1xuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5pbnB1dF92YWx1ZSAqIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0LFxuICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS52YWx1ZV9zeW1ib2xcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnQgKiBpdGVtLmlucHV0X3ZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JkZXJTdGF0ZS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLnB1c2goc2VydmljZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAgIC8vIHRvZ2dsZVNlcnZpY2UoY2F0ZWdvcnlMaXN0SWQ6IHN0cmluZywgY2F0ZWdvcnlJZDogc3RyaW5nLCBzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgLy8gbGV0IGNhdGVnb3J5TGlzdEluZGV4ID0gMDtcbiAgICAvLyB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAgIC8vICAgbGV0IGNhdGVnb3J5SW5kZXggPSAwO1xuICAgIC8vICAgaWYgKGNhdGVnb3J5TGlzdC5faWQgPT09IGNhdGVnb3J5TGlzdElkKSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZWdvcnlEYXRhLl9pZCA9PT0gY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgICAvLyAgICAgICAgICAgaWYgKHNlcnZpY2VEYXRhLm5hbWUgPT09IHNlcnZpY2VOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdFtjYXRlZ29yeUxpc3RJbmRleF0ucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF0uaXRlbXNbc2VydmljZUluZGV4XS5zZWxlY3RlZCA9ICFzZXJ2aWNlRGF0YS5zZWxlY3RlZDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gfVxuXG4gIC8vIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gIC8vICAgbGV0IGFycmF5SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgICBzZXJ2aWNlLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAvLyAgICAgICAgICAgaWYgKGFycmF5SW5kZXggaW4gY3VycmVudE9yZGVyU3RhdGUpIHtcbiAgLy8gICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGVbYXJyYXlJbmRleF0uaXRlbXMucHVzaCh7IG5hbWU6IGl0ZW0ubmFtZSB9KTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdID0ge1xuICAvLyAgICAgICAgICAgICAgIF9pZDogc2VydmljZS5faWQsXG4gIC8vICAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgLy8gICAgICAgICAgICAgICBpdGVtczogW3tcbiAgLy8gICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAvLyAgICAgICAgICAgICAgIH1dXG4gIC8vICAgICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgYXJyYXlJbmRleCsrO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAvLyAgICAgICB0aGlzLm9yZGVyRGF0YS5wdXNoKHNlcnZpY2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmIChjdXJyZW50T3JkZXJTdGF0ZS5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB0aGlzLm9yZGVySXNGdWxsID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHRhYk5hdmlnYXRlKGlkOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IGlkO1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgdGhpcy5jbGVhclNlcnZpY2VEYXRhKCk7XG4gIC8vICAgdGhpcy5yZW5kZXJQYWdlKGlkKTtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKHNlcnZpY2VDYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlQ2F0ZWdvcnlEYXRhLl9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gc2VydmljZUNhdGVnb3J5RGF0YS50eXBlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gcmVuZGVyUGFnZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBpZiAoU2VydmljZXNMaXN0Ll9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBTZXJ2aWNlc0xpc3QucHJvZHVjdHM7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2aWNlc1ZpZXcgIT09IGZhbHNlICYmIGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNYXNvbnJ5KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmKHRoaXMubWFzb25yeSkge1xuICAgICAgICB0aGlzLm1hc29ucnkubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5yb3V0ZS51cmwuc3Vic2NyaWJlKCh1cmwpID0+IHtcbiAgICAvLyAgIGlmICgwIGluIHVybCkge1xuICAgIC8vICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgLy8gICAgIGlmIChzZXJ2aWNlcykge1xuICAgIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShzZXJ2aWNlcyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnU3RhcmJvb2sgfCBBY3F1aXN0YSBzZXJ2aXppIHByb2Zlc3Npb25hbGkgb25saW5lJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBzZXJ2aWNlSWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHRoaXMuaXNTZXJ2aWNlc1ZpZXcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5zZXJ2aWNlcy1ibG9jaycsXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWdpblRvcDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlQnlJZChzZXJ2aWNlSWQpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHNlcnZpY2UgYnkgaWQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9yZGVyU2VydmljZS5nZXRPcmRlckV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyQ3JlYXRlZChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmhvbWVTZXJ2aWNlLmdldENhdGVnb3JpZXMoKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgdGhpcy5wYXJzZVNlcnZpY2VEYXRhKGRhdGEucmVzdWx0KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldEFjdGl2ZVRhYiQuc3Vic2NyaWJlKHRhYiA9PiB7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgPSB0YWI7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IHRhYjtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBwYXJzZVNlcnZpY2VEYXRhKGRhdGEpIHtcbiAgLy8gICBsZXQgaSA9IDA7XG4gIC8vICAgZGF0YS5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IFByb2R1Y3RzID0gW107XG4gIC8vICAgICBTZXJ2aWNlc0xpc3QucHJvZHVjdHMuZm9yRWFjaCgoU2VydmljZXNDYXRlZ29yeSkgPT4ge1xuICAvLyAgICAgICBsZXQgSXRlbXMgPSBbXTtcbiAgLy8gICAgICAgU2VydmljZXNDYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChDYXRlZ29yeUl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBJdGVtcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIG5hbWU6IENhdGVnb3J5SXRlbSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIFByb2R1Y3RzLnB1c2goe1xuICAvLyAgICAgICAgIF9pZDogU2VydmljZXNDYXRlZ29yeS5faWQgYXMgbnVtYmVyLFxuICAvLyAgICAgICAgIHRpdGxlOiBTZXJ2aWNlc0NhdGVnb3J5LnRpdGxlIGFzIHN0cmluZyxcbiAgLy8gICAgICAgICBpdGVtczogSXRlbXNcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QucHVzaCh7XG4gIC8vICAgICAgIF9pZDogU2VydmljZXNMaXN0Ll9pZCBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHR5cGU6IFNlcnZpY2VzTGlzdC50eXBlIGFzIG51bWJlcixcbiAgLy8gICAgICAgdGl0bGU6IFNlcnZpY2VzTGlzdC50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fY29kZTogU2VydmljZXNMaXN0Lmljb25fY29kZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fbmFtZTogU2VydmljZXNMaXN0Lmljb25fbmFtZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGxhbmc6IFNlcnZpY2VzTGlzdC5sYW5nIGFzIHN0cmluZyxcbiAgLy8gICAgICAgcHJvZHVjdHM6IFByb2R1Y3RzXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGlmIChpID09PSAwKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5ID0gU2VydmljZXNMaXN0Ll9pZDtcbiAgLy8gICAgICAgdGhpcy5yZW5kZXJQYWdlKFNlcnZpY2VzTGlzdC5faWQpO1xuICAvLyAgICAgICBpKys7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNlcnZpY2VEYXRhKCkge1xuICAvLyAgIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgLy8gICAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gIC8vICAgICAgIGNhdGVnb3J5RGF0YS5pdGVtcy5mb3JFYWNoKChzZXJ2aWNlRGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdXG4gIC8vICAgICAgICAgICAucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF1cbiAgLy8gICAgICAgICAgIC5pdGVtc1tzZXJ2aWNlSW5kZXhdXG4gIC8vICAgICAgICAgICAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgICBzZXJ2aWNlSW5kZXgrKztcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGNhdGVnb3J5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0SW5kZXgrKztcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAvLyAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgLy8gICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gIC8vICAgICBsZXQgYWxsTWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1waWxscyA+IGxpJyk7XG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgLy8gICAgICAgbWVudVNpemUgKz0gbWVudUl0ZW0ub2Zmc2V0V2lkdGg7XG4gIC8vICAgICB9XG4gIC8vICAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWItYmFyJykuY2xpZW50V2lkdGg7XG4gIC8vICAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUgKyA1MCkgLSBtZW51QmxvY2tXaWR0aDtcbiAgLy8gICAgIGlmIChhbGxvd01hcmdpbiA+PSAwKSB7XG4gIC8vICAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAvLyAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gIC8vICAgICAgICAgdGhpcy5kZWx0YSA9IC0xNTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPCBhbGxvd01hcmdpbikge1xuICAvLyAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBvcmRlckNyZWF0ZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlLnRpdGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlclBhZ2UodGhpcy5kZWZhdWx0U2VydmljZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uQ2FuY2VsIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVSTFNlYXJjaFBhcmFtcywgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZhY2Vib29rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHMgPT4ge1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocy51cmwuc3BsaXQoJyMnKVsxXSk7XG4gICAgICBsZXQgYWNjZXNzX3Rva2VuID0gcGFyYW1zLmdldCgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmZhY2Vib29rTG9naW4oYWNjZXNzX3Rva2VuKVxuICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9yZGVyIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBwYXltZW50Pzoge1xuICAgIGFtb3VudD86IG51bWJlcixcbiAgICBjdXJyZW5jeT86IHN0cmluZ1xuICB9LFxuICBjYXRlZ29yeV90eXBlOiBudW1iZXI7XG4gIGRlbGl2ZXJ5X2RldGFpbHM6IHN0cmluZztcbiAgZGVsaXZlcnlfZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGVsaXZlcnlfZGF0ZTogc3RyaW5nO1xuICBkZWxpdmVyeV9hZGRyZXNzOiB7XG4gICAgc3RyZWV0OiBzdHJpbmc7XG4gICAgc3RyZWV0X251bWJlcjogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBwb3N0YWxfY29kZTogc3RyaW5nO1xuICAgIHByb3ZpbmNlOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGNvdW50cnlfY29kZTogc3RyaW5nO1xuICB9LFxuICBjdXN0b21lcjoge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgZnVsbG5hbWU6IHN0cmluZztcbiAgICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgfSxcbiAgbWVyY2hhbnQ6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gIH07XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXJzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpdDogYW55O1xuICBwdWJsaWMgc2VsZWN0VGFiOiBzdHJpbmd8Ym9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdGFnbGluZXMgPSB7XG4gICAgJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSc6ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknLFxuICAgICdJIG1pZWkgb3JkaW5pJzogJ0kgbWllaSBvcmRpbmknLFxuICAgICdBcmNoaXZpbyc6ICdBcmNoaXZpbyBkaSB0dXR0aSBnbGkgb3JkaW5pJ1xuICB9O1xuICBwdWJsaWMgdGFicyA9IFtcbiAgICB7bmFtZTogJ0kgbWllaSBvcmRpbmknLCBzZWxlY3RlZDogZmFsc2V9LFxuICAgIHtuYW1lOiAnQXJjaGl2aW8nLCBzZWxlY3RlZDogZmFsc2V9XG4gIF07XG4gIHB1YmxpYyBjYXRlZ29yaWVzID0gW107XG4gIHB1YmxpYyBwYWdlRGF0YTogSU9yZGVyW10gPSBbXTtcbiAgcHVibGljIHJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gIHB1YmxpYyBpc1ZlbmRvciA9IGZhbHNlO1xuICBwdWJsaWMgZW1wdHlMaXN0VGl0bGUgPSAnJ1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBhdXRoRGF0YSA9IHt9O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGF1dGhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgdGhpcy5hdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICBhdXRoRGF0YS5hY2NvdW50X3R5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ1ZFTkRPUicpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWZW5kb3IgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmlzVmVuZG9yKSB7XG4gICAgICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICAgICAge25hbWU6ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknLCBzZWxlY3RlZDogZmFsc2V9LFxuICAgICAgICAgICAge25hbWU6ICdJIG1pZWkgb3JkaW5pJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQXJjaGl2aW8nLCBzZWxlY3RlZDogZmFsc2V9XG4gICAgICAgICAgXTtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgfVxuXG5cbiAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBsZXQgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjb25maXJtT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhbmNlbE9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDk5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVhY3RpdmF0ZU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRQcmljZSc6XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmRhdGEuaXNNb2RpZmllZCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKHRoaXMuc2VsZWN0VGFiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDI7XG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQgPSB7YW1vdW50OiBhY3Rpb24uZGF0YS5vcmRlclByaWNlLCBjdXJyZW5jeTogJ2V1cid9O1xuICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5zcGxpY2Uob3JkZXJJbmRleCwxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRQcmljZSc6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0ucGF5bWVudC5hbW91bnQgPSBhY3Rpb24uZGF0YS5vcmRlclByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0ucGF5bWVudC5jdXJyZW5jeSA9ICdldXInO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29udGludWVPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5zcGxpY2Uob3JkZXJJbmRleCwxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLml0ID0ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IDEsXG4gICAgICBkYXlOYW1lczogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgZGF5TmFtZXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgIGRheU5hbWVzTWluOiBbJ0RvJywgJ0x1JywgJ01hJywgJ01lJywgJ0dpJywgJ1ZlJywgJ1NhJ10sXG4gICAgICBtb250aE5hbWVzOiBbJ0dlbm5haW8nLCAnRmViYnJhaW8nLCAnTWFyem8nLCAnQXByaWxlJywgJ01hZ2dpbycsICdHaXVnbm8nLFxuICAgICAgICAnTHVnbGlvJywgJ0Fnb3N0bycsICdTZXR0ZW1icmUnLCAnT3R0b2JyZScsICdOb3ZlbWJyZScsICdEaWNlbWJyZSddLFxuICAgICAgbW9udGhOYW1lc1Nob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RUYWIgPSBwYWdlO1xuICAgIGxldCB0YWJJbmRleCA9IDA7XG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYi5uYW1lID09PSBwYWdlKSB7XG4gICAgICAgIHRoaXMudGFic1t0YWJJbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YWJzW3RhYkluZGV4XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGFiSW5kZXgrKztcbiAgICB9KTtcblxuICAgIGxldCBwYXJhbXMgPSBbXTtcblxuICAgIGlmIChwYWdlID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJykge1xuICAgICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbXB0eUxpc3RUaXRsZSA9ICdOb24gY2kgc29ubyBvcmRpbmkgcmljaGllc3RpIGRhaSBjbGllbnRpIHBlciBpbCBtb21lbnRvJ1xuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ1JFQ0VJVkVEJ30pO1xuICAgIH1cblxuICAgIGlmIChwYWdlID09PSAnSSBtaWVpIG9yZGluaScpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSAnTm9uIGNpIHNvbm8gb3JkaW5pIGVmZmV0dHVhdGknXG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICAgIHBhcmFtcy5wdXNoKHtuYW1lOiAnb3JkZXJfdHlwZScsIHZhbHVlOiAnUkVRVUlSRUQnfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgPT09ICdBcmNoaXZpbycpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSBcIkwnYXJjaGl2aW8gZGVnbGkgb3JkaW5pIGUgdnVvdGFcIlxuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ0FSQ0hJVkUnfSk7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UuZ2V0T3JkZXJzKHBhcmFtcylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBvcmRlcnMnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wYWdlRGF0YSA9IHJlc3BvbnNlLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhZ2VEYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKHRoaXMudGFnbGluZXNbcGFnZV0pO1xuICAgIH1cbiAgfVxuXG4gIGRhdGVGb3JtYXRpbmcoZGF0ZSkge1xuICAgIGxldCByZXR1cm5EYXRlID0gJyc7XG4gICAgaWYgKGRhdGUgIT09ICdub3cnKSB7XG4gICAgICBsZXQgZGF0ZVN0cmluZyA9IGRhdGUuc3Vic3RyaW5nKDAsIGRhdGUubGVuZ3RoIC0gNSk7XG4gICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5zcGxpdCgnVCcpO1xuICAgICAgbGV0IGRhdGVDb21wb25lbnRzID0gZGF0ZVN0cmluZ1swXS5zcGxpdCgnLScpO1xuICAgICAgbGV0IGhvdXJDb21wb25lbnRzID0gZGF0ZVN0cmluZ1sxXS5zcGxpdCgnOicpO1xuICAgICAgcmV0dXJuRGF0ZSA9IGRhdGVDb21wb25lbnRzWzJdICsgJyAnICsgdGhpcy5pdC5tb250aE5hbWVzW2RhdGVDb21wb25lbnRzWzFdLTFdICsgJyAnICsgZGF0ZUNvbXBvbmVudHNbMF0gKyAnICcgKyBob3VyQ29tcG9uZW50c1swXSArICc6JyArIGhvdXJDb21wb25lbnRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBtb250aCA9IDEgKyBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgbGV0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgbGV0IGhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKTtcbiAgICAgIGxldCBtaW51dGVzID0gY3VycmVudERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgbGV0IHNlY29uZHMgPSBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICByZXR1cm5EYXRlICs9IHllYXI7XG4gICAgICByZXR1cm5EYXRlICs9IG1vbnRoID4gOSA/ICctJyArIG1vbnRoIDogJy0wJyArIG1vbnRoO1xuICAgICAgcmV0dXJuRGF0ZSArPSBkYXkgPiA5ID8gJy0nICsgZGF5IDogJy0wJyArIGRheTtcbiAgICAgIHJldHVybkRhdGUgKz0gaG91cnMgPiA5ID8gJ1QnICsgaG91cnMgOiAnVDAnICsgaG91cnM7XG4gICAgICByZXR1cm5EYXRlICs9IG1pbnV0ZXMgPiA5ID8gJzonICsgbWludXRlcyA6ICc6MCcgKyBtaW51dGVzO1xuICAgICAgcmV0dXJuRGF0ZSArPSBzZWNvbmRzID4gOSA/ICc6JyArIHNlY29uZHMgICsgJy4wMDBaJyA6ICc6MCcgKyBzZWNvbmRzICsgJy4wMDBaJztcbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkRhdGU7XG4gIH1cblxuICBkYXRlQ29tcGFyZShkYXRlMSwgZGF0ZTIpIHtcbiAgICBsZXQgZGF0ZTFPYmogPSBEYXRlLnBhcnNlKGRhdGUxKTtcbiAgICBsZXQgZGF0ZTJPYmogPSBEYXRlLnBhcnNlKGRhdGUyKTtcbiAgICBpZiAoZGF0ZTFPYmogPiBkYXRlMk9iaikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpdGVtc0Zvcm1hdGluZyhpdGVtcykge1xuICAgIGxldCByZXR1cm5Qcm9kdWN0cyA9IFtdO1xuICAgIGxldCBwcm9kdWN0cyA9IGl0ZW1zLnNwbGl0KCd8fCcpO1xuICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgIGxldCBwcm9kdWN0Q29tcG9uZW50cyA9IHByb2R1Y3Quc3BsaXQoJzonKTtcbiAgICAgIGlmIChwcm9kdWN0Q29tcG9uZW50c1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVyblByb2R1Y3RzLnB1c2goe25hbWU6IHByb2R1Y3RDb21wb25lbnRzWzBdLCBpdGVtczogcHJvZHVjdENvbXBvbmVudHNbMV19KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuUHJvZHVjdHM7XG4gIH1cblxuICBjb25maXJtT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjYW5jZWxPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICByZWFjdGl2YXRlT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdyZWFjdGl2YXRlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgY29tcGxldGFPcmRlcihpZCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2FkZFByaWNlJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGVkaXRPcmRlcihpZCwgcGF5bWVudCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2VkaXRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBpZCwgcGF5bWVudDogcGF5bWVudH19KTtcbiAgfVxuICBjb250aW51ZU9yZGVyKGlkLCBwYXltZW50KSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29udGludWVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZCwgcGF5bWVudDogcGF5bWVudCwgaW5mb3JtYXRpb246ICcxMjDigqwgKyA2LjbigqwgPSAxMjYuNuKCrCd9fSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyRGF0YSB7XG4gIGZ1bGxuYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xuICBzdHJlZXQ/OiBzdHJpbmc7XG4gIGNpdHk/OiBzdHJpbmc7XG4gIHBvc3RhbF9jb2RlPzogbnVtYmVyO1xuICBwcm92aW5jZT86IHN0cmluZztcbiAgY291bnRyeT86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc2VsZWN0VGFiOiBzdHJpbmd8Ym9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuICBwdWJsaWMgZGVsdGE6IG51bWJlciA9IDA7XG4gIHB1YmxpYyB0YWJzID0gW1xuICAgIHtuYW1lOiAnR2VuZXJhbGknLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3NldHRpbmdzJ30sXG4gICAge25hbWU6ICdNZXRvZG8gZGkgUGFnYW1lbnRvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwYXltZW50J30sXG4gICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICBdO1xuXG4gIHB1YmxpYyB1c2VyRGF0YTogSVVzZXJEYXRhID0ge1xuICAgIGZ1bGxuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvbmVfbnVtYmVyOiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJ1xuICB9O1xuXG4gIHB1YmxpYyBhY3RpdmVQb3B1cCA9ICcnO1xuICBwdWJsaWMgY2hhbmdlUGFzc3dvcmRFcnJvciA9IHtcbiAgICBjdXJyZW50UGFzc3dvcmQ6IGZhbHNlLFxuICAgIHBhc3N3b3JkQ29uZmlybTogZmFsc2VcbiAgfTtcbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkRGF0YSA9IHtcbiAgICBjdXJyZW50UGFzc3dvcmQ6ICcnLFxuICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gIH07XG4gIHB1YmxpYyBmb3JtRXJyb3I6IGJvb2xlYW58e3RpdGxlPzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmd9ID0gZmFsc2U7XG4gIHB1YmxpYyBjYXJkcyA9IFtdO1xuICBwdWJsaWMgZGVmYXVsdENhcmQgPSAnJztcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSxcbiAgICAgIHByaXZhdGUgcGF5bWVudFNlcnZpY2U6IFBheW1lbnRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBzZW9TZXJ2aWNlOiBTZW9TZXJ2aWNlKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIHRoaXMudXNlckRhdGEuZnVsbG5hbWUgPSBhdXRoRGF0YS5mdWxsbmFtZTtcbiAgICAgICAgdGhpcy51c2VyRGF0YS5lbWFpbCA9IGF1dGhEYXRhLmVtYWlsO1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAgICAgICAge25hbWU6ICdQcml2YWN5IFBvbGljeScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncHJpdmFjeSd9LFxuICAgICAgICAgIHtuYW1lOiAnQXNzaXN0ZW56YScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnaGVscCd9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICAgICAge25hbWU6ICdQcml2YWN5IFBvbGljeScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncHJpdmFjeSd9LFxuICAgICAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdJbCBtaW8gYWNjb3VudCcpO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFRhYiA9IHBhcmFtc1sncGFnZSddO1xuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdwYXltZW50Jykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ01ldG9kbyBkaSBwYWdhbWVudG8nKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wYXltZW50U2VydmljZS5nZXRDYXJkcygpXG4gICAgICAgICAgICAudGhlbigoY2FyZHMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGNhcmRzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmQgPSBjYXJkcy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgICBjYXJkcy5zb3VyY2VzLmRhdGEuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZERhdGEpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgU3RhcmJvb2sgYWNjb3VudCBkbyBub3QgaGF2ZSBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gV2hlbiB5b3UgYWRkIGEgbmV3IGNhcmQsIHdpbGwgYmUgY3JlYXRlZCBhIFN0cmlwZSBhY2NvdW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZSB0aGUgU3RhcmJvb2sgYWNjb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCd9fSk7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J3NldHRpbmdzJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0luZm9ybWF6aW9uaSBkZWwgbWlvIGFjY291bnQnKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlKClcbiAgICAgICAgICAgIC50aGVuKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgdXNlciBwcm9maWxlJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuZnVsbG5hbWUgPSBwcm9maWxlLnJlc3VsdC5wcm9maWxlLmZ1bGxuYW1lO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmVtYWlsID0gcHJvZmlsZS5yZXN1bHQuZW1haWw7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucGhvbmVfbnVtYmVyID0gcHJvZmlsZS5yZXN1bHQucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnN0cmVldCA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3Muc3RyZWV0O1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmNpdHkgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGUgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5jb3VudHJ5ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJ319KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J2NvbmRpdGlvbnMnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncHJpdmFjeScpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdoZWxwJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXNbJ3BhZ2UnXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbmV3Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25ld0NhcmRFcnJvcic6XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RhcnROZXdDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhcmRFZGl0ZWQnOlxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNbaV0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9maWxlKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLnVwZGF0ZVByb2ZpbGUodGhpcy51c2VyRGF0YSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1VwZGF0ZSB1c2VyIHByb2ZpbGUnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7fTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5wcm9maWxlLmZ1bGxuYW1lID0gdGhpcy51c2VyRGF0YS5mdWxsbmFtZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEucGhvbmVfbnVtYmVyID0gdGhpcy51c2VyRGF0YS5waG9uZV9udW1iZXI7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3Muc3RyZWV0ID0gdGhpcy51c2VyRGF0YS5zdHJlZXQ7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MuY2l0eSA9IHRoaXMudXNlckRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5wb3N0YWxfY29kZSA9IHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGU7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MucHJvdmluY2UgPSB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLmNvdW50cnkgPSB0aGlzLnVzZXJEYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgIHByb2ZpbGVEYXRhID0gYXV0aERhdGE7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShwcm9maWxlRGF0YSk7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnSGFpIGFnZ2lvcm5hdG8gbGUgdHVlIGluZm9ybWF6aW9uaSBjb24gc3VjY2Vzc28hJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOiAnRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXJQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnNlbGVjdFRhYiA9IHBhZ2U7XG4gIH1cblxuICBnZXRQb3B1cCh0eXBlKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9IHR5cGU7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkge1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLm5ld1Bhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZERhdGEucGFzc3dvcmRDb25maXJtID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tQYXNzd29yZChuZXdQYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgaWYgKG5ld1Bhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEVycm9yLnBhc3N3b3JkQ29uZmlybSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQsIGRlbHRhKSB7XG4gICAgbGV0IGNhbGN1bGF0ZURlbHRhID0gdGhpcy5kZWx0YSArIGRlbHRhO1xuICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gICAgbGV0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0LW5hdmlnYXRlID4gZGl2ID4gYScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgICAgIG1lbnVTaXplICs9IG1lbnVJdGVtLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1uYXZpZ2F0ZScpLmNsaWVudFdpZHRoO1xuICAgIGxldCBhbGxvd01hcmdpbiA9IChtZW51U2l6ZSkgLSBtZW51QmxvY2tXaWR0aDtcbiAgICBpZiAoYWxsb3dNYXJnaW4gPj0gMCkge1xuICAgICAgYWxsb3dNYXJnaW4gPSAtYWxsb3dNYXJnaW47XG4gICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhIDwgYWxsb3dNYXJnaW4pIHtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUICYmIGFsbG93TWFyZ2luICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZE5ld0NhcmQoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnYWRkQ2FyZCd9KTtcbiAgfVxuXG4gIGZvcm1hdFllYXIoeWVhcikge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZm9ybWF0ZWRZZWFyID0gJyc7XG4gICAgbGV0IHllYXJBcnJheSA9IHllYXIudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgeWVhckFycmF5LmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgaWYgKGkgPiAxKSB7XG4gICAgICAgIGZvcm1hdGVkWWVhciArPSBudW07XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdGVkWWVhcjtcbiAgfVxuXG4gIGZvcm1hdENzc0NsYXNzKGJyYW5kKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChicmFuZCA9PT0gJ1Zpc2EnKSB7XG4gICAgICByZXN1bHQgPSAndmlzYSc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ0FtZXJpY2FuIEV4cHJlc3MnKSB7XG4gICAgICByZXN1bHQgPSAnYW1leCc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ01hc3RlckNhcmQnKSB7XG4gICAgICByZXN1bHQgPSAnbWFzdGVyY2FyZCc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZWxlY3RDYXJkKGlkKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucGF5bWVudFNlcnZpY2Uuc2VsZWN0Q2FyZChpZClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NlbGVjdGluZyBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZCA9IHN0YXR1cy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wYXltZW50U2VydmljZS5kZWxldGVDYXJkKGlkKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRGVsZXRpbmcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLmNhcmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRDYXJkICYmIHRoaXMuY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG90aGVyQ2FyZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgICAgIG90aGVyQ2FyZCA9IGNhcmQuaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RDYXJkKG90aGVyQ2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZWRpdENhcmQoaWQpIHtcbiAgICBsZXQgY2FyZERhdGEgPSB7fTtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmKGNhcmQuaWQgPT09IGlkKSB7XG4gICAgICAgIGNhcmREYXRhID0ge1xuICAgICAgICAgIGlkOiBjYXJkLmlkLFxuICAgICAgICAgIGFkZHJlc3NfY2l0eTogY2FyZC5hZGRyZXNzX2NpdHksXG4gICAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeSxcbiAgICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgICAgYWRkcmVzc19saW5lMjogY2FyZC5hZGRyZXNzX2xpbmUyLFxuICAgICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgICBhZGRyZXNzX3ppcDogY2FyZC5hZGRyZXNzX3ppcCxcbiAgICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICAgIGV4cF95ZWFyOiB0aGlzLmZvcm1hdFllYXIoY2FyZC5leHBfeWVhciksXG4gICAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICAgIG51bWJlcjogJyoqKiogJyArIGNhcmQubGFzdDQsXG4gICAgICAgICAgY3ZjOiAnKioqJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2VkaXRDYXJkJywgZGF0YTogY2FyZERhdGF9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dvdXQnLCBkYXRhOiB7fX0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGUodXNlckRhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBmdWxsbmFtZTogdXNlckRhdGEuZnVsbG5hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhLnBob25lX251bWJlcixcbiAgICAgIHN0cmVldDogdXNlckRhdGEuc3RyZWV0LFxuICAgICAgY2l0eTogdXNlckRhdGEuY2l0eSxcbiAgICAgIHBvc3RhbF9jb2RlOiB1c2VyRGF0YS5wb3N0YWxfY29kZSxcbiAgICAgIHByb3ZpbmNlOiB1c2VyRGF0YS5wcm92aW5jZSxcbiAgICAgIGNvdW50cnk6IHVzZXJEYXRhLmNvdW50cnlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ21lJywgZGF0YSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZSgpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnbWUnLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL3Byb2ZpbGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcbmltcG9ydCAnLi9fX3dvcmthcm91bmQubm9kZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgeyBjcmVhdGVFbmdpbmUgfSBmcm9tICdhbmd1bGFyMi1leHByZXNzLWVuZ2luZSc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9zZXJ2ZXIucm91dGVzJztcblxuLy8gQXBwXG5cbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcbmNvbnN0IHBvcnQgPSA0MjAwOyAvL3Byb2Nlc3MuZW52LlBPUlQgfHwgODAgfHwgODA4MDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyogVGhlcmUgYXJlIGNvZGUgZnJvbSBvbGQgc2VydmVyICovXG4vLyBhcHAudXNlKCcvJywgcmVxdWlyZSgncmVkaXJlY3QtaHR0cHMnKSh7XG4vLyAgIGJvZHk6ICcnLFxuLy8gICBwb3J0OiA0NDMsXG4vLyAgIHRydXN0UHJveHk6IHRydWVcbi8vIH0pKVxuLy9cbi8vIGFwcC5hbGwoJy8qJywgZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55LCBuZXh0KSB7XG4vLyAgIGlmKCEvXnd3d1xcLi8udGVzdChyZXEuaGVhZGVycy5ob3N0KSkge1xuLy8gICAgIHJlcy5zdGF0dXMoMzAxKS5yZWRpcmVjdChyZXEucHJvdG9jb2wgKyAnOi8vd3d3LicgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLnVybClcbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXh0KClcbi8vICAgfVxuLy8gfSlcblxuXG4vKipcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxuICovXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcblxuLyoqXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxuICovXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcblxuLyoqXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxuICogQHBhcmFtIHJlcVxuICogQHBhcmFtIHJlc1xuICovXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XG4gICAgcmVxLFxuICAgIHJlcyxcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxuICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcbiAgfSk7XG59XG5cbi8qKlxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXG4gKi9cbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XG59KTtcblxuLyoqXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXG4gKi9cblxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcbn0pO1xuXG5cbi8qIFRoZXJlIGFyZSBjb2RlIGZyb20gb2xkIHNlcnZlciAoYXBwLmpzKSAqL1xuaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKS5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG5sZXQgb3B0aW9ucyA9IHtcbiAga2V5OiBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9jZXJ0L2tleS5wZW0nLCAndXRmOCcpLFxuICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy9jZXJ0L3NlcnZlci5jcnQnLCAndXRmOCcpXG59O1xuLy8gaHR0cHMuY3JlYXRlU2VydmVyKG9wdGlvbnMsIGFwcCkubGlzdGVuKDQ0MywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgNDQzYCk7XG4vLyB9KTtcblxuLy8gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiXG4vKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IF9fY29yZV9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCBwYXRjaCA9IGZhbHNlO1xuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fWydWaWV3VXRpbHMnXSA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbn1cblxuXG5cbmlmIChfX2NvbXBpbGVyX18gJiYgX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlciAmJiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3IpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxuaWYgKHBhdGNoKSB7XG4gICAgdmFyIF9fdW5pdmVyc2FsX18gPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX19bJ3ZpZXdfdXRpbHMnXTtcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciB8fCBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3I7XG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciB8fCBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyO1xufVxuXG4vLyBGaXggTWF0ZXJpYWwgU3VwcG9ydFxuZnVuY3Rpb24gdW5pdmVyc2FsTWF0ZXJpYWxTdXBwb3J0cyhldmVudE5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gQm9vbGVhbih0aGlzLmlzQ3VzdG9tRXZlbnQoZXZlbnROYW1lKSk7IH1cbl9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uSGFtbWVyR2VzdHVyZXNQbHVnaW4ucHJvdG90eXBlLnN1cHBvcnRzID0gdW5pdmVyc2FsTWF0ZXJpYWxTdXBwb3J0cztcbi8vIEVuZCBGaXggTWF0ZXJpYWwgU3VwcG9ydFxuXG4vLyBGaXggVW5pdmVyc2FsIFN0eWxlXG5pbXBvcnQgeyBOb2RlRG9tUm9vdFJlbmRlcmVyLCBOb2RlRG9tUmVuZGVyZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwvbm9kZSc7XG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnRGaXgoY29tcG9uZW50UHJvdG86IGFueSkge1xuICByZXR1cm4gbmV3IE5vZGVEb21SZW5kZXJlcih0aGlzLCBjb21wb25lbnRQcm90bywgdGhpcy5fYW5pbWF0aW9uRHJpdmVyKTtcbn1cbk5vZGVEb21Sb290UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudEZpeDtcbi8vIEVuZCBGaXggVW5pdmVyc2FsIFN0eWxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX193b3JrYXJvdW5kLm5vZGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBFdmVudCwgTmF2aWdhdGlvbkVuZCwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS9ob21lLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgZ2E6IEZ1bmN0aW9uO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHRhZ2xpbmU6IHN0cmluZztcbiAgcHVibGljIGF1dGg7XG4gIHB1YmxpYyBhY3RpdmVQb3B1cCA9ICcnO1xuICBwdWJsaWMgcG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBuYXZiYXJTdGF0ZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBpc0ZpbmRGaWVsZCA9IGZhbHNlO1xuICBwdWJsaWMgc3BpbmVyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgY2xlYXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBmaW5kVmFsdWU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIGlzU2VhcmNoZWQgPSBmYWxzZTtcbiAgcHVibGljIGJyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBhdXRoU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIGxvYWRpbmdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvciAocHVibGljIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGF1dGhTZXJ2aWNzOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQ6RXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICBnYSgnc2VuZCcsICdwYWdldmlldycsIGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3Q7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFJvdXRlLmNoaWxkcmVuWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3VycmVudFJvdXRlID0gY3VycmVudFJvdXRlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdpc0ZpbmRGaWVsZCcgaW4gY3VycmVudFJvdXRlLnNuYXBzaG90LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRGaWVsZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmlzRmluZEZpZWxkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRMb2dpblBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luJ30pO1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgZ2V0UmVnaXN0cmF0aW9uUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAncmVnaXN0cmF0aW9uJ30pO1xuICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoJycpO1xuICB9XG5cbiAgdG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLm5hdmJhclN0YXRlID0gIXRoaXMubmF2YmFyU3RhdGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF1dGggPSB0aGlzLmF1dGhTZXJ2aWNzLmF1dGhJbml0KCk7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldE1lc3NhZ2UkLnN1YnNjcmliZShtZXNzYWdlID0+IHtcbiAgICAgICAgdGhpcy50YWdsaW5lID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5maW5kVmFsdWUgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU2VhcmNoZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRoU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRQZXJzb25hbE1lbnUkLnN1YnNjcmliZShhdXRoID0+IHtcbiAgICAgICAgaWYgKGF1dGggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMubG9hZGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0TG9hZGluZ1N0YXR1cyQuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgLy8gICB0aGlzLmlzTG9hZGluZyA9IHN0YXR1cztcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRhYk1lbnUodG9nZ2xlTWVudSA9IGZhbHNlKSB7XG4gICAgaWYgKHRvZ2dsZU1lbnUpIHtcbiAgICAgIHRoaXMudG9nZ2xlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUFjdGl2ZVRhYihmYWxzZSk7XG4gIH1cblxuICBzZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLmlzU2VhcmNoZWQgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmVyVmlldyA9IHRydWU7XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlYXJjaChldmVudC5xdWVyeSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzLnJlc3VsdDtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgIH0pXG4gIH1cblxuICBzZWxlY3RSZXN1bHQoc2VydmljZXNPYmopIHtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlbmRTZXJ2aWNlcyhzZXJ2aWNlc09iaik7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICB0aGlzLm5hdmJhclN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5maW5kVmFsdWUgPSAnJztcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlcnZpY2VzJywgc2VydmljZXNPYmouX2lkXSk7XG4gIH1cblxuICBjbGVhclNlYXJjaEZvcm0oKSB7XG4gICAgdGhpcy5maW5kVmFsdWUgPSAnJztcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5hdXRoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIC8vIHRoaXMubG9hZGluZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcbiAqIFRoaXMgZmlsZSBhbmQgYG1haW4uYnJvd3Nlci50c2AgYXJlIGlkZW50aWNhbCwgYXQgdGhlIG1vbWVudCghKVxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxuICogWW91IGNhbiBhbHNvIGp1c3QgaGF2ZSAxIGZpbGUsIHRoYXQgaXMgaW1wb3J0ZWQgaW50byBib3RoXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xuICovXG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlLCBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIGltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUsIGlzQnJvd3NlciwgTm9kZUh0dHBNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IEF1dG9Db21wbGV0ZU1vZHVsZSwgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmcyLWNsaWNrLW91dHNpZGUnO1xuLy8gaW1wb3J0IHsgTWFzb25yeU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1hc29ucnknO1xuLy8gaW1wb3J0IHsgTmdiTW9kdWxlLCBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS9ob21lLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlci9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9vcmRlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZW8uc2VydmljZSc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci9vcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwc0NvbXBvbmVudCB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGhvbmVQaXBlIH0gZnJvbSAnLi9waXBlcy9waG9uZS5waXBlJztcbmltcG9ydCB7IExhbmRpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwaXJ5UGlwZSB9IGZyb20gJy4vcGlwZXMvZXhwaXJ5LnBpcGUnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjZWJvb2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudCc7XG5cblxuLy8gaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwL2FwcC5yb3V0aW5nJztcblxuLy8gZXhwb3J0IGNsYXNzIEhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbi8vICAgb3ZlcnJpZGVzID0gPGFueT4ge1xuLy8gICAgICdzd2lwZSc6IHt2ZWxvY2l0eTogMC40LCB0aHJlc2hvbGQ6IDIwfVxuLy8gICB9O1xuLy8gfVxuXG5sZXQgaW1wb3J0cyA9IFtcbiAgTm9kZUh0dHBNb2R1bGUsXG4gIFVuaXZlcnNhbE1vZHVsZSxcbiAgRm9ybXNNb2R1bGUsXG4gIC8vIEJyb3dzZXJNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIC8vIE1hc29ucnlNb2R1bGUsXG5cbiAgUm91dGVyTW9kdWxlLFxuICByb3V0aW5nLFxuICAvLyBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAvLyBBdXRvQ29tcGxldGVNb2R1bGUsXG4gIC8vIENhbGVuZGFyTW9kdWxlLFxuICBDbGlja091dHNpZGVNb2R1bGVcbl07XG5sZXQgZGVjbGFyYXRpb25zID0gW1xuICBBcHBDb21wb25lbnQsXG4gIEhvbWVDb21wb25lbnQsXG4gIE9yZGVyQ29tcG9uZW50LFxuICBPcmRlcnNDb21wb25lbnQsXG4gIFByb2ZpbGVDb21wb25lbnQsXG4gIFBvcHVwc0NvbXBvbmVudCxcbiAgUGhvbmVQaXBlLFxuICBMYW5kaW5nQ29tcG9uZW50LFxuICBFeHBpcnlQaXBlLFxuICBMb2FkaW5nQ29tcG9uZW50LFxuICBGYWNlYm9va0NvbXBvbmVudFxuXTtcblxuaWYgKGlzQnJvd3Nlcikge1xuICBsZXQgQ2FsZW5kYXJNb2R1bGUgPSByZXF1aXJlKCdwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXInKS5DYWxlbmRhck1vZHVsZTtcbiAgaW1wb3J0cy5wdXNoKENhbGVuZGFyTW9kdWxlKTtcbiAgbGV0IEF1dG9Db21wbGV0ZU1vZHVsZSA9IHJlcXVpcmUoJ3ByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJykuQXV0b0NvbXBsZXRlTW9kdWxlO1xuICBpbXBvcnRzLnB1c2goQXV0b0NvbXBsZXRlTW9kdWxlKTtcbn1cbmVsc2Uge1xuICBsZXQgQ2FsZW5kYXJNb2NrQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQnKS5DYWxlbmRhck1vY2tDb21wb25lbnQ7XG4gIGRlY2xhcmF0aW9ucy5wdXNoKENhbGVuZGFyTW9ja0NvbXBvbmVudCk7XG4gIGxldCBBdXRvQ29tcGxldGVNb2NrTW9kdWxlID0gcmVxdWlyZSgnLi9tb2Nrcy9hdXRvY29tcGxldGUuY29tcG9uZW50JykuQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudDtcbiAgZGVjbGFyYXRpb25zLnB1c2goQXV0b0NvbXBsZXRlTW9ja01vZHVsZSk7XG59XG5cbi8qKlxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcbiAqL1xuQE5nTW9kdWxlKHtcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xuICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucyxcbiAgaW1wb3J0czogaW1wb3J0cyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8ge3Byb3ZpZGU6IE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIHVzZUNsYXNzOiBmb3J3YXJkUmVmKCgpID0+IE9yZGVyQ29tcG9uZW50KX0sXG4gICAgLy8ge1xuICAgIC8vICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxuICAgIC8vICAgdXNlQ2xhc3M6IEhhbW1lckNvbmZpZ1xuICAgIC8vIH0sXG4gICAgSG9tZVNlcnZpY2UsXG4gICAgQXV0aFNlcnZpY2UsXG4gICAgT3JkZXJTZXJ2aWNlLFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIE9yZGVyc1NlcnZpY2UsXG4gICAgUG9wdXBzU2VydmljZSxcbiAgICBQYXltZW50U2VydmljZSxcbiAgICBBbmFseXRpY3NTZXJ2aWNlLFxuICAgIFNlb1NlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2Vib29rQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3NlcnZpY2VzLzppZCcsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICAgIGRhdGE6IHtpc0ZpbmRGaWVsZDogdHJ1ZX1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdvcmRlcnMnLFxuICAgIGNvbXBvbmVudDogT3JkZXJzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncHJvZmlsZS86cGFnZScsXG4gICAgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZmFjZWJvb2snLFxuICAgIGNvbXBvbmVudDogRmFjZWJvb2tDb21wb25lbnRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtYXV0b0NvbXBsZXRlJyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdzdWdnZXN0aW9ucycpIHN1Z2dlc3Rpb25zOiBhbnlbXTtcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tb2Nrcy9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDYWxlbmRhck1vY2tDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+JyxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCdsb2NhbGUnKSBsb2NhbGU6IGFueTtcbiAgQElucHV0KCdtaW5EYXRlJykgbWluRGF0ZTogYW55O1xuICBASW5wdXQoJ21heERhdGUnKSBtYXhEYXRlOiBhbnk7XG4gIHB1YmxpYyBvblNlbGVjdDogYW55O1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21vY2tzL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UsIElBZGRyZXNzIH0gZnJvbSAnLi9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgb3JkZXJEYXRhO1xuICBASW5wdXQoJ29yZGVySXNGdWxsJykgb3JkZXJJc0Z1bGw7XG5cbiAgcHVibGljIGl0OiBhbnk7XG4gIHB1YmxpYyB0aW1lUGlja2VyID0gW107XG4gIHB1YmxpYyBtb250aHM6IHt9O1xuICBwdWJsaWMgdGltZVBpY2tlcklzU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgYWRkcmVzc2VzID0gW107XG4gIHB1YmxpYyBhZGRyZXNzID0gJyc7XG4gIHB1YmxpYyBzZWxlY3RlZEFkZHJlc3M6IElBZGRyZXNzID0ge1xuICAgIHN0cmVldDogJycsXG4gICAgc3RyZWV0X251bWJlcjogbnVsbCxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJycsXG4gICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgaXNGdWxsOiBmYWxzZSxcbiAgICBmb3JtYXR0ZWRBZGRyZXNzOiAnJ1xuICB9O1xuICBwdWJsaWMgaXNBZGRyZXNzT25lID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBpc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICAvLyBwdWJsaWMgaXNFbmFibGUgPSB0cnVlO1xuICBwdWJsaWMgT3JkZXIgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgZGVsaXZlcnlfZGV0YWlsczogW10sXG4gICAgZGVsaXZlcnlfZGVzY3JpcHRpb246ICcnLFxuICAgIGFwcGxpY2FudF9mdWxsbmFtZTogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9lbWFpbDogJ25vbmUnLFxuICAgIGFwcGxpY2FudF9waG9uZTogJ25vbmUnLFxuICAgIGRlbGl2ZXJ5X2FkZHJlc3M6ICcnLFxuICAgIGRhdGU6IG51bGwsXG4gICAgdGltZTogJycsXG4gICAgZGVsaXZlcnlfZGF0ZTogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnLFxuICAgIHBheW1lbnQ6IHthbW91bnQ6IDAsIGN1cnJlbmN5OiAnJ31cbiAgfTtcbiAgcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDI0KjIxKSAqIDYwICogNjAgKiAxMDAwKTtcbiAgcHVibGljIHN1Ym1pdE9yZGVyID0gZmFsc2U7XG4gIHB1YmxpYyBvcmRlckZvcm06IGFueTtcbiAgcHVibGljIGlzTW9iaWxlQ2FsZW5kYXI6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgbWF4T3JkZXJCbG9ja1NpemU6IG51bWJlcnxzdHJpbmcgPSAnYXV0byc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGJyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy50aW1lUGlja2VyLnB1c2goJzA4OjAwJywgJzA4OjMwJywgJzA5OjAwJywgJzA5OjMwJywgJzEwOjAwJywgJzEwOjMwJywgJzExOjAwJywgJzE0OjAwJywgJzE0OjMwJywgJzE1OjAwJyk7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgLy8gICBpZiAoaSA+IDcgJiYgaSA8IDE1KSB7XG4gICAgLy8gICAgIGlmIChpID4gOSkge1xuICAgIC8vICAgICAgIHRoaXMudGltZVBpY2tlci5wdXNoKGkgKyAnOjAwJywgaSArICc6MzAnKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLnRpbWVQaWNrZXIucHVzaCgnMCcgKyBpICsgJzowMCcsICcwJyArIGkgKyAnOjMwJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5tb250aHMgPSB7XG4gICAgICAxOiAnR2VubmFpbycsXG4gICAgICAyOiAnRmViYnJhaW8nLFxuICAgICAgMzogJ01hcnpvJyxcbiAgICAgIDQ6ICdBcHJpbGUnLFxuICAgICAgNTogJ01hZ2dpbycsXG4gICAgICA2OiAnR2l1Z25vJyxcbiAgICAgIDc6ICdMdWdsaW8nLFxuICAgICAgODogJ0Fnb3N0bycsXG4gICAgICA5OiAnU2V0dGVtYnJlJyxcbiAgICAgIDEwOiAnT3R0b2JyZScsXG4gICAgICAxMTogJ05vdmVtYnJlJyxcbiAgICAgIDEyOiAnRGljZW1icmUnXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VydmljZXM6ICcgKyB0aGlzLmRlZmF1bHRTZXJ2aWNlcy50aXRsZSk7XG5cbiAgfVxuXG4gIHRvZ2dsZVRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gIXRoaXMudGltZVBpY2tlcklzU2hvdztcbiAgfVxuXG4gIG9wZW5UaW1lcGlja2VyKCkge1xuICAgIHRoaXMudGltZVBpY2tlcklzU2hvdyA9IHRydWU7XG4gIH1cblxuICBjbG9zZVRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gZmFsc2U7XG4gIH1cblxuICBzZWxlY3RUaW1lKHRpbWUpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IHRpbWUnfSk7XG4gICAgdGhpcy5PcmRlci50aW1lID0gdGltZTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhldmVudCkge1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAyKSB7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5nZXRBZGRyZXNzZXMoZXZlbnQucXVlcnkpXG4gICAgICAgIC50aGVuKChhZGRyZXNzZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IFtdO1xuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gYWRkcmVzc2VzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0QWRkcmVzcyh2YWx1ZSkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgYWRkcmVzcyd9KTtcbiAgICBpZiAodmFsdWUuaXNGdWxsKSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSB2YWx1ZTtcbiAgfVxuXG4gIG1vZGlmeUFkZHJlc3MoKSB7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICAgIC8vIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSBmYWxzZTtcbiAgfVxuXG4gIHNob3dDb25maXJtYXRpb24oKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ3N0YXJ0J30pO1xuICAgIHRoaXMuc3VibWl0T3JkZXIgPSB0cnVlO1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9ICcnO1xuICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSAnJztcbiAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9ICcnO1xuXG4gICAgdGhpcy5PcmRlci5zdHJlZXQgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXQ7XG4gICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0X251bWJlcjtcbiAgICB0aGlzLk9yZGVyLmNpdHkgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jaXR5O1xuICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5wb3N0YWxfY29kZTtcbiAgICB0aGlzLk9yZGVyLnByb3ZpbmNlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MucHJvdmluY2U7XG4gICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY291bnRyeTtcbiAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNvdW50cnlfY29kZTtcbiAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldCArICcsICcgKyB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXRfbnVtYmVyICsgJywgJyArIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNpdHk7XG5cbiAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgICAvLyB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93UHJldmlld09yZGVyKCk7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIFZlcnNpb24gd2l0aCByZXF1ZXN0aW5nIGFkZHJlc3MgYWZ0ZXIgY2xpY2sgJ0NyZWF0ZSBhbiBvcmRlcicgYnV0dG9uIC8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgLy8gdGhpcy5vcmRlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKHRoaXMuYWRkcmVzcylcbiAgICAvLyAgICAgLnRoZW4oKGFkZHJlc3M6IElBZGRyZXNzW10pID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDEpIHtcbiAgICAvLyAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGFkZHJlc3MpIHtcbiAgICAvLyAgICAgICAgICAgdmFyIGFkZHIgPSBhZGRyZXNzW2luZGV4XTtcbiAgICAvLyAgICAgICAgICAgdmFyIGNpdHlfdG9fbWF0Y2ggPSBuZXcgUmVnRXhwKGFkZHIuY2l0eSwgJ2knKVxuICAgIC8vICAgICAgICAgICB2YXIgc3RyZWV0X251bWJlcl90b19tYXRjaCA9IG5ldyBSZWdFeHAoU3RyaW5nKGFkZHIuc3RyZWV0X251bWJlciksICdpJylcbiAgICAvLyAgICAgICAgICAgaWYgKHRoaXMuYWRkcmVzcy5tYXRjaChjaXR5X3RvX21hdGNoKSAmJiB0aGlzLmFkZHJlc3MubWF0Y2goc3RyZWV0X251bWJlcl90b19tYXRjaCkpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXQgPSBhZGRyLnN0cmVldDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSBhZGRyLnN0cmVldF9udW1iZXI7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jaXR5ID0gYWRkci5jaXR5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSBhZGRyLnBvc3RhbF9jb2RlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSBhZGRyLnByb3ZpbmNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeSA9IGFkZHIuY291bnRyeTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9IGFkZHIuY291bnRyeV9jb2RlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHIuZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHIuc3RyZWV0ICsgJywgJyArIGFkZHIuc3RyZWV0X251bWJlciArICcsICcgKyBhZGRyLmNpdHk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH0gZWxzZSBpZiAoMCBpbiBhZGRyZXNzKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnN0cmVldCA9IGFkZHJlc3NbMF0uc3RyZWV0O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gYWRkcmVzc1swXS5zdHJlZXRfbnVtYmVyO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jaXR5ID0gYWRkcmVzc1swXS5jaXR5O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IGFkZHJlc3NbMF0ucG9zdGFsX2NvZGU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnByb3ZpbmNlID0gYWRkcmVzc1swXS5wcm92aW5jZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeSA9IGFkZHJlc3NbMF0uY291bnRyeTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gYWRkcmVzc1swXS5jb3VudHJ5X2NvZGU7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzWzBdLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3NbMF0uc3RyZWV0ICsgJywgJyArIGFkZHJlc3NbMF0uc3RyZWV0X251bWJlciArICcsICcgKyBhZGRyZXNzWzBdLmNpdHk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIC8vIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3NbMF0uZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgaWYgKCh0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09ICcnICYmIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09IG51bGwpKSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKVxuICAgIC8vXG4gICAgLy8gICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZXZpZXdPcmRlcigpIHtcbiAgICBpZiAodGhpcy5PcmRlci5kYXRlICYmIHRoaXMub3JkZXJJc0Z1bGwgJiYgdGhpcy5pc0FkZHJlc3NGdWxsICYmIHRoaXMub3JkZXJEYXRhLm9yZGVyX29wdGlvbnMubWluX2Ftb3VudCA8PSB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlKSB7XG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuT3JkZXIuZGF0ZSk7XG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiAnMCcgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBvcmRlckluZm9ybWF0aW9uID0ge1xuICAgICAgICBkYXRlOiBkYXkgKyAnICcgKyB0aGlzLml0Lm1vbnRoTmFtZXNbZGF0ZS5nZXRNb250aCgpXSArICcgJyArIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdGltZTogdGhpcy5PcmRlci50aW1lLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLk9yZGVyLnN0cmVldCArICcsICcgKyB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgKyAnLCAnICsgdGhpcy5PcmRlci5jaXR5LFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5PcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvblxuICAgICAgfTtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luRnJvbU9yZGVyJywgZGF0YToge29yZGVyRGF0YTogdGhpcy5vcmRlckRhdGEsIGluZm9ybWF0aW9uOiBvcmRlckluZm9ybWF0aW9ufX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YToge29yZGVyRGF0YTogdGhpcy5vcmRlckRhdGEsIGluZm9ybWF0aW9uOiBvcmRlckluZm9ybWF0aW9ufX0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU9yZGVyKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICBsZXQgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpO1xuICAgIGlmICh1c2VyRGF0YSAhPT0gbnVsbCkge1xuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogJzAnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgY29ycmVjdE1vbnRoID0gMSArIGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCBtb250aCA9IGNvcnJlY3RNb250aCA+IDkgPyBjb3JyZWN0TW9udGggOiAnMCcgKyBjb3JyZWN0TW9udGg7XG4gICAgICAvLyB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArICdUJyArIHRoaXMuT3JkZXIudGltZSArICc6MDAuMDAwWic7XG4gICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBtb250aCArICctJyArIGRheSArICdUJyArICcwODowMCcgKyAnOjAwLjAwMFonO1xuICAgICAgdGhpcy5PcmRlci5zZXJ2aWNlX2lkID0gdGhpcy5vcmRlckRhdGEuc2VydmljZV9pZDtcbiAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscyA9IFt7XG4gICAgICAgIHRpdGxlOiB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlLFxuICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgIHR5cGU6ICdzZXJ2aWNlJ1xuICAgICAgfV07XG4gICAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcy5mb3JFYWNoKChvcmRlckNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmIChvcmRlckNhdGVnb3J5LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgLy8gdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSArICcgLSAnICsgb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICB0eXBlOiAnaXRlbSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAvLyB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lICsgJyAtICcgKyBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDogb3JkZXJDYXRlZ29yeS5vcHRpb24ucHJpY2UsXG4gICAgICAgICAgICB0eXBlOiAnaXRlbSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLk9yZGVyLnBheW1lbnQgPSB7XG4gICAgICAgIGFtb3VudDogdGhpcy5vcmRlckRhdGEudG90YWxQcmljZSxcbiAgICAgICAgY3VycmVuY3k6ICdldXInXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMub3JkZXJTZXJ2aWNlLnNhdmVPcmRlcih0aGlzLk9yZGVyKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ2ZpbmlzaCd9KTtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdTYXZpbmcgb3JkZXInLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG5cbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMgPSBbXTtcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2FkZHJlc3MgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kYXRlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLk9yZGVyLnRpbWUgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RhdGUgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSAnJztcbiAgICAgICAgICB0aGlzLmFkZHJlc3MgPSAnJztcbiAgICAgICAgICB0aGlzLnN1Ym1pdE9yZGVyID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyRW5kJ30pO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMub3JkZXJTZXJ2aWNlLm1ha2VFdmVudCh7c3RhdHVzOiB0cnVlfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnZXJyb3InfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yIG9yIG5vdDogJysgZXJyb3IpO1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMikge1xuICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdQZXIgZmF2b3JlLCBpbnNlcmlzY2kgdW4gbWV0b2RvIGRpIHBhZ2FtZW50byBwcmltYSBkaSBwcmVub3RhcmUgdW4gc2Vydml6aW8nfX0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnSWwgc2Vydml6aW8gcmljaGllc3RvIG5vbiDDqCBhbmNvcmEgZGlzcG9uaWJpbGUgaW4gcXVlc3RhIHpvbmEuIFBlciBmYXZvcmUgY29udGF0dGFjaSBuZWxsYSBzZXppb25lIGFzc2lzdGVuemEgZGkgU3RhcmJvb2sgcGVyIHJpY2hpZWRlcmUgaWwgc3VwcG9ydG8gbmVsbGEgem9uYSBkZXNpZGVyYXRhLid9fSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vICBlbHNlIHtcbiAgICAgICAgICAvLyAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBcIkMnw6ggc3RhdG8gdW4gZXJyb3JlIHJpZ3VhcmRvIGFsbGEgcmljaGllc3RhIGRlbCBvcmRpbmUsIHJpY2FyaWNhIGxhIHBhZ2luYSBlIHJpcHJvdmEgZGkgbnVvdm8uXCJ9fSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dpbid9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLml0ID0ge1xuICAgICAgZmlyc3REYXlPZldlZWs6IDEsXG4gICAgICBkYXlOYW1lczogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgZGF5TmFtZXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgIGRheU5hbWVzTWluOiBbJ0RvJywgJ0x1JywgJ01hJywgJ01lJywgJ0dpJywgJ1ZlJywgJ1NhJ10sXG4gICAgICBtb250aE5hbWVzOiBbJ0dlbm5haW8nLCAnRmViYnJhaW8nLCAnTWFyem8nLCAnQXByaWxlJywgJ01hZ2dpbycsICdHaXVnbm8nLFxuICAgICAgICAnTHVnbGlvJywgJ0Fnb3N0bycsICdTZXR0ZW1icmUnLCAnT3R0b2JyZScsICdOb3ZlbWJyZScsICdEaWNlbWJyZSddLFxuICAgICAgbW9udGhOYW1lc1Nob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ11cbiAgICB9O1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBvcHVwc1NlcnZpY2UuZ2V0UG9wdXBSZXNwb25zZSQuc3Vic2NyaWJlKGFjdGlvbiA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVPcmRlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aCA+IDQ4MCkge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gNDUwICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IHRydWU7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aCA+IDQ4MCkge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gNDUwICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IHRydWU7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3REYXRlKCkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgZGF0ZSd9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaG9tZS9ob21lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgU3dpcGVyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sYW5kaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExhbmRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2FyZFN0eWxlcyA9IHsxOiAnMC45NScsIDI6ICcwLjk1JywgMzogJzAuOSd9O1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcbiAgcHVibGljIHNlcnZpY2VzID0gW107XG4gIHB1YmxpYyBzcGluZXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBjbGVhclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgc3dpcGVyOiBhbnk7XG4gIHB1YmxpYyB0ZXN0UGFnZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIFRPIFVTRSBGT1IgQS9CIFRFU1RJTkdcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgIHRoaXMudGVzdFBhZ2UgPSBwYXJhbXNbJ3BhZ2UnXVxuICAgICAgLy8gY29uc29sZS5sb2coJ1BhcmFtZXRlcnM6ICcgKyBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVzdFBhZ2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdVbmEgY2l0dMOgIHNtYXJ0IGhhIGJpc29nbm8gZGkgc2Vydml6aSBzbWFydCcpO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzKClcbiAgICAgICAgLnRoZW4oKHNlcnZpY2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzLnJlc3VsdDtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBmZWF0dXJlZCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuICBjYXJkSG92ZXIoaWQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ29uJykge1xuICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcxJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlkID09PSAzKSB7XG4gICAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMC45JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMC45NSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5zcGluZXJWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VhcmNoKGV2ZW50LnF1ZXJ5KVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NlYXJjaCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzLnJlc3VsdDtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc3BpbmVyVmlldyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgICB9KVxuICB9XG5cbiAgc2VsZWN0UmVzdWx0KHNlcnZpY2VzT2JqKSB7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZW5kU2VydmljZXMoc2VydmljZXNPYmopO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VydmljZXMnLCBzZXJ2aWNlc09iai50aXRsZV0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICB9XG5cbiAgY2FsbFRvQWN0aW9uUmVnaXN0ZXJDb21wYW55KCkge1xuICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlciBjb21wYW55Jyk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J0xhbmRpbmcgcGFnZSBhY3Rpb25zJywgYWN0aW9uOiAndGVzdCBidXR0b25zJywgbGFiZWw6ICdyZWdpc3RlciBjb21wYW55J30pO1xuICB9XG5cbiAgY2FsbFRvQWN0aW9uU2hhcmVUb0Vhcm4oKSB7XG4gICAgY29uc29sZS5sb2coJ3NoYXJlIHRvIGVhcm4nKTtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonTGFuZGluZyBwYWdlIGFjdGlvbnMnLCBhY3Rpb246ICd0ZXN0IGJ1dHRvbnMnLCBsYWJlbDogJ3NoYXJlIHRvIGVhcm4nfSk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdleHBpcnknXG59KVxuZXhwb3J0IGNsYXNzIEV4cGlyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL2V4cGlyeS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwaG9uZSdcbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHBob25lID0gJyc7XG4gICAgICBsZXQgbnVtSW5kZXggPSAwO1xuICAgICAgbGV0IHBob25lTnVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIHBob25lTnVtcy5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bUluZGV4ID09PSAyIHx8IG51bUluZGV4ID09PSA0IHx8IG51bUluZGV4ID09PSA2KSB7XG4gICAgICAgICAgcGhvbmUgKz0gbnVtICsgJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBob25lICs9IG51bTtcbiAgICAgICAgfVxuICAgICAgICBudW1JbmRleCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGhvbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL3Bob25lLnBpcGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcG9wdXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcHVwcy5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhZGRDYXJkUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignbG9naW5Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWdpc3RyYXRpb25Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWNvdmVyeVBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbmlzaFBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtRmluaXNoUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybUFjdGlvblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NoYWRvd1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIGFjdGl2ZVBvcHVwID0gJyc7XG4gIHB1YmxpYyBhZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBsb2dpblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyByZWNvdmVyeVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBjb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBzaGFkb3dTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBlbWFpbFBhdHRlcm47XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgIGFkZENhcmREYXRhID0ge1xuICAgIG9iamVjdDogJ2NhcmQnLFxuICAgIGV4cF9kYXRlOiAnJyxcbiAgICBleHBfbW9udGg6IG51bGwsXG4gICAgZXhwX3llYXI6IG51bGwsXG4gICAgbnVtYmVyOiBudWxsLFxuICAgIGN2YzogJycsXG4gICAgbmFtZTogJycsICAgICAgICAgICAvLyBOb21lIGludGVzdGF0YXJpb1xuICAgIGFkZHJlc3NfbGluZTE6ICcnLCAgLy8gVmlhXG4gICAgYWRkcmVzc19saW5lMjogJycsICAvLyBOclxuICAgIGFkZHJlc3NfY2l0eTogJycsICAgLy8gQ2l0dMOgXG4gICAgYWRkcmVzc196aXA6ICcnLCAgICAvLyBDQVBcbiAgICBhZGRyZXNzX3N0YXRlOiAnJywgIC8vIFByb3ZpbmNpYVxuICAgIGFkZHJlc3NfY291bnRyeTogJycgLy8gUGFlc2VcbiAgfTtcbiAgcHVibGljIGFjdGlvbkNhcmRUeXBlID0gJ2FkZCc7XG4gIHB1YmxpYyBlZGl0ZWRDYXJkSWQ6IG51bWJlcjtcbiAgcHVibGljIGFkZENhcmRFcnJvciA9IHtcbiAgICBleHBfZGF0ZTogZmFsc2UsXG4gICAgbnVtYmVyOiBmYWxzZSxcbiAgICBjdmM6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBsb2dpbkRhdGEgPSB7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICBvcmRlckRhdGE6IHt9XG4gIH07XG4gIHB1YmxpYyBsb2dpbkVycm9yID0ge1xuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBwYXNzd29yZDogZmFsc2VcbiAgfTtcbiAgcHVibGljIHJlZ2lzdHJhdGlvbkRhdGEgPSB7XG4gICAgbmFtZTogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICB9O1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uRXJyb3IgPSB7XG4gICAgbmFtZTogZmFsc2UsXG4gICAgcGhvbmU6IGZhbHNlLFxuICAgIGVtYWlsOiBmYWxzZSxcbiAgICBwYXNzd29yZEZpcnN0OiBmYWxzZSxcbiAgICBwYXNzd29yZDogZmFsc2VcbiAgfTtcbiAgcHVibGljIHJlY292ZXJ5RGF0YSA9IHtcbiAgICBlbWFpbDogJydcbiAgfTtcbiAgcHVibGljIHJlY292ZXJ5RXJyb3IgPSB7XG4gICAgZW1haWw6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBjb25maXJtUG9wdXBEYXRhID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBkYXRhOiBbXSxcbiAgICBpbmZvcm1hdGlvbjoge30sXG4gICAgYnV0dG9uOiAnJyxcbiAgICB0eXBlOiAnJ1xuICB9O1xuICBwdWJsaWMgY29uZmlybUZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgdHlwZTogJ2NlbnRlcidcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEgPSB7XG4gICAgb3JkZXJJZDogJycsXG4gICAgdHlwZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHRleHQyOiAnJyxcbiAgICBhY3Rpb25zOiBbXSxcbiAgICBidXR0b25zOiBbXSxcbiAgICBwcmljZTogbnVsbFxuICB9O1xuICBwdWJsaWMgZmluaXNoUG9wdXBEYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiBbXVxuICB9O1xuXG4gIHB1YmxpYyBpc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBmb3JtRXJyb3I6IGJvb2xlYW58e3RpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZ30gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljczogQXV0aFNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBvcHVwU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbWFpbFBhdHRlcm4gPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgfVxuICBnZXRQb3B1cCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdsb2dpbicpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uJykge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVjb3ZlcnknKSB7XG4gICAgICB0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ2hlY2sgeW91ciBpbmJveCc7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW1xuICAgICAgICAgICdXZSBzZW50IGEgcGFzc3dvcmQgcmVzZXQgbGluayB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFBsZWFzZSBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gY3JlYXRlIGUgbmV3IHBhc3N3b3JkLicsXG4gICAgICAgICAgJ1RoZSBsaW5rIHdpbGwgb25seSBiZSBhY3RpdmUgZm9yIDEgaG91ci4gQWZ0ZXIgdGhhdCB5b3Ugd2lsbCBuZWVkIHRvIHJlcXVlc3QgYSBuZXcgb25lLidcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtRmluaXNoJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1FbmQnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZCcpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtQWN0aW9uJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1PcmRlckVuZCcpIHtcbiAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoaXNSZW9wZW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmRQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgIGlmICghaXNSZW9wZW4pIHtcbiAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpICYmIHBhc3N3b3JkLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdMb2dpbicsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZGF0YTtcbiAgICAgICAgICBpZiAodGhpcy5sb2dpbkRhdGEudHlwZSA9PT0gJ2Zyb21PcmRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YTogdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSEnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOb24gcml1c2NpYW1vIGEgdHJvdmFyZSB1biBhY2NvdW50IGNvbiBxdWVsbOKAmWluZGlyaXp6byBlLW1haWwnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGEgdHVhIHBhc3N3b3JkIG5vbiDDqCBjb3JyZXR0YSdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZhY2Vib29rTG9naW4oKSB7XG4gICAgd2luZG93Lm9wZW4oXG4gICAgICAgICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdjIuOC9kaWFsb2cvb2F1dGg/Y2xpZW50X2lkPTExMDg0NjEzMjU5MDcyNzcmcmVzcG9uc2VfdHlwZT10b2tlbiZzY29wZT1lbWFpbCxwdWJsaWNfcHJvZmlsZSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2ZhY2Vib29rJyxcbiAgICAgICAgJ19ibGFuaycsXG4gICAgICAgICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycpO1xuICB9XG5cbiAgY2hlY2tFbWFpbCh0eXBlOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgdGhpcy5sb2dpbkVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNvdmVyeSc6XG4gICAgICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgdGhpcy5sb2dpbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjb3ZlcnknOlxuICAgICAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tEYXRlKHR5cGUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGUgPT09ICduZXdDYXJkJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gNSkge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGxldCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmIChwYXJ0c1swXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrTm9uRW1wdHkodHlwZSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2xvZ2luJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvbk5hbWUnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uUGhvbmUnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5waG9uZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5waG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uUGFzc3dvcmQnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZE51bWJlcicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhZGRDYXJkQ3Z2Jykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuY3ZjID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5jdmMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgcGFzc3dvcmRDb25maXJtOiBzdHJpbmcpIHtcbiAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjaGVja0V4cGlyeSh2YWx1ZSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gKDEgKyBkYXRlLmdldE1vbnRoKCkpLnRvU3RyaW5nKCk7XG4gICAgaWYgKChkYXRlLmdldE1vbnRoKCkgKyAxKSA8IDEwKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGxldCB5ZWFyRWxlbXMgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgbGV0IHllYXIgPSBwYXJzZUludCh5ZWFyRWxlbXNbMl0udG9TdHJpbmcoKSArIHllYXJFbGVtc1szXS50b1N0cmluZygpKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRlRWxlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgcGFydHMgPSByZXN1bHQuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChwYXJ0c1swXSAhPT0gcmVzdWx0KSB7XG4gICAgICAgIGlmIChwYXJzZUludChwYXJ0c1sxXSkgPiB5ZWFyKSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQocGFydHNbMF0pID49IHBhcnNlSW50KG1vbnRoKSAmJiBwYXJzZUludChwYXJ0c1sxXSkgPT09IHllYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2hlY2tDYXJkTnVtYmVyKGNhcmROdW1iZXIpIHtcbiAgICAvLyBpZiAoY2FyZE51bWJlciAhPT0gbnVsbCkge1xuICAgIC8vICAgaWYgKHRoaXMucGF5bWVudFNlcnZpY2UuY2FyZE51bWJlclZhbGlkYXRlKGNhcmROdW1iZXIpKSB7XG4gICAgLy8gICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IGZhbHNlO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICByZWdpc3RyYXRpb24obmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZENvbmZpcm06IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSAmJiBwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtICYmIHBhc3N3b3JkLmxlbmd0aCA+IDAgJiYgbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDkpIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLnNpZ251cChuYW1lLCBwaG9uZSwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1JlZ2lzdHJhdGlvbicsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZGF0YTtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShkYXRhKTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlL3BheW1lbnQnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc3dpdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSW5kaXJpenpvIGUtbWFpbCBnacOgIGluIHVzby4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBIYWkgaW5kaWNhdG8gZGkgZXNzZXJlIHVuIG51b3ZvIGNsaWVudGUgbWEgw6ggZ2nDoFxuICAgICAgICAgICAgICAgIHByZXNlbnRlIHVuIGFjY291bnQgY29sbGVnYXRvIGFsbCdpbmRpcml6em8gZS1tYWlsOiBtYWlsQGdtYWlsLmNvbWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQYXJhbWV0cmkgbWFuY2FudGknLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBJbnNlcmlzY2kgdHV0dGkgaSBwYXJhbWV0cmkgcGVyIHByb2NlZGVyZSBjb24gbGEgcmVnaXN0cmF6aW9uZWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcmUnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBDJ8OoIHN0YXRvIHVuIGVycm9yZSBzY29ub3NjaXV0bywgcGVyIGZhdm9yZSByaXByb3ZhIHBpw7kgdGFyZGlgXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWNvdmVyeShlbWFpbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5yZWNvdmVyeShlbWFpbClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1JlY292ZXJ5IG9mIHBhc3N3b3JkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdmaW5pc2gnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBwcm9ibGVtYSEnLFxuICAgICAgICAgICAgbWVzc2FnZTogYENpIGRpc3BpYWNlLiBJbXBvc3NpYmlsZSBpZGVudGlmaWNhcmUgbCdhY2NvdW50IGNvbiBsZSBpbmZvcm1hemlvbmkgZm9ybml0ZS5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbmZpcm1PcmRlcihpZCkge1xuICAgIC8vIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ0FDQ0VQVCcpXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb25mZXJtYXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdBZGVzc28gbm9uIHJlc3RhIGFsdHJvIGNoZSBvZmZyaXJlIGlsIHN1byBzZXJ2aXppbyBhbCBjbGllbnRlLiBQZXIgcXVhbHNpYXNpIGNvbW11bmljYXppb25lIHB1w7IgdXNhcmUgaSBkYXRpIGRlbCBjb250YXR0byBhZ2dpdW50aSBkYWwgY2xpZW50ZS4nO1xuICAgIC8vICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWFFbmQnO1xuICAgIC8vICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1FbmQnKTtcbiAgICAvLyAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm1PcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAvLyAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnT3JkZXIgY29uZmlybWF0aW9uIGVycm9yJyxcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIG9yZGVyIGNvbmZpcm1hdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgLy8gICAgICAgfTtcbiAgICAvLyAgICAgfSk7XG4gIH1cblxuICBjYW5jZWxPcmRlcihpZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ0NBTkNFTCcpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogQ2FuY2VsJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdPcmRpbmUgYW5udWxsYXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdRdWVzdG8gb3JkaW5lIMOoIHN0YXRvIGFubnVsbGF0bywgcHVvaSByaWF0dGl2YXJsbyBpbiB1biBzZWNvbmRvIG1vbWVudG8uJztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjYW5jZWxPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsbGF0aW9uIGVycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjYW5jZWxpbmcgeW91ciBvcmRlci4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICByZWFjdGl2YXRlT3JkZXIoaWQpIHtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdSRUFDVElWQVRFJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBSZWFjdGl2YXRlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdPcmRpbmUgcmlhdHRpdmF0byc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgPSAnUXVlc3RvIG9yZGluZSDDqCBzdGF0byByaWF0dGl2YXRvLCB2ZXJyYWkgbm90aWZpY2F0byBxdWFuZG8gdW4gcHJvZmVzc2lvbmlzdGEgY29uZmVybWVyYSBxdWVzdG8gb3JkaW5lLic7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAncmVhY3RpdmF0ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdSZWFjdGl2YXRpb24gb3JkZXIgZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogYER1cmluZyB0aGUgcmVhY3RpdmF0aW9uIG9mIHlvdXIgb3JkZXIgaXMgdGhlIG9yZGVyIHRoZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBjb25maXJtTmV3T3JkZXIoKSB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtJ30pO1xuICB9XG5cbiAgYWRkTmV3Q2FyZCgpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5udW1iZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IGV4cF9wYXJ0cyA9IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChleHBfcGFydHNbMF0gIT09IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfbW9udGggPSBleHBfcGFydHNbMF07XG4gICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuY3ZjLmxlbmd0aCA8IDMpIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnc3RhcnROZXdDYXJkJ30pO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZE5ld0NhcmQodGhpcy5hZGRDYXJkRGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0FkZCBuZXcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZCcsIGRhdGE6IHJlc3BvbnNlfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZEVycm9yJ30pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZWRpdENhcmQoKSB7XG4gICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgbGV0IGVkaXRDYXJkRGF0YSA9IHtcbiAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgIGV4cF95ZWFyOiBudWxsLFxuICAgICAgbmFtZTogJycsXG4gICAgICBhZGRyZXNzX2xpbmUxOiAnJyxcbiAgICAgIGFkZHJlc3NfbGluZTI6ICcnLFxuICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgIGFkZHJlc3NfemlwOiAnJyxcbiAgICAgIGFkZHJlc3Nfc3RhdGU6ICcnLFxuICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgZXhwX3BhcnRzID0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgaWYgKGV4cF9wYXJ0c1swXSAhPT0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSkge1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX21vbnRoID0gZXhwX3BhcnRzWzBdO1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZWRpdENhcmREYXRhLm5hbWUgPSB0aGlzLmFkZENhcmREYXRhLm5hbWU7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19saW5lMSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY2l0eSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5O1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfemlwID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3ppcDtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY291bnRyeSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5O1xuICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdzdGFydE5ld0NhcmQnfSk7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5wYXltZW50U2VydmljZS5lZGl0Q2FyZCh0aGlzLmVkaXRlZENhcmRJZCwgZWRpdENhcmREYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRWRpdCBjYXJkIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NhcmRFZGl0ZWQnLCBkYXRhOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmRFcnJvcid9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFByaWNlKG9yZGVySWQpIHtcbiAgICAvLyBsZXQgb3JkZXJQcmljZUV1ciA9IHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgKyAoKHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgLyAxMDApICogNS41KTtcbiAgICAvLyBsZXQgb3JkZXJQcmljZSA9IHBhcnNlRmxvYXQob3JkZXJQcmljZUV1ci50b0ZpeGVkKDIpKSAqIDEwMDtcblxuICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihvcmRlcklkLCAnQ0xPU0UnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IENsb3NlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbXBsZXRhdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICcnO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2FkZFByaWNlRW5kJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRQcmljZUVuZCc7XG4gICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnYWRkUHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZCwgaXNNb2RpZmllZDogcmVzcG9uc2Uubk1vZGlmaWVkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuICBlZGl0UHJpY2Uob3JkZXJJZCkge1xuICAgIGxldCBvcmRlclByaWNlRXVyID0gcGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSArICgocGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSAvIDEwMCkgKiA1LjUpO1xuICAgIGxldCBvcmRlclByaWNlID0gcGFyc2VGbG9hdChvcmRlclByaWNlRXVyLnRvRml4ZWQoMikpICogMTAwO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5hZGRQcmljZShvcmRlcklkLCAnQUNUSVZFX1BBWU1FTlQnLCBvcmRlclByaWNlKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IEFjdGl2ZSBwYXltZW50JywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnZWRpdFByaWNlJywgZGF0YToge29yZGVySWQ6IG9yZGVySWQsIG9yZGVyUHJpY2U6IG9yZGVyUHJpY2UsIGlzTW9kaWZpZWQ6IHJlc3BvbnNlLm5Nb2RpZmllZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgY29udGludWVPcmRlcihvcmRlcklkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKG9yZGVySWQsICdQQVknKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IFBheScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnUGFnYW1lbnRvIGVmZmV0dHVhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1RpIGFiYmlhbW8gaW52aWF0byB1bmEgbWFpbCBlIHVuIHNtcyBjb24gbGEgY29uZmVybWEgZGVsIHBhZ2FtZW50byBlIGxhIHJpY2V2dXRhIGZpc2NhbGUnO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ2xlZnQnO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2xvZ291dCcsIGRhdGE6IHt9fSk7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gIH1cblxuICBnZXRFcnJvclBvcHVwKHRpdGxlLCB0ZXh0KSB7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtdO1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dC5wdXNoKHRleHQpO1xuICAgIHRoaXMuZ2V0UG9wdXAoJ2Vycm9yJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBTZXJ2aWNlLmdldEFjdGl2ZVBvcHVwJC5zdWJzY3JpYmUocG9wdXAgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBvcHVwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5lbWFpbCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ2luRnJvbU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLm9yZGVyRGF0YSA9IHBvcHVwLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS50eXBlID0gJ2Zyb21PcmRlcic7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dpbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2FyZFR5cGUgPSAnYWRkJztcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkQ2FyZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNhcmRUeXBlID0gJ2VkaXQnO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRDYXJkSWQgPSBwb3B1cC5kYXRhLmlkO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSA9IHBvcHVwLmRhdGEuZXhwX21vbnRoICsgJy8nICsgcG9wdXAuZGF0YS5leHBfeWVhcjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEubmFtZSA9IHBvcHVwLmRhdGEubmFtZTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMSA9IHBvcHVwLmRhdGEuYWRkcmVzc19saW5lMTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMiA9IHBvcHVwLmRhdGEuYWRkcmVzc19saW5lMjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5ID0gcG9wdXAuZGF0YS5hZGRyZXNzX2NpdHk7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfemlwID0gcG9wdXAuZGF0YS5hZGRyZXNzX3ppcDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZSA9IHBvcHVwLmRhdGEuYWRkcmVzc19zdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5ID0gcG9wdXAuZGF0YS5hZGRyZXNzX2NvdW50cnk7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLm51bWJlciA9IHBvcHVwLmRhdGEubnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5jdmMgPSBwb3B1cC5kYXRhLmN2YztcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkQ2FyZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ3JlZ2lzdHJhdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0NvbmZlcm1hIHNlcnZpemlvIGluIGNvcnNv4oCmJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0lsIHNpc3RlbWEgc3RhIGNvbnRyb2xsYW5kbyBzZSBxdWVzdG8gc2Vydml6aW8gw6ggc3RhdG8gYXNzZWduYXRvIGFkIHVuIGFsdHJvIHByb2Zlc3Npb25pc3RhIG8gYW51bGxhdG8gZGFsIGNsaWVudGUgc3Rlc3NvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIocG9wdXAuZGF0YS5vcmRlcklkLCAnQUNDRVBUJylcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbmZlcm1hdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdBZGVzc28gbm9uIHJlc3RhIGFsdHJvIGNoZSBvZmZyaXJlIGlsIHN1byBzZXJ2aXppbyBhbCBjbGllbnRlLiBQZXIgcXVhbHNpYXNpIGNvbW11bmljYXppb25lIHB1w7IgdXNhcmUgaSBkYXRpIGRlbCBjb250YXR0byBhZ2dpdW50aSBkYWwgY2xpZW50ZS4nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hRW5kJztcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRW5kJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogcG9wdXAuZGF0YS5vcmRlcklkfX0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPcmRlciBjb25maXJtYXRpb24gZXJyb3InLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgb3JkZXIgY29uZmlybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLmBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhbmNlbE9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdBbm51bGxhIG9yZGluZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIGFubnVsbGF0byBxdWVzdG8gb3JkaW5lIHNvbG8gdHUgc2FyYWkgaW4gZ3JhZG8gZGkgdmVkZXJsby4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdBbm51bGxhIG9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZWFjdGl2YXRlT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1JpYXR0aXZhIG9yZGluZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIHJpYXR0aXZhdG8gcXVlc3RvIG9yZGluZSBzYXJhIHZpc2liaWxlIGEgdHV0dGkgaSBwcm9mZXNzaW9uaXN0aS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdSaWF0dGl2YSBvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU5ld09yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdEZXR0YWdsaSBkZWxs4oCZb3JkaW5lJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhID0gW3twcm9kdWN0TmFtZTogcG9wdXAuZGF0YS5vcmRlckRhdGEuc2VydmljZSwgaXRlbU5hbWU6ICcnLCBwcmljZTogJycsIHR5cGU6ICdzZXJ2aWNlJ31dO1xuICAgICAgICAgICAgcG9wdXAuZGF0YS5vcmRlckRhdGEuc2VydmljZXMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICBpZihwcm9kdWN0LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSwgaXRlbU5hbWU6IHByb2R1Y3Qub3B0aW9uLm5hbWUsIHByaWNlOiAnJywgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdC5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSwgaXRlbU5hbWU6IHByb2R1Y3Qub3B0aW9uLm5hbWUsIHByaWNlOiAnJywgc3ltYm9sOiBwcm9kdWN0Lm9wdGlvbi5zeW1ib2wsIHR5cGU6ICdpdGVtJ30pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiBwcm9kdWN0Lm5hbWUsIGl0ZW1OYW1lOiBwcm9kdWN0Lm9wdGlvbi5uYW1lLCBwcmljZTogcHJvZHVjdC5vcHRpb24ucHJpY2UsIHR5cGU6ICdpdGVtJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiAnVG90YWxlJywgaXRlbU5hbWU6ICcnLCBwcmljZTogcG9wdXAuZGF0YS5vcmRlckRhdGEudG90YWxQcmljZSwgdHlwZTogJ3RvdGFsJ30pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uID0gcG9wdXAuZGF0YS5pbmZvcm1hdGlvbjtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ25ld09yZGVyJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1OZXdPcmRlckVuZCc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnQWNxdWlzdG8gZWZmZXR1YXRvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0zigJlvcmRpbmUgZSBzdGF0byBwcmVub3RhdG8gY29uIHN1Y2Nlc3NvLiBVbiBwcm9mZXNzaW9uaXN0YSBzaSBwcmVzZW50ZXLDoCBuZWxsYSBkYXRhIGUgb3JhIHN0YWJpbGl0YSBkYSB2b2kuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ25ld09yZGVyRW5kJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyRW5kJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FkZFByaWNlJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnR5cGUgPSAnYWRkUHJpY2UnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlID0gJ0NvbXBsZXRhbWVudG8gc2Vydml6aW8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIGNvbXBsZXRhdG8gaWwgc2Vydml6aW8gdmVycmFpIGluY3JlbWVudGF0byBkZWwgaW1wb3J0byBwcmVzdGFiaWxpdG8gdHJhIDcgZ2lvcm5pIGxhdm9yYXRpdmkuJztcbiAgICAgICAgICAgIC8vIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgLy8gICB0eXBlOiAnUGF5bWVudF9pbnB1dF9hZGQnLFxuICAgICAgICAgICAgLy8gICBzb3VyY2U6ICdldXJvJyxcbiAgICAgICAgICAgIC8vICAgbGFiZWw6ICdJbnNlcmlzY2kgbOKAmWltcG9ydG8nLFxuICAgICAgICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0FsbOKAmWltcG9ydG8gdmVycmEgYWdnaXVudG8gNS41JSBkaSB0YXNzYSBTdGFyYm9vay4nXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnYWRkUHJpY2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ29tcGxldGEgaWwgc2Vydml6aW8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1BY3Rpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZWRpdFByaWNlJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlID0gJ01vZGlmaWNhJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBtb2RpZmljYXRvIGzigJlpbXBvcnRvIGlsIGNsaWVudGUgdmVycmEgbm90aWZpY2F0byBkaSBxdWVzdGEgbW9kaWZpY2EgZSBwb3RyYSBwcm9jZWRlcmUgY29uIGlsIHBhZ2FtZW50by4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdQYXltZW50X2lucHV0X2VkaXQnLFxuICAgICAgICAgICAgICBzb3VyY2U6ICdldXJvJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdJbnNlcmlzY2kgbOKAmWltcG9ydG8nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbOKAmWltcG9ydG8gdmVycmEgYWdnaXVudG8gNS41JSBkaSB0YXNzYSBTdGFyYm9vay4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnZWRpdFByaWNlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0luc2VyaXNjaSBpbXBvcnRvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlID0gTWF0aC5yb3VuZCgocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSAvIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1BY3Rpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29udGludWVPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSA9ICdQYWdhbWVudG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIGVmZmV0dHVhdG8gaWwgcGFnYW1lbnRvIHJpY2V2ZXJhaSB1bmEgbWFpbCBjb24gbGEgZmF0dHVyYSBkZWwgb3JkaW5lLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgPSAnQWzigJlpbXBvcnRvIHZlcnJhIGFnZ2l1bnRvIDUuNSUgZGkgdGFzc2UgU3RhcmJvb2suJztcbiAgICAgICAgICAgIGxldCBwcmljZSA9IE1hdGgucm91bmQoKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkgLyAxMDApO1xuICAgICAgICAgICAgbGV0IHRheCA9IChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC0gTWF0aC5yb3VuZChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpKSAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnUGF5bWVudF9pbmZvcm1hdGlvbicsXG4gICAgICAgICAgICAgIGluZm9ybWF0aW9uOiBwcmljZSArICfigqwgKyAnICsgdGF4ICsgJ+KCrCA9ICcgKyBwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMTAwICsgJ+KCrCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjb250aW51ZU9yZGVyJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1Byb2NlZGkgY29uIGlsIHBhZ2FtZW50bydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NpY3VybyBkaSB2b2xlciB1c2NpcmU/JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24gPSAnJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2xvZ291dCc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2xvZ291dCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKHBvcHVwLmRhdGEudGl0bGUsIHBvcHVwLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2Vydmljcy5hdXRoSW5pdCgpO1xuICB9XG5cbiAgY2xlYXJEYXRhKCkge1xuICAgIHRoaXMuYWRkQ2FyZERhdGEgPSB7XG4gICAgICAgIG9iamVjdDogJ2NhcmQnLFxuICAgICAgICBleHBfZGF0ZTogJycsXG4gICAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgICAgZXhwX3llYXI6IG51bGwsXG4gICAgICAgIG51bWJlcjogbnVsbCxcbiAgICAgICAgY3ZjOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFkZHJlc3NfbGluZTE6ICcnLFxuICAgICAgICBhZGRyZXNzX2xpbmUyOiAnJyxcbiAgICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgICAgYWRkcmVzc196aXA6ICcnLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiAnJyxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgICAgfTtcbiAgICAvLyB0aGlzLmxvZ2luRGF0YSA9IHtcbiAgICAvLyAgICAgZW1haWw6ICcnLFxuICAgIC8vICAgICBwYXNzd29yZDogJycsXG4gICAgLy8gICAgIHR5cGU6ICcnLFxuICAgIC8vICAgICBvcmRlckRhdGE6IHt9XG4gICAgLy8gICB9O1xuICAgIHRoaXMucmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgICAgIH07XG4gICAgdGhpcy5yZWNvdmVyeURhdGEgPSB7XG4gICAgICAgIGVtYWlsOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEgPSB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgaW5mb3JtYXRpb246IHt9LFxuICAgICAgICBidXR0b246ICcnLFxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6ICdjZW50ZXInXG4gICAgICB9O1xuICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YSA9IHtcbiAgICAgICAgb3JkZXJJZDogJycsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0MjogJycsXG4gICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgcHJpY2U6IG51bGxcbiAgICAgIH07XG4gICAgdGhpcy5sb2dpbkVycm9yID0ge1xuICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xuLy8gYHVuZyBidWlsZCAtLWVudj1wcm9kYCB0aGVuIGBlbnZpcm9ubWVudC5wcm9kLnRzYCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLWNsaS5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5cbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gICAgJ3NlcnZpY2VzLzppZCcsXG4gICAgJ3Byb2ZpbGUvcHJpdmFjeScsXG4gICAgJ3Byb2ZpbGUvaGVscCcsXG4gICAgJ3Byb2ZpbGUvY29uZGl0aW9ucycsXG4gICAgJ29yZGVycycsXG4gICAgJ3Byb2ZpbGUvOnBhZ2UnLFxuICAgICdmYWNlYm9vaydcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLWZpeGVkLXRvcCBiZy1pbnZlcnNlXFxcIiBbbmdDbGFzc109XFxcInsnaXMtc2VhcmNoJzogaXNGaW5kRmllbGR9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayB0b3AtbWVudVxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIHJvdXRlckxpbms9XFxcIlxcXCIgKGNsaWNrKT1cXFwidXBkYXRlVGFiTWVudSgpXFxcIj5TdGFyYm9vazwvYT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWJsb2NrXFxcIiAqbmdJZj1cXFwiaXNGaW5kRmllbGRcXFwiPlxcbiAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwiZmluZFZhbHVlXFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJyZXN1bHRzXFxcIiBmaWVsZD1cXFwidGl0bGVcXFwiIHNjcm9sbEhlaWdodD1cXFwiMTcwcHhcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcInNlYXJjaCgkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RSZXN1bHQoZmluZFZhbHVlKVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNlcmNhXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgPHRlbXBsYXRlIGxldC1yZXM+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChyZXMpXFxcIj57eyByZXMudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiAqbmdJZj1cXFwic3BpbmVyVmlld1xcXCI+XFxuICAgICAgICA8c3ZnIHdpZHRoPScxM3B4JyBoZWlnaHQ9JzEzcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgIDwvY2lyY2xlPlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2xvc2UtY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIXNwaW5lclZpZXcgJiYgY2xlYXJWaWV3XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSByb3VuZGVkIHRoaWNrXFxcIiAoY2xpY2spPVxcXCJjbGVhclNlYXJjaEZvcm0oKVxcXCI+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInVpLWF1dG9jb21wbGV0ZS1wYW5lbCBlbXB0eVxcXCIgKm5nSWY9XFxcInJlc3VsdHMubGVuZ3RoID09PSAwICYmIGZpbmRWYWx1ZS5sZW5ndGggPiAwICYmIGlzU2VhcmNoZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0XFxcIj5OZXNzdW4gcmlzdWx0YXRvPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWdsaW5lXFxcIiAqbmdJZj1cXFwiIWlzRmluZEZpZWxkXFxcIj57e3RhZ2xpbmV9fTwvZGl2PlxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGFyaWEtbGFiZWw9XFxcIk1lbnVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+PC9idXR0b24+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoICE9PSBmYWxzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbGxhcHNlJzpuYXZiYXJTdGF0ZT09PWZhbHNlfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgaG9tZVxcXCIgcm91dGVyTGluaz1cXFwiXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XFxcIntleGFjdDp0cnVlfVxcXCIgKGNsaWNrKT1cXFwidXBkYXRlVGFiTWVudSh0cnVlKVxcXCI+SG9tZTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIG9yZGVyc1xcXCIgcm91dGVyTGluaz1cXFwiL29yZGVyc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPk9yZGluaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIHJvdXRlckxpbms9XFxcIi9wcm9maWxlL3NldHRpbmdzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+e3thdXRoLnByb2ZpbGUuZnVsbG5hbWV9fTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGZsb2F0LXhzLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYXV0aCA9PT0gZmFsc2UgJiYgYnJvd3NlclxcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbGxhcHNlJzpuYXZiYXJTdGF0ZT09PWZhbHNlfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgcHJvZmlsZVxcXCIgKGNsaWNrKT1cXFwiZ2V0TG9naW5Qb3B1cCgpXFxcIj5BY2NlZGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRSZWdpc3RyYXRpb25Qb3B1cCgpXFxcIj5SZWdpc3RyYXRpPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L25hdj5cXG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuPGFwcC1wb3B1cHM+PC9hcHAtcG9wdXBzPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWRhcmsgbmF2YmFyLXRhYnNcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIGhvbWUtdGFiLWJhclxcXCJcXG4gICAgICAgKHN3aXBlbGVmdCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCJcXG4gICAgICAgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtcGlsbHNcXFwiXFxuICAgICAgICBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWxlZnQucHgnOiBkZWx0YX1cXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IG5hdlNlcnZpY2VzIG9mIHNlcnZpY2VzQ2F0ZWdvcnlMaXN0XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6bmF2U2VydmljZXMuX2lkPT09YWN0aXZlU2VydmljZUNhdGVnb3J5ICYmIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgIT09IGZhbHNlfVxcXCIgKGNsaWNrKT1cXFwidGFiTmF2aWdhdGUobmF2U2VydmljZXMuX2lkKVxcXCI+PGkgY2xhc3M9XFxcImZ7e25hdlNlcnZpY2VzLmljb25fbmFtZX19XFxcIj48L2k+IHt7bmF2U2VydmljZXMudGl0bGV9fTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuPC9uYXY+LS0+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIGhvbWUtcGFnZVxcXCIgKm5nSWY9XFxcImlzU2VydmljZXNWaWV3ID09PSB0cnVlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05IGNvbC1tZC0xMCBtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1hc29ucnktY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZXMtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IHNlcnZpY2VDYXRlZ29yeSBvZiBzZXJ2aWNlc0RhdGFcXFwiIFtuZ0NsYXNzXT1cXFwieydzZXJ2aWNlcy1ibG9jay1iaWcnOiBzZXJ2aWNlQ2F0ZWdvcnkudHlwZSA9PT0gJ2NvbnRlbnQnfVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInNlcnZpY2VDYXRlZ29yeS50eXBlID09PSAnY29udGVudCdcXFwiPlxcbiAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwic2VydmljZUNhdGVnb3J5LmltYWdlXFxcIiAobG9hZCk9XFxcIm1ha2VNYXNvbnJ5KClcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPnt7IHNlcnZpY2VDYXRlZ29yeS5kZXNjcmlwdGlvbiB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic2VydmljZUNhdGVnb3J5LnR5cGUgIT09ICdjb250ZW50J1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7c2VydmljZUNhdGVnb3J5LnRpdGxlXzF9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZSBjb250ZW50IG5vc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBzZXJ2aWNlQ2F0ZWdvcnkub3B0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nSWY9XFxcIml0ZW0udHlwZSA9PT0gJ0NIRUNLQk9YJyB8fCBpdGVtLnR5cGUgPT09ICdSQURJT0JVVFRPTidcXFwiIFtuZ0NsYXNzXT1cXFwieydjaGVja2VkJzppdGVtLnNlbGVjdGVkfVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlU2VydmljZShzZXJ2aWNlQ2F0ZWdvcnkudGl0bGUsIGl0ZW0udGl0bGUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVxcXCJpdGVtLnNlbGVjdGVkPT09dHJ1ZVxcXCIgY2xhc3M9XFxcImZhIGZhLWNoZWNrLXNxdWFyZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XFxcIml0ZW0uc2VsZWN0ZWQ9PT1mYWxzZVxcXCIgY2xhc3M9XFxcImZhIGZhLXNxdWFyZS1vXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udGl0bGVfMX19XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiICpuZ0lmPVxcXCJpdGVtLnR5cGUgPT09ICdJTlBVVFRFWFQnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwic2VydmljZXNEYXRhW2l0ZW0uZm9ybUlkXS5vcHRpb25zW2l0ZW0ub3B0aW9uSWRdLmlucHV0X3ZhbHVlXFxcIiAoa2V5dXApPVxcXCJjaGFuZ2VWYWx1ZShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZClcXFwiIChjaGFuZ2UpPVxcXCJjaGFuZ2VWYWx1ZShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZClcXFwiIChmb2N1cyk9XFxcInNlbGVjdEFsbENvbnRlbnQoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPnt7c2VydmljZXNEYXRhW2l0ZW0uZm9ybUlkXS5vcHRpb25zW2l0ZW0ub3B0aW9uSWRdLnZhbHVlX3N5bWJvbH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8YXBwLW9yZGVyIFtvcmRlckRhdGFdPVxcXCJvcmRlckRhdGFcXFwiIFtvcmRlcklzRnVsbF09XFxcIm9yZGVySXNGdWxsXFxcIj48L2FwcC1vcmRlcj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+U3RhcmJvb2sgwqkgMjAxNiBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuPGFwcC1sYW5kaW5nICpuZ0lmPVxcXCJpc1NlcnZpY2VzVmlldyA9PT0gZmFsc2VcXFwiPjwvYXBwLWxhbmRpbmc+XFxuPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlcy1sb2FkZXJcXFwiPjwvYXBwLWxvYWRpbmc+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLW1kLTIgc2lkZWJhclxcXCI+XFxuICA8Zm9ybSBjbGFzcz1cXFwic2lkZWJhci1jb250YWluZXJcXFwiICNvcmRlckZvcm09XFxcIm5nRm9ybVxcXCIgKHdpbmRvdzpyZXNpemUpPVxcXCJvblJlc2l6ZSgpXFxcIj5cXG4gICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpZGViYXItYmxvY2tcXFwiPlxcbiAgICAgIDxoMj57e29yZGVyRGF0YS5zZXJ2aWNlfX08L2gyPlxcblxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyXFxcIiAqbmdJZj1cXFwiIW9yZGVySXNGdWxsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWxpc3QtZW1wdHlcXFwiPjxzdHJvbmc+SW5zZXJpc2NpPC9zdHJvbmc+IGxlIGluZm9ybWF6aW9uaSBuZWNlc3NhcmkgZGVsIGFwcHVudGFtZW50byBlIGludmlhIGxhIHJpY2hpZXN0YS48L2Rpdj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCJvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50ID4gb3JkZXJEYXRhLnRvdGFsUHJpY2VcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz48L3N0cm9uZz5QcmV6em8gbWluaW1vIGRlbCdvcmRpbmUg4oKse3sgb3JkZXJEYXRhLm9yZGVyX29wdGlvbnMubWluX2Ftb3VudCAvIDEwMCB9fTwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lciBzZWxlY3RlZC1vcmRlcnNcXFwiIFtuZ1N0eWxlXT1cXFwieydtYXgtaGVpZ2h0JzogbWF4T3JkZXJCbG9ja1NpemV9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIGNhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgPHNwYW4+e3sgb3JkZXJEYXRhLnNlcnZpY2UgfX08L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxzcGFuICAqbmdGb3I9XFxcImxldCBvcmRlclNlcnZpY2Ugb2Ygb3JkZXJEYXRhLnNlcnZpY2VzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fSB7e29yZGVyU2VydmljZS5vcHRpb24uc3ltYm9sfX08L2k+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJvcmRlclNlcnZpY2UucHJpY2VfdHlwZSAhPT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCdcXFwiPnt7IG9yZGVyU2VydmljZS5uYW1lIH19PGk+e3tvcmRlclNlcnZpY2Uub3B0aW9uLm5hbWV9fTwvaT48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LWdyb3VwIHRvdGFsXFxcIj5cXG4gICAgICAgIDxzcGFuPlRvdGFsZSA8aT7igqx7eyBvcmRlckRhdGEudG90YWxQcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImFkZC1vcmRlci1mb3JtXFxcIj5cXG4gICAgICAgIDxsYWJlbD5RdWFuZG8gdnVvaSBzdm9sZ2VyZSBxdWVzdG8gbGF2b3JvPzwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcImlzTW9iaWxlQ2FsZW5kYXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlIGRhdGVwaWNrZXItYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhci10aW1lcy1vIGNhbGVuZGFyLWJveFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxwLWNhbGVuZGFyIG5hbWU9XFxcImRhdGFPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kYXRlXFxcIiBpZD1cXFwiZGF0YU9yYU1vYmlsZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkluc2VyaXNjaSBsYSBkYXRhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgZGF0ZUZvcm1hdD1cXFwiZGQgTU0geXlcXFwiIHJlYWRvbmx5SW5wdXQ9XFxcInJlYWRvbmx5SW5wdXRcXFwiIFtsb2NhbGVdPVxcXCJpdFxcXCIgW21pbkRhdGVdPVxcXCJtaW5EYXRlXFxcIiBbbWF4RGF0ZV09XFxcIm1heERhdGVcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdERhdGUoKVxcXCI+XFxuICAgICAgICAgICAgPC9wLWNhbGVuZGFyPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBjYWxlbmRhci1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBzdWJtaXRPcmRlciAmJiAhT3JkZXIuZGF0ZX1cXFwiICpuZ0lmPVxcXCIhaXNNb2JpbGVDYWxlbmRhclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXBpY2tlci1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyLXRpbWVzLW8gY2FsZW5kYXItYm94XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHAtY2FsZW5kYXIgbmFtZT1cXFwiZGF0YU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRhdGVcXFwiIGlkPVxcXCJkYXRhT3JhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxhIGRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGltZS1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBPcmRlci50aW1lID09PSAnJyAmJiBzdWJtaXRPcmRlcn1cXFwiICpuZ0lmPVxcXCJicm93c2VyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCIgKGNsaWNrT3V0c2lkZSk9XFxcImNsb3NlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aW1lT3JhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0aW1lT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIudGltZVxcXCIgdmFsdWU9XFxcInt7T3JkZXIudGltZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiT3JhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2JpbGVBcmVhXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1waWNrZXJcXFwiICpuZ0lmPVxcXCJ0aW1lUGlja2VySXNTaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLWVsZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHRpbWUgb2YgdGltZVBpY2tlclxcXCIgKGNsaWNrKT1cXFwic2VsZWN0VGltZSh0aW1lKVxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAge3t0aW1lfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGltZS1wYXJ0XFxcIiBbbmdDbGFzc109XFxcIntpc0Vycm9yOiBPcmRlci50aW1lID09PSAnJyAmJiBzdWJtaXRPcmRlcn1cXFwiICpuZ0lmPVxcXCIhYnJvd3NlclxcXCI+XFxuICAgICAgICAgIGlzIG5vdCBzdXBwb3J0IGlmIGNsaWVudCAhPSBicm93c2VyIChjbGlja091dHNpZGUpPVxcXCJjbG9zZVRpbWVwaWNrZXIoKVxcXCJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNsb2NrLW9cXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwidGltZU9yYVNlcnZlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidGltZU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLnRpbWVcXFwiIHZhbHVlPVxcXCJ7e09yZGVyLnRpbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk9yYVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9iaWxlQXJlYVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtcGlja2VyXFxcIiAqbmdJZj1cXFwidGltZVBpY2tlcklzU2hvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1lbGVtXFxcIiAqbmdGb3I9XFxcImxldCB0aW1lIG9mIHRpbWVQaWNrZXJcXFwiIChjbGljayk9XFxcInNlbGVjdFRpbWUodGltZSlcXFwiPnt7dGltZX19PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgPGxhYmVsPkluc2VyaXNjaSBs4oCZaW5kaXJpenpvPC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6ICFpc0FkZHJlc3NGdWxsICYmIHN1Ym1pdE9yZGVyICYmIGlzQWRkcmVzc0RpcnR5fVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGVcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiPjwvc3Bhbj4gLS0+XFxuICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5kaXJpenpvXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6aXNBZGRyZXNzRnVsbCA9PT0gZmFsc2UgJiYgaXNBZGRyZXNzRGlydHkgPT09IHRydWV9XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkcmVzc1xcXCIgW25nTW9kZWxPcHRpb25zXT1cXFwie3N0YW5kYWxvbmU6IHRydWV9XFxcIiAoa2V5dXApPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiIChjaGFuZ2UpPVxcXCJtb2RpZnlBZGRyZXNzKClcXFwiPi0tPlxcbiAgICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBpZD1cXFwibHVvZ29cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdGV4dC1zbWFsbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBHaXVzZXBwZSBWZXJkaSAxMCBNaWxhbm9cXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzppc0FkZHJlc3NGdWxsID09PSBmYWxzZSAmJiBpc0FkZHJlc3NEaXJ0eSA9PT0gdHJ1ZX1cXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kZWxpdmVyeV9hZGRyZXNzXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiIFtzdWdnZXN0aW9uc109XFxcImFkZHJlc3Nlc1xcXCIgZmllbGQ9XFxcImZvcm1hdHRlZEFkZHJlc3NcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcImdldEFkZHJlc3NlcygkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RBZGRyZXNzKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlcnJvci1ibG9ja1xcXCIgKm5nSWY9XFxcIiFpc0FkZHJlc3NGdWxsICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgPT09ICcnXFxcIj5JbnNlcmlzY2kgbCdpbmRpcml6em8gZXNhdHRvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc0Z1bGwgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyAhPT0gJycgJiYgaXNBZGRyZXNzT25lXFxcIj5JbmRpcml6em8gbm9uIHRyb3ZhdG88L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc09uZSAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzICE9PSAnJ1xcXCI+SW5kaXJpenpvIG5vbiDDqCBzcGVjaWZpY288L2Rpdj4tLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGxhYmVsPk5vdGE8L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibm90YVxcXCIgbmFtZT1cXFwiYXBwbGljYW50X2Rlc2NyaXB0aW9uXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb25cXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXNjaWEgdW5hIG5vdGEuLi5cXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAoY2xpY2spPVxcXCJzaG93Q29uZmlybWF0aW9uKClcXFwiPkFudGVwcmltYSBkZWwgcHJvZ2V0dG88L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWxpbmtzXFxcIj5cXG4gICAgICAgICAgPHA+XFxuICAgICAgICAgICAgU3RhcmJvb2sgwqkgMjAxNyDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9oZWxwXFxcIj5Bc3Npc3RlbnphPC9hPlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cD5cXG4gIGZhY2Vib29rIHdvcmtzIVxcbjwvcD5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImxhbmRpbmdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLXBhZ2VcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1oZWFkZXJcXFwiPlxcbiAgICAgICAgICA8aDE+SGFpIGJpc29nbm8gZGkgbGF2b3JhemlvbmkgaW50ZXJuaT88L2gxPlxcbiAgICAgICAgICA8aDY+w4ggY29zaSBzZW1wbGljZS4gVHJvdmEgaWwgc2Vydml6aW8uIENhbGNvbGEgaWwgcHJldmVudGl2by4gUHJlbm90YS48L2g2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1zZWFyY2hcXFwiPlxcbiAgICAgICAgICA8cC1hdXRvQ29tcGxldGUgWyhuZ01vZGVsKV09XFxcInF1ZXJ5XFxcIiBbc3VnZ2VzdGlvbnNdPVxcXCJyZXN1bHRzXFxcIiBmaWVsZD1cXFwidGl0bGVcXFwiIHNjcm9sbEhlaWdodD1cXFwiMjc1cHhcXFwiIChjb21wbGV0ZU1ldGhvZCk9XFxcInNlYXJjaCgkZXZlbnQpXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3RSZXN1bHQocXVlcnkpXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29udHJvc29mZml0dG8gaW4gY2FydG9uZ2Vzc28sIFBhcmV0ZSBpbiBjYXJ0b25nZXNzby4uLlxcXCIgbWluTGVuZ3RoPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgbGV0LXJlcz5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1yZXN1bHRcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChyZXMpXFxcIj57eyByZXMudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3AtYXV0b0NvbXBsZXRlPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyXFxcIiAqbmdJZj1cXFwic3BpbmVyVmlld1xcXCI+XFxuICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMjFweCcgaGVpZ2h0PScyMXB4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgICAgICAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzE4MCA1MCA1MDszNjAgNTAgNTA7XFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgZHVyPVxcXCIxc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICAgICAgPC9jaXJjbGU+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhc3BpbmVyVmlldyAmJiBjbGVhclZpZXdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSByb3VuZGVkIHRoaWNrXFxcIiAoY2xpY2spPVxcXCJjbGVhclNlYXJjaEZvcm0oKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWktYXV0b2NvbXBsZXRlLXBhbmVsIGVtcHR5XFxcIiAqbmdJZj1cXFwicmVzdWx0cy5sZW5ndGggPT09IDAgJiYgcXVlcnkubGVuZ3RoID4gMFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0XFxcIj5OZXNzdW4gcmlzdWx0YXRvPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbGFuZGluZy1oZWFkZXItYnV0dG9uXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0ncmVnaXN0ZXJfY29tcGFueScgfHwgdGVzdFBhZ2U9PT0nc2hhcmVfc3RhcmJvb2snXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyXFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1ibG9ja1xcXCIgKm5nSWY9XFxcInRlc3RQYWdlPT09J3JlZ2lzdGVyX2NvbXBhbnknXFxcIiAoY2xpY2spPVxcXCJjYWxsVG9BY3Rpb25SZWdpc3RlckNvbXBhbnkoKVxcXCI+UmVnaXN0cmEgbGEgdHVhIGltcHJlc2E8L2J1dHRvbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1xcXCIgKm5nSWY9XFxcInRlc3RQYWdlPT09J3NoYXJlX3N0YXJib29rJ1xcXCIgKGNsaWNrKT1cXFwiY2FsbFRvQWN0aW9uU2hhcmVUb0Vhcm4oKVxcXCI+Q29uZGl2aWRpIGUgZ3VhZGFnbmE8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMj5MYXZvcmF6aW9uaSBwacO5IHJpY2hpZXN0aTwvaDI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1zZXJ2aWNlc1xcXCI+XFxuICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3dpcGVyLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItd3JhcHBlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2VzLWNhcmQgc3dpcGVyLXNsaWRlXFxcIiAqbmdGb3I9XFxcImxldCBzZXJ2aWNlIG9mIHNlcnZpY2VzXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RSZXN1bHQoc2VydmljZSlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtY29udGFpbmVyXFxcIiBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XFxcIid1cmwoJyArIHNlcnZpY2UuaW1hZ2VfdXJsICsgJyknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNoYWRvd1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IHNlcnZpY2UudGl0bGUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgQSBQQVJUSVJFIERBIDxzcGFuPuKCrHt7IHNlcnZpY2Uub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJ3aHktY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+UGVyY2jDqSB1c2FyZSBTdGFyYm9vaz88L2gyPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgd2h5LWNlbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3Rhcl9xdWFsaXR5LnBuZ1xcXCIgY2xhc3M9XFxcInJvdW5kZWQgbXgtYXV0byBkLWJsb2NrXFxcIiBhbHQ9XFxcIi4uLlxcXCI+XFxuICAgICAgICAgICAgPGgzPkxhdm9yYXppb25pIGRpIGFsdGEgcXVhbGl0w6A8L2gzPlxcbiAgICAgICAgICAgIDxoND5JIHNlcnZpemkgc3UgU3RhcmJvb2sgdmVuZ29ubyBlc2VndWl0aSBkYWxsZSBtaWdsaW9yaSBhemllbmRlLiBVc2FuZG8gdW4gYWxnb3JpdG1vIGRpIHJpY2VyY2EsIFN0YXJib29rIHRyb3ZhIGzigJlhemllbmRhIHBpw7kgdmljaW5hIGFsbGEgdHVhIGFiaXRhemlvbmUuPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJrZXQtcHJpY2UucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJlenpvIGdhcmFudGl0byBkYWwgbWVyY2F0bzwvaDM+XFxuICAgICAgICAgICAgPGg0PkkgcHJlenppIHN1IFN0YXJib29rIHZlbmdvbm8gY2FsY29sYXRpIGRhIHVuIGFsZ29yaXRtbyBpbnRlcm5vIGRlbGxhIHBpYXR0YWZvcm1hIHBlciByZW5kZXJlIHBpw7kgZXF1byBlIHRyYXNwYXJlbnRlIGlsIG1lcmNhdG8uPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90aW1pbmcucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+UHJldmVudGl2byBkaXJldHRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+VW5hIHZvbHRhIHNjZWx0byBpbCBzZXJ2aXppbywgc2VsZXppb25hIGkgZm9ybSBzZWNvbmRvIGxlIGVzaWdlbnplIGUgY2FsY29sYSBpbCBwcmV2ZW50aXZvIGRpcmV0dGFtZW50ZSBkYWxsYSBwaWF0dGFmb3JtYS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJwYXJ0bmVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxlIG1pZ2xpb3JpIGF6aWVuZGUgcGFydG5lcjwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1icmFuZHMtc2Nyb2xsYWJsZVxcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+IC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwicHJlLWZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+U2ljdXJlenphIGRlbCBzaXRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zZWN1cml0eVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbm9ydG9uLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2VjdXJlLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJ1c3QucG5nXFxcIj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaXN0ZW1pIGRpIHBhZ2FtZW50bzwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3QtcGF5bWVudC1tZXRob2RzXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdmlzYS5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FtZXJpY2FuZXhwcmVzcy5wbmdcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0cmlwZS5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PkNvbnRhdHRpPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1jb250YWN0LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxoND5BdHRpdm8gMjQvNzwvaDQ+XFxuICAgICAgICAgICAgPGg0PkNlbGx1bGFyZTogKzM5IDMyNyAyNCAxNSAwMjg8L2g0PlxcbiAgICAgICAgICAgIDxoND5FbWFpbDogaW5mb0BzdGFyYm9vay5jbzwvaDQ+XFxuICAgICAgICAgICAgPGg0PlZpYSBMdWlnaSBQaXJhbmRlbGxvIDIxLCBCdXN0byBBcnNpemlvIFZBPC9oND5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TZWd1aWNpIHN1PC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1zb2NpYWxzXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc3RhcmJvb2suY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFjZWJvb2sucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zdGFyYm9va2NvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3R3aXR0ZXIucG5nXFxcIj48L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0ucG5nXFxcIj48L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb3B5cmlnaHRcXFwiPjxzdHJvbmc+U3RhcmJvb2s8L3N0cm9uZz4gwqkgMjAxNyBUdXR0aSBpIGRpcml0dGkgcmlzZXJ2YXRpPC9kaXY+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvY29uZGl0aW9uc1xcXCI+Q29uZGl6aW9uaTwvYT5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsYW5kaW5nLXRvcC1oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxoMT5QcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2dubywgbmVsbCdvcmEgZSBpbCBnaW9ybm8gY2hlIGRlc2lkZXJpPC9oMT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TdGFyYm9vayA8c3Bhbj5zZXJ2aWNlczwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgPHA+U2VsZXppb25hIHVubyBkZWkgc2Vydml6aSBzdSBTdGFyYm9vaywgaW1wb3N0YSBsYSBkYXRhLCBvcmEsIGluZGlyaXp6byBlIGNvbmZlcm1hIGzigJlvcmRpbmUuIFZlcnJhaSBub3RpZmljYXRvIGNvbiB1biBzbXMgZSB1bmEgbWFpbCBxdWFuZG8gbOKAmW9yZGluZSBlIHN0YXRvIGFjY2V0dGF0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBxdWFsaWZpY2F0by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzFdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlB1bGl6aWU8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkhhaSBiaXNvZ25vIGRpIHVuIHNlcnZpemlvIGRpIHB1bGl6aWUgcGVyIGxhIGNhc2EsIGzigJl1ZmZpY2lvIG8gaWwgbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4NGZjZmVlOWQ2NzUyNDIzYTYxZTc5ZScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigxLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMSwgJ29mZicpXFxcIj5QcmVub3RhIFB1bGl6aWU8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTYgdG9wLWNhcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0yXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1syXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5FbGV0dHJpY2lzdGE8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGVsZXR0cmljaXN0YSBxdWFsaWZpY2F0byBlIGFmZmlkYWJpbGUgcGVyIGxhdm9yaSBkaSBjYXNhLCB1ZmZpY2lvIG8gbmVnb3ppbz88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVlNDFkZjFiYWZhNDFjZGJmYjlkMScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigyLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMiwgJ29mZicpXFxcIj5QcmVub3RhIEVsZXR0cmljaXN0YTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmQgZ3JlZW4tY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtM1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbM119XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+SWRyYXVsaWNvPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5UaSBzZXJ2ZSB1biBpZHJhdWxpY28gcHJvZmVzc2lvbmlzdGEsIHB1b2kgcHJlbm90YXJsbyBzdWJpdG8gc3UgU3RhcmJvb2sgc2VuemEgaW1wZWduby48L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGFuZGluZy1jYXJkLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwibmF2aWdhdGUoJzU4MmVkZmU0ZjFiYWZhNDFjZGJmYjljYicpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAobW91c2VlbnRlcik9XFxcImNhcmRIb3ZlcigzLCAnb24nKVxcXCIgKG1vdXNlbGVhdmUpPVxcXCJjYXJkSG92ZXIoMywgJ29mZicpXFxcIj5QcmVub3RhIElkcmF1bGljbzwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2VudGVyLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgIFJlbmRpIGxhIHR1YSB2aXRhIHBpw7kgZmFjaWxlLiBQcmVub3RhIGlsIHNlcnZpemlvIGRpIGN1aSBoYWkgYmlzb2duby5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5Db21lIGZ1bnppb25hPzwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2R1Y3QtaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5TZWxlemlvbmEgaSBzZXJ2aXppPC9kaXY+XFxuICAgICAgICAgIDxwPk9nbmkgY2F0ZWdvcmlhIGhhIHVuYSBsaXN0YSBkaSBzZXJ2aXppLiBTZWxlemlvbmEgcXVlbGxpIGRpIHF1aSBoYWkgYmlzb2duby48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5QcmVub3RhIHVuIGFwcHVudGFtZW50bzwvZGl2PlxcbiAgICAgICAgICA8cD5JbnNlcmlzY2kgaSBkYXRpIG5lY2Vzc2FyaSBkZWwgb3JkaW5lIGUgaW52aWEgbGEgcmljaGllc3RhLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+SW52aWEgcmljaGllc3RhPC9hPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbnMtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtYmVsbFxcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgICAgPGE+PGkgY2xhc3M9XFxcImZhIGZhLWVudmVsb3BlXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtY29tbWVudGluZ1xcXCI+PC9pPjwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5SaWNldmkgbGEgY29uZmVybWEgZSByaWxhc3NhdGkhPC9kaXY+XFxuICAgICAgICAgIDxwPlVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBs4oCZb3JhIGRlbCBhcHB1bnRhbWVudG8uPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICA8aDE+TGUgcHJpbmNpcGFsaSBjaXR0w6A8L2gxPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTFcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VmFyZXNlPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+TWlsYW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGJhbm5lclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYmFubmVyLTNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgPHNwYW4+VG9yaW5vPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgY2hlIHRpIGRhIGxhIHBvc3NpYmlsaXTDoCBkaSBwcmVub3RhcmUgaSBwcm9mZXNzaW9uaXN0aSBuZWxsJ29yYSBlIGRhdGEgY2hlIHR1IGRlc2lkZXJpIHNlbnphIGRvdmVyIGNoaWFtYXJlIGUgbGFzY2lhcmUgYXBwdW50YW1lbnRpIHRyYW1pdGUgdGVsZWZvbm8gbyBlbWFpbC5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHdpdGhvdXQtdGFic1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJsZWZ0LW5hdmlnYXRlXFxcIj5cXG4gICAgICA8YSAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6dGFiLnNlbGVjdGVkfVxcXCIgKGNsaWNrKT1cXFwicmVuZGVyUGFnZSh0YWIubmFtZSlcXFwiPlxcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxcbiAgICAgICAgPGRpdj57e3RhYi5uYW1lfX08L2Rpdj5cXG4gICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgb3JkZXJzLWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXJzLWVycm9yXFxcIiAqbmdJZj1cXFwicGFnZURhdGEubGVuZ3RoID09PSAwICYmIHJlcXVlc3RJc0NvbXBsZXRlXFxcIj57e2VtcHR5TGlzdFRpdGxlfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgb3JkZXIgb2YgcGFnZURhdGFcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUoZGF0ZUZvcm1hdGluZygnbm93JyksIG9yZGVyLmRhdGUpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gU2Vydml6aW8gaW4gY29yc28uLi5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBJbiBhdHRlc2EgZGkgcGFnYW1lbnRvLi4uLS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdyZWVuXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBjb25mZXJtYVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUob3JkZXIuZGF0ZSwgZGF0ZUZvcm1hdGluZygnbm93JykpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQXNzZWduYXRvXFxuICAgICAgICAgIDwvZGl2PlxcblxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZWRcXFwiPjwvc3Bhbj4gQW5udWxsYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdyZWVuXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBjb25mZXJtYVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUob3JkZXIuZGF0ZSwgZGF0ZUZvcm1hdGluZygnbm93JykpICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEFzc2VnbmF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0aSdcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBwYWdhbWVudG8uLi4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gU2Vydml6aW8gaW4gY29yc28uLi5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJsYWNrXFxcIj48L3NwYW4+IFNjYWR1dG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OCAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQ29tcGxldGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk5ICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+PC9zcGFuPiBBbm51bGxhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LW5hbWVcXFwiPlxcbiAgICAgICAgICAgIHt7IGNhdGVnb3JpZXNbb3JkZXIuY2F0ZWdvcnlfdHlwZV0gfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWRhdGVcXFwiPlxcbiAgICAgICAgICAgIHt7IGRhdGVGb3JtYXRpbmcob3JkZXIuZGF0ZSkgfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWJvZHlcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLXJvdyBwcm9kdWN0cyBjb2wteGwtNFxcXCI+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygb3JkZXIuZGV0YWlsc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2UnOnByb2R1Y3QudHlwZSA9PT0gJ3NlcnZpY2UnfVxcXCI+e3sgcHJvZHVjdC50aXRsZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC50eXBlICE9PSAnc2VydmljZScgJiYgcHJvZHVjdC5hbW91bnQgPiAwXFxcIj7igqx7eyBwcm9kdWN0LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0gdG90YWxcXFwiPlRvdGFsZSA8aT7igqx7eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIG9yZGVyLmRldGFpbHNcXFwiIFtuZ0NsYXNzXT1cXFwieydzZXJ2aWNlJzpwcm9kdWN0LnR5cGUgPT09ICdzZXJ2aWNlJ31cXFwiPnt7IHByb2R1Y3QudGl0bGUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QudHlwZSAhPT0gJ3NlcnZpY2UnXFxcIj57eyBwcm9kdWN0LmRlc2NyaXB0aW9uIH19PC9pPjwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJpdGVtIHRvdGFsXFxcIj5Ub3RhbGUgPGk+4oKse3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX08L2k+PC9kaXY+IC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT0wXFxcIj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09MVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIubWVyY2hhbnQucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIW9yZGVyLm1lcmNoYW50IHx8IG9yZGVyLm1lcmNoYW50ID09PSBudWxsIHx8IG9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz5JbiBhdHRlc2EgZGkgY29uZmVybWEuLi48L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLm1lcmNoYW50ICYmIG9yZGVyLm1lcmNoYW50ICE9PSBudWxsICYmIG9yZGVyLnN0YXR1cz09PTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5JbmRpcml6em86PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnN0cmVldCB9fSwge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXRfbnVtYmVyIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MuY2l0eSB9fSwge3sgb3JkZXIuYWRkcmVzcy5wb3N0YWxfY29kZSB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnByb3ZpbmNlIH19LCB7eyBvcmRlci5hZGRyZXNzLmNvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjbGllbnQtaW5mbyBjb2wteGwtNFxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIob3JkZXIuY3VzdG9tZXIgfHwgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTk4ICYmIGF1dGhEYXRhLl9pZCAhPT0gb3JkZXIuY3VzdG9tZXJfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiKG9yZGVyLmN1c3RvbWVyIHx8IG9yZGVyLmN1c3RvbWVyICE9PSBudWxsKSAmJiBvcmRlci5zdGF0dXM9PT05OCAmJiBhdXRoRGF0YS5faWQgPT09IG9yZGVyLmN1c3RvbWVyX2lkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+UHJvZmVzc2lvbmlzdGE6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIubWVyY2hhbnQucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5jdXN0b21lciAmJiBvcmRlci5jdXN0b21lciAhPT0gbnVsbCAmJiAoIW9yZGVyLm1lcmNoYW50IHx8IG9yZGVyLm1lcmNoYW50ID09PSBudWxsKSAmJiBvcmRlci5zdGF0dXM9PT0wXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTk5XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5jdXN0b21lci5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5JbmRpcml6em86PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnN0cmVldCB9fSwge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXRfbnVtYmVyIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MuY2l0eSB9fSwge3sgb3JkZXIuYWRkcmVzcy5wb3N0YWxfY29kZSB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLnByb3ZpbmNlIH19LCB7eyBvcmRlci5hZGRyZXNzLmNvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1yb3cgZGVzY3JpcHRpb24gY29sLXhsLTRcXFwiPlxcbiAgICAgICAgICAgICAge3sgb3JkZXIuZGVzY3JpcHRpb24gfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWZvb3RlclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvZGVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPkNPRElDRTo8L3NwYW4+XFxuICAgICAgICAgICAge3sgb3JkZXIuX2lkIH19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDEgJiYgZGF0ZUNvbXBhcmUoZGF0ZUZvcm1hdGluZygnbm93JyksIG9yZGVyLmRhdGUpICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScgJiYgaXNWZW5kb3IgPT09IHRydWVcXFwiIChjbGljayk9XFxcImNvbXBsZXRhT3JkZXIob3JkZXIuX2lkKVxcXCI+Q29tcGxldGEgc2Vydml6aW88L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+UHJldmVudGl2bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIiAoY2xpY2spPVxcXCJlZGl0T3JkZXIob3JkZXIuX2lkLCBvcmRlci5wYXltZW50LmFtb3VudClcXFwiPk1vZGlmaWNhPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScgJiYgaXNWZW5kb3IgPT09IHRydWVcXFwiIChjbGljayk9XFxcImNvbmZpcm1PcmRlcihvcmRlci5faWQpXFxcIj5Db25mZXJtYSBzZXJ2aXppbzwvYnV0dG9uPlxcblxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk5ICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIiAoY2xpY2spPVxcXCJyZWFjdGl2YXRlT3JkZXIob3JkZXIuX2lkKVxcXCI+UmVhdHRpdmEgc2Vydml6aW88L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcImNhbmNlbE9yZGVyKG9yZGVyLl9pZClcXFwiPkFubnVsbGEgc2Vydml6aW88L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcImNvbnRpbnVlT3JkZXIob3JkZXIuX2lkLCBvcmRlci5wYXltZW50LmFtb3VudClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IFByb2NlZGk8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2sgYXJjaGl2ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMyAmJiBzZWxlY3RUYWIgPT09ICdBcmNoaXZpbydcXFwiPjxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcHJpY2VcXFwiPkltcG9ydG86IDxzcGFuPnt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH194oKsPC9zcGFuPjwvZGl2PjwvZGl2Pi0tPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIDxkaXYgY2xhc3M9XFxcImxvYWRlclxcXCIgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9kaXY+IC0tPlxcbjxkaXYgY2xhc3M9XFxcInByb2ZpbGUtcGFnZVxcXCIgW25nQ2xhc3NdPVxcXCJ7d2hpdGVCZzogc2VsZWN0VGFiID09PSAnY29uZGl0aW9ucycgfHwgc2VsZWN0VGFiID09PSAncHJpdmFjeScgfHwgc2VsZWN0VGFiID09PSAnaGVscCd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayB3aXRob3V0LXRhYnNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtbmF2aWdhdGVcXFwiIChzd2lwZWxlZnQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiIChzd2lwZXJpZ2h0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIj5cXG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1sZWZ0LnB4JzogZGVsdGF9XFxcIj5cXG4gICAgICAgICAgPGEgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnNcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOnRhYi51cmwgPT09IHNlbGVjdFRhYn1cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvcHJvZmlsZScsIHRhYi51cmxdXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICAgICAgPGRpdj57e3RhYi5uYW1lfX08L2Rpdj5cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8YSAqbmdJZj1cXFwiaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+PHNwYW4+PC9zcGFuPjxkaXY+RXNjaTwvZGl2PjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2ZpbGUtc2V0dGluZ3NcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdzZXR0aW5ncydcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5JbmZvcm1hemlvbmkgZGVsIGFjY291bnQ8L2Rpdj5cXG4gICAgICAgIDxmb3JtICNjaGFuZ1Byb2ZpbGU9XFxcIm5nRm9ybVxcXCI+XFxuICAgICAgICAgIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICAgICAgICA8bGFiZWw+Tk9NRSBDT01QTEVUTzwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiTm9tZSBDb2dub21lXFxcIiAjZnVsbG5hbWU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5mdWxsbmFtZVxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5Db2dub21lPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3RuYW1lXFxcIiAjZnVsbG5hbWU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5sYXN0bmFtZVxcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08bGFiZWw+Tm9tZSBBemllbmRhPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhdHJvbnltaWNcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBhdHJvbnltaWNcXFwiIHJlcXVpcmVkIGRpc2FibGVkPi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxsYWJlbD5DRUxMVUxBUkU8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOdW1lcm9cXFwiICNwaG9uZV9udW1iZXI9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5waG9uZV9udW1iZXJcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGxhYmVsPkVNQUlMPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZW1haWwtZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5kaXJpenpvIGVtYWlsXFxcIiB2YWx1ZT1cXFwiXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5lbWFpbFxcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2NoYW5nZVBhc3N3b3JkJylcXFwiIGRpc2FibGVkPk1vZGlmaWNhIHBhc3N3b3JkPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwYXNzd29yZC1ibG9ja1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5QYXNzd29yZDwvbGFiZWw+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcInBhc3N3b3JkLWNvbnRhaW5lclxcXCI+LS0+XFxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFzc3dvcmRcXFwiPi0tPlxcbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4+4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiPC9zcGFuPi0tPlxcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNoYW5nZS1wYXNzd29yZFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2NoYW5nZVBhc3N3b3JkJylcXFwiPk1vZGlmaWNhIHBhc3N3b3JkPC9idXR0b24+LS0+XFxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaGVhZGVyIHNlY29uZFxcXCI+SW5kaXJpenpvIGRpIGZhdHR1cmF6aW9uZTwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+SW5kaXJpenpvIGRlbCBkb21pY2lsaW88L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiYWRkcmVzczFcXFwiICNzdHJlZXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5zdHJlZXRcXFwiIHBsYWNlaG9sZGVyPVxcXCJWaWEgVmVyZGkgMTNcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkNpdHTDoCBlIENBUDwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZG91YmxlLWlucHV0XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmaXJzdFxcXCIgbmFtZT1cXFwiYWRkcmVzczJcXFwiICNjaXR5PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEuY2l0eVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNpdHTDoFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgc2Vjb25kXFxcIiBuYW1lPVxcXCJudW1iZXIyXFxcIiAjcG9zdGFsX2NvZGU9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wb3N0YWxfY29kZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNBUFxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+UHJvdmluY2lhIGUgTmF6aW9uZTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZG91YmxlLWlucHV0XFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmaXJzdFxcXCIgbmFtZT1cXFwiY2l0eVxcXCIgI3Byb3ZpbmNlPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucHJvdmluY2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJQcm92aW5jaWFcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHNlY29uZFxcXCIgbmFtZT1cXFwiY291bnRyeVxcXCIgI2NvdW50cnk9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5jb3VudHJ5XFxcIiBwbGFjZWhvbGRlcj1cXFwiTmF6aW9uZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+UGFydGl0YSBJVkE8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGl2YVxcXCIgcGxhY2Vob2xkZXI9XFxcIlAuSVZBXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5Db2RpY2UgRmlzY2FsZTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb2RpY2VcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb2RpY2UgRmlzY2FsZVxcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1pbmZvcm1hdGlvblxcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgICAgICAgICAgPHN0cm9uZyAqbmdJZj1cXFwiZm9ybUVycm9yLnRpdGxlLmxlbmd0aCA+IDBcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L3N0cm9uZz4ge3tmb3JtRXJyb3IubWVzc2FnZX19XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwidXBkYXRlUHJvZmlsZSgpXFxcIj5BZ2dpb3JuYSBJbmZvcm1hemlvbmk8L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zaWduLW91dFxcXCI+PC9zcGFuPiBMb2cgb3V0PC9idXR0b24+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAncGF5bWVudCdcXFwiPlxcbiAgICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIiAqbmdGb3I9XFxcImxldCBjYXJkIG9mIGNhcmRzXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1sb2dvIHt7IGZvcm1hdENzc0NsYXNzKGNhcmQuYnJhbmQpIH19XFxcIj48c3Bhbj4qKioqIHt7IGNhcmQubGFzdDQgfX08L3NwYW4+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpc0RlZmF1bHRcXFwiICpuZ0lmPVxcXCJkZWZhdWx0Q2FyZCA9PT0gY2FyZC5pZFxcXCI+RGVmYXVsdDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJkZWZhdWx0Q2FyZCAhPT0gY2FyZC5pZFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0Q2FyZChjYXJkLmlkKVxcXCI+RGVmYXVsdDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlQ2FyZChjYXJkLmlkKVxcXCI+UmltdW92aTwvYT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZChjYXJkLmlkKVxcXCI+TW9kaWZpY2E8L2E+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaW5mb3JtYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+Tm9tZTo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5uYW1lIH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+TnVtZXJvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAqKioqIHt7IGNhcmQubGFzdDQgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TY2FkZW56YTo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5leHBfbW9udGggfX0ve3sgZm9ybWF0WWVhcihjYXJkLmV4cF95ZWFyKSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRpcG86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYnJhbmQgfX0ge3sgY2FyZC5mdW5kaW5nIH19IHt7IGNhcmQub2JqZWN0IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWluZm9ybWF0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkluZGlyaXp6bzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5hZGRyZXNzX2xpbmUxIH19IHt7IGNhcmQuYWRkcmVzc19saW5lMiB9fSA8YnI+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5hZGRyZXNzX3N0YXRlIH19IHt7IGNhcmQuYWRkcmVzc19jaXR5IH19IDxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3NfemlwIH19IHt7IGNhcmQuYWRkcmVzc19jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJsb2NrXFxcIj5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcIm5ldy1jYXJkXFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiPlxcbiAgICAgICAgICAgIEFnZ2l1bmdpIHVuIG1ldG9kbyBkaSBwYWdhbWVudG9cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnY29uZGl0aW9ucydcXFwiPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLiBBQ0NFU1NPIEUgUkVHT0xBTUVOVE8gREVMIFNJVE8gU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjEuMS4gQWNjZXNzbyBhbCBTaXRvOiA8L3N0cm9uZz5F4oCZIHBvc3NpYmlsZSBhdmVyZSBhY2Nlc3NvIGFkIGFsY3VuZSBhcmVlIGRlbCBTaXRvIHdlYiBhbmNoZSBzZW56YSBlZmZldHR1YXJlIHVuIE9yZGluZSBvIHNlbnphIHByb2NlZGVyZSBhbGxhIHJlZ2lzdHJhemlvbmUgZGVpIHByb3ByaSBkYXRpLiBMYSBtYWdnaW9yIHBhcnRlIGRlbGxlIGFyZWUgZGVsIFNpdG8gc29ubyBhY2Nlc3NpYmlsaSBhIGNoaXVucXVlLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS4yLiBBY2NldHRhemlvbmUgZGVsIFJlZ29sYW1lbnRvIGRlbCBTaXRvOjwvc3Ryb25nPiBMYSBuYXZpZ2F6aW9uZSBpbiBxdWFsdW5xdWUgYXJlYSBkZWwgU2l0byBjb21wb3J0YSBsJ2FjY2V0dGF6aW9uZSBkZWwgUmVnb2xhbWVudG8gZGVsIFNpdG8uIEkgdmlzaXRhdG9yaSBlZCB1dGVudGkgZGVsIFNpdG8gY2hlIHJpZml1dGlubyBkaSBhY2NldHRhcmUgaWwgUmVnb2xhbWVudG8gZGVsIFNpdG8gc29ubyB0ZW51dGkgYSBsYXNjaWFyZSBpbW1lZGlhdGFtZW50ZSBpbCBTaXRvIGUgbm9uIGF2cmFubm8gbGEgcG9zc2liaWxpdMOgIGRpIG9yZGluYXJlIHNlcnZpemkgdHJhbWl0ZSBpbCBTaXRvIHN0ZXNzby48YnI+XFxuICAgICAgICA8c3Ryb25nPjEuMy4gTW9kaWZpY2hlIGFsIFJlZ29sYW1lbnRvIGRlbCBTaXRvOjwvc3Ryb25nPiBTVEFSQk9PSyBoYSBmYWNvbHTDoCBkaSBtb2RpZmljYXJlIGlsIHByZXNlbnRlIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGluIHF1YWxzaWFzaSBtb21lbnRvLiBPY2NvcnJlIHBlcnRhbnRvIGNvbnRyb2xsYXJlIHBlcmlvZGljYW1lbnRlIGlsIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGluIHZpZ29yZSBhbCBtb21lbnRvIHBvaWNow6kgZXNzYSB2aW5jb2xhIGkgdmlzaXRhdG9yaSBlIGdsaSB1dGVudGkgZGVsIFNpdG8uIEkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBzb25vIHRlbnV0aSBhbCByaXNwZXR0byBkZWxsZSBwb2xpY3kgZSBkZWxsYSBkaXNjaXBsaW5hIGluIHZpZ29yZSBhbCBtb21lbnRvIGluIGN1aSBlZmZldHR1YW5vIHVuIE9yZGluZSB0cmFtaXRlIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS40LiBSZXNwb25zYWJpbGl0w6A6PC9zdHJvbmc+IFNwZXR0YSBhaSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHByZWRpc3BvcnJlIHF1YW50byBuZWNlc3NhcmlvIHBlciBhdmVyZSBhY2Nlc3NvIGFsIFNpdG8gc3Rlc3NvLiBJbm9sdHJlLCBpIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gc29ubyB0ZW51dGkgYSBnYXJhbnRpcmUgY2hlIHR1dHRpIGNvbG9ybyBjaGUgaGFubm8gYWNjZXNzbyBhbCBTaXRvIHRyYW1pdGUgbGEgbG9ybyBjb25uZXNzaW9uZSBhZCBJbnRlcm5ldCBzaWFubyBhIGNvbm9zY2VuemEgZGVsIHByZXNlbnRlIFJlZ29sYW1lbnRvIGRlbCBTaXRvIGUgbGEgcmlzcGV0dGluby48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuIFNUQVRVUyBERUxM4oCZVVRFTlRFIERFTCBTSVRPIFNUQVJCT09LPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLjEuIENhcGFjaXTDoCBnaXVyaWRpY2EgZWQgZXTDoDogPC9zdHJvbmc+RWZmZXR0dWFuZG8gdW4gT3JkaW5lIHRyYW1pdGUgaWwgU2l0bywgbOKAmXV0ZW50ZSBnYXJhbnRpc2NlOjxicj5cXG4gICAgICAgIDxzdHJvbmc+Mi4xLjEuPC9zdHJvbmc+IGRpIGF2ZXIgbGEgY2FwYWNpdMOgIGRpIGFnaXJlIGUgY29uY2x1ZGVyZSBjb250cmF0dGkgZ2l1cmlkaWNhbWVudGUgdmluY29sYW50aTxicj5cXG4gICAgICAgIDxzdHJvbmc+Mi4xLjIuPC9zdHJvbmc+IGRpIGF2ZXJlIGNvbXBpdXRvIDE4IGFubmk8L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjMuIE1PREFMSVTDgCBESSBFTUlTU0lPTkUgREVMTCBPUkRJTkUgRSBESSBFTEFCT1JBWklPTkUgREVMTOKAmU9SRElORTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+My4xLiBDb21waWxhemlvbmUgZGVsbOKAmU9yZGluZTogPC9zdHJvbmc+RG9wbyBhdmVyIHNlbGV6aW9uYXRvIGlsIHNlcnZpemlvIGNoZSBpbnRlbmRlIG9yZGluYXJlIGRhIHVuIHByb2Zlc3Npb25pc3RhIHByZXNjZWx0byBkYWxsYSBwaWF0dGFmb3JtYSBlZCBhdmVyIGZvcm5pdG8gbGUgaW5mb3JtYXppb25pLCBs4oCZdXRlbnRlIGhhIGZhY29sdMOgIGRpIGVmZmV0dHVhcmUgbOKAmU9yZGluZSBjbGljY2FuZG8gc3VsLCBvIHNlbGV6aW9uYW5kbyBpbCwgcHVsc2FudGUg4oCcUHJvY2VkaSBjb24gbCdvcmRpbmXigJ0gZSDigJxQcm9jZWRpIGNvbiBsJ2FjcXVpc3Rv4oCdLiBTaSByaWNvcmRhIGNoZSDDqCBpbXBvcnRhbnRlIGNvbnRyb2xsYXJlIHR1dHRlIGxlIGluZm9ybWF6aW9uaSBpbW1lc3NlIGUgY29ycmVnZ2VyZSBldmVudHVhbGkgZXJyb3JpIHByaW1hIGRpIGNsaWNjYXJlIHN1bCBwdWxzYW50ZSBvIGRpIHNlbGV6aW9uYXJsbyBwb2ljaMOpLCBkb3BvIGF2ZXJsbyBmYXR0bywgaWwgcHJvY2VkaW1lbnRvIGRpIGVsYWJvcmF6aW9uZSBkZWxs4oCZT3JkaW5lIGhhIGluaXppbyBlIG5vbiDDqCBwacO5IHBvc3NpYmlsZSBjb3JyZWdnZXJlIGV2ZW50dWFsaSBlcnJvcmkuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjIuIE1vZGlmaWNhIG8gYW5udWxsYW1lbnRvIGRlbGzigJlPcmRpbmU6IDwvc3Ryb25nPlVuYSB2b2x0YSBjaGUgbOKAmU9yZGluZSDDqCBzdGF0byBpbm9sdHJhdG8gZSBpbCBwYWdhbWVudG8gw6ggc3RhdG8gYXV0b3JpenphdG8gbm9uIMOoIHBpw7kgcG9zc2liaWxlIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgbOKAmU9yZGluZSBlIG5vbiBzaSBoYSBkaXJpdHRvIGFkIGFsY3VuIHJpbWJvcnNvLiBPdmUgZGVzaWRlcmkgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBs4oCZT3JkaW5lLCBs4oCZdXRlbnRlIHB1w7Igcml2b2xnZXJzaSBhbCBTZXJ2aXppbyBDbGllbnRpLCBpbCBxdWFsZSB0ZW50ZXLDoCBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgY29tdW5pY2FyZ2xpIGxhIHJpY2hpZXN0YSBkZWxs4oCZdXRlbnRlLiBOb24gdmkgw6ggYWxjdW5hIGFzc2ljdXJhemlvbmUsIHR1dHRhdmlhLCByaWd1YXJkbyBhbCBmYXR0byBjaGUgaWwgU2Vydml6aW8gQ2xpZW50aSBzYXLDoCBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIG8gY2hlIGlsIHByb2Zlc3Npb25pc3RhIGFjY2V0dGVyw6AgbGUgcmljaGllc3RlIGRlbGzigJl1dGVudGUgaW4gcXVhbnRvIGlsIHByb2Nlc3NvIGRpIGVsYWJvcmF6aW9uZSBkZWxs4oCZT3JkaW5lIHBvdHJlYmJlIGF2ZXJlIGdpw6AgYXZ1dG8gaW5pemlvLiBJbCBjbGllbnRlLCBhaSBzZW5zaSBkZWxsJ2FydC4gNTUgbGV0dC4gYSkgZGVsIENvZGljZSBkZWwgQ29uc3Vtbywgbm9uIGhhIGRpcml0dG8gYSByZWNlZGVyZSBkYWdsaSBPcmRpbmkgZWZmZXR0dWF0aSB1bmEgdm9sdGEgY2hlIGlsIGJlbmUgbyBzZXJ2aXppbyByaWNoaWVzdG8gw6ggc3RhdG8gY29uc2VnbmF0by48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuMy4gQXV0b3JpenphemlvbmUgYWwgcGFnYW1lbnRvOjwvc3Ryb25nPiBJbiBjYXNvIGRpIG1hbmNhdGEgYXV0b3JpenphemlvbmUgcmVsYXRpdmEgYWQgdW4gcXVhbHNpYXNpIHBhZ2FtZW50bywgbOKAmU9yZGluZSBub24gdmllbmUgZWxhYm9yYXRvIG8gbm9uIHZpZW5lIGNvbXVuaWNhdG8gYWxsYSBwaWF0dGFmb3JtYS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuNC4gRWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgZSByaWZpdXRvIGRpIE9yZGluaSBkYSBwYXJ0ZSBkZWwgcHJvZmVzc2lvbmlzdGE6IDwvc3Ryb25nPkFsbGEgcmljZXppb25lIGRlbGzigJlPcmRpbmUsIFNUQVJCT09LIG5lIGluaXppYSBs4oCZZWxhYm9yYXppb25lIGNvbiBsYSB0cmFzbWlzc2lvbmUgZGVsbG8gc3Rlc3NvIGFpIHByb2Zlc3Npb25pc3RpIGludGVyZXNzYXRpIGUgbm90aWZpY2EgYWxs4oCZdXRlbnRlLCB0cmFtaXRlIHNtcyBlIG1haWwsIGNoZSBs4oCZT3JkaW5lIMOoIHN0YXRvIGFzc2VnbmF0by4gU2kgc3BlY2lmaWNhIGNoZSBxdWFsc2lhc2kgcGFnaW5hIGRpIGNvbmZlcm1hIGNoZSBs4oCZdXRlbnRlIHBvc3NhIHZpc3VhbGl6emFyZSBzdWwgU2l0byBlIHF1YWxzaWFzaSBjb25mZXJtYSBkaSBPcmRpbmUgY2hlIGzigJl1dGVudGUgc3Rlc3NvIHJpY2V2YSB0cmFtaXRlIGUtbWFpbCBpbmRpY2FubyBlc2NsdXNpdmFtZW50ZSBjaGUgbCdPcmRpbmUgZGVsbOKAmXV0ZW50ZSDDqCBzdGF0byBhc3NlZ25hdG8gbyDDqCBpbiBjb3Jzby4gU1RBUkJPT0sgaW5jb3JhZ2dpYSB0dXR0aSBpIHByb3ByaSBwcm9mZXNzaW9uaXN0aSBhZCBhY2NldHRhcmUgdHV0dGkgZ2xpIE9yZGluaSBlZCBhIGNvbXVuaWNhcmUgdGVtcGVzdGl2YW1lbnRlIGV2ZW50dWFsaSByaWZpdXRpLCBlIGNvbXVuaWNhIGFsbOKAmXV0ZW50ZSAoZ2VuZXJhbG1lbnRlIHRyYW1pdGUgZS1tYWlsKSBub24gYXBwZW5hIHNpYSByYWdpb25ldm9sbWVudGUgcG9zc2liaWxlIG9nbmkgZXZlbnR1YWxlIHJpZml1dG8gZGEgcGFydGUgZGVsIHByb2Zlc3Npb25pc3RhLiBJbiBvZ25pIGNhc28sIGkgcHJvZmVzc2lvbmlzdGkgcG9zc29ubyBzY2VnbGllcmUgZGkgcmlmaXV0YXJlIGdsaSBPcmRpbmkgaW4gcXVhbHNpYXNpIG1vbWVudG8gcGVyIGlsIGZhdHRvIGRpIGVzc2VyZSBlY2Nlc3NpdmFtZW50ZSBpbXBlZ25hdGksIGEgY2F1c2EgZGVsbGUgY29uZGl6aW9uaSBhdG1vc2ZlcmljaGUgbyBwZXIgcXVhbHNpYXNpIGFsdHJhIHJhZ2lvbmUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4zLjUuIEZpbml0dXJhIGRlbCBzZXJ2aXppbzo8L3N0cm9uZz4gSSB0ZW1waSBzdGltYXRpIHBlciBpIHNlcnZpemkgZGFsIGluaXppbyBhIGZpbmUgbGF2b3JpIHZhcmlhbm8gdHJhIDEtMiBnaW9ybmkgYSBzZWNvbmRhIGRlbCB0aXBvIGRpIHNlcnZpemlvIG9yZGluYXRvLiBTVEFSQk9PSyBlIGkgcHJvZmVzc2lvbmlzdGkgbm9uIGdhcmFudGlzY29ubyBjaGUgaSBzZXJ2aXppIHZlcnJhbm5vIGZpbml0aSBlbnRybyBpIHRlbXBpIHN0aW1hdGkuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz40LiBQUkVaWk8gRSBQQUdBTUVOVE88L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjQuMS4gSVZBIGUgY29zdGkgZGkgc2Vydml6aW86PC9zdHJvbmc+IEkgcHJlenppIHNvbm8gcXVlbGxpIGluZGljYXRpIHN1bCBTaXRvLiBJIHByZXp6aSBzb25vIGNvbXByZW5zaXZpIGRpIElWQS4gVGFsaSBjb3N0aSB2ZW5nb25vIGFnZ2l1bnRpIGFsbOKAmWltcG9ydG8gdG90YWxlIGRvdnV0bywgc2UgYXBwbGljYWJpbGkuPGJyPlxcbiAgICAgICAgPHN0cm9uZz40LjIuIEVycmF0YSBpbmRpY2F6aW9uZSBkZWwgcHJlenpvOjwvc3Ryb25nPiBJbCBwcmVzZW50ZSBTaXRvIHdlYiBjb250aWVuZSB1biB2YXN0byBudW1lcm8gZGkgbWVudSBlZCDDqCBzZW1wcmUgcG9zc2liaWxlIGNoZSBhbGN1bmkgZGkgZXNzaSBwb3NzYW5vIHJlY2FyZSB1bmEgaW5kaWNhemlvbmUgaW5lc2F0dGEgZGVsIHByZXp6by4gUXVhbG9yYSBpbCBwcmV6em8gZXNhdHRvIGRpIHVuIE9yZGluZSBzaWEgcGnDuSBlbGV2YXRvIGRlbCBwcmV6em8gaW5kaWNhdG8gc3VsIFNpdG8sIFNUQVJCT09LIG5vcm1hbG1lbnRlIHByb3Z2ZWRlIGEgY29udGF0dGFyZSBs4oCZdXRlbnRlIHByaW1hIGRlbGxhIHNwZWRpemlvbmUgZGVsbCdPcmRpbmUuIEluIHRhbCBjYXNvLCBuw6kgU1RBUkJPT0sgbsOpIGlsIHByb2Zlc3Npb25pc3RhIGludGVyZXNzYXRvIGhhbm5vIGFsY3VuIG9iYmxpZ28gZGkgYXNzaWN1cmFyZSBjaGUgbCdPcmRpbmUgdmVuZ2EgZm9ybml0byBhbGzigJl1dGVudGUgYWwgcHJlenpvIGluZmVyaW9yZSBlcnJvbmVhbWVudGUgaW5kaWNhdG8gbsOpIGRpIHJpbWJvcnNhcmUgYWxs4oCZdXRlbnRlIGxhIGRpZmZlcmVuemEgcmlzcGV0dG8gYWwgcHJlenpvIGVycmF0by4gSW4gY2FzbyBpbCBwcmV6em8gc2lhIGVjY2Vzc2l2YW1lbnRlIGVsZXZhdG8gcmlzcGV0dG8gYWwgcHJlenpvIG9yaWdpbmFyaWFtZW50ZSBjb252ZW51dG8gZSBsJ3V0ZW50ZSBzaWEgdW4gY29uc3VtYXRvcmUgYWkgc2Vuc2kgZGVsIENvZGljZSBkZWwgQ29uc3VtbywgbCd1dGVudGUgYXZyw6AgZmFjb2x0w6AgZGkgcmVjZWRlcmUgZGFsbCdPcmRpbmUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz40LjMuIE1vZGFsaXTDoCBkaSBwYWdhbWVudG86PC9zdHJvbmc+IElsIHBhZ2FtZW50byBkZWkgc2Vydml6aSBkZXZlIGVzc2VyZSBlZmZldHR1YXRvIG1lZGlhbnRlIHVuYSBjYXJ0YSBkaSBjcmVkaXRvL2RlYml0by48YnI+XFxuICAgICAgICA8cD48c3Ryb25nPjUuIFNFUlZJWklPIENMSUVOVEk8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjUuMSBEaXNwb3NpemlvbmkgR2VuZXJhbGk6PC9zdHJvbmc+IFNUQVJCT09LIGNvbnNpZGVyYSBpbCBTZXJ2aXppbyBDbGllbnRpIGVzdHJlbWFtZW50ZSBpbXBvcnRhbnRlLiBJbCBTZXJ2aXppbyBDbGllbnRpIGNlcmNhIGR1bnF1ZSBkaSBwcmVzdGFyZSBhc3Npc3RlbnphIGFsbOKAmXV0ZW50ZSwgcXVhbmRvIHBvc3NpYmlsZSwgaW4gY2FzbyBkaSBwcm9ibGVtaSBjb24gbCdPcmRpbmUuIEzigJl1dGVudGUgcHXDsiBlbnRyYXJlIGluIGNvbnRhdHRvIGNvbiBpbCBTZXJ2aXppbyBDbGllbnRpIGFuZGFuZG8gc3VsbGEgcGFnaW5hIGhlbHAgZGVsIHNpdG8uPGJyPlxcbiAgICAgICAgPHN0cm9uZz41LjIuIE1vZGlmaWNhIG8gYW5udWxsYW1lbnRvIGRlbGwnT3JkaW5lOjwvc3Ryb25nPiBPdmUgbOKAmXV0ZW50ZSBkZXNpZGVyaSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGlsIHByb3ByaW8gT3JkaW5lIGRvcG8gY2hlIGVzc28gc2lhIHN0YXRhIGlub2x0cmF0byBlIGlsIHJlbGF0aXZvIHBhZ2FtZW50byBhdXRvcml6emF0bywgbOKAmXV0ZW50ZSBoYSBmYWNvbHTDoCBkaSByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0ssIGNvbiBsZSBtb2RhbGl0w6Agc29wcmEgZGVzY3JpdHRlLCBpbCBxdWFsZSB0ZW50ZXLDoCBkaSBlbnRyYXJlIGluIGNvbnRhdHRvIGNvbiBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIGNvbXVuaWNhcmUgbGUgcmljaGllc3RlIGRlbCBjbGllbnRlLiBOb24gdmkgw6ggYWxjdW5hIGFzc2ljdXJhemlvbmUsIHR1dHRhdmlhLCByaWd1YXJkbyBhbCBmYXR0byBjaGUgaWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyBzYXLDoCBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhIG8gY2hlIGlsIHByb2Zlc3Npb25pc3RhIGFjY2V0dGVyw6AgbGUgcmljaGllc3RlIGRlbGzigJl1dGVudGUgaW4gcXVhbnRvIGlsIHByb2Nlc3NvIGRpIGVsYWJvcmF6aW9uZSBkZWxsJ09yZGluZSBwb3RyZWJiZSBhdmVyZSBnacOgIGF2dXRvIGluaXppby48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuMy4gUmVjbGFtaSBlIGZlZWRiYWNrIGRhIHBhcnRlIGRlZ2xpIHV0ZW50aTo8L3N0cm9uZz4gTmVsbOKAmWV2ZW50dWFsaXTDoCBjaGUgbOKAmXV0ZW50ZSBub24gc2lhIHNvZGRpc2ZhdHRvIGRlbGxhIHF1YWxpdMOgIGRpIHVuIHF1YWxzaWFzaSBzZXJ2aXppbyBvIGRlbCBzZXJ2aXppbyBmb3JuaXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhLCBTVEFSQk9PSyBpbnZpdGEgbOKAmXV0ZW50ZSBhIGZhciBjb25vc2NlcmUgbGEgcHJvcHJpYSBvcGluaW9uZSB0cmFtaXRlIGlsIFNpdG8sIGluIGZvcm1hIGRpIHZhbHV0YXppb25pLCBjb21tZW50aSBlIHJlY2Vuc2lvbmkgY2hlIHJpZmxldHRhbm8gbGEgcHJvcHJpYSBlc3BlcmllbnphLiBMZSBSZWNlbnNpb25pIHNvbm8gdW5hIHBhcnRlIGltcG9ydGFudGUgZGVsIHByb2Nlc3NvIGRpIGNvbnRyb2xsbyBxdWFsaXTDoCBkaSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuNC4gUmlzYXJjaW1lbnRvOjwvc3Ryb25nPiBOZWxs4oCZZXZlbnR1YWxpdMOgIGNoZSBs4oCZdXRlbnRlIG5vbiBzaWEgc29kZGlzZmF0dG8gZGVsbGEgcXVhbGl0w6AgZGkgdW4gcXVhbHNpYXNpIHNlcnZpemlvIG8gZGVsIHNlcnZpemlvIGZvcm5pdG8gZGEgdW4gcHJvZmVzc2lvbmlzdGEgZSBkZXNpZGVyaSByaWNoaWVkZXJlIHVuIHJpbWJvcnNvLCB1bmEgcmlkdXppb25lIHByb3Bvcnppb25hbGUgZGVsIHByZXp6byBvIHF1YWxzaWFzaSBhbHRyYSBmb3JtYSBkaSByaXNhcmNpbWVudG8sIMOoIHRlbnV0byBhIGNvbnRhdHRhcmUgZGlyZXR0YW1lbnRlIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgcHJlc2VudGFyZSBpbCBwcm9wcmlvIHJlY2xhbW8gZSwgc2UgZGVsIGNhc28sIGFkIG9zc2VydmFyZSBsZSBwcm9jZWR1cmUgZGkgcmVjbGFtbyBwcmV2aXN0ZSBkYWwgcHJvZmVzc2lvbmlzdGEgc3Rlc3NvLiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIHNpYSBpbiBncmFkbyBkaSBjb250YXR0YXJlIGlsIHByb2Zlc3Npb25pc3RhLCBvIHF1YWxvcmEgaWwgcHJvZmVzc2lvbmlzdGEgcmlmaXV0aSBkaSBvY2N1cGFyc2kgZGVsIHJlY2xhbW8gZGVsbOKAmXV0ZW50ZSwgcXVlc3TigJl1bHRpbW8gcHXDsiByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgY29uIGxlIG1vZGFsaXTDoCBzb3ByYSBkZXNjcml0dGUgZW50cm8gNDggb3JlIGRhbGzigJlpbm9sdHJvIGRlbGwnT3JkaW5lIGUgdW5vIGRlaSBDb25zdWxlbnRpIGRlbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIHRlbnRlcsOgIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSByaWNoaWVkZXJlIHVuIHJpc2FyY2ltZW50byBwZXIgY29udG8gZGVsbOKAmXV0ZW50ZS4gU2kgZmEgcHJlc2VudGUgY2hlIFNUQVJCT09LIG5vbiBoYSBhbGN1biBjb250cm9sbG8gc3VpIHByb2Zlc3Npb25pc3RpIG7DqSBzdWxsYSBxdWFsaXTDoCBkZWkgc2Vydml6aSBvIHN1bCBzZXJ2aXppbyBmb3JuaXRvIGRhaSBwcm9mZXNzaW9uaXN0aSBzdGVzc2kgZSBub24gw6ggaW4gZ3JhZG8gZGkgZm9ybmlyZSwgbsOpIGFzc3VtZSBhbGN1bmEgcmVzcG9uc2FiaWxpdMOgIG8gaW1wZWdubyBkaSBmb3JuaXJlLCBhbGN1biByaXNhcmNpbWVudG8gaW4gZmF2b3JlIGRlbGzigJl1dGVudGUgcGVyIGNvbnRvIGRpIHF1YWxzaWFzaSBwcm9mZXNzaW9uaXN0YS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjYuIExJQ0VOWkEgROKAmVVTTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ni4xLiBVc28gY29uc2VudGl0bzo8L3N0cm9uZz4gReKAmSBjb25zZW50aXRvIGFsbOKAmXV0ZW50ZSB1dGlsaXp6YXJlIGlsIFNpdG8gbm9uY2jDqSBzdGFtcGFyZSBlIHNjYXJpY2FyZSBkYWwgU2l0byBlc3RyYXR0aSBkZWwgU2l0byBzdGVzc28gcGVyIHVzbyBwZXJzb25hbGUgbm9uIGF2ZW50ZSBmaW5hbGl0w6AgY29tbWVyY2lhbGkgYWxsZSBzZWd1ZW50aSBjb25kaXppb25pOjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ni4xLjEuIGzigJl1dGVudGUgbm9uIGRldmUgdXRpbGl6emFyZSBpbCBTaXRvIGluIG1vZG8gaW1wcm9wcmlvLCBpdmkgaW5jbHVzbyBtZWRpYW50ZSB0ZWNuaWNoZSBkaSBwaXJhdGVyaWEgaW5mb3JtYXRpY2EgKGhhY2tpbmcpIG8gZGkgZXN0cmF6aW9uZSBpbmZvcm1hdGl6emF0YSBkaSBkYXRpIChzY3JhcGluZykuPC9zdHJvbmc+IDxicj5cXG4gICAgICAgIDxzdHJvbmc+Ni4xLjIuIFJlc3RyaXppb25pIGTigJl1c286PC9zdHJvbmc+IFNhbHZvIHBlciBxdWFudG8gcHJldmlzdG8gYWwgcGFyYWdyYWZvIDYuMSwgaWwgcHJlc2VudGUgU2l0byBub24gcHXDsiBlc3NlcmUgdXRpbGl6emF0byBlIG5lc3N1bmEgc3VhIHBhcnRlIHB1w7IgZXNzZXJlIHJpcHJvZG90dGEgbyBhcmNoaXZpYXRhIGluIGFsY3VuIGFsdHJvIHNpdG8gd2ViIG7DqSBwdcOyIGVzc2VyZSBpbnNlcml0byBpbiBhbGN1biBzaXN0ZW1hIG8gc2Vydml6aW8sIHB1YmJsaWNvIG8gcHJpdmF0bywgcGVyIGlsIHJlY3VwZXJvIGVsZXR0cm9uaWNvIGRlbGxlIGluZm9ybWF6aW9uaSBzZW56YSBsYSBwcmV2ZW50aXZhIGF1dG9yaXp6YXppb25lIHNjcml0dGEgZGkgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMy4gUmlzZXJ2YSBkaSBEaXJpdHRpOjwvc3Ryb25nPiBJIGRpcml0dGkgbm9uIGVzcGxpY2l0YW1lbnRlIGNvbmNlc3NpIG5lbCBwcmVzZW50ZSBTaXRvIHdlYiBzb25vIHJpc2VydmF0aS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjcuIEFDQ0VTU08gQUwgU0VSVklaSU88L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjcuMS4gRGlzcG9uaWJpbGl0w6AgZGVsIFNpdG86PC9zdHJvbmc+IFNlYmJlbmUgU1RBUkJPT0sgc2kgYWRvcGVyaSBwZXIgZmFyIHPDrCBjaGUgbOKAmWFjY2Vzc28gYWwgU2l0byBwb3NzYSBkaSBub3JtYSBhdnZlbmlyZSB2ZW50aXF1YXR0cm8gb3JlIHN1IHZlbnRpcXVhdHRybyAoMjRoLzI0KSwgU1RBUkJPT0sgbm9uIGFzc3VtZSBhbGN1biBvYmJsaWdvIGEgcmlndWFyZG8gZSBub24gw6ggcmVzcG9uc2FiaWxlIG5laSBjb25mcm9udGkgZGVsbOKAmXV0ZW50ZSBuZWwgY2FzbyBpbiBjdWkgaWwgU2l0bywgaW4gcXVhbHNpYXNpIG1vbWVudG8gbyBwZXIgcGVyaW9kaSBkaSBxdWFsc2lhc2kgZHVyYXRhLCBub24gc2lhIGRpc3BvbmliaWxlLjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ny4xLiBTb3NwZW5zaW9uZSBkZWxs4oCZYWNjZXNzbzo8L3N0cm9uZz4gTOKAmWFjY2Vzc28gYWwgcHJlc2VudGUgU2l0byBwdcOyIGVzc2VyZSB0ZW1wb3JhbmVhbWVudGUgc29zcGVzbyBpbiBxdWFsc2lhc2kgbW9tZW50bywgYW5jaGUgc2VuemEgcHJlYXZ2aXNvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+Ny4yLiBTaWN1cmV6emEgaW5mb3JtYXRpY2E6PC9zdHJvbmc+IFNlYmJlbmUgU1RBUkJPT0sgYWRvdHRpIGxlIG1pc3VyZSBwcmVzY3JpdHRlIHBlciBsZWdnZSBwZXIgbGEgdHV0ZWxhIGRlbGxlIGluZm9ybWF6aW9uaSBpbW1lc3NlLCBlc3NhIG5vbiDDqCBpbiBncmFkbyBkaSBnYXJhbnRpcmUgbGEgc2ljdXJlenphIGRlaSBkYXRpIHRyYXNtZXNzaSBhbCBTaXRvIHdlYjsgbGEgdHJhc21pc3Npb25lIHZpZW5lIHBlcnRhbnRvIGVmZmV0dHVhdGEgYSByaXNjaGlvIGRlbGzigJl1dGVudGUuPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3ByaXZhY3knXFxcIj5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4gSU5GT1JNQVpJT05JIFJBQ0NPTFRFIERBIFNUQVJCT09LPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+MS4xLiBOZWwgdmlzaXRhcmUgaWwgU2l0byBvIG5lbGzigJl1dGlsaXp6YXJlIGlsIFNlcnZpemlvIHBlciBpbm9sdHJhcmUgdW4gT3JkaW5lIGFkIHVuIHByb2Zlc3Npb25pc3RhIHRyYW1pdGUgaWwgU2l0bywgw6ggcG9zc2liaWxlIGNoZSB2ZW5nYSByaWNoaWVzdG8gZGkgZm9ybmlyZSBpbmZvcm1hemlvbmkgY2hlIHJpZ3VhcmRhbm8gbOKAmXV0ZW50ZSwgaXZpIGluY2x1c28gbm9tZSwgcmVjYXBpdGkgKHF1YWxpIG51bWVybyBkaSB0ZWxlZm9ubyBmaXNzbywgZGkgdGVsZWZvbm8gbW9iaWxlIGUgaW5kaXJpenpvIGUtbWFpbCkgZSBkYXRpIHJlbGF0aXZpIGFsIHBhZ2FtZW50byAocXVhbGkgaSBkYXRpIGRlbGxhIGNhcnRhIGRpIGNyZWRpdG8gbyBkaSBkZWJpdG8pLiBTVEFSQk9PSyBwdcOyIGlub2x0cmUgcmFjY29nbGllcmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbOKAmXV0aWxpenpvIGRlbCBTaXRvIGUgZGVsIFNlcnZpemlvIGRhIHBhcnRlIGRlbGzigJl1dGVudGUgbm9uY2jDqSBwdcOyIHJhY2NvZ2xpZXJlIGluZm9ybWF6aW9uaSByZWxhdGl2ZSBhbGzigJl1dGVudGUgYSBwYXJ0aXJlIGRhaSBtYXRlcmlhbGkgKHF1YWxpIG1lc3NhZ2dpIGUgcmVjZW5zaW9uaSkgY2hlIGzigJl1dGVudGUgc3Rlc3NvIHB1YmJsaWNhIHN1bCBTaXRvIG8gdHJhc21ldHRlIGFsIFNpdG8gbyBjaGUgaW52aWEgYSBTVEFSQk9PSyB0cmFtaXRlIGUtbWFpbCBvIHBlciBsZXR0ZXJhLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4gVVNPIERFTExFIElORk9STUFaSU9OSTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjIuMS4gTGUgaW5mb3JtYXppb25pIGRlZ2xpIHV0ZW50aSBjb25zZW50b25vIGEgU1RBUkJPT0sgZGkgZm9ybmlyZSBhZ2xpIHV0ZW50aSBzdGVzc2kgbOKAmWFjY2Vzc28gYWxsZSBzZXppb25pIGRlbCBTaXRvIGN1aSBzb25vIGludGVyZXNzYXRpIGUgZGkgZm9ybmlyZSBpbCBTZXJ2aXppby4gRXNzZSBtZXR0b25vIGlub2x0cmUgU1RBUkJPT0sgaW4gZ3JhZG8gZGkgZmF0dHVyYXJlIGdsaSBpbXBvcnRpIGRvdnV0aSBlIGNvbnNlbnRvbm8gYSBTVEFSQk9PSyBvIGFkIHVuIHByb2Zlc3Npb25pc3RhIGN1aSBs4oCZdXRlbnRlIGFiYmlhIGlub2x0cmF0byB1biBPcmRpbmUgZGkgY29udGF0dGFyZSBs4oCZdXRlbnRlIGluIG1lcml0byBhbCBTZXJ2aXppbywgb3ZlIG5lY2Vzc2FyaW8uIEFkIGVzZW1waW8sIFNUQVJCT09LIGUvbyBpbCBwcm9mZXNzaW9uaXN0YSBwb3Nzb25vIHV0aWxpenphcmUgaSBkYXRpIGRlbGzigJl1dGVudGUgcGVyIGZvcm5pcmUgYWxsbyBzdGVzc28gYWdnaW9ybmFtZW50aSBzdWxsbyBzdGF0byBkZWxsJ09yZGluZSBvIGFsdHJlIGluZm9ybWF6aW9uaSByZWxhdGl2ZSBhbGxhIHN0ZXNzYSBtZWRpYW50ZSBlLW1haWwsIHBlciB0ZWxlZm9ubyBmaXNzbyBvIG1vYmlsZSBvIHRyYW1pdGUgbWVzc2FnZ2lzdGljYSBtb2JpbGUuIElub2x0cmUsIFNUQVJCT09LIHV0aWxpenphIGVkIGFuYWxpenphIGxlIGluZm9ybWF6aW9uaSByYWNjb2x0ZSBhbCBmaW5lIGRpIGdlc3RpcmUsIHNvc3RlbmVyZSwgbWlnbGlvcmFyZSBlIHN2aWx1cHBhcmUgbGEgcHJvcHJpYSBhdHRpdml0w6AgaW1wcmVuZGl0b3JpYWxlLCBwZXIgZXZlbnR1YWxpIGFsdHJlIGZpbmFsaXTDoCBzdGF0aXN0aWNoZSBvIGFuYWxpdGljaGUgbm9uY2jDqSBwZXIgY29udHJpYnVpcmUgYWxsYSBwcmV2ZW56aW9uZSBkaSBmcm9kaS4gTmVpIGNhc2kgaW4gY3VpIHNpYSBvcHBvcnR1bm8sIG9yYSBlIGluIGZ1dHVybywgbOKAmXV0ZW50ZSBwb3RyZWJiZSBhdmVyZSBsYSBjYXBhY2l0w6AgZGkgZXNwcmltZXJlIGxlIHByb3ByaWUgcHJlZmVyZW56ZSByaWd1YXJkbyBhbGzigJl1dGlsaXp6byBkZWkgcHJvcHJpIGRhdGkgc2Vjb25kbyBxdWFudG8gcHJldmlzdG8gbmVsbGEgcHJlc2VudGUgSW5mb3JtYXRpdmEgaW4gbWF0ZXJpYSBkaSBQcml2YWN5IGUgZGkgZXNlcmNpdGFybGEgdHJhbWl0ZSBsYSBtZXRvZG9sb2dpYSBwcmVzY2VsdGEgZGFsbOKAmXV0ZW50ZSBwZXIgbOKAmXV0aWxpenpvIGRlbCBTZXJ2aXppbywgYWQgZXNlbXBpbywgaW4gbW9kYWxpdMOgIG1vYmlsZSwgdHJhbWl0ZSBhcHBsaWNhemlvbmkgbW9iaWxpIG8gbOKAmWV2ZW50dWFsZSByYXBwcmVzZW50YXppb25lIGRlbCBTaXRvLjxicj5cXG4gICAgICAgIDIuMi4gU1RBUkJPT0sgcHXDsiB1dGlsaXp6YXJlIGxlIGluZm9ybWF6aW9uaSBwZXIgY29udGF0dGFyZSBpbCBjbGllbnRlIGFsIGZpbmUgZGkgY29ub3NjZXJlLCBjb24gaWwgc3VvIGNvbnNlbnNvLCBsZSBzdWUgb3Bpbmlvbmkgc3VsIFNlcnZpemlvIGVkIG9jY2FzaW9uYWxtZW50ZSBkaSBpbmZvcm1hcmxvIGRlbGxlIG1vZGlmaWNoZSBvIGRlZ2xpIHN2aWx1cHBpIGltcG9ydGFudGkgY2hlIHJpZ3VhcmRhbm8gaWwgU2l0byBvIGlsIFNlcnZpemlvIHN1ZGRldHRvLjxicj5cXG4gICAgICAgIDIuMy4gU1RBUkJPT0sgcG90csOgIHV0aWxpenphcmUgbOKAmWluZGlyaXp6byBlbWFpbCBmb3JuaXRvIGRhbGzigJl1dGVudGUgZGVsIFNpdG8gYWwgbW9tZW50byBkZWxs4oCZYWNxdWlzdG8gZGkgcHJvZG90dGkgaW4gdmVuZGl0YSBzdWwgU2l0byBwZXIgZmFyIGNvbm9zY2VyZSBhbGxvIHN0ZXNzbyB1dGVudGUgaSBwcm9kb3R0aSBlIHNlcnZpemkgZGkgU1RBUkJPT0ssIHNpbWlsaSBhIHF1ZWxsaSBnacOgIGFjcXVpc3RhdGksIGNoZSBwb3NzYW5vIHJpc2N1b3RlcmUgaWwgc3VvIGludGVyZXNzZS4gTOKAmXV0ZW50ZSBwb3Ryw6AgaW4gb2duaSBtb21lbnRvLCBncmF0dWl0YW1lbnRlIGUgY29uIGVmZmV0dG8gaW1tZWRpYXRvIG9wcG9yc2kgYWxs4oCZdXRpbGl6em8gZGVsIHByb3ByaW8gaW5kaXJpenpvIGVtYWlsIHBlciBsYSByaWNlemlvbmUgZGkgdGFsZSBtYXRlcmlhbGUgaW5mb3JtYXRpdm8gY2xpY2NhbmRvIHN1bGzigJlhcHBvc2l0byBsaW5rIGluc2VyaXRvIGluIGNhbGNlIGEgY2lhc2N1bmEgZW1haWwgcmljZXZ1dGEuIEluIGFsdGVybmF0aXZhLCBs4oCZdXRlbnRlIHBvdHLDoCBvcHBvcnNpIGEgdGFsZSB0cmF0dGFtZW50byBhbmNoZSBtb2RpZmljYW5kbyBsZSBwcmVmZXJlbnplIGRhbGxhIHJlbGF0aXZhIHNlemlvbmUgZGVsIHByb3ByaW8gcHJvZmlsby4gUGVyIGdlc3RpcmUgbGUgbm90aWZpY2hlLCBs4oCZdXRlbnRlIGRvdnLDoCBhY2NlZGVyZSBhbGxhIHBhZ2luYSBkZWxsZSBpbXBvc3RhemlvbmkgZGVsIHN1byB0ZWxlZm9ubyBvIHRhYmxldCBlIG1vZGlmaWNhcmUgbCdhdXRvcml6emF6aW9uZSBhbGxlIG5vdGlmaWNoZSBwZXIgbCdhcHBsaWNhemlvbmUgU1RBUkJPT0suIEluIGNhc28gZGkgZGlzYXR0aXZhemlvbmUgZGVsbGUgbm90aWZpY2hlLCBs4oCZdXRlbnRlIG5vbiBwb3Ryw6AgcGnDuSByaWNldmVyZSBhZ2dpb3JuYW1lbnRpIHN1aSBzdW9pIG9yZGluaSB2aWEgbm90aWZpY2hlLjxicj5cXG4gICAgICAgIDIuNC4gU2UgY29uc2VudGl0byBkYWxs4oCZdXRlbnRlIGRlbCBTaXRvLCBTVEFSQk9PSyBwb3Ryw6AgdXRpbGl6emFyZSBpIGRhdGkgcGVyIGZhciBjb25vc2NlcmUgYWxs4oCZdXRlbnRlIHN1ZGRldHRvIGdsaSBhbHRyaSBwcm9kb3R0aSBlIHNlcnZpemkgZGkgU1RBUkJPT0sgY2hlIHBvc3Nhbm8gcmlzY3VvdGVyZSBpbCBzdW8gaW50ZXJlc3NlLCBpdmkgaW5jbHVzaSBzZXJ2aXppIGNoZSBwb3NzYW5vIGVzc2VyZSBvZ2dldHRvIGRpIGRpcmVjdCBtYXJrZXRpbmcgbWVkaWFudGUgc2lzdGVtaSBkaSBtZXNzYWdnaXN0aWNhIHRyYW1pdGUgY2VsbHVsYXJlIGUgYXR0cmF2ZXJzbyBsZSBub3RpZmljaGUuPGJyPlxcbiAgICAgICAgMi41LiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIGRlc2lkZXJpIHBpw7kgY2hlIGkgc3VvaSBkYXRpIHNpYW5vIHV0aWxpenphdGkgZGEgU1RBUkJPT0sgbmVpIG1vZGkgc29wcmEgaW5kaWNhdGkgbyBjYW1iaSBpZGVhIHJpZ3VhcmRvIGFsbGEgcG9zc2liaWxpdMOgIGRpIGVzc2VyZSBjb250YXR0YXRvIGluIGZ1dHVybywgc2kgcHJlZ2EgZGkgZmFybG8gc2FwZXJlIGEgU1RBUkJPT0sgdXRpbGl6emFuZG8gaSByZWNhcGl0aSBpbmRpY2F0aSBhbCBzdWNjZXNzaXZvIGFydGljb2xvIDggZS9vIG1vZGlmaWNhbmRvIGNvcnJpc3BvbmRlbnRlbWVudGUgaWwgcHJvcHJpbyBwcm9maWxvLjxicj5cXG4gICAgICAgIDIuNi4gUXVhbG9yYSBs4oCZdXRlbnRlIG5vbiBkZXNpZGVyaSBwacO5IGNoZSBpIHN1b2kgZGF0aSBzaWFubyB1dGlsaXp6YXRpIGRhIFNUQVJCT09LIG5laSBtb2RpIHNvcHJhIGluZGljYXRpIG8gY2FtYmkgaWRlYSByaWd1YXJkbyBhbGxhIHBvc3NpYmlsaXTDoCBkaSBlc3NlcmUgY29udGF0dGF0byBpbiBmdXR1cm8sIHNpIHByZWdhIGRpIG9wcG9yc2kgYWwgdHJhdHRhbWVudG8gbmVpIG1vZGkgc3UgaW5kaWNhdGkuIEluIG1hbmNhbnphLCDDqCBwb3NzaWJpbGUgaW5mb3JtYXJlIGluIG9nbmkgbW9tZW50byBmYXJsbyBzYXBlcmUgYSBTVEFSQk9PSyBkZWxsYSBwcm9wcmlhIGRlY2lzaW9uZSwgdXRpbGl6emFuZG8gaSByZWNhcGl0aSBpbmRpY2F0aSBhbCBzdWNjZXNzaXZvIGFydGljb2xvIDggZS9vIG1vZGlmaWNhbmRvIGNvcnJpc3BvbmRlbnRlbWVudGUgaWwgcHJvcHJpbyBwcm9maWxvLjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdoZWxwJ1xcXCI+XFxuICAgICAgICA8cD5IYWkgYmlzb2dubyBkaSBhaXV0bz8gPGJyPlxcbiAgICAgICAgU2NyaXZpIHVuYSBtYWlsIGhhcmFsZC5icmVndUBzdGFyYm9vay5jbyBlIHRpIHJpc3BvbmRlcmVtbyBuZWwgcGnDuSBicmV2ZSB0ZW1wbyBwb3NzaWJpbGUuPC9wPlxcbiAgICAgICAgPHA+VnVvaSBlbnRyYXJlIGEgZmFyIHBhcnRlIGRpIFNUQVJCT09LPyBBdW1lbnRhIGlsIG51bWVybyBkZWkgdHVvaSBjbGllbnRpIHBhZ2FudGkgZSByaXNwYXJtaWEgc3VpIGNvc3RpIGRlbCB0cmFzcG9ydG8uPC9wPlxcbiAgICAgICAgPHA+UGVyIHJpY2hpZWRlcmUgaW5mb3JtYXppb25pOjwvcD5cXG4gICAgICAgIDxwPkNlbGx1bGFyZTogKzM5IDMyNzI0MTUwMjg8YnI+XFxuICAgICAgICBFbWFpbDogaGFyYWxkLmJyZWd1QHN0YXJib29rLmNvPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcblxcblxcbjxkaXYgY2xhc3M9XFxcImRhcmstc2NyZWVuXFxcIiAqbmdJZj1cXFwiYWN0aXZlUG9wdXAgIT09ICcnXFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPjwvZGl2PlxcbjwhLS0gQ2hhbmdlIHBhc3N3b3JkIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiAqbmdJZj1cXFwiYWN0aXZlUG9wdXAgPT09ICdjaGFuZ2VQYXNzd29yZCdcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+Q2FtYmlhIHBhc3N3b3JkPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwibG9naW4tZm9ybVxcXCIgI2NoYW5nZVBhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBjaGFuZ2VQYXNzd29yZEVycm9yLmN1cnJlbnRQYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImN1cnJlbnRQYXNzd29yZFxcXCI+TGEgdHVhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImN1cnJlbnRQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImN1cnJlbnRQYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5jdXJyZW50UGFzc3dvcmRcXFwiICNjdXJyZW50UGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGEgdHVhIHBhc3N3b3JkIGF0dHVhbGUgw6ggcmljaGllc3RhPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwibmV3UGFzc3dvcmRcXFwiPk51b3ZhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcIm5ld1Bhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwibmV3UGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJjaGFuZ2VQYXNzd29yZERhdGEubmV3UGFzc3dvcmRcXFwiICNuZXdQYXNzd29yZD1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGNoYW5nZVBhc3N3b3JkRXJyb3IucGFzc3dvcmRDb25maXJtfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRDb25maXJtXFxcIj5SaXBldGkgbGEgbnVvdmEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJjaGFuZ2VQYXNzd29yZERhdGEucGFzc3dvcmRDb25maXJtXFxcIiAjcGFzc3dvcmRDb25maXJtPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja1Bhc3N3b3JkKG5ld1Bhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkxlIHBhc3N3b3JkIG5vbiBjb3JyaXNwb25kb25vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcIiFjaGFuZ2VQYXNzd29yZEZvcm0uZm9ybS52YWxpZFxcXCIgKGNsaWNrKT1cXFwiY2hhbmdlUGFzc3dvcmQoY3VycmVudFBhc3N3b3JkLnZhbHVlLCBuZXdQYXNzd29yZC52YWx1ZSwgcGFzc3dvcmRDb25maXJtLnZhbHVlKVxcXCI+Q2FtYmlhIHBhc3N3b3JkPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRhcmstc2NyZWVuXFxcIiBbQHNoYWRvd1N0YXRlXT1cXFwic2hhZG93U3RhdGVcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+PC9kaXY+XFxuPCEtLSBMb2dpbiBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bsb2dpblBvcHVwU3RhdGVdPVxcXCJsb2dpblBvcHVwU3RhdGVcXFwiPlxcbiAgPCEtLTxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj4tLT5cXG4gICAgPCEtLTxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+LS0+XFxuICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPi0tPlxcbiAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlNpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlITwvZGl2Pi0tPlxcbiAgICAgIDwhLS08cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG4gIDwhLS08L2Rpdj4tLT5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8cD48c3Bhbj5FcnJvcmUhPC9zcGFuPiB7e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5BY2NlZGk8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJsb2dpbi1mb3JtXFxcIiAjbG9naW5Gb3JtPVxcXCJuZ0Zvcm1cXFwiIChrZXl1cC5lbnRlcik9XFxcImxvZ2luKGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSlcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGxvZ2luRXJyb3IuZW1haWx9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJlbWFpbFxcXCI+SW5kaXJpenpvIGVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkRhdGEuZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgnbG9naW4nLCBlbWFpbC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja0VtYWlsKCdsb2dpbicsIGVtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZCA8YSBjbGFzcz1cXFwicmVjb3ZlcnlcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdyZWNvdmVyeScpXFxcIj5QYXNzd29yZCBkaW1lbnRpY2F0YT88L2E+PC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJsb2dpbkRhdGEucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgnbG9naW4nLCBwYXNzd29yZC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJjaGVja05vbkVtcHR5KCdsb2dpbicsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgbGEgdHVhIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgaHJlZj1cXFwiI1xcXCIgKGNsaWNrKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+QWNjZWRpPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZGVzY3JpcHRpb25cXFwiPi0tPlxcbiAgICAgIDwhLS08c3Bhbj5TZWkgbnVvdm8gc3UgU3RhcmJvb2s/PC9zcGFuPi0tPlxcbiAgICA8IS0tPC9kaXY+LS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ3JlZ2lzdHJhdGlvbicpXFxcIj5DcmVhIGlsIHR1byBhY2NvdW50IFN0YXJib29rPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgPHNwYW4+bzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmFjZWJvb2tcXFwiIChjbGljayk9XFxcImZhY2Vib29rTG9naW4oKVxcXCI+XFxuICAgICAgICA8aT48L2k+XFxuICAgICAgICBDb250aW51YSBjb24gRmFjZWJvb2tcXG4gICAgICA8L2E+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcbjwhLS0gUmVnaXN0cmF0aW9uIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQHJlZ2lzdHJhdGlvblBvcHVwU3RhdGVdPVxcXCJyZWdpc3RyYXRpb25Qb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5OdW92byBhY2NvdW50PC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwicmVnaXN0cmF0aW9uLWZvcm1cXFwiICNyZWdpc3RyYXRpb25Gb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLm5hbWV9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdOYW1lXFxcIj5Ob21lIGNvbXBsZXRvPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ05hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLm5hbWVcXFwiICNyZWdOYW1lPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25OYW1lJywgcmVnTmFtZS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIGlsIG5vbWUgY29tcGxldG88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLnBob25lfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnUGhvbmVcXFwiPkNlbGx1bGFyZTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQaG9uZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLnBob25lXFxcIiAjcmVnUGhvbmU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvblBob25lJywgcmVnUGhvbmUudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSBudW1lcm8gY2VsbHVsYXJlPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5lbWFpbH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ0VtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5lbWFpbFxcXCIgI3JlZ0VtYWlsPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0VtYWlsKCdyZWdpc3RyYXRpb24nLCByZWdFbWFpbC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5kaXJpenpvIGVtYWlsIG5vbiB2YWxpZG88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3R9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGFzc3dvcmRcXFwiICNyZWdQYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uUGFzc3dvcmQnLCByZWdQYXNzd29yZC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIHVuYSBwYXNzd29yZDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmR9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQYXNzd29yZENvbmZpcm1cXFwiPkRpIG51b3ZvIGxhIHBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bhc3N3b3JkQ29uZmlybVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkQ29uZmlybVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGFzc3dvcmRDb25maXJtXFxcIiAjcmVnUGFzc3dvcmRDb25maXJtPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja1Bhc3N3b3JkKHJlZ1Bhc3N3b3JkLnZhbHVlLCByZWdQYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkxlIHBhc3N3b3JkIG5vbiBjb3JyaXNwb25kb25vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInJlZ2lzdHJhdGlvbihyZWdOYW1lLnZhbHVlLCByZWdQaG9uZS52YWx1ZSwgcmVnRW1haWwudmFsdWUsIHJlZ1Bhc3N3b3JkLnZhbHVlLCByZWdQYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5DcmVhIGFjY291bnQ8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLW5vdGljZVxcXCI+QWNjZWRlbmRvIGRpY2hpYXJpIGRpIGF2ZXIgbGV0dG8gZSBhY2NldHRpIGxlIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgcm91dGVyTGluaz1cXFwicHJvZmlsZS9jb25kaXRpb25zXFxcIj5jb25kaXppb25pIGdlbmVyYWxpPC9hPiBlIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgcm91dGVyTGluaz1cXFwicHJvZmlsZS9wcml2YWN5XFxcIj5s4oCZaW5mb3JtYXRpdmEgc3VsbGEgcHJpdmFjeTwvYT48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZGVzY3JpcHRpb25cXFwiPlxcbiAgICA8c3Bhbj5vPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJlZ2lzdHJhdGlvblxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmFjZWJvb2tcXFwiIChjbGljayk9XFxcImdldFBvcHVwKCdyZWdpc3RyYXRpb24nKVxcXCI+XFxuICAgICAgPGk+PC9pPlxcbiAgICAgIENvbnRpbnVhIGNvbiBGYWNlYm9va1xcbiAgICA8L2E+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImxvZ2luLW9mZmVyIHJlZ2lzdHJhdGlvblxcXCI+SGFpIGdpYSB1biBhY2NvdW50IHN1IFN0YXJib29rPyA8YSAoY2xpY2spPVxcXCJnZXRQb3B1cCgnbG9naW4nKVxcXCI+QWNjZWRpPC9hPjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gUmVjb3ZlcnkgcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVjb3ZlcnlQb3B1cFN0YXRlXT1cXFwicmVjb3ZlcnlQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJlY3VwZXJhIHBhc3N3b3JkPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwicmVjb3ZlcnktZm9ybVxcXCIgI3JlY292ZXJ5Rm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWNvdmVyeUVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVjb3ZlcnlFbWFpbFxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVjb3ZlcnlFbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlY292ZXJ5RGF0YS5lbWFpbFxcXCIgI3JlY292ZXJ5RW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlY292ZXJ5JywgcmVjb3ZlcnlFbWFpbC52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5kaXJpenpvIGVtYWlsIG5vbiB2YWxpZG88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVjb3ZlcnkocmVjb3ZlcnlFbWFpbC52YWx1ZSlcXFwiPkludmlhIGVtYWlsPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXJcXFwiPkhhaSBnaWEgdW4gYWNjb3VudCBzdSBTdGFyYm9vaz8gPGEgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ2xvZ2luJylcXFwiPkFjY2VkaTwvYT48L2Rpdj5cXG48L2Rpdj5cXG5cXG48IS0tIENvbmZpcm0gT3JkZXIgcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAY29uZmlybVBvcHVwU3RhdGVdPVxcXCJjb25maXJtUG9wdXBTdGF0ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J25ldy12ZXJzaW9uJzogY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWEnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJyB8fCBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCd9XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWJsb2NrXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7Zm9ybUVycm9yLnRpdGxlfX08L2Rpdj5cXG4gICAgICA8cD57e2Zvcm1FcnJvci5tZXNzYWdlfX08L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJwb3B1cC1zcGlubmVyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWEnXFxcIj5cXG4gICAgPHN2ZyB3aWR0aD0nNDBweCcgaGVpZ2h0PSc0MHB4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgICA8cmVjdCB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzE4MCA1MCA1MDszNjAgNTAgNTA7XFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgZHVyPVxcXCIxc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgIDwvY2lyY2xlPlxcbiAgICA8L3N2Zz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwic3VjY2Vzcy1pY29uXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ1xcXCI+PHNwYW4+PC9zcGFuPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIiBbbmdDbGFzc109XFxcInsnd2l0aG91dC1tZXNzYWdlJzogY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnfVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudGl0bGUgIT09ICcnXFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiY29uZmlybS1vcmRlci1mb3JtXFxcIiAjY29uZmlybU9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHAgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSAhPT0gJ25ld09yZGVyJyAmJiBjb25maXJtUG9wdXBEYXRhLnR5cGUgIT09ICduZXdPcmRlckVuZCdcXFwiIFtuZ0NsYXNzXT1cXFwieydjb25mZXJtYS1maW5pc2gnOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCd9XFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxwICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICduZXdPcmRlckVuZCdcXFwiIGNsYXNzPVxcXCJjb25maXJtLWVuZFxcXCI+e3sgY29uZmlybVBvcHVwRGF0YS50ZXh0IH19PC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlcnMtbGlzdFxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBjb25maXJtUG9wdXBEYXRhLmRhdGFcXFwiPlxcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdzZXJ2aWNlJ1xcXCIgY2xhc3M9XFxcInNlcnZpY2UtaXRlbVxcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3NlcnZpY2UnXFxcIiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IHt7IHByb2R1Y3QuaXRlbU5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdpdGVtJ1xcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fTxpPnt7IHByb2R1Y3QuaXRlbU5hbWUgfX0ge3sgcHJvZHVjdC5zeW1ib2wgfX08L2k+PC9zcGFuPlxcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSdpdGVtJ1xcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fTxpPnt7IHByb2R1Y3QuaXRlbU5hbWUgfX17eyBwcm9kdWN0LnN5bWJvbCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0ndG90YWwnXFxcIiBjbGFzcz1cXFwidG90YWwtaXRlbVxcXCI+e3sgcHJvZHVjdC5wcm9kdWN0TmFtZSB9fSA8aT7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWxpc3RcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICduZXdPcmRlcidcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPkRhdGE6PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRhdGUgfX08L2Rpdj5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPk9yZTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24udGltZSB9fTwvZGl2PiAtLT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIj48c3Bhbj5JbmRpcml6em86PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmFkZHJlc3MgfX08L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1pdGVtXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi5kZXNjcmlwdGlvbiAhPT0gJydcXFwiPjxzcGFuPk5vdGE6PC9zcGFuPiB7eyBjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdDb25mZXJtYSdcXFwiPkNvbmZlcm1hPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNhbmNlbE9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdBbm51bGxhIG9yZGluZSdcXFwiPkFubnVsbGEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihjb25maXJtUG9wdXBEYXRhLmlkKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUmlhdHRpdmEgb3JkaW5lJ1xcXCI+UmlhdHRpdmEgb3JkaW5lPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIG5ldy1vcmRlci1idG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU5ld09yZGVyKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0bydcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IFByb2NlZGkgY29uIGzigJlhY3F1aXN0bzwvYnV0dG9uPlxcbiAgICAgIDxzcGFuICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0bydcXFwiIGNsYXNzPVxcXCJjb25maXJtLWJ1dHRvbi1ub3RpY2VcXFwiPlZlcnJhaSBub3RpZmljYXRvIGNvbiB1biBzbXMgZSBtYWlsIGFkIGFjcXVpc3RvIGVmZmV0dHVhdG88L3NwYW4+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nIGxvZ291dC1idG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwibG9nb3V0KClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ2xvZ291dCdcXFwiPkVzY2k8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ2xvZ291dCdcXFwiPkFubnVsbGE8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiAhPT0gJ2xvZ291dCdcXFwiPkNoaXVkaTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG48IS0tIENvbmZpcm0gT3JkZXIgRmluaXNoIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlXT1cXFwiY29uZmlybUZpbmlzaFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiZmluaXNoLW1lc3NhZ2VcXFwiIFtuZ0NsYXNzXT1cXFwie2lzTGVmdDogY29uZmlybUZpbmlzaFBvcHVwRGF0YS50eXBlID09PSAnbGVmdCd9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57eyBjb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwPnt7IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj5DaGl1ZGk8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48IS0tIEZpbmlzaCBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0BmaW5pc2hQb3B1cFN0YXRlXT1cXFwiZmluaXNoUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmaW5pc2gtbWVzc2FnZVxcXCI+XFxuICAgIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgY2xhc3M9XFxcImNsb3NlLXBvcHVwXFxcIj48L2E+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgZmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwICpuZ0Zvcj1cXFwibGV0IHRleHQgb2YgZmluaXNoUG9wdXBEYXRhLnRleHRcXFwiPnt7IHRleHQgfX08L3A+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG48IS0tIEFkZCBDYXJkIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGFkZENhcmRQb3B1cFN0YXRlXT1cXFwiYWRkQ2FyZFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5NZXRvZG8gZGkgcGFnYW1lbnRvPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiYWRkLWNhcmQtZm9ybVxcXCIgI2FkZENhcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1sb2dvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gdmlzYVxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIG1hc3RlcmNhcmRcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSBhbWV4XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLm51bWJlcn1cXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROdW1iZXJcXFwiPk51bWVybyBjYXJ0YTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiAjYWRkQ2FyZE51bWJlcj1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q2FyZE51bWJlclxcXCI+TnVtZXJvIGNhcnRhPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImVkaXRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiBkaXNhYmxlZD5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLmV4cF9kYXRlfVxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRFeHBEYXRlXFxcIj5TY2FkZW56YTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEV4cERhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZEV4cERhdGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTS9BQVxcXCIgbWF4bGVuZ3RoPVxcXCI1XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuZXhwX2RhdGVcXFwiICNhZGRDYXJkRXhwRGF0ZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+RXhwaXJhdGlvbiBkYXRlIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5jdmN9XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdhZGQnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENWVlxcXCI+Q1ZWPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiICNhZGRDYXJkQ1ZWPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdhZGRDYXJkQ3Z2JywgYWRkQ2FyZENWVi52YWx1ZSlcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q1ZWXFxcIj5DVlY8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJlZGl0Q1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWJoZWFkZXJcXFwiPlxcbiAgICAgIEluZm9ybWF6aW9uaSBmYWNvbHRhdGl2aVxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5hbWVcXFwiPk5vbWUgaW50ZXN0YXRhcmlvPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbWUgQ29nbm9tZVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm5hbWVcXFwiICNhZGRDYXJkTmFtZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkVmlhXFxcIj5WaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkVmlhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkVmlhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMVxcXCIgI2FkZENhcmRBZGRyZXNzMT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROclxcXCI+TnI8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROclxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfbGluZTJcXFwiICNhZGRDYXJkQWRkcmVzczI9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdC1iaWdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENpdHRhXFxcIj5DaXR0w6A8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkQ2l0dGFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDaXR0YVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfY2l0eVxcXCIgI2FkZENhcmRBZGRyZXNzQ2l0eT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRDYXBcXFwiPkNBUDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDYXBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDYXBcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX3ppcFxcXCIgI2FkZENhcmRBZGRyZXNzWmlwPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCI+UHJvdmluY2lhPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGVcXFwiICNhZGRDYXJkQWRkcmVzc1N0YXRlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFBlYXNlXFxcIj5QYWVzZTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRQZWFzZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDb3VudHJ5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPkFnZ2l1bmdpIG1ldG9kbzwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZCgpXFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcblxcbjwhLS0gQ29uZmlybSBwb3B1cCB3aXRoIGFjdGlvbiAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtQWN0aW9uUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnYWRkLXByaWNlJzogY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2UnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImNvbmZpcm0tYWN0aW9uXFxcIiAjY29uZmlybUFjdGlvbk9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHA+XFxuICAgICAge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0IH19XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgIT09ICcnXFxcIj48YnI+IHt7IGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgfX08L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2FkZCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2VcXFwiICNjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2VkaXQnXFxcIj5cXG4gICAgICAgIDxsYWJlbD57eyBhY3Rpb24ubGFiZWwgfX08L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEVkaXRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXltZW50LWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2luZm9ybWF0aW9uJ1xcXCI+XFxuICAgICAgICB7eyBhY3Rpb24uaW5mb3JtYXRpb24gfX1cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgYnV0dG9uIG9mIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2FkZFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiYWRkUHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnZWRpdFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiZWRpdFByaWNlKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2NvbnRpbnVlT3JkZXInXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJjb250aW51ZU9yZGVyKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IHt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2Nsb3NlJ1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIj5cXG4gIDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCI2MFxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgIDwvY2lyY2xlPlxcbiAgPC9zdmc+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1jbGljay1vdXRzaWRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWNsaWNrLW91dHNpZGVcIlxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==