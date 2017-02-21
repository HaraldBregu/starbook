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
        // console.log('register company');
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

module.exports = ""

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

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <!--<div class=\"alert-block\" *ngIf=\"formError\">-->\n    <!--<div class=\"alert-icn\"></div>-->\n    <!--<div class=\"alert-container\">-->\n      <!--<div class=\"header\">Si è verificato un errore!</div>-->\n      <!--<p>{{formError.message}}</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-container\">\n      <p><span>Errore!</span> {{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <!--<div class=\"form-description\">-->\n      <!--<span>Sei nuovo su Starbook?</span>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n    </div>\n    <div class=\"form-description\">\n      <span>o</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n        <i></i>\n        Continua con Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"form-description\">\n    <span>o</span>\n  </div>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n    <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n      <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n        <label>Numero di telefono</label>\n        <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n      </div>\n      <div class=\"form-group\">\n        <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n      <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjFlNDk5MDdhNTk5NDdiMmNhYzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2hhcmVkL3BheW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvU3ViamVjdFwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tb2Nrcy9jYWxlbmRhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGlwZXMvZXhwaXJ5LnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9waXBlcy9waG9uZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9wdXBzL3BvcHVwcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcHVwcy9wb3B1cHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1jbGljay1vdXRzaWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaW1lbmcvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpbWVuZy9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNKO0FBQ0Q7QUFHekM7SUFZRTtRQVhRLGtCQUFhLEdBQUcsSUFBSSxxREFBTyxFQUFVLENBQUM7UUFDdEMsYUFBUSxHQUFHLElBQUkscURBQU8sRUFBTyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxJQUFJLHFEQUFPLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUkscURBQU8sRUFBVyxDQUFDO1FBUzdDLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMs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Ozs7OztBQ0FBLGlFIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYxZTQ5OTA3YTU5OTQ3YjJjYWM1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgaGVhZGVyTWVzc2FnZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBhdXRoRGF0YSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBhY3RpdmVUYWIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgbG9hZGluZ1N0YXR1cyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cblxuICBwdWJsaWMgZ2V0TWVzc2FnZSQ7XG4gIHB1YmxpYyBnZXRQZXJzb25hbE1lbnUkO1xuICBwdWJsaWMgZ2V0QWN0aXZlVGFiJDtcbiAgcHVibGljIGdldExvYWRpbmdTdGF0dXMkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRNZXNzYWdlJCA9IHRoaXMuaGVhZGVyTWVzc2FnZS5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0UGVyc29uYWxNZW51JCA9IHRoaXMuYXV0aERhdGEuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLmdldEFjdGl2ZVRhYiQgPSB0aGlzLmFjdGl2ZVRhYi5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuZ2V0TG9hZGluZ1N0YXR1cyQgPSB0aGlzLmxvYWRpbmdTdGF0dXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5oZWFkZXJNZXNzYWdlLm5leHQobWVzc2FnZSk7XG4gIH1cblxuICB1cGRhdGVQZXJzb25hbE1lbnUoYXV0aCkge1xuICAgIHRoaXMuYXV0aERhdGEubmV4dChhdXRoKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVRhYih0YWIpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYi5uZXh0KHRhYik7XG4gIH1cblxuICB1cGRhdGVMb2FkaW5nU3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMubG9hZGluZ1N0YXR1cy5uZXh0KHN0YXR1cyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gICAgZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcHVwc1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZVBvcHVwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHBvcHVwUmVzcG9uc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHB1YmxpYyBnZXRBY3RpdmVQb3B1cCQ7XG4gIHB1YmxpYyBnZXRQb3B1cFJlc3BvbnNlJDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRBY3RpdmVQb3B1cCQgPSB0aGlzLmFjdGl2ZVBvcHVwLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5nZXRQb3B1cFJlc3BvbnNlJCA9IHRoaXMucG9wdXBSZXNwb25zZS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cbiAgYWN0aXZhdGUocG9wdXApIHtcbiAgICB0aGlzLmFjdGl2ZVBvcHVwLm5leHQocG9wdXApO1xuICB9XG4gIGFjdGlvbkNvbXBsZXRlKGRhdGEpIHtcbiAgICB0aGlzLnBvcHVwUmVzcG9uc2UubmV4dChkYXRhKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuZGVjbGFyZSBsZXQgZ2E6IEZ1bmN0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUaW1pbmcge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB0aW1pbmdWYXI6IHN0cmluZztcbiAgdGltaW5nVmFsdWU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnQge1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBhY3Rpb246IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2VuZFRpbWluZyh0aW1pbmdEYXRhOiBJVGltaW5nKSB7XG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBnYSgnc2VuZCcsICd0aW1pbmcnLCB0aW1pbmdEYXRhLmNhdGVnb3J5LCB0aW1pbmdEYXRhLnRpbWluZ1ZhciwgdGltaW5nRGF0YS50aW1pbmdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VuZEV2ZW50KGV2ZW50OiBJRXZlbnQpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBnYSgnc2VuZCcsICdldmVudCcsIGV2ZW50LmNhdGVnb3J5LCBldmVudC5hY3Rpb24sIGV2ZW50LmxhYmVsKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG4vLyBpbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSG9tZVNlcnZpY2Uge1xuICBwcml2YXRlIHNlcnZpY2VzT2JqZWN0O1xuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICB9XG5cbiAgc2VuZFNlcnZpY2VzKHNlcnZpY2VzKSB7XG4gICAgdGhpcy5zZXJ2aWNlc09iamVjdCA9IHNlcnZpY2VzO1xuICB9XG4gIGdldFNlcnZpY2VzT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VzT2JqZWN0O1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJ2NhdGVnb3JpZXMnO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5hcGkgKyBxdWVyeVN0cmluZylcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U2VydmljZXMoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ2ZlYXR1cmVkJylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzZXJ2aWNlcykgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnc2VhcmNoP3RpdGxlPScgKyBxdWVyeSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRTZXJ2aWNlQnlJZChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGkgKyAnc2VydmljZXMvJyArIGlkKVxuICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLmpzb24oKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgYXBpOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVyc0ZhY2Vib29rKGFjY2Vzc190b2tlbikge1xuICAgIHJldHVybiBuZXcgSGVhZGVycyh7J2FjY2Vzc190b2tlbic6IGFjY2Vzc190b2tlbn0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgYXV0aEluaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aDtcbiAgfVxuXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ2xvZ2luJywge2VtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IGF1dGhEYXRhID0ge1xuICAgICAgICAgICAgX2lkOiBkYXRhLnJlc3VsdC5faWQsXG4gICAgICAgICAgICBlbWFpbDogZGF0YS5yZXN1bHQuZW1haWwsXG4gICAgICAgICAgICBwaG9uZV9udW1iZXI6IGRhdGEucmVzdWx0LnBob25lX251bWJlcixcbiAgICAgICAgICAgIGFjY291bnRfdHlwZXM6IGRhdGEucmVzdWx0LmFjY291bnRfdHlwZXMsXG4gICAgICAgICAgICBwcm9maWxlOiBkYXRhLnJlc3VsdC5wcm9maWxlLFxuICAgICAgICAgICAgY29tcGFueTogZGF0YS5yZXN1bHQuY29tcGFueSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGRhdGEucmVzdWx0LmFkZHJlc3MsXG4gICAgICAgICAgICBzZXJ2aWNlczogZGF0YS5yZXN1bHQuc2VydmljZXMsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IGRhdGEucmVzdWx0LmxvY2F0aW9ucyxcbiAgICAgICAgICAgIHBheW1lbnQ6IGRhdGEucmVzdWx0LnBheW1lbnQsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhLnJlc3VsdC5jcmVhdGVkX2F0LFxuICAgICAgICAgICAgdXBkYXRlZF9hdDogZGF0YS5yZXN1bHQudXBkYXRlZF9hdCxcbiAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShkYXRhLnJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuIGF1dGhEYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHNpZ251cChuYW1lOiBzdHJpbmcsIHBob25lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ3NpZ251cCcsIHtmdWxsbmFtZTogbmFtZSwgcGhvbmVfbnVtYmVyOiBwaG9uZSwgZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmR9KVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICBsZXQgYXV0aERhdGEgPSB7XG4gICAgICAgICAgICBfaWQ6IGRhdGEucmVzdWx0Ll9pZCxcbiAgICAgICAgICAgIGVtYWlsOiBkYXRhLnJlc3VsdC5lbWFpbCxcbiAgICAgICAgICAgIHBob25lX251bWJlcjogJycsXG4gICAgICAgICAgICBhY2NvdW50X3R5cGVzOiBkYXRhLnJlc3VsdC5hY2NvdW50X3R5cGVzLFxuICAgICAgICAgICAgcHJvZmlsZTogZGF0YS5yZXN1bHQucHJvZmlsZSxcbiAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEucmVzdWx0LmNvbXBhbnksXG4gICAgICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc3VsdC5hZGRyZXNzLFxuICAgICAgICAgICAgc2VydmljZXM6IGRhdGEucmVzdWx0LnNlcnZpY2VzLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBkYXRhLnJlc3VsdC5sb2NhdGlvbnMsXG4gICAgICAgICAgICBwYXltZW50OiBkYXRhLnJlc3VsdC5wYXltZW50LFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogZGF0YS5yZXN1bHQuY3JlYXRlZF9hdCxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGEucmVzdWx0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICB0b2tlbjogZGF0YS50b2tlblxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHJlY292ZXJ5KGVtYWlsOiBzdHJpbmcpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ3Bhc3N3b3JkX3JlY292ZXJ5Jywge2VtYWlsOiBlbWFpbH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFVzZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGg7XG4gIH1cblxuICBmYWNlYm9va0xvZ2luKGFjY2Vzc190b2tlbikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaSArICdmYWNlYm9va19sb2dpbicsIHt9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnNGYWNlYm9vayhhY2Nlc3NfdG9rZW4pfSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBhdXRoRGF0YSA9IHtcbiAgICAgICAgICAgICAgX2lkOiBkYXRhLnJlc3VsdC5faWQsXG4gICAgICAgICAgICAgIGVtYWlsOiBkYXRhLnJlc3VsdC5lbWFpbCxcbiAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBkYXRhLnJlc3VsdC5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgIGFjY291bnRfdHlwZXM6IGRhdGEucmVzdWx0LmFjY291bnRfdHlwZXMsXG4gICAgICAgICAgICAgIHByb2ZpbGU6IGRhdGEucmVzdWx0LnByb2ZpbGUsXG4gICAgICAgICAgICAgIGNvbXBhbnk6IGRhdGEucmVzdWx0LmNvbXBhbnksXG4gICAgICAgICAgICAgIGFkZHJlc3M6IGRhdGEucmVzdWx0LmFkZHJlc3MsXG4gICAgICAgICAgICAgIHNlcnZpY2VzOiBkYXRhLnJlc3VsdC5zZXJ2aWNlcyxcbiAgICAgICAgICAgICAgbG9jYXRpb25zOiBkYXRhLnJlc3VsdC5sb2NhdGlvbnMsXG4gICAgICAgICAgICAgIHBheW1lbnQ6IGRhdGEucmVzdWx0LnBheW1lbnQsXG4gICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGRhdGEucmVzdWx0LmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGRhdGEucmVzdWx0LnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aERhdGEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUoZGF0YS5yZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhEYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQaG9uZShwaG9uZSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ21lJywge3Bob25lX251bWJlcjogcGhvbmV9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSByZXN1bHQuanNvbigpO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICAgICAgdXNlckRhdGEucGhvbmVfbnVtYmVyID0gcGhvbmU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5zdGF0dXMgfHwgZXJyb3IpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2F1dGguc2VydmljZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBVUkxTZWFyY2hQYXJhbXMsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuLy8gaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWRkcmVzcyB7XG4gIHN0cmVldDogc3RyaW5nO1xuICBzdHJlZXRfbnVtYmVyOiBudW1iZXI7XG4gIGNpdHk6IHN0cmluZztcbiAgcG9zdGFsX2NvZGU6IG51bWJlcjtcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgY291bnRyeTogc3RyaW5nO1xuICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGlzRnVsbDogYm9vbGVhbjtcbiAgZm9ybWF0dGVkQWRkcmVzczogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvcmRlckV2ZW50ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBwdWJsaWMgZ2V0T3JkZXJFdmVudCQ7XG5cbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBwcml2YXRlIGdvb2dsZUFwaTogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAvKiwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UqLykge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICAgIHRoaXMuZ29vZ2xlQXBpID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24nO1xuICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5nZXRPcmRlckV2ZW50JCA9IHRoaXMub3JkZXJFdmVudC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBtYWtlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLm9yZGVyRXZlbnQubmV4dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hlYWRlcnM6IGhlYWRlcnN9O1xuICB9XG5cbiAgc2F2ZU9yZGVyKG9yZGVyRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnb3JkZXJzJywge1xuICAgICAgc2VydmljZV9pZDogb3JkZXJEYXRhLnNlcnZpY2VfaWQsXG4gICAgICBkZXNjcmlwdGlvbjogb3JkZXJEYXRhLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uLFxuICAgICAgZGV0YWlsczogb3JkZXJEYXRhLmRlbGl2ZXJ5X2RldGFpbHMsXG4gICAgICBkYXRlOiBvcmRlckRhdGEuZGVsaXZlcnlfZGF0ZSxcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgc3RyZWV0OiBvcmRlckRhdGEuc3RyZWV0LFxuICAgICAgICBzdHJlZXRfbnVtYmVyOiBvcmRlckRhdGEuc3RyZWV0X251bWJlcixcbiAgICAgICAgY2l0eTogb3JkZXJEYXRhLmNpdHksXG4gICAgICAgIHBvc3RhbF9jb2RlOiBvcmRlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICAgIHByb3ZpbmNlOiBvcmRlckRhdGEucHJvdmluY2UsXG4gICAgICAgIGNvdW50cnk6IG9yZGVyRGF0YS5jb3VudHJ5LFxuICAgICAgICBjb3VudHJ5X2NvZGU6IG9yZGVyRGF0YS5jb3VudHJ5X2NvZGVcbiAgICAgIH0sXG4gICAgICBwYXltZW50OiB7XG4gICAgICAgIGFtb3VudDogb3JkZXJEYXRhLnBheW1lbnQuYW1vdW50LFxuICAgICAgICBjdXJyZW5jeTogb3JkZXJEYXRhLnBheW1lbnQuY3VycmVuY3lcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldEFkZHJlc3NlcyhrZXk6IHN0cmluZykge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGxldCBhZGRyZXNzZXMgPSBbXTtcbiAgICBwYXJhbXMuc2V0KCdhZGRyZXNzJywga2V5KTtcbiAgICBwYXJhbXMuc2V0KCdsYW5ndWFnZScsICdpdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2tleScsICdBSXphU3lDTGM1ZXREU3JxaWVBbjRsUENzdkZEcGtNMy1GNy1jNU0nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdvb2dsZUFwaSwge3NlYXJjaDogcGFyYW1zfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHRzO1xuICAgICAgICBkYXRhLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICBsZXQgYWRkcmVzc0RhdGE6IElBZGRyZXNzID0ge1xuICAgICAgICAgICAgc3RyZWV0OiAnJyxcbiAgICAgICAgICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgICAgICAgICAgcHJvdmluY2U6ICcnLFxuICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFkZHJlc3MuYWRkcmVzc19jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tcG9uZW50cy50eXBlc1swXSkge1xuICAgICAgICAgICAgICBjYXNlICdzdHJlZXRfbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXRfbnVtYmVyID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3JvdXRlJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5zdHJlZXQgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnbG9jYWxpdHknOlxuICAgICAgICAgICAgICAgIGFkZHJlc3NEYXRhLmNpdHkgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yJzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5wcm92aW5jZSA9IGNvbXBvbmVudHMubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb3VudHJ5JzpcbiAgICAgICAgICAgICAgICBhZGRyZXNzRGF0YS5jb3VudHJ5ID0gY29tcG9uZW50cy5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEuY291bnRyeV9jb2RlID0gY29tcG9uZW50cy5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XG4gICAgICAgICAgICAgICAgYWRkcmVzc0RhdGEucG9zdGFsX2NvZGUgPSBjb21wb25lbnRzLmxvbmdfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFkZHJlc3NEYXRhLmZvcm1hdHRlZEFkZHJlc3MgPSBhZGRyZXNzLmZvcm1hdHRlZF9hZGRyZXNzO1xuXG4gICAgICAgICAgaWYgKGFkZHJlc3MudHlwZXNbMF0gPT09ICdzdHJlZXRfYWRkcmVzcycpIHtcbiAgICAgICAgICAgIGFkZHJlc3NEYXRhLmlzRnVsbCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFkZHJlc3NEYXRhLmNvdW50cnlfY29kZSA9PT0gJ0lUJykge1xuICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goYWRkcmVzc0RhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZGRyZXNzZXM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL29yZGVyL29yZGVyLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlcnNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGk6IHN0cmluZztcbiAgcHJpdmF0ZSBhdXRoO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLmFwaSA9ICdodHRwczovL2FwaS5zdGFyYm9vay5jby92MC45LjEvJztcbiAgfVxuXG4gIHByaXZhdGUgX21ha2VIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogdGhpcy5hdXRoLnRva2VufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGggPSBmYWxzZTtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGdldE9yZGVycyhwYXJhbXMpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgbGV0IHBhcmFtc1RvUmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuZm9yRWFjaCgocGVyYW0pID0+IHtcbiAgICAgIHBhcmFtc1RvUmVxdWVzdC5zZXQocGVyYW0ubmFtZSwgcGVyYW0udmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ29yZGVycycsIHtoZWFkZXJzOiB0aGlzLl9tYWtlSGVhZGVycygpLCBzZWFyY2g6IHBhcmFtc1RvUmVxdWVzdH0pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIFsnSWRyYXVsaWNvJywgJ0VsZXR0cmljaXN0YScsICdGYWJicm8nLCAnU3BhenphY2FtaW5vJywgJ0FudGVubmlzdGEnLCAnUHVsaXppZScsICdFZGlsaXppYScsICdHaWFyZGluYWdnaW8nLCAnSW5mb3JtYXRpY2EnXTtcbiAgfVxuXG4gIG1vZGlmeU9yZGVyKGlkLCB0eXBlKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYXBpICsgJ29yZGVycy8nICsgaWQsIHthY3Rpb246IHR5cGV9LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBhZGRQcmljZShpZCwgdHlwZSwgcHJpY2UpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5hcGkgKyAnb3JkZXJzLycgKyBpZCwge2FjdGlvbjogdHlwZSwgcGF5bWVudDoge2Ftb3VudDogcHJpY2UsIGN1cnJlbmN5OiBcImV1clwiIH19LCB7aGVhZGVyczogdGhpcy5fbWFrZUhlYWRlcnMoKX0pXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3Iuc3RhdHVzIHx8IGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvb3JkZXJzLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIHN0cmlwZVJlc3BvbnNlIHtcbiAgdG9rZW46IHN0cmluZztcbiAgZGF0YToge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGkgPSAnaHR0cHM6Ly9hcGkuc3RhcmJvb2suY28vdjAuOS4xLyc7XG4gIHByaXZhdGUgYXV0aDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICBwcml2YXRlIF9tYWtlSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycztcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dGggPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6IHRoaXMuYXV0aC50b2tlbn0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J1Rva2VuJzogJyd9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoID0gZmFsc2U7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoZWFkZXJzOiBoZWFkZXJzfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbihjYXJkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICg8YW55PndpbmRvdykuU3RyaXBlLmNhcmQuY3JlYXRlVG9rZW4oe1xuICAgICAgICBudW1iZXI6IGNhcmQubnVtYmVyLFxuICAgICAgICBleHBfbW9udGg6IGNhcmQuZXhwX21vbnRoLFxuICAgICAgICBleHBfeWVhcjogY2FyZC5leHBfeWVhcixcbiAgICAgICAgY3ZjOiBjYXJkLmN2YyxcbiAgICAgICAgbmFtZTogY2FyZC5uYW1lLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiBjYXJkLmFkZHJlc3NfbGluZTEsXG4gICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgYWRkcmVzc19jaXR5OiBjYXJkLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IGNhcmQuYWRkcmVzc19zdGF0ZSxcbiAgICAgICAgYWRkcmVzc19jb3VudHJ5OiBjYXJkLmFkZHJlc3NfY291bnRyeVxuICAgICAgfSwgKHN0YXR1czogbnVtYmVyLCByZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGxldCBzdHJpcGVSZXNwb25zZTogc3RyaXBlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICB0b2tlbjogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZS5jYXJkXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXNvbHZlKHN0cmlwZVJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjYXJkTnVtYmVyVmFsaWRhdGUoY2FyZE51bWJlcikge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLlN0cmlwZS5jYXJkLnZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDYXJkKGNhcmREYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmdldFRva2VuKGNhcmREYXRhKVxuICAgICAgICAudGhlbigoZGF0YTogc3RyaXBlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMnLCB7c291cmNlOiBkYXRhLnRva2VufSwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHtkZWZhdWx0X3NvdXJjZTogY2FyZElkfSx0aGlzLl9tYWtlSGVhZGVycygpKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICAgIHJldHVybiBzdGF0dXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwdWJsaWMgZWRpdENhcmQoY2FyZElkLCBjYXJkRGF0YSkge1xuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGkgKyAnbWUvY2FyZHMvJyArIGNhcmRJZCwgY2FyZERhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lL2N1c3RvbWVycycsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wYXltZW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXywgRE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VvU2VydmljZSB7XG4gIHByaXZhdGUgX2RvbTogRG9tQWRhcHRlciA9IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18uZ2V0RE9NKCk7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHsgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH1cblxuICBzZXRNZXRhRWxlbShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBsZXQgaGVhZFRhZ3MgPSB0aGlzLl9kb2N1bWVudC5oZWFkLmNoaWxkcmVuIGFzIEhUTUxDb2xsZWN0aW9uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZFRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtID0gaGVhZFRhZ3NbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbS50YWdOYW1lID09PSAnbWV0YScpIHtcbiAgICAgICAgbGV0IGF0dHIgPSBlbGVtWydhdHRyaWJzJ107XG4gICAgICAgIGlmICgnbmFtZScgaW4gYXR0cikge1xuICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnbmFtZScsIG5hbWUpO1xuICAgIHRoaXMuX2RvbS5zZXRBdHRyaWJ1dGUoZWwsICdjb250ZW50JywgdmFsdWUpO1xuICAgIHRoaXMuX2RvbS5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5oZWFkLCBlbCk7XG4gIH1cblxuICBzZXRPZ0VsZW0obmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IGhlYWRUYWdzID0gdGhpcy5fZG9jdW1lbnQuaGVhZC5jaGlsZHJlbiBhcyBIVE1MQ29sbGVjdGlvbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZWxlbSA9IGhlYWRUYWdzW2ldIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGVsZW0udGFnTmFtZSA9PT0gJ21ldGEnKSB7XG4gICAgICAgIGxldCBhdHRyID0gZWxlbVsnYXR0cmlicyddO1xuICAgICAgICBpZiAoJ3Byb3BlcnR5JyBpbiBhdHRyKSB7XG4gICAgICAgICAgaWYgKGF0dHIucHJvcGVydHkgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RvbS5yZW1vdmUoZWxlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLl9kb20uY3JlYXRlRWxlbWVudCgnbWV0YScpIGFzIEhUTUxNZXRhRWxlbWVudDtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAncHJvcGVydHknLCBuYW1lKTtcbiAgICB0aGlzLl9kb20uc2V0QXR0cmlidXRlKGVsLCAnY29udGVudCcsIHZhbHVlKTtcbiAgICB0aGlzLl9kb20uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuaGVhZCwgZWwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9zZW8uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEFuZ3VsYXJNYXNvbnJ5LCBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gJy4vaG9tZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSB9IGZyb20gJy4uL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VvLnNlcnZpY2UnO1xuZGVjbGFyZSBsZXQgTWFzb25yeTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnlMaXN0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIHR5cGU6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbl9jb2RlOiBzdHJpbmc7XG4gIGljb25fbmFtZTogc3RyaW5nO1xuICBsYW5nOiBzdHJpbmc7XG4gIHByb2R1Y3RzOiBJU2VydmljZUNhdGVnb3J5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlQ2F0ZWdvcnkge1xuICBfaWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IElTZXJ2aWNlW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUZvcm1JdGVtIHtcbiAgZm9ybUlkPzogbnVtYmVyO1xuICBvcHRpb25JZD86IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGl0bGVfMTogc3RyaW5nO1xuICBpbnB1dF90eXBlPzogc3RyaW5nO1xuICBpbnB1dF92YWx1ZT86IGFueTtcbiAgdmFsdWVfc3ltYm9sPzogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgc2VsZWN0ZWQ/OmJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRm9ybSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRpdGxlXzE6IHN0cmluZztcbiAgcHJpY2VfdHlwZTogc3RyaW5nO1xuICBvcHRpb25zOiBJU2VydmljZUZvcm1JdGVtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlcyB7XG4gIF9pZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWFnZV91cmw6IHN0cmluZztcbiAgcHJpY2U6IHtcbiAgICBiYXNlX2Ftb3VudDogbnVtYmVyO1xuICB9LFxuICBvcmRlcl9vcHRpb25zOiB7XG4gICAgbWluX2Ftb3VudDogbnVtYmVyO1xuICAgIHBheW1lbnRfbWV0aG9kczogc3RyaW5nW11cbiAgfSxcbiAgZm9ybXM6IElTZXJ2aWNlRm9ybVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGJhc2VBbW91bnQgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgY2FsY3VsYXRlZDogMFxuICB9O1xuICBwdWJsaWMgY2FsY3VsYXRlUmVzdWx0cyA9IHtcbiAgICBxdWV1ZUZpcnN0OiAwLFxuICAgIHF1ZXVlU2Vjb25kOiAwLFxuICAgIHF1ZXVlRW5kOiAwXG4gIH07XG4gIHB1YmxpYyBvcGVyYW5kcyA9IHtcbiAgICBxdWV1ZUZpcnN0OiBbXSxcbiAgICBxdWV1ZVNlY29uZDogW10sXG4gICAgcXVldWVFbmQ6IFtdXG4gIH07XG4gIHB1YmxpYyBmaW5hbFByaWNlID0gMDtcbiAgcHVibGljIGRlZmF1bHRTZXJ2aWNlcztcblxuICBwdWJsaWMgc2VydmljZXNDYXRlZ29yeUxpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0W10gPSBbXTtcbiAgcHVibGljIGlzU2VydmljZXNWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBzZXJ2aWNlc0RhdGEgPSBbXTtcblxuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5OiBib29sZWFufHN0cmluZyA9IGZhbHNlO1xuICBwdWJsaWMgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZTogYm9vbGVhbnxudW1iZXIgPSBmYWxzZTtcbiAgcHVibGljIG1vZGVsOiBhbnk7XG4gIHB1YmxpYyBvcmRlckRhdGEgPSB7XG4gICAgc2VydmljZV9pZDogJycsXG4gICAgcHJpY2U6IHtcbiAgICAgIGJhc2VfYW1vdW50OiAwXG4gICAgfSxcbiAgICBvcmRlcl9vcHRpb25zOiB7XG4gICAgICBtaW5fYW1vdW50OiAwLFxuICAgICAgcGF5bWVudF9tZXRob2RzOiBbXVxuICAgIH0sXG4gICAgc2VydmljZTogJycsXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHRvdGFsUHJpY2U6IDBcbiAgfTtcbiAgcHVibGljIG9yZGVySXNGdWxsID0gZmFsc2U7XG4gIHB1YmxpYyBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG4gIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gLTE1O1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBtYXNvbnJ5OiBhbnk7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIEBWaWV3Q2hpbGQoQW5ndWxhck1hc29ucnkpIG1hc29ucnk6IEFuZ3VsYXJNYXNvbnJ5O1xuICAvLyBAVmlld0NoaWxkKE1hc29ucnlNb2R1bGUpIGxheW91dDogTWFzb25yeU1vZHVsZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICByZW5kZXJQYWdlKHNlcnZpY2VzOiBJU2VydmljZXMpIHtcbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2Uoc2VydmljZXMudGl0bGUpO1xuXG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKHNlcnZpY2VzLnRpdGxlKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnRpdGxlJywgc2VydmljZXMudGl0bGUpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgc2VydmljZXMuZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby9zZXJ2aWNlcy8nICsgc2VydmljZXMuX2lkKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuXG4gICAgdGhpcy5kZWZhdWx0U2VydmljZXMgPSBzZXJ2aWNlcztcbiAgICB0aGlzLmlzU2VydmljZXNWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2NvbnRlbnQnLFxuICAgICAgICBpbWFnZTogc2VydmljZXMuaW1hZ2VfdXJsLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VydmljZXMuZGVzY3JpcHRpb24sXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLm9yZGVyRGF0YSA9IHtcbiAgICAgIHNlcnZpY2VfaWQ6IHNlcnZpY2VzLl9pZCxcbiAgICAgIHByaWNlOiBzZXJ2aWNlcy5wcmljZSxcbiAgICAgIG9yZGVyX29wdGlvbnM6IHNlcnZpY2VzLm9yZGVyX29wdGlvbnMsXG4gICAgICBzZXJ2aWNlOiBzZXJ2aWNlcy50aXRsZSxcbiAgICAgIHNlcnZpY2VzOiBbXSxcbiAgICAgIHRvdGFsUHJpY2U6IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50XG4gICAgfTtcbiAgICB0aGlzLmJhc2VBbW91bnQuc3RhcnQgPSBzZXJ2aWNlcy5wcmljZS5iYXNlX2Ftb3VudDtcbiAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHNlcnZpY2VzLnByaWNlLmJhc2VfYW1vdW50O1xuICAgIGxldCBmb3JtSWQgPSAxO1xuICAgIHNlcnZpY2VzLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgdmFyIHRpdGxlXzE6IHN0cmluZztcbiAgICAgIGlmIChmb3JtLnRpdGxlXzEpIHtcbiAgICAgICAgdGl0bGVfMSA9IGZvcm0udGl0bGVfMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlXzEgPSBmb3JtLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2VydmljZUZvcm06IElTZXJ2aWNlRm9ybSA9IHtcbiAgICAgICAgdGl0bGU6IGZvcm0udGl0bGUsXG4gICAgICAgIHRpdGxlXzEgOiB0aXRsZV8xLFxuICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgIHJlcXVpcmVkOiBmb3JtLnJlcXVpcmVkLFxuICAgICAgICBwcmljZV90eXBlOiBmb3JtLnByaWNlX3R5cGUsXG4gICAgICAgIG9wdGlvbnM6IFtdXG4gICAgICB9O1xuXG4gICAgICBsZXQgb3B0aW9uSWQgPSAwO1xuICAgICAgZm9ybS5vcHRpb25zLmZvckVhY2goKGl0ZW06IElTZXJ2aWNlRm9ybUl0ZW0pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHZhciB0aXRsZV8xOiBzdHJpbmc7XG4gICAgICAgIGlmIChpdGVtLnRpdGxlXzEpIHtcbiAgICAgICAgICB0aXRsZV8xID0gaXRlbS50aXRsZV8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpdGxlXzEgPSBpdGVtLnRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbiA9IHtcbiAgICAgICAgICBmb3JtSWQ6IGZvcm1JZCxcbiAgICAgICAgICBvcHRpb25JZDogb3B0aW9uSWQsXG4gICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgdGl0bGVfMTogdGl0bGVfMSxcbiAgICAgICAgICB0eXBlOiBmb3JtLnR5cGUsXG4gICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgnaW5wdXRfdHlwZScgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdHlwZSddID0gaXRlbS5pbnB1dF90eXBlO1xuICAgICAgICAgIG9wdGlvblsnaW5wdXRfdmFsdWUnXSA9IGl0ZW0uaW5wdXRfdmFsdWU7XG4gICAgICAgICAgb3B0aW9uWyd2YWx1ZV9zeW1ib2wnXSA9IGl0ZW0udmFsdWVfc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdzZWxlY3RlZCcgaW4gaXRlbSkge1xuICAgICAgICAgIG9wdGlvblsnc2VsZWN0ZWQnXSA9IGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uWydzZWxlY3RlZCddID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgc2VydmljZUZvcm0ub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbklkICsrO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlcnZpY2VzRGF0YS5wdXNoKHNlcnZpY2VGb3JtKTtcbiAgICAgIGZvcm1JZCArKztcbiAgICB9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICB0b2dnbGVTZXJ2aWNlKHNlcnZpY2VOYW1lLCBpdGVtTmFtZSkge1xuICAgIGxldCBzZXJ2aWNlSWQgPSAwO1xuICAgIHRoaXMuc2VydmljZXNEYXRhLmZvckVhY2goKHNlcnZpY2UpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS50aXRsZSA9PT0gaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBzZXJ2aWNlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2NoZWNrYm94J30pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTm90RW1wdHlGb3JtKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFZhbHVlICYmIHNlcnZpY2UucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ1JBRElPQlVUVE9OJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdyYWRpb2J1dHRvbid9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlTmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbc2VydmljZUlkXS5vcHRpb25zW2l0ZW1JZF0uc2VsZWN0ZWQgPSAhY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ21vZGlmeScsIGxhYmVsOiAncmFkaW9idXR0b24nfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdjaGVja2JveCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9ICFjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICAgIHRoaXMuY2FsY3VsYXRlT3JkZXIoKTtcbiAgfVxuXG4gIGNoZWNrTm90RW1wdHlGb3JtKGZvcm1JZCwgb3B0aW9uSWQpOiBib29sZWFuIHtcbiAgICBsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbi5vcHRpb25JZCAhPT0gb3B0aW9uSWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZShmb3JtSWQsIG9wdGlvbklkKSB7XG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ2lucHV0J30pO1xuXG4gICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlc0RhdGFbZm9ybUlkXS5vcHRpb25zW29wdGlvbklkXS5pbnB1dF92YWx1ZSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZXNEYXRhW2Zvcm1JZF0ub3B0aW9uc1tvcHRpb25JZF0uaW5wdXRfdmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gIH1cblxuICBzZWxlY3RBbGxDb250ZW50KCRldmVudCkge1xuICAgICRldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gIH1cblxuICB1bmNoZWNrQWxsSXRlbXMoc2VydmljZU5hbWUpIHtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZihzZXJ2aWNlLnRpdGxlID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgICAgc2VydmljZS5vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzRGF0YVtzZXJ2aWNlSWRdLm9wdGlvbnNbaXRlbUlkXS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIGl0ZW1JZCsrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNlcnZpY2VJZCsrO1xuICAgIH0pO1xuICB9XG5cbiAgcXVldWVXb3JrZXIoKSB7XG4gICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQ7XG4gICAgdGhpcy5vcGVyYW5kcyA9IHtcbiAgICAgIHF1ZXVlRmlyc3Q6IFtdLFxuICAgICAgcXVldWVTZWNvbmQ6IFtdLFxuICAgICAgcXVldWVFbmQ6IFtdXG4gICAgfTtcbiAgICB0aGlzLmZpbmFsUHJpY2UgPSAwO1xuXG4gICAgbGV0IHNlcnZpY2VJZCA9IDA7XG4gICAgdGhpcy5zZXJ2aWNlc0RhdGEuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAgICAgbGV0IGl0ZW1JZCA9IDA7XG4gICAgICBzZXJ2aWNlLm9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoJ2lucHV0X3R5cGUnIGluIGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5pbnB1dF92YWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZHMucXVldWVTZWNvbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgICAgY250OiBpdGVtLmlucHV0X3ZhbHVlLFxuICAgICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdBTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlRfUEVSX0lOUFVUJyxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGU6IHNlcnZpY2UudHlwZSxcbiAgICAgICAgICAgICAgICBjbnQ6IGl0ZW0uaW5wdXRfdmFsdWUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3NlbGVjdGVkJyBpbiBpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuc3RhcnQgKyBpdGVtLmFtb3VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kcy5xdWV1ZUZpcnN0LnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdCQVNFX0FNT1VOVF9JTkNSRU1FTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VydmljZS5wcmljZV90eXBlID09PSAnQU1PVU5UJykge1xuICAgICAgICAgICAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRW5kLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdBTU9VTlQnLFxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZTogc2VydmljZS50eXBlLFxuICAgICAgICAgICAgICAgIGNudDogMCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wZXJhbmRzLnF1ZXVlRmlyc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKz0gdGFzay5hbW91bnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0ID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vcGVyYW5kcy5xdWV1ZVNlY29uZC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay50eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJykge1xuICAgICAgICB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkICogdGFzay5jbnQ7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZVNlY29uZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub3BlcmFuZHMucXVldWVFbmQuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnKSB7XG4gICAgICAgIHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkID0gdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgKyAodGFzay5hbW91bnQgKiB0YXNrLmNudCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUVuZCA9IHRoaXMuYmFzZUFtb3VudC5jYWxjdWxhdGVkO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2sudHlwZSA9PT0gJ0FNT1VOVCcpIHtcbiAgICAgICAgdGhpcy5iYXNlQW1vdW50LmNhbGN1bGF0ZWQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZCArIHRhc2suYW1vdW50O1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVJlc3VsdHMucXVldWVFbmQgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAgIHRoaXMucXVldWVXb3JrZXIoKTtcbiAgICB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlcyA9IFtdO1xuICAgIHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UgPSB0aGlzLmJhc2VBbW91bnQuY2FsY3VsYXRlZDtcbiAgICBsZXQgY3VycmVudE9yZGVyU3RhdGUgPSBbXTtcbiAgICBsZXQgc2VydmljZUlkID0gMDtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBsZXQgaXRlbUlkID0gMDtcbiAgICAgIHNlcnZpY2Uub3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChzZXJ2aWNlLnR5cGUgPT09ICdSQURJT0JVVFRPTicpIHtcbiAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZpY2UudHlwZSA9PT0gJ0NIRUNLQk9YJykge1xuICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjdXJyZW50T3JkZXJTdGF0ZS5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgICAgICAgICAgICAgcHJpY2VfdHlwZTogc2VydmljZS5wcmljZV90eXBlLFxuICAgICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLmFtb3VudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmljZS50eXBlID09PSAnSU5QVVRURVhUJykge1xuICAgICAgICAgIGlmIChzZXJ2aWNlLnByaWNlX3R5cGUgPT09ICdCQVNFX0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5pbnB1dF92YWx1ZSAqIHRoaXMuY2FsY3VsYXRlUmVzdWx0cy5xdWV1ZUZpcnN0LFxuICAgICAgICAgICAgICAgIHN5bWJvbDogaXRlbS52YWx1ZV9zeW1ib2xcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlcnZpY2UucHJpY2VfdHlwZSA9PT0gJ0FNT1VOVF9QRVJfSU5QVVQnICYmIGl0ZW0uaW5wdXRfdmFsdWUgIT0gMCkge1xuICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGUucHVzaCh7XG4gICAgICAgICAgICAgIG5hbWU6IHNlcnZpY2UudGl0bGUsXG4gICAgICAgICAgICAgIHByaWNlX3R5cGU6IHNlcnZpY2UucHJpY2VfdHlwZSxcbiAgICAgICAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5pbnB1dF92YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmljZTogaXRlbS5hbW91bnQgKiBpdGVtLmlucHV0X3ZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpdGVtSWQrKztcbiAgICAgIH0pO1xuICAgICAgc2VydmljZUlkKys7XG4gICAgfSk7XG5cbiAgICBjdXJyZW50T3JkZXJTdGF0ZS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5uYW1lKSB7XG4gICAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLnB1c2goc2VydmljZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudE9yZGVyU3RhdGUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcmRlcklzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JkZXJJc0Z1bGwgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAgIC8vIHRvZ2dsZVNlcnZpY2UoY2F0ZWdvcnlMaXN0SWQ6IHN0cmluZywgY2F0ZWdvcnlJZDogc3RyaW5nLCBzZXJ2aWNlTmFtZTogc3RyaW5nKSB7XG4gICAgLy8gbGV0IGNhdGVnb3J5TGlzdEluZGV4ID0gMDtcbiAgICAvLyB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGNhdGVnb3J5TGlzdCkgPT4ge1xuICAgIC8vICAgbGV0IGNhdGVnb3J5SW5kZXggPSAwO1xuICAgIC8vICAgaWYgKGNhdGVnb3J5TGlzdC5faWQgPT09IGNhdGVnb3J5TGlzdElkKSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgICAvLyAgICAgICBpZiAoY2F0ZWdvcnlEYXRhLl9pZCA9PT0gY2F0ZWdvcnlJZCkge1xuICAgIC8vICAgICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeURhdGEuaXRlbXMuZm9yRWFjaCgoc2VydmljZURhdGEpID0+IHtcbiAgICAvLyAgICAgICAgICAgaWYgKHNlcnZpY2VEYXRhLm5hbWUgPT09IHNlcnZpY2VOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdFtjYXRlZ29yeUxpc3RJbmRleF0ucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF0uaXRlbXNbc2VydmljZUluZGV4XS5zZWxlY3RlZCA9ICFzZXJ2aWNlRGF0YS5zZWxlY3RlZDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU9yZGVyKCk7XG4gICAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgc2VydmljZUluZGV4Kys7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBjYXRlZ29yeUluZGV4Kys7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNhdGVnb3J5TGlzdEluZGV4Kys7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy8gfVxuXG4gIC8vIGNhbGN1bGF0ZU9yZGVyKCkge1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgbGV0IGN1cnJlbnRPcmRlclN0YXRlID0gW107XG4gIC8vICAgbGV0IGFycmF5SW5kZXggPSAwO1xuICAvLyAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBjYXRlZ29yeUxpc3QucHJvZHVjdHMuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgICBzZXJ2aWNlLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAvLyAgICAgICAgICAgaWYgKGFycmF5SW5kZXggaW4gY3VycmVudE9yZGVyU3RhdGUpIHtcbiAgLy8gICAgICAgICAgICAgY3VycmVudE9yZGVyU3RhdGVbYXJyYXlJbmRleF0uaXRlbXMucHVzaCh7IG5hbWU6IGl0ZW0ubmFtZSB9KTtcbiAgLy8gICAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGN1cnJlbnRPcmRlclN0YXRlW2FycmF5SW5kZXhdID0ge1xuICAvLyAgICAgICAgICAgICAgIF9pZDogc2VydmljZS5faWQsXG4gIC8vICAgICAgICAgICAgICAgbmFtZTogc2VydmljZS50aXRsZSxcbiAgLy8gICAgICAgICAgICAgICBpdGVtczogW3tcbiAgLy8gICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZVxuICAvLyAgICAgICAgICAgICAgIH1dXG4gIC8vICAgICAgICAgICAgIH07XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgICAgYXJyYXlJbmRleCsrO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgY3VycmVudE9yZGVyU3RhdGUuZm9yRWFjaCgoc2VydmljZSkgPT4ge1xuICAvLyAgICAgaWYgKHNlcnZpY2UubmFtZSkge1xuICAvLyAgICAgICB0aGlzLm9yZGVyRGF0YS5wdXNoKHNlcnZpY2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmIChjdXJyZW50T3JkZXJTdGF0ZS5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB0aGlzLm9yZGVySXNGdWxsID0gdHJ1ZTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgdGhpcy5vcmRlcklzRnVsbCA9IGZhbHNlO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHRhYk5hdmlnYXRlKGlkOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IGlkO1xuICAvLyAgIHRoaXMub3JkZXJEYXRhID0gW107XG4gIC8vICAgdGhpcy5jbGVhclNlcnZpY2VEYXRhKCk7XG4gIC8vICAgdGhpcy5yZW5kZXJQYWdlKGlkKTtcbiAgLy8gICB0aGlzLnNlcnZpY2VzQ2F0ZWdvcnlMaXN0LmZvckVhY2goKHNlcnZpY2VDYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgIGlmIChzZXJ2aWNlQ2F0ZWdvcnlEYXRhLl9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnlUeXBlID0gc2VydmljZUNhdGVnb3J5RGF0YS50eXBlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgLy8gcmVuZGVyUGFnZShpZDogc3RyaW5nKSB7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IElTZXJ2aWNlQ2F0ZWdvcnlMaXN0KSA9PiB7XG4gIC8vICAgICBpZiAoU2VydmljZXNMaXN0Ll9pZCA9PT0gaWQpIHtcbiAgLy8gICAgICAgdGhpcy5zZXJ2aWNlc0RhdGEgPSBTZXJ2aWNlc0xpc3QucHJvZHVjdHM7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2aWNlc1ZpZXcgIT09IGZhbHNlICYmIGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICB0aGlzLm1hc29ucnkgPSBuZXcgTWFzb25yeShlbGVtcywge1xuICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICBndXR0ZXI6IDE4LFxuICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1ha2VNYXNvbnJ5KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmKHRoaXMubWFzb25yeSkge1xuICAgICAgICB0aGlzLm1hc29ucnkubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5yb3V0ZS51cmwuc3Vic2NyaWJlKCh1cmwpID0+IHtcbiAgICAvLyAgIGlmICgwIGluIHVybCkge1xuICAgIC8vICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgLy8gICAgIGlmIChzZXJ2aWNlcykge1xuICAgIC8vICAgICAgIHRoaXMucmVuZGVyUGFnZShzZXJ2aWNlcyk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1N0YXJib29rIHwgQWNxdWlzdGEgc2Vydml6aSBwcm9mZXNzaW9uYWxpIG9ubGluZScpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRNZXRhRWxlbSgnZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dGl0bGUnLCAnU3RhcmJvb2sgfCBBY3F1aXN0YSBzZXJ2aXppIHByb2Zlc3Npb25hbGkgb25saW5lJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG5cbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIGxldCBzZXJ2aWNlSWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldFNlcnZpY2VzT2JqZWN0KCk7XG4gICAgICBpZiAoc2VydmljZUlkKSB7XG4gICAgICAgIHRoaXMuaXNTZXJ2aWNlc1ZpZXcgPSB0cnVlO1xuICAgICAgICBpZiAoc2VydmljZXMpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2Uoc2VydmljZXMpO1xuICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzb25yeS1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbmV3IE1hc29ucnkoZWxlbXMsIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogNDkwLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5zZXJ2aWNlcy1ibG9jaycsXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAxOCxcbiAgICAgICAgICAgICAgICBvcmlnaW5MZWZ0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWdpblRvcDogdHJ1ZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgdGhpcy5ob21lU2VydmljZS5nZXRTZXJ2aWNlQnlJZChzZXJ2aWNlSWQpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHNlcnZpY2UgYnkgaWQnLCB0aW1pbmdWYXI6ICdsb2FkJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKGRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc29ucnktY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG5ldyBNYXNvbnJ5KGVsZW1zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IDQ5MCxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuc2VydmljZXMtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgIGd1dHRlcjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5Ub3A6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm9yZGVyU2VydmljZS5nZXRPcmRlckV2ZW50JC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9yZGVyQ3JlYXRlZChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmhvbWVTZXJ2aWNlLmdldENhdGVnb3JpZXMoKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgdGhpcy5wYXJzZVNlcnZpY2VEYXRhKGRhdGEucmVzdWx0KTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldEFjdGl2ZVRhYiQuc3Vic2NyaWJlKHRhYiA9PiB7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeVR5cGUgPSB0YWI7XG4gICAgLy8gICB0aGlzLmFjdGl2ZVNlcnZpY2VDYXRlZ29yeSA9IHRhYjtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBwYXJzZVNlcnZpY2VEYXRhKGRhdGEpIHtcbiAgLy8gICBsZXQgaSA9IDA7XG4gIC8vICAgZGF0YS5mb3JFYWNoKChTZXJ2aWNlc0xpc3Q6IGFueSkgPT4ge1xuICAvLyAgICAgbGV0IFByb2R1Y3RzID0gW107XG4gIC8vICAgICBTZXJ2aWNlc0xpc3QucHJvZHVjdHMuZm9yRWFjaCgoU2VydmljZXNDYXRlZ29yeSkgPT4ge1xuICAvLyAgICAgICBsZXQgSXRlbXMgPSBbXTtcbiAgLy8gICAgICAgU2VydmljZXNDYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChDYXRlZ29yeUl0ZW0pID0+IHtcbiAgLy8gICAgICAgICBJdGVtcy5wdXNoKHtcbiAgLy8gICAgICAgICAgIG5hbWU6IENhdGVnb3J5SXRlbSBhcyBzdHJpbmcsXG4gIC8vICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIFByb2R1Y3RzLnB1c2goe1xuICAvLyAgICAgICAgIF9pZDogU2VydmljZXNDYXRlZ29yeS5faWQgYXMgbnVtYmVyLFxuICAvLyAgICAgICAgIHRpdGxlOiBTZXJ2aWNlc0NhdGVnb3J5LnRpdGxlIGFzIHN0cmluZyxcbiAgLy8gICAgICAgICBpdGVtczogSXRlbXNcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3QucHVzaCh7XG4gIC8vICAgICAgIF9pZDogU2VydmljZXNMaXN0Ll9pZCBhcyBzdHJpbmcsXG4gIC8vICAgICAgIHR5cGU6IFNlcnZpY2VzTGlzdC50eXBlIGFzIG51bWJlcixcbiAgLy8gICAgICAgdGl0bGU6IFNlcnZpY2VzTGlzdC50aXRsZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fY29kZTogU2VydmljZXNMaXN0Lmljb25fY29kZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGljb25fbmFtZTogU2VydmljZXNMaXN0Lmljb25fbmFtZSBhcyBzdHJpbmcsXG4gIC8vICAgICAgIGxhbmc6IFNlcnZpY2VzTGlzdC5sYW5nIGFzIHN0cmluZyxcbiAgLy8gICAgICAgcHJvZHVjdHM6IFByb2R1Y3RzXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGlmIChpID09PSAwKSB7XG4gIC8vICAgICAgIHRoaXMuYWN0aXZlU2VydmljZUNhdGVnb3J5ID0gU2VydmljZXNMaXN0Ll9pZDtcbiAgLy8gICAgICAgdGhpcy5yZW5kZXJQYWdlKFNlcnZpY2VzTGlzdC5faWQpO1xuICAvLyAgICAgICBpKys7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvLyBjbGVhclNlcnZpY2VEYXRhKCkge1xuICAvLyAgIGxldCBjYXRlZ29yeUxpc3RJbmRleCA9IDA7XG4gIC8vICAgdGhpcy5zZXJ2aWNlc0NhdGVnb3J5TGlzdC5mb3JFYWNoKChjYXRlZ29yeUxpc3QpID0+IHtcbiAgLy8gICAgIGxldCBjYXRlZ29yeUluZGV4ID0gMDtcbiAgLy8gICAgIGNhdGVnb3J5TGlzdC5wcm9kdWN0cy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcbiAgLy8gICAgICAgbGV0IHNlcnZpY2VJbmRleCA9IDA7XG4gIC8vICAgICAgIGNhdGVnb3J5RGF0YS5pdGVtcy5mb3JFYWNoKChzZXJ2aWNlRGF0YSkgPT4ge1xuICAvLyAgICAgICAgIHRoaXMuc2VydmljZXNDYXRlZ29yeUxpc3RbY2F0ZWdvcnlMaXN0SW5kZXhdXG4gIC8vICAgICAgICAgICAucHJvZHVjdHNbY2F0ZWdvcnlJbmRleF1cbiAgLy8gICAgICAgICAgIC5pdGVtc1tzZXJ2aWNlSW5kZXhdXG4gIC8vICAgICAgICAgICAuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgLy8gICAgICAgICBzZXJ2aWNlSW5kZXgrKztcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIGNhdGVnb3J5SW5kZXgrKztcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgY2F0ZWdvcnlMaXN0SW5kZXgrKztcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8vIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAvLyAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgLy8gICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgLy8gICAgIGxldCBtZW51U2l6ZSA9IDA7XG4gIC8vICAgICBsZXQgYWxsTWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1waWxscyA+IGxpJyk7XG4gIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgICBsZXQgbWVudUl0ZW06IGFueSA9IGFsbE1lbnVJdGVtc1tpXTtcbiAgLy8gICAgICAgbWVudVNpemUgKz0gbWVudUl0ZW0ub2Zmc2V0V2lkdGg7XG4gIC8vICAgICB9XG4gIC8vICAgICBsZXQgbWVudUJsb2NrV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWItYmFyJykuY2xpZW50V2lkdGg7XG4gIC8vICAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUgKyA1MCkgLSBtZW51QmxvY2tXaWR0aDtcbiAgLy8gICAgIGlmIChhbGxvd01hcmdpbiA+PSAwKSB7XG4gIC8vICAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAvLyAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPiAwKSB7XG4gIC8vICAgICAgICAgdGhpcy5kZWx0YSA9IC0xNTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAoY2FsY3VsYXRlRGVsdGEgPCBhbGxvd01hcmdpbikge1xuICAvLyAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAvLyAgICAgICAgICAgICB0aGlzLmRlbHRhID0gYWxsb3dNYXJnaW47XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHRoaXMuZGVsdGEgPSBjYWxjdWxhdGVEZWx0YTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBvcmRlckNyZWF0ZWQoZXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2VzRGF0YS5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XG4gICAgICB0aGlzLnVuY2hlY2tBbGxJdGVtcyhzZXJ2aWNlLnRpdGxlKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlclBhZ2UodGhpcy5kZWZhdWx0U2VydmljZXMpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkNhbmNlbCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMsIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcG9wdXBzL3BvcHVwcy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mYWNlYm9vaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNlYm9vay5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShzID0+IHtcbiAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocy51cmwuc3BsaXQoJyMnKVsxXSk7XG4gICAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBwYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgICAgICAgICAgaWYgKGFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhY2Vib29rX3Rva2VuJywgYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZhY2Vib29rX3Rva2VuJywgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZXMvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvb3JkZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uLy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEFuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPcmRlciB7XG4gIF9pZDogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgcGF5bWVudD86IHtcbiAgICBhbW91bnQ/OiBudW1iZXIsXG4gICAgY3VycmVuY3k/OiBzdHJpbmdcbiAgfSxcbiAgY2F0ZWdvcnlfdHlwZTogbnVtYmVyO1xuICBkZWxpdmVyeV9kZXRhaWxzOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X2RhdGU6IHN0cmluZztcbiAgZGVsaXZlcnlfYWRkcmVzczoge1xuICAgIHN0cmVldDogc3RyaW5nO1xuICAgIHN0cmVldF9udW1iZXI6IHN0cmluZztcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgcG9zdGFsX2NvZGU6IHN0cmluZztcbiAgICBwcm92aW5jZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjb3VudHJ5X2NvZGU6IHN0cmluZztcbiAgfSxcbiAgY3VzdG9tZXI6IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGZ1bGxuYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gIH0sXG4gIG1lcmNoYW50OiB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBmdWxsbmFtZTogc3RyaW5nO1xuICAgIHBob25lX251bWJlcjogc3RyaW5nO1xuICB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVycy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaXQ6IGFueTtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRhZ2xpbmVzID0ge1xuICAgICdSaWNoaWVzdGUgZGVpIGNsaWVudGknOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJyxcbiAgICAnSSBtaWVpIG9yZGluaSc6ICdJIG1pZWkgb3JkaW5pJyxcbiAgICAnQXJjaGl2aW8nOiAnQXJjaGl2aW8gZGkgdHV0dGkgZ2xpIG9yZGluaSdcbiAgfTtcbiAgcHVibGljIHRhYnMgPSBbXG4gICAge25hbWU6ICdJIG1pZWkgb3JkaW5pJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICBdO1xuICBwdWJsaWMgY2F0ZWdvcmllcyA9IFtdO1xuICBwdWJsaWMgcGFnZURhdGE6IElPcmRlcltdID0gW107XG4gIHB1YmxpYyByZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNWZW5kb3IgPSBmYWxzZTtcbiAgcHVibGljIGVtcHR5TGlzdFRpdGxlID0gJydcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgYXV0aERhdGEgPSB7fTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0aW9uU2VydmljZTogTmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgb3JkZXJzU2VydmljZTogT3JkZXJzU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBhdXRoRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XG4gICAgICAgIHRoaXMuYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgYXV0aERhdGEuYWNjb3VudF90eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdWRU5ET1InKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmVuZG9yID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1ZlbmRvcikge1xuICAgICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICAgIHtuYW1lOiAnUmljaGllc3RlIGRlaSBjbGllbnRpJywgc2VsZWN0ZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnSSBtaWVpIG9yZGluaScsIHNlbGVjdGVkOiBmYWxzZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0FyY2hpdmlvJywgc2VsZWN0ZWQ6IGZhbHNlfVxuICAgICAgICAgIF07XG4gICAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdSaWNoaWVzdGUgZGVpIGNsaWVudGknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoJ0kgbWllaSBvcmRpbmknKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJQYWdlKCdJIG1pZWkgb3JkaW5pJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyUGFnZSgnSSBtaWVpIG9yZGluaScpO1xuICAgIH1cblxuXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldENhdGVnb3JpZXMoKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgbGV0IG9yZGVySW5kZXggPSAwO1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU9yZGVyJzpcbiAgICAgICAgICAgIG9yZGVySW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9yZGVyRGF0YS5faWQgPT09IGFjdGlvbi5kYXRhLm9yZGVySWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnN0YXR1cyA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW5jZWxPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSA5OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlYWN0aXZhdGVPcmRlcic6XG4gICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZURhdGEuZm9yRWFjaCgob3JkZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvcmRlckRhdGEuX2lkID09PSBhY3Rpb24uZGF0YS5vcmRlcklkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkUHJpY2UnOlxuICAgICAgICAgICAgaWYgKGFjdGlvbi5kYXRhLmlzTW9kaWZpZWQgPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZSh0aGlzLnNlbGVjdFRhYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcmRlckluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlRGF0YS5mb3JFYWNoKChvcmRlckRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5zdGF0dXMgPSAyO1xuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wYWdlRGF0YVtvcmRlckluZGV4XS5wYXltZW50ID0ge2Ftb3VudDogYWN0aW9uLmRhdGEub3JkZXJQcmljZSwgY3VycmVuY3k6ICdldXInfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yZGVySW5kZXgrKztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlZGl0UHJpY2UnOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGFbb3JkZXJJbmRleF0uc3RhdHVzID0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuYW1vdW50ID0gYWN0aW9uLmRhdGEub3JkZXJQcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VEYXRhW29yZGVySW5kZXhdLnBheW1lbnQuY3VycmVuY3kgPSAnZXVyJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmRlckluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRpbnVlT3JkZXInOlxuICAgICAgICAgICAgb3JkZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VEYXRhLmZvckVhY2goKG9yZGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAob3JkZXJEYXRhLl9pZCA9PT0gYWN0aW9uLmRhdGEub3JkZXJJZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZURhdGEuc3BsaWNlKG9yZGVySW5kZXgsMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JkZXJJbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pdCA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiAxLFxuICAgICAgZGF5TmFtZXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICBkYXlOYW1lc01pbjogWydEbycsICdMdScsICdNYScsICdNZScsICdHaScsICdWZScsICdTYSddLFxuICAgICAgbW9udGhOYW1lczogWydHZW5uYWlvJywgJ0ZlYmJyYWlvJywgJ01hcnpvJywgJ0FwcmlsZScsICdNYWdnaW8nLCAnR2l1Z25vJyxcbiAgICAgICAgJ0x1Z2xpbycsICdBZ29zdG8nLCAnU2V0dGVtYnJlJywgJ090dG9icmUnLCAnTm92ZW1icmUnLCAnRGljZW1icmUnXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgdGhpcy5yZXF1ZXN0SXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0VGFiID0gcGFnZTtcbiAgICBsZXQgdGFiSW5kZXggPSAwO1xuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgIGlmICh0YWIubmFtZSA9PT0gcGFnZSkge1xuICAgICAgICB0aGlzLnRhYnNbdGFiSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFic1t0YWJJbmRleF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRhYkluZGV4Kys7XG4gICAgfSk7XG5cbiAgICBsZXQgcGFyYW1zID0gW107XG5cbiAgICBpZiAocGFnZSA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aScpIHtcbiAgICAgIHRoaXMucmVxdWVzdElzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW1wdHlMaXN0VGl0bGUgPSAnTm9uIGNpIHNvbm8gb3JkaW5pIHJpY2hpZXN0aSBkYWkgY2xpZW50aSBwZXIgaWwgbW9tZW50bydcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdSRUNFSVZFRCd9KTtcbiAgICB9XG5cbiAgICBpZiAocGFnZSA9PT0gJ0kgbWllaSBvcmRpbmknKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gJ05vbiBjaSBzb25vIG9yZGluaSBlZmZldHR1YXRpJ1xuICAgICAgcGFyYW1zID0gW107XG4gICAgICBwYXJhbXMucHVzaCh7bmFtZTogJ29yZGVyX3R5cGUnLCB2YWx1ZTogJ1JFUVVJUkVEJ30pO1xuICAgIH1cblxuICAgIGlmIChwYWdlID09PSAnQXJjaGl2aW8nKSB7XG4gICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmVtcHR5TGlzdFRpdGxlID0gXCJMJ2FyY2hpdmlvIGRlZ2xpIG9yZGluaSBlIHZ1b3RhXCJcbiAgICAgIHBhcmFtcyA9IFtdO1xuICAgICAgcGFyYW1zLnB1c2goe25hbWU6ICdvcmRlcl90eXBlJywgdmFsdWU6ICdBUkNISVZFJ30pO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE9yZGVycyhwYXJhbXMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IGxpc3Qgb2Ygb3JkZXJzJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlcXVlc3RJc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucGFnZURhdGEgPSByZXNwb25zZS5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYWdlRGF0YSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLnRhZ2xpbmVzW3BhZ2VdKTtcbiAgICB9XG4gIH1cblxuICBkYXRlRm9ybWF0aW5nKGRhdGUpIHtcbiAgICBsZXQgcmV0dXJuRGF0ZSA9ICcnO1xuICAgIGlmIChkYXRlICE9PSAnbm93Jykge1xuICAgICAgbGV0IGRhdGVTdHJpbmcgPSBkYXRlLnN1YnN0cmluZygwLCBkYXRlLmxlbmd0aCAtIDUpO1xuICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuc3BsaXQoJ1QnKTtcbiAgICAgIGxldCBkYXRlQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMF0uc3BsaXQoJy0nKTtcbiAgICAgIGxldCBob3VyQ29tcG9uZW50cyA9IGRhdGVTdHJpbmdbMV0uc3BsaXQoJzonKTtcbiAgICAgIHJldHVybkRhdGUgPSBkYXRlQ29tcG9uZW50c1syXSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlQ29tcG9uZW50c1sxXS0xXSArICcgJyArIGRhdGVDb21wb25lbnRzWzBdICsgJyAnICsgaG91ckNvbXBvbmVudHNbMF0gKyAnOicgKyBob3VyQ29tcG9uZW50c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgICBsZXQgbW9udGggPSAxICsgY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGxldCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGxldCBob3VycyA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCk7XG4gICAgICBsZXQgbWludXRlcyA9IGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGxldCBzZWNvbmRzID0gY3VycmVudERhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgcmV0dXJuRGF0ZSArPSB5ZWFyO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtb250aCA+IDkgPyAnLScgKyBtb250aCA6ICctMCcgKyBtb250aDtcbiAgICAgIHJldHVybkRhdGUgKz0gZGF5ID4gOSA/ICctJyArIGRheSA6ICctMCcgKyBkYXk7XG4gICAgICByZXR1cm5EYXRlICs9IGhvdXJzID4gOSA/ICdUJyArIGhvdXJzIDogJ1QwJyArIGhvdXJzO1xuICAgICAgcmV0dXJuRGF0ZSArPSBtaW51dGVzID4gOSA/ICc6JyArIG1pbnV0ZXMgOiAnOjAnICsgbWludXRlcztcbiAgICAgIHJldHVybkRhdGUgKz0gc2Vjb25kcyA+IDkgPyAnOicgKyBzZWNvbmRzICArICcuMDAwWicgOiAnOjAnICsgc2Vjb25kcyArICcuMDAwWic7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5EYXRlO1xuICB9XG5cbiAgZGF0ZUNvbXBhcmUoZGF0ZTEsIGRhdGUyKSB7XG4gICAgbGV0IGRhdGUxT2JqID0gRGF0ZS5wYXJzZShkYXRlMSk7XG4gICAgbGV0IGRhdGUyT2JqID0gRGF0ZS5wYXJzZShkYXRlMik7XG4gICAgaWYgKGRhdGUxT2JqID4gZGF0ZTJPYmopIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaXRlbXNGb3JtYXRpbmcoaXRlbXMpIHtcbiAgICBsZXQgcmV0dXJuUHJvZHVjdHMgPSBbXTtcbiAgICBsZXQgcHJvZHVjdHMgPSBpdGVtcy5zcGxpdCgnfHwnKTtcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICBsZXQgcHJvZHVjdENvbXBvbmVudHMgPSBwcm9kdWN0LnNwbGl0KCc6Jyk7XG4gICAgICBpZiAocHJvZHVjdENvbXBvbmVudHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm5Qcm9kdWN0cy5wdXNoKHtuYW1lOiBwcm9kdWN0Q29tcG9uZW50c1swXSwgaXRlbXM6IHByb2R1Y3RDb21wb25lbnRzWzFdfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblByb2R1Y3RzO1xuICB9XG5cbiAgY29uZmlybU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNhbmNlbE9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY2FuY2VsT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWR9fSk7XG4gIH1cbiAgcmVhY3RpdmF0ZU9yZGVyKGlkKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAncmVhY3RpdmF0ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICB9XG4gIGNvbXBsZXRhT3JkZXIoaWQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdhZGRQcmljZScsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgfVxuICBlZGl0T3JkZXIoaWQsIHBheW1lbnQpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlZGl0UHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnR9fSk7XG4gIH1cbiAgY29udGludWVPcmRlcihpZCwgcGF5bWVudCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogaWQsIHBheW1lbnQ6IHBheW1lbnQsIGluZm9ybWF0aW9uOiAnMTIw4oKsICsgNi424oKsID0gMTI2LjbigqwnfX0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9wb3B1cHMvcG9wdXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBTZW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gXCJhbmd1bGFyMi11bml2ZXJzYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlckRhdGEge1xuICBmdWxsbmFtZT86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHBob25lX251bWJlcj86IHN0cmluZztcbiAgc3RyZWV0Pzogc3RyaW5nO1xuICBjaXR5Pzogc3RyaW5nO1xuICBwb3N0YWxfY29kZT86IG51bWJlcjtcbiAgcHJvdmluY2U/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdFRhYjogc3RyaW5nfGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcbiAgcHVibGljIGRlbHRhOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgdGFicyA9IFtcbiAgICB7bmFtZTogJ0dlbmVyYWxpJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdzZXR0aW5ncyd9LFxuICAgIHtuYW1lOiAnTWV0b2RvIGRpIFBhZ2FtZW50bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAncGF5bWVudCd9LFxuICAgIHtuYW1lOiAnQ29uZGl6aW9uaSBk4oCZdXRpbGl6em8nLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2NvbmRpdGlvbnMnfSxcbiAgICB7bmFtZTogJ1ByaXZhY3kgUG9saWN5Jywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdwcml2YWN5J30sXG4gICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgXTtcblxuICBwdWJsaWMgdXNlckRhdGE6IElVc2VyRGF0YSA9IHtcbiAgICBmdWxsbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lX251bWJlcjogJycsXG4gICAgc3RyZWV0OiAnJyxcbiAgICBjaXR5OiAnJyxcbiAgICBwb3N0YWxfY29kZTogbnVsbCxcbiAgICBwcm92aW5jZTogJycsXG4gICAgY291bnRyeTogJydcbiAgfTtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGNoYW5nZVBhc3N3b3JkRXJyb3IgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiBmYWxzZSxcbiAgICBwYXNzd29yZENvbmZpcm06IGZhbHNlXG4gIH07XG4gIHB1YmxpYyBjaGFuZ2VQYXNzd29yZERhdGEgPSB7XG4gICAgY3VycmVudFBhc3N3b3JkOiAnJyxcbiAgICBuZXdQYXNzd29yZDogJycsXG4gICAgcGFzc3dvcmRDb25maXJtOiAnJ1xuICB9O1xuICBwdWJsaWMgZm9ybUVycm9yOiBib29sZWFufHt0aXRsZT86IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB0eXBlPzogc3RyaW5nfSA9IGZhbHNlO1xuICBwdWJsaWMgY2FyZHMgPSBbXTtcbiAgcHVibGljIGRlZmF1bHRDYXJkID0gJyc7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICBwcml2YXRlIHBvcHVwc1NlcnZpY2U6IFBvcHVwc1NlcnZpY2UsXG4gICAgICBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSxcbiAgICAgIHByaXZhdGUgYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSxcbiAgICAgIHByaXZhdGUgc2VvU2VydmljZTogU2VvU2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgYXV0aERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpO1xuICAgICAgICB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lID0gYXV0aERhdGEuZnVsbG5hbWU7XG4gICAgICAgIHRoaXMudXNlckRhdGEuZW1haWwgPSBhdXRoRGF0YS5lbWFpbDtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICB0aGlzLnRhYnMgPSBbXG4gICAgICAgICAge25hbWU6ICdDb25kaXppb25pIGTigJl1dGlsaXp6bycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsOiAnY29uZGl0aW9ucyd9LFxuICAgICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAgICB7bmFtZTogJ0Fzc2lzdGVuemEnLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ2hlbHAnfVxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgdGhpcy50YWJzID0gW1xuICAgICAgICB7bmFtZTogJ0NvbmRpemlvbmkgZOKAmXV0aWxpenpvJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdjb25kaXRpb25zJ30sXG4gICAgICAgIHtuYW1lOiAnUHJpdmFjeSBQb2xpY3knLCBzZWxlY3RlZDogZmFsc2UsIHVybDogJ3ByaXZhY3knfSxcbiAgICAgICAge25hbWU6ICdBc3Npc3RlbnphJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmw6ICdoZWxwJ31cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnSWwgbWlvIGFjY291bnQnKTtcblxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RUYWIgPSBwYXJhbXNbJ3BhZ2UnXTtcbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0ncGF5bWVudCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdNZXRvZG8gZGkgcGFnYW1lbnRvJyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZ2V0Q2FyZHMoKVxuICAgICAgICAgICAgLnRoZW4oKGNhcmRzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdHZXQgbGlzdCBvZiBjYXJkcycsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRDYXJkID0gY2FyZHMuZGVmYXVsdF9zb3VyY2U7XG4gICAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgICAgY2FyZHMuc291cmNlcy5kYXRhLmZvckVhY2goKGNhcmREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGNhcmREYXRhKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIFN0YXJib29rIGFjY291bnQgZG8gbm90IGhhdmUgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIFdoZW4geW91IGFkZCBhIG5ldyBjYXJkLCB3aWxsIGJlIGNyZWF0ZWQgYSBTdHJpcGUgYWNjb3VudFxuICAgICAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIFN0YXJib29rIGFjY291bnRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBpZiAoZXJyb3IuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQnfX0pO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdzZXR0aW5ncycpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdJbmZvcm1hemlvbmkgZGVsIG1pbyBhY2NvdW50Jyk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSgpXG4gICAgICAgICAgICAudGhlbigocHJvZmlsZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnR2V0IHVzZXIgcHJvZmlsZScsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLmZ1bGxuYW1lID0gcHJvZmlsZS5yZXN1bHQucHJvZmlsZS5mdWxsbmFtZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5lbWFpbCA9IHByb2ZpbGUucmVzdWx0LmVtYWlsO1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnBob25lX251bWJlciA9IHByb2ZpbGUucmVzdWx0LnBob25lX251bWJlcjtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5zdHJlZXQgPSBwcm9maWxlLnJlc3VsdC5hZGRyZXNzLnN0cmVldDtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5jaXR5ID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5jaXR5O1xuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnBvc3RhbF9jb2RlID0gcHJvZmlsZS5yZXN1bHQuYWRkcmVzcy5wb3N0YWxfY29kZTtcbiAgICAgICAgICAgICAgdGhpcy51c2VyRGF0YS5wcm92aW5jZSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XG4gICAgICAgICAgICAgIHRoaXMudXNlckRhdGEuY291bnRyeSA9IHByb2ZpbGUucmVzdWx0LmFkZHJlc3MuY291bnRyeTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2Vycm9yJywgZGF0YToge3RpdGxlOidFcnJvcmUnLCBtZXNzYWdlOiBlcnJvci5qc29uKCkubWVzc2FnZX19KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCd9fSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtc1sncGFnZSddID09PSdjb25kaXRpb25zJykge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0VGl0bGUoJ1Rlcm1pbmkgZSBjb25kaXppb25pIGTigJl1dGlsaXp6bycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdUZXJtaW5pIGUgY29uZGl6aW9uaSBk4oCZdXRpbGl6em8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6ZGVzY3JpcHRpb24nLCAnUHJldmVudGl2aSB2ZWxvY2k/IFN0YXJib29rIMOoIGxhIHBpYXR0YWZvcm1hIGRlaSBsYXZvcmF6aW9uaSBwcm9mZXNzaW9uYWxpIG9ubGluZSBjb24gbGEgcG9zc2liaWxpdMOgIGRpIGNyZWFyZSBwcmV2ZW50aXZpIGlzdGFudGFuZWkuJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOnVybCcsICdodHRwczovL3d3dy5zdGFyYm9vay5jby8nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2UnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlOnNlY3VyZV91cmwnLCAnaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9zdGFyYm9vay1zMy9sYXZvcmF6aW9uaSUyQmNhcnRvbmdlc3NvJTJCY29udHJvc29mZml0dGklMkJwYXJldGklMkJjb250cm9wYXJldGkucG5nJyk7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zWydwYWdlJ10gPT09J3ByaXZhY3knKSB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTWVzc2FnZSgnUHJpdmFjeSBQb2xpY3knKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldFRpdGxlKCdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdQcml2YWN5IFBvbGljeScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzpkZXNjcmlwdGlvbicsICdQcmV2ZW50aXZpIHZlbG9jaT8gU3RhcmJvb2sgw6ggbGEgcGlhdHRhZm9ybWEgZGVpIGxhdm9yYXppb25pIHByb2Zlc3Npb25hbGkgb25saW5lIGNvbiBsYSBwb3NzaWJpbGl0w6AgZGkgY3JlYXJlIHByZXZlbnRpdmkgaXN0YW50YW5laS4nKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6dXJsJywgJ2h0dHBzOi8vd3d3LnN0YXJib29rLmNvLycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZScsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgICAgdGhpcy5zZW9TZXJ2aWNlLnNldE9nRWxlbSgnb2c6aW1hZ2U6c2VjdXJlX3VybCcsICdodHRwczovL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tL3N0YXJib29rLXMzL2xhdm9yYXppb25pJTJCY2FydG9uZ2Vzc28lMkJjb250cm9zb2ZmaXR0aSUyQnBhcmV0aSUyQmNvbnRyb3BhcmV0aS5wbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3BhZ2UnXSA9PT0naGVscCcpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVNZXNzYWdlKCdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRUaXRsZSgnQXNzaXN0ZW56YScpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0TWV0YUVsZW0oJ2Rlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp0aXRsZScsICdBc3Npc3RlbnphJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmRlc2NyaXB0aW9uJywgJ1ByZXZlbnRpdmkgdmVsb2NpPyBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBkZWkgbGF2b3JhemlvbmkgcHJvZmVzc2lvbmFsaSBvbmxpbmUgY29uIGxhIHBvc3NpYmlsaXTDoCBkaSBjcmVhcmUgcHJldmVudGl2aSBpc3RhbnRhbmVpLicpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzp1cmwnLCAnaHR0cHM6Ly93d3cuc3RhcmJvb2suY28vJyk7XG4gICAgICAgIHRoaXMuc2VvU2VydmljZS5zZXRPZ0VsZW0oJ29nOmltYWdlJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgICB0aGlzLnNlb1NlcnZpY2Uuc2V0T2dFbGVtKCdvZzppbWFnZTpzZWN1cmVfdXJsJywgJ2h0dHBzOi8vczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vc3RhcmJvb2stczMvbGF2b3JhemlvbmklMkJjYXJ0b25nZXNzbyUyQmNvbnRyb3NvZmZpdHRpJTJCcGFyZXRpJTJCY29udHJvcGFyZXRpLnBuZycpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocGFyYW1zWydwYWdlJ10pO1xuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ25ld0NhcmQnOlxuICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICduZXdDYXJkRXJyb3InOlxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N0YXJ0TmV3Q2FyZCc6XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYXJkRWRpdGVkJzpcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzW2ldID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvZmlsZSgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wcm9maWxlU2VydmljZS51cGRhdGVQcm9maWxlKHRoaXMudXNlckRhdGEpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdVcGRhdGUgdXNlciBwcm9maWxlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgbGV0IHByb2ZpbGVEYXRhID0ge307XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbGV0IGF1dGhEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgICAgICAgYXV0aERhdGEucHJvZmlsZS5mdWxsbmFtZSA9IHRoaXMudXNlckRhdGEuZnVsbG5hbWU7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLnBob25lX251bWJlciA9IHRoaXMudXNlckRhdGEucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLnN0cmVldCA9IHRoaXMudXNlckRhdGEuc3RyZWV0O1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLmNpdHkgPSB0aGlzLnVzZXJEYXRhLmNpdHk7XG4gICAgICAgICAgICAgIGF1dGhEYXRhLmFkZHJlc3MucG9zdGFsX2NvZGUgPSB0aGlzLnVzZXJEYXRhLnBvc3RhbF9jb2RlO1xuICAgICAgICAgICAgICBhdXRoRGF0YS5hZGRyZXNzLnByb3ZpbmNlID0gdGhpcy51c2VyRGF0YS5wcm92aW5jZTtcbiAgICAgICAgICAgICAgYXV0aERhdGEuYWRkcmVzcy5jb3VudHJ5ID0gdGhpcy51c2VyRGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICBwcm9maWxlRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVQZXJzb25hbE1lbnUocHJvZmlsZURhdGEpO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0hhaSBhZ2dpb3JuYXRvIGxlIHR1ZSBpbmZvcm1hemlvbmkgY29uIHN1Y2Nlc3NvIScsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTogJ0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVuZGVyUGFnZShwYWdlKSB7XG4gICAgdGhpcy5zZWxlY3RUYWIgPSBwYWdlO1xuICB9XG5cbiAgZ2V0UG9wdXAodHlwZSkge1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJyc7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0pIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRGF0YS5jdXJyZW50UGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRGF0YS5uZXdQYXNzd29yZCA9ICcnO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmREYXRhLnBhc3N3b3JkQ29uZmlybSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNoZWNrUGFzc3dvcmQobmV3UGFzc3dvcmQsIHBhc3N3b3JkQ29uZmlybSkge1xuICAgIGlmIChuZXdQYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtKSB7XG4gICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRXJyb3IucGFzc3dvcmRDb25maXJtID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbiA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hULCBkZWx0YSkge1xuICAgIGxldCBjYWxjdWxhdGVEZWx0YSA9IHRoaXMuZGVsdGEgKyBkZWx0YTtcbiAgICBsZXQgbWVudVNpemUgPSAwO1xuICAgIGxldCBhbGxNZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdC1uYXZpZ2F0ZSA+IGRpdiA+IGEnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbE1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1lbnVJdGVtOiBhbnkgPSBhbGxNZW51SXRlbXNbaV07XG4gICAgICBtZW51U2l6ZSArPSBtZW51SXRlbS5vZmZzZXRXaWR0aDtcbiAgICB9XG4gICAgbGV0IG1lbnVCbG9ja1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtbmF2aWdhdGUnKS5jbGllbnRXaWR0aDtcbiAgICBsZXQgYWxsb3dNYXJnaW4gPSAobWVudVNpemUpIC0gbWVudUJsb2NrV2lkdGg7XG4gICAgaWYgKGFsbG93TWFyZ2luID49IDApIHtcbiAgICAgIGFsbG93TWFyZ2luID0gLWFsbG93TWFyZ2luO1xuICAgICAgaWYgKGNhbGN1bGF0ZURlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxjdWxhdGVEZWx0YSA8IGFsbG93TWFyZ2luKSB7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCAmJiBhbGxvd01hcmdpbiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YSA9IGFsbG93TWFyZ2luO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbHRhID0gY2FsY3VsYXRlRGVsdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGROZXdDYXJkKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2FkZENhcmQnfSk7XG4gIH1cblxuICBmb3JtYXRZZWFyKHllYXIpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGZvcm1hdGVkWWVhciA9ICcnO1xuICAgIGxldCB5ZWFyQXJyYXkgPSB5ZWFyLnRvU3RyaW5nKCkuc3BsaXQoJycpO1xuICAgIHllYXJBcnJheS5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgIGlmIChpID4gMSkge1xuICAgICAgICBmb3JtYXRlZFllYXIgKz0gbnVtO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JtYXRlZFllYXI7XG4gIH1cblxuICBmb3JtYXRDc3NDbGFzcyhicmFuZCkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBpZiAoYnJhbmQgPT09ICdWaXNhJykge1xuICAgICAgcmVzdWx0ID0gJ3Zpc2EnO1xuICAgIH1cbiAgICBpZiAoYnJhbmQgPT09ICdBbWVyaWNhbiBFeHByZXNzJykge1xuICAgICAgcmVzdWx0ID0gJ2FtZXgnO1xuICAgIH1cbiAgICBpZiAoYnJhbmQgPT09ICdNYXN0ZXJDYXJkJykge1xuICAgICAgcmVzdWx0ID0gJ21hc3RlcmNhcmQnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VsZWN0Q2FyZChpZCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLnNlbGVjdENhcmQoaWQpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdTZWxlY3RpbmcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZGVmYXVsdENhcmQgPSBzdGF0dXMuZGVmYXVsdF9zb3VyY2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogZXJyb3IuanNvbigpLm1lc3NhZ2V9fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBkZWxldGVDYXJkKGlkKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucGF5bWVudFNlcnZpY2UuZGVsZXRlQ2FyZChpZClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0RlbGV0aW5nIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jYXJkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpICsrO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChpZCA9PT0gdGhpcy5kZWZhdWx0Q2FyZCAmJiB0aGlzLmNhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBvdGhlckNhcmQgPSAnJztcbiAgICAgICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5pZCAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBvdGhlckNhcmQgPSBjYXJkLmlkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2FyZChvdGhlckNhcmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IGVycm9yLmpzb24oKS5tZXNzYWdlfX0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIGVkaXRDYXJkKGlkKSB7XG4gICAgbGV0IGNhcmREYXRhID0ge307XG4gICAgdGhpcy5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZihjYXJkLmlkID09PSBpZCkge1xuICAgICAgICBjYXJkRGF0YSA9IHtcbiAgICAgICAgICBpZDogY2FyZC5pZCxcbiAgICAgICAgICBhZGRyZXNzX2NpdHk6IGNhcmQuYWRkcmVzc19jaXR5LFxuICAgICAgICAgIGFkZHJlc3NfY291bnRyeTogY2FyZC5hZGRyZXNzX2NvdW50cnksXG4gICAgICAgICAgYWRkcmVzc19saW5lMTogY2FyZC5hZGRyZXNzX2xpbmUxLFxuICAgICAgICAgIGFkZHJlc3NfbGluZTI6IGNhcmQuYWRkcmVzc19saW5lMixcbiAgICAgICAgICBhZGRyZXNzX3N0YXRlOiBjYXJkLmFkZHJlc3Nfc3RhdGUsXG4gICAgICAgICAgYWRkcmVzc196aXA6IGNhcmQuYWRkcmVzc196aXAsXG4gICAgICAgICAgZXhwX21vbnRoOiBjYXJkLmV4cF9tb250aCxcbiAgICAgICAgICBleHBfeWVhcjogdGhpcy5mb3JtYXRZZWFyKGNhcmQuZXhwX3llYXIpLFxuICAgICAgICAgIG5hbWU6IGNhcmQubmFtZSxcbiAgICAgICAgICBudW1iZXI6ICcqKioqICcgKyBjYXJkLmxhc3Q0LFxuICAgICAgICAgIGN2YzogJyoqKidcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlZGl0Q2FyZCcsIGRhdGE6IGNhcmREYXRhfSk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9nb3V0JywgZGF0YToge319KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIGFwaTogc3RyaW5nO1xuICBwcml2YXRlIGF1dGg7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIHRoaXMuYXBpID0gJ2h0dHBzOi8vYXBpLnN0YXJib29rLmNvL3YwLjkuMS8nO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFrZUhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnM7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKTtcbiAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiB0aGlzLmF1dGgudG9rZW59KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydUb2tlbic6ICcnfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnVG9rZW4nOiAnJ30pO1xuICAgIH1cblxuICAgIHJldHVybiB7aGVhZGVyczogaGVhZGVyc307XG4gIH1cblxuICB1cGRhdGVQcm9maWxlKHVzZXJEYXRhKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZnVsbG5hbWU6IHVzZXJEYXRhLmZ1bGxuYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyRGF0YS5waG9uZV9udW1iZXIsXG4gICAgICBzdHJlZXQ6IHVzZXJEYXRhLnN0cmVldCxcbiAgICAgIGNpdHk6IHVzZXJEYXRhLmNpdHksXG4gICAgICBwb3N0YWxfY29kZTogdXNlckRhdGEucG9zdGFsX2NvZGUsXG4gICAgICBwcm92aW5jZTogdXNlckRhdGEucHJvdmluY2UsXG4gICAgICBjb3VudHJ5OiB1c2VyRGF0YS5jb3VudHJ5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmFwaSArICdtZScsIGRhdGEsIHRoaXMuX21ha2VIZWFkZXJzKCkpXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZUxvYWRpbmdTdGF0dXMoZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG4gIGdldFByb2ZpbGUoKSB7XG4gICAgLy8gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51cGRhdGVMb2FkaW5nU3RhdHVzKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpICsgJ21lJywgdGhpcy5fbWFrZUhlYWRlcnMoKSlcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIC8vIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlTG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgJy4vX193b3JrYXJvdW5kLm5vZGUnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XG5cbi8vIEFwcFxuXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XG4vLyBjb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MCB8fCA4MDgwO1xuY29uc3QgcG9ydCA9IDQyMDA7IFxuXG4vKipcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXG4gKi9cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbi8qKlxuICogRXhwcmVzcyBWaWV3XG4gKi9cbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuXG4vKiBUaGVyZSBhcmUgY29kZSBmcm9tIG9sZCBzZXJ2ZXIgKi9cbi8vIGFwcC51c2UoJy8nLCByZXF1aXJlKCdyZWRpcmVjdC1odHRwcycpKHtcbi8vICAgYm9keTogJycsXG4vLyAgIHBvcnQ6IDQ0Myxcbi8vICAgdHJ1c3RQcm94eTogdHJ1ZVxuLy8gfSkpXG4vL1xuLy8gYXBwLmFsbCgnLyonLCBmdW5jdGlvbihyZXE6IGFueSwgcmVzOiBhbnksIG5leHQpIHtcbi8vICAgaWYoIS9ed3d3XFwuLy50ZXN0KHJlcS5oZWFkZXJzLmhvc3QpKSB7XG4vLyAgICAgcmVzLnN0YXR1cygzMDEpLnJlZGlyZWN0KHJlcS5wcm90b2NvbCArICc6Ly93d3cuJyArIHJlcS5oZWFkZXJzLmhvc3QgKyByZXEudXJsKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIG5leHQoKVxuLy8gICB9XG4vLyB9KVxuXG5cbi8qKlxuICogRW5hYmxlIGNvbXByZXNzaW9uXG4gKi9cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8qKlxuICogc2VydmUgc3RhdGljIGZpbGVzXG4gKi9cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7aW5kZXg6IGZhbHNlfSkpO1xuXG4vKipcbiAqIHBsYWNlIHlvdXIgYXBpIHJvdXRlcyBoZXJlXG4gKi9cbi8vIGFwcC51c2UoJy9hcGknLCBhcGkpO1xuXG4vKipcbiAqIGJvb3RzdHJhcCB1bml2ZXJzYWwgYXBwXG4gKiBAcGFyYW0gcmVxXG4gKiBAcGFyYW0gcmVzXG4gKi9cbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMucmVuZGVyKCdpbmRleCcsIHtcbiAgICByZXEsXG4gICAgcmVzLFxuICAgIG5nTW9kdWxlOiBBcHBNb2R1bGUsXG4gICAgcHJlYm9vdDogZmFsc2UsXG4gICAgYmFzZVVybDogJy8nLFxuICAgIHJlcXVlc3RVcmw6IHJlcS5vcmlnaW5hbFVybCxcbiAgICBvcmlnaW5Vcmw6IHJlcS5ob3N0bmFtZVxuICB9KTtcbn1cblxuLyoqXG4gKiB1c2UgdW5pdmVyc2FsIGZvciBzcGVjaWZpYyByb3V0ZXNcbiAqL1xuYXBwLmdldCgnLycsIG5nQXBwKTtcbnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgYXBwLmdldChgLyR7cm91dGV9YCwgbmdBcHApO1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcbn0pO1xuXG4vKipcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcbiAqL1xuXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xufSk7XG5cblxuLyogVGhlcmUgYXJlIGNvZGUgZnJvbSBvbGQgc2VydmVyIChhcHAuanMpICovXG5odHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbmxldCBvcHRpb25zID0ge1xuICBrZXk6IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL2NlcnQva2V5LnBlbScsICd1dGY4JyksXG4gIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnL2NlcnQvc2VydmVyLmNydCcsICd1dGY4Jylcbn07XG4vLyBodHRwcy5jcmVhdGVTZXJ2ZXIob3B0aW9ucywgYXBwKS5saXN0ZW4oNDQzLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCA0NDNgKTtcbi8vIH0pO1xuXG4vLyBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XG5cbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG59XG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbmlmIChwYXRjaCkge1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJcbi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX18gPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgX19jb3JlX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xubGV0IHBhdGNoID0gZmFsc2U7XG5pZiAoIV9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX19bJ1ZpZXdVdGlscyddID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xufVxuXG5cblxuaWYgKF9fY29tcGlsZXJfXyAmJiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyICYmIF9fY29tcGlsZXJfXy5Dc3NTZWxlY3Rvcikge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG5pZiAocGF0Y2gpIHtcbiAgICB2YXIgX191bml2ZXJzYWxfXyA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfX1sndmlld191dGlscyddO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yIHx8IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvcjtcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyIHx8IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXI7XG59XG5cbi8vIEZpeCBNYXRlcmlhbCBTdXBwb3J0XG5mdW5jdGlvbiB1bml2ZXJzYWxNYXRlcmlhbFN1cHBvcnRzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBCb29sZWFuKHRoaXMuaXNDdXN0b21FdmVudChldmVudE5hbWUpKTsgfVxuX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXy5IYW1tZXJHZXN0dXJlc1BsdWdpbi5wcm90b3R5cGUuc3VwcG9ydHMgPSB1bml2ZXJzYWxNYXRlcmlhbFN1cHBvcnRzO1xuLy8gRW5kIEZpeCBNYXRlcmlhbCBTdXBwb3J0XG5cbi8vIEZpeCBVbml2ZXJzYWwgU3R5bGVcbmltcG9ydCB7IE5vZGVEb21Sb290UmVuZGVyZXIsIE5vZGVEb21SZW5kZXJlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlJztcbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudEZpeChjb21wb25lbnRQcm90bzogYW55KSB7XG4gIHJldHVybiBuZXcgTm9kZURvbVJlbmRlcmVyKHRoaXMsIGNvbXBvbmVudFByb3RvLCB0aGlzLl9hbmltYXRpb25Ecml2ZXIpO1xufVxuTm9kZURvbVJvb3RSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyQ29tcG9uZW50ID0gcmVuZGVyQ29tcG9uZW50Rml4O1xuLy8gRW5kIEZpeCBVbml2ZXJzYWwgU3R5bGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fX3dvcmthcm91bmQubm9kZS50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEV2ZW50LCBOYXZpZ2F0aW9uRW5kLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSAgIGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi9ob21lL2hvbWUuc2VydmljZSc7XG5kZWNsYXJlIGxldCBnYTogRnVuY3Rpb247XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdGFnbGluZTogc3RyaW5nO1xuICBwdWJsaWMgYXV0aDtcbiAgcHVibGljIGFjdGl2ZVBvcHVwID0gJyc7XG4gIHB1YmxpYyBwb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIG5hdmJhclN0YXRlID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGlzRmluZEZpZWxkID0gZmFsc2U7XG4gIHB1YmxpYyBzcGluZXJWaWV3ID0gZmFsc2U7XG4gIHB1YmxpYyBjbGVhclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGZpbmRWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgaXNTZWFyY2hlZCA9IGZhbHNlO1xuICBwdWJsaWMgYnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gbG9hZGluZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYXV0aFNlcnZpY3M6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlOiBOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDpFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Um91dGUuY2hpbGRyZW5bMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJyZW50Um91dGUgPSBjdXJyZW50Um91dGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2lzRmluZEZpZWxkJyBpbiBjdXJyZW50Um91dGUuc25hcHNob3QuZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLmlzRmluZEZpZWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNGaW5kRmllbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldExvZ2luUG9wdXAoKSB7XG4gICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW4nfSk7XG4gICAgdGhpcy50b2dnbGVNZW51KCk7XG4gIH1cblxuICBnZXRSZWdpc3RyYXRpb25Qb3B1cCgpIHtcbiAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdyZWdpc3RyYXRpb24nfSk7XG4gICAgdGhpcy50b2dnbGVNZW51KCk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSgnJyk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMubmF2YmFyU3RhdGUgPSAhdGhpcy5uYXZiYXJTdGF0ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXV0aCA9IHRoaXMuYXV0aFNlcnZpY3MuYXV0aEluaXQoKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ2V0TWVzc2FnZSQuc3Vic2NyaWJlKG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLnRhZ2xpbmUgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmZpbmRWYWx1ZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTZWFyY2hlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmF1dGhTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdldFBlcnNvbmFsTWVudSQuc3Vic2NyaWJlKGF1dGggPT4ge1xuICAgICAgICBpZiAoYXV0aCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYXV0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcy5sb2FkaW5nU3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5nZXRMb2FkaW5nU3RhdHVzJC5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAvLyAgIHRoaXMuaXNMb2FkaW5nID0gc3RhdHVzO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgdXBkYXRlVGFiTWVudSh0b2dnbGVNZW51ID0gZmFsc2UpIHtcbiAgICBpZiAodG9nZ2xlTWVudSkge1xuICAgICAgdGhpcy50b2dnbGVNZW51KCk7XG4gICAgfVxuICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UudXBkYXRlQWN0aXZlVGFiKGZhbHNlKTtcbiAgfVxuXG4gIHNlYXJjaChldmVudCkge1xuICAgIHRoaXMuaXNTZWFyY2hlZCA9IHRydWU7XG4gICAgdGhpcy5zcGluZXJWaWV3ID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VhcmNoKGV2ZW50LnF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgICAgfSlcbiAgfVxuXG4gIHNlbGVjdFJlc3VsdChzZXJ2aWNlc09iaikge1xuICAgIHRoaXMuaG9tZVNlcnZpY2Uuc2VuZFNlcnZpY2VzKHNlcnZpY2VzT2JqKTtcbiAgICB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmNsZWFyVmlldyA9IGZhbHNlO1xuICAgIHRoaXMubmF2YmFyU3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmZpbmRWYWx1ZSA9ICcnO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2VydmljZXMnLCBzZXJ2aWNlc09iai5faWRdKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoRm9ybSgpIHtcbiAgICB0aGlzLmZpbmRWYWx1ZSA9ICcnO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmF1dGhTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgLy8gdGhpcy5sb2FkaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUsIEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSwgaXNCcm93c2VyLCBOb2RlSHR0cE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgQXV0b0NvbXBsZXRlTW9kdWxlLCBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XG5pbXBvcnQgeyBDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICduZzItY2xpY2stb3V0c2lkZSc7XG4vLyBpbXBvcnQgeyBNYXNvbnJ5TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbWFzb25yeSc7XG4vLyBpbXBvcnQgeyBOZ2JNb2R1bGUsIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEhvbWVTZXJ2aWNlIH0gZnJvbSAnLi9ob21lL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2UgfSBmcm9tICcuL29yZGVyL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcHVwc1NlcnZpY2UgfSBmcm9tICcuL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYXltZW50U2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VvU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3Nlby5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tICcuL29yZGVyL29yZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBzQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG9uZVBpcGUgfSBmcm9tICcuL3BpcGVzL3Bob25lLnBpcGUnO1xuaW1wb3J0IHsgTGFuZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBpcnlQaXBlIH0gZnJvbSAnLi9waXBlcy9leHBpcnkucGlwZSc7XG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWNlYm9va0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZmFjZWJvb2svZmFjZWJvb2suY29tcG9uZW50JztcblxuXG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgYXBwUm91dGVzIH0gZnJvbSAnLi9hcHAvYXBwLnJvdXRpbmcnO1xuXG4vLyBleHBvcnQgY2xhc3MgSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyAge1xuLy8gICBvdmVycmlkZXMgPSA8YW55PiB7XG4vLyAgICAgJ3N3aXBlJzoge3ZlbG9jaXR5OiAwLjQsIHRocmVzaG9sZDogMjB9XG4vLyAgIH07XG4vLyB9XG5cbmxldCBpbXBvcnRzID0gW1xuICBOb2RlSHR0cE1vZHVsZSxcbiAgVW5pdmVyc2FsTW9kdWxlLFxuICBGb3Jtc01vZHVsZSxcbiAgLy8gQnJvd3Nlck1vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgLy8gTWFzb25yeU1vZHVsZSxcblxuICBSb3V0ZXJNb2R1bGUsXG4gIHJvdXRpbmcsXG4gIC8vIE5nYk1vZHVsZS5mb3JSb290KCksXG4gIC8vIEF1dG9Db21wbGV0ZU1vZHVsZSxcbiAgLy8gQ2FsZW5kYXJNb2R1bGUsXG4gIENsaWNrT3V0c2lkZU1vZHVsZVxuXTtcbmxldCBkZWNsYXJhdGlvbnMgPSBbXG4gIEFwcENvbXBvbmVudCxcbiAgSG9tZUNvbXBvbmVudCxcbiAgT3JkZXJDb21wb25lbnQsXG4gIE9yZGVyc0NvbXBvbmVudCxcbiAgUHJvZmlsZUNvbXBvbmVudCxcbiAgUG9wdXBzQ29tcG9uZW50LFxuICBQaG9uZVBpcGUsXG4gIExhbmRpbmdDb21wb25lbnQsXG4gIEV4cGlyeVBpcGUsXG4gIExvYWRpbmdDb21wb25lbnQsXG4gIEZhY2Vib29rQ29tcG9uZW50XG5dO1xuXG5pZiAoaXNCcm93c2VyKSB7XG4gIGxldCBDYWxlbmRhck1vZHVsZSA9IHJlcXVpcmUoJ3ByaW1lbmcvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhcicpLkNhbGVuZGFyTW9kdWxlO1xuICBpbXBvcnRzLnB1c2goQ2FsZW5kYXJNb2R1bGUpO1xuICBsZXQgQXV0b0NvbXBsZXRlTW9kdWxlID0gcmVxdWlyZSgncHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnKS5BdXRvQ29tcGxldGVNb2R1bGU7XG4gIGltcG9ydHMucHVzaChBdXRvQ29tcGxldGVNb2R1bGUpO1xufVxuZWxzZSB7XG4gIGxldCBDYWxlbmRhck1vY2tDb21wb25lbnQgPSByZXF1aXJlKCcuL21vY2tzL2NhbGVuZGFyLmNvbXBvbmVudCcpLkNhbGVuZGFyTW9ja0NvbXBvbmVudDtcbiAgZGVjbGFyYXRpb25zLnB1c2goQ2FsZW5kYXJNb2NrQ29tcG9uZW50KTtcbiAgbGV0IEF1dG9Db21wbGV0ZU1vY2tNb2R1bGUgPSByZXF1aXJlKCcuL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnKS5BdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50O1xuICBkZWNsYXJhdGlvbnMucHVzaChBdXRvQ29tcGxldGVNb2NrTW9kdWxlKTtcbn1cblxuLyoqXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxuICovXG5ATmdNb2R1bGUoe1xuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgLyoqIE91ciBDb21wb25lbnRzICovXG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBpbXBvcnRzLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyB7cHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IGZvcndhcmRSZWYoKCkgPT4gT3JkZXJDb21wb25lbnQpfSxcbiAgICAvLyB7XG4gICAgLy8gICBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gICAgLy8gICB1c2VDbGFzczogSGFtbWVyQ29uZmlnXG4gICAgLy8gfSxcbiAgICBIb21lU2VydmljZSxcbiAgICBBdXRoU2VydmljZSxcbiAgICBPcmRlclNlcnZpY2UsXG4gICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgT3JkZXJzU2VydmljZSxcbiAgICBQb3B1cHNTZXJ2aWNlLFxuICAgIFBheW1lbnRTZXJ2aWNlLFxuICAgIEFuYWx5dGljc1NlcnZpY2UsXG4gICAgU2VvU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29yZGVycy9vcmRlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjZWJvb2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2VydmljZXMvOmlkJyxcbiAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgZGF0YToge2lzRmluZEZpZWxkOiB0cnVlfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ29yZGVycycsXG4gICAgY29tcG9uZW50OiBPcmRlcnNDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9maWxlLzpwYWdlJyxcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdmYWNlYm9vaycsXG4gICAgY29tcG9uZW50OiBGYWNlYm9va0NvbXBvbmVudFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0aW5nLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF1dG9Db21wbGV0ZU1vY2tDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncC1hdXRvQ29tcGxldGUnLFxuICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIvPicsXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVNb2NrQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ3N1Z2dlc3Rpb25zJykgc3VnZ2VzdGlvbnM6IGFueVtdO1xuICBwcml2YXRlIGlubmVyVmFsdWU6IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgdGhpcy5pbm5lclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21vY2tzL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhbGVuZGFyTW9ja0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiLz4nLFxuICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2NrQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ2xvY2FsZScpIGxvY2FsZTogYW55O1xuICBASW5wdXQoJ21pbkRhdGUnKSBtaW5EYXRlOiBhbnk7XG4gIEBJbnB1dCgnbWF4RGF0ZScpIG1heERhdGU6IGFueTtcbiAgcHVibGljIG9uU2VsZWN0OiBhbnk7XG4gIHByaXZhdGUgaW5uZXJWYWx1ZTogYW55ID0gJyc7XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbW9ja3MvY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZSwgSUFkZHJlc3MgfSBmcm9tICcuL29yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9wdXBzU2VydmljZSB9IGZyb20gJy4uL3BvcHVwcy9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBvcmRlckRhdGE7XG4gIEBJbnB1dCgnb3JkZXJJc0Z1bGwnKSBvcmRlcklzRnVsbDtcblxuICBwdWJsaWMgaXQ6IGFueTtcbiAgcHVibGljIHRpbWVQaWNrZXIgPSBbXTtcbiAgcHVibGljIG1vbnRoczoge307XG4gIHB1YmxpYyB0aW1lUGlja2VySXNTaG93ID0gZmFsc2U7XG4gIHB1YmxpYyBhZGRyZXNzZXMgPSBbXTtcbiAgcHVibGljIGFkZHJlc3MgPSAnJztcbiAgcHVibGljIHNlbGVjdGVkQWRkcmVzczogSUFkZHJlc3MgPSB7XG4gICAgc3RyZWV0OiAnJyxcbiAgICBzdHJlZXRfbnVtYmVyOiBudWxsLFxuICAgIGNpdHk6ICcnLFxuICAgIHBvc3RhbF9jb2RlOiBudWxsLFxuICAgIHByb3ZpbmNlOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICBjb3VudHJ5X2NvZGU6ICcnLFxuICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICBpc0Z1bGw6IGZhbHNlLFxuICAgIGZvcm1hdHRlZEFkZHJlc3M6ICcnXG4gIH07XG4gIHB1YmxpYyBpc0FkZHJlc3NPbmUgPSBmYWxzZTtcbiAgcHVibGljIGlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgcHVibGljIGlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gIC8vIHB1YmxpYyBpc0VuYWJsZSA9IHRydWU7XG4gIHB1YmxpYyBPcmRlciA9IHtcbiAgICBzZXJ2aWNlX2lkOiAnJyxcbiAgICBkZWxpdmVyeV9kZXRhaWxzOiBbXSxcbiAgICBkZWxpdmVyeV9kZXNjcmlwdGlvbjogJycsXG4gICAgYXBwbGljYW50X2Z1bGxuYW1lOiAnbm9uZScsXG4gICAgYXBwbGljYW50X2VtYWlsOiAnbm9uZScsXG4gICAgYXBwbGljYW50X3Bob25lOiAnbm9uZScsXG4gICAgZGVsaXZlcnlfYWRkcmVzczogJycsXG4gICAgZGF0ZTogbnVsbCxcbiAgICB0aW1lOiAnJyxcbiAgICBkZWxpdmVyeV9kYXRlOiAnJyxcbiAgICBzdHJlZXQ6ICcnLFxuICAgIHN0cmVldF9udW1iZXI6IG51bGwsXG4gICAgY2l0eTogJycsXG4gICAgcG9zdGFsX2NvZGU6IG51bGwsXG4gICAgcHJvdmluY2U6ICcnLFxuICAgIGNvdW50cnk6ICcnLFxuICAgIGNvdW50cnlfY29kZTogJycsXG4gICAgZm9ybWF0dGVkQWRkcmVzczogJycsXG4gICAgcGF5bWVudDoge2Ftb3VudDogMCwgY3VycmVuY3k6ICcnfVxuICB9O1xuICBwdWJsaWMgbWluRGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMjQqMjEpICogNjAgKiA2MCAqIDEwMDApO1xuICBwdWJsaWMgc3VibWl0T3JkZXIgPSBmYWxzZTtcbiAgcHVibGljIG9yZGVyRm9ybTogYW55O1xuICBwdWJsaWMgaXNNb2JpbGVDYWxlbmRhcjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBtYXhPcmRlckJsb2NrU2l6ZTogbnVtYmVyfHN0cmluZyA9ICdhdXRvJztcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgYnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSwgcHJpdmF0ZSBwb3B1cHNTZXJ2aWNlOiBQb3B1cHNTZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXIucHVzaCgnMDg6MDAnLCAnMDg6MzAnLCAnMDk6MDAnLCAnMDk6MzAnLCAnMTA6MDAnLCAnMTA6MzAnLCAnMTE6MDAnLCAnMTQ6MDAnLCAnMTQ6MzAnLCAnMTU6MDAnKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAvLyAgIGlmIChpID4gNyAmJiBpIDwgMTUpIHtcbiAgICAvLyAgICAgaWYgKGkgPiA5KSB7XG4gICAgLy8gICAgICAgdGhpcy50aW1lUGlja2VyLnB1c2goaSArICc6MDAnLCBpICsgJzozMCcpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMudGltZVBpY2tlci5wdXNoKCcwJyArIGkgKyAnOjAwJywgJzAnICsgaSArICc6MzAnKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLm1vbnRocyA9IHtcbiAgICAgIDE6ICdHZW5uYWlvJyxcbiAgICAgIDI6ICdGZWJicmFpbycsXG4gICAgICAzOiAnTWFyem8nLFxuICAgICAgNDogJ0FwcmlsZScsXG4gICAgICA1OiAnTWFnZ2lvJyxcbiAgICAgIDY6ICdHaXVnbm8nLFxuICAgICAgNzogJ0x1Z2xpbycsXG4gICAgICA4OiAnQWdvc3RvJyxcbiAgICAgIDk6ICdTZXR0ZW1icmUnLFxuICAgICAgMTA6ICdPdHRvYnJlJyxcbiAgICAgIDExOiAnTm92ZW1icmUnLFxuICAgICAgMTI6ICdEaWNlbWJyZSdcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZXJ2aWNlczogJyArIHRoaXMuZGVmYXVsdFNlcnZpY2VzLnRpdGxlKTtcblxuICB9XG5cbiAgdG9nZ2xlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSAhdGhpcy50aW1lUGlja2VySXNTaG93O1xuICB9XG5cbiAgb3BlblRpbWVwaWNrZXIoKSB7XG4gICAgdGhpcy50aW1lUGlja2VySXNTaG93ID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlVGltZXBpY2tlcigpIHtcbiAgICB0aGlzLnRpbWVQaWNrZXJJc1Nob3cgPSBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdFRpbWUodGltZSkge1xuICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnbW9kaWZ5JywgbGFiZWw6ICdzZWxlY3QgdGltZSd9KTtcbiAgICB0aGlzLk9yZGVyLnRpbWUgPSB0aW1lO1xuICB9XG5cbiAgZ2V0QWRkcmVzc2VzKGV2ZW50KSB7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDIpIHtcbiAgICAgIHRoaXMub3JkZXJTZXJ2aWNlLmdldEFkZHJlc3NlcyhldmVudC5xdWVyeSlcbiAgICAgICAgLnRoZW4oKGFkZHJlc3NlcykgPT4ge1xuICAgICAgICAgIHRoaXMuYWRkcmVzc2VzID0gW107XG4gICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBhZGRyZXNzZXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBZGRyZXNzKHZhbHVlKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCBhZGRyZXNzJ30pO1xuICAgIGlmICh2YWx1ZS5pc0Z1bGwpIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNBZGRyZXNzRnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IHZhbHVlO1xuICB9XG5cbiAgbW9kaWZ5QWRkcmVzcygpIHtcbiAgICB0aGlzLmlzQWRkcmVzc0RpcnR5ID0gZmFsc2U7XG4gICAgLy8gdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IGZhbHNlO1xuICB9XG5cbiAgc2hvd0NvbmZpcm1hdGlvbigpIHtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnc3RhcnQnfSk7XG4gICAgdGhpcy5zdWJtaXRPcmRlciA9IHRydWU7XG4gICAgdGhpcy5pc0FkZHJlc3NEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyID0gJyc7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9ICcnO1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gJyc7XG5cbiAgICB0aGlzLk9yZGVyLnN0cmVldCA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldDtcbiAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5zdHJlZXRfbnVtYmVyO1xuICAgIHRoaXMuT3JkZXIuY2l0eSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmNpdHk7XG4gICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnBvc3RhbF9jb2RlO1xuICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5wcm92aW5jZTtcbiAgICB0aGlzLk9yZGVyLmNvdW50cnkgPSB0aGlzLnNlbGVjdGVkQWRkcmVzcy5jb3VudHJ5O1xuICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gdGhpcy5zZWxlY3RlZEFkZHJlc3MuY291bnRyeV9jb2RlO1xuICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IHRoaXMuc2VsZWN0ZWRBZGRyZXNzLmZvcm1hdHRlZEFkZHJlc3M7XG4gICAgdGhpcy5hZGRyZXNzID0gdGhpcy5zZWxlY3RlZEFkZHJlc3Muc3RyZWV0ICsgJywgJyArIHRoaXMuc2VsZWN0ZWRBZGRyZXNzLnN0cmVldF9udW1iZXIgKyAnLCAnICsgdGhpcy5zZWxlY3RlZEFkZHJlc3MuY2l0eTtcblxuICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAgIC8vIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dQcmV2aWV3T3JkZXIoKTtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVmVyc2lvbiB3aXRoIHJlcXVlc3RpbmcgYWRkcmVzcyBhZnRlciBjbGljayAnQ3JlYXRlIGFuIG9yZGVyJyBidXR0b24gLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyB0aGlzLm9yZGVyU2VydmljZS5nZXRBZGRyZXNzZXModGhpcy5hZGRyZXNzKVxuICAgIC8vICAgICAudGhlbigoYWRkcmVzczogSUFkZHJlc3NbXSkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMSkge1xuICAgIC8vICAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gYWRkcmVzcykge1xuICAgIC8vICAgICAgICAgICB2YXIgYWRkciA9IGFkZHJlc3NbaW5kZXhdO1xuICAgIC8vICAgICAgICAgICB2YXIgY2l0eV90b19tYXRjaCA9IG5ldyBSZWdFeHAoYWRkci5jaXR5LCAnaScpXG4gICAgLy8gICAgICAgICAgIHZhciBzdHJlZXRfbnVtYmVyX3RvX21hdGNoID0gbmV3IFJlZ0V4cChTdHJpbmcoYWRkci5zdHJlZXRfbnVtYmVyKSwgJ2knKVxuICAgIC8vICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzLm1hdGNoKGNpdHlfdG9fbWF0Y2gpICYmIHRoaXMuYWRkcmVzcy5tYXRjaChzdHJlZXRfbnVtYmVyX3RvX21hdGNoKSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLnN0cmVldCA9IGFkZHIuc3RyZWV0O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9IGFkZHIuc3RyZWV0X251bWJlcjtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyLmNpdHk7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wb3N0YWxfY29kZSA9IGFkZHIucG9zdGFsX2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5wcm92aW5jZSA9IGFkZHIucHJvdmluY2U7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkci5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlID0gYWRkci5jb3VudHJ5X2NvZGU7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5PcmRlci5mb3JtYXR0ZWRBZGRyZXNzID0gYWRkci5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkci5zdHJlZXQgKyAnLCAnICsgYWRkci5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHIuY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgIGlmICgodGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSAnJyAmJiB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgIT09IG51bGwpICYmICh0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgIT09ICcnICYmIHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSBudWxsKSkge1xuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93UHJldmlld09yZGVyKClcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzQWRkcmVzc09uZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaXNFbmFibGUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgfSBlbHNlIGlmICgwIGluIGFkZHJlc3MpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaXNBZGRyZXNzT25lID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0ID0gYWRkcmVzc1swXS5zdHJlZXQ7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnN0cmVldF9udW1iZXIgPSBhZGRyZXNzWzBdLnN0cmVldF9udW1iZXI7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLmNpdHkgPSBhZGRyZXNzWzBdLmNpdHk7XG4gICAgLy8gICAgICAgICB0aGlzLk9yZGVyLnBvc3RhbF9jb2RlID0gYWRkcmVzc1swXS5wb3N0YWxfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIucHJvdmluY2UgPSBhZGRyZXNzWzBdLnByb3ZpbmNlO1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5ID0gYWRkcmVzc1swXS5jb3VudHJ5O1xuICAgIC8vICAgICAgICAgdGhpcy5PcmRlci5jb3VudHJ5X2NvZGUgPSBhZGRyZXNzWzBdLmNvdW50cnlfY29kZTtcbiAgICAvLyAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9IGFkZHJlc3NbMF0uZm9ybWF0dGVkQWRkcmVzcztcbiAgICAvL1xuICAgIC8vICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5zdHJlZXQgKyAnLCAnICsgYWRkcmVzc1swXS5zdHJlZXRfbnVtYmVyICsgJywgJyArIGFkZHJlc3NbMF0uY2l0eTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgLy8gdGhpcy5hZGRyZXNzID0gYWRkcmVzc1swXS5mb3JtYXR0ZWRBZGRyZXNzO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBpZiAoKHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciAhPT0gJycgJiYgdGhpcy5PcmRlci5zdHJlZXRfbnVtYmVyICE9PSBudWxsKSAmJiAodGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gJycgJiYgdGhpcy5PcmRlci5wb3N0YWxfY29kZSAhPT0gbnVsbCkgJiYgKHRoaXMuT3JkZXIuY291bnRyeV9jb2RlICE9PSAnJyAmJiB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSAhPT0gbnVsbCkpIHtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IHRydWU7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzQWRkcmVzc0Z1bGwgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5pc0VuYWJsZSA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdPcmRlcigpXG4gICAgLy9cbiAgICAvLyAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NPbmUgPSB0cnVlO1xuICAgIC8vICAgICAgICAgdGhpcy5pc0FkZHJlc3NGdWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLmlzRW5hYmxlID0gZmFsc2U7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgfSk7XG4gIH1cblxuICBzaG93UHJldmlld09yZGVyKCkge1xuICAgIGlmICh0aGlzLk9yZGVyLmRhdGUgJiYgdGhpcy5vcmRlcklzRnVsbCAmJiB0aGlzLmlzQWRkcmVzc0Z1bGwgJiYgdGhpcy5vcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IDw9IHRoaXMub3JkZXJEYXRhLnRvdGFsUHJpY2UpIHtcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodGhpcy5PcmRlci5kYXRlKTtcbiAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSA+IDkgPyBkYXRlLmdldERhdGUoKSA6ICcwJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IG9yZGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgIGRhdGU6IGRheSArICcgJyArIHRoaXMuaXQubW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldICsgJyAnICsgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB0aW1lOiB0aGlzLk9yZGVyLnRpbWUsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuT3JkZXIuc3RyZWV0ICsgJywgJyArIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciArICcsICcgKyB0aGlzLk9yZGVyLmNpdHksXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2Rlc2NyaXB0aW9uXG4gICAgICB9O1xuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnbG9naW5Gcm9tT3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb259fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXInLCBkYXRhOiB7b3JkZXJEYXRhOiB0aGlzLm9yZGVyRGF0YSwgaW5mb3JtYXRpb246IG9yZGVySW5mb3JtYXRpb259fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlT3JkZXIoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLk9yZGVyLmRhdGUpO1xuICAgIGxldCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJyk7XG4gICAgaWYgKHVzZXJEYXRhICE9PSBudWxsKSB7XG4gICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPiA5ID8gZGF0ZS5nZXREYXRlKCkgOiAnMCcgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgIGxldCBjb3JyZWN0TW9udGggPSAxICsgZGF0ZS5nZXRNb250aCgpO1xuICAgICAgbGV0IG1vbnRoID0gY29ycmVjdE1vbnRoID4gOSA/IGNvcnJlY3RNb250aCA6ICcwJyArIGNvcnJlY3RNb250aDtcbiAgICAgIC8vIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF5ICsgJ1QnICsgdGhpcy5PcmRlci50aW1lICsgJzowMC4wMDBaJztcbiAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJyArIG1vbnRoICsgJy0nICsgZGF5ICsgJ1QnICsgJzA4OjAwJyArICc6MDAuMDAwWic7XG4gICAgICB0aGlzLk9yZGVyLnNlcnZpY2VfaWQgPSB0aGlzLm9yZGVyRGF0YS5zZXJ2aWNlX2lkO1xuICAgICAgdGhpcy5PcmRlci5kZWxpdmVyeV9kZXRhaWxzID0gW3tcbiAgICAgICAgdGl0bGU6IHRoaXMub3JkZXJEYXRhLnNlcnZpY2UsXG4gICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgdHlwZTogJ3NlcnZpY2UnXG4gICAgICB9XTtcbiAgICAgIHRoaXMub3JkZXJEYXRhLnNlcnZpY2VzLmZvckVhY2goKG9yZGVyQ2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQ2F0ZWdvcnkucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX0lOQ1JFTUVOVCcpIHtcbiAgICAgICAgICB0aGlzLk9yZGVyLmRlbGl2ZXJ5X2RldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAvLyB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lICsgJyAtICcgKyBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgdGl0bGU6IG9yZGVyQ2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogb3JkZXJDYXRlZ29yeS5vcHRpb24ubmFtZSxcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgIC8vIHRpdGxlOiBvcmRlckNhdGVnb3J5Lm5hbWUgKyAnIC0gJyArIG9yZGVyQ2F0ZWdvcnkub3B0aW9uLm5hbWUsXG4gICAgICAgICAgICB0aXRsZTogb3JkZXJDYXRlZ29yeS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgYW1vdW50OiBvcmRlckNhdGVnb3J5Lm9wdGlvbi5wcmljZSxcbiAgICAgICAgICAgIHR5cGU6ICdpdGVtJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuT3JkZXIucGF5bWVudCA9IHtcbiAgICAgICAgYW1vdW50OiB0aGlzLm9yZGVyRGF0YS50b3RhbFByaWNlLFxuICAgICAgICBjdXJyZW5jeTogJ2V1cidcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5vcmRlclNlcnZpY2Uuc2F2ZU9yZGVyKHRoaXMuT3JkZXIpXG4gICAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonT3JkZXIgY3JlYXRpb24gZm9ybScsIGFjdGlvbjogJ3NlbmQgZm9ybScsIGxhYmVsOiAnZmluaXNoJ30pO1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1NhdmluZyBvcmRlcicsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcblxuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGV0YWlscyA9IFtdO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfYWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmRhdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuT3JkZXIudGltZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZGVsaXZlcnlfZGF0ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuc3RyZWV0X251bWJlciA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIucG9zdGFsX2NvZGUgPSAnJztcbiAgICAgICAgICB0aGlzLk9yZGVyLmNvdW50cnlfY29kZSA9ICcnO1xuICAgICAgICAgIHRoaXMuT3JkZXIuZm9ybWF0dGVkQWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuYWRkcmVzcyA9ICcnO1xuICAgICAgICAgIHRoaXMuc3VibWl0T3JkZXIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdjb25maXJtTmV3T3JkZXJFbmQnfSk7XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5vcmRlclNlcnZpY2UubWFrZUV2ZW50KHtzdGF0dXM6IHRydWV9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kRXZlbnQoe2NhdGVnb3J5OidPcmRlciBjcmVhdGlvbiBmb3JtJywgYWN0aW9uOiAnc2VuZCBmb3JtJywgbGFiZWw6ICdlcnJvcid9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3Igb3Igbm90OiAnKyBlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAyKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1NlcnZpY2UuYWN0aXZhdGUoe3R5cGU6ICdlcnJvcicsIGRhdGE6IHt0aXRsZTonRXJyb3JlJywgbWVzc2FnZTogJ1BlciBmYXZvcmUsIGluc2VyaXNjaSB1biBtZXRvZG8gZGkgcGFnYW1lbnRvIHByaW1hIGRpIHByZW5vdGFyZSB1biBzZXJ2aXppbyd9fSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6ICdJbCBzZXJ2aXppbyByaWNoaWVzdG8gbm9uIMOoIGFuY29yYSBkaXNwb25pYmlsZSBpbiBxdWVzdGEgem9uYS4gUGVyIGZhdm9yZSBjb250YXR0YWNpIG5lbGxhIHNlemlvbmUgYXNzaXN0ZW56YSBkaSBTdGFyYm9vayBwZXIgcmljaGllZGVyZSBpbCBzdXBwb3J0byBuZWxsYSB6b25hIGRlc2lkZXJhdGEuJ319KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gIGVsc2Uge1xuICAgICAgICAgIC8vICAgdGhpcy5wb3B1cHNTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnZXJyb3InLCBkYXRhOiB7dGl0bGU6J0Vycm9yZScsIG1lc3NhZ2U6IFwiQyfDqCBzdGF0byB1biBlcnJvcmUgcmlndWFyZG8gYWxsYSByaWNoaWVzdGEgZGVsIG9yZGluZSwgcmljYXJpY2EgbGEgcGFnaW5hIGUgcmlwcm92YSBkaSBudW92by5cIn19KTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdXBzU2VydmljZS5hY3RpdmF0ZSh7dHlwZTogJ2xvZ2luJ30pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXQgPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIGRheU5hbWVzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICBkYXlOYW1lc1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgZGF5TmFtZXNNaW46IFsnRG8nLCAnTHUnLCAnTWEnLCAnTWUnLCAnR2knLCAnVmUnLCAnU2EnXSxcbiAgICAgIG1vbnRoTmFtZXM6IFsnR2VubmFpbycsICdGZWJicmFpbycsICdNYXJ6bycsICdBcHJpbGUnLCAnTWFnZ2lvJywgJ0dpdWdubycsXG4gICAgICAgICdMdWdsaW8nLCAnQWdvc3RvJywgJ1NldHRlbWJyZScsICdPdHRvYnJlJywgJ05vdmVtYnJlJywgJ0RpY2VtYnJlJ10sXG4gICAgICBtb250aE5hbWVzU2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXVxuICAgIH07XG5cbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucG9wdXBzU2VydmljZS5nZXRQb3B1cFJlc3BvbnNlJC5zdWJzY3JpYmUoYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZU9yZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoID4gNDgwKSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA0NTAgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoID4gNDgwKSB7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVDYWxlbmRhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1heE9yZGVyQmxvY2tTaXplID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA0NTAgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc01vYmlsZUNhbGVuZGFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXhPcmRlckJsb2NrU2l6ZSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdERhdGUoKSB7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J09yZGVyIGNyZWF0aW9uIGZvcm0nLCBhY3Rpb246ICdtb2RpZnknLCBsYWJlbDogJ3NlbGVjdCBkYXRlJ30pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9ob21lL2hvbWUuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5hbHl0aWNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hbmFseXRpY3Muc2VydmljZSc7XG5kZWNsYXJlIGxldCBTd2lwZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxhbmRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGFuZGluZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjYXJkU3R5bGVzID0gezE6ICcwLjk1JywgMjogJzAuOTUnLCAzOiAnMC45J307XG4gIHB1YmxpYyBxdWVyeTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICBwdWJsaWMgc2VydmljZXMgPSBbXTtcbiAgcHVibGljIHNwaW5lclZpZXcgPSBmYWxzZTtcbiAgcHVibGljIGNsZWFyVmlldyA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzd2lwZXI6IGFueTtcbiAgcHVibGljIHRlc3RQYWdlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgLy8gVE8gVVNFIEZPUiBBL0IgVEVTVElOR1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy50ZXN0UGFnZSA9IHBhcmFtc1sncGFnZSddXG4gICAgICAvLyBjb25zb2xlLmxvZygnUGFyYW1ldGVyczogJyArIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy50ZXN0UGFnZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoJ1VuYSBjaXR0w6Agc21hcnQgaGEgYmlzb2dubyBkaSBzZXJ2aXppIHNtYXJ0Jyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuaG9tZVNlcnZpY2UuZ2V0U2VydmljZXMoKVxuICAgICAgICAudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VzID0gc2VydmljZXMucmVzdWx0O1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0dldCBsaXN0IG9mIGZlYXR1cmVkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICB9XG4gIGNhcmRIb3ZlcihpZCwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnb24nKSB7XG4gICAgICB0aGlzLmNhcmRTdHlsZXNbaWRdID0gJzEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaWQgPT09IDMpIHtcbiAgICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcwLjknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXJkU3R5bGVzW2lkXSA9ICcwLjk1JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLnNwaW5lclZpZXcgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5ob21lU2VydmljZS5zZWFyY2goZXZlbnQucXVlcnkpXG4gICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnU2VhcmNoJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIGlmIChldmVudC5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVmlldyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHJlc3VsdHMucmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcGluZXJWaWV3ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGV2ZW50LnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWaWV3ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG4gICAgICAgIH0pXG4gIH1cblxuICBzZWxlY3RSZXN1bHQoc2VydmljZXNPYmopIHtcbiAgICB0aGlzLmhvbWVTZXJ2aWNlLnNlbmRTZXJ2aWNlcyhzZXJ2aWNlc09iaik7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzZXJ2aWNlcycsIHNlcnZpY2VzT2JqLnRpdGxlXSk7XG4gIH1cblxuICBjbGVhclNlYXJjaEZvcm0oKSB7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgIHRoaXMucmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuY2xlYXJWaWV3ID0gZmFsc2U7XG4gIH1cblxuICBjYWxsVG9BY3Rpb25SZWdpc3RlckNvbXBhbnkoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlZ2lzdGVyIGNvbXBhbnknKTtcbiAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZEV2ZW50KHtjYXRlZ29yeTonTGFuZGluZyBwYWdlIEEvQiB0ZXN0cycsIGFjdGlvbjogJ3ByZXNzIGJ1dHRvbicsIGxhYmVsOiAncmVnaXN0ZXIgY29tcGFueSd9KTtcbiAgfVxuXG4gIGNhbGxUb0FjdGlvblNoYXJlVG9FYXJuKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzaGFyZSB0byBlYXJuJyk7XG4gICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRFdmVudCh7Y2F0ZWdvcnk6J0xhbmRpbmcgcGFnZSBBL0IgdGVzdHMnLCBhY3Rpb246ICdwcmVzcyBidXR0b24nLCBsYWJlbDogJ3NoYXJlIHRvIGVhcm4nfSk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdleHBpcnknXG59KVxuZXhwb3J0IGNsYXNzIEV4cGlyeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoZGF0ZUVsZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL2V4cGlyeS5waXBlLnRzIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwaG9uZSdcbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IHBob25lID0gJyc7XG4gICAgICBsZXQgbnVtSW5kZXggPSAwO1xuICAgICAgbGV0IHBob25lTnVtcyA9IHZhbHVlLnNwbGl0KCcnKTtcbiAgICAgIHBob25lTnVtcy5mb3JFYWNoKChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bUluZGV4ID09PSAyIHx8IG51bUluZGV4ID09PSA0IHx8IG51bUluZGV4ID09PSA2KSB7XG4gICAgICAgICAgcGhvbmUgKz0gbnVtICsgJyAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBob25lICs9IG51bTtcbiAgICAgICAgfVxuICAgICAgICBudW1JbmRleCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGhvbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BpcGVzL3Bob25lLnBpcGUudHMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBrZXlmcmFtZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQb3B1cHNTZXJ2aWNlIH0gZnJvbSAnLi9wb3B1cHMuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL29yZGVycy5zZXJ2aWNlJztcbmltcG9ydCB7IFBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3BheW1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9ICAgZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcG9wdXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcHVwcy5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhZGRDYXJkUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignbG9naW5Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWdpc3RyYXRpb25Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdyZWNvdmVyeVBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ZpbmlzaFBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2NvbmZpcm1Qb3B1cFN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4J30pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCB0b3A6ICc0MnB4J30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlID0+IGFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC4wMX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdjb25maXJtRmluaXNoUG9wdXBTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCd9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnNDJweCd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDAuMDF9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMSwgdG9wOiAnNDJweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjk5fSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAxLjB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgdHJpZ2dlcignY29uZmlybUFjdGlvblBvcHVwU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIHRvcDogJzQycHgnfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCB0b3A6ICctMzAwcHgnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgdG9wOiAnLTMwMHB4Jywgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogJzQycHgnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBbXG4gICAgICAgIGFuaW1hdGUoMzAwLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6ICc0MnB4Jywgb2Zmc2V0OiAwfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDAsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMC45OX0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnbm9uZScsIHRvcDogJy0zMDBweCcsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ3NoYWRvd1N0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe2Rpc3BsYXk6ICdub25lJywgb3BhY2l0eTogMH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW1xuICAgICAgICBhbmltYXRlKDMwMCwga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDB9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogMCwgb2Zmc2V0OiAwLjAxfSksXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMS4wfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFtcbiAgICAgICAgYW5pbWF0ZSgzMDAsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIG9mZnNldDogMH0pLFxuICAgICAgICAgIHN0eWxlKHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAwLCBvZmZzZXQ6IDAuOTl9KSxcbiAgICAgICAgICBzdHlsZSh7ZGlzcGxheTogJ25vbmUnLCBvZmZzZXQ6IDEuMH0pXG4gICAgICAgIF0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGF1dGhTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwdWJsaWMgYWN0aXZlUG9wdXAgPSAnJztcbiAgcHVibGljIGFkZENhcmRQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGxvZ2luUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyByZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIHJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gIHB1YmxpYyBmaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIHNoYWRvd1N0YXRlID0gJ2luYWN0aXZlJztcbiAgcHVibGljIGVtYWlsUGF0dGVybjtcbiAgcHVibGljIGF1dGg7XG4gIHB1YmxpYyBhZGRDYXJkRGF0YSA9IHtcbiAgICBvYmplY3Q6ICdjYXJkJyxcbiAgICBleHBfZGF0ZTogJycsXG4gICAgZXhwX21vbnRoOiBudWxsLFxuICAgIGV4cF95ZWFyOiBudWxsLFxuICAgIG51bWJlcjogbnVsbCxcbiAgICBjdmM6ICcnLFxuICAgIG5hbWU6ICcnLCAgICAgICAgICAgLy8gTm9tZSBpbnRlc3RhdGFyaW9cbiAgICBhZGRyZXNzX2xpbmUxOiAnJywgIC8vIFZpYVxuICAgIGFkZHJlc3NfbGluZTI6ICcnLCAgLy8gTnJcbiAgICBhZGRyZXNzX2NpdHk6ICcnLCAgIC8vIENpdHTDoFxuICAgIGFkZHJlc3NfemlwOiAnJywgICAgLy8gQ0FQXG4gICAgYWRkcmVzc19zdGF0ZTogJycsICAvLyBQcm92aW5jaWFcbiAgICBhZGRyZXNzX2NvdW50cnk6ICcnIC8vIFBhZXNlXG4gIH07XG4gIHB1YmxpYyBhY3Rpb25DYXJkVHlwZSA9ICdhZGQnO1xuICBwdWJsaWMgZWRpdGVkQ2FyZElkOiBudW1iZXI7XG4gIHB1YmxpYyBhZGRDYXJkRXJyb3IgPSB7XG4gICAgZXhwX2RhdGU6IGZhbHNlLFxuICAgIG51bWJlcjogZmFsc2UsXG4gICAgY3ZjOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgbG9naW5EYXRhID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgdHlwZTogJycsXG4gICAgb3JkZXJEYXRhOiB7fVxuICB9O1xuICBwdWJsaWMgbG9naW5FcnJvciA9IHtcbiAgICBlbWFpbDogZmFsc2UsXG4gICAgcGFzc3dvcmQ6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyByZWdpc3RyYXRpb25EYXRhID0ge1xuICAgIG5hbWU6ICcnLFxuICAgIHBob25lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHBhc3N3b3JkQ29uZmlybTogJydcbiAgfTtcbiAgcHVibGljIHJlZ2lzdHJhdGlvbkVycm9yID0ge1xuICAgIG5hbWU6IGZhbHNlLFxuICAgIHBob25lOiBmYWxzZSxcbiAgICBlbWFpbDogZmFsc2UsXG4gICAgcGFzc3dvcmRGaXJzdDogZmFsc2UsXG4gICAgcGFzc3dvcmQ6IGZhbHNlXG4gIH07XG4gIHB1YmxpYyByZWNvdmVyeURhdGEgPSB7XG4gICAgZW1haWw6ICcnXG4gIH07XG4gIHB1YmxpYyByZWNvdmVyeUVycm9yID0ge1xuICAgIGVtYWlsOiBmYWxzZVxuICB9O1xuICBwdWJsaWMgY29uZmlybVBvcHVwRGF0YSA9IHtcbiAgICBpZDogbnVsbCxcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogJycsXG4gICAgZGF0YTogW10sXG4gICAgaW5mb3JtYXRpb246IHt9LFxuICAgIGJ1dHRvbjogJycsXG4gICAgdHlwZTogJydcbiAgfTtcbiAgcHVibGljIGNvbmZpcm1GaW5pc2hQb3B1cERhdGEgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIHR5cGU6ICdjZW50ZXInXG4gIH07XG4gIHB1YmxpYyBjb25maXJtQWN0aW9uUG9wdXBEYXRhID0ge1xuICAgIG9yZGVySWQ6ICcnLFxuICAgIHR5cGU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICB0ZXh0MjogJycsXG4gICAgYWN0aW9uczogW10sXG4gICAgYnV0dG9uczogW10sXG4gICAgcHJpY2U6IG51bGxcbiAgfTtcbiAgcHVibGljIGZpbmlzaFBvcHVwRGF0YSA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgdGV4dDogW10sXG4gICAgdHlwZTogJycsXG4gICAgZGF0YToge30sXG4gICAgZnJvbTogJydcbiAgfTtcblxuICBwdWJsaWMgZW50ZXJQaG9uZUZvcm0gPSB7XG4gICAgcGhvbmU6ICcnXG4gIH07XG4gIHB1YmxpYyBlbnRlclBob25lRm9ybUVycm9yID0ge1xuICAgIHBob25lOiBmYWxzZVxuICB9O1xuXG4gIHB1YmxpYyBpc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuXG4gIHB1YmxpYyBmb3JtRXJyb3I6IGJvb2xlYW58e3RpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZ30gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljczogQXV0aFNlcnZpY2UsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBvcHVwU2VydmljZTogUG9wdXBzU2VydmljZSwgcHJpdmF0ZSBvcmRlcnNTZXJ2aWNlOiBPcmRlcnNTZXJ2aWNlLCBwcml2YXRlIHBheW1lbnRTZXJ2aWNlOiBQYXltZW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbWFpbFBhdHRlcm4gPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgfVxuICBnZXRQb3B1cCh0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICdsb2dpbicpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uJykge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVjb3ZlcnknKSB7XG4gICAgICB0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ2hlY2sgeW91ciBpbmJveCc7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gW1xuICAgICAgICAgICdXZSBzZW50IGEgcGFzc3dvcmQgcmVzZXQgbGluayB0byB5b3VyIGVtYWlsIGFkZHJlc3MuIFBsZWFzZSBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gY3JlYXRlIGUgbmV3IHBhc3N3b3JkLicsXG4gICAgICAgICAgJ1RoZSBsaW5rIHdpbGwgb25seSBiZSBhY3RpdmUgZm9yIDEgaG91ci4gQWZ0ZXIgdGhhdCB5b3Ugd2lsbCBuZWVkIHRvIHJlcXVlc3QgYSBuZXcgb25lLidcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmZpbmlzaFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtRmluaXNoJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1FbmQnKSB7XG4gICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZCcpIHtcbiAgICAgIHRoaXMuYWRkQ2FyZFBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdjb25maXJtQWN0aW9uJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2NvbmZpcm1PcmRlckVuZCcpIHtcbiAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICB9XG4gICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSB0eXBlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoaXNSZW9wZW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMubG9naW5Qb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlY292ZXJ5UG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlQb3B1cFN0YXRlID0gJ2luYWN0aXZlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMuZmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmRQb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5hZGRDYXJkUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID09PSAnYWN0aXZlJykge1xuICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnJztcbiAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgIGlmICghaXNSZW9wZW4pIHtcbiAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnaW5hY3RpdmUnO1xuICAgICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpICYmIHBhc3N3b3JkLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLmxvZ2luKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdMb2dpbicsIHRpbWluZ1ZhcjogJ2xvYWQnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZGF0YTtcbiAgICAgICAgICBpZiAodGhpcy5sb2dpbkRhdGEudHlwZSA9PT0gJ2Zyb21PcmRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YTogdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTaSDDqCB2ZXJpZmljYXRvIHVuIGVycm9yZSEnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdOb24gcml1c2NpYW1vIGEgdHJvdmFyZSB1biBhY2NvdW50IGNvbiBxdWVsbOKAmWluZGlyaXp6byBlLW1haWwnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGEgdHVhIHBhc3N3b3JkIG5vbiDDqCBjb3JyZXR0YSdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCAxKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5lbWFpbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZhY2Vib29rTG9naW4oKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGxlZnQgPSBNYXRoLnJvdW5kKChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAyKSAtIDI4NSk7XG4gICAgICBsZXQgZmFjZWJvb2tQb3B1cCA9IHdpbmRvdy5vcGVuKFxuICAgICAgICAvLyAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3YyLjgvZGlhbG9nL29hdXRoP2NsaWVudF9pZD0xMTA4NDYxMzI1OTA3Mjc3JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2NvcGU9ZW1haWwscHVibGljX3Byb2ZpbGUmcmVkaXJlY3RfdXJpPWh0dHBzOi8vd3d3LnN0YXJib29rLmNvL2ZhY2Vib29rJyxcbiAgICAgICAgJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS92Mi44L2RpYWxvZy9vYXV0aD9jbGllbnRfaWQ9MTEwODQ2MTMyNTkwNzI3NyZyZXNwb25zZV90eXBlPXRva2VuJnNjb3BlPWVtYWlsLHB1YmxpY19wcm9maWxlJnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0OjQyMDAvZmFjZWJvb2snLFxuICAgICAgICAgICdfYmxhbmsnLFxuICAgICAgICAgICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsbGVmdD0nICsgbGVmdCArICcsIHRvcD0xMDAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycpO1xuICAgICAgdGhpcy5jaGVja0FjY2Vzc1Rva2VuKGZhY2Vib29rUG9wdXAsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrQWNjZXNzVG9rZW4oZmFjZWJvb2tXaW5kb3c6IFdpbmRvdywgY29udGV4dCkge1xuICAgIGlmIChmYWNlYm9va1dpbmRvdy5jbG9zZWQpIHtcbiAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYWNlYm9va190b2tlbicpO1xuXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLmZhY2Vib29rTG9naW4oYWNjZXNzVG9rZW4pXG4gICAgICAgICAgLnRoZW4oKHVzZXJEYXRhKSA9PiB7XG4gICAgICAgICAgICBpZighdXNlckRhdGEucGhvbmVfbnVtYmVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gJ0NvbXBsZXRhIGlsIHByb2ZpbG8nO1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0LnB1c2goJ1BlciByZXN0YXJlIGluIGNvbnRhdHRvIGNvbiBpIHByb2Zlc3Npb25pc3RpIGluc2VyaXNjaSBpbCBzdW8gbnVtZXJvIGRpIHRlbGVmb25vLicpO1xuICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ3Bob25lJztcbiAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEuZGF0YSA9IHsgdXNlckRhdGE6IHVzZXJEYXRhIH07XG4gICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luRGF0YS50eXBlID09PSAnZnJvbU9yZGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLmZyb20gPSAnb3JkZXInO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF1c2VyRGF0YS5lbWFpbCkge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcmUhJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0F1dGhvcml6YXRpb24gZXJyb3InXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3NlbGYuY2hlY2tBY2Nlc3NUb2tlbihmYWNlYm9va1dpbmRvdywgY29udGV4dCArIDEpfSwgMjAwKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0VtYWlsKHR5cGU6IHN0cmluZywgZW1haWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY292ZXJ5JzpcbiAgICAgICAgICB0aGlzLnJlY292ZXJ5RXJyb3IuZW1haWwgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICB0aGlzLmxvZ2luRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWdpc3RyYXRpb24nOlxuICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNvdmVyeSc6XG4gICAgICAgICAgdGhpcy5yZWNvdmVyeUVycm9yLmVtYWlsID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0RhdGUodHlwZSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ25ld0NhcmQnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgbGV0IHBhcnRzID0gdmFsdWUuc3BsaXQoJy8nKTtcbiAgICAgICAgaWYgKHBhcnRzWzBdID09PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5leHBfZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tOb25FbXB0eSh0eXBlLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlID09PSAnbG9naW4nKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvZ2luRXJyb3IucGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9naW5FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uTmFtZScpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IubmFtZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5uYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdyZWdpc3RyYXRpb25QaG9uZScpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBob25lID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBob25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbnRlclBob25lRm9ybScpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxMCkge1xuICAgICAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW50ZXJQaG9uZUZvcm1FcnJvci5waG9uZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAncmVnaXN0cmF0aW9uUGFzc3dvcmQnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWRkQ2FyZE51bWJlcicpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhZGRDYXJkQ3Z2Jykge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuY3ZjID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZENhcmRFcnJvci5jdmMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZywgcGFzc3dvcmRDb25maXJtOiBzdHJpbmcpIHtcbiAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjaGVja0V4cGlyeSh2YWx1ZSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gKDEgKyBkYXRlLmdldE1vbnRoKCkpLnRvU3RyaW5nKCk7XG4gICAgaWYgKChkYXRlLmdldE1vbnRoKCkgKyAxKSA8IDEwKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGxldCB5ZWFyRWxlbXMgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gICAgbGV0IHllYXIgPSBwYXJzZUludCh5ZWFyRWxlbXNbMl0udG9TdHJpbmcoKSArIHllYXJFbGVtc1szXS50b1N0cmluZygpKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGxldCBkYXRlRWxlbXMgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICBpZiAoZWxlbSA9PT0gJy8nKSB7XG4gICAgICAgICAgZGF0ZUVsZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRlRWxlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGRhdGVFbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMikge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0ICs9IGVsZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlRWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHJlc3VsdCArPSBlbGVtO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lmxlbmd0aCAhPT0gNSkge1xuICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgcGFydHMgPSByZXN1bHQuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChwYXJ0c1swXSAhPT0gcmVzdWx0KSB7XG4gICAgICAgIGlmIChwYXJzZUludChwYXJ0c1sxXSkgPiB5ZWFyKSB7XG4gICAgICAgICAgdGhpcy5hZGRDYXJkRXJyb3IuZXhwX2RhdGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocGFyc2VJbnQocGFydHNbMF0pID49IHBhcnNlSW50KG1vbnRoKSAmJiBwYXJzZUludChwYXJ0c1sxXSkgPT09IHllYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkQ2FyZEVycm9yLmV4cF9kYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY2hlY2tDYXJkTnVtYmVyKGNhcmROdW1iZXIpIHtcbiAgICAvLyBpZiAoY2FyZE51bWJlciAhPT0gbnVsbCkge1xuICAgIC8vICAgaWYgKHRoaXMucGF5bWVudFNlcnZpY2UuY2FyZE51bWJlclZhbGlkYXRlKGNhcmROdW1iZXIpKSB7XG4gICAgLy8gICAgIHRoaXMuYWRkQ2FyZEVycm9yLm51bWJlciA9IGZhbHNlO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy5hZGRDYXJkRXJyb3IubnVtYmVyID0gdHJ1ZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICByZWdpc3RyYXRpb24obmFtZTogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZENvbmZpcm06IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVtYWlsUGF0dGVybi50ZXN0KGVtYWlsKSAmJiBwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtICYmIHBhc3N3b3JkLmxlbmd0aCA+IDAgJiYgbmFtZS5sZW5ndGggPiAwICYmIHBob25lLmxlbmd0aCA+IDkpIHtcbiAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNzLnNpZ251cChuYW1lLCBwaG9uZSwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1JlZ2lzdHJhdGlvbicsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5hdXRoID0gZGF0YTtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcnNvbmFsTWVudShkYXRhKTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlL3BheW1lbnQnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc3dpdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSW5kaXJpenpvIGUtbWFpbCBnacOgIGluIHVzby4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBIYWkgaW5kaWNhdG8gZGkgZXNzZXJlIHVuIG51b3ZvIGNsaWVudGUgbWEgw6ggZ2nDoFxuICAgICAgICAgICAgICAgIHByZXNlbnRlIHVuIGFjY291bnQgY29sbGVnYXRvIGFsbCdpbmRpcml6em8gZS1tYWlsOiBtYWlsQGdtYWlsLmNvbWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQyMjpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQYXJhbWV0cmkgbWFuY2FudGknLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBJbnNlcmlzY2kgdHV0dGkgaSBwYXJhbWV0cmkgcGVyIHByb2NlZGVyZSBjb24gbGEgcmVnaXN0cmF6aW9uZWBcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcmUnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBDJ8OoIHN0YXRvIHVuIGVycm9yZSBzY29ub3NjaXV0bywgcGVyIGZhdm9yZSByaXByb3ZhIHBpw7kgdGFyZGlgXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uRXJyb3IuZW1haWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLnBhc3N3b3JkRmlyc3QgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvbkVycm9yLm5hbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWNvdmVyeShlbWFpbDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5yZWNvdmVyeShlbWFpbClcbiAgICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ1JlY292ZXJ5IG9mIHBhc3N3b3JkJywgdGltaW5nVmFyOiAnbG9hZCcsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdmaW5pc2gnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU2kgw6ggdmVyaWZpY2F0byB1biBwcm9ibGVtYSEnLFxuICAgICAgICAgICAgbWVzc2FnZTogYENpIGRpc3BpYWNlLiBJbXBvc3NpYmlsZSBpZGVudGlmaWNhcmUgbCdhY2NvdW50IGNvbiBsZSBpbmZvcm1hemlvbmkgZm9ybml0ZS5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb3ZlcnlFcnJvci5lbWFpbCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbmZpcm1PcmRlcihpZCkge1xuICAgIC8vIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ0FDQ0VQVCcpXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb25mZXJtYXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgLy8gICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdBZGVzc28gbm9uIHJlc3RhIGFsdHJvIGNoZSBvZmZyaXJlIGlsIHN1byBzZXJ2aXppbyBhbCBjbGllbnRlLiBQZXIgcXVhbHNpYXNpIGNvbW11bmljYXppb25lIHB1w7IgdXNhcmUgaSBkYXRpIGRlbCBjb250YXR0byBhZ2dpdW50aSBkYWwgY2xpZW50ZS4nO1xuICAgIC8vICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWFFbmQnO1xuICAgIC8vICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1FbmQnKTtcbiAgICAvLyAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbmZpcm1PcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAvLyAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnT3JkZXIgY29uZmlybWF0aW9uIGVycm9yJyxcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIG9yZGVyIGNvbmZpcm1hdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgLy8gICAgICAgfTtcbiAgICAvLyAgICAgfSk7XG4gIH1cblxuICBjYW5jZWxPcmRlcihpZCkge1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihpZCwgJ0NBTkNFTCcpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ01vZGlmeSBvcmRlcjogQ2FuY2VsJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdPcmRpbmUgYW5udWxsYXRvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGV4dCA9ICdRdWVzdG8gb3JkaW5lIMOoIHN0YXRvIGFubnVsbGF0bywgcHVvaSByaWF0dGl2YXJsbyBpbiB1biBzZWNvbmRvIG1vbWVudG8uJztcbiAgICAgICAgICB0aGlzLmdldFBvcHVwKCdjb25maXJtRmluaXNoJyk7XG4gICAgICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjYW5jZWxPcmRlcicsIGRhdGE6IHtvcmRlcklkOiBpZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsbGF0aW9uIGVycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBjYW5jZWxpbmcgeW91ciBvcmRlci4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICByZWFjdGl2YXRlT3JkZXIoaWQpIHtcbiAgICBsZXQgdGltZVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm9yZGVyc1NlcnZpY2UubW9kaWZ5T3JkZXIoaWQsICdSRUFDVElWQVRFJylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnTW9kaWZ5IG9yZGVyOiBSZWFjdGl2YXRlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50aXRsZSA9ICdPcmRpbmUgcmlhdHRpdmF0byc7XG4gICAgICAgICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhLnRleHQgPSAnUXVlc3RvIG9yZGluZSDDqCBzdGF0byByaWF0dGl2YXRvLCB2ZXJyYWkgbm90aWZpY2F0byBxdWFuZG8gdW4gcHJvZmVzc2lvbmlzdGEgY29uZmVybWVyYSBxdWVzdG8gb3JkaW5lLic7XG4gICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUZpbmlzaCcpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAncmVhY3RpdmF0ZU9yZGVyJywgZGF0YToge29yZGVySWQ6IGlkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdSZWFjdGl2YXRpb24gb3JkZXIgZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogYER1cmluZyB0aGUgcmVhY3RpdmF0aW9uIG9mIHlvdXIgb3JkZXIgaXMgdGhlIG9yZGVyIHRoZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBjb25maXJtTmV3T3JkZXIoKSB7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdjb25maXJtJ30pO1xuICB9XG5cbiAgYWRkTmV3Q2FyZCgpIHtcbiAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5hZGRDYXJkRGF0YS5udW1iZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICBlcnJvciA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmFkZENhcmREYXRhLmV4cF9kYXRlLmxlbmd0aCA9PT0gNSkge1xuICAgICAgbGV0IGV4cF9wYXJ0cyA9IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChleHBfcGFydHNbMF0gIT09IHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5leHBfbW9udGggPSBleHBfcGFydHNbMF07XG4gICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuY3ZjLmxlbmd0aCA8IDMpIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnc3RhcnROZXdDYXJkJ30pO1xuICAgICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnBheW1lbnRTZXJ2aWNlLmFkZE5ld0NhcmQodGhpcy5hZGRDYXJkRGF0YSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzU2VydmljZS5zZW5kVGltaW5nKHtjYXRlZ29yeTogJ0FkZCBuZXcgY2FyZCcsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZCcsIGRhdGE6IHJlc3BvbnNlfSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnbmV3Q2FyZEVycm9yJ30pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRFcnJvclBvcHVwKCdFcnJvcmUnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgJ0FuIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZWRpdENhcmQoKSB7XG4gICAgbGV0IGVycm9yID0gZmFsc2U7XG4gICAgbGV0IGVkaXRDYXJkRGF0YSA9IHtcbiAgICAgIGV4cF9tb250aDogbnVsbCxcbiAgICAgIGV4cF95ZWFyOiBudWxsLFxuICAgICAgbmFtZTogJycsXG4gICAgICBhZGRyZXNzX2xpbmUxOiAnJyxcbiAgICAgIGFkZHJlc3NfbGluZTI6ICcnLFxuICAgICAgYWRkcmVzc19jaXR5OiAnJyxcbiAgICAgIGFkZHJlc3NfemlwOiAnJyxcbiAgICAgIGFkZHJlc3Nfc3RhdGU6ICcnLFxuICAgICAgYWRkcmVzc19jb3VudHJ5OiAnJ1xuICAgIH07XG4gICAgaWYgKHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUubGVuZ3RoID09PSA1KSB7XG4gICAgICBsZXQgZXhwX3BhcnRzID0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgaWYgKGV4cF9wYXJ0c1swXSAhPT0gdGhpcy5hZGRDYXJkRGF0YS5leHBfZGF0ZSkge1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX21vbnRoID0gZXhwX3BhcnRzWzBdO1xuICAgICAgICBlZGl0Q2FyZERhdGEuZXhwX3llYXIgPSBleHBfcGFydHNbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgZWRpdENhcmREYXRhLm5hbWUgPSB0aGlzLmFkZENhcmREYXRhLm5hbWU7XG4gICAgICBlZGl0Q2FyZERhdGEuYWRkcmVzc19saW5lMSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMTtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX2xpbmUyO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY2l0eSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jaXR5O1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfemlwID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3ppcDtcbiAgICAgIGVkaXRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlID0gdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3N0YXRlO1xuICAgICAgZWRpdENhcmREYXRhLmFkZHJlc3NfY291bnRyeSA9IHRoaXMuYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5O1xuICAgICAgdGhpcy5wb3B1cFNlcnZpY2UuYWN0aW9uQ29tcGxldGUoe3R5cGU6ICdzdGFydE5ld0NhcmQnfSk7XG4gICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy5wYXltZW50U2VydmljZS5lZGl0Q2FyZCh0aGlzLmVkaXRlZENhcmRJZCwgZWRpdENhcmREYXRhKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3NTZXJ2aWNlLnNlbmRUaW1pbmcoe2NhdGVnb3J5OiAnRWRpdCBjYXJkIGNhcmQnLCB0aW1pbmdWYXI6ICdzYXZlJywgdGltaW5nVmFsdWU6IERhdGUubm93KCktdGltZVN0YXJ0fSk7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NhcmRFZGl0ZWQnLCBkYXRhOiByZXNwb25zZX0pO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzUG9wdXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ25ld0NhcmRFcnJvcid9KTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlcnJvci5qc29uKCkubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cCgnRXJyb3JlJywgbWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFByaWNlKG9yZGVySWQpIHtcbiAgICAvLyBsZXQgb3JkZXJQcmljZUV1ciA9IHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgKyAoKHBhcnNlSW50KHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSkgLyAxMDApICogNS41KTtcbiAgICAvLyBsZXQgb3JkZXJQcmljZSA9IHBhcnNlRmxvYXQob3JkZXJQcmljZUV1ci50b0ZpeGVkKDIpKSAqIDEwMDtcblxuICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5tb2RpZnlPcmRlcihvcmRlcklkLCAnQ0xPU0UnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IENsb3NlJywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuaXNQb3B1cExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ1NlcnZpemlvIGNvbXBsZXRhdG8gY29uIHN1Y2Nlc3NvJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICcnO1xuICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50eXBlID0gJ2FkZFByaWNlRW5kJztcbiAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdhZGRQcmljZUVuZCc7XG4gICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnYWRkUHJpY2UnLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZCwgaXNNb2RpZmllZDogcmVzcG9uc2Uubk1vZGlmaWVkfX0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BvcHVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGVycm9yLmpzb24oKS5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEVycm9yUG9wdXAoJ0Vycm9yZScsICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuICBlZGl0UHJpY2Uob3JkZXJJZCkge1xuICAgIGxldCBvcmRlclByaWNlRXVyID0gcGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSArICgocGFyc2VJbnQodGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnByaWNlKSAvIDEwMCkgKiA1LjUpO1xuICAgIGxldCBvcmRlclByaWNlID0gcGFyc2VGbG9hdChvcmRlclByaWNlRXVyLnRvRml4ZWQoMikpICogMTAwO1xuICAgIGxldCB0aW1lU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMub3JkZXJzU2VydmljZS5hZGRQcmljZShvcmRlcklkLCAnQUNUSVZFX1BBWU1FTlQnLCBvcmRlclByaWNlKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IEFjdGl2ZSBwYXltZW50JywgdGltaW5nVmFyOiAnc2F2ZScsIHRpbWluZ1ZhbHVlOiBEYXRlLm5vdygpLXRpbWVTdGFydH0pO1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnZWRpdFByaWNlJywgZGF0YToge29yZGVySWQ6IG9yZGVySWQsIG9yZGVyUHJpY2U6IG9yZGVyUHJpY2UsIGlzTW9kaWZpZWQ6IHJlc3BvbnNlLm5Nb2RpZmllZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH1cbiAgY29udGludWVPcmRlcihvcmRlcklkKSB7XG4gICAgbGV0IHRpbWVTdGFydCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKG9yZGVySWQsICdQQVknKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLmFuYWx5dGljc1NlcnZpY2Uuc2VuZFRpbWluZyh7Y2F0ZWdvcnk6ICdNb2RpZnkgb3JkZXI6IFBheScsIHRpbWluZ1ZhcjogJ3NhdmUnLCB0aW1pbmdWYWx1ZTogRGF0ZS5ub3coKS10aW1lU3RhcnR9KTtcbiAgICAgICAgICB0aGlzLmNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgPSAnUGFnYW1lbnRvIGVmZmV0dHVhdG8nO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0ID0gJ1RpIGFiYmlhbW8gaW52aWF0byB1bmEgbWFpbCBlIHVuIHNtcyBjb24gbGEgY29uZmVybWEgZGVsIHBhZ2FtZW50byBlIGxhIHJpY2V2dXRhIGZpc2NhbGUnO1xuICAgICAgICAgIHRoaXMuY29uZmlybUZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ2xlZnQnO1xuICAgICAgICAgIHRoaXMuZ2V0UG9wdXAoJ2NvbmZpcm1GaW5pc2gnKTtcbiAgICAgICAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2NvbnRpbnVlT3JkZXInLCBkYXRhOiB7b3JkZXJJZDogb3JkZXJJZH19KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnBvcHVwU2VydmljZS5hY3Rpb25Db21wbGV0ZSh7dHlwZTogJ2xvZ291dCcsIGRhdGE6IHt9fSk7XG4gICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gIH1cblxuICBnZXRFcnJvclBvcHVwKHRpdGxlLCB0ZXh0KSB7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dCA9IFtdO1xuICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGV4dC5wdXNoKHRleHQpO1xuICAgIHRoaXMuZ2V0UG9wdXAoJ2Vycm9yJyk7XG4gIH1cblxuICBzZXRQaG9uZU51bWJlcigpIHtcbiAgICB0aGlzLmVudGVyUGhvbmVGb3JtRXJyb3IucGhvbmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5lbnRlclBob25lRm9ybS5waG9uZS5sZW5ndGggPiAxMCkge1xuICAgICAgdGhpcy5hdXRoU2Vydmljcy5hZGRQaG9uZSh0aGlzLmVudGVyUGhvbmVGb3JtLnBob25lKVxuICAgICAgICAgIC50aGVuKCh1c2VyRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maW5pc2hQb3B1cERhdGEuZnJvbSA9PT0gJ29yZGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGl2YXRlKHt0eXBlOiAnY29uZmlybU5ld09yZGVyJywgZGF0YTogdGhpcy5sb2dpbkRhdGEub3JkZXJEYXRhfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnQ29tcGxpbWVudGkhJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50ZXh0LnB1c2goJ0hhaSByZWdpc3RyYXRvIGNvbiBzdWNjZXNzbyBpbCBzdW8gYWNjb3VudCBTdGFyYm9vay4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS50eXBlID0gJ2ZpbmlzaEZhY2Vib29rUmVnaXN0cmF0aW9uJztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFBvcHVwRGF0YS5kYXRhID0geyB1c2VyRGF0YTogdXNlckRhdGEgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW50ZXJQaG9uZUZvcm1FcnJvci5waG9uZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBvcHVwU2VydmljZS5nZXRBY3RpdmVQb3B1cCQuc3Vic2NyaWJlKHBvcHVwID0+IHtcbiAgICAgICAgc3dpdGNoIChwb3B1cC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEuZW1haWwgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dpbic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2dpbkZyb21PcmRlcic6XG4gICAgICAgICAgICB0aGlzLmxvZ2luRGF0YS5vcmRlckRhdGEgPSBwb3B1cC5kYXRhO1xuICAgICAgICAgICAgdGhpcy5sb2dpbkRhdGEudHlwZSA9ICdmcm9tT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5sb2dpblBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnbG9naW4nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYWRkQ2FyZCc6XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNhcmRUeXBlID0gJ2FkZCc7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2FkZENhcmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZWRpdENhcmQnOlxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DYXJkVHlwZSA9ICdlZGl0JztcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkQ2FyZElkID0gcG9wdXAuZGF0YS5pZDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuZXhwX2RhdGUgPSBwb3B1cC5kYXRhLmV4cF9tb250aCArICcvJyArIHBvcHVwLmRhdGEuZXhwX3llYXI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLm5hbWUgPSBwb3B1cC5kYXRhLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTEgPSBwb3B1cC5kYXRhLmFkZHJlc3NfbGluZTE7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfbGluZTIgPSBwb3B1cC5kYXRhLmFkZHJlc3NfbGluZTI7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY2l0eSA9IHBvcHVwLmRhdGEuYWRkcmVzc19jaXR5O1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5hZGRyZXNzX3ppcCA9IHBvcHVwLmRhdGEuYWRkcmVzc196aXA7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGUgPSBwb3B1cC5kYXRhLmFkZHJlc3Nfc3RhdGU7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmREYXRhLmFkZHJlc3NfY291bnRyeSA9IHBvcHVwLmRhdGEuYWRkcmVzc19jb3VudHJ5O1xuICAgICAgICAgICAgdGhpcy5hZGRDYXJkRGF0YS5udW1iZXIgPSBwb3B1cC5kYXRhLm51bWJlcjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2FyZERhdGEuY3ZjID0gcG9wdXAuZGF0YS5jdmM7XG4gICAgICAgICAgICB0aGlzLmFkZENhcmRQb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2FkZENhcmQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVnaXN0cmF0aW9uJzpcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdyZWdpc3RyYXRpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdDb25mZXJtYSBzZXJ2aXppbyBpbiBjb3Jzb+KApic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdJbCBzaXN0ZW1hIHN0YSBjb250cm9sbGFuZG8gc2UgcXVlc3RvIHNlcnZpemlvIMOoIHN0YXRvIGFzc2VnbmF0byBhZCB1biBhbHRybyBwcm9mZXNzaW9uaXN0YSBvIGFudWxsYXRvIGRhbCBjbGllbnRlIHN0ZXNzby4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnR5cGUgPSAnY29uZmVybWEnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5vcmRlcnNTZXJ2aWNlLm1vZGlmeU9yZGVyKHBvcHVwLmRhdGEub3JkZXJJZCwgJ0FDQ0VQVCcpXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTZXJ2aXppbyBjb25mZXJtYXRvIGNvbiBzdWNjZXNzbyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRleHQgPSAnQWRlc3NvIG5vbiByZXN0YSBhbHRybyBjaGUgb2ZmcmlyZSBpbCBzdW8gc2Vydml6aW8gYWwgY2xpZW50ZS4gUGVyIHF1YWxzaWFzaSBjb21tdW5pY2F6aW9uZSBwdcOyIHVzYXJlIGkgZGF0aSBkZWwgY29udGF0dG8gYWdnaXVudGkgZGFsIGNsaWVudGUuJztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdjb25mZXJtYUVuZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3B1cCgnY29uZmlybUVuZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZXJ2aWNlLmFjdGlvbkNvbXBsZXRlKHt0eXBlOiAnY29uZmlybU9yZGVyJywgZGF0YToge29yZGVySWQ6IHBvcHVwLmRhdGEub3JkZXJJZH19KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FcnJvciA9IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT3JkZXIgY29uZmlybWF0aW9uIGVycm9yJyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIG9yZGVyIGNvbmZpcm1hdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi5gXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW5jZWxPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuaWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnQW5udWxsYSBvcmRpbmU/JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBhbm51bGxhdG8gcXVlc3RvIG9yZGluZSBzb2xvIHR1IHNhcmFpIGluIGdyYWRvIGRpIHZlZGVybG8uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnQW5udWxsYSBvcmRpbmUnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtT3JkZXInO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVhY3RpdmF0ZU9yZGVyJzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdSaWF0dGl2YSBvcmRpbmU/JztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciByaWF0dGl2YXRvIHF1ZXN0byBvcmRpbmUgc2FyYSB2aXNpYmlsZSBhIHR1dHRpIGkgcHJvZmVzc2lvbmlzdGkuJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5idXR0b24gPSAnUmlhdHRpdmEgb3JkaW5lJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwU3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9wdXAgPSAnY29uZmlybU9yZGVyJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm1OZXdPcmRlcic6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGl0bGUgPSAnRGV0dGFnbGkgZGVsbOKAmW9yZGluZSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YSA9IFt7cHJvZHVjdE5hbWU6IHBvcHVwLmRhdGEub3JkZXJEYXRhLnNlcnZpY2UsIGl0ZW1OYW1lOiAnJywgcHJpY2U6ICcnLCB0eXBlOiAnc2VydmljZSd9XTtcbiAgICAgICAgICAgIHBvcHVwLmRhdGEub3JkZXJEYXRhLnNlcnZpY2VzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgaWYocHJvZHVjdC5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfSU5DUkVNRU5UJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiBwcm9kdWN0Lm5hbWUsIGl0ZW1OYW1lOiBwcm9kdWN0Lm9wdGlvbi5uYW1lLCBwcmljZTogJycsIHR5cGU6ICdpdGVtJ30pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3QucHJpY2VfdHlwZSA9PT0gJ0JBU0VfQU1PVU5UX1BFUl9JTlBVVCcpe1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5kYXRhLnB1c2goe3Byb2R1Y3ROYW1lOiBwcm9kdWN0Lm5hbWUsIGl0ZW1OYW1lOiBwcm9kdWN0Lm9wdGlvbi5uYW1lLCBwcmljZTogJycsIHN5bWJvbDogcHJvZHVjdC5vcHRpb24uc3ltYm9sLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLCBpdGVtTmFtZTogcHJvZHVjdC5vcHRpb24ubmFtZSwgcHJpY2U6IHByb2R1Y3Qub3B0aW9uLnByaWNlLCB0eXBlOiAnaXRlbSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YS5wdXNoKHtwcm9kdWN0TmFtZTogJ1RvdGFsZScsIGl0ZW1OYW1lOiAnJywgcHJpY2U6IHBvcHVwLmRhdGEub3JkZXJEYXRhLnRvdGFsUHJpY2UsIHR5cGU6ICd0b3RhbCd9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbiA9IHBvcHVwLmRhdGEuaW5mb3JtYXRpb247XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ1Byb2NlZGkgY29uIGzigJlhY3F1aXN0byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICduZXdPcmRlcic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlcic7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtTmV3T3JkZXJFbmQnOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLnRpdGxlID0gJ0FjcXVpc3RvIGVmZmV0dWF0byc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudGV4dCA9ICdM4oCZb3JkaW5lIGUgc3RhdG8gcHJlbm90YXRvIGNvbiBzdWNjZXNzby4gVW4gcHJvZmVzc2lvbmlzdGEgc2kgcHJlc2VudGVyw6AgbmVsbGEgZGF0YSBlIG9yYSBzdGFiaWxpdGEgZGEgdm9pLic7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICduZXdPcmRlckVuZCc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1PcmRlckVuZCc7XG4gICAgICAgICAgICB0aGlzLnNoYWRvd1N0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhZGRQcmljZSc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID0gJ2FkZFByaWNlJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSA9ICdDb21wbGV0YW1lbnRvIHNlcnZpemlvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBjb21wbGV0YXRvIGlsIHNlcnZpemlvIHZlcnJhaSBpbmNyZW1lbnRhdG8gZGVsIGltcG9ydG8gcHJlc3RhYmlsaXRvIHRyYSA3IGdpb3JuaSBsYXZvcmF0aXZpLic7XG4gICAgICAgICAgICAvLyB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIC8vICAgdHlwZTogJ1BheW1lbnRfaW5wdXRfYWRkJyxcbiAgICAgICAgICAgIC8vICAgc291cmNlOiAnZXVybycsXG4gICAgICAgICAgICAvLyAgIGxhYmVsOiAnSW5zZXJpc2NpIGzigJlpbXBvcnRvJyxcbiAgICAgICAgICAgIC8vICAgZGVzY3JpcHRpb246ICdBbGzigJlpbXBvcnRvIHZlcnJhIGFnZ2l1bnRvIDUuNSUgZGkgdGFzc2EgU3RhcmJvb2suJ1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2FkZFByaWNlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NvbXBsZXRhIGlsIHNlcnZpemlvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0NoaXVkaSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VkaXRQcmljZSc6XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZCA9IHBvcHVwLmRhdGEub3JkZXJJZDtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSA9ICdNb2RpZmljYSc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dCA9ICdEb3BvIGF2ZXIgbW9kaWZpY2F0byBs4oCZaW1wb3J0byBpbCBjbGllbnRlIHZlcnJhIG5vdGlmaWNhdG8gZGkgcXVlc3RhIG1vZGlmaWNhIGUgcG90cmEgcHJvY2VkZXJlIGNvbiBpbCBwYWdhbWVudG8uJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnUGF5bWVudF9pbnB1dF9lZGl0JyxcbiAgICAgICAgICAgICAgc291cmNlOiAnZXVybycsXG4gICAgICAgICAgICAgIGxhYmVsOiAnSW5zZXJpc2NpIGzigJlpbXBvcnRvJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbGzigJlpbXBvcnRvIHZlcnJhIGFnZ2l1bnRvIDUuNSUgZGkgdGFzc2EgU3RhcmJvb2suJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VkaXRQcmljZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdJbnNlcmlzY2kgaW1wb3J0bydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLmJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdDaGl1ZGknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZSA9IE1hdGgucm91bmQoKHBhcnNlSW50KHBvcHVwLmRhdGEucGF5bWVudCkgLyAxLjA1NSkgLyAxMDApO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdjb25maXJtQWN0aW9uJztcbiAgICAgICAgICAgIHRoaXMuc2hhZG93U3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbnRpbnVlT3JkZXInOlxuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLm9yZGVySWQgPSBwb3B1cC5kYXRhLm9yZGVySWQ7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGl0bGUgPSAnUGFnYW1lbnRvJztcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0ID0gJ0RvcG8gYXZlciBlZmZldHR1YXRvIGlsIHBhZ2FtZW50byByaWNldmVyYWkgdW5hIG1haWwgY29uIGxhIGZhdHR1cmEgZGVsIG9yZGluZS4nO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtQWN0aW9uUG9wdXBEYXRhLnRleHQyID0gJ0Fs4oCZaW1wb3J0byB2ZXJyYSBhZ2dpdW50byA1LjUlIGRpIHRhc3NlIFN0YXJib29rLic7XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBNYXRoLnJvdW5kKChwYXJzZUludChwb3B1cC5kYXRhLnBheW1lbnQpIC8gMS4wNTUpIC8gMTAwKTtcbiAgICAgICAgICAgIGxldCB0YXggPSAocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAtIE1hdGgucm91bmQocGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEuMDU1KSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1BheW1lbnRfaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgICBpbmZvcm1hdGlvbjogcHJpY2UgKyAn4oKsICsgJyArIHRheCArICfigqwgPSAnICsgcGFyc2VJbnQocG9wdXAuZGF0YS5wYXltZW50KSAvIDEwMCArICfigqwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY29udGludWVPcmRlcicsXG4gICAgICAgICAgICAgIHRleHQ6ICdQcm9jZWRpIGNvbiBpbCBwYWdhbWVudG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUFjdGlvblBvcHVwRGF0YS5idXR0b25zLnB1c2goe1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0ZXh0OiAnQ2hpdWRpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcHVwID0gJ2NvbmZpcm1BY3Rpb24nO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBvcHVwRGF0YS50aXRsZSA9ICdTaWN1cm8gZGkgdm9sZXIgdXNjaXJlPyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuZGF0YSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID0gJ2xvZ291dCc7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1Qb3B1cERhdGEudHlwZSA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUG9wdXBTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3B1cCA9ICdsb2dvdXQnO1xuICAgICAgICAgICAgdGhpcy5zaGFkb3dTdGF0ZSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgdGhpcy5maW5pc2hQb3B1cERhdGEudGl0bGUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZmluaXNoUG9wdXBEYXRhLnRleHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RXJyb3JQb3B1cChwb3B1cC5kYXRhLnRpdGxlLCBwb3B1cC5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuYXV0aCA9IHRoaXMuYXV0aFNlcnZpY3MuYXV0aEluaXQoKTtcbiAgfVxuXG4gIGNsZWFyRGF0YSgpIHtcbiAgICB0aGlzLmFkZENhcmREYXRhID0ge1xuICAgICAgICBvYmplY3Q6ICdjYXJkJyxcbiAgICAgICAgZXhwX2RhdGU6ICcnLFxuICAgICAgICBleHBfbW9udGg6IG51bGwsXG4gICAgICAgIGV4cF95ZWFyOiBudWxsLFxuICAgICAgICBudW1iZXI6IG51bGwsXG4gICAgICAgIGN2YzogJycsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiAnJyxcbiAgICAgICAgYWRkcmVzc19saW5lMjogJycsXG4gICAgICAgIGFkZHJlc3NfY2l0eTogJycsXG4gICAgICAgIGFkZHJlc3NfemlwOiAnJyxcbiAgICAgICAgYWRkcmVzc19zdGF0ZTogJycsXG4gICAgICAgIGFkZHJlc3NfY291bnRyeTogJydcbiAgICAgIH07XG4gICAgLy8gdGhpcy5sb2dpbkRhdGEgPSB7XG4gICAgLy8gICAgIGVtYWlsOiAnJyxcbiAgICAvLyAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIC8vICAgICB0eXBlOiAnJyxcbiAgICAvLyAgICAgb3JkZXJEYXRhOiB7fVxuICAgIC8vICAgfTtcbiAgICB0aGlzLnJlZ2lzdHJhdGlvbkRhdGEgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwaG9uZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBwYXNzd29yZENvbmZpcm06ICcnXG4gICAgICB9O1xuICAgIHRoaXMucmVjb3ZlcnlEYXRhID0ge1xuICAgICAgICBlbWFpbDogJydcbiAgICAgIH07XG4gICAgdGhpcy5jb25maXJtUG9wdXBEYXRhID0ge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGluZm9ybWF0aW9uOiB7fSxcbiAgICAgICAgYnV0dG9uOiAnJyxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH07XG4gICAgdGhpcy5jb25maXJtRmluaXNoUG9wdXBEYXRhID0ge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0eXBlOiAnY2VudGVyJ1xuICAgICAgfTtcbiAgICB0aGlzLmNvbmZpcm1BY3Rpb25Qb3B1cERhdGEgPSB7XG4gICAgICAgIG9yZGVySWQ6ICcnLFxuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdGV4dDI6ICcnLFxuICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgIHByaWNlOiBudWxsXG4gICAgICB9O1xuICAgIHRoaXMubG9naW5FcnJvciA9IHtcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5maW5pc2hQb3B1cERhdGEgPSB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICB0ZXh0OiBbXSxcbiAgICAgIHR5cGU6ICcnLFxuICAgICAgZGF0YToge30sXG4gICAgICBmcm9tOiAnJ1xuICAgIH07XG4gICAgdGhpcy5lbnRlclBob25lRm9ybSA9IHtcbiAgICAgIHBob25lOiAnJ1xuICAgIH07XG4gICAgdGhpcy5lbnRlclBob25lRm9ybUVycm9yID0ge1xuICAgICAgcGhvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmF1dGhTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cblxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcblxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2x5ZmlsbHMudHMiLCIvKipcbiAqIFNlcnZlci1zaWRlIHJvdXRlcy4gT25seSB0aGUgbGlzdGVkIHJvdXRlcyBzdXBwb3J0IGh0bWw1cHVzaHN0YXRlLlxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cbiAqXG4gKiBJbmRleCAoLykgcm91dGUgZG9lcyBub3QgaGF2ZSB0byBiZSBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gKiAnaG9tZScsICdhYm91dCdcbiAqIF07XG4gKiovXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAgICAnc2VydmljZXMvOmlkJyxcbiAgICAncHJvZmlsZS9wcml2YWN5JyxcbiAgICAncHJvZmlsZS9oZWxwJyxcbiAgICAncHJvZmlsZS9jb25kaXRpb25zJyxcbiAgICAnb3JkZXJzJyxcbiAgICAncHJvZmlsZS86cGFnZScsXG4gICAgJ2ZhY2Vib29rJ1xuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItZml4ZWQtdG9wIGJnLWludmVyc2VcXFwiIFtuZ0NsYXNzXT1cXFwieydpcy1zZWFyY2gnOiBpc0ZpbmRGaWVsZH1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHRvcC1tZW51XFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZFxcXCIgcm91dGVyTGluaz1cXFwiXFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVUYWJNZW51KClcXFwiPlN0YXJib29rPC9hPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtYmxvY2tcXFwiICpuZ0lmPVxcXCJpc0ZpbmRGaWVsZFxcXCI+XFxuICAgICAgPHAtYXV0b0NvbXBsZXRlIFsobmdNb2RlbCldPVxcXCJmaW5kVmFsdWVcXFwiIFtzdWdnZXN0aW9uc109XFxcInJlc3VsdHNcXFwiIGZpZWxkPVxcXCJ0aXRsZVxcXCIgc2Nyb2xsSGVpZ2h0PVxcXCIxNzBweFxcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwic2VhcmNoKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdFJlc3VsdChmaW5kVmFsdWUpXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2VyY2FcXFwiIG1pbkxlbmd0aD1cXFwiMFxcXCI+XFxuICAgICAgICA8dGVtcGxhdGUgbGV0LXJlcz5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICA8L3AtYXV0b0NvbXBsZXRlPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgIDxzdmcgd2lkdGg9JzEzcHgnIGhlaWdodD0nMTNweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgICAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiB0eXBlPVxcXCJyb3RhdGVcXFwiIHZhbHVlcz1cXFwiMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwO1xcXCIga2V5VGltZXM9XFxcIjA7MC41OzFcXFwiIGR1cj1cXFwiMXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiBiZWdpbj1cXFwiMHNcXFwiPjwvYW5pbWF0ZVRyYW5zZm9ybT5cXG4gICAgICAgICAgPC9jaXJjbGU+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjbG9zZS1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhc3BpbmVyVmlldyAmJiBjbGVhclZpZXdcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidWktYXV0b2NvbXBsZXRlLXBhbmVsIGVtcHR5XFxcIiAqbmdJZj1cXFwicmVzdWx0cy5sZW5ndGggPT09IDAgJiYgZmluZFZhbHVlLmxlbmd0aCA+IDAgJiYgaXNTZWFyY2hlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhZ2xpbmVcXFwiICpuZ0lmPVxcXCIhaXNGaW5kRmllbGRcXFwiPnt7dGFnbGluZX19PC9kaXY+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcIm5hdmJhci10b2dnbGVyXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgYXJpYS1sYWJlbD1cXFwiTWVudVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgpXFxcIj48L2J1dHRvbj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBmbG9hdC14cy1yaWdodFxcXCIgKm5nSWY9XFxcImF1dGggIT09IGZhbHNlXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBob21lXFxcIiByb3V0ZXJMaW5rPVxcXCJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OnRydWV9XFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVUYWJNZW51KHRydWUpXFxcIj5Ib21lPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgb3JkZXJzXFxcIiByb3V0ZXJMaW5rPVxcXCIvb3JkZXJzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcInRvZ2dsZU1lbnUoKVxcXCI+T3JkaW5pPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgcHJvZmlsZVxcXCIgcm91dGVyTGluaz1cXFwiL3Byb2ZpbGUvc2V0dGluZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlTWVudSgpXFxcIj57e2F1dGgucHJvZmlsZS5mdWxsbmFtZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQteHMtcmlnaHRcXFwiICpuZ0lmPVxcXCJhdXRoID09PSBmYWxzZSAmJiBicm93c2VyXFxcIiBbbmdDbGFzc109XFxcInsnY29sbGFwc2UnOm5hdmJhclN0YXRlPT09ZmFsc2V9XFxcIj5cXG4gICAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGluayBwcm9maWxlXFxcIiAoY2xpY2spPVxcXCJnZXRMb2dpblBvcHVwKClcXFwiPkFjY2VkaTwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHByb2ZpbGVcXFwiIChjbGljayk9XFxcImdldFJlZ2lzdHJhdGlvblBvcHVwKClcXFwiPlJlZ2lzdHJhdGk8L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvbmF2Plxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48YXBwLXBvcHVwcz48L2FwcC1wb3B1cHM+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGFyayBuYXZiYXItdGFic1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS10YWItYmFyXFxcIlxcbiAgICAgICAoc3dpcGVsZWZ0KT1cXFwic3dpcGUoJGV2ZW50LnR5cGUsICRldmVudC5kZWx0YVgpXFxcIlxcbiAgICAgICAoc3dpcGVyaWdodCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdi1waWxsc1xcXCJcXG4gICAgICAgIFtuZ1N0eWxlXT1cXFwieydtYXJnaW4tbGVmdC5weCc6IGRlbHRhfVxcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgbmF2U2VydmljZXMgb2Ygc2VydmljZXNDYXRlZ29yeUxpc3RcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzpuYXZTZXJ2aWNlcy5faWQ9PT1hY3RpdmVTZXJ2aWNlQ2F0ZWdvcnkgJiYgYWN0aXZlU2VydmljZUNhdGVnb3J5VHlwZSAhPT0gZmFsc2V9XFxcIiAoY2xpY2spPVxcXCJ0YWJOYXZpZ2F0ZShuYXZTZXJ2aWNlcy5faWQpXFxcIj48aSBjbGFzcz1cXFwiZnt7bmF2U2VydmljZXMuaWNvbl9uYW1lfX1cXFwiPjwvaT4ge3tuYXZTZXJ2aWNlcy50aXRsZX19PC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L25hdj4tLT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgaG9tZS1wYWdlXFxcIiAqbmdJZj1cXFwiaXNTZXJ2aWNlc1ZpZXcgPT09IHRydWVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTkgY29sLW1kLTEwIG1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFzb25yeS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlcy1ibG9ja1xcXCIgKm5nRm9yPVxcXCJsZXQgc2VydmljZUNhdGVnb3J5IG9mIHNlcnZpY2VzRGF0YVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2VzLWJsb2NrLWJpZyc6IHNlcnZpY2VDYXRlZ29yeS50eXBlID09PSAnY29udGVudCd9XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwic2VydmljZUNhdGVnb3J5LnR5cGUgPT09ICdjb250ZW50J1xcXCI+XFxuICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkuaW1hZ2VcXFwiIChsb2FkKT1cXFwibWFrZU1hc29ucnkoKVxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+e3sgc2VydmljZUNhdGVnb3J5LmRlc2NyaXB0aW9uIH19PC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJzZXJ2aWNlQ2F0ZWdvcnkudHlwZSAhPT0gJ2NvbnRlbnQnXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tzZXJ2aWNlQ2F0ZWdvcnkudGl0bGVfMX19PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZXJ2aWNlIGNvbnRlbnQgbm9zZWxlY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHNlcnZpY2VDYXRlZ29yeS5vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIiAqbmdJZj1cXFwiaXRlbS50eXBlID09PSAnQ0hFQ0tCT1gnIHx8IGl0ZW0udHlwZSA9PT0gJ1JBRElPQlVUVE9OJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NoZWNrZWQnOml0ZW0uc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVTZXJ2aWNlKHNlcnZpY2VDYXRlZ29yeS50aXRsZSwgaXRlbS50aXRsZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XFxcIml0ZW0uc2VsZWN0ZWQ9PT10cnVlXFxcIiBjbGFzcz1cXFwiZmEgZmEtY2hlY2stc3F1YXJlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cXFwiaXRlbS5zZWxlY3RlZD09PWZhbHNlXFxcIiBjbGFzcz1cXFwiZmEgZmEtc3F1YXJlLW9cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS50aXRsZV8xfX1cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgKm5nSWY9XFxcIml0ZW0udHlwZSA9PT0gJ0lOUFVUVEVYVCdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0uaW5wdXRfdmFsdWVcXFwiIChrZXl1cCk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGNoYW5nZSk9XFxcImNoYW5nZVZhbHVlKGl0ZW0uZm9ybUlkLCBpdGVtLm9wdGlvbklkKVxcXCIgKGZvY3VzKT1cXFwic2VsZWN0QWxsQ29udGVudCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+e3tzZXJ2aWNlc0RhdGFbaXRlbS5mb3JtSWRdLm9wdGlvbnNbaXRlbS5vcHRpb25JZF0udmFsdWVfc3ltYm9sfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxhcHAtb3JkZXIgW29yZGVyRGF0YV09XFxcIm9yZGVyRGF0YVxcXCIgW29yZGVySXNGdWxsXT1cXFwib3JkZXJJc0Z1bGxcXFwiPjwvYXBwLW9yZGVyPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJmb290ZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29weXJpZ2h0XFxcIj5TdGFyYm9vayDCqSAyMDE2IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9wcml2YWN5XFxcIj5Qcml2YWN5PC9hPlxcbiAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2NvbmRpdGlvbnNcXFwiPkNvbmRpemlvbmk8L2E+XFxuICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG48YXBwLWxhbmRpbmcgKm5nSWY9XFxcImlzU2VydmljZXNWaWV3ID09PSBmYWxzZVxcXCI+PC9hcHAtbGFuZGluZz5cXG48YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCIgY2xhc3M9XFxcInNlcnZpY2VzLWxvYWRlclxcXCI+PC9hcHAtbG9hZGluZz5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtbWQtMiBzaWRlYmFyXFxcIj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJzaWRlYmFyLWNvbnRhaW5lclxcXCIgI29yZGVyRm9ybT1cXFwibmdGb3JtXFxcIiAod2luZG93OnJlc2l6ZSk9XFxcIm9uUmVzaXplKClcXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1ibG9ja1xcXCI+XFxuICAgICAgPGgyPnt7b3JkZXJEYXRhLnNlcnZpY2V9fTwvaDI+XFxuXFxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJvcmRlci1jb250YWluZXJcXFwiICpuZ0lmPVxcXCIhb3JkZXJJc0Z1bGxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItbGlzdC1lbXB0eVxcXCI+PHN0cm9uZz5JbnNlcmlzY2k8L3N0cm9uZz4gbGUgaW5mb3JtYXppb25pIG5lY2Vzc2FyaSBkZWwgYXBwdW50YW1lbnRvIGUgaW52aWEgbGEgcmljaGllc3RhLjwvZGl2PlxcbiAgICAgIDwvZGl2PiAtLT5cXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIm9yZGVyRGF0YS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgPiBvcmRlckRhdGEudG90YWxQcmljZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1saXN0LWVtcHR5XFxcIj48c3Ryb25nPjwvc3Ryb25nPlByZXp6byBtaW5pbW8gZGVsJ29yZGluZSDigqx7eyBvcmRlckRhdGEub3JkZXJfb3B0aW9ucy5taW5fYW1vdW50IC8gMTAwIH19PC9kaXY+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwib3JkZXItY29udGFpbmVyIHNlbGVjdGVkLW9yZGVyc1xcXCIgW25nU3R5bGVdPVxcXCJ7J21heC1oZWlnaHQnOiBtYXhPcmRlckJsb2NrU2l6ZX1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgY2F0ZWdvcnlcXFwiPlxcbiAgICAgICAgICA8c3Bhbj57eyBvcmRlckRhdGEuc2VydmljZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHNwYW4gICpuZ0Zvcj1cXFwibGV0IG9yZGVyU2VydmljZSBvZiBvcmRlckRhdGEuc2VydmljZXNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlID09PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19IHt7b3JkZXJTZXJ2aWNlLm9wdGlvbi5zeW1ib2x9fTwvaT48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcIm9yZGVyU2VydmljZS5wcmljZV90eXBlICE9PSAnQkFTRV9BTU9VTlRfUEVSX0lOUFVUJ1xcXCI+e3sgb3JkZXJTZXJ2aWNlLm5hbWUgfX08aT57e29yZGVyU2VydmljZS5vcHRpb24ubmFtZX19PC9pPjwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgPC9kaXY+IC0tPlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktZ3JvdXAgdG90YWxcXFwiPlxcbiAgICAgICAgPHNwYW4+VG90YWxlIDxpPuKCrHt7IG9yZGVyRGF0YS50b3RhbFByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYWRkLW9yZGVyLWZvcm1cXFwiPlxcbiAgICAgICAgPGxhYmVsPlF1YW5kbyB2dW9pIHN2b2xnZXJlIHF1ZXN0byBsYXZvcm8/PC9sYWJlbD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgY2FsZW5kYXItcGFydFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogc3VibWl0T3JkZXIgJiYgIU9yZGVyLmRhdGV9XFxcIiAqbmdJZj1cXFwiaXNNb2JpbGVDYWxlbmRhclxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgZGF0ZXBpY2tlci1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyLXRpbWVzLW8gY2FsZW5kYXItYm94XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHAtY2FsZW5kYXIgbmFtZT1cXFwiZGF0YU9yYVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRhdGVcXFwiIGlkPVxcXCJkYXRhT3JhTW9iaWxlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiSW5zZXJpc2NpIGxhIGRhdGFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBkYXRlRm9ybWF0PVxcXCJkZCBNTSB5eVxcXCIgcmVhZG9ubHlJbnB1dD1cXFwicmVhZG9ubHlJbnB1dFxcXCIgW2xvY2FsZV09XFxcIml0XFxcIiBbbWluRGF0ZV09XFxcIm1pbkRhdGVcXFwiIFttYXhEYXRlXT1cXFwibWF4RGF0ZVxcXCIgKG9uU2VsZWN0KT1cXFwic2VsZWN0RGF0ZSgpXFxcIj5cXG4gICAgICAgICAgICA8L3AtY2FsZW5kYXI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGNhbGVuZGFyLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IHN1Ym1pdE9yZGVyICYmICFPcmRlci5kYXRlfVxcXCIgKm5nSWY9XFxcIiFpc01vYmlsZUNhbGVuZGFyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZSBkYXRlcGlja2VyLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXItdGltZXMtbyBjYWxlbmRhci1ib3hcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8cC1jYWxlbmRhciBuYW1lPVxcXCJkYXRhT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIuZGF0ZVxcXCIgaWQ9XFxcImRhdGFPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbnNlcmlzY2kgbGEgZGF0YVxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIGRhdGVGb3JtYXQ9XFxcImRkIE1NIHl5XFxcIiBbbG9jYWxlXT1cXFwiaXRcXFwiIFttaW5EYXRlXT1cXFwibWluRGF0ZVxcXCIgW21heERhdGVdPVxcXCJtYXhEYXRlXFxcIiAob25TZWxlY3QpPVxcXCJzZWxlY3REYXRlKClcXFwiPlxcbiAgICAgICAgICAgIDwvcC1jYWxlbmRhcj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcImJyb3dzZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIiAoY2xpY2tPdXRzaWRlKT1cXFwiY2xvc2VUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInRpbWVPcmFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInRpbWVPcmFcXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci50aW1lXFxcIiB2YWx1ZT1cXFwie3tPcmRlci50aW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJPcmFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vYmlsZUFyZWFcXFwiIChjbGljayk9XFxcInRvZ2dsZVRpbWVwaWNrZXIoKVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLXBpY2tlclxcXCIgKm5nSWY9XFxcInRpbWVQaWNrZXJJc1Nob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWUtZWxlbVxcXCIgKm5nRm9yPVxcXCJsZXQgdGltZSBvZiB0aW1lUGlja2VyXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RUaW1lKHRpbWUpXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9jay1vXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICB7e3RpbWV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCB0aW1lLXBhcnRcXFwiIFtuZ0NsYXNzXT1cXFwie2lzRXJyb3I6IE9yZGVyLnRpbWUgPT09ICcnICYmIHN1Ym1pdE9yZGVyfVxcXCIgKm5nSWY9XFxcIiFicm93c2VyXFxcIj5cXG4gICAgICAgICAgaXMgbm90IHN1cHBvcnQgaWYgY2xpZW50ICE9IGJyb3dzZXIgKGNsaWNrT3V0c2lkZSk9XFxcImNsb3NlVGltZXBpY2tlcigpXFxcIlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvY2stb1xcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aW1lT3JhU2VydmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ0aW1lT3JhXFxcIiBbKG5nTW9kZWwpXT1cXFwiT3JkZXIudGltZVxcXCIgdmFsdWU9XFxcInt7T3JkZXIudGltZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiT3JhXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlVGltZXBpY2tlcigpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2JpbGVBcmVhXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVUaW1lcGlja2VyKClcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZS1waWNrZXJcXFwiICpuZ0lmPVxcXCJ0aW1lUGlja2VySXNTaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lLWVsZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHRpbWUgb2YgdGltZVBpY2tlclxcXCIgKGNsaWNrKT1cXFwic2VsZWN0VGltZSh0aW1lKVxcXCI+e3t0aW1lfX08L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICA8bGFiZWw+SW5zZXJpc2NpIGzigJlpbmRpcml6em88L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNFcnJvcjogIWlzQWRkcmVzc0Z1bGwgJiYgc3VibWl0T3JkZXIgJiYgaXNBZGRyZXNzRGlydHl9XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCI+PC9zcGFuPiAtLT5cXG4gICAgICAgICAgICA8IS0tPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbmRpcml6em9cXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzppc0FkZHJlc3NGdWxsID09PSBmYWxzZSAmJiBpc0FkZHJlc3NEaXJ0eSA9PT0gdHJ1ZX1cXFwiIFsobmdNb2RlbCldPVxcXCJhZGRyZXNzXFxcIiBbbmdNb2RlbE9wdGlvbnNdPVxcXCJ7c3RhbmRhbG9uZTogdHJ1ZX1cXFwiIChrZXl1cCk9XFxcIm1vZGlmeUFkZHJlc3MoKVxcXCIgKGNoYW5nZSk9XFxcIm1vZGlmeUFkZHJlc3MoKVxcXCI+LS0+XFxuICAgICAgICAgICAgPHAtYXV0b0NvbXBsZXRlIGlkPVxcXCJsdW9nb1xcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LXNtYWxsXFxcIiBwbGFjZWhvbGRlcj1cXFwiVmlhIEdpdXNlcHBlIFZlcmRpIDEwIE1pbGFub1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOmlzQWRkcmVzc0Z1bGwgPT09IGZhbHNlICYmIGlzQWRkcmVzc0RpcnR5ID09PSB0cnVlfVxcXCIgWyhuZ01vZGVsKV09XFxcIk9yZGVyLmRlbGl2ZXJ5X2FkZHJlc3NcXFwiIFtuZ01vZGVsT3B0aW9uc109XFxcIntzdGFuZGFsb25lOiB0cnVlfVxcXCIgW3N1Z2dlc3Rpb25zXT1cXFwiYWRkcmVzc2VzXFxcIiBmaWVsZD1cXFwiZm9ybWF0dGVkQWRkcmVzc1xcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwiZ2V0QWRkcmVzc2VzKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdEFkZHJlc3MoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgPC9wLWF1dG9Db21wbGV0ZT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImVycm9yLWJsb2NrXFxcIiAqbmdJZj1cXFwiIWlzQWRkcmVzc0Z1bGwgJiYgaXNBZGRyZXNzRGlydHkgJiYgYWRkcmVzcyA9PT0gJydcXFwiPkluc2VyaXNjaSBsJ2luZGlyaXp6byBlc2F0dG88L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZXJyb3ItYmxvY2tcXFwiICpuZ0lmPVxcXCIhaXNBZGRyZXNzRnVsbCAmJiBpc0FkZHJlc3NEaXJ0eSAmJiBhZGRyZXNzICE9PSAnJyAmJiBpc0FkZHJlc3NPbmVcXFwiPkluZGlyaXp6byBub24gdHJvdmF0bzwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZXJyb3ItYmxvY2tcXFwiICpuZ0lmPVxcXCIhaXNBZGRyZXNzT25lICYmIGlzQWRkcmVzc0RpcnR5ICYmIGFkZHJlc3MgIT09ICcnXFxcIj5JbmRpcml6em8gbm9uIMOoIHNwZWNpZmljbzwvZGl2Pi0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8bGFiZWw+Tm90YTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJub3RhXFxcIiBuYW1lPVxcXCJhcHBsaWNhbnRfZGVzY3JpcHRpb25cXFwiIFsobmdNb2RlbCldPVxcXCJPcmRlci5kZWxpdmVyeV9kZXNjcmlwdGlvblxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc2NpYSB1bmEgbm90YS4uLlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcXFwiIChjbGljayk9XFxcInNob3dDb25maXJtYXRpb24oKVxcXCI+QW50ZXByaW1hIGRlbCBwcm9nZXR0bzwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXItbGlua3NcXFwiPlxcbiAgICAgICAgICA8cD5cXG4gICAgICAgICAgICBTdGFyYm9vayDCqSAyMDE3IOKAolxcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XFxcIi4uLy4uL3Byb2ZpbGUvcHJpdmFjeVxcXCI+UHJpdmFjeTwvYT4g4oCiXFxuICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cXFwiLi4vLi4vcHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPiDigKJcXG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCIuLi8uLi9wcm9maWxlL2hlbHBcXFwiPkFzc2lzdGVuemE8L2E+XFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2VzL2ZhY2Vib29rL2ZhY2Vib29rLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGFuZGluZ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItcGFnZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLWhlYWRlclxcXCI+XFxuICAgICAgICAgIDxoMT5IYWkgYmlzb2dubyBkaSBsYXZvcmF6aW9uaSBpbnRlcm5pPzwvaDE+XFxuICAgICAgICAgIDxoNj7DiCBjb3NpIHNlbXBsaWNlLiBUcm92YSBpbCBzZXJ2aXppby4gQ2FsY29sYSBpbCBwcmV2ZW50aXZvLiBQcmVub3RhLjwvaDY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlYXJjaFxcXCI+XFxuICAgICAgICAgIDxwLWF1dG9Db21wbGV0ZSBbKG5nTW9kZWwpXT1cXFwicXVlcnlcXFwiIFtzdWdnZXN0aW9uc109XFxcInJlc3VsdHNcXFwiIGZpZWxkPVxcXCJ0aXRsZVxcXCIgc2Nyb2xsSGVpZ2h0PVxcXCIyNzVweFxcXCIgKGNvbXBsZXRlTWV0aG9kKT1cXFwic2VhcmNoKCRldmVudClcXFwiIChvblNlbGVjdCk9XFxcInNlbGVjdFJlc3VsdChxdWVyeSlcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb250cm9zb2ZmaXR0byBpbiBjYXJ0b25nZXNzbywgUGFyZXRlIGluIGNhcnRvbmdlc3NvLi4uXFxcIiBtaW5MZW5ndGg9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBsZXQtcmVzPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLXJlc3VsdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0UmVzdWx0KHJlcylcXFwiPnt7IHJlcy50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvcC1hdXRvQ29tcGxldGU+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5uZXJcXFwiICpuZ0lmPVxcXCJzcGluZXJWaWV3XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIHdpZHRoPScyMXB4JyBoZWlnaHQ9JzIxcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgICAgICAgICAgPHJlY3QgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGNsYXNzPVxcXCJia1xcXCI+PC9yZWN0PlxcbiAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTBcXFwiIGN5PVxcXCI1MFxcXCIgcj1cXFwiNDVcXFwiIHN0cm9rZS1kYXNoYXJyYXk9XFxcIjE2OS42NDYwMDMyOTM4NDg4MiAxMTMuMDk3MzM1NTI5MjMyNTdcXFwiIHN0cm9rZT1cXFwiIzNCNTY4RFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgICAgICAgICA8L2NpcmNsZT5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsb3NlLWNvbnRhaW5lclxcXCIgKm5nSWY9XFxcIiFzcGluZXJWaWV3ICYmIGNsZWFyVmlld1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNsb3NlIHJvdW5kZWQgdGhpY2tcXFwiIChjbGljayk9XFxcImNsZWFyU2VhcmNoRm9ybSgpXFxcIj48L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1aS1hdXRvY29tcGxldGUtcGFuZWwgZW1wdHlcXFwiICpuZ0lmPVxcXCJyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBxdWVyeS5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuby1yZXN1bHRcXFwiPk5lc3N1biByaXN1bHRhdG88L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBsYW5kaW5nLWhlYWRlci1idXR0b25cXFwiICpuZ0lmPVxcXCJ0ZXN0UGFnZT09PSdyZWdpc3Rlcl9jb21wYW55JyB8fCB0ZXN0UGFnZT09PSdzaGFyZV9zdGFyYm9vaydcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgYnRuLWJsb2NrXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0ncmVnaXN0ZXJfY29tcGFueSdcXFwiIChjbGljayk9XFxcImNhbGxUb0FjdGlvblJlZ2lzdGVyQ29tcGFueSgpXFxcIj5SZWdpc3RyYSBsYSB0dWEgaW1wcmVzYTwvYnV0dG9uPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXFxcIiAqbmdJZj1cXFwidGVzdFBhZ2U9PT0nc2hhcmVfc3RhcmJvb2snXFxcIiAoY2xpY2spPVxcXCJjYWxsVG9BY3Rpb25TaGFyZVRvRWFybigpXFxcIj5Db25kaXZpZGkgZSBndWFkYWduYTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGgyPkxhdm9yYXppb25pIHBpw7kgcmljaGllc3RpPC9oMj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBsYW5kaW5nLXNlcnZpY2VzXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzd2lwZXItY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN3aXBlci13cmFwcGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZXMtY2FyZCBzd2lwZXItc2xpZGVcXFwiICpuZ0Zvcj1cXFwibGV0IHNlcnZpY2Ugb2Ygc2VydmljZXNcXFwiIChjbGljayk9XFxcInNlbGVjdFJlc3VsdChzZXJ2aWNlKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1jb250YWluZXJcXFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cXFwiJ3VybCgnICsgc2VydmljZS5pbWFnZV91cmwgKyAnKSdcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hhZG93XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgc2VydmljZS50aXRsZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VydmljZS1mb290ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICBBIFBBUlRJUkUgREEgPHNwYW4+4oKse3sgc2VydmljZS5vcmRlcl9vcHRpb25zLm1pbl9hbW91bnQgLyAxMDAgfX08L3NwYW4+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIndoeS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxoMj5QZXJjaMOpIHVzYXJlIFN0YXJib29rPzwvaDI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiB3aHktY2VsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdGFyX3F1YWxpdHkucG5nXFxcIiBjbGFzcz1cXFwicm91bmRlZCBteC1hdXRvIGQtYmxvY2tcXFwiIGFsdD1cXFwiLi4uXFxcIj5cXG4gICAgICAgICAgICA8aDM+TGF2b3JhemlvbmkgZGkgYWx0YSBxdWFsaXTDoDwvaDM+XFxuICAgICAgICAgICAgPGg0Pkkgc2Vydml6aSBzdSBTdGFyYm9vayB2ZW5nb25vIGVzZWd1aXRpIGRhbGxlIG1pZ2xpb3JpIGF6aWVuZGUuIFVzYW5kbyB1biBhbGdvcml0bW8gZGkgcmljZXJjYSwgU3RhcmJvb2sgdHJvdmEgbOKAmWF6aWVuZGEgcGnDuSB2aWNpbmEgYWxsYSB0dWEgYWJpdGF6aW9uZS48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hcmtldC1wcmljZS5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV6em8gZ2FyYW50aXRvIGRhbCBtZXJjYXRvPC9oMz5cXG4gICAgICAgICAgICA8aDQ+SSBwcmV6emkgc3UgU3RhcmJvb2sgdmVuZ29ubyBjYWxjb2xhdGkgZGEgdW4gYWxnb3JpdG1vIGludGVybm8gZGVsbGEgcGlhdHRhZm9ybWEgcGVyIHJlbmRlcmUgcGnDuSBlcXVvIGUgdHJhc3BhcmVudGUgaWwgbWVyY2F0by48L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyIHdoeS1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RpbWluZy5wbmdcXFwiIGNsYXNzPVxcXCJyb3VuZGVkIG14LWF1dG8gZC1ibG9ja1xcXCIgYWx0PVxcXCIuLi5cXFwiPlxcbiAgICAgICAgICAgIDxoMz5QcmV2ZW50aXZvIGRpcmV0dG88L2gzPlxcbiAgICAgICAgICAgIDxoND5VbmEgdm9sdGEgc2NlbHRvIGlsIHNlcnZpemlvLCBzZWxlemlvbmEgaSBmb3JtIHNlY29uZG8gbGUgZXNpZ2VuemUgZSBjYWxjb2xhIGlsIHByZXZlbnRpdm8gZGlyZXR0YW1lbnRlIGRhbGxhIHBpYXR0YWZvcm1hLjwvaDQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIDxkaXYgY2xhc3M9XFxcInBhcnRuZXItY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICA8aDI+TGUgbWlnbGlvcmkgYXppZW5kZSBwYXJ0bmVyPC9oMj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWJyYW5kcy1zY3JvbGxhYmxlXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhcnRuZXItZXhhbXBsZS5wbmdcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGFydG5lci1leGFtcGxlLnBuZ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXJ0bmVyLWV4YW1wbGUucG5nXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj4gLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJwcmUtZm9vdGVyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgIDxoND5TaWN1cmV6emEgZGVsIHNpdG88L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNlY3VyaXR5XFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3J0b24ucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWN1cmUucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cnVzdC5wbmdcXFwiPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNpc3RlbWkgZGkgcGFnYW1lbnRvPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1wYXltZW50LW1ldGhvZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21hc3RlcmNhcmQucG5nXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy92aXNhLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYW1lcmljYW5leHByZXNzLnBuZ1xcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RyaXBlLnBuZ1xcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtMyBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICA8aDQ+Q29udGF0dGk8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LWNvbnRhY3QtbWV0aG9kc1xcXCI+XFxuICAgICAgICAgICAgPGg0PkF0dGl2byAyNC83PC9oND5cXG4gICAgICAgICAgICA8aDQ+Q2VsbHVsYXJlOiArMzkgMzI3IDI0IDE1IDAyODwvaDQ+XFxuICAgICAgICAgICAgPGg0PkVtYWlsOiBpbmZvQHN0YXJib29rLmNvPC9oND5cXG4gICAgICAgICAgICA8aDQ+VmlhIEx1aWdpIFBpcmFuZGVsbG8gMjEsIEJ1c3RvIEFyc2l6aW8gVkE8L2g0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTMgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGg0PlNlZ3VpY2kgc3U8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0LXNvY2lhbHNcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGFyYm9vay5jby9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIHNyYz1cXFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWNlYm9vay5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3R3aXR0ZXIuY29tL3N0YXJib29rY28vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBzcmM9XFxcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHdpdHRlci5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N0YXJib29rLmNvL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgc3JjPVxcXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS5wbmdcXFwiPjwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvcHlyaWdodFxcXCI+PHN0cm9uZz5TdGFyYm9vazwvc3Ryb25nPiDCqSAyMDE3IFR1dHRpIGkgZGlyaXR0aSByaXNlcnZhdGk8L2Rpdj5cXG4gICAgICA8c3Bhbj4g4oCiIDwvc3Bhbj48YSByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPlByaXZhY3k8L2E+XFxuICAgICAgPHNwYW4+IOKAoiA8L3NwYW4+PGEgcm91dGVyTGluaz1cXFwicHJvZmlsZS9jb25kaXRpb25zXFxcIj5Db25kaXppb25pPC9hPlxcbiAgICAgIDxzcGFuPiDigKIgPC9zcGFuPjxhIHJvdXRlckxpbms9XFxcInByb2ZpbGUvaGVscFxcXCI+QXNzaXN0ZW56YTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGxhbmRpbmctdG9wLWhlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGgxPlByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLCBuZWxsJ29yYSBlIGlsIGdpb3JubyBjaGUgZGVzaWRlcmk8L2gxPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG4gIDwhLS0gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlN0YXJib29rIDxzcGFuPnNlcnZpY2VzPC9zcGFuPjwvZGl2PlxcbiAgICAgICAgICA8cD5TZWxlemlvbmEgdW5vIGRlaSBzZXJ2aXppIHN1IFN0YXJib29rLCBpbXBvc3RhIGxhIGRhdGEsIG9yYSwgaW5kaXJpenpvIGUgY29uZmVybWEgbOKAmW9yZGluZS4gVmVycmFpIG5vdGlmaWNhdG8gY29uIHVuIHNtcyBlIHVuYSBtYWlsIHF1YW5kbyBs4oCZb3JkaW5lIGUgc3RhdG8gYWNjZXR0YXRvIGRhIHVuIHByb2Zlc3Npb25pc3RhIHF1YWxpZmljYXRvLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmFja2dyb3VuZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UgaW1hZ2UtMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2hpdGUtYmFja2dyb3VuZFxcXCIgW25nU3R5bGVdPVxcXCJ7J29wYWNpdHknOmNhcmRTdHlsZXNbMV19XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UHVsaXppZTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+SGFpIGJpc29nbm8gZGkgdW4gc2Vydml6aW8gZGkgcHVsaXppZSBwZXIgbGEgY2FzYSwgbOKAmXVmZmljaW8gbyBpbCBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTg0ZmNmZWU5ZDY3NTI0MjNhNjFlNzllJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDEsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigxLCAnb2ZmJylcXFwiPlByZW5vdGEgUHVsaXppZTwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMyBjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNiB0b3AtY2FyZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLWNhcmRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJhY2tncm91bmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGltYWdlLTJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndoaXRlLWJhY2tncm91bmRcXFwiIFtuZ1N0eWxlXT1cXFwieydvcGFjaXR5JzpjYXJkU3R5bGVzWzJdfVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkVsZXR0cmljaXN0YTwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+VGkgc2VydmUgdW4gZWxldHRyaWNpc3RhIHF1YWxpZmljYXRvIGUgYWZmaWRhYmlsZSBwZXIgbGF2b3JpIGRpIGNhc2EsIHVmZmljaW8gbyBuZWdvemlvPzwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWU0MWRmMWJhZmE0MWNkYmZiOWQxJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDIsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigyLCAnb2ZmJylcXFwiPlByZW5vdGEgRWxldHRyaWNpc3RhPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0zIGNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02IHRvcC1jYXJkc1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtY2FyZCBncmVlbi1jYXJkXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1iYWNrZ3JvdW5kXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpbWFnZS0zXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aGl0ZS1iYWNrZ3JvdW5kXFxcIiBbbmdTdHlsZV09XFxcInsnb3BhY2l0eSc6Y2FyZFN0eWxlc1szXX1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5JZHJhdWxpY288L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlRpIHNlcnZlIHVuIGlkcmF1bGljbyBwcm9mZXNzaW9uaXN0YSwgcHVvaSBwcmVub3RhcmxvIHN1Yml0byBzdSBTdGFyYm9vayBzZW56YSBpbXBlZ25vLjwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNhcmQtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJuYXZpZ2F0ZSgnNTgyZWRmZTRmMWJhZmE0MWNkYmZiOWNiJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIChtb3VzZWVudGVyKT1cXFwiY2FyZEhvdmVyKDMsICdvbicpXFxcIiAobW91c2VsZWF2ZSk9XFxcImNhcmRIb3ZlcigzLCAnb2ZmJylcXFwiPlByZW5vdGEgSWRyYXVsaWNvPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjZW50ZXItZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgUmVuZGkgbGEgdHVhIHZpdGEgcGnDuSBmYWNpbGUuIFByZW5vdGEgaWwgc2Vydml6aW8gZGkgY3VpIGhhaSBiaXNvZ25vLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtMTIgbGFuZGluZy1oZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxPkNvbWUgZnVuemlvbmE/PC9oMT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteGwtNCBjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNiBob3ctdG8tYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG93LXRvLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b3AtcGFydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZHVjdC1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlNlbGV6aW9uYSBpIHNlcnZpemk8L2Rpdj5cXG4gICAgICAgICAgPHA+T2duaSBjYXRlZ29yaWEgaGEgdW5hIGxpc3RhIGRpIHNlcnZpemkuIFNlbGV6aW9uYSBxdWVsbGkgZGkgcXVpIGhhaSBiaXNvZ25vLjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC00IGNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02IGhvdy10by1ibG9ja1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3ctdG8tY29udGVudFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvcC1wYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pbWFnZVxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlByZW5vdGEgdW4gYXBwdW50YW1lbnRvPC9kaXY+XFxuICAgICAgICAgIDxwPkluc2VyaXNjaSBpIGRhdGkgbmVjZXNzYXJpIGRlbCBvcmRpbmUgZSBpbnZpYSBsYSByaWNoaWVzdGEuPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgaG93LXRvLWJsb2NrXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdy10by1jb250ZW50XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9wLXBhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9ybVxcXCI+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIj5JbnZpYSByaWNoaWVzdGE8L2E+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ucy1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1iZWxsXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICA8YT48aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgIDxhPjxpIGNsYXNzPVxcXCJmYSBmYS1jb21tZW50aW5nXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlJpY2V2aSBsYSBjb25mZXJtYSBlIHJpbGFzc2F0aSE8L2Rpdj5cXG4gICAgICAgICAgPHA+VW4gcHJvZmVzc2lvbmlzdGEgc2kgcHJlc2VudGVyw6AgbmVsbGEgZGF0YSBlIGzigJlvcmEgZGVsIGFwcHVudGFtZW50by48L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTEyIGxhbmRpbmctaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMT5MZSBwcmluY2lwYWxpIGNpdHTDoDwvaDE+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5WYXJlc2U8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItMlxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5NaWxhbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhsLTQgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgYmFubmVyXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJiYW5uZXItM1xcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICA8c3Bhbj5Ub3Jpbm88L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci1kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICBTdGFyYm9vayDDqCBsYSBwaWF0dGFmb3JtYSBjaGUgdGkgZGEgbGEgcG9zc2liaWxpdMOgIGRpIHByZW5vdGFyZSBpIHByb2Zlc3Npb25pc3RpIG5lbGwnb3JhIGUgZGF0YSBjaGUgdHUgZGVzaWRlcmkgc2VuemEgZG92ZXIgY2hpYW1hcmUgZSBsYXNjaWFyZSBhcHB1bnRhbWVudGkgdHJhbWl0ZSB0ZWxlZm9ubyBvIGVtYWlsLlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PiAtLT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItc3RhcmJvb2sgd2l0aG91dC10YWJzXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxlZnQtbmF2aWdhdGVcXFwiPlxcbiAgICAgIDxhICpuZ0Zvcj1cXFwibGV0IHRhYiBvZiB0YWJzXFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzp0YWIuc2VsZWN0ZWR9XFxcIiAoY2xpY2spPVxcXCJyZW5kZXJQYWdlKHRhYi5uYW1lKVxcXCI+XFxuICAgICAgICA8c3Bhbj48L3NwYW4+XFxuICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14bC0xMiBvcmRlcnMtY29udGFpbmVyXFxcIj5cXG4gICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlcnMtZXJyb3JcXFwiICpuZ0lmPVxcXCJwYWdlRGF0YS5sZW5ndGggPT09IDAgJiYgcmVxdWVzdElzQ29tcGxldGVcXFwiPnt7ZW1wdHlMaXN0VGl0bGV9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLWluZm9ybWF0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBvcmRlciBvZiBwYWdlRGF0YVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cXFwib3JhbmdlXFxcIj48L3NwYW4+IEluIGF0dGVzYSBkaSBwYWdhbWVudG8uLi4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBBc3NlZ25hdG9cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSA5OSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInJlZFxcXCI+PC9zcGFuPiBBbm51bGxhdG9cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAwICYmIHNlbGVjdFRhYiA9PT0gJ0kgbWllaSBvcmRpbmknXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3JlZW5cXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIGNvbmZlcm1hXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShvcmRlci5kYXRlLCBkYXRlRm9ybWF0aW5nKCdub3cnKSkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gQXNzZWduYXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RpJ1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVxcXCJvcmFuZ2VcXFwiPjwvc3Bhbj4gSW4gYXR0ZXNhIGRpIHBhZ2FtZW50by4uLi0tPlxcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhdGVnb3J5LXNlcnZpY2VzLXN0YXRlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAxICYmIGRhdGVDb21wYXJlKGRhdGVGb3JtYXRpbmcoJ25vdycpLCBvcmRlci5kYXRlKSAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBTZXJ2aXppbyBpbiBjb3Jzby4uLlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYmxhY2tcXFwiPjwvc3Bhbj4gU2NhZHV0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktc2VydmljZXMtc3RhdGVcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDk4ICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm9yYW5nZVxcXCI+PC9zcGFuPiBDb21wbGV0YXRvXFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXRlZ29yeS1zZXJ2aWNlcy1zdGF0ZVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicmVkXFxcIj48L3NwYW4+IEFubnVsbGF0b1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2F0ZWdvcnktbmFtZVxcXCI+XFxuICAgICAgICAgICAge3sgY2F0ZWdvcmllc1tvcmRlci5jYXRlZ29yeV90eXBlXSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZGF0ZVxcXCI+XFxuICAgICAgICAgICAge3sgZGF0ZUZvcm1hdGluZyhvcmRlci5kYXRlKSB9fVxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItYm9keVxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItcm93IHByb2R1Y3RzIGNvbC14bC00XFxcIj5cXG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgKm5nRm9yPVxcXCJsZXQgcHJvZHVjdCBvZiBvcmRlci5kZXRhaWxzXFxcIiBbbmdDbGFzc109XFxcInsnc2VydmljZSc6cHJvZHVjdC50eXBlID09PSAnc2VydmljZSd9XFxcIj57eyBwcm9kdWN0LnRpdGxlIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgIT09ICdzZXJ2aWNlJyAmJiBwcm9kdWN0LmFtb3VudCA+IDBcXFwiPuKCrHt7IHByb2R1Y3QuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbSB0b3RhbFxcXCI+VG90YWxlIDxpPuKCrHt7IG9yZGVyLnBheW1lbnQuYW1vdW50IC8gMTAwIH19PC9pPjwvZGl2PiAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiICpuZ0Zvcj1cXFwibGV0IHByb2R1Y3Qgb2Ygb3JkZXIuZGV0YWlsc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlcnZpY2UnOnByb2R1Y3QudHlwZSA9PT0gJ3NlcnZpY2UnfVxcXCI+e3sgcHJvZHVjdC50aXRsZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC50eXBlICE9PSAnc2VydmljZSdcXFwiPnt7IHByb2R1Y3QuZGVzY3JpcHRpb24gfX08L2k+PC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcIml0ZW0gdG90YWxcXFwiPlRvdGFsZSA8aT7igqx7eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9fTwvaT48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdSaWNoaWVzdGUgZGVpIGNsaWVudGknXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVxcXCJvcmRlci5zdGF0dXM9PT0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2xpZW50ZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+SW5kaXJpenpvOjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5zdHJlZXQgfX0sIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0X251bWJlciB9fTxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBvcmRlci5hZGRyZXNzLmNpdHkgfX0sIHt7IG9yZGVyLmFkZHJlc3MucG9zdGFsX2NvZGUgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5wcm92aW5jZSB9fSwge3sgb3JkZXIuYWRkcmVzcy5jb3VudHJ5IH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2xpZW50LWluZm8gY29sLXhsLTRcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwgfHwgb3JkZXIuc3RhdHVzPT09MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPkluIGF0dGVzYSBkaSBjb25mZXJtYS4uLjwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIubWVyY2hhbnQgJiYgb3JkZXIubWVyY2hhbnQgIT09IG51bGwgJiYgb3JkZXIuc3RhdHVzPT09MVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPlByb2Zlc3Npb25pc3RhOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLm1lcmNoYW50LnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5tZXJjaGFudC5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNsaWVudC1pbmZvIGNvbC14bC00XFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAnQXJjaGl2aW8nXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIihvcmRlci5jdXN0b21lciB8fCBvcmRlci5jdXN0b21lciAhPT0gbnVsbCkgJiYgb3JkZXIuc3RhdHVzPT09OTggJiYgYXV0aERhdGEuX2lkICE9PSBvcmRlci5jdXN0b21lcl9pZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNsaWVudGU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPjxzdHJvbmc+e3sgb3JkZXIuY3VzdG9tZXIucHJvZmlsZS5mdWxsbmFtZSB9fTwvc3Ryb25nPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+Q2VsbHVsYXJlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5waG9uZV9udW1iZXIgfCBwaG9uZSB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtbmFtZVxcXCI+RW1haWw6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLmN1c3RvbWVyLmVtYWlsIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIob3JkZXIuY3VzdG9tZXIgfHwgb3JkZXIuY3VzdG9tZXIgIT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTk4ICYmIGF1dGhEYXRhLl9pZCA9PT0gb3JkZXIuY3VzdG9tZXJfaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5Qcm9mZXNzaW9uaXN0YTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+PHN0cm9uZz57eyBvcmRlci5tZXJjaGFudC5wcm9maWxlLmZ1bGxuYW1lIH19PC9zdHJvbmc+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DZWxsdWxhcmU6PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPnt7IG9yZGVyLm1lcmNoYW50LnBob25lX251bWJlciB8IHBob25lIH19PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5FbWFpbDo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIubWVyY2hhbnQuZW1haWwgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIm9yZGVyLmN1c3RvbWVyICYmIG9yZGVyLmN1c3RvbWVyICE9PSBudWxsICYmICghb3JkZXIubWVyY2hhbnQgfHwgb3JkZXIubWVyY2hhbnQgPT09IG51bGwpICYmIG9yZGVyLnN0YXR1cz09PTBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzPT09OTlcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1uYW1lXFxcIj5DbGllbnRlOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj48c3Ryb25nPnt7IG9yZGVyLmN1c3RvbWVyLnByb2ZpbGUuZnVsbG5hbWUgfX08L3N0cm9uZz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkNlbGx1bGFyZTo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC12YWx1ZVxcXCI+e3sgb3JkZXIuY3VzdG9tZXIucGhvbmVfbnVtYmVyIHwgcGhvbmUgfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkVtYWlsOjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLXZhbHVlXFxcIj57eyBvcmRlci5jdXN0b21lci5lbWFpbCB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkLW5hbWVcXFwiPkluZGlyaXp6bzo8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGQtdmFsdWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3Muc3RyZWV0IH19LCB7eyBvcmRlci5hZGRyZXNzLnN0cmVldF9udW1iZXIgfX08YnI+XFxuICAgICAgICAgICAgICAgICAge3sgb3JkZXIuYWRkcmVzcy5jaXR5IH19LCB7eyBvcmRlci5hZGRyZXNzLnBvc3RhbF9jb2RlIH19PGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IG9yZGVyLmFkZHJlc3MucHJvdmluY2UgfX0sIHt7IG9yZGVyLmFkZHJlc3MuY291bnRyeSB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVyLXJvdyBkZXNjcmlwdGlvbiBjb2wteGwtNFxcXCI+XFxuICAgICAgICAgICAgICB7eyBvcmRlci5kZXNjcmlwdGlvbiB9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3JkZXItZm9vdGVyXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29kZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4+Q09ESUNFOjwvc3Bhbj5cXG4gICAgICAgICAgICB7eyBvcmRlci5faWQgfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ1dHRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMSAmJiBkYXRlQ29tcGFyZShkYXRlRm9ybWF0aW5nKCdub3cnKSwgb3JkZXIuZGF0ZSkgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29tcGxldGFPcmRlcihvcmRlci5faWQpXFxcIj5Db21wbGV0YSBzZXJ2aXppbzwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWJsb2NrXFxcIj48ZGl2IGNsYXNzPVxcXCJjb250ZW50LXByaWNlXFxcIj5QcmV2ZW50aXZvOiA8c3Bhbj57eyBvcmRlci5wYXltZW50LmFtb3VudCAvIDEwMCB9feKCrDwvc3Bhbj48L2Rpdj48L2Rpdj5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicHJpY2UtYmxvY2tcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDIgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAyICYmIHNlbGVjdFRhYiA9PT0gJ1JpY2hpZXN0ZSBkZWkgY2xpZW50aSdcXFwiIChjbGljayk9XFxcImVkaXRPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+TW9kaWZpY2E8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiICpuZ0lmPVxcXCJvcmRlci5zdGF0dXMgPT09IDAgJiYgc2VsZWN0VGFiID09PSAnUmljaGllc3RlIGRlaSBjbGllbnRpJyAmJiBpc1ZlbmRvciA9PT0gdHJ1ZVxcXCIgKGNsaWNrKT1cXFwiY29uZmlybU9yZGVyKG9yZGVyLl9pZClcXFwiPkNvbmZlcm1hIHNlcnZpemlvPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gOTkgJiYgc2VsZWN0VGFiID09PSAnSSBtaWVpIG9yZGluaSdcXFwiIChjbGljayk9XFxcInJlYWN0aXZhdGVPcmRlcihvcmRlci5faWQpXFxcIj5SZWF0dGl2YSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMCAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY2FuY2VsT3JkZXIob3JkZXIuX2lkKVxcXCI+QW5udWxsYSBzZXJ2aXppbzwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9ja1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKm5nSWY9XFxcIm9yZGVyLnN0YXR1cyA9PT0gMiAmJiBzZWxlY3RUYWIgPT09ICdJIG1pZWkgb3JkaW5pJ1xcXCIgKGNsaWNrKT1cXFwiY29udGludWVPcmRlcihvcmRlci5faWQsIG9yZGVyLnBheW1lbnQuYW1vdW50KVxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJvY2VkaTwvYnV0dG9uPi0tPlxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwcmljZS1ibG9jayBhcmNoaXZlXFxcIiAqbmdJZj1cXFwib3JkZXIuc3RhdHVzID09PSAzICYmIHNlbGVjdFRhYiA9PT0gJ0FyY2hpdmlvJ1xcXCI+PGRpdiBjbGFzcz1cXFwiY29udGVudC1wcmljZVxcXCI+SW1wb3J0bzogPHNwYW4+e3sgb3JkZXIucGF5bWVudC5hbW91bnQgLyAxMDAgfX3igqw8L3NwYW4+PC9kaXY+PC9kaXY+LS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIiAqbmdJZj1cXFwiaXNMb2FkaW5nXFxcIj48L2Rpdj4gLS0+XFxuPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1wYWdlXFxcIiBbbmdDbGFzc109XFxcInt3aGl0ZUJnOiBzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJyB8fCBzZWxlY3RUYWIgPT09ICdwcml2YWN5JyB8fCBzZWxlY3RUYWIgPT09ICdoZWxwJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyLXN0YXJib29rIHdpdGhvdXQtdGFic1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGVmdC1uYXZpZ2F0ZVxcXCIgKHN3aXBlbGVmdCk9XFxcInN3aXBlKCRldmVudC50eXBlLCAkZXZlbnQuZGVsdGFYKVxcXCIgKHN3aXBlcmlnaHQpPVxcXCJzd2lwZSgkZXZlbnQudHlwZSwgJGV2ZW50LmRlbHRhWClcXFwiPlxcbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XFxcInsnbWFyZ2luLWxlZnQucHgnOiBkZWx0YX1cXFwiPlxcbiAgICAgICAgICA8YSAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFic1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6dGFiLnVybCA9PT0gc2VsZWN0VGFifVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy9wcm9maWxlJywgdGFiLnVybF1cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgICA8ZGl2Pnt7dGFiLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDxhICpuZ0lmPVxcXCJpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj48c3Bhbj48L3NwYW4+PGRpdj5Fc2NpPC9kaXY+PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1zZXR0aW5nc1xcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ3NldHRpbmdzJ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkluZm9ybWF6aW9uaSBkZWwgYWNjb3VudDwvZGl2PlxcbiAgICAgICAgPGZvcm0gI2NoYW5nUHJvZmlsZT1cXFwibmdGb3JtXFxcIj5cXG4gICAgICAgICAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICAgICAgICAgIDxsYWJlbD5OT01FIENPTVBMRVRPPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJOb21lIENvZ25vbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmZ1bGxuYW1lXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPkNvZ25vbWU8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdG5hbWVcXFwiICNmdWxsbmFtZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmxhc3RuYW1lXFxcIiByZXF1aXJlZCBkaXNhYmxlZD4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLTxsYWJlbD5Ob21lIEF6aWVuZGE8L2xhYmVsPi0tPlxcbiAgICAgICAgICAgIDwhLS08aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGF0cm9ueW1pY1xcXCIgI2Z1bGxuYW1lPVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlckRhdGEucGF0cm9ueW1pY1xcXCIgcmVxdWlyZWQgZGlzYWJsZWQ+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPGxhYmVsPkNFTExVTEFSRTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk51bWVyb1xcXCIgI3Bob25lX251bWJlcj1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBob25lX251bWJlclxcXCI+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8bGFiZWw+RU1BSUw8L2xhYmVsPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJlbWFpbC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJJbmRpcml6em8gZW1haWxcXFwiIHZhbHVlPVxcXCJcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmVtYWlsXFxcIiByZXF1aXJlZCBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCIgZGlzYWJsZWQ+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHBhc3N3b3JkLWJsb2NrXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD4tLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwicGFzc3dvcmQtY29udGFpbmVyXFxcIj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJwYXNzd29yZFxcXCI+LS0+XFxuICAgICAgICAgICAgICAgIDwhLS08c3Bhbj7igKLigKLigKLigKLigKLigKLigKLigKLigKLigKLigKI8L3NwYW4+LS0+XFxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwiY2hhbmdlLXBhc3N3b3JkXFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgnY2hhbmdlUGFzc3dvcmQnKVxcXCI+TW9kaWZpY2EgcGFzc3dvcmQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJoZWFkZXIgc2Vjb25kXFxcIj5JbmRpcml6em8gZGkgZmF0dHVyYXppb25lPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5JbmRpcml6em8gZGVsIGRvbWljaWxpbzwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJhZGRyZXNzMVxcXCIgI3N0cmVldD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnN0cmVldFxcXCIgcGxhY2Vob2xkZXI9XFxcIlZpYSBWZXJkaSAxM1xcXCI+XFxuICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgPCEtLSA8bGFiZWw+Q2l0dMOgIGUgQ0FQPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJhZGRyZXNzMlxcXCIgI2NpdHk9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5jaXR5XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2l0dMOgXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbCBzZWNvbmRcXFwiIG5hbWU9XFxcIm51bWJlcjJcXFwiICNwb3N0YWxfY29kZT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLnBvc3RhbF9jb2RlXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ0FQXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5Qcm92aW5jaWEgZSBOYXppb25lPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBkb3VibGUtaW5wdXRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGZpcnN0XFxcIiBuYW1lPVxcXCJjaXR5XFxcIiAjcHJvdmluY2U9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyRGF0YS5wcm92aW5jZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlByb3ZpbmNpYVxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgc2Vjb25kXFxcIiBuYW1lPVxcXCJjb3VudHJ5XFxcIiAjY291bnRyeT1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJEYXRhLmNvdW50cnlcXFwiIHBsYWNlaG9sZGVyPVxcXCJOYXppb25lXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8IS0tIDxsYWJlbD5QYXJ0aXRhIElWQTwvbGFiZWw+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwaXZhXFxcIiBwbGFjZWhvbGRlcj1cXFwiUC5JVkFcXFwiPlxcbiAgICAgICAgICA8L2Rpdj4gLS0+XFxuICAgICAgICAgIDwhLS0gPGxhYmVsPkNvZGljZSBGaXNjYWxlPC9sYWJlbD5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImNvZGljZVxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvZGljZSBGaXNjYWxlXFxcIj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiZm9ybUVycm9yXFxcIj5cXG4gICAgICAgICAgICA8c3Ryb25nICpuZ0lmPVxcXCJmb3JtRXJyb3IudGl0bGUubGVuZ3RoID4gMFxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvc3Ryb25nPiB7e2Zvcm1FcnJvci5tZXNzYWdlfX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ1cGRhdGVQcm9maWxlKClcXFwiPkFnZ2lvcm5hIEluZm9ybWF6aW9uaTwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNpZ24tb3V0XFxcIj48L3NwYW4+IExvZyBvdXQ8L2J1dHRvbj4tLT5cXG4gICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRzLXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdwYXltZW50J1xcXCI+XFxuICAgICAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHNcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWxvZ28ge3sgZm9ybWF0Q3NzQ2xhc3MoY2FyZC5icmFuZCkgfX1cXFwiPjxzcGFuPioqKioge3sgY2FyZC5sYXN0NCB9fTwvc3Bhbj48L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlzRGVmYXVsdFxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkID09PSBjYXJkLmlkXFxcIj5EZWZhdWx0PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidXR0b25zLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKm5nSWY9XFxcImRlZmF1bHRDYXJkICE9PSBjYXJkLmlkXFxcIiAoY2xpY2spPVxcXCJzZWxlY3RDYXJkKGNhcmQuaWQpXFxcIj5EZWZhdWx0PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJkZWxldGVDYXJkKGNhcmQuaWQpXFxcIj5SaW11b3ZpPC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImVkaXRDYXJkKGNhcmQuaWQpXFxcIj5Nb2RpZmljYTwvYT5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pbmZvcm1hdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Ob21lOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5OdW1lcm86PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICoqKioge3sgY2FyZC5sYXN0NCB9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNjYWRlbnphOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmV4cF9tb250aCB9fS97eyBmb3JtYXRZZWFyKGNhcmQuZXhwX3llYXIpIH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGlwbzo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAge3sgY2FyZC5icmFuZCB9fSB7eyBjYXJkLmZ1bmRpbmcgfX0ge3sgY2FyZC5vYmplY3QgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaW5mb3JtYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbmZvcm1hdGlvbi1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4+SW5kaXJpenpvOjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3NfbGluZTEgfX0ge3sgY2FyZC5hZGRyZXNzX2xpbmUyIH19IDxicj5cXG4gICAgICAgICAgICAgICAgICB7eyBjYXJkLmFkZHJlc3Nfc3RhdGUgfX0ge3sgY2FyZC5hZGRyZXNzX2NpdHkgfX0gPGJyPlxcbiAgICAgICAgICAgICAgICAgIHt7IGNhcmQuYWRkcmVzc196aXAgfX0ge3sgY2FyZC5hZGRyZXNzX2NvdW50cnkgfX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYmxvY2tcXFwiPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmV3LWNhcmRcXFwiIChjbGljayk9XFxcImFkZE5ld0NhcmQoKVxcXCI+XFxuICAgICAgICAgICAgQWdnaXVuZ2kgdW4gbWV0b2RvIGRpIHBhZ2FtZW50b1xcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXBhZ2VcXFwiICpuZ0lmPVxcXCJzZWxlY3RUYWIgPT09ICdjb25kaXRpb25zJ1xcXCI+XFxuICAgICAgICA8cD48c3Ryb25nPjEuIEFDQ0VTU08gRSBSRUdPTEFNRU5UTyBERUwgU0lUTyBTVEFSQk9PSzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+MS4xLiBBY2Nlc3NvIGFsIFNpdG86IDwvc3Ryb25nPkXigJkgcG9zc2liaWxlIGF2ZXJlIGFjY2Vzc28gYWQgYWxjdW5lIGFyZWUgZGVsIFNpdG8gd2ViIGFuY2hlIHNlbnphIGVmZmV0dHVhcmUgdW4gT3JkaW5lIG8gc2VuemEgcHJvY2VkZXJlIGFsbGEgcmVnaXN0cmF6aW9uZSBkZWkgcHJvcHJpIGRhdGkuIExhIG1hZ2dpb3IgcGFydGUgZGVsbGUgYXJlZSBkZWwgU2l0byBzb25vIGFjY2Vzc2liaWxpIGEgY2hpdW5xdWUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjIuIEFjY2V0dGF6aW9uZSBkZWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IExhIG5hdmlnYXppb25lIGluIHF1YWx1bnF1ZSBhcmVhIGRlbCBTaXRvIGNvbXBvcnRhIGwnYWNjZXR0YXppb25lIGRlbCBSZWdvbGFtZW50byBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGVkIHV0ZW50aSBkZWwgU2l0byBjaGUgcmlmaXV0aW5vIGRpIGFjY2V0dGFyZSBpbCBSZWdvbGFtZW50byBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGxhc2NpYXJlIGltbWVkaWF0YW1lbnRlIGlsIFNpdG8gZSBub24gYXZyYW5ubyBsYSBwb3NzaWJpbGl0w6AgZGkgb3JkaW5hcmUgc2Vydml6aSB0cmFtaXRlIGlsIFNpdG8gc3Rlc3NvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+MS4zLiBNb2RpZmljaGUgYWwgUmVnb2xhbWVudG8gZGVsIFNpdG86PC9zdHJvbmc+IFNUQVJCT09LIGhhIGZhY29sdMOgIGRpIG1vZGlmaWNhcmUgaWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gcXVhbHNpYXNpIG1vbWVudG8uIE9jY29ycmUgcGVydGFudG8gY29udHJvbGxhcmUgcGVyaW9kaWNhbWVudGUgaWwgUmVnb2xhbWVudG8gZGVsIFNpdG8gaW4gdmlnb3JlIGFsIG1vbWVudG8gcG9pY2jDqSBlc3NhIHZpbmNvbGEgaSB2aXNpdGF0b3JpIGUgZ2xpIHV0ZW50aSBkZWwgU2l0by4gSSB2aXNpdGF0b3JpIGUgdXRlbnRpIGRlbCBTaXRvIHNvbm8gdGVudXRpIGFsIHJpc3BldHRvIGRlbGxlIHBvbGljeSBlIGRlbGxhIGRpc2NpcGxpbmEgaW4gdmlnb3JlIGFsIG1vbWVudG8gaW4gY3VpIGVmZmV0dHVhbm8gdW4gT3JkaW5lIHRyYW1pdGUgU1RBUkJPT0suPGJyPlxcbiAgICAgICAgPHN0cm9uZz4xLjQuIFJlc3BvbnNhYmlsaXTDoDo8L3N0cm9uZz4gU3BldHRhIGFpIHZpc2l0YXRvcmkgZSB1dGVudGkgZGVsIFNpdG8gcHJlZGlzcG9ycmUgcXVhbnRvIG5lY2Vzc2FyaW8gcGVyIGF2ZXJlIGFjY2Vzc28gYWwgU2l0byBzdGVzc28uIElub2x0cmUsIGkgdmlzaXRhdG9yaSBlIHV0ZW50aSBkZWwgU2l0byBzb25vIHRlbnV0aSBhIGdhcmFudGlyZSBjaGUgdHV0dGkgY29sb3JvIGNoZSBoYW5ubyBhY2Nlc3NvIGFsIFNpdG8gdHJhbWl0ZSBsYSBsb3JvIGNvbm5lc3Npb25lIGFkIEludGVybmV0IHNpYW5vIGEgY29ub3NjZW56YSBkZWwgcHJlc2VudGUgUmVnb2xhbWVudG8gZGVsIFNpdG8gZSBsYSByaXNwZXR0aW5vLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Mi4gU1RBVFVTIERFTEzigJlVVEVOVEUgREVMIFNJVE8gU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjIuMS4gQ2FwYWNpdMOgIGdpdXJpZGljYSBlZCBldMOgOiA8L3N0cm9uZz5FZmZldHR1YW5kbyB1biBPcmRpbmUgdHJhbWl0ZSBpbCBTaXRvLCBs4oCZdXRlbnRlIGdhcmFudGlzY2U6PGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMS48L3N0cm9uZz4gZGkgYXZlciBsYSBjYXBhY2l0w6AgZGkgYWdpcmUgZSBjb25jbHVkZXJlIGNvbnRyYXR0aSBnaXVyaWRpY2FtZW50ZSB2aW5jb2xhbnRpPGJyPlxcbiAgICAgICAgPHN0cm9uZz4yLjEuMi48L3N0cm9uZz4gZGkgYXZlcmUgY29tcGl1dG8gMTggYW5uaTwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+My4gTU9EQUxJVMOAIERJIEVNSVNTSU9ORSBERUxMIE9SRElORSBFIERJIEVMQUJPUkFaSU9ORSBERUxM4oCZT1JESU5FPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4zLjEuIENvbXBpbGF6aW9uZSBkZWxs4oCZT3JkaW5lOiA8L3N0cm9uZz5Eb3BvIGF2ZXIgc2VsZXppb25hdG8gaWwgc2Vydml6aW8gY2hlIGludGVuZGUgb3JkaW5hcmUgZGEgdW4gcHJvZmVzc2lvbmlzdGEgcHJlc2NlbHRvIGRhbGxhIHBpYXR0YWZvcm1hIGVkIGF2ZXIgZm9ybml0byBsZSBpbmZvcm1hemlvbmksIGzigJl1dGVudGUgaGEgZmFjb2x0w6AgZGkgZWZmZXR0dWFyZSBs4oCZT3JkaW5lIGNsaWNjYW5kbyBzdWwsIG8gc2VsZXppb25hbmRvIGlsLCBwdWxzYW50ZSDigJxQcm9jZWRpIGNvbiBsJ29yZGluZeKAnSBlIOKAnFByb2NlZGkgY29uIGwnYWNxdWlzdG/igJ0uIFNpIHJpY29yZGEgY2hlIMOoIGltcG9ydGFudGUgY29udHJvbGxhcmUgdHV0dGUgbGUgaW5mb3JtYXppb25pIGltbWVzc2UgZSBjb3JyZWdnZXJlIGV2ZW50dWFsaSBlcnJvcmkgcHJpbWEgZGkgY2xpY2NhcmUgc3VsIHB1bHNhbnRlIG8gZGkgc2VsZXppb25hcmxvIHBvaWNow6ksIGRvcG8gYXZlcmxvIGZhdHRvLCBpbCBwcm9jZWRpbWVudG8gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgaGEgaW5pemlvIGUgbm9uIMOoIHBpw7kgcG9zc2liaWxlIGNvcnJlZ2dlcmUgZXZlbnR1YWxpIGVycm9yaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbOKAmU9yZGluZTogPC9zdHJvbmc+VW5hIHZvbHRhIGNoZSBs4oCZT3JkaW5lIMOoIHN0YXRvIGlub2x0cmF0byBlIGlsIHBhZ2FtZW50byDDqCBzdGF0byBhdXRvcml6emF0byBub24gw6ggcGnDuSBwb3NzaWJpbGUgbW9kaWZpY2FyZSBvIGFubnVsbGFyZSBs4oCZT3JkaW5lIGUgbm9uIHNpIGhhIGRpcml0dG8gYWQgYWxjdW4gcmltYm9yc28uIE92ZSBkZXNpZGVyaSBtb2RpZmljYXJlIG8gYW5udWxsYXJlIGzigJlPcmRpbmUsIGzigJl1dGVudGUgcHXDsiByaXZvbGdlcnNpIGFsIFNlcnZpemlvIENsaWVudGksIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBjb211bmljYXJnbGkgbGEgcmljaGllc3RhIGRlbGzigJl1dGVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGzigJlPcmRpbmUgcG90cmViYmUgYXZlcmUgZ2nDoCBhdnV0byBpbml6aW8uIElsIGNsaWVudGUsIGFpIHNlbnNpIGRlbGwnYXJ0LiA1NSBsZXR0LiBhKSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBub24gaGEgZGlyaXR0byBhIHJlY2VkZXJlIGRhZ2xpIE9yZGluaSBlZmZldHR1YXRpIHVuYSB2b2x0YSBjaGUgaWwgYmVuZSBvIHNlcnZpemlvIHJpY2hpZXN0byDDqCBzdGF0byBjb25zZWduYXRvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My4zLiBBdXRvcml6emF6aW9uZSBhbCBwYWdhbWVudG86PC9zdHJvbmc+IEluIGNhc28gZGkgbWFuY2F0YSBhdXRvcml6emF6aW9uZSByZWxhdGl2YSBhZCB1biBxdWFsc2lhc2kgcGFnYW1lbnRvLCBs4oCZT3JkaW5lIG5vbiB2aWVuZSBlbGFib3JhdG8gbyBub24gdmllbmUgY29tdW5pY2F0byBhbGxhIHBpYXR0YWZvcm1hLjxicj5cXG4gICAgICAgIDxzdHJvbmc+My40LiBFbGFib3JhemlvbmUgZGVsbOKAmU9yZGluZSBlIHJpZml1dG8gZGkgT3JkaW5pIGRhIHBhcnRlIGRlbCBwcm9mZXNzaW9uaXN0YTogPC9zdHJvbmc+QWxsYSByaWNlemlvbmUgZGVsbOKAmU9yZGluZSwgU1RBUkJPT0sgbmUgaW5pemlhIGzigJllbGFib3JhemlvbmUgY29uIGxhIHRyYXNtaXNzaW9uZSBkZWxsbyBzdGVzc28gYWkgcHJvZmVzc2lvbmlzdGkgaW50ZXJlc3NhdGkgZSBub3RpZmljYSBhbGzigJl1dGVudGUsIHRyYW1pdGUgc21zIGUgbWFpbCwgY2hlIGzigJlPcmRpbmUgw6ggc3RhdG8gYXNzZWduYXRvLiBTaSBzcGVjaWZpY2EgY2hlIHF1YWxzaWFzaSBwYWdpbmEgZGkgY29uZmVybWEgY2hlIGzigJl1dGVudGUgcG9zc2EgdmlzdWFsaXp6YXJlIHN1bCBTaXRvIGUgcXVhbHNpYXNpIGNvbmZlcm1hIGRpIE9yZGluZSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcmljZXZhIHRyYW1pdGUgZS1tYWlsIGluZGljYW5vIGVzY2x1c2l2YW1lbnRlIGNoZSBsJ09yZGluZSBkZWxs4oCZdXRlbnRlIMOoIHN0YXRvIGFzc2VnbmF0byBvIMOoIGluIGNvcnNvLiBTVEFSQk9PSyBpbmNvcmFnZ2lhIHR1dHRpIGkgcHJvcHJpIHByb2Zlc3Npb25pc3RpIGFkIGFjY2V0dGFyZSB0dXR0aSBnbGkgT3JkaW5pIGVkIGEgY29tdW5pY2FyZSB0ZW1wZXN0aXZhbWVudGUgZXZlbnR1YWxpIHJpZml1dGksIGUgY29tdW5pY2EgYWxs4oCZdXRlbnRlIChnZW5lcmFsbWVudGUgdHJhbWl0ZSBlLW1haWwpIG5vbiBhcHBlbmEgc2lhIHJhZ2lvbmV2b2xtZW50ZSBwb3NzaWJpbGUgb2duaSBldmVudHVhbGUgcmlmaXV0byBkYSBwYXJ0ZSBkZWwgcHJvZmVzc2lvbmlzdGEuIEluIG9nbmkgY2FzbywgaSBwcm9mZXNzaW9uaXN0aSBwb3Nzb25vIHNjZWdsaWVyZSBkaSByaWZpdXRhcmUgZ2xpIE9yZGluaSBpbiBxdWFsc2lhc2kgbW9tZW50byBwZXIgaWwgZmF0dG8gZGkgZXNzZXJlIGVjY2Vzc2l2YW1lbnRlIGltcGVnbmF0aSwgYSBjYXVzYSBkZWxsZSBjb25kaXppb25pIGF0bW9zZmVyaWNoZSBvIHBlciBxdWFsc2lhc2kgYWx0cmEgcmFnaW9uZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjMuNS4gRmluaXR1cmEgZGVsIHNlcnZpemlvOjwvc3Ryb25nPiBJIHRlbXBpIHN0aW1hdGkgcGVyIGkgc2Vydml6aSBkYWwgaW5pemlvIGEgZmluZSBsYXZvcmkgdmFyaWFubyB0cmEgMS0yIGdpb3JuaSBhIHNlY29uZGEgZGVsIHRpcG8gZGkgc2Vydml6aW8gb3JkaW5hdG8uIFNUQVJCT09LIGUgaSBwcm9mZXNzaW9uaXN0aSBub24gZ2FyYW50aXNjb25vIGNoZSBpIHNlcnZpemkgdmVycmFubm8gZmluaXRpIGVudHJvIGkgdGVtcGkgc3RpbWF0aS48L3A+XFxuICAgICAgICA8cD48c3Ryb25nPjQuIFBSRVpaTyBFIFBBR0FNRU5UTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NC4xLiBJVkEgZSBjb3N0aSBkaSBzZXJ2aXppbzo8L3N0cm9uZz4gSSBwcmV6emkgc29ubyBxdWVsbGkgaW5kaWNhdGkgc3VsIFNpdG8uIEkgcHJlenppIHNvbm8gY29tcHJlbnNpdmkgZGkgSVZBLiBUYWxpIGNvc3RpIHZlbmdvbm8gYWdnaXVudGkgYWxs4oCZaW1wb3J0byB0b3RhbGUgZG92dXRvLCBzZSBhcHBsaWNhYmlsaS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMi4gRXJyYXRhIGluZGljYXppb25lIGRlbCBwcmV6em86PC9zdHJvbmc+IElsIHByZXNlbnRlIFNpdG8gd2ViIGNvbnRpZW5lIHVuIHZhc3RvIG51bWVybyBkaSBtZW51IGVkIMOoIHNlbXByZSBwb3NzaWJpbGUgY2hlIGFsY3VuaSBkaSBlc3NpIHBvc3Nhbm8gcmVjYXJlIHVuYSBpbmRpY2F6aW9uZSBpbmVzYXR0YSBkZWwgcHJlenpvLiBRdWFsb3JhIGlsIHByZXp6byBlc2F0dG8gZGkgdW4gT3JkaW5lIHNpYSBwacO5IGVsZXZhdG8gZGVsIHByZXp6byBpbmRpY2F0byBzdWwgU2l0bywgU1RBUkJPT0sgbm9ybWFsbWVudGUgcHJvdnZlZGUgYSBjb250YXR0YXJlIGzigJl1dGVudGUgcHJpbWEgZGVsbGEgc3BlZGl6aW9uZSBkZWxsJ09yZGluZS4gSW4gdGFsIGNhc28sIG7DqSBTVEFSQk9PSyBuw6kgaWwgcHJvZmVzc2lvbmlzdGEgaW50ZXJlc3NhdG8gaGFubm8gYWxjdW4gb2JibGlnbyBkaSBhc3NpY3VyYXJlIGNoZSBsJ09yZGluZSB2ZW5nYSBmb3JuaXRvIGFsbOKAmXV0ZW50ZSBhbCBwcmV6em8gaW5mZXJpb3JlIGVycm9uZWFtZW50ZSBpbmRpY2F0byBuw6kgZGkgcmltYm9yc2FyZSBhbGzigJl1dGVudGUgbGEgZGlmZmVyZW56YSByaXNwZXR0byBhbCBwcmV6em8gZXJyYXRvLiBJbiBjYXNvIGlsIHByZXp6byBzaWEgZWNjZXNzaXZhbWVudGUgZWxldmF0byByaXNwZXR0byBhbCBwcmV6em8gb3JpZ2luYXJpYW1lbnRlIGNvbnZlbnV0byBlIGwndXRlbnRlIHNpYSB1biBjb25zdW1hdG9yZSBhaSBzZW5zaSBkZWwgQ29kaWNlIGRlbCBDb25zdW1vLCBsJ3V0ZW50ZSBhdnLDoCBmYWNvbHTDoCBkaSByZWNlZGVyZSBkYWxsJ09yZGluZS48YnI+XFxuICAgICAgICA8c3Ryb25nPjQuMy4gTW9kYWxpdMOgIGRpIHBhZ2FtZW50bzo8L3N0cm9uZz4gSWwgcGFnYW1lbnRvIGRlaSBzZXJ2aXppIGRldmUgZXNzZXJlIGVmZmV0dHVhdG8gbWVkaWFudGUgdW5hIGNhcnRhIGRpIGNyZWRpdG8vZGViaXRvLjxicj5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4gU0VSVklaSU8gQ0xJRU5USTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+NS4xIERpc3Bvc2l6aW9uaSBHZW5lcmFsaTo8L3N0cm9uZz4gU1RBUkJPT0sgY29uc2lkZXJhIGlsIFNlcnZpemlvIENsaWVudGkgZXN0cmVtYW1lbnRlIGltcG9ydGFudGUuIElsIFNlcnZpemlvIENsaWVudGkgY2VyY2EgZHVucXVlIGRpIHByZXN0YXJlIGFzc2lzdGVuemEgYWxs4oCZdXRlbnRlLCBxdWFuZG8gcG9zc2liaWxlLCBpbiBjYXNvIGRpIHByb2JsZW1pIGNvbiBsJ09yZGluZS4gTOKAmXV0ZW50ZSBwdcOyIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIFNlcnZpemlvIENsaWVudGkgYW5kYW5kbyBzdWxsYSBwYWdpbmEgaGVscCBkZWwgc2l0by48YnI+XFxuICAgICAgICA8c3Ryb25nPjUuMi4gTW9kaWZpY2EgbyBhbm51bGxhbWVudG8gZGVsbCdPcmRpbmU6PC9zdHJvbmc+IE92ZSBs4oCZdXRlbnRlIGRlc2lkZXJpIG1vZGlmaWNhcmUgbyBhbm51bGxhcmUgaWwgcHJvcHJpbyBPcmRpbmUgZG9wbyBjaGUgZXNzbyBzaWEgc3RhdGEgaW5vbHRyYXRvIGUgaWwgcmVsYXRpdm8gcGFnYW1lbnRvIGF1dG9yaXp6YXRvLCBs4oCZdXRlbnRlIGhhIGZhY29sdMOgIGRpIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSywgY29uIGxlIG1vZGFsaXTDoCBzb3ByYSBkZXNjcml0dGUsIGlsIHF1YWxlIHRlbnRlcsOgIGRpIGVudHJhcmUgaW4gY29udGF0dG8gY29uIGlsIHByb2Zlc3Npb25pc3RhIGFsIGZpbmUgZGkgY29tdW5pY2FyZSBsZSByaWNoaWVzdGUgZGVsIGNsaWVudGUuIE5vbiB2aSDDqCBhbGN1bmEgYXNzaWN1cmF6aW9uZSwgdHV0dGF2aWEsIHJpZ3VhcmRvIGFsIGZhdHRvIGNoZSBpbCBTZXJ2aXppbyBDbGllbnRpIFNUQVJCT09LIHNhcsOgIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEgbyBjaGUgaWwgcHJvZmVzc2lvbmlzdGEgYWNjZXR0ZXLDoCBsZSByaWNoaWVzdGUgZGVsbOKAmXV0ZW50ZSBpbiBxdWFudG8gaWwgcHJvY2Vzc28gZGkgZWxhYm9yYXppb25lIGRlbGwnT3JkaW5lIHBvdHJlYmJlIGF2ZXJlIGdpw6AgYXZ1dG8gaW5pemlvLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS4zLiBSZWNsYW1pIGUgZmVlZGJhY2sgZGEgcGFydGUgZGVnbGkgdXRlbnRpOjwvc3Ryb25nPiBOZWxs4oCZZXZlbnR1YWxpdMOgIGNoZSBs4oCZdXRlbnRlIG5vbiBzaWEgc29kZGlzZmF0dG8gZGVsbGEgcXVhbGl0w6AgZGkgdW4gcXVhbHNpYXNpIHNlcnZpemlvIG8gZGVsIHNlcnZpemlvIGZvcm5pdG8gZGEgdW4gcHJvZmVzc2lvbmlzdGEsIFNUQVJCT09LIGludml0YSBs4oCZdXRlbnRlIGEgZmFyIGNvbm9zY2VyZSBsYSBwcm9wcmlhIG9waW5pb25lIHRyYW1pdGUgaWwgU2l0bywgaW4gZm9ybWEgZGkgdmFsdXRhemlvbmksIGNvbW1lbnRpIGUgcmVjZW5zaW9uaSBjaGUgcmlmbGV0dGFubyBsYSBwcm9wcmlhIGVzcGVyaWVuemEuIExlIFJlY2Vuc2lvbmkgc29ubyB1bmEgcGFydGUgaW1wb3J0YW50ZSBkZWwgcHJvY2Vzc28gZGkgY29udHJvbGxvIHF1YWxpdMOgIGRpIFNUQVJCT09LLjxicj5cXG4gICAgICAgIDxzdHJvbmc+NS40LiBSaXNhcmNpbWVudG86PC9zdHJvbmc+IE5lbGzigJlldmVudHVhbGl0w6AgY2hlIGzigJl1dGVudGUgbm9uIHNpYSBzb2RkaXNmYXR0byBkZWxsYSBxdWFsaXTDoCBkaSB1biBxdWFsc2lhc2kgc2Vydml6aW8gbyBkZWwgc2Vydml6aW8gZm9ybml0byBkYSB1biBwcm9mZXNzaW9uaXN0YSBlIGRlc2lkZXJpIHJpY2hpZWRlcmUgdW4gcmltYm9yc28sIHVuYSByaWR1emlvbmUgcHJvcG9yemlvbmFsZSBkZWwgcHJlenpvIG8gcXVhbHNpYXNpIGFsdHJhIGZvcm1hIGRpIHJpc2FyY2ltZW50bywgw6ggdGVudXRvIGEgY29udGF0dGFyZSBkaXJldHRhbWVudGUgaWwgcHJvZmVzc2lvbmlzdGEgYWwgZmluZSBkaSBwcmVzZW50YXJlIGlsIHByb3ByaW8gcmVjbGFtbyBlLCBzZSBkZWwgY2FzbywgYWQgb3NzZXJ2YXJlIGxlIHByb2NlZHVyZSBkaSByZWNsYW1vIHByZXZpc3RlIGRhbCBwcm9mZXNzaW9uaXN0YSBzdGVzc28uIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gc2lhIGluIGdyYWRvIGRpIGNvbnRhdHRhcmUgaWwgcHJvZmVzc2lvbmlzdGEsIG8gcXVhbG9yYSBpbCBwcm9mZXNzaW9uaXN0YSByaWZpdXRpIGRpIG9jY3VwYXJzaSBkZWwgcmVjbGFtbyBkZWxs4oCZdXRlbnRlLCBxdWVzdOKAmXVsdGltbyBwdcOyIHJpdm9sZ2Vyc2kgYWwgU2Vydml6aW8gQ2xpZW50aSBTVEFSQk9PSyBjb24gbGUgbW9kYWxpdMOgIHNvcHJhIGRlc2NyaXR0ZSBlbnRybyA0OCBvcmUgZGFsbOKAmWlub2x0cm8gZGVsbCdPcmRpbmUgZSB1bm8gZGVpIENvbnN1bGVudGkgZGVsIFNlcnZpemlvIENsaWVudGkgU1RBUkJPT0sgdGVudGVyw6AgZGkgY29udGF0dGFyZSBpbCBwcm9mZXNzaW9uaXN0YSBhbCBmaW5lIGRpIHJpY2hpZWRlcmUgdW4gcmlzYXJjaW1lbnRvIHBlciBjb250byBkZWxs4oCZdXRlbnRlLiBTaSBmYSBwcmVzZW50ZSBjaGUgU1RBUkJPT0sgbm9uIGhhIGFsY3VuIGNvbnRyb2xsbyBzdWkgcHJvZmVzc2lvbmlzdGkgbsOpIHN1bGxhIHF1YWxpdMOgIGRlaSBzZXJ2aXppIG8gc3VsIHNlcnZpemlvIGZvcm5pdG8gZGFpIHByb2Zlc3Npb25pc3RpIHN0ZXNzaSBlIG5vbiDDqCBpbiBncmFkbyBkaSBmb3JuaXJlLCBuw6kgYXNzdW1lIGFsY3VuYSByZXNwb25zYWJpbGl0w6AgbyBpbXBlZ25vIGRpIGZvcm5pcmUsIGFsY3VuIHJpc2FyY2ltZW50byBpbiBmYXZvcmUgZGVsbOKAmXV0ZW50ZSBwZXIgY29udG8gZGkgcXVhbHNpYXNpIHByb2Zlc3Npb25pc3RhLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ni4gTElDRU5aQSBE4oCZVVNPPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz42LjEuIFVzbyBjb25zZW50aXRvOjwvc3Ryb25nPiBF4oCZIGNvbnNlbnRpdG8gYWxs4oCZdXRlbnRlIHV0aWxpenphcmUgaWwgU2l0byBub25jaMOpIHN0YW1wYXJlIGUgc2NhcmljYXJlIGRhbCBTaXRvIGVzdHJhdHRpIGRlbCBTaXRvIHN0ZXNzbyBwZXIgdXNvIHBlcnNvbmFsZSBub24gYXZlbnRlIGZpbmFsaXTDoCBjb21tZXJjaWFsaSBhbGxlIHNlZ3VlbnRpIGNvbmRpemlvbmk6PGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMS4gbOKAmXV0ZW50ZSBub24gZGV2ZSB1dGlsaXp6YXJlIGlsIFNpdG8gaW4gbW9kbyBpbXByb3ByaW8sIGl2aSBpbmNsdXNvIG1lZGlhbnRlIHRlY25pY2hlIGRpIHBpcmF0ZXJpYSBpbmZvcm1hdGljYSAoaGFja2luZykgbyBkaSBlc3RyYXppb25lIGluZm9ybWF0aXp6YXRhIGRpIGRhdGkgKHNjcmFwaW5nKS48L3N0cm9uZz4gPGJyPlxcbiAgICAgICAgPHN0cm9uZz42LjEuMi4gUmVzdHJpemlvbmkgZOKAmXVzbzo8L3N0cm9uZz4gU2Fsdm8gcGVyIHF1YW50byBwcmV2aXN0byBhbCBwYXJhZ3JhZm8gNi4xLCBpbCBwcmVzZW50ZSBTaXRvIG5vbiBwdcOyIGVzc2VyZSB1dGlsaXp6YXRvIGUgbmVzc3VuYSBzdWEgcGFydGUgcHXDsiBlc3NlcmUgcmlwcm9kb3R0YSBvIGFyY2hpdmlhdGEgaW4gYWxjdW4gYWx0cm8gc2l0byB3ZWIgbsOpIHB1w7IgZXNzZXJlIGluc2VyaXRvIGluIGFsY3VuIHNpc3RlbWEgbyBzZXJ2aXppbywgcHViYmxpY28gbyBwcml2YXRvLCBwZXIgaWwgcmVjdXBlcm8gZWxldHRyb25pY28gZGVsbGUgaW5mb3JtYXppb25pIHNlbnphIGxhIHByZXZlbnRpdmEgYXV0b3JpenphemlvbmUgc2NyaXR0YSBkaSBTVEFSQk9PSy48YnI+XFxuICAgICAgICA8c3Ryb25nPjYuMS4zLiBSaXNlcnZhIGRpIERpcml0dGk6PC9zdHJvbmc+IEkgZGlyaXR0aSBub24gZXNwbGljaXRhbWVudGUgY29uY2Vzc2kgbmVsIHByZXNlbnRlIFNpdG8gd2ViIHNvbm8gcmlzZXJ2YXRpLjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4gQUNDRVNTTyBBTCBTRVJWSVpJTzwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwPjxzdHJvbmc+Ny4xLiBEaXNwb25pYmlsaXTDoCBkZWwgU2l0bzo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBzaSBhZG9wZXJpIHBlciBmYXIgc8OsIGNoZSBs4oCZYWNjZXNzbyBhbCBTaXRvIHBvc3NhIGRpIG5vcm1hIGF2dmVuaXJlIHZlbnRpcXVhdHRybyBvcmUgc3UgdmVudGlxdWF0dHJvICgyNGgvMjQpLCBTVEFSQk9PSyBub24gYXNzdW1lIGFsY3VuIG9iYmxpZ28gYSByaWd1YXJkbyBlIG5vbiDDqCByZXNwb25zYWJpbGUgbmVpIGNvbmZyb250aSBkZWxs4oCZdXRlbnRlIG5lbCBjYXNvIGluIGN1aSBpbCBTaXRvLCBpbiBxdWFsc2lhc2kgbW9tZW50byBvIHBlciBwZXJpb2RpIGRpIHF1YWxzaWFzaSBkdXJhdGEsIG5vbiBzaWEgZGlzcG9uaWJpbGUuPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjEuIFNvc3BlbnNpb25lIGRlbGzigJlhY2Nlc3NvOjwvc3Ryb25nPiBM4oCZYWNjZXNzbyBhbCBwcmVzZW50ZSBTaXRvIHB1w7IgZXNzZXJlIHRlbXBvcmFuZWFtZW50ZSBzb3NwZXNvIGluIHF1YWxzaWFzaSBtb21lbnRvLCBhbmNoZSBzZW56YSBwcmVhdnZpc28uPGJyPlxcbiAgICAgICAgPHN0cm9uZz43LjIuIFNpY3VyZXp6YSBpbmZvcm1hdGljYTo8L3N0cm9uZz4gU2ViYmVuZSBTVEFSQk9PSyBhZG90dGkgbGUgbWlzdXJlIHByZXNjcml0dGUgcGVyIGxlZ2dlIHBlciBsYSB0dXRlbGEgZGVsbGUgaW5mb3JtYXppb25pIGltbWVzc2UsIGVzc2Egbm9uIMOoIGluIGdyYWRvIGRpIGdhcmFudGlyZSBsYSBzaWN1cmV6emEgZGVpIGRhdGkgdHJhc21lc3NpIGFsIFNpdG8gd2ViOyBsYSB0cmFzbWlzc2lvbmUgdmllbmUgcGVydGFudG8gZWZmZXR0dWF0YSBhIHJpc2NoaW8gZGVsbOKAmXV0ZW50ZS48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudC1wYWdlXFxcIiAqbmdJZj1cXFwic2VsZWN0VGFiID09PSAncHJpdmFjeSdcXFwiPlxcbiAgICAgICAgPHA+PHN0cm9uZz4xLiBJTkZPUk1BWklPTkkgUkFDQ09MVEUgREEgU1RBUkJPT0s8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cD4xLjEuIE5lbCB2aXNpdGFyZSBpbCBTaXRvIG8gbmVsbOKAmXV0aWxpenphcmUgaWwgU2Vydml6aW8gcGVyIGlub2x0cmFyZSB1biBPcmRpbmUgYWQgdW4gcHJvZmVzc2lvbmlzdGEgdHJhbWl0ZSBpbCBTaXRvLCDDqCBwb3NzaWJpbGUgY2hlIHZlbmdhIHJpY2hpZXN0byBkaSBmb3JuaXJlIGluZm9ybWF6aW9uaSBjaGUgcmlndWFyZGFubyBs4oCZdXRlbnRlLCBpdmkgaW5jbHVzbyBub21lLCByZWNhcGl0aSAocXVhbGkgbnVtZXJvIGRpIHRlbGVmb25vIGZpc3NvLCBkaSB0ZWxlZm9ubyBtb2JpbGUgZSBpbmRpcml6em8gZS1tYWlsKSBlIGRhdGkgcmVsYXRpdmkgYWwgcGFnYW1lbnRvIChxdWFsaSBpIGRhdGkgZGVsbGEgY2FydGEgZGkgY3JlZGl0byBvIGRpIGRlYml0bykuIFNUQVJCT09LIHB1w7IgaW5vbHRyZSByYWNjb2dsaWVyZSBpbmZvcm1hemlvbmkgcmVsYXRpdmUgYWxs4oCZdXRpbGl6em8gZGVsIFNpdG8gZSBkZWwgU2Vydml6aW8gZGEgcGFydGUgZGVsbOKAmXV0ZW50ZSBub25jaMOpIHB1w7IgcmFjY29nbGllcmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbOKAmXV0ZW50ZSBhIHBhcnRpcmUgZGFpIG1hdGVyaWFsaSAocXVhbGkgbWVzc2FnZ2kgZSByZWNlbnNpb25pKSBjaGUgbOKAmXV0ZW50ZSBzdGVzc28gcHViYmxpY2Egc3VsIFNpdG8gbyB0cmFzbWV0dGUgYWwgU2l0byBvIGNoZSBpbnZpYSBhIFNUQVJCT09LIHRyYW1pdGUgZS1tYWlsIG8gcGVyIGxldHRlcmEuPC9wPlxcbiAgICAgICAgPHA+PHN0cm9uZz4yLiBVU08gREVMTEUgSU5GT1JNQVpJT05JPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHA+Mi4xLiBMZSBpbmZvcm1hemlvbmkgZGVnbGkgdXRlbnRpIGNvbnNlbnRvbm8gYSBTVEFSQk9PSyBkaSBmb3JuaXJlIGFnbGkgdXRlbnRpIHN0ZXNzaSBs4oCZYWNjZXNzbyBhbGxlIHNlemlvbmkgZGVsIFNpdG8gY3VpIHNvbm8gaW50ZXJlc3NhdGkgZSBkaSBmb3JuaXJlIGlsIFNlcnZpemlvLiBFc3NlIG1ldHRvbm8gaW5vbHRyZSBTVEFSQk9PSyBpbiBncmFkbyBkaSBmYXR0dXJhcmUgZ2xpIGltcG9ydGkgZG92dXRpIGUgY29uc2VudG9ubyBhIFNUQVJCT09LIG8gYWQgdW4gcHJvZmVzc2lvbmlzdGEgY3VpIGzigJl1dGVudGUgYWJiaWEgaW5vbHRyYXRvIHVuIE9yZGluZSBkaSBjb250YXR0YXJlIGzigJl1dGVudGUgaW4gbWVyaXRvIGFsIFNlcnZpemlvLCBvdmUgbmVjZXNzYXJpby4gQWQgZXNlbXBpbywgU1RBUkJPT0sgZS9vIGlsIHByb2Zlc3Npb25pc3RhIHBvc3Nvbm8gdXRpbGl6emFyZSBpIGRhdGkgZGVsbOKAmXV0ZW50ZSBwZXIgZm9ybmlyZSBhbGxvIHN0ZXNzbyBhZ2dpb3JuYW1lbnRpIHN1bGxvIHN0YXRvIGRlbGwnT3JkaW5lIG8gYWx0cmUgaW5mb3JtYXppb25pIHJlbGF0aXZlIGFsbGEgc3Rlc3NhIG1lZGlhbnRlIGUtbWFpbCwgcGVyIHRlbGVmb25vIGZpc3NvIG8gbW9iaWxlIG8gdHJhbWl0ZSBtZXNzYWdnaXN0aWNhIG1vYmlsZS4gSW5vbHRyZSwgU1RBUkJPT0sgdXRpbGl6emEgZWQgYW5hbGl6emEgbGUgaW5mb3JtYXppb25pIHJhY2NvbHRlIGFsIGZpbmUgZGkgZ2VzdGlyZSwgc29zdGVuZXJlLCBtaWdsaW9yYXJlIGUgc3ZpbHVwcGFyZSBsYSBwcm9wcmlhIGF0dGl2aXTDoCBpbXByZW5kaXRvcmlhbGUsIHBlciBldmVudHVhbGkgYWx0cmUgZmluYWxpdMOgIHN0YXRpc3RpY2hlIG8gYW5hbGl0aWNoZSBub25jaMOpIHBlciBjb250cmlidWlyZSBhbGxhIHByZXZlbnppb25lIGRpIGZyb2RpLiBOZWkgY2FzaSBpbiBjdWkgc2lhIG9wcG9ydHVubywgb3JhIGUgaW4gZnV0dXJvLCBs4oCZdXRlbnRlIHBvdHJlYmJlIGF2ZXJlIGxhIGNhcGFjaXTDoCBkaSBlc3ByaW1lcmUgbGUgcHJvcHJpZSBwcmVmZXJlbnplIHJpZ3VhcmRvIGFsbOKAmXV0aWxpenpvIGRlaSBwcm9wcmkgZGF0aSBzZWNvbmRvIHF1YW50byBwcmV2aXN0byBuZWxsYSBwcmVzZW50ZSBJbmZvcm1hdGl2YSBpbiBtYXRlcmlhIGRpIFByaXZhY3kgZSBkaSBlc2VyY2l0YXJsYSB0cmFtaXRlIGxhIG1ldG9kb2xvZ2lhIHByZXNjZWx0YSBkYWxs4oCZdXRlbnRlIHBlciBs4oCZdXRpbGl6em8gZGVsIFNlcnZpemlvLCBhZCBlc2VtcGlvLCBpbiBtb2RhbGl0w6AgbW9iaWxlLCB0cmFtaXRlIGFwcGxpY2F6aW9uaSBtb2JpbGkgbyBs4oCZZXZlbnR1YWxlIHJhcHByZXNlbnRhemlvbmUgZGVsIFNpdG8uPGJyPlxcbiAgICAgICAgMi4yLiBTVEFSQk9PSyBwdcOyIHV0aWxpenphcmUgbGUgaW5mb3JtYXppb25pIHBlciBjb250YXR0YXJlIGlsIGNsaWVudGUgYWwgZmluZSBkaSBjb25vc2NlcmUsIGNvbiBpbCBzdW8gY29uc2Vuc28sIGxlIHN1ZSBvcGluaW9uaSBzdWwgU2Vydml6aW8gZWQgb2NjYXNpb25hbG1lbnRlIGRpIGluZm9ybWFybG8gZGVsbGUgbW9kaWZpY2hlIG8gZGVnbGkgc3ZpbHVwcGkgaW1wb3J0YW50aSBjaGUgcmlndWFyZGFubyBpbCBTaXRvIG8gaWwgU2Vydml6aW8gc3VkZGV0dG8uPGJyPlxcbiAgICAgICAgMi4zLiBTVEFSQk9PSyBwb3Ryw6AgdXRpbGl6emFyZSBs4oCZaW5kaXJpenpvIGVtYWlsIGZvcm5pdG8gZGFsbOKAmXV0ZW50ZSBkZWwgU2l0byBhbCBtb21lbnRvIGRlbGzigJlhY3F1aXN0byBkaSBwcm9kb3R0aSBpbiB2ZW5kaXRhIHN1bCBTaXRvIHBlciBmYXIgY29ub3NjZXJlIGFsbG8gc3Rlc3NvIHV0ZW50ZSBpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSywgc2ltaWxpIGEgcXVlbGxpIGdpw6AgYWNxdWlzdGF0aSwgY2hlIHBvc3Nhbm8gcmlzY3VvdGVyZSBpbCBzdW8gaW50ZXJlc3NlLiBM4oCZdXRlbnRlIHBvdHLDoCBpbiBvZ25pIG1vbWVudG8sIGdyYXR1aXRhbWVudGUgZSBjb24gZWZmZXR0byBpbW1lZGlhdG8gb3Bwb3JzaSBhbGzigJl1dGlsaXp6byBkZWwgcHJvcHJpbyBpbmRpcml6em8gZW1haWwgcGVyIGxhIHJpY2V6aW9uZSBkaSB0YWxlIG1hdGVyaWFsZSBpbmZvcm1hdGl2byBjbGljY2FuZG8gc3VsbOKAmWFwcG9zaXRvIGxpbmsgaW5zZXJpdG8gaW4gY2FsY2UgYSBjaWFzY3VuYSBlbWFpbCByaWNldnV0YS4gSW4gYWx0ZXJuYXRpdmEsIGzigJl1dGVudGUgcG90csOgIG9wcG9yc2kgYSB0YWxlIHRyYXR0YW1lbnRvIGFuY2hlIG1vZGlmaWNhbmRvIGxlIHByZWZlcmVuemUgZGFsbGEgcmVsYXRpdmEgc2V6aW9uZSBkZWwgcHJvcHJpbyBwcm9maWxvLiBQZXIgZ2VzdGlyZSBsZSBub3RpZmljaGUsIGzigJl1dGVudGUgZG92csOgIGFjY2VkZXJlIGFsbGEgcGFnaW5hIGRlbGxlIGltcG9zdGF6aW9uaSBkZWwgc3VvIHRlbGVmb25vIG8gdGFibGV0IGUgbW9kaWZpY2FyZSBsJ2F1dG9yaXp6YXppb25lIGFsbGUgbm90aWZpY2hlIHBlciBsJ2FwcGxpY2F6aW9uZSBTVEFSQk9PSy4gSW4gY2FzbyBkaSBkaXNhdHRpdmF6aW9uZSBkZWxsZSBub3RpZmljaGUsIGzigJl1dGVudGUgbm9uIHBvdHLDoCBwacO5IHJpY2V2ZXJlIGFnZ2lvcm5hbWVudGkgc3VpIHN1b2kgb3JkaW5pIHZpYSBub3RpZmljaGUuPGJyPlxcbiAgICAgICAgMi40LiBTZSBjb25zZW50aXRvIGRhbGzigJl1dGVudGUgZGVsIFNpdG8sIFNUQVJCT09LIHBvdHLDoCB1dGlsaXp6YXJlIGkgZGF0aSBwZXIgZmFyIGNvbm9zY2VyZSBhbGzigJl1dGVudGUgc3VkZGV0dG8gZ2xpIGFsdHJpIHByb2RvdHRpIGUgc2Vydml6aSBkaSBTVEFSQk9PSyBjaGUgcG9zc2FubyByaXNjdW90ZXJlIGlsIHN1byBpbnRlcmVzc2UsIGl2aSBpbmNsdXNpIHNlcnZpemkgY2hlIHBvc3Nhbm8gZXNzZXJlIG9nZ2V0dG8gZGkgZGlyZWN0IG1hcmtldGluZyBtZWRpYW50ZSBzaXN0ZW1pIGRpIG1lc3NhZ2dpc3RpY2EgdHJhbWl0ZSBjZWxsdWxhcmUgZSBhdHRyYXZlcnNvIGxlIG5vdGlmaWNoZS48YnI+XFxuICAgICAgICAyLjUuIFF1YWxvcmEgbOKAmXV0ZW50ZSBub24gZGVzaWRlcmkgcGnDuSBjaGUgaSBzdW9pIGRhdGkgc2lhbm8gdXRpbGl6emF0aSBkYSBTVEFSQk9PSyBuZWkgbW9kaSBzb3ByYSBpbmRpY2F0aSBvIGNhbWJpIGlkZWEgcmlndWFyZG8gYWxsYSBwb3NzaWJpbGl0w6AgZGkgZXNzZXJlIGNvbnRhdHRhdG8gaW4gZnV0dXJvLCBzaSBwcmVnYSBkaSBmYXJsbyBzYXBlcmUgYSBTVEFSQk9PSyB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPGJyPlxcbiAgICAgICAgMi42LiBRdWFsb3JhIGzigJl1dGVudGUgbm9uIGRlc2lkZXJpIHBpw7kgY2hlIGkgc3VvaSBkYXRpIHNpYW5vIHV0aWxpenphdGkgZGEgU1RBUkJPT0sgbmVpIG1vZGkgc29wcmEgaW5kaWNhdGkgbyBjYW1iaSBpZGVhIHJpZ3VhcmRvIGFsbGEgcG9zc2liaWxpdMOgIGRpIGVzc2VyZSBjb250YXR0YXRvIGluIGZ1dHVybywgc2kgcHJlZ2EgZGkgb3Bwb3JzaSBhbCB0cmF0dGFtZW50byBuZWkgbW9kaSBzdSBpbmRpY2F0aS4gSW4gbWFuY2FuemEsIMOoIHBvc3NpYmlsZSBpbmZvcm1hcmUgaW4gb2duaSBtb21lbnRvIGZhcmxvIHNhcGVyZSBhIFNUQVJCT09LIGRlbGxhIHByb3ByaWEgZGVjaXNpb25lLCB1dGlsaXp6YW5kbyBpIHJlY2FwaXRpIGluZGljYXRpIGFsIHN1Y2Nlc3Npdm8gYXJ0aWNvbG8gOCBlL28gbW9kaWZpY2FuZG8gY29ycmlzcG9uZGVudGVtZW50ZSBpbCBwcm9wcmlvIHByb2ZpbG8uPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtcGFnZVxcXCIgKm5nSWY9XFxcInNlbGVjdFRhYiA9PT0gJ2hlbHAnXFxcIj5cXG4gICAgICAgIDxwPkhhaSBiaXNvZ25vIGRpIGFpdXRvPyA8YnI+XFxuICAgICAgICBTY3JpdmkgdW5hIG1haWwgaGFyYWxkLmJyZWd1QHN0YXJib29rLmNvIGUgdGkgcmlzcG9uZGVyZW1vIG5lbCBwacO5IGJyZXZlIHRlbXBvIHBvc3NpYmlsZS48L3A+XFxuICAgICAgICA8cD5WdW9pIGVudHJhcmUgYSBmYXIgcGFydGUgZGkgU1RBUkJPT0s/IEF1bWVudGEgaWwgbnVtZXJvIGRlaSB0dW9pIGNsaWVudGkgcGFnYW50aSBlIHJpc3Bhcm1pYSBzdWkgY29zdGkgZGVsIHRyYXNwb3J0by48L3A+XFxuICAgICAgICA8cD5QZXIgcmljaGllZGVyZSBpbmZvcm1hemlvbmk6PC9wPlxcbiAgICAgICAgPHA+Q2VsbHVsYXJlOiArMzkgMzI3MjQxNTAyODxicj5cXG4gICAgICAgIEVtYWlsOiBoYXJhbGQuYnJlZ3VAc3RhcmJvb2suY288L3A+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCAhPT0gJydcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+PC9kaXY+XFxuPCEtLSBDaGFuZ2UgcGFzc3dvcmQgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiICpuZ0lmPVxcXCJhY3RpdmVQb3B1cCA9PT0gJ2NoYW5nZVBhc3N3b3JkJ1xcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJsb2dpbi1mb3JtXFxcIiAjY2hhbmdlUGFzc3dvcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGNoYW5nZVBhc3N3b3JkRXJyb3IuY3VycmVudFBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiY3VycmVudFBhc3N3b3JkXFxcIj5MYSB0dWEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY3VycmVudFBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiY2hhbmdlUGFzc3dvcmREYXRhLmN1cnJlbnRQYXNzd29yZFxcXCIgI2N1cnJlbnRQYXNzd29yZD1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5MYSB0dWEgcGFzc3dvcmQgYXR0dWFsZSDDqCByaWNoaWVzdGE8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJuZXdQYXNzd29yZFxcXCI+TnVvdmEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwibmV3UGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJuZXdQYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5uZXdQYXNzd29yZFxcXCIgI25ld1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogY2hhbmdlUGFzc3dvcmRFcnJvci5wYXNzd29yZENvbmZpcm19XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiPlJpcGV0aSBsYSBudW92YSBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJwYXNzd29yZENvbmZpcm1cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImNoYW5nZVBhc3N3b3JkRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNwYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQobmV3UGFzc3dvcmQudmFsdWUsIHBhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiIWNoYW5nZVBhc3N3b3JkRm9ybS5mb3JtLnZhbGlkXFxcIiAoY2xpY2spPVxcXCJjaGFuZ2VQYXNzd29yZChjdXJyZW50UGFzc3dvcmQudmFsdWUsIG5ld1Bhc3N3b3JkLnZhbHVlLCBwYXNzd29yZENvbmZpcm0udmFsdWUpXFxcIj5DYW1iaWEgcGFzc3dvcmQ8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZGFyay1zY3JlZW5cXFwiIFtAc2hhZG93U3RhdGVdPVxcXCJzaGFkb3dTdGF0ZVxcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIj48L2Rpdj5cXG48IS0tIExvZ2luIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGxvZ2luUG9wdXBTdGF0ZV09XFxcImxvZ2luUG9wdXBTdGF0ZVxcXCI+XFxuICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPi0tPlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiYWxlcnQtaWNuXFxcIj48L2Rpdj4tLT5cXG4gICAgPCEtLTxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+LS0+XFxuICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+U2kgw6ggdmVyaWZpY2F0byB1biBlcnJvcmUhPC9kaXY+LS0+XFxuICAgICAgPCEtLTxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD4tLT5cXG4gICAgPCEtLTwvZGl2Pi0tPlxcbiAgPCEtLTwvZGl2Pi0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxwPjxzcGFuPkVycm9yZSE8L3NwYW4+IHt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPkFjY2VkaTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImxvZ2luLWZvcm1cXFwiICNsb2dpbkZvcm09XFxcIm5nRm9ybVxcXCIgKGtleXVwLmVudGVyKT1cXFwibG9naW4oZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogbG9naW5FcnJvci5lbWFpbH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5JbmRpcml6em8gZW1haWw8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5lbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja0VtYWlsKCdsb2dpbicsIGVtYWlsLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrRW1haWwoJ2xvZ2luJywgZW1haWwudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluZGlyaXp6byBlbWFpbCBub24gdmFsaWRvPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBsb2dpbkVycm9yLnBhc3N3b3JkfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkIDxhIGNsYXNzPVxcXCJyZWNvdmVyeVxcXCIgKGNsaWNrKT1cXFwiZ2V0UG9wdXAoJ3JlY292ZXJ5JylcXFwiPlBhc3N3b3JkIGRpbWVudGljYXRhPzwvYT48L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcImxvZ2luRGF0YS5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdsb2dpbicsIHBhc3N3b3JkLnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcImNoZWNrTm9uRW1wdHkoJ2xvZ2luJywgcGFzc3dvcmQudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPkluc2VyaXNjaSBsYSB0dWEgcGFzc3dvcmQ8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiBocmVmPVxcXCIjXFxcIiAoY2xpY2spPVxcXCJsb2dpbihlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXFxcIj5BY2NlZGk8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+LS0+XFxuICAgICAgPCEtLTxzcGFuPlNlaSBudW92byBzdSBTdGFyYm9vaz88L3NwYW4+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiAoY2xpY2spPVxcXCJnZXRQb3B1cCgncmVnaXN0cmF0aW9uJylcXFwiPkNyZWEgaWwgdHVvIGFjY291bnQgU3RhcmJvb2s8L2E+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICA8c3Bhbj5vPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICAgIDxpPjwvaT5cXG4gICAgICAgIENvbnRpbnVhIGNvbiBGYWNlYm9va1xcbiAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWdpc3RyYXRpb24gcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAcmVnaXN0cmF0aW9uUG9wdXBTdGF0ZV09XFxcInJlZ2lzdHJhdGlvblBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxhcHAtbG9hZGluZyAqbmdJZj1cXFwiaXNQb3B1cExvYWRpbmdcXFwiPjwvYXBwLWxvYWRpbmc+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPk51b3ZvIGFjY291bnQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWdpc3RyYXRpb24tZm9ybVxcXCIgI3JlZ2lzdHJhdGlvbkZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IubmFtZX1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ05hbWVcXFwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEubmFtZVxcXCIgI3JlZ05hbWU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ3JlZ2lzdHJhdGlvbk5hbWUnLCByZWdOYW1lLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgaWwgbm9tZSBjb21wbGV0bzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGhvbmV9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWdQaG9uZVxcXCI+Q2VsbHVsYXJlPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ1Bob25lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcInJlZ2lzdHJhdGlvbkRhdGEucGhvbmVcXFwiICNyZWdQaG9uZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tOb25FbXB0eSgncmVnaXN0cmF0aW9uUGhvbmUnLCByZWdQaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+SW5zZXJpc2NpIG51bWVybyBjZWxsdWxhcmU8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlZ2lzdHJhdGlvbkVycm9yLmVtYWlsfVxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwicmVnRW1haWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcInJlZ0VtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJyZWdpc3RyYXRpb25EYXRhLmVtYWlsXFxcIiAjcmVnRW1haWw9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrRW1haWwoJ3JlZ2lzdHJhdGlvbicsIHJlZ0VtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogcmVnaXN0cmF0aW9uRXJyb3IucGFzc3dvcmRGaXJzdH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWdQYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZFxcXCIgI3JlZ1Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdyZWdpc3RyYXRpb25QYXNzd29yZCcsIHJlZ1Bhc3N3b3JkLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbnNlcmlzY2kgdW5hIHBhc3N3b3JkPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiByZWdpc3RyYXRpb25FcnJvci5wYXNzd29yZH1cXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcInJlZ1Bhc3N3b3JkQ29uZmlybVxcXCI+RGkgbnVvdm8gbGEgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgIDxpbnB1dCBpZD1cXFwicmVnUGFzc3dvcmRDb25maXJtXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRDb25maXJtXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVnaXN0cmF0aW9uRGF0YS5wYXNzd29yZENvbmZpcm1cXFwiICNyZWdQYXNzd29yZENvbmZpcm09XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrUGFzc3dvcmQocmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+TGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm88L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0cmF0aW9uKHJlZ05hbWUudmFsdWUsIHJlZ1Bob25lLnZhbHVlLCByZWdFbWFpbC52YWx1ZSwgcmVnUGFzc3dvcmQudmFsdWUsIHJlZ1Bhc3N3b3JkQ29uZmlybS52YWx1ZSlcXFwiPkNyZWEgYWNjb3VudDwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tbm90aWNlXFxcIj5BY2NlZGVuZG8gZGljaGlhcmkgZGkgYXZlciBsZXR0byBlIGFjY2V0dGkgbGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL2NvbmRpdGlvbnNcXFwiPmNvbmRpemlvbmkgZ2VuZXJhbGk8L2E+IGUgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiByb3V0ZXJMaW5rPVxcXCJwcm9maWxlL3ByaXZhY3lcXFwiPmzigJlpbmZvcm1hdGl2YSBzdWxsYSBwcml2YWN5PC9hPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiZm9ybS1kZXNjcmlwdGlvblxcXCI+XFxuICAgIDxzcGFuPm88L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcmVnaXN0cmF0aW9uXFxcIj5cXG4gICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYWNlYm9va1xcXCIgKGNsaWNrKT1cXFwiZmFjZWJvb2tMb2dpbigpXFxcIj5cXG4gICAgICA8aT48L2k+XFxuICAgICAgQ29udGludWEgY29uIEZhY2Vib29rXFxuICAgIDwvYT5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwibG9naW4tb2ZmZXIgcmVnaXN0cmF0aW9uXFxcIj5IYWkgZ2lhIHVuIGFjY291bnQgc3UgU3RhcmJvb2s/IDxhIChjbGljayk9XFxcImdldFBvcHVwKCdsb2dpbicpXFxcIj5BY2NlZGk8L2E+PC9kaXY+XFxuPC9kaXY+XFxuXFxuPCEtLSBSZWNvdmVyeSBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0ByZWNvdmVyeVBvcHVwU3RhdGVdPVxcXCJyZWNvdmVyeVBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+UmVjdXBlcmEgcGFzc3dvcmQ8L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJyZWNvdmVyeS1mb3JtXFxcIiAjcmVjb3ZlcnlGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IHJlY292ZXJ5RXJyb3IuZW1haWx9XFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJyZWNvdmVyeUVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJyZWNvdmVyeUVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwicmVjb3ZlcnlEYXRhLmVtYWlsXFxcIiAjcmVjb3ZlcnlFbWFpbD1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFbWFpbCgncmVjb3ZlcnknLCByZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImVycm9yXFxcIj5JbmRpcml6em8gZW1haWwgbm9uIHZhbGlkbzwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWNvdmVyeShyZWNvdmVyeUVtYWlsLnZhbHVlKVxcXCI+SW52aWEgZW1haWw8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICA8L2Zvcm0+XFxuICA8ZGl2IGNsYXNzPVxcXCJsb2dpbi1vZmZlclxcXCI+SGFpIGdpYSB1biBhY2NvdW50IHN1IFN0YXJib29rPyA8YSAoY2xpY2spPVxcXCJnZXRQb3B1cCgnbG9naW4nKVxcXCI+QWNjZWRpPC9hPjwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gQ29uZmlybSBPcmRlciBwb3B1cCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnbmV3LXZlcnNpb24nOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYScgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnY29uZmVybWFFbmQnIHx8IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2FkZFByaWNlRW5kJ31cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWxlcnQtYmxvY2tcXFwiICpuZ0lmPVxcXCJmb3JtRXJyb3JcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1pY25cXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1jb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3tmb3JtRXJyb3IudGl0bGV9fTwvZGl2PlxcbiAgICAgIDxwPnt7Zm9ybUVycm9yLm1lc3NhZ2V9fTwvcD5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInBvcHVwLXNwaW5uZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYSdcXFwiPlxcbiAgICA8c3ZnIHdpZHRoPSc0MHB4JyBoZWlnaHQ9JzQwcHgnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIiBjbGFzcz1cXFwidWlsLXJpbmdcXFwiPlxcbiAgICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBmaWxsPVxcXCJub25lXFxcIiBjbGFzcz1cXFwiYmtcXFwiPjwvcmVjdD5cXG4gICAgICA8Y2lyY2xlIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NVxcXCIgc3Ryb2tlLWRhc2hhcnJheT1cXFwiMTY5LjY0NjAwMzI5Mzg0ODgyIDExMy4wOTczMzU1MjkyMzI1N1xcXCIgc3Ryb2tlPVxcXCIjM0I1NjhEXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEwXFxcIj5cXG4gICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgICAgPC9jaXJjbGU+XFxuICAgIDwvc3ZnPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJzdWNjZXNzLWljb25cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdjb25mZXJtYUVuZCcgfHwgY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2VFbmQnXFxcIj48c3Bhbj48L3NwYW4+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiIFtuZ0NsYXNzXT1cXFwieyd3aXRob3V0LW1lc3NhZ2UnOiBjb25maXJtUG9wdXBEYXRhLnR5cGUgPT09ICdhZGRQcmljZUVuZCd9XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50aXRsZSAhPT0gJydcXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gIDxmb3JtIGNsYXNzPVxcXCJjb25maXJtLW9yZGVyLWZvcm1cXFwiICNjb25maXJtT3JkZXJGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8cCAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlICE9PSAnbmV3T3JkZXInICYmIGNvbmZpcm1Qb3B1cERhdGEudHlwZSAhPT0gJ25ld09yZGVyRW5kJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2NvbmZlcm1hLWZpbmlzaCc6IGNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ2NvbmZlcm1hRW5kJ31cXFwiPnt7IGNvbmZpcm1Qb3B1cERhdGEudGV4dCB9fTwvcD5cXG4gICAgPHAgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyRW5kJ1xcXCIgY2xhc3M9XFxcImNvbmZpcm0tZW5kXFxcIj57eyBjb25maXJtUG9wdXBEYXRhLnRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm9yZGVycy1saXN0XFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS50eXBlID09PSAnbmV3T3JkZXInXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJvcmRlci1pdGVtXFxcIiAqbmdGb3I9XFxcImxldCBwcm9kdWN0IG9mIGNvbmZpcm1Qb3B1cERhdGEuZGF0YVxcXCI+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J3NlcnZpY2UnXFxcIiBjbGFzcz1cXFwic2VydmljZS1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpICpuZ0lmPVxcXCJwcm9kdWN0LnByaWNlICE9PSAnJ1xcXCI+4oKse3sgcHJvZHVjdC5wcmljZSAvIDEwMCB9fTwvaT48L3NwYW4+IC0tPlxcbiAgICAgICAgPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0nc2VydmljZSdcXFwiIGNsYXNzPVxcXCJzZXJ2aWNlLWl0ZW1cXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0gPGkgKm5nSWY9XFxcInByb2R1Y3QucHJpY2UgIT09ICcnXFxcIj7igqx7eyBwcm9kdWN0LnByaWNlIC8gMTAwIH19PC9pPjwvc3Bhbj5cXG4gICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XFxcInByb2R1Y3QudHlwZSA9PT0naXRlbSdcXFwiPnt7IHByb2R1Y3QucHJvZHVjdE5hbWUgfX0ge3sgcHJvZHVjdC5pdGVtTmFtZSB9fSA8aSAqbmdJZj1cXFwicHJvZHVjdC5wcmljZSAhPT0gJydcXFwiPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPiAtLT5cXG4gICAgICAgIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fSB7eyBwcm9kdWN0LnN5bWJvbCB9fTwvaT48L3NwYW4+XFxuICAgICAgICA8IS0tIDxzcGFuICpuZ0lmPVxcXCJwcm9kdWN0LnR5cGUgPT09J2l0ZW0nXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19PGk+e3sgcHJvZHVjdC5pdGVtTmFtZSB9fXt7IHByb2R1Y3Quc3ltYm9sIH19PC9pPjwvc3Bhbj4gLS0+XFxuICAgICAgICA8c3BhbiAqbmdJZj1cXFwicHJvZHVjdC50eXBlID09PSd0b3RhbCdcXFwiIGNsYXNzPVxcXCJ0b3RhbC1pdGVtXFxcIj57eyBwcm9kdWN0LnByb2R1Y3ROYW1lIH19IDxpPuKCrHt7IHByb2R1Y3QucHJpY2UgLyAxMDAgfX08L2k+PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24tbGlzdFxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEudHlwZSA9PT0gJ25ld09yZGVyJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+RGF0YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGF0ZSB9fTwvZGl2PlxcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiaW5mb3JtYXRpb24taXRlbVxcXCI+PHNwYW4+T3JlOjwvc3Bhbj4ge3sgY29uZmlybVBvcHVwRGF0YS5pbmZvcm1hdGlvbi50aW1lIH19PC9kaXY+IC0tPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiPjxzcGFuPkluZGlyaXp6bzo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uYWRkcmVzcyB9fTwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImluZm9ybWF0aW9uLWl0ZW1cXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmluZm9ybWF0aW9uLmRlc2NyaXB0aW9uICE9PSAnJ1xcXCI+PHNwYW4+Tm90YTo8L3NwYW4+IHt7IGNvbmZpcm1Qb3B1cERhdGEuaW5mb3JtYXRpb24uZGVzY3JpcHRpb24gfX08L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjb25maXJtT3JkZXIoY29uZmlybVBvcHVwRGF0YS5pZClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ0NvbmZlcm1hJ1xcXCI+Q29uZmVybWE8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiY2FuY2VsT3JkZXIoY29uZmlybVBvcHVwRGF0YS5pZClcXFwiICpuZ0lmPVxcXCJjb25maXJtUG9wdXBEYXRhLmJ1dHRvbiA9PT0gJ0FubnVsbGEgb3JkaW5lJ1xcXCI+QW5udWxsYSBvcmRpbmU8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmdcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVhY3RpdmF0ZU9yZGVyKGNvbmZpcm1Qb3B1cERhdGEuaWQpXFxcIiAqbmdJZj1cXFwiY29uZmlybVBvcHVwRGF0YS5idXR0b24gPT09ICdSaWF0dGl2YSBvcmRpbmUnXFxcIj5SaWF0dGl2YSBvcmRpbmU8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgbmV3LW9yZGVyLWJ0blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjb25maXJtTmV3T3JkZXIoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvJ1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxvY2tcXFwiPjwvaT4gUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvPC9idXR0b24+XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnUHJvY2VkaSBjb24gbOKAmWFjcXVpc3RvJ1xcXCIgY2xhc3M9XFxcImNvbmZpcm0tYnV0dG9uLW5vdGljZVxcXCI+VmVycmFpIG5vdGlmaWNhdG8gY29uIHVuIHNtcyBlIG1haWwgYWQgYWNxdWlzdG8gZWZmZXR0dWF0bzwvc3Bhbj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXdhcm5pbmcgbG9nb3V0LWJ0blxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnbG9nb3V0J1xcXCI+RXNjaTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uID09PSAnbG9nb3V0J1xcXCI+QW5udWxsYTwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgKm5nSWY9XFxcImNvbmZpcm1Qb3B1cERhdGEuYnV0dG9uICE9PSAnbG9nb3V0J1xcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcbjwhLS0gQ29uZmlybSBPcmRlciBGaW5pc2ggcG9wdXAgLS0+XFxuPGRpdiBjbGFzcz1cXFwicG9wdXBcXFwiIFtAY29uZmlybUZpbmlzaFBvcHVwU3RhdGVdPVxcXCJjb25maXJtRmluaXNoUG9wdXBTdGF0ZVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJmaW5pc2gtbWVzc2FnZVxcXCIgW25nQ2xhc3NdPVxcXCJ7aXNMZWZ0OiBjb25maXJtRmluaXNoUG9wdXBEYXRhLnR5cGUgPT09ICdsZWZ0J31cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPnt7IGNvbmZpcm1GaW5pc2hQb3B1cERhdGEudGl0bGUgfX08L2Rpdj5cXG4gICAgPHA+e3sgY29uZmlybUZpbmlzaFBvcHVwRGF0YS50ZXh0IH19PC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9zZVBvcHVwKClcXFwiPkNoaXVkaTwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjwhLS0gRmluaXNoIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGZpbmlzaFBvcHVwU3RhdGVdPVxcXCJmaW5pc2hQb3B1cFN0YXRlXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImZpbmlzaC1tZXNzYWdlXFxcIiBbbmdDbGFzc109XFxcInsnaXNGb3JtJzogZmluaXNoUG9wdXBEYXRhLnR5cGUgIT09ICcnfVxcXCI+XFxuICAgIDxhIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCIgY2xhc3M9XFxcImNsb3NlLXBvcHVwXFxcIj48L2E+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgZmluaXNoUG9wdXBEYXRhLnRpdGxlIH19PC9kaXY+XFxuICAgIDxwICpuZ0Zvcj1cXFwibGV0IHRleHQgb2YgZmluaXNoUG9wdXBEYXRhLnRleHRcXFwiPnt7IHRleHQgfX08L3A+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBob25lLWZvcm1cXFwiICpuZ0lmPVxcXCJmaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ3Bob25lJ1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBwaG9uZS1maWVsZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2lzRXJyb3InOiBlbnRlclBob25lRm9ybUVycm9yLnBob25lfVxcXCI+XFxuICAgICAgICA8bGFiZWw+TnVtZXJvIGRpIHRlbGVmb25vPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBuYW1lPVxcXCJwaG9uZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcImVudGVyUGhvbmVGb3JtLnBob25lXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiAjcGhvbmU9XFxcIm5nTW9kZWxcXFwiIChrZXl1cCk9XFxcImNoZWNrTm9uRW1wdHkoJ2VudGVyUGhvbmVGb3JtJywgcGhvbmUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tOb25FbXB0eSgnZW50ZXJQaG9uZUZvcm0nLCBwaG9uZS52YWx1ZSlcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgPGEgKGNsaWNrKT1cXFwic2V0UGhvbmVOdW1iZXIoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCI+U2FsdmEgZSBjb250aW51YTwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJmaW5pc2hQb3B1cERhdGEudHlwZSA9PT0gJ2ZpbmlzaEZhY2Vib29rUmVnaXN0cmF0aW9uJ1xcXCI+XFxuICAgICAgPGEgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPkNoaXVkaTwvYT5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG48IS0tIEFkZCBDYXJkIHBvcHVwIC0tPlxcbjxkaXYgY2xhc3M9XFxcInBvcHVwXFxcIiBbQGFkZENhcmRQb3B1cFN0YXRlXT1cXFwiYWRkQ2FyZFBvcHVwU3RhdGVcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5NZXRvZG8gZGkgcGFnYW1lbnRvPC9kaXY+XFxuICA8Zm9ybSBjbGFzcz1cXFwiYWRkLWNhcmQtZm9ybVxcXCIgI2FkZENhcmRGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICA8YXBwLWxvYWRpbmcgKm5nSWY9XFxcImlzUG9wdXBMb2FkaW5nXFxcIj48L2FwcC1sb2FkaW5nPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkcy1sb2dvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWl0ZW0gdmlzYVxcXCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1pdGVtIG1hc3RlcmNhcmRcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtaXRlbSBhbWV4XFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLm51bWJlcn1cXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPlxcbiAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROdW1iZXJcXFwiPk51bWVybyBjYXJ0YTwvbGFiZWw+XFxuICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiAjYWRkQ2FyZE51bWJlcj1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tDYXJkTnVtYmVyKGFkZENhcmROdW1iZXIudmFsdWUpXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2VkaXQnXFxcIj5cXG4gICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q2FyZE51bWJlclxcXCI+TnVtZXJvIGNhcnRhPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImVkaXRDYXJkTnVtYmVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEubnVtYmVyXFxcIiBkaXNhYmxlZD5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiZXJyb3JcXFwiPlBsZWFzZSBlbnRlciBjYXJkIG51bWJlcjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiIFtuZ0NsYXNzXT1cXFwieydpc0Vycm9yJzogYWRkQ2FyZEVycm9yLmV4cF9kYXRlfVxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRFeHBEYXRlXFxcIj5TY2FkZW56YTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZEV4cERhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZEV4cERhdGVcXFwiIHBsYWNlaG9sZGVyPVxcXCJNTS9BQVxcXCIgbWF4bGVuZ3RoPVxcXCI1XFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuZXhwX2RhdGVcXFwiICNhZGRDYXJkRXhwRGF0ZT1cXFwibmdNb2RlbFxcXCIgKGtleXVwKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIiAoY2hhbmdlKT1cXFwiY2hlY2tFeHBpcnkoYWRkQ2FyZEV4cERhdGUudmFsdWUpXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+RXhwaXJhdGlvbiBkYXRlIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiBbbmdDbGFzc109XFxcInsnaXNFcnJvcic6IGFkZENhcmRFcnJvci5jdmN9XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdhZGQnXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENWVlxcXCI+Q1ZWPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiICNhZGRDYXJkQ1ZWPVxcXCJuZ01vZGVsXFxcIiAoa2V5dXApPVxcXCJjaGVja05vbkVtcHR5KCdhZGRDYXJkQ3Z2JywgYWRkQ2FyZENWVi52YWx1ZSlcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0XFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJlZGl0Q1ZWXFxcIj5DVlY8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJlZGl0Q1ZWXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDVlZcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5jdmNcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXF1ZXN0aW9uLWNpcmNsZVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJyaWdodFxcXCIgdGl0bGU9XFxcIlRvb2x0aXAgb24gcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlcnJvclxcXCI+Q1ZWIGlzbid0IGNvcnJlY3Q8L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWJoZWFkZXJcXFwiPlxcbiAgICAgIEluZm9ybWF6aW9uaSBmYWNvbHRhdGl2aVxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZE5hbWVcXFwiPk5vbWUgaW50ZXN0YXRhcmlvPC9sYWJlbD5cXG4gICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmROYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkTmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5vbWUgQ29nbm9tZVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLm5hbWVcXFwiICNhZGRDYXJkTmFtZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGZpcnN0LWJpZ1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJhZGRDYXJkVmlhXFxcIj5WaWE8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkVmlhXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRDYXJkVmlhXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19saW5lMVxcXCIgI2FkZENhcmRBZGRyZXNzMT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmROclxcXCI+TnI8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkTnJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmROclxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfbGluZTJcXFwiICNhZGRDYXJkQWRkcmVzczI9XFxcIm5nTW9kZWxcXFwiPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBmaXJzdC1iaWdcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZENpdHRhXFxcIj5DaXR0w6A8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJhZGRDYXJkQ2l0dGFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDaXR0YVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3NfY2l0eVxcXCIgI2FkZENhcmRBZGRyZXNzQ2l0eT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicGFydC1ncm91cCBsYXN0LXNtYWxsXFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZENhcmRDYXBcXFwiPkNBUDwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRDYXBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImFkZENhcmRDYXBcXFwiIFsobmdNb2RlbCldPVxcXCJhZGRDYXJkRGF0YS5hZGRyZXNzX3ppcFxcXCIgI2FkZENhcmRBZGRyZXNzWmlwPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInBhcnQtZ3JvdXAgZmlyc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCI+UHJvdmluY2lhPC9sYWJlbD5cXG4gICAgICAgIDxpbnB1dCBpZD1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFByb3ZpbmNpYVxcXCIgWyhuZ01vZGVsKV09XFxcImFkZENhcmREYXRhLmFkZHJlc3Nfc3RhdGVcXFwiICNhZGRDYXJkQWRkcmVzc1N0YXRlPVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXJ0LWdyb3VwIGxhc3RcXFwiPlxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiYWRkQ2FyZFBlYXNlXFxcIj5QYWVzZTwvbGFiZWw+XFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImFkZENhcmRQZWFzZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkQ2FyZFBlYXNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiYWRkQ2FyZERhdGEuYWRkcmVzc19jb3VudHJ5XFxcIiAjYWRkQ2FyZEFkZHJlc3NDb3VudHJ5PVxcXCJuZ01vZGVsXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJhZGROZXdDYXJkKClcXFwiICpuZ0lmPVxcXCJhY3Rpb25DYXJkVHlwZSA9PT0gJ2FkZCdcXFwiPkFnZ2l1bmdpIG1ldG9kbzwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJlZGl0Q2FyZCgpXFxcIiAqbmdJZj1cXFwiYWN0aW9uQ2FyZFR5cGUgPT09ICdlZGl0J1xcXCI+QWdnaXVuZ2kgbWV0b2RvPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIChjbGljayk9XFxcImNsb3NlUG9wdXAoKVxcXCI+Q2hpdWRpPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9mb3JtPlxcbjwvZGl2PlxcblxcblxcbjwhLS0gQ29uZmlybSBwb3B1cCB3aXRoIGFjdGlvbiAtLT5cXG48ZGl2IGNsYXNzPVxcXCJwb3B1cFxcXCIgW0Bjb25maXJtQWN0aW9uUG9wdXBTdGF0ZV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cFN0YXRlXFxcIiBbbmdDbGFzc109XFxcInsnYWRkLXByaWNlJzogY29uZmlybUFjdGlvblBvcHVwRGF0YS50eXBlID09PSAnYWRkUHJpY2UnfVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhbGVydC1ibG9ja1xcXCIgKm5nSWY9XFxcImZvcm1FcnJvclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWljblxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0LWNvbnRhaW5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj57e2Zvcm1FcnJvci50aXRsZX19PC9kaXY+XFxuICAgICAgPHA+e3tmb3JtRXJyb3IubWVzc2FnZX19PC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGFwcC1sb2FkaW5nICpuZ0lmPVxcXCJpc1BvcHVwTG9hZGluZ1xcXCI+PC9hcHAtbG9hZGluZz5cXG4gIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+e3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50aXRsZSB9fTwvZGl2PlxcbiAgPGZvcm0gY2xhc3M9XFxcImNvbmZpcm0tYWN0aW9uXFxcIiAjY29uZmlybUFjdGlvbk9yZGVyRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgPHA+XFxuICAgICAge3sgY29uZmlybUFjdGlvblBvcHVwRGF0YS50ZXh0IH19XFxuICAgICAgPHNwYW4gKm5nSWY9XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgIT09ICcnXFxcIj48YnI+IHt7IGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEudGV4dDIgfX08L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWN0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBhY3Rpb24gb2YgY29uZmlybUFjdGlvblBvcHVwRGF0YS5hY3Rpb25zXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2FkZCdcXFwiPlxcbiAgICAgICAgPGxhYmVsPnt7IGFjdGlvbi5sYWJlbCB9fTwvbGFiZWw+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1BY3Rpb25Qb3B1cERhdGEucHJpY2VcXFwiICNjb25maXJtQWN0aW9uSW5wdXRBZGRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2lucHV0X2VkaXQnXFxcIj5cXG4gICAgICAgIDxsYWJlbD57eyBhY3Rpb24ubGFiZWwgfX08L2xhYmVsPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiY29uZmlybUFjdGlvbklucHV0RWRpdFByaWNlXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybUFjdGlvblBvcHVwRGF0YS5wcmljZVxcXCIgI2NvbmZpcm1BY3Rpb25JbnB1dEVkaXRQcmljZT1cXFwibmdNb2RlbFxcXCI+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+LjAwPC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb24gZXVyb1xcXCI+4oKsPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8cCBjbGFzcz1cXFwicHJpY2UtZGVzY3JpcHRpb25cXFwiPnt7IGFjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwYXltZW50LWluZm9ybWF0aW9uXFxcIiAqbmdJZj1cXFwiYWN0aW9uLnR5cGUgPT09ICdQYXltZW50X2luZm9ybWF0aW9uJ1xcXCI+XFxuICAgICAgICB7eyBhY3Rpb24uaW5mb3JtYXRpb24gfX1cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgYnV0dG9ucy1ibG9ja1xcXCI+XFxuICAgICAgPHNwYW4gKm5nRm9yPVxcXCJsZXQgYnV0dG9uIG9mIGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEuYnV0dG9uc1xcXCI+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2FkZFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiYWRkUHJpY2UoY29uZmlybUFjdGlvblBvcHVwRGF0YS5vcmRlcklkKVxcXCI+e3sgYnV0dG9uLnRleHQgfX08L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gKm5nSWY9XFxcImJ1dHRvbi50eXBlID09PSAnZWRpdFByaWNlJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgKGNsaWNrKT1cXFwiZWRpdFByaWNlKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2NvbnRpbnVlT3JkZXInXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJjb250aW51ZU9yZGVyKGNvbmZpcm1BY3Rpb25Qb3B1cERhdGEub3JkZXJJZClcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1sb2NrXFxcIj48L2k+IHt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJidXR0b24udHlwZSA9PT0gJ2Nsb3NlJ1xcXCIgKGNsaWNrKT1cXFwiY2xvc2VQb3B1cCgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiPnt7IGJ1dHRvbi50ZXh0IH19PC9idXR0b24+XFxuICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvZm9ybT5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wb3B1cHMvcG9wdXBzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibG9hZGVyXFxcIj5cXG4gIDxzdmcgd2lkdGg9JzYwcHgnIGhlaWdodD0nNjBweCcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWRcXFwiIGNsYXNzPVxcXCJ1aWwtcmluZ1xcXCI+XFxuICAgIDxyZWN0IHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCI2MFxcXCIgaGVpZ2h0PVxcXCI2MFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgY2xhc3M9XFxcImJrXFxcIj48L3JlY3Q+XFxuICAgIDxjaXJjbGUgY3g9XFxcIjUwXFxcIiBjeT1cXFwiNTBcXFwiIHI9XFxcIjQ1XFxcIiBzdHJva2UtZGFzaGFycmF5PVxcXCIxNjkuNjQ2MDAzMjkzODQ4ODIgMTEzLjA5NzMzNTUyOTIzMjU3XFxcIiBzdHJva2U9XFxcIiMzQjU2OERcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTBcXFwiPlxcbiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgdHlwZT1cXFwicm90YXRlXFxcIiB2YWx1ZXM9XFxcIjAgNTAgNTA7MTgwIDUwIDUwOzM2MCA1MCA1MDtcXFwiIGtleVRpbWVzPVxcXCIwOzAuNTsxXFxcIiBkdXI9XFxcIjFzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgYmVnaW49XFxcIjBzXFxcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XFxuICAgIDwvY2lyY2xlPlxcbiAgPC9zdmc+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwvbm9kZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC9ub2RlXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZzXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1jbGljay1vdXRzaWRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLWNsaWNrLW91dHNpZGVcIlxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpbWVuZy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZVwiXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcmltZW5nL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXJcIlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==