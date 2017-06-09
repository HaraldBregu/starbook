webpackJsonp([0,4],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(56);
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

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
    }
    ShareService.prototype.setObject = function (object) {
        this.object = object;
    };
    ShareService.prototype.getObject = function () {
        return this.object;
    };
    ShareService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ShareService);
    return ShareService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/share.service.js.map

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(78);
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
        this.protocol = "https";
        this.hostname = "api.starbook.co";
        this.api_version = "v0.9.1";
        this.api = ""; //'https://api.starbook.co/v0.9.1/';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                this.api_version = "v0.9.1";
            }
            else {
                this.api_version = "t0.9.1";
            }
        }
        this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
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

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
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
    AnalyticsService.prototype.sendPageViewUrl = function (url) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            ga('send', 'pageview', url);
        }
    };
    AnalyticsService.prototype.sendException = function (error) {
        ga('send', 'exception', { 'exDescription': error, 'exFatal': false });
    };
    AnalyticsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AnalyticsService);
    return AnalyticsService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/analytics.service.js.map

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CurrencyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PADDING = "000000";
var CurrencyPipe = (function () {
    function CurrencyPipe() {
        this.PREFIX = '';
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = " ";
        this.SUFFIX = ' €';
    }
    CurrencyPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString().split("."), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        var amount = this.PREFIX + integer + fraction;
        // var clear_amount = amount.replace(/\D/g,'');
        return amount;
    };
    CurrencyPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").replace(this.PREFIX, "").replace(this.SUFFIX, "").split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";
        var amount = integer + fraction;
        // amount = amount.replace(/\D/g,'');
        return amount;
    };
    CurrencyPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currency'
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyPipe);
    return CurrencyPipe;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/currency.pipe.js.map

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
    function OrdersService(http, navigationService) {
        this.http = http;
        this.navigationService = navigationService;
        this.protocol = "https";
        this.hostname = "api.starbook.co";
        this.api_version = "v0.9.1";
        this.api = 'https://api.starbook.co/v0.9.1/';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                this.api_version = "v0.9.1";
            }
            else {
                this.api_version = "t0.9.1";
            }
        }
        this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
        // this.api = 'http://localhost/t0.9.1/';
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
        var paramsToRequest = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.forEach(function (peram) {
            paramsToRequest.set(peram.name, peram.value);
        });
        return this.http.get(this.api + 'orders', { headers: this._makeHeaders(), search: paramsToRequest }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    OrdersService.prototype.getCategories = function () {
        return ['Idraulico', 'Elettricista', 'Fabbro', 'Spazzacamino', 'Antennista', 'Pulizie', 'Edilizia', 'Giardinaggio', 'Informatica'];
    };
    OrdersService.prototype.updateOrder = function (id, data) {
        return this.http.put(this.api + 'orders/' + id, data, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    OrdersService.prototype.acceptWork = function (id, action) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.put(this.api + 'orders/' + id, { action: action }, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        }).catch(this.handleError);
    };
    OrdersService.prototype.modifyOrder = function (id, type) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.put(this.api + 'orders/' + id, { action: type }, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return true;
        }).catch(this.handleError);
    };
    OrdersService.prototype.addPrice = function (id, type, price) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.put(this.api + 'orders/' + id, { action: type, payment: { amount: price, currency: "eur" } }, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            return response.json();
        }).catch(this.handleError);
    };
    OrdersService.prototype.handleError = function (error) {
        // this.navigationService.updateLoadingStatus(false);
        return Promise.reject(error.status || error);
    };
    OrdersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], OrdersService);
    return OrdersService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.service.js.map

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
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

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(50);
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
    function LandingComponent(router, route, navigationService, analyticsService, seoService, orderService, commonService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.orderService = orderService;
        this.commonService = commonService;
        this.images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
        this.contacts = '';
        this.spinerView = false;
        this.clearView = false;
        this.query = '';
        this.results = [];
        this.newServiceRequest = {
            message: 'Richiedi?'
        };
        this.categories = [];
        this.seoObject = {};
        this.order = {};
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.numPattern = /^\d+$/;
        this.analyticsService.sendPageViewUrl(this.router.url);
        this.navigationService.updateMessage("");
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
        }
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
        this.commonService.getServicesForCategoryTitle('Artigiani').then(function (categories) {
            _this.categories = categories.result[0].services;
            // console.log('categories: ' + JSON.stringify(categories.result[0]));
            // console.log('categories: ' + JSON.stringify(this.categories));
        }).catch(function (error) {
            // console.log('error: ' + error);
            _this.categories = null;
        });
        this.seoObject['title'] = "Starbook";
        this.seoObject['description'] = "Starbook è una piattaforma che mette in contatto gli artigiani e professionisti con i clienti in modo piu diretto e sicuro gratis per sempre.";
        this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
        this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";
        this.seoService.setTitle(this.seoObject['title']);
        this.seoService.setMetaElem('description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.seoObject['title']);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:title', this.seoObject['title']);
        this.seoService.setOgElem('og:description', this.seoObject['description']);
        this.seoService.setOgElem('og:url', this.seoObject['url']);
        this.seoService.setOgElem('og:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    ////////////////////////////////////////////
    ////////////// LANDING SEARCH //////////////
    ////////////////////////////////////////////
    LandingComponent.prototype.search = function (event) {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Search', action: 'typing: ' + event.query, label: this.router.url });
        this.newServiceRequest.message = 'Richiedi?';
        this.spinerView = true;
        this.clearView = false;
        var timeStart = Date.now();
        this.commonService.search(event.query).then(function (results) {
            _this.spinerView = false;
            _this.analyticsService.sendTiming({ category: 'Search', timingVar: 'load', timingValue: Date.now() - timeStart });
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = results.result;
        }).catch(function (error) {
            _this.spinerView = false;
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = [];
        });
    };
    LandingComponent.prototype.selectResult = function (service) {
        this.analyticsService.sendEvent({ category: 'Search result', action: 'Select service', label: this.router.url });
        this.commonService.sendData(service, this.ref);
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    LandingComponent.prototype.clearSearchForm = function () {
        this.query = '';
        this.results = [];
        this.clearView = false;
    };
    LandingComponent.prototype.requireService = function () {
        this.analyticsService.sendEvent({ category: 'Search result', action: 'Require service', label: this.router.url });
        this.router.navigate(['requests/service']);
    };
    LandingComponent.prototype.searchMore = function () {
        this.analyticsService.sendEvent({ category: 'Button', action: 'Search', label: this.router.url });
        if (this.query.length > 0 && this.results.length === 0) {
            this.router.navigate(['requests/service']);
        }
        else if (this.query.length > 0 && this.results.length > 0) {
            var service = this.results[0];
            this.commonService.sendData(service, this.ref);
            var title = service['title'];
            this.router.navigate(['services', title.replace(/\s+/g, '-')]);
        }
        else if (this.query.length === 0) {
            this.router.navigate(['services']);
        }
    };
    ////////////////////////////////////////////
    ////////////// SELECT CATEGORY /////////////
    ////////////////////////////////////////////
    LandingComponent.prototype.selectCategory = function (category) {
        this.analyticsService.sendEvent({ category: 'Search result', action: 'Select service', label: this.router.url });
        this.commonService.setCategory(category);
        this.router.navigate(['category/', category.title.replace(/\s+/g, '-').toLowerCase()]);
    };
    LandingComponent.prototype.selectService = function (service) {
        this.router.navigate(['category/' + service.title.toLowerCase()]);
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(716)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */]) === 'function' && _g) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/landing.component.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(router, navigationService) {
        this.router = router;
        this.navigationService = navigationService;
        this.memberObject = [];
        this.navigationService.updateMessage("Chi siamo");
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.memberObject.push({
            fullname: "Harald Bregu",
            headline: "Software Architect",
            description: "Now Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            avatar_url: "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
            email: "harald.bregu@starbook.co"
        }, {
            fullname: "Aleksandr Gorin",
            headline: "Software Developer",
            description: "Now Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            avatar_url: "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
            email: "aleksandr.gorin@gmail.com"
        }, {
            fullname: "Daniel Lopez Bucheli",
            headline: "Business Design",
            description: "Now Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            avatar_url: "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
            email: "daniele.lopez.bucheli@gmail.com"
        });
        // console.log('member object: ' + JSON.stringify(this.memberObject));
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(718),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/about.component.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_seo_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AccountComponent = (function () {
    function AccountComponent(route, router, navigationService, profileService, analyticsService, authService, seoService, _location, contactService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.profileService = profileService;
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.seoService = seoService;
        this._location = _location;
        this.contactService = contactService;
        this.page = '';
        this.email_verification = {
            title: 'Verificando la tua email',
            spinner: {
                visible: false,
            },
            success: {
                visible: false,
            },
            button: {
                title: 'Torna alla home',
                visible: false
            }
        };
        this.password_verification = {
            title: 'Verificando la nuova password',
            spinner: {
                visible: false,
            },
            success: {
                visible: false,
            },
            button: {
                title: 'Torna alla home',
                visible: false
            }
        };
        this.new_password_creation = {
            title: 'Inserisci una password',
            spinner: {
                visible: false,
            },
            success: {
                visible: false,
            },
            password_field: {
                title: 'Crea una password sicura',
                value: '',
                visible: true
            },
            button: {
                title: 'Crea password',
                visible: true
            },
            code: ''
        };
        /////////////////////////
        /////// LOGIN  //////////
        /////////////////////////
        this.loginParameters = {
            email: '',
            password: ''
        };
        this.login_state = {
            loading: false,
            button_title: "Accedi",
            error_message: null,
            email_error: null,
            password_error: null,
        };
        //////////////////////////
        /////// Signup  //////////
        //////////////////////////
        this.signupParameters = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.signup_state = {
            loading: false,
            button_title: "Registrati",
            error_message: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            password_error: null,
            confirm_password_error: null
        };
        ///////////////////////////
        /////// FACEBOOK //////////
        ///////////////////////////
        this.facebook_state = {
            loading: false,
            button_title: "Continua con Facebook",
            error_message: null,
        };
        this.profession = '';
        this.seoObject = {};
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            _this.route.queryParams.subscribe(function (params) {
                if (_this.page === 'login') {
                    _this.navigationService.updateMessage('Accedi al tuo account');
                    _this.seoObject['title'] = "Iscriviti a Starbook";
                    _this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";
                    if (_this.currentUser) {
                        _this.router.navigate(['']);
                    }
                }
                else if (_this.page === 'signup') {
                    _this.navigationService.updateMessage('Crea un nuovo account');
                    _this.seoObject['title'] = "Iscriviti a Starbook";
                    _this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";
                    if (_this.currentUser) {
                        _this.router.navigate(['']);
                    }
                }
                else if (_this.page === 'professional') {
                    _this.navigationService.updateMessage('Iscriviti come professionista');
                    _this.seoObject['title'] = "Registra la tua attività gratuitamente";
                    _this.seoObject['description'] = "Lavori nel mondo dell'edilizia, idraulica, sei un elettrico e esegui lavori particolari artigianali nelle case? Unisciti a noi e collaboreremo per aumentare la professionalità e la clientela in modo smart.";
                    if (_this.currentUser) {
                        _this.router.navigate(['']);
                    }
                }
                else if (_this.page === 'email_verification') {
                    _this.navigationService.updateMessage('Verifica della email');
                    var code = params['code'];
                    if (!code) {
                    }
                    else {
                        _this.email_verification.spinner.visible = true;
                        _this.profileService.verifyEmail(code)
                            .then(function (object) {
                            _this.email_verification.title = 'Email verificato!';
                            _this.email_verification.spinner.visible = false;
                            _this.email_verification.success.visible = true;
                            _this.email_verification.button.visible = true;
                        })
                            .catch(function (error) {
                            _this.email_verification.title = 'Errore verifica email!';
                            _this.email_verification.spinner.visible = false;
                        });
                    }
                }
                else if (_this.page === 'password_verification') {
                    _this.navigationService.updateMessage('Verifica della nuova password');
                    var code = params['code'];
                    if (!code) {
                        _this.goToHomePage();
                    }
                    else {
                        _this.password_verification.spinner.visible = true;
                        _this.profileService.verifyNewPassword(code)
                            .then(function (object) {
                            _this.password_verification.title = 'Nuova password verificata!';
                            _this.password_verification.spinner.visible = false;
                            _this.password_verification.success.visible = true;
                            _this.password_verification.button.visible = true;
                        })
                            .catch(function (error) {
                            _this.password_verification.title = 'Errore verifica password!';
                            _this.password_verification.spinner.visible = false;
                        });
                    }
                }
                else if (_this.page === 'create_new_password') {
                    _this.navigationService.updateMessage('Crea una nuova password');
                    var code = params['code'];
                    if (!code) {
                        _this.goToHomePage();
                        return;
                    }
                    _this.new_password_creation.code = code;
                }
                else {
                    _this.goToHomePage();
                }
            });
        });
        this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
        this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";
        this.seoService.setTitle(this.seoObject['title']);
        this.seoService.setMetaElem('description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.seoObject['title']);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:title', this.seoObject['title']);
        this.seoService.setOgElem('og:description', this.seoObject['description']);
        this.seoService.setOgElem('og:url', this.seoObject['url']);
        this.seoService.setOgElem('og:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    ////////////////////////////////////
    ////////// AUTHENTICATION //////////
    ////////////////////////////////////
    AccountComponent.prototype.login = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Account', action: 'Login', label: this.router.url });
        if (this.login_state.loading || this.facebook_state.loading) {
            return;
        }
        if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
            if (this.loginParameters.email.length === 0) {
                this.login_state.email_error = "Inserisci un indirizzo email";
            }
            else {
                this.login_state.email_error = null;
            }
            if (this.loginParameters.password.length === 0) {
                this.login_state.password_error = "Inserisci una password";
            }
            else {
                this.login_state.password_error = null;
            }
            return;
        }
        this.login_state.loading = true;
        this.login_state.button_title = "Accedendo...";
        this.authService.login(this.loginParameters.email, this.loginParameters.password).then(function (data) {
            _this.login_state.loading = false;
            _this.login_state.button_title = "Accedi";
            _this.login_state.error_message = null;
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.login_state.email_error = null;
            _this.login_state.password_error = null;
            _this.login_state.loading = false;
            _this.login_state.button_title = "Accedi";
            switch (error) {
                case 404:
                    _this.login_state.error_message = "Non esiste un account con questa mail! Crea un nuovo account.";
                    break;
                case 401:
                    _this.login_state.error_message = "La password non è corretta!";
                    break;
                default:
            }
        });
    };
    AccountComponent.prototype.changeToSignup = function () {
        this.analyticsService.sendEvent({ category: 'Account', action: 'Change to signup', label: this.router.url });
        if (this.login_state.loading) {
            return;
        }
        this.router.navigate(['account/signup']);
    };
    AccountComponent.prototype.signup = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Account', action: 'Signup', label: this.router.url });
        if (this.signup_state.loading || this.facebook_state.loading) {
            return;
        }
        if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
            if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
                return;
            }
            else {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = null;
            }
            if (!this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
                return;
            }
        }
        else {
            if (this.signupParameters.email.length === 0) {
                this.signup_state.email_error = "Inserisci un indirizzo email";
            }
            else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
            }
            else {
                this.signup_state.email_error = null;
            }
            if (this.signupParameters.firstname.length === 0) {
                this.signup_state.first_name_error = "Inserisci un nome";
            }
            else {
                this.signup_state.first_name_error = null;
            }
            if (this.signupParameters.lastname.length === 0) {
                this.signup_state.last_name_error = "Inserisci un cognome";
            }
            else {
                this.signup_state.last_name_error = null;
            }
            if (this.signupParameters.phone.length < 9) {
                this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
                if (this.signupParameters.phone.length === 0) {
                    this.signup_state.phone_error = "Inserisci un numero di telefono";
                }
            }
            else {
                this.signup_state.phone_error = null;
            }
            if (this.signupParameters.password.length === 0) {
                this.signup_state.password_error = "Inserisci una password";
            }
            else {
                this.signup_state.password_error = null;
            }
            if (this.signupParameters.confirmPassword.length === 0) {
                this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
            }
            else {
                this.signup_state.confirm_password_error = null;
            }
            if (this.signupParameters.password.length > 0 &&
                this.signupParameters.confirmPassword.length > 0
                && this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
            }
            return;
        }
        this.signup_state.loading = true;
        this.signup_state.button_title = "Registrando...";
        this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.signup_state.error_message = null;
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrando...";
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrati";
            switch (error) {
                case 409:
                    _this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.signup_state.error_message = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.signup_state.error_message = null;
            }
        });
    };
    AccountComponent.prototype.signupAsProfessional = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Account', action: 'Signup', label: this.router.url });
        if (this.signup_state.loading || this.facebook_state.loading) {
            return;
        }
        if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
            if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
                return;
            }
            else {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = null;
            }
            if (!this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
                return;
            }
        }
        else {
            if (this.signupParameters.email.length === 0) {
                this.signup_state.email_error = "Inserisci un indirizzo email";
            }
            else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
            }
            else {
                this.signup_state.email_error = null;
            }
            if (this.signupParameters.firstname.length === 0) {
                this.signup_state.first_name_error = "Inserisci un nome";
            }
            else {
                this.signup_state.first_name_error = null;
            }
            if (this.signupParameters.lastname.length === 0) {
                this.signup_state.last_name_error = "Inserisci un cognome";
            }
            else {
                this.signup_state.last_name_error = null;
            }
            if (this.signupParameters.phone.length < 9) {
                this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
                if (this.signupParameters.phone.length === 0) {
                    this.signup_state.phone_error = "Inserisci un numero di telefono";
                }
            }
            else {
                this.signup_state.phone_error = null;
            }
            if (this.signupParameters.password.length === 0) {
                this.signup_state.password_error = "Inserisci una password";
            }
            else {
                this.signup_state.password_error = null;
            }
            if (this.signupParameters.confirmPassword.length === 0) {
                this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
            }
            else {
                this.signup_state.confirm_password_error = null;
            }
            if (this.signupParameters.password.length > 0 &&
                this.signupParameters.confirmPassword.length > 0
                && this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
            }
            return;
        }
        this.signup_state.loading = true;
        this.signup_state.button_title = "Registrando...";
        this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.signup_state.error_message = null;
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrando...";
            var message = 'Nome: ' + _this.signupParameters.firstname +
                '<br>Cognome: ' + _this.signupParameters.lastname +
                '<br>Telefono: ' + _this.signupParameters.phone +
                '<br>Email: ' + _this.signupParameters.email +
                '<br>Message: ' + _this.profession;
            _this.sendEmail('Registrazione come professionista', message);
            _this.router.navigate(['']);
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrati";
            switch (error) {
                case 409:
                    _this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.signup_state.error_message = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.signup_state.error_message = null;
            }
        });
    };
    AccountComponent.prototype.changeToLogin = function () {
        this.analyticsService.sendEvent({ category: 'Account', action: 'Change to login', label: this.router.url });
        if (this.signup_state.loading) {
            return;
        }
        this.router.navigate(['account/login']);
    };
    AccountComponent.prototype.continueWithFacebook = function () {
        this.analyticsService.sendEvent({ category: 'Account', action: 'Continue with facebook', label: this.router.url });
        if (this.login_state.loading || this.signup_state.loading) {
            return;
        }
        this.facebook_state.loading = true;
        this.facebook_state.button_title = "Accedendo...";
        this.facebook_state.error_message = null;
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var timeStart = Date.now();
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var facebookPopup = window.open('https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook', 
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://glacial-shore-66987.herokuapp.com/facebook',
            '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            this.checkAccessToken(facebookPopup, 1, timeStart);
        }
    };
    AccountComponent.prototype.checkAccessToken = function (facebookWindow, context, timeStart) {
        var _this = this;
        if (facebookWindow.closed) {
            var accessToken = localStorage.getItem('facebook_token');
            this.authService.facebookLogin(accessToken).then(function (userData) {
                _this.navigationService.updatePersonalMenu(userData);
                _this.facebook_state.loading = false;
                _this.facebook_state.button_title = "Continua con Facebook";
                _this.facebook_state.error_message = null;
            }).catch(function (error) {
                _this.analyticsService.sendException(error);
                _this.facebook_state.loading = false;
                _this.facebook_state.button_title = "Continua con Facebook";
                _this.facebook_state.error_message = "Errore di accesso con Facebook!";
            });
        }
        else {
            var self_1 = this;
            setTimeout(function () { self_1.checkAccessToken(facebookWindow, context + 1, timeStart); }, 200);
        }
    };
    // EMAIL
    AccountComponent.prototype.sendEmail = function (subject, message) {
        var email = {
            subject: subject,
            message: message
        };
        this.contactService.sendEmail(email).then(function (response) { }).catch(function (error) { });
    };
    AccountComponent.prototype.createNewPassword = function (password) {
        var _this = this;
        this.new_password_creation.spinner.visible = true;
        this.profileService.createNewPassword(this.new_password_creation.code, password)
            .then(function (object) {
            _this.new_password_creation.title = 'Nuova password creata!';
            _this.new_password_creation.spinner.visible = false;
            _this.new_password_creation.success.visible = true;
            _this.new_password_creation.button.visible = true;
        })
            .catch(function (error) {
            _this.new_password_creation.title = 'Errore creazione password!';
            _this.new_password_creation.spinner.visible = false;
        });
    };
    AccountComponent.prototype.goToHomePage = function () {
        this.router.navigate(['/']);
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
        }
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(719)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__["a" /* ContactService */]) === 'function' && _j) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/account.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryComponent = (function () {
    function CategoryComponent(router, route, navigationService, analyticsService, seoService, orderService, commonService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.orderService = orderService;
        this.commonService = commonService;
        this.images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
        this.Request = {
            description: '',
            phone: '',
            email: '',
            firstname: '',
            lastname: ''
        };
        this.request_state = {
            loading: false,
            button_title: "Invia richiesta",
            message_success: null,
            message_error: null,
            title_error: null,
            description_error: null,
            firstname_error: null,
            lastname_error: null,
            phone_error: null,
            email_error: null
        };
        this.spinerView = false;
        this.clearView = false;
        this.query = '';
        this.results = [];
        this.services = [];
        this.order = {};
        this.seoObject = {};
        var category = this.commonService.getCategory();
        if (category) {
            this.category = category;
            this.navigationService.updateMessage(this.category.title);
            this.loadServicesForCategoryId(this.category._id);
            this.updateSeoForObject(this.category);
        }
        else {
            this.route.params.subscribe(function (params) {
                var category = params['category'];
                _this.commonService.getServiceById(category).then(function (data) {
                    _this.category = data.result;
                    _this.updateSeoForObject(_this.category);
                    _this.navigationService.updateMessage(_this.category.title);
                    _this.loadServicesForCategoryId(_this.category._id);
                }).catch(function (error) {
                    _this.router.navigate(['']);
                });
            });
        }
    }
    CategoryComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
        }
    };
    CategoryComponent.prototype.updateSeoForObject = function (category) {
        this.seoObject['title'] = category.title;
        this.seoObject['description'] = category.description;
        this.seoObject['url'] = 'https://www.starbook.co' + this.router.url;
        this.seoObject['image_url'] = category.image_url;
        this.seoService.setTitle(this.seoObject['title']);
        this.seoService.setMetaElem('description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.seoObject['title']);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.seoObject['description']);
        this.seoService.setOgElem('twitter:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:title', this.seoObject['title']);
        this.seoService.setOgElem('og:description', this.seoObject['description']);
        this.seoService.setOgElem('og:url', this.seoObject['url']);
        this.seoService.setOgElem('og:image', this.seoObject['image_url']);
        this.seoService.setOgElem('og:image:secure_url', this.seoObject['image_url']);
    };
    CategoryComponent.prototype.showDirectAction = function (action) {
        this.order['service_id'] = this.category._id;
        this.order['title'] = this.category.title;
        var title = "Richiesta di " + action.title.toLowerCase() + "";
        this.order['details'] = [{ title: this.category.title, type: "service", count: 0, amount: 0 }, { title: title, type: "detail", count: 0, amount: 0 }];
        this.order['description'] = "";
        this.order['upfront_amount'] = action.amount;
        this.order['timing'] = { days: 0 };
        this.orderService.updateWizardData(this.order);
        this.router.navigate(['order/summary']);
        return false;
    };
    CategoryComponent.prototype.loadServicesForCategoryId = function (category_id) {
        var _this = this;
        this.commonService.getRelatedServicesByServiceId(category_id, null).then(function (data) {
            _this.services = data.result[0].services;
            // console.log('services are: ' + JSON.stringify(data.result));
        }).catch(function (error) {
            // console.log('error are: ' + JSON.stringify(error));
        });
    };
    CategoryComponent.prototype.showServicePage = function (service) {
        this.commonService.setService(service);
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    CategoryComponent.prototype.requireService = function () {
        this.router.navigate(['requests/service']);
    };
    CategoryComponent.prototype.checkOut = function () {
        this.router.navigate(['order/summary']);
        return false;
    };
    CategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(721)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */]) === 'function' && _g) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/category.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(router, route, navigationService, contactService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.contactService = contactService;
        this.page = '';
        this.Email = {
            subject: null,
            message: null
        };
        this.Recruiter = {
            firstname: null,
            lastname: null,
            phone: null,
            email: null,
            message: null
        };
        this.recruiter_state = {
            loading: false,
            message_success: null,
            message_error: null,
            firstname_error: null,
            lastname_error: null,
            phone_error: null,
            email_error: null
        };
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.navigationService.updateMessage("Contattaci");
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            _this.page = params['page'];
            if (_this.page === 'partner') {
                _this.navigationService.updateMessage("Diventiamo partner");
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    ContactComponent.prototype.joinPartner = function () {
        var _this = this;
        if (this.recruiter_state.loading) {
            return;
        }
        if (!this.Recruiter.firstname || !this.Recruiter.lastname || !this.Recruiter.phone || !this.Recruiter.email) {
            this.recruiter_state.message_error = "Per favore inserisci tutti i campi richiesti";
            this.recruiter_state.firstname_error = "Nome";
            this.recruiter_state.lastname_error = "Cognome";
            this.recruiter_state.phone_error = "Il numero del telefono";
            this.recruiter_state.email_error = "La tua email";
            return;
        }
        this.recruiter_state.loading = true;
        this.recruiter_state.message_success = null;
        this.recruiter_state.message_error = null;
        this.recruiter_state.firstname_error = null;
        this.recruiter_state.lastname_error = null;
        this.recruiter_state.phone_error = null;
        this.recruiter_state.email_error = null;
        this.Email.subject = "Richiesta partnership";
        this.Email.message =
            'Nome: ' + this.Recruiter.firstname +
                '<br>Cognome: ' + this.Recruiter.lastname +
                '<br>Telefono: ' + this.Recruiter.phone +
                '<br>Email: ' + this.Recruiter.email +
                '<br>Message: ' + this.Recruiter.message;
        this.contactService.sendEmail(this.Email).then(function (response) {
            _this.recruiter_state.message_success = "Complimenti, hai inviato una richiesta di iscrizione su Starbook con successo.";
            _this.recruiter_state.loading = false;
            _this.Recruiter.firstname = null;
            _this.Recruiter.lastname = null;
            _this.Recruiter.phone = null;
            _this.Recruiter.email = null;
        }).catch(function (error) {
            _this.recruiter_state.loading = false;
            _this.Recruiter.firstname = null;
            _this.Recruiter.lastname = null;
            _this.Recruiter.phone = null;
            _this.Recruiter.email = null;
            // console.log('error: ' + JSON.stringify(error));
        });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(722)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/contact.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(63);
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
            template: __webpack_require__(723)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FacebookComponent);
    return FacebookComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/facebook.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpComponent = (function () {
    function HelpComponent(router, navigationService) {
        this.router = router;
        this.navigationService = navigationService;
        this.navigationService.updateMessage("Aiuto e Assistenza");
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(724)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], HelpComponent);
    return HelpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/help.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InsertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__webpack_require__(547);
var InsertComponent = (function () {
    function InsertComponent(router, route, analyticsService, authService, navigationService) {
        this.router = router;
        this.route = route;
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.navigationService = navigationService;
        this.steps = ['title', 'price', 'picture', 'register', 'end'];
        this.step = '';
        this.Service = {};
        this.logo = '';
        this.signupParameters = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.signup_state = {
            loading: false,
            button_title: "Registrati",
            error_message: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            password_error: null,
            confirm_password_error: null
        };
    }
    InsertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.step = params['step'];
            if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.step === 'title') {
            }
            else if (_this.step === 'price') {
            }
        });
    };
    InsertComponent.prototype.setProgressWidth = function () {
        var numSteps = this.steps.length;
        var currentStep = this.steps.indexOf(this.step) + 1;
        return 100 / numSteps * currentStep + '%';
    };
    InsertComponent.prototype.inputFile = function () {
        console.log('input file');
    };
    InsertComponent.prototype.fileEvent = function (fileInput) {
        var _this = this;
        this.logo = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.logo = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        // let file = fileInput.target.files[0]
        console.log('file: ' + this.logo);
        // let AWSService = (<any>window).AWS;
        // // console.log(AWSService);
        // AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
        // AWSService.config.secretAccessKey = "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";
        // function guid() {
        //   function s4() {
        //     return Math.floor((1 + Math.random()) * 0x10000)
        //       .toString(16)
        //       .substring(1);
        //   }
        //   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        //     s4() + '-' + s4() + s4() + s4();
        // }
        //
        // let bucket = new AWSService.S3()
        // let params = {Bucket: 'starbook-s3', Key:'random_services/' + guid() + '.png', Body:file, ACL:"public-read"}
        // bucket.upload(params, function(error, res){
        //   console.log('error: ' + error);
        //   console.log('res: ' + JSON.stringify(res));
        // })
    };
    InsertComponent.prototype.undoStep = function () {
        var currentStepIndex = this.steps.indexOf(this.step);
        var previousStep = this.steps[currentStepIndex - 1];
        this.router.navigate(['insert/' + previousStep]);
        // if (this.step === "price") {
        //   this.router.navigate(['insert/title']);
        // } else if (this.step === "picture") {
        //   this.router.navigate(['insert/price']);
        // }
    };
    InsertComponent.prototype.saveStep = function (step) {
        var currentStepIndex = this.steps.indexOf(this.step);
        var nextStep = this.steps[currentStepIndex + 1];
        this.router.navigate(['insert/' + nextStep]);
        // if (step === 'title') {
        //   this.router.navigate(['insert/price']);
        // } if (step === 'price') {
        //   this.router.navigate(['insert/picture']);
        // }  if (step === 'picture') {
        //   this.router.navigate(['insert/register']);
        // } if (step === 'register') {
        //   this.router.navigate(['insert/end']);
        // } if (step === 'end') {
        //   // this.router.navigate(['insert/end']);
        // } else {
        //   console.log('Service is: ' + JSON.stringify(this.Service));
        // }
    };
    InsertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insert',
            template: __webpack_require__(725)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object])
    ], InsertComponent);
    return InsertComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/insert.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LegalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LegalComponent = (function () {
    function LegalComponent(router, navigationService) {
        this.router = router;
        this.navigationService = navigationService;
        this.navigationService.updateMessage("Privacy e Condizioni");
    }
    LegalComponent.prototype.ngOnInit = function () {
    };
    LegalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-legal',
            template: __webpack_require__(726)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], LegalComponent);
    return LegalComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/legal.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(727)
        }), 
        __metadata('design:paramtypes', [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/notfound.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_share_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_currency_pipe__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_currency_cent_pipe__ = __webpack_require__(533);
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
    function OrdersComponent(router, route, navigationService, ordersService, popupsService, analyticsService, orderService, shareService, currencyPipe, currencyCentPipe) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.ordersService = ordersService;
        this.popupsService = popupsService;
        this.analyticsService = analyticsService;
        this.orderService = orderService;
        this.shareService = shareService;
        this.currencyPipe = currencyPipe;
        this.currencyCentPipe = currencyCentPipe;
        this.selectTab = false;
        this.tabs = [
            { name: 'Lavorazioni', route: 'requests', icon: "fa-tasks" },
            { name: 'Preventivi', route: 'estimates', icon: "fa-file" }
        ];
        this.page = '';
        this.detail = {
            title: "",
            type: "detail",
            count: 0,
            amount: 0
        };
        this.newDetail = {
            title: "",
            type: "detail",
            count: 0,
            amount: 0
        };
        this.details = [];
        this.newDetails = [];
        this.payment_state = {
            loading: false,
        };
        this.update_state = {
            loading: false,
        };
        this.navigationService.updateMessage("Ordini");
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            if (!localStorage.getItem('auth')) {
                this.router.navigate(['']);
                return;
            }
            this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            this.route.params.subscribe(function (params) {
                window.scrollTo(0, 0);
                _this.page = params['page'];
                if (_this.page === 'requests') {
                    _this.getActiveOrders();
                }
                else if (_this.page === 'estimates') {
                    _this.router.navigate(['orders/requests']);
                }
                else {
                    _this.router.navigate(['orders/requests']);
                }
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                var orderIndex = 0;
                switch (action.type) {
                    case 'confirmOrder':
                        orderIndex = 0;
                        // this.pageData.forEach((orderData) => {
                        //   if (orderData._id === action.data.orderId) {
                        //     this.pageData[orderIndex].status = 1;
                        //   }
                        //   orderIndex++;
                        // });
                        break;
                    case 'cancelOrder':
                        orderIndex = 0;
                        // this.pageData.forEach((orderData) => {
                        //   if (orderData._id === action.data.orderId) {
                        //     this.pageData[orderIndex].status = 99;
                        //   }
                        //   orderIndex++;
                        // });
                        break;
                    case 'reactivateOrder':
                        orderIndex = 0;
                        // this.pageData.forEach((orderData) => {
                        //   if (orderData._id === action.data.orderId) {
                        //     this.pageData[orderIndex].status = 0;
                        //   }
                        //   orderIndex++;
                        // });
                        break;
                    case 'addPrice':
                        // if (action.data.isModified === 0)
                        // {
                        //   this.renderPage(this.selectTab);
                        // } else {
                        //   orderIndex = 0;
                        //   this.pageData.forEach((orderData) => {
                        //     if (orderData._id === action.data.orderId) {
                        //       // this.pageData[orderIndex].status = 2;
                        //       // this.pageData[orderIndex].payment = {amount: action.data.orderPrice, currency: 'eur'};
                        //       this.pageData.splice(orderIndex,1);
                        //     }
                        //     orderIndex++;
                        //   });
                        // }
                        break;
                    case 'editPrice':
                        orderIndex = 0;
                        // this.pageData.forEach((orderData) => {
                        //   if (orderData._id === action.data.orderId) {
                        //     this.pageData[orderIndex].status = 2;
                        //     this.pageData[orderIndex].payment.amount = action.data.orderPrice;
                        //     this.pageData[orderIndex].payment.currency = 'eur';
                        //   }
                        //   orderIndex++;
                        // });
                        break;
                    case 'continueOrder':
                        orderIndex = 0;
                        // this.pageData.forEach((orderData) => {
                        //   if (orderData._id === action.data.orderId) {
                        //     this.pageData.splice(orderIndex,1);
                        //   }
                        //   orderIndex++;
                        // });
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
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            this.subscription.unsubscribe();
        }
    };
    OrdersComponent.prototype.renderPage = function (route) {
        this.router.navigate(['orders/' + route]);
    };
    OrdersComponent.prototype.getTiming = function (initial_price) {
        var days = initial_price / 45000;
        if (days < 0.5) {
            return "metà giornata";
        }
        else if (days > 0.5 && days < 1.5) {
            return Math.round(days) + " giorno";
        }
        else {
            return Math.round(days) + " giorni";
        }
    };
    OrdersComponent.prototype.startWizard = function (estimate) {
        this.orderService.updateWizardData(estimate);
        this.router.navigate(['order/summary']);
        return false;
    };
    OrdersComponent.prototype.shareEstimate = function (estimate) {
        this.shareService.setObject(estimate);
        var newWizardData = estimate;
        var navigationExtras = { queryParams: { estimate: JSON.stringify(estimate) } };
        this.router.navigate(['share/service'], navigationExtras);
    };
    OrdersComponent.prototype.deleteEstimate = function (estimate) {
        this.deleteEstimateQuotationFromLocal(estimate);
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            this.estimates = JSON.parse(localStorage.getItem('estimates'));
        }
    };
    ///////////////////////////
    ////////// ORDER //////////
    ///////////////////////////
    OrdersComponent.prototype.getActiveOrders = function () {
        var _this = this;
        this.navigationService.updateMessage("Ordini...");
        this.ordersService.getOrders([{ name: 'order_type', value: 'ACTIVE' }]).then(function (response) {
            _this.navigationService.updateMessage("Ordini");
            _this.pageData = response.result;
        }).catch(function (error) {
            _this.navigationService.updateMessage("Ordini");
            _this.pageData = [];
        });
    };
    OrdersComponent.prototype.deleteEstimateQuotationFromLocal = function (object) {
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            var estimates = JSON.parse(localStorage.getItem('estimates'));
            var new_estimates = [];
            for (var i in estimates) {
                var estimate = estimates[i];
                if (JSON.stringify(object) !== JSON.stringify(estimate)) {
                    new_estimates.push(estimate);
                }
            }
            localStorage.setItem('estimates', JSON.stringify(new_estimates));
        }
    };
    //////////////////////////////////////
    ////////////// UTILS /////////////////
    //////////////////////////////////////
    OrdersComponent.prototype.getTotalAmount = function (details) {
        var newValue = 0;
        for (var i = 0; i < details.length; i++) {
            var detail = details[i];
            var price;
            if (isNaN(detail.amount)) {
                price = 0;
            }
            else {
                price = detail.amount;
            }
            newValue += parseInt(price);
        }
        return newValue;
    };
    OrdersComponent.prototype.getTotalMilestones = function (milestones) {
        var newValue = 0;
        for (var i = 0; i < milestones.length; i++) {
            var detail = milestones[i];
            var price;
            if (isNaN(detail.amount)) {
                price = 0;
            }
            else {
                price = detail.amount;
            }
            newValue += price;
        }
        return newValue;
    };
    OrdersComponent.prototype.getRestToPay = function () {
        var milestones = this.selectedOrder.milestones;
        var details = this.selectedOrder.details;
        return this.getTotalAmount(details) - this.getTotalMilestones(milestones);
    };
    //////////////////////////////////////
    ////////////// POPUP /////////////////
    //////////////////////////////////////
    OrdersComponent.prototype.openPopup = function (popup, order) {
        this.upfront = 0;
        this.selectedOrder = order;
        this.popup = popup;
        this.newDetails = [];
        this.newDetails = this.newDetails.concat(order.details);
    };
    OrdersComponent.prototype.closePopup = function () {
        this.popup = null;
        this.getActiveOrders();
    };
    ////////////////////////////////////////
    ///////////// ACEPT ORDER //////////////
    ////////////////////////////////////////
    OrdersComponent.prototype.acceptOrder = function () {
        var _this = this;
        this.ordersService.acceptWork(this.selectedOrder._id, 'ACCEPT').then(function (response) {
            _this.popup = null;
            // console.log('Response: ' + JSON.stringify(response));
        }).catch(function (error) {
            _this.popup = null;
            // console.log('Error: ' + JSON.stringify(error));
        });
    };
    ////////////////////////////////////////
    ///////////// UPDATE ORDER /////////////
    ////////////////////////////////////////
    OrdersComponent.prototype.formatAmount = function (amount) {
        // return this.currencyPipe.transform(detail.amount);
        // return detail.amount/100;
        return this.currencyCentPipe.transform(amount);
    };
    OrdersComponent.prototype.detailItemAmountChangeAtIndex = function ($event, detail, index) {
        // console.log(parseFloat($event.target.value));
        var amount;
        console.log('detail before is; ' + JSON.stringify(this.newDetails[index]));
        if (isNaN($event.target.value)) {
            amount = 0;
        }
        else {
            amount = (Number($event.target.value) * 100).toFixed();
        }
        console.log('amount is: ' + amount);
        this.newDetails[index].amount = amount;
        console.log('detail after is; ' + JSON.stringify(this.newDetails[index]));
        // var dtl = this.newDetails[index];
        // console.log('detail amount is; ' + dtl.amount);
        // dtl.amount = Number(dtl.amount)
        // console.log('detail after is; ' + JSON.stringify(dtl));
    };
    OrdersComponent.prototype.deleteDetailAtIndex = function (index) {
        this.newDetails.splice(index, 1);
    };
    OrdersComponent.prototype.addNewItem = function (newDetail) {
        if (newDetail.title) {
            newDetail.amount = Number(newDetail.amount);
            var detail = {
                title: newDetail.title,
                type: newDetail.type,
                count: newDetail.count,
                amount: newDetail.amount
            };
            this.newDetails.push(detail);
            newDetail.title = "";
            newDetail.amount = 0;
        }
        else {
        }
    };
    OrdersComponent.prototype.updateDetailsOrder = function () {
        var _this = this;
        // console.log('Detail are: ' + JSON.stringify(this.newDetails));
        if (this.update_state.loading) {
            return;
        }
        this.update_state.loading = true;
        if (this.newDetail.title) {
            this.newDetail.amount = Number(this.newDetail.amount);
            var detail = {
                title: this.newDetail.title,
                type: this.newDetail.type,
                count: this.newDetail.count,
                amount: this.newDetail.amount
            };
            this.newDetails.push(detail);
            this.newDetail.title = "";
            this.newDetail.amount = 0;
        }
        this.ordersService.updateOrder(this.selectedOrder._id, { action: 'UPDATE_DETAILS', details: this.newDetails }).then(function (response) {
            _this.popup = null;
            _this.update_state.loading = false;
            _this.selectedOrder.details = _this.newDetails;
        }).catch(function (error) {
            _this.popup = null;
            _this.update_state.loading = false;
        });
    };
    //////////////////////////////////////////
    ///////////// PAYMENT ////////////////////
    //////////////////////////////////////////
    OrdersComponent.prototype.changeUpFrontValue = function (ev) {
        this.upfront = ev;
    };
    OrdersComponent.prototype.payUpfront = function () {
        var _this = this;
        if (this.payment_state.loading) {
            return;
        }
        this.payment_state.loading = true;
        var fl = parseFloat(this.upfront).toFixed(2);
        var flString = fl.toString();
        var thenum = flString.replace(/[^0-9]/, '');
        this.ordersService.updateOrder(this.selectedOrder._id, { action: 'PAY_UPFRONT', upfront: thenum }).then(function (response) {
            _this.popup = null;
            _this.payment_state.loading = false;
            _this.selectedOrder.milestones.push({
                "amount": Number(thenum),
            });
        }).catch(function (error) {
            _this.popup = null;
            _this.payment_state.loading = false;
        });
    };
    OrdersComponent.prototype.payRestAmount = function (rest) {
        var _this = this;
        if (this.payment_state.loading) {
            return;
        }
        this.payment_state.loading = true;
        this.ordersService.updateOrder(this.selectedOrder._id, { action: 'PAY_UPFRONT', upfront: rest }).then(function (response) {
            _this.popup = null;
            _this.payment_state.loading = false;
        }).catch(function (error) {
            _this.popup = null;
            _this.payment_state.loading = false;
        });
    };
    // old
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
    OrdersComponent.prototype.formatedAddressFromObject = function (address) {
        var returnAddress = '';
        if (address.street) {
            returnAddress += address.street;
        }
        if (address.street_number) {
            returnAddress += ' ' + address.street_number;
        }
        if (address.city) {
            returnAddress += ', ' + address.city;
        }
        return returnAddress;
    };
    OrdersComponent.prototype.formatedDateFromString = function (date) {
        var returnDate = '';
        if (date !== 'now') {
            var dateString = date.substring(0, date.length - 5);
            dateString = dateString.split('T');
            var dateComponents = dateString[0].split('-');
            var hourComponents = dateString[1].split(':');
            // returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1]-1] + ' ' + dateComponents[0] + ' ' + hourComponents[0] + ':' + hourComponents[1];
            returnDate = dateComponents[2] + ' ' + this.it.monthNames[dateComponents[1] - 1] + ' ' + dateComponents[0];
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
        // products.forEach((product) => {
        //   let productComponents = product.split(':');
        //   if (productComponents[0].length > 0) {
        //     returnProducts.push({name: productComponents[0], items: productComponents[1]});
        //   }
        // });
        return returnProducts;
    };
    OrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(728),
            providers: [__WEBPACK_IMPORTED_MODULE_10__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__share_share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__share_share_service__["a" /* ShareService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__pipes_currency_pipe__["a" /* CurrencyPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__pipes_currency_pipe__["a" /* CurrencyPipe */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */]) === 'function' && _k) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_universal__);
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
    function ProfileComponent(profileService, router, navigationService, route, popupsService, paymentService, analyticsService, joinService, seoService) {
        this.profileService = profileService;
        this.router = router;
        this.navigationService = navigationService;
        this.route = route;
        this.popupsService = popupsService;
        this.paymentService = paymentService;
        this.analyticsService = analyticsService;
        this.joinService = joinService;
        this.seoService = seoService;
        this.contacts = '';
        this.copy_link_state = {
            title: "Copia link"
        };
        this.sharelink = '';
        this.activePopup = '';
        this.cards = [];
        this.defaultCard = '';
        //////////////////////////
        /////// TAB BAR //////////
        //////////////////////////
        this.page = '';
        this.tabs = [
            { name: 'Generali', route: 'general', icon: "fa-info" },
            { name: 'Pagamento', route: 'payment', icon: "fa-credit-card" },
            { name: 'Impostazioni', route: 'settings', icon: "fa-cog" },
        ];
        ///////////////////////
        /////// USER //////////
        ///////////////////////
        this.User = {
            firstname: '',
            lastname: '',
            email: '',
            phone_number: ''
        };
        this.user_state = {
            loading: false,
            button_title: "Salva",
            first_name_error: null,
            last_name_error: null,
            email_error: null,
            phone_number_error: null
        };
        ///////////////////////////
        /////// PASSWORD //////////
        ///////////////////////////
        this.Password = {
            old_password: '',
            new_password: '',
            confirm_password: ''
        };
        this.password_state = {
            loading: false,
            button_title: "Cambia",
            message_error: null,
            message_success: null
        };
        ////////////////////////////
        /////// AFFILIATE //////////
        ////////////////////////////
        this.invitation_state = {
            message_success: null,
            message_error: null
        };
        //////////////////////////
        /////// PAYMENT //////////
        //////////////////////////
        this.Card = {
            number: null,
            exp_month: null,
            exp_year: null,
            exp_date: null,
            cvc: '',
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_zip: '',
            address_state: '',
            address_country: '' // Paese
        };
        this.card_state = {
            loading: false,
            button_title: "Salva",
            message_error: null,
            message_success: null,
            number_error: null,
            exp_date_error: null,
            cvc_error: null
        };
        this.navigationService.updateMessage('Profilo');
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.numPattern = /^[+0-9]+$/;
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                var authData = JSON.parse(localStorage.getItem('auth'));
                this.currentUser = authData;
                this.User.firstname = authData.profile.firstname;
                this.User.lastname = authData.profile.lastname;
                this.User.phone_number = authData.phone_number;
                this.User.email = authData.email;
                this.sharelink = document.location.protocol + '//' + document.location.hostname + '/?ref=' + this.currentUser._id;
            }
            else {
                this.router.navigate(['/']);
            }
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            this.route.params.subscribe(function (params) {
                window.scrollTo(0, 0);
                _this.page = params['page'];
                if (_this.page === 'general') {
                }
                else if (_this.page === 'payment') {
                    _this.paymentService.getCards().then(function (cards) {
                        _this.defaultCard = cards.default_source;
                        _this.cards = [];
                        cards.sources.data.forEach(function (cardData) {
                            _this.cards.push(cardData);
                        });
                    }).catch(function (error) {
                        if (error.status === 404) {
                        }
                    });
                }
                else if (_this.page === 'settings') {
                }
                else if (_this.page === 'affiliate') {
                    _this.router.navigate(['profile/general']);
                }
                else if (_this.page === 'card') {
                }
                else {
                    _this.router.navigate(['profile/general']);
                }
            });
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                switch (action.type) {
                    case 'logout':
                        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
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
    ProfileComponent.prototype.clickTabItem = function (route) {
        this.router.navigate(['/profile/' + route]);
    };
    ///////////////////////
    /////// USER //////////
    ///////////////////////
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        this.user_state.loading = true;
        this.user_state.button_title = "Salvando...";
        this.profileService.updateProfile(this.User).then(function (data) {
            _this.user_state.loading = false;
            _this.user_state.button_title = "Salva";
            if (data.success) {
                var profileData = {};
                if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
                    if (localStorage.getItem('auth') !== null) {
                        var authData = JSON.parse(localStorage.getItem('auth'));
                        authData.profile.firstname = _this.User.firstname;
                        authData.profile.lastname = _this.User.lastname;
                        authData.profile.fullname = _this.User.firstname + ' ' + _this.User.lastname;
                        authData.phone_number = _this.User.phone_number;
                        profileData = authData;
                        localStorage.setItem('auth', JSON.stringify(authData));
                    }
                }
                _this.navigationService.updatePersonalMenu(profileData);
            }
        }).catch(function (error) {
            _this.user_state.loading = false;
            _this.user_state.button_title = "Salva";
        });
    };
    ///////////////////////////
    /////// PASSWORD //////////
    ///////////////////////////
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password_state.loading) {
            return;
        }
        if (this.Password.old_password.length !== 0 && this.Password.new_password.length !== 0 && this.Password.confirm_password.length !== 0) {
            if (this.Password.new_password !== this.Password.confirm_password) {
                this.password_state.message_error = "Conferma correttamente la nuova password!";
                return;
            }
        }
        else if (this.Password.old_password.length === 0 || this.Password.new_password.length === 0 || this.Password.confirm_password.length === 0) {
            this.password_state.message_error = "Compila tutti i campi richiesti!";
            return;
        }
        this.password_state.loading = true;
        this.password_state.button_title = "Cambiando...";
        this.password_state.message_success = null;
        this.password_state.message_error = null;
        this.profileService.changePassword(this.Password).then(function (data) {
            _this.password_state.loading = false;
            _this.password_state.button_title = "Cambia";
            _this.Password.old_password = '';
            _this.Password.new_password = '';
            _this.Password.confirm_password = '';
            _this.password_state.message_success = "Verifica la nuova password clicando il link che ti abbiamo inviato tramite mail.";
            _this.password_state.message_error = null;
        }).catch(function (error) {
            _this.password_state.loading = false;
            _this.password_state.button_title = "Cambia";
            _this.password_state.message_success = null;
            _this.password_state.message_error = "Errore nel cambio password";
            if (error.status === 401) {
                _this.password_state.message_error = "La password attuale inserita non è corretta.";
            }
            if (error.status === 422) {
                _this.password_state.message_error = "Inserisci tutti i parametri richiesti correttamente.";
            }
        });
    };
    ////////////////////////
    /////// EMAIL //////////
    ////////////////////////
    ProfileComponent.prototype.saveNewEmail = function () { };
    ////////////////////////////
    /////// AFFILIATE //////////
    ////////////////////////////
    ProfileComponent.prototype.sendInvitations = function () {
        var _this = this;
        var phone_numbers = [];
        var email_addresses = [];
        var strings = this.contacts.split(',');
        for (var i = 0; i < strings.length; i++) {
            var string = strings[i];
            string = string.replace(/\s/g, '');
            if (this.emailPattern.test(string)) {
                email_addresses.push(string);
            }
            else if (this.numPattern.test(string)) {
                if (string.length === 13 && string.charAt(0) === '+') {
                    phone_numbers.push(string);
                }
                else if (string.length === 12) {
                    phone_numbers.push('+' + string);
                }
                else if (string.length === 10) {
                    phone_numbers.push('+39' + string);
                }
                else if (string.length === 14) {
                    phone_numbers.push(string);
                }
            }
        }
        var phones = '';
        for (var i = 0; i < phone_numbers.length; i++) {
            var p = phone_numbers[i];
            phones += (i != 0) ? ',' : '';
            phones += p;
        }
        var emails = '';
        for (var i = 0; i < email_addresses.length; i++) {
            var e = email_addresses[i];
            emails += (i != 0) ? ',' : '';
            emails += e;
        }
        console.log('phone_numbers: ' + phone_numbers);
        if (phones === '' && emails === '') {
            this.invitation_state.message_success = null;
            this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
            return;
        }
        this.invitation_state.message_success = null;
        this.invitation_state.message_error = null;
        this.joinService.sendInvitations(this.sharelink, phones, emails).then(function (response) {
            // console.log('response: ' + JSON.stringify(response));
            _this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
        }).catch(function (error) {
            // console.log('error: ' + JSON.stringify(error));
        });
    };
    ProfileComponent.prototype.shareOnFacebook = function () {
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ProfileComponent.prototype.shareOnTwitter = function () {
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            console.log('share link is: ' + this.sharelink);
            window.open("https://twitter.com/home?status=" + this.sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ProfileComponent.prototype.shareOnLinkedin = function () {
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            var link = this.sharelink;
            var title = "Titolo";
            var summary = "Summary";
            var source = "";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ProfileComponent.prototype.shareOnGoogle = function () {
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            var link = this.sharelink;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://plus.google.com/share?url=" + link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ProfileComponent.prototype.shareWithEmail = function () {
        if (__WEBPACK_IMPORTED_MODULE_9_angular2_universal__["isBrowser"]) {
            var message = "Ciao, utilizza il link sotto per ricevere 5% di scondo sui servizi Starbook. \n" + this.sharelink;
            var subject = "Promozione Starbook";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ProfileComponent.prototype.copyLink = function (value) {
        this.copy_link_state.title = "Copiato!";
        // console.group( "Clipboard Success" );
        // console.log( value );
        // console.groupEnd();
    };
    ProfileComponent.prototype.copyError = function (error) {
        // console.group( "Clipboard Error" );
        // console.error( error );
        // console.groupEnd();
    };
    ///////////////////////
    /////// CARD //////////
    ///////////////////////
    ProfileComponent.prototype.showCardPage = function () {
        this.router.navigate(['/profile/card']);
    };
    ProfileComponent.prototype.selectCard = function (card_id) {
        var _this = this;
        this.paymentService.selectCard(card_id).then(function (status) {
            _this.defaultCard = status.default_source;
        }).catch(function (error) {
        });
    };
    ProfileComponent.prototype.deleteCard = function (card_id) {
        var _this = this;
        this.paymentService.deleteCard(card_id).then(function (status) {
            var i = 0;
            _this.cards.forEach(function (card) {
                if (card.id === card_id) {
                    _this.cards.splice(i, 1);
                }
                i++;
            });
            if (card_id === _this.defaultCard && _this.cards.length > 0) {
                var otherCard_1 = '';
                _this.cards.forEach(function (card) {
                    if (card.id !== card_id) {
                        otherCard_1 = card.id;
                    }
                });
                _this.selectCard(otherCard_1);
            }
            else {
            }
        }).catch(function (error) {
        });
    };
    ProfileComponent.prototype.addCard = function () {
        var _this = this;
        if (this.card_state.loading) {
            return;
        }
        this.card_state.loading = true;
        this.card_state.button_title = "Salvando...";
        this.card_state.message_error = null;
        this.card_state.number_error = null;
        this.card_state.exp_date_error = null;
        this.card_state.cvc_error = null;
        if (this.Card !== null) {
            if (this.paymentService.cardNumberValidate(this.Card.number)) {
                this.card_state.number_error = null;
            }
            else {
                this.card_state.number_error = "Il numero della carta non è corretto.";
            }
        }
        if (this.Card.exp_date && this.Card.exp_date.length === 5) {
            var exp_parts = this.Card.exp_date.split('/');
            if (exp_parts[0] !== this.Card.exp_date) {
                this.Card.exp_month = exp_parts[0];
                this.Card.exp_year = exp_parts[1];
            }
            else {
                this.card_state.exp_date_error = "Errore data";
            }
        }
        else {
            this.card_state.exp_date_error = "La data non è completa";
        }
        this.paymentService.addNewCard(this.Card).then(function (response) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Salva";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            _this.router.navigate(['/profile/payment']);
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Salva";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Errore nel inserimento del codice della sicurezza";
                _this.card_state.cvc_error = "Inserisci un codice corretto";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Errore nel inserimento del numero della carta o della data di scadenza";
                _this.card_state.number_error = "Inserisci un numero corretto";
                _this.card_state.exp_date_error = "Inserisci una data corretta";
            }
            else {
                _this.card_state.message_error = "Errore sconosciuto. Controlla i campi inseriti e riprova.";
            }
        });
    };
    ProfileComponent.prototype.checkExpiry = function (value) {
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
            this.card_state.exp_date_error = "Inserisci la data in formato MM/AA (mese/anno)";
        }
        if (result.length === 5) {
            var parts = result.split('/');
            if (parts[0] !== result) {
                if (parseInt(parts[1]) > year) {
                    this.card_state.exp_date_error = null;
                }
                else {
                    if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
                        this.card_state.exp_date_error = null;
                    }
                    else {
                        this.card_state.exp_date_error = "Inserisci una data corretta";
                    }
                }
            }
            else {
                this.card_state.exp_date_error = null;
            }
        }
        this.Card.exp_date = result;
        return result;
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
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(729)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_contact_service__["a" /* ContactService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _j) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestsComponent = (function () {
    function RequestsComponent(router, route, navigationService, joinService, seoService, analyticsService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.seoService = seoService;
        this.analyticsService = analyticsService;
        this.page = '';
        //////////////////////////
        /////// REQUEST  /////////
        //////////////////////////
        this.Request = {
            title: '',
            description: '',
            phone: '',
            email: '',
            firstname: '',
            lastname: ''
        };
        this.request_state = {
            loading: false,
            button_title: "Invia richiesta",
            message_success: null,
            message_error: null,
            title_error: null,
            description_error: null,
            firstname_error: null,
            lastname_error: null,
            phone_error: null,
            email_error: null
        };
        //////////////////////////
        /////// ESTIMATE /////////
        //////////////////////////
        this.Estimate = {
            service_id: '',
            title: 'Parete in cartongesso',
            details: [{ type: 'service', title: "Parete in cartongesso" }, { type: 'detail', title: "item 0" }, { type: 'detail', title: "item 0" }],
            referral_id: '23454678',
            price: {
                final: 0,
                initial: 0,
                currency: 'eur'
            },
            payment: {
                upfront: 0
            }
        };
        this.analyticsService.sendPageViewUrl(this.router.url);
        this.seoService.setTitle('Lavori di casa? Chiedi di cosa hai bisogno');
        this.seoService.setOgElem('og:title', 'Lavori di casa? Chiedi di cosa hai bisogno');
        this.seoService.setMetaElem('description', 'Inserisci il titolo e i dettagli del lavoro che vuoi svolgere. Ci occupiamo noi a trovare il miglior professionista con il miglior prezzo del mercato.');
        this.seoService.setOgElem('og:description', 'Inserisci il titolo e i dettagli del lavoro che vuoi svolgere. Ci occupiamo noi a trovare il miglior professionista con il miglior prezzo del mercato.');
        this.seoService.setOgElem('og:url', 'https://www.starbook.co' + this.router.url);
        this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/operai-professionisti-artigiani.jpg');
        this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/operai-professionisti-artigiani.jpg');
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
                if (this.currentUser) {
                    this.Request.firstname = this.currentUser.profile.firstname;
                    this.Request.lastname = this.currentUser.profile.lastname;
                    this.Request.phone = this.currentUser.phone_number;
                    this.Request.email = this.currentUser.email;
                }
            }
        }
    }
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            this.route.params.subscribe(function (params) {
                window.scrollTo(0, 0);
                _this.page = params['page'];
                if (_this.page === 'service') {
                    _this.navigationService.updateMessage("Richiedi un servizio");
                }
                else if (_this.page === 'estimate') {
                    _this.navigationService.updateMessage("Preventivo");
                }
                else {
                    _this.router.navigate(['requests/service']);
                }
            });
        }
    };
    RequestsComponent.prototype.sendRequestForNewService = function () {
        var _this = this;
        if (this.request_state.loading) {
            return;
        }
        if (!this.Request.firstname || !this.Request.lastname || !this.Request.phone || !this.Request.email || !this.Request.title || !this.Request.description) {
            this.request_state.message_success = null;
            this.request_state.message_error = "Per favore inserisci tutti i campi richiesti";
            this.request_state.title_error = "errore";
            this.request_state.description_error = "errore";
            this.request_state.firstname_error = "errore";
            this.request_state.lastname_error = "errore";
            this.request_state.phone_error = "errore";
            this.request_state.email_error = "errore";
            return;
        }
        this.request_state.message_success = null;
        this.request_state.message_error = null;
        this.request_state.title_error = null;
        this.request_state.description_error = null;
        this.request_state.firstname_error = null;
        this.request_state.lastname_error = null;
        this.request_state.phone_error = null;
        this.request_state.email_error = null;
        this.request_state.loading = true;
        this.request_state.button_title = "Inviando...";
        this.Request['type'] = "new_service_request";
        this.joinService.join(this.Request).then(function (response) {
            _this.request_state.message_success = "Complimenti, hai inviato una richiesta di servizio su Starbook. La contatteremo al più presto!";
            _this.request_state.loading = false;
            _this.request_state.button_title = "Invia richiesta";
            _this.Request.title = null;
            _this.Request.description = null;
        }).catch(function (error) {
            _this.Request.title = null;
            _this.Request.description = null;
        });
    };
    RequestsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requests',
            template: __webpack_require__(730)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object])
    ], RequestsComponent);
    return RequestsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/requests.component.js.map

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ServiceComponent = (function () {
    function ServiceComponent(commonService, navigationService, router, route, orderService, analyticsService, seoService, profileService) {
        this.commonService = commonService;
        this.navigationService = navigationService;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.profileService = profileService;
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
        this.servicesData = [];
        this.orderData = {
            service_id: '',
            service_image: '',
            price: {
                base_amount: 0
            },
            title: '',
            details: [],
            totalPrice: 0
        };
        this.orderIsFull = false;
        this.price_state = {
            loading: false,
            is_referral: false,
            referral_id: null
        };
        this.Services = [];
        this.Order = {};
        this.Service = {};
        this.OrderService = {};
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // this.route.queryParams.subscribe((params: Params) => {
            //   if (!data.referral_id || data.referral_id.length===0) {
            //     if (params['ref']) {
            //       data['referral_id'] = params['ref'];
            //     }
            //   }
            //   if (params['estimated']) {
            //     // console.log('estimated: ' + params['estimated']);
            //   }
            // });
            // SERVICE
            var service_id = params['id'];
            if (!service_id) {
            }
            else {
                _this.Service = {};
                if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                    window.scrollTo(0, 0);
                }
                _this.commonService.getServiceById(service_id).then(function (data) {
                    // this.renderPage(data.result);
                    _this.showService(data.result);
                }).catch(function (error) {
                    var service = _this.commonService.getService();
                    if (!service) {
                    }
                    else {
                        // this.renderPage(service);
                        _this.showService(service);
                    }
                });
            }
            // this.commonService.getServiceById(service_id).then((data) => {
            //   this.renderPage(data.result);
            // }).catch((error) => {
            //   this.router.navigate(['']);
            // });
            //
            // let service = this.commonService.getService();
            //
            // let service = data.service;
            // if (service_id) {
            //   if (isBrowser) {window.scrollTo(0, 0);}
            //   if (service) {
            //     this.renderPage(service);
            //   } else {
            //     this.commonService.getServiceById(service_id).then((data) => {
            //       this.renderPage(data.result);
            //     }).catch((error) => {
            //       this.router.navigate(['']);
            //     });
            //   }
            // }
            // REFERRAL
            // let referral_id = data.referral_id;
            // if (referral_id) {
            //   this.price_state.loading = true;
            //   this.price_state.is_referral = false;
            //   this.profileService.getAccountById(referral_id).then((profile) => {
            //     this.price_state.loading = false;
            //     this.price_state.is_referral = true;
            //     this.price_state.referral_id = referral_id;
            //   }).catch((error) => {
            //     this.price_state.loading = false;
            //     this.price_state.is_referral = false;
            //     this.price_state.referral_id = null;
            //   });
            // }
        });
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription = this.orderService.getOrderEvent$.subscribe(function (event) {
                _this.orderCreated(event);
            });
        }
    };
    ServiceComponent.prototype.showService = function (service) {
        this.Service = service;
        this.commonService.setService(this.Service);
        this.navigationService.updateMessage(this.Service['title']);
        this.seoService.setTitle(this.Service['title']);
        this.seoService.setOgElem('og:title', this.Service['title']);
        this.seoService.setMetaElem('description', this.Service['description']);
        this.seoService.setOgElem('og:description', this.Service['description']);
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + this.Service['title'].replace(/\s+/g, '-'));
        this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + this.Service['_id'] + '/cover/0');
        this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + this.Service['_id'] + '/cover/0');
        this.buildOrderService(this.Service);
    };
    ServiceComponent.prototype.buildOrderService = function (service) {
        this.OrderService['_id'] = service['_id'];
        this.OrderService['title'] = service['title'];
        this.OrderService['details'] = [];
        var detail = {};
        detail['title'] = service['pricing']['unit']['title'];
        detail['quantity'] = 0;
        detail['price'] = service['pricing']['unit']['price'];
        detail['total'] = detail['quantity'] * service['pricing']['unit']['price'];
        this.OrderService['details'].push(detail);
        // console.log('order service is: ' + JSON.stringify(this.OrderService));
    };
    ServiceComponent.prototype.quantityForOrderService = function (orderService) {
        return orderService['details'][0].quantity;
    };
    ServiceComponent.prototype.changeQuantityForOrderService = function () {
        var value = parseInt(this.OrderService['details'][0].quantity);
        if (isNaN(value) || value === 0) {
            this.OrderService['details'][0].quantity = 0;
        }
        else {
            this.OrderService['details'][0].quantity = value;
            this.OrderService['details'][0]['total'] = value * this.OrderService['details'][0]['price'];
        }
    };
    ServiceComponent.prototype.toggleItemOption = function (item, option) {
        var found = false;
        var index = 0;
        var details = this.OrderService['details'];
        for (var i = 0; i < details.length; i++) {
            if (details[i].title === item.title) {
                found = true;
                index = i;
                break;
            }
        }
        if (found) {
            this.OrderService['details'].splice(index, 1);
            this.OrderService['details'][0]['price'] -= item.price;
            this.OrderService['details'][0]['total'] = this.OrderService['details'][0]['quantity'] * this.OrderService['details'][0]['price'];
        }
        else {
            var detail = {};
            detail['title'] = item.title;
            detail['quantity'] = 0;
            detail['price'] = 0;
            detail['total'] = 0;
            this.OrderService['details'][0]['price'] += item.price;
            this.OrderService['details'][0]['total'] = this.OrderService['details'][0]['quantity'] * this.OrderService['details'][0]['price'];
            this.OrderService['details'].push(detail);
        }
        // console.log('order service is: ' + JSON.stringify(this.OrderService));
    };
    ServiceComponent.prototype.orderServiceDetailsContainItem = function (item) {
        var details = this.OrderService['details'];
        for (var i in details) {
            var detail = details[i];
            if (detail.title === item.title) {
                return true;
            }
        }
        return false;
    };
    ServiceComponent.prototype.getTotalEstimateQuotation = function () {
        // console.log('est: ' + JSON.stringify(this.OrderService['details']));
        var details = this.OrderService['details'];
        var newValue = 0;
        if (details) {
            for (var i = 0; i < details.length; i++) {
                var detail = details[i];
                var price;
                if (isNaN(detail.total)) {
                    price = 0;
                }
                else {
                    price = detail.total;
                }
                newValue += parseInt(price);
            }
            return newValue;
        }
        return newValue;
    };
    ServiceComponent.prototype.renderPage = function (service) {
        var _this = this;
        this.commonService.setService(service);
        this.navigationService.updateMessage(service.title);
        this.service = service;
        this.image_url = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + this.service._id + '/cover/0';
        this.seoService.setTitle(service.title + "| Preventivo Online");
        this.seoService.setOgElem('og:title', service.title + "| Preventivo Online");
        this.seoService.setMetaElem('description', service.description);
        this.seoService.setOgElem('og:description', service.description);
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + service.title.replace(/\s+/g, '-'));
        this.seoService.setOgElem('og:image', this.image_url);
        this.seoService.setOgElem('og:image:secure_url', this.image_url);
        this.defaultServices = service;
        this.title = service.title;
        this.description = service.description;
        this.Service['_id'] = service._id;
        this.Service['title'] = service.title;
        // this.Order['services'] = [this.Service]
        var detail = {
            title: "",
            quantity: 0,
            price: 0,
            total: 0
        };
        this.Service['details'] = [detail];
        this.servicesData = [];
        this.orderData = {
            service_id: service._id,
            service_image: this.image_url,
            price: service.price,
            title: service.title,
            details: [],
            totalPrice: service.price.base_amount
        };
        this.baseAmount.start = service.price.base_amount;
        this.baseAmount.calculated = service.price.base_amount;
        var formId = 0;
        // console.log('form length: ' + service.forms.length);
        service.forms.forEach(function (form) {
            // console.log('form is: ' + JSON.stringify(form));
            var serviceForm = {
                title: form.title,
                description: form.description,
                type: form.type,
                required: form.required,
                price_type: form.price_type,
                options: []
            };
            var optionId = 0;
            form.options.forEach(function (item) {
                var option = {
                    formId: formId,
                    optionId: optionId,
                    title: item.title,
                    description: item.description,
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
        this.Services.push(this.Service);
        // console.log('this services: ' + JSON.stringify(this.Services));
        this.calculateOrder();
    };
    ServiceComponent.prototype.bookService = function () {
        // console.log('OrderService: ' + JSON.stringify(this.OrderService));
        this.orderService.updateWizardData([this.OrderService]);
        this.router.navigate(['order/summary']);
        return false;
    };
    ServiceComponent.prototype.toggleService = function (serviceName, itemName) {
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
                            }
                            else {
                                if (_this.checkNotEmptyForm(item.formId, item.optionId)) {
                                    _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                                }
                            }
                        }
                        else if (!currentValue && service.required === true) {
                            if (service.type === 'RADIOBUTTON') {
                                _this.uncheckAllItems(serviceName);
                                _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                            }
                            else {
                                _this.servicesData[serviceId].options[itemId_1].selected = !currentValue;
                            }
                        }
                        else {
                            if (service.type === 'RADIOBUTTON') {
                                _this.uncheckAllItems(serviceName);
                            }
                            else {
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
    ServiceComponent.prototype.checkNotEmptyForm = function (formId, optionId) {
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
    ServiceComponent.prototype.changeValue = function (formId, optionId) {
        var value = parseInt(this.servicesData[formId].options[optionId].input_value);
        if (isNaN(value) || value === 0) {
            this.servicesData[formId].options[optionId].input_value = 0;
        }
        else {
            this.servicesData[formId].options[optionId].input_value = value;
        }
        this.calculateOrder();
    };
    ServiceComponent.prototype.selectAllContent = function ($event) {
        // console.log('select: ' + JSON.stringify($event));
        $event.target.select();
    };
    ServiceComponent.prototype.uncheckAllItems = function (serviceName) {
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
    ServiceComponent.prototype.queueWorker = function () {
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
    ServiceComponent.prototype.calculateOrder = function () {
        var _this = this;
        this.queueWorker();
        this.orderData.details = [];
        this.orderData.totalPrice = this.baseAmount.calculated;
        var currentOrderState = [];
        var serviceId = 0;
        this.servicesData.forEach(function (service) {
            var itemId = 0;
            service.options.forEach(function (item) {
                if (service.type === 'RADIOBUTTON') {
                    if (item.selected) {
                        currentOrderState.push({ title: item.title, type: "detail", count: item.input_value, amount: 0 });
                    }
                }
                else if (service.type === 'CHECKBOX') {
                    if (item.selected) {
                        currentOrderState.push({ title: item.title, type: "detail", count: item.input_value, amount: 0 });
                    }
                }
                else if (service.type === 'INPUTTEXT') {
                    if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
                        currentOrderState.push({ title: item.title, type: "detail", count: item.input_value, amount: 0 });
                    }
                    if (service.price_type === 'AMOUNT_PER_INPUT' && item.input_value != 0) {
                        currentOrderState.push({ title: item.title, type: "detail", count: item.input_value, amount: 0 });
                    }
                }
                itemId++;
            });
            serviceId++;
        });
        currentOrderState.forEach(function (service) {
            if (service.title) {
                _this.orderData.details.push(service);
            }
        });
        if (currentOrderState.length > 0) {
            this.orderIsFull = true;
        }
        else {
            this.orderIsFull = false;
        }
    };
    ServiceComponent.prototype.orderCreated = function (event) {
        var _this = this;
        this.servicesData.forEach(function (service) {
            _this.uncheckAllItems(service.title);
        });
        this.renderPage(this.defaultServices);
    };
    ServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(731)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], ServiceComponent);
    return ServiceComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/service.component.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesComponent = (function () {
    function ServicesComponent(router, navigationService, commonService) {
        this.router = router;
        this.navigationService = navigationService;
        this.commonService = commonService;
        this.services_state = {
            loading: false,
            title: "Servizi piu richiesti"
        };
        this.services = [];
        this.images_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/";
        this.navigationService.updateMessage('');
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services_state.loading = true;
        this.services_state.title = "Caricando i servizi...";
        this.commonService.getAllServices({}).then(function (services) {
            _this.services = services.result;
            _this.services_state.loading = false;
            _this.services_state.title = "Tutti i servizi";
        }).catch(function (error) {
            _this.services_state.loading = false;
            _this.services_state.title = "Tutti i servizi";
        });
    };
    ServicesComponent.prototype.selectResult = function (service) {
        this.commonService.setService(service);
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(732)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === 'function' && _c) || Object])
    ], ServicesComponent);
    return ServicesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/services.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WizardComponent = (function () {
    function WizardComponent(router, route, analyticsService, orderService, authService, navigationService, paymentService, profileService) {
        this.router = router;
        this.route = route;
        this.analyticsService = analyticsService;
        this.orderService = orderService;
        this.authService = authService;
        this.navigationService = navigationService;
        this.paymentService = paymentService;
        this.profileService = profileService;
        this.wizardDataItems = ['Sommario', 'Indirizzo', 'Data', 'Anteprima', 'Fine'];
        this.formError = false;
        this.step = '';
        ////////////////////////////
        //// ORDER OBJECT //////////
        ////////////////////////////
        this.Order = {
            service_id: '',
            title: '',
            description: '',
            details: [],
            date: null,
            address: null,
            referral_id: null,
            upfront_amount: 0,
            timing: {
                days: ''
            }
        };
        this.order_status = {
            loading: false,
            button_title: "Invia ordine",
            error_message: null,
            payment_error_message: null,
            created: false
        };
        ///////////////////////////////
        //// CONFIRM ADDRESS //////////
        ///////////////////////////////
        this.address = {
            street: null,
            street_number: null,
            city: null,
            postal_code: null,
            province: null,
            country: null,
            country_code: null
        };
        this.address_state = {
            loading: false,
            error_message: null,
        };
        this.addresses = [];
        ////////////////////////////
        //// CONFIRM DATE //////////
        ////////////////////////////
        this.date = null;
        this.minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.maxDate = new Date(new Date().getTime() + (24 * 28) * 60 * 60 * 1000);
        this.formated_date = null;
        this.date_state = {
            loading: false,
            error_message: null
        };
        /////////////////////////
        /////// LOGIN  //////////
        /////////////////////////
        this.loginParameters = {
            email: '',
            password: ''
        };
        this.login_state = {
            loading: false,
            button_title: "Accedi",
            error_message: null,
            email_error: null,
            password_error: null,
        };
        //////////////////////////
        /////// Signup  //////////
        //////////////////////////
        this.signupParameters = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.signup_state = {
            loading: false,
            button_title: "Registrati",
            error_message: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            password_error: null,
            confirm_password_error: null
        };
        ///////////////////////////
        /////// FACEBOOK //////////
        ///////////////////////////
        this.facebook_state = {
            loading: false,
            button_title: "Continua con Facebook",
            error_message: null,
        };
        //////////////////////////
        /////// PROFILE //////////
        //////////////////////////
        this.profileInformation = {
            phone_number: ''
        };
        this.profile_info_state = {
            loading: false,
            button_title: "Salva",
            phone_number_error: null
        };
        //////////////////////////
        /////// PAYMENT //////////
        //////////////////////////
        this.Card = {
            number: null,
            exp_month: null,
            exp_year: null,
            exp_date: null,
            cvc: '',
            name: '',
            address_line1: '',
            address_line2: '',
            address_city: '',
            address_zip: '',
            address_state: '',
            address_country: '' // Paese
        };
        this.card_state = {
            loading: false,
            button_title: "Salva",
            message_error: null,
            message_success: null,
            number_error: null,
            exp_date_error: null,
            cvc_error: null
        };
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.it = {
            firstDayOfWeek: 1,
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
                'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
        this.analyticsService.sendPageViewUrl(this.router.url);
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.service_data = this.orderService.getWizardData();
            if (Object.keys(this.service_data).length === 0) {
                this.Order = this.readOrderFromLocal();
                if (this.Order.address) {
                    if (this.Order.address.street_number.length > 0) {
                        this.temp_address = this.Order.address.street + ', ' + this.Order.address.street_number + ' ' + this.Order.address.city;
                    }
                    else {
                        this.temp_address = this.Order.address.street + ', ' + this.Order.address.city;
                    }
                }
                if (this.Order.date) {
                    this.temp_date = new Date(this.Order.date);
                    var date = new Date(this.Order.date);
                    var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
                    this.formated_date = day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear();
                }
            }
            else {
                // console.log('OrderService: ' + JSON.stringify(this.service_data));
                var service = this.service_data[0];
                this.Order.service_id = service._id;
                this.Order.title = service.title;
                // this.Order.description = this.service_data.description;
                this.Order.details = service.details;
                // this.Order.referral_id = this.service_data.referral_id;
                // this.Order.upfront_amount = this.service_data.upfront_amount;
                // this.Order.timing = this.service_data.timing;
                this.saveOrderToLocal(this.Order);
            }
        }
    }
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
        }
        this.route.params.subscribe(function (params) {
            _this.step = params['step'];
            if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.order_status.created && _this.step !== 'end' && _this.step !== 'info') {
                _this.router.navigate(['services', _this.Order.title.replace(/\s+/g, '-')]);
            }
            if (_this.step === 'summary') {
                _this.navigationService.updateMessage("Sommario del servizio");
            }
            else if (_this.step === 'address') {
                _this.navigationService.updateMessage("Inserisci l'indirizzo");
            }
            else if (_this.step === 'date') {
                _this.navigationService.updateMessage("Inserisci la data");
            }
            else if (_this.step === 'preview') {
                _this.navigationService.updateMessage("Anteprima ordine");
            }
            else if (_this.step === 'end') {
                _this.navigationService.updateMessage("Ordine effetuato");
            }
            else if (_this.step === 'login') {
                _this.navigationService.updateMessage("Accedi");
                _this.wizardDataItems[3] = "Login";
            }
            else if (_this.step === 'signup') {
                _this.navigationService.updateMessage("Registrazione");
                _this.wizardDataItems[3] = "Signup";
            }
            else if (_this.step === 'card') {
                _this.navigationService.updateMessage("Metodo di pagamento");
                _this.wizardDataItems[3] = "Carta";
            }
            else if (_this.step === 'info') {
                _this.navigationService.updateMessage("Informazioni profilo");
                _this.wizardDataItems[4] = "Info";
            }
            else {
                _this.router.navigate(['services', _this.Order.title.replace(/\s+/g, '-')]);
            }
        });
    };
    WizardComponent.prototype.onResize = function () {
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
        }
    };
    WizardComponent.prototype.back = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Back', label: this.router.url });
        if (this.step === 'address') {
            this.router.navigate(['order/summary']);
        }
        else if (this.step === 'date') {
            this.router.navigate(['order/address']);
        }
        else if (this.step === 'preview') {
            if (!this.order_status.loading) {
                this.router.navigate(['order/date']);
            }
        }
        else if (this.step === 'card') {
            if (!this.card_state.loading) {
                this.router.navigate(['order/preview']);
            }
        }
    };
    ///////////////////////////////
    //// CONFIRM PREVIEW //////////
    ///////////////////////////////
    WizardComponent.prototype.confirmPreview = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Confirm summary', label: this.router.url });
        this.router.navigate(['order/address']);
    };
    WizardComponent.prototype.daysString = function (days) {
        if (days < 0.5) {
            return "1/2 Giorno";
        }
        else if (days > 0.5 && days < 1.5) {
            return Math.round(days) + " Giorno";
        }
        else {
            return Math.round(days) + " Giorni";
        }
    };
    ///////////////////////////////
    //// CONFIRM ADDRESS //////////
    ///////////////////////////////
    WizardComponent.prototype.confirmAddress = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Confirm address', label: this.router.url });
        if (!this.Order.address) {
            this.address_state.error_message = "Per favore inserisci un indirizzo corretto";
            return;
        }
        this.address_state.error_message = null;
        this.router.navigate(['order/date']);
    };
    WizardComponent.prototype.getAddresses = function (event) {
        var _this = this;
        this.address_state.error_message = null;
        // if (event.query.length === 0) {
        //   this.address_state.error_message = "Per favore inserisci un indirizzo per procedere";
        //   return;
        // }
        if (this.temp_address_street_number_city !== event.query) {
            this.address_state.error_message = "Per favore inserisci un indirizzo corretto";
        }
        else if (!this.temp_address || this.temp_address === "") {
            this.address_state.error_message = "Per favore compila il campo richiesto";
        }
        else {
            this.address_state.error_message = "Per favore compila il campo richiesto";
        }
        this.orderService.getAddresses(event.query).then(function (addresses) {
            _this.addresses = [];
            _this.addresses = addresses;
        }).catch(function (error) {
            // console.log(error);
        });
    };
    WizardComponent.prototype.selectAddress = function (value) {
        this.address.street = value.street;
        this.address.street_number = value.street_number;
        this.address.city = value.city;
        this.address.postal_code = value.postal_code;
        this.address.province = value.province;
        this.address.country = value.country;
        this.address.country_code = value.country_code;
        this.address_state.error_message = null;
        this.temp_address_street_number_city = this.temp_address.street_number_city;
        this.Order.address = this.address;
    };
    WizardComponent.prototype.clickOutsideAddressInput = function () {
        if (!this.Order.address) {
            this.temp_address = null;
        }
    };
    ////////////////////////////
    //// CONFIRM DATE //////////
    ////////////////////////////
    WizardComponent.prototype.confirmDate = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Confirm date', label: this.router.url });
        if (!this.Order.date) {
            this.date_state.error_message = "Per favore inserisci una data";
            return;
        }
        this.router.navigate(['order/preview']);
    };
    WizardComponent.prototype.selectDate = function () {
        var date = new Date(this.temp_date);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var correctMonth = 1 + date.getMonth();
        var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
        this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
        this.date_state.error_message = null;
        this.Order.date = this.date;
        this.saveOrderToLocal(this.Order);
        var _date = new Date(this.Order.date);
        var _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
        this.formated_date = _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
    };
    /////////////////////////////
    //// CONFIRM ORDER //////////
    /////////////////////////////
    WizardComponent.prototype.confirmOrder = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Confirm order', label: this.router.url });
        if (localStorage.getItem('auth')) {
            this.order_status.loading = true;
            this.order_status.button_title = "Inviando l'ordine...";
            this.order_status.error_message = null;
            // console.log('this.Order is: ' + JSON.stringify(this.Order));
            this.orderService.saveOrder(this.Order).then(function (response) {
                _this.order_status.loading = false;
                _this.order_status.button_title = "Invia ordine";
                _this.order_status.error_message = null;
                if (response.status === 201) {
                    _this.order_status.error_message = "Effetua l'accesso prima di creare un ordine";
                    _this.order_status.created = true;
                    _this.router.navigate(['order/end']);
                }
            }).catch(function (errorData) {
                _this.order_status.loading = false;
                _this.order_status.button_title = "Invia ordine";
                _this.router.navigate(['order/preview']);
                var _body = JSON.parse(errorData._body);
                if (errorData.status === 400) {
                    if (_body.message === "no_stripe_customer") {
                        _this.order_status.error_message = "Inserisci un metodo di pagamento.";
                        _this.router.navigate(['order/card']);
                    }
                    else {
                        _this.order_status.error_message = "C'è stato un errore, per favore effettua di nuovo l'accesso al account.";
                    }
                }
                else if (errorData.status === 402) {
                    if (_body.message === "no_cards") {
                        _this.order_status.error_message = "Inserisci un metodo di pagamento.";
                        // this.order_status.payment_error_message = "Vai alla pagina";
                        _this.router.navigate(['order/card']);
                    }
                }
                else if (errorData.status === 403) {
                    _this.order_status.error_message = "service not supported in your location";
                }
            });
        }
        else {
            this.router.navigate(['order/signup']);
        }
    };
    ///////////////////////////
    //// CONFIRM END //////////
    ///////////////////////////
    WizardComponent.prototype.confirmEnd = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Confirm end', label: this.router.url });
        var user = JSON.parse(localStorage.getItem('auth'));
        if (!user.phone_number || user.phone_number.length < 10) {
            this.router.navigate(['order/info']);
        }
        else {
            this.router.navigate(['orders/requests']);
        }
    };
    ////////////////////////////////////
    ////////// AUTHENTICATION //////////
    ////////////////////////////////////
    WizardComponent.prototype.login = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Login', label: this.router.url });
        if (this.login_state.loading || this.facebook_state.loading) {
            return;
        }
        if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
            if (this.loginParameters.email.length === 0) {
                this.login_state.email_error = "Inserisci un indirizzo email";
            }
            else {
                this.login_state.email_error = null;
            }
            if (this.loginParameters.password.length === 0) {
                this.login_state.password_error = "Inserisci una password";
            }
            else {
                this.login_state.password_error = null;
            }
            return;
        }
        this.login_state.loading = true;
        this.login_state.button_title = "Accedendo...";
        this.authService.login(this.loginParameters.email, this.loginParameters.password).then(function (data) {
            _this.login_state.loading = false;
            _this.login_state.button_title = "Accedi";
            _this.login_state.error_message = null;
            _this.router.navigate(['order/preview']);
            _this.confirmOrder();
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.login_state.email_error = null;
            _this.login_state.password_error = null;
            _this.login_state.loading = false;
            _this.login_state.button_title = "Accedi";
            switch (error) {
                case 404:
                    _this.login_state.error_message = "Non esiste un account con questa mail! Crea un nuovo account.";
                    break;
                case 401:
                    _this.login_state.error_message = "La password non è corretta!";
                    break;
                default:
            }
        });
    };
    WizardComponent.prototype.changeToSignup = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Change to signup', label: this.router.url });
        if (this.login_state.loading) {
            return;
        }
        this.router.navigate(['order/signup']);
    };
    WizardComponent.prototype.signup = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Signup', label: this.router.url });
        if (this.signup_state.loading || this.facebook_state.loading) {
            return;
        }
        if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
            if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
                return;
            }
            else {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = null;
            }
            if (!this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
                return;
            }
        }
        else {
            if (this.signupParameters.email.length === 0) {
                this.signup_state.email_error = "Inserisci un indirizzo email";
            }
            else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
            }
            else {
                this.signup_state.email_error = null;
            }
            if (this.signupParameters.firstname.length === 0) {
                this.signup_state.first_name_error = "Inserisci un nome";
            }
            else {
                this.signup_state.first_name_error = null;
            }
            if (this.signupParameters.lastname.length === 0) {
                this.signup_state.last_name_error = "Inserisci un cognome";
            }
            else {
                this.signup_state.last_name_error = null;
            }
            if (this.signupParameters.phone.length < 9) {
                this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
                if (this.signupParameters.phone.length === 0) {
                    this.signup_state.phone_error = "Inserisci un numero di telefono";
                }
            }
            else {
                this.signup_state.phone_error = null;
            }
            if (this.signupParameters.password.length === 0) {
                this.signup_state.password_error = "Inserisci una password";
            }
            else {
                this.signup_state.password_error = null;
            }
            if (this.signupParameters.confirmPassword.length === 0) {
                this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
            }
            else {
                this.signup_state.confirm_password_error = null;
            }
            if (this.signupParameters.password.length > 0 &&
                this.signupParameters.confirmPassword.length > 0
                && this.signupParameters.password !== this.signupParameters.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
            }
            return;
        }
        this.signup_state.loading = true;
        this.signup_state.button_title = "Registrando...";
        this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.signup_state.error_message = null;
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrando...";
            _this.router.navigate(['order/preview']);
            _this.confirmOrder();
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrati";
            switch (error) {
                case 409:
                    _this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.signup_state.error_message = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.signup_state.error_message = null;
            }
        });
    };
    WizardComponent.prototype.changeToLogin = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Change to login', label: this.router.url });
        if (this.signup_state.loading) {
            return;
        }
        this.router.navigate(['order/login']);
    };
    WizardComponent.prototype.continueWithFacebook = function () {
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Continue with facebook', label: this.router.url });
        if (this.login_state.loading || this.signup_state.loading) {
            return;
        }
        this.facebook_state.loading = true;
        this.facebook_state.button_title = "Accedendo...";
        this.facebook_state.error_message = null;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            var timeStart = Date.now();
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var facebookPopup = window.open('https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook', 
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://glacial-shore-66987.herokuapp.com/facebook',
            '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            this.checkAccessToken(facebookPopup, 1, timeStart);
        }
    };
    WizardComponent.prototype.checkAccessToken = function (facebookWindow, context, timeStart) {
        var _this = this;
        if (facebookWindow.closed) {
            var accessToken = localStorage.getItem('facebook_token');
            this.authService.facebookLogin(accessToken).then(function (userData) {
                _this.navigationService.updatePersonalMenu(userData);
                _this.router.navigate(['order/preview']);
                _this.confirmOrder();
                _this.facebook_state.loading = false;
                _this.facebook_state.button_title = "Continua con Facebook";
                _this.facebook_state.error_message = null;
            }).catch(function (error) {
                _this.analyticsService.sendException(error);
                _this.facebook_state.loading = false;
                _this.facebook_state.button_title = "Continua con Facebook";
                _this.facebook_state.error_message = "Errore di accesso con Facebook!";
            });
        }
        else {
            var self_1 = this;
            setTimeout(function () { self_1.checkAccessToken(facebookWindow, context + 1, timeStart); }, 200);
        }
    };
    //////////////////////////
    ////////// CARD //////////
    //////////////////////////
    WizardComponent.prototype.addCard = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Add card', label: this.router.url });
        if (this.card_state.loading) {
            return;
        }
        this.card_state.loading = true;
        this.card_state.button_title = "Salvando carta...";
        this.card_state.message_error = null;
        this.card_state.number_error = null;
        this.card_state.exp_date_error = null;
        this.card_state.cvc_error = null;
        if (this.Card !== null) {
            if (this.paymentService.cardNumberValidate(this.Card.number)) {
                this.card_state.number_error = null;
            }
            else {
                this.card_state.number_error = "Il numero della carta non è corretto.";
            }
        }
        if (this.Card.exp_date && this.Card.exp_date.length === 5) {
            var exp_parts = this.Card.exp_date.split('/');
            if (exp_parts[0] !== this.Card.exp_date) {
                this.Card.exp_month = exp_parts[0];
                this.Card.exp_year = exp_parts[1];
            }
            else {
                this.card_state.exp_date_error = "Errore data";
            }
        }
        else {
            this.card_state.exp_date_error = "La data non è completa";
        }
        this.paymentService.addNewCard(this.Card).then(function (response) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            _this.router.navigate(['order/preview']);
            _this.confirmOrder();
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Inserisci correttamente i dati della carta";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Inserisci correttamente i dati della carta";
            }
            else {
                _this.card_state.message_error = "Errore sconosciuto. Controlla i campi inseriti e riprova.";
            }
        });
    };
    WizardComponent.prototype.checkExpiry = function (value) {
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
            this.card_state.exp_date_error = "Inserisci la data in formato MM/AA (mese/anno)";
        }
        if (result.length === 5) {
            var parts = result.split('/');
            if (parts[0] !== result) {
                if (parseInt(parts[1]) > year) {
                    this.card_state.exp_date_error = null;
                }
                else {
                    if (parseInt(parts[0]) >= parseInt(month) && parseInt(parts[1]) === year) {
                        this.card_state.exp_date_error = null;
                    }
                    else {
                        this.card_state.exp_date_error = "Inserisci una data corretta";
                    }
                }
            }
            else {
                this.card_state.exp_date_error = null;
            }
        }
        this.Card.exp_date = result;
        return result;
    };
    ////////////////////////////////////
    ////////// PROFILE INFO ////////////
    ////////////////////////////////////
    WizardComponent.prototype.saveInformations = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Booking', action: 'Update profile info', label: this.router.url });
        if (this.profile_info_state.loading) {
            return;
        }
        if (this.profileInformation.phone_number.length < 9) {
            this.profile_info_state.loading = false;
            this.profile_info_state.phone_number_error = "Il numero inserito non è completo";
            if (this.profileInformation.phone_number.length === 0) {
                this.profile_info_state.phone_number_error = "Inserisci un numero di telefono";
            }
            return;
        }
        var userData = JSON.parse(localStorage.getItem('auth'));
        userData['phone_number'] = this.profileInformation.phone_number;
        this.profile_info_state.loading = true;
        this.profile_info_state.button_title = "Salvando...";
        this.profileService.updateProfile(userData).then(function (data) {
            localStorage.setItem('auth', JSON.stringify(userData));
            _this.profile_info_state.loading = false;
            _this.profile_info_state.phone_number_error = null;
            _this.profile_info_state.button_title = "Salva";
            _this.router.navigate(['services', _this.Order.title.replace(/\s+/g, '-')]);
        }).catch(function (error) {
            _this.analyticsService.sendException(error);
            _this.profile_info_state.loading = false;
            _this.profile_info_state.phone_number_error = null;
            _this.profile_info_state.button_title = "Salva";
        });
    };
    ///////////////////////////
    ////////// ORDER //////////
    ///////////////////////////
    WizardComponent.prototype.saveOrderToLocal = function (order) {
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            localStorage.setItem('order', JSON.stringify(order));
        }
    };
    WizardComponent.prototype.readOrderFromLocal = function () {
        var recovery;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            recovery = localStorage.getItem('order');
        }
        return JSON.parse(recovery);
    };
    WizardComponent.prototype.deleteLocalOrder = function () {
        localStorage.removeItem('order');
    };
    WizardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(734)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__["a" /* PaymentService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], WizardComponent);
    return WizardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/wizard.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClipboardService; });
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



var ClipboardService = (function () {
    // I initialize the Clipboard service.
    // --
    // CAUTION: This service is tightly couped to the browser DOM (Document Object Model).
    // But, by injecting the "document" reference rather than trying to reference it
    // globally, we can at least pretend that we are trying to lower the tight coupling.
    function ClipboardService(dom) {
        this.dom = dom;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I copy the given value to the user's system clipboard. Returns a promise that
    // resolves to the given value on success or rejects with the raised Error.
    ClipboardService.prototype.copy = function (value) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var textarea = null;
            try {
                // In order to execute the "Copy" command, we actually have to have
                // a "selection" in the currently rendered document. As such, we're
                // going to inject a Textarea element and .select() it in order to
                // force a selection.
                // --
                // NOTE: This Textarea is being rendered off-screen.
                textarea = _this.dom.createElement("textarea");
                textarea.style.height = "0px";
                textarea.style.left = "-100px";
                textarea.style.opacity = "0";
                textarea.style.position = "fixed";
                textarea.style.top = "-100px";
                textarea.style.width = "0px";
                _this.dom.body.appendChild(textarea);
                // Set and select the value (creating an active Selection range).
                textarea.value = value;
                textarea.select();
                // Ask the browser to copy the current selection to the clipboard.
                _this.dom.execCommand("copy");
                resolve(value);
            }
            finally {
                // Cleanup - remove the Textarea from the DOM if it was injected.
                if (textarea && textarea.parentNode) {
                    textarea.parentNode.removeChild(textarea);
                }
            }
        });
        return (promise);
    };
    ClipboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DOCUMENT"])), 
        __metadata('design:paramtypes', [Object])
    ], ClipboardService);
    return ClipboardService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/clipboard.service.js.map

/***/ },

/***/ 413:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 413;


/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_browser_module__ = __webpack_require__(522);







/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_6__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/client.js.map

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(78);
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
        // this.api = 'https://api.starbook.co/v0.9.1/';
        this.http = http;
        this.protocol = "https";
        this.hostname = "api.starbook.co";
        this.api_version = "v0.9.1";
        this.api = 'https://api.starbook.co/v0.9.1/';
        this.orderEvent = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.wizardData = {};
        this.googleApi = 'https://maps.googleapis.com/maps/api/geocode/json';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getOrderEvent$ = this.orderEvent.asObservable();
        }
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                this.api_version = "v0.9.1";
            }
            else {
                this.api_version = "t0.9.1";
            }
        }
        this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
        // this.api = 'http://localhost/t0.9.1/';
    }
    OrderService.prototype.makeEvent = function (event) {
        this.orderEvent.next(event);
    };
    OrderService.prototype.updateWizardData = function (wizardData) {
        this.wizardData = wizardData;
    };
    OrderService.prototype.getWizardData = function () {
        return this.wizardData;
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
        // console.log('orderData is: ' + JSON.stringify(orderData));
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'orders', {
            service_id: orderData.service_id,
            description: orderData.description,
            details: orderData.details,
            date: orderData.date,
            address: orderData.address,
            referral_id: orderData.referral_id,
            upfront_amount: orderData.upfront_amount
        }, this._makeHeaders()).toPromise().then(function (response) {
            return response;
        }).catch(this.handleError);
    };
    OrderService.prototype.getAddresses = function (key) {
        // this.navigationService.updateLoadingStatus(true);
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var addresses = [];
        params.set('address', key);
        params.set('language', 'it');
        params.set('components', 'country:IT');
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
                    full: '',
                    street_number_city: '',
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
                addressData.full = address.formatted_address;
                if (addressData.street && addressData.city) {
                    if (addressData.street_number) {
                        addressData.street_number_city = addressData.street + ', ' + addressData.street_number + ' ' + addressData.city;
                    }
                    else {
                        addressData.street_number_city = addressData.street + ', ' + addressData.city;
                    }
                    addresses.push(addressData);
                }
                // console.log(addressData);
                // console.log(JSON.stringify(address));
                // if (address.types[0] === 'street_address') {
                //   addressData.isFull = true;
                // }
                // if (addressData.country_code === 'IT') {
                //   addresses.push(addressData);
                // }
            });
            return addresses;
        }).catch(this.handleError);
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

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(68);
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
var __universal__ = __webpack_require__(541);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(68);

