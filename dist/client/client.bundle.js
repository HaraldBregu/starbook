webpackJsonp([0,3],{

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(86);
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

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_service__ = __webpack_require__(58);
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

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(86);
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

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(86);
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

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(86);
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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
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

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(214);
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
            template: __webpack_require__(679)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/home.component.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(142);
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
            template: __webpack_require__(681)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FacebookComponent);
    return FacebookComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/facebook.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(14);
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
            template: __webpack_require__(683)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__popups_popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _d) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_universal__ = __webpack_require__(14);
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
            template: __webpack_require__(684)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _h) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(86);
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

/***/ 391:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_browser_module__ = __webpack_require__(499);







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

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(62);
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
var __universal__ = __webpack_require__(512);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(62);

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

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_order_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_profile_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_orders_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_payment_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_analytics_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__order_order_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_orders_orders_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__popups_popups_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_phone_pipe__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_landing_landing_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_expiry_pipe__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_loading_loading_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_facebook_facebook_component__ = __webpack_require__(332);
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
    __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_20__order_order_component__["a" /* OrderComponent */],
    __WEBPACK_IMPORTED_MODULE_21__pages_orders_orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_23__popups_popups_component__["a" /* PopupsComponent */],
    __WEBPACK_IMPORTED_MODULE_24__pipes_phone_pipe__["a" /* PhonePipe */],
    __WEBPACK_IMPORTED_MODULE_25__pages_landing_landing_component__["a" /* LandingComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pipes_expiry_pipe__["a" /* ExpiryPipe */],
    __WEBPACK_IMPORTED_MODULE_27__shared_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_28__pages_facebook_facebook_component__["a" /* FacebookComponent */]
];
if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(676).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(675).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(503).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(502).AutoCompleteMockComponent;
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: declarations,
            imports: imports,
            providers: [
                // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
                // {
                //   provide: HAMMER_GESTURE_CONFIG,
                //   useClass: HammerConfig
                // },
                __WEBPACK_IMPORTED_MODULE_8__home_home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__order_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_orders_service__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_14__popups_popups_service__["a" /* PopupsService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_analytics_service__["a" /* AnalyticsService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__["a" /* SeoService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.browser.module.js.map

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_service__ = __webpack_require__(141);
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
            template: __webpack_require__(678)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__home_home_service__["a" /* HomeService */]) === 'function' && _f) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_facebook_facebook_component__ = __webpack_require__(332);
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
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(94);
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

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(94);
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

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(14);
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
            template: __webpack_require__(680)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _c) || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/order.component.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__ = __webpack_require__(69);
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
            template: __webpack_require__(682)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__home_home_service__["a" /* HomeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _e) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/landing.component.js.map

/***/ },

/***/ 506:
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

/***/ 507:
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

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__ = __webpack_require__(69);
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
            template: __webpack_require__(685),
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__["a" /* AnalyticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_analytics_service__["a" /* AnalyticsService */]) === 'function' && _g) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },

/***/ 509:
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
            template: __webpack_require__(686)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },

/***/ 510:
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

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(50);
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

/***/ 678:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [ngClass]=\"{'is-search': isFindField}\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" routerLink=\"\" (click)=\"updateTabMenu()\">Starbook</a>\n    <div class=\"search-block\" *ngIf=\"isFindField\">\n      <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"170px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca\" minLength=\"0\">\n        <template let-res>\n          <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n        </template>\n      </p-autoComplete>\n      <div class=\"spinner\" *ngIf=\"spinerView\">\n        <svg width='13px' height='13px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n        <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n      </div>\n      <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n        <div class=\"no-result\">Nessun risultato</div>\n      </div>\n    </div>\n    <div class=\"tagline\" *ngIf=\"!isFindField\">{{tagline}}</div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-label=\"Menu\" (click)=\"toggleMenu()\"></button>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth !== false\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link home\" routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"updateTabMenu(true)\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link orders\" routerLink=\"/orders\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">Ordini</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" routerLink=\"/profile/settings\" routerLinkActive=\"active\" (click)=\"toggleMenu()\">{{auth.profile.fullname}}</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav float-xs-right\" *ngIf=\"auth === false && browser\" [ngClass]=\"{'collapse':navbarState===false}\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getLoginPopup()\">Accedi</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link profile\" (click)=\"getRegistrationPopup()\">Registrati</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-dark navbar-tabs\">\n  <div class=\"container-starbook home-tab-bar\"\n       (swipeleft)=\"swipe($event.type, $event.deltaX)\"\n       (swiperight)=\"swipe($event.type, $event.deltaX)\">\n    <ul class=\"nav nav-pills\"\n        [ngStyle]=\"{'margin-left.px': delta}\">\n      <li class=\"nav-item\" *ngFor=\"let navServices of servicesCategoryList\">\n        <a class=\"nav-link\" [ngClass]=\"{'active':navServices._id===activeServiceCategory && activeServiceCategoryType !== false}\" (click)=\"tabNavigate(navServices._id)\"><i class=\"f{{navServices.icon_name}}\"></i> {{navServices.title}}</a>\n      </li>\n    </ul>\n  </div>\n</nav>-->\n\n<div class=\"container-starbook home-page\" *ngIf=\"isServicesView === true\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\" [ngClass]=\"{'services-block-big': serviceCategory.type === 'content'}\">\n            <span *ngIf=\"serviceCategory.type === 'content'\">\n              <img [src]=\"serviceCategory.image\" (load)=\"makeMasonry()\">\n              <div class=\"description\">{{ serviceCategory.description }}</div>\n            </span>\n            <span *ngIf=\"serviceCategory.type !== 'content'\">\n              <div class=\"header\">{{serviceCategory.title_1}}</div>\n              <div class=\"service content noselect\">\n                <span *ngFor=\"let item of serviceCategory.options\">\n                  <div class=\"item\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                    <i *ngIf=\"item.selected===true\" class=\"fa fa-check-square\"></i>\n                    <i *ngIf=\"item.selected===false\" class=\"fa fa-square-o\"></i>\n                    {{item.title_1}}\n                  </div>\n                  <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                    <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                    <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                  </div>\n                  </span>\n              </div>\n            </span>\n          </div>\n        </div>\n      </div>\n      <app-order [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\"></app-order>\n    </div>\n  </div>\n  <!-- <div class=\"footer-container\">\n    <div class=\"copyright\">Starbook © 2016 Tutti i diritti riservati</div>\n    <span> • </span><a routerLink=\"../../profile/privacy\">Privacy</a>\n    <span> • </span><a routerLink=\"../../profile/conditions\">Condizioni</a>\n    <span> • </span><a routerLink=\"../../profile/help\">Assistenza</a>\n  </div> -->\n</div>\n<app-landing *ngIf=\"isServicesView === false\"></app-landing>\n<app-loading *ngIf=\"isLoading\" class=\"services-loader\"></app-loading>\n"

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(50);
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

