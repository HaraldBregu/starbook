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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(4);
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
    function LandingComponent(homeService, router, route, navigationService, analyticsService, popupsService) {
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
        // console.log('register company');
        this.popupsService.activate({ type: 'registerCompany' });
        this.analyticsService.sendEvent({ category: 'Landing page A/B tests', action: 'press button', label: 'register company' });
    };
    LandingComponent.prototype.callToActionShareToEarn = function () {
        // console.log('share to earn');
        this.analyticsService.sendEvent({ category: 'Landing page A/B tests', action: 'press button', label: 'share to earn' });
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(46)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _f) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e, _f;
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

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Controsoffitto in cartongesso, Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='register_company' || testPage==='share_starbook'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" *ngIf=\"testPage==='register_company'\" (click)=\"callToActionRegisterCompany()\">Registra la tua impresa</button>\n          <button class=\"btn btn-success btn-block\" *ngIf=\"testPage==='share_starbook'\" (click)=\"callToActionShareToEarn()\">Condividi e guadagna</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

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

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <!--<div class=\"alert-block\" *ngIf=\"formError\">-->\n    <!--<div class=\"alert-icn\"></div>-->\n    <!--<div class=\"alert-container\">-->\n      <!--<div class=\"header\">Si è verificato un errore!</div>-->\n      <!--<p>{{formError.message}}</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-container\">\n      <p><span>Errore!</span> {{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <!--<div class=\"form-description\">-->\n      <!--<span>Sei nuovo su Starbook?</span>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n    </div>\n    <div class=\"form-description\">\n      <span>o</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n        <i></i>\n        Continua con Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"form-description\">\n    <span>o</span>\n  </div>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n    <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n      <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n        <label>Numero di telefono</label>\n        <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n      </div>\n      <div class=\"form-group\">\n        <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n      <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n\n\n<!-- A/B Tests -->\n<div class=\"popup\" [@registerCompanyPopupState]=\"registerCompanyPopupState\">\n  <div class=\"header\">This is ab Tests</div>\n</div>\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzc2OGQ2MWRkYzY1NmYwYjVhZDYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1jbGljay1vdXRzaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0Q7QUFHekM7SUFZRTtRQVhRLGtCQUFhLEdBQUcsSUFBSSxxREFBTyxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUkscURBQU8sRUFBTyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUkscURBQU8sRUFBVyxDQUFDO1FBUzdDLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMs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M0JBQW8zQixpQ0FBaUMsNmRBQTZkLDRCQUE0QiwwakhBQTBqSCx3REFBd0QsZ0tBQWdLLGlCQUFpQixtQkFBbUIsbUJBQW1CLDhHQUE4RyxnQ0FBZ0MsK0ZBQStGLCtCQUErQixtRUFBbUUsZ0NBQWdDLHdNQUF3TSxnQkFBZ0IsNFlBQTRZLHNCQUFzQixzSEFBc0gsZ0JBQWdCLDhZQUE4WSxzQkFBc0IseUhBQXlILHNCQUFzQixzUkFBc1IsZUFBZSxtSkFBbUosZUFBZSx3TEFBd0wsZUFBZSxvSEFBb0gsZUFBZSw0Tjs7Ozs7O0FDQXo3ckIsd2dCQUF3Z0IsVUFBVSxVQUFVLGdCQUFnQixJQUFJLDRHOzs7Ozs7QUNBaGpCLG9EOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxvQzs7Ozs7O0FDQUEsK0I7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLHlFOzs7Ozs7QUNBQSxpRSIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NzY4ZDYxZGRjNjU2ZjBiNWFkNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIGhlYWRlck1lc3NhZ2UgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgYXV0aERhdGEgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgYWN0aXZlVGFiID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGxvYWRpbmdTdGF0dXMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG5cbiAgcHVibGljIGdldE1lc3NhZ2UkO1xuICBwdWJsaWMgZ2V0UGVyc29uYWxNZW51JDtcbiAgcHVibGljIGdldEFjdGl2ZVRhYiQ7XG4gIHB1YmxpYyBnZXRMb2FkaW5nU3RhdHVzJDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZ2V0TWVzc2FnZSQgPSB0aGlzLmhlYWRlck1lc3NhZ2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldFBlcnNvbmFsTWVudSQgPSB0aGlzLmF1dGhEYXRhLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRBY3RpdmVUYWIkID0gdGhpcy5hY3RpdmVUYWIuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldExvYWRpbmdTdGF0dXMkID0gdGhpcy5sb2FkaW5nU3RhdHVzLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuaGVhZGVyTWVzc2FnZS5uZXh0KG1lc3NhZ2UpO1xuICB9XG5cbiAgdXBkYXRlUGVyc29uYWxNZW51KGF1dGgpIHtcbiAgICB0aGlzLmF1dGhEYXRhLm5leHQoYXV0aCk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVUYWIodGFiKSB7XG4gICAgdGhpcy5hY3RpdmVUYWIubmV4dCh0YWIpO1xuICB9XG5cbiAgdXBkYXRlTG9hZGluZ1N0YXR1cyhzdGF0dXMpIHtcbiAgICB0aGlzLmxvYWRpbmdTdGF0dXMubmV4dChzdGF0dXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3B1cHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmVQb3B1cCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBwb3B1cFJlc3BvbnNlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwdWJsaWMgZ2V0QWN0aXZlUG9wdXAkO1xuICBwdWJsaWMgZ2V0UG9wdXBSZXNwb25zZSQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlUG9wdXAkID0gdGhpcy5hY3RpdmVQb3B1cC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0UG9wdXBSZXNwb25zZSQgPSB0aGlzLnBvcHVwUmVzcG9uc2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG4gIGFjdGl2YXRlKHBvcHVwKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cC5uZXh0KHBvcHVwKTtcbiAgfVxuICBhY3Rpb25Db21wbGV0ZShkYXRhKSB7XG4gICAgdGhpcy5wb3B1cFJlc3BvbnNlLm5leHQoZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGltaW5nIHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGltaW5nVmFyOiBzdHJpbmc7XG4gIHRpbWluZ1ZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50IHtcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNlbmRUaW1pbmcodGltaW5nRGF0YTogSVRpbWluZykge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAndGltaW5nJywgdGltaW5nRGF0YS5jYXRlZ29yeSwgdGltaW5nRGF0YS50aW1pbmdWYXIsIHRpbWluZ0RhdGEudGltaW5nVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRFdmVudChldmVudDogSUV2ZW50KSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudC5jYXRlZ29yeSwgZXZlbnQuYWN0aW9uLCBldmVudC5sYWJlbCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhvbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZXJ2aWNlc09iamVjdDtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLyosIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKi8pIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHNlbmRTZXJ2aWNlcyhzZXJ2aWNlcykge1xuICAgIHRoaXMuc2VydmljZXNPYmplY3QgPSBzZXJ2aWNlcztcbiAgfVxuICBnZXRTZXJ2aWNlc09iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc09iamVjdDtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICdjYXRlZ29yaWVzJztcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuYXBpICsgcXVlcnlTdHJpbmcpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFNlcnZpY2VzKCkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdmZWF0dXJlZCcpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlcy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlYXJjaD90aXRsZT0nICsgcXVlcnkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U2VydmljZUJ5SWQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ3NlcnZpY2VzLycgKyBpZClcbiAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy5qc29uKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBwcml2YXRlIGF1dGg7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnNGYWNlYm9vayhhY2Nlc3NfdG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoeydhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW59KTtcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGF1dGhJbml0KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGg7XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdsb2dpbicsIHtlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgZW1haWw6IGRhdGEucmVzdWx0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBkYXRhLnJlc3VsdC5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICBhY2NvdW50X3R5cGVzOiBkYXRhLnJlc3VsdC5hY2NvdW50X3R5cGVzLFxuICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5yZXN1bHQucHJvZmlsZSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEucmVzdWx0LmNvbXBhbnksXG4gICAgICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgc2VydmljZXM6IGRhdGEucmVzdWx0LnNlcnZpY2VzLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBkYXRhLnJlc3VsdC5sb2NhdGlvbnMsXG4gICAgICAgICAgICBwYXltZW50OiBkYXRhLnJlc3VsdC5wYXltZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogZGF0YS5yZXN1bHQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGEucmVzdWx0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICB0b2tlbjogZGF0YS50b2tlblxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YS5yZXN1bHQpO1xuICAgICAgICAgIHJldHVybiBhdXRoRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBzaWdudXAobmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdzaWdudXAnLCB7ZnVsbG5hbWU6IG5hbWUsIHBob25lX251bWJlcjogcGhvbmUsIGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGF1dGhEYXRhID0ge1xuICAgICAgICAgICAgX2lkOiBkYXRhLnJlc3VsdC5faWQsXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5yZXN1bHQuZW1haWwsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgICAgICAgICAgYWNjb3VudF90eXBlczogZGF0YS5yZXN1bHQuYWNjb3VudF90eXBlcyxcbiAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgYWRkcmVzczogZGF0YS5yZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgcGF5bWVudDogZGF0YS5yZXN1bHQucGF5bWVudCxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW5cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICByZWNvdmVyeShlbWFpbDogc3RyaW5nKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdwYXNzd29yZF9yZWNvdmVyeScsIHtlbWFpbDogZW1haWx9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoO1xuICB9XG5cbiAgZmFjZWJvb2tMb2dpbihhY2Nlc3NfdG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnZmFjZWJvb2tfbG9naW4nLCB7fSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzRmFjZWJvb2soYWNjZXNzX3Rva2VuKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgYXV0aERhdGEgPSB7XG4gICAgICAgICAgICAgIF9pZDogZGF0YS5yZXN1bHQuX2lkLFxuICAgICAgICAgICAgICBlbWFpbDogZGF0YS5yZXN1bHQuZW1haWwsXG4gICAgICAgICAgICAgIHBob25lX251bWJlcjogZGF0YS5yZXN1bHQucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICBhY2NvdW50X3R5cGVzOiBkYXRhLnJlc3VsdC5hY2NvdW50X3R5cGVzLFxuICAgICAgICAgICAgICBwcm9maWxlOiBkYXRhLnJlc3VsdC5wcm9maWxlLFxuICAgICAgICAgICAgICBjb21wYW55OiBkYXRhLnJlc3VsdC5jb21wYW55LFxuICAgICAgICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgICBzZXJ2aWNlczogZGF0YS5yZXN1bHQuc2VydmljZXMsXG4gICAgICAgICAgICAgIGxvY2F0aW9uczogZGF0YS5yZXN1bHQubG9jYXRpb25zLFxuICAgICAgICAgICAgICBwYXltZW50OiBkYXRhLnJlc3VsdC5wYXltZW50LFxuICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhLnJlc3VsdC5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBkYXRhLnJlc3VsdC51cGRhdGVkX2F0LFxuICAgICAgICAgICAgICB0b2tlbjogZGF0YS50b2tlblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiBhdXRoRGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYWRkUGhvbmUocGhvbmUpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaSArICdtZScsIHtwaG9uZV9udW1iZXI6IHBob25lfSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzKCl9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyICYmIGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgICAgIHVzZXJEYXRhLnBob25lX251bWJlciA9IHBob25lO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJEYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgVVJMU2VhcmNoUGFyYW1zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbi8vIGltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFkZHJlc3Mge1xuICBzdHJlZXQ6IHN0cmluZztcbiAgc3RyZWV0X251bWJlcjogbnVtYmVyO1xuICBjaXR5OiBzdHJpbmc7XG4gIHBvc3RhbF9jb2RlOiBudW1iZXI7XG4gIHByb3ZpbmNlOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgY291bnRyeV9jb2RlOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBpc0Z1bGw6IGJvb2xlYW47XG4gIGZvcm1hdHRlZEFkZHJlc3M6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSB7XG4gIHByaXZhdGUgb3JkZXJFdmVudCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHVibGljIGdldE9yZGVyRXZlbnQkO1xuXG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgcHJpdmF0ZSBnb29nbGVBcGk6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLyosIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlKi8pIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgICB0aGlzLmdvb2dsZUFwaSA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uJztcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuZ2V0T3JkZXJFdmVudCQgPSB0aGlzLm9yZGVyRXZlbnQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbWFrZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5vcmRlckV2ZW50Lm5leHQoZXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHNhdmVPcmRlcihvcmRlckRhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ29yZGVycycsIHtcbiAgICAgIHNlcnZpY2VfaWQ6IG9yZGVyRGF0YS5zZXJ2aWNlX2lkLFxuICAgICAgZGVzY3JpcHRpb246IG9yZGVyRGF0YS5kZWxpdmVyeV9kZXNjcmlwdGlvbixcbiAgICAgIGRldGFpbHM6IG9yZGVyRGF0YS5kZWxpdmVyeV9kZXRhaWxzLFxuICAgICAgZGF0ZTogb3JkZXJEYXRhLmRlbGl2ZXJ5X2RhdGUsXG4gICAgICBhZGRyZXNzOiB7XG4gICAgICAgIHN0cmVldDogb3JkZXJEYXRhLnN0cmVldCxcbiAgICAgICAgc3RyZWV0X251bWJlcjogb3JkZXJEYXRhLnN0cmVldF9udW1iZXIsXG4gICAgICAgIGNpdHk6IG9yZGVyRGF0YS5jaXR5LFxuICAgICAgICBwb3N0YWxfY29kZTogb3JkZXJEYXRhLnBvc3RhbF9jb2RlLFxuICAgICAgICBwcm92aW5jZTogb3JkZXJEYXRhLnByb3ZpbmNlLFxuICAgICAgICBjb3VudHJ5OiBvcmRlckRhdGEuY291bnRyeSxcbiAgICAgICAgY291bnRyeV9jb2RlOiBvcmRlckRhdGEuY291bnRyeV9jb2RlXG4gICAgICB9LFxuICAgICAgcGF5bWVudDoge1xuICAgICAgICBhbW91bnQ6IG9yZGVyRGF0YS5wYXltZW50LmFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IG9yZGVyRGF0YS5wYXltZW50LmN1cnJlbmN5XG4gICAgICB9XG4gICAgfSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRBZGRyZXNzZXMoa2V5OiBzdHJpbmcpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBsZXQgYWRkcmVzc2VzID0gW107XG4gICAgcGFyYW1zLnNldCgnYWRkcmVzcycsIGtleSk7XG4gICAgcGFyYW1zLnNldCgnbGFuZ3VhZ2UnLCAnaXQnKTtcbiAgICBwYXJhbXMuc2V0KCdrZXknLCAnQUl6YVN5Q0xjNWV0RFNycWllQW40bFBDc3ZGRHBrTTMtRjctYzVNJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nb29nbGVBcGksIHtzZWFyY2g6IHBhcmFtc30pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YTogYW55W10gPSByZXNwb25zZS5qc29uKCkucmVzdWx0cztcbiAgICAgICAgZGF0YS5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgICAgbGV0IGFkZHJlc3NEYXRhOiBJQWRkcmVzcyA9IHtcbiAgICAgICAgICAgIHN0cmVldDogJycsXG4gICAgICAgICAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICAgICAgICAgIHByb3ZpbmNlOiAnJyxcbiAgICAgICAgICAgIGNvdW50cnk6ICcnLFxuICAgICAgICAgICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRnVsbDogZmFsc2UsXG4gICAgICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiAnJ1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBhZGRyZXNzLmFkZHJlc3NfY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnRzKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbXBvbmVudHMudHlwZXNbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnc3RyZWV0X251bWJlcic6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuc3RyZWV0X251bWJlciA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdyb3V0ZSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuc3RyZWV0ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2xvY2FsaXR5JzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jaXR5ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMic6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEucHJvdmluY2UgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnY291bnRyeSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY291bnRyeSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNvdW50cnlfY29kZSA9IGNvbXBvbmVudHMuc2hvcnRfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAncG9zdGFsX2NvZGUnOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLnBvc3RhbF9jb2RlID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhZGRyZXNzRGF0YS5mb3JtYXR0ZWRBZGRyZXNzID0gYWRkcmVzcy5mb3JtYXR0ZWRfYWRkcmVzcztcblxuICAgICAgICAgIGlmIChhZGRyZXNzLnR5cGVzWzBdID09PSAnc3RyZWV0X2FkZHJlc3MnKSB7XG4gICAgICAgICAgICBhZGRyZXNzRGF0YS5pc0Z1bGwgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhZGRyZXNzRGF0YS5jb3VudHJ5X2NvZGUgPT09ICdJVCcpIHtcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKGFkZHJlc3NEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWRkcmVzc2VzO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9vcmRlci9vcmRlci5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJzU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBnZXRPcmRlcnMocGFyYW1zKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBwYXJhbXNUb1JlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmZvckVhY2goKHBlcmFtKSA9PiB7XG4gICAgICBwYXJhbXNUb1JlcXVlc3Quc2V0KHBlcmFtLm5hbWUsIHBlcmFtLnZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdvcmRlcnMnLCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKSwgc2VhcmNoOiBwYXJhbXNUb1JlcXVlc3R9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiBbJ0lkcmF1bGljbycsICdFbGV0dHJpY2lzdGEnLCAnRmFiYnJvJywgJ1NwYXp6YWNhbWlubycsICdBbnRlbm5pc3RhJywgJ1B1bGl6aWUnLCAnRWRpbGl6aWEnLCAnR2lhcmRpbmFnZ2lvJywgJ0luZm9ybWF0aWNhJ107XG4gIH1cblxuICBtb2RpZnlPcmRlcihpZCwgdHlwZSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaSArICdvcmRlcnMvJyArIGlkLCB7YWN0aW9uOiB0eXBlfSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzKCl9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgYWRkUHJpY2UoaWQsIHR5cGUsIHByaWNlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGUsIHBheW1lbnQ6IHthbW91bnQ6IHByaWNlLCBjdXJyZW5jeTogXCJldXJcIiB9fSwge2hlYWRlcnM6IHRoaXMuX21ha2VIZWFkZXJzKCl9KVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLnN0YXR1cyB8fCBlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBzdHJpcGVSZXNwb25zZSB7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGRhdGE6IHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VydmljZSB7XG4gIHByaXZhdGUgYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICBwcml2YXRlIGF1dGg7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiB7aGVhZGVyczogaGVhZGVyc307XG4gIH1cblxuICBwdWJsaWMgZ2V0VG9rZW4oY2FyZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLmNyZWF0ZVRva2VuKHtcbiAgICAgICAgbnVtYmVyOiBjYXJkLm51bWJlcixcbiAgICAgICAgZXhwX21vbnRoOiBjYXJkLmV4cF9tb250aCxcbiAgICAgICAgZXhwX3llYXI6IGNhcmQuZXhwX3llYXIsXG4gICAgICAgIGN2YzogY2FyZC5jdmMsXG4gICAgICAgIG5hbWU6IGNhcmQubmFtZSxcbiAgICAgICAgYWRkcmVzc19saW5lMTogY2FyZC5hZGRyZXNzX2xpbmUxLFxuICAgICAgICBhZGRyZXNzX2xpbmUyOiBjYXJkLmFkZHJlc3NfbGluZTIsXG4gICAgICAgIGFkZHJlc3NfY2l0eTogY2FyZC5hZGRyZXNzX2NpdHksXG4gICAgICAgIGFkZHJlc3NfemlwOiBjYXJkLmFkZHJlc3NfemlwLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiBjYXJkLmFkZHJlc3Nfc3RhdGUsXG4gICAgICAgIGFkZHJlc3NfY291bnRyeTogY2FyZC5hZGRyZXNzX2NvdW50cnlcbiAgICAgIH0sIChzdGF0dXM6IG51bWJlciwgcmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBsZXQgc3RyaXBlUmVzcG9uc2U6IHN0cmlwZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuY2FyZFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVzb2x2ZShzdHJpcGVSZXNwb25zZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY2FyZE51bWJlclZhbGlkYXRlKGNhcmROdW1iZXIpIHtcbiAgICByZXR1cm4gKDxhbnk+d2luZG93KS5TdHJpcGUuY2FyZC52YWxpZGF0ZUNhcmROdW1iZXIoY2FyZE51bWJlcik7XG4gIH1cblxuICBwdWJsaWMgYWRkTmV3Q2FyZChjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2tlbihjYXJkRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IHN0cmlwZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2NhcmRzJywge3NvdXJjZTogZGF0YS50b2tlbn0sIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdENhcmQoY2FyZElkKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdtZS9jdXN0b21lcnMnLCB7ZGVmYXVsdF9zb3VyY2U6IGNhcmRJZH0sdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZUNhcmQoY2FyZElkKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpICsgJ21lL2NhcmRzLycgKyBjYXJkSWQsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDYXJkKGNhcmRJZCwgY2FyZERhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2NhcmRzLycgKyBjYXJkSWQsIGNhcmREYXRhLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHN0YXR1cy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaSArICdtZS9jdXN0b21lcnMnLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21BZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18sIERPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlb1NlcnZpY2Uge1xuICBwcml2YXRlIF9kb206IERvbUFkYXB0ZXIgPSBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLmdldERPTSgpO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7IH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICB9XG5cbiAgc2V0TWV0YUVsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ25hbWUnIGluIGF0dHIpIHtcbiAgICAgICAgICBpZiAoYXR0ci5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9kb20ucmVtb3ZlKGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5fZG9tLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKSBhcyBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ25hbWUnLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG5cbiAgc2V0T2dFbGVtKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGxldCBoZWFkVGFncyA9IHRoaXMuX2RvY3VtZW50LmhlYWQuY2hpbGRyZW4gYXMgSFRNTENvbGxlY3Rpb247XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZW0gPSBoZWFkVGFnc1tpXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtLnRhZ05hbWUgPT09ICdtZXRhJykge1xuICAgICAgICBsZXQgYXR0ciA9IGVsZW1bJ2F0dHJpYnMnXTtcbiAgICAgICAgaWYgKCdwcm9wZXJ0eScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLnByb3BlcnR5ID09PSBuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9kb20ucmVtb3ZlKGVsZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5fZG9tLmNyZWF0ZUVsZW1lbnQoJ21ldGEnKSBhcyBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ3Byb3BlcnR5JywgbmFtZSk7XG4gICAgdGhpcy5fZG9tLnNldEF0dHJpYnV0ZShlbCwgJ2NvbnRlbnQnLCB2YWx1ZSk7XG4gICAgdGhpcy5fZG9tLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmhlYWQsIGVsKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvc2VvLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvU3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBBbmd1bGFyTWFzb25yeSwgTWFzb25yeU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1hc29ucnknO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuLi9vcmRlci9vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IE1hc29ucnk6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNhdGVnb3J5TGlzdCB7XG4gIF9pZDogc3RyaW5nO1xuICB0eXBlOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb25fY29kZTogc3RyaW5nO1xuICBpY29uX25hbWU6IHN0cmluZztcbiAgbGFuZzogc3RyaW5nO1xuICBwcm9kdWN0czogSVNlcnZpY2VDYXRlZ29yeVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNhdGVnb3J5IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGl0ZW1zOiBJU2VydmljZVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VGb3JtSXRlbSB7XG4gIGZvcm1JZD86IG51bWJlcjtcbiAgb3B0aW9uSWQ/OiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgaW5wdXRfdHlwZT86IHN0cmluZztcbiAgaW5wdXRfdmFsdWU/OiBhbnk7XG4gIHZhbHVlX3N5bWJvbD86IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIHNlbGVjdGVkPzpib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICB0aXRsZTogc3RyaW5nO1xuICB0aXRsZV8xOiBzdHJpbmc7XG4gIHByaWNlX3R5cGU6IHN0cmluZztcbiAgb3B0aW9uczogSVNlcnZpY2VGb3JtSXRlbVtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZXMge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2VfdXJsOiBzdHJpbmc7XG4gIHByaWNlOiB7XG4gICAgYmFzZV9hbW91bnQ6IG51bWJlcjtcbiAgfSxcbiAgb3JkZXJfb3B0aW9uczoge1xuICAgIG1pbl9hbW91bnQ6IG51bWJlcjtcbiAgICBwYXltZW50X21ldGhvZHM6IHN0cmluZ1tdXG4gIH0sXG4gIGZvcm1zOiBJU2VydmljZUZvcm1bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBiYXNlQW1vdW50ID0ge1xuICAgIHN0YXJ0OiAwLFxuICAgIGNhbGN1bGF0ZWQ6IDBcbiAgfTtcbiAgcHVibGljIGNhbGN1bGF0ZVJlc3VsdHMgPSB7XG4gICAgcXVldWVGaXJzdDogMCxcbiAgICBxdWV1ZVNlY29uZDogMCxcbiAgICBxdWV1ZUVuZDogMFxuICB9O1xuICBwdWJsaWMgb3BlcmFuZHMgPSB7XG4gICAgcXVldWVGaXJzdDogW10sXG4gICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgIHF1ZXVlRW5kOiBbXVxuICB9O1xuICBwdWJsaWMgZmluYWxQcmljZSA9IDA7XG4gIHB1YmxpYyBkZWZhdWx0U2VydmljZXM7XG5cbiAgcHVibGljIHNlcnZpY2VzQ2F0ZWdvcnlMaXN0OiBJU2VydmljZUNhdGVnb3J5TGlzdFtdID0gW107XG4gIHB1YmxpYyBpc1NlcnZpY2VzVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgc2VydmljZXNEYXRhID0gW107XG5cbiAgcHVibGljIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeTogYm9vbGVhbnxzdHJpbmcgPSBmYWxzZTtcbiAgcHVibGljIGFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGU6IGJvb2xlYW58bnVtYmVyID0gZmFsc2U7XG4gIHB1YmxpYyBtb2RlbDogYW55O1xuICBwdWJsaWMgb3JkZXJEYXRhID0ge1xuICAgIHNlcnZpY2VfaWQ6ICcnLFxuICAgIHByaWNlOiB7XG4gICAgICBiYXNlX2Ftb3VudDogMFxuICAgIH0sXG4gICAgb3JkZXJfb3B0aW9uczoge1xuICAgICAgbWluX2Ftb3VudDogMCxcbiAgICAgIHBheW1lbnRfbWV0aG9kczogW11cbiAgICB9LFxuICAgIHNlcnZpY2U6ICcnLFxuICAgIHNlcnZpY2VzOiBbXSxcbiAgICB0b3RhbFByaWNlOiAwXG4gIH07XG4gIHB1YmxpYyBvcmRlcklzRnVsbCA9IGZhbHNlO1xuICBwdWJsaWMgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuICBwdWJsaWMgZGVsdGE6IG51bWJlciA9IC0xNTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgbWFzb25yeTogYW55O1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvLyBAVmlld0NoaWxkKEFuZ3VsYXJNYXNvbnJ5KSBtYXNvbnJ5OiBBbmd1bGFyTWFzb25yeTtcbiAgLy8gQFZpZXdDaGlsZChNYXNvbnJ5TW9kdWxlKSBsYXlvdXQ6IE1hc29ucnlNb2R1bGU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlLCBwcml2YXRlIHNlb1NlcnZpY2U6IFNlb1NlcnZpY2UpIHtcblxuICB9XG5cbiAgcmVuZGVyUGFnZShzZXJ2aWNlczogSVNlcnZpY2VzKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKHNlcnZpY2VzLnRpdGxlKTtcblxuICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZShzZXJ2aWNlcy50aXRsZSk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE1ldGFFbGVtKCdkZXNjcmlwdGlvbicsIHNlcnZpY2VzLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsIHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsIHNlcnZpY2VzLmRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vc2VydmljZXMvJyArIHNlcnZpY2VzLl9pZCk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcblxuICAgIHRoaXMuZGVmYXVsdFNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgdGhpcy5pc1NlcnZpY2VzVmlldyA9IHRydWU7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdjb250ZW50JyxcbiAgICAgICAgaW1hZ2U6IHNlcnZpY2VzLmltYWdlX3VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IHNlcnZpY2VzLmRlc2NyaXB0aW9uLFxuICAgICAgICBvcHRpb25zOiBbXVxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5vcmRlckRhdGEgPSB7XG4gICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlcy5faWQsXG4gICAgICBwcmljZTogc2VydmljZXMucHJpY2UsXG4gICAgICBvcmRlcl9vcHRpb25zOiBzZXJ2aWNlcy5vcmRlcl9vcHRpb25zLFxuICAgICAgc2VydmljZTogc2VydmljZXMudGl0bGUsXG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgICB0b3RhbFByaWNlOiBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudFxuICAgIH07XG4gICAgdGhpcy5iYXNlQW1vdW50LnN0YXJ0ID0gc2VydmljZXMucHJpY2UuYmFzZV9hbW91bnQ7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICBsZXQgZm9ybUlkID0gMTtcbiAgICBzZXJ2aWNlcy5mb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcbiAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICBpZiAoZm9ybS50aXRsZV8xKSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlXzE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZV8xID0gZm9ybS50aXRsZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNlcnZpY2VGb3JtOiBJU2VydmljZUZvcm0gPSB7XG4gICAgICAgIHRpdGxlOiBmb3JtLnRpdGxlLFxuICAgICAgICB0aXRsZV8xIDogdGl0bGVfMSxcbiAgICAgICAgdHlwZTogZm9ybS50eXBlLFxuICAgICAgICByZXF1aXJlZDogZm9ybS5yZXF1aXJlZCxcbiAgICAgICAgcHJpY2VfdHlwZTogZm9ybS5wcmljZV90eXBlLFxuICAgICAgICBvcHRpb25zOiBbXVxuICAgICAgfTtcblxuICAgICAgbGV0IG9wdGlvbklkID0gMDtcbiAgICAgIGZvcm0ub3B0aW9ucy5mb3JFYWNoKChpdGVtOiBJU2VydmljZUZvcm1JdGVtKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICB2YXIgdGl0bGVfMTogc3RyaW5nO1xuICAgICAgICBpZiAoaXRlbS50aXRsZV8xKSB7XG4gICAgICAgICAgdGl0bGVfMSA9IGl0ZW0udGl0bGVfMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb24gPSB7XG4gICAgICAgICAgZm9ybUlkOiBmb3JtSWQsXG4gICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbklkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgIHRpdGxlXzE6IHRpdGxlXzEsXG4gICAgICAgICAgdHlwZTogZm9ybS50eXBlLFxuICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBvcHRpb25bJ2lucHV0X3R5cGUnXSA9IGl0ZW0uaW5wdXRfdHlwZTtcbiAgICAgICAgICBvcHRpb25bJ2lucHV0X3ZhbHVlJ10gPSBpdGVtLmlucHV0X3ZhbHVlO1xuICAgICAgICAgIG9wdGlvblsndmFsdWVfc3ltYm9sJ10gPSBpdGVtLnZhbHVlX3N5bWJvbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnc2VsZWN0ZWQnIGluIGl0ZW0pIHtcbiAgICAgICAgICBvcHRpb25bJ3NlbGVjdGVkJ10gPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZpY2VGb3JtLm9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICBvcHRpb25JZCArKztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEucHVzaChzZXJ2aWNlRm9ybSk7XG4gICAgICBmb3JtSWQgKys7XG4gICAgfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICB9XG5cbiAgdG9nZ2xlU2VydmljZShzZXJ2aWNlTmFtZSwgaXRlbU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS50aXRsZSA9PT0gc2VydmljZU5hbWUpIHtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0udGl0bGUgPT09IGl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgJiYgc2VydmljZS5yZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3JhZGlvYnV0dG9uJ30pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05vdEVtcHR5Rm9ybShpdGVtLmZvcm1JZCwgaXRlbS5vcHRpb25JZCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNEYXRhW3NlcnZpY2VJZF0ub3B0aW9uc1tpdGVtSWRdLnNlbGVjdGVkID0gIWN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNEYXRhW3NlcnZpY2VJZF0ub3B0aW9uc1tpdGVtSWRdLnNlbGVjdGVkID0gIWN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnY2hlY2tib3gnfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3JhZGlvYnV0dG9uJ30pO1xuICAgICAgICAgICAgICAgIHRoaXMudW5jaGVja0FsbEl0ZW1zKHNlcnZpY2VOYW1lKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnY2hlY2tib3gnfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtSWQrKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXJ2aWNlSWQrKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBjaGVja05vdEVtcHR5Rm9ybShmb3JtSWQsIG9wdGlvbklkKTogYm9vbGVhbiB7XG4gICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb24ub3B0aW9uSWQgIT09IG9wdGlvbklkKSB7XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2hhbmdlVmFsdWUoZm9ybUlkLCBvcHRpb25JZCkge1xuICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUpO1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdpbnB1dCd9KTtcblxuICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YVtmb3JtSWRdLm9wdGlvbnNbb3B0aW9uSWRdLmlucHV0X3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICB9XG5cbiAgc2VsZWN0QWxsQ29udGVudCgkZXZlbnQpIHtcbiAgICAkZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICB9XG5cbiAgdW5jaGVja0FsbEl0ZW1zKHNlcnZpY2VOYW1lKSB7XG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgaWYoc2VydmljZS50aXRsZSA9PT0gc2VydmljZU5hbWUpIHtcbiAgICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBpdGVtSWQrKztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXJ2aWNlSWQrKztcbiAgICB9KTtcbiAgfVxuXG4gIHF1ZXVlV29ya2VyKCkge1xuICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LnN0YXJ0O1xuICAgIHRoaXMub3BlcmFuZHMgPSB7XG4gICAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICAgIHF1ZXVlU2Vjb25kOiBbXSxcbiAgICAgIHF1ZXVlRW5kOiBbXVxuICAgIH07XG4gICAgdGhpcy5maW5hbFByaWNlID0gMDtcblxuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGxldCBpdGVtSWQgPSAwO1xuICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCdpbnB1dF90eXBlJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5wdXRfdmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlU2Vjb25kLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcsXG4gICAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICAgIGNudDogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUVuZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQU1PVU5UX1BFUl9JTlBVVCcsXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlOiBzZXJ2aWNlLnR5cGUsXG4gICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LnN0YXJ0ICsgaXRlbS5hbW91bnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVGaXJzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IDAsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUVuZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQU1PVU5UJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IDAsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUlkKys7XG4gICAgICB9KTtcbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICs9IHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVGaXJzdCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCAqIHRhc2suY250O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVTZWNvbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICsgKHRhc2suYW1vdW50ICogdGFzay5jbnQpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICAgIGlmICh0YXNrLnR5cGUgPT09ICdBTU9VTlQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyB0YXNrLmFtb3VudDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVSZXN1bHRzLnF1ZXVlRW5kID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVPcmRlcigpIHtcbiAgICB0aGlzLnF1ZXVlV29ya2VyKCk7XG4gICAgdGhpcy5vcmRlckRhdGEuc2VydmljZXMgPSBbXTtcbiAgICB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoc2VydmljZS50eXBlID09PSAnUkFESU9CVVRUT04nKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdDSEVDS0JPWCcpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0lOUFVUVEVYVCcpIHtcbiAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyAmJiBpdGVtLmlucHV0X3ZhbHVlICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uaW5wdXRfdmFsdWUgKiB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVGaXJzdCxcbiAgICAgICAgICAgICAgICBzeW1ib2w6IGl0ZW0udmFsdWVfc3ltYm9sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJyAmJiBpdGVtLmlucHV0X3ZhbHVlICE9IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBzZXJ2aWNlLnRpdGxlLFxuICAgICAgICAgICAgICBwcmljZV90eXBlOiBzZXJ2aWNlLnByaWNlX3R5cGUsXG4gICAgICAgICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0uYW1vdW50ICogaXRlbS5pbnB1dF92YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUlkKys7XG4gICAgICB9KTtcbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuXG4gICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAgICAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcy5wdXNoKHNlcnZpY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGN1cnJlbnRPcmRlclN0YXRlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yZGVySXNGdWxsID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgICAvLyB0b2dnbGVTZXJ2aWNlKGNhdGVnb3J5TGlzdElkOiBzdHJpbmcsIGNhdGVnb3J5SWQ6IHN0cmluZywgc2VydmljZU5hbWU6IHN0cmluZykge1xuICAgIC8vIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gICAgLy8gdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgICAvLyAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgICAvLyAgIGlmIChjYXRlZ29yeUxpc3QuX2lkID09PSBjYXRlZ29yeUxpc3RJZCkge1xuICAgIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgaWYgKGNhdGVnb3J5RGF0YS5faWQgPT09IGNhdGVnb3J5SWQpIHtcbiAgICAvLyAgICAgICAgIGxldCBzZXJ2aWNlSW5kZXggPSAwO1xuICAgIC8vICAgICAgICAgY2F0ZWdvcnlEYXRhLml0ZW1zLmZvckVhY2goKHNlcnZpY2VEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICAgIGlmIChzZXJ2aWNlRGF0YS5uYW1lID09PSBzZXJ2aWNlTmFtZSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdLnByb2R1Y3RzW2NhdGVnb3J5SW5kZXhdLml0ZW1zW3NlcnZpY2VJbmRleF0uc2VsZWN0ZWQgPSAhc2VydmljZURhdGEuc2VsZWN0ZWQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVPcmRlcigpO1xuICAgIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHNlcnZpY2VJbmRleCsrO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY2F0ZWdvcnlJbmRleCsrO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjYXRlZ29yeUxpc3RJbmRleCsrO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vIH1cblxuICAvLyBjYWxjdWxhdGVPcmRlcigpIHtcbiAgLy8gICB0aGlzLm9yZGVyRGF0YSA9IFtdO1xuICAvLyAgIGxldCBjdXJyZW50T3JkZXJTdGF0ZSA9IFtdO1xuICAvLyAgIGxldCBhcnJheUluZGV4ID0gMDtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0LnByb2R1Y3RzLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgLy8gICAgICAgc2VydmljZS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgLy8gICAgICAgICAgIGlmIChhcnJheUluZGV4IGluIGN1cnJlbnRPcmRlclN0YXRlKSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdLml0ZW1zLnB1c2goeyBuYW1lOiBpdGVtLm5hbWUgfSk7XG4gIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZVthcnJheUluZGV4XSA9IHtcbiAgLy8gICAgICAgICAgICAgICBfaWQ6IHNlcnZpY2UuX2lkLFxuICAvLyAgICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gIC8vICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gIC8vICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWVcbiAgLy8gICAgICAgICAgICAgICB9XVxuICAvLyAgICAgICAgICAgICB9O1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGFycmF5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGN1cnJlbnRPcmRlclN0YXRlLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlLm5hbWUpIHtcbiAgLy8gICAgICAgdGhpcy5vcmRlckRhdGEucHVzaChzZXJ2aWNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyB0YWJOYXZpZ2F0ZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgPSBpZDtcbiAgLy8gICB0aGlzLm9yZGVyRGF0YSA9IFtdO1xuICAvLyAgIHRoaXMuY2xlYXJTZXJ2aWNlRGF0YSgpO1xuICAvLyAgIHRoaXMucmVuZGVyUGFnZShpZCk7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChzZXJ2aWNlQ2F0ZWdvcnlEYXRhKSA9PiB7XG4gIC8vICAgICBpZiAoc2VydmljZUNhdGVnb3J5RGF0YS5faWQgPT09IGlkKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZSA9IHNlcnZpY2VDYXRlZ29yeURhdGEudHlwZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHJlbmRlclBhZ2UoaWQ6IHN0cmluZykge1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoU2VydmljZXNMaXN0OiBJU2VydmljZUNhdGVnb3J5TGlzdCkgPT4ge1xuICAvLyAgICAgaWYgKFNlcnZpY2VzTGlzdC5faWQgPT09IGlkKSB7XG4gIC8vICAgICAgIHRoaXMuc2VydmljZXNEYXRhID0gU2VydmljZXNMaXN0LnByb2R1Y3RzO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmljZXNWaWV3ICE9PSBmYWxzZSAmJiBpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5LWNvbnRhaW5lcicpO1xuICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnNlcnZpY2VzLWJsb2NrJyxcbiAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgb3JpZ2luVG9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtYWtlTWFzb25yeSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZih0aGlzLm1hc29ucnkpIHtcbiAgICAgICAgdGhpcy5tYXNvbnJ5LmxheW91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMucm91dGUudXJsLnN1YnNjcmliZSgodXJsKSA9PiB7XG4gICAgLy8gICBpZiAoMCBpbiB1cmwpIHtcbiAgICAvLyAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlc09iamVjdCgpO1xuICAgIC8vICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAvLyAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdTdGFyYm9vayB8IEFjcXVpc3RhIHNlcnZpemkgcHJvZmVzc2lvbmFsaSBvbmxpbmUnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc2VydmljZUlkID0gcGFyYW1zWydpZCddO1xuICAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlc09iamVjdCgpO1xuICAgICAgaWYgKHNlcnZpY2VJZCkge1xuICAgICAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNlcnZpY2VzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKHNlcnZpY2VzKTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHRoaXMuaG9tZVNlcnZpY2UuZ2V0U2VydmljZUJ5SWQoc2VydmljZUlkKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBzZXJ2aWNlIGJ5IGlkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZShkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXNvbnJ5LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiA0OTAsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLnNlcnZpY2VzLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luVG9wOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vcmRlclNlcnZpY2UuZ2V0T3JkZXJFdmVudCQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5vcmRlckNyZWF0ZWQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5ob21lU2VydmljZS5nZXRDYXRlZ29yaWVzKClcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIHRoaXMucGFyc2VTZXJ2aWNlRGF0YShkYXRhLnJlc3VsdCk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICB9KTtcblxuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRBY3RpdmVUYWIkLnN1YnNjcmliZSh0YWIgPT4ge1xuICAgIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gdGFiO1xuICAgIC8vICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgPSB0YWI7XG4gICAgLy8gfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gcGFyc2VTZXJ2aWNlRGF0YShkYXRhKSB7XG4gIC8vICAgbGV0IGkgPSAwO1xuICAvLyAgIGRhdGEuZm9yRWFjaCgoU2VydmljZXNMaXN0OiBhbnkpID0+IHtcbiAgLy8gICAgIGxldCBQcm9kdWN0cyA9IFtdO1xuICAvLyAgICAgU2VydmljZXNMaXN0LnByb2R1Y3RzLmZvckVhY2goKFNlcnZpY2VzQ2F0ZWdvcnkpID0+IHtcbiAgLy8gICAgICAgbGV0IEl0ZW1zID0gW107XG4gIC8vICAgICAgIFNlcnZpY2VzQ2F0ZWdvcnkuaXRlbXMuZm9yRWFjaCgoQ2F0ZWdvcnlJdGVtKSA9PiB7XG4gIC8vICAgICAgICAgSXRlbXMucHVzaCh7XG4gIC8vICAgICAgICAgICBuYW1lOiBDYXRlZ29yeUl0ZW0gYXMgc3RyaW5nLFxuICAvLyAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBQcm9kdWN0cy5wdXNoKHtcbiAgLy8gICAgICAgICBfaWQ6IFNlcnZpY2VzQ2F0ZWdvcnkuX2lkIGFzIG51bWJlcixcbiAgLy8gICAgICAgICB0aXRsZTogU2VydmljZXNDYXRlZ29yeS50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgaXRlbXM6IEl0ZW1zXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG4gIC8vICAgICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LnB1c2goe1xuICAvLyAgICAgICBfaWQ6IFNlcnZpY2VzTGlzdC5faWQgYXMgc3RyaW5nLFxuICAvLyAgICAgICB0eXBlOiBTZXJ2aWNlc0xpc3QudHlwZSBhcyBudW1iZXIsXG4gIC8vICAgICAgIHRpdGxlOiBTZXJ2aWNlc0xpc3QudGl0bGUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBpY29uX2NvZGU6IFNlcnZpY2VzTGlzdC5pY29uX2NvZGUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBpY29uX25hbWU6IFNlcnZpY2VzTGlzdC5pY29uX25hbWUgYXMgc3RyaW5nLFxuICAvLyAgICAgICBsYW5nOiBTZXJ2aWNlc0xpc3QubGFuZyBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHByb2R1Y3RzOiBQcm9kdWN0c1xuICAvLyAgICAgfSk7XG4gIC8vICAgICBpZiAoaSA9PT0gMCkge1xuICAvLyAgICAgICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IFNlcnZpY2VzTGlzdC5faWQ7XG4gIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShTZXJ2aWNlc0xpc3QuX2lkKTtcbiAgLy8gICAgICAgaSsrO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gY2xlYXJTZXJ2aWNlRGF0YSgpIHtcbiAgLy8gICBsZXQgY2F0ZWdvcnlMaXN0SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBsZXQgY2F0ZWdvcnlJbmRleCA9IDA7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoY2F0ZWdvcnlEYXRhKSA9PiB7XG4gIC8vICAgICAgIGxldCBzZXJ2aWNlSW5kZXggPSAwO1xuICAvLyAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgLy8gICAgICAgICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0W2NhdGVnb3J5TGlzdEluZGV4XVxuICAvLyAgICAgICAgICAgLnByb2R1Y3RzW2NhdGVnb3J5SW5kZXhdXG4gIC8vICAgICAgICAgICAuaXRlbXNbc2VydmljZUluZGV4XVxuICAvLyAgICAgICAgICAgLnNlbGVjdGVkID0gZmFsc2U7XG4gIC8vICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBzd2lwZShhY3Rpb24gPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCwgZGVsdGEpIHtcbiAgLy8gICBpZiAoaXNCcm93c2VyKSB7XG4gIC8vICAgICBsZXQgY2FsY3VsYXRlRGVsdGEgPSB0aGlzLmRlbHRhICsgZGVsdGE7XG4gIC8vICAgICBsZXQgbWVudVNpemUgPSAwO1xuICAvLyAgICAgbGV0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtcGlsbHMgPiBsaScpO1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgbGV0IG1lbnVJdGVtOiBhbnkgPSBhbGxNZW51SXRlbXNbaV07XG4gIC8vICAgICAgIG1lbnVTaXplICs9IG1lbnVJdGVtLm9mZnNldFdpZHRoO1xuICAvLyAgICAgfVxuICAvLyAgICAgbGV0IG1lbnVCbG9ja1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFiLWJhcicpLmNsaWVudFdpZHRoO1xuICAvLyAgICAgbGV0IGFsbG93TWFyZ2luID0gKG1lbnVTaXplICsgNTApIC0gbWVudUJsb2NrV2lkdGg7XG4gIC8vICAgICBpZiAoYWxsb3dNYXJnaW4gPj0gMCkge1xuICAvLyAgICAgICBhbGxvd01hcmdpbiA9IC1hbGxvd01hcmdpbjtcbiAgLy8gICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhID4gMCkge1xuICAvLyAgICAgICAgIHRoaXMuZGVsdGEgPSAtMTU7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhIDwgYWxsb3dNYXJnaW4pIHtcbiAgLy8gICAgICAgICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQgJiYgYWxsb3dNYXJnaW4gIT09IDApIHtcbiAgLy8gICAgICAgICAgICAgdGhpcy5kZWx0YSA9IGFsbG93TWFyZ2luO1xuICAvLyAgICAgICAgICAgfVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICB0aGlzLmRlbHRhID0gY2FsY3VsYXRlRGVsdGE7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgb3JkZXJDcmVhdGVkKGV2ZW50KSB7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZS50aXRsZSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJQYWdlKHRoaXMuZGVmYXVsdFNlcnZpY2VzKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25DYW5jZWwgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVVJMU2VhcmNoUGFyYW1zLCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZmFjZWJvb2snLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZWJvb2suY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUocyA9PiB7XG4gICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHMudXJsLnNwbGl0KCcjJylbMV0pO1xuICAgICAgICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gcGFyYW1zLmdldCgnYWNjZXNzX3Rva2VuJyk7XG4gICAgICAgICAgICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYWNlYm9va190b2tlbicsIGFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYWNlYm9va190b2tlbicsICdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3JkZXIge1xuICBfaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHBheW1lbnQ/OiB7XG4gICAgYW1vdW50PzogbnVtYmVyLFxuICAgIGN1cnJlbmN5Pzogc3RyaW5nXG4gIH0sXG4gIGNhdGVnb3J5X3R5cGU6IG51bWJlcjtcbiAgZGVsaXZlcnlfZGV0YWlsczogc3RyaW5nO1xuICBkZWxpdmVyeV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZWxpdmVyeV9kYXRlOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2FkZHJlc3M6IHtcbiAgICBzdHJlZXQ6IHN0cmluZztcbiAgICBzdHJlZXRfbnVtYmVyOiBzdHJpbmc7XG4gICAgY2l0eTogc3RyaW5nO1xuICAgIHBvc3RhbF9jb2RlOiBzdHJpbmc7XG4gICAgcHJvdmluY2U6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgY291bnRyeV9jb2RlOiBzdHJpbmc7XG4gIH0sXG4gIGN1c3RvbWVyOiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIHBob25lX251bWJlcjogc3RyaW5nO1xuICB9LFxuICBtZXJjaGFudDoge1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgZnVsbG5hbWU6IHN0cmluZztcbiAgICBwaG9uZV9udW1iZXI6IHN0cmluZztcbiAgfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9yZGVycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlcnMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGl0OiBhbnk7XG4gIHB1YmxpYyBzZWxlY3RUYWI6IHN0cmluZ3xib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB0YWdsaW5lcyA9IHtcbiAgICAnUmljaGllc3RlIGRlaSBjbGllbnRpJzogJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScsXG4gICAgJ0kgbWllaSBvcmRpbmknOiAnSSBtaWVpIG9yZGluaScsXG4gICAgJ0FyY2hpdmlvJzogJ0FyY2hpdmlvIGRpIHR1dHRpIGdsaSBvcmRpbmknXG4gIH07XG4gIHB1YmxpYyB0YWJzID0gW1xuICAgIHtuYW1lOiAnSSBtaWVpIG9yZGluaScsIHNlbGVjdGVkOiBmYWxzZX0sXG4gICAge25hbWU6ICdBcmNoaXZpbycsIHNlbGVjdGVkOiBmYWxzZX1cbiAgXTtcbiAgcHVibGljIGNhdGVnb3JpZXMgPSBbXTtcbiAgcHVibGljIHBhZ2VEYXRhOiBJT3JkZXJbXSA9IFtdO1xuICBwdWJsaWMgcmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgcHVibGljIGlzVmVuZG9yID0gZmFsc2U7XG4gIHB1YmxpYyBlbXB0eUxpc3RUaXRsZSA9ICcnXG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGF1dGhEYXRhID0ge307XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICB0aGlzLmF1dGhEYXRhID0gYXV0aERhdGE7XG4gICAgICAgIGF1dGhEYXRhLmFjY291bnRfdHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlID09PSAnVkVORE9SJykge1xuICAgICAgICAgICAgdGhpcy5pc1ZlbmRvciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNWZW5kb3IpIHtcbiAgICAgICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgICAgICB7bmFtZTogJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScsIHNlbGVjdGVkOiBmYWxzZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0kgbWllaSBvcmRpbmknLCBzZWxlY3RlZDogZmFsc2V9LFxuICAgICAgICAgICAge25hbWU6ICdBcmNoaXZpbycsIHNlbGVjdGVkOiBmYWxzZX1cbiAgICAgICAgICBdO1xuICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSgnUmljaGllc3RlIGRlaSBjbGllbnRpJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICB9XG5cblxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMub3JkZXJzU2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBvcHVwc1NlcnZpY2UuZ2V0UG9wdXBSZXNwb25zZSQuc3Vic2NyaWJlKGFjdGlvbiA9PiB7XG4gICAgICAgIGxldCBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1PcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2FuY2VsT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gOTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZWFjdGl2YXRlT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FkZFByaWNlJzpcbiAgICAgICAgICAgIGlmIChhY3Rpb24uZGF0YS5pc01vZGlmaWVkID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UodGhpcy5zZWxlY3RUYWIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMjtcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0ucGF5bWVudCA9IHthbW91bnQ6IGFjdGlvbi5kYXRhLm9yZGVyUHJpY2UsIGN1cnJlbmN5OiAnZXVyJ307XG4gICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLnNwbGljZShvcmRlckluZGV4LDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZWRpdFByaWNlJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDI7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5wYXltZW50LmFtb3VudCA9IGFjdGlvbi5kYXRhLm9yZGVyUHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5wYXltZW50LmN1cnJlbmN5ID0gJ2V1cic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb250aW51ZU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLnNwbGljZShvcmRlckluZGV4LDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaXQgPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIGRheU5hbWVzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICBkYXlOYW1lc1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgZGF5TmFtZXNNaW46IFsnRG8nLCAnTHUnLCAnTWEnLCAnTWUnLCAnR2knLCAnVmUnLCAnU2EnXSxcbiAgICAgIG1vbnRoTmFtZXM6IFsnR2VubmFpbycsICdGZWJicmFpbycsICdNYXJ6bycsICdBcHJpbGUnLCAnTWFnZ2lvJywgJ0dpdWdubycsXG4gICAgICAgICdMdWdsaW8nLCAnQWdvc3RvJywgJ1NldHRlbWJyZScsICdPdHRvYnJlJywgJ05vdmVtYnJlJywgJ0RpY2VtYnJlJ10sXG4gICAgICBtb250aE5hbWVzU2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICAgIH07XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBhZ2UocGFnZSkge1xuICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdFRhYiA9IHBhZ2U7XG4gICAgbGV0IHRhYkluZGV4ID0gMDtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICBpZiAodGFiLm5hbWUgPT09IHBhZ2UpIHtcbiAgICAgICAgdGhpcy50YWJzW3RhYkluZGV4XS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhYnNbdGFiSW5kZXhdLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0YWJJbmRleCsrO1xuICAgIH0pO1xuXG4gICAgbGV0IHBhcmFtcyA9IFtdO1xuXG4gICAgaWYgKHBhZ2UgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gJ05vbiBjaSBzb25vIG9yZGluaSByaWNoaWVzdGkgZGFpIGNsaWVudGkgcGVyIGlsIG1vbWVudG8nXG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICAgIHBhcmFtcy5wdXNoKHtuYW1lOiAnb3JkZXJfdHlwZScsIHZhbHVlOiAnUkVDRUlWRUQnfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhZ2UgPT09ICdJIG1pZWkgb3JkaW5pJykge1xuICAgICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbXB0eUxpc3RUaXRsZSA9ICdOb24gY2kgc29ubyBvcmRpbmkgZWZmZXR0dWF0aSdcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdSRVFVSVJFRCd9KTtcbiAgICB9XG5cbiAgICBpZiAocGFnZSA9PT0gJ0FyY2hpdmlvJykge1xuICAgICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbXB0eUxpc3RUaXRsZSA9IFwiTCdhcmNoaXZpbyBkZWdsaSBvcmRpbmkgZSB2dW90YVwiXG4gICAgICBwYXJhbXMgPSBbXTtcbiAgICAgIHBhcmFtcy5wdXNoKHtuYW1lOiAnb3JkZXJfdHlwZScsIHZhbHVlOiAnQVJDSElWRSd9KTtcbiAgICB9XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5nZXRPcmRlcnMocGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIG9yZGVycycsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VEYXRhID0gcmVzcG9uc2UucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFnZURhdGEgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy50YWdsaW5lc1twYWdlXSk7XG4gICAgfVxuICB9XG5cbiAgZGF0ZUZvcm1hdGluZyhkYXRlKSB7XG4gICAgbGV0IHJldHVybkRhdGUgPSAnJztcbiAgICBpZiAoZGF0ZSAhPT0gJ25vdycpIHtcbiAgICAgIGxldCBkYXRlU3RyaW5nID0gZGF0ZS5zdWJzdHJpbmcoMCwgZGF0ZS5sZW5ndGggLSA1KTtcbiAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLnNwbGl0KCdUJyk7XG4gICAgICBsZXQgZGF0ZUNvbXBvbmVudHMgPSBkYXRlU3RyaW5nWzBdLnNwbGl0KCctJyk7XG4gICAgICBsZXQgaG91ckNvbXBvbmVudHMgPSBkYXRlU3RyaW5nWzFdLnNwbGl0KCc6Jyk7XG4gICAgICByZXR1cm5EYXRlID0gZGF0ZUNvbXBvbmVudHNbMl0gKyAnICcgKyB0aGlzLml0Lm1vbnRoTmFtZXNbZGF0ZUNvbXBvbmVudHNbMV0tMV0gKyAnICcgKyBkYXRlQ29tcG9uZW50c1swXSArICcgJyArIGhvdXJDb21wb25lbnRzWzBdICsgJzonICsgaG91ckNvbXBvbmVudHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IG1vbnRoID0gMSArIGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICBsZXQgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBsZXQgaG91cnMgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpO1xuICAgICAgbGV0IG1pbnV0ZXMgPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICBsZXQgc2Vjb25kcyA9IGN1cnJlbnREYXRlLmdldFNlY29uZHMoKTtcbiAgICAgIHJldHVybkRhdGUgKz0geWVhcjtcbiAgICAgIHJldHVybkRhdGUgKz0gbW9udGggPiA5ID8gJy0nICsgbW9udGggOiAnLTAnICsgbW9udGg7XG4gICAgICByZXR1cm5EYXRlICs9IGRheSA+IDkgPyAnLScgKyBkYXkgOiAnLTAnICsgZGF5O1xuICAgICAgcmV0dXJuRGF0ZSArPSBob3VycyA+IDkgPyAnVCcgKyBob3VycyA6ICdUMCcgKyBob3VycztcbiAgICAgIHJldHVybkRhdGUgKz0gbWludXRlcyA+IDkgPyAnOicgKyBtaW51dGVzIDogJzowJyArIG1pbnV0ZXM7XG4gICAgICByZXR1cm5EYXRlICs9IHNlY29uZHMgPiA5ID8gJzonICsgc2Vjb25kcyAgKyAnLjAwMFonIDogJzowJyArIHNlY29uZHMgKyAnLjAwMFonO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgfVxuXG4gIGRhdGVDb21wYXJlKGRhdGUxLCBkYXRlMikge1xuICAgIGxldCBkYXRlMU9iaiA9IERhdGUucGFyc2UoZGF0ZTEpO1xuICAgIGxldCBkYXRlMk9iaiA9IERhdGUucGFyc2UoZGF0ZTIpO1xuICAgIGlmIChkYXRlMU9iaiA+IGRhdGUyT2JqKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1zRm9ybWF0aW5nKGl0ZW1zKSB7XG4gICAgbGV0IHJldHVyblByb2R1Y3RzID0gW107XG4gICAgbGV0IHByb2R1Y3RzID0gaXRlbXMuc3BsaXQoJ3x8Jyk7XG4gICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgbGV0IHByb2R1Y3RDb21wb25lbnRzID0gcHJvZHVjdC5zcGxpdCgnOicpO1xuICAgICAgaWYgKHByb2R1Y3RDb21wb25lbnRzWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuUHJvZHVjdHMucHVzaCh7bmFtZTogcHJvZHVjdENvbXBvbmVudHNbMF0sIGl0ZW1zOiBwcm9kdWN0Q29tcG9uZW50c1sxXX0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXR1cm5Qcm9kdWN0cztcbiAgfVxuXG4gIGNvbmZpcm1PcmRlcihpZCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1PcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICBjYW5jZWxPcmRlcihpZCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NhbmNlbE9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIHJlYWN0aXZhdGVPcmRlcihpZCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ3JlYWN0aXZhdGVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICBjb21wbGV0YU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnYWRkUHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgZWRpdE9yZGVyKGlkLCBwYXltZW50KSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZWRpdFByaWNlJywgZGF0YToge29yZGVySWQ6IGlkLCBwYXltZW50OiBwYXltZW50fX0pO1xuICB9XG4gIGNvbnRpbnVlT3JkZXIoaWQsIHBheW1lbnQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb250aW51ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkLCBwYXltZW50OiBwYXltZW50LCBpbmZvcm1hdGlvbjogJzEyMOKCrCArIDYuNuKCrCA9IDEyNi424oKsJ319KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VvU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZW8uc2VydmljZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJEYXRhIHtcbiAgZnVsbG5hbWU/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZV9udW1iZXI/OiBzdHJpbmc7XG4gIHN0cmVldD86IHN0cmluZztcbiAgY2l0eT86IHN0cmluZztcbiAgcG9zdGFsX2NvZGU/OiBudW1iZXI7XG4gIHByb3ZpbmNlPzogc3RyaW5nO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBzZWxlY3RUYWI6IHN0cmluZ3xib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG4gIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gMDtcbiAgcHVibGljIHRhYnMgPSBbXG4gICAge25hbWU6ICdHZW5lcmFsaScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnc2V0dGluZ3MnfSxcbiAgICAvLyB7bmFtZTogJ01ldG9kbyBkaSBQYWdhbWVudG8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3BheW1lbnQnfSxcbiAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAge25hbWU6ICdQcml2YWN5IFBvbGljeScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncHJpdmFjeSd9LFxuICAgIHtuYW1lOiAnQXNzaXN0ZW56YScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnaGVscCd9XG4gIF07XG5cbiAgcHVibGljIHVzZXJEYXRhOiBJVXNlckRhdGEgPSB7XG4gICAgZnVsbG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwaG9uZV9udW1iZXI6ICcnLFxuICAgIHN0cmVldDogJycsXG4gICAgY2l0eTogJycsXG4gICAgcG9zdGFsX2NvZGU6IG51bGwsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNvdW50cnk6ICcnXG4gIH07XG5cbiAgcHVibGljIGFjdGl2ZVBvcHVwID0gJyc7XG4gIHB1YmxpYyBjaGFuZ2VQYXNzd29yZEVycm9yID0ge1xuICAgIGN1cnJlbnRQYXNzd29yZDogZmFsc2UsXG4gICAgcGFzc3dvcmRDb25maXJtOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgY2hhbmdlUGFzc3dvcmREYXRhID0ge1xuICAgIGN1cnJlbnRQYXNzd29yZDogJycsXG4gICAgbmV3UGFzc3dvcmQ6ICcnLFxuICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgfTtcbiAgcHVibGljIGZvcm1FcnJvcjogYm9vbGVhbnx7dGl0bGU/OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgdHlwZT86IHN0cmluZ30gPSBmYWxzZTtcbiAgcHVibGljIGNhcmRzID0gW107XG4gIHB1YmxpYyBkZWZhdWx0Q2FyZCA9ICcnO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsXG4gICAgICBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsXG4gICAgICBwcml2YXRlIHNlb1NlcnZpY2U6IFNlb1NlcnZpY2UpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGF1dGhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YS5mdWxsbmFtZSA9IGF1dGhEYXRhLmZ1bGxuYW1lO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLmVtYWlsID0gYXV0aERhdGEuZW1haWw7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICAgICAgICB7bmFtZTogJ1ByaXZhY3kgUG9saWN5Jywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwcml2YWN5J30sXG4gICAgICAgICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgICAgICB7bmFtZTogJ1ByaXZhY3kgUG9saWN5Jywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwcml2YWN5J30sXG4gICAgICAgIHtuYW1lOiAnQXNzaXN0ZW56YScsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnaGVscCd9XG4gICAgICBdO1xuICAgIH1cbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0lsIG1pbyBhY2NvdW50Jyk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0VGFiID0gcGFyYW1zWydwYWdlJ107XG4gICAgICAvKmlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncGF5bWVudCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdNZXRvZG8gZGkgcGFnYW1lbnRvJyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0Q2FyZHMoKVxuICAgICAgICAgICAgLnRoZW4oKGNhcmRzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBjYXJkcycsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkID0gY2FyZHMuZGVmYXVsdF9zb3VyY2U7XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgICAgY2FyZHMuc291cmNlcy5kYXRhLmZvckVhY2goKGNhcmREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmREYXRhKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIFN0YXJib29rIGFjY291bnQgZG8gbm90IGhhdmUgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIFdoZW4geW91IGFkZCBhIG5ldyBjYXJkLCB3aWxsIGJlIGNyZWF0ZWQgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIFN0YXJib29rIGFjY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBpZiAoZXJyb3IuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQnfX0pO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgfSovXG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J3NldHRpbmdzJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0luZm9ybWF6aW9uaSBkZWwgbWlvIGFjY291bnQnKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlKClcbiAgICAgICAgICAgIC50aGVuKChwcm9maWxlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgdXNlciBwcm9maWxlJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuZnVsbG5hbWUgPSBwcm9maWxlLnJlc3VsdC5wcm9maWxlLmZ1bGxuYW1lO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmVtYWlsID0gcHJvZmlsZS5yZXN1bHQuZW1haWw7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucGhvbmVfbnVtYmVyID0gcHJvZmlsZS5yZXN1bHQucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnN0cmVldCA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3Muc3RyZWV0O1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmNpdHkgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGUgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5jb3VudHJ5ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnQW4gZXJyb3IgaGFzIG9jY3VycmVkJ319KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J2NvbmRpdGlvbnMnKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnVGVybWluaSBlIGNvbmRpemlvbmkgZOKAmXV0aWxpenpvJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncHJpdmFjeScpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ1ByaXZhY3kgUG9saWN5Jyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdoZWxwJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgJ0Fzc2lzdGVuemEnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhwYXJhbXNbJ3BhZ2UnXSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbmV3Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25ld0NhcmRFcnJvcic6XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RhcnROZXdDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NhcmRFZGl0ZWQnOlxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNbaV0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlUGVyc29uYWxNZW51KGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9maWxlKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLnVwZGF0ZVByb2ZpbGUodGhpcy51c2VyRGF0YSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1VwZGF0ZSB1c2VyIHByb2ZpbGUnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsZXQgcHJvZmlsZURhdGEgPSB7fTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5wcm9maWxlLmZ1bGxuYW1lID0gdGhpcy51c2VyRGF0YS5mdWxsbmFtZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEucGhvbmVfbnVtYmVyID0gdGhpcy51c2VyRGF0YS5waG9uZV9udW1iZXI7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3Muc3RyZWV0ID0gdGhpcy51c2VyRGF0YS5zdHJlZXQ7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MuY2l0eSA9IHRoaXMudXNlckRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5wb3N0YWxfY29kZSA9IHRoaXMudXNlckRhdGEucG9zdGFsX2NvZGU7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MucHJvdmluY2UgPSB0aGlzLnVzZXJEYXRhLnByb3ZpbmNlO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLmNvdW50cnkgPSB0aGlzLnVzZXJEYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgIHByb2ZpbGVEYXRhID0gYXV0aERhdGE7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShwcm9maWxlRGF0YSk7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiAnSGFpIGFnZ2lvcm5hdG8gbGUgdHVlIGluZm9ybWF6aW9uaSBjb24gc3VjY2Vzc28hJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOiAnRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXJQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLnNlbGVjdFRhYiA9IHBhZ2U7XG4gIH1cblxuICBnZXRQb3B1cCh0eXBlKSB7XG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9IHR5cGU7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkge1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLm5ld1Bhc3N3b3JkID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZERhdGEucGFzc3dvcmRDb25maXJtID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2hlY2tQYXNzd29yZChuZXdQYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4gICAgaWYgKG5ld1Bhc3N3b3JkID09PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm0gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEVycm9yLnBhc3N3b3JkQ29uZmlybSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQsIGRlbHRhKSB7XG4gICAgbGV0IGNhbGN1bGF0ZURlbHRhID0gdGhpcy5kZWx0YSArIGRlbHRhO1xuICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gICAgbGV0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0LW5hdmlnYXRlID4gZGl2ID4gYScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgICAgIG1lbnVTaXplICs9IG1lbnVJdGVtLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1uYXZpZ2F0ZScpLmNsaWVudFdpZHRoO1xuICAgIGxldCBhbGxvd01hcmdpbiA9IChtZW51U2l6ZSkgLSBtZW51QmxvY2tXaWR0aDtcbiAgICBpZiAoYWxsb3dNYXJnaW4gPj0gMCkge1xuICAgICAgYWxsb3dNYXJnaW4gPSAtYWxsb3dNYXJnaW47XG4gICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhIDwgYWxsb3dNYXJnaW4pIHtcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUICYmIGFsbG93TWFyZ2luICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZE5ld0NhcmQoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnYWRkQ2FyZCd9KTtcbiAgfVxuXG4gIGZvcm1hdFllYXIoeWVhcikge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZm9ybWF0ZWRZZWFyID0gJyc7XG4gICAgbGV0IHllYXJBcnJheSA9IHllYXIudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgeWVhckFycmF5LmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgaWYgKGkgPiAxKSB7XG4gICAgICAgIGZvcm1hdGVkWWVhciArPSBudW07XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdGVkWWVhcjtcbiAgfVxuXG4gIGZvcm1hdENzc0NsYXNzKGJyYW5kKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChicmFuZCA9PT0gJ1Zpc2EnKSB7XG4gICAgICByZXN1bHQgPSAndmlzYSc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ0FtZXJpY2FuIEV4cHJlc3MnKSB7XG4gICAgICByZXN1bHQgPSAnYW1leCc7XG4gICAgfVxuICAgIGlmIChicmFuZCA9PT0gJ01hc3RlckNhcmQnKSB7XG4gICAgICByZXN1bHQgPSAnbWFzdGVyY2FyZCc7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzZWxlY3RDYXJkKGlkKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucGF5bWVudFNlcnZpY2Uuc2VsZWN0Q2FyZChpZClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NlbGVjdGluZyBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0Q2FyZCA9IHN0YXR1cy5kZWZhdWx0X3NvdXJjZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wYXltZW50U2VydmljZS5kZWxldGVDYXJkKGlkKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRGVsZXRpbmcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICB0aGlzLmNhcmRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkgKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRDYXJkICYmIHRoaXMuY2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG90aGVyQ2FyZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgICAgIG90aGVyQ2FyZCA9IGNhcmQuaWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RDYXJkKG90aGVyQ2FyZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgIH0pO1xuICB9XG5cbiAgZWRpdENhcmQoaWQpIHtcbiAgICBsZXQgY2FyZERhdGEgPSB7fTtcbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmKGNhcmQuaWQgPT09IGlkKSB7XG4gICAgICAgIGNhcmREYXRhID0ge1xuICAgICAgICAgIGlkOiBjYXJkLmlkLFxuICAgICAgICAgIGFkZHJlc3NfY2l0eTogY2FyZC5hZGRyZXNzX2NpdHksXG4gICAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeSxcbiAgICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgICAgYWRkcmVzc19saW5lMjogY2FyZC5hZGRyZXNzX2xpbmUyLFxuICAgICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgICBhZGRyZXNzX3ppcDogY2FyZC5hZGRyZXNzX3ppcCxcbiAgICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICAgIGV4cF95ZWFyOiB0aGlzLmZvcm1hdFllYXIoY2FyZC5leHBfeWVhciksXG4gICAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICAgIG51bWJlcjogJyoqKiogJyArIGNhcmQubGFzdDQsXG4gICAgICAgICAgY3ZjOiAnKioqJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2VkaXRDYXJkJywgZGF0YTogY2FyZERhdGF9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dvdXQnLCBkYXRhOiB7fX0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy5hcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHVwZGF0ZVByb2ZpbGUodXNlckRhdGEpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBmdWxsbmFtZTogdXNlckRhdGEuZnVsbG5hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXJEYXRhLnBob25lX251bWJlcixcbiAgICAgIHN0cmVldDogdXNlckRhdGEuc3RyZWV0LFxuICAgICAgY2l0eTogdXNlckRhdGEuY2l0eSxcbiAgICAgIHBvc3RhbF9jb2RlOiB1c2VyRGF0YS5wb3N0YWxfY29kZSxcbiAgICAgIHByb3ZpbmNlOiB1c2VyRGF0YS5wcm92aW5jZSxcbiAgICAgIGNvdW50cnk6IHVzZXJEYXRhLmNvdW50cnlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ21lJywgZGF0YSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0UHJvZmlsZSgpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnbWUnLCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL3Byb2ZpbGUuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxuICovXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcbmltcG9ydCAnLi9fX3dvcmthcm91bmQubm9kZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgeyBjcmVhdGVFbmdpbmUgfSBmcm9tICdhbmd1bGFyMi1leHByZXNzLWVuZ2luZSc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9zZXJ2ZXIucm91dGVzJztcblxuLy8gQXBwXG5cbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcbi8vIGNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwIHx8IDgwODA7XG5jb25zdCBwb3J0ID0gNDIwMDsgXG5cbi8qKlxuICogZW5hYmxlIHByb2QgbW9kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAqL1xuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxuLyoqXG4gKiBFeHByZXNzIFZpZXdcbiAqL1xuYXBwLmVuZ2luZSgnLmh0bWwnLCBjcmVhdGVFbmdpbmUoe30pKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XG5cbi8qIFRoZXJlIGFyZSBjb2RlIGZyb20gb2xkIHNlcnZlciAqL1xuLy8gYXBwLnVzZSgnLycsIHJlcXVpcmUoJ3JlZGlyZWN0LWh0dHBzJykoe1xuLy8gICBib2R5OiAnJyxcbi8vICAgcG9ydDogNDQzLFxuLy8gICB0cnVzdFByb3h5OiB0cnVlXG4vLyB9KSlcbi8vXG4vLyBhcHAuYWxsKCcvKicsIGZ1bmN0aW9uKHJlcTogYW55LCByZXM6IGFueSwgbmV4dCkge1xuLy8gICBpZighL153d3dcXC4vLnRlc3QocmVxLmhlYWRlcnMuaG9zdCkpIHtcbi8vICAgICByZXMuc3RhdHVzKDMwMSkucmVkaXJlY3QocmVxLnByb3RvY29sICsgJzovL3d3dy4nICsgcmVxLmhlYWRlcnMuaG9zdCArIHJlcS51cmwpXG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgbmV4dCgpXG4vLyAgIH1cbi8vIH0pXG5cblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuXG4vKiBUaGVyZSBhcmUgY29kZSBmcm9tIG9sZCBzZXJ2ZXIgKGFwcC5qcykgKi9cbmh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xubGV0IG9wdGlvbnMgPSB7XG4gIGtleTogZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvY2VydC9rZXkucGVtJywgJ3V0ZjgnKSxcbiAgY2VydDogZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvY2VydC9zZXJ2ZXIuY3J0JywgJ3V0ZjgnKVxufTtcbi8vIGh0dHBzLmNyZWF0ZVNlcnZlcihvcHRpb25zLCBhcHApLmxpc3Rlbig0NDMsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0IDQ0M2ApO1xuLy8gfSk7XG5cbi8vIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcblxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbn1cblxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIlxuLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXyA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBfX2NvcmVfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5sZXQgcGF0Y2ggPSBmYWxzZTtcbmlmICghX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfX1snVmlld1V0aWxzJ10gPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG59XG5cblxuXG5pZiAoX19jb21waWxlcl9fICYmIF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIgJiYgX19jb21waWxlcl9fLkNzc1NlbGVjdG9yKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbmlmIChwYXRjaCkge1xuICAgIHZhciBfX3VuaXZlcnNhbF9fID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fWyd2aWV3X3V0aWxzJ107XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgfHwgX19jb21waWxlcl9fLkNzc1NlbGVjdG9yO1xuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgfHwgX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcjtcbn1cblxuLy8gRml4IE1hdGVyaWFsIFN1cHBvcnRcbmZ1bmN0aW9uIHVuaXZlcnNhbE1hdGVyaWFsU3VwcG9ydHMoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIEJvb2xlYW4odGhpcy5pc0N1c3RvbUV2ZW50KGV2ZW50TmFtZSkpOyB9XG5fX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fLkhhbW1lckdlc3R1cmVzUGx1Z2luLnByb3RvdHlwZS5zdXBwb3J0cyA9IHVuaXZlcnNhbE1hdGVyaWFsU3VwcG9ydHM7XG4vLyBFbmQgRml4IE1hdGVyaWFsIFN1cHBvcnRcblxuLy8gRml4IFVuaXZlcnNhbCBTdHlsZVxuaW1wb3J0IHsgTm9kZURvbVJvb3RSZW5kZXJlciwgTm9kZURvbVJlbmRlcmVyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsL25vZGUnO1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50Rml4KGNvbXBvbmVudFByb3RvOiBhbnkpIHtcbiAgcmV0dXJuIG5ldyBOb2RlRG9tUmVuZGVyZXIodGhpcywgY29tcG9uZW50UHJvdG8sIHRoaXMuX2FuaW1hdGlvbkRyaXZlcik7XG59XG5Ob2RlRG9tUm9vdFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnRGaXg7XG4vLyBFbmQgRml4IFVuaXZlcnNhbCBTdHlsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fd29ya2Fyb3VuZC5ub2RlLnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25FbmQsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmRlY2xhcmUgbGV0IGdhOiBGdW5jdGlvbjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB0YWdsaW5lOiBzdHJpbmc7XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIHBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgbmF2YmFyU3RhdGUgPSBmYWxzZTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgaXNGaW5kRmllbGQgPSBmYWxzZTtcbiAgcHVibGljIHNwaW5lclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGNsZWFyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgZmluZFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG4gIHB1YmxpYyBpc1NlYXJjaGVkID0gZmFsc2U7XG4gIHB1YmxpYyBicm93c2VyID0gaXNCcm93c2VyO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYXV0aFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyBsb2FkaW5nU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IgKHB1YmxpYyByb3V0ZXI6Um91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhdXRoU2VydmljczogQXV0aFNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgaG9tZVNlcnZpY2U6IEhvbWVTZXJ2aWNlKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShcbiAgICAgICAgKGV2ZW50OkV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy5yb3V0ZS5yb290O1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRSb3V0ZS5jaGlsZHJlblswXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnaXNGaW5kRmllbGQnIGluIGN1cnJlbnRSb3V0ZS5zbmFwc2hvdC5kYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGaW5kRmllbGQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pc0ZpbmRGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TG9naW5Qb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dpbid9KTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG4gIGdldFJlZ2lzdHJhdGlvblBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ3JlZ2lzdHJhdGlvbid9KTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKCcnKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5uYXZiYXJTdGF0ZSA9ICF0aGlzLm5hdmJhclN0YXRlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2Vydmljcy5hdXRoSW5pdCgpO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRNZXNzYWdlJC5zdWJzY3JpYmUobWVzc2FnZSA9PiB7XG4gICAgICAgIHRoaXMudGFnbGluZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZmluZFZhbHVlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1NlYXJjaGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0UGVyc29uYWxNZW51JC5zdWJzY3JpYmUoYXV0aCA9PiB7XG4gICAgICAgIGlmIChhdXRoICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0aGlzLmxvYWRpbmdTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldExvYWRpbmdTdGF0dXMkLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgIC8vICAgdGhpcy5pc0xvYWRpbmcgPSBzdGF0dXM7XG4gICAgLy8gfSk7XG4gIH1cblxuICB1cGRhdGVUYWJNZW51KHRvZ2dsZU1lbnUgPSBmYWxzZSkge1xuICAgIGlmICh0b2dnbGVNZW51KSB7XG4gICAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVBY3RpdmVUYWIoZmFsc2UpO1xuICB9XG5cbiAgc2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5pc1NlYXJjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5lclZpZXcgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZWFyY2goZXZlbnQucXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cy5yZXN1bHQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICB9KVxuICB9XG5cbiAgc2VsZWN0UmVzdWx0KHNlcnZpY2VzT2JqKSB7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZW5kU2VydmljZXMoc2VydmljZXNPYmopO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgdGhpcy5uYXZiYXJTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZmluZFZhbHVlID0gJyc7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXJ2aWNlcycsIHNlcnZpY2VzT2JqLl9pZF0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hGb3JtKCkge1xuICAgIHRoaXMuZmluZFZhbHVlID0gJyc7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAvLyB0aGlzLmxvYWRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcbiAqL1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgSGFtbWVyR2VzdHVyZUNvbmZpZywgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBpbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlLCBpc0Jyb3dzZXIsIE5vZGVIdHRwTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBBdXRvQ29tcGxldGVNb2R1bGUsIENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJ25nMi1jbGljay1vdXRzaWRlJztcbi8vIGltcG9ydCB7IE1hc29ucnlNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tYXNvbnJ5Jztcbi8vIGltcG9ydCB7IE5nYk1vZHVsZSwgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4vb3JkZXIvb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXIvb3JkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cHNDb21wb25lbnQgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBob25lUGlwZSB9IGZyb20gJy4vcGlwZXMvcGhvbmUucGlwZSc7XG5pbXBvcnQgeyBMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGlyeVBpcGUgfSBmcm9tICcuL3BpcGVzL2V4cGlyeS5waXBlJztcbmltcG9ydCB7IExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2Vib29rQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mYWNlYm9vay9mYWNlYm9vay5jb21wb25lbnQnO1xuXG5cbi8vIGltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC9hcHAucm91dGluZyc7XG5cbi8vIGV4cG9ydCBjbGFzcyBIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnICB7XG4vLyAgIG92ZXJyaWRlcyA9IDxhbnk+IHtcbi8vICAgICAnc3dpcGUnOiB7dmVsb2NpdHk6IDAuNCwgdGhyZXNob2xkOiAyMH1cbi8vICAgfTtcbi8vIH1cblxubGV0IGltcG9ydHMgPSBbXG4gIE5vZGVIdHRwTW9kdWxlLFxuICBVbml2ZXJzYWxNb2R1bGUsXG4gIEZvcm1zTW9kdWxlLFxuICAvLyBCcm93c2VyTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAvLyBNYXNvbnJ5TW9kdWxlLFxuXG4gIFJvdXRlck1vZHVsZSxcbiAgcm91dGluZyxcbiAgLy8gTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgLy8gQXV0b0NvbXBsZXRlTW9kdWxlLFxuICAvLyBDYWxlbmRhck1vZHVsZSxcbiAgQ2xpY2tPdXRzaWRlTW9kdWxlXG5dO1xubGV0IGRlY2xhcmF0aW9ucyA9IFtcbiAgQXBwQ29tcG9uZW50LFxuICBIb21lQ29tcG9uZW50LFxuICBPcmRlckNvbXBvbmVudCxcbiAgT3JkZXJzQ29tcG9uZW50LFxuICBQcm9maWxlQ29tcG9uZW50LFxuICBQb3B1cHNDb21wb25lbnQsXG4gIFBob25lUGlwZSxcbiAgTGFuZGluZ0NvbXBvbmVudCxcbiAgRXhwaXJ5UGlwZSxcbiAgTG9hZGluZ0NvbXBvbmVudCxcbiAgRmFjZWJvb2tDb21wb25lbnRcbl07XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgbGV0IENhbGVuZGFyTW9kdWxlID0gcmVxdWlyZSgncHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyJykuQ2FsZW5kYXJNb2R1bGU7XG4gIGltcG9ydHMucHVzaChDYWxlbmRhck1vZHVsZSk7XG4gIGxldCBBdXRvQ29tcGxldGVNb2R1bGUgPSByZXF1aXJlKCdwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZScpLkF1dG9Db21wbGV0ZU1vZHVsZTtcbiAgaW1wb3J0cy5wdXNoKEF1dG9Db21wbGV0ZU1vZHVsZSk7XG59XG5lbHNlIHtcbiAgbGV0IENhbGVuZGFyTW9ja0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vbW9ja3MvY2FsZW5kYXIuY29tcG9uZW50JykuQ2FsZW5kYXJNb2NrQ29tcG9uZW50O1xuICBkZWNsYXJhdGlvbnMucHVzaChDYWxlbmRhck1vY2tDb21wb25lbnQpO1xuICBsZXQgQXV0b0NvbXBsZXRlTW9ja01vZHVsZSA9IHJlcXVpcmUoJy4vbW9ja3MvYXV0b2NvbXBsZXRlLmNvbXBvbmVudCcpLkF1dG9Db21wbGV0ZU1vY2tDb21wb25lbnQ7XG4gIGRlY2xhcmF0aW9ucy5wdXNoKEF1dG9Db21wbGV0ZU1vY2tNb2R1bGUpO1xufVxuXG4vKipcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXG4gKi9cbkBOZ01vZHVsZSh7XG4gIC8qKiBSb290IEFwcCBDb21wb25lbnQgKi9cbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gIGltcG9ydHM6IGltcG9ydHMsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIHtwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogZm9yd2FyZFJlZigoKSA9PiBPcmRlckNvbXBvbmVudCl9LFxuICAgIC8vIHtcbiAgICAvLyAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyxcbiAgICAvLyAgIHVzZUNsYXNzOiBIYW1tZXJDb25maWdcbiAgICAvLyB9LFxuICAgIEhvbWVTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIE9yZGVyU2VydmljZSxcbiAgICBQcm9maWxlU2VydmljZSxcbiAgICBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBPcmRlcnNTZXJ2aWNlLFxuICAgIFBvcHVwc1NlcnZpY2UsXG4gICAgUGF5bWVudFNlcnZpY2UsXG4gICAgQW5hbHl0aWNzU2VydmljZSxcbiAgICBTZW9TZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWNlYm9va0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzZXJ2aWNlcy86aWQnLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7aXNGaW5kRmllbGQ6IHRydWV9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnb3JkZXJzJyxcbiAgICBjb21wb25lbnQ6IE9yZGVyc0NvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3Byb2ZpbGUvOnBhZ2UnLFxuICAgIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJ2ZhY2Vib29rJyxcbiAgICBjb21wb25lbnQ6IEZhY2Vib29rQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLnJvdXRpbmcudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQXV0b0NvbXBsZXRlTW9ja0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWF1dG9Db21wbGV0ZScsXG4gIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIi8+JyxcbiAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZU1vY2tDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgnc3VnZ2VzdGlvbnMnKSBzdWdnZXN0aW9uczogYW55W107XG4gIHByaXZhdGUgaW5uZXJWYWx1ZTogYW55ID0gJyc7XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbW9ja3MvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2FsZW5kYXJNb2NrQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3AtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIvPicsXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vY2tDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgnbG9jYWxlJykgbG9jYWxlOiBhbnk7XG4gIEBJbnB1dCgnbWluRGF0ZScpIG1pbkRhdGU6IGFueTtcbiAgQElucHV0KCdtYXhEYXRlJykgbWF4RGF0ZTogYW55O1xuICBwdWJsaWMgb25TZWxlY3Q6IGFueTtcbiAgcHJpdmF0ZSBpbm5lclZhbHVlOiBhbnkgPSAnJztcblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlLCBJQWRkcmVzcyB9IGZyb20gJy4vb3JkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tIFwiYW5ndWxhcjItdW5pdmVyc2FsXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG9yZGVyRGF0YTtcbiAgQElucHV0KCdvcmRlcklzRnVsbCcpIG9yZGVySXNGdWxsO1xuXG4gIHB1YmxpYyBpdDogYW55O1xuICBwdWJsaWMgdGltZVBpY2tlciA9IFtdO1xuICBwdWJsaWMgbW9udGhzOiB7fTtcbiAgcHVibGljIHRpbWVQaWNrZXJJc1Nob3cgPSBmYWxzZTtcbiAgcHVibGljIGFkZHJlc3NlcyA9IFtdO1xuICBwdWJsaWMgYWRkcmVzcyA9ICcnO1xuICBwdWJsaWMgc2VsZWN0ZWRBZGRyZXNzOiBJQWRkcmVzcyA9IHtcbiAgICBzdHJlZXQ6ICcnLFxuICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgY2l0eTogJycsXG4gICAgcG9zdGFsX2NvZGU6IG51bGwsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNvdW50cnk6ICcnLFxuICAgIGNvdW50cnlfY29kZTogJycsXG4gICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgIGlzRnVsbDogZmFsc2UsXG4gICAgZm9ybWF0dGVkQWRkcmVzczogJydcbiAgfTtcbiAgcHVibGljIGlzQWRkcmVzc09uZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICBwdWJsaWMgaXNBZGRyZXNzRGlydHkgPSBmYWxzZTtcbiAgLy8gcHVibGljIGlzRW5hYmxlID0gdHJ1ZTtcbiAgcHVibGljIE9yZGVyID0ge1xuICAgIHNlcnZpY2VfaWQ6ICcnLFxuICAgIGRlbGl2ZXJ5X2RldGFpbHM6IFtdLFxuICAgIGRlbGl2ZXJ5X2Rlc2NyaXB0aW9uOiAnJyxcbiAgICBhcHBsaWNhbnRfZnVsbG5hbWU6ICdub25lJyxcbiAgICBhcHBsaWNhbnRfZW1haWw6ICdub25lJyxcbiAgICBhcHBsaWNhbnRfcGhvbmU6ICdub25lJyxcbiAgICBkZWxpdmVyeV9hZGRyZXNzOiAnJyxcbiAgICBkYXRlOiBudWxsLFxuICAgIHRpbWU6ICcnLFxuICAgIGRlbGl2ZXJ5X2RhdGU6ICcnLFxuICAgIHN0cmVldDogJycsXG4gICAgc3RyZWV0X251bWJlcjogbnVsbCxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJycsXG4gICAgY291bnRyeV9jb2RlOiAnJyxcbiAgICBmb3JtYXR0ZWRBZGRyZXNzOiAnJyxcbiAgICBwYXltZW50OiB7YW1vdW50OiAwLCBjdXJyZW5jeTogJyd9XG4gIH07XG4gIHB1YmxpYyBtaW5EYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgcHVibGljIG1heERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgyNCoyMSkgKiA2MCAqIDYwICogMTAwMCk7XG4gIHB1YmxpYyBzdWJtaXRPcmRlciA9IGZhbHNlO1xuICBwdWJsaWMgb3JkZXJGb3JtOiBhbnk7XG4gIHB1YmxpYyBpc01vYmlsZUNhbGVuZGFyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIG1heE9yZGVyQmxvY2tTaXplOiBudW1iZXJ8c3RyaW5nID0gJ2F1dG8nO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBicm93c2VyID0gaXNCcm93c2VyO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkge1xuICAgIHRoaXMudGltZVBpY2tlci5wdXNoKCcwODowMCcsICcwODozMCcsICcwOTowMCcsICcwOTozMCcsICcxMDowMCcsICcxMDozMCcsICcxMTowMCcsICcxNDowMCcsICcxNDozMCcsICcxNTowMCcpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIC8vICAgaWYgKGkgPiA3ICYmIGkgPCAxNSkge1xuICAgIC8vICAgICBpZiAoaSA+IDkpIHtcbiAgICAvLyAgICAgICB0aGlzLnRpbWVQaWNrZXIucHVzaChpICsgJzowMCcsIGkgKyAnOjMwJyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy50aW1lUGlja2VyLnB1c2goJzAnICsgaSArICc6MDAnLCAnMCcgKyBpICsgJzozMCcpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMubW9udGhzID0ge1xuICAgICAgMTogJ0dlbm5haW8nLFxuICAgICAgMjogJ0ZlYmJyYWlvJyxcbiAgICAgIDM6ICdNYXJ6bycsXG4gICAgICA0OiAnQXByaWxlJyxcbiAgICAgIDU6ICdNYWdnaW8nLFxuICAgICAgNjogJ0dpdWdubycsXG4gICAgICA3OiAnTHVnbGlvJyxcbiAgICAgIDg6ICdBZ29zdG8nLFxuICAgICAgOTogJ1NldHRlbWJyZScsXG4gICAgICAxMDogJ090dG9icmUnLFxuICAgICAgMTE6ICdOb3ZlbWJyZScsXG4gICAgICAxMjogJ0RpY2VtYnJlJ1xuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coJ3NlcnZpY2VzOiAnICsgdGhpcy5kZWZhdWx0U2VydmljZXMudGl0bGUpO1xuXG4gIH1cblxuICB0b2dnbGVUaW1lcGlja2VyKCkge1xuICAgIHRoaXMudGltZVBpY2tlcklzU2hvdyA9ICF0aGlzLnRpbWVQaWNrZXJJc1Nob3c7XG4gIH1cblxuICBvcGVuVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2VUaW1lcGlja2VyKCkge1xuICAgIHRoaXMudGltZVBpY2tlcklzU2hvdyA9IGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0VGltZSh0aW1lKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCB0aW1lJ30pO1xuICAgIHRoaXMuT3JkZXIudGltZSA9IHRpbWU7XG4gIH1cblxuICBnZXRBZGRyZXNzZXMoZXZlbnQpIHtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMikge1xuICAgICAgdGhpcy5vcmRlclNlcnZpY2UuZ2V0QWRkcmVzc2VzKGV2ZW50LnF1ZXJ5KVxuICAgICAgICAudGhlbigoYWRkcmVzc2VzKSA9PiB7XG4gICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IGFkZHJlc3NlcztcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdEFkZHJlc3ModmFsdWUpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IGFkZHJlc3MnfSk7XG4gICAgaWYgKHZhbHVlLmlzRnVsbCkge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRBZGRyZXNzID0gdmFsdWU7XG4gIH1cblxuICBtb2RpZnlBZGRyZXNzKCkge1xuICAgIHRoaXMuaXNBZGRyZXNzRGlydHkgPSBmYWxzZTtcbiAgICAvLyB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gIH1cblxuICBzaG93Q29uZmlybWF0aW9uKCkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdzdGFydCd9KTtcbiAgICB0aGlzLnN1Ym1pdE9yZGVyID0gdHJ1ZTtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSAnJztcbiAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gJyc7XG4gICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSAnJztcblxuICAgIHRoaXMuT3JkZXIuc3RyZWV0ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0O1xuICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldF9udW1iZXI7XG4gICAgdGhpcy5PcmRlci5jaXR5ID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY2l0eTtcbiAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MucG9zdGFsX2NvZGU7XG4gICAgdGhpcy5PcmRlci5wcm92aW5jZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnByb3ZpbmNlO1xuICAgIHRoaXMuT3JkZXIuY291bnRyeSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNvdW50cnk7XG4gICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jb3VudHJ5X2NvZGU7XG4gICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuZm9ybWF0dGVkQWRkcmVzcztcbiAgICB0aGlzLmFkZHJlc3MgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXQgKyAnLCAnICsgdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0X251bWJlciArICcsICcgKyB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jaXR5O1xuXG4gICAgaWYgKCh0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09ICcnICYmIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09IG51bGwpKSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSB0cnVlO1xuICAgICAgLy8gdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBWZXJzaW9uIHdpdGggcmVxdWVzdGluZyBhZGRyZXNzIGFmdGVyIGNsaWNrICdDcmVhdGUgYW4gb3JkZXInIGJ1dHRvbiAvL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIC8vIHRoaXMub3JkZXJTZXJ2aWNlLmdldEFkZHJlc3Nlcyh0aGlzLmFkZHJlc3MpXG4gICAgLy8gICAgIC50aGVuKChhZGRyZXNzOiBJQWRkcmVzc1tdKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgICBpZiAoYWRkcmVzcy5sZW5ndGggPiAxKSB7XG4gICAgLy8gICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBhZGRyZXNzKSB7XG4gICAgLy8gICAgICAgICAgIHZhciBhZGRyID0gYWRkcmVzc1tpbmRleF07XG4gICAgLy8gICAgICAgICAgIHZhciBjaXR5X3RvX21hdGNoID0gbmV3IFJlZ0V4cChhZGRyLmNpdHksICdpJylcbiAgICAvLyAgICAgICAgICAgdmFyIHN0cmVldF9udW1iZXJfdG9fbWF0Y2ggPSBuZXcgUmVnRXhwKFN0cmluZyhhZGRyLnN0cmVldF9udW1iZXIpLCAnaScpXG4gICAgLy8gICAgICAgICAgIGlmICh0aGlzLmFkZHJlc3MubWF0Y2goY2l0eV90b19tYXRjaCkgJiYgdGhpcy5hZGRyZXNzLm1hdGNoKHN0cmVldF9udW1iZXJfdG9fbWF0Y2gpKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0ID0gYWRkci5zdHJlZXQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gYWRkci5zdHJlZXRfbnVtYmVyO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY2l0eSA9IGFkZHIuY2l0eTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gYWRkci5wb3N0YWxfY29kZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnByb3ZpbmNlID0gYWRkci5wcm92aW5jZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnkgPSBhZGRyLmNvdW50cnk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSBhZGRyLmNvdW50cnlfY29kZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyLnN0cmVldCArICcsICcgKyBhZGRyLnN0cmVldF9udW1iZXIgKyAnLCAnICsgYWRkci5jaXR5O1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgaWYgKCh0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09ICcnICYmIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09IG51bGwpKSB7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKVxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICB9IGVsc2UgaWYgKDAgaW4gYWRkcmVzcykge1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXQgPSBhZGRyZXNzWzBdLnN0cmVldDtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9IGFkZHJlc3NbMF0uc3RyZWV0X251bWJlcjtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuY2l0eSA9IGFkZHJlc3NbMF0uY2l0eTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSBhZGRyZXNzWzBdLnBvc3RhbF9jb2RlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5wcm92aW5jZSA9IGFkZHJlc3NbMF0ucHJvdmluY2U7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnkgPSBhZGRyZXNzWzBdLmNvdW50cnk7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9IGFkZHJlc3NbMF0uY291bnRyeV9jb2RlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gYWRkcmVzc1swXS5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzWzBdLnN0cmVldCArICcsICcgKyBhZGRyZXNzWzBdLnN0cmVldF9udW1iZXIgKyAnLCAnICsgYWRkcmVzc1swXS5jaXR5O1xuICAgIC8vXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzWzBdLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvL1xuICAgIC8vICAgICAgICAgdGhpcy5zaG93UHJldmlld09yZGVyKClcbiAgICAvL1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmV2aWV3T3JkZXIoKSB7XG4gICAgaWYgKHRoaXMuT3JkZXIuZGF0ZSAmJiB0aGlzLm9yZGVySXNGdWxsICYmIHRoaXMuaXNBZGRyZXNzRnVsbCAmJiB0aGlzLm9yZGVyRGF0YS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgPD0gdGhpcy5vcmRlckRhdGEudG90YWxQcmljZSkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLk9yZGVyLmRhdGUpO1xuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpID4gOSA/IGRhdGUuZ2V0RGF0ZSgpIDogJzAnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgb3JkZXJJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgZGF0ZTogZGF5ICsgJyAnICsgdGhpcy5pdC5tb250aE5hbWVzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIHRpbWU6IHRoaXMuT3JkZXIudGltZSxcbiAgICAgICAgYWRkcmVzczogdGhpcy5PcmRlci5zdHJlZXQgKyAnLCAnICsgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICsgJywgJyArIHRoaXMuT3JkZXIuY2l0eSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb25cbiAgICAgIH07XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdsb2dpbkZyb21PcmRlcicsIGRhdGE6IHtvcmRlckRhdGE6IHRoaXMub3JkZXJEYXRhLCBpbmZvcm1hdGlvbjogb3JkZXJJbmZvcm1hdGlvbn19KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlcicsIGRhdGE6IHtvcmRlckRhdGE6IHRoaXMub3JkZXJEYXRhLCBpbmZvcm1hdGlvbjogb3JkZXJJbmZvcm1hdGlvbn19KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVPcmRlcigpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuT3JkZXIuZGF0ZSk7XG4gICAgbGV0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKTtcbiAgICBpZiAodXNlckRhdGEgIT09IG51bGwpIHtcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IGNvcnJlY3RNb250aCA9IDEgKyBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBsZXQgbW9udGggPSBjb3JyZWN0TW9udGggPiA5ID8gY29ycmVjdE1vbnRoIDogJzAnICsgY29ycmVjdE1vbnRoO1xuICAgICAgLy8gdGhpcy5PcmRlci5kZWxpdmVyeV9kYXRlID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkgKyAnVCcgKyB0aGlzLk9yZGVyLnRpbWUgKyAnOjAwLjAwMFonO1xuICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kYXRlID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgbW9udGggKyAnLScgKyBkYXkgKyAnVCcgKyAnMDg6MDAnICsgJzowMC4wMDBaJztcbiAgICAgIHRoaXMuT3JkZXIuc2VydmljZV9pZCA9IHRoaXMub3JkZXJEYXRhLnNlcnZpY2VfaWQ7XG4gICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMgPSBbe1xuICAgICAgICB0aXRsZTogdGhpcy5vcmRlckRhdGEuc2VydmljZSxcbiAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICB0eXBlOiAnc2VydmljZSdcbiAgICAgIH1dO1xuICAgICAgdGhpcy5vcmRlckRhdGEuc2VydmljZXMuZm9yRWFjaCgob3JkZXJDYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAob3JkZXJDYXRlZ29yeS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJykge1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgIC8vIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUgKyAnIC0gJyArIG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzLnB1c2goe1xuICAgICAgICAgICAgLy8gdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSArICcgLSAnICsgb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICBhbW91bnQ6IG9yZGVyQ2F0ZWdvcnkub3B0aW9uLnByaWNlLFxuICAgICAgICAgICAgdHlwZTogJ2l0ZW0nXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5PcmRlci5wYXltZW50ID0ge1xuICAgICAgICBhbW91bnQ6IHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UsXG4gICAgICAgIGN1cnJlbmN5OiAnZXVyJ1xuICAgICAgfTtcblxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5zYXZlT3JkZXIodGhpcy5PcmRlcilcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdmaW5pc2gnfSk7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2F2aW5nIG9yZGVyJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuXG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzID0gW107XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5PcmRlci50aW1lID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kYXRlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG4gICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5hZGRyZXNzID0gJyc7XG4gICAgICAgICAgdGhpcy5zdWJtaXRPcmRlciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlckVuZCd9KTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVyU2VydmljZS5tYWtlRXZlbnQoe3N0YXR1czogdHJ1ZX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdzZW5kIGZvcm0nLCBsYWJlbDogJ2Vycm9yJ30pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlcnJvciBvciBub3Q6ICcrIGVycm9yKTtcbiAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDIpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiAnUGVyIGZhdm9yZSwgaW5zZXJpc2NpIHVuIG1ldG9kbyBkaSBwYWdhbWVudG8gcHJpbWEgZGkgcHJlbm90YXJlIHVuIHNlcnZpemlvJ319KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0lsIHNlcnZpemlvIHJpY2hpZXN0byBub24gw6ggYW5jb3JhIGRpc3BvbmliaWxlIGluIHF1ZXN0YSB6b25hLiBQZXIgZmF2b3JlIGNvbnRhdHRhY2kgbmVsbGEgc2V6aW9uZSBhc3Npc3RlbnphIGRpIFN0YXJib29rIHBlciByaWNoaWVkZXJlIGlsIHN1cHBvcnRvIG5lbGxhIHpvbmEgZGVzaWRlcmF0YS4nfX0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAgZWxzZSB7XG4gICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogXCJDJ8OoIHN0YXRvIHVuIGVycm9yZSByaWd1YXJkbyBhbGxhIHJpY2hpZXN0YSBkZWwgb3JkaW5lLCByaWNhcmljYSBsYSBwYWdpbmEgZSByaXByb3ZhIGRpIG51b3ZvLlwifX0pO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW4nfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cHNTZXJ2aWNlLmdldFBvcHVwUmVzcG9uc2UkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdjb25maXJtJykge1xuICAgICAgICAgIHRoaXMuY3JlYXRlT3JkZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGggPiA0ODApIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWF4T3JkZXJCbG9ja1NpemUgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDQ1MCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzTW9iaWxlQ2FsZW5kYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RGF0ZSgpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAnc2VsZWN0IGRhdGUnfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4uLy4uL2hvbWUvaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuXG5kZWNsYXJlIGxldCBTd2lwZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxhbmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjYXJkU3R5bGVzID0gezE6ICcwLjk1JywgMjogJzAuOTUnLCAzOiAnMC45J307XG4gIHB1YmxpYyBxdWVyeTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgc2VydmljZXMgPSBbXTtcbiAgcHVibGljIHNwaW5lclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGNsZWFyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzd2lwZXI6IGFueTtcbiAgcHVibGljIHRlc3RQYWdlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgcG9wdXBzU2VydmljZTogUG9wdXBzU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBUTyBVU0UgRk9SIEEvQiBURVNUSU5HXG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnRlc3RQYWdlID0gcGFyYW1zWydwYWdlJ11cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdQYXJhbWV0ZXJzOiAnICsgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRlc3RQYWdlKTtcbiAgICB9KTtcblxuICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnVW5hIGNpdHTDoCBzbWFydCBoYSBiaXNvZ25vIGRpIHNlcnZpemkgc21hcnQnKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlcygpXG4gICAgICAgIC50aGVuKChzZXJ2aWNlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcy5yZXN1bHQ7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IGxpc3Qgb2YgZmVhdHVyZWQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bydcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gIH1cbiAgY2FyZEhvdmVyKGlkLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdvbicpIHtcbiAgICAgIHRoaXMuY2FyZFN0eWxlc1tpZF0gPSAnMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpZCA9PT0gMykge1xuICAgICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzAuOSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzAuOTUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaChldmVudCkge1xuICAgIHRoaXMuc3BpbmVyVmlldyA9IHRydWU7XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlYXJjaChldmVudC5xdWVyeSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdTZWFyY2gnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cy5yZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNwaW5lclZpZXcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZXZlbnQucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICAgICAgfSlcbiAgfVxuXG4gIHNlbGVjdFJlc3VsdChzZXJ2aWNlc09iaikge1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VuZFNlcnZpY2VzKHNlcnZpY2VzT2JqKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NlcnZpY2VzJywgc2VydmljZXNPYmoudGl0bGVdKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gJyc7XG4gICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgdGhpcy5jbGVhclZpZXcgPSBmYWxzZTtcbiAgfVxuXG4gIGNhbGxUb0FjdGlvblJlZ2lzdGVyQ29tcGFueSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVnaXN0ZXIgY29tcGFueScpO1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ3JlZ2lzdGVyQ29tcGFueSd9KTtcblxuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidMYW5kaW5nIHBhZ2UgQS9CIHRlc3RzJywgYWN0aW9uOiAncHJlc3MgYnV0dG9uJywgbGFiZWw6ICdyZWdpc3RlciBjb21wYW55J30pO1xuICB9XG5cbiAgY2FsbFRvQWN0aW9uU2hhcmVUb0Vhcm4oKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NoYXJlIHRvIGVhcm4nKTtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonTGFuZGluZyBwYWdlIEEvQiB0ZXN0cycsIGFjdGlvbjogJ3ByZXNzIGJ1dHRvbicsIGxhYmVsOiAnc2hhcmUgdG8gZWFybid9KTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2V4cGlyeSdcbn0pXG5leHBvcnQgY2xhc3MgRXhwaXJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IGRhdGVFbGVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIGlmIChlbGVtID09PSAnLycpIHtcbiAgICAgICAgICBkYXRlRWxlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRlRWxlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgIHJlc3VsdCArPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3Bob25lJ1xufSlcbmV4cG9ydCBjbGFzcyBQaG9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgcGhvbmUgPSAnJztcbiAgICAgIGxldCBudW1JbmRleCA9IDA7XG4gICAgICBsZXQgcGhvbmVOdW1zID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgcGhvbmVOdW1zLmZvckVhY2goKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtSW5kZXggPT09IDIgfHwgbnVtSW5kZXggPT09IDQgfHwgbnVtSW5kZXggPT09IDYpIHtcbiAgICAgICAgICBwaG9uZSArPSBudW0gKyAnICc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGhvbmUgKz0gbnVtO1xuICAgICAgICB9XG4gICAgICAgIG51bUluZGV4Kys7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwaG9uZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGlwZXMvcGhvbmUucGlwZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIGtleWZyYW1lcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gICBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wb3B1cHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wdXBzLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2FkZENhcmRQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdsb2dpblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JlZ2lzdHJhdGlvblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3JlY292ZXJ5UG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignZmluaXNoUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybVBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzUwcHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1GaW5pc2hQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtQWN0aW9uUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNTBweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzUwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG5cbiAgICAvLyBBL0IgVGVzdHNcbiAgICB0cmlnZ2VyKCdyZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc1MHB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc1MHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNTBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcblxuICAgIHRyaWdnZXIoJ3NoYWRvd1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGFkZENhcmRQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGxvZ2luUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyByZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIHJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBmaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcblxuICAvLyBBL0IgVGVzdHNcbiAgcHVibGljIHJlZ2lzdGVyQ29tcGFueVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuXG4gIHB1YmxpYyBzaGFkb3dTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBlbWFpbFBhdHRlcm47XG4gIHB1YmxpYyBhdXRoO1xuICBwdWJsaWMgYWRkQ2FyZERhdGEgPSB7XG4gICAgb2JqZWN0OiAnY2FyZCcsXG4gICAgZXhwX2RhdGU6ICcnLFxuICAgIGV4cF9tb250aDogbnVsbCxcbiAgICBleHBfeWVhcjogbnVsbCxcbiAgICBudW1iZXI6IG51bGwsXG4gICAgY3ZjOiAnJyxcbiAgICBuYW1lOiAnJywgICAgICAgICAgIC8vIE5vbWUgaW50ZXN0YXRhcmlvXG4gICAgYWRkcmVzc19saW5lMTogJycsICAvLyBWaWFcbiAgICBhZGRyZXNzX2xpbmUyOiAnJywgIC8vIE5yXG4gICAgYWRkcmVzc19jaXR5OiAnJywgICAvLyBDaXR0w6BcbiAgICBhZGRyZXNzX3ppcDogJycsICAgIC8vIENBUFxuICAgIGFkZHJlc3Nfc3RhdGU6ICcnLCAgLy8gUHJvdmluY2lhXG4gICAgYWRkcmVzc19jb3VudHJ5OiAnJyAvLyBQYWVzZVxuICB9O1xuICBwdWJsaWMgYWN0aW9uQ2FyZFR5cGUgPSAnYWRkJztcbiAgcHVibGljIGVkaXRlZENhcmRJZDogbnVtYmVyO1xuICBwdWJsaWMgYWRkQ2FyZEVycm9yID0ge1xuICAgIGV4cF9kYXRlOiBmYWxzZSxcbiAgICBudW1iZXI6IGZhbHNlLFxuICAgIGN2YzogZmFsc2VcbiAgfTtcbiAgcHVibGljIGxvZ2luRGF0YSA9IHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIG9yZGVyRGF0YToge31cbiAgfTtcbiAgcHVibGljIGxvZ2luRXJyb3IgPSB7XG4gICAgZW1haWw6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgcmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBwaG9uZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gIH07XG4gIHB1YmxpYyByZWdpc3RyYXRpb25FcnJvciA9IHtcbiAgICBuYW1lOiBmYWxzZSxcbiAgICBwaG9uZTogZmFsc2UsXG4gICAgZW1haWw6IGZhbHNlLFxuICAgIHBhc3N3b3JkRmlyc3Q6IGZhbHNlLFxuICAgIHBhc3N3b3JkOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgcmVjb3ZlcnlEYXRhID0ge1xuICAgIGVtYWlsOiAnJ1xuICB9O1xuICBwdWJsaWMgcmVjb3ZlcnlFcnJvciA9IHtcbiAgICBlbWFpbDogZmFsc2VcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1Qb3B1cERhdGEgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGRhdGE6IFtdLFxuICAgIGluZm9ybWF0aW9uOiB7fSxcbiAgICBidXR0b246ICcnLFxuICAgIHR5cGU6ICcnXG4gIH07XG4gIHB1YmxpYyBjb25maXJtRmluaXNoUG9wdXBEYXRhID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0eXBlOiAnY2VudGVyJ1xuICB9O1xuICBwdWJsaWMgY29uZmlybUFjdGlvblBvcHVwRGF0YSA9IHtcbiAgICBvcmRlcklkOiAnJyxcbiAgICB0eXBlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgdGV4dDI6ICcnLFxuICAgIGFjdGlvbnM6IFtdLFxuICAgIGJ1dHRvbnM6IFtdLFxuICAgIHByaWNlOiBudWxsXG4gIH07XG4gIHB1YmxpYyBmaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6IFtdLFxuICAgIHR5cGU6ICcnLFxuICAgIGRhdGE6IHt9LFxuICAgIGZyb206ICcnXG4gIH07XG5cbiAgcHVibGljIGVudGVyUGhvbmVGb3JtID0ge1xuICAgIHBob25lOiAnJ1xuICB9O1xuICBwdWJsaWMgZW50ZXJQaG9uZUZvcm1FcnJvciA9IHtcbiAgICBwaG9uZTogZmFsc2VcbiAgfTtcblxuICBwdWJsaWMgaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcblxuICBwdWJsaWMgZm9ybUVycm9yOiBib29sZWFufHt0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmd9ID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY3M6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwb3B1cFNlcnZpY2U6IFBvcHVwc1NlcnZpY2UsIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSwgcHJpdmF0ZSBwYXltZW50U2VydmljZTogUGF5bWVudFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkge1xuICAgIHRoaXMuZW1haWxQYXR0ZXJuID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gIH1cbiAgZ2V0UG9wdXAodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgIGlmICh0eXBlID09PSAnbG9naW4nKSB7XG4gICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvbicpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlY292ZXJ5Jykge1xuICAgICAgdGhpcy5yZWNvdmVyeVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaW5pc2gnKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ0NoZWNrIHlvdXIgaW5ib3gnO1xuICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtcbiAgICAgICAgICAnV2Ugc2VudCBhIHBhc3N3b3JkIHJlc2V0IGxpbmsgdG8geW91ciBlbWFpbCBhZGRyZXNzLiBQbGVhc2UgY2xpY2sgdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIGNyZWF0ZSBlIG5ldyBwYXNzd29yZC4nLFxuICAgICAgICAgICdUaGUgbGluayB3aWxsIG9ubHkgYmUgYWN0aXZlIGZvciAxIGhvdXIuIEFmdGVyIHRoYXQgeW91IHdpbGwgbmVlZCB0byByZXF1ZXN0IGEgbmV3IG9uZS4nXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybUZpbmlzaCcpIHtcbiAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtRW5kJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmQnKSB7XG4gICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnY29uZmlybUFjdGlvbicpIHtcbiAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtT3JkZXJFbmQnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLy8gQS9CIFRFU1RTXG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RlckNvbXBhbnknKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyQ29tcGFueVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgdGhpcy5hY3RpdmVQb3B1cCA9IHR5cGU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xvc2VQb3B1cChpc1Jlb3BlbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMubG9naW5Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5yZWNvdmVyeVBvcHVwU3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5maW5pc2hQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlybUZpbmlzaFBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG5cbiAgICAvLyBBL0IgVEVTVFNcbiAgICBpZiAodGhpcy5yZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5yZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJyc7XG4gICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIWlzUmVvcGVuKSB7XG4gICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2luYWN0aXZlJztcbiAgICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSAmJiBwYXNzd29yZC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5sb2dpbihlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTG9naW4nLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGRhdGE7XG4gICAgICAgICAgaWYgKHRoaXMubG9naW5EYXRhLnR5cGUgPT09ICdmcm9tT3JkZXInKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlcicsIGRhdGE6IHRoaXMubG9naW5EYXRhLm9yZGVyRGF0YX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc3dpdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTm9uIHJpdXNjaWFtbyBhIHRyb3ZhcmUgdW4gYWNjb3VudCBjb24gcXVlbGzigJlpbmRpcml6em8gZS1tYWlsJ1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpIMOoIHZlcmlmaWNhdG8gdW4gZXJyb3JlIScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xhIHR1YSBwYXNzd29yZCBub24gw6ggY29ycmV0dGEnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmYWNlYm9va0xvZ2luKCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5yb3VuZCgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gMikgLSAyODUpO1xuICAgICAgbGV0IGZhY2Vib29rUG9wdXAgPSB3aW5kb3cub3BlbihcbiAgICAgICAgLy8gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS92Mi44L2RpYWxvZy9vYXV0aD9jbGllbnRfaWQ9MTEwODQ2MTMyNTkwNzI3NyZyZXNwb25zZV90eXBlPXRva2VuJnNjb3BlPWVtYWlsLHB1YmxpY19wcm9maWxlJnJlZGlyZWN0X3VyaT1odHRwczovL3d3dy5zdGFyYm9vay5jby9mYWNlYm9vaycsXG4gICAgICAgICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdjIuOC9kaWFsb2cvb2F1dGg/Y2xpZW50X2lkPTExMDg0NjEzMjU5MDcyNzcmcmVzcG9uc2VfdHlwZT10b2tlbiZzY29wZT1lbWFpbCxwdWJsaWNfcHJvZmlsZSZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdDo0MjAwL2ZhY2Vib29rJyxcbiAgICAgICAgICAnX2JsYW5rJyxcbiAgICAgICAgICAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLGxlZnQ9JyArIGxlZnQgKyAnLCB0b3A9MTAwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnKTtcbiAgICAgIHRoaXMuY2hlY2tBY2Nlc3NUb2tlbihmYWNlYm9va1BvcHVwLCAxKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0FjY2Vzc1Rva2VuKGZhY2Vib29rV2luZG93OiBXaW5kb3csIGNvbnRleHQpIHtcbiAgICBpZiAoZmFjZWJvb2tXaW5kb3cuY2xvc2VkKSB7XG4gICAgICBsZXQgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmFjZWJvb2tfdG9rZW4nKTtcblxuICAgICAgdGhpcy5hdXRoU2Vydmljcy5mYWNlYm9va0xvZ2luKGFjY2Vzc1Rva2VuKVxuICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoIXVzZXJEYXRhLnBob25lX251bWJlcikge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdDb21wbGV0YSBpbCBwcm9maWxvJztcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dC5wdXNoKCdQZXIgcmVzdGFyZSBpbiBjb250YXR0byBjb24gaSBwcm9mZXNzaW9uaXN0aSBpbnNlcmlzY2kgaWwgc3VvIG51bWVybyBkaSB0ZWxlZm9uby4nKTtcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudHlwZSA9ICdwaG9uZSc7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLmRhdGEgPSB7IHVzZXJEYXRhOiB1c2VyRGF0YSB9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5sb2dpbkRhdGEudHlwZSA9PT0gJ2Zyb21PcmRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS5mcm9tID0gJ29yZGVyJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghdXNlckRhdGEuZW1haWwpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3JlIScsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdBdXRob3JpemF0aW9uIGVycm9yJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtzZWxmLmNoZWNrQWNjZXNzVG9rZW4oZmFjZWJvb2tXaW5kb3csIGNvbnRleHQgKyAxKX0sIDIwMCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFbWFpbCh0eXBlOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgdGhpcy5sb2dpbkVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5lbWFpbCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNvdmVyeSc6XG4gICAgICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgdGhpcy5sb2dpbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjb3ZlcnknOlxuICAgICAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tEYXRlKHR5cGUsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGUgPT09ICduZXdDYXJkJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gNSkge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGxldCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmIChwYXJ0c1swXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrTm9uRW1wdHkodHlwZSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2xvZ2luJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5sb2dpbkVycm9yLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvbk5hbWUnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uUGhvbmUnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5waG9uZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5waG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZW50ZXJQaG9uZUZvcm0nKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgICAgdGhpcy5lbnRlclBob25lRm9ybUVycm9yLnBob25lID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3JlZ2lzdHJhdGlvblBhc3N3b3JkJykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2FkZENhcmROdW1iZXInKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZEN2dicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmN2YyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuY3ZjID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIHBhc3N3b3JkQ29uZmlybTogc3RyaW5nKSB7XG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tFeHBpcnkodmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9ICgxICsgZGF0ZS5nZXRNb250aCgpKS50b1N0cmluZygpO1xuICAgIGlmICgoZGF0ZS5nZXRNb250aCgpICsgMSkgPCAxMCkge1xuICAgICAgbW9udGggPSAnMCcgKyBtb250aC50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgeWVhckVsZW1zID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIGxldCB5ZWFyID0gcGFyc2VJbnQoeWVhckVsZW1zWzJdLnRvU3RyaW5nKCkgKyB5ZWFyRWxlbXNbM10udG9TdHJpbmcoKSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgZGF0ZUVsZW1zID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgaWYgKGVsZW0gPT09ICcvJykge1xuICAgICAgICAgIGRhdGVFbGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgICAgICAgcmVzdWx0ICs9ICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZUVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICByZXN1bHQgKz0gZWxlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sZW5ndGggIT09IDUpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IHBhcnRzID0gcmVzdWx0LnNwbGl0KCcvJyk7XG4gICAgICBpZiAocGFydHNbMF0gIT09IHJlc3VsdCkge1xuICAgICAgICBpZiAocGFyc2VJbnQocGFydHNbMV0pID4geWVhcikge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHBhcnNlSW50KHBhcnRzWzBdKSA+PSBwYXJzZUludChtb250aCkgJiYgcGFyc2VJbnQocGFydHNbMV0pID09PSB5ZWFyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNoZWNrQ2FyZE51bWJlcihjYXJkTnVtYmVyKSB7XG4gICAgLy8gaWYgKGNhcmROdW1iZXIgIT09IG51bGwpIHtcbiAgICAvLyAgIGlmICh0aGlzLnBheW1lbnRTZXJ2aWNlLmNhcmROdW1iZXJWYWxpZGF0ZShjYXJkTnVtYmVyKSkge1xuICAgIC8vICAgICB0aGlzLmFkZENhcmRFcnJvci5udW1iZXIgPSBmYWxzZTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgcmVnaXN0cmF0aW9uKG5hbWU6IHN0cmluZywgcGhvbmU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcGFzc3dvcmRDb25maXJtOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbWFpbFBhdHRlcm4udGVzdChlbWFpbCkgJiYgcGFzc3dvcmQgPT09IHBhc3N3b3JkQ29uZmlybSAmJiBwYXNzd29yZC5sZW5ndGggPiAwICYmIG5hbWUubGVuZ3RoID4gMCAmJiBwaG9uZS5sZW5ndGggPiA5KSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5zaWdudXAobmFtZSwgcGhvbmUsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdSZWdpc3RyYXRpb24nLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGRhdGE7XG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YSk7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsZS9wYXltZW50J10pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHN3aXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhc2UgNDA5OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0luZGlyaXp6byBlLW1haWwgZ2nDoCBpbiB1c28uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSGFpIGluZGljYXRvIGRpIGVzc2VyZSB1biBudW92byBjbGllbnRlIG1hIMOoIGdpw6BcbiAgICAgICAgICAgICAgICBwcmVzZW50ZSB1biBhY2NvdW50IGNvbGxlZ2F0byBhbGwnaW5kaXJpenpvIGUtbWFpbDogbWFpbEBnbWFpbC5jb21gXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MjI6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGFyYW1ldHJpIG1hbmNhbnRpJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgSW5zZXJpc2NpIHR1dHRpIGkgcGFyYW1ldHJpIHBlciBwcm9jZWRlcmUgY29uIGxhIHJlZ2lzdHJhemlvbmVgXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3JlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQyfDqCBzdGF0byB1biBlcnJvcmUgc2Nvbm9zY2l1dG8sIHBlciBmYXZvcmUgcmlwcm92YSBwacO5IHRhcmRpYFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVjb3ZlcnkoZW1haWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MucmVjb3ZlcnkoZW1haWwpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdSZWNvdmVyeSBvZiBwYXNzd29yZCcsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnZmluaXNoJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ1NpIMOoIHZlcmlmaWNhdG8gdW4gcHJvYmxlbWEhJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBDaSBkaXNwaWFjZS4gSW1wb3NzaWJpbGUgaWRlbnRpZmljYXJlIGwnYWNjb3VudCBjb24gbGUgaW5mb3JtYXppb25pIGZvcm5pdGUuYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25maXJtT3JkZXIoaWQpIHtcbiAgICAvLyB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdBQ0NFUFQnKVxuICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2Vydml6aW8gY29uZmVybWF0byBjb24gc3VjY2Vzc28nO1xuICAgIC8vICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnQWRlc3NvIG5vbiByZXN0YSBhbHRybyBjaGUgb2ZmcmlyZSBpbCBzdW8gc2Vydml6aW8gYWwgY2xpZW50ZS4gUGVyIHF1YWxzaWFzaSBjb21tdW5pY2F6aW9uZSBwdcOyIHVzYXJlIGkgZGF0aSBkZWwgY29udGF0dG8gYWdnaXVudGkgZGFsIGNsaWVudGUuJztcbiAgICAvLyAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hRW5kJztcbiAgICAvLyAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRW5kJyk7XG4gICAgLy8gICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgLy8gICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgLy8gICAgICAgICB0aXRsZTogJ09yZGVyIGNvbmZpcm1hdGlvbiBlcnJvcicsXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBvcmRlciBjb25maXJtYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgIC8vICAgICAgIH07XG4gICAgLy8gICAgIH0pO1xuICB9XG5cbiAgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdDQU5DRUwnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IENhbmNlbCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnT3JkaW5lIGFubnVsbGF0byc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgPSAnUXVlc3RvIG9yZGluZSDDqCBzdGF0byBhbm51bGxhdG8sIHB1b2kgcmlhdHRpdmFybG8gaW4gdW4gc2Vjb25kbyBtb21lbnRvLic7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY2FuY2VsT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhbmNlbGxhdGlvbiBlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgY2FuY2VsaW5nIHlvdXIgb3JkZXIuIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICB9XG5cbiAgcmVhY3RpdmF0ZU9yZGVyKGlkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKGlkLCAnUkVBQ1RJVkFURScpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogUmVhY3RpdmF0ZScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnT3JkaW5lIHJpYXR0aXZhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1F1ZXN0byBvcmRpbmUgw6ggc3RhdG8gcmlhdHRpdmF0bywgdmVycmFpIG5vdGlmaWNhdG8gcXVhbmRvIHVuIHByb2Zlc3Npb25pc3RhIGNvbmZlcm1lcmEgcXVlc3RvIG9yZGluZS4nO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ3JlYWN0aXZhdGVPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhY3RpdmF0aW9uIG9yZGVyIGVycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBEdXJpbmcgdGhlIHJlYWN0aXZhdGlvbiBvZiB5b3VyIG9yZGVyIGlzIHRoZSBvcmRlciB0aGUgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICB9XG5cbiAgY29uZmlybU5ld09yZGVyKCkge1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybSd9KTtcbiAgfVxuXG4gIGFkZE5ld0NhcmQoKSB7XG4gICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEubnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZXJyb3IgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5sZW5ndGggPT09IDUpIHtcbiAgICAgIGxldCBleHBfcGFydHMgPSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLnNwbGl0KCcvJyk7XG4gICAgICBpZiAoZXhwX3BhcnRzWzBdICE9PSB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX21vbnRoID0gZXhwX3BhcnRzWzBdO1xuICAgICAgICB0aGlzLmFkZENhcmREYXRhLmV4cF95ZWFyID0gZXhwX3BhcnRzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmN2Yy5sZW5ndGggPCAzKSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ3N0YXJ0TmV3Q2FyZCd9KTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5wYXltZW50U2VydmljZS5hZGROZXdDYXJkKHRoaXMuYWRkQ2FyZERhdGEpXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdBZGQgbmV3IGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmQnLCBkYXRhOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmRFcnJvcid9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVkaXRDYXJkKCkge1xuICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgIGxldCBlZGl0Q2FyZERhdGEgPSB7XG4gICAgICBleHBfbW9udGg6IG51bGwsXG4gICAgICBleHBfeWVhcjogbnVsbCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgYWRkcmVzc19saW5lMTogJycsXG4gICAgICBhZGRyZXNzX2xpbmUyOiAnJyxcbiAgICAgIGFkZHJlc3NfY2l0eTogJycsXG4gICAgICBhZGRyZXNzX3ppcDogJycsXG4gICAgICBhZGRyZXNzX3N0YXRlOiAnJyxcbiAgICAgIGFkZHJlc3NfY291bnRyeTogJydcbiAgICB9O1xuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IGV4cF9wYXJ0cyA9IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChleHBfcGFydHNbMF0gIT09IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUpIHtcbiAgICAgICAgZWRpdENhcmREYXRhLmV4cF9tb250aCA9IGV4cF9wYXJ0c1swXTtcbiAgICAgICAgZWRpdENhcmREYXRhLmV4cF95ZWFyID0gZXhwX3BhcnRzWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGVkaXRDYXJkRGF0YS5uYW1lID0gdGhpcy5hZGRDYXJkRGF0YS5uYW1lO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfbGluZTEgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTE7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19saW5lMiA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMjtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2NpdHkgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY2l0eTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX3ppcCA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc196aXA7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19zdGF0ZSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19zdGF0ZTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnkgPSB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY291bnRyeTtcbiAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnc3RhcnROZXdDYXJkJ30pO1xuICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IHRydWU7XG4gICAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZWRpdENhcmQodGhpcy5lZGl0ZWRDYXJkSWQsIGVkaXRDYXJkRGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0VkaXQgY2FyZCBjYXJkJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjYXJkRWRpdGVkJywgZGF0YTogcmVzcG9uc2V9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICduZXdDYXJkRXJyb3InfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXJyb3IuanNvbigpLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRQcmljZShvcmRlcklkKSB7XG4gICAgLy8gbGV0IG9yZGVyUHJpY2VFdXIgPSBwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpICsgKChwYXJzZUludCh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UpIC8gMTAwKSAqIDUuNSk7XG4gICAgLy8gbGV0IG9yZGVyUHJpY2UgPSBwYXJzZUZsb2F0KG9yZGVyUHJpY2VFdXIudG9GaXhlZCgyKSkgKiAxMDA7XG5cbiAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIob3JkZXJJZCwgJ0NMT1NFJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBDbG9zZScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb21wbGV0YXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdhZGRQcmljZUVuZCc7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnYWRkUHJpY2VFbmQnO1xuICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2FkZFByaWNlJywgZGF0YToge29yZGVySWQ6IG9yZGVySWQsIGlzTW9kaWZpZWQ6IHJlc3BvbnNlLm5Nb2RpZmllZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCAnQW4gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cbiAgZWRpdFByaWNlKG9yZGVySWQpIHtcbiAgICBsZXQgb3JkZXJQcmljZUV1ciA9IHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgKyAoKHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgLyAxMDApICogNS41KTtcbiAgICBsZXQgb3JkZXJQcmljZSA9IHBhcnNlRmxvYXQob3JkZXJQcmljZUV1ci50b0ZpeGVkKDIpKSAqIDEwMDtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UuYWRkUHJpY2Uob3JkZXJJZCwgJ0FDVElWRV9QQVlNRU5UJywgb3JkZXJQcmljZSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBBY3RpdmUgcGF5bWVudCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2VkaXRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBvcmRlcklkLCBvcmRlclByaWNlOiBvcmRlclByaWNlLCBpc01vZGlmaWVkOiByZXNwb25zZS5uTW9kaWZpZWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICB9XG4gIGNvbnRpbnVlT3JkZXIob3JkZXJJZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihvcmRlcklkLCAnUEFZJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBQYXknLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ1BhZ2FtZW50byBlZmZldHR1YXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdUaSBhYmJpYW1vIGludmlhdG8gdW5hIG1haWwgZSB1biBzbXMgY29uIGxhIGNvbmZlcm1hIGRlbCBwYWdhbWVudG8gZSBsYSByaWNldnV0YSBmaXNjYWxlJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudHlwZSA9ICdsZWZ0JztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb250aW51ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IG9yZGVySWR9fSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdsb2dvdXQnLCBkYXRhOiB7fX0pO1xuICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICB9XG5cbiAgZ2V0RXJyb3JQb3B1cCh0aXRsZSwgdGV4dCkge1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQucHVzaCh0ZXh0KTtcbiAgICB0aGlzLmdldFBvcHVwKCdlcnJvcicpO1xuICB9XG5cbiAgc2V0UGhvbmVOdW1iZXIoKSB7XG4gICAgdGhpcy5lbnRlclBob25lRm9ybUVycm9yLnBob25lID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZW50ZXJQaG9uZUZvcm0ucGhvbmUubGVuZ3RoID4gMTApIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY3MuYWRkUGhvbmUodGhpcy5lbnRlclBob25lRm9ybS5waG9uZSlcbiAgICAgICAgICAudGhlbigodXNlckRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW107XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmluaXNoUG9wdXBEYXRhLmZyb20gPT09ICdvcmRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbmZpcm1OZXdPcmRlcicsIGRhdGE6IHRoaXMubG9naW5EYXRhLm9yZGVyRGF0YX0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ0NvbXBsaW1lbnRpISc7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dC5wdXNoKCdIYWkgcmVnaXN0cmF0byBjb24gc3VjY2Vzc28gaWwgc3VvIGFjY291bnQgU3RhcmJvb2suJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudHlwZSA9ICdmaW5pc2hGYWNlYm9va1JlZ2lzdHJhdGlvbic7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEuZGF0YSA9IHsgdXNlckRhdGE6IHVzZXJEYXRhIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wb3B1cFNlcnZpY2UuZ2V0QWN0aXZlUG9wdXAkLnN1YnNjcmliZShwb3B1cCA9PiB7XG4gICAgICAgIHN3aXRjaCAocG9wdXAudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLmVtYWlsID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9naW4nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9naW5Gcm9tT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhID0gcG9wdXAuZGF0YTtcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLnR5cGUgPSAnZnJvbU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2FkZENhcmQnOlxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DYXJkVHlwZSA9ICdhZGQnO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRDYXJkJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRDYXJkJzpcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2FyZFR5cGUgPSAnZWRpdCc7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZENhcmRJZCA9IHBvcHVwLmRhdGEuaWQ7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlID0gcG9wdXAuZGF0YS5leHBfbW9udGggKyAnLycgKyBwb3B1cC5kYXRhLmV4cF95ZWFyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5uYW1lID0gcG9wdXAuZGF0YS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUxID0gcG9wdXAuZGF0YS5hZGRyZXNzX2xpbmUxO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyID0gcG9wdXAuZGF0YS5hZGRyZXNzX2xpbmUyO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NpdHkgPSBwb3B1cC5kYXRhLmFkZHJlc3NfY2l0eTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc196aXAgPSBwb3B1cC5kYXRhLmFkZHJlc3NfemlwO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlID0gcG9wdXAuZGF0YS5hZGRyZXNzX3N0YXRlO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2NvdW50cnkgPSBwb3B1cC5kYXRhLmFkZHJlc3NfY291bnRyeTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEubnVtYmVyID0gcG9wdXAuZGF0YS5udW1iZXI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmN2YyA9IHBvcHVwLmRhdGEuY3ZjO1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRDYXJkJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlZ2lzdHJhdGlvbic6XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAncmVnaXN0cmF0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1PcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnQ29uZmVybWEgc2Vydml6aW8gaW4gY29yc2/igKYnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnSWwgc2lzdGVtYSBzdGEgY29udHJvbGxhbmRvIHNlIHF1ZXN0byBzZXJ2aXppbyDDqCBzdGF0byBhc3NlZ25hdG8gYWQgdW4gYWx0cm8gcHJvZmVzc2lvbmlzdGEgbyBhbnVsbGF0byBkYWwgY2xpZW50ZSBzdGVzc28uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2NvbmZlcm1hJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihwb3B1cC5kYXRhLm9yZGVySWQsICdBQ0NFUFQnKVxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2Vydml6aW8gY29uZmVybWF0byBjb24gc3VjY2Vzc28nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0FkZXNzbyBub24gcmVzdGEgYWx0cm8gY2hlIG9mZnJpcmUgaWwgc3VvIHNlcnZpemlvIGFsIGNsaWVudGUuIFBlciBxdWFsc2lhc2kgY29tbXVuaWNhemlvbmUgcHXDsiB1c2FyZSBpIGRhdGkgZGVsIGNvbnRhdHRvIGFnZ2l1bnRpIGRhbCBjbGllbnRlLic7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWFFbmQnO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1FbmQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm1PcmRlcicsIGRhdGE6IHtvcmRlcklkOiBwb3B1cC5kYXRhLm9yZGVySWR9fSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ09yZGVyIGNvbmZpcm1hdGlvbiBlcnJvcicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSBvcmRlciBjb25maXJtYXRpb24uIFBsZWFzZSB0cnkgYWdhaW4uYFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2FuY2VsT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmlkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0FubnVsbGEgb3JkaW5lPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgYW5udWxsYXRvIHF1ZXN0byBvcmRpbmUgc29sbyB0dSBzYXJhaSBpbiBncmFkbyBkaSB2ZWRlcmxvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ0FubnVsbGEgb3JkaW5lJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlYWN0aXZhdGVPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnUmlhdHRpdmEgb3JkaW5lPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgcmlhdHRpdmF0byBxdWVzdG8gb3JkaW5lIHNhcmEgdmlzaWJpbGUgYSB0dXR0aSBpIHByb2Zlc3Npb25pc3RpLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ1JpYXR0aXZhIG9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtTmV3T3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0RldHRhZ2xpIGRlbGzigJlvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbe3Byb2R1Y3ROYW1lOiBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlLCBpdGVtTmFtZTogJycsIHByaWNlOiAnJywgdHlwZTogJ3NlcnZpY2UnfV07XG4gICAgICAgICAgICBwb3B1cC5kYXRhLm9yZGVyRGF0YS5zZXJ2aWNlcy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmKHByb2R1Y3QucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9kdWN0LnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6ICcnLCBzeW1ib2w6IHByb2R1Y3Qub3B0aW9uLnN5bWJvbCwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6IHByb2R1Y3QubmFtZSwgaXRlbU5hbWU6IHByb2R1Y3Qub3B0aW9uLm5hbWUsIHByaWNlOiBwcm9kdWN0Lm9wdGlvbi5wcmljZSwgdHlwZTogJ2l0ZW0nfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEucHVzaCh7cHJvZHVjdE5hbWU6ICdUb3RhbGUnLCBpdGVtTmFtZTogJycsIHByaWNlOiBwb3B1cC5kYXRhLm9yZGVyRGF0YS50b3RhbFByaWNlLCB0eXBlOiAndG90YWwnfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24gPSBwb3B1cC5kYXRhLmluZm9ybWF0aW9uO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdQcm9jZWRpIGNvbiBs4oCZYWNxdWlzdG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXInO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU5ld09yZGVyRW5kJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdBY3F1aXN0byBlZmZldHVhdG8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnTOKAmW9yZGluZSBlIHN0YXRvIHByZW5vdGF0byBjb24gc3VjY2Vzc28uIFVuIHByb2Zlc3Npb25pc3RhIHNpIHByZXNlbnRlcsOgIG5lbGxhIGRhdGEgZSBvcmEgc3RhYmlsaXRhIGRhIHZvaS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbmV3T3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXJFbmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudHlwZSA9ICdhZGRQcmljZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnQ29tcGxldGFtZW50byBzZXJ2aXppbyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgY29tcGxldGF0byBpbCBzZXJ2aXppbyB2ZXJyYWkgaW5jcmVtZW50YXRvIGRlbCBpbXBvcnRvIHByZXN0YWJpbGl0byB0cmEgNyBnaW9ybmkgbGF2b3JhdGl2aS4nO1xuICAgICAgICAgICAgLy8gdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAvLyAgIHR5cGU6ICdQYXltZW50X2lucHV0X2FkZCcsXG4gICAgICAgICAgICAvLyAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgLy8gICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAvLyAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdhZGRQcmljZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDb21wbGV0YSBpbCBzZXJ2aXppbydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnTW9kaWZpY2EnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQgPSAnRG9wbyBhdmVyIG1vZGlmaWNhdG8gbOKAmWltcG9ydG8gaWwgY2xpZW50ZSB2ZXJyYSBub3RpZmljYXRvIGRpIHF1ZXN0YSBtb2RpZmljYSBlIHBvdHJhIHByb2NlZGVyZSBjb24gaWwgcGFnYW1lbnRvLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnRfaW5wdXRfZWRpdCcsXG4gICAgICAgICAgICAgIHNvdXJjZTogJ2V1cm8nLFxuICAgICAgICAgICAgICBsYWJlbDogJ0luc2VyaXNjaSBs4oCZaW1wb3J0bycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWxs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NhIFN0YXJib29rLidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdlZGl0UHJpY2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnSW5zZXJpc2NpIGltcG9ydG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2UgPSBNYXRoLnJvdW5kKChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpIC8gMTAwKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybUFjdGlvbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb250aW51ZU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkID0gcG9wdXAuZGF0YS5vcmRlcklkO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRpdGxlID0gJ1BhZ2FtZW50byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgZWZmZXR0dWF0byBpbCBwYWdhbWVudG8gcmljZXZlcmFpIHVuYSBtYWlsIGNvbiBsYSBmYXR0dXJhIGRlbCBvcmRpbmUuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0MiA9ICdBbOKAmWltcG9ydG8gdmVycmEgYWdnaXVudG8gNS41JSBkaSB0YXNzZSBTdGFyYm9vay4nO1xuICAgICAgICAgICAgbGV0IHByaWNlID0gTWF0aC5yb3VuZCgocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSAvIDEwMCk7XG4gICAgICAgICAgICBsZXQgdGF4ID0gKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLSBNYXRoLnJvdW5kKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkpIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdQYXltZW50X2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgaW5mb3JtYXRpb246IHByaWNlICsgJ+KCrCArICcgKyB0YXggKyAn4oKsID0gJyArIHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxMDAgKyAn4oKsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbnRpbnVlT3JkZXInLFxuICAgICAgICAgICAgICB0ZXh0OiAnUHJvY2VkaSBjb24gaWwgcGFnYW1lbnRvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnU2ljdXJvIGRpIHZvbGVyIHVzY2lyZT8nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmRhdGEgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9nb3V0JztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW107XG4gICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAocG9wdXAuZGF0YS50aXRsZSwgcG9wdXAuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLy8gQS9CIFRFU1RTXG4gICAgICAgICAgY2FzZSAncmVnaXN0ZXJDb21wYW55JzpcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDb21wYW55UG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdyZWdpc3RlckNvbXBhbnknO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2Vydmljcy5hdXRoSW5pdCgpO1xuICB9XG5cbiAgY2xlYXJEYXRhKCkge1xuICAgIHRoaXMuYWRkQ2FyZERhdGEgPSB7XG4gICAgICAgIG9iamVjdDogJ2NhcmQnLFxuICAgICAgICBleHBfZGF0ZTogJycsXG4gICAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgICAgZXhwX3llYXI6IG51bGwsXG4gICAgICAgIG51bWJlcjogbnVsbCxcbiAgICAgICAgY3ZjOiAnJyxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGFkZHJlc3NfbGluZTE6ICcnLFxuICAgICAgICBhZGRyZXNzX2xpbmUyOiAnJyxcbiAgICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgICAgYWRkcmVzc196aXA6ICcnLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiAnJyxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgICAgfTtcbiAgICAvLyB0aGlzLmxvZ2luRGF0YSA9IHtcbiAgICAvLyAgICAgZW1haWw6ICcnLFxuICAgIC8vICAgICBwYXNzd29yZDogJycsXG4gICAgLy8gICAgIHR5cGU6ICcnLFxuICAgIC8vICAgICBvcmRlckRhdGE6IHt9XG4gICAgLy8gICB9O1xuICAgIHRoaXMucmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgICAgIH07XG4gICAgdGhpcy5yZWNvdmVyeURhdGEgPSB7XG4gICAgICAgIGVtYWlsOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEgPSB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgaW5mb3JtYXRpb246IHt9LFxuICAgICAgICBidXR0b246ICcnLFxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIHR5cGU6ICdjZW50ZXInXG4gICAgICB9O1xuICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YSA9IHtcbiAgICAgICAgb3JkZXJJZDogJycsXG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0MjogJycsXG4gICAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgcHJpY2U6IG51bGxcbiAgICAgIH07XG4gICAgdGhpcy5sb2dpbkVycm9yID0ge1xuICAgICAgZW1haWw6IGZhbHNlLFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHRleHQ6IFtdLFxuICAgICAgdHlwZTogJycsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGZyb206ICcnXG4gICAgfTtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtID0ge1xuICAgICAgcGhvbmU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IgPSB7XG4gICAgICBwaG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYXV0aFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICAgICdzZXJ2aWNlcy86aWQnLFxuICAgICdwcm9maWxlL3ByaXZhY3knLFxuICAgICdwcm9maWxlL2hlbHAnLFxuICAgICdwcm9maWxlL2NvbmRpdGlvbnMnLFxuICAgICdvcmRlcnMnLFxuICAgICdwcm9maWxlLzpwYWdlJyxcbiAgICAnZmFjZWJvb2snXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci1maXhlZC10b3AgYmctaW52ZXJzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzLXNlYXJjaCc6IGlzRmluZEZpZWxkfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgdG9wLW1lbnVcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiByb3V0ZXJMaW5rPVxcXCJcXFwiIChjbGljayk9XFxcInVwZGF0ZVRhYk1lbnUoKVxcXCI+U3RhcmJvb2s8L2E+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaC1ibG9ja1xcXCIgKm5nSWY9XFxcImlzRmluZEZpZWxkXFxcIj5cXG4gICAgICA8cC1hdXRvQ29tcGxldGUgWyhuZ01vZGVsKV09XFxcImZpbmRWYWx1ZVxcXCIgW3N1Z2dlc3Rpb25zXT1cXFwicmVzdWx0c1xcXCIgZmllbGQ9XFxcInRpdGxlXFxcIiBzY3JvbGxIZWlnaHQ9XFxcIjE3MHB4XFxcIiAoY29tcGxldGVNZXRob2QpPVxcXCJzZWFyY2goJGV2ZW50KVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0UmVzdWx0KGZpbmRWYWx1ZSlcXFwiIHBsYWNlaG9sZGVyPVxcXCJDZXJjYVxcXCIgbWluTGVuZ3RoPVxcXCIwXFxcIj5cXG4gICAgICAgIDx0ZW1wbGF0ZSBsZXQtcmVzPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtcmVzdWx0XFxcIiAoY2xpY2spPVxcXCJzZWxlY3RSZXN1bHQocmVzKVxcXCI+e3sgcmVzLnRpdGxlIH19PC9kaXY+XFxuICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lclxcXCIgKm5nSWY9XFxcInNwaW5lclZpZXdcXFwiPlxcbiAgICAgICAgPHN2ZyB3aWR0aD0nMTNweCcgaGVpZ2h0PScxM3B4JyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCIgY2xhc3M9XFxcInVpbC1yaW5nXFxcIj5cXG4gICAgICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTY5LjY0NjAwMzI5Mzg0ODgyIDExMy4wOTczMzU1MjkyMzI1N1xcXCIgc3Ryb2tlPVxcXCIjM0I1NjhEXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIHR5cGU9XFxcInJvdGF0ZVxcXCIgdmFsdWVzPVxcXCIwIDUwIDUwOzE4MCA1MCA1MDszNjAgNTAgNTA7XFxcIiBrZXlUaW1lcz1cXFwiMDswLjU7MVxcXCIgZHVyPVxcXCIxc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIGJlZ2luPVxcXCIwc1xcXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxcbiAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgIDwvc3ZnPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIiFzcGluZXJWaWV3ICYmIGNsZWFyVmlld1xcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2Ugcm91bmRlZCB0aGlja1xcXCIgKGNsaWNrKT1cXFwiY2xlYXJTZWFyY2hGb3JtKClcXFwiPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgZW1wdHlcXFwiICpuZ0lmPVxcXCJyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBmaW5kVmFsdWUubGVuZ3RoID4gMCAmJiBpc1NlYXJjaGVkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5vLXJlc3VsdFxcXCI+TmVzc3VuIHJpc3VsdGF0bzwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFnbGluZVxcXCIgKm5nSWY9XFxcIiFpc0ZpbmRGaWVsZFxcXCI+e3t0YWdsaW5lfX08L2Rpdj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJNZW51XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPjwvYnV0dG9uPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2IGZsb2F0LXhzLXJpZ2h0XFxcIiAqbmdJZj1cXFwiYXV0aCAhPT0gZmFsc2VcXFwiIFtuZ0NsYXNzXT1cXFwieydjb2xsYXBzZSc6bmF2YmFyU3RhdGU9PT1mYWxzZX1cXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIGhvbWVcXFwiIHJvdXRlckxpbms9XFxcIlxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBbcm91dGVyTGlua0FjdGl2ZU9wdGlvbnNdPVxcXCJ7ZXhhY3Q6dHJ1ZX1cXFwiIChjbGljayk9XFxcInVwZGF0ZVRhYk1lbnUodHJ1ZSlcXFwiPkhvbWU8L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBvcmRlcnNcXFwiIHJvdXRlckxpbms9XFxcIi9vcmRlcnNcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgpXFxcIj5PcmRpbmk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiByb3V0ZXJMaW5rPVxcXCIvcHJvZmlsZS9zZXR0aW5nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVNZW51KClcXFwiPnt7YXV0aC5wcm9maWxlLmZ1bGxuYW1lfX08L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBmbG9hdC14cy1yaWdodFxcXCIgKm5nSWY9XFxcImF1dGggPT09IGZhbHNlICYmIGJyb3dzZXJcXFwiIFtuZ0NsYXNzXT1cXFwieydjb2xsYXBzZSc6bmF2YmFyU3RhdGU9PT1mYWxzZX1cXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIChjbGljayk9XFxcImdldExvZ2luUG9wdXAoKVxcXCI+QWNjZWRpPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgcHJvZmlsZVxcXCIgKGNsaWNrKT1cXFwiZ2V0UmVnaXN0cmF0aW9uUG9wdXAoKVxcXCI+UmVnaXN0cmF0aTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuPC9uYXY+XFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcbjxhcHAtcG9wdXBzPjwvYXBwLXBvcHVwcz5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIG5hdmJhci10YWJzXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayBob21lLXRhYi1iYXJcXFwiXFxuICAgICAgIChzd2lwZWxlZnQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiXFxuICAgICAgIChzd2lwZXJpZ2h0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXBpbGxzXFxcIlxcbiAgICAgICAgW25nU3R5bGVdPVxcXCJ7J21hcmdpbi1sZWZ0LnB4JzogZGVsdGF9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBuYXZTZXJ2aWNlcyBvZiBzZXJ2aWNlc0NhdGVnb3J5TGlzdFxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIFtuZ0NsYXNzXT1cXFwieydhY3RpdmUnOm5hdlNlcnZpY2VzLl9pZD09PWFjdGl2ZVNlcnZpY2VDYXRlZ29yeSAmJiBhY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlICE9PSBmYWxzZX1cXFwiIChjbGljayk9XFxcInRhYk5hdmlnYXRlKG5hdlNlcnZpY2VzLl9pZClcXFwiPjxpIGNsYXNzPVxcXCJme3tuYXZTZXJ2aWNlcy5pY29uX25hbWV9fVxcXCI+PC9pPiB7e25hdlNlcnZpY2VzLnRpdGxlfX08L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvbmF2Pi0tPlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1zdGFyYm9vayBob21lLXBhZ2VcXFwiICpuZ0lmPVxcXCJpc1NlcnZpY2VzVmlldyA9PT0gdHJ1ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOSBjb2wtbWQtMTAgbWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYXNvbnJ5LWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2VzLWJsb2NrXFxcIiAqbmdGb3I9XFxcImxldCBzZXJ2aWNlQ2F0ZWdvcnkgb2Ygc2VydmljZXNEYXRhXFxcIiBbbmdDbGFzc109XFxcInsnc2VydmljZXMtYmxvY2stYmlnJzogc2VydmljZUNhdGVnb3J5LnR5cGUgPT09ICdjb250ZW50J31cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkudHlwZSA9PT0gJ2NvbnRlbnQnXFxcIj5cXG4gICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcInNlcnZpY2VDYXRlZ29yeS5pbWFnZVxcXCIgKGxvYWQpPVxcXCJtYWtlTWFzb25yeSgpXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj57eyBzZXJ2aWNlQ2F0ZWdvcnkuZGVzY3JpcHRpb24gfX08L2Rpdj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcInNlcnZpY2VDYXRlZ29yeS50eXBlICE9PSAnY29udGVudCdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e3NlcnZpY2VDYXRlZ29yeS50aXRsZV8xfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlcnZpY2UgY29udGVudCBub3NlbGVjdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2Ygc2VydmljZUNhdGVnb3J5Lm9wdGlvbnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0lmPVxcXCJpdGVtLnR5cGUgPT09ICdDSEVDS0JPWCcgfHwgaXRlbS50eXBlID09PSAnUkFESU9CVVRUT04nXFxcIiBbbmdDbGFzc109XFxcInsnY2hlY2tlZCc6aXRlbS5zZWxlY3RlZH1cXFwiIChjbGljayk9XFxcInRvZ2dsZVNlcnZpY2Uoc2VydmljZUNhdGVnb3J5LnRpdGxlLCBpdGVtLnRpdGxlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cXFwiaXRlbS5zZWxlY3RlZD09PXRydWVcXFwiIGNsYXNzPVxcXCJmYSBmYS1jaGVjay1zcXVhcmVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVxcXCJpdGVtLnNlbGVjdGVkPT09ZmFsc2VcXFwiIGNsYXNzPVxcXCJmYSBmYS1zcXVhcmUtb1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLnRpdGxlXzF9fVxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiAqbmdJZj1cXFwiaXRlbS50eXBlID09PSAnSU5QVVRURVhUJ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInNlcnZpY2VzRGF0YVtpdGVtLmZvcm1JZF0ub3B0aW9uc1tpdGVtLm9wdGlvbklkXS5pbnB1dF92YWx1ZVxcXCIgKGtleXVwKT1cXFwiY2hhbmdlVmFsdWUoaXRlbS5mb3JtSWQsIGl0ZW0ub3B0aW9uSWQpXFxcIiAoY2hhbmdlKT1cXFwiY2hhbmdlVmFsdWUoaXRlbS5mb3JtSWQsIGl0ZW0ub3B0aW9uSWQpXFxcIiAoZm9jdXMpPVxcXCJzZWxlY3RBbGxDb250ZW50KCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj57e3NlcnZpY2VzRGF0YVtpdGVtLmZvcm1JZF0ub3B0aW9uc1tpdGVtLm9wdGlvbklkXS52YWx1ZV9zeW1ib2x9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxhcHAtb3JkZXIgW29yZGVyRGF0YV09XFxcIm9yZGVyRGF0YVxcXCIgW29yZGVySXNGdWxsXT1cXFwib3JkZXJJc0Z1bGxcXFwiPjwvYXBwLW9yZGVyPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcblxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29weXJpZ2h0XFxcIj5TdGFyYm9vayDCqSAyMDE2IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2NvbmRpdGlvbnNcXFwiPkNvbmRpemlvbmk8L2E+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG48YXBwLWxhbmRpbmcgKm5nSWY9XFxcImlzU2VydmljZXNWaWV3ID09PSBmYWxzZVxcXCI+PC9hcHAtbGFuZGluZz5cXG48YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgY2xhc3M9XFxcInNlcnZpY2VzLWxvYWRlclxcXCI+PC9hcHAtbG9hZGluZz5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtMiBzaWRlYmFyXFxcIj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJzaWRlYmFyLWNvbnRhaW5lclxcXCIgI29yZGVyRm9ybT1cXFwibmdGb3JtXFxcIiAod2luZG93OnJlc2l6ZSk9XFxcIm9uUmVzaXplKClcXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1ibG9ja1xcXCI+XFxuICAgICAgPGgyPnt7b3JkZXJEYXRhLnNlcnZpY2V9fTwvaDI+XFxuXFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhb3JkZXJJc0Z1bGxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz5JbnNlcmlzY2k8L3N0cm9uZz4gbGUgaW5mb3JtYXppb25pIG5lY2Vzc2FyaSBkZWwgYXBwdW50YW1lbnRvIGUgaW52aWEgbGEgcmljaGllc3RhLjwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIm9yZGVyRGF0YS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgPiBvcmRlckRhdGEudG90YWxQcmljZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1saXN0LWVtcHR5XFxcIj48c3Ryb25nPjwvc3Ryb25nPlByZXp6byBtaW5pbW8gZGVsJ29yZGluZSDigqx7eyBvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9kaXY+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyIHNlbGVjdGVkLW9yZGVyc1xcXCIgW25nU3R5bGVdPVxcXCJ7J21heC1oZWlnaHQnOiBtYXhPcmRlckJsb2NrU2l6ZX1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgY2F0ZWdvcnlcXFwiPlxcbiAgICAgICAgICA8c3Bhbj57eyBvcmRlckRhdGEuc2VydmljZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHNwYW4gICpuZ0Zvcj1cXFwibGV0IG9yZGVyU2VydmljZSBvZiBvcmRlckRhdGEuc2VydmljZXNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19IHt7b3JkZXJTZXJ2aWNlLm9wdGlvbi5zeW1ib2x9fTwvaT48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlICE9PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgdG90YWxcXFwiPlxcbiAgICAgICAgPHNwYW4+VG90YWxlIDxpPuKCrHt7IG9yZGVyRGF0YS50b3RhbFByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkLW9yZGVyLWZvcm1cXFwiPlxcbiAgICAgICAgPGxhYmVsPlF1YW5kbyB2dW9pIHN2b2xnZXJlIHF1ZXN0byBsYXZvcm8/PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY2FsZW5kYXItcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogc3VibWl0T3JkZXIgJiYgIU9yZGVyLmRhdGV9XFxcIiAqbmdJZj1cXFwiaXNNb2JpbGVDYWxlbmRhclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXBpY2tlci1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyLXRpbWVzLW8gY2FsZW5kYXItYm94XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHAtY2FsZW5kYXIgbmFtZT1cXFwiZGF0YU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRhdGVcXFwiIGlkPVxcXCJkYXRhT3JhTW9iaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxhIGRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgcmVhZG9ubHlJbnB1dD1cXFwicmVhZG9ubHlJbnB1dFxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcIiFpc01vYmlsZUNhbGVuZGFyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZSBkYXRlcGlja2VyLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXItdGltZXMtbyBjYWxlbmRhci1ib3hcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8cC1jYWxlbmRhciBuYW1lPVxcXCJkYXRhT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGF0ZVxcXCIgaWQ9XFxcImRhdGFPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGEgZGF0YVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIGRhdGVGb3JtYXQ9XFxcImRkIE1NIHl5XFxcIiBbbG9jYWxlXT1cXFwiaXRcXFwiIFttaW5EYXRlXT1cXFwibWluRGF0ZVxcXCIgW21heERhdGVdPVxcXCJtYXhEYXRlXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3REYXRlKClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1jYWxlbmRhcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcImJyb3dzZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIiAoY2xpY2tPdXRzaWRlKT1cXFwiY2xvc2VUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRpbWVPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRpbWVPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci50aW1lXFxcIiB2YWx1ZT1cXFwie3tPcmRlci50aW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJPcmFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vYmlsZUFyZWFcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLXBpY2tlclxcXCIgKm5nSWY9XFxcInRpbWVQaWNrZXJJc1Nob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtZWxlbVxcXCIgKm5nRm9yPVxcXCJsZXQgdGltZSBvZiB0aW1lUGlja2VyXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RUaW1lKHRpbWUpXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICB7e3RpbWV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcIiFicm93c2VyXFxcIj5cXG4gICAgICAgICAgaXMgbm90IHN1cHBvcnQgaWYgY2xpZW50ICE9IGJyb3dzZXIgKGNsaWNrT3V0c2lkZSk9XFxcImNsb3NlVGltZXBpY2tlcigpXFxcIlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aW1lT3JhU2VydmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0aW1lT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIudGltZVxcXCIgdmFsdWU9XFxcInt7T3JkZXIudGltZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiT3JhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2JpbGVBcmVhXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1waWNrZXJcXFwiICpuZ0lmPVxcXCJ0aW1lUGlja2VySXNTaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLWVsZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHRpbWUgb2YgdGltZVBpY2tlclxcXCIgKGNsaWNrKT1cXFwic2VsZWN0VGltZSh0aW1lKVxcXCI+e3t0aW1lfX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICA8bGFiZWw+SW5zZXJpc2NpIGzigJlpbmRpcml6em88L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogIWlzQWRkcmVzc0Z1bGwgJiYgc3VibWl0T3JkZXIgJiYgaXNBZGRyZXNzRGlydHl9XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCI+PC9zcGFuPiAtLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbmRpcml6em9cXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzppc0FkZHJlc3NGdWxsID09PSBmYWxzZSAmJiBpc0FkZHJlc3NEaXJ0eSA9PT0gdHJ1ZX1cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiIChrZXl1cCk9XFxcIm1vZGlmeUFkZHJlc3MoKVxcXCIgKGNoYW5nZSk9XFxcIm1vZGlmeUFkZHJlc3MoKVxcXCI+LS0+XFxuICAgICAgICAgICAgPHAtYXV0b0NvbXBsZXRlIGlkPVxcXCJsdW9nb1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LXNtYWxsXFxcIiBwbGFjZWhvbGRlcj1cXFwiVmlhIEdpdXNlcHBlIFZlcmRpIDEwIE1pbGFub1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOmlzQWRkcmVzc0Z1bGwgPT09IGZhbHNlICYmIGlzQWRkcmVzc0RpcnR5ID09PSB0cnVlfVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRlbGl2ZXJ5X2FkZHJlc3NcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCIgW3N1Z2dlc3Rpb25zXT1cXFwiYWRkcmVzc2VzXFxcIiBmaWVsZD1cXFwiZm9ybWF0dGVkQWRkcmVzc1xcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwiZ2V0QWRkcmVzc2VzKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdEFkZHJlc3MoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc0Z1bGwgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyA9PT0gJydcXFwiPkluc2VyaXNjaSBsJ2luZGlyaXp6byBlc2F0dG88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXJyb3ItYmxvY2tcXFwiICpuZ0lmPVxcXCIhaXNBZGRyZXNzRnVsbCAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzICE9PSAnJyAmJiBpc0FkZHJlc3NPbmVcXFwiPkluZGlyaXp6byBub24gdHJvdmF0bzwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZXJyb3ItYmxvY2tcXFwiICpuZ0lmPVxcXCIhaXNBZGRyZXNzT25lICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgIT09ICcnXFxcIj5JbmRpcml6em8gbm9uIMOoIHNwZWNpZmljbzwvZGl2Pi0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8bGFiZWw+Tm90YTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJub3RhXFxcIiBuYW1lPVxcXCJhcHBsaWNhbnRfZGVzY3JpcHRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvblxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc2NpYSB1bmEgbm90YS4uLlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIChjbGljayk9XFxcInNob3dDb25maXJtYXRpb24oKVxcXCI+QW50ZXByaW1hIGRlbCBwcm9nZXR0bzwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItbGlua3NcXFwiPlxcbiAgICAgICAgICA8cD5cXG4gICAgICAgICAgICBTdGFyYm9vayDCqSAyMDE3IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPiDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcGFnZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICAgIDxoMT5IYWkgYmlzb2dubyBkaSBsYXZvcmF6aW9uaSBpbnRlcm5pPzwvaDE+XFxuICAgICAgICAgIDxoNj7DiCBjb3NpIHNlbXBsaWNlLiBUcm92YSBpbCBzZXJ2aXppby4gQ2FsY29sYSBpbCBwcmV2ZW50aXZvLiBQcmVub3RhLjwvaDY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlYXJjaFxcXCI+XFxuICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwicXVlcnlcXFwiIFtzdWdnZXN0aW9uc109XFxcInJlc3VsdHNcXFwiIGZpZWxkPVxcXCJ0aXRsZVxcXCIgc2Nyb2xsSGVpZ2h0PVxcXCIyNzVweFxcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwic2VhcmNoKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdFJlc3VsdChxdWVyeSlcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb250cm9zb2ZmaXR0byBpbiBjYXJ0b25nZXNzbywgUGFyZXRlIGluIGNhcnRvbmdlc3NvLi4uXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBsZXQtcmVzPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPScyMXB4JyBoZWlnaHQ9JzIxcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIiFzcGluZXJWaWV3ICYmIGNsZWFyVmlld1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgZW1wdHlcXFwiICpuZ0lmPVxcXCJyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBxdWVyeS5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsYW5kaW5nLWhlYWRlci1idXR0b25cXFwiICpuZ0lmPVxcXCJ0ZXN0UGFnZT09PSdyZWdpc3Rlcl9jb21wYW55JyB8fCB0ZXN0UGFnZT09PSdzaGFyZV9zdGFyYm9vaydcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0ncmVnaXN0ZXJfY29tcGFueSdcXFwiIChjbGljayk9XFxcImNhbGxUb0FjdGlvblJlZ2lzdGVyQ29tcGFueSgpXFxcIj5SZWdpc3RyYSBsYSB0dWEgaW1wcmVzYTwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0nc2hhcmVfc3RhcmJvb2snXFxcIiAoY2xpY2spPVxcXCJjYWxsVG9BY3Rpb25TaGFyZVRvRWFybigpXFxcIj5Db25kaXZpZGkgZSBndWFkYWduYTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxhdm9yYXppb25pIHBpw7kgcmljaGllc3RpPC9oMj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlcnZpY2VzXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN3aXBlci13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZXMtY2FyZCBzd2lwZXItc2xpZGVcXFwiICpuZ0Zvcj1cXFwibGV0IHNlcnZpY2Ugb2Ygc2VydmljZXNcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChzZXJ2aWNlKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1jb250YWluZXJcXFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cXFwiJ3VybCgnICsgc2VydmljZS5pbWFnZV91cmwgKyAnKSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hhZG93XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgc2VydmljZS50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICBBIFBBUlRJUkUgREEgPHNwYW4+4oKse3sgc2VydmljZS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgLyAxMDAgfX08L3NwYW4+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIndoeS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMj5QZXJjaMOpIFN0YXJib29rPzwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3F1YWxpdHkucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+TGF2b3JhemlvbmkgZGkgYWx0YSBxdWFsaXTDoDwvaDM+XFxuICAgICAgICAgICAgPGg0Pkkgc2Vydml6aSBzdSBTdGFyYm9vayB2ZW5nb25vIGVzZWd1aXRpIGRhbGxlIG1pZ2xpb3JpIGF6aWVuZGUuIFVzYW5kbyB1biBhbGdvcml0bW8gZGkgcmljZXJjYSwgU3RhcmJvb2sgdHJvdmEgbOKAmWF6aWVuZGEgcGnDuSB2aWNpbmEgYWxsYSB0dWEgYWJpdGF6aW9uZS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hcmtldC1wcmljZS5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV6em8gZ2FyYW50aXRvIGRhbCBtZXJjYXRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+SSBwcmV6emkgc3UgU3RhcmJvb2sgdmVuZ29ubyBjYWxjb2xhdGkgZGEgdW4gYWxnb3JpdG1vIGludGVybm8gZGVsbGEgcGlhdHRhZm9ybWEgcGVyIHJlbmRlcmUgcGnDuSBlcXVvIGUgdHJhc3BhcmVudGUgaWwgbWVyY2F0by48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RpbWluZy5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV2ZW50aXZvIGRpcmV0dG88L2gzPlxcbiAgICAgICAgICAgIDxoND5VbmEgdm9sdGEgc2NlbHRvIGlsIHNlcnZpemlvLCBzZWxlemlvbmEgaSBmb3JtIHNlY29uZG8gbGUgZXNpZ2VuemUgZSBjYWxjb2xhIGlsIHByZXZlbnRpdm8gZGlyZXR0YW1lbnRlIGRhbGxhIHBpYXR0YWZvcm1hLjwvaDQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcInBhcnRuZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+TGUgbWlnbGlvcmkgYXppZW5kZSBwYXJ0bmVyPC9oMj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWJyYW5kcy1zY3JvbGxhYmxlXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJwcmUtZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaWN1cmV6emEgZGVsIHNpdG88L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNlY3VyaXR5XFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3J0b24ucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWN1cmUucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cnVzdC5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNpc3RlbWkgZGkgcGFnYW1lbnRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1wYXltZW50LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hc3RlcmNhcmQucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92aXNhLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW1lcmljYW5leHByZXNzLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RyaXBlLnBuZ1xcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+Q29udGF0dGk8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWNvbnRhY3QtbWV0aG9kc1xcXCI+XFxuICAgICAgICAgICAgPGg0PkF0dGl2byAyNC83PC9oND5cXG4gICAgICAgICAgICA8aDQ+Q2VsbHVsYXJlOiArMzkgMzI3IDI0IDE1IDAyODwvaDQ+XFxuICAgICAgICAgICAgPGg0PkVtYWlsOiBpbmZvQHN0YXJib29rLmNvPC9oND5cXG4gICAgICAgICAgICA8aDQ+VmlhIEx1aWdpIFBpcmFuZGVsbG8gMjEsIEJ1c3RvIEFyc2l6aW8gVkE8L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNlZ3VpY2kgc3U8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNvY2lhbHNcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL3N0YXJib29rY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N0YXJib29rLmNvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+PHN0cm9uZz5TdGFyYm9vazwvc3Ryb25nPiDCqSAyMDE3IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGxhbmRpbmctdG9wLWhlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGgxPlByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLCBuZWxsJ29yYSBlIGlsIGdpb3JubyBjaGUgZGVzaWRlcmk8L2gxPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlN0YXJib29rIDxzcGFuPnNlcnZpY2VzPC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICA8cD5TZWxlemlvbmEgdW5vIGRlaSBzZXJ2aXppIHN1IFN0YXJib29rLCBpbXBvc3RhIGxhIGRhdGEsIG9yYSwgaW5kaXJpenpvIGUgY29uZmVybWEgbOKAmW9yZGluZS4gVmVycmFpIG5vdGlmaWNhdG8gY29uIHVuIHNtcyBlIHVuYSBtYWlsIHF1YW5kbyBs4oCZb3JkaW5lIGUgc3RhdG8gYWNjZXR0YXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhIHF1YWxpZmljYXRvLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbMV19XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UHVsaXppZTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+SGFpIGJpc29nbm8gZGkgdW4gc2Vydml6aW8gZGkgcHVsaXppZSBwZXIgbGEgY2FzYSwgbOKAmXVmZmljaW8gbyBpbCBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTg0ZmNmZWU5ZDY3NTI0MjNhNjFlNzllJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDEsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigxLCAnb2ZmJylcXFwiPlByZW5vdGEgUHVsaXppZTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzJdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkVsZXR0cmljaXN0YTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+VGkgc2VydmUgdW4gZWxldHRyaWNpc3RhIHF1YWxpZmljYXRvIGUgYWZmaWRhYmlsZSBwZXIgbGF2b3JpIGRpIGNhc2EsIHVmZmljaW8gbyBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWU0MWRmMWJhZmE0MWNkYmZiOWQxJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDIsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigyLCAnb2ZmJylcXFwiPlByZW5vdGEgRWxldHRyaWNpc3RhPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZCBncmVlbi1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0zXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1szXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5JZHJhdWxpY288L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGlkcmF1bGljbyBwcm9mZXNzaW9uaXN0YSwgcHVvaSBwcmVub3RhcmxvIHN1Yml0byBzdSBTdGFyYm9vayBzZW56YSBpbXBlZ25vLjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWRmZTRmMWJhZmE0MWNkYmZiOWNiJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDMsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigzLCAnb2ZmJylcXFwiPlByZW5vdGEgSWRyYXVsaWNvPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjZW50ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgUmVuZGkgbGEgdHVhIHZpdGEgcGnDuSBmYWNpbGUuIFByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxPkNvbWUgZnVuemlvbmE/PC9oMT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlNlbGV6aW9uYSBpIHNlcnZpemk8L2Rpdj5cXG4gICAgICAgICAgPHA+T2duaSBjYXRlZ29yaWEgaGEgdW5hIGxpc3RhIGRpIHNlcnZpemkuIFNlbGV6aW9uYSBxdWVsbGkgZGkgcXVpIGhhaSBiaXNvZ25vLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlByZW5vdGEgdW4gYXBwdW50YW1lbnRvPC9kaXY+XFxuICAgICAgICAgIDxwPkluc2VyaXNjaSBpIGRhdGkgbmVjZXNzYXJpIGRlbCBvcmRpbmUgZSBpbnZpYSBsYSByaWNoaWVzdGEuPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9ybVxcXCI+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5JbnZpYSByaWNoaWVzdGE8L2E+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ucy1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1iZWxsXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50aW5nXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJpY2V2aSBsYSBjb25mZXJtYSBlIHJpbGFzc2F0aSE8L2Rpdj5cXG4gICAgICAgICAgPHA+VW4gcHJvZmVzc2lvbmlzdGEgc2kgcHJlc2VudGVyw6AgbmVsbGEgZGF0YSBlIGzigJlvcmEgZGVsIGFwcHVudGFtZW50by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5MZSBwcmluY2lwYWxpIGNpdHTDoDwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5WYXJlc2U8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5NaWxhbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItM1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5Ub3Jpbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBjaGUgdGkgZGEgbGEgcG9zc2liaWxpdMOgIGRpIHByZW5vdGFyZSBpIHByb2Zlc3Npb25pc3RpIG5lbGwnb3JhIGUgZGF0YSBjaGUgdHUgZGVzaWRlcmkgc2VuemEgZG92ZXIgY2hpYW1hcmUgZSBsYXNjaWFyZSBhcHB1bnRhbWVudGkgdHJhbWl0ZSB0ZWxlZm9ubyBvIGVtYWlsLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgd2l0aG91dC10YWJzXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtbmF2aWdhdGVcXFwiPlxcbiAgICAgIDxhICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiB0YWJzXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzp0YWIuc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJyZW5kZXJQYWdlKHRhYi5uYW1lKVxcXCI+XFxuICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBvcmRlcnMtY29udGFpbmVyXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlcnMtZXJyb3JcXFwiICpuZ0lmPVxcXCJwYWdlRGF0YS5sZW5ndGggPT09IDAgJiYgcmVxdWVzdElzQ29tcGxldGVcXFwiPnt7ZW1wdHlMaXN0VGl0bGV9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWluZm9ybWF0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBvcmRlciBvZiBwYWdlRGF0YVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBwYWdhbWVudG8uLi4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBBc3NlZ25hdG9cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+PC9zcGFuPiBBbm51bGxhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQXNzZWduYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RpJ1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIHBhZ2FtZW50by4uLi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKGRhdGVGb3JtYXRpbmcoJ25vdycpLCBvcmRlci5kYXRlKSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxhY2tcXFwiPjwvc3Bhbj4gU2NhZHV0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk4ICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBDb21wbGV0YXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj48L3NwYW4+IEFubnVsbGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktbmFtZVxcXCI+XFxuICAgICAgICAgICAge3sgY2F0ZWdvcmllc1tvcmRlci5jYXRlZ29yeV90eXBlXSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZGF0ZVxcXCI+XFxuICAgICAgICAgICAge3sgZGF0ZUZvcm1hdGluZyhvcmRlci5kYXRlKSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItcm93IHByb2R1Y3RzIGNvbC14bC00XFxcIj5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBvcmRlci5kZXRhaWxzXFxcIiBbbmdDbGFzc109XFxcInsnc2VydmljZSc6cHJvZHVjdC50eXBlID09PSAnc2VydmljZSd9XFxcIj57eyBwcm9kdWN0LnRpdGxlIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgIT09ICdzZXJ2aWNlJyAmJiBwcm9kdWN0LmFtb3VudCA+IDBcXFwiPuKCrHt7IHByb2R1Y3QuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSB0b3RhbFxcXCI+VG90YWxlIDxpPuKCrHt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PiAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygb3JkZXIuZGV0YWlsc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2UnOnByb2R1Y3QudHlwZSA9PT0gJ3NlcnZpY2UnfVxcXCI+e3sgcHJvZHVjdC50aXRsZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC50eXBlICE9PSAnc2VydmljZSdcXFwiPnt7IHByb2R1Y3QuZGVzY3JpcHRpb24gfX08L2k+PC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIml0ZW0gdG90YWxcXFwiPlRvdGFsZSA8aT7igqx7eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+SW5kaXJpenpvOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXQgfX0sIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0X251bWJlciB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLmNpdHkgfX0sIHt7IG9yZGVyLmFkZHJlc3MucG9zdGFsX2NvZGUgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5wcm92aW5jZSB9fSwge3sgb3JkZXIuYWRkcmVzcy5jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwgfHwgb3JkZXIuc3RhdHVzPT09MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPkluIGF0dGVzYSBkaSBjb25mZXJtYS4uLjwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIubWVyY2hhbnQgJiYgb3JkZXIubWVyY2hhbnQgIT09IG51bGwgJiYgb3JkZXIuc3RhdHVzPT09MVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLm1lcmNoYW50LnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIihvcmRlci5jdXN0b21lciB8fCBvcmRlci5jdXN0b21lciAhPT0gbnVsbCkgJiYgb3JkZXIuc3RhdHVzPT09OTggJiYgYXV0aERhdGEuX2lkICE9PSBvcmRlci5jdXN0b21lcl9pZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIob3JkZXIuY3VzdG9tZXIgfHwgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTk4ICYmIGF1dGhEYXRhLl9pZCA9PT0gb3JkZXIuY3VzdG9tZXJfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLmN1c3RvbWVyICYmIG9yZGVyLmN1c3RvbWVyICE9PSBudWxsICYmICghb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09OTlcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLXJvdyBkZXNjcmlwdGlvbiBjb2wteGwtNFxcXCI+XFxuICAgICAgICAgICAgICB7eyBvcmRlci5kZXNjcmlwdGlvbiB9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZm9vdGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29kZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+Q09ESUNFOjwvc3Bhbj5cXG4gICAgICAgICAgICB7eyBvcmRlci5faWQgfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29tcGxldGFPcmRlcihvcmRlci5faWQpXFxcIj5Db21wbGV0YSBzZXJ2aXppbzwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5QcmV2ZW50aXZvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiIChjbGljayk9XFxcImVkaXRPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+TW9kaWZpY2E8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKG9yZGVyLl9pZClcXFwiPkNvbmZlcm1hIHNlcnZpemlvPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihvcmRlci5faWQpXFxcIj5SZWF0dGl2YSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsT3JkZXIob3JkZXIuX2lkKVxcXCI+QW5udWxsYSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY29udGludWVPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJvY2VkaTwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9jayBhcmNoaXZlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAzICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIiAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2Rpdj4gLS0+XFxuPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1wYWdlXFxcIiBbbmdDbGFzc109XFxcInt3aGl0ZUJnOiBzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJyB8fCBzZWxlY3RUYWIgPT09ICdwcml2YWN5JyB8fCBzZWxlY3RUYWIgPT09ICdoZWxwJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHdpdGhvdXQtdGFic1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGVmdC1uYXZpZ2F0ZVxcXCIgKHN3aXBlbGVmdCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCIgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiPlxcbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWxlZnQucHgnOiBkZWx0YX1cXFwiPlxcbiAgICAgICAgICA8YSAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6dGFiLnVybCA9PT0gc2VsZWN0VGFifVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9wcm9maWxlJywgdGFiLnVybF1cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDxhICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj48c3Bhbj48L3NwYW4+PGRpdj5Fc2NpPC9kaXY+PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1zZXR0aW5nc1xcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3NldHRpbmdzJ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkluZm9ybWF6aW9uaSBkZWwgYWNjb3VudDwvZGl2PlxcbiAgICAgICAgPGZvcm0gI2NoYW5nUHJvZmlsZT1cXFwibmdGb3JtXFxcIj5cXG4gICAgICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgICAgIDxsYWJlbD5OT01FIENPTVBMRVRPPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOb21lIENvZ25vbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmZ1bGxuYW1lXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPkNvZ25vbWU8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdG5hbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmxhc3RuYW1lXFxcIiByZXF1aXJlZCBkaXNhYmxlZD4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5Ob21lIEF6aWVuZGE8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGF0cm9ueW1pY1xcXCIgI2Z1bGxuYW1lPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucGF0cm9ueW1pY1xcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGxhYmVsPkNFTExVTEFSRTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk51bWVyb1xcXCIgI3Bob25lX251bWJlcj1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBob25lX251bWJlclxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8bGFiZWw+RU1BSUw8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbmRpcml6em8gZW1haWxcXFwiIHZhbHVlPVxcXCJcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmVtYWlsXFxcIiByZXF1aXJlZCBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCIgZGlzYWJsZWQ+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBhc3N3b3JkLWJsb2NrXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFzc3dvcmQtY29udGFpbmVyXFxcIj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwYXNzd29yZFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08c3Bhbj7igKLigKLigKLigKLigKLigKLigKLigKLigKLigKLigKI8L3NwYW4+LS0+XFxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2hhbmdlLXBhc3N3b3JkXFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCI+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIgc2Vjb25kXFxcIj5JbmRpcml6em8gZGkgZmF0dHVyYXppb25lPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5JbmRpcml6em8gZGVsIGRvbWljaWxpbzwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJhZGRyZXNzMVxcXCIgI3N0cmVldD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnN0cmVldFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBWZXJkaSAxM1xcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+Q2l0dMOgIGUgQ0FQPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJhZGRyZXNzMlxcXCIgI2NpdHk9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5jaXR5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2l0dMOgXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBzZWNvbmRcXFwiIG5hbWU9XFxcIm51bWJlcjJcXFwiICNwb3N0YWxfY29kZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBvc3RhbF9jb2RlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ0FQXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5Qcm92aW5jaWEgZSBOYXppb25lPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJjaXR5XFxcIiAjcHJvdmluY2U9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wcm92aW5jZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlByb3ZpbmNpYVxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgc2Vjb25kXFxcIiBuYW1lPVxcXCJjb3VudHJ5XFxcIiAjY291bnRyeT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmNvdW50cnlcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXppb25lXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5QYXJ0aXRhIElWQTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaXZhXFxcIiBwbGFjZWhvbGRlcj1cXFwiUC5JVkFcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkNvZGljZSBGaXNjYWxlPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvZGljZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvZGljZSBGaXNjYWxlXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgICAgICAgICA8c3Ryb25nICpuZ0lmPVxcXCJmb3JtRXJyb3IudGl0bGUubGVuZ3RoID4gMFxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvc3Ryb25nPiB7e2Zvcm1FcnJvci5tZXNzYWdlfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVQcm9maWxlKClcXFwiPkFnZ2lvcm5hIEluZm9ybWF6aW9uaTwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNpZ24tb3V0XFxcIj48L3NwYW4+IExvZyBvdXQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRzLXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdwYXltZW50J1xcXCI+XFxuICAgICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWxvZ28ge3sgZm9ybWF0Q3NzQ2xhc3MoY2FyZC5icmFuZCkgfX1cXFwiPjxzcGFuPioqKioge3sgY2FyZC5sYXN0NCB9fTwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlzRGVmYXVsdFxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkID09PSBjYXJkLmlkXFxcIj5EZWZhdWx0PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkICE9PSBjYXJkLmlkXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RDYXJkKGNhcmQuaWQpXFxcIj5EZWZhdWx0PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJkZWxldGVDYXJkKGNhcmQuaWQpXFxcIj5SaW11b3ZpPC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImVkaXRDYXJkKGNhcmQuaWQpXFxcIj5Nb2RpZmljYTwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pbmZvcm1hdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Ob21lOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5OdW1lcm86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICoqKioge3sgY2FyZC5sYXN0NCB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNjYWRlbnphOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmV4cF9tb250aCB9fS97eyBmb3JtYXRZZWFyKGNhcmQuZXhwX3llYXIpIH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGlwbzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5icmFuZCB9fSB7eyBjYXJkLmZ1bmRpbmcgfX0ge3sgY2FyZC5vYmplY3QgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaW5mb3JtYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+SW5kaXJpenpvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3NfbGluZTEgfX0ge3sgY2FyZC5hZGRyZXNzX2xpbmUyIH19IDxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3Nfc3RhdGUgfX0ge3sgY2FyZC5hZGRyZXNzX2NpdHkgfX0gPGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYWRkcmVzc196aXAgfX0ge3sgY2FyZC5hZGRyZXNzX2NvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmV3LWNhcmRcXFwiIChjbGljayk9XFxcImFkZE5ld0NhcmQoKVxcXCI+XFxuICAgICAgICAgICAgQWdnaXVuZ2kgdW4gbWV0b2RvIGRpIHBhZ2FtZW50b1xcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJ1xcXCI+XFxuICAgICAgICA8cD48c3Ryb25nPjEuIEFDQ0VTU08gRSBSRUdPTEFNRU5UTyBERUwgU0lUTyBTVEFSQk9PSzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4xLiBBY2Nlc3NvIGFsIFNpdG86IDwvc3Ryb25nPkXigJkgcG9zc2liaWxlIGF2ZXJlIGFjY2Vzc28gYWQgYWxjdW5lIGFyZWUgZGVsIFNpdG8gd2ViIGFuY2hlIHNlbnphIGVmZmV0dHVhcmUgdW4gT3JkaW5lIG8gc2VuemEgcHJvY2VkZXJlIGFsbGEgcmVnaXN0cmF6aW9uZSBkZWkgcHJvcHJpIGRhdGkuIExhIG1hZ2dpb3IgcGFydGUgZGVsbGUgYXJlZSBkZWwgU2l0byBzb25vIGFjY2Vzc2liaWxpIGEgY2hpdW5xdWUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjIuIEFjY2V0dGF6aW9uZSBkZWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IExhIG5hdmlnYXppb25lIGluIHF1YWx1bnF1ZSBhcmVhIGRlbCBTaXRvIGNvbXBvcnRhIGwnYWNjZXR0YXppb25lIGRlbCBSZWdvbGFtZW50byBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGVkIHV0ZW50aSBkZWwgU2l0byBjaGUgcmlmaXV0aW5vIGRpIGFjY2V0dGFyZSBpbCBSZWdvbGFtZW50byBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGxhc2NpYXJlIGltbWVkaWF0YW1lbnRlIGlsIFNpdG8gZSBub24gYXZyYW5ubyBsYSBwb3NzaWJpbGl0w6AgZGkgb3JkaW5hcmUgc2Vydml6aSB0cmFtaXRlIGlsIFNpdG8gc3Rlc3NvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS4zLiBNb2RpZmljaGUgYWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IFNUQVJCT09LIGhhIGZhY29sdMOgIGRpIG1vZGlmaWNhcmUgaWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gcXVhbHNpYXNpIG1vbWVudG8uIE9jY29ycmUgcGVydGFudG8gY29udHJvbGxhcmUgcGVyaW9kaWNhbWVudGUgaWwgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gdmlnb3JlIGFsIG1vbWVudG8gcG9pY2jDqSBlc3NhIHZpbmNvbGEgaSB2aXNpdGF0b3JpIGUgZ2xpIHV0ZW50aSBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHNvbm8gdGVudXRpIGFsIHJpc3BldHRvIGRlbGxlIHBvbGljeSBlIGRlbGxhIGRpc2NpcGxpbmEgaW4gdmlnb3JlIGFsIG1vbWVudG8gaW4gY3VpIGVmZmV0dHVhbm8gdW4gT3JkaW5lIHRyYW1pdGUgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjQuIFJlc3BvbnNhYmlsaXTDoDo8L3N0cm9uZz4gU3BldHRhIGFpIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gcHJlZGlzcG9ycmUgcXVhbnRvIG5lY2Vzc2FyaW8gcGVyIGF2ZXJlIGFjY2Vzc28gYWwgU2l0byBzdGVzc28uIElub2x0cmUsIGkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGdhcmFudGlyZSBjaGUgdHV0dGkgY29sb3JvIGNoZSBoYW5ubyBhY2Nlc3NvIGFsIFNpdG8gdHJhbWl0ZSBsYSBsb3JvIGNvbm5lc3Npb25lIGFkIEludGVybmV0IHNpYW5vIGEgY29ub3NjZW56YSBkZWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gZSBsYSByaXNwZXR0aW5vLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4gU1RBVFVTIERFTEzigJlVVEVOVEUgREVMIFNJVE8gU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuMS4gQ2FwYWNpdMOgIGdpdXJpZGljYSBlZCBldMOgOiA8L3N0cm9uZz5FZmZldHR1YW5kbyB1biBPcmRpbmUgdHJhbWl0ZSBpbCBTaXRvLCBs4oCZdXRlbnRlIGdhcmFudGlzY2U6PGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMS48L3N0cm9uZz4gZGkgYXZlciBsYSBjYXBhY2l0w6AgZGkgYWdpcmUgZSBjb25jbHVkZXJlIGNvbnRyYXR0aSBnaXVyaWRpY2FtZW50ZSB2aW5jb2xhbnRpPGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMi48L3N0cm9uZz4gZGkgYXZlcmUgY29tcGl1dG8gMTggYW5uaTwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+My4gTU9EQUxJVMOAIERJIEVNSVNTSU9ORSBERUxMIE9SRElORSBFIERJIEVMQUJPUkFaSU9ORSBERUxM4oCZT1JESU5FPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4zLjEuIENvbXBpbGF6aW9uZSBkZWxs4oCZT3JkaW5lOiA8L3N0cm9uZz5Eb3BvIGF2ZXIgc2VsZXppb25hdG8gaWwgc2Vydml6aW8gY2hlIGludGVuZGUgb3JkaW5hcmUgZGEgdW4gcHJvZmVzc2lvbmlzdGEgcHJlc2NlbHRvIGRhbGxhIHBpYXR0YWZvcm1hIGVkIGF2ZXIgZm9ybml0byBsZSBpbmZvcm1hemlvbmksIGzigJl1dGVudGUgaGEgZmFjb2x0w6AgZGkgZWZmZXR0dWFyZSBs4oCZT3JkaW5lIGNsaWNjYW5kbyBzdWwsIG8gc2VsZXppb25hbmRvIGlsLCBwdWxzYW50ZSDigJxQcm9jZWRpIGNvbiBsJ29yZGluZeKAnSBlIOKAnFByb2NlZGkgY29uIGwnYWNxdWlzdG/igJ0uIFNpIHJpY29yZGEgY2hlIMOoIGltcG9ydGFudGUgY29udHJvbGxhcmUgdHV0dGUgbGUgaW5mb3JtYXppb25pIGltbWVzc2UgZSBjb3JyZWdnZXJlIGV2ZW50dWFsaSBlcnJvcmkgcHJpbWEgZGkgY2xpY2NhcmUgc3VsIHB1bHNhbnRlIG8gZGkgc2VsZXppb25hcmxvIHBvaWNow6ksIGRvcG8gYXZlcmxvIGZhdHRvLCBpbCBwcm9jZWRpbWVudG8gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgaGEgaW5pemlvIGUgbm9uIMOoIHBpw7kgcG9zc2liaWxlIGNvcnJlZ2dlcmUgZXZlbnR1YWxpIGVycm9yaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbOKAmU9yZGluZTogPC9zdHJvbmc+VW5hIHZvbHRhIGNoZSBs4oCZT3JkaW5lIMOoIHN0YXRvIGlub2x0cmF0byBlIGlsIHBhZ2FtZW50byDDqCBzdGF0byBhdXRvcml6emF0byBub24gw6ggcGnDuSBwb3NzaWJpbGUgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBs4oCZT3JkaW5lIGUgbm9uIHNpIGhhIGRpcml0dG8gYWQgYWxjdW4gcmltYm9yc28uIE92ZSBkZXNpZGVyaSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGzigJlPcmRpbmUsIGzigJl1dGVudGUgcHXDsiByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGksIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBjb211bmljYXJnbGkgbGEgcmljaGllc3RhIGRlbGzigJl1dGVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgcG90cmViYmUgYXZlcmUgZ2nDoCBhdnV0byBpbml6aW8uIElsIGNsaWVudGUsIGFpIHNlbnNpIGRlbGwnYXJ0LiA1NSBsZXR0LiBhKSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBub24gaGEgZGlyaXR0byBhIHJlY2VkZXJlIGRhZ2xpIE9yZGluaSBlZmZldHR1YXRpIHVuYSB2b2x0YSBjaGUgaWwgYmVuZSBvIHNlcnZpemlvIHJpY2hpZXN0byDDqCBzdGF0byBjb25zZWduYXRvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My4zLiBBdXRvcml6emF6aW9uZSBhbCBwYWdhbWVudG86PC9zdHJvbmc+IEluIGNhc28gZGkgbWFuY2F0YSBhdXRvcml6emF6aW9uZSByZWxhdGl2YSBhZCB1biBxdWFsc2lhc2kgcGFnYW1lbnRvLCBs4oCZT3JkaW5lIG5vbiB2aWVuZSBlbGFib3JhdG8gbyBub24gdmllbmUgY29tdW5pY2F0byBhbGxhIHBpYXR0YWZvcm1hLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My40LiBFbGFib3JhemlvbmUgZGVsbOKAmU9yZGluZSBlIHJpZml1dG8gZGkgT3JkaW5pIGRhIHBhcnRlIGRlbCBwcm9mZXNzaW9uaXN0YTogPC9zdHJvbmc+QWxsYSByaWNlemlvbmUgZGVsbOKAmU9yZGluZSwgU1RBUkJPT0sgbmUgaW5pemlhIGzigJllbGFib3JhemlvbmUgY29uIGxhIHRyYXNtaXNzaW9uZSBkZWxsbyBzdGVzc28gYWkgcHJvZmVzc2lvbmlzdGkgaW50ZXJlc3NhdGkgZSBub3RpZmljYSBhbGzigJl1dGVudGUsIHRyYW1pdGUgc21zIGUgbWFpbCwgY2hlIGzigJlPcmRpbmUgw6ggc3RhdG8gYXNzZWduYXRvLiBTaSBzcGVjaWZpY2EgY2hlIHF1YWxzaWFzaSBwYWdpbmEgZGkgY29uZmVybWEgY2hlIGzigJl1dGVudGUgcG9zc2EgdmlzdWFsaXp6YXJlIHN1bCBTaXRvIGUgcXVhbHNpYXNpIGNvbmZlcm1hIGRpIE9yZGluZSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcmljZXZhIHRyYW1pdGUgZS1tYWlsIGluZGljYW5vIGVzY2x1c2l2YW1lbnRlIGNoZSBsJ09yZGluZSBkZWxs4oCZdXRlbnRlIMOoIHN0YXRvIGFzc2VnbmF0byBvIMOoIGluIGNvcnNvLiBTVEFSQk9PSyBpbmNvcmFnZ2lhIHR1dHRpIGkgcHJvcHJpIHByb2Zlc3Npb25pc3RpIGFkIGFjY2V0dGFyZSB0dXR0aSBnbGkgT3JkaW5pIGVkIGEgY29tdW5pY2FyZSB0ZW1wZXN0aXZhbWVudGUgZXZlbnR1YWxpIHJpZml1dGksIGUgY29tdW5pY2EgYWxs4oCZdXRlbnRlIChnZW5lcmFsbWVudGUgdHJhbWl0ZSBlLW1haWwpIG5vbiBhcHBlbmEgc2lhIHJhZ2lvbmV2b2xtZW50ZSBwb3NzaWJpbGUgb2duaSBldmVudHVhbGUgcmlmaXV0byBkYSBwYXJ0ZSBkZWwgcHJvZmVzc2lvbmlzdGEuIEluIG9nbmkgY2FzbywgaSBwcm9mZXNzaW9uaXN0aSBwb3Nzb25vIHNjZWdsaWVyZSBkaSByaWZpdXRhcmUgZ2xpIE9yZGluaSBpbiBxdWFsc2lhc2kgbW9tZW50byBwZXIgaWwgZmF0dG8gZGkgZXNzZXJlIGVjY2Vzc2l2YW1lbnRlIGltcGVnbmF0aSwgYSBjYXVzYSBkZWxsZSBjb25kaXppb25pIGF0bW9zZmVyaWNoZSBvIHBlciBxdWFsc2lhc2kgYWx0cmEgcmFnaW9uZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuNS4gRmluaXR1cmEgZGVsIHNlcnZpemlvOjwvc3Ryb25nPiBJIHRlbXBpIHN0aW1hdGkgcGVyIGkgc2Vydml6aSBkYWwgaW5pemlvIGEgZmluZSBsYXZvcmkgdmFyaWFubyB0cmEgMS0yIGdpb3JuaSBhIHNlY29uZGEgZGVsIHRpcG8gZGkgc2Vydml6aW8gb3JkaW5hdG8uIFNUQVJCT09LIGUgaSBwcm9mZXNzaW9uaXN0aSBub24gZ2FyYW50aXNjb25vIGNoZSBpIHNlcnZpemkgdmVycmFubm8gZmluaXRpIGVudHJvIGkgdGVtcGkgc3RpbWF0aS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjQuIFBSRVpaTyBFIFBBR0FNRU5UTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NC4xLiBJVkEgZSBjb3N0aSBkaSBzZXJ2aXppbzo8L3N0cm9uZz4gSSBwcmV6emkgc29ubyBxdWVsbGkgaW5kaWNhdGkgc3VsIFNpdG8uIEkgcHJlenppIHNvbm8gY29tcHJlbnNpdmkgZGkgSVZBLiBUYWxpIGNvc3RpIHZlbmdvbm8gYWdnaXVudGkgYWxs4oCZaW1wb3J0byB0b3RhbGUgZG92dXRvLCBzZSBhcHBsaWNhYmlsaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMi4gRXJyYXRhIGluZGljYXppb25lIGRlbCBwcmV6em86PC9zdHJvbmc+IElsIHByZXNlbnRlIFNpdG8gd2ViIGNvbnRpZW5lIHVuIHZhc3RvIG51bWVybyBkaSBtZW51IGVkIMOoIHNlbXByZSBwb3NzaWJpbGUgY2hlIGFsY3VuaSBkaSBlc3NpIHBvc3Nhbm8gcmVjYXJlIHVuYSBpbmRpY2F6aW9uZSBpbmVzYXR0YSBkZWwgcHJlenpvLiBRdWFsb3JhIGlsIHByZXp6byBlc2F0dG8gZGkgdW4gT3JkaW5lIHNpYSBwacO5IGVsZXZhdG8gZGVsIHByZXp6byBpbmRpY2F0byBzdWwgU2l0bywgU1RBUkJPT0sgbm9ybWFsbWVudGUgcHJvdnZlZGUgYSBjb250YXR0YXJlIGzigJl1dGVudGUgcHJpbWEgZGVsbGEgc3BlZGl6aW9uZSBkZWxsJ09yZGluZS4gSW4gdGFsIGNhc28sIG7DqSBTVEFSQk9PSyBuw6kgaWwgcHJvZmVzc2lvbmlzdGEgaW50ZXJlc3NhdG8gaGFubm8gYWxjdW4gb2JibGlnbyBkaSBhc3NpY3VyYXJlIGNoZSBsJ09yZGluZSB2ZW5nYSBmb3JuaXRvIGFsbOKAmXV0ZW50ZSBhbCBwcmV6em8gaW5mZXJpb3JlIGVycm9uZWFtZW50ZSBpbmRpY2F0byBuw6kgZGkgcmltYm9yc2FyZSBhbGzigJl1dGVudGUgbGEgZGlmZmVyZW56YSByaXNwZXR0byBhbCBwcmV6em8gZXJyYXRvLiBJbiBjYXNvIGlsIHByZXp6byBzaWEgZWNjZXNzaXZhbWVudGUgZWxldmF0byByaXNwZXR0byBhbCBwcmV6em8gb3JpZ2luYXJpYW1lbnRlIGNvbnZlbnV0byBlIGwndXRlbnRlIHNpYSB1biBjb25zdW1hdG9yZSBhaSBzZW5zaSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBsJ3V0ZW50ZSBhdnLDoCBmYWNvbHTDoCBkaSByZWNlZGVyZSBkYWxsJ09yZGluZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMy4gTW9kYWxpdMOgIGRpIHBhZ2FtZW50bzo8L3N0cm9uZz4gSWwgcGFnYW1lbnRvIGRlaSBzZXJ2aXppIGRldmUgZXNzZXJlIGVmZmV0dHVhdG8gbWVkaWFudGUgdW5hIGNhcnRhIGRpIGNyZWRpdG8vZGViaXRvLjxicj5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4gU0VSVklaSU8gQ0xJRU5USTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4xIERpc3Bvc2l6aW9uaSBHZW5lcmFsaTo8L3N0cm9uZz4gU1RBUkJPT0sgY29uc2lkZXJhIGlsIFNlcnZpemlvIENsaWVudGkgZXN0cmVtYW1lbnRlIGltcG9ydGFudGUuIElsIFNlcnZpemlvIENsaWVudGkgY2VyY2EgZHVucXVlIGRpIHByZXN0YXJlIGFzc2lzdGVuemEgYWxs4oCZdXRlbnRlLCBxdWFuZG8gcG9zc2liaWxlLCBpbiBjYXNvIGRpIHByb2JsZW1pIGNvbiBsJ09yZGluZS4gTOKAmXV0ZW50ZSBwdcOyIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIFNlcnZpemlvIENsaWVudGkgYW5kYW5kbyBzdWxsYSBwYWdpbmEgaGVscCBkZWwgc2l0by48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbCdPcmRpbmU6PC9zdHJvbmc+IE92ZSBs4oCZdXRlbnRlIGRlc2lkZXJpIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgaWwgcHJvcHJpbyBPcmRpbmUgZG9wbyBjaGUgZXNzbyBzaWEgc3RhdGEgaW5vbHRyYXRvIGUgaWwgcmVsYXRpdm8gcGFnYW1lbnRvIGF1dG9yaXp6YXRvLCBs4oCZdXRlbnRlIGhhIGZhY29sdMOgIGRpIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSywgY29uIGxlIG1vZGFsaXTDoCBzb3ByYSBkZXNjcml0dGUsIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgY29tdW5pY2FyZSBsZSByaWNoaWVzdGUgZGVsIGNsaWVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGwnT3JkaW5lIHBvdHJlYmJlIGF2ZXJlIGdpw6AgYXZ1dG8gaW5pemlvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS4zLiBSZWNsYW1pIGUgZmVlZGJhY2sgZGEgcGFydGUgZGVnbGkgdXRlbnRpOjwvc3Ryb25nPiBOZWxs4oCZZXZlbnR1YWxpdMOgIGNoZSBs4oCZdXRlbnRlIG5vbiBzaWEgc29kZGlzZmF0dG8gZGVsbGEgcXVhbGl0w6AgZGkgdW4gcXVhbHNpYXNpIHNlcnZpemlvIG8gZGVsIHNlcnZpemlvIGZvcm5pdG8gZGEgdW4gcHJvZmVzc2lvbmlzdGEsIFNUQVJCT09LIGludml0YSBs4oCZdXRlbnRlIGEgZmFyIGNvbm9zY2VyZSBsYSBwcm9wcmlhIG9waW5pb25lIHRyYW1pdGUgaWwgU2l0bywgaW4gZm9ybWEgZGkgdmFsdXRhemlvbmksIGNvbW1lbnRpIGUgcmVjZW5zaW9uaSBjaGUgcmlmbGV0dGFubyBsYSBwcm9wcmlhIGVzcGVyaWVuemEuIExlIFJlY2Vuc2lvbmkgc29ubyB1bmEgcGFydGUgaW1wb3J0YW50ZSBkZWwgcHJvY2Vzc28gZGkgY29udHJvbGxvIHF1YWxpdMOgIGRpIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS40LiBSaXNhcmNpbWVudG86PC9zdHJvbmc+IE5lbGzigJlldmVudHVhbGl0w6AgY2hlIGzigJl1dGVudGUgbm9uIHNpYSBzb2RkaXNmYXR0byBkZWxsYSBxdWFsaXTDoCBkaSB1biBxdWFsc2lhc2kgc2Vydml6aW8gbyBkZWwgc2Vydml6aW8gZm9ybml0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBlIGRlc2lkZXJpIHJpY2hpZWRlcmUgdW4gcmltYm9yc28sIHVuYSByaWR1emlvbmUgcHJvcG9yemlvbmFsZSBkZWwgcHJlenpvIG8gcXVhbHNpYXNpIGFsdHJhIGZvcm1hIGRpIHJpc2FyY2ltZW50bywgw6ggdGVudXRvIGEgY29udGF0dGFyZSBkaXJldHRhbWVudGUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBwcmVzZW50YXJlIGlsIHByb3ByaW8gcmVjbGFtbyBlLCBzZSBkZWwgY2FzbywgYWQgb3NzZXJ2YXJlIGxlIHByb2NlZHVyZSBkaSByZWNsYW1vIHByZXZpc3RlIGRhbCBwcm9mZXNzaW9uaXN0YSBzdGVzc28uIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gc2lhIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEsIG8gcXVhbG9yYSBpbCBwcm9mZXNzaW9uaXN0YSByaWZpdXRpIGRpIG9jY3VwYXJzaSBkZWwgcmVjbGFtbyBkZWxs4oCZdXRlbnRlLCBxdWVzdOKAmXVsdGltbyBwdcOyIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyBjb24gbGUgbW9kYWxpdMOgIHNvcHJhIGRlc2NyaXR0ZSBlbnRybyA0OCBvcmUgZGFsbOKAmWlub2x0cm8gZGVsbCdPcmRpbmUgZSB1bm8gZGVpIENvbnN1bGVudGkgZGVsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgdGVudGVyw6AgZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIHJpY2hpZWRlcmUgdW4gcmlzYXJjaW1lbnRvIHBlciBjb250byBkZWxs4oCZdXRlbnRlLiBTaSBmYSBwcmVzZW50ZSBjaGUgU1RBUkJPT0sgbm9uIGhhIGFsY3VuIGNvbnRyb2xsbyBzdWkgcHJvZmVzc2lvbmlzdGkgbsOpIHN1bGxhIHF1YWxpdMOgIGRlaSBzZXJ2aXppIG8gc3VsIHNlcnZpemlvIGZvcm5pdG8gZGFpIHByb2Zlc3Npb25pc3RpIHN0ZXNzaSBlIG5vbiDDqCBpbiBncmFkbyBkaSBmb3JuaXJlLCBuw6kgYXNzdW1lIGFsY3VuYSByZXNwb25zYWJpbGl0w6AgbyBpbXBlZ25vIGRpIGZvcm5pcmUsIGFsY3VuIHJpc2FyY2ltZW50byBpbiBmYXZvcmUgZGVsbOKAmXV0ZW50ZSBwZXIgY29udG8gZGkgcXVhbHNpYXNpIHByb2Zlc3Npb25pc3RhLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ni4gTElDRU5aQSBE4oCZVVNPPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz42LjEuIFVzbyBjb25zZW50aXRvOjwvc3Ryb25nPiBF4oCZIGNvbnNlbnRpdG8gYWxs4oCZdXRlbnRlIHV0aWxpenphcmUgaWwgU2l0byBub25jaMOpIHN0YW1wYXJlIGUgc2NhcmljYXJlIGRhbCBTaXRvIGVzdHJhdHRpIGRlbCBTaXRvIHN0ZXNzbyBwZXIgdXNvIHBlcnNvbmFsZSBub24gYXZlbnRlIGZpbmFsaXTDoCBjb21tZXJjaWFsaSBhbGxlIHNlZ3VlbnRpIGNvbmRpemlvbmk6PGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMS4gbOKAmXV0ZW50ZSBub24gZGV2ZSB1dGlsaXp6YXJlIGlsIFNpdG8gaW4gbW9kbyBpbXByb3ByaW8sIGl2aSBpbmNsdXNvIG1lZGlhbnRlIHRlY25pY2hlIGRpIHBpcmF0ZXJpYSBpbmZvcm1hdGljYSAoaGFja2luZykgbyBkaSBlc3RyYXppb25lIGluZm9ybWF0aXp6YXRhIGRpIGRhdGkgKHNjcmFwaW5nKS48L3N0cm9uZz4gPGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMi4gUmVzdHJpemlvbmkgZOKAmXVzbzo8L3N0cm9uZz4gU2Fsdm8gcGVyIHF1YW50byBwcmV2aXN0byBhbCBwYXJhZ3JhZm8gNi4xLCBpbCBwcmVzZW50ZSBTaXRvIG5vbiBwdcOyIGVzc2VyZSB1dGlsaXp6YXRvIGUgbmVzc3VuYSBzdWEgcGFydGUgcHXDsiBlc3NlcmUgcmlwcm9kb3R0YSBvIGFyY2hpdmlhdGEgaW4gYWxjdW4gYWx0cm8gc2l0byB3ZWIgbsOpIHB1w7IgZXNzZXJlIGluc2VyaXRvIGluIGFsY3VuIHNpc3RlbWEgbyBzZXJ2aXppbywgcHViYmxpY28gbyBwcml2YXRvLCBwZXIgaWwgcmVjdXBlcm8gZWxldHRyb25pY28gZGVsbGUgaW5mb3JtYXppb25pIHNlbnphIGxhIHByZXZlbnRpdmEgYXV0b3JpenphemlvbmUgc2NyaXR0YSBkaSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjYuMS4zLiBSaXNlcnZhIGRpIERpcml0dGk6PC9zdHJvbmc+IEkgZGlyaXR0aSBub24gZXNwbGljaXRhbWVudGUgY29uY2Vzc2kgbmVsIHByZXNlbnRlIFNpdG8gd2ViIHNvbm8gcmlzZXJ2YXRpLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4gQUNDRVNTTyBBTCBTRVJWSVpJTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4xLiBEaXNwb25pYmlsaXTDoCBkZWwgU2l0bzo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBzaSBhZG9wZXJpIHBlciBmYXIgc8OsIGNoZSBs4oCZYWNjZXNzbyBhbCBTaXRvIHBvc3NhIGRpIG5vcm1hIGF2dmVuaXJlIHZlbnRpcXVhdHRybyBvcmUgc3UgdmVudGlxdWF0dHJvICgyNGgvMjQpLCBTVEFSQk9PSyBub24gYXNzdW1lIGFsY3VuIG9iYmxpZ28gYSByaWd1YXJkbyBlIG5vbiDDqCByZXNwb25zYWJpbGUgbmVpIGNvbmZyb250aSBkZWxs4oCZdXRlbnRlIG5lbCBjYXNvIGluIGN1aSBpbCBTaXRvLCBpbiBxdWFsc2lhc2kgbW9tZW50byBvIHBlciBwZXJpb2RpIGRpIHF1YWxzaWFzaSBkdXJhdGEsIG5vbiBzaWEgZGlzcG9uaWJpbGUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjEuIFNvc3BlbnNpb25lIGRlbGzigJlhY2Nlc3NvOjwvc3Ryb25nPiBM4oCZYWNjZXNzbyBhbCBwcmVzZW50ZSBTaXRvIHB1w7IgZXNzZXJlIHRlbXBvcmFuZWFtZW50ZSBzb3NwZXNvIGluIHF1YWxzaWFzaSBtb21lbnRvLCBhbmNoZSBzZW56YSBwcmVhdnZpc28uPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjIuIFNpY3VyZXp6YSBpbmZvcm1hdGljYTo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBhZG90dGkgbGUgbWlzdXJlIHByZXNjcml0dGUgcGVyIGxlZ2dlIHBlciBsYSB0dXRlbGEgZGVsbGUgaW5mb3JtYXppb25pIGltbWVzc2UsIGVzc2Egbm9uIMOoIGluIGdyYWRvIGRpIGdhcmFudGlyZSBsYSBzaWN1cmV6emEgZGVpIGRhdGkgdHJhc21lc3NpIGFsIFNpdG8gd2ViOyBsYSB0cmFzbWlzc2lvbmUgdmllbmUgcGVydGFudG8gZWZmZXR0dWF0YSBhIHJpc2NoaW8gZGVsbOKAmXV0ZW50ZS48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAncHJpdmFjeSdcXFwiPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLiBJTkZPUk1BWklPTkkgUkFDQ09MVEUgREEgU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD4xLjEuIE5lbCB2aXNpdGFyZSBpbCBTaXRvIG8gbmVsbOKAmXV0aWxpenphcmUgaWwgU2Vydml6aW8gcGVyIGlub2x0cmFyZSB1biBPcmRpbmUgYWQgdW4gcHJvZmVzc2lvbmlzdGEgdHJhbWl0ZSBpbCBTaXRvLCDDqCBwb3NzaWJpbGUgY2hlIHZlbmdhIHJpY2hpZXN0byBkaSBmb3JuaXJlIGluZm9ybWF6aW9uaSBjaGUgcmlndWFyZGFubyBs4oCZdXRlbnRlLCBpdmkgaW5jbHVzbyBub21lLCByZWNhcGl0aSAocXVhbGkgbnVtZXJvIGRpIHRlbGVmb25vIGZpc3NvLCBkaSB0ZWxlZm9ubyBtb2JpbGUgZSBpbmRpcml6em8gZS1tYWlsKSBlIGRhdGkgcmVsYXRpdmkgYWwgcGFnYW1lbnRvIChxdWFsaSBpIGRhdGkgZGVsbGEgY2FydGEgZGkgY3JlZGl0byBvIGRpIGRlYml0bykuIFNUQVJCT09LIHB1w7IgaW5vbHRyZSByYWNjb2dsaWVyZSBpbmZvcm1hemlvbmkgcmVsYXRpdmUgYWxs4oCZdXRpbGl6em8gZGVsIFNpdG8gZSBkZWwgU2Vydml6aW8gZGEgcGFydGUgZGVsbOKAmXV0ZW50ZSBub25jaMOpIHB1w7IgcmFjY29nbGllcmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbOKAmXV0ZW50ZSBhIHBhcnRpcmUgZGFpIG1hdGVyaWFsaSAocXVhbGkgbWVzc2FnZ2kgZSByZWNlbnNpb25pKSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcHViYmxpY2Egc3VsIFNpdG8gbyB0cmFzbWV0dGUgYWwgU2l0byBvIGNoZSBpbnZpYSBhIFNUQVJCT09LIHRyYW1pdGUgZS1tYWlsIG8gcGVyIGxldHRlcmEuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLiBVU08gREVMTEUgSU5GT1JNQVpJT05JPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+Mi4xLiBMZSBpbmZvcm1hemlvbmkgZGVnbGkgdXRlbnRpIGNvbnNlbnRvbm8gYSBTVEFSQk9PSyBkaSBmb3JuaXJlIGFnbGkgdXRlbnRpIHN0ZXNzaSBs4oCZYWNjZXNzbyBhbGxlIHNlemlvbmkgZGVsIFNpdG8gY3VpIHNvbm8gaW50ZXJlc3NhdGkgZSBkaSBmb3JuaXJlIGlsIFNlcnZpemlvLiBFc3NlIG1ldHRvbm8gaW5vbHRyZSBTVEFSQk9PSyBpbiBncmFkbyBkaSBmYXR0dXJhcmUgZ2xpIGltcG9ydGkgZG92dXRpIGUgY29uc2VudG9ubyBhIFNUQVJCT09LIG8gYWQgdW4gcHJvZmVzc2lvbmlzdGEgY3VpIGzigJl1dGVudGUgYWJiaWEgaW5vbHRyYXRvIHVuIE9yZGluZSBkaSBjb250YXR0YXJlIGzigJl1dGVudGUgaW4gbWVyaXRvIGFsIFNlcnZpemlvLCBvdmUgbmVjZXNzYXJpby4gQWQgZXNlbXBpbywgU1RBUkJPT0sgZS9vIGlsIHByb2Zlc3Npb25pc3RhIHBvc3Nvbm8gdXRpbGl6emFyZSBpIGRhdGkgZGVsbOKAmXV0ZW50ZSBwZXIgZm9ybmlyZSBhbGxvIHN0ZXNzbyBhZ2dpb3JuYW1lbnRpIHN1bGxvIHN0YXRvIGRlbGwnT3JkaW5lIG8gYWx0cmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbGEgc3Rlc3NhIG1lZGlhbnRlIGUtbWFpbCwgcGVyIHRlbGVmb25vIGZpc3NvIG8gbW9iaWxlIG8gdHJhbWl0ZSBtZXNzYWdnaXN0aWNhIG1vYmlsZS4gSW5vbHRyZSwgU1RBUkJPT0sgdXRpbGl6emEgZWQgYW5hbGl6emEgbGUgaW5mb3JtYXppb25pIHJhY2NvbHRlIGFsIGZpbmUgZGkgZ2VzdGlyZSwgc29zdGVuZXJlLCBtaWdsaW9yYXJlIGUgc3ZpbHVwcGFyZSBsYSBwcm9wcmlhIGF0dGl2aXTDoCBpbXByZW5kaXRvcmlhbGUsIHBlciBldmVudHVhbGkgYWx0cmUgZmluYWxpdMOgIHN0YXRpc3RpY2hlIG8gYW5hbGl0aWNoZSBub25jaMOpIHBlciBjb250cmlidWlyZSBhbGxhIHByZXZlbnppb25lIGRpIGZyb2RpLiBOZWkgY2FzaSBpbiBjdWkgc2lhIG9wcG9ydHVubywgb3JhIGUgaW4gZnV0dXJvLCBs4oCZdXRlbnRlIHBvdHJlYmJlIGF2ZXJlIGxhIGNhcGFjaXTDoCBkaSBlc3ByaW1lcmUgbGUgcHJvcHJpZSBwcmVmZXJlbnplIHJpZ3VhcmRvIGFsbOKAmXV0aWxpenpvIGRlaSBwcm9wcmkgZGF0aSBzZWNvbmRvIHF1YW50byBwcmV2aXN0byBuZWxsYSBwcmVzZW50ZSBJbmZvcm1hdGl2YSBpbiBtYXRlcmlhIGRpIFByaXZhY3kgZSBkaSBlc2VyY2l0YXJsYSB0cmFtaXRlIGxhIG1ldG9kb2xvZ2lhIHByZXNjZWx0YSBkYWxs4oCZdXRlbnRlIHBlciBs4oCZdXRpbGl6em8gZGVsIFNlcnZpemlvLCBhZCBlc2VtcGlvLCBpbiBtb2RhbGl0w6AgbW9iaWxlLCB0cmFtaXRlIGFwcGxpY2F6aW9uaSBtb2JpbGkgbyBs4oCZZXZlbnR1YWxlIHJhcHByZXNlbnRhemlvbmUgZGVsIFNpdG8uPGJyPlxcbiAgICAgICAgMi4yLiBTVEFSQk9PSyBwdcOyIHV0aWxpenphcmUgbGUgaW5mb3JtYXppb25pIHBlciBjb250YXR0YXJlIGlsIGNsaWVudGUgYWwgZmluZSBkaSBjb25vc2NlcmUsIGNvbiBpbCBzdW8gY29uc2Vuc28sIGxlIHN1ZSBvcGluaW9uaSBzdWwgU2Vydml6aW8gZWQgb2NjYXNpb25hbG1lbnRlIGRpIGluZm9ybWFybG8gZGVsbGUgbW9kaWZpY2hlIG8gZGVnbGkgc3ZpbHVwcGkgaW1wb3J0YW50aSBjaGUgcmlndWFyZGFubyBpbCBTaXRvIG8gaWwgU2Vydml6aW8gc3VkZGV0dG8uPGJyPlxcbiAgICAgICAgMi4zLiBTVEFSQk9PSyBwb3Ryw6AgdXRpbGl6emFyZSBs4oCZaW5kaXJpenpvIGVtYWlsIGZvcm5pdG8gZGFsbOKAmXV0ZW50ZSBkZWwgU2l0byBhbCBtb21lbnRvIGRlbGzigJlhY3F1aXN0byBkaSBwcm9kb3R0aSBpbiB2ZW5kaXRhIHN1bCBTaXRvIHBlciBmYXIgY29ub3NjZXJlIGFsbG8gc3Rlc3NvIHV0ZW50ZSBpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSywgc2ltaWxpIGEgcXVlbGxpIGdpw6AgYWNxdWlzdGF0aSwgY2hlIHBvc3Nhbm8gcmlzY3VvdGVyZSBpbCBzdW8gaW50ZXJlc3NlLiBM4oCZdXRlbnRlIHBvdHLDoCBpbiBvZ25pIG1vbWVudG8sIGdyYXR1aXRhbWVudGUgZSBjb24gZWZmZXR0byBpbW1lZGlhdG8gb3Bwb3JzaSBhbGzigJl1dGlsaXp6byBkZWwgcHJvcHJpbyBpbmRpcml6em8gZW1haWwgcGVyIGxhIHJpY2V6aW9uZSBkaSB0YWxlIG1hdGVyaWFsZSBpbmZvcm1hdGl2byBjbGljY2FuZG8gc3VsbOKAmWFwcG9zaXRvIGxpbmsgaW5zZXJpdG8gaW4gY2FsY2UgYSBjaWFzY3VuYSBlbWFpbCByaWNldnV0YS4gSW4gYWx0ZXJuYXRpdmEsIGzigJl1dGVudGUgcG90csOgIG9wcG9yc2kgYSB0YWxlIHRyYXR0YW1lbnRvIGFuY2hlIG1vZGlmaWNhbmRvIGxlIHByZWZlcmVuemUgZGFsbGEgcmVsYXRpdmEgc2V6aW9uZSBkZWwgcHJvcHJpbyBwcm9maWxvLiBQZXIgZ2VzdGlyZSBsZSBub3RpZmljaGUsIGzigJl1dGVudGUgZG92csOgIGFjY2VkZXJlIGFsbGEgcGFnaW5hIGRlbGxlIGltcG9zdGF6aW9uaSBkZWwgc3VvIHRlbGVmb25vIG8gdGFibGV0IGUgbW9kaWZpY2FyZSBsJ2F1dG9yaXp6YXppb25lIGFsbGUgbm90aWZpY2hlIHBlciBsJ2FwcGxpY2F6aW9uZSBTVEFSQk9PSy4gSW4gY2FzbyBkaSBkaXNhdHRpdmF6aW9uZSBkZWxsZSBub3RpZmljaGUsIGzigJl1dGVudGUgbm9uIHBvdHLDoCBwacO5IHJpY2V2ZXJlIGFnZ2lvcm5hbWVudGkgc3VpIHN1b2kgb3JkaW5pIHZpYSBub3RpZmljaGUuPGJyPlxcbiAgICAgICAgMi40LiBTZSBjb25zZW50aXRvIGRhbGzigJl1dGVudGUgZGVsIFNpdG8sIFNUQVJCT09LIHBvdHLDoCB1dGlsaXp6YXJlIGkgZGF0aSBwZXIgZmFyIGNvbm9zY2VyZSBhbGzigJl1dGVudGUgc3VkZGV0dG8gZ2xpIGFsdHJpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSyBjaGUgcG9zc2FubyByaXNjdW90ZXJlIGlsIHN1byBpbnRlcmVzc2UsIGl2aSBpbmNsdXNpIHNlcnZpemkgY2hlIHBvc3Nhbm8gZXNzZXJlIG9nZ2V0dG8gZGkgZGlyZWN0IG1hcmtldGluZyBtZWRpYW50ZSBzaXN0ZW1pIGRpIG1lc3NhZ2dpc3RpY2EgdHJhbWl0ZSBjZWxsdWxhcmUgZSBhdHRyYXZlcnNvIGxlIG5vdGlmaWNoZS48YnI+XFxuICAgICAgICAyLjUuIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gZGVzaWRlcmkgcGnDuSBjaGUgaSBzdW9pIGRhdGkgc2lhbm8gdXRpbGl6emF0aSBkYSBTVEFSQk9PSyBuZWkgbW9kaSBzb3ByYSBpbmRpY2F0aSBvIGNhbWJpIGlkZWEgcmlndWFyZG8gYWxsYSBwb3NzaWJpbGl0w6AgZGkgZXNzZXJlIGNvbnRhdHRhdG8gaW4gZnV0dXJvLCBzaSBwcmVnYSBkaSBmYXJsbyBzYXBlcmUgYSBTVEFSQk9PSyB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPGJyPlxcbiAgICAgICAgMi42LiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIGRlc2lkZXJpIHBpw7kgY2hlIGkgc3VvaSBkYXRpIHNpYW5vIHV0aWxpenphdGkgZGEgU1RBUkJPT0sgbmVpIG1vZGkgc29wcmEgaW5kaWNhdGkgbyBjYW1iaSBpZGVhIHJpZ3VhcmRvIGFsbGEgcG9zc2liaWxpdMOgIGRpIGVzc2VyZSBjb250YXR0YXRvIGluIGZ1dHVybywgc2kgcHJlZ2EgZGkgb3Bwb3JzaSBhbCB0cmF0dGFtZW50byBuZWkgbW9kaSBzdSBpbmRpY2F0aS4gSW4gbWFuY2FuemEsIMOoIHBvc3NpYmlsZSBpbmZvcm1hcmUgaW4gb2duaSBtb21lbnRvIGZhcmxvIHNhcGVyZSBhIFNUQVJCT09LIGRlbGxhIHByb3ByaWEgZGVjaXNpb25lLCB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ2hlbHAnXFxcIj5cXG4gICAgICAgIDxwPkhhaSBiaXNvZ25vIGRpIGFpdXRvPyA8YnI+XFxuICAgICAgICBTY3JpdmkgdW5hIG1haWwgaGFyYWxkLmJyZWd1QHN0YXJib29rLmNvIGUgdGkgcmlzcG9uZGVyZW1vIG5lbCBwacO5IGJyZXZlIHRlbXBvIHBvc3NpYmlsZS48L3A+XFxuICAgICAgICA8cD5WdW9pIGVudHJhcmUgYSBmYXIgcGFydGUgZGkgU1RBUkJPT0s/IEF1bWVudGEgaWwgbnVtZXJvIGRlaSB0dW9pIGNsaWVudGkgcGFnYW50aSBlIHJpc3Bhcm1pYSBzdWkgY29zdGkgZGVsIHRyYXNwb3J0by48L3A+XFxuICAgICAgICA8cD5QZXIgcmljaGllZGVyZSBpbmZvcm1hemlvbmk6PC9wPlxcbiAgICAgICAgPHA+Q2VsbHVsYXJlOiArMzkgMzI3MjQxNTAyODxicj5cXG4gICAgICAgIEVtYWlsOiBoYXJhbGQuYnJlZ3VAc3RhcmJvb2suY288L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCAhPT0gJydcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+PC9kaXY+XFxuPCEtLSBDaGFuZ2UgcGFzc3dvcmQgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCA9PT0gJ2NoYW5nZVBhc3N3b3JkJ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJsb2dpbi1mb3JtXFxcIiAjY2hhbmdlUGFzc3dvcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGNoYW5nZVBhc3N3b3JkRXJyb3IuY3VycmVudFBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiY3VycmVudFBhc3N3b3JkXFxcIj5MYSB0dWEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZFxcXCIgI2N1cnJlbnRQYXNzd29yZD1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5MYSB0dWEgcGFzc3dvcmQgYXR0dWFsZSDDqCByaWNoaWVzdGE8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJuZXdQYXNzd29yZFxcXCI+TnVvdmEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwibmV3UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJuZXdQYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5uZXdQYXNzd29yZFxcXCIgI25ld1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm19XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiPlJpcGV0aSBsYSBudW92YSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNwYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQobmV3UGFzc3dvcmQudmFsdWUsIHBhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWNoYW5nZVBhc3N3b3JkRm9ybS5mb3JtLnZhbGlkXFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQudmFsdWUsIG5ld1Bhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiIFtAc2hhZG93U3RhdGVdPVxcXCJzaGFkb3dTdGF0ZVxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj48L2Rpdj5cXG48IS0tIExvZ2luIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGxvZ2luUG9wdXBTdGF0ZV09XFxcImxvZ2luUG9wdXBTdGF0ZVxcXCI+XFxuICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPi0tPlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj4tLT5cXG4gICAgPCEtLTxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+LS0+XFxuICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+U2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhPC9kaXY+LS0+XFxuICAgICAgPCEtLTxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD4tLT5cXG4gICAgPCEtLTwvZGl2Pi0tPlxcbiAgPCEtLTwvZGl2Pi0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxwPjxzcGFuPkVycm9yZSE8L3NwYW4+IHt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkFjY2VkaTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImxvZ2luLWZvcm1cXFwiICNsb2dpbkZvcm09XFxcIm5nRm9ybVxcXCIgKGtleXVwLmVudGVyKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5lbWFpbH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5JbmRpcml6em8gZW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5lbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0VtYWlsKCdsb2dpbicsIGVtYWlsLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrRW1haWwoJ2xvZ2luJywgZW1haWwudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluZGlyaXp6byBlbWFpbCBub24gdmFsaWRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBsb2dpbkVycm9yLnBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkIDxhIGNsYXNzPVxcXCJyZWNvdmVyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ3JlY292ZXJ5JylcXFwiPlBhc3N3b3JkIGRpbWVudGljYXRhPzwvYT48L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdsb2dpbicsIHBhc3N3b3JkLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrTm9uRW1wdHkoJ2xvZ2luJywgcGFzc3dvcmQudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSBsYSB0dWEgcGFzc3dvcmQ8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBocmVmPVxcXCIjXFxcIiAoY2xpY2spPVxcXCJsb2dpbihlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXFxcIj5BY2NlZGk8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+LS0+XFxuICAgICAgPCEtLTxzcGFuPlNlaSBudW92byBzdSBTdGFyYm9vaz88L3NwYW4+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgncmVnaXN0cmF0aW9uJylcXFwiPkNyZWEgaWwgdHVvIGFjY291bnQgU3RhcmJvb2s8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICA8c3Bhbj5vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICAgIDxpPjwvaT5cXG4gICAgICAgIENvbnRpbnVhIGNvbiBGYWNlYm9va1xcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWdpc3RyYXRpb24gcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZV09XFxcInJlZ2lzdHJhdGlvblBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPk51b3ZvIGFjY291bnQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWdpc3RyYXRpb24tZm9ybVxcXCIgI3JlZ2lzdHJhdGlvbkZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IubmFtZX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ05hbWVcXFwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEubmFtZVxcXCIgI3JlZ05hbWU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvbk5hbWUnLCByZWdOYW1lLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgaWwgbm9tZSBjb21wbGV0bzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGhvbmV9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQaG9uZVxcXCI+Q2VsbHVsYXJlPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGhvbmVcXFwiICNyZWdQaG9uZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uUGhvbmUnLCByZWdQaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIG51bWVybyBjZWxsdWxhcmU8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnRW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ0VtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLmVtYWlsXFxcIiAjcmVnRW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlZ2lzdHJhdGlvbicsIHJlZ0VtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZFxcXCIgI3JlZ1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25QYXNzd29yZCcsIHJlZ1Bhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgdW5hIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkQ29uZmlybVxcXCI+RGkgbnVvdm8gbGEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNyZWdQYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQocmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0cmF0aW9uKHJlZ05hbWUudmFsdWUsIHJlZ1Bob25lLnZhbHVlLCByZWdFbWFpbC52YWx1ZSwgcmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPkNyZWEgYWNjb3VudDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbm90aWNlXFxcIj5BY2NlZGVuZG8gZGljaGlhcmkgZGkgYXZlciBsZXR0byBlIGFjY2V0dGkgbGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2NvbmRpdGlvbnNcXFwiPmNvbmRpemlvbmkgZ2VuZXJhbGk8L2E+IGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPmzigJlpbmZvcm1hdGl2YSBzdWxsYSBwcml2YWN5PC9hPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+XFxuICAgIDxzcGFuPm88L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcmVnaXN0cmF0aW9uXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICA8aT48L2k+XFxuICAgICAgQ29udGludWEgY29uIEZhY2Vib29rXFxuICAgIDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXIgcmVnaXN0cmF0aW9uXFxcIj5IYWkgZ2lhIHVuIGFjY291bnQgc3UgU3RhcmJvb2s/IDxhIChjbGljayk9XFxcImdldFBvcHVwKCdsb2dpbicpXFxcIj5BY2NlZGk8L2E+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWNvdmVyeSBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0ByZWNvdmVyeVBvcHVwU3RhdGVdPVxcXCJyZWNvdmVyeVBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UmVjdXBlcmEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWNvdmVyeS1mb3JtXFxcIiAjcmVjb3ZlcnlGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlY292ZXJ5RXJyb3IuZW1haWx9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWNvdmVyeUVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWNvdmVyeUVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVjb3ZlcnlEYXRhLmVtYWlsXFxcIiAjcmVjb3ZlcnlFbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgncmVjb3ZlcnknLCByZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWNvdmVyeShyZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+SW52aWEgZW1haWw8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbi1vZmZlclxcXCI+SGFpIGdpYSB1biBhY2NvdW50IHN1IFN0YXJib29rPyA8YSAoY2xpY2spPVxcXCJnZXRQb3B1cCgnbG9naW4nKVxcXCI+QWNjZWRpPC9hPjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gQ29uZmlybSBPcmRlciBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnbmV3LXZlcnNpb24nOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYScgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInBvcHVwLXNwaW5uZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYSdcXFwiPlxcbiAgICA8c3ZnIHdpZHRoPSc0MHB4JyBoZWlnaHQ9JzQwcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTY5LjY0NjAwMzI5Mzg0ODgyIDExMy4wOTczMzU1MjkyMzI1N1xcXCIgc3Ryb2tlPVxcXCIjM0I1NjhEXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEwXFxcIj5cXG4gICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgPC9jaXJjbGU+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJzdWNjZXNzLWljb25cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCcgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnXFxcIj48c3Bhbj48L3NwYW4+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiIFtuZ0NsYXNzXT1cXFwieyd3aXRob3V0LW1lc3NhZ2UnOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCd9XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50aXRsZSAhPT0gJydcXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJjb25maXJtLW9yZGVyLWZvcm1cXFwiICNjb25maXJtT3JkZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8cCAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlICE9PSAnbmV3T3JkZXInICYmIGNvbmZpcm1Qb3B1cERhdGEudHlwZSAhPT0gJ25ld09yZGVyRW5kJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbmZlcm1hLWZpbmlzaCc6IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJ31cXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPHAgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyRW5kJ1xcXCIgY2xhc3M9XFxcImNvbmZpcm0tZW5kXFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVycy1saXN0XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXInXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIGNvbmZpcm1Qb3B1cERhdGEuZGF0YVxcXCI+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3NlcnZpY2UnXFxcIiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0nc2VydmljZSdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1cXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0naXRlbSdcXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0ge3sgcHJvZHVjdC5pdGVtTmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fSB7eyBwcm9kdWN0LnN5bWJvbCB9fTwvaT48L3NwYW4+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fXt7IHByb2R1Y3Quc3ltYm9sIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSd0b3RhbCdcXFwiIGNsYXNzPVxcXCJ0b3RhbC1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tbGlzdFxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+RGF0YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGF0ZSB9fTwvZGl2PlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+T3JlOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi50aW1lIH19PC9kaXY+IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPkluZGlyaXp6bzo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uYWRkcmVzcyB9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRlc2NyaXB0aW9uICE9PSAnJ1xcXCI+PHNwYW4+Tm90YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGVzY3JpcHRpb24gfX08L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjb25maXJtT3JkZXIoY29uZmlybVBvcHVwRGF0YS5pZClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ0NvbmZlcm1hJ1xcXCI+Q29uZmVybWE8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsT3JkZXIoY29uZmlybVBvcHVwRGF0YS5pZClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ0FubnVsbGEgb3JkaW5lJ1xcXCI+QW5udWxsYSBvcmRpbmU8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVhY3RpdmF0ZU9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdSaWF0dGl2YSBvcmRpbmUnXFxcIj5SaWF0dGl2YSBvcmRpbmU8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgbmV3LW9yZGVyLWJ0blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjb25maXJtTmV3T3JkZXIoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvJ1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvPC9idXR0b24+XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvJ1xcXCIgY2xhc3M9XFxcImNvbmZpcm0tYnV0dG9uLW5vdGljZVxcXCI+VmVycmFpIG5vdGlmaWNhdG8gY29uIHVuIHNtcyBlIG1haWwgYWQgYWNxdWlzdG8gZWZmZXR0dWF0bzwvc3Bhbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgbG9nb3V0LWJ0blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnbG9nb3V0J1xcXCI+RXNjaTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnbG9nb3V0J1xcXCI+QW5udWxsYTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uICE9PSAnbG9nb3V0J1xcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcbjwhLS0gQ29uZmlybSBPcmRlciBGaW5pc2ggcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAY29uZmlybUZpbmlzaFBvcHVwU3RhdGVdPVxcXCJjb25maXJtRmluaXNoUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmaW5pc2gtbWVzc2FnZVxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNMZWZ0OiBjb25maXJtRmluaXNoUG9wdXBEYXRhLnR5cGUgPT09ICdsZWZ0J31cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gICAgPHA+e3sgY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0IH19PC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPkNoaXVkaTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gRmluaXNoIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGZpbmlzaFBvcHVwU3RhdGVdPVxcXCJmaW5pc2hQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZpbmlzaC1tZXNzYWdlXFxcIiBbbmdDbGFzc109XFxcInsnaXNGb3JtJzogZmluaXNoUG9wdXBEYXRhLnR5cGUgIT09ICcnfVxcXCI+XFxuICAgIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgY2xhc3M9XFxcImNsb3NlLXBvcHVwXFxcIj48L2E+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgZmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwICpuZ0Zvcj1cXFwibGV0IHRleHQgb2YgZmluaXNoUG9wdXBEYXRhLnRleHRcXFwiPnt7IHRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBob25lLWZvcm1cXFwiICpuZ0lmPVxcXCJmaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ3Bob25lJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwaG9uZS1maWVsZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBlbnRlclBob25lRm9ybUVycm9yLnBob25lfVxcXCI+XFxuICAgICAgICA8bGFiZWw+TnVtZXJvIGRpIHRlbGVmb25vPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBuYW1lPVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImVudGVyUGhvbmVGb3JtLnBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiAjcGhvbmU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ2VudGVyUGhvbmVGb3JtJywgcGhvbmUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tOb25FbXB0eSgnZW50ZXJQaG9uZUZvcm0nLCBwaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgPGEgKGNsaWNrKT1cXFwic2V0UGhvbmVOdW1iZXIoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+U2FsdmEgZSBjb250aW51YTwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJmaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ2ZpbmlzaEZhY2Vib29rUmVnaXN0cmF0aW9uJ1xcXCI+XFxuICAgICAgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPkNoaXVkaTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG48IS0tIEFkZCBDYXJkIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGFkZENhcmRQb3B1cFN0YXRlXT1cXFwiYWRkQ2FyZFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5NZXRvZG8gZGkgcGFnYW1lbnRvPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiYWRkLWNhcmQtZm9ybVxcXCIgI2FkZENhcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1sb2dvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gdmlzYVxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIG1hc3RlcmNhcmRcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSBhbWV4XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLm51bWJlcn1cXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROdW1iZXJcXFwiPk51bWVybyBjYXJ0YTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiAjYWRkQ2FyZE51bWJlcj1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q2FyZE51bWJlclxcXCI+TnVtZXJvIGNhcnRhPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImVkaXRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiBkaXNhYmxlZD5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLmV4cF9kYXRlfVxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRFeHBEYXRlXFxcIj5TY2FkZW56YTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEV4cERhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZEV4cERhdGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTS9BQVxcXCIgbWF4bGVuZ3RoPVxcXCI1XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuZXhwX2RhdGVcXFwiICNhZGRDYXJkRXhwRGF0ZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+RXhwaXJhdGlvbiBkYXRlIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5jdmN9XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdhZGQnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENWVlxcXCI+Q1ZWPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiICNhZGRDYXJkQ1ZWPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdhZGRDYXJkQ3Z2JywgYWRkQ2FyZENWVi52YWx1ZSlcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q1ZWXFxcIj5DVlY8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJlZGl0Q1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWJoZWFkZXJcXFwiPlxcbiAgICAgIEluZm9ybWF6aW9uaSBmYWNvbHRhdGl2aVxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5hbWVcXFwiPk5vbWUgaW50ZXN0YXRhcmlvPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbWUgQ29nbm9tZVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm5hbWVcXFwiICNhZGRDYXJkTmFtZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkVmlhXFxcIj5WaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkVmlhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkVmlhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMVxcXCIgI2FkZENhcmRBZGRyZXNzMT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROclxcXCI+TnI8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROclxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfbGluZTJcXFwiICNhZGRDYXJkQWRkcmVzczI9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdC1iaWdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENpdHRhXFxcIj5DaXR0w6A8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkQ2l0dGFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDaXR0YVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfY2l0eVxcXCIgI2FkZENhcmRBZGRyZXNzQ2l0eT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRDYXBcXFwiPkNBUDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDYXBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDYXBcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX3ppcFxcXCIgI2FkZENhcmRBZGRyZXNzWmlwPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCI+UHJvdmluY2lhPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGVcXFwiICNhZGRDYXJkQWRkcmVzc1N0YXRlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFBlYXNlXFxcIj5QYWVzZTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRQZWFzZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDb3VudHJ5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPkFnZ2l1bmdpIG1ldG9kbzwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZCgpXFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcblxcbjwhLS0gQ29uZmlybSBwb3B1cCB3aXRoIGFjdGlvbiAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtQWN0aW9uUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnYWRkLXByaWNlJzogY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2UnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImNvbmZpcm0tYWN0aW9uXFxcIiAjY29uZmlybUFjdGlvbk9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHA+XFxuICAgICAge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0IH19XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgIT09ICcnXFxcIj48YnI+IHt7IGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgfX08L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2FkZCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2VcXFwiICNjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2VkaXQnXFxcIj5cXG4gICAgICAgIDxsYWJlbD57eyBhY3Rpb24ubGFiZWwgfX08L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEVkaXRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXltZW50LWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2luZm9ybWF0aW9uJ1xcXCI+XFxuICAgICAgICB7eyBhY3Rpb24uaW5mb3JtYXRpb24gfX1cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgYnV0dG9uIG9mIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2FkZFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiYWRkUHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnZWRpdFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiZWRpdFByaWNlKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2NvbnRpbnVlT3JkZXInXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJjb250aW51ZU9yZGVyKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IHt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2Nsb3NlJ1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cXG5cXG48IS0tIEEvQiBUZXN0cyAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0ByZWdpc3RlckNvbXBhbnlQb3B1cFN0YXRlXT1cXFwicmVnaXN0ZXJDb21wYW55UG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlRoaXMgaXMgYWIgVGVzdHM8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIj5cXG4gIDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCI2MFxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgIDwvY2lyY2xlPlxcbiAgPC9zdmc+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1jbGljay1vdXRzaWRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWNsaWNrLW91dHNpZGVcIlxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==