if (!__WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"]['ViewUtils']) {
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"]['ViewUtils'] = __WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"]['view_utils'];
}
if (__compiler__ && __compiler__.SelectorMatcher && __compiler__.CssSelector) {
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__workaround.browser.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_profile_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_orders_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_share_share_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_clipboard_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__landing_landing_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_category_category_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_service_service_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_services_services_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_insert_insert_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__order_order_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_orders_orders_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__popups_popups_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_phone_pipe__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_expiry_pipe__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_loading_loading_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_facebook_facebook_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_wizard_wizard_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_about_about_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_help_help_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_legal_legal_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_account_account_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_requests_requests_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_share_share_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_blog_blog_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_contact_contact_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_notfound_notfound_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__directives_clipboard_directive__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__directives_formatter_directive__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pipes_currency_pipe__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pipes_currency_format_pipe__ = __webpack_require__(534);
/* unused harmony export HammerConfig */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















































var HammerConfig = (function (_super) {
    __extends(HammerConfig, _super);
    function HammerConfig() {
        _super.apply(this, arguments);
        this.overrides = {
            'swipe': { velocity: 0.4, threshold: 20 }
        };
    }
    return HammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HammerGestureConfig"]));
var imports = [
    __WEBPACK_IMPORTED_MODULE_2_angular2_universal__["UniversalModule"],
    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
    __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
    // MasonryModule,
    __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
    // NgbModule.forRoot(),
    // AutoCompleteModule,
    // CalendarModule,
    __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__["ClickOutsideModule"],
    __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
];
var declarations = [
    __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_24__landing_landing_component__["a" /* LandingComponent */],
    __WEBPACK_IMPORTED_MODULE_29__order_order_component__["a" /* OrderComponent */],
    __WEBPACK_IMPORTED_MODULE_30__pages_orders_orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_31__pages_profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_32__popups_popups_component__["a" /* PopupsComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pages_service_service_component__["a" /* ServiceComponent */],
    __WEBPACK_IMPORTED_MODULE_35__shared_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_36__pages_facebook_facebook_component__["a" /* FacebookComponent */],
    __WEBPACK_IMPORTED_MODULE_37__pages_wizard_wizard_component__["a" /* WizardComponent */],
    __WEBPACK_IMPORTED_MODULE_38__pages_about_about_component__["a" /* AboutComponent */],
    __WEBPACK_IMPORTED_MODULE_39__pages_help_help_component__["a" /* HelpComponent */],
    __WEBPACK_IMPORTED_MODULE_40__pages_legal_legal_component__["a" /* LegalComponent */],
    __WEBPACK_IMPORTED_MODULE_41__pages_account_account_component__["a" /* AccountComponent */],
    __WEBPACK_IMPORTED_MODULE_27__pages_services_services_component__["a" /* ServicesComponent */],
    __WEBPACK_IMPORTED_MODULE_28__pages_insert_insert_component__["a" /* InsertComponent */],
    __WEBPACK_IMPORTED_MODULE_42__pages_requests_requests_component__["a" /* RequestsComponent */],
    __WEBPACK_IMPORTED_MODULE_43__pages_share_share_component__["a" /* ShareComponent */],
    __WEBPACK_IMPORTED_MODULE_44__pages_blog_blog_component__["a" /* BlogComponent */],
    __WEBPACK_IMPORTED_MODULE_25__pages_category_category_component__["a" /* CategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_45__pages_contact_contact_component__["a" /* ContactComponent */],
    __WEBPACK_IMPORTED_MODULE_46__pages_notfound_notfound_component__["a" /* NotfoundComponent */],
    __WEBPACK_IMPORTED_MODULE_47__directives_clipboard_directive__["a" /* ClipboardDirective */],
    __WEBPACK_IMPORTED_MODULE_48__directives_formatter_directive__["a" /* FormatterDirective */],
    __WEBPACK_IMPORTED_MODULE_49__pipes_currency_pipe__["a" /* CurrencyPipe */],
    __WEBPACK_IMPORTED_MODULE_33__pipes_phone_pipe__["a" /* PhonePipe */],
    __WEBPACK_IMPORTED_MODULE_34__pipes_expiry_pipe__["a" /* ExpiryPipe */],
    __WEBPACK_IMPORTED_MODULE_50__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */]
];
var exp = [
    __WEBPACK_IMPORTED_MODULE_48__directives_formatter_directive__["a" /* FormatterDirective */],
    __WEBPACK_IMPORTED_MODULE_49__pipes_currency_pipe__["a" /* CurrencyPipe */],
    __WEBPACK_IMPORTED_MODULE_50__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */]
];
if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(711).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(710).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(529).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(528).AutoCompleteMockComponent;
    declarations.push(AutoCompleteMockModule);
}
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: declarations,
            imports: imports,
            providers: [
                // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
                // {
                //   provide: HAMMER_GESTURE_CONFIG,
                //   useClass: HammerConfig
                // },
                __WEBPACK_IMPORTED_MODULE_9__shared_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__order_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_orders_service__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_15__popups_popups_service__["a" /* PopupsService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_seo_service__["a" /* SeoService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_20__pages_share_share_service__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_clipboard_service__["a" /* ClipboardService */],
                __WEBPACK_IMPORTED_MODULE_49__pipes_currency_pipe__["a" /* CurrencyPipe */]
            ],
            exports: exp
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.browser.module.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__ = __webpack_require__(33);
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
    function AppComponent(router, route, authServics, navigationService, popupsService, commonService, analyticsService, seoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupsService = popupsService;
        this.commonService = commonService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
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
        this.newServiceRequest = {
            message: 'Richiedi?'
        };
        this.collapsed = false;
        this.page = null;
        this.hasCenterContainer = true;
        this.hasRightContainer = true;
        this.navbarState = false;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                    ga('send', 'pageview', event.urlAfterRedirects);
                    var currentRoute = _this.route.root;
                    // console.log('current route is:' + currentRoute);
                    // var cache = [];
                    // console.log('current route snapshot:' + JSON.stringify(currentRoute.snapshot, function(key, value) {
                    //   if (typeof value === 'object' && value !== null) {
                    //     if (cache.indexOf(value) !== -1) {
                    //       return;
                    //     }
                    //     cache.push(value);
                    //   }
                    //   return value;
                    // }));
                    // cache = null; // Enable garbage collection
                    // console.log(this.route.component);
                    // let urlSegments = this.router.url.split('/');
                    // console.log('url is: ' + this.router.url);
                    // console.log('url segment is: ' + urlSegments[1]);
                    while (currentRoute.children[0] !== undefined) {
                        currentRoute = currentRoute.children[0];
                    }
                    if ('isFindField' in currentRoute.snapshot.data) {
                        _this.isFindField = true;
                    }
                    else {
                        _this.isFindField = false;
                    }
                    _this.page = null;
                    _this.hasCenterContainer = true;
                    _this.hasRightContainer = true;
                    if ('name' in currentRoute.snapshot.data) {
                        var data = currentRoute.snapshot.data;
                        var name = data['name'];
                        _this.page = name;
                    }
                    if (_this.page === "Insert") {
                        _this.hasCenterContainer = false;
                        _this.hasRightContainer = false;
                    }
                    if (_this.page === "Account") {
                        _this.hasRightContainer = false;
                    }
                }
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = this.authServics.authInit();
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
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
    AppComponent.prototype.onResize = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
            if (this.screenWidth > 768) {
                this.collapsed = false;
            }
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.signupAsProfessional = function () {
        this.router.navigate(['account/professional']);
        this.collapsed = false;
    };
    AppComponent.prototype.clickBrandLogo = function () {
        if (this.screenWidth <= 425) {
            this.collapsed = !this.collapsed;
        }
        else {
            this.router.navigate(['']);
        }
    };
    AppComponent.prototype.getLoginPopup = function () {
        this.popupsService.activate({ type: 'login' });
        this.toggleMenu();
        this.collapsed = false;
    };
    AppComponent.prototype.getRegistrationPopup = function () {
        this.popupsService.activate({ type: 'registration' });
        this.toggleMenu();
        this.collapsed = false;
    };
    AppComponent.prototype.closePopup = function () {
        this.popupsService.activate('');
    };
    AppComponent.prototype.toggleMenu = function () {
        this.collapsed = false;
        this.navbarState = !this.navbarState;
    };
    AppComponent.prototype.updateTabMenu = function (toggleMenu) {
        if (toggleMenu === void 0) { toggleMenu = false; }
        if (toggleMenu) {
            this.toggleMenu();
        }
        this.collapsed = false;
        this.navigationService.updateActiveTab(false);
    };
    AppComponent.prototype.search = function (event) {
        var _this = this;
        this.newServiceRequest.message = 'Richiedi?';
        this.isSearched = true;
        this.spinerView = true;
        this.clearView = false;
        this.commonService.search(event.query)
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
    AppComponent.prototype.requireService = function () {
        // this.newServiceRequest.message = 'Grazie!';
        this.analyticsService.sendEvent({ category: 'Services', action: 'request', label: this.findValue });
        this.router.navigate(['requests/service']);
    };
    AppComponent.prototype.selectResult = function (service) {
        this.commonService.setService(service);
        this.results = [];
        this.clearView = false;
        this.navbarState = false;
        this.findValue = '';
        // this.router.navigate(['services', servicesObj._id]);
        // var str = 'hello     world  !!';
        // str = servicesObj.title.replace(/\s+/g, '-');
        // console.log('space replaced: ' + str);
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    AppComponent.prototype.clearSearchForm = function () {
        this.findValue = '';
        this.results = [];
        this.clearView = false;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(714)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_service_service_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_services_services_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_insert_insert_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_facebook_facebook_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wizard_wizard_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_legal_legal_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_requests_requests_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notfound_notfound_component__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'category/:category', component: __WEBPACK_IMPORTED_MODULE_2__pages_category_category_component__["a" /* CategoryComponent */], data: { isFindField: true } },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__["a" /* AccountComponent */] },
    { path: 'account/:page', component: __WEBPACK_IMPORTED_MODULE_13__pages_account_account_component__["a" /* AccountComponent */], data: { name: 'Account' } },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'orders/:page', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__["a" /* OrdersComponent */] },
    {
        path: 'order/:step',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_wizard_wizard_component__["a" /* WizardComponent */],
        data: {
            name: 'Checkout'
        }
    },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:page', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'facebook', component: __WEBPACK_IMPORTED_MODULE_8__pages_facebook_facebook_component__["a" /* FacebookComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'contact/:page', component: __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */] },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_services_services_component__["a" /* ServicesComponent */],
        data: { isFindField: true }
    },
    {
        path: 'services/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_service_service_component__["a" /* ServiceComponent */],
        data: { isFindField: true }
    },
    { path: 'insert/:step', component: __WEBPACK_IMPORTED_MODULE_5__pages_insert_insert_component__["a" /* InsertComponent */], data: { name: 'Insert' } },
    // {
    //   path: 'services/:id',
    //   component: ServiceComponent,
    //   data: { isFindField: true },
    //   children: [
    //     { path: 'insert', component: InsertComponent }
    //   ]
    // },
    // {
    //   path: 'services',
    //   component: ServicesComponent,
    //   data: { isFindField: true },
    //   children: [
    //     { path: ':id', component: ServiceComponent },
    //     { path: 'insert', component: InsertComponent }
    //   ]
    // },
    { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_14__pages_requests_requests_component__["a" /* RequestsComponent */] },
    { path: 'requests/:page', component: __WEBPACK_IMPORTED_MODULE_14__pages_requests_requests_component__["a" /* RequestsComponent */] },
    { path: 'info/help', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help_component__["a" /* HelpComponent */] },
    { path: 'info/legal', component: __WEBPACK_IMPORTED_MODULE_12__pages_legal_legal_component__["a" /* LegalComponent */] },
    { path: 'info/about', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about_component__["a" /* AboutComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_16__pages_notfound_notfound_component__["a" /* NotfoundComponent */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_clipboard_service__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClipboardDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// This directive acts as a simple glue layer between the given [clipboard] property
// and the underlying ClipboardService. Upon the (click) event, the [clipboard] value
// will be copied to the ClipboardService and a (clipboardCopy) event will be emitted.
var ClipboardDirective = (function () {
    // I initialize the clipboard directive.
    function ClipboardDirective(clipboardService) {
        this.clipboardService = clipboardService;
        this.copyEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errorEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.value = "";
    }
    // ---
    // PUBLIC METODS.
    // ---
    // I copy the value-input to the Clipboard. Emits success or error event.
    ClipboardDirective.prototype.copyToClipboard = function () {
        var _this = this;
        this.clipboardService
            .copy(this.value)
            .then(function (value) {
            _this.copyEvent.emit(value);
        })
            .catch(function (error) {
            _this.errorEvent.emit(error);
        });
    };
    ClipboardDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[clipboard]",
            inputs: ["value: clipboard"],
            outputs: [
                "copyEvent: clipboardCopy",
                "errorEvent: clipboardError"
            ],
            host: {
                "(click)": "copyToClipboard()"
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_clipboard_service__["a" /* ClipboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_clipboard_service__["a" /* ClipboardService */]) === 'function' && _a) || Object])
    ], ClipboardDirective);
    return ClipboardDirective;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/clipboard.directive.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_currency_pipe__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormatterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatterDirective = (function () {
    function FormatterDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.el = this.elementRef.nativeElement;
    }
    FormatterDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    FormatterDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value); // opossite of transform
        //  console.log('focus');
    };
    // @HostListener("focusout", ["$event.target.value"])
    // onFocusOut(value) {
    //   this.el.value = this.currencyPipe.parse(value); // opossite of transform
    //   console.log('focus out');
    // }
    FormatterDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value);
        //  console.log('blur value');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("focus", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FormatterDirective.prototype, "onFocus", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("blur", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FormatterDirective.prototype, "onBlur", null);
    FormatterDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFormatter]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pipes_currency_pipe__["a" /* CurrencyPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__pipes_currency_pipe__["a" /* CurrencyPipe */]) === 'function' && _b) || Object])
    ], FormatterDirective);
    return FormatterDirective;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/formatter.directive.js.map

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__ = __webpack_require__(33);
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
    function HomeComponent(authServics, homeService, router, route, navigationService, analyticsService, popupsService, seoService) {
        this.authServics = authServics;
        this.homeService = homeService;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.popupsService = popupsService;
        this.seoService = seoService;
        this.cardStyles = { 1: '0.95', 2: '0.95', 3: '0.9' };
        this.query = '';
        this.results = [];
        this.services = [];
        this.services_state = {
            loading: false,
            title: "Servizi piu richiesti"
        };
        this.spinerView = false;
        this.clearView = false;
        this.newServiceRequest = {
            message: 'Richiedi?'
        };
        this.navigationService.updateMessage('La cura per la casa');
        this.analyticsService.sendPageViewUrl(this.router.url);
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seoService.setTitle('Starbook | I migliori servizi per la tua casa');
        this.seoService.setOgElem('og:title', 'Starbook | I migliori servizi per la tua casa');
        this.seoService.setMetaElem('description', 'Prezzi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
        this.seoService.setOgElem('og:description', 'Prezzi del mercato. Preventivi diretti. I migliori professionisti alla tua disposizione.');
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/');
        this.seoService.setOgElem('og:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');
        this.seoService.setOgElem('og:image:secure_url', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/migliori-servizi-per-la-casa.jpg');
        this.route.queryParams.subscribe(function (params) {
            _this.ref = params['ref'];
        });
        this.services_state.loading = true;
        this.services_state.title = "Caricando i servizi...";
        this.homeService.getServices().then(function (services) {
            _this.services = services.result;
            _this.services_state.loading = false;
            _this.services_state.title = "Servizi piu richiesti";
        }).catch(function (error) {
            _this.services_state.loading = false;
            _this.services_state.title = "Servizi piu richiesti";
        });
    };
    //////////////////////////////
    /////// PARTNERSHIP //////////
    //////////////////////////////
    HomeComponent.prototype.joinUs = function () {
        this.analyticsService.sendEvent({ category: 'Partnership', action: 'Join to us', label: this.router.url });
        this.router.navigate(['recruiter/workerjoin']);
    };
    HomeComponent.prototype.lernMore = function () {
        this.analyticsService.sendEvent({ category: 'Partnership', action: 'Learn more', label: this.router.url });
        this.router.navigate(['recruiter/partnerjoin']);
    };
    /////////////////////////
    /////// SEARCH //////////
    /////////////////////////
    HomeComponent.prototype.searchMore = function () {
        this.analyticsService.sendEvent({ category: 'Button', action: 'Search', label: this.router.url });
        if (this.query.length > 0 && this.results.length === 0) {
            this.router.navigate(['requests/service']);
        }
        else if (this.query.length > 0 && this.results.length > 0) {
            var service = this.results[0];
            this.homeService.sendData(service, this.ref);
            var title = service['title'];
            this.router.navigate(['services', title.replace(/\s+/g, '-')]);
        }
        else if (this.query.length === 0) {
            this.router.navigate(['services']);
        }
    };
    HomeComponent.prototype.search = function (event) {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Search', action: 'typing: ' + event.query, label: this.router.url });
        this.newServiceRequest.message = 'Richiedi?';
        this.spinerView = true;
        this.clearView = false;
        var timeStart = Date.now();
        this.homeService.search(event.query).then(function (results) {
            _this.spinerView = false;
            _this.analyticsService.sendTiming({ category: 'Search', timingVar: 'load', timingValue: Date.now() - timeStart });
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = results.result;
        }).catch(function (error) {
            _this.spinerView = false;
            if (event.query.length > 0) {
                _this.clearView = true;
            }
            _this.results = [];
        });
    };
    HomeComponent.prototype.selectResult = function (service) {
        this.analyticsService.sendEvent({ category: 'Search result', action: 'Select service', label: this.router.url });
        this.homeService.sendData(service, this.ref);
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    HomeComponent.prototype.clearSearchForm = function () {
        this.query = '';
        this.results = [];
        this.clearView = false;
    };
    HomeComponent.prototype.requireService = function () {
        // this.newServiceRequest.message = 'Grazie!';
        this.analyticsService.sendEvent({ category: 'Search result', action: 'Require service', label: this.router.url });
        this.router.navigate(['requests/service']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(715),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/home.component.js.map

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(100);
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

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(100);
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

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_universal__);
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
    function OrderComponent(orderService, popupsService, analyticsService, profileService, router, shareService) {
        this.orderService = orderService;
        this.popupsService = popupsService;
        this.analyticsService = analyticsService;
        this.profileService = profileService;
        this.router = router;
        this.shareService = shareService;
        this.estimate_state = {
            saved: false
        };
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
    }
    OrderComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
        }
    };
    OrderComponent.prototype.onResize = function () {
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
        }
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
        }
    };
    ///////////////////////////
    //// PRICE BLOCK //////////
    ///////////////////////////
    OrderComponent.prototype.getFinalPrice = function () {
        // let total_price = this.orderData.totalPrice;
        // if (!this.price_state.is_referral) {
        //   return total_price;
        // } else {
        //   return (total_price - (total_price * 0.05));
        // }
        // console.log('order services: ' + this.orderServices);
        // console.log('service: ' + JSON.stringify(this.Service));
        // {{Service.pricing.unit.symbol}}['unit']['symbol']
        return 19000;
    };
    OrderComponent.prototype.getPriceUnit = function () {
        var pricing = this.Service['pricing'];
        if (pricing) {
            var unit = pricing['unit'];
            if (unit) {
                var price = unit['price'];
                return price;
            }
        }
    };
    OrderComponent.prototype.getUnit = function () {
        var pricing = this.Service['pricing'];
        if (pricing) {
            var unit = pricing['unit'];
            if (unit) {
                var symbol = unit['symbol'];
                return symbol;
            }
        }
    };
    OrderComponent.prototype.getMinPrice = function () {
        var pricing = this.Service['pricing'];
        if (pricing) {
            var min = pricing['min'];
            return min;
        }
    };
    OrderComponent.prototype.getInitialPrice = function () {
        return this.orderData.totalPrice;
    };
    OrderComponent.prototype.getUpFront = function () {
        // return Math.round((this.getFinalPrice() * 0.3));
        return 1500;
    };
    OrderComponent.prototype.getTiming = function () {
        var days = this.getInitialPrice() / 45000;
        if (days < 0.5) {
            return "mezza giornata";
        }
        else if (days > 0.5 && days < 1.5) {
            return Math.round(days) + " giorno";
        }
        else {
            return Math.round(days) + " giorni";
        }
    };
    OrderComponent.prototype.wizardData = function () {
        var object = {
            service_id: this.orderData.service_id,
            title: this.orderData.title,
            details: this.orderData.details,
            referral_id: this.price_state.referral_id,
            upfront_amount: this.getUpFront(),
            timing: {
                days: this.getInitialPrice() / 45000
            }
        };
        // console.log('details are: ' + JSON.stringify(this.orderData.details));
        // var newObject = object;
        // newObject.details.push({title:this.orderData.title, type:"service"});
        // newObject.details.push(this.orderData.details)
        // newObject.details.unshift({title:this.orderData.title, type:"service"})
        var hasTitle = false;
        for (var i in object.details) {
            if (object.details[i]['type'] === "service") {
                hasTitle = true;
            }
        }
        if (hasTitle === false) {
            object.details.unshift({ title: this.orderData.title, type: "service" });
        }
        return object;
    };
    OrderComponent.prototype.startWizard = function () {
        if (this.price_state.loading) {
            return;
        }
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Start" });
        var newWizardData = this.wizardData();
        this.orderService.updateWizardData(newWizardData);
        this.router.navigate(['order/summary']);
        return false;
    };
    OrderComponent.prototype.share = function () {
        this.analyticsService.sendEvent({ category: 'Share Service', action: 'Click To Share', label: "Share Campain Research" });
        this.shareService.setObject(this.wizardData());
        var newWizardData = this.wizardData();
        var string = JSON.stringify(newWizardData);
        var navigationExtras = { queryParams: { estimate: string } };
        this.router.navigate(['share/estimate'], navigationExtras);
        return false;
    };
    OrderComponent.prototype.saveEstimate = function () {
        if (this.estimate_state.saved === false) {
            this.estimate_state.saved = true;
            var newWizardData = this.wizardData();
            this.saveEstimateQuotationToLocal(newWizardData);
        }
    };
    OrderComponent.prototype.saveEstimateQuotationToLocal = function (object) {
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            if (!localStorage.getItem('estimates')) {
                var estimates = [];
                estimates.push(object);
                localStorage.setItem('estimates', JSON.stringify(estimates));
            }
            else {
                var estimates = [];
                estimates = JSON.parse(localStorage.getItem('estimates'));
                var objectExist = false;
                for (var i in estimates) {
                    if (JSON.stringify(object) === JSON.stringify(estimates[i])) {
                        objectExist = true;
                    }
                }
                if (objectExist === false) {
                    estimates.push(object);
                    localStorage.setItem('estimates', JSON.stringify(estimates));
                }
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "orderData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('orderIsFull'), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "orderIsFull", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "price_state", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "orderServices", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], OrderComponent.prototype, "Service", void 0);
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(717)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__["a" /* ShareService */]) === 'function' && _f) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.component.js.map

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = (function () {
    function BlogComponent(router, route, navigationService, analyticsService, seoService, commonService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.analyticsService = analyticsService;
        this.seoService = seoService;
        this.commonService = commonService;
        this.analyticsService.sendPageViewUrl(this.router.url);
        this.navigationService.updateMessage("Artigiani digitali");
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(720)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _f) || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/blog.component.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ShareComponent = (function () {
    function ShareComponent(router, route, navigationService, joinService, shareService, analyticsService, orderService, seoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.shareService = shareService;
        this.analyticsService = analyticsService;
        this.orderService = orderService;
        this.seoService = seoService;
        this.contacts = '';
        this.sharelink = '';
        this.invitation_state = {
            message_success: null,
            message_error: null
        };
        this.page = '';
        this.Estimate = null;
        this.estimate_state = {
            saved: false
        };
        this.seoObject = {
            title: "",
            description: "",
            url: "",
            image_url: ""
        };
        this.navigationService.updateMessage("Condividi");
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.numPattern = /^\d+$/;
        this.serviceObject = this.shareService.getObject();
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            this.sharelink = document.location.protocol + '//' + document.location.hostname;
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
        this.route.params.subscribe(function (params) {
            if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            _this.page = params['page'];
            if (_this.page === 'estimate') {
                _this.navigationService.updateMessage("Preventivo");
                _this.route.queryParams.subscribe(function (params) {
                    var estimateParams = params['estimate'];
                    if (estimateParams) {
                        _this.sharelink += '/share/estimate?estimate=' + encodeURI(estimateParams);
                        try {
                            var estimateObject = JSON.parse(estimateParams);
                            _this.Estimate = estimateObject;
                        }
                        catch (e) {
                            _this.router.navigate(['']);
                        }
                    }
                    else {
                        _this.router.navigate(['']);
                    }
                    _this.seoObject.title = "Preventivo | " + _this.Estimate.title;
                    _this.seoObject.description = "";
                    _this.seoObject.url = 'https://www.starbook.co' + _this.router.url;
                    _this.seoObject.image_url = "https://st.depositphotos.com/1006214/4163/i/950/depositphotos_41638005-stock-photo-contractors-estimate-form.jpg";
                });
            }
            else {
                _this.router.navigate(['']);
            }
            _this.seoService.setTitle(_this.seoObject.title);
            _this.seoService.setMetaElem('description', _this.seoObject.description);
            _this.seoService.setOgElem('twitter:card', "summary_large_image");
            _this.seoService.setOgElem('twitter:title', _this.seoObject.title);
            _this.seoService.setOgElem('twitter:site', "@starbookco");
            _this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
            _this.seoService.setOgElem('twitter:description', _this.seoObject.description);
            _this.seoService.setOgElem('twitter:image', _this.seoObject.image_url);
            _this.seoService.setOgElem('og:title', _this.seoObject.title);
            _this.seoService.setOgElem('og:description', _this.seoObject.description);
            _this.seoService.setOgElem('og:url', _this.seoObject.url);
            _this.seoService.setOgElem('og:image', _this.seoObject.image_url);
            _this.seoService.setOgElem('og:image:secure_url', _this.seoObject.image_url);
            // if (this.page === 'starbook') {
            //   this.navigationService.updateMessage("Condividi");
            //   this.sharelink += '/?ref=' + this.currentUser._id;
            // } else if (this.page === 'service') {
            //   this.navigationService.updateMessage("Condividi servizio");
            //
            //   this.route.queryParams.subscribe(params => {
            //     var estimateParams = params['estimate'];
            //     if (estimateParams) {
            //       this.sharelink += '/share/estimate?estimate=' + encodeURI(estimateParams);
            //       try {
            //         var estimateObject = JSON.parse(estimateParams);
            //         this.Estimate = estimateObject;
            //       } catch (e) {
            //         this.router.navigate(['share/starbook']);
            //       }
            //     } else {
            //       this.router.navigate(['share/starbook']);
            //     }
            //
            //     this.seoObject.title = "Preventivo | " + this.Estimate.title;
            //     this.seoObject.description = "";
            //     this.seoObject.url = 'https://www.starbook.co' + this.router.url;
            //     this.seoObject.image_url = "https://st.depositphotos.com/1006214/4163/i/950/depositphotos_41638005-stock-photo-contractors-estimate-form.jpg";
            //   });
            // }
        });
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.daysString = function (days) {
        if (days < 0.5) {
            return "1/2 Giorno";
        }
        else if (days > 0.5 && days < 1.5) {
            return Math.round(days) + " Giorno";
        }
        else {
            return Math.round(days) + " Giorni";
        }
    };
    ShareComponent.prototype.startWizard = function () {
        this.analyticsService.sendEvent({ category: 'Share', action: 'Start Wizard', label: "Order Campain" });
        this.orderService.updateWizardData(this.Estimate);
        this.router.navigate(['order/summary']);
        return false;
    };
    ShareComponent.prototype.saveEstimate = function () {
        if (this.estimate_state.saved === false) {
            this.estimate_state.saved = true;
            this.saveEstimateQuotationToLocal(this.Estimate);
        }
    };
    ShareComponent.prototype.sendInvitations = function () {
        var _this = this;
        var phone_numbers = [];
        var email_addresses = [];
        var strings = this.contacts.split(',');
        for (var i = 0; i < strings.length; i++) {
            var string = strings[i];
            string = string.replace(/\s/g, '');
            if (this.emailPattern.test(string)) {
                email_addresses.push(string);
            }
            else if (this.numPattern.test(string)) {
                phone_numbers.push(string);
            }
        }
        var phones = '';
        for (var i = 0; i < phone_numbers.length; i++) {
            var p = phone_numbers[i];
            phones += (i != 0) ? ',' : '';
            phones += p;
        }
        var emails = '';
        for (var i = 0; i < email_addresses.length; i++) {
            var e = email_addresses[i];
            emails += (i != 0) ? ',' : '';
            emails += e;
        }
        if (phones === '' && emails === '') {
            this.invitation_state.message_success = null;
            this.invitation_state.message_error = "Inserisci numeri di telefono e email validi";
            return;
        }
        this.invitation_state.message_success = null;
        this.invitation_state.message_error = null;
        this.joinService.sendInvitations(this.sharelink, phones, emails).then(function (response) {
            // console.log('response: ' + JSON.stringify(response));
            _this.invitation_state.message_success = "Complimenti, hai inviato un codice sconto ai contatti inseriti";
            // this.contacts = '';
        }).catch(function (error) {
            // console.log('error: ' + JSON.stringify(error));
        });
    };
    ShareComponent.prototype.shareOnFacebook = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ShareComponent.prototype.shareOnTwitter = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            console.log('share link is: ' + this.sharelink);
            window.open("https://twitter.com/home?status=" + this.sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ShareComponent.prototype.shareOnLinkedin = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            var link = this.sharelink;
            var title = "Titolo";
            var summary = "Summary";
            var source = "";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ShareComponent.prototype.shareOnGoogle = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            var link = this.sharelink;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://plus.google.com/share?url=" + link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ShareComponent.prototype.shareWithEmail = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            var message = "Ciao, utilizza il link sotto per ricevere 5% di scondo sui servizi Starbook. \n" + this.sharelink;
            var subject = "Promozione Starbook";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ShareComponent.prototype.copyLink = function (value) {
        // console.group( "Clipboard Success" );
        // console.log( value );
        // console.groupEnd();
    };
    ShareComponent.prototype.copyError = function (error) {
        // console.group( "Clipboard Error" );
        // console.error( error );
        // console.groupEnd();
    };
    ///////////////////////////
    ////////// ORDER //////////
    ///////////////////////////
    ShareComponent.prototype.saveEstimateQuotationToLocal = function (object) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if (!localStorage.getItem('estimates')) {
                var estimates = [];
                estimates.push(object);
                localStorage.setItem('estimates', JSON.stringify(estimates));
            }
            else {
                var estimates = [];
                estimates = JSON.parse(localStorage.getItem('estimates'));
                var objectExist = false;
                for (var i in estimates) {
                    if (JSON.stringify(object) === JSON.stringify(estimates[i])) {
                        objectExist = true;
                    }
                }
                if (objectExist === false) {
                    estimates.push(object);
                    localStorage.setItem('estimates', JSON.stringify(estimates));
                }
            }
        }
    };
    ShareComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(733)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], ShareComponent);
    return ShareComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/share.component.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CurrencyCentPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyCentPipe = (function () {
    function CurrencyCentPipe() {
    }
    CurrencyCentPipe.prototype.transform = function (value, args) {
        return (Number(value) / 100).toFixed(2);
    };
    CurrencyCentPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currencyCent'
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyCentPipe);
    return CurrencyCentPipe;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/currency-cent.pipe.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CurrencyFormatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyFormatPipe = (function () {
    function CurrencyFormatPipe() {
    }
    CurrencyFormatPipe.prototype.transform = function (value, currencySign, decimalLength, chunkDelimiter, decimalDelimiter, chunkLength) {
        if (currencySign === void 0) { currencySign = '€ '; }
        if (decimalLength === void 0) { decimalLength = 2; }
        if (chunkDelimiter === void 0) { chunkDelimiter = ','; }
        if (decimalDelimiter === void 0) { decimalDelimiter = '.'; }
        if (chunkLength === void 0) { chunkLength = 3; }
        value /= 100;
        var result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
        var num = value.toFixed(Math.max(0, ~~decimalLength));
        return (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter); // + currencySign;
    };
    CurrencyFormatPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'currencyFormat'
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/currency-format.pipe.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__ = __webpack_require__(19);
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
        this.recommendToFriendPopupState = 'inactive';
        this.getPromoCodePopupState = 'inactive';
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
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
        this.registrationError = {
            name: false,
            firstname: false,
            lastname: false,
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
        this.recommendFriend = {
            friend_name: '',
            frend_phone_number: '',
            my_name: '',
            my_phone_number: ''
        };
        this.earnPromoCode = {
            my_name: '',
            my_phone_number: ''
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
            this.finishPopupData.title = 'Controlla la tua email';
            this.finishPopupData.text = [
                'Ti abbiamo inviato una mail con le istruzioni per poter cambiare la password dimenticata con una nuova.',
                'Per favore vai in posta in arrivo dalla tua email e segui le istruzioni indicate.'
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
        if (type === 'recommendToFriend') {
            this.recommendToFriendPopupState = 'active';
        }
        if (type === 'getPromoCode') {
            this.getPromoCodePopupState = 'active';
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
        if (this.recommendToFriendPopupState === 'active') {
            this.recommendToFriendPopupState = 'inactive';
        }
        if (this.getPromoCodePopupState === 'active') {
            this.getPromoCodePopupState = 'inactive';
        }
        this.activePopup = '';
        this.formError = false;
        if (!isReopen) {
            $('body').removeClass('disable-body-scroll');
            $('app-home').removeClass('visibility-hidden');
            $('app-profile').removeClass('visibility-hidden');
            this.shadowState = 'inactive';
            this.clearData();
        }
    };
    PopupsComponent.prototype.login = function (email, password) {
        var _this = this;
        if (this.emailPattern.test(email) && password.length > 0) {
            this.isPopupLoading = true;
            var timeStart_1 = Date.now();
            this.authServics.login(email, password).then(function (data) {
                _this.analyticsService.sendTiming({ category: 'Login', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
                _this.isPopupLoading = false;
                _this.auth = data;
                if (_this.loginData.type === 'fromOrder') {
                    _this.closePopup(true);
                    _this.popupService.activate({ type: 'confirmNewOrder', data: _this.loginData.orderData });
                }
                else {
                    _this.closePopup();
                }
            }).catch(function (error) {
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
            var facebookPopup = window.open('https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook', 
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://glacial-shore-66987.herokuapp.com/facebook',
            // 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook',
            '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
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
                    _this.finishPopupData.text.push('Per restare in contatto con i professionisti inserisci il tuo numero di telefono.');
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
        if (type === 'registrationFirstName') {
            if (value.length > 0) {
                this.registrationError.firstname = false;
            }
            else {
                this.registrationError.firstname = true;
            }
        }
        if (type === 'registrationLastName') {
            if (value.length > 0) {
                this.registrationError.lastname = false;
            }
            else {
                this.registrationError.lastname = true;
            }
        }
        if (type === 'registrationPhone') {
            if (value.length > 9) {
                this.registrationError.phone = false;
            }
            else {
                this.registrationError.phone = true;
            }
        }
        if (type === 'enterPhoneForm') {
            if (value.length > 9) {
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
    PopupsComponent.prototype.registration = function (firstname, lastname, phone, email, password, passwordConfirm) {
        var _this = this;
        if (this.emailPattern.test(email) &&
            password === passwordConfirm &&
            password.length > 0 &&
            firstname.length > 0 &&
            lastname.length > 0 &&
            phone.length > 9) {
            this.isPopupLoading = true;
            var timeStart_2 = Date.now();
            this.authServics.signup(firstname, lastname, phone, email, password)
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
                            message: "Hai indicato di essere un nuovo cliente ma \u00E8 gi\u00E0\n                presente un account collegato all'indirizzo email: " + email
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
            if (firstname.length < 1) {
                this.registrationError.firstname = true;
            }
            if (lastname.length < 1) {
                this.registrationError.lastname = true;
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
            //console.log(error);
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
            //console.log(error);
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
        if (this.enterPhoneForm.phone.length > 9) {
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
                        _this.finishPopupData.text.push('Hai registrato con successo il tuo account Starbook.');
                        _this.finishPopupData.type = 'finishFacebookRegistration';
                        _this.finishPopupData.data = { userData: userData };
                    }
                }
            })
                .catch(function (error) {
                _this.closePopup();
                //console.log(error);
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
            this.analyticsService.sendEvent({ category: 'Landing page A/B popup', action: 'register', label: 'register company' });
            this.isPopupLoading = true;
            this.authServics.registerCompany(name, phone, profession).then(function (data) {
                _this.isPopupLoading = false;
                _this.closePopup();
                _this.confirmFinishPopupData.title = "Richiesta d'iscrizione inviata";
                _this.confirmFinishPopupData.text = 'Questo ordine è stato annullato, puoi riattivarlo in un secondo momento.';
                _this.getPopup('confirmFinish');
            }).catch(function (error) {
                _this.isPopupLoading = false;
                _this.closePopup();
            });
        }
    };
    PopupsComponent.prototype.recommendToFriend = function (friend_name, friend_phone, my_name, my_phone_number) {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Landing page A/B popup', action: 'recommend', label: 'recommend to friend' });
        this.isPopupLoading = true;
        this.authServics.recommendToFriend(friend_name, friend_phone, my_name, my_phone_number).then(function (data) {
            _this.isPopupLoading = false;
            _this.closePopup();
            _this.confirmFinishPopupData.title = "Invito effettuato con successo";
            _this.confirmFinishPopupData.text = "Grazie " + my_name + ". Abbiamo invitato il tuo amico su Starbook. A breve riceverai un sms con il codice promozionale.";
            _this.getPopup('confirmFinish');
        }).catch(function (error) {
            _this.isPopupLoading = false;
            _this.closePopup();
        });
    };
    PopupsComponent.prototype.earnPromoCodeAction = function (my_name, my_phone_number) {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Landing page A/B popup', action: 'get code', label: 'get promo code' });
        this.isPopupLoading = true;
        this.authServics.earnPromoCode(my_name, my_phone_number).then(function (data) {
            _this.isPopupLoading = false;
            _this.closePopup();
            _this.confirmFinishPopupData.title = "Complimenti " + my_name + "!";
            _this.confirmFinishPopupData.text = "Hai guadagnato con successo un promo code. A breve riceverai un sms con il codice promozionale.";
            _this.getPopup('confirmFinish');
        }).catch(function (error) {
            _this.isPopupLoading = false;
            _this.closePopup();
        });
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
                        _this.confirmPopupData.title = 'Appuntamento fissato';
                        _this.confirmPopupData.text = "Hai fissato un appuntamento per questo tipo di servizio con successo. Appena un professionista confermerà la disponibilità potra contattarlo direttamente. Per tenere traccia degli appuntamenti vai nella sezione 'Ordini' del sito.";
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
                    case 'recommendToFriend':
                        _this.recommendToFriendPopupState = 'active';
                        _this.activePopup = 'recommendToFriend';
                        _this.shadowState = 'active';
                        break;
                    case 'getPromoCode':
                        _this.getPromoCodePopupState = 'active';
                        _this.activePopup = 'getPromoCode';
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
            firstname: '',
            lastname: '',
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
            template: __webpack_require__(735),
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
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('recommendToFriendPopupState', [
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
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('getPromoCodePopupState', [
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _h) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(736)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },

/***/ 539:
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

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(56);
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
        if (popup && popup['type'] && popup['type'].length > 0) {
            // console.log('popup is open');
            $('body').addClass('disable-body-scroll');
            $('app-home').addClass('visibility-hidden');
            $('app-profile').addClass('visibility-hidden');
        }
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

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_service__ = __webpack_require__(10);
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
        // let local = 'http://localhost/t0.9.1/';
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
    // loginCallback(email: string, password: string, success:() => void, error:() => void) {
    //   return this.http.post(this.api + 'login', {email: email, password: password})
    //   .toPromise()
    //   .then((response) => {
    //     success()
    //     // console.log('response success');
    //     // let data = response.json();
    //     // if (data.success === true) {
    //     //   let authData = {
    //     //     _id: data.result._id,
    //     //     email: data.result.email,
    //     //     email_verified: data.result.email_verified,
    //     //     phone_number: data.result.phone_number,
    //     //     account_types: data.result.account_types,
    //     //     profile: data.result.profile,
    //     //     company: data.result.company,
    //     //     address: data.result.address,
    //     //     services: data.result.services,
    //     //     locations: data.result.locations,
    //     //     payment: data.result.payment,
    //     //     created_at: data.result.created_at,
    //     //     updated_at: data.result.updated_at,
    //     //     token: data.token
    //     //   };
    //     //   if (isBrowser) { localStorage.setItem('auth', JSON.stringify(authData));}
    //     //   this.navigationService.updatePersonalMenu(data.result);
    //       // return authData;
    //     // }
    //   }).catch(this.handleError);
    // }
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
                    email_verified: data.result.email_verified,
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
        }).catch(this.handleError);
    };
    AuthService.prototype.signup = function (firstname, lastname, phone, email, password) {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'signup', {
            firstname: firstname, lastname: lastname, phone_number: phone, email: email, password: password })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json();
            // if (data.success === true) {
            var authData = {
                _id: data.result._id,
                email: data.result.email,
                email_verified: data.result.email_verified,
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
            // } else {
            //   this.handleError(data.message);
            // }
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
                    email_verified: data.result.email_verified,
                    phone_number: data.result.phone_number,
                    account_types: data.result.account_types,
                    is_social_account: data.result.is_social_account,
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
        return this.http.post(this.api + 'new_company_request', { name: name, phone_number: phone, profession: profession })
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
    AuthService.prototype.recommendToFriend = function (friendName, friendPhone, myName, myPhone) {
        var _this = this;
        return this.http.post(this.api + 'recommend_to_friend', {
            frend_name: friendName,
            frend_phone_number: friendPhone,
            my_name: myName,
            my_phone_number: myPhone
        }).toPromise().then(function (response) {
            var data = response.json();
            if (data.success === true) {
                return data.result;
            }
            else {
                _this.handleError(data.message);
            }
        }).catch(this.handleError);
    };
    AuthService.prototype.earnPromoCode = function (myName, myPhone) {
        var _this = this;
        return this.http.post(this.api + 'my_promo_code', {
            name: myName,
            phone_number: myPhone
        }).toPromise().then(function (response) {
            var data = response.json();
            if (data.success === true) {
                return data.result;
            }
            else {
                _this.handleError(data.message);
            }
        }).catch(this.handleError);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/auth.service.js.map

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonService; });
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
var CommonService = (function () {
    function CommonService(http /*, private navigationService: NavigationService*/) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
        // this.api = 'http://localhost/t0.9.1/';
    }
    CommonService.prototype.sendServices = function (services) {
        this.servicesObject = services;
    };
    CommonService.prototype.getServicesObject = function () {
        return this.servicesObject;
    };
    CommonService.prototype.sendData = function (service, ref) {
        this.service = service;
        this.referral_id = ref;
    };
    CommonService.prototype.getData = function () {
        return {
            service: this.service,
            referral_id: this.referral_id
        };
    };
    CommonService.prototype.setService = function (service) {
        this.service = service;
    };
    CommonService.prototype.getService = function () {
        return this.service;
    };
    CommonService.prototype.setCategory = function (category) {
        this.category = category;
    };
    CommonService.prototype.getCategory = function () {
        return this.category;
    };
    // EMAIL SMS
    CommonService.prototype.requireNewService = function (data) {
        return this.http.post(this.api + 'request_service', data).toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.sendNotifications = function (promolink, phones, emails) {
        return this.http.post(this.api + 'send_invitations', { link: promolink, phone_numbers: phones, email_addresses: emails }).toPromise().then(function (data) {
            return data;
        }).catch(this.handleError);
    };
    CommonService.prototype.getCategories = function () {
        // this.navigationService.updateLoadingStatus(true);
        var queryString = 'categories';
        return this.http.get(this.api + queryString).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getCategoryById = function (id) {
        return this.http.get(this.api + 'categories/' + id).toPromise().then(function (results) {
            return results.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getServicesForCategoryTitle = function (title) {
        // this.navigationService.updateLoadingStatus(true);
        // let queryString = 'category_services';
        // return this.http.get(this.api + queryString).toPromise().then((response) => {
        //   return response.json();
        // }).catch(this.handleError);
        var queryString = 'categories/' + title + '/services';
        return this.http.get(this.api + queryString).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getAllServices = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        if (query) {
            for (var key in query) {
                params.set(key.toString(), query[key]);
            }
        }
        return this.http.get(this.api + 'services', { search: params }).toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getServices = function () {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.get(this.api + 'featured').toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.search = function (query) {
        return this.http.get(this.api + 'search?title=' + query).toPromise().then(function (results) {
            return results.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getServiceById = function (id) {
        return this.http.get(this.api + 'services/' + id).toPromise().then(function (results) {
            return results.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getRelatedServicesByServiceId = function (id, query) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        if (query) {
            for (var key in query) {
                params.set(key.toString(), query[key]);
            }
        }
        return this.http.get(this.api + 'services/' + id + '/services', { search: params }).toPromise().then(function (results) {
            return results.json();
        }).catch(this.handleError);
    };
    CommonService.prototype._makeHeaders = function () {
        var headers;
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
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
    CommonService.prototype.handleError = function (error) {
        // this.navigationService.updateLoadingStatus(false);
        return Promise.reject(error.message || error);
    };
    CommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CommonService);
    return CommonService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/common.service.js.map

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\" (window:resize)=\"onResize()\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" (click)=\"clickBrandLogo()\">\n      <div *ngIf=\"screenWidth > 768\" routerLink=\"\">\n        <img src=\"/assets/images/brand-logo-name-rotated.png\" alt=\"starbook\">\n      </div>\n      <div *ngIf=\"screenWidth < 769\">\n        <img *ngIf=\"!collapsed\" src=\"/assets/images/brand-logo-rotated.png\" alt=\"starbook\">\n        <img *ngIf=\"collapsed\" src=\"/assets/images/brand-logo-right.png\" alt=\"starbook\">\n      </div>\n    </a>\n\n    <div *ngIf=\"hasCenterContainer\" class=\"center-container\">\n      <div class=\"search-block\" *ngIf=\"isFindField\">\n        <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"250px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca un servizio\" minLength=\"0\">\n          <template let-res>\n            <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n          </template>\n        </p-autoComplete>\n        <div class=\"spinner\" *ngIf=\"spinerView\">\n          <svg width='20px' height='20px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n          <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n        </div>\n        <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n          <div class=\"no-result\">\n            Il servizio \"{{findValue}}\" non è disponibile\n            <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!isFindField\" class=\"tagline\">{{tagline}}</div>\n    </div>\n\n    <!--  Collapsed -->\n    <ul *ngIf=\"auth !== false && hasRightContainer\" class=\"nav navbar-nav float-xs-right\" [ngClass]=\"{'collapse':!collapsed}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders/requests\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/general\" routerLinkActive=\"active\" (click)=\"toggleMenu()\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> </i> {{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n\n    <!--  Collapsed not authenticated -->\n    <ul *ngIf=\"auth === false && browser && hasRightContainer\" class=\"nav navbar-nav float-xs-right\" [ngClass]=\"{'collapse':!collapsed}\">\n      <li class=\"nav-item\" *ngIf=\"collapsed\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item register-item\">\n        <a class=\"nav-link profile\" (click)=\"signupAsProfessional()\">Iscriviti come professionista</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Trova il miglior servizio per la tua casa al prezzo giusto</h1>\n  <h4>Niente più ricerche, attese o confronti di preventivi. Lo facciamo noi al posto tuo. Ed è gratis.</h4>\n  <div class=\"search\">\n    <div class=\"search-field\">\n      <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca una lavorazione...\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n        <div class=\"no-result noselect\">\n          Il servizio \"{{query}}\" non è disponibile\n          <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"search-button\">\n      <button class=\"btn btn-primary\" (click)=\"searchMore()\">Cerca</button>\n    </div>\n  </div>\n</div>\n<div class=\"services\">\n  <h1><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i>{{services_state.title}}</h1>\n  <div class=\"services-container\">\n    <div class=\"service-box\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n      <div class=\"service\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n        <div class=\"title\">{{ service.title }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"how-work\">\n  <h1>Come funziona</h1>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-list.png\" class=\"rounded mx-auto d-block\" alt=\"Seleziona il servizio\">\n      <h3>Seleziona un servizio</h3>\n      <h5>Trova un servizio di cui hai bisogno e seleziona le carateristiche.</h5>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-time.png\" class=\"rounded mx-auto d-block\" alt=\"Calcola preventivo\">\n      <h3>Preventivo immediato</h3>\n      <h5>Ricevi in tempo reale un unico prezzo per il servizio, niente attese e niente intermediari.</h5>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-booking.png\" class=\"rounded mx-auto d-block\" alt=\"Ordina il servizio\">\n      <h3>Ordina</h3>\n      <h5>Scegli il giorno quando vuoi iniziare i lavori, l'indirizzo dove si trova la tua casa e ordina direttamente.</h5>\n    </div>\n  </div>\n</div>\n<div class=\"market\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 background\">\n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n      <div class=\"box\">\n        <h1>Prezzo del mercato</h1>\n        <p>Noi assicuriamo che il cliente acquisti un servizio con il miglior prezzo sul mercato. In più il nostro algoritmo permette di cambiare il prezzo in modo dinamico in relazione della quantità delle richieste ricevute.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"professional\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n      <div class=\"box\">\n        <h1>Il miglior professionista</h1>\n        <p>Noi lavoriamo solo con i migliori professionisti del settore per assicurarti il miglior risultato finale. Non importa dove abitate o quando avete bisogno, il nostro compito è quello di darvi il meglio.</p>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 background\">\n    </div>\n  </div>\n</div>\n<div class=\"recruiting\" *ngIf=\"!currentUser\">\n  <div class=\"join-box\">\n    <h1>Sei un professionista in cerca di clienti?</h1>\n    <p>Iscriviti a Starbook gratuitamente e diventa parte del nostro team.</p>\n    <button type=\"button\" class=\"btn btn-primary\" name=\"button\" (click)=\"joinUs()\">Unisciti adesso</button>\n  </div>\n  <div class=\"partner-box\">\n    <h1>Programma partnership</h1>\n    <p>Scopri il nostro programma partnership per Agenzie Immobiliari, Agenti Immobiliari, Amministratori Condominiali, Architetti, Fornitori Edili.</p>\n    <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"lernMore()\">Scopri di più</button>\n  </div>\n</div>\n<div class=\"pre-footer\">\n  <div class=\"container-fluid\">\n    <div class=\"pre\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Sicurezza del sito</p>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\" alt=\"Norton Security\">\n            <img src=\"../../../assets/images/secure.png\" alt=\"100% Secure\">\n            <img src=\"../../../assets/images/trust.png\" alt=\"Trusted Website\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Sistemi di pagamento</p>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n            <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n            <img src=\"../../../assets/images/americanexpress.png\" alt=\"American Express\">\n            <img src=\"../../../assets/images/stripe.png\" alt=\"Stripe\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></p>\n          <p><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></p>\n          <p><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></p>\n          <p><a routerLink=\"/landing/extensions\" routerLinkActive=\"active\">Estensioni</a></p>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Seguici su</p>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\" alt=\"Facebook\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\" alt=\"Twitter\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\" alt=\"Instagram\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <p><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></p>\n</div>\n"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"!page\" class=\"landing-container\">\n  <div class=\"header-container\">\n    <div class=\"overlay\">\n      <div class=\"header\">\n        <h1>Trova il miglior servizio per la tua casa, al prezzo giusto e senza attese.</h1>\n        <!-- <h1>Mai più preventivi.</h1>\n        <h2>Trova il servizio. Guarda il prezzo. Prenota.</h2> -->\n        <div class=\"search\">\n          <div class=\"search-field\">\n            <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca un servizio\" minLength=\"0\">\n              <template let-res>\n                <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n              </template>\n            </p-autoComplete>\n            <div class=\"spinner\" *ngIf=\"spinerView\">\n              <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n                <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n                <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                  <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n                </circle>\n              </svg>\n            </div>\n            <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n              <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n            </div>\n            <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n              <div class=\"no-result noselect\">\n                Il servizio \"{{query}}\" non è disponibile\n                <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"search-button\">\n            <button class=\"btn btn-primary\" (click)=\"searchMore()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"bottom-container\">\n        <div class=\"arrow\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid services-container\">\n    <!-- <h1>Servizi più richiesti</h1> -->\n    <h1>Professionisti più richiesti</h1>\n    <div class=\"row services\">\n      <div *ngFor=\"let category of categories\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6 service-container\">\n          <!-- <div class=\"service\" (click)=\"selectCategory(category)\" [ngStyle]=\"{'background-image' : ' url(' + category.image_url + ')'}\">\n            <div class=\"overlay\">\n              <h1>{{category.title}}</h1>\n            </div>\n          </div> -->\n          <!-- \"image_url\" : \"https://s3-eu-west-1.amazonaws.com/starbook-s3/categories/591028cd6c8dd682c65e99bc/cover/1\", -->\n          <div class=\"service\" (click)=\"selectCategory(category)\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'categories/'+ category._id + '/cover/1' + ')'}\">\n            <div class=\"overlay\">\n              <h1>{{category.title}}</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid bullets-container\">\n    <h1>Come funziona</h1>\n    <div class=\"row bullets\">\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-list.png\" class=\"rounded mx-auto d-block\" alt=\"Seleziona il servizio\">\n          <h3>Seleziona un servizio</h3>\n          <h5>Trova un servizio di cui hai bisogno e seleziona le carateristiche.</h5>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-time.png\" class=\"rounded mx-auto d-block\" alt=\"Calcola preventivo\">\n          <h3>Ricevi il preventivo immediato</h3>\n          <h5>Ricevi in tempo reale un unico prezzo per il servizio, niente attese e niente intermediari.</h5>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-booking.png\" class=\"rounded mx-auto d-block\" alt=\"Ordina il servizio\">\n          <h3>Ordina il servizio</h3>\n          <h5>Scegli il giorno quando vuoi iniziare i lavori, l'indirizzo dove si trova la tua casa e ordina direttamente.</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid professional-container\">\n    <div class=\"row professional\">\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 text\">\n        <h1>Il miglior professionista</h1>\n        <img src=\"../../../assets/images/star.png\" alt=\"Starbook professionisti\"><img src=\"../../../assets/images/star.png\" alt=\"Starbook professionisti\"><img src=\"../../../assets/images/star.png\" alt=\"Starbook professionisti\"><img src=\"../../../assets/images/star.png\" alt=\"Starbook professionisti\"><img src=\"../../../assets/images/star.png\" alt=\"Starbook professionisti\">\n        <p>Noi lavoriamo solo con i migliori professionisti del settore per assicurarti il miglior risultato finale. Non importa dove abitate o quando avete bisogno, il nostro compito è quello di darvi il meglio.</p>\n        <!-- <button type=\"button\" class=\"btn btn-warning\" name=\"button\" routerLink=\"/account/professional\">Iscriviti adesso</button> -->\n      </div>\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 image\">\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid partnership-container\" *ngIf=\"!currentUser\">\n    <div class=\"text\">\n      <h1>Programma partnership</h1>\n      <p>Il programma partner di Starbook consente alle aziende, agenzie immobiliari, piattaforme software e startup di monetizzare utilizando i nostri servizi tramite potenziali clienti.</p>\n    </div>\n    <button type=\"button\" class=\"btn btn-warning\" name=\"button\" routerLink=\"/contact/partner\">Scopri di più</button>\n  </div>\n  <div class=\"container-fluid prefooter-container\">\n    <div class=\"row prefooter\">\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Sicurezza del sito</p>\n        <div class=\"list-security\">\n          <img src=\"../../../assets/images/norton.png\" alt=\"Norton Security\">\n          <img src=\"../../../assets/images/secure.png\" alt=\"100% Secure\">\n          <img src=\"../../../assets/images/trust.png\" alt=\"Trusted Website\">\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Sistemi di pagamento</p>\n        <div class=\"list-payment-methods\">\n          <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n          <img src=\"../../../assets/images/americanexpress.png\" alt=\"American Express\">\n          <img src=\"../../../assets/images/stripe.png\" alt=\"Stripe\">\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p><a routerLink=\"/info/about\">Chi siamo</a></p>\n        <p><a routerLink=\"/info/help\">Aiuto e Assistenza</a></p>\n        <p><a routerLink=\"/info/legal\">Privacy e Condizioni</a></p>\n        <p><a routerLink=\"/contact/partner\" *ngIf=\"currentUser\">Diventa partner</a></p>\n        <p><a routerLink=\"/insert/title\">Pubblica un servizio</a></p>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Seguici su</p>\n        <div class=\"list-socials\">\n          <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\" alt=\"Facebook\"></a>\n          <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\" alt=\"Twitter\"></a>\n          <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\" alt=\"Instagram\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <p><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></p>\n  </div>\n</div>\n\n<div *ngIf=\"page\" class=\"landing-container\">\n\n  <div *ngIf=\"page==='extensions'\">\n    <div class=\"header-container\" [ngStyle]=\"{'background-image': 'url(' + data.pictures[0] + ')'}\">\n      <div class=\"header\">\n        <div class=\"container\">\n          <h1>{{data.texts[0]}}</h1>\n          <h3>{{data.texts[1]}}</h3>\n          <div class=\"actions\">\n            <div class=\"form-group\">\n              <button pageScroll href=\"#applysection\" [pageScrollDuration]=\"500\" class=\"btn btn-yellow-green\">Applica</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"slogan\" [ngStyle]=\"{'background-color': '#22313F'}\">\n      <div class=\"container\">\n        <div class=\"title\">\n          <h2>{{data.texts[2]}}</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"container advantages\">\n      <div class=\"advantages-container\">\n        <div class=\"title\">\n          <h1>{{data.texts[3]}}</h1>\n        </div>\n        <div class=\"row\">\n          <div *ngFor=\"let bullet of data.bullets\">\n            <div class=\"col-md-6 col-lg-3\">\n              <h3><i class=\"fa {{bullet['icon_name']}}\" aria-hidden=\"true\"></i> {{bullet['title']}}</h3>\n              <p>{{bullet['description']}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button pageScroll href=\"#applysection\" [pageScrollDuration]=\"500\" class=\"btn btn-yellow-blue\">Applica</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"slogan\">\n      <div class=\"container\">\n        <div class=\"title\">\n          <h2>{{data.texts[4]}}</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"extensions\">\n      <div class=\"container extensions-container\">\n        <div class=\"title\">\n          <h1>Funzionamento delle estensioni</h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h5>Seleziona il servizio che ti serve e prenota.</h5>\n            <i>Questi sono dei esempi di estensioni add-on</i>\n            <div class=\"row\">\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://s3-eu-west-1.amazonaws.com/starbook-s3/plumbing/idraulico-normal.png)'}\">\n                    <a (click)=\"checkoutService('plumber')\">\n                      <div class=\"overlay plumber\">\n                        Idraulico\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://st.depositphotos.com/1769672/2236/i/950/depositphotos_22367589-stock-photo-carpenter-working.jpg)'}\">\n                    <a (click)=\"checkoutService('carpenter')\">\n                      <div class=\"overlay carpenter\">\n                        Falegname\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://www.masonrymagazine.com/wp-content/uploads/2017/04/shutterstock_462881602.jpg)'}\">\n                    <a (click)=\"checkoutService('brick')\">\n                      <div class=\"overlay brick\">\n                        Muratore\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://static8.depositphotos.com/1477006/953/i/950/depositphotos_9532007-stock-photo-blacksmith-at-work.jpg)'}\">\n                    <a (click)=\"checkoutService('blacksmith')\">\n                      <div class=\"overlay blacksmith\">\n                        Fabbro\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://st.depositphotos.com/1158045/3013/i/950/depositphotos_30136813-stock-photo-portrait-of-an-electrician-at.jpg)'}\">\n                    <a (click)=\"checkoutService('eletrical')\">\n                      <div class=\"overlay eletrical\">\n                        Elettricista\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-4\">\n                <div class=\"ext-container\">\n                  <div class=\"ext-box\" [ngStyle]=\"{'background-image': 'url(https://s3-eu-west-1.amazonaws.com/starbook-s3/professionista-su-starbook.jpg)'}\">\n                    <a (click)=\"checkoutService('painter')\">\n                      <div class=\"overlay painter\">\n                        Imbianchino\n                      </div>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"checkout-container\">\n              <div class=\"checkout-box\">\n                <div class=\"content-container\">\n                  <div class=\"header-summary\">\n                    <h3>Idraulico</h3>\n                    <div class=\"summary-details\">\n                      <div class=\"item\"><p>Intervento idraulico (uscita)</p></div>\n                      <div class=\"amount\">34€</div>\n                    </div>\n                  </div>\n                  <div class=\"line\"></div>\n                  <div class=\"payment\">\n                    <div class=\"total\">\n                      <div class=\"item\">Totale</div>\n                      <div class=\"amount\">34€</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-warning\">Prenota adesso</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"container implementation\">\n          <div class=\"title\">\n            <h1>Implementazione</h1>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-lg-3\">\n              <p><strong>1.</strong> Scegli i servizi più adatti alla tua piattaforma web o mobile. Ti consigliamo di scegliere servizi che si addattano più alla tua app.</p>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n              <p><strong>2.</strong> Noi ti aiuteremo nella implementazione dei servizi scelti offrendo un aiuto tecnico adeguato sulla vostra piattaforma.</p>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n              <p><strong>3.</strong> Implementiamo ogni servizio scelto da voi ad un account speciale in modo che sappiamo quando un ordine arriva da voi e non da altri.</p>\n            </div>\n            <div class=\"col-md-6 col-lg-3\">\n              <p><strong>4.</strong> I servizi sono pronti ad essere usati sulla piattaforma. Il vostro utente può selezionare un servizio e ordinare direttamente.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"request\" id=\"applysection\">\n      <div class=\"container request-container\">\n        <h1>Vuoi implementare le estensioni sulla tua piattaforma? Inviaci una richiesta.</h1>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"firstNameInput\">Inserisci il tuo nome</label>\n                <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Request.firstname\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"lastNameInput\">Inserisci il tuo cognome</label>\n                <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Request.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"phoneInput\">Numero di telefono</label>\n                <input type=\"phone\" placeholder=\"Telefono\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Request.phone\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"emailInput\">La tua email</label>\n                <input type=\"email\" placeholder=\"Email\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Request.email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descriptionInput\">Messaggio</label>\n            <textarea class=\"form-control\" placeholder=\"Descrivi la tua richiesta...\" rows=\"5\" [ngClass]=\"{'error-input': request_state.description_error}\" id=\"descriptionInput\" [(ngModel)]=\"Request.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n          <div class=\"form-group\" *ngIf=\"request_state.message_success\">\n            <div class=\"alert alert-success\" role=\"alert\">\n              Ottimo, hai richiesto una consulenza sul implementazione delle estensioni Starbook. La contatteremo al più presto!\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"request_state.message_error\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n              {{request_state.message_error}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"sendRequestForNewService()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"request_state.loading\"></i>{{request_state.button_title}}</button>\n          </div>\n        </form>\n        <p>Continuando accetti le condizioni di <a routerLink=\"/legal\" target=\"_blank\">Privacy Policy</a>.</p>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"footer-container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li>Starbook © 2017</li>\n              <li>Tutti i diritti riservati</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/legal\" target=\"_blank\">Privacy e Condizioni</a></li>\n              <li><a routerLink=\"/help\" target=\"_blank\">Aiuto e Assistenza</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/about\" target=\"_blank\">Chi siamo</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/requests/service\" target=\"_blank\">Richiedi un servizio</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n\n  <div *ngIf=\"page==='idraulico'\">\n    <div class=\"header-container\" [ngStyle]=\"{'background-image': 'url(' + data.pictures[0] + ')'}\">\n      <div class=\"header\">\n        <div class=\"container\">\n          <h1>{{data.texts[0]}}</h1>\n          <h3>{{data.texts[1]}}</h3>\n          <div class=\"actions\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-yellow-green\" (click)=\"checkoutService('plumber')\">Prenota adesso</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"slogan\">\n      <div class=\"container\">\n        <div class=\"title\">\n          <h1>{{data.texts[2]}}</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"container advantages\" [ngStyle]=\"{'border-bottom': '1px solid rgba(221, 221, 221, 0.8)'}\">\n      <div class=\"advantages-container\">\n        <div class=\"title\">\n          <h1>{{data.texts[3]}}</h1>\n        </div>\n        <div class=\"row\">\n          <div *ngFor=\"let bullet of data.bullets\">\n            <div class=\"col-md-4\">\n              <h3><i class=\"fa {{bullet['icon_name']}}\" aria-hidden=\"true\"></i> {{bullet['title']}}</h3>\n              <p>{{bullet['description']}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button class=\"btn btn-yellow-blue\" (click)=\"checkoutService('plumber')\">Prenota adesso</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container reviews\">\n      <div class=\"title\">\n        <h1>{{data.texts[4]}}</h1>\n      </div>\n      <div class=\"row\">\n        <div *ngFor=\"let review of data.reviews\">\n          <div class=\"col-md-6\">\n            <div class=\"review-container\">\n              <h5>\n                <i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i> da\n                <strong>{{review.username}}</strong>\n              </h5>\n              <p>{{review.text}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-yellow-blue\" (click)=\"checkoutService('plumber')\">Prenota adesso</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"request\">\n      <div class=\"container request-container\">\n        <h1>Chiedi di cosa hai bisogno</h1>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"firstNameInput\">Inserisci il tuo nome</label>\n                <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Request.firstname\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"lastNameInput\">Inserisci il tuo cognome</label>\n                <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Request.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"phoneInput\">Numero di telefono</label>\n                <input type=\"phone\" placeholder=\"Telefono\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Request.phone\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"emailInput\">La tua email</label>\n                <input type=\"email\" placeholder=\"Email\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Request.email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descriptionInput\">Messaggio</label>\n            <textarea class=\"form-control\" placeholder=\"Descrivi la tua richiesta...\" rows=\"5\" [ngClass]=\"{'error-input': request_state.description_error}\" id=\"descriptionInput\" [(ngModel)]=\"Request.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n          <div class=\"form-group\" *ngIf=\"request_state.message_success\">\n            <div class=\"alert alert-success\" role=\"alert\">\n              {{request_state.message_success}}\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"request_state.message_error\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n              {{request_state.message_error}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"sendRequestForNewService()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"request_state.loading\"></i>{{request_state.button_title}}</button>\n          </div>\n        </form>\n        <p>Continuando accetti le condizioni di <a routerLink=\"/legal\" target=\"_blank\">Privacy Policy</a>.</p>\n      </div>\n    </div>\n    <div class=\"container share\">\n      <h1>Aiuta chi ha bisogno!</h1>\n      <p>Puoi sempre aiutare un amico o amica che ha bisogno di un idraulico per qualsiasi intervento. Inserisci il numero di telefono insieme alla mail e invia questa pagina.</p>\n      <div class=\"alerts\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n      </div>\n      <div class=\"input-group\">\n        <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"input-group-btn\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n        </span>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"footer-container\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li>Starbook © 2017</li>\n              <li>Tutti i diritti riservati</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/info/legal\">Privacy e Condizioni</a></li>\n              <li><a routerLink=\"/info/help\">Aiuto e Assistenza</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/info/about\">Chi siamo</a></li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-lg-3\">\n            <ul>\n              <li><a routerLink=\"/requests/service\">Richiedi un servizio</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n\n</div>\n"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <div class=\"sidebar-block\">\n      <div class=\"order-header\">\n        <span>Costi del servizio</span>\n      </div>\n      <div class=\"order-content\">\n        <div class=\"price-block\">\n          <!-- <div class=\"loader-section\" *ngIf=\"price_state.loading\">\n            <i class=\"fa fa-circle-o-notch animate\"></i>\n            <h2>Applicando lo sconto...</h2>\n          </div> -->\n          <!-- <div class=\"total\" *ngIf=\"!price_state.loading\">\n            <h1>{{getFinalPrice()/100}}€</h1>\n            <span>Costo minimo del servizio</span>\n            <span>PREZZO MINIMO DEL SERVIZIO</span>\n            <h2 *ngIf=\"price_state.is_referral\">{{getInitialPrice()/100}}€</h2>\n          </div> -->\n          <!-- <div class=\"item\">\n            <span class=\"text\">Unità di misura</span> <span class=\"value\">ORE</span>\n          </div> -->\n          <div class=\"item\">\n            <span class=\"text\">A partire da</span><span class=\"value\">{{getMinPrice()/100}}€</span>\n          </div>\n          <div class=\"item\">\n            <span *ngIf=\"getPriceUnit()\"><span class=\"text\">Prezzo medio</span><span class=\"amount\">{{getPriceUnit()/100}}<span class=\"unit\">€/{{getUnit()}}</span></span></span>\n          </div>\n          <div class=\"item\">\n            <span class=\"text\">Acconto</span><span class=\"value\">15€</span>\n          </div>\n\n          <!-- <div class=\"total\" *ngIf=\"!price_state.loading\">\n            <span class=\"text\">Prezzo minimo</span> <span class=\"price\">567€</span>\n          </div>\n          <div class=\"total\" *ngIf=\"!price_state.loading\">\n            <span>PREZZO</span>\n            <h1>941€</h1>\n          </div>\n          <div class=\"upfront\" *ngIf=\"!price_state.loading\">\n            <span>Garanzia</span>\n            <h1>{{getUpFront()/100}}€</h1>\n          </div> -->\n          <div class=\"item\" *ngIf=\"!price_state.loading\">\n          </div>\n\n          <!-- <div class=\"item\">\n            <span class=\"text\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i> Disponibilità su prenotazione</span><br>\n          </div>\n          <div class=\"item\">\n            <span class=\"text\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Durata minima</span>\n          </div>\n          <div class=\"item\">\n            <span class=\"text\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Sopraluogo</span><br>\n          </div>\n          <div class=\"item\">\n            <span class=\"text\"><i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i> Modalità di pagamento con carta</span>\n          </div> -->\n        </div>\n        <!-- <div class=\"form-group\">\n          <button class=\"btn btn-warning\" (click)=\"startWizard()\">Fissa un sopralluogo</button>\n        </div> -->\n\n        <!-- <div class=\"line\"></div> -->\n        <!-- <div class=\"form-group\">\n          <button class=\"btn btn-warning\" (click)=\"startWizard()\">CONTINUA <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n        </div> -->\n        <!-- <div class=\"form-group\">\n          <button class=\"btn btn-danger\" (click)=\"startWizard()\">PRONTO INTERVENTO <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-success\" (click)=\"startWizard()\">SALVA <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n        </div> -->\n\n        <!-- <div class=\"description\">\n          Le offerte del preventivo possono cambiare in base alle richieste del mercato. Blocca il prezzo versando un acconto.\n        </div> -->\n        <!-- <div class=\"line\"></div> -->\n        <!-- <div class=\"links noselect\">\n          <a routerLink=\"/share\" (click)=\"share()\">Condividi</a>\n          <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva</a>\n          <a *ngIf=\"currentUser && estimate_state.saved\">Salvato!</a>\n        </div> -->\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"members-container\">\n    <h3>Team di Starbook</h3>\n    <div class=\"members\">\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/harald-bregu.png\" alt=\"Harald Bregu\">\n          <h5>Harald Bregu</h5>\n          <p>Founder</p>\n          <p>Product Developer</p>\n          <!-- <p>Migliorare i servizi. Accelerare i tempi. Offrire massima professionalità. Tre punti fondamentali che ho imparato e sono diventate le regole per costruire il futuro professionale e dove il progetto Starbook ha preso forma.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/daniel-lopez-bucheli.png\" alt=\"Daniel Lopez Bucheli\">\n          <h5>Daniel Lopez Bucheli</h5>\n          <p>Co-founder</p>\n          <p>Ingegnere Gestionale & Business Designer</p>\n          <!-- <p>Nato in Colombia, vivo a Torino. Appassionato per la generazione di quelle idee che possono migliorare e semplificare la vita delle persone.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/danilo-gallo.png\" alt=\"Danilo Gallo\">\n          <h5>Danilo Gallo</h5>\n          <p>Co-founder</p>\n          <p>Product & UX Designer</p>\n          <!-- <p>Uso la tecnologia per cambiare drasticamente il modo in cui le cose funzionano per migliorarle. Sempre disponibile a nuove sfide e miro a generare prodotti o servizi che migliorano la vita delle persone.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/aleksandr-gorin-0.jpeg\" alt=\"Alexander Gorin\">\n          <h5>Alexander Gorin</h5>\n          <p>Contributor</p>\n          <p>Full Stack Developer</p>\n          <!-- <p>Sviluppatore Senior Full Stack. 10 anni di esperienza nello sviluppo di prodotti IT. Il mio obiettivo primario è la costruzione di interfacce efficienti per gli utenti.</p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"about-cover\">\n    <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/casa%2Blavorazioni.jpg\" alt=\"Starbook, servizi per la casa\">\n    <div class=\"mission-overlay\">\n      <h1>Starbook</h1>\n      <p></p>\n      <p>La nostra missione non è solo quella di offrire tutti i servizi necessari per la casa ma quella di offrire i servizi intelligenti, che aiutano a risparmiare energia, crescere il valore e per di più con prezzi accessibili a chiunque.</p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <h1>Team Starbook</h1>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/harald-bregu.png\" alt=\"Harald Bregu\">\n          <div class=\"content\">\n            <h3>Harald Bregu</h3>\n            <h6>Founder • Product Developer</h6>\n            <p>Migliorare i servizi. Accelerare i tempi. Offrire massima professionalità. Tre punti fondamentali che ho imparato e sono diventate le regole per costruire il futuro professionale e dove il progetto Starbook ha preso forma.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/users/daniel-lopez-bucheli.png\" alt=\"Daniel Lopez Bucheli\">\n          <div class=\"content\">\n            <h3>Daniel Lopez Bucheli</h3>\n            <h6>Co-founder • Ingegnere Gestionale & Business Designer</h6>\n            <p>Nato in Colombia, vivo a Torino. Appassionato per la generazione di quelle idee che possono migliorare e semplificare la vita delle persone.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/danilo-gallo.png\" alt=\"Danilo Gallo\">\n          <div class=\"content\">\n            <h3>Danilo Gallo</h3>\n            <h6>Co-founder • Product & UX Designer</h6>\n            <p>Uso la tecnologia per cambiare drasticamente il modo in cui le cose funzionano per migliorarle. Sempre disponibile a nuove sfide e miro a generare prodotti o servizi che migliorano la vita delle persone.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/users/aleksandr-gorin-0.jpeg\" alt=\"Alexander Gorin\">\n          <div class=\"content\">\n            <h3>Alexander Gorin</h3>\n            <h6>Contributor • Sviluppatore Full Stack</h6>\n            <p>Sviluppatore Senior Full Stack. 10 anni di esperienza nello sviluppo di prodotti IT. Il mio obiettivo primario è la costruzione di interfacce efficienti per gli utenti.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "<div class=\"account-container\">\n  <div class=\"account\" *ngIf=\"page==='login'\">\n    <div class=\"header\">\n      <h3>Accedi al tuo account</h3>\n    </div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwordInput\">Password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"login_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{login_state.error_message}}</div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"facebook_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{facebook_state.error_message}}</div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToSignup()\">Sei nuovo? Crea un account</button>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n      </div>\n      <div class=\"form-group\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"/legal\" href=\"/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></small></h6>\n      </div>\n    </form>\n  </div>\n  <div class=\"account\" *ngIf=\"page==='signup'\">\n    <div class=\"header\">\n      <h3>Crea un account</h3>\n      <h6>Sei nuovo su Starbook? Crea un account per poter navigare liberamente e ordinare i servizi che ti servono per la tua casa.</h6>\n    </div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phoneInput\">Telefono</label>\n        <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwordInput\">Password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"login_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{login_state.error_message}}</div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"facebook_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{facebook_state.error_message}}</div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToLogin()\">Accedi</button>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n      </div>\n      <div class=\"form-group\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"/legal\" href=\"/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></small></h6>\n      </div>\n    </form>\n  </div>\n  <div class=\"account\" *ngIf=\"page==='professional'\">\n    <div class=\"header\">\n      <h3>Registra la tua attività gratuitamente</h3>\n      <h6>Lavori nel mondo dell'edilizia, idraulica, sei un elettrico e esegui lavori particolari artigianali nelle case? Unisciti a noi e collaboreremo per aumentare la professionalità e la clientela in modo smart.</h6>\n    </div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"professionInput\">Professione</label>\n        <input type=\"profession\" placeholder=\"La tua professione\" class=\"form-control\" id=\"professionInput\" [(ngModel)]=\"profession\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phoneInput\">Telefono</label>\n        <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwordInput\">Password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n      </div>\n      <div class=\"form-group\" *ngIf=\"signup_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{signup_state.error_message}}</div>\n      </div>\n      <!-- <div class=\"form-group\" *ngIf=\"signup_state.message_success\">\n        <div class=\"alert alert-success\" role=\"alert\">\n          {{recruiter_state.message_success}}\n        </div>\n      </div> -->\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"signupAsProfessional()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n      </div>\n      <div class=\"form-group\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"/info/legal\" href=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></small></h6>\n      </div>\n    </form>\n  </div>\n  <div class=\"account\" *ngIf=\"page==='email_verification'\">\n    <div class=\"header text-center\">\n      <h3>{{email_verification.title}}</h3>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"popup-spinner\" *ngIf=\"email_verification.spinner.visible\">\n        <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"success-icon\" *ngIf=\"email_verification.success.visible\"><span></span></div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"goToHomePage()\" *ngIf=\"email_verification.button.visible\">{{email_verification.button.title}}</button>\n    </div>\n  </div>\n  <div class=\"account\" *ngIf=\"page==='password_verification'\">\n    <div class=\"header text-center\">\n      <h1>{{password_verification.title}}</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"popup-spinner\" *ngIf=\"password_verification.spinner.visible\">\n        <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"success-icon\" *ngIf=\"password_verification.success.visible\"><span></span></div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"goToHomePage()\" *ngIf=\"password_verification.button.visible\">{{password_verification.button.title}}</button>\n    </div>\n  </div>\n  <div class=\"account\" *ngIf=\"page==='create_new_password'\">\n    <div class=\"header text-center\">\n      <h1>{{new_password_creation.title}}</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"form-group\" *ngIf=\"new_password_creation.password_field.visible\">\n        <label>{{new_password_creation.password_field.title}}</label>\n        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"new_password_creation.password_field.value\">\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"new_password_creation.button.visible\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"createNewPassword(new_password_creation.password_field.value)\">{{new_password_creation.button.title}}</button>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = "<div class=\"blog\">\n  <div class=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <h1>L'idraulico digitale.</h1>\n          <h1>L'artigiano che conquista il web per trovare clienti.</h1>\n          <p>E’ stato presentato a Roma “Sei un genio!”, il nuovo libro di Giampaolo Colletti che racconta le storie di lavoratori e imprenditori che hanno dato una svolta alla loro vita unendo l’eccellenza dei mestieri alle opportunità offerte dalle nuove tecnologie</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <span class=\"author\">\n        Carlotta Balena\n      </span>\n      <time>20 aprile 2017</time>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-lg-9 col-md-9\">\n        <p style=\"text-align: justify\">\n          Producono caffè, confezionano abiti, trasportano carichi pesanti in bici sfidando i colli e i sampietrini di Roma. <strong>Sono storici dell’arte e realizzano video-tutorial su come si pulisce un pennello</strong>, analizzano i dati del proprio taxi per calcolare corse e tragitti, aggregano sarti e portano il made in Italy all’estero. <strong>Sono tutte persone che “fanno cose”</strong>, come direbbe Nanni Moretti, ma le fanno in modo in modo innovativo: mantengono la tradizione di famiglia ma usano la rete per aprirsi al pubblico, <strong>inventano strategie per cambiare vita</strong> e anche migliorare quella degli altri, tutto grazie alle nuove tecnologie. <strong>Sono artigiani, ma Giampaolo Colletti nel suo ultimo libro “Sei un genio!”</strong> <strong>(Hoepli) li chiama “artigeni”,</strong> perché a un certo punto una lampadina si è accesa ed è avvenuta una svolta. Il libro raccoglie le loro storie che il giornalista e fondatore della job-community <strong>wwworkers</strong> ha “scovato” girando l’Italia: oltre 150 esempi di persone e imprese che, partendo da un’idea innovativa, sono riuscite a crearsi una community, una nicchia di mercato e piano piano un business.\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-lg-3 col-md-3\">\n        questa è la parte destra\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n<div class=\"container\">\n\n    <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-9 col-md-9\">\n    <div class=\"content\" itemprop=\"articleBody\">\n    <p style=\"text-align: justify\">Producono caffè, confezionano abiti, trasportano carichi pesanti in bici sfidando i colli e i sampietrini di Roma. <strong>Sono storici dell’arte e realizzano video-tutorial su come si pulisce un pennello</strong>, analizzano i dati del proprio taxi per calcolare corse e tragitti, aggregano sarti e portano il made in Italy all’estero. <strong>Sono tutte persone che “fanno cose”</strong>, come direbbe Nanni Moretti, ma le fanno in modo in modo innovativo: mantengono la tradizione di famiglia ma usano la rete per aprirsi al pubblico, <strong>inventano strategie per cambiare vita</strong> e anche migliorare quella degli altri, tutto grazie alle nuove tecnologie. <strong>Sono artigiani, ma Giampaolo Colletti nel suo ultimo libro “Sei un genio!”</strong> <strong>(Hoepli) li chiama “artigeni”,</strong> perché a un certo punto una lampadina si è accesa ed è avvenuta una svolta. Il libro raccoglie le loro storie che il giornalista e fondatore della job-community <strong>wwworkers</strong> ha “scovato” girando l’Italia: oltre 150 esempi di persone e imprese che, partendo da un’idea innovativa, sono riuscite a crearsi una community, una nicchia di mercato e piano piano un business.</p>\n    <p style=\"text-align: justify\"><a href=\"http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673.jpg\"><img class=\"alignnone wp-image-71771 size-full\" src=\"http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673.jpg\" alt=\"\" width=\"2016\" height=\"1512\" srcset=\"http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673.jpg 2016w, http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673-300x225.jpg 300w, http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673-768x576.jpg 768w, http://startupitalia.eu/wp-content/uploads/2017/04/IMG_5673-1024x768.jpg 1024w\" sizes=\"(max-width: 2016px) 100vw, 2016px\"></a></p>\n    <h2 style=\"text-align: justify\">Passione e spirito d’iniziativa</h2>\n    <p style=\"text-align: justify\">“Il libro si intitola ‘Sei un genio!’, ma in realtà le storie che racconta dimostrano che non bisogna affatto essere dei geni per cambiare vita – ha detto <strong>Riccardo Luna</strong>, direttore di AGI, che ieri ha moderato la presentazione romana del libro – non bisogna necessariamente inventare Facebook per migliorare la propria vita, basta saper sfruttare gli strumenti che abbiamo, come la Rete, che può essere una leva enorme per il lavoro”. In effetti tutti gli “artigeni” che ieri erano presenti alla libreria IBS di via Nazionale per raccontare di persona la propria storia <strong>non avevano l’aria del nerd appena uscito da Harvard, ma piuttosto persone armate di una grande passione per il proprio mestiere e di gran spirito d’iniziativa.</strong></p>\n    <h2 style=\"text-align: justify\">Le storie di chi ce l’ha fatta</h2>\n    <p style=\"text-align: justify\">C’era <strong>Luca Carbonelli</strong>, da Napoli: è a capo della torrefazione di famiglia, ed ha capito che se avrebbe usato la Rete, il suo caffè avrebbe oltrepassato i confini regionali. Così lo vende online da circa 10 anni. Anche <strong>Ela Siromascenko</strong>, ha avviato il suo business dalla vendita online: ha messo le proprie creazioni sartoriali in Rete quasi per scherzo. E’ arrivata in Italia dalla Romania con un dottorato in comunicazione, ma quando ha scoperto che i suoi abiti da cerimonia erano molto apprezzati su <strong>Etsy</strong> (la piattaforma dedicata ad artigiani e creativi) ha capito che la moda sarebbe stata la sua strada. Dalle vendite su Etsy, nel 2015 è passata al suo sito personale e ora ha anche <strong>un atelier a Milano</strong> “perché le clienti sono più propense a spendere se l’abito lo indossano”. Ad ogni modo non ha abbandonato il suo primo negozio online: “Ancora oggi gran parte delle vendite all’estero proviene da Etsy”. Poi c’erano i corrieri “ecologici” di <strong>“E adesso pedala”</strong>: una piccola community di biker che ha messo la propria passione per le due ruote a disposizione di un servizio unico in città: trasportano grossi carichi su Roma utilizzando dei cargo. In altre parole aiutano a fare tutti quegli spostamenti per i quali sarebbe necessario un furgoncino, molto più inquinante e costoso. A proposito di traffico: <strong>Simone Angelini</strong> ha raccontato di come ha trovato il sistema per “hackerare” il suo taxi romano, usando un software di sua invenzione che è in grado di calcolare in anticipo il costo della corsa.</p>\n    <p style=\"text-align: justify\"><a href=\"http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1.jpg\"><img class=\"alignnone wp-image-71772 size-full\" src=\"http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1.jpg\" alt=\"\" width=\"1663\" height=\"1226\" srcset=\"http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1.jpg 1663w, http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1-300x221.jpg 300w, http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1-768x566.jpg 768w, http://startupitalia.eu/wp-content/uploads/2017/04/FullSizeRender-1-1024x755.jpg 1024w\" sizes=\"(max-width: 1663px) 100vw, 1663px\"></a></p>\n    <h2 style=\"text-align: justify\">L’eccellenza, il filo rosso</h2>\n    <p style=\"text-align: justify\">La sua e tante altre storie sono raccolte nel libro di Colletti, che racconta come il filo rosso tra tutti gli artigeni sia stato la capacità di sfruttare le nuove tecnologie per<strong> intercettare una determinata community</strong>: il successo delle loro storie è dato anche dal fatto che parlano a <strong>gruppi</strong>&nbsp;ristretti di persone, che quindi diventano <strong>fidelizzate</strong>. E poi, naturalmente, c’è il gusto per l’eccellenza: «Non basta l’idea. Perché per vincere la sfida dei mercati e competere in questi anni liquidi non basta lavorare bene. Occorre farlo al meglio. Bisogna diventare rilevanti ed eccellere». E loro hanno trovato il modo per farlo.</p>\n    <p style=\"text-align: right\"><a href=\"https://twitter.com/carlottabalena\">@carlottabalena</a></p>\n    </div>\n    </div>\n    </div>\n\n</div>\n"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<div class=\"category-container\" *ngIf=\"category\">\n  <div class=\"category-header\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'services/'+ category._id + '/cover/0' + ')'}\">\n    <div class=\"overlay\">\n      <div class=\"header-content\">\n        <div class=\"header\">\n          <h1>{{category.title}}</h1>\n          <!-- <p>{{category.description}}</p> -->\n        </div>\n      </div>\n      <!-- <div class=\"shortcut-services\" *ngFor=\"let shortcut of category.shortcut_services\">\n        <div class=\"shortcut\">\n          <div class=\"details\">\n            <h2>{{shortcut.title}}</h2>\n            <span>A partire da </span><span class=\"price\">{{shortcut.min_amount/100}}€</span>\n          </div>\n          <div class=\"actions\">\n            <button class=\"btn btn-warning\" (click)=\"pushShortcut(shortcut)\">Ordina ora <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"tabs-container\">\n        <div class=\"tabs\">\n          <div class=\"tab-container\" *ngFor=\"let action of category.direct_actions\">\n            <div class=\"tab\" (click)=\"showDirectAction(action)\" [ngClass]=\"action.type\">\n              {{action.title}}\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <!-- <div class=\"search-container\">\n    <div class=\"search\">\n      <div class=\"search-field\">\n        <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca un servizio\" minLength=\"0\">\n          <template let-res>\n            <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n          </template>\n        </p-autoComplete>\n        <div class=\"spinner\" *ngIf=\"spinerView\">\n          <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n          <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n        </div>\n        <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n          <div class=\"no-result noselect\">\n            Il servizio \"{{query}}\" non è disponibile\n            <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"search-button\">\n        <button class=\"btn btn-primary\" (click)=\"searchMore()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"services-container\" *ngIf=\"services.length>0\">\n    <h3>Servizi correlati</h3>\n    <div class=\"service-container\" *ngFor=\"let service of services\">\n      <div class=\"service\" (click)=\"showServicePage(service)\" [ngStyle]=\"{'background-image' : ' url(' +  images_url + 'services/'+ service._id + '/cover/0' + ')'}\">\n        <div class=\"title\">\n          <p>{{service.title}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"service-container\" *ngIf=\"services && services.length>0\">\n      <div class=\"service custom\" (click)=\"requireService()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"footer\">\n      <ul>\n        <li><a routerLink=\"/info/help\">Aiuto e Assistenza</a></li>\n        <li><a routerLink=\"/requests/service\">Chiedi un servizio</a></li>\n        <li><a routerLink=\"/info/about\">Chi siamo</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"container-fluid contact-container\">\n    <div class=\"contact-block-container\">\n      <div class=\"header\">\n        <h3>Programma partner di Starbook</h3>\n        <h6>Il programma partner di Starbook consente alle aziende, agenzie immobiliari, piattaforme software e startup di monetizzare utilizando i nostri servizi tramite potenziali clienti. Inviaci una richiesta di partner e ti contatteremo per ulteriori dettagli.</h6>\n      </div>\n      <form>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"firstNameInput\">Nome</label>\n              <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Recruiter.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastNameInput\">Cognome</label>\n              <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Recruiter.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneInput\">Telefono</label>\n          <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Recruiter.phone\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Recruiter.email\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Messaggio</label>\n          <textarea class=\"form-control\" placeholder=\"Inserisci il motivo della richiesta\" rows=\"5\" id=\"descriptionInput\" [(ngModel)]=\"Recruiter.message\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n        <div class=\"form-group\" *ngIf=\"recruiter_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">\n            {{recruiter_state.message_success}}\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"recruiter_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">\n            {{recruiter_state.message_error}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"joinPartner()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"recruiter_state.loading\"></i>Invia</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<div class=\"help-container\">\n  <h1>Aiuto e Assistenza</h1>\n  <p>Per qualsisasi domanda o problema rilevato sulla piattaforma Starbook potete usare i contatti sotto indicati.</p>\n  <h3>Telefono</h3>\n  <p>+39 327 24 15 028</p>\n  <h3>Email</h3>\n  <p>info@starbook.co</p>\n  <h3>Social network</h3>\n  <div class=\"list-socials\">\n    <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n    <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n    <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n  </div>\n</div>\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div class=\"insert-container\">\n  <div class=\"progress-container\">\n    <div class=\"progress\"\n    [ngStyle]=\"{'width': setProgressWidth()}\"></div>\n  </div>\n  <button type=\"button\" id=\"next\" class=\"btn btn-success back\" (click)=\"undoStep()\" *ngIf=\"step!=='title'\">Indietro</button>\n  <div class=\"insert-body\" *ngIf=\"step==='title'\">\n    <div class=\"title\">\n      <h1>Inserisci il titolo del servizio</h1>\n      <p>Decidi un titolo breve e chiaro che rende il tuo servizio unico.</p>\n    </div>\n    <form (keyup.enter)=\"saveStep('title')\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"titolo\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.title\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('title')\">Avanti</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"insert-body\" *ngIf=\"step==='price'\">\n    <div class=\"title\">\n      <h1>Inserisci il prezzo</h1>\n      <p>Decidi il costo per unita di misura del servizio. L'unità di misura può essere: metri, ore, scatole ecc.</p>\n    </div>\n    <div class=\"input-group\" [ngStyle]=\"{'width' : '45%', 'float' : 'left'}\">\n      <input type=\"text\" class=\"form-control price\" placeholder=\"0\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.price\">\n    </div>\n    <div class=\"input-group\" [ngStyle]=\"{'width' : '10%', 'float' : 'left', 'line-height' : '60px'}\">\n      /\n    </div>\n    <span class=\"input-group\" [ngStyle]=\"{'width' : '45%', 'float' : 'left'}\">\n      <input type=\"text\" class=\"form-control unit\" placeholder=\"unità\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.unit\">\n    </span>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('price')\">Avanti</button>\n    </div>\n  </div>\n  <div class=\"insert-body\" *ngIf=\"step==='picture'\">\n    <div class=\"title\">\n      <h1>Immagine del servizio</h1>\n      <p>Per poter vendere un servizio in modo più semplice e professionale è necessario un ottima immagine.</p>\n    </div>\n    <div class=\"picture-container\" (click)=\"file.click()\">\n      <input type=\"file\" (change)=\"fileEvent($event)\" style=\"display: none;\" #file>\n      <div class=\"picture\">\n        <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n        <img class=\"img-responsive\" [src]=\"logo\" alt=\"Inserisci immagine\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('picture')\">Avanti</button>\n    </div>\n  </div>\n  <div class=\"insert-body\" *ngIf=\"step==='register'\">\n    <div class=\"title\">\n      <h1>Ultimo passo</h1>\n      <p>Crea il tuo profilo professionale e inizia subito a ricevere richieste.</p>\n    </div>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n      </div>\n      <!-- <div class=\"form-group\">\n        <label for=\"professionInput\">Professione</label>\n        <input type=\"profession\" placeholder=\"La tua professione\" class=\"form-control\" id=\"professionInput\" [(ngModel)]=\"profession\" [ngModelOptions]=\"{standalone: true}\">\n      </div> -->\n      <div class=\"form-group\">\n        <label for=\"phoneInput\">Telefono</label>\n        <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwordInput\">Password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n      </div>\n      <!-- <div class=\"form-group\">\n        <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n      </div> -->\n      <div class=\"form-group\" *ngIf=\"signup_state.error_message\">\n        <div class=\"alert alert-danger\" role=\"alert\">{{signup_state.error_message}}</div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('register')\">Registrati</button>\n      </div>\n      <div class=\"form-group\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"/info/legal\" href=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></small></h6>\n      </div>\n    </form>\n    <!-- <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('register')\">Avanti</button>\n    </div> -->\n    <!-- <div class=\"signup-container\">\n      <div class=\"picture-container\" (click)=\"file.click()\">\n        <input type=\"file\" (change)=\"fileEvent($event)\" style=\"display: none;\" #file>\n        <div class=\"picture\">\n          <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n          <img class=\"img-responsive\" [src]=\"logo\" alt=\"Inserisci immagine\">\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"insert-body\" *ngIf=\"step==='login'\">\n    <div class=\"title\">\n      <h1>Immagine del servizio</h1>\n      <p>Per poter vendere un servizio in modo più semplice e professionale è necessario un ottima immagine.</p>\n    </div>\n    <div class=\"signup-container\">\n      <div class=\"picture-container\" (click)=\"file.click()\">\n        <input type=\"file\" (change)=\"fileEvent($event)\" style=\"display: none;\" #file>\n        <div class=\"picture\">\n          <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n          <img class=\"img-responsive\" [src]=\"logo\" alt=\"Inserisci immagine\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"saveStep('login')\">Avanti</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"insert-body\" *ngIf=\"step==='end'\">\n    <div class=\"title\">\n      <h1>Fine</h1>\n      <p>Hai pubblicato con successo un servizio. Il servizio verra verificato.</p>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<div class=\"legal-container\">\n  <div class=\"legal-content\">\n    <div class=\"container\">\n      <h1>Privacy policy</h1>\n      <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n      <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n      <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n      <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n      2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n      2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n      2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n      2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n      2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n\n      <h1>Condizioni d'utilizzo</h1>\n      <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n      <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n      <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n      <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n      <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n      <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n      <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n      <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n      <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n      <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n      <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n      <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n      <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n      <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n      <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n      <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n      <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n      <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n      <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n      <p><strong>5. SERVIZIO CLIENTI</strong></p>\n      <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n      <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n      <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n      <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n      <p><strong>6. LICENZA D’USO</strong></p>\n      <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n      <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n      <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n      <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n      <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n      <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n      <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n      <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<div class=\"notfound-container\">\n  <div class=\"container notfound text-center\">\n    <h1>Ups! Pagina non trovata!</h1>\n  </div>\n</div>\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<div class=\"orders-container\">\n\n  <!-- <div class=\"top-bar-container noselect\">\n    <ul class=\"top-bar\">\n      <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.route === page}\" (click)=\"renderPage(tab.route)\"><i class=\"fa {{tab.icon}}\" aria-hidden=\"true\"></i>  {{tab.name}}</li>\n    </ul>\n  </div> -->\n\n  <div class=\"orders\" *ngIf=\"page==='requests'\">\n    <div class=\"noitems\" *ngIf=\"pageData?.length===0\">\n      <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i>\n      <p>Non ci sono ordini</p>\n    </div>\n    <div class=\"order-container\" *ngFor=\"let order of pageData\">\n      <div class=\"order\">\n        <div class=\"order-header\">\n          <div class=\"top\">\n            <span *ngIf=\"order.status===0 && order.customer_id===currentUser._id\">Servizio in attesa di conferma<span class=\"saving\"><span>.</span><span>.</span><span>.</span></span></span>\n            <span *ngIf=\"order.status===1 && order.customer_id===currentUser._id\" [ngStyle]=\"{'color':'green'}\">Servizio assegnato</span>\n            <span *ngIf=\"order.status===0 && order.customer_id!==currentUser._id\">Servizio in attesa di conferma<span class=\"saving\"><span>.</span><span>.</span><span>.</span></span></span>\n            <span *ngIf=\"order.status===1 && order.customer_id!==currentUser._id\" [ngStyle]=\"{'color':'green'}\">Servizio assegnato</span>\n          </div>\n          <div class=\"top client\">\n            <span><strong>Cliente: </strong>{{order.customer.profile.fullname}}</span>\n            <span><strong>Telefono: </strong>{{order.customer.phone_number}}</span>\n            <span><strong>Indirizzo: </strong>{{formatedAddressFromObject(order.address)}}</span>\n            <span><strong>Inizio lavoro: </strong>{{formatedDateFromString(order.date)}}</span>\n          </div>\n          <div class=\"table-header\">\n            <span class=\"item\">Articolo</span>\n            <span class=\"price\">Importo</span>\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"content\">\n            <div class=\"items\" *ngFor=\"let detail of order.details\">\n              <div class=\"item\" *ngIf=\"detail.type==='service'\">\n                <strong><span>{{detail.title}}</span></strong>\n              </div>\n              <div class=\"item\" *ngIf=\"detail.type==='detail'\">\n                <span>{{detail.title}}</span>\n              </div>\n              <div *ngIf=\"detail.type==='detail'\">\n                <span class=\"price\"><div *ngIf=\"!detail.amount || detail.amount===0\">-</div><div *ngIf=\"detail.amount && detail.amount>0\">{{detail.amount/100}}€</div></span>\n              </div>\n            </div>\n            <div class=\"description\">\n              <span>Messaggio: {{order.description}}</span>\n            </div>\n            <div class=\"price\" *ngIf=\"getTotalAmount(order.details)>0\">\n              <div class=\"items\">\n                <span class=\"item\"><strong>Totale importo:</strong></span><span class=\"amount\">{{getTotalAmount(order.details)/100}}€</span>\n              </div>\n            </div>\n            <div class=\"payment\" *ngIf=\"order.milestones?.length>0\">\n              <div class=\"line dashed\"></div>\n              <div class=\"items\" *ngFor=\"let milestone of order.milestones\">\n                <span class=\"item\">Acconto:</span><span class=\"amount\">{{milestone.amount/100}}€</span>\n              </div>\n            </div>\n            <div class=\"price\" *ngIf=\"getTotalMilestones(order.milestones)>0 && order.milestones.length>1\">\n              <div class=\"items\">\n                <span class=\"item\"><strong>Totale acconti:</strong></span><span class=\"amount\">{{getTotalMilestones(order.milestones)/100}}€</span>\n              </div>\n            </div>\n            <div class=\"actions\" *ngIf=\"order.status===0 || order.status===1\">\n              <div *ngIf=\"order.status===0 && order.customer_id!==currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-success\" (click)=\"openPopup('ACCEPT_WORK', order)\">Conferma la richiesta</button>\n              </div>\n              <div *ngIf=\"order.status===1 && order.customer_id===currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-warning\" (click)=\"openPopup('PAY_UPFRONT', order)\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Pagamento</button>\n              </div>\n              <div *ngIf=\"order.status===1 && order.customer_id!==currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-primary\" (click)=\"openPopup('UPDATE_TOTAL', order)\">Modifica fattura</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <p><small><i class=\"fa fa-info\" aria-hidden=\"true\"></i> Per asistenza tecnica, annullamenti del ordine o per segnalare problemi vai nella pagina dei <a routerLink=\"/info/help\" target=\"_blank\">contatti.</a></small></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--  POPUP -->\n  <div class=\"popup-container\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\">\n    <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"closePopup()\"></div>\n    <div class=\"popup\" *ngIf=\"popup==='ACCEPT_WORK'\">\n      <div class=\"popup-header\">\n        <h3>Conferma il servizio richiesto</h3>\n        <p>Confermando prendi l'impegno per effettuare il lavoro richiesto dal cliente.</p>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"acceptOrder()\">Conferma</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"popup\" *ngIf=\"popup==='UPDATE_TOTAL'\">\n      <div class=\"popup-header\">\n        <h3>Aggiorna la fattura</h3>\n        <p>Inserisci l'articolo e il prezzo in euro. Il totale verra calcolato in base agli articoli inseriti.</p>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"details\">\n          <!-- <input [textMask]=\"{mask: mask}\" [(ngModel)]=\"myModel\" type=\"text\"/> -->\n          <!-- <input [mask]=\"'money2'\" type=\"text\" formControlName=\"zipCode\"> -->\n\n          <div class=\"input-group list\" *ngFor=\"let detail of newDetails; let i=index\">\n            <input type=\"text\" id=\"descriptionInput\"  placeholder=\"Titolo\" class=\"form-control item\" [(ngModel)]=\"detail.title\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [value]=\"detail.amount | currencyFormat\" (change)=\"detailItemAmountChangeAtIndex($event, detail, i)\">\n            <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [(ngModel)]=\"detail.amount\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">-->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [ngModel]=\"detail.amount | currencyFormat\" (ngModelChange)=\"detailItemAmountChangeAtIndex(detail, i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [value]=\"formatAmount(detail)\" [ngModel]=\"detail.amount\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [ngModel]=\"formatAmount(detail)\" appFormatter (ngModelChange)=\"detailItemAmountChangeAtIndex(detail, i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"deleteDetailAtIndex(i)\">-</button>\n          </div>\n\n          <!-- <div class=\"input-group list\" *ngFor=\"let detail of selectedOrder.details; let i=index\">\n            <input type=\"text\" id=\"descriptionInput\"  placeholder=\"Titolo\" class=\"form-control item\" value=\"{{detail.title}}\" (ngModelChange)=\"detailItemTitleChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0.00\" class=\"form-control amount\" value=\"{{detail.amount/100}}\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"deleteDetailAtIndex(i)\">-</button>\n          </div> -->\n\n          <div class=\"input-group list\">\n            <input type=\"text\" id=\"descriptionInput\" placeholder=\"Titolo\" class=\"form-control item\" [(ngModel)]=\"newDetail.title\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [(ngModel)]=\"newDetail.amount\" [ngModelOptions]=\"{standalone: true}\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"addNewItem(newDetail)\">+</button>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"updateDetailsOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"update_state.loading\"></i> Aggiorna</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"popup\" *ngIf=\"popup==='PAY_UPFRONT'\">\n      <div class=\"popup-header\">\n        <h3>Pagamento lavorazione</h3>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"total\">\n          <span class=\"top-title\">Prezzo stimato</span>\n          <span class=\"price\">{{getTotalAmount(selectedOrder.details)/100}}€</span>\n        </div>\n        <div class=\"rest\" *ngIf=\"getRestToPay()>0\">\n          <span class=\"top-title\">Resto</span>\n          <span class=\"price\">{{getRestToPay()/100}}€</span>\n        </div>\n        <div class=\"input\">\n          <div class=\"input-group\">\n            <!-- <input type=\"text\" class=\"form-control price-field\"  placeholder=\"0\" [value]=\"upfront\" [(ngModel)]=\"upfront\" (ngModelChange)=\"onUpfrontChange($event)\" [ngModelOptions]=\"{standalone: true}\"> -->\n            <!-- <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" [(ngModel)]=\"upfront\" (keyup)=\"onUpfrontChange()\" (change)=\"onUpfrontChange()\" (focus)=\"selectAllContent($event)\"> -->\n            <!-- <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" value=\"upfront/100\" [ngModel]=\"upfront\" (ngModelChange)=\"changeUpFrontValue($event)\"/> -->\n            <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" [ngModel]=\"upfront\" appFormatter (ngModelChange)=\"changeUpFrontValue($event)\"/>\n            <!-- <span class=\"input-group-addon\">.00</span> -->\n            <span class=\"input-group-addon\">€</span>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-primary\" (click)=\"payUpfront()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"payment_state.loading\"></i> Acconto</button>\n          </div>\n          <div class=\"message\" *ngIf=\"getRestToPay()>0\">\n            <span>o procedi con il resto</span>\n          </div>\n          <div class=\"form-group\" *ngIf=\"getRestToPay()>0\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"payRestAmount(getRestToPay())\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"payment_state.loading\"></i> Paga il resto {{getRestToPay()/100}}€</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"order-container\" *ngIf=\"page==='estimates' && estimates && estimates.length===0\">\n  <div class=\"header\">\n    <p>Non ci sono preventivi salvati.</p>\n  </div>\n  <div *ngFor=\"let estimate of estimates\">\n    <div class=\"order-container\" *ngIf=\"page==='estimates'\">\n      <div class=\"header\">\n        <div *ngFor=\"let item of estimate.details\">\n          <div *ngIf=\"item.type === 'service'\">\n            <h3>{{estimate.title}}</h3>\n            <!-- <div class=\"line\"></div> -->\n          </div>\n          <div *ngIf=\"item.type === 'detail'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\">\n        <div class=\"item\">Durata (Approssimativo)</div>\n        <div class=\"amount time\">{{getTiming(estimate.price.initial)}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\" *ngIf=\"estimate.price.initial>estimate.price.final\">\n        <div class=\"item\">Totale iniziale</div>\n        <div class=\"amount initial\">{{estimate.price.initial/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">Totale</div>\n        <div class=\"amount\">{{estimate.price.final/100}}€</div>\n      </div>\n      <div class=\"line\"></div>\n      <!-- <div class=\"counts\">\n        <div class=\"item\">ACCONTO (30% del totale)</div>\n        <div class=\"amount\">{{estimate.payment.upfront/100}}€</div>\n      </div> -->\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\" (click)=\"startWizard(estimate)\">Continua con l'ordine</button>\n        </div>\n        <a (click)=\"shareEstimate(estimate)\">Condividi</a>\n        <a (click)=\"deleteEstimate(estimate)\">Elimina</a>\n      </div>\n      <!-- <div class=\"line\"></div>\n      <div class=\"links\">\n        <a href=\"#\">Cancella preventivo</a>\n        <a href=\"#\">Invia ad un amico</a>\n      </div> -->\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<div class=\"profile-page\">\n  <div class=\"top-bar-container noselect\">\n    <ul class=\"top-bar\">\n      <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.route === page}\" (click)=\"clickTabItem(tab.route)\"><i class=\"fa {{tab.icon}}\" aria-hidden=\"true\"></i>  {{tab.name}}</li>\n    </ul>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'general'\">\n    <div class=\"header\">\n      <h3>Informazioni generali</h3>\n      <p>Aggiorna le informazioni del tuo account per rimanere in contatto</p>\n    </div>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">Nome</label>\n            <input type=\"firstname\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"Nome\" [ngClass]=\"{'error-input': user_state.first_name_error}\" [(ngModel)]=\"User.firstname\">\n            <small class=\"error-message\" *ngIf=\"user_state.first_name_error\">{{user_state.first_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"lastname\">Cognome</label>\n            <input type=\"lastname\" class=\"form-control\" id=\"lastname\" name=\"lastname\" placeholder=\"Cognome\" [ngClass]=\"{'error-input': user_state.last_name_error}\" [(ngModel)]=\"User.lastname\">\n            <small class=\"error-message\" *ngIf=\"user_state.last_name_error\">{{user_state.last_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"phone\">Telefono</label>\n            <input type=\"phone\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Telefono\" [ngClass]=\"{'error-input': user_state.phone_number_error}\" [(ngModel)]=\"User.phone_number\">\n            <small class=\"error-message\" *ngIf=\"user_state.phone_number_error\">{{user_state.phone_number_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"saveProfile()\">{{user_state.button_title}}</a>\n      </div>\n    </form>\n    <div class=\"footer-box\">\n      <h5>Privacy del account</h5>\n      <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'payment'\">\n    <div class=\"header\">\n      <h3>Metodo di pagamento</h3>\n      <p>Aggiorna le informazioni del tuo metodo di pagamento</p>\n    </div>\n    <div class=\"card-container\" *ngFor=\"let card of cards\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8\">\n          <h4>{{card.brand}} <small>{{ card.funding }} {{ card.object }}</small> <small *ngIf=\"defaultCard === card.id\">Default</small></h4>\n          <div class=\"information-block\">\n            <span>Nome:</span>\n            {{ card.name }}\n          </div>\n          <div class=\"information-block\">\n            <span>Numero:</span>\n            **** {{ card.last4 }}\n          </div>\n          <div class=\"information-block\">\n            <span>Scadenza:</span>\n            {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n          </div>\n          <div class=\"information-block\">\n            <span>Tipo:</span>\n            {{ card.brand }} {{ card.funding }} {{ card.object }}\n          </div>\n          <div class=\"information-block\">\n            <span>Indirizzo:</span>\n            {{ card.address_line1 }} {{ card.address_line2 }} <br>\n            {{ card.address_state }} {{ card.address_city }} <br>\n            {{ card.address_zip }} {{ card.address_country }}\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n          <div class=\"buttons-block\">\n            <a class=\"btn btn-success\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n            <a class=\"btn btn-danger\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n            <!-- <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-container\">\n      <a class=\"btn btn-secondary\" *ngIf=\"cards?.length===0\" (click)=\"showCardPage()\">Aggiungi un metodo</a>\n      <a class=\"btn btn-secondary\" *ngIf=\"cards?.length > 0\" (click)=\"showCardPage()\">Aggiungi un altro metodo</a>\n    </div>\n    <div class=\"footer-box\">\n      <h5>Privacy del account</h5>\n      <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'settings'\">\n    <div class=\"header\">\n      <h3>Impostazioni</h3>\n      <p>Modifica le informazioni</p>\n    </div>\n    <form>\n      <h4>Aggiorna Email</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <!-- <label for=\"email\">La tua email</label> -->\n            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [ngClass]=\"{'error-input': user_state.email_error}\" [(ngModel)]=\"User.email\" disabled>\n            <small class=\"error-message\" *ngIf=\"user_state.email_error\">{{user_state.email_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <p><small>Dopo aver salvato la nuova email ti invieremo nella attuale email un messaggio di conferma per confermare il nuovo indirizzo.</small></p>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"saveNewEmail()\">Salva</a>\n      </div>\n      <h4>Cambia Password</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.old_password\">\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Nuova Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.new_password\">\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Conferma Nuova Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.confirm_password\">\n          </div>\n        </div>\n      </div>\n      <div class=\"messages\" *ngIf=\"password_state.message_error || password_state.message_success\">\n        <div class=\"success\" *ngIf=\"password_state.message_success\">\n          <p><small>{{password_state.message_success}}</small></p>\n        </div>\n        <div class=\"error\" *ngIf=\"password_state.message_error\">\n          <p><small>{{password_state.message_error}}</small></p>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"changePassword()\">{{password_state.button_title}}</a>\n      </div>\n    </form>\n    <div class=\"footer-box\">\n      <h5>Esci da starbook</h5>\n      <h6><small>Puoi uscire ed entrare in qualsiasi momento dal sito. Le tue informazioni rimangono salvate su Starbook.</small></h6>\n      <div class=\"actions\">\n        <a class=\"btn btn-danger\" (click)=\"logout()\">Esci</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'affiliate'\">\n    <div class=\"header\">\n      <h3>Programma di affiliazione Starbook</h3>\n      <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n    </div>\n    <div class=\"card-container\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-7\">\n          <div class=\"link-container\">\n            <div class=\"input-group\">\n              <div class=\"link\">\n                {{sharelink}}\n              </div>\n              <span class=\"input-group-btn\">\n                <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\">{{copy_link_state.title}}</button>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5\">\n          <p><small>Questo è un link unico per la tua affiliazione. Condividi l link e inizia a guadagnare per ogni lavoro svolto.</small></p>\n        </div>\n      </div>\n      <div class=\"row share-buttons\">\n        <h3>Condividi</h3>\n        <div class=\"col-md-6 col-lg-15\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-15\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-15\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-15\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google</button>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-15\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row send-buttons\">\n        <h3>Invia a</h3>\n        <div class=\"col-lg-7 col-md-7\">\n          <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n            <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n            <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n          </div>\n          <div class=\"input-group\">\n            <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n            <span class=\"input-group-btn\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-lg-5 col-md-5\">\n          <p><small>Invia il link diretto a un numero di telefono e indirizzo email. Inserisci numeri di telefono e email separando con una virgola.</small></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-box\">\n      <h5>Privacy del account</h5>\n      <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n    </div>\n  </div>\n\n  <div class=\"page-container\" *ngIf=\"page === 'card'\">\n    <div class=\"header\">\n      <h1>Inserisci un metodo di pagamento</h1>\n      <h6>Per utilizzare al massimo i servizi Starbook inserisci un metodo di pagamento.</h6>\n    </div>\n    <form>\n      <div class=\"card-form\">\n        <div class=\"form-group\">\n          <label for=\"numberInput\">Numero carta</label>\n          <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.number_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"dateInput\">Scadenza</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.exp_date_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"numberInput\">CVC/CVV</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.cvc_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n          <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"addressInput\">Indirizzo</label>\n              <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"addressNumberInput\">Nr</label>\n              <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"cittyInput\">Città</label>\n              <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"capInput\">CAP</label>\n              <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"provinceInput\">Provincia</label>\n              <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"messages\" *ngIf=\"card_state.message_error\">\n          <div class=\"error\" *ngIf=\"card_state.message_error\">\n            <p><small>{{card_state.message_error}}</small></p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-yellow-green\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</a>\n        </div>\n      </div>\n    </form>\n  </div>\n"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "<div class=\"service-container\">\n  <div class=\"service\" *ngIf=\"page==='service'\">\n    <div class=\"header\">\n      <h3>Hai bisogno di un professionista?</h3>\n      <h6>Inserisci il titolo e la descrizione del lavoro che vuoi svolgere.</h6>\n    </div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"titleInput\">Titolo</label>\n        <input type=\"text\" placeholder=\"Titolo della richiesta\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.title_error}\" id=\"titleInput\" [(ngModel)]=\"Request.title\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descriptionInput\">Descrizione</label>\n        <textarea class=\"form-control\" placeholder=\"Descrizione della richiesta\" rows=\"5\" [ngClass]=\"{'error-input': request_state.description_error}\" id=\"descriptionInput\" [(ngModel)]=\"Request.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Request.firstname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Request.lastname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phoneInput\">Telefono</label>\n        <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Request.phone\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Request.email\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"request_state.message_success\">\n        <div class=\"alert alert-success\" role=\"alert\">\n          {{request_state.message_success}}\n        </div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"request_state.message_error\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          {{request_state.message_error}}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"sendRequestForNewService()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"request_state.loading\"></i>{{request_state.button_title}}</button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"estimate\" *ngIf=\"page==='estimate'\">\n    <div *ngIf=\"!Estimate\">\n      Non ci sono preventivi da visualizzare\n    </div>\n    <div *ngIf=\"Estimate\">\n      <div class=\"header\">\n        <div *ngFor=\"let item of Estimate.details\">\n          <div *ngIf=\"item.type === 'service'\">\n            <h3>{{item.title}}</h3>\n            <div class=\"line\"></div>\n          </div>\n          <div *ngIf=\"item.type === 'detail'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n        <div class=\"item\">PREZZO INIZIALE</div>\n        <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">PREZZO FINALE</div>\n        <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">ACCONTO (30% del totale)</div>\n        <div class=\"amount\">{{Estimate.payment.upfront/100}}€</div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<div class=\"service-container\" *ngIf=\"Service\">\n  <div class=\"service\">\n    <div class=\"picture-container\">\n      <div class=\"picture\" *ngIf=\"Service._id\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + Service._id + '/cover/0' + ')'}\"></div>\n      <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n      <span><a href=\"#\">Invia ad un amico</a></span>\n      <!-- <div class=\"description\">\n        <span>{{Service.description}}</span>\n      </div> -->\n    </div>\n    <div class=\"content-container\">\n      <div class=\"content-header\">\n        <span class=\"title\">{{Service.title}}</span>\n        <span class=\"address\"><strong>Milano</strong></span>\n        <!-- <span class=\"subtitle\">{{Service.description}}</span> -->\n      </div>\n      <div class=\"content-body\">\n        <!-- <div class=\"title-container\">\n          <span>Costi</span>\n        </div> -->\n        <div class=\"items\">\n          <div class=\"item\"><i class=\"fa fa-car\" aria-hidden=\"true\"></i><span class=\"text\">Automunito</span></div>\n          <div class=\"item\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"text\">Disponibilità su prenotazione</span></div>\n          <!-- <div class=\"item\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><span class=\"text\">Durata del lavoro da stabilire</span></div> -->\n          <!-- <div class=\"item\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span class=\"text\">Sopralluogo gratuito</span></div> -->\n          <!-- <div class=\"item\"><i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i><span class=\"text\">Pagamento: Carta, Prepagata</span></div> -->\n        </div>\n      </div>\n      <div class=\"content-pricing\">\n        <div class=\"pricing-header\">\n          <span>Calcola il preventivo</span>\n        </div>\n        <div class=\"pricing-body\">\n          <form *ngIf=\"Service.pricing\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">{{Service.pricing.unit.title}}</span>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"OrderService['details'][0].quantity\" (keyup)=\"changeQuantityForOrderService()\" (change)=\"changeQuantityForOrderService()\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"option\" *ngFor=\"let option of Service.pricing.options\">\n              <div class=\"title\">\n                <span>{{option.title}}</span>\n              </div>\n              <div class=\"items\">\n                <div class=\"item-container noselect\" *ngFor=\"let item of option.items\" (click)=\"toggleItemOption(item, option)\">\n                  <div class=\"item\" [ngClass]=\"{'checked':orderServiceDetailsContainItem(item)}\">\n                    <span>{{item.title}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"pricing-footer\">\n          <span>Prezzo {{getTotalEstimateQuotation()/100}}€</span>\n        </div>\n        <div class=\"pricing-actions\">\n          <a class=\"btn btn-danger\" name=\"button\" (click)=\"bookService()\">Prenota</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"review-container\">\n    <p>This is a review</p>\n  </div> -->\n</div>\n<div class=\"footer-container\">\n  <div class=\"footer\">\n    This is the footer\n  </div>\n</div>\n\n\n<!-- <div class=\"service-container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"cover-container\" *ngIf=\"Service.pricing\">\n          <div class=\"cover-header\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n            <span>{{Service.title}}</span>\n          </div>\n          <div class=\"cover-body\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + Service._id + '/cover/0' + ')'}\"></div>\n          <div class=\"cover-footer\">\n            <div class=\"item\">\n              <span class=\"icon\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></span><span class=\"text\">Disponibilità su prenotazione</span><br>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Durata minima</span>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Sopraluogo</span><br>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i> Modalità di pagamento con carta</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"quotation-container\" *ngIf=\"Service.pricing\">\n          <div class=\"quotation-header\">\n            <div class=\"item-container\">\n              <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"text\">Disponibilità su prenotazione</span><br>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><span class=\"text\">Durata lavoro</span>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span class=\"text\">Sopralluogo gratuito</span>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i><span class=\"text\">Pagamento: Carta, Prepagata</span>\n            </div>\n            <span class=\"left\">Calcola il preventivo</span><span class=\"right\">345€</span>\n          </div>\n          <div class=\"quotation-body\">\n            <div class=\"quantity\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">{{Service.pricing.unit.title}}</span>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"OrderService['details'][0].quantity\" (keyup)=\"changeQuantityForOrderService()\" (change)=\"changeQuantityForOrderService()\">\n              </div>\n            </div>\n            <div class=\"option\" *ngFor=\"let option of Service.pricing.options\">\n              <div class=\"title\">\n                <span>{{option.title}}</span>\n              </div>\n              <div class=\"items\">\n                <div class=\"item-container noselect\" *ngFor=\"let item of option.items\" (click)=\"toggleItemOption(item, option)\">\n                  <div class=\"item\" [ngClass]=\"{'checked':orderServiceDetailsContainItem(item)}\">\n                    <span>{{item.title}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"quantity\" *ngIf=\"control.type==='QUANTITY'\">\n              <span>{{pricing.unit.title}}</span>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">{{form.title}}</span>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"control.value\" (keyup)=\"changeValue()\" (change)=\"changeValue()\" (focus)=\"selectAllContent($event)\">\n              </div>\n            </div>\n            <div class=\"price\" *ngIf=\"control.type==='PRICE'\">\n              <div class=\"items-container\">\n                <span class=\"title\">{{form.title}}</span>\n                <div class=\"items\">\n                  <div class=\"item-container\" *ngFor=\"let item of control.items\">\n                    <div class=\"item\">\n                      <span>{{control.title}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"quotation-footer\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-warning\">{{getTotalEstimateQuotation()/100}}€ CONTINUA</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\">\n            <div class=\"header\">\n              <div class=\"content-header\" *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\" [ngStyle]=\"{'width': '60%'}\">\n                <h3>{{serviceCategory.title}}</h3>\n                <p *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</p>\n              </div>\n              <div class=\"content-header\" *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url === ''\" [ngStyle]=\"{'width': '100%', 'padding-right' : '0px'}\">\n                <h3>{{serviceCategory.title}}</h3>\n                <p *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</p>\n              </div>\n              <div *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\">\n                <img src=\"{{serviceCategory.image_url}}\" alt=\"{{serviceCategory.title}}\">\n              </div>\n              <div *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url == ''\">\n                <img [ngStyle]=\"{'display': 'none'}\">\n              </div>\n            </div>\n            <div class=\"service content noselect\">\n              <span *ngFor=\"let item of serviceCategory.options\">\n                <div class=\"item-container\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected, 'image-item': item.image_url}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                  <div class=\"item\">\n                    <i *ngIf=\"item.selected===true\" class=\"checkbox\"><span></span></i>\n                    <i *ngIf=\"item.selected===false\" class=\"checkbox empty\"></i>\n                    <h4>{{item.title}}</h4>\n                  </div>\n                  <div class=\"item-description\" *ngIf=\"item.description!==''\">\n                    <p>{{ item.description }}</p>\n                  </div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url !== ''\" [ngStyle]=\"{'background-image': 'url(' + item.image_url + ')'}\"></div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url == ''\" [ngStyle]=\"{'display': 'none'}\"></div>\n                </div>\n                <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                  <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                  <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                </div>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <app-order *ngIf=\"Service.pricing\" [Service]=\"Service\" [orderServices]=\"OrderService\" [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\" [price_state] = \"price_state\"></app-order>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"services\">\n  <h1><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i>{{services_state.title}}</h1>\n  <div class=\"services-container\">\n    <div class=\"service-box\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n      <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'services/'+ service._id + '/cover/0' + ')'}\">\n        <div class=\"title\">{{ service.title }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "<div class=\"estimate\" *ngIf=\"page==='service' && Estimate\">\n  <div class=\"header\">\n    <div *ngFor=\"let item of Estimate.details\">\n      <div *ngIf=\"item.type==='service'\">\n        <h3>{{item.title}}</h3>\n      </div>\n      <div *ngIf=\"item.type==='detail'\">\n        <p>{{item.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\" *ngIf=\"Estimate.timing.days > 1\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.timing.days > 1\">\n    <div class=\"item\">Durata del lavoro</div>\n    <div class=\"amount time\">{{daysString(Estimate.timing.days)}}</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n    <div class=\"item\">Totale (Iniziale)</div>\n    <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n  </div>\n  <div class=\"counts\">\n    <div class=\"item\">Totale</div>\n    <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"startWizard()\">Continua con l'ordine</button>\n    </div>\n    <div class=\"form-group\">\n      <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva preventivo</a>\n      <a *ngIf=\"currentUser && estimate_state.saved\">Preventivo Salvato!</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"share-container\" *ngIf=\"page==='starbook'\">\n  <div class=\"header\">\n    <h1>Aiuta un amico e guadagnate insieme!</h1>\n    <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n  </div>\n  <div class=\"invitation\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h1>Condividi sui social</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"estimate\" *ngIf=\"page==='estimate' && Estimate\">\n  <div class=\"header\">\n    <div *ngFor=\"let item of Estimate.details\">\n      <div *ngIf=\"item.type==='service'\">\n        <h3>{{item.title}}</h3>\n      </div>\n      <div *ngIf=\"item.type==='detail'\">\n        <p>{{item.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\" *ngIf=\"Estimate.timing.days > 1\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.timing.days > 1\">\n    <div class=\"item\">Durata del lavoro</div>\n    <div class=\"amount time\">{{daysString(Estimate.timing.days)}}</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n    <div class=\"item\">Totale (Iniziale)</div>\n    <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n  </div>\n  <div class=\"counts\">\n    <div class=\"item\">Totale</div>\n    <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"startWizard()\">Continua con l'ordine</button>\n    </div>\n    <div class=\"form-group\">\n      <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva preventivo</a>\n      <a *ngIf=\"currentUser && estimate_state.saved\">Preventivo Salvato!</a>\n    </div>\n  </div>\n  <div class=\"invitation\">\n    <h3>Invia preventivo a</h3>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h3>Condividi sui social</h3>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "<div class=\"wizard-container\" (window:resize)=\"onResize()\">\n  <div class=\"progress-container\"><div class=\"progress\"></div></div>\n  <div class=\"wizard\">\n    <ul class=\"breadcrumb\" *ngIf=\"step !== ''\">\n      <li *ngFor=\"let items of wizardDataItems; let i = index;\"\n          [ngStyle]=\"{'width': 100/wizardDataItems.length + '%'}\"\n          [ngClass]=\"{'active': (step === 'summary' && items === 'Sommario') || (step === 'address' && items === 'Indirizzo') || (step === 'date' && items === 'Data') || ((step === 'preview' || step === 'login' || step === 'signup' || step === 'card') && (items === 'Anteprima' || items === 'Login' || items === 'Signup' || items === 'Carta')) || ((step === 'end' || step === 'info') && (items === 'Fine' || items === 'Info'))}\">\n          <a><div *ngIf=\"screenWidth<=425\">{{i+1}}</div><div *ngIf=\"screenWidth>425\">{{items}}</div></a>\n        </li>\n    </ul>\n    <div class=\"wizard-container\" *ngIf=\"step === 'summary'\">\n      <div class=\"content-container\">\n        <div class=\"header-summary\">\n          <h3>{{Order.title}}</h3>\n          <div class=\"summary-details\" *ngFor=\"let item of Order.details\">\n            <div *ngIf=\"item.type !== 'service'\">\n              <div class=\"item\"><p>{{item.title}}</p></div>\n              <div class=\"amount\">\n                <div *ngIf=\"item.count\">{{item.count}}</div>\n                <div *ngIf=\"item.amount\">{{item.amount}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"line\" *ngIf=\"Order.timing.days > 1\"></div>\n        <div class=\"timing\" *ngIf=\"Order.timing.days > 1\">\n          <div class=\"item\">Durata del lavoro</div>\n          <div class=\"amount\">{{daysString(Order.timing.days)}}</div>\n        </div> -->\n        <form>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"3\" id=\"descriptionInput\" [(ngModel)]=\"Order.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n          <div class=\"actions\">\n            <div class=\"form-group\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmPreview()\">Continua</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci una descrizione più dettagliata della richiesta. In questo modo ci assicuriamo che il tecnico avra più informazioni prima di effetuare l'intervento.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'address'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Dove si trova la sua abitazione?</h1>\n          <p class=\"text-center\">Inserisci l'indirizzo e la città della sua abitazione</p>\n        </div>\n        <div class=\"forms\">\n          <div class=\"form-group\">\n            <p-autoComplete id=\"luogo\" class=\"form-control\" [(ngModel)]=\"temp_address\" (clickOutside)=\"clickOutsideAddressInput()\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"street_number_city\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\" placeholder=\"Via, Numero, Città\"></p-autoComplete>\n          </div>\n        </div>\n        <div class=\"messages\" [hidden]=\"!address_state.error_message\">\n          <p><small>{{address_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmAddress()\">Continua</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci l'indirizzo esatto della sua abitazione o locale dove vuole effetuare l'intervento.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'date'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Quando vuoi realizare questo lavoro?</h1>\n          <p class=\"text-center\">Inserisci la data che vuoi realizzare questo servizio</p>\n        </div>\n        <div class=\"forms\">\n          <div class=\"form-group calendar-part\">\n            <div class=\"input-group date datepicker-block\">\n              <p-calendar name=\"data\" [(ngModel)]=\"temp_date\" id=\"data\" class=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\" placeholder=\"Inserisci la data\"></p-calendar>\n            </div>\n          </div>\n        </div>\n        <div class=\"messages\" [hidden]=\"!date_state.error_message\">\n          <p><small>{{date_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmDate()\">Continua</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci una data ideale per quando vuoi effetuare l'intervento del tecnico.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'preview'\">\n      <div class=\"content-container\">\n        <div class=\"header-summary\">\n          <h3>{{Order.title}}</h3>\n          <div class=\"summary-details\" *ngFor=\"let item of Order.details\">\n            <div *ngIf=\"item.type !== 'service'\">\n              <div class=\"item\"><p>{{item.title}}</p></div>\n              <div class=\"amount\">\n                <div *ngIf=\"item.count\">{{item.count}}</div>\n                <div *ngIf=\"item.amount\">{{item.amount}}</div>\n              </div>\n            </div>\n          </div>\n          <p>{{Order.description}}</p>\n        </div>\n        <!-- <div class=\"line\" *ngIf=\"Order.timing.days > 1\"></div>\n        <div class=\"timing\" *ngIf=\"Order.timing.days > 1\">\n          <div class=\"item\">Durata del lavoro</div>\n          <div class=\"amount\">{{daysString(Order.timing.days)}}</div>\n        </div> -->\n        <div class=\"line\"></div>\n        <div class=\"address\">\n          <p><strong>Indirizzo: </strong><span>{{Order.address.street}} {{Order.address.street_number}}, {{Order.address.city}}</span></p>\n        </div>\n        <div class=\"date\">\n          <p><strong>Data: </strong><span>{{formated_date}}</span></p>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"payment\">\n          <div class=\"upfront\" *ngIf=\"Order.upfront_amount\">\n            <div class=\"item\">Acconto</div>\n            <div class=\"amount\">{{Order.upfront_amount/100}}€</div>\n          </div>\n\n          <!-- <div class=\"initial\" *ngIf=\"Order.price.initial>Order.price.final\">\n            <div class=\"item\">Totale iniziale</div>\n            <div class=\"amount\">{{Order.price.initial/100}}€</div>\n          </div>\n          <div class=\"total\" *ngIf=\"Order.price.final>0\">\n            <div class=\"item\">Totale</div>\n            <div class=\"amount\">{{Order.price.final/100}}€</div>\n          </div>\n          <div class=\"upfront\" *ngIf=\"Order.price.final!==Order.payment.upfront\">\n            <div class=\"item\">Acconto</div>\n            <div class=\"amount\">{{Order.payment.upfront/100}}€</div>\n          </div> -->\n        </div>\n        <div class=\"messages\" [hidden]=\"!order_status.error_message\">\n          <p><small>{{order_status.error_message}}</small></p>\n          <div *ngIf=\"order_status.payment_error_message\">\n            <!-- <p><small>{{order_status.payment_error_message}} <a routerlink=\"profile/payment\" ng-reflect-router-link=\"profile/payment\" ng-reflect-href=\"profile/payment\" href=\"/profile/payment\" target=\"_blank\">metodo di pagamento</a></small></p> -->\n            <p><small>{{order_status.payment_error_message}} <a routerLink=\"/order/card\">metodo di pagamento</a></small></p>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"order_status.loading\"></i>{{order_status.button_title}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Controlla l'ordine richiesto e tutti i dati inseriti, l'indirizzo, la data, la descrizione della richiesta prima di continuare.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'end'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Complimenti, hai prenotato con successo un tecnico.</h1>\n          <p class=\"text-center\">Ti contatteremo per ulteriori informazioni.</p>\n        </div>\n        <div class=\"messages\">\n          <div class=\"success-icon\"><span></span></div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmEnd()\">Fatto</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Fatto! Nei prossimi minuti verrai contattato da noi per ulteriori dettagli e per confermare l'ordine. Per sucurezza controlla che sia inserito il numero del telefono nel tuo account.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'login'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Accedi al tuo account</h1>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordInput\">Password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n          </div>\n        </form>\n        <div class=\"messages\" [hidden]=\"!login_state.error_message\">\n          <p><small>{{login_state.error_message}}</small></p>\n        </div>\n        <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n          <p><small>{{facebook_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToSignup()\">Sei nuovo? Crea un account</button>\n          </div>\n          <div class=\"form-divider\">\n            <span>o</span>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n          </div>\n        </div>\n        <div class=\"footer\">\n          <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Se hai gia un account su Starbook accedi e poi continua con l'ordine. In alternativa puoi usare anche Facebook per continuare.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'signup'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Crea un account</h1>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"firstNameInput\">Nome</label>\n                <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"lastNameInput\">Cognome</label>\n                <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phoneInput\">Telefono</label>\n            <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordInput\">Password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n          </div>\n        </form>\n        <div class=\"messages\" [hidden]=\"!signup_state.error_message\">\n          <p><small>{{signup_state.error_message}}</small></p>\n        </div>\n        <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n          <p><small>{{facebook_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToLogin()\">Accedi</button>\n          </div>\n          <div class=\"form-divider\">\n            <span>o</span>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n          </div>\n        </div>\n        <div class=\"footer\">\n          <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Crea un account su Starbook inserendo i dati più importanti e poi proseguì inviando l'ordine. In alternativa puoi usare anche Facebook per continuare.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'card'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Inserisci un metodo di pagamento</h1>\n          <h6>Per continuare con l'ordine inserisci un metodo di pagamento</h6>\n        </div>\n        <form>\n          <div class=\"card-form\">\n            <div class=\"form-group\">\n              <label for=\"numberInput\">Numero carta</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n              <!-- <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small> -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"dateInput\">Scadenza</label>\n                  <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n                  <!-- <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small> -->\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"numberInput\">CVC/CVV</label>\n                  <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n                  <!-- <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n              <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <label for=\"addressInput\">Indirizzo</label>\n                  <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"addressNumberInput\">Nr</label>\n                  <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <label for=\"cittyInput\">Città</label>\n                  <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"capInput\">CAP</label>\n                  <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"provinceInput\">Provincia</label>\n                  <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"countryInput\">Paese</label>\n                  <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"actions\">\n              <div class=\"form-group\" *ngIf=\"card_state.message_error\">\n                <div class=\"alert alert-danger\" role=\"alert\">{{card_state.message_error}}</div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"undobutton\">\n                  <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n                  <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci un metodo di pagamento per inviare l'ordine. In questo modo assicuriamo che il pagamento del professionista sia garantio. Puo richiedere il rimborso delle spese in qualsiasi momento contatandoci.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'info'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Inserisci un contatto telefonico</h1>\n          <p>Per favore inserisci un numero di telefono per essere contatato dal professionista.</p>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"phoneInput\">Telefono</label>\n            <input type=\"phone\" name=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': profile_info_state.phone_number_error}\" id=\"phoneInput\" [(ngModel)]=\"profileInformation.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"profile_info_state.phone_number_error\">{{profile_info_state.phone_number_error_message}}</small>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"saveInformations()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"profile_info_state.loading\"></i>{{profile_info_state.button_title}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci il tuo numero di telefono per essere contattato da noi per ulteriori dettagli sul ordine effetuato.</p>\n      </div>\n    </div>\n\n    <div class=\"container-fluid wizard-footer\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Informazioni</h5>\n              <h6>Le informazioni sono importanti per poter inviare un ordine più dettagliata al tecnico.</h6>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-15 col-sm-15\">\n            <div class=\"box\">\n              <h5>Indirizzo</h5>\n              <h6>Inserisci l'indirizzo della sua abitazione o locale dove vuoi svolgere il lavoro.</h6>\n            </div>\n          </div> -->\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Indirizzo & Data</h5>\n              <h6>Inserisci l'indirizzo e la data del appuntamento con il professionista che verra a svolgere il lavoro.</h6>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-md-15 col-sm-15\">\n            <div class=\"box\">\n              <h5>Data</h5>\n              <h6>Decidi la data del lavoro. Inserisci una data ideale per te.</h6>\n            </div>\n          </div> -->\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Garanzia</h5>\n              <h6>Inserisci un metodo di pagamento per poter pagare il lavoro comodamente online.</h6>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Fine</h5>\n              <h6>Dopo aver inviato l'ordine noi faremo il resto. Invieremo il tecnico nella data prestabilita.</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-container\">\n        <p><span>Errore!</span> {{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">\n      <h1>Accedi</h1>\n    </div>\n    <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n        <label for=\"email\">Indirizzo email</label>\n        <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n        <span class=\"error\">Indirizzo email non valido</span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n        <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n        <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n        <span class=\"error\">Inserisci la tua password</span>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-facebook\" (click)=\"facebookLogin()\">\n          <i></i>\n          Continua con Facebook\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">\n    <h1>Nuovo utente</h1>\n  </div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regFirstName\">Nome</label>\n          <input id=\"regFirstName\" class=\"form-control\" type=\"text\" name=\"firstname\" placeholder=\"\" required [(ngModel)]=\"registrationData.firstname\" #regFirstName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationFirstName', regFirstName.value)\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regLastName\">Cognome</label>\n          <input id=\"regLastName\" class=\"form-control\" type=\"text\" name=\"lastname\" placeholder=\"\" required [(ngModel)]=\"registrationData.lastname\" #regLastName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationLastName', regLastName.value)\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input type=\"phone\" name=\"phone\" id=\"regPhone\" class=\"form-control\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regFirstName.value, regLastName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <!-- <div class=\"form-description\">\n    <span>o</span>\n  </div> -->\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-facebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"form-notice\">Continuando dichiari di aver letto e accetti le <a routerLink=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">\n    <h1>Recupera password</h1>\n  </div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n      <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n        <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n          <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n        </circle>\n      </svg>\n    </div>\n    <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n    <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">\n      <h1>{{ confirmPopupData.title }}</h1>\n    </div>\n    <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n      <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n      <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n      <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n          <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n          <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n        </div>\n      </div>\n      <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n        <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n        <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n        <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n      </div>\n      <div class=\"price-loader\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading\">\n        <div class=\"spinner\">\n          <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <span>Calcolando totale…</span>\n      </div>\n      <div class=\"price-area\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading === false && confirmPopupData.totalPrice\">\n        Totale<span>{{confirmPopupData.totalPrice / 100}}€</span>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n        <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\"><i class=\"fa fa-lock\"></i> Prenota servizio</button>\n        <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n        <span *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\" class=\"confirm-button-notice\">Attenzione, chiudendo potresti perdere il prezzo calcolato del servizio.</span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n      <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n      <p>{{ confirmFinishPopupData.text }}</p>\n      <div class=\"form-group\">\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n      <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n      <div class=\"header\">{{ finishPopupData.title }}</div>\n      <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n      <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n        <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n          <label>Numero di telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n        </div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n        <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"header\">Metodo di pagamento</div>\n    <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n      <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n      <div class=\"cards-logo\">\n        <div class=\"card-item visa\"></div>\n        <div class=\"card-item mastercard\"></div>\n        <div class=\"card-item amex\"></div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCardNumber\">Numero carta</label>\n        <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCardNumber\">Numero carta</label>\n        <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n          <label for=\"addExpDate\">Scadenza</label>\n          <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n          <span class=\"error\">Expiration date isn't correct</span>\n        </div>\n        <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n          <label for=\"addCVV\">CVV</label>\n          <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n        <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n          <label for=\"editCVV\">CVV</label>\n          <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n      </div>\n      <div class=\"subheader\">\n        Informazioni facoltativi\n      </div>\n      <div class=\"form-group\">\n        <label for=\"addCardName\">Nome intestatario</label>\n        <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardVia\">Indirizzo</label>\n          <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardNr\">Nr</label>\n          <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardCitta\">Città</label>\n          <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardCap\">CAP</label>\n          <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\">\n          <label for=\"addCardProvincia\">Provincia</label>\n          <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n        </div>\n        <div class=\"part-group last\">\n          <label for=\"addCardPease\">Paese</label>\n          <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n        <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n    <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n      <p>\n        {{ confirmActionPopupData.text }}\n        <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n      </p>\n      <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n          {{ action.information }}\n        </div>\n      </div>\n      <div class=\"form-group buttons-block\">\n        <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n          <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n          <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<!-- ******************************** A/B Tests ******************************** -->\n\n<!-- <div class=\"popup\" [@registerCompanyPopupState]=\"registerCompanyPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Registra la tua impresa</div>\n  <form class=\"registration-company-form\" #registrationCompanyForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"regName\">Il tuo nome</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"il tuo nome\" required [(ngModel)]=\"registerNewCompany.name\" #regName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regPhone\">Numero di cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"328...\" required [(ngModel)]=\"registerNewCompany.phone\" #regPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regProfession\">Inserisci la tua professione</label>\n      <input id=\"regProfession\" class=\"form-control\" name=\"profession\" placeholder=\"professione\" [(ngModel)]=\"registerNewCompany.profession\" #regProfession=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registerCompany(regName.value, regPhone.value, regProfession.value)\">Registra la tua impresa</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n\n<!-- <div class=\"popup\" [@recommendToFriendPopupState]=\"recommendToFriendPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Invita un amico</div>\n  <form class=\"reccoment-friend-form\" #recommendToFriendForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"friendName\">Nome di tuo amico</label>\n      <input id=\"friendName\" class=\"form-control\" type=\"text\" name=\"friendname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.friend_name\" #friendName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"friendPhone\">Numero di cellulare di tuo amico</label>\n      <input id=\"friendPhone\" class=\"form-control\" type=\"text\" name=\"friendphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.frend_phone_number\" #friendPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myName\">Il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Il tuo numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recommendToFriend(friendName.value, friendPhone.value, myName.value, myPhone.value)\">Invita e guadagna</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div>\n\n<div class=\"popup\" [@getPromoCodePopupState]=\"getPromoCodePopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Guadagna uno sconto</div>\n  <form class=\"get-promo-code-form\" #getPromoCodeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"myName\">Inserisci il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myName\" placeholder=\"mio nome\" [(ngModel)]=\"earnPromoCode.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myPhone\" placeholder=\"328..\" required [(ngModel)]=\"earnPromoCode.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"earnPromoCodeAction(myName.value, myPhone.value)\">Ricevi codice</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },

/***/ 758:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    ContactService.prototype._makeHeaders = function () {
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
    ContactService.prototype.sendEmail = function (data) {
        return this.http.post(this.api + 'send_email', data).toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    ContactService.prototype.join = function (data) {
        return this.http.post(this.api + 'join', data).toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    ContactService.prototype.sendInvitations = function (promolink, phones, emails) {
        return this.http.post(this.api + 'send_invitations', { link: promolink, phone_numbers: phones, email_addresses: emails }, { headers: this._makeHeaders() }).toPromise().then(function (data) {
            return data;
        }).catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ContactService);
    return ContactService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/contact.service.js.map

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(78);
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
            firstname: userData.firstname,
            lastname: userData.lastname,
            phone_number: userData.phone_number
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
    ProfileService.prototype.getAccountById = function (id) {
        return this.http.get(this.api + 'accounts/' + id).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        return Promise.reject(error);
    };
    ProfileService.prototype.changePassword = function (data) {
        return this.http.put(this.api + 'change_password', data, this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    // NEW
    ProfileService.prototype.verifyEmail = function (code) {
        return this.http.get(this.api + 'email_verification?code=' + code)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.verifyNewPassword = function (code) {
        return this.http.get(this.api + 'save_password?code=' + code)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.createNewPassword = function (code, password) {
        return this.http.post(this.api + 'create_new_password?code=' + code, { new_password: password })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.service.js.map

/***/ }

},[759]);
//# sourceMappingURL=client.bundle.map