/***/ 680:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 sidebar\">\n  <form class=\"sidebar-container\" #orderForm=\"ngForm\" (window:resize)=\"onResize()\">\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <div class=\"sidebar-block\">\n      <h2>{{orderData.service}}</h2>\n\n      <!-- <div class=\"order-container\" *ngIf=\"!orderIsFull\">\n        <div class=\"order-list-empty\"><strong>Inserisci</strong> le informazioni necessari del appuntamento e invia la richiesta.</div>\n      </div> -->\n      <!-- <div class=\"order-container\" *ngIf=\"orderData.order_options.min_amount > orderData.totalPrice\">\n        <div class=\"order-list-empty\"><strong></strong>Prezzo minimo del'ordine €{{ orderData.order_options.min_amount / 100 }}</div>\n      </div> -->\n      <!-- <div class=\"order-container selected-orders\" [ngStyle]=\"{'max-height': maxOrderBlockSize}\">\n        <div class=\"category-group category\">\n          <span>{{ orderData.service }}</span>\n        </div>\n        <span  *ngFor=\"let orderService of orderData.services\">\n          <div class=\"category-group\">\n            <span *ngIf=\"orderService.price_type === 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}} {{orderService.option.symbol}}</i></span>\n            <span *ngIf=\"orderService.price_type !== 'BASE_AMOUNT_PER_INPUT'\">{{ orderService.name }}<i>{{orderService.option.name}}</i></span>\n          </div>\n        </span>\n      </div> -->\n      <!-- <div class=\"category-group total\">\n        <span>Totale <i>€{{ orderData.totalPrice / 100 }}</i></span>\n      </div> -->\n\n      <div class=\"add-order-form\">\n        <label>Quando vuoi svolgere questo lavoro?</label>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOraMobile\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" readonlyInput=\"readonlyInput\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <div class=\"form-group calendar-part\" [ngClass]=\"{isError: submitOrder && !Order.date}\" *ngIf=\"!isMobileCalendar\">\n          <div class=\"input-group date datepicker-block\">\n            <span class=\"fa fa-calendar-times-o calendar-box\"></span>\n            <p-calendar name=\"dataOra\" [(ngModel)]=\"Order.date\" id=\"dataOra\" class=\"form-control\" placeholder=\"Inserisci la data\" autocomplete=\"off\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onSelect)=\"selectDate()\">\n            </p-calendar>\n          </div>\n        </div>\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"browser\">\n          <div class=\"input-group date\" (clickOutside)=\"closeTimepicker()\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOra\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">\n              <span class=\"fa fa-clock-o\"></span>\n              {{time}}\n            </div>\n          </div>\n        </div> -->\n        <!-- <div class=\"form-group time-part\" [ngClass]=\"{isError: Order.time === '' && submitOrder}\" *ngIf=\"!browser\">\n          is not support if client != browser (clickOutside)=\"closeTimepicker()\"\n          <div class=\"input-group date\">\n            <span class=\"fa fa-clock-o\" (click)=\"toggleTimepicker()\"></span>\n            <input id=\"timeOraServer\" class=\"form-control\" type=\"text\" name=\"timeOra\" [(ngModel)]=\"Order.time\" value=\"{{Order.time}}\" placeholder=\"Ora\" autocomplete=\"off\" (click)=\"toggleTimepicker()\">\n            <div class=\"mobileArea\" (click)=\"toggleTimepicker()\"></div>\n          </div>\n          <div class=\"time-picker\" *ngIf=\"timePickerIsShow\">\n            <div class=\"time-elem\" *ngFor=\"let time of timePicker\" (click)=\"selectTime(time)\">{{time}}</div>\n          </div>\n        </div> -->\n        <label>Inserisci l’indirizzo</label>\n        <div class=\"form-group\" [ngClass]=\"{isError: !isAddressFull && submitOrder && isAddressDirty}\">\n          <div class=\"input-group date\">\n            <!-- <span class=\"fa fa-map-marker\"></span> -->\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Indirizzo\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"modifyAddress()\" (change)=\"modifyAddress()\">-->\n            <p-autoComplete id=\"luogo\" class=\"form-control text-small\" placeholder=\"Via Giuseppe Verdi 10 Milano\" [ngClass]=\"{'isError':isAddressFull === false && isAddressDirty === true}\" [(ngModel)]=\"Order.delivery_address\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"formattedAddress\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\">\n            </p-autoComplete>\n          </div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address === ''\">Inserisci l'indirizzo esatto</div>\n          <div class=\"error-block\" *ngIf=\"!isAddressFull && isAddressDirty && address !== '' && isAddressOne\">Indirizzo non trovato</div>\n          <!--<div class=\"error-block\" *ngIf=\"!isAddressOne && isAddressDirty && address !== ''\">Indirizzo non è specifico</div>-->\n        </div>\n        <label>Nota</label>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"nota\" name=\"applicant_description\" [(ngModel)]=\"Order.delivery_description\" placeholder=\"Lascia una nota...\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning btn-block\" (click)=\"showConfirmation()\">Anteprima del progetto</button>\n        </div>\n        <div class=\"footer-links\">\n          <p>\n            Starbook © 2017 •\n            <a routerLink=\"../../profile/privacy\">Privacy</a> •\n            <a routerLink=\"../../profile/conditions\">Condizioni</a> •\n            <a routerLink=\"../../profile/help\">Assistenza</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "<p>\n  facebook works!\n</p>\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "<div class=\"landing\">\n  <div class=\"header-page\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-header\">\n          <h1>Hai bisogno di lavorazioni interni?</h1>\n          <h6>È cosi semplice. Trova il servizio. Calcola il preventivo. Prenota.</h6>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 landing-search\">\n          <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Controsoffitto in cartongesso, Parete in cartongesso...\" minLength=\"0\">\n            <template let-res>\n              <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n            </template>\n          </p-autoComplete>\n          <div class=\"spinner\" *ngIf=\"spinerView\">\n            <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n              <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n              <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n              </circle>\n            </svg>\n          </div>\n          <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n            <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n          </div>\n          <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n            <div class=\"no-result\">Nessun risultato</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container landing-header-button\" *ngIf=\"testPage==='register_company' || testPage==='share_starbook'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12\">\n          <button class=\"btn btn-warning btn-block\" *ngIf=\"testPage==='register_company'\" (click)=\"callToActionRegisterCompany()\">Registra la tua impresa</button>\n          <button class=\"btn btn-success btn-block\" *ngIf=\"testPage==='share_starbook'\" (click)=\"callToActionShareToEarn()\">Condividi e guadagna</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"container\">\n      <h2>Lavorazioni più richiesti</h2>\n    </div>\n    <div class=\"col-xl-12 landing-services\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"swiper-container\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"services-card swiper-slide\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n            <div class=\"service-container\" [style.background-image]=\"'url(' + service.image_url + ')'\">\n              <div class=\"shadow\"></div>\n              <div class=\"header\">{{ service.title }}</div>\n              <div class=\"service-footer\">\n                A PARTIRE DA <span>€{{ service.order_options.min_amount / 100 }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"why-container\">\n    <div class=\"container\">\n      <h2>Perché usare Starbook?</h2>\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/star_quality.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Lavorazioni di alta qualità</h3>\n            <h4>I servizi su Starbook vengono eseguiti dalle migliori aziende. Usando un algoritmo di ricerca, Starbook trova l’azienda più vicina alla tua abitazione.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/market-price.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Prezzo garantito dal mercato</h3>\n            <h4>I prezzi su Starbook vengono calcolati da un algoritmo interno della piattaforma per rendere più equo e trasparente il mercato.</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 why-cell\">\n          <div class=\"text-center\">\n            <img src=\"../../../assets/images/timing.png\" class=\"rounded mx-auto d-block\" alt=\"...\">\n            <h3>Preventivo diretto</h3>\n            <h4>Una volta scelto il servizio, seleziona i form secondo le esigenze e calcola il preventivo direttamente dalla piattaforma.</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"partner-container\">\n    <div class=\"container\">\n      <h2>Le migliori aziende partner</h2>\n      <div class=\"list-brands-scrollable\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n        <img src=\"../../../assets/images/partner-example.png\">\n      </div>\n    </div>\n  </div> -->\n  <div class=\"pre-footer-container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sicurezza del sito</h4>\n          <div class=\"list-security\">\n            <img src=\"../../../assets/images/norton.png\">\n            <img src=\"../../../assets/images/secure.png\">\n            <img src=\"../../../assets/images/trust.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Sistemi di pagamento</h4>\n          <div class=\"list-payment-methods\">\n            <img src=\"../../../assets/images/mastercard.png\">\n            <img src=\"../../../assets/images/visa.png\">\n            <img src=\"../../../assets/images/americanexpress.png\">\n            <img src=\"../../../assets/images/stripe.png\">\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Contatti</h4>\n          <div class=\"list-contact-methods\">\n            <h4>Attivo 24/7</h4>\n            <h4>Cellulare: +39 327 24 15 028</h4>\n            <h4>Email: info@starbook.co</h4>\n            <h4>Via Luigi Pirandello 21, Busto Arsizio VA</h4>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n          <h4>Seguici su</h4>\n          <div class=\"list-socials\">\n            <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n            <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n            <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"container\">\n      <div class=\"copyright\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</div>\n      <span> • </span><a routerLink=\"profile/privacy\">Privacy</a>\n      <span> • </span><a routerLink=\"profile/conditions\">Condizioni</a>\n      <span> • </span><a routerLink=\"profile/help\">Assistenza</a>\n    </div>\n  </div>\n  <!-- <div class=\"container landing-top-header\">\n    <div class=\"row\">\n      <h1>Prenota il servizio di cui hai bisogno, nell'ora e il giorno che desideri</h1>\n    </div>\n  </div> -->\n  <!-- <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"header\">Starbook <span>services</span></div>\n          <p>Seleziona uno dei servizi su Starbook, imposta la data, ora, indirizzo e conferma l’ordine. Verrai notificato con un sms e una mail quando l’ordine e stato accettato da un professionista qualificato.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-1\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[1]}\"></div>\n          </div>\n          <div class=\"header\">Pulizie</div>\n          <div class=\"description\">Hai bisogno di un servizio di pulizie per la casa, l’ufficio o il negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('584fcfee9d6752423a61e79e')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(1, 'on')\" (mouseleave)=\"cardHover(1, 'off')\">Prenota Pulizie</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-2\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[2]}\"></div>\n          </div>\n          <div class=\"header\">Elettricista</div>\n          <div class=\"description\">Ti serve un elettricista qualificato e affidabile per lavori di casa, ufficio o negozio?</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582ee41df1bafa41cdbfb9d1')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(2, 'on')\" (mouseleave)=\"cardHover(2, 'off')\">Prenota Elettricista</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-6 col-sm-6 top-cards\">\n        <div class=\"top-card green-card\">\n          <div class=\"card-background\">\n            <div class=\"image image-3\"></div>\n            <div class=\"white-background\" [ngStyle]=\"{'opacity':cardStyles[3]}\"></div>\n          </div>\n          <div class=\"header\">Idraulico</div>\n          <div class=\"description\">Ti serve un idraulico professionista, puoi prenotarlo subito su Starbook senza impegno.</div>\n          <div class=\"landing-card-footer\">\n            <a (click)=\"navigate('582edfe4f1bafa41cdbfb9cb')\" class=\"btn btn-warning\" (mouseenter)=\"cardHover(3, 'on')\" (mouseleave)=\"cardHover(3, 'off')\">Prenota Idraulico</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"center-description\">\n        Rendi la tua vita più facile. Prenota il servizio di cui hai bisogno.\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Come funziona?</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"product-image\"></div>\n          </div>\n          <div class=\"header\">Seleziona i servizi</div>\n          <p>Ogni categoria ha una lista di servizi. Seleziona quelli di qui hai bisogno.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"order-image\"></div>\n          </div>\n          <div class=\"header\">Prenota un appuntamento</div>\n          <p>Inserisci i dati necessari del ordine e invia la richiesta.</p>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 how-to-block\">\n        <div class=\"how-to-content\">\n          <div class=\"top-part\">\n            <div class=\"landing-form\">\n              <a class=\"btn btn-warning\">Invia richiesta</a>\n              <div class=\"icons-block\">\n                <a><i class=\"fa fa-bell\"></i></a>\n                <a><i class=\"fa fa-envelope\"></i></a>\n                <a><i class=\"fa fa-commenting\"></i></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"header\">Ricevi la conferma e rilassati!</div>\n          <p>Un professionista si presenterà nella data e l’ora del appuntamento.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-12 landing-header\">\n        <h1>Le principali città</h1>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-1\">\n          <div class=\"background\"></div>\n          <span>Varese</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-2\">\n          <div class=\"background\"></div>\n          <span>Milano</span>\n        </a>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 banner\">\n        <a href=\"#\" class=\"banner-3\">\n          <div class=\"background\"></div>\n          <span>Torino</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-description\">\n        Starbook è la piattaforma che ti da la possibilità di prenotare i professionisti nell'ora e data che tu desideri senza dover chiamare e lasciare appuntamenti tramite telefono o email.\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "<div class=\"container-starbook without-tabs\">\n  <div class=\"row\">\n    <div class=\"left-navigate\">\n      <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.selected}\" (click)=\"renderPage(tab.name)\">\n        <span></span>\n        <div>{{tab.name}}</div>\n      </a>\n    </div>\n    <div class=\"col-xl-12 orders-container\">\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n      <div class=\"orders-error\" *ngIf=\"pageData.length === 0 && requestIsComplete\">{{emptyListTitle}}</div>\n      <div class=\"order-information\" *ngFor=\"let order of pageData\">\n        <div class=\"header\">\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'Richieste dei clienti'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\">\n            <span class=\"green\"></span> In attesa di conferma\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(order.date, dateFormating('now')) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Assegnato\n          </div>\n          <!--<div class=\"category-services-state\" *ngIf=\"order.status === 2 && selectTab === 'Richiesti'\">-->\n            <!--<span class=\"orange\"></span> In attesa di pagamento...-->\n          <!--</div>-->\n          <div class=\"category-services-state\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'I miei ordini'\">\n            <span class=\"orange\"></span> Servizio in corso...\n          </div>\n\n\n\n          <div class=\"category-services-state\" *ngIf=\"order.status === 0 && selectTab === 'Archivio'\">\n            <span class=\"black\"></span> Scaduto\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 98 && selectTab === 'Archivio'\">\n            <span class=\"orange\"></span> Completato\n          </div>\n          <div class=\"category-services-state\" *ngIf=\"order.status === 99 && selectTab === 'Archivio'\">\n            <span class=\"red\"></span> Annullato\n          </div>\n          <div class=\"category-name\">\n            {{ categories[order.category_type] }}\n          </div>\n          <div class=\"order-date\">\n            {{ dateFormating(order.date) }}\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"row\">\n            <div class=\"order-row products col-xl-4\">\n              <!-- <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service' && product.amount > 0\">€{{ product.amount / 100 }}</i></div>\n              <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n              <div class=\"item\" *ngFor=\"let product of order.details\" [ngClass]=\"{'service':product.type === 'service'}\">{{ product.title }} <i *ngIf=\"product.type !== 'service'\">{{ product.description }}</i></div>\n              <!-- <div class=\"item total\">Totale <i>€{{ order.payment.amount / 100 }}</i></div> -->\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Richieste dei clienti'\">\n              <div *ngIf=\"order.status===0\">\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cliente:</div>\n                <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Cellulare:</div>\n                <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Email:</div>\n                <div class=\"field-value\">{{ order.customer.email }}</div>\n              </div>\n\n              <!-- <div *ngIf=\"order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div> -->\n\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'I miei ordini'\">\n              <div *ngIf=\"!order.merchant || order.merchant === null || order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>In attesa di conferma...</strong></div>\n                </div>\n              </div>\n              <div *ngIf=\"order.merchant && order.merchant !== null && order.status===1\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"client-info col-xl-4\" *ngIf=\"selectTab === 'Archivio'\">\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id !== order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"(order.customer || order.customer !== null) && order.status===98 && authData._id === order.customer_id\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Professionista:</div>\n                  <div class=\"field-value\"><strong>{{ order.merchant.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.merchant.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.merchant.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.customer && order.customer !== null && (!order.merchant || order.merchant === null) && order.status===0\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div *ngIf=\"order.status===99\">\n                <div class=\"item\">\n                  <div class=\"field-name\">Cliente:</div>\n                  <div class=\"field-value\"><strong>{{ order.customer.profile.fullname }}</strong></div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Cellulare:</div>\n                  <div class=\"field-value\">{{ order.customer.phone_number | phone }}</div>\n                </div>\n                <div class=\"item\">\n                  <div class=\"field-name\">Email:</div>\n                  <div class=\"field-value\">{{ order.customer.email }}</div>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"field-name\">Indirizzo:</div>\n                <div class=\"field-value\">\n                  {{ order.address.street }}, {{ order.address.street_number }}<br>\n                  {{ order.address.city }}, {{ order.address.postal_code }}<br>\n                  {{ order.address.province }}, {{ order.address.country }}\n                </div>\n              </div>\n            </div>\n\n            <div class=\"order-row description col-xl-4\">\n              {{ order.description }}\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <div class=\"code\">\n            <span>CODICE:</span>\n            {{ order._id }}\n          </div>\n          <div class=\"buttons\">\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 1 && dateCompare(dateFormating('now'), order.date) && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"completaOrder(order._id)\">Completa servizio</button>\n            <div class=\"price-block\"><div class=\"content-price\">Preventivo: <span>{{ order.payment.amount / 100 }}€</span></div></div>\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 2 && selectTab === 'Richieste dei clienti'\" (click)=\"editOrder(order._id, order.payment.amount)\">Modifica</button>-->\n            <button class=\"btn btn-primary\" *ngIf=\"order.status === 0 && selectTab === 'Richieste dei clienti' && isVendor === true\" (click)=\"confirmOrder(order._id)\">Conferma servizio</button>\n\n            <!--<button class=\"btn btn-primary\" *ngIf=\"order.status === 99 && selectTab === 'I miei ordini'\" (click)=\"reactivateOrder(order._id)\">Reattiva servizio</button>-->\n            <!--<button class=\"btn btn-secondary\" *ngIf=\"order.status === 0 && selectTab === 'I miei ordini'\" (click)=\"cancelOrder(order._id)\">Annulla servizio</button>-->\n            <!--<div class=\"price-block\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n            <!--<button class=\"btn btn-warning\" *ngIf=\"order.status === 2 && selectTab === 'I miei ordini'\" (click)=\"continueOrder(order._id, order.payment.amount)\"><i class=\"fa fa-lock\"></i> Procedi</button>-->\n            <!--<div class=\"price-block archive\" *ngIf=\"order.status === 3 && selectTab === 'Archivio'\"><div class=\"content-price\">Importo: <span>{{ order.payment.amount / 100 }}€</span></div></div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = "<!-- <div class=\"loader\" *ngIf=\"isLoading\"></div> -->\n<div class=\"profile-page\" [ngClass]=\"{whiteBg: selectTab === 'conditions' || selectTab === 'privacy' || selectTab === 'help'}\">\n  <div class=\"container-starbook without-tabs\">\n    <div class=\"row\">\n      <div class=\"left-navigate\" (swipeleft)=\"swipe($event.type, $event.deltaX)\" (swiperight)=\"swipe($event.type, $event.deltaX)\">\n        <div [ngStyle]=\"{'margin-left.px': delta}\">\n          <a *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.url === selectTab}\" [routerLink]=\"['/profile', tab.url]\">\n            <span></span>\n            <div>{{tab.name}}</div>\n          </a>\n          <a *ngIf=\"isAuthenticated === true\" (click)=\"logout()\"><span></span><div>Esci</div></a>\n        </div>\n      </div>\n      <div class=\"profile-settings\" *ngIf=\"selectTab === 'settings'\">\n        <div class=\"header\">Informazioni del account</div>\n        <form #changProfile=\"ngForm\">\n          <app-loading *ngIf=\"isLoading\"></app-loading>\n          <label>NOME COMPLETO</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"name\" placeholder=\"Nome Cognome\" #fullname=\"ngModel\" [(ngModel)]=\"userData.fullname\" required>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<label>Cognome</label>-->\n            <!--<input class=\"form-control\" name=\"lastname\" #fullname=\"ngModel\" [(ngModel)]=\"userData.lastname\" required disabled>-->\n          <!--</div>-->\n          <!--<div class=\"form-group\">-->\n            <!--<label>Nome Azienda</label>-->\n            <!--<input class=\"form-control\" name=\"patronymic\" #fullname=\"ngModel\" [(ngModel)]=\"userData.patronymic\" required disabled>-->\n          <!--</div>-->\n          <label>CELLULARE</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"phone\" placeholder=\"Numero\" #phone_number=\"ngModel\" [(ngModel)]=\"userData.phone_number\">\n          </div>\n          <label>EMAIL</label>\n          <div class=\"form-group\">\n            <div class=\"email-field\">\n              <input class=\"form-control\" name=\"email\" placeholder=\"Indirizzo email\" value=\"\" #email=\"ngModel\" [(ngModel)]=\"userData.email\" required disabled>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\" disabled>Modifica password</button>\n            </div>\n          </div>\n          <!--<div class=\"form-group password-block\">-->\n            <!--<label>Password</label>-->\n            <!--<div class=\"password-container\">-->\n              <!--<div class=\"password\">-->\n                <!--<span>•••••••••••</span>-->\n              <!--</div>-->\n              <!--<div class=\"change-password\">-->\n                <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"getPopup('changePassword')\">Modifica password</button>-->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n          <!-- <div class=\"header second\">Indirizzo di fatturazione</div> -->\n          <!-- <label>Indirizzo del domicilio</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"address1\" #street=\"ngModel\" [(ngModel)]=\"userData.street\" placeholder=\"Via Verdi 13\">\n          </div> -->\n          <!-- <label>Città e CAP</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"address2\" #city=\"ngModel\" [(ngModel)]=\"userData.city\" placeholder=\"Città\">\n            <input class=\"form-control second\" name=\"number2\" #postal_code=\"ngModel\" [(ngModel)]=\"userData.postal_code\" placeholder=\"CAP\">\n          </div> -->\n          <!-- <label>Provincia e Nazione</label>\n          <div class=\"form-group double-input\">\n            <input class=\"form-control first\" name=\"city\" #province=\"ngModel\" [(ngModel)]=\"userData.province\" placeholder=\"Provincia\">\n            <input class=\"form-control second\" name=\"country\" #country=\"ngModel\" [(ngModel)]=\"userData.country\" placeholder=\"Nazione\">\n          </div> -->\n          <!-- <label>Partita IVA</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"piva\" placeholder=\"P.IVA\">\n          </div> -->\n          <!-- <label>Codice Fiscale</label>\n          <div class=\"form-group\">\n            <input class=\"form-control\" name=\"codice\" placeholder=\"Codice Fiscale\">\n          </div> -->\n          <div class=\"profile-information\" *ngIf=\"formError\">\n            <strong *ngIf=\"formError.title.length > 0\">{{formError.title}}</strong> {{formError.message}}\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateProfile()\">Aggiorna Informazioni</button>\n          </div>\n          <!--<div class=\"form-group\">-->\n            <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"logout()\"><span class=\"fa fa-sign-out\"></span> Log out</button>-->\n          <!--</div>-->\n        </form>\n      </div>\n      <div class=\"cards-page\" *ngIf=\"selectTab === 'payment'\">\n        <app-loading *ngIf=\"isLoading\"></app-loading>\n        <div class=\"card-block\" *ngFor=\"let card of cards\">\n          <div class=\"container\">\n            <div class=\"header\">\n              <div class=\"card-logo {{ formatCssClass(card.brand) }}\"><span>**** {{ card.last4 }}</span></div>\n              <div class=\"isDefault\" *ngIf=\"defaultCard === card.id\">Default</div>\n              <div class=\"buttons-block\">\n                <a class=\"btn btn-primary\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n                <a class=\"btn btn-primary\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n                <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n              </div>\n            </div>\n            <div class=\"content\">\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Nome:</span>\n                  {{ card.name }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Numero:</span>\n                  **** {{ card.last4 }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Scadenza:</span>\n                  {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n                </div>\n                <div class=\"information-block\">\n                  <span>Tipo:</span>\n                  {{ card.brand }} {{ card.funding }} {{ card.object }}\n                </div>\n              </div>\n              <div class=\"card-information\">\n                <div class=\"information-block\">\n                  <span>Indirizzo:</span>\n                  {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                  {{ card.address_state }} {{ card.address_city }} <br>\n                  {{ card.address_zip }} {{ card.address_country }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <a class=\"new-card\" (click)=\"addNewCard()\">\n            Aggiungi un metodo di pagamento\n          </a>\n        </div>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'conditions'\">\n        <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n        <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n        <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n        <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n        <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n        <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n        <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n        <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n        <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n        <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n        <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n        <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n        <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n        <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n        <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n        <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n        <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n        <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n        <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n        <p><strong>5. SERVIZIO CLIENTI</strong></p>\n        <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n        <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n        <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n        <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n        <p><strong>6. LICENZA D’USO</strong></p>\n        <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n        <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n        <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n        <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n        <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n        <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n        <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n        <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'privacy'\">\n        <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n        <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n        <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n        <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n        2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n        2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n        2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n        2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n        2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n      </div>\n      <div class=\"content-page\" *ngIf=\"selectTab === 'help'\">\n        <p>Hai bisogno di aiuto? <br>\n        Scrivi una mail harald.bregu@starbook.co e ti risponderemo nel più breve tempo possibile.</p>\n        <p>Vuoi entrare a far parte di STARBOOK? Aumenta il numero dei tuoi clienti paganti e risparmia sui costi del trasporto.</p>\n        <p>Per richiedere informazioni:</p>\n        <p>Cellulare: +39 3272415028<br>\n        Email: harald.bregu@starbook.co</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"dark-screen\" *ngIf=\"activePopup !== ''\" (click)=\"closePopup()\"></div>\n<!-- Change password -->\n<div class=\"popup\" *ngIf=\"activePopup === 'changePassword'\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Cambia password</div>\n  <form class=\"login-form\" #changePasswordForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.currentPassword}\">\n      <label for=\"currentPassword\">La tua password</label>\n      <input id=\"currentPassword\" class=\"form-control\" type=\"password\" name=\"currentPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.currentPassword\" #currentPassword=\"ngModel\">\n      <span class=\"error\">La tua password attuale è richiesta</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"newPassword\">Nuova password</label>\n      <input id=\"newPassword\" class=\"form-control\" type=\"password\" name=\"newPassword\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.newPassword\" #newPassword=\"ngModel\">\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': changePasswordError.passwordConfirm}\">\n      <label for=\"passwordConfirm\">Ripeti la nuova password</label>\n      <input id=\"passwordConfirm\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"changePasswordData.passwordConfirm\" #passwordConfirm=\"ngModel\" (keyup)=\"checkPassword(newPassword.value, passwordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" [disabled]=\"!changePasswordForm.form.valid\" (click)=\"changePassword(currentPassword.value, newPassword.value, passwordConfirm.value)\">Cambia password</button>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n<!-- Login popup -->\n<div class=\"popup\" [@loginPopupState]=\"loginPopupState\">\n  <!--<div class=\"alert-block\" *ngIf=\"formError\">-->\n    <!--<div class=\"alert-icn\"></div>-->\n    <!--<div class=\"alert-container\">-->\n      <!--<div class=\"header\">Si è verificato un errore!</div>-->\n      <!--<p>{{formError.message}}</p>-->\n    <!--</div>-->\n  <!--</div>-->\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-container\">\n      <p><span>Errore!</span> {{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Accedi</div>\n  <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n      <label for=\"email\">Indirizzo email</label>\n      <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n      <label for=\"password\">Password <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a></label>\n      <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n      <span class=\"error\">Inserisci la tua password</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n    </div>\n    <!--<div class=\"form-description\">-->\n      <!--<span>Sei nuovo su Starbook?</span>-->\n    <!--</div>-->\n    <div class=\"form-group\">\n      <a class=\"btn btn-secondary\" (click)=\"getPopup('registration')\">Crea il tuo account Starbook</a>\n    </div>\n    <div class=\"form-description\">\n      <span>o</span>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-primary facebook\" (click)=\"facebookLogin()\">\n        <i></i>\n        Continua con Facebook\n      </a>\n    </div>\n  </form>\n</div>\n\n<!-- Registration popup -->\n<div class=\"popup\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Nuovo account</div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.name}\">\n      <label for=\"regName\">Nome completo</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"registrationData.name\" #regName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationName', regName.value)\">\n      <span class=\"error\">Inserisci il nome completo</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.password}\">\n      <label for=\"regPasswordConfirm\">Di nuovo la password</label>\n      <input id=\"regPasswordConfirm\" class=\"form-control\" type=\"password\" name=\"passwordConfirm\" placeholder=\"\" required [(ngModel)]=\"registrationData.passwordConfirm\" #regPasswordConfirm=\"ngModel\" (keyup)=\"checkPassword(regPassword.value, regPasswordConfirm.value)\">\n      <span class=\"error\">Le password non corrispondono</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regName.value, regPhone.value, regEmail.value, regPassword.value, regPasswordConfirm.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-notice\">Accedendo dichiari di aver letto e accetti le <a (click)=\"closePopup()\" routerLink=\"profile/conditions\">condizioni generali</a> e <a (click)=\"closePopup()\" routerLink=\"profile/privacy\">l’informativa sulla privacy</a></div>\n  <div class=\"form-description\">\n    <span>o</span>\n  </div>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-primary facebook\" (click)=\"getPopup('registration')\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Recovery popup -->\n<div class=\"popup\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">Recupera password</div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n    <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n      </circle>\n    </svg>\n  </div>\n  <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n  <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">{{ confirmPopupData.title }}</div>\n  <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n    <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n    <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n    <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n        <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n        <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n        <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n        <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n      </div>\n    </div>\n    <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n      <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n      <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n      <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n      <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n      <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\"><i class=\"fa fa-lock\"></i> Procedi con l’acquisto</button>\n      <span *ngIf=\"confirmPopupData.button === 'Procedi con l’acquisto'\" class=\"confirm-button-notice\">Verrai notificato con un sms e mail ad acquisto effettuato</span>\n      <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n    <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n    <p>{{ confirmFinishPopupData.text }}</p>\n    <div class=\"form-group\">\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"finish-message\">\n    <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n    <div class=\"header\">{{ finishPopupData.title }}</div>\n    <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n  </div>\n</div>\n\n\n<!-- Add Card popup -->\n<div class=\"popup\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"header\">Metodo di pagamento</div>\n  <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"cards-logo\">\n      <div class=\"card-item visa\"></div>\n      <div class=\"card-item mastercard\"></div>\n      <div class=\"card-item amex\"></div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n      <label for=\"addCardNumber\">Numero carta</label>\n      <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n      <label for=\"editCardNumber\">Numero carta</label>\n      <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n      <span class=\"error\">Please enter card number</span>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n        <label for=\"addExpDate\">Scadenza</label>\n        <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n        <span class=\"error\">Expiration date isn't correct</span>\n      </div>\n      <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCVV\">CVV</label>\n        <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n      <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCVV\">CVV</label>\n        <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n        <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n        <span class=\"error\">CVV isn't correct</span>\n      </div>\n\n    </div>\n    <div class=\"subheader\">\n      Informazioni facoltativi\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addCardName\">Nome intestatario</label>\n      <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardVia\">Via</label>\n        <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardNr\">Nr</label>\n        <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first-big\">\n        <label for=\"addCardCitta\">Città</label>\n        <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n      </div>\n      <div class=\"part-group last-small\">\n        <label for=\"addCardCap\">CAP</label>\n        <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"part-group first\">\n        <label for=\"addCardProvincia\">Provincia</label>\n        <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n      </div>\n      <div class=\"part-group last\">\n        <label for=\"addCardPease\">Paese</label>\n        <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n      <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n    </div>\n  </form>\n</div>\n\n\n<!-- Confirm popup with action -->\n<div class=\"popup\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n  <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n    <p>\n      {{ confirmActionPopupData.text }}\n      <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n    </p>\n    <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n        <label>{{ action.label }}</label>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n          <span class=\"input-group-addon\">.00</span>\n          <span class=\"input-group-addon euro\">€</span>\n        </div>\n        <p class=\"price-description\">{{ action.description }}</p>\n      </div>\n      <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n        {{ action.information }}\n      </div>\n    </div>\n    <div class=\"form-group buttons-block\">\n      <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n        <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n        <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n        <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(14);
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

/***/ 706:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ }

},[707]);
//# sourceMappingURL=client.bundle.map