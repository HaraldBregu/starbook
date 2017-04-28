webpackJsonp([0,4],{

/***/ 147:
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

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JoinService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JoinService = (function () {
    function JoinService(http) {
        this.http = http;
        this.api = 'https://api.starbook.co/v0.9.1/';
    }
    JoinService.prototype._makeHeaders = function () {
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
    JoinService.prototype.join = function (data) {
        return this.http.post(this.api + 'join', data).toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    JoinService.prototype.sendInvitations = function (promolink, phones, emails) {
        return this.http.post(this.api + 'send_invitations', { link: promolink, phone_numbers: phones, email_addresses: emails }, { headers: this._makeHeaders() }).toPromise().then(function (data) {
            return data;
        }).catch(this.handleError);
    };
    JoinService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    JoinService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object])
    ], JoinService);
    return JoinService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/join.service.js.map

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(76);
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

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(54);
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

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(76);
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

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(7);
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
    AnalyticsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AnalyticsService);
    return AnalyticsService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/analytics.service.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
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
            template: __webpack_require__(696),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/about.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
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
    function AccountComponent(route, router, navigationService, profileService) {
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.profileService = profileService;
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
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            _this.route.queryParams.subscribe(function (params) {
                if (_this.page === 'login') {
                    _this.navigationService.updateMessage('Accedi al tuo account');
                }
                else if (_this.page === 'signup') {
                    _this.navigationService.updateMessage('Crea un nuovo account');
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
                }
            });
        });
    };
    // ngAfterContentChecked() {
    //   console.log('ngAfterContentChecked');
    // }
    // ngAfterViewInit() {
    //   console.log('ngAfterViewInit');
    // }
    // ngAfterViewChecked() {
    //   console.log('ngAfterViewChecked');
    // }
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
            template: __webpack_require__(697)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/account.component.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(71);
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
            template: __webpack_require__(698)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FacebookComponent);
    return FacebookComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/facebook.component.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
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
            template: __webpack_require__(699)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], HelpComponent);
    return HelpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/help.component.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
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
            template: __webpack_require__(701)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], LegalComponent);
    return LegalComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/legal.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_share_service__ = __webpack_require__(147);
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
    function OrdersComponent(router, route, navigationService, ordersService, popupsService, analyticsService, orderService, shareService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.ordersService = ordersService;
        this.popupsService = popupsService;
        this.analyticsService = analyticsService;
        this.orderService = orderService;
        this.shareService = shareService;
        this.selectTab = false;
        this.tabs = [
            { name: 'Lavorazioni', route: 'requests' },
            { name: 'Preventivi', route: 'estimates' }
        ];
        this.page = '';
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
                    _this.navigationService.updateMessage("Ordini...");
                    _this.ordersService.getOrders([{ name: 'order_type', value: 'REQUIRED' }]).then(function (response) {
                        _this.navigationService.updateMessage("Ordini");
                        _this.pageData = response.result;
                    }).catch(function (error) {
                        _this.navigationService.updateMessage("Ordini");
                    });
                }
                else if (_this.page === 'estimates') {
                    if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
                        _this.estimates = JSON.parse(localStorage.getItem('estimates'));
                    }
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
            return "1/2 Giorno";
        }
        else if (days > 0.5 && days < 1.5) {
            return Math.round(days) + " Giorno";
        }
        else {
            return Math.round(days) + " Giorni";
        }
    };
    OrdersComponent.prototype.startWizard = function (estimate) {
        this.orderService.updateWizardData(estimate);
        this.router.navigate(['order/summary']);
        return false;
    };
    OrdersComponent.prototype.shareEstimate = function (estimate) {
        console.log('estimate: ' + estimate);
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
    ////////////////////////////////////////
    ////////////// UNKNOWN /////////////////
    ////////////////////////////////////////
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
            template: __webpack_require__(702)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__share_share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__share_share_service__["a" /* ShareService */]) === 'function' && _h) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal__ = __webpack_require__(7);
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
        //////////////////////////
        /////// TAB BAR //////////
        //////////////////////////
        this.page = '';
        this.tabs = [
            { name: 'Generali', route: 'general' },
            { name: 'Pagamento', route: 'payment' },
            { name: 'Impostazioni', route: 'settings' }
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
        //////////////////////////
        /////// PAYMENT //////////
        //////////////////////////
        this.Card = {
            // object: 'card',
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
        this.activePopup = '';
        this.cards = [];
        this.defaultCard = '';
        this.navigationService.updateMessage('Profilo');
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth') !== null) {
                var authData = JSON.parse(localStorage.getItem('auth'));
                this.User.firstname = authData.profile.firstname;
                this.User.lastname = authData.profile.lastname;
                this.User.phone_number = authData.phone_number;
                this.User.email = authData.email;
            }
            else {
                this.router.navigate(['/']);
            }
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
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
                else if (_this.page === 'card') {
                }
                else {
                    console.log('this is nothing');
                    _this.router.navigate(['profile/general']);
                }
            });
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                switch (action.type) {
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
    ProfileComponent.prototype.clickTabItem = function (route) {
        this.router.navigate(['/profile/' + route]);
    };
    ///////////////////////
    /////// USER //////////
    ///////////////////////
    ProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        console.log('Current object User: ' + JSON.stringify(this.User));
        this.user_state.loading = true;
        this.user_state.button_title = "Salvando...";
        this.profileService.updateProfile(this.User).then(function (data) {
            _this.user_state.loading = false;
            _this.user_state.button_title = "Salva";
            if (data.success) {
                console.log(' data: ' + JSON.stringify(data));
                var profileData = {};
                if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
                    if (localStorage.getItem('auth') !== null) {
                        var authData = JSON.parse(localStorage.getItem('auth'));
                        console.log('auth data: ' + JSON.stringify(authData));
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
    ProfileComponent.prototype.saveNewEmail = function () {
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
            console.log('error: ' + error);
            console.log('error status: ' + error.status);
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
        console.log('exp date: ' + result);
        // this.addCardData.exp_date = result;
        this.Card.exp_date = result;
        return result;
    };
    //
    // swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
    //   let calculateDelta = this.delta + delta;
    //   let menuSize = 0;
    //   let allMenuItems = document.querySelectorAll('.left-navigate > div > a');
    //   for (let i = 0; i < allMenuItems.length; i++) {
    //     let menuItem: any = allMenuItems[i];
    //     menuSize += menuItem.offsetWidth;
    //   }
    //   let menuBlockWidth = document.querySelector('.left-navigate').clientWidth;
    //   let allowMargin = (menuSize) - menuBlockWidth;
    //   if (allowMargin >= 0) {
    //     allowMargin = -allowMargin;
    //     if (calculateDelta > 0) {
    //       this.delta = 0;
    //     } else {
    //       if (calculateDelta < allowMargin) {
    //         if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
    //           this.delta = allowMargin;
    //         }
    //       } else {
    //         this.delta = calculateDelta;
    //       }
    //     }
    //   }
    // }
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
            template: __webpack_require__(703)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_join_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecruiterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecruiterComponent = (function () {
    function RecruiterComponent(router, route, navigationService, joinService, authService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.authService = authService;
        this.page = '';
        ////////////////////////////
        /////// Recruiter //////////
        ////////////////////////////
        this.Recruiter = {
            firstname: null,
            lastname: null,
            phone: null,
            email: null,
            type: ''
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
        //////////////////////////
        /////// Signup  //////////
        //////////////////////////
        this.Signup = {
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
            message_success: null,
            message_error: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            password_error: null,
            confirm_password_error: null
        };
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    RecruiterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.page === 'workerjoin') {
                _this.navigationService.updateMessage("Lavoriamo insieme");
                if (localStorage.getItem('auth')) {
                    _this.router.navigate(['']);
                }
            }
            else if (_this.page === 'partnerjoin') {
                _this.navigationService.updateMessage("Diventa partner con noi");
                if (localStorage.getItem('auth')) {
                    _this.router.navigate(['']);
                }
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    RecruiterComponent.prototype.joinAsWorker = function () {
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
        this.Recruiter.type = "professionista";
        this.joinService.join(this.Recruiter).then(function (response) {
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
    RecruiterComponent.prototype.joinAsPartner = function () {
        var _this = this;
        if (this.signup_state.loading) {
            return;
        }
        if (this.Signup.email.length > 0 && this.Signup.firstname.length > 0 && this.Signup.lastname.length > 0 && this.Signup.phone.length > 0 && this.Signup.password.length > 0 && this.Signup.confirmPassword.length > 0) {
            if (this.Signup.password !== this.Signup.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
                return;
            }
            else {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = null;
            }
            if (!this.emailPattern.test(this.Signup.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
                return;
            }
        }
        else {
            if (this.Signup.email.length === 0) {
                this.signup_state.email_error = "Inserisci un indirizzo email";
            }
            else if (this.Signup.email.length > 0 && !this.emailPattern.test(this.Signup.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
            }
            else {
                this.signup_state.email_error = null;
            }
            if (this.Signup.firstname.length === 0) {
                this.signup_state.first_name_error = "Inserisci un nome";
            }
            else {
                this.signup_state.first_name_error = null;
            }
            if (this.Signup.lastname.length === 0) {
                this.signup_state.last_name_error = "Inserisci un cognome";
            }
            else {
                this.signup_state.last_name_error = null;
            }
            if (this.Signup.phone.length < 9) {
                this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
                if (this.Signup.phone.length === 0) {
                    this.signup_state.phone_error = "Inserisci un numero di telefono";
                }
            }
            else {
                this.signup_state.phone_error = null;
            }
            if (this.Signup.password.length === 0) {
                this.signup_state.password_error = "Inserisci una password";
            }
            else {
                this.signup_state.password_error = null;
            }
            if (this.Signup.confirmPassword.length === 0) {
                this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
            }
            else {
                this.signup_state.confirm_password_error = null;
            }
            if (this.Signup.password.length > 0 &&
                this.Signup.confirmPassword.length > 0
                && this.Signup.password !== this.Signup.confirmPassword) {
                this.signup_state.password_error = null;
                this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
            }
            return;
        }
        this.signup_state.loading = true;
        this.signup_state.button_title = "Registrando...";
        this.authService.signup(this.Signup.firstname, this.Signup.lastname, this.Signup.phone, this.Signup.email, this.Signup.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.signup_state.message_error = null;
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrando...";
            // this.router.navigate(['/recruiter/share']);
            _this.router.navigate(['/share']);
        }).catch(function (error) {
            _this.signup_state.loading = false;
            _this.signup_state.button_title = "Registrati";
            switch (error) {
                case 409:
                    _this.signup_state.message_error = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.signup_state.message_error = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.signup_state.message_error = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.signup_state.message_error = null;
            }
        });
    };
    RecruiterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recruiter',
            template: __webpack_require__(704)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object])
    ], RecruiterComponent);
    return RecruiterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/recruiter.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_join_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(31);
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
        console.log('page is: ' + this.page);
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
            template: __webpack_require__(705)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object])
    ], RequestsComponent);
    return RequestsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/requests.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(743);
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
    function ServicesComponent(router, navigationService, homeService) {
        this.router = router;
        this.navigationService = navigationService;
        this.homeService = homeService;
        this.services_state = {
            loading: false,
            title: "Servizi piu richiesti"
        };
        this.services = [];
        this.navigationService.updateMessage('Servizi di Starbook');
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services_state.loading = true;
        this.services_state.title = "Caricando i servizi...";
        this.homeService.getAllServices().then(function (services) {
            _this.services = services.result;
            _this.services_state.loading = false;
            _this.services_state.title = "Servizi piu richiesti";
        }).catch(function (error) {
            _this.services_state.loading = false;
            _this.services_state.title = "Servizi piu richiesti";
        });
    };
    ServicesComponent.prototype.selectResult = function (service) {
        // this.homeService.sendData(service, this.ref)
        this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(706)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === 'function' && _c) || Object])
    ], ServicesComponent);
    return ServicesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/services.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_join_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(70);
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








// import * as jwt from 'jsonwebtoken';
var ShareComponent = (function () {
    function ShareComponent(router, route, navigationService, joinService, shareService, analyticsService, orderService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.shareService = shareService;
        this.analyticsService = analyticsService;
        this.orderService = orderService;
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
        this.navigationService.updateMessage("Condividi");
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.numPattern = /^\d+$/;
        this.serviceObject = this.shareService.getObject();
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
            this.route.params.subscribe(function (params) {
                window.scrollTo(0, 0);
                _this.page = params['page'];
                if (_this.page === 'starbook') {
                    _this.navigationService.updateMessage("Condividi");
                    if (localStorage.getItem('auth')) {
                        _this.sharelink = document.location.protocol + '//' + document.location.hostname + '/?ref=' + _this.currentUser._id;
                    }
                }
                else if (_this.page === 'service') {
                    _this.navigationService.updateMessage("Condividi servizio");
                    _this.sharelink = document.location.protocol + '//' + document.location.hostname + _this.router.url;
                    _this.route.queryParams.subscribe(function (params) {
                        var estimateParams = params['estimate'];
                        if (estimateParams) {
                            try {
                                var estimateObject = JSON.parse(estimateParams);
                                _this.Estimate = estimateObject;
                            }
                            catch (e) {
                                _this.router.navigate(['share/starbook']);
                            }
                        }
                    });
                }
                else {
                    _this.router.navigate(['share/starbook']);
                }
            });
        }
    }
    ShareComponent.prototype.ngOnInit = function () {
        // console.log('Estimate is: ' + JSON.stringify(this.Estimate));
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
            template: __webpack_require__(707)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_join_service__["a" /* JoinService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _g) || Object])
    ], ShareComponent);
    return ShareComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/share.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal__ = __webpack_require__(7);
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
            details: [],
            date: null,
            address: null,
            referral_id: null,
            price: {
                final: 0,
                initial: 0,
                currency: 'eur'
            },
            payment: {
                upfront: 0
            },
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
            // object: 'card',
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
                this.Order.service_id = this.service_data.service_id;
                this.Order.title = this.service_data.title;
                this.Order.details = this.service_data.details;
                this.Order.referral_id = this.service_data.referral_id;
                this.Order.price = this.service_data.price;
                this.Order.payment = this.service_data.payment;
                this.Order.timing = this.service_data.timing;
                this.saveOrderToLocal(this.Order);
            }
        }
    }
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_angular2_universal__["isBrowser"]) {
            this.route.params.subscribe(function (params) {
                _this.step = params['step'];
                window.scrollTo(0, 0);
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
        }
    };
    WizardComponent.prototype.back = function () {
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Back" });
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Confirm Preview" });
        this.router.navigate(['order/address']);
    };
    ///////////////////////////////
    //// CONFIRM ADDRESS //////////
    ///////////////////////////////
    WizardComponent.prototype.confirmAddress = function () {
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Confirm Address" });
        if (!this.Order.address) {
            this.address_state.error_message = "Per favore inserisci un indirizzo corretto";
            return;
        }
        this.address_state.error_message = null;
        this.saveOrderToLocal(this.Order);
        this.router.navigate(['order/date']);
    };
    WizardComponent.prototype.getAddresses = function (event) {
        var _this = this;
        this.address_state.error_message = null;
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Confirm Date" });
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Confirm Order" });
        if (localStorage.getItem('auth')) {
            this.order_status.loading = true;
            this.order_status.button_title = "Inviando l'ordine...";
            this.order_status.error_message = null;
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
                        // this.order_status.payment_error_message = "Vai alla pagina";
                        _this.router.navigate(['order/card']);
                    }
                    else {
                        _this.order_status.error_message = "Effetua l'accesso prima di creare un ordine";
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Confirm End" });
        var user = JSON.parse(localStorage.getItem('auth'));
        if (!user.phone_number || user.phone_number.length < 10) {
            this.router.navigate(['order/info']);
        }
        else {
            this.router.navigate(['services', this.Order.title.replace(/\s+/g, '-')]);
        }
    };
    ////////////////////////////////////
    ////////// AUTHENTICATION //////////
    ////////////////////////////////////
    WizardComponent.prototype.login = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Login" });
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Change to Signup" });
        if (this.login_state.loading) {
            return;
        }
        this.router.navigate(['order/signup']);
    };
    WizardComponent.prototype.signup = function () {
        var _this = this;
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Signup" });
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Change to Login" });
        if (this.signup_state.loading) {
            return;
        }
        this.router.navigate(['order/login']);
    };
    WizardComponent.prototype.continueWithFacebook = function () {
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Continue with Facebook" });
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
            console.log('errore è : ' + error);
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
        this.analyticsService.sendEvent({ category: 'Order', action: 'Wizard', label: "Save Information" });
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
            template: __webpack_require__(708)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_payment_service__["a" /* PaymentService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], WizardComponent);
    return WizardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/wizard.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
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

/***/ 404:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 404;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_browser_module__ = __webpack_require__(513);







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

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(64);
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
var __universal__ = __webpack_require__(526);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(64);

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

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_common_service__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_orders_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_join_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_share_share_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_clipboard_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_service_service_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_services_services_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__order_order_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_orders_orders_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__popups_popups_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_phone_pipe__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_expiry_pipe__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_loading_loading_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_facebook_facebook_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_wizard_wizard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_about_about_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_help_help_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_legal_legal_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_account_account_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_recruiter_recruiter_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_requests_requests_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_share_share_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__directives_clipboard_directive__ = __webpack_require__(516);
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
    __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
    // NgbModule.forRoot(),
    // AutoCompleteModule,
    // CalendarModule,
    __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__["ClickOutsideModule"]
];
var declarations = [
    __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_22__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_25__order_order_component__["a" /* OrderComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pages_orders_orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_28__popups_popups_component__["a" /* PopupsComponent */],
    __WEBPACK_IMPORTED_MODULE_29__pipes_phone_pipe__["a" /* PhonePipe */],
    __WEBPACK_IMPORTED_MODULE_23__pages_service_service_component__["a" /* ServiceComponent */],
    __WEBPACK_IMPORTED_MODULE_30__pipes_expiry_pipe__["a" /* ExpiryPipe */],
    __WEBPACK_IMPORTED_MODULE_31__shared_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_32__pages_facebook_facebook_component__["a" /* FacebookComponent */],
    __WEBPACK_IMPORTED_MODULE_33__pages_wizard_wizard_component__["a" /* WizardComponent */],
    __WEBPACK_IMPORTED_MODULE_34__pages_about_about_component__["a" /* AboutComponent */],
    __WEBPACK_IMPORTED_MODULE_35__pages_help_help_component__["a" /* HelpComponent */],
    __WEBPACK_IMPORTED_MODULE_36__pages_legal_legal_component__["a" /* LegalComponent */],
    __WEBPACK_IMPORTED_MODULE_37__pages_account_account_component__["a" /* AccountComponent */],
    __WEBPACK_IMPORTED_MODULE_38__pages_recruiter_recruiter_component__["a" /* RecruiterComponent */],
    __WEBPACK_IMPORTED_MODULE_24__pages_services_services_component__["a" /* ServicesComponent */],
    __WEBPACK_IMPORTED_MODULE_39__pages_requests_requests_component__["a" /* RequestsComponent */],
    __WEBPACK_IMPORTED_MODULE_40__pages_share_share_component__["a" /* ShareComponent */],
    __WEBPACK_IMPORTED_MODULE_41__directives_clipboard_directive__["a" /* ClipboardDirective */]
];
if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(690).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(689).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(518).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(517).AutoCompleteMockComponent;
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: declarations,
            imports: imports,
            providers: [
                // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
                // {
                //   provide: HAMMER_GESTURE_CONFIG,
                //   useClass: HammerConfig
                // },
                __WEBPACK_IMPORTED_MODULE_8__shared_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__order_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_orders_service__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_14__popups_popups_service__["a" /* PopupsService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__["a" /* SeoService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_join_service__["a" /* JoinService */],
                __WEBPACK_IMPORTED_MODULE_19__pages_share_share_service__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_clipboard_service__["a" /* ClipboardService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.browser.module.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_common_service__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__ = __webpack_require__(86);
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
    function AppComponent(router, route, authServics, navigationService, popupsService, homeService, analyticsService, seoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupsService = popupsService;
        this.homeService = homeService;
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
        this.navbarState = false;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]) {
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
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.clickBrandLogo = function () {
        if (this.screenWidth <= 425) {
            this.collapsed = !this.collapsed;
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
    AppComponent.prototype.requireService = function () {
        // this.newServiceRequest.message = 'Grazie!';
        this.analyticsService.sendEvent({ category: 'Services', action: 'request', label: this.findValue });
        this.router.navigate(['requests']);
    };
    AppComponent.prototype.selectResult = function (servicesObj) {
        this.homeService.sendServices(servicesObj);
        this.results = [];
        this.clearView = false;
        this.navbarState = false;
        this.findValue = '';
        // this.router.navigate(['services', servicesObj._id]);
        // var str = 'hello     world  !!';
        // str = servicesObj.title.replace(/\s+/g, '-');
        // console.log('space replaced: ' + str);
        this.router.navigate(['services', servicesObj.title.replace(/\s+/g, '-')]);
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
            template: __webpack_require__(693)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_service_service_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_services_services_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_orders_orders_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_facebook_facebook_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wizard_wizard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_legal_legal_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_recruiter_recruiter_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_share_share_component__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_services_services_component__["a" /* ServicesComponent */]
    },
    {
        path: 'services/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_service_service_component__["a" /* ServiceComponent */],
        data: { isFindField: true }
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_orders_orders_component__["a" /* OrdersComponent */]
    },
    {
        path: 'orders/:page',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_orders_orders_component__["a" /* OrdersComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'profile/:page',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'facebook',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_facebook_facebook_component__["a" /* FacebookComponent */]
    },
    {
        path: 'order/:step',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_wizard_wizard_component__["a" /* WizardComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_help_help_component__["a" /* HelpComponent */]
    },
    {
        path: 'legal',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_legal_legal_component__["a" /* LegalComponent */]
    },
    {
        path: 'account/:page',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account_component__["a" /* AccountComponent */]
    },
    {
        path: 'recruiter',
        component: __WEBPACK_IMPORTED_MODULE_12__pages_recruiter_recruiter_component__["a" /* RecruiterComponent */]
    },
    {
        path: 'recruiter/:page',
        component: __WEBPACK_IMPORTED_MODULE_12__pages_recruiter_recruiter_component__["a" /* RecruiterComponent */]
    },
    {
        path: 'requests',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_component__["a" /* RequestsComponent */]
    },
    {
        path: 'requests/:page',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_requests_requests_component__["a" /* RequestsComponent */]
    },
    {
        path: 'share',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_share_share_component__["a" /* ShareComponent */]
    },
    {
        path: 'share/:page',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_share_share_component__["a" /* ShareComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_clipboard_service__ = __webpack_require__(348);
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

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
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

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
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

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_universal__ = __webpack_require__(7);
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
        var total_price = this.orderData.totalPrice;
        if (!this.price_state.is_referral) {
            return total_price;
        }
        else {
            return (total_price - (total_price * 0.05));
        }
    };
    OrderComponent.prototype.getInitialPrice = function () {
        return this.orderData.totalPrice;
    };
    OrderComponent.prototype.getUpFront = function () {
        return Math.round((this.getFinalPrice() * 0.3));
    };
    OrderComponent.prototype.getTiming = function () {
        var days = this.getInitialPrice() / 45000;
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
    OrderComponent.prototype.wizardData = function () {
        var object = {
            service_id: this.orderData.service_id,
            title: this.orderData.title,
            details: this.orderData.details,
            referral_id: this.price_state.referral_id,
            price: {
                final: this.getFinalPrice(),
                initial: this.getInitialPrice(),
                currency: 'eur'
            },
            payment: {
                upfront: this.getUpFront()
            },
            timing: {
                days: this.getTiming()
            }
        };
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
        var navigationExtras = { queryParams: { estimate: JSON.stringify(newWizardData) } };
        this.router.navigate(['share/service'], navigationExtras);
    };
    OrderComponent.prototype.saveEstimate = function () {
        if (this.estimate_state.saved === false) {
            this.estimate_state.saved = true;
            var newWizardData = this.wizardData();
            this.saveEstimateQuotationToLocal(newWizardData);
        }
    };
    ///////////////////////////
    ////////// ORDER //////////
    ///////////////////////////
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
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(695)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__pages_share_share_service__["a" /* ShareService */]) === 'function' && _f) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.component.js.map

/***/ },

/***/ 520:
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

/***/ 521:
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

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__ = __webpack_require__(31);
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
                console.log('logged in');
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
                console.log('error loggin');
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
            template: __webpack_require__(709),
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _h) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },

/***/ 523:
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
            template: __webpack_require__(710)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },

/***/ 524:
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

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(54);
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
            console.log('popup is open');
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

/***/ 693:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\" (window:resize)=\"onResize()\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" (click)=\"clickBrandLogo()\">\n      <div *ngIf=\"screenWidth > 768\" routerLink=\"\">\n        <img src=\"/assets/images/brand-logo-name-rotated.png\" alt=\"starbook\">\n      </div>\n      <div *ngIf=\"screenWidth < 769\">\n        <img *ngIf=\"!collapsed\" src=\"/assets/images/brand-logo-rotated.png\" alt=\"starbook\">\n        <img *ngIf=\"collapsed\" src=\"/assets/images/brand-logo-right.png\" alt=\"starbook\">\n      </div>\n    </a>\n\n    <div class=\"center-container\">\n      <div class=\"search-block\" *ngIf=\"isFindField\">\n        <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"170px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca\" minLength=\"0\">\n          <template let-res>\n            <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n          </template>\n        </p-autoComplete>\n        <div class=\"spinner\" *ngIf=\"spinerView\">\n          <svg width='20px' height='20px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n          <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n        </div>\n        <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n          <div class=\"no-result noselect\">\n            Il servizio \"{{findValue}}\" non è disponibile\n            <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!isFindField\" class=\"tagline noselect\">{{tagline}}</div>\n    </div>\n\n    <!--  Collapsed -->\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth !== false\" [ngClass]=\"{'collapse':!collapsed}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders/requests\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/general\" routerLinkActive=\"active\" (click)=\"toggleMenu()\"><i class=\"fa fa-user\" aria-hidden=\"true\"> </i> {{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n    <!--  Collapsed not authenticated -->\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':!collapsed}\">\n      <!-- <li class=\"nav-item\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li><a href=\"#\">Action</a></li>\n          <li><a href=\"#\">Another action</a></li>\n          <li><a href=\"#\">Something else here</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a href=\"#\">Separated link</a></li>\n        </ul>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <div class=\"sidebar-block\">\n      <div class=\"order-header\">\n        <span>Costo del servizio</span>\n      </div>\n      <div class=\"order-content\">\n        <div class=\"price-block\">\n          <div class=\"loader-section\" *ngIf=\"price_state.loading\">\n            <i class=\"fa fa-circle-o-notch animate\"></i>\n            <h2>Applicando lo sconto...</h2>\n          </div>\n          <div *ngIf=\"!price_state.loading\">\n            <div class=\"total\">\n              <h1>{{getFinalPrice()/100}}€</h1>\n              <span>IVA INCLUSA</span>\n              <h2 *ngIf=\"price_state.is_referral\">{{getInitialPrice()/100}}€</h2>\n              <h6>Totale Offerta</h6>\n            </div>\n            <div class=\"upfront\">\n              <h1>{{getUpFront()/100}}€</h1>\n              <h6>Blocca Offerta (30% del totale)</h6>\n            </div>\n            <div class=\"timing\">\n              <h2>{{getTiming()}}</h2>\n              <h6>Durata Lavoro (Approssimativo)</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" (click)=\"startWizard()\">CONTINUA</button>\n        </div>\n        <!-- <div class=\"description\">\n          Le offerte del preventivo possono cambiare in base alle richieste del mercato. Blocca il prezzo versando un acconto.\n        </div> -->\n        <!-- <div class=\"line\"></div> -->\n        <div class=\"links noselect\">\n          <a routerLink=\"/share\" (click)=\"share()\">Condividi</a>\n          <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva</a>\n          <a *ngIf=\"currentUser && estimate_state.saved\">Salvato!</a>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "<div class=\"about-cover\">\n  <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/casa%2Blavorazioni.jpg\" alt=\"Cura per la sasa\">\n  <div class=\"mission-overlay\">\n    <h1>Missione</h1>\n    <p>La nostra missione non è solo quella di offrire tutti i servizi necessari per la casa ma quella di offrire i servizi intelligenti, che aiutano a risparmiare energia, crescere il valore e per di più con prezzi accessibili a chiunque.</p>\n  </div>\n</div>\n<div class=\"container\">\n  <h1>Team Starbook</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"member-box\">\n        <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/harald-bregu.png\" alt=\"Harald Bregu\">\n        <div class=\"content\">\n          <h3>Harald Bregu</h3>\n          <h6>Founder • Product Developer</h6>\n          <p>Migliorare i servizi. Accelerare i tempi. Offrire massima professionalità. Tre punti fondamentali che ho imparato e sono diventate le regole per costruire il futuro professionale e dove il progetto Starbook ha preso forma.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"member-box\">\n        <img src=\"https://organicthemes.com/demo/profile/files/2012/12/profile_img.png\" alt=\"Daniel Lopez Bucheli\">\n        <div class=\"content\">\n          <h3>Daniel Lopez Bucheli</h3>\n          <h6>Co-founder • Ingegnere Gestionale & Business Designer</h6>\n          <p>Nato in Colombia, vivo a Torino. Appassionato per la generazione di quelle idee che possono migliorare e semplificare la vita delle persone.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"member-box\">\n        <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/danilo-gallo.png\" alt=\"Danilo Gallo\">\n        <div class=\"content\">\n          <h3>Danilo Gallo</h3>\n          <h6>Co-founder • Product & UX Designer</h6>\n          <p>Uso la tecnologia per cambiare drasticamente il modo in cui le cose funzionano per migliorarle. Sempre disponibile a nuove sfide e miro a generare prodotti o servizi che migliorano la vita delle persone.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"member-box\">\n        <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/users/aleksandr-gorin-0.jpeg\" alt=\"Alexander Gorin\">\n        <div class=\"content\">\n          <h3>Alexander Gorin</h3>\n          <h6>Contributor • Sviluppatore Full Stack</h6>\n          <p>Sviluppatore Senior Full Stack. 10 anni di esperienza nello sviluppo di prodotti IT. Il mio obiettivo primario è la costruzione di interfacce efficienti per gli utenti.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<div class=\"account\">\n  <div class=\"new-password\" *ngIf=\"page === 'login'\">\n    <p>\n      Login\n    </p>\n  </div>\n  <div class=\"new-password\" *ngIf=\"page === 'signup'\">\n    <p>\n      Signup\n    </p>\n  </div>\n  <div class=\"email-verification\" *ngIf=\"page === 'email_verification'\">\n    <h1>{{email_verification.title}}</h1>\n    <div class=\"popup-spinner\" *ngIf=\"email_verification.spinner.visible\">\n      <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n        <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n          <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n        </circle>\n      </svg>\n    </div>\n    <div class=\"success-icon\" *ngIf=\"email_verification.success.visible\"><span></span></div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"goToHomePage()\" *ngIf=\"email_verification.button.visible\">{{email_verification.button.title}}</button>\n    </div>\n  </div>\n  <div class=\"password-verification\" *ngIf=\"page === 'password_verification'\">\n    <h1>{{password_verification.title}}</h1>\n    <div class=\"popup-spinner\" *ngIf=\"password_verification.spinner.visible\">\n      <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n        <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n          <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n        </circle>\n      </svg>\n    </div>\n    <div class=\"success-icon\" *ngIf=\"password_verification.success.visible\"><span></span></div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"goToHomePage()\" *ngIf=\"password_verification.button.visible\">{{password_verification.button.title}}</button>\n    </div>\n  </div>\n  <div class=\"new-password\" *ngIf=\"page === 'create_new_password'\">\n    <h1>{{new_password_creation.title}}</h1>\n    <div class=\"form-group\" *ngIf=\"new_password_creation.password_field.visible\">\n      <label>{{new_password_creation.password_field.title}}</label>\n      <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"new_password_creation.password_field.value\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"new_password_creation.button.visible\">\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"createNewPassword(new_password_creation.password_field.value)\">{{new_password_creation.button.title}}</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"footer-container light-footer\">\n  <div class=\"container\">\n    <div class=\"copyright\"><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></div>\n    <span> • </span><a routerLink=\"../../legal\">Privacy e Condizioni</a>\n    <span> • </span><a routerLink=\"../../about\">Chi siamo</a>\n    <span> • </span><a routerLink=\"../../help\">Aiuto e Assistenza</a>\n  </div>\n</div>\n"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 699:
/***/ function(module, exports) {

module.exports = "<div class=\"help-container\">\n  <h1>Aiuto e Assistenza</h1>\n  <p>Per qualsisasi domanda o problema rilevato sulla piattaforma Starbook potete usare i contatti sotto indicati.</p>\n  <h3>Telefono</h3>\n  <p>+39 327 24 15 028</p>\n  <h3>Email</h3>\n  <p>info@starbook.co</p>\n  <h3>Social network</h3>\n  <div class=\"list-socials\">\n    <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n    <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n    <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n  </div>\n</div>\n<footer class=\"footer sticky-footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(76);
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
        this.wizardData = {};
        this.api = 'https://api.starbook.co/v0.9.1/';
        this.googleApi = 'https://maps.googleapis.com/maps/api/geocode/json';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getOrderEvent$ = this.orderEvent.asObservable();
        }
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
        // this.navigationService.updateLoadingStatus(true);
        return this.http.post(this.api + 'orders', {
            service_id: orderData.service_id,
            description: orderData.description,
            details: orderData.details,
            date: orderData.date,
            address: orderData.address,
            referral_id: orderData.referral_id,
            price: orderData.price,
            payment: orderData.payment,
            timing: orderData.timing
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

/***/ 701:
/***/ function(module, exports) {

module.exports = "<div class=\"legal-container\">\n  <div class=\"legal-content\">\n    <div class=\"container\">\n      <h1>Privacy policy</h1>\n      <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n      <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n      <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n      <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n      2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n      2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n      2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n      2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n      2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n\n      <h1>Condizioni d'utilizzo</h1>\n      <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n      <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n      <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n      <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n      <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n      <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n      <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n      <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n      <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n      <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n      <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n      <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n      <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n      <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n      <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n      <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n      <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n      <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n      <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n      <p><strong>5. SERVIZIO CLIENTI</strong></p>\n      <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n      <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n      <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n      <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n      <p><strong>6. LICENZA D’USO</strong></p>\n      <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n      <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n      <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n      <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n      <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n      <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n      <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n      <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<div class=\"top-bar-container noselect\">\n  <ul class=\"top-bar\">\n    <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.route === page}\" (click)=\"renderPage(tab.route)\">{{tab.name}}</li>\n  </ul>\n</div>\n<div class=\"orders-container\">\n  <div class=\"order-container\" *ngIf=\"pageData && page==='requests' && pageData.length===0\">\n    <p>Non ci lavorazioni prenotati. Per prenotare un lavoro vai alla pagina home e trova la lavorazione che ti serve.</p>\n  </div>\n  <div *ngFor=\"let order of pageData\">\n    <div class=\"order-container\" *ngIf=\"page==='requests'\">\n      <div class=\"header\">\n        <div *ngFor=\"let detail of order.details\">\n          <div *ngIf=\"detail.type==='service'\">\n            <h3>{{detail.title}}</h3>\n            <!-- <div class=\"line\"></div> -->\n          </div>\n          <div *ngIf=\"detail.type==='detail'\">\n            <p>{{detail.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\">\n        <div class=\"item\">DURATA DEL LAVORO (Approssimativo)</div>\n        <div class=\"amount time\">{{getTiming(order.price.initial)}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\">\n        <div class=\"item\">TOTALE</div>\n        <div class=\"amount\">{{order.price.final/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div *ngFor=\"let milestone of order.payment.milestones; let i=index\">\n          <div class=\"item\">{{i+1}} ACCONTO</div>\n          <div class=\"amount\">{{milestone.amount/100}}€</div>\n        </div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">RESTO</div>\n        <div class=\"amount\">{{order.payment.rest/100}}€</div>\n      </div>\n      <!-- <div class=\"line\"></div> -->\n\n      <!-- <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n        </div>\n      </div> -->\n      <!-- <div class=\"links\">\n        <a href=\"#\">Cancella preventivo</a>\n        <a href=\"#\">Invia ad un amico</a>\n      </div> -->\n    </div>\n  </div>\n\n  <div class=\"order-container\" *ngIf=\"page==='estimates' && estimates.length===0\">\n    <p>Non ci sono preventivi salvati.</p>\n  </div>\n  <div *ngFor=\"let estimate of estimates\">\n    <div class=\"order-container\" *ngIf=\"page==='estimates'\">\n      <div class=\"header\">\n        <div *ngFor=\"let item of estimate.details\">\n          <div *ngIf=\"item.type === 'service'\">\n            <h3>{{estimate.title}}</h3>\n            <!-- <div class=\"line\"></div> -->\n          </div>\n          <div *ngIf=\"item.type === 'detail'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\">\n        <div class=\"item\">DURATA DEL LAVORO (Approssimativo)</div>\n        <div class=\"amount time\">{{getTiming(estimate.price.initial)}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\" *ngIf=\"estimate.price.initial>estimate.price.final\">\n        <div class=\"item\">PREZZO INIZIALE</div>\n        <div class=\"amount initial\">{{estimate.price.initial/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">PREZZO FINALE</div>\n        <div class=\"amount\">{{estimate.price.final/100}}€</div>\n      </div>\n      <div class=\"line\"></div>\n      <!-- <div class=\"counts\">\n        <div class=\"item\">ACCONTO (30% del totale)</div>\n        <div class=\"amount\">{{estimate.payment.upfront/100}}€</div>\n      </div> -->\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\" (click)=\"startWizard(estimate)\">Continua con l'ordine</button>\n        </div>\n        <a (click)=\"shareEstimate(estimate)\">Condividi</a>\n        <a (click)=\"deleteEstimate(estimate)\">Elimina</a>\n      </div>\n      <!-- <div class=\"line\"></div>\n      <div class=\"links\">\n        <a href=\"#\">Cancella preventivo</a>\n        <a href=\"#\">Invia ad un amico</a>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\">\n      <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.selected}\" (click)=\"renderPage(tab.name)\">\n        <span></span>\n        <div>{{tab.name}}</div>\n      </a>\n    </div>\n    <div class=\"col-xl-12 orders-container\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"orders-error\" *ngIf=\"pageData.length === 0 && requestIsComplete\">{{emptyListTitle}}</div>\n      <div class=\"order-information\" *ngFor=\"let order of pageData\">\n        <div class=\"header\">\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> In attesa di pagamento...\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richiesti'\">\n            <span class=\"orange\"></span> In attesa di pagamento...\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Archivio'\">\n            <span class=\"black\"></span> Scaduto\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 98 && selectTab === 'Archivio'\">\n            <span class=\"orange\"></span> Completato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'Archivio'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-name\">\n            {{ categories[order.category_type] }}\n          </div>\n          <div class=\"order-date\">\n            {{ dateFormating(order.date) }}\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"row\">\n            <div class=\"order-row products col-xl-4\">\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service' && product.amount > 0\">€{{ product.amount / 100 }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div>\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service'\">{{ product.description }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Richieste dei clienti'\">\n              <div *ngIf=\"order.status===0\">\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cliente:</div>\n                <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cellulare:</div>\n                <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Email:</div>\n                <div class=\"field-value\">{{ order.customer.email }}</div>\n              </div>\n\n              <div *ngIf=\"order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'I miei ordini'\">\n              <div *ngIf=\"!order.merchant || order.merchant === null || order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>In attesa di conferma...</strong></div>\n                </div>\n              </div>\n              <div *ngIf=\"order.merchant && order.merchant !== null && order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Archivio'\">\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && currentUser._id !== order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && currentUser._id === order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.customer && order.customer !== null && (!order.merchant || order.merchant === null) && order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.status===99\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"order-row description col-xl-4\">\n              {{ order.description }}\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <div class=\"code\">\n            <span>CODICE:</span>\n            {{ order._id }}\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"completaOrder(order._id)\">Completa servizio</button>\n            <div class=\"price-block\"><div class=\"content-price\">Preventivo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <button class=\"btn btn-secondary\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\" (click)=\"editOrder(order._id, order.payment.amount)\">Modifica</button>\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"confirmOrder(order._id)\">Conferma servizio</button>\n\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\" (click)=\"reactivateOrder(order._id)\">Reattiva servizio</button>\n            <button class=\"btn btn-secondary\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\" (click)=\"cancelOrder(order._id)\">Annulla servizio</button>\n            <div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <button class=\"btn btn-warning\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\" (click)=\"continueOrder(order._id, order.payment.amount)\"><i class=\"fa fa-lock\"></i> Procedi</button>\n            <div class=\"price-block archive\" *ngIf=\"order.status === 3 && selectTab === 'Archivio'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = "<div class=\"profile-page\">\n  <div class=\"top-bar-container noselect\">\n    <ul class=\"top-bar\">\n      <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.route === page}\" (click)=\"clickTabItem(tab.route)\">{{tab.name}}</li>\n    </ul>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'general'\">\n    <div class=\"header\">\n      <h1>Informazioni generali</h1>\n      <h6>Aggiorna le informazioni del tuo account per rimanere in contatto</h6>\n    </div>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"firstname\">Nome</label>\n            <input type=\"firstname\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"Nome\" [ngClass]=\"{'error-input': user_state.first_name_error}\" [(ngModel)]=\"User.firstname\">\n            <small class=\"error-message\" *ngIf=\"user_state.first_name_error\">{{user_state.first_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"lastname\">Cognome</label>\n            <input type=\"lastname\" class=\"form-control\" id=\"lastname\" name=\"lastname\" placeholder=\"Cognome\" [ngClass]=\"{'error-input': user_state.last_name_error}\" [(ngModel)]=\"User.lastname\">\n            <small class=\"error-message\" *ngIf=\"user_state.last_name_error\">{{user_state.last_name_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"phone\">Telefono</label>\n            <input type=\"phone\" class=\"form-control\" id=\"phone\" name=\"phone\" placeholder=\"Telefono\" [ngClass]=\"{'error-input': user_state.phone_number_error}\" [(ngModel)]=\"User.phone_number\">\n            <small class=\"error-message\" *ngIf=\"user_state.phone_number_error\">{{user_state.phone_number_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"saveProfile()\">{{user_state.button_title}}</a>\n      </div>\n    </form>\n    <div class=\"footer-box\">\n      <h5>Privacy del account</h5>\n      <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'payment'\">\n    <div class=\"header\">\n      <h1>Metodo di pagamento</h1>\n      <h6>Aggiorna le informazioni del tuo metodo di pagamento</h6>\n    </div>\n    <div class=\"card-container\" *ngFor=\"let card of cards\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8\">\n          <h4>{{card.brand}} <small>{{ card.funding }} {{ card.object }}</small> <small *ngIf=\"defaultCard === card.id\">Default</small></h4>\n          <div class=\"information-block\">\n            <span>Nome:</span>\n            {{ card.name }}\n          </div>\n          <div class=\"information-block\">\n            <span>Numero:</span>\n            **** {{ card.last4 }}\n          </div>\n          <div class=\"information-block\">\n            <span>Scadenza:</span>\n            {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n          </div>\n          <div class=\"information-block\">\n            <span>Tipo:</span>\n            {{ card.brand }} {{ card.funding }} {{ card.object }}\n          </div>\n          <div class=\"information-block\">\n            <span>Indirizzo:</span>\n            {{ card.address_line1 }} {{ card.address_line2 }} <br>\n            {{ card.address_state }} {{ card.address_city }} <br>\n            {{ card.address_zip }} {{ card.address_country }}\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-4\">\n          <div class=\"buttons-block\">\n            <a class=\"btn btn-success\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n            <a class=\"btn btn-danger\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n            <!-- <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-container\">\n      <a class=\"btn btn-secondary\" *ngIf=\"cards?.length===0\" (click)=\"showCardPage()\">Aggiungi un metodo</a>\n      <a class=\"btn btn-secondary\" *ngIf=\"cards?.length > 0\" (click)=\"showCardPage()\">Aggiungi un altro metodo</a>\n    </div>\n    <div class=\"footer-box\">\n      <h5>Privacy del account</h5>\n      <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'settings'\">\n    <div class=\"header\">\n      <h1>Impostazioni</h1>\n      <h6>Modifica le informazioni</h6>\n    </div>\n    <form>\n      <h4>Aggiorna Email</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <!-- <label for=\"email\">La tua email</label> -->\n            <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" [ngClass]=\"{'error-input': user_state.email_error}\" [(ngModel)]=\"User.email\" disabled>\n            <small class=\"error-message\" *ngIf=\"user_state.email_error\">{{user_state.email_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <p><small>Dopo aver salvato la nuova email ti invieremo nella attuale email un messaggio di conferma per confermare il nuovo indirizzo.</small></p>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"saveNewEmail()\">Salva</a>\n      </div>\n      <h4>Cambia Password</h4>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.old_password\">\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Nuova Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.new_password\">\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Conferma Nuova Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.confirm_password\">\n          </div>\n        </div>\n      </div>\n      <div class=\"messages\" *ngIf=\"password_state.message_error || password_state.message_success\">\n        <div class=\"success\" *ngIf=\"password_state.message_success\">\n          <p><small>{{password_state.message_success}}</small></p>\n        </div>\n        <div class=\"error\" *ngIf=\"password_state.message_error\">\n          <p><small>{{password_state.message_error}}</small></p>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a class=\"btn btn-success\" (click)=\"changePassword()\">{{password_state.button_title}}</a>\n      </div>\n    </form>\n    <div class=\"footer-box\">\n      <h5>Esci da starbook</h5>\n      <h6><small>Puoi uscire ed entrare in qualsiasi momento dal sito. Le tue informazioni rimangono salvate su Starbook.</small></h6>\n      <div class=\"actions\">\n        <a class=\"btn btn-danger\" (click)=\"logout()\">Esci</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"page-container\" *ngIf=\"page === 'card'\">\n    <div class=\"header\">\n      <h1>Inserisci un metodo di pagamento</h1>\n      <h6>Per utilizzare al massimo i servizi Starbook inserisci un metodo di pagamento.</h6>\n    </div>\n    <form>\n      <div class=\"card-form\">\n        <div class=\"form-group\">\n          <label for=\"numberInput\">Numero carta</label>\n          <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.number_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"dateInput\">Scadenza</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.exp_date_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"numberInput\">CVC/CVV</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.cvc_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n          <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"addressInput\">Indirizzo</label>\n              <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"addressNumberInput\">Nr</label>\n              <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"cittyInput\">Città</label>\n              <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"capInput\">CAP</label>\n              <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"provinceInput\">Provincia</label>\n              <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"messages\" *ngIf=\"card_state.message_error\">\n          <div class=\"error\" *ngIf=\"card_state.message_error\">\n            <p><small>{{card_state.message_error}}</small></p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-yellow-green\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</a>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <footer class=\"footer\">\n    <div class=\"footer-container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-3\">\n          <ul>\n            <li>Starbook © 2017</li>\n            <li>Tutti i diritti riservati</li>\n          </ul>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <ul>\n            <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n            <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n            <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <ul>\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <ul>\n            <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n\n\n\n<!-- <div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\" (swipeleft)=\"swipe($event.type, $event.deltaX)\" (swiperight)=\"swipe($event.type, $event.deltaX)\">\n      <div [ngStyle]=\"{'margin-left.px': delta}\">\n        <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.url === selectTab}\" [routerLink]=\"['/profile', tab.url]\">\n          <span></span>\n          <div>{{tab.name}}</div>\n        </a>\n        <a *ngIf=\"isAuthenticated === true\" (click)=\"logout()\"><span></span><div>Esci</div></a>\n      </div>\n    </div>\n    <div class=\"profile-settings\" *ngIf=\"selectTab === 'settings'\">\n      <div class=\"header\">Informazioni del account</div>\n      <form #changProfile=\"ngForm\">\n        <app-loading *ngIf=\"isLoading\"></app-loading>\n        <label>NOME COMPLETO</label>\n        <div class=\"form-group\">\n          <input class=\"form-control\" name=\"name\" placeholder=\"Nome Cognome\" #fullname=\"ngModel\" [(ngModel)]=\"userData.fullname\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Cognome</label>\n          <input class=\"form-control\" name=\"lastname\" #fullname=\"ngModel\" [(ngModel)]=\"userData.lastname\" required disabled>\n        </div>\n        <div class=\"form-group\">\n          <label>Nome Azienda</label>\n          <input class=\"form-control\" name=\"patronymic\" #fullname=\"ngModel\" [(ngModel)]=\"userData.patronymic\" required disabled>\n        </div>\n        <label>CELLULARE</label>\n        <div class=\"form-group\">\n          <input class=\"form-control\" name=\"phone\" placeholder=\"Numero\" #phone_number=\"ngModel\" [(ngModel)]=\"userData.phone_number\">\n        </div>\n        <label>EMAIL</label>\n        <div class=\"form-group\">\n          <div class=\"email-field\">\n            <input class=\"form-control\" name=\"email\" placeholder=\"Indirizzo email\" value=\"\" #email=\"ngModel\" [(ngModel)]=\"userData.email\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>\n          </div>\n        </div> -->\n        <!--<div class=\"form-group password-block\">-->\n          <!--<label>Password</label>-->\n          <!--<div class=\"password-container\">-->\n            <!--<div class=\"password\">-->\n              <!--<span>•••••••••••</span>-->\n            <!--</div>-->\n            <!--<div class=\"change-password\">-->\n              <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n        <!-- <div class=\"header second\">Indirizzo di fatturazione</div> -->\n        <!-- <label>Indirizzo del domicilio</label>\n        <div class=\"form-group\">\n          <input class=\"form-control\" name=\"address1\" #street=\"ngModel\" [(ngModel)]=\"userData.street\" placeholder=\"Via Verdi 13\">\n        </div> -->\n        <!-- <label>Città e CAP</label>\n        <div class=\"form-group double-input\">\n          <input class=\"form-control first\" name=\"address2\" #city=\"ngModel\" [(ngModel)]=\"userData.city\" placeholder=\"Città\">\n          <input class=\"form-control second\" name=\"number2\" #postal_code=\"ngModel\" [(ngModel)]=\"userData.postal_code\" placeholder=\"CAP\">\n        </div> -->\n        <!-- <label>Provincia e Nazione</label>\n        <div class=\"form-group double-input\">\n          <input class=\"form-control first\" name=\"city\" #province=\"ngModel\" [(ngModel)]=\"userData.province\" placeholder=\"Provincia\">\n          <input class=\"form-control second\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"userData.country\" placeholder=\"Nazione\">\n        </div> -->\n        <!-- <label>Partita IVA</label>\n        <div class=\"form-group\">\n          <input class=\"form-control\" name=\"piva\" placeholder=\"P.IVA\">\n        </div> -->\n        <!-- <label>Codice Fiscale</label>\n        <div class=\"form-group\">\n          <input class=\"form-control\" name=\"codice\" placeholder=\"Codice Fiscale\">\n        </div> -->\n        <!-- <div class=\"profile-information\" *ngIf=\"formError\">\n          <strong *ngIf=\"formError.title.length > 0\">{{formError.title}}</strong> {{formError.message}}\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateProfile()\">Aggiorna Informazioni</button>\n        </div> -->\n        <!--<div class=\"form-group\">-->\n          <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\"><span class=\"fa fa-sign-out\"></span> Log out</button>-->\n        <!--</div>-->\n      <!-- </form>\n    </div>\n    <div class=\"cards-page\" *ngIf=\"selectTab === 'payment'\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"card-block\" *ngFor=\"let card of cards\">\n        <div class=\"container\">\n          <div class=\"header\">\n            <div class=\"card-logo {{ formatCssClass(card.brand) }}\"><span>**** {{ card.last4 }}</span></div>\n            <div class=\"isDefault\" *ngIf=\"defaultCard === card.id\">Default</div>\n            <div class=\"buttons-block\">\n              <a class=\"btn btn-primary\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n              <a class=\"btn btn-primary\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n              <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n            </div>\n          </div>\n          <div class=\"content\">\n            <div class=\"card-information\">\n              <div class=\"information-block\">\n                <span>Nome:</span>\n                {{ card.name }}\n              </div>\n              <div class=\"information-block\">\n                <span>Numero:</span>\n                **** {{ card.last4 }}\n              </div>\n              <div class=\"information-block\">\n                <span>Scadenza:</span>\n                {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n              </div>\n              <div class=\"information-block\">\n                <span>Tipo:</span>\n                {{ card.brand }} {{ card.funding }} {{ card.object }}\n              </div>\n            </div>\n            <div class=\"card-information\">\n              <div class=\"information-block\">\n                <span>Indirizzo:</span>\n                {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                {{ card.address_state }} {{ card.address_city }} <br>\n                {{ card.address_zip }} {{ card.address_country }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <a class=\"new-card\" (click)=\"addNewCard()\">\n          Aggiungi un metodo di pagamento\n        </a>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 704:
/***/ function(module, exports) {

module.exports = "<div class=\"recruiter-container\" *ngIf=\"page==='workerjoin'\">\n  <div class=\"header\">\n    <h3>Unisciti a noi e lavoreremo insieme come una squadra</h3>\n    <p>Sei un idraulico, elettricista, imbianchino, cartongessista? Hai un altra professione e vuoi venderla al meglio possibile? Unisciti a Starbook e ti aiuteremo noi.</p>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"firstNameInput\">Nome</label>\n          <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Recruiter.firstname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"lastNameInput\">Cognome</label>\n          <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Recruiter.lastname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phoneInput\">Telefono</label>\n      <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Recruiter.phone\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Email</label>\n      <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Recruiter.email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"recruiter_state.message_success\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        {{recruiter_state.message_success}}\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"recruiter_state.message_error\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        {{recruiter_state.message_error}}\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"joinAsWorker()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"recruiter_state.loading\"></i>Invia richiesta</button>\n    </div>\n  </form>\n</div>\n<div class=\"recruiter-container\" *ngIf=\"page==='partnerjoin'\">\n  <div class=\"header\">\n    <h3>Un buon partnership è una garanzia per il futuro</h3>\n    <p>Noi del team Starbook siamo sempre aperti a nuovi partnership e diamo il massimo del supporto per offrire il miglior servizio nel minor tempo e nel miglior prezzo possibile ai nostri clienti.</p>\n    <p>Per i nostri parter abbiamo un piano di affiliazione. Per ulteriori dettagli iscriviti e vai nella pagina di affiliazione.</p>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"firstNameInput\">Nome</label>\n          <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"Signup.firstname\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"lastNameInput\">Cognome</label>\n          <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"Signup.lastname\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phoneInput\">Telefono</label>\n      <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Signup.phone\" [ngModelOptions]=\"{standalone: true}\">\n      <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Email</label>\n      <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Signup.email\" [ngModelOptions]=\"{standalone: true}\">\n      <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordInput\">Password</label>\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"Signup.password\" [ngModelOptions]=\"{standalone: true}\">\n      <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n      <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"Signup.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n      <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n    </div>\n    <div class=\"form-group\" *ngIf=\"signup_state.message_success\">\n      <div class=\"alert alert-success\" role=\"alert\">{{signup_state.message_success}}</div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"signup_state.message_error\">\n      <div class=\"alert alert-danger\" role=\"alert\">{{signup_state.message_error}}</div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"joinAsPartner()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n    </div>\n  </form>\n</div>\n\n\n\n\n<!-- <div class=\"recruiter-container\" *ngIf=\"page==='partnerjoin'\">\n  <div class=\"header\">\n    <h3>Un buon partnership è una garanzia per il futuro</h3>\n    <p>Noi del team Starbook siamo sempre aperti a nuovi partnership e nuove collaborazioni e diamo il massimo del supporto per offrire il miglior servizio nel minor tempo e nel miglior prezzo possibile ai nostri clienti.</p>\n    <p>Per i nostri parter abbiamo un piano di affiliazione. Per ulteriori dettagli invia una richiesta e ti contatteremo subito.</p>\n  </div>\n  <form>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"firstNameInput\">Nome</label>\n          <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Recruiter.firstname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"lastNameInput\">Cognome</label>\n          <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Recruiter.lastname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phoneInput\">Telefono</label>\n      <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Recruiter.phone\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Email</label>\n      <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Recruiter.email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"recruiter_state.message_success\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        {{recruiter_state.message_success}}\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"recruiter_state.message_error\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        {{recruiter_state.message_error}}\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"joinAsWorker()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"recruiter_state.loading\"></i>Invia richiesta</button>\n    </div>\n  </form>\n</div> -->\n<!-- <div class=\"referral-container\" *ngIf=\"page==='share'\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h3>Copy from text -- text</h3> Click this button, it will copy the text from the input by referring to the <strong>text content</strong>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text\" placeholder=\"content will be copy after click the copy button\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" [class.btn-success]= \"isCopied1\" type=\"button\" ngxClipboard [cbContent]=\"text\" (cbOnSuccess)=\"isCopied1 = true\">copy</button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h3>Copy from text -- target</h3> Click this button, it will copy the text from the input by referring to the <strong>input element</strong>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text2\" placeholder=\"content will be copy after click the copy button\"\n          #inputTarget>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" [class.btn-success]= \"isCopied2\" type=\"button\" [ngxClipboard]=\"inputTarget\" (cbOnSuccess)=\"isCopied2 = true\">copy</button>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"content\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h3>Copy from text -- target</h3>\n        Click this button, it will copy the text from the input by referring to the <strong>input element</strong>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"text2\" placeholder=\"content will be copy after click the copy button\"\n            #inputTarget>\n          <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\" [ngxClipboard]=\"inputTarget\">copy</button>\n        </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      Click this button, it will copy the text from the input by referring to the <strong>input element</strong>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\"  placeholder=\"content will be copy after click the copy button\" #inputTarget>\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\" [ngx-clipboard]=\"contacts\">copy</button>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"header\">\n    <h1>Aiuta un amico e guadagnate insieme!</h1>\n    <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n  </div>\n  <div class=\"invitation\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com, 343245366465, 23464262462\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h1>Condividi sui social</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"copyLink()\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 705:
/***/ function(module, exports) {

module.exports = "<div class=\"service\" *ngIf=\"page==='service'\">\n  <div class=\"header\">\n    <h1>Lavori di casa? <br>Chiedi di cosa hai bisogno</h1>\n    <p>Inserisci il titolo e i dettagli del lavoro che vuoi svolgere. Ci occupiamo noi a trovare il miglior professionista con il miglior prezzo.</p>\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"titleInput\">Titolo</label>\n      <input type=\"text\" placeholder=\"Titolo della richiesta\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.title_error}\" id=\"titleInput\" [(ngModel)]=\"Request.title\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"descriptionInput\">Descrizione</label>\n      <textarea class=\"form-control\" placeholder=\"Descrizione della richiesta\" rows=\"5\" [ngClass]=\"{'error-input': request_state.description_error}\" id=\"descriptionInput\" [(ngModel)]=\"Request.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"firstNameInput\">Nome</label>\n          <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Request.firstname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"lastNameInput\">Cognome</label>\n          <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Request.lastname\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"phoneInput\">Telefono</label>\n      <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Request.phone\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Email</label>\n      <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Request.email\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n    <div class=\"form-group\" *ngIf=\"request_state.message_success\">\n      <div class=\"alert alert-success\" role=\"alert\">\n        {{request_state.message_success}}\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"request_state.message_error\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        {{request_state.message_error}}\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"sendRequestForNewService()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"request_state.loading\"></i>{{request_state.button_title}}</button>\n    </div>\n  </form>\n</div>\n<div class=\"estimate\" *ngIf=\"page==='estimate'\">\n  <div *ngIf=\"!Estimate\">\n    Non ci sono preventivi da visualizzare\n  </div>\n  <div *ngIf=\"Estimate\">\n    <div class=\"header\">\n      <div *ngFor=\"let item of Estimate.details\">\n        <div *ngIf=\"item.type === 'service'\">\n          <h3>{{item.title}}</h3>\n          <div class=\"line\"></div>\n        </div>\n        <div *ngIf=\"item.type === 'detail'\">\n          <p>{{item.title}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"line\"></div>\n    <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n      <div class=\"item\">PREZZO INIZIALE</div>\n      <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n    </div>\n    <div class=\"counts\">\n      <div class=\"item\">PREZZO FINALE</div>\n      <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n    </div>\n    <div class=\"counts\">\n      <div class=\"item\">ACCONTO (30% del totale)</div>\n      <div class=\"amount\">{{Estimate.payment.upfront/100}}€</div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer class=\"footer sticky-footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 706:
/***/ function(module, exports) {

module.exports = "<div class=\"services\">\n  <h1><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i>{{services_state.title}}</h1>\n  <div class=\"services-container\">\n    <div class=\"service-box\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n      <div class=\"service\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n        <div class=\"title\">{{ service.title }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<footer class=\"footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"../legal\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"../help\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"../requests\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"../about\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"../share\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 707:
/***/ function(module, exports) {

module.exports = "<div class=\"share-container\" *ngIf=\"page==='starbook'\">\n  <div class=\"header\">\n    <h1>Aiuta un amico e guadagnate insieme!</h1>\n    <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n  </div>\n  <div class=\"invitation\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h1>Condividi sui social</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"estimate\" *ngIf=\"page==='service' && Estimate\">\n  <div class=\"header\">\n    <div *ngFor=\"let item of Estimate.details\">\n      <div *ngIf=\"item.type==='service'\">\n        <h3>{{item.title}}</h3>\n      </div>\n      <div *ngIf=\"item.type==='detail'\">\n        <p>{{item.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\">\n    <div class=\"item\">DURATA DEL LAVORO (Approssimativo)</div>\n    <div class=\"amount time\">{{Estimate.timing.days}}</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n    <div class=\"item\">PREZZO INIZIALE</div>\n    <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n  </div>\n  <div class=\"counts\">\n    <div class=\"item\">PREZZO FINALE</div>\n    <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n  </div>\n  <div class=\"line\"></div>\n\n  <!-- <div class=\"counts\">\n    <div class=\"item\">ACCONTO (30% del totale)</div>\n    <div class=\"amount\">{{Estimate.payment.upfront/100}}€</div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" id=\"next\" type=\"button\" (click)=\"startWizard()\">Continua</button>\n    </div>\n    <a routerLinkActive=\"active\" (click)=\"saveEstimate()\">Salva preventivo</a>\n  </div> -->\n  <!-- <div class=\"form-group\">\n    <div class=\"undobutton\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"order_status.loading\"></i>{{order_status.button_title}}</button>\n    </div>\n  </div> -->\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"startWizard()\">Continua con l'ordine</button>\n    </div>\n    <div class=\"form-group\">\n      <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva preventivo</a>\n      <a *ngIf=\"currentUser && estimate_state.saved\">Preventivo Salvato!</a>\n    </div>\n  </div>\n\n\n\n  <div class=\"invitation\">\n    <h3>Invia preventivo a</h3>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h3>Condividi sui social</h3>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"footer-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li>Starbook © 2017</li>\n          <li>Tutti i diritti riservati</li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <ul>\n          <li><a routerLink=\"/share\" routerLinkActive=\"active\">Affiliazione</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ },

/***/ 708:
/***/ function(module, exports) {

module.exports = "<div class=\"wizard\">\n  <ul class=\"breadcrumb noselect\" *ngIf=\"step !== ''\">\n    <li *ngFor=\"let items of wizardDataItems\"\n        [ngStyle]=\"{'width': 100/wizardDataItems.length + '%'}\"\n        [ngClass]=\"{'active': (step === 'summary' && items === 'Sommario') || (step === 'address' && items === 'Indirizzo') || (step === 'date' && items === 'Data') || ((step === 'preview' || step === 'login' || step === 'signup' || step === 'card') && (items === 'Anteprima' || items === 'Login' || items === 'Signup' || items === 'Carta')) || ((step === 'end' || step === 'info') && (items === 'Fine' || items === 'Info'))}\"><a>{{items}}</a></li>\n  </ul>\n  <div class=\"wizard-container\" *ngIf=\"step === 'summary'\">\n    <div class=\"content-container\">\n      <div class=\"header-summary\">\n        <h3>{{Order.title}}</h3>\n        <div *ngFor=\"let item of Order.details\">\n          <div *ngIf=\"item.type !== 'service'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"timing\">\n        <div class=\"item\">DURATA DEL LAVORO (Approssimativo)</div>\n        <div class=\"amount\">{{Order.timing.days}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"payment\">\n        <div class=\"initial\" *ngIf=\"Order.price.initial>Order.price.final\">\n          <div class=\"item\">PREZZO INIZIALE</div>\n          <div class=\"amount\">{{Order.price.initial/100}}€</div>\n        </div>\n        <div class=\"total\">\n          <div class=\"item\">PREZZO FINALE</div>\n          <div class=\"amount\">{{Order.price.final/100}}€</div>\n        </div>\n        <div class=\"upfront\">\n          <div class=\"item\">ACCONTO</div>\n          <div class=\"amount\">{{Order.payment.upfront/100}}€</div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmPreview()\">Continua</button>\n        </div>\n      </div>\n      <!-- <div class=\"line\"></div> -->\n\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'address'\">\n    <div class=\"content-container\">\n      <div class=\"header noselect\">\n        <h1 class=\"text-center\">Dove si trova la sua abitazione?</h1>\n        <p class=\"text-center\">Inserisci l'indirizzo e la città della sua abitazione</p>\n      </div>\n      <div class=\"forms\">\n        <div class=\"form-group\">\n          <p-autoComplete id=\"luogo\" class=\"form-control\" [(ngModel)]=\"temp_address\" (clickOutside)=\"clickOutsideAddressInput()\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"street_number_city\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\" placeholder=\"Inserisci indirizzo\"></p-autoComplete>\n        </div>\n      </div>\n      <div class=\"messages\" [hidden]=\"!address_state.error_message\">\n        <p><small>{{address_state.error_message}}</small></p>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <div class=\"undobutton\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmAddress()\">Continua</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'date'\">\n    <div class=\"content-container noselect\">\n      <div class=\"header\">\n        <h1 class=\"text-center\">Quando vuoi realizare questo lavoro?</h1>\n        <p class=\"text-center\">Inserisci la data che vuoi realizzare questo servizio</p>\n      </div>\n      <div class=\"forms\">\n        <div class=\"form-group calendar-part\">\n          <div class=\"input-group date datepicker-block\">\n            <p-calendar name=\"data\" [(ngModel)]=\"temp_date\" id=\"data\" class=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\" placeholder=\"Inserisci la data\"></p-calendar>\n          </div>\n        </div>\n      </div>\n      <div class=\"messages\" [hidden]=\"!date_state.error_message\">\n        <p><small>{{date_state.error_message}}</small></p>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <div class=\"undobutton\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmDate()\">Continua</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'preview'\">\n    <div class=\"content-container noselect\">\n      <div class=\"header-summary\">\n        <h3>{{Order.title}}</h3>\n        <div *ngFor=\"let item of Order.details\">\n          <div *ngIf=\"item.type !== 'service'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"timing\">\n        <div class=\"item\">DURATA DEL LAVORO (Approssimativo)</div>\n        <div class=\"amount\">{{Order.timing.days}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"payment\">\n        <div class=\"initial\" *ngIf=\"Order.price.initial>Order.price.final\">\n          <div class=\"item\">PREZZO INIZIALE</div>\n          <div class=\"amount\">{{Order.price.initial/100}}€</div>\n        </div>\n        <div class=\"total\">\n          <div class=\"item\">PREZZO FINALE</div>\n          <div class=\"amount\">{{Order.price.final/100}}€</div>\n        </div>\n        <div class=\"upfront\">\n          <div class=\"item\">ACCONTO </div>\n          <div class=\"amount\">{{Order.payment.upfront/100}}€</div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"address\">\n        <p><strong>Indirizzo: </strong><span>{{Order.address.street}} {{Order.address.street_number}}, {{Order.address.city}}</span></p>\n      </div>\n      <div class=\"date\">\n        <p><strong>Data: </strong><span>{{formated_date}}</span></p>\n      </div>\n      <div class=\"messages\" [hidden]=\"!order_status.error_message\">\n        <p><small>{{order_status.error_message}}</small></p>\n        <div *ngIf=\"order_status.payment_error_message\">\n          <!-- <p><small>{{order_status.payment_error_message}} <a routerlink=\"profile/payment\" ng-reflect-router-link=\"profile/payment\" ng-reflect-href=\"profile/payment\" href=\"/profile/payment\" target=\"_blank\">metodo di pagamento</a></small></p> -->\n          <p><small>{{order_status.payment_error_message}} <a routerLink=\"/order/card\">metodo di pagamento</a></small></p>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <div class=\"undobutton\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"order_status.loading\"></i>{{order_status.button_title}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'end'\">\n    <div class=\"content-container\">\n      <div class=\"header\">\n        <h1 class=\"text-center\">Complimenti!</h1>\n        <h1 class=\"text-center\">Ordine effettuato con successo!</h1>\n        <p class=\"text-center\">La contatteremo per ulteriori informazioni.</p>\n      </div>\n      <div class=\"messages\">\n        <div class=\"success-icon\"><span></span></div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmEnd()\">Fatto</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'login'\">\n    <div class=\"content-container noselect\">\n      <div class=\"header noselect\">\n        <h1>Accedi al tuo account</h1>\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Password</label>\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n        </div>\n      </form>\n      <div class=\"messages\" [hidden]=\"!login_state.error_message\">\n        <p><small>{{login_state.error_message}}</small></p>\n      </div>\n      <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n        <p><small>{{facebook_state.error_message}}</small></p>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToSignup()\">Sei nuovo? Crea un account</button>\n        </div>\n        <div class=\"form-divider\">\n          <span>o</span>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n        </div>\n      </div>\n      <div class=\"footer noselect\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'signup'\">\n    <div class=\"content-container noselect\">\n      <div class=\"header\">\n        <h1>Crea un account</h1>\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"firstNameInput\">Nome</label>\n              <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastNameInput\">Cognome</label>\n              <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneInput\">Telefono</label>\n          <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Password</label>\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n        </div>\n      </form>\n      <div class=\"messages\" [hidden]=\"!signup_state.error_message\">\n        <p><small>{{signup_state.error_message}}</small></p>\n      </div>\n      <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n        <p><small>{{facebook_state.error_message}}</small></p>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToLogin()\">Accedi</button>\n        </div>\n        <div class=\"form-divider\">\n          <span>o</span>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n        </div>\n      </div>\n      <div class=\"footer noselect\">\n        <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n      </div>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'card'\">\n    <div class=\"content-container\">\n      <div class=\"header\">\n        <h1>Inserisci un metodo di pagamento</h1>\n        <h6>Per continuare con l'ordine inserisci</h6>\n      </div>\n      <form>\n        <div class=\"card-form\">\n          <div class=\"form-group\">\n            <label for=\"numberInput\">Numero carta</label>\n            <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n            <!-- <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Scadenza</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n                <!-- <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small> -->\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"numberInput\">CVC/CVV</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n                <!-- <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n            <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <label for=\"addressInput\">Indirizzo</label>\n                <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"addressNumberInput\">Nr</label>\n                <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <label for=\"cittyInput\">Città</label>\n                <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"capInput\">CAP</label>\n                <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"provinceInput\">Provincia</label>\n                <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"countryInput\">Paese</label>\n                <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <div class=\"form-group\" *ngIf=\"card_state.message_error\">\n              <div class=\"alert alert-danger\" role=\"alert\">{{card_state.message_error}}</div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"undobutton\">\n                <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n                <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"step === 'info'\">\n    <div class=\"content-container\">\n      <div class=\"header\">\n        <h1>Inserisci un contatto telefonico</h1>\n        <p>Per favore inserisci un numero di telefono per essere contatato dal professionista.</p>\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"phoneInput\">Telefono</label>\n          <input type=\"phone\" name=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': profile_info_state.phone_number_error}\" id=\"phoneInput\" [(ngModel)]=\"profileInformation.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"profile_info_state.phone_number_error\">{{profile_info_state.phone_number_error_message}}</small>\n        </div>\n      </form>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"saveInformations()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"profile_info_state.loading\"></i>{{profile_info_state.button_title}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--\n\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'confirmation'\">\n    <div class=\"image-block\" [ngStyle]=\"{'background-image': 'url(' + wizardData.order.service_image + ')'}\"></div>\n    <div class=\"content-container\">\n      <div class=\"title\">{{ wizardData.order.service }}</div>\n      <div class=\"items\">\n        <div class=\"element\" *ngFor=\"let item of wizardData.order.services\">\n          <div *ngIf=\"item.price_type === 'BASE_AMOUNT_PER_INPUT'\">\n            <p>{{ item.option.name }} {{item.option.symbol}}</p>\n          </div>\n          <div *ngIf=\"item.price_type !== 'BASE_AMOUNT_PER_INPUT'\">\n            <p>{{ item.option.name }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"summary\">\n        <div class=\"item\">\n          Totale: <span class=\"big\">{{(wizardData.order.totalPrice * wizardData.multiplier) / 100 }}€</span>\n        </div>\n        <div class=\"item-small\">\n          Metodo di pagamento: <span>{{ wizardData.type }}</span>\n        </div>\n      </div>\n      <form class=\"wizard-form\" #wizardForm=\"ngForm\">\n        <div class=\"form-group\" [ngClass]=\"{'isError': isDataError}\">\n          <label>Inserisci la data</label>\n          <p-calendar name=\"data\" [(ngModel)]=\"Order.date\" id=\"data\" class=\"date\" autocomplete=\"off\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\" placeholder=\"Inserisci la data\">\n          </p-calendar>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': isAddressDirty && !isAddressFull}\">\n          <label>Inserisci l’indirizzo</label>\n          <p-autoComplete id=\"luogo\" class=\"form-control\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"Order.delivery_address\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"formattedAddress\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\" placeholder=\"Via Luigi Settembrini, 4, Milano\">\n          </p-autoComplete>\n          <div class=\"error-message\" *ngIf=\"errorMessage !== null\">{{ errorMessage }}</div>\n        </div>\n        <div class=\"popup-spinner\" *ngIf=\"createOrderDisabled\">\n          <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"createOrder()\" [disabled]=\"createOrderDisabled\">Continua</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'registration'\">\n    <div class=\"content-container registration\">\n      <div class=\"title action-title\">Crea un account</div>\n      <form class=\"wizard-form\" #wizardRegistrationForm=\"ngForm\">\n        <div class=\"form-group\" *ngIf=\"formError !== false\">\n          <div class=\"error-message\">\n            <span>{{ formError.title }}</span> {{ formError.message }}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"part-group first\" [ngClass]=\"{'isError': registrationError.firstname}\">\n            <label>Nome</label>\n            <input name=\"firstname\" class=\"form-control\" [(ngModel)]=\"registrationData.firstname\" (keyup)=\"checkNonEmpty('registrationName', registrationData.firstname)\" (change)=\"checkNonEmpty('registrationName', registrationData.firstname)\">\n          </div>\n          <div class=\"part-group last\" [ngClass]=\"{'isError': registrationError.lastname}\">\n            <label>Cognome</label>\n            <input name=\"lastname\" class=\"form-control\" [(ngModel)]=\"registrationData.lastname\" (keyup)=\"checkNonEmpty('registrationName', registrationData.lastname)\" (change)=\"checkNonEmpty('registrationName', registrationData.lastname)\">\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n          <label>Telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"registrationData.phone\" (keyup)=\"checkNonEmpty('registrationPhone', registrationData.phone)\" (change)=\"checkNonEmpty('registrationPhone', registrationData.phone)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n          <label>Email</label>\n          <input name=\"email\" class=\"form-control\" [(ngModel)]=\"registrationData.email\" (keyup)=\"checkEmail('registration', registrationData.email)\" (change)=\"checkEmail('registration', registrationData.email)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n          <label>Password</label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"registrationData.password\" (keyup)=\"checkPassword('registration', registrationData.password, registrationData.confirmPassword)\" (change)=\"checkPassword('registration', registrationData.password, registrationData.confirmPassword)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.confirmPassword}\">\n          <label>Di nuovo la password</label>\n          <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"registrationData.confirmPassword\" (keyup)=\"checkPassword('registrationConfirm', registrationData.password, registrationData.confirmPassword)\" (change)=\"checkPassword('registrationConfirm', registrationData.password, registrationData.confirmPassword)\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"registration()\">Crea account</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openLogin()\">Accedi al tuo account</button>\n        </div>\n        <div class=\"form-description\">\n          <span>o</span>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n            <i></i>\n            Continua con Facebook\n          </a>\n        </div>\n        <div class=\"form-footer\">\n          Accedendo dichiari di aver letto e accetti le <a>condizioni generali</a> e <a>l’informativa sulla privacy</a>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'login'\">\n    <div class=\"content-container login-step\">\n      <div class=\"title action-title\">Accedi</div>\n      <form class=\"wizard-form\" #wizardLoginForm=\"ngForm\">\n        <div class=\"form-group\" *ngIf=\"formError !== false\">\n          <div class=\"error-message\">\n            <span>{{ formError.title }}</span> {{ formError.message }}\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n          <label>Email</label>\n          <input name=\"email\" class=\"form-control\" [(ngModel)]=\"loginData.email\" (keyup)=\"checkEmail('login', loginData.email)\" (change)=\"checkEmail('login', loginData.email)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n          <label>Password</label>\n          <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"loginData.password\" (keyup)=\"checkPassword('login', loginData.password)\" (change)=\"checkPassword('login', loginData.password)\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"login()\">Accedi</button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openRegistration()\">Crea un account</button>\n        </div>\n        <div class=\"form-description\">\n          <span>o</span>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n            <i></i>\n            Continua con Facebook\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'confirm-user-info'\">\n    <div class=\"content-container confirm-user-info\">\n      <div class=\"title action-title\">Conferma la tua Info</div>\n      <form class=\"wizard-form\" #wizardForm=\"ngForm\">\n        <div class=\"form-group\" *ngIf=\"formError !== false\">\n          <div class=\"error-message\">\n            <span>{{ formError.title }}</span> {{ formError.message }}\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"showConfirmPhone\" [ngClass]=\"{'isError': confirmationError.phone}\">\n          <label>Telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"confirmationData.phone\" (keyup)=\"checkNonEmpty('confirmationPhone', confirmationData.phone)\" (change)=\"checkNonEmpty('confirmationPhone', confirmationData.phone)\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"confirmUserInfo()\">Continua</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'addcard'\">\n    <div class=\"content-container registration\">\n      <div class=\"title action-title\">Metodo di pagamento</div>\n      <form class=\"wizard-form\" #wizardCardForm=\"ngForm\">\n        <div class=\"form-group\" *ngIf=\"formError !== false\">\n          <div class=\"error-message\">\n            <span>{{ formError.title }}</span> {{ formError.message }}\n          </div>\n        </div>\n        <div class=\"form-group cards-logo\">\n          <div class=\"card-item visa\"></div>\n          <div class=\"card-item mastercard\"></div>\n          <div class=\"card-item amex\"></div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\">\n          <label>Numero carta</label>\n          <input name=\"number\" class=\"form-control\" [(ngModel)]=\"addCardData.number\" (keyup)=\"checkCardNumber(addCardData.number)\" (change)=\"checkCardNumber(addCardData.number)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n          <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n            <label>Scadenza</label>\n            <input class=\"form-control\" type=\"text\" name=\"exp_date\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" (keyup)=\"checkExpiry(addCardData.exp_date)\" (change)=\"checkExpiry(addCardData.exp_date)\">\n          </div>\n          <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\">\n            <label>CVV</label>\n            <input class=\"form-control\" type=\"text\" name=\"cvc\" [(ngModel)]=\"addCardData.cvc\" (keyup)=\"checkNonEmpty('cardCvv', addCardData.cvc)\">\n            <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          </div>\n        </div>\n        <div class=\"form-group subheader\">\n          Informazioni facoltativi\n        </div>\n        <div class=\"form-group\">\n          <label>Nome intestatario</label>\n          <input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"part-group first-big\">\n            <label>Via</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_line1\" [(ngModel)]=\"addCardData.address_line1\">\n          </div>\n          <div class=\"part-group last-small\">\n            <label>Nr</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_line2\" [(ngModel)]=\"addCardData.address_line2\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"part-group first-big\">\n            <label>Città</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_city\" [(ngModel)]=\"addCardData.address_city\">\n          </div>\n          <div class=\"part-group last-small\">\n            <label>CAP</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_zip\" [(ngModel)]=\"addCardData.address_zip\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"part-group first\">\n            <label>Provincia</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_state\" [(ngModel)]=\"addCardData.address_state\">\n          </div>\n          <div class=\"part-group last\">\n            <label>Paese</label>\n            <input class=\"form-control\" type=\"text\" name=\"address_country\" [(ngModel)]=\"addCardData.address_country\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"addCard()\">Continua</button>\n        </div>\n        <div class=\"form-footer\">\n          Accedendo dichiari di aver letto e accetti le <a>condizioni generali</a> e <a>l’informativa sulla privacy</a>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'loan'\">\n    <div class=\"content-container loan\">\n      <div class=\"title action-title\">Gli ultimi dettagli</div>\n      <form class=\"wizard-form\" #wizardLoanForm=\"ngForm\">\n        <div class=\"form-group\" *ngIf=\"formError !== false\">\n          <div class=\"error-message\">\n            <span>{{ formError.title }}</span> {{ formError.message }}\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.name}\">\n          <label>Nome</label>\n          <input name=\"name\" class=\"form-control\" [(ngModel)]=\"loanData.name\" (keyup)=\"checkNonEmpty('loanName', loanData.name)\" (change)=\"checkNonEmpty('loanName', loanData.name)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.name}\">\n          <label>Cognome</label>\n          <input name=\"name\" class=\"form-control\" [(ngModel)]=\"loanData.name\" (keyup)=\"checkNonEmpty('loanName', loanData.name)\" (change)=\"checkNonEmpty('loanName', loanData.name)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.email}\">\n          <label>Email</label>\n          <input name=\"email\" class=\"form-control\" [(ngModel)]=\"loanData.email\" (keyup)=\"checkEmail('loanEmail', loanData.email)\" (change)=\"checkEmail('loanEmail', loanData.email)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.phone}\">\n          <label>Telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"loanData.phone\" (keyup)=\"checkNonEmpty('loanPhone', loanData.phone)\" (change)=\"checkNonEmpty('loanPhone', loanData.phone)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.tax}\">\n          <label>Partita iva</label>\n          <input name=\"tax\" class=\"form-control\" [(ngModel)]=\"loanData.tax\" (keyup)=\"checkNonEmpty('loanTax', loanData.tax)\" (change)=\"checkNonEmpty('loanTax', loanData.tax)\">\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'isError': loanError.codice}\">\n          <label>Codice fiscale</label>\n          <input name=\"codice\" class=\"form-control\" [(ngModel)]=\"loanData.codice\" (keyup)=\"checkNonEmpty('loanCodice', loanData.codice)\" (change)=\"checkNonEmpty('loanCodice', loanData.codice)\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"createLoan()\">Continua</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"wizard-container\" *ngIf=\"wizardData.type !== '' && step === 'success'\">\n    <div class=\"content-container\">\n      <div class=\"title\">Ordine effettuato con successo</div>\n      <form class=\"wizard-form\" #wizardForm=\"ngForm\">\n        <div class=\"success-icon\"><span></span></div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"success()\">Fatto</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n-->\n"

/***/ },

/***/ 709:
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-container\">\n        <p><span>Errore!</span> {{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">\n      <h1>Accedi</h1>\n    </div>\n    <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n        <label for=\"email\">Indirizzo email</label>\n        <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n        <span class=\"error\">Indirizzo email non valido</span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n        <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n        <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n        <span class=\"error\">Inserisci la tua password</span>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-facebook\" (click)=\"facebookLogin()\">\n          <i></i>\n          Continua con Facebook\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">\n    <h1>Nuovo utente</h1>\n  </div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regFirstName\">Nome</label>\n          <input id=\"regFirstName\" class=\"form-control\" type=\"text\" name=\"firstname\" placeholder=\"\" required [(ngModel)]=\"registrationData.firstname\" #regFirstName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationFirstName', regFirstName.value)\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regLastName\">Cognome</label>\n          <input id=\"regLastName\" class=\"form-control\" type=\"text\" name=\"lastname\" placeholder=\"\" required [(ngModel)]=\"registrationData.lastname\" #regLastName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationLastName', regLastName.value)\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input type=\"phone\" name=\"phone\" id=\"regPhone\" class=\"form-control\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regFirstName.value, regLastName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <!-- <div class=\"form-description\">\n    <span>o</span>\n  </div> -->\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-facebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"form-notice\">Continuando dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"legal\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"legal\">l’informativa sulla privacy</a></div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">\n    <h1>Recupera password</h1>\n  </div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n      <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n        <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n          <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n        </circle>\n      </svg>\n    </div>\n    <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n    <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">\n      <h1>{{ confirmPopupData.title }}</h1>\n    </div>\n    <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n      <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n      <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n      <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n          <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n          <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n        </div>\n      </div>\n      <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n        <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n        <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n        <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n      </div>\n      <div class=\"price-loader\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading\">\n        <div class=\"spinner\">\n          <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <span>Calcolando totale…</span>\n      </div>\n      <div class=\"price-area\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading === false && confirmPopupData.totalPrice\">\n        Totale<span>{{confirmPopupData.totalPrice / 100}}€</span>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n        <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\"><i class=\"fa fa-lock\"></i> Prenota servizio</button>\n        <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n        <span *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\" class=\"confirm-button-notice\">Attenzione, chiudendo potresti perdere il prezzo calcolato del servizio.</span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n      <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n      <p>{{ confirmFinishPopupData.text }}</p>\n      <div class=\"form-group\">\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n      <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n      <div class=\"header\">{{ finishPopupData.title }}</div>\n      <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n      <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n        <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n          <label>Numero di telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n        </div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n        <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"popup-container\">\n    <div class=\"header\">Metodo di pagamento</div>\n    <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n      <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n      <div class=\"cards-logo\">\n        <div class=\"card-item visa\"></div>\n        <div class=\"card-item mastercard\"></div>\n        <div class=\"card-item amex\"></div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCardNumber\">Numero carta</label>\n        <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCardNumber\">Numero carta</label>\n        <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n          <label for=\"addExpDate\">Scadenza</label>\n          <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n          <span class=\"error\">Expiration date isn't correct</span>\n        </div>\n        <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n          <label for=\"addCVV\">CVV</label>\n          <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n        <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n          <label for=\"editCVV\">CVV</label>\n          <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n      </div>\n      <div class=\"subheader\">\n        Informazioni facoltativi\n      </div>\n      <div class=\"form-group\">\n        <label for=\"addCardName\">Nome intestatario</label>\n        <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardVia\">Indirizzo</label>\n          <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardNr\">Nr</label>\n          <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardCitta\">Città</label>\n          <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardCap\">CAP</label>\n          <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\">\n          <label for=\"addCardProvincia\">Provincia</label>\n          <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n        </div>\n        <div class=\"part-group last\">\n          <label for=\"addCardPease\">Paese</label>\n          <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n        <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"popup-container\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n    <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n      <p>\n        {{ confirmActionPopupData.text }}\n        <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n      </p>\n      <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n          {{ action.information }}\n        </div>\n      </div>\n      <div class=\"form-group buttons-block\">\n        <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n          <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n          <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<!-- ******************************** A/B Tests ******************************** -->\n\n<!-- <div class=\"popup\" [@registerCompanyPopupState]=\"registerCompanyPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Registra la tua impresa</div>\n  <form class=\"registration-company-form\" #registrationCompanyForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"regName\">Il tuo nome</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"il tuo nome\" required [(ngModel)]=\"registerNewCompany.name\" #regName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regPhone\">Numero di cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"328...\" required [(ngModel)]=\"registerNewCompany.phone\" #regPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regProfession\">Inserisci la tua professione</label>\n      <input id=\"regProfession\" class=\"form-control\" name=\"profession\" placeholder=\"professione\" [(ngModel)]=\"registerNewCompany.profession\" #regProfession=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registerCompany(regName.value, regPhone.value, regProfession.value)\">Registra la tua impresa</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n\n<!-- <div class=\"popup\" [@recommendToFriendPopupState]=\"recommendToFriendPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Invita un amico</div>\n  <form class=\"reccoment-friend-form\" #recommendToFriendForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"friendName\">Nome di tuo amico</label>\n      <input id=\"friendName\" class=\"form-control\" type=\"text\" name=\"friendname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.friend_name\" #friendName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"friendPhone\">Numero di cellulare di tuo amico</label>\n      <input id=\"friendPhone\" class=\"form-control\" type=\"text\" name=\"friendphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.frend_phone_number\" #friendPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myName\">Il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Il tuo numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recommendToFriend(friendName.value, friendPhone.value, myName.value, myPhone.value)\">Invita e guadagna</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div>\n\n<div class=\"popup\" [@getPromoCodePopupState]=\"getPromoCodePopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Guadagna uno sconto</div>\n  <form class=\"get-promo-code-form\" #getPromoCodeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"myName\">Inserisci il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myName\" placeholder=\"mio nome\" [(ngModel)]=\"earnPromoCode.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myPhone\" placeholder=\"328..\" required [(ngModel)]=\"earnPromoCode.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"earnPromoCodeAction(myName.value, myPhone.value)\">Ricevi codice</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n"

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_service__ = __webpack_require__(16);
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

/***/ 710:
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },

/***/ 732:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(405);


/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__ = __webpack_require__(86);
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
        this.analyticsService.sendEvent({ category: 'Landing Page', action: 'Join', label: "professional" });
        this.router.navigate(['recruiter/workerjoin']);
    };
    HomeComponent.prototype.lernMore = function () {
        this.analyticsService.sendEvent({ category: 'Landing Page', action: 'Join', label: "partnership" });
        this.router.navigate(['recruiter/partnerjoin']);
    };
    /////////////////////////
    /////// SEARCH //////////
    /////////////////////////
    HomeComponent.prototype.searchMore = function () {
        this.analyticsService.sendEvent({ category: 'Landing Page', action: 'Search', label: "More" });
        this.router.navigate(['services']);
    };
    HomeComponent.prototype.search = function (event) {
        var _this = this;
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
        this.analyticsService.sendEvent({ category: 'Services', action: 'request', label: this.query });
        this.router.navigate(['requests']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(744),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__popups_popups_service__["a" /* PopupsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/home.component.js.map

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__ = __webpack_require__(85);
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
    function ServiceComponent(homeService, navigationService, router, route, orderService, analyticsService, seoService, profileService) {
        this.homeService = homeService;
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
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var service_id = params['id'];
            var data = _this.homeService.getData();
            _this.route.queryParams.subscribe(function (params) {
                if (!data.referral_id || data.referral_id.length === 0) {
                    if (params['ref']) {
                        data['referral_id'] = params['ref'];
                    }
                }
                if (params['estimated']) {
                    console.log('estimated: ' + params['estimated']);
                }
            });
            // SERVICE
            var service = data.service;
            if (service_id) {
                if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                    window.scrollTo(0, 0);
                }
                if (service) {
                    _this.renderPage(service);
                }
                else {
                    var timeStart_1 = Date.now();
                    _this.homeService.getServiceById(service_id).then(function (data) {
                        _this.analyticsService.sendTiming({ category: 'Get service by id', timingVar: 'load', timingValue: Date.now() - timeStart_1 });
                        _this.renderPage(data.result);
                    }).catch(function (error) {
                        _this.router.navigateByUrl('/');
                    });
                }
            }
            // REFERRAL
            var referral_id = data.referral_id;
            if (referral_id) {
                _this.price_state.loading = true;
                _this.price_state.is_referral = false;
                _this.profileService.getAccountById(referral_id).then(function (profile) {
                    _this.price_state.loading = false;
                    _this.price_state.is_referral = true;
                    _this.price_state.referral_id = referral_id;
                }).catch(function (error) {
                    _this.price_state.loading = false;
                    _this.price_state.is_referral = false;
                    _this.price_state.referral_id = null;
                });
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.subscription = this.orderService.getOrderEvent$.subscribe(function (event) {
                _this.orderCreated(event);
            });
        }
    };
    ServiceComponent.prototype.renderPage = function (services) {
        var _this = this;
        this.seoService.setTitle(services.title);
        this.seoService.setOgElem('og:title', services.title);
        this.seoService.setMetaElem('description', services.description);
        this.seoService.setOgElem('og:description', services.description);
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + services.title.replace(/\s+/g, '-'));
        this.seoService.setOgElem('og:image', services.image_url);
        this.seoService.setOgElem('og:image:secure_url', services.image_url);
        this.navigationService.updateMessage(services.title);
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
        var formId = 0;
        services.forms.forEach(function (form) {
            var serviceForm = {
                title: form.title,
                description: form.description,
                image_url: form.image_url,
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
        // this.service_state.visible = true;
        // if (services.ref) {
        //   this.orderData.ref = services.ref;
        //   // console.log('ref is: ' + services.ref);
        // }
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
        this.analyticsService.sendEvent({ category: 'Order creation form', action: 'modify', label: 'input' });
        if (isNaN(value) || value === 0) {
            this.servicesData[formId].options[optionId].input_value = 0;
        }
        else {
            this.servicesData[formId].options[optionId].input_value = value;
        }
        this.calculateOrder();
    };
    ServiceComponent.prototype.selectAllContent = function ($event) {
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
                        currentOrderState.push({ title: item.title, type: "detail" });
                    }
                }
                else if (service.type === 'CHECKBOX') {
                    if (item.selected) {
                        currentOrderState.push({ title: item.title, type: "detail" });
                    }
                }
                else if (service.type === 'INPUTTEXT') {
                    if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
                        currentOrderState.push({ title: item.title + ' ' + item.input_value, type: "detail" });
                    }
                    if (service.price_type === 'AMOUNT_PER_INPUT' && item.input_value != 0) {
                        currentOrderState.push({ title: item.title + ' ' + item.input_value, type: "detail" });
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
            template: __webpack_require__(742)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], ServiceComponent);
    return ServiceComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/service.component.js.map

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = "<div class=\"home-page\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"header-cover\">\n          <img src=\"{{image_url}}\" alt=\"{{title}}\">\n          <div class=\"details\">\n            <div class=\"title\">{{ title }}</div>\n            <div class=\"description\">{{ description }}</div>\n          </div>\n        </div>\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\">\n            <div class=\"header\">\n              <div class=\"content-header\" *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\" [ngStyle]=\"{'width': '70%'}\">\n                <span>{{serviceCategory.title}}</span>\n                <div class=\"service-description\" *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</div>\n              </div>\n              <div class=\"content-header\" *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url === ''\" [ngStyle]=\"{'width': '100%', 'padding-right' : '0px'}\">\n                <span>{{serviceCategory.title}}</span>\n                <div class=\"service-description\" *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</div>\n              </div>\n              <div *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\">\n                <img src=\"{{serviceCategory.image_url}}\" alt=\"{{serviceCategory.title}}\">\n              </div>\n              <div *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url == ''\">\n                <img [ngStyle]=\"{'display': 'none'}\">\n              </div>\n            </div>\n            <div class=\"service content\">\n              <span *ngFor=\"let item of serviceCategory.options\">\n                <div class=\"item-container\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected, 'image-item': item.image_url}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                  <div class=\"item\">\n                    <i *ngIf=\"item.selected===true\" class=\"checkbox\"><span></span></i>\n                    <i *ngIf=\"item.selected===false\" class=\"checkbox empty\"></i>\n                    {{item.title}}\n                  </div>\n                  <div class=\"item-description\" *ngIf=\"item.description !== ''\">{{ item.description }}</div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url !== ''\" [ngStyle]=\"{'background-image': 'url(' + item.image_url + ')'}\"></div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url == ''\" [ngStyle]=\"{'display': 'none'}\"></div>\n                </div>\n                <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                  <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                  <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                </div>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <app-order [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\" [price_state] = \"price_state\"></app-order>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
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
        // this.api = 'http://localhost/v0.9.1/';
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
    CommonService.prototype.getCategories = function () {
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
    CommonService.prototype.getAllServices = function () {
        return this.http.get(this.api + 'services').toPromise().then(function (services) {
            return services.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getServices = function () {
        // this.navigationService.updateLoadingStatus(true);
        return this.http.get(this.api + 'featured')
            .toPromise()
            .then(function (services) {
            // this.navigationService.updateLoadingStatus(false);
            return services.json();
        })
            .catch(this.handleError);
    };
    CommonService.prototype.search = function (query) {
        return this.http.get(this.api + 'search?title=' + query)
            .toPromise()
            .then(function (results) {
            return results.json();
        })
            .catch(this.handleError);
    };
    CommonService.prototype.getServiceById = function (id) {
        return this.http.get(this.api + 'services/' + id)
            .toPromise()
            .then(function (results) {
            return results.json();
        })
            .catch(this.handleError);
    };
    CommonService.prototype.handleError = function (error) {
        // this.navigationService.updateLoadingStatus(false);
        return Promise.reject(error.message || error);
    };
    CommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], CommonService);
    return CommonService;
    var _a;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/common.service.js.map

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Trova il miglior servizio per la tua casa al miglior prezzo</h1>\n  <h4>Niente più ricerche, attese o confronti di preventivi. Lo facciamo noi al posto tuo. Ed è gratis.</h4>\n  <div class=\"search\">\n    <div class=\"search-field\">\n      <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca una lavorazione...\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n        <div class=\"no-result noselect\">\n          Il servizio \"{{query}}\" non è disponibile\n          <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"search-button\">\n      <button class=\"btn btn-primary\" (click)=\"searchMore()\">Tutti</button>\n    </div>\n  </div>\n</div>\n<div class=\"services\">\n  <h1><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i>{{services_state.title}}</h1>\n  <div class=\"services-container\">\n    <div class=\"service-box\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n      <div class=\"service\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n        <div class=\"title\">{{ service.title }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"how-work\">\n  <h1>Come funziona</h1>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-list.png\" class=\"rounded mx-auto d-block\" alt=\"Seleziona il servizio\">\n      <h3>Seleziona un servizio</h3>\n      <h5>Trova un servizio di cui hai bisogno e seleziona le carateristiche.</h5>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-time.png\" class=\"rounded mx-auto d-block\" alt=\"Calcola preventivo\">\n      <h3>Preventivo immediato</h3>\n      <h5>Ricevi in tempo reale un unico prezzo per il servizio, niente attese e niente intermediari.</h5>\n    </div>\n  </div>\n  <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n    <div class=\"box\">\n      <img src=\"../../../assets/images/service-booking.png\" class=\"rounded mx-auto d-block\" alt=\"Ordina il servizio\">\n      <h3>Ordina</h3>\n      <h5>Scegli il giorno quando vuoi iniziare i lavori, l'indirizzo dove si trova la tua casa e ordina direttamente.</h5>\n    </div>\n  </div>\n</div>\n<div class=\"market\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 background\">\n      <!-- <div class=\"box\">\n        <img src=\"../../../assets/images/bars-chart.png\" class=\"rounded mx-auto d-block\" alt=\"Quality\">\n      </div> -->\n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n      <div class=\"box\">\n        <h1>Prezzo del mercato</h1>\n        <!-- <p>I costi dei servizi vengono calcolati usando un algoritmo che considera l'attuale mercato. Noi ci assicuriamo che il cliente riceva il prezzo giusto del servizio e che il professionista sia pagato corretamente.</p> -->\n        <p>Noi assicuriamo che il cliente acquisti un servizio con il miglior prezzo sul mercato. In più il nostro algoritmo permette di cambiare il prezzo in modo dinamico in relazione della quantità delle richieste ricevute.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"professional\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n      <div class=\"box\">\n        <h1>Il miglior professionista</h1>\n        <!-- <p>Noi lavoriamo solo con i migliori professionisti del settore per assicurarci un miglior risultato finale. Questi sono alcuni dei professionisti selezionati che fanno parte del team Starbook.</p> -->\n        <p>Noi lavoriamo solo con i migliori professionisti del settore per assicurarci un miglior risultato finale. Assicurare il nostro cliente per un lavoro fatto bene è la nostra priorità.</p>\n      </div>\n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 background\">\n\n    </div>\n  </div>\n</div>\n<div class=\"recruiting\" *ngIf=\"!currentUser\">\n  <div class=\"join-box\">\n    <h1>Sei un professionista in cerca di clienti?</h1>\n    <p>Iscriviti a Starbook gratuitamente e diventa parte del nostro team.</p>\n    <button type=\"button\" class=\"btn btn-primary\" name=\"button\" (click)=\"joinUs()\">Unisciti adesso</button>\n  </div>\n  <div class=\"partner-box\">\n    <h1>Programma partnership</h1>\n    <p>Scopri il nostro programma partnership per Agenzie Immobiliari, Agenti Immobiliari, Amministratori Condominiali, Architetti, Fornitori Edili.</p>\n    <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"lernMore()\">Scopri di più</button>\n  </div>\n</div>\n<div class=\"pre-footer\">\n  <div class=\"container-fluid\">\n    <div class=\"pre\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Sicurezza del sito</p>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\" alt=\"Norton Security\">\n            <img src=\"../../../assets/images/secure.png\" alt=\"100% Secure\">\n            <img src=\"../../../assets/images/trust.png\" alt=\"Trusted Website\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Sistemi di pagamento</p>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n            <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n            <img src=\"../../../assets/images/americanexpress.png\" alt=\"American Express\">\n            <img src=\"../../../assets/images/stripe.png\" alt=\"Stripe\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p><a routerLink=\"/about\" routerLinkActive=\"active\">Chi siamo</a></p>\n          <p><a routerLink=\"/help\" routerLinkActive=\"active\">Aiuto e Assistenza</a></p>\n          <p><a routerLink=\"/legal\" routerLinkActive=\"active\">Privacy e Condizioni</a></p>\n          <p><a routerLink=\"/requests/service\" routerLinkActive=\"active\">Richiedi un servizio</a></p>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <p>Seguici su</p>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\" alt=\"Facebook\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\" alt=\"Twitter\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\" alt=\"Instagram\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <p><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></p>\n</div>\n\n\n<!-- <div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>É semplice. Trova il servizio. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result noselect\">\n              Il servizio \"{{query}}\" non è disponibile\n              <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h4>LAVORI IN CARTONGESSO</h4>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <h5>Scegli una delle lavorazioni di cui hai bisogno, calcola il preventivo e prenotalo</h5>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h3>Perché Starbook?</h3>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"Quality\">\n            <h5>Lavorazioni di alta qualità</h5>\n            <h6>I servizi vengono eseguiti dai migliori professionisti e artigiani della zona. Usando un algoritmo di ricerca, Starbook trova il professionista più vicino alla sua abitazione.</h6>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"Timing\">\n            <h5>Preventivo istantaneo</h5>\n            <h6>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h6>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"Market price\">\n            <h5>Prezzo mercato</h5>\n            <h6>I prezzi dei servizi su Starbook sono dinamici che partono dagli standard del mercato. Usando un algoritmo della piattaforma il prezzo standard viene ridotto in base al mercato attuale.</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div>\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h6>Sicurezza del sito</h6>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\" alt=\"Norton Security\">\n            <img src=\"../../../assets/images/secure.png\" alt=\"100% Secure\">\n            <img src=\"../../../assets/images/trust.png\" alt=\"Trusted Website\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h6>Sistemi di pagamento</h6>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n            <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n            <img src=\"../../../assets/images/americanexpress.png\" alt=\"American Express\">\n            <img src=\"../../../assets/images/stripe.png\" alt=\"Stripe\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h6>Contatti</h6>\n          <div class=\"list-contact-methods\">\n            <h6><small>Attivo 24/7 <br>Cellulare: +39 327 24 15 028<br>Email: info@starbook.co<br>Busto Arsizio VA</small></h6>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h6>Seguici su</h6>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\" alt=\"Facebook\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\" alt=\"Twitter\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\" alt=\"Instagram\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></div>\n      <span> • </span><a routerLink=\"legal\">Privacy e Condizioni</a>\n      <span> • </span><a routerLink=\"about\">Chi siamo</a>\n      <span> • </span><a routerLink=\"help\">Aiuto e Assistenza</a>\n    </div>\n  </div>\n  <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(76);
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

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
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

/***/ }

},[733]);
//# sourceMappingURL=client.bundle